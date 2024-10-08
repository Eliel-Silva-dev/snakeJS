import type { Metadata } from 'next';

import { Poppins } from 'next/font/google';

import NavBar from '@/shared/components/NavBar';
import Footer from '@/shared/components/Footer';

import { Suspense } from 'react';

import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '900'] });

export const metadata: Metadata = {
  title: 'Snake game | Hydrah Tec',
  description: 'jogo da cobrinha desenvolvido com react e next js',
  keywords: 'jogo cobrinha, snake, ',
  icons: 'img/snakeico.svg',
  robots: 'index, follow',
  authors: [{ name: 'Eliel Silva', url: 'https://github.com/Eliel-Silva-dev' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <NavBar />
        <Suspense fallback={<div>Carregando dados da pagina...</div>}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
