'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={pathname === '/' ? styles.active : ''}>Inicio</Link>
      <Link href="/productos" className={pathname === '/productos' ? styles.active : ''}>Productos</Link>
      <Link href="/carrito" className={pathname === '/carrito' ? styles.active : ''}>Carrito</Link>
      <Link href="/ofertas" className={pathname === '/ofertas' ? styles.active : ''}>Ofertas</Link>
      <Link href="/contacto" className={pathname === '/contacto' ? styles.active : ''}>Contacto</Link>
    </nav>
  )
}