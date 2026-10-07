import { Fragment } from 'react'

/**
 * Renders **bold** segments inside a translated string, and fills
 * {placeholder} tokens from `values`.
 *   <RichText text="Hi, I'm **{name}**" values={{ name: 'Ali' }} />
 */
export default function RichText({ text, values = {} }) {
  const filled = text.replace(/\{(\w+)\}/g, (match, key) =>
    key in values ? values[key] : match
  )

  return filled.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  )
}
