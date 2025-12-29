import { ButtonLink } from "./ButtonLink";
import { Divider } from "./Divider";
import { Heading } from "./Heading";
import { Wrapper } from "./Wrapper";
import Image from "next/image";

export const LessonPlans = () => {
  return (
    <section id="lessonplans">
      <Wrapper variant="small">
        <Heading>
          <h1>lesson plans</h1>
        </Heading>

        <p className="mb-8">
          Planos de aula prontos para uso, elaborados para professores de
          inglês! Economize tempo com materiais que envolvem os alunos. Veja os
          últumos lançamentos e consulte o catálogo completo:
        </p>

        <section className="flex flex-col lg:grid grid-cols-3 gap-16">
          <article className="flex flex-col items-center text-center">
            <figure className="shrink-0 h-64 w-64 relative mb-10">
              <Image
                alt="Imagem da aula de places to visit in Barcelona"
                src="/images/places-to-visit-in-barcelona.jpg"
                objectFit="cover"
                objectPosition="0 0"
                fill
                className="rounded-2xl"
              />
            </figure>
            <h1 className="font-bold text-2xl mb-4">Europe pack #1</h1>
            <p className="mb-4 text-sm">
              Worksheets e slides que abordam tópicos como pontos turísticos,
              comida típica e aspectos culturais de 10 cidades diferentes.
            </p>
          </article>

          <article className="flex flex-col items-center text-center">
            <figure className="shrink-0 h-64 w-64 relative mb-10">
              <Image
                alt="Imagem da aula de painting analysis"
                src="/images/painting-analysis.jpg"
                objectFit="cover"
                objectPosition="0 0"
                fill
                className="rounded-2xl"
              />
            </figure>
            <h1 className="font-bold text-2xl mb-4">Painting Analysis</h1>
            <p className="mb-4 text-sm">
              Slides que guiam a análise de obras de arte.
            </p>
          </article>

          <section className="flex flex-col justify-center">
            <div className="lg:text-center">
              <span className="inline-block my-4">
                <ButtonLink
                  href="https://teacherseimetz.notion.site/Cat-logo-de-Aulas-23cb3dba55da80bba1b2f1524f689a4a?source=copy_link"
                  className="block"
                  target="_blank"
                >
                  Catálogo completo
                </ButtonLink>
              </span>
            </div>

            <h1 className="font-bold mb-4">Como comprar?</h1>

            <p>
              Para garantir seu material basta fazer o pagamento por pix usando
              a chave abaixo e enviar o comprovante para o instagram{" "}
              <a href="https://instagram.com/teacherseimetz">
                @teacherseimetz
              </a>{" "}
              ou por email{" "}
              <a href="mailto:teacherseimetz@gmail.com">
                teacherseimetz@gmail.com
              </a>
            </p>
          </section>
        </section>
        <Divider />
      </Wrapper>
    </section>
  );
};
