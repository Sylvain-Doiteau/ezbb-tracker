import { ReactNode, HTMLAttributes } from 'react'
import './Card.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  title?: string
  variant?: 'default' | 'elevated'
}

export const Card = ({
  children,
  title,
  variant = 'default',
  className = '',
  ...props
}: CardProps) => {
  const classes = ['card', `card-${variant}`, className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">{children}</div>
    </div>
  )
}
