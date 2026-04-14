import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showFirstLast?: boolean
  className?: string
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  className = '',
}: PaginationProps) {
  const pages = []
  const showEllipsisStart = currentPage > 3
  const showEllipsisEnd = currentPage < totalPages - 2

  if (showFirstLast) {
    pages.push(1)
  }

  if (showEllipsisStart) {
    pages.push('ellipsis-start')
  }

  // Show pages around current page
  for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
    pages.push(i)
  }

  if (showEllipsisEnd) {
    pages.push('ellipsis-end')
  }

  if (showFirstLast && totalPages > 1) {
    pages.push(totalPages)
  }

  return (
    <nav className={['flex items-center gap-1', className].join(' ')}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-2 py-1 text-sm text-text hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((page, index) => {
        if (page === 'ellipsis-start' || page === 'ellipsis-end') {
          return (
            <span key={`ellipsis-${index}`} className="px-2 py-1 text-sm text-muted">
              ...
            </span>
          )
        }

        const isActive = page === currentPage
        return (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={[
              'px-3 py-1 text-sm rounded transition-colors',
              isActive
                ? 'bg-accent text-white font-medium'
                : 'text-text hover:bg-surface',
            ].join(' ')}
          >
            {page}
          </button>
        )
      })}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-2 py-1 text-sm text-text hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  )
}
