export function formatDateRange(
  startDate: Date | string,
  endDate: Date | string | null
) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short'
  }
  const formattedStartDate = new Date(startDate).toLocaleDateString(
    'en-US',
    options
  )
  const formattedEndDate = endDate
    ? new Date(endDate).toLocaleDateString('en-US', options)
    : 'PRESENT'

  return `${formattedStartDate} - ${formattedEndDate}`
}
