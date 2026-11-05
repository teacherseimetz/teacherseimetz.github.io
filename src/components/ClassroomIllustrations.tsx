import type { CSSProperties } from "react";
import styles from "./ClassPreview.module.css";

export type TeacherName = "Amanda" | "Roberto" | "Rochele";

const portraits = ["Amanda", "Roberto", "Rochele", "student"] as const;

type CharacterProps = {
  person: TeacherName | "student";
  laughing?: boolean;
  waving?: boolean;
};

export function ClassroomCharacter({
  person,
  laughing,
  waving,
}: CharacterProps) {
  const people =
    person === "student" ? ["student"] : ["Amanda", "Roberto", "Rochele"];
  return (
    <div
      className={styles.character}
      data-student={person === "student"}
      data-laughing={laughing}
      data-greeting={waving}
      aria-hidden="true"
    >
      <div className={styles.roomArt} />
      <div className={styles.characterArt}>
        {people.map((name) => {
          const row = portraits.indexOf(name as (typeof portraits)[number]);
          const position = `${(row / 3) * 100}%`;
          return (
            <div
              key={name}
              className={styles.characterSet}
              data-active={name === person}
            >
              <div
                className={`${styles.portraitPose} ${styles.portraitRest}`}
                style={
                  { backgroundPosition: `0% ${position}` } as CSSProperties
                }
              />
              <div
                className={`${styles.portraitPose} ${styles.portraitLaugh}`}
                style={
                  { backgroundPosition: `100% ${position}` } as CSSProperties
                }
              />
            </div>
          );
        })}
      </div>
      <div className={styles.illustratedLaptop}>
        <ClassroomStar />
      </div>
    </div>
  );
}

export function ClassroomStar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16 2V30M2 16H30M6 6L26 26M6 26L26 6" />
    </svg>
  );
}

export function Felix() {
  return (
    <div className={styles.cat} aria-hidden="true">
      <div className={styles.catFrames} />
    </div>
  );
}

export function CallIcon({
  type,
}: {
  type: "camera" | "mic" | "phone" | "share" | "play" | "pause" | "replay";
}) {
  const paths = {
    camera: (
      <>
        <rect x="3" y="6" width="12" height="12" rx="3" />
        <path d="M15 10L21 7V17L15 14" />
      </>
    ),
    mic: (
      <>
        <rect x="9" y="3" width="6" height="12" rx="3" />
        <path d="M6 11V12A6 6 0 0 0 18 12V11M12 18V21M9 21H15" />
      </>
    ),
    phone: <path d="M4 15L3 10Q12 3 21 10L20 15L15 14V11Q12 10 9 11V14Z" />,
    share: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M12 15V8M9 11L12 8L15 11" />
      </>
    ),
    play: <path d="M8 5L19 12L8 19Z" />,
    pause: (
      <>
        <path d="M9 5V19M15 5V19" />
      </>
    ),
    replay: (
      <>
        <path d="M4 10A8 8 0 1 1 5 17M4 4V10H10" />
      </>
    ),
  };
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}
