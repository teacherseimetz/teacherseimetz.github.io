"use client";

import { useEffect, useRef, useState } from "react";
import {
  CallIcon,
  ClassroomCharacter,
  Felix,
  TeacherName,
} from "./ClassroomIllustrations";
import { Divider } from "./Divider";
import { Heading } from "./Heading";
import { Wrapper } from "./Wrapper";
import styles from "./ClassPreview.module.css";

const sharedScenes = [
  {
    title: "Entrando na chamada",
    label: "Conectando",
    duration: 1400,
    teacher: "",
    student: "",
    caption: "A chamada começa. Você chega logo em seguida.",
  },
  {
    title: "Todo mundo por aqui",
    label: "O encontro",
    duration: 2600,
    teacher: "Hi! Can you hear me?",
    student: "Hi! Loud and clear!",
    caption: "Você entra na chamada, dá um oi e a conversa começa.",
  },
  {
    title: "Uma conversa de verdade",
    label: "A conversa",
    duration: 4200,
    teacher: "Really? Me too!",
    student: "No way!",
    caption: "Tem conversa, risada e espaço para ser você. Em inglês, claro.",
  },
  {
    title: "Um toque pessoal",
    label: "Um toque pessoal",
    duration: 5500,
    teacher: "",
    student: "",
    caption: "Cada professor traz um pouco de si para a conversa.",
  },
  {
    title: "Teu inglês na prática",
    label: "A prática",
    duration: 4200,
    teacher: "Tell me about yesterday.",
    student: "Let me try…",
    caption: "A conversa vira prática, com atividades conectadas à tua vida.",
  },
  {
    title: "Um ajuste, uma descoberta",
    label: "O feedback",
    duration: 5500,
    teacher: "Let's tell that story in the past.",
    student: "Oh, got it!",
    caption:
      "Você tenta, a gente ajusta. Cada descoberta vira um passo a mais.",
  },
  {
    title: "Olha o inglês acontecendo",
    label: "A conquista",
    duration: 3800,
    teacher: "Yes! That's it!",
    student: "Now I've got it!",
    caption: "E o que parecia difícil começa a sair com mais confiança.",
  },
];

type Scene = (typeof sharedScenes)[number];

type ClassroomLesson = {
  title: [string, string];
  prompt: string;
  sentenceStart: string;
  originalVerb: string;
  correctedVerb: string;
  sentenceEnd: string;
  feedback: string;
};

const teacherStories: Record<
  TeacherName,
  {
    dialogue: Partial<Record<number, Pick<Scene, "teacher" | "student">>>;
    personalMoment: Omit<Scene, "duration">;
    lesson: ClassroomLesson;
  }
> = {
  Amanda: {
    dialogue: {
      2: {
        teacher: "How was your evening?",
        student: "Mostly cat videos!",
      },
      6: {
        teacher: "Exactly! Felix approves.",
        student: "I played with my cat!",
      },
    },
    personalMoment: {
      title: "Participação especial",
      label: "Felix!",
      teacher: "And this is Felix…",
      student: "Hi, Felix!",
      caption:
        "Às vezes, o Felix aparece na aula da Amanda para conferir se o inglês está em dia.",
    },
    lesson: {
      title: ["Life with", "a cat."],
      prompt: "What did you do with your cat yesterday?",
      sentenceStart: "I",
      originalVerb: "play",
      correctedVerb: "played",
      sentenceEnd: "with my cat yesterday.",
      feedback: "Uma história com pets, agora no passado.",
    },
  },
  Roberto: {
    dialogue: {
      2: {
        teacher: "Any trips on your wish list?",
        student: "Orlando — and a good book!",
      },
      6: {
        teacher: "Yes! A new chapter!",
        student: "I bought a book for my trip!",
      },
    },
    personalMoment: {
      title: "Uma história puxa outra",
      label: "Viagens & livros",
      teacher: "I worked at Universal there!",
      student: "You have to tell me more!",
      caption:
        "Com o Roberto, viagens e literatura rendem boas histórias — e muita conversa em inglês.",
    },
    lesson: {
      title: ["A book for", "your trip."],
      prompt: "What did you buy for the trip?",
      sentenceStart: "I",
      originalVerb: "buy",
      correctedVerb: "bought",
      sentenceEnd: "a book for my trip.",
      feedback: "Um livro para a viagem, um verbo no passado.",
    },
  },
  Rochele: {
    dialogue: {
      2: {
        teacher: "What are you listening to?",
        student: "The Beatles, lately.",
      },
      6: {
        teacher: "Yes! That sounds great!",
        student: "I saw the band live!",
      },
    },
    personalMoment: {
      title: "Uma conversa com trilha sonora",
      label: "Música & Beatles",
      teacher: "I've seen Paul live!",
      student: "What was your favorite song?",
      caption:
        "Com a Rochele, música, Beatles e histórias de shows entram na conversa. Inglês com trilha sonora.",
    },
    lesson: {
      title: ["A night of", "live music."],
      prompt: "Tell me about last night's show.",
      sentenceStart: "I",
      originalVerb: "see",
      correctedVerb: "saw",
      sentenceEnd: "the band live.",
      feedback: "Para contar do show de ontem, usamos o passado.",
    },
  },
};

