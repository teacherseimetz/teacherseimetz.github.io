import { Wrapper } from "./Wrapper";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.container}>
      <Wrapper className={styles.wrapper}>
        <div className="w-full flex flex-col lg:flex-row justify-between gap-8">
          <h2 className="font-bold text-4xl lowercase">
            Ficou com alguma dúvida?
          </h2>

          <nav aria-label="Contato" className={styles.links}>
            <a
              href="https://instagram.com/teacherseimetz"
              rel="noreferrer noopener"
              target="_blank"
            >
              @teacherseimetz
            </a>
            <a href="mailto:teacherseimetz@gmail.com">
              teacherseimetz@gmail.com
            </a>
          </nav>
        </div>
      </Wrapper>
    </footer>
  );
}
