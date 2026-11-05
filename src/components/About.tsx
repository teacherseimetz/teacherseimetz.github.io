import Image from "next/image";
import { Wrapper } from "./Wrapper";
import { Highlight } from "./Highlight";
import { Divider } from "./Divider";

export function About() {
  return (
    <Wrapper id="sobre">
      <section
        aria-labelledby="sobre-title"
        className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-10 pt-10"
      >
        <figure className="shrink-0 aspect-square w-full max-w-96 relative overflow-hidden rounded-3xl">
          <Image
            src="/images/amanda-profile.jpg"
            alt="Amanda Seimetz sorrindo, de óculos e casaco escuro, em uma ponte"
            style={{
              objectFit: "cover",
              objectPosition: "center 20%",
              transform: "scale(1.2)",
              transformOrigin: "85% 20%",
            }}
            sizes="(max-width: 480px) calc(100vw - 48px), 384px"
            fill
          />
        </figure>
        <div className="leading-8">
          <h2
            id="sobre-title"
            className="text-3xl font-bold tracking-tight mb-6"
          >
            Oi! Eu sou a Amanda.
          </h2>
          <Highlight>
            <p>
              Sou a Amanda Seimetz. Moro em Porto Alegre e ensino inglês desde
              2016. Minha trajetória une a vivência real do idioma com uma base
              teórica sólida: morei dois anos em Dublin, na Irlanda, e sou
              formada em Letras pela Unisinos. Para oferecer a melhor
              experiência em sala de aula, também me especializei na PUCRS em
              metodologias de ensino com foco total no aluno.
            </p>
          </Highlight>
          <p className="mt-6">
            Desde 2020, tenho minha própria empresa de aulas particulares
            online. Hoje, além de dar aulas, planejo e acompanho o aprendizado
            dos alunos do meu time de professores parceiros.
          </p>
        </div>
      </section>
      <Divider />
    </Wrapper>
  );
}
