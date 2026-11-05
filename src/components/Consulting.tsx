import { ButtonLink } from "./ButtonLink";
import { Divider } from "./Divider";
import { Heading } from "./Heading";
import { Wrapper } from "./Wrapper";
import styles from "./Consulting.module.css";

const sessions = [
  {
    duration: "60 min",
    price: "180",
    description:
      "Prática geral, reuniões, alinhamento de comunicação e preparação pontual.",
  },
  {
    duration: "90 min",
    price: "260",
    description:
      "Entrevistas de emprego, apresentações, simulações aprofundadas e feedback mais detalhado.",
  },
];

export function Consulting() {
  return (
    <section id="consultoria" aria-labelledby="consultoria-title">
      <Wrapper>
        <Heading>
          <h2 id="consultoria-title">consultoria de speaking em inglês</h2>
        </Heading>

        <div className={styles.intro}>
          <p className={styles.lead}>
            Prática guiada para entrevistas, reuniões e apresentações em inglês.
          </p>
          <p>
            A consultoria é voltada para situações reais de comunicação
            profissional em inglês, como entrevistas, reuniões e apresentações.
            Durante a sessão, trabalhamos prática guiada, comunicação mais
            natural, pronúncia e estratégias para você se sentir mais confiante
            ao falar.
          </p>
        </div>

        <h3 className={styles.subtitle}>Valores e duração</h3>
        <div className={styles.sessions}>
          {sessions.map((session) => (
            <article className={styles.session} key={session.duration}>
              <h4>{session.duration}</h4>
              <p className={styles.price}>
                <strong>R$ {session.price}</strong>
                <span>por sessão</span>
              </p>
              <p>{session.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.contact}>
          <h3 className={styles.subtitle}>Primeiro contato</h3>
          <p>Preencha o formulário para conversar sobre a consultoria.</p>
          <ButtonLink
            href="https://forms.gle/9J3XboQoHmhA7wyk9"
            target="_blank"
            rel="noreferrer noopener"
          >
            Quero uma consultoria
          </ButtonLink>
        </div>
        <Divider />
      </Wrapper>
    </section>
  );
}
