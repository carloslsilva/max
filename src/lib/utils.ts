export function formatDateRange(
  startDate: Date | string,
  endDate: Date | string | null
) {
  const locale = 'en-US'
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    timeZone: 'Europe/London'
  }

  const formattedStartDate = new Date(startDate).toLocaleDateString(
    locale,
    options
  )
  const formattedEndDate =
    endDate !== null
      ? new Date(endDate).toLocaleDateString(locale, options)
      : 'PRESENT'

  return `${formattedStartDate} - ${formattedEndDate}`
}
