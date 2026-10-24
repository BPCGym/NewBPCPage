export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-semibold text-foreground">Bergen Performance Center AS</span>
          {' · Org.nr. 912 202 305'}
        </p>
        <p>{`© ${new Date().getFullYear()} BPC. Alle rettigheter reservert.`}</p>
      </div>
    </footer>
  )
}
