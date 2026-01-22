import { format, formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'

export const formatDate = (date: Date): string => {
  return format(date, 'dd/MM/yyyy HH:mm', { locale: fr })
}

export const formatTimeAgo = (date: Date): string => {
  return formatDistanceToNow(date, { addSuffix: true, locale: fr })
}

export const formatDateOnly = (date: Date): string => {
  return format(date, 'dd/MM/yyyy', { locale: fr })
}
