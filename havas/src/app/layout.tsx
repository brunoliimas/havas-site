import Header from "@/components/Header";
import { ApolloWrapper } from "../components/ApolloWrapper";
import "../app/globals.css";
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';



export const metadata = {
  title: "Havas Life",
  description: "Welcome to Havas Life São Paulo",
};


const baikal = localFont({
  src: [
    {
      path: '../fonts/Baikal/BaikalUltraExp-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Baikal/BaikalUltraExp-SemiBold.otf',
      weight: '600',
      style: 'semi-bold',
    },
  ],
})


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
    <html lang="pt-BR" className={baikal.className}>
      <body>
        <Header />
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
