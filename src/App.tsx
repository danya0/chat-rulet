import { useState } from 'react'
import Chat from './components/Chat'
import ThemeToggle from './components/ThemeToggle'
import { VideoBlock } from './components/VideoBlock'

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return document.documentElement.classList.contains('dark')
  })

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="flex h-screen w-screen bg-white dark:bg-gray-900 transition-colors">
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

      <VideoBlock />

      {/* Chat container */}
      <div className="flex-1 p-4">
        <Chat />
      </div>
    </div>
  )
}

export default App
