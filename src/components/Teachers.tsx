import Image from "next/image";
import { Divider } from "./Divider";
import { Heading } from "./Heading";
import { Wrapper } from "./Wrapper";
import styles from "./Learning.module.css";

const teachers = [
  {
    name: "Roberto",
    portrait: "/images/roberto.jpg",
    portraitAlt:
      "Professor Roberto sorrindo, com camiseta azul e fundo amarelo",
    qualification: "Doutor em Letras",
    bio: "O Roberto une conhecimento acadêmico e experiência prática com o idioma. Durante um intercâmbio em Orlando, trabalhou na Universal Studios e viveu o inglês no contato com pessoas de diferentes partes do mundo.",
    personality:
      "Apaixonado por viagens, animais e literatura, busca tornar as aulas leves e conectadas à vida real, sempre a partir das necessidades de cada aluno.",
  },
  {
    name: "Rochele",
    portrait: "/images/rochele.jpg",
    portraitAlt: "Professora Rochele de óculos, junto a uma janela",
    qualification: "Professora de inglês desde 2006",
    bio: "Formada em Relações Internacionais, com especialização em Marketing e Comunicação, a Rochele encontrou no ensino uma de suas grandes paixões: compartilhar conhecimento.",
    personality:
      "Fez intercâmbio em Montreal e adora conhecer lugares e culturas. A música também faz parte da sua vida, especialmente os Beatles e os shows de Paul McCartney.",
  },
];

export function Teachers() {
  return (
    <section id="professores" aria-labelledby="professores-title">
      <Wrapper>
        <Heading>
          <h2 id="professores-title">conheça o time</h2>
        </Heading>
        <p className={styles.intro}>
          Para atender mais alunos com o mesmo cuidado, reuni professores
          parceiros que trabalham com o meu método. Eles conduzem as aulas, e eu
          cuido do planejamento e do acompanhamento de cada aluno.
        </p>

        <div className={styles.teachers}>
          {teachers.map((teacher) => (
            <article className={styles.teacher} key={teacher.name}>
              <div className={styles.portrait}>
                <Image
                  src={teacher.portrait}
                  alt={teacher.portraitAlt}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 767px) calc(100vw - 80px), 240px"
                  className={styles.portraitImage}
                />
              </div>
              <div className={styles.teacherBio}>
                <p className={styles.eyebrow}>
                  {teacher.name === "Rochele"
                    ? "professora parceira"
                    : "professor parceiro"}
                </p>
                <h3>teacher {teacher.name.toLowerCase()}</h3>
                <p className={styles.qualification}>{teacher.qualification}</p>
                <p>{teacher.bio}</p>
                <p>{teacher.personality}</p>
              </div>
            </article>
          ))}
        </div>
        <Divider />
      </Wrapper>
    </section>
  );
}
