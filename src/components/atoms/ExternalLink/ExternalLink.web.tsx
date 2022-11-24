import { Props } from './ExternalLink.types'

export const ExternalLink = ({ children, href }: Props) => {
  return (
    <a href={href} style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer'>
      {children}
    </a>
  )
}
