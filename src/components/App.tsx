import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/styles.css'

interface TypingProps {
  text: string[]
  speed: number
  cursor: '_' | '|'
  textClassName: string
  cursorClassName: string
  repeat: boolean
}

const Typing = ({ text, speed, cursor, textClassName, cursorClassName, repeat }: TypingProps) => {
  const [step, setStep] = useState('forward')
  const [alphabet, setAlphabet] = useState('')
  const [index, setIndex] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (wordIndex < text.length) {
        if (step === 'forward') {
          if (index < text[wordIndex].length) {
            setAlphabet((prev) => prev + text[wordIndex][index])
            setIndex((prev) => prev + 1)
          } else {
            if (wordIndex === text.length - 1 && index === text[wordIndex].length && !repeat) {
              clearInterval(interval)
              return
            }
            setStep('backward')
          }
        } else if (step === 'backward') {
          if (index === 0) {
            if (wordIndex === text.length - 1) {
              setStep('forward')
              setWordIndex(0)
            } else {
              setStep('forward')
              setWordIndex((prev) => prev + 1)
            }
          } else {
            setAlphabet((prev) => prev.slice(0, prev.length - 1))
            setIndex((prev) => prev - 1)
          }
        }
      }
    }, speed)

    return () => {
      clearInterval(interval)
    }
  }, [text, speed, index, repeat, step, wordIndex])

  return (
    <>
      <div className={textClassName}>
        {alphabet} <span className={`${cursorClassName} fadeInAndOut`}>{cursor}</span>
      </div>
    </>
  )
}

Typing.defaultProps = {
  text: [],
  speed: 500,
  cursor: '_',
  textClassName: '',
  cursorClassName: '',
  repeat: true,
  repeatValue: 0,
}

export default Typing
