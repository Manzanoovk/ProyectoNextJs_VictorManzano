import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Tienda de Vapers',
  description: 'Compra los mejores vapers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}