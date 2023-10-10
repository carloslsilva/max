import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => (
  <div className='mx-auto grid max-w-3xl grid-cols-3'>
    <main className='col-start-2 col-end-4'>{children}</main>
  </div>
)
