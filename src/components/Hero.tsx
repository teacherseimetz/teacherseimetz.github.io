import { EnrollmentLink } from "./EnrollmentLink";
import styles from "./Hero.module.css";
import { Logo } from "./Logo";
import { VisuallyHidden } from "./VisuallyHidden";
import { Wrapper } from "./Wrapper";

export function Hero() {
  const backgroundClassNames = ["bg-dark-green", "text-white", "mb-10"]
    .concat(styles.background)
    .join(" ");

  return (
    <section id="inicio" className={backgroundClassNames}>
      <Wrapper className={styles.wrapper}>
        <h1 className="flex flex-col gap-2">
          <span>
            <Logo className={styles.logo} />
            <VisuallyHidden>Amanda Seimetz</VisuallyHidden>
          </span>
          <span className={styles.tagline}>
            Inglês para a tua carreira, tuas viagens e tua vida.
          </span>
        </h1>
        <p className={styles.description}>
          Aulas particulares online comigo e com meu time de professores
          parceiros. Do primeiro passo à próxima conquista, com um plano feito
          para você.
        </p>
        <div className={styles.links}>
          <EnrollmentLink inverse />
          <a href="#aulas" className={styles.explore}>
            Conheça as opções de aulas <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className={styles.secondaryLinks}>
          <a href="#eventos">Eventos presenciais</a>
        </div>
      </Wrapper>
    </section>
  );
}
