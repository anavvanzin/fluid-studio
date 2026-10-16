type FigureProps = {
  src: string
  caption: string
  alt?: string
}

export function Figure({ src, caption, alt }: FigureProps) {
  return (
    <figure className="figura">
      <img src={src} alt={alt ?? caption} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
