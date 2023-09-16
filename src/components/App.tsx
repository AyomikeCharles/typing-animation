import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/styles.css'

export interface TypingProps {
  text: string
  speed: number
  stroke: '_' | '|'
  textClassName: string
  strokeClassName: string
  repeat: boolean
  repeatValue: number
}

const Typing = ({ text, speed, stroke, textClassName, strokeClassName, repeat, repeatValue }: TypingProps) => {
  const [alphabet, setAlphabet] = useState('')
  const [index, setIndex] = useState(0)
  const [repeatCount, setRepeatCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setAlphabet((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      } else if (repeat === true) {
        setAlphabet('')
        setIndex(0)
      } else if (repeat === false && repeatCount < repeatValue - 1) {
        setAlphabet('')
        setIndex(0)
        setRepeatCount((prev) => prev + 1)
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => {
      clearInterval(interval)
    }
  }, [text, speed, index, repeat, repeatCount, repeatValue])

  return (
    <>
      <div className={textClassName}>
        {alphabet} <span className={`${strokeClassName} fadeInAndOut`}>{stroke}</span>
      </div>
    </>
  )
}

Typing.defaultProps = {
  text: '',
  speed: 1000,
  stroke: '_',
  textClassName: '',
  strokeClassName: '',
  repeat: true,
  repeatValue: 0,
}

export default Typing
