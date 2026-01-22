import { useBottleStore } from '@/store/bottleStore'
import { formatDate, formatTimeAgo } from '@/utils/dateUtils'
import { Button } from '@/components/UI/Button'
import { Card } from '@/components/UI/Card'
import { BOTTLE_TYPE_LABELS } from '@/config/constants'
import './BottleList.css'

export const BottleList = () => {
  const bottles = useBottleStore((state) => state.bottles)
  const deleteBottle = useBottleStore((state) => state.deleteBottle)

  const sortedBottles = [...bottles]
    .map((bottle) => ({
      ...bottle,
      date: bottle.date instanceof Date ? bottle.date : new Date(bottle.date),
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime())

  const getTypeLabel = (type: string) => {
    return BOTTLE_TYPE_LABELS[type] || type
  }

  return (
    <div className="bottle-list">
      <h2>Historique des biberons</h2>
      {sortedBottles.length === 0 ? (
        <p className="empty-state">Aucun biberon enregistré</p>
      ) : (
        <ul className="bottle-items">
          {sortedBottles.map((bottle) => (
            <li key={bottle.id} className="bottle-item">
              <div className="bottle-info">
                <div className="bottle-header">
                  <span className="bottle-amount">{bottle.amount} ml</span>
                  <span className="bottle-type">{getTypeLabel(bottle.type)}</span>
                </div>
                <div className="bottle-date">
                  {formatDate(bottle.date)} ({formatTimeAgo(bottle.date)})
                </div>
                {bottle.notes && (
                  <div className="bottle-notes">{bottle.notes}</div>
                )}
              </div>
              <Button
                onClick={() => deleteBottle(bottle.id)}
                variant="danger"
                aria-label="Supprimer"
                className="delete-button"
              >
                ×
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
