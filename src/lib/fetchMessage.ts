export const fetchMessage = async ({
  name,
  email,
  message
}: {
  name: string
  email: string
  message: string
}) => {
  await fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify({ name, email, message })
  })
}
