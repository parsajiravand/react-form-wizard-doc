import React from "react";
import FormWizard, {
  type FormWizardMethods,
  type FormWizardSchema,
  type WizardData,
} from "react-form-wizard-component";
import "react-form-wizard-component/styles.css";
import s from "./examples.module.css";

type UploadStatus = "idle" | "uploading" | "verified" | "rejected";

/** Stands in for a real upload + virus/format check. */
const fakeUpload = (file: File) =>
  new Promise<{ ok: boolean; reason?: string }>((resolve) => {
    setTimeout(() => {
      if (file.size > 2 * 1024 * 1024) {
        resolve({ ok: false, reason: "File is larger than 2 MB" });
      } else if (!/\.(pdf|docx?)$/i.test(file.name)) {
        resolve({ ok: false, reason: "Upload a PDF or Word document" });
      } else {
        resolve({ ok: true });
      }
    }, 1200);
  });

export default function JobApplicationExample() {
  const wizard = React.useRef<FormWizardMethods>(null);
  const [status, setStatus] = React.useState<UploadStatus>("idle");
  const [submitted, setSubmitted] = React.useState(false);

  const set = (patch: WizardData) => wizard.current?.updateData(patch);
  const str = (data: WizardData, key: string) => String(data[key] ?? "");

  async function handleFile(file: File) {
    setStatus("uploading");
    // Clear any previous verdict while the check runs.
    set({ cvVerified: false, cvName: file.name, cvReason: "" });

    const { ok, reason } = await fakeUpload(file);

    setStatus(ok ? "verified" : "rejected");
    // The validator reads these, so the step unlocks itself.
    set({ cvVerified: ok, cvReason: reason ?? "" });
  }

  const schema: FormWizardSchema = {
    initialData: {
      fullName: "",
      email: "",
      role: "",
      cvName: "",
      cvVerified: false,
      cvReason: "",
      notice: "",
      cover: "",
    },
    steps: [
      {
        id: "about",
        title: "About you",
        icon: "ti-user",
        content: ({ data }) => (
          <>
            <h4 className={s.stepHeading}>About you</h4>
            <p className={s.stepIntro}>How we should address you, and where to reply.</p>

            <div className={s.field}>
              <label className={s.label} htmlFor="ja-name">
                Full name
              </label>
              <input
                id="ja-name"
                className={s.input}
                autoComplete="name"
                placeholder="Ada Lovelace"
                value={str(data, "fullName")}
                onChange={(e) => set({ fullName: e.target.value })}
              />
            </div>

            <div className={s.field}>
              <label className={s.label} htmlFor="ja-email">
                Email
              </label>
              <input
                id="ja-email"
                type="email"
                className={s.input}
                autoComplete="email"
                placeholder="ada@example.com"
                value={str(data, "email")}
                onChange={(e) => set({ email: e.target.value })}
              />
            </div>

            <div className={s.field}>
              <label className={s.label} htmlFor="ja-role">
                Role you are applying for
              </label>
              <select
                id="ja-role"
                className={s.select}
                value={str(data, "role")}
                onChange={(e) => set({ role: e.target.value })}
              >
                <option value="">Choose a role…</option>
                <option value="frontend">Frontend Engineer</option>
                <option value="design">Product Designer</option>
                <option value="pm">Product Manager</option>
              </select>
            </div>
          </>
        ),
        validate: ({ data }) => {
          if (!String(data.fullName ?? "").trim()) return "Your name is required";
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email ?? "")))
            return "Enter a valid email address";
          if (!data.role) return "Choose the role you are applying for";
          return true;
        },
      },

      {
        id: "cv",
        title: "CV",
        icon: "ti-file",
        content: ({ data }) => (
          <>
            <h4 className={s.stepHeading}>Upload your CV</h4>
            <p className={s.stepIntro}>
              PDF or Word, up to 2 MB. Try a large or wrongly-typed file to see
              the rejection path.
            </p>

            {status === "uploading" && (
              <p className={`${s.status} ${s.statusPending}`} role="status">
                <span aria-hidden="true">⏳</span> Checking {str(data, "cvName")}…
              </p>
            )}
            {status === "verified" && (
              <p className={`${s.status} ${s.statusOk}`} role="status">
                <span aria-hidden="true">✓</span> {str(data, "cvName")} accepted
              </p>
            )}
            {status === "rejected" && (
              <p className={`${s.status} ${s.statusBad}`} role="alert">
                <span aria-hidden="true">✕</span>{" "}
                {str(data, "cvReason") || "That file was rejected"}
              </p>
            )}

            <div className={s.field}>
              <label className={s.label} htmlFor="ja-cv">
                CV file
              </label>
              <input
                id="ja-cv"
                type="file"
                className={s.input}
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) void handleFile(file);
                }}
              />
              <span className={s.hint}>
                Nothing is uploaded anywhere — this demo runs entirely in your
                browser.
              </span>
            </div>
          </>
        ),
        // Synchronous and pure: it only reads what the upload handler wrote.
        validate: ({ data }) => {
          if (data.cvVerified === true) return true;
          if (status === "uploading") return "Still checking your document…";
          if (status === "rejected")
            return String(data.cvReason || "That file was rejected");
          return "Upload your CV to continue";
        },
      },

      {
        id: "details",
        title: "Details",
        icon: "ti-pencil",
        content: ({ data }) => (
          <>
            <h4 className={s.stepHeading}>A little more</h4>
            <p className={s.stepIntro}>Both optional.</p>

            <div className={s.field}>
              <label className={s.label} htmlFor="ja-notice">
                Notice period
              </label>
              <select
                id="ja-notice"
                className={s.select}
                value={str(data, "notice")}
                onChange={(e) => set({ notice: e.target.value })}
              >
                <option value="">Prefer not to say</option>
                <option value="immediate">Available immediately</option>
                <option value="1m">1 month</option>
                <option value="3m">3 months</option>
              </select>
            </div>

            <div className={s.field}>
              <label className={s.label} htmlFor="ja-cover">
                Anything you would like to add
              </label>
              <textarea
                id="ja-cover"
                className={s.textarea}
                rows={4}
                placeholder="A short note…"
                value={str(data, "cover")}
                onChange={(e) => set({ cover: e.target.value })}
              />
            </div>
          </>
        ),
      },

      {
        id: "review",
        title: "Review",
        icon: "ti-check",
        content: ({ data }) => (
          <>
            <h4 className={s.stepHeading}>Check and send</h4>
            <div className={s.review}>
              <span className={s.reviewKey}>Name</span>
              <span className={s.reviewValue}>{str(data, "fullName")}</span>
              <span className={s.reviewKey}>Email</span>
              <span className={s.reviewValue}>{str(data, "email")}</span>
              <span className={s.reviewKey}>Role</span>
              <span className={s.reviewValue}>{str(data, "role")}</span>
              <span className={s.reviewKey}>CV</span>
              <span className={s.reviewValue}>{str(data, "cvName")}</span>
              <span className={s.reviewKey}>Notice</span>
              <span className={s.reviewValue}>{str(data, "notice") || "—"}</span>
            </div>
          </>
        ),
      },
    ],
  };

  if (submitted) {
    return (
      <div className={s.done}>
        <div className={s.doneMark} aria-hidden="true">
          ✓
        </div>
        <h4>Application sent</h4>
        <p className={s.stepIntro}>We will be in touch.</p>
        <button
          className="button button--secondary button--sm"
          onClick={() => {
            setSubmitted(false);
            setStatus("idle");
          }}
        >
          Run the demo again
        </button>
      </div>
    );
  }

  return (
    <FormWizard
      ref={wizard}
      title="Apply"
      subtitle="Four steps"
      schema={schema}
      color="#0e6f70"
      ariaLabel="Job application"
      finishButtonText="Send application"
      onComplete={() => setSubmitted(true)}
    />
  );
}
