import { Divider } from "./Divider";
import { EnrollmentLink } from "./EnrollmentLink";
import { Heading } from "./Heading";
import { Wrapper } from "./Wrapper";
import styles from "./Classes.module.css";

const classOptions = [
  {
    title: "com a Amanda",
    focus: "inglês profissional e avançado",
    description:
      "Para transformar o inglês que você já sabe em uma fala mais clara, precisa e segura.",
    audiences: [
      "Profissionais que usam inglês em reuniões, apresentações, e-mails e entrevistas.",
      "Alunos de nível intermediário e avançado que querem ir além.",
      "Quem entende inglês, mas sente insegurança na hora de falar.",
    ],
    delivery:
      "Aulas, planejamento personalizado e acompanhamento diretamente comigo, a partir dos teus objetivos e da tua rotina.",
    weekly: "620",
    twiceWeekly: "1.080",
    availability:
      "Abro poucas vagas por vez. Se a agenda estiver completa, você pode aguardar na lista de espera.",
  },
  {
    title: "com professor parceiro",
    focus: "inglês para o dia a dia e viagens",
    description:
      "Para começar do zero, retomar os estudos ou ampliar o inglês que faz parte da tua vida.",
    audiences: [
      "Iniciantes que querem construir uma base com acompanhamento.",
      "Alunos de outros níveis que querem se comunicar em viagens e no dia a dia.",
      "Quem quer conversar mais e entender séries, músicas e outros conteúdos.",
    ],
    delivery:
      "Aulas com professor fixo do meu time. Eu preparo o plano de aulas, acompanho tua evolução e faço um acompanhamento pedagógico mensal contigo.",
    weekly: "520",
    twiceWeekly: "910",
    availability:
      "Uma possibilidade para começar mais cedo, conforme a disponibilidade dos professores e dos teus horários.",
  },
];

export function Classes() {
  return (
    <section id="aulas" aria-labelledby="aulas-title">
      <Wrapper>
        <Heading>
          <h2 id="aulas-title">um inglês que faz sentido para você</h2>
        </Heading>

        <p className={styles.intro}>
          Cada pessoa tem um motivo para aprender. Nas aulas comigo ou com um
          professor parceiro, o ponto de partida é o mesmo: teus objetivos, teu
          ritmo e um plano feito para você.
        </p>

        <div className={styles.cards}>
          {classOptions.map((option, index) => (
            <article
              className={`${styles.card} ${index === 0 ? styles.amanda : styles.partner}`}
              key={option.title}
            >
              <header>
                <p className={styles.eyebrow}>{option.focus}</p>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </header>

              <ul className={styles.audiences}>
                {option.audiences.map((audience) => (
                  <li key={audience}>{audience}</li>
                ))}
              </ul>

              <div className={styles.delivery}>
                <h4>Quem cuida do teu aprendizado?</h4>
                <p>{option.delivery}</p>
              </div>

              <dl className={styles.prices}>
                <div>
                  <dt>1 aula por semana</dt>
                  <dd>
                    <strong>R$ {option.weekly}</strong>
                    <span>/mês</span>
                  </dd>
                </div>
                <div>
                  <dt>2 aulas por semana</dt>
                  <dd>
                    <strong>R$ {option.twiceWeekly}</strong>
                    <span>/mês</span>
                  </dd>
                </div>
              </dl>

              <p className={styles.availability}>{option.availability}</p>
            </article>
          ))}
        </div>

        <p className={styles.priceNote}>
          Valores mensais para novos alunos. Incluem planejamento, materiais e
          acompanhamento. A mensalidade é fixa, inclusive em meses com cinco
          aulas.
        </p>

        <div className={styles.enrollment}>
          <p>
            Ainda não sabe qual opção escolher? Eu te ajudo na conversa inicial.
          </p>
          <EnrollmentLink />
        </div>
        <Divider />
      </Wrapper>
    </section>
  );
}
