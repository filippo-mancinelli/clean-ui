import { type HTMLAttributes } from 'react'

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
  href?: string
}

export function BreadcrumbItem({ children, href, className = '', ...props }: BreadcrumbItemProps) {
  if (href) {
    return (
      <li className={['inline-flex items-center', className].join(' ')} {...props}>
        <a href={href} className="text-sm text-muted hover:text-accent transition-colors">
          {children}
        </a>
      </li>
    )
  }
  return (
    <li className={['inline-flex items-center text-sm text-text', className].join(' ')} {...props}>
      {children}
    </li>
  )
}

export interface BreadcrumbSeparatorProps extends HTMLAttributes<HTMLLIElement> {
  separator?: string
}

export function BreadcrumbSeparator({ separator = '/', className = '' }: BreadcrumbSeparatorProps) {
  return (
    <li className={['inline-flex items-center text-sm text-muted', className].join(' ')}>
      <span className="mx-2">{separator}</span>
    </li>
  )
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  separator?: string
}

export function Breadcrumbs({ children, separator = '/', className = '' }: BreadcrumbsProps) {
  return (
    <nav className={['flex items-center gap-1', className].join(' ')}>
      <ol className="flex items-center gap-1">
        {children}
      </ol>
    </nav>
  )
}
