export type TermsBlock = string | { list: string[] } | { heading: string }

export type TermsSection = {
  id: string
  title: string
  blocks: TermsBlock[]
}

export type TermsDocument = {
  id: string
  title: string
  intro: string[]
  sections: TermsSection[]
}

export const membershipTerms: TermsDocument = {
  id: 'medlemsvilkar',
  title: 'Medlemsbetingelser og vilkår',
  intro: [
    'Medlemsbetingelsene og vilkårene trer i kraft ved inngåelse av kontrakt og er bindende for begge parter. Kontraktinngåelsen gjelder fra medlemsvilkårene er akseptert og første betaling foretatt.',
    'Det er medlemmets plikt å sette seg inn i senterets rømningsplan/branninstruks. Denne finner du ved nødutgangsdøren ved inngangsporten på senteret.',
  ],
  sections: [
    {
      id: 'rettigheter-og-plikter',
      title: '1. Rettigheter og plikter som medlem',
      blocks: [
        { heading: 'Bergen Performance Center (BPC)' },
        {
          list: [
            'Foretar adgangskontroll ved at medlemmet registrerer seg ved hjelp av medlemsbrikke, adgangskort, QR-kode eller annen tilgjengelig adgangsløsning.',
            'Vil kunne foreta kontroll av ID i senteret.',
            'Kan med rimelig varsel holde stengt eller redusere tilbud og åpningstider i forbindelse med helligdager og offentlige fridager.',
            'Forbeholder seg retten til å stenge senteret ved uforutsette avbrudd i driften som ligger utenfor BPCs kontroll.',
            'Fraskriver seg ansvar for tap og skader på personer eller gjenstander som oppstår under eller som følge av opphold i senteret, herunder tap og skade på klær og personlige eiendeler, med mindre senteret har opptrådt uaktsomt.',
            'Fastsetter de regler som gjelder i senteret. Medlemmet forplikter seg til å følge de anvisninger og regler som til enhver tid er fastsatt av BPC.',
            'Har rett til å overdra denne kontrakten med tilhørende rettigheter og forpliktelser til tredjepart.',
            'Etterstreber et dopingfritt miljø i enhver aktivitet i regi av BPC.',
            'Behandler kundedata og personlig informasjon i henhold til gjeldende norsk lovgivning og personvernregelverket.',
          ],
        },
        { heading: 'Medlemmet' },
        {
          list: [
            'Plikter å oppdatere personopplysninger ved flytting eller endring av navn, telefonnummer, e-postadresse eller andre relevante kontaktopplysninger.',
            'Plikter å oppdatere betalingsinformasjon ved bytte av bankkort eller annen betalingsmåte.',
            'Aksepterer at BPC fører besøksstatistikk for å administrere medlemskapet og optimalisere treningstilbudet.',
            'Står selv ansvarlig for at egen helsetilstand ikke medfører helsemessig risiko ved deltakelse i aktivitetene på senteret.',
            'Er innforstått med at medlemskapet er personlig og ikke kan benyttes av eller overdras til en annen person.',
            'Har ikke anledning til å benytte egen adgang til å slippe inn andre personer. Brudd på dette kan føre til bortvisning, sperring eller avslutning av medlemskapet.',
            'Er ansvarlig for alle passeringer foretatt med egen adgangsbrikke, adgangskort, QR-kode eller annen personlig adgangsløsning.',
            'Skal umiddelbart gi Bergen Performance Center beskjed dersom adgangsbrikke eller adgangskort blir mistet eller medlemmet har grunn til å tro at uvedkommende har fått tilgang til medlemskapet.',
            'Er selv ansvarlig for egne eiendeler og verdisaker.',
            'Aksepterer at det som hovedregel ikke kan kreves refusjon av treningsavgift eller oppsigelse av medlemskapet dersom senteret må holde midlertidig stengt som følge av uforutsette driftsavbrudd utenfor BPCs kontroll.',
            'Plikter å sette seg inn i gjeldende aldersgrenser og øvrige regler for bruk av senteret.',
            'Skal ikke bruke dopingpreparater som omfattes av gjeldende dopingregelverk. Bruk av dopingmidler kan anses som vesentlig mislighold av medlemsavtalen og kan gi BPC rett til å avslutte medlemskapet og utestenge medlemmet.',
          ],
        },
      ],
    },
    {
      id: 'kontraktsbestemmelser',
      title: '2. Generelle kontraktsbestemmelser',
      blocks: [
        'Medlemskap med 12 måneders bindingstid løper i minimum 12 måneder fra medlemskapets startdato.',
        'Etter utløpet av bindingstiden går medlemskapet over til et løpende medlemskap i henhold til gjeldende medlemsvilkår og oppsigelsesbestemmelser.',
        'Medlemmet kan til enhver tid oppgradere medlemskapet for å få tilgang til flere konsepter og tilleggstjenester i samsvar med Bergen Performance Centers til enhver tid gjeldende tilbud. Oppgraderinger kan tre i kraft umiddelbart.',
        'Nedgradering av medlemskap kan som hovedregel ikke gjøres med virkning innenfor gjeldende bindingstid. Nedgradering vil tidligst kunne tre i kraft etter at vilkårene for det eksisterende medlemskapet tillater dette.',
        'Medlemmer som innehar et medlemskap som Bergen Performance Center ikke lenger tilbyr, vil ved endring av medlemskapet kunne bli overført til Bergen Performance Centers til enhver tid gjeldende medlemskapsstruktur og vilkår.',
        'Studenter tilbys den til enhver tid gjeldende rabattsats dersom BPC tilbyr studentmedlemskap.',
        'Studentrabatt forutsetter at medlemmet kan fremvise gyldig studentdokumentasjon når BPC ber om dette. Dersom vilkårene for studentrabatt ikke lenger er oppfylt, kan medlemsavgiften justeres til gjeldende ordinær pris.',
        'Bergen Performance Center kan foreta endringer i medlemsavgifter i samsvar med gjeldende avtalevilkår og lovgivning.',
        'Bergen Performance Center er ikke ansvarlig for hindringer eller begrensninger som reduserer treningstilbudet når forholdet ligger utenfor Bergen Performance Centers kontroll og BPC ikke med rimelighet kunne forutse eller overvinne konsekvensene av forholdet. Dette kan eksempelvis være myndighetspålegg, pandemi, naturhendelser eller andre ekstraordinære forhold.',
      ],
    },
    {
      id: 'betaling',
      title: '3. Betaling av medlemskapet',
      blocks: [
        'Betaling for resterende dager i inneværende måned samt eventuell innmeldingsavgift kan bli belastet ved inngåelse av medlemsavtalen.',
        'Videre medlemsavgift belastes i henhold til betalingsplanen som gjelder for det aktuelle medlemskapet.',
        'Medlemmet er ansvarlig for at gyldig betalingsinformasjon til enhver tid er registrert.',
        'BPC forbeholder seg retten til å regulere medlemskapsprisen i samsvar med gjeldende vilkår.',
        'Bergen Performance Center AS, org.nr. 912 202 305, er avtalepart og ansvarlig for medlemskapet og betalingstransaksjoner knyttet til medlemsavtalen.',
      ],
    },
    {
      id: 'angrerett',
      title: '4. Angrerett',
      blocks: [
        'Ved medlemskap som omfattes av angrerettloven har medlemmet den angreretten som følger av gjeldende lovgivning.',
        'Angrefristen er normalt 14 dager fra avtalen ble inngått.',
        'Angrerettskjema gjøres tilgjengelig for medlemmet i forbindelse med innmeldingen.',
        'Dersom medlemmet uttrykkelig ber om at medlemskapet skal tas i bruk før angrefristen er utløpt, kan BPC ha rett til betaling for den delen av tjenesten som er levert frem til angreretten benyttes, i den utstrekning dette følger av gjeldende lovgivning.',
      ],
    },
    {
      id: 'manglende-betaling',
      title: '5. Prosedyre ved manglende betaling',
      blocks: [
        'Ved uteblitt betaling til avtalt forfallsdato kan kravet bli oversendt til tredjepart for videre inndrivelse.',
        'De til enhver tid gjeldende bestemmelsene i inkassolovgivningen vil da gjelde.',
        'Ved mislighold av betalingsforpliktelsene kan BPC sperre medlemmets adgang til senteret.',
        'Sperring av adgang fritar ikke medlemmet fra betalingsforpliktelsene som følger av medlemsavtalen.',
        'Ved vesentlig betalingsmislighold kan BPC gjøre gjeldende de rettigheter som følger av medlemsavtalen og gjeldende lovgivning.',
      ],
    },
    {
      id: 'oppsigelse',
      title: '6. Oppsigelse av medlemsavtalen',
      blocks: [
        'Oppsigelse av medlemskapet registreres via medlemmets personlige medlemsprofil eller den løsningen BPC til enhver tid stiller til disposisjon for oppsigelse.',
        'Et medlemskap med bindingstid kan sies opp før bindingstidens utløp, men medlemskapet og betalingsforpliktelsen vil som hovedregel løpe ut den avtalte bindingstiden.',
        'Etter utløpet av bindingstiden gjelder medlemskapets ordinære oppsigelsestid.',
        'Ved oppsigelse av løpende medlemskap opphører medlemskapet ved utgangen av den første hele kalendermåneden som kommer etter oppsigelsesmåneden, med mindre annet uttrykkelig fremgår av medlemsavtalen.',
        'Eksempel: Dersom oppsigelse registreres i november, opphører medlemskapet den 31. desember.',
        'BPC forbeholder seg retten til å avslutte medlemsavtalen dersom medlemmet vesentlig misligholder medlemsavtalen eller BPCs interne regler.',
      ],
    },
    {
      id: 'frysing',
      title: '7. Frysing av medlemskap',
      blocks: [
        'Medlemmet kan søke om frysing av medlemskapet dersom ett av følgende forhold inntreffer:',
        {
          list: [
            'Sykdom med sammenhengende sykdomsperiode på mer enn én måned.',
            'Graviditet.',
            'Midlertidig utstasjonering eller fravær i forbindelse med arbeid, studier eller militærtjeneste.',
          ],
        },
        'Medlemskapet kan normalt ikke fryses som følge av ordinær ferieavvikling.',
        'Fryseperioden er minimum én måned og maksimum seks måneder, med mindre annet særskilt avtales.',
        'Fryseperioden gis normalt i hele kalendermåneder og må avtales på forhånd.',
        'Frysing av medlemskap innvilges normalt ikke med tilbakevirkende kraft.',
        'BPC kan kreve relevant dokumentasjon, for eksempel sykmelding, legeattest eller bekreftelse fra arbeidsgiver eller studiested. Dokumentasjonen må angi hvilken periode søknaden gjelder.',
      ],
    },
    {
      id: 'trivselsgaranti',
      title: '8. Trivselsgaranti',
      blocks: [
        'Alle medlemskap hos Bergen Performance Center AS med bindingstid som markedsføres med Trivselsgaranti omfattes av denne ordningen.',
        'For medlemskap som omfattes av kampanjen kan første måned faktureres med:',
        { list: ['kr 99,- for medlemskap Egentrening.', 'kr 199,- for medlemskap Gruppetrening.'] },
        'Eventuelt innmeldingsgebyr fremgår av tilbudet medlemmet inngår.',
        'Etter utløpet av første måned løper medlemskapet videre til ordinær månedspris i henhold til valgt medlemskap.',
        'Medlemskapet har 12 måneders bindingstid og går deretter over til løpende avtale i henhold til gjeldende medlemsvilkår.',
        { heading: '14 dagers fornøydhetsgaranti' },
        'Trivselsgarantien gir medlemmet rett til å trekke seg fra medlemskapet innen 14 dager fra innmeldingsdato, forutsatt at skriftlig varsel er mottatt av Bergen Performance Center AS innen fristens utløp.',
        'Varsel om bruk av Trivselsgarantien skal sendes til post@bpcgym.no.',
        'Ordinær oppsigelse av medlemskapet via medlemsprofilen eller Appen anses ikke som bruk av Trivselsgarantien.',
        'Ordinær oppsigelse reguleres av medlemsavtalens vanlige bestemmelser, herunder eventuell bindingstid.',
        'Trivselsgarantien kan kun benyttes én gang per person.',
        'Ved ny, gjentatt eller reaktivert innmelding kan retten til å benytte Trivselsgarantien bortfalle.',
      ],
    },
  ],
}

