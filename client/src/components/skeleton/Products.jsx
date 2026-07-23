import styles from '../../assets/style'
import { useApp } from '../../Context/appContext'
export default function Products({count}) {

  const {name} = useApp();

  return (
    <div style={styles.container} className='products'>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} style={styles.card}>
          <div style={styles.image}>{name}</div>

          <div style={styles.content}>
            <div style={styles.title}></div>
            <div style={styles.subtitle}></div>

            <div style={styles.row}>
              <div style={styles.price}></div>
              <div style={styles.rating}></div>
            </div>

            <div style={styles.button}></div>
          </div>
        </div>
      ))}
    </div>
  )
}
