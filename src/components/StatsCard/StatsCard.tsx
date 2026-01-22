import { Card } from '@/components/UI/Card'
import './StatsCard.css'

interface StatsCardProps {
  title: string
  total: number
  count: number
  average: number
  goal?: number
}

export const StatsCard = ({ title, total, count, average, goal }: StatsCardProps) => {
  const percentage = goal ? Math.round((total / goal) * 100) : null

  return (
    <Card title={title} variant="elevated" className="stats-card">
      <div className="stats-content">
        <div className="stat-item">
          <span className="stat-label">Total</span>
          <span className="stat-value">{total} ml</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Nombre</span>
          <span className="stat-value">{count}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Moyenne</span>
          <span className="stat-value">{Math.round(average)} ml</span>
        </div>
        {goal && (
          <div className="stat-item">
            <span className="stat-label">Objectif</span>
            <span className="stat-value">
              {percentage}% ({total}/{goal} ml)
            </span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${Math.min(percentage || 0, 100)}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
