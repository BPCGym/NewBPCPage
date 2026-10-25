const phrases = ['Bli en del av kulturen', 'Bergen Performance Center', 'Est. 2014']

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {phrases.map((phrase, i) => (
        <span key={phrase} className="flex items-center gap-10">
          <span className={i % 2 === 1 ? 'text-outline' : 'text-foreground'}>{phrase}</span>
          <span aria-hidden="true" className="size-3 rotate-45 border-2 border-primary" />
        </span>
      ))}
    </div>
  )
}

export function MarqueeBand() {
  return (
    <div className="overflow-hidden border-y border-border py-6 md:py-10" role="presentation">
      <p className="sr-only">Bli en del av kulturen. Bergen Performance Center, etablert 2014.</p>
      <div
        aria-hidden="true"
        className="marquee flex w-max text-5xl font-black uppercase italic leading-none tracking-tight md:text-8xl"
      >
        <Row />
        <Row />
      </div>
    </div>
  )
}
