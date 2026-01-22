import { useState } from 'react'
import { useBottleStore } from '@/store/bottleStore'
import { Bottle } from '@/types'
import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import { Card } from '@/components/UI/Card'
import { BOTTLE_TYPES, BOTTLE_TYPE_LABELS } from '@/config/constants'
import './BottleForm.css'

export const BottleForm = () => {
  const addBottle = useBottleStore((state) => state.addBottle)
  const [amount, setAmount] = useState<string>('')
  const [type, setType] = useState<'milk' | 'water' | 'formula'>(BOTTLE_TYPES.MILK)
  const [notes, setNotes] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const amountNum = Number(amount)
    if (amountNum > 0) {
      addBottle({
        date: new Date(),
        amount: amountNum,
        type,
        notes: notes || undefined,
      })
      setAmount('')
      setNotes('')
    }
  }

  return (
    <Card title="Ajouter un biberon" className="bottle-form">
      <form onSubmit={handleSubmit} className="bottle-form-content">
        <Input
          label="Quantité (ml)"
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <div className="form-group">
          <label htmlFor="type" className="input-label">
            Type
          </label>
          <select
            id="type"
            className="input"
            value={type}
            onChange={(e) => setType(e.target.value as Bottle['type'])}
          >
            <option value={BOTTLE_TYPES.MILK}>
              {BOTTLE_TYPE_LABELS[BOTTLE_TYPES.MILK]}
            </option>
            <option value={BOTTLE_TYPES.WATER}>
              {BOTTLE_TYPE_LABELS[BOTTLE_TYPES.WATER]}
            </option>
            <option value={BOTTLE_TYPES.FORMULA}>
              {BOTTLE_TYPE_LABELS[BOTTLE_TYPES.FORMULA]}
            </option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="notes" className="input-label">
            Notes (optionnel)
          </label>
          <textarea
            id="notes"
            className="input"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
          />
        </div>
        <Button type="submit" fullWidth>
          Enregistrer
        </Button>
      </form>
    </Card>
  )
}
