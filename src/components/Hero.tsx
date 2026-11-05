import { Caveat } from "next/font/google";
import { EnrollmentLink } from "./EnrollmentLink";
import { HandwrittenUnderline, TravelDoodle } from "./HeroDoodles";
import styles from "./Hero.module.css";
import { Logo } from "./Logo";
import { VisuallyHidden } from "./VisuallyHidden";
import { Wrapper } from "./Wrapper";

const handwriting = Caveat({ subsets: ["latin"], weight: "500" });

export function Hero() {
  const backgroundClassNames = ["bg-dark-green", "text-white", "mb-10"]
    .concat(styles.background)
    .join(" ");

  return (
    <section id="inicio" className={backgroundClassNames}>
      <Wrapper className={styles.wrapper}>
        <h1 className={styles.heading}>
          <span>
            <Logo className={styles.logo} />
            <VisuallyHidden>Amanda Seimetz</VisuallyHidden>
          </span>
          <span className={styles.tagline}>
            <span className={styles.firstLine}>
              Inglês para a tua carreira,
            </span>
            tuas viagens{" "}
            <span className={`${styles.handwritten} ${handwriting.className}`}>
              <span className={styles.handwrittenText}>e tua vida.</span>
              <HandwrittenUnderline className={styles.underline} />
              <TravelDoodle className={styles.travelDoodle} />
            </span>
          </span>
        </h1>
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
