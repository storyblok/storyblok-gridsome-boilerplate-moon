import { formatDateToMonthDay } from './date'

/**
 * @method getPublishedFormatDate
 * @param  {Object} article { date: Date, label: String }
 * @return {String}         // '{label} / {date}'
 */
export const getPublishedFormatDate = article => {
  const date = formatDateToMonthDay(article.date)
  const label = article.label || ''

  return `${label} / ${date}`
}