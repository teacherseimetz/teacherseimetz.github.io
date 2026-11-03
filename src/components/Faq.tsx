import { Divider } from "./Divider";
import { EnrollmentLink } from "./EnrollmentLink";
import { Heading } from "./Heading";
import { Wrapper } from "./Wrapper";
import styles from "./Learning.module.css";

const questions = [
  {
    question: "Posso começar do zero?",
    answer:
      "Sim! Os professores parceiros recebem iniciantes e também alunos de outros níveis. Minhas aulas têm foco nos níveis intermediário e avançado, no inglês profissional e na confiança para falar. Vamos conversar sobre o melhor caminho para você.",
  },
  {
    question: "Como escolho entre a Amanda e um professor parceiro?",
    answer:
      "No formulário, você pode contar tua preferência: estudar comigo, começar com um professor parceiro ou receber ajuda para escolher. Na conversa inicial gratuita de 30 minutos, avaliamos teus objetivos e os horários disponíveis.",
  },
  {
    question: "E se a agenda da Amanda estiver completa?",
    answer:
      "Você pode entrar na lista de espera, e eu aviso assim que abrir um horário. Com os professores parceiros, pode haver a possibilidade de começar mais cedo, de acordo com a disponibilidade. O formulário de interesse é o mesmo para todos.",
  },
  {
    question: "A mensalidade muda em meses com cinco aulas?",
    answer:
      "Não. A mensalidade é fixa, inclusive em meses com cinco aulas, e inclui planejamento, materiais e acompanhamento. Os valores apresentados no site são para novos alunos.",
  },
  {
    question: "Como funcionam remarcações e feriados?",
    answer:
      "Remarcações devem ser solicitadas com pelo menos 24 horas de antecedência. Aulas que coincidirem com feriados podem ser remarcadas comigo ou com o professor parceiro. As combinações ficam registradas em contrato.",
  },
];

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title">
      <Wrapper>
        <Heading>
          <h2 id="duvidas-title">antes da primeira aula</h2>
        </Heading>

        <div className={styles.faq}>
          {questions.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>

        <div className={styles.invitation}>
          <p className={styles.eyebrow}>vamos dar o próximo passo?</p>
          <h3>Teu inglês começa com uma conversa.</h3>
          <p>
            Me conta o que você quer conquistar com o inglês. Vamos encontrar um
            caminho que faça sentido para você.
          </p>
          <EnrollmentLink />
        </div>
        <Divider />
      </Wrapper>
    </section>
  );
}
