import { Metadata } from "next";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { Libre_Franklin } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const libreFranklin = Libre_Franklin({ subsets: ["latin"] });

type Props = React.PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-br" className={libreFranklin.className}>
      <body>
        <Menu />
        {children}
        <Footer />
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId="G-MB02LDKJ1V" />
        )}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Teacher Seimetz | Aulas de inglês com Amanda e professores parceiros",
  description:
    "Aulas particulares de inglês online com Amanda Seimetz e professores parceiros. Do iniciante ao avançado, para carreira, viagens e dia a dia. Conheça as opções.",
};