const teacherNames: TeacherName[] = ["Amanda", "Roberto", "Rochele"];

export function ClassPreview() {
  const [teacher, setTeacher] = useState<TeacherName>("Amanda");
  const [sceneIndex, setSceneIndex] = useState(0);
  const [revision, setRevision] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [stillScene, setStillScene] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const timing = useRef({ key: "", remaining: 0 });
  const story = teacherStories[teacher];
  const lesson = story.lesson;
  const scenes = sharedScenes.map((item, index) => ({
    ...item,
    ...story.dialogue[index],
    ...(index === 3 ? story.personalMoment : {}),
    ...(index === 0 ? { title: `${teacher} entrou na chamada` } : {}),
  }));
  const scene = scenes[sceneIndex];
  const running = playing && inView && pageVisible;
  const sharing = sceneIndex === 4 || sceneIndex === 5;
  const laughing = sceneIndex === 2 || sceneIndex === 3 || sceneIndex === 6;
  const corrected = sceneIndex === 5;
  const playbackKey = `${revision}-${sceneIndex}`;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPlaying(!preference.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updatePreference();
    updateVisibility();
    preference.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updateVisibility);

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updateVisibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (timing.current.key !== playbackKey) {
      timing.current = { key: playbackKey, remaining: scene.duration };
    }
    if (!running) return;
    const started = Date.now();
    const timeout = window.setTimeout(() => {
      setSceneIndex((current) => (current + 1) % scenes.length);
      setRevision((current) => current + 1);
    }, timing.current.remaining);
    return () => {
      window.clearTimeout(timeout);
      timing.current.remaining = Math.max(
        0,
        timing.current.remaining - (Date.now() - started),
      );
    };
  }, [playbackKey, running, scene.duration]);

  const goToScene = (index: number) => {
    setStillScene(!playing);
    setSceneIndex(index);
    setRevision((current) => current + 1);
  };

  return (
    <section
      id="uma-aula"
      ref={sectionRef}
      aria-labelledby="uma-aula-title"
      className={styles.section}
    >
      <Wrapper>
        <Heading>
          <h2 id="uma-aula-title">uma aula comigo ou com o meu time</h2>
        </Heading>
        <div className={styles.introduction}>
          <p>
            Tem conversa, tem prática, tem espaço para errar. E cada professor
            traz um pouco de si para a aula. Espia um pouquinho da nossa sala de
            aula.
          </p>
          <div
            className={styles.teacherPicker}
            role="group"
            aria-label="Escolha quem participa da aula ilustrada"
          >
            <span>Hoje, a aula é com:</span>
            <div>
              {teacherNames.map((name) => (
                <button
                  type="button"
                  key={name}
                  aria-pressed={teacher === name}
                  onClick={() => {
                    setTeacher(name);
                    goToScene(0);
                  }}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className={styles.sceneNavigation}
          role="group"
          aria-label="Cenas da aula ilustrada"
        >
          {scenes.map((item, index) => (
            <button
              key={item.label}
              type="button"
              aria-label={`Ver cena: ${item.label}`}
              aria-pressed={sceneIndex === index}
              onClick={() => goToScene(index)}
            >
              <span className={styles.sceneTrack}>
                <span
                  className={
                    index < sceneIndex
                      ? styles.completedProgress
                      : sceneIndex === index
                        ? styles.sceneProgress
                        : undefined
                  }
                  key={index === sceneIndex ? playbackKey : index}
                  style={
                    index === sceneIndex
                      ? {
                          animationDuration: `${scene.duration}ms`,
                          animationPlayState: running ? "running" : "paused",
                        }
                      : undefined
                  }
                />
              </span>
              <span className={styles.sceneLabel}>{item.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.call} data-playing={running}>
          <div className={styles.callHeader}>
            <div className={styles.windowDots} aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <span className={styles.callTitle}>
              <CallIcon type="camera" /> nossa sala de aula
            </span>
            <span className={styles.callBadge}>online, de perto</span>
          </div>
          <div className={styles.callBody}>
            <div className={styles.roomHeading}>
              <span className={styles.liveDot} aria-hidden="true" />
              <div className={styles.sceneTitles}>
                {scenes.map((item, index) => (
                  <span
                    key={item.label}
                    data-active={sceneIndex === index}
                    aria-hidden={sceneIndex !== index}
                  >
                    {item.title}
                  </span>
                ))}
              </div>
              <span className={styles.sceneCount}>
                0{sceneIndex + 1} / 0{scenes.length}
              </span>
            </div>

            <div className={styles.stage} data-sharing={sharing}>
              <div className={styles.lesson} aria-hidden={!sharing}>
                <div className={styles.lessonToolbar}>
                  <CallIcon type="share" />
                  <span>{teacher} está apresentando</span>
                  <span className={styles.lessonPage}>01 / 01</span>
                </div>
                <div className={styles.lessonContent}>
                  <span className={styles.lessonEyebrow}>
                    a little bit of your life
                  </span>
                  <span className={styles.lessonDoodle} aria-hidden="true">
                    ✳
                  </span>
                  <h3>
                    {lesson.title[0]}
                    <br />
                    {lesson.title[1]}
                  </h3>
                  <p className={styles.lessonPrompt}>{lesson.prompt}</p>
                  <div className={styles.studentAnswer}>
                    <span>your turn</span>
                    <p>
                      {lesson.sentenceStart}{" "}
                      <span
                        className={styles.answerCorrection}
                        data-corrected={corrected}
                      >
                        <span
                          className={styles.originalWord}
                          aria-hidden={corrected}
                        >
                          {lesson.originalVerb}
                        </span>
                        <span
                          className={styles.correctedWord}
                          aria-hidden={!corrected}
                        >
                          {lesson.correctedVerb}
                        </span>
                      </span>
                      <br />
                      {lesson.sentenceEnd}
                    </p>
                  </div>
                  <p
                    className={styles.feedbackNote}
                    data-active={corrected}
                    aria-hidden={!corrected}
                  >
                    {lesson.feedback}
                    <br />
                    <strong>
                      {lesson.originalVerb} → {lesson.correctedVerb}
                    </strong>
                  </p>
                </div>
              </div>

              <div className={styles.videoGrid}>
                <div className={`${styles.tile} ${styles.teacherTile}`}>
                  <div className={styles.participant}>
                    <ClassroomCharacter
                      person={teacher}
                      laughing={laughing}
                      waving={sceneIndex === 0 || sceneIndex === 6}
                    />
                  </div>
                  <div className={styles.speechStack} aria-hidden={sharing}>
                    {scenes.map((item, index) => (
                      <span
                        key={item.label}
                        className={styles.speech}
                        data-active={
                          !sharing && sceneIndex === index && !!item.teacher
                        }
                        aria-hidden={
                          sharing || sceneIndex !== index || !item.teacher
                        }
                      >
                        {item.teacher}
                      </span>
                    ))}
                  </div>
                  {teacher === "Amanda" && (
                    <div
                      className={styles.felixWalk}
                      data-active={sceneIndex === 3}
                      data-still={stillScene && !playing}
                      aria-hidden={sceneIndex !== 3}
                    >
                      <Felix />
                      <span>Felix</span>
                    </div>
                  )}
                  <div className={styles.participantLabel}>
                    <span>
                      {teacher}{" "}
                      <span className={styles.youLabel}>· teacher</span>
                    </span>
                    <span className={styles.audioBars} aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>
                </div>
                <div className={`${styles.tile} ${styles.studentTile}`}>
                  <div
                    className={styles.waiting}
                    data-active={sceneIndex === 0}
                    aria-hidden={sceneIndex !== 0}
                  >
                    <span className={styles.waitingAvatar}>
                      <CallIcon type="camera" />
                    </span>
                    <p>Você já está entrando…</p>
                    <span className={styles.waitingDots} aria-hidden="true">
                      •••
                    </span>
                  </div>
                  <div
                    className={styles.studentParticipant}
                    data-active={sceneIndex !== 0}
                    aria-hidden={sceneIndex === 0}
                  >
                    <ClassroomCharacter
                      person="student"
                      laughing={laughing}
                      waving={sceneIndex === 1 || sceneIndex === 6}
                    />
                  </div>
                  <div
                    className={`${styles.speechStack} ${styles.studentSpeechStack}`}
                    aria-hidden={sharing || sceneIndex === 0}
                  >
                    {scenes.map((item, index) => (
                      <span
                        key={item.label}
                        className={`${styles.speech} ${styles.studentSpeech}`}
                        data-active={
                          !sharing && sceneIndex === index && index !== 0
                        }
                        aria-hidden={
                          sharing || sceneIndex !== index || index === 0
                        }
                      >
                        {item.student}
                      </span>
                    ))}
                  </div>
                  <div
                    className={styles.participantLabel}
                    data-hidden={sceneIndex === 0}
                    aria-hidden={sceneIndex === 0}
                  >
                    <span>
                      Você <span className={styles.youLabel}>· aprendendo</span>
                    </span>
                    <span className={styles.audioBars} aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.meetingFooter} aria-hidden="true">
              <span>inglês + vida real</span>
              <div className={styles.meetControls}>
                <span>
                  <CallIcon type="mic" />
                </span>
                <span>
                  <CallIcon type="camera" />
                </span>
                <span>
                  <CallIcon type="share" />
                </span>
                <span className={styles.hangup}>
                  <CallIcon type="phone" />
                </span>
              </div>
              <span>feito para você</span>
            </div>
          </div>
        </div>

        <div className={styles.storyFooter}>
          <div className={styles.narration}>
            <span className={styles.storyEyebrow}>o inglês acontece assim</span>
            <div className={styles.captionStack}>
              {scenes.map((item, index) => (
                <p
                  key={item.label}
                  data-active={sceneIndex === index}
                  aria-hidden={sceneIndex !== index}
                >
                  {item.caption}
                </p>
              ))}
            </div>
          </div>
          <div className={styles.playbackControls}>
            <button
              type="button"
              onClick={() => {
                setStillScene(false);
                setPlaying(!playing);
              }}
              aria-label={playing ? "Pausar animação" : "Reproduzir animação"}
            >
              <CallIcon type={playing ? "pause" : "play"} />
              <span>{playing ? "Pausar" : "Reproduzir"}</span>
            </button>
            <button
              type="button"
              onClick={() => goToScene(0)}
              aria-label="Recomeçar animação"
            >
              <CallIcon type="replay" />
              <span>Recomeçar</span>
            </button>
          </div>
        </div>
        <p className={styles.illustrationNote}>
          Uma cena ilustrada para sentir o clima. Na tua aula, o roteiro é feito
          para você.
        </p>
        <Divider />
      </Wrapper>
    </section>
  );
}
