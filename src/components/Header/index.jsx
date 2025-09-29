import { useState } from "react"

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date())
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date())
      }, 1000)
  
      return () => clearInterval(interval) // limpa o intervalo ao desmontar
    }, [])
  
    const formatTime = (date) => {
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    }
  
    const formatDate = (date) => {
      return date.toLocaleDateString()
    }
  
    return (
      <div className={styles.clock}>
        <span className={styles.date}>{formatDate(currentTime)}</span>
        <span className={styles.time}>{formatTime(currentTime)}</span>
      </div>
    )
  }

export function Header() {
    return (
        <header className='app-header'>
            <h1>Quiz interativo</h1>
            <Clock/>
        </header>
    
    )
}

export default Header