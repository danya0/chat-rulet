import { useState, useEffect } from 'react'
import Chat from './components/Chat'
import ThemeToggle from './components/ThemeToggle'

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

      {/* Video windows container */}
      <div className="w-[40%] p-4 space-y-4">
        {/* My video window */}
        <div className="h-[calc(50%-8px)] bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">Мое видео</span>
        </div>
        {/* Interlocutor's video window */}
        <div className="h-[calc(50%-8px)] bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">Видео собеседника</span>
        </div>
      </div>

      {/* Chat container */}
      <div className="flex-1 p-4">
        <Chat isDark={isDark} />
      </div>
    </div>
  )
}

export default App
