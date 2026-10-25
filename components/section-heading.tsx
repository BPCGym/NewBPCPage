import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  id?: string
  as?: 'h1' | 'h2'
  className?: string
}

export function SectionHeading({ eyebrow, title, id, as: Tag = 'h2', className }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <Tag
        id={id}
        className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl"
      >
        {title}
      </Tag>
    </div>
  )
}
