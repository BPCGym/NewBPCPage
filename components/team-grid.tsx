import Image from 'next/image'
import { CtaLink } from '@/components/cta-link'
import { mailto, team } from '@/lib/site'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function TeamGrid() {
  return (
    <section aria-labelledby="team-title" className="border-t border-border py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Teamet</p>
          <h2 id="team-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Menneskene bak BPC.
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I resepsjonen, på gruppetimene og i salen møter du folk som kjenner gymmet og medlemmene.
          </p>
        </div>

        {team.length > 0 ? (
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <li key={member.name} className="flex flex-col gap-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`Portrett av ${member.name}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-4xl font-semibold text-muted-foreground" aria-hidden="true">
                      {initials(member.name)}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="pt-1 text-pretty leading-relaxed text-muted-foreground">{member.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-start gap-5 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Vil du vite hvem som er på jobb, eller snakke med en av instruktørene? Ta kontakt, så setter vi deg i
              forbindelse med rett person.
            </p>
            <CtaLink href={mailto('Spørsmål til BPC')} arrow>
              Kontakt oss
            </CtaLink>
          </div>
        )}
      </div>
    </section>
  )
}
