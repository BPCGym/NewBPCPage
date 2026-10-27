// Temporary BPC Velvære badge until the real logo is ready: reuses the BPC badge and swaps the subtitle.
export function VelvaereLogo({ className, title = 'BPC Velvære logo' }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 1482 1482" role="img" aria-label={title} className={className}>
      <image href="/images/bpc-logo.png" width="1482" height="1482" />
      <rect x="520" y="950" width="440" height="150" fill="#000" />
      <text
        x="741"
        y="1098"
        textAnchor="middle"
        textLength="640"
        lengthAdjust="spacingAndGlyphs"
        fill="#fff"
        fontSize="172"
        fontWeight="700"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        VELVÆRE
      </text>
    </svg>
  )
}
