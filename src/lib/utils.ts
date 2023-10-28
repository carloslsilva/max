export function formatDateRange(
  startDate: Date | string,
  endDate: Date | string
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
  const formattedEndDate =
    new Date(endDate) < new Date('2050-01-01')
      ? new Date(endDate).toLocaleDateString(locale, options)
      : 'PRESENT'

  return `${formattedStartDate} - ${formattedEndDate}`
}
