/**
 * Utilitaires généraux pour l'application
 */

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const formatNumber = (value: number, decimals = 0): string => {
  return new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

export const generateId = (): string => {
  return crypto.randomUUID()
}

// export const debounce = <T extends (...args: any[]) => any>(
//   func: T,
//   wait: number
// ): ((...args: Parameters<T>) => void) => {
//   let timeout: NodeJS.Timeout | null = null

//   return (...args: Parameters<T>) => {
//     if (timeout) clearTimeout(timeout)
//     timeout = setTimeout(() => func(...args), wait)
//   }
// }
