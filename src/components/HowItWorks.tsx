import { Divider } from "./Divider";
import { Heading } from "./Heading";
import { Wrapper } from "./Wrapper";
import styles from "./Learning.module.css";

const steps = [
  {
    title: "Me conta sobre você",
    description:
      "Preencha o formulário com teu nível, objetivos e horários disponíveis. Você pode indicar com quem prefere estudar ou pedir ajuda para escolher.",
  },
  {
    title: "Vamos conversar",
    description:
      "Na conversa inicial gratuita de 30 minutos comigo, vamos entender tuas necessidades e encontrar a melhor opção, conforme a disponibilidade de vagas.",
  },
  {
    title: "Um plano só teu",
    description:
      "Com o teste de nivelamento e os teus objetivos, preparo um plano personalizado. As combinações das aulas ficam registradas em contrato.",
  },
  {
    title: "Inglês na tua rotina",
    description:
      "Aulas individuais de 60 minutos pelo Google Meet, uma ou duas vezes por semana, comigo ou com um professor fixo do time.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-title">
      <Wrapper>
        <Heading>
          <h2 id="como-funciona-title">como funciona</h2>
        </Heading>

        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className={styles.stepNumber} aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>

        <div className={styles.support}>
          <div>
            <p className={styles.eyebrow}>
              o aprendizado continua entre as aulas
            </p>
            <h3>Teu inglês tem acompanhamento de perto.</h3>
          </div>
          <div className={styles.supportDetails}>
            <p>
              <strong>Uma página só tua.</strong> Atualizada toda semana, com
              anotações, vocabulário e materiais para acompanhar tua evolução.
            </p>
            <p>
              <strong>Prática extra com feedback.</strong> Atividades na
              plataforma Ellii, com correção e feedback meus, tanto nas aulas
              comigo quanto nas aulas com professores parceiros.
            </p>
          </div>
        </div>
        <Divider />
      </Wrapper>
    </section>
  );
}
