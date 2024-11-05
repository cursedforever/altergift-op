import { DateTime } from 'luxon'

export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    // These options are needed to round to whole numbers if that's what you want.
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })

  return formatter.format(price)
}

export const computeTimeSince = (dateString: string) => {
  const date = DateTime.fromISO(dateString)
  let diff = DateTime.now().diff(date, 'days').days

  if (diff >= 1) return `il y a ${diff.toFixed(0)} jours`

  diff = DateTime.now().diff(date, 'hours').hours
  if (diff >= 1) return `il y a ${diff.toFixed(0)} heures`

  diff = DateTime.now().diff(date, 'minutes').minutes
  return `il y a ${diff.toFixed(0)} minutes`
}
