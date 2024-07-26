import Header from "@/components/Header";
import { ApolloWrapper } from "../components/ApolloWrapper";
import "../app/globals.css";
import { Montserrat } from 'next/font/google';

export const metadata = {
  title: "Havas Life",
  description: "Welcome to Havas Life São Paulo",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body>
        <Header />
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
