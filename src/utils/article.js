import { formatDateToMonthDay } from './date'

/**
 * @method getPublishedFormatDate
 * @param  {Object} article { date: Date, category: String }
 * @return {String}         // '{category} / {date}'
 */
export const getPublishedFormatDate = article => {
  const date = formatDateToMonthDay(article.date)
  const category = article.category || ''

  return `${category} / ${date}`
}