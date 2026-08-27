import React from "react";
import FormWizard, {
  type FormWizardMethods,
  type FormWizardSchema,
  type WizardData,
} from "react-form-wizard-component";
import "react-form-wizard-component/styles.css";
import s from "./examples.module.css";

const ROLES = [
  { id: "engineer", title: "Engineer", meta: "I build the product" },
  { id: "designer", title: "Designer", meta: "I design the product" },
  { id: "product", title: "Product", meta: "I decide what we build" },
];

const TEAM_SIZES = [
  { id: "solo", title: "Just me", meta: "A personal project" },
  { id: "small", title: "2–10 people", meta: "A small team" },
  { id: "large", title: "11+ people", meta: "A larger organisation" },
];

const GOALS = [
  "Ship faster",
  "Improve accessibility",
  "Reduce form drop-off",
  "Standardise our components",
];

const STORAGE_KEY = "rfw-docs-onboarding";

function Choices({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: { id: string; title: string; meta: string }[];
  value: unknown;
  onChange: (id: string) => void;
}) {
  return (
    <div className={s.choices} role="radiogroup" aria-label={name}>
      {options.map((option) => {
        const selected = value === option.id;
        return (
          <label
            key={option.id}
            className={selected ? `${s.choice} ${s.choiceSelected}` : s.choice}
          >
            <input
              type="radio"
              name={name}
              checked={selected}
              onChange={() => onChange(option.id)}
            />
            <span className={s.choiceBody}>
              <span className={s.choiceTitle}>{option.title}</span>
              <span className={s.choiceMeta}>{option.meta}</span>
            </span>
          </label>
        );
      })}
    </div>
  );
}

export default function OnboardingExample() {
  const wizard = React.useRef<FormWizardMethods>(null);
  const [finished, setFinished] = React.useState(false);
  const set = (patch: WizardData) => wizard.current?.updateData(patch);

  const toggleGoal = (data: WizardData, goal: string) => {
    const goals = Array.isArray(data.goals) ? (data.goals as string[]) : [];
    set({
      goals: goals.includes(goal)
        ? goals.filter((g) => g !== goal)
        : [...goals, goal],
    });
  };

  const schema: FormWizardSchema = {
    initialData: { role: "", teamSize: "", goals: [], invites: "" },
    steps: [
      {
        id: "role",
        title: "Your role",
        icon: "ti-user",
        content: ({ data }) => (
          <>
            <h4 className={s.stepHeading}>What best describes you?</h4>
            <p className={s.stepIntro}>
              We use this to pick sensible defaults — nothing is locked in.
            </p>
            <Choices
              name="role"
              options={ROLES}
              value={data.role}
              onChange={(role) => set({ role })}
            />
          </>
        ),
        validate: ({ data }) => (data.role ? true : "Pick one to continue"),
      },

      {
        id: "team",
        title: "Team",
        icon: "ti-user",
        content: ({ data }) => (
          <>
            <h4 className={s.stepHeading}>Who are you working with?</h4>
            <p className={s.stepIntro}>
              Choosing “Just me” skips the invite step entirely.
            </p>
            <Choices
              name="teamSize"
              options={TEAM_SIZES}
              value={data.teamSize}
              onChange={(teamSize) => set({ teamSize })}
            />
          </>
        ),
        validate: ({ data }) => (data.teamSize ? true : "Choose a team size"),
      },

      {
        // A solo user never sees this step: the progress bar and step count
        // adjust on their own.
        id: "invite",
        title: "Invite",
        icon: "ti-email",
        condition: ({ data }) => data.teamSize !== "solo" && data.teamSize !== "",
        content: ({ data }) => (
          <>
            <h4 className={s.stepHeading}>Invite your team</h4>
            <p className={s.stepIntro}>Optional — you can always do this later.</p>
            <div className={s.field}>
              <label className={s.label} htmlFor="ob-invites">
                Email addresses
              </label>
              <textarea
                id="ob-invites"
                className={s.textarea}
                rows={3}
                placeholder="ada@example.com, grace@example.com"
                value={String(data.invites ?? "")}
                onChange={(e) => set({ invites: e.target.value })}
              />
              <span className={s.hint}>Separate addresses with commas.</span>
            </div>
          </>
        ),
      },

      {
        id: "goals",
        title: "Goals",
        icon: "ti-check",
        content: ({ data }) => {
          const goals = Array.isArray(data.goals) ? (data.goals as string[]) : [];
          return (
            <>
              <h4 className={s.stepHeading}>What are you hoping to improve?</h4>
              <p className={s.stepIntro}>Pick at least one.</p>
              <div className={s.choices}>
                {GOALS.map((goal) => {
                  const selected = goals.includes(goal);
                  return (
                    <label
                      key={goal}
                      className={
                        selected ? `${s.choice} ${s.choiceSelected}` : s.choice
                      }
                    >
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => toggleGoal(data, goal)}
                      />
                      <span className={s.choiceBody}>
                        <span className={s.choiceTitle}>{goal}</span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </>
          );
        },
        validate: ({ data }) =>
          Array.isArray(data.goals) && data.goals.length > 0
            ? true
            : "Choose at least one goal",
      },

      {
        id: "review",
        title: "Done",
        icon: "ti-flag",
        content: ({ data }) => {
          const goals = Array.isArray(data.goals) ? (data.goals as string[]) : [];
          const role = ROLES.find((r) => r.id === data.role)?.title ?? "—";
          const team = TEAM_SIZES.find((t) => t.id === data.teamSize)?.title ?? "—";
          return (
            <>
              <h4 className={s.stepHeading}>All set</h4>
              <p className={s.stepIntro}>Here is what we picked up.</p>
              <div className={s.review}>
                <span className={s.reviewKey}>Role</span>
                <span className={s.reviewValue}>{role}</span>
                <span className={s.reviewKey}>Team</span>
                <span className={s.reviewValue}>{team}</span>
                <span className={s.reviewKey}>Goals</span>
                <span className={s.reviewValue}>{goals.join(", ") || "—"}</span>
                {data.teamSize !== "solo" && (
                  <>
                    <span className={s.reviewKey}>Invites</span>
                    <span className={s.reviewValue}>
                      {String(data.invites || "none yet")}
                    </span>
                  </>
                )}
              </div>
            </>
          );
        },
      },
    ],
  };

  if (finished) {
    return (
      <div className={s.done}>
        <div className={s.doneMark} aria-hidden="true">
          ✓
        </div>
        <h4>Onboarding complete</h4>
        <p className={s.stepIntro}>
          The saved answers were cleared by <code>reset()</code>.
        </p>
        <button
          className="button button--secondary button--sm"
          onClick={() => setFinished(false)}
        >
          Run the demo again
        </button>
      </div>
    );
  }

  return (
    <>
      <FormWizard
        ref={wizard}
        title="Welcome aboard"
        subtitle="Four quick questions"
        schema={schema}
        color="#0e6f70"
        // Answers survive a refresh; the active step is mirrored into the URL.
        persist={{ key: STORAGE_KEY, storage: "session" }}
        syncToUrl={{ param: "onboarding-step" }}
        ariaLabel="Onboarding"
        finishButtonText="Finish setup"
        onComplete={() => {
          // reset() returns to the first step and clears the saved payload.
          wizard.current?.reset();
          setFinished(true);
        }}
      />

      <div className={s.resetBar}>
        <span>
          Answers are saved to <code>sessionStorage</code> and the step to{" "}
          <code>?onboarding-step</code>. <strong>Reload the page</strong> — you
          come back where you left off.
        </span>
        <button
          className="button button--secondary button--sm"
          onClick={() => wizard.current?.reset()}
        >
          Clear saved answers
        </button>
      </div>
    </>
  );
}
