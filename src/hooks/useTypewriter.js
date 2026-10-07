import { useEffect, useState } from 'react'

/** Types each word out, pauses, deletes it, then moves to the next. */
export function useTypewriter(words, { typeMs = 85, deleteMs = 40, holdMs = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  // Start over when the word list changes (e.g. the language was switched).
  useEffect(() => {
    setText('')
    setIndex(0)
    setDeleting(false)
  }, [words])

  useEffect(() => {
    const word = words[index % words.length]

    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), holdMs)
      return () => clearTimeout(t)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(
      () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
      deleting ? deleteMs : typeMs
    )
    return () => clearTimeout(t)
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs])

  return text
}
