import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Bottle, BabyProfile } from '@/types'
import { STORAGE_KEYS } from '@/config/constants'
import { generateId } from '@/lib/utils'

interface BottleStore {
  bottles: Bottle[]
  babyProfile: BabyProfile | null
  addBottle: (bottle: Omit<Bottle, 'id'>) => void
  updateBottle: (id: string, bottle: Partial<Bottle>) => void
  deleteBottle: (id: string) => void
  setBabyProfile: (profile: BabyProfile) => void
}

export const useBottleStore = create<BottleStore>()(
  persist(
    (set) => ({
      bottles: [],
      babyProfile: null,
      addBottle: (bottle) =>
        set((state) => ({
          bottles: [
            ...state.bottles,
            { ...bottle, id: generateId() },
          ],
        })),
      updateBottle: (id, updatedBottle) =>
        set((state) => ({
          bottles: state.bottles.map((bottle) =>
            bottle.id === id ? { ...bottle, ...updatedBottle } : bottle
          ),
        })),
      deleteBottle: (id) =>
        set((state) => ({
          bottles: state.bottles.filter((bottle) => bottle.id !== id),
        })),
      setBabyProfile: (profile) => set({ babyProfile: profile }),
    }),
    {
      name: STORAGE_KEYS.BOTTLE_STORAGE,
      storage: createJSONStorage(() => localStorage),
    }
  )
)
