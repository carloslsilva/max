import { Studio } from '@src/components/Studio'

// Ensures the Studio route is statically generated
export const dynamic = 'force-static'

// Set the right `viewport`, `robots` and `referer` meta tags
export { metadata } from 'next-sanity/studio/metadata'

export default function StudioPage() {
  return <Studio />
}
