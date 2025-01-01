'use client'

import type { ChangeEvent } from 'react'
import { useState } from 'react'

interface UseCharacterLimitProps {
  maxLength: number
  initialValue?: string
}

export function useCharacterLimit({ maxLength, initialValue = '' }: UseCharacterLimitProps) {
  const [value, setValue] = useState(initialValue)
  const [characterCount, setCharacterCount] = useState(initialValue.length)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value
    if (newValue.length <= maxLength) {
      setValue(newValue)
      setCharacterCount(newValue.length)
    }
  }

  return {
    value,
    characterCount,
    handleChange,
    maxLength,
  }
}
