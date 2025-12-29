import { ButtonLink } from "./ButtonLink";
import { Divider } from "./Divider";
import { Heading } from "./Heading";
import { Highlight } from "./Highlight";
import { Headphone } from "./icons/Headphone";
import { Lightning } from "./icons/Lightning";
import { Plane } from "./icons/Plane";
import { Suitcase } from "./icons/Suitcase";
import { Wrapper } from "./Wrapper";
import Image from "next/image";

export function Classes() {
  return (
    <section id="aulas">
      <Wrapper variant="small">
        <Heading>
          <h1>aulas de inglês</h1>
        </Heading>

        <ul className="flex flex-col md:grid grid-cols-2 gap-4 justify-center mb-10 text-teal">
          <li className="flex flex-row items-center gap-4">
            <span className="bg-lime p-2 rounded-2xl size-16 flex justify-center items-center">
              <Suitcase className="max-h-full fill-dark-green" />
            </span>
            material personalizado
          </li>
          <li className="flex flex-row items-center gap-4">
            <span className="bg-lime p-2 rounded-2xl size-16 flex justify-center items-center">
              <Plane className="max-h-full fill-dark-green" />
            </span>
            duração de 60 minutos
          </li>
          <li className="flex flex-row items-center gap-4">
            <span className="bg-lime p-2 rounded-2xl size-16 flex justify-center items-center">
              <Lightning className="max-h-full fill-dark-green" />
            </span>
            anotações e correções
          </li>
          <li className="flex flex-row items-center gap-4">
            <span className="bg-lime p-2 rounded-2xl size-16 flex justify-center items-center">
              <Headphone className="max-h-full fill-dark-green" />
            </span>
            Google Meet
          </li>
        </ul>

        <p className="mb-8">
          Esqueça os métodos rígidos. Aqui, o aprendizado acontece no seu tempo
          e do seu jeito. Meu foco é ajudar alunos de nível intermediário e
          avançado a dominarem o inglês do cotidiano. Para isso, ofereço:
        </p>

        <ul className="list-disc ml-4 mb-12">
          <li className="mb-4">
            Aulas Personalizadas: Planejadas exclusivamente para as suas
            necessidades e objetivos.
          </li>

          <li className="mb-4">
            Materiais Dinâmicos e Divertidos: Nada de decoreba. Usamos conteúdos
            reais e envolventes para praticar diversas competências de forma
            fluida.
          </li>

          <li className="mb-4">
            Feedback Constante: Anotações e correções detalhadas para você
            acompanhar sua evolução.
          </li>

          <li className="mb-4">
            Conveniência: Aulas de 60 minutos via Google Meet, onde você
            estiver.
          </li>
        </ul>

        <div className="flex justify-center mb-20">
          <ButtonLink
            href="https://teacherseimetz.notion.site/12ab3dba55da80508dd1eb23da886b42?pvs=105"
            target="_blank"
          >
            Quero fazer aulas de inglês
          </ButtonLink>
        </div>

        <section className="flex flex-col md:flex-row items-center lg:items-start gap-10 mb-10">
          <div>
            <figure className="shrink-0 h-96 w-96 relative mb-10">
              <Image
                className="rounded-3xl"
                src="/images/smiling-2.jpg"
                alt="Foto da professora Amanda Seimetz sorrindo, com uma blusa verde e o fundo desfocado"
                objectFit="cover"
                fill
              />
            </figure>

            <div className="flex justify-center mb-10">
              <ButtonLink
                href="https://teacherseimetz.notion.site/12ab3dba55da80508dd1eb23da886b42?pvs=105"
                target="_blank"
              >
                Quero fazer aulas de inglês
              </ButtonLink>
            </div>
          </div>

          <div>
            <Highlight className="mb-10">
              <p>
                O Investimento para aulas particulares é mensal. O valor é fixo
                mesmo em meses mais longos. O valor reduz apenas em caso de
                feriados nacionais e aumenta em caso de aulas adicionais serem
                agendadas.
              </p>
            </Highlight>

            <ul className="flex flex-col lg:flex-row gap-8">
              <li>
                <article className="flex flex-col gap-3 bg-lilac text-dark-green rounded-3xl p-8">
                  <h1 className="font-bold text-xl">
                    1 aula particular por semana
                  </h1>

                  <h2 className="font-bold text-3xl text-white text-shadow-lg">
                    R$ 540
                  </h2>

                  <p>inclui o planejamento, o material e acompanhamento.</p>
                </article>
              </li>
              <li>
                <article className="flex flex-col gap-3 bg-lilac text-dark-green rounded-3xl p-8">
                  <h1 className="font-bold text-xl">
                    2 aulas particulares por semana
                  </h1>

                  <h2 className="font-bold text-3xl text-white text-shadow-lg">
                    R$ 920
                  </h2>

                  <p>inclui o planejamento, o material e acompanhamento.</p>
                </article>
              </li>
            </ul>
          </div>
        </section>
        <Divider />
      </Wrapper>
    </section>
  );
}
