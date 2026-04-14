import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react'

export type AlertVariant = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps {
  variant?: AlertVariant
  title?: string
  children: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
  className?: string
}

const variantStyles: Record<AlertVariant, string> = {
  info: 'bg-[#eaf4fb] text-accent border-[#aed6f1]',
  success: 'bg-[#eafaf1] text-[#1a7a45] border-[#a9dfbf]',
  warning: 'bg-[#fef9e7] text-[#9a6108] border-[#f9e4b7]',
  error: 'bg-[#fef2f2] text-danger border-[#fca5a5]',
}

const icons: Record<AlertVariant, React.ReactNode> = {
  info: <Info className="h-4 w-4 flex-shrink-0" />,
  success: <CheckCircle className="h-4 w-4 flex-shrink-0" />,
  warning: <AlertTriangle className="h-4 w-4 flex-shrink-0" />,
  error: <XCircle className="h-4 w-4 flex-shrink-0" />,
}

export function Alert({
  variant = 'info',
  title,
  children,
  dismissible = false,
  onDismiss,
  className = '',
}: AlertProps) {
  return (
    <div
      className={[
        'flex gap-3 px-4 py-3 border rounded',
        variantStyles[variant],
        className,
      ].join(' ')}
    >
      <div className="flex-shrink-0 mt-0.5">
        {icons[variant]}
      </div>
      <div className="flex-1">
        {title && (
          <div className="font-semibold text-sm mb-1">{title}</div>
        )}
        <div className="text-sm">{children}</div>
      </div>
      {dismissible && (
        <button
          onClick={onDismiss}
          className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
