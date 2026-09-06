import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Auto Mecânica Vans | Linha leve e diesel em Pato Branco',
  description: 'Motores em geral, suspensão e freios. Auto Mecânica Vans no bairro Bortot, em Pato Branco. Ligue (46) 2604-0763 e consulte o atendimento.',
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
