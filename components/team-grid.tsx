import Image from 'next/image'
import { CtaLink } from '@/components/cta-link'
import { mailto, team, teamGroups } from '@/lib/site'

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
          <div className="flex flex-col gap-14 md:gap-20">
            {teamGroups.map((group) => (
              <div key={group.id} className="flex flex-col gap-6">
                <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                  <h3 id={`team-${group.id}`} className="text-xl font-semibold tracking-tight md:text-2xl">
                    {group.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">{group.members.length}</span>
                </div>
          <ul aria-labelledby={`team-${group.id}`} className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {group.members.map((member) => (
              <li key={member.name} className="flex flex-col gap-3">
                <div className="relative aspect-[1587/2245] overflow-hidden rounded-2xl bg-muted">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`Portrett av ${member.name}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-4xl font-semibold text-muted-foreground" aria-hidden="true">
                      {initials(member.name)}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-semibold md:text-lg">{member.name}</h4>
                  {member.role ? <p className="text-sm font-medium text-primary">{member.role}</p> : null}
                  {member.bio ? (
                    <p className="pt-1 text-pretty leading-relaxed text-muted-foreground">{member.bio}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
              </div>
            ))}
          </div>
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
