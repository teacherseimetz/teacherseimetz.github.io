import { ButtonLink } from "./ButtonLink";

const enrollmentUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdr4AXJRU-Zf1PxlBkGx3SSiHILv3zSBk1vvK4zIfnQrlpZEw/viewform?usp=header";

type Props = Pick<
  React.ComponentProps<typeof ButtonLink>,
  "className" | "inverse"
>;

export function EnrollmentLink(props: Props) {
  return (
    <ButtonLink
      {...props}
      href={enrollmentUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Quero ter aulas
    </ButtonLink>
  );
}
