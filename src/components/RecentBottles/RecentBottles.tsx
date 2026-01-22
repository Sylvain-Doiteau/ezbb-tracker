import { useBottleStore } from '@/store/bottleStore'
import { formatTimeAgo } from '@/utils/dateUtils'
import { Card } from '@/components/UI/Card'
import './RecentBottles.css'

export const RecentBottles = () => {
  const bottles = useBottleStore((state) => state.bottles)

  const recentBottles = [...bottles]
    .map((bottle) => ({
      ...bottle,
      date: bottle.date instanceof Date ? bottle.date : new Date(bottle.date),
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 5)

  if (recentBottles.length === 0) {
    return null
  }

  return (
    <Card title="Récents" className="recent-bottles">
      <ul className="recent-list">
        {recentBottles.map((bottle) => (
          <li key={bottle.id} className="recent-item">
            <span className="recent-amount">{bottle.amount} ml </span>
            <span className="recent-time">{formatTimeAgo(bottle.date)}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
