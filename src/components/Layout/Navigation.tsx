import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '@/config/constants'
import './Navigation.css'

export const Navigation = () => {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const navItems = [
    { path: ROUTES.HOME, label: 'Accueil' },
    { path: ROUTES.HISTORY, label: 'Historique' },
    { path: ROUTES.STATS, label: 'Statistiques' },
  ]

  return (
    <nav className="navigation">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
