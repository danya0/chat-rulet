import React from 'react'

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  children: React.ReactNode
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  active = true,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/70 transition-colors
        ${active ? 'text-white' : 'text-red-500'} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
