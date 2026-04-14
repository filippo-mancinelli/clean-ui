import * as RadixAccordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

export interface AccordionItemProps {
  value: string
  title: string
  children: React.ReactNode
  disabled?: boolean
}

export function Accordion({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <RadixAccordion.Root type="single" collapsible className={className}>
      {children}
    </RadixAccordion.Root>
  )
}

export function AccordionItem({ value, title, children, disabled = false }: AccordionItemProps) {
  return (
    <RadixAccordion.Item value={value} disabled={disabled} className="border border-border rounded mb-2">
      <RadixAccordion.Header className="flex items-center justify-between px-4 py-3 bg-surface hover:bg-[#f0f0f0] transition-colors">
        <span className="text-sm font-medium text-text">{title}</span>
        <RadixAccordion.Trigger className="group">
          <ChevronDown className="h-4 w-4 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
      <RadixAccordion.Content className="px-4 py-3 text-sm text-text">
        {children}
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  )
}
