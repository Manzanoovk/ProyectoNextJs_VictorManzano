'use client'
import Image from 'next/image'
import styles from './Productos.module.css'

const productos = [
  { id: 1, nombre: 'Vaper X100', precio: '35€', imagen: '/imagenes/vaper1.jpg' },
  { id: 2, nombre: 'Vaper Pro 200', precio: '45€', imagen: '/imagenes/vaper2.jpg' },
  { id: 3, nombre: 'Vaper Ultra', precio: '55€', imagen: '/imagenes/vaper3.jpg' },
]

export default function Productos() {
  return (
    <div className={styles.grid}>
      {productos.map(prod => (
        <div key={prod.id} className={styles.card}>
          <Image src={prod.imagen} alt={prod.nombre} width={200} height={200} />
          <h2>{prod.nombre}</h2>
          <p>{prod.precio}</p>
        </div>
      ))}
    </div>
  )
}