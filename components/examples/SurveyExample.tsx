"use client";

import React from "react";
import {
  useWizardCursor,
  useWizardData,
  type WizardData,
} from "react-form-wizard-component";
// Headless: no markup from the library, so no stylesheet import either.
import s from "./examples.module.css";

type Question = {
  id: string;
  prompt: string;
  help?: string;
  options: string[];
  showIf?: (answers: WizardData) => boolean;
};

/**
 * The questionnaire is data, not code — which is the case for branching
 * surveys backed by a CMS. That is what the headless API is for.
 */
const QUESTIONS: Question[] = [
  {
    id: "builds",
    prompt: "Do you build forms in React?",
    options: ["Yes, regularly", "Occasionally", "No"],
  },
  {
    id: "library",
    prompt: "What do you reach for today?",
    help: "Only asked if you build forms in React.",
    options: ["react-hook-form", "Formik", "Hand-rolled state", "Something else"],
    showIf: (a) => a.builds !== "No" && a.builds !== undefined,
  },
  {
    id: "pain",
    prompt: "What is the most annoying part of multi-step forms?",
    options: [
      "Validating one step at a time",
      "Keeping state across steps",
      "Making it accessible",
      "Styling it",
    ],
    showIf: (a) => a.builds !== "No" && a.builds !== undefined,
  },
  {
    id: "why-not",
    prompt: "What do you build instead?",
    help: "Only asked if you do not build forms in React.",
    options: ["Vue", "Svelte", "Angular", "Mostly backend"],
    showIf: (a) => a.builds === "No",
  },
  {
    id: "contact",
    prompt: "Happy to be contacted about the results?",
    options: ["Yes", "No thanks"],
  },
];

const STORAGE_KEY = "rfw-docs-survey";

export default function SurveyExample() {
  // Answers first — the visible question list is derived from them.
  const answers = useWizardData({ persist: { key: STORAGE_KEY } });

  const visible = React.useMemo(
    () => QUESTIONS.filter((q) => !q.showIf || q.showIf(answers.data)),
    [answers.data]
  );

  // Then the cursor, sized by whichever questions currently apply. Branches
  // appearing or disappearing resize it automatically.
  const cursor = useWizardCursor({ stepIds: visible.map((q) => q.id) });

  const [sent, setSent] = React.useState(false);
  const question = visible[cursor.currentStep];
  const answered = question ? answers.data[question.id] !== undefined : false;

  if (sent) {
    return (
      <div className={s.surveyShell}>
        <div className={s.done}>
          <div className={s.doneMark} aria-hidden="true">
            ✓
          </div>
          <h4>Thanks for taking part</h4>
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => {
              answers.clearPersisted();
              answers.setData({});
              cursor.reset();
              setSent(false);
            }}
          >
            Run the demo again
          </button>
        </div>
      </div>
    );
  }

  if (!question) {
    return (
      <div className={s.surveyShell}>
        <p>No questions apply right now.</p>
      </div>
    );
  }

  return (
    <div className={s.surveyShell}>
      <div className={s.progressTrack} aria-hidden="true">
        {visible.map((q, i) => (
          <span
            key={q.id}
            className={
              i <= cursor.currentStep
                ? `${s.progressSeg} ${s.progressSegOn}`
                : s.progressSeg
            }
          />
        ))}
      </div>

      <p className={s.meta}>
        Question {cursor.currentStep + 1} of {cursor.totalSteps}
        {" · "}the list resizes as you answer
      </p>

      <h4 className={s.stepHeading} id="survey-q">
        {question.prompt}
      </h4>
      {question.help && <p className={s.stepIntro}>{question.help}</p>}

      <div className={s.choices} role="radiogroup" aria-labelledby="survey-q">
        {question.options.map((option) => {
          const selected = answers.data[question.id] === option;
          return (
            <label
              key={option}
              className={selected ? `${s.choice} ${s.choiceSelected}` : s.choice}
            >
              <input
                type="radio"
                name={question.id}
                checked={selected}
                onChange={() => answers.updateData({ [question.id]: option })}
              />
              <span className={s.choiceBody}>
                <span className={s.choiceTitle}>{option}</span>
              </span>
            </label>
          );
        })}
      </div>

      <div className={s.actions}>
        <button
          className="btn btn-ghost"
          onClick={cursor.previous}
          disabled={cursor.isFirstStep}
        >
          Back
        </button>

        {cursor.isLastStep ? (
          <button
            className="btn btn-primary"
            disabled={!answered}
            onClick={() => {
              answers.clearPersisted();
              setSent(true);
            }}
          >
            Submit
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={cursor.next}
            disabled={!answered}
          >
            Next
          </button>
        )}
      </div>

      <div className={s.resetBar}>
        <span>Answers persist across a reload.</span>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => {
            answers.clearPersisted();
            answers.setData({});
            cursor.reset();
          }}
        >
          Start over
        </button>
      </div>

      <details style={{ marginTop: "1rem" }}>
        <summary className={s.meta}>Current answers</summary>
        <pre className={s.log}>{JSON.stringify(answers.data, null, 2)}</pre>
      </details>
    </div>
  );
}
