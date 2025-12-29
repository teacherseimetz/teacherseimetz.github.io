import Image from "next/image";
import { Wrapper } from "./Wrapper";
import { Highlight } from "./Highlight";
import { Divider } from "./Divider";

export function About() {
  return (
    <Wrapper id="sobre">
      <section className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-10">
        <figure className="shrink-0 h-96 w-96 relative">
          <Image
            className="rounded-3xl"
            src="/images/smiling.jpg"
            alt="Foto da professora Amanda Seimetz sorrindo, com uma blusa verde e o fundo desfocado"
            objectFit="cover"
            fill
          />
        </figure>
        <div>
          <Highlight>
            <p>
              Oi! Meu nome é Amanda Seimetz. Moro em Porto Alegre e ensino
              inglês desde 2016. Minha trajetória une a vivência real do idioma
              com uma base teórica sólida: morei dois anos em Dublin, na
              Irlanda, e sou formada em Letras pela Unisinos. Para oferecer a
              melhor experiência em sala de aula, também me especializei na
              PUCRS em metodologias de ensino com foco total no aluno.
            </p>
            <p>
              <em>Ensino inglês desde 2016</em> e me{" "}
              <em>formei em Letras - Inglês</em> pela Unisinos em
              <em>2020</em>. Em <em>2022</em>, concluí minha{" "}
              <em>pós-graduação pela PUCRS</em> (Moderna Educação: Metodologias,
              Tendências E Foco No Aluno) consolidando ainda mais minha formação
              na área.
            </p>
          </Highlight>
        </div>
      </section>
      <Divider />
    </Wrapper>
  );
}
