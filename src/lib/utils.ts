export function formatDateRange(
  startDate: Date | string,
  endDate: Date | string | null
) {
  const locale = 'en-US'
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    timeZone: 'Europe/London'
  }

  const formattedStartDate = new Date(startDate).toLocaleDateString(
    locale,
    options
  )
  const formattedEndDate = endDate
    ? new Date(endDate).toLocaleDateString(locale, options)
    : 'PRESENT'

  return `${formattedStartDate} - ${formattedEndDate}`
}
