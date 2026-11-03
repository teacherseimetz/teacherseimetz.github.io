import { ButtonLink } from "./ButtonLink";
import { Heading } from "./Heading";
import { Wrapper } from "./Wrapper";
import Image from "next/image";

export const Events = () => {
  return (
    <section id="eventos">
      <Wrapper>
        <Heading>
          <h2>eventos</h2>
        </Heading>

        <section className="flex flex-col lg:grid grid-cols-2 gap-4">
          <section className="flex overflow-x-auto lg:grid lg:grid-cols-2 lg:grid-flow-row gap-4">
            <figure className="shrink-0 h-48 w-48 relative">
              <Image
                className="rounded-3xl"
                src="/images/events-1.jpg"
                alt="Foto da professora Amanda Seimetz sorrindo, com um lápis na mão, uma blusa verde e o fundo desfocado"
                style={{ objectFit: "cover" }}
                sizes="192px"
                fill
              />
            </figure>
            <figure className="shrink-0 h-48 w-48 relative">
              <Image
                className="rounded-3xl"
                src="/images/events-2.jpg"
                alt="Foto de uma atividade sendo realizada, com um computador mostrando o slide explicando como fazer a atividade"
                style={{ objectFit: "cover" }}
                sizes="192px"
                fill
              />
            </figure>
            <figure className="shrink-0 h-48 w-48 relative">
              <Image
                className="rounded-3xl"
                src="/images/events-3.jpg"
                alt="Foto de uma folha com a atividade who am I?"
                style={{ objectFit: "cover" }}
                sizes="192px"
                fill
              />
            </figure>
            <figure className="shrink-0 h-48 w-48 relative">
              <Image
                className="rounded-3xl"
                src="/images/events-4.jpg"
                alt="Foto de uma pessoa segurando um quadro dizendo group 1 winners"
                style={{ objectFit: "cover" }}
                sizes="192px"
                fill
              />
            </figure>
            <figure className="shrink-0 h-48 w-48 relative">
              <Image
                className="rounded-3xl"
                src="/images/events-5.jpg"
                alt="Foto de uma etiqueta para identificação de nome, com o nome Scarlett Johansson escrito"
                style={{ objectFit: "cover" }}
                sizes="192px"
                fill
              />
            </figure>
            <figure className="shrink-0 h-48 w-48 relative">
              <Image
                className="rounded-3xl"
                src="/images/events-6.jpg"
                alt="Foto de uma pessoa segurando um lápis, próxima a escrever em uma folha de atividades"
                style={{ objectFit: "cover" }}
                sizes="192px"
                fill
              />
            </figure>
          </section>
          <section className="lg:pl-8">
            <p className="pt-8 mb-8">
              Além das aulas, também organizo eventos presenciais para promover
              a prática do inglês. Atualmente os eventos acontecem apenas em
              Porto Alegre - RS.
            </p>

            <div className="mb-8">
              <ButtonLink
                href="https://instagram.com/teacherseimetz"
                rel="noreferrer noopener"
                target="_blank"
              >
                Próximos eventos
              </ButtonLink>
            </div>

            <h3 className="font-bold">Como participar?</h3>
            <p>
              Fique de olho nas minhas redes sociais para saber a data e o local
              do próximo evento.
            </p>
          </section>
        </section>
      </Wrapper>
    </section>
  );
};