export const privacyPolicy: TermsDocument = {
  id: 'personvern',
  title: 'Personvernerklæring',
  intro: [
    'Når du registrerer deg som medlem hos Bergen Performance Center AS, behandler vi personopplysninger om deg. Vi ønsker at du skal være trygg på at opplysningene behandles på en sikker og forsvarlig måte.',
    'Denne personvernerklæringen beskriver hvilke personopplysninger vi behandler, hvorfor vi behandler dem, hvordan opplysningene brukes og hvilke rettigheter du har. Bergen Performance Center AS er behandlingsansvarlig for personopplysningene som omfattes av denne personvernerklæringen.',
  ],
  sections: [
    {
      id: 'hva-er-personopplysninger',
      title: '1. Hva er personopplysninger?',
      blocks: [
        'Personopplysninger er enhver opplysning som direkte eller indirekte kan knyttes til en enkeltperson. Dette kan blant annet være:',
        {
          list: [
            'Navn, adresse, telefonnummer og e-postadresse.',
            'Fødselsdato.',
            'Medlemsinformasjon og profilbilde.',
            'Betalingsinformasjon.',
            'Adgangs- og besøksinformasjon.',
            'Bilder og video dersom en person kan identifiseres.',
          ],
        },
      ],
    },
    {
      id: 'regler',
      title: '2. Hvilke regler gjelder?',
      blocks: [
        'Behandlingen av personopplysninger reguleres blant annet av personopplysningsloven og EUs personvernforordning (GDPR).',
        'Mer informasjon om personvernregelverket finnes hos Datatilsynet på www.datatilsynet.no.',
      ],
    },
    {
      id: 'opplysninger',
      title: '3. Hvilke opplysninger behandler vi?',
      blocks: [
        'Vi behandler personopplysninger som medlemmet selv oppgir ved innmelding og under medlemsforholdet. Dette kan blant annet omfatte:',
        {
          list: [
            'Navn, adresse, telefonnummer, e-postadresse og fødselsdato.',
            'Medlemsnummer og medlemsinformasjon.',
            'Profilbilde.',
            'IP-adresse ved registrering eller bruk av digitale tjenester.',
            'Informasjon om medlemskap og kjøpte tjenester.',
            'Besøks- og adgangshistorikk.',
            'Bookinghistorikk for gruppetimer og andre tjenester.',
            'Informasjon knyttet til betalinger.',
          ],
        },
        'Vi kan også behandle opplysninger som oppstår når medlemmet benytter BPCs tjenester. Dette kan omfatte informasjon om hvor ofte medlemmet benytter senteret, tidspunkt for adgang og andre opplysninger som er nødvendige for å administrere medlemskapet.',
        'Ved bruk av gruppetimer registreres blant annet påmelding og avmelding. Ved bruk av personlig trener eller andre tilleggstjenester kan relevante booking- og betalingsopplysninger behandles.',
        'Selve kortnummeret behandles normalt av BPCs betalingsleverandør og ikke direkte av Bergen Performance Center.',
      ],
    },
    {
      id: 'kamera',
      title: '4. Kameraovervåkning og adgangskontroll',
      blocks: [
        'Bergen Performance Center kan benytte kameraovervåkning i områder hvor det er saklig behov for dette. Formålet kan blant annet være:',
        {
          list: [
            'Å forebygge og avdekke tyveri, hærverk og andre uønskede hendelser.',
            'Å ivareta sikkerheten til medlemmer, ansatte og andre personer på senteret.',
            'Å kontrollere at medlemskap og adgang ikke misbrukes.',
            'Å undersøke konkrete hendelser eller sikkerhetsavvik.',
          ],
        },
        'Kameraovervåkede områder skal være merket i samsvar med gjeldende regelverk.',
        'BPC kan også registrere passeringsbilder eller annen adgangsinformasjon i forbindelse med adgangskontroll dersom dette er nødvendig for å kontrollere at medlemskapet brukes av riktig person.',
      ],
    },
    {
      id: 'formal',
      title: '5. Hva er formålet med behandlingen?',
      blocks: [
        'Vi behandler personopplysninger blant annet for å:',
        {
          list: [
            'Opprette og administrere medlemskapet, og oppfylle medlemsavtalen.',
            'Administrere betaling og fakturering.',
            'Administrere adgang til senteret.',
            'Kommunisere med medlemmet om medlemskapet.',
            'Administrere booking av gruppetimer og andre tjenester.',
            'Forebygge og avdekke misbruk av medlemskap.',
            'Ivareta sikkerheten på senteret, og forebygge og undersøke straffbare eller uønskede hendelser.',
            'Utarbeide statistikk og analysere bruk av våre tjenester.',
            'Utvikle og forbedre BPCs tjenester og treningstilbud.',
            'Oppfylle lovpålagte forpliktelser.',
          ],
        },
      ],
    },
    {
      id: 'behandlingsgrunnlag',
      title: '6. Behandlingsgrunnlag',
      blocks: [
        'All behandling av personopplysninger må ha et gyldig behandlingsgrunnlag. BPC benytter hovedsakelig følgende:',
        { heading: 'Oppfyllelse av avtale' },
        'Vi behandler personopplysninger når dette er nødvendig for å inngå eller oppfylle medlemsavtalen. Dette gjelder blant annet kontaktinformasjon, medlemsinformasjon, adgangsinformasjon, bookinginformasjon og betalingsinformasjon.',
        { heading: 'Rettslig forpliktelse' },
        'Enkelte opplysninger behandles fordi Bergen Performance Center har en lovpålagt plikt til å oppbevare eller utlevere opplysningene. Dette kan blant annet gjelde regnskaps- og betalingsopplysninger.',
        { heading: 'Berettiget interesse' },
        'Vi kan behandle personopplysninger når dette er nødvendig for å ivareta en berettiget interesse, og denne interessen veier tyngre enn hensynet til den registrertes personvern. Dette kan blant annet gjelde forebygging av misbruk av medlemskap, adgangskontroll, sikkerhet, kameraovervåkning, forebygging og oppklaring av tyveri, hærverk og andre hendelser, samt analyse og forbedring av våre tjenester.',
      ],
    },
    {
      id: 'utlevering',
      title: '7. Utlevering av personopplysninger',
      blocks: [
        'Bergen Performance Center benytter forskjellige leverandører som bistår oss med drift og behandling av personopplysninger. Dette kan blant annet være leverandører av medlems- og bookingsystem, betalingsløsninger, IT-systemer, kommunikasjonsløsninger, regnskap og økonomisystemer, samt adgangskontroll og sikkerhetssystemer.',
        'Vår systemleverandør er blant annet SICS Systems.',
        'Når en leverandør behandler personopplysninger på vegne av Bergen Performance Center, inngås det nødvendige avtaler for å sikre at opplysningene behandles i samsvar med gjeldende personvernregelverk.',
        'Personopplysninger utleveres ikke til andre aktører med mindre det foreligger et gyldig behandlingsgrunnlag, medlemmet har samtykket til dette eller BPC er lovpålagt å utlevere opplysningene.',
      ],
    },
    {
      id: 'lagring',
      title: '8. Hvor lenge oppbevarer vi personopplysningene?',
      blocks: [
        'Personopplysninger oppbevares ikke lenger enn det som er nødvendig for formålet de ble samlet inn for. Opplysninger kan likevel oppbevares lenger dersom dette er nødvendig for å oppfylle en lovpålagt plikt eller ivareta et rettskrav.',
        'Når opplysningene ikke lenger er nødvendige, vil de bli slettet eller anonymisert.',
        'Dersom BPC benytter passeringsbilder eller kameraopptak, skal disse opplysningene slettes i samsvar med BPCs gjeldende sletterutiner og personvernregelverket:',
        {
          list: [
            'Videoopptak slettes normalt innen syv dager etter at opptaket er gjort.',
            'Passeringsbilder slettes normalt etter 30 dager.',
          ],
        },
        'Opplysninger kan oppbevares lenger dersom en konkret hendelse gjør dette nødvendig, eksempelvis ved etterforskning av tyveri, skadeverk eller annen hendelse.',
      ],
    },
    {
      id: 'rettigheter',
      title: '9. Dine rettigheter',
      blocks: [
        'Når Bergen Performance Center behandler personopplysninger om deg, kan du ha følgende rettigheter:',
        {
          list: [
            'Rett til innsyn: Du kan be om informasjon om hvilke personopplysninger vi behandler om deg og få kopi av opplysningene.',
            'Rett til retting: Du kan be oss rette opp uriktige eller ufullstendige personopplysninger.',
            'Rett til sletting: I enkelte tilfeller kan du be oss slette personopplysninger om deg.',
            'Rett til begrensning: Du kan i enkelte tilfeller be oss begrense behandlingen av personopplysningene dine.',
            'Rett til å protestere: Du kan i enkelte tilfeller protestere mot behandling som er basert på BPCs berettigede interesser.',
            'Rett til dataportabilitet: Når vilkårene er oppfylt, kan du ha rett til å få utlevert personopplysninger i et strukturert, alminnelig anvendt og maskinlesbart format.',
          ],
        },
        'Det gjelder enkelte unntak og vilkår for disse rettighetene. BPC kan be om nødvendig identifikasjon før en forespørsel behandles, slik at vi kan sikre at personopplysninger ikke utleveres til uvedkommende.',
      ],
    },
    {
      id: 'klage',
      title: '10. Datatilsynet og klagemuligheter',
      blocks: [
        'Dersom du mener at Bergen Performance Center behandler personopplysningene dine i strid med personvernregelverket, ber vi deg gjerne kontakte oss først.',
        'Du har også rett til å sende klage til Datatilsynet. Mer informasjon finnes på www.datatilsynet.no.',
      ],
    },
    {
      id: 'endringer',
      title: '11. Endringer i personvernerklæringen',
      blocks: [
        'Bergen Performance Center kan fra tid til annen oppdatere denne personvernerklæringen. Dette kan blant annet skje dersom våre tjenester endres, vi tar i bruk nye systemer eller det skjer endringer i personvernregelverket.',
        'Oppdatert personvernerklæring gjøres tilgjengelig gjennom BPCs digitale løsninger.',
      ],
    },
  ],
}
