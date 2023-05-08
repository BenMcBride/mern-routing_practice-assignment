import React, { useState } from 'react'
import { useParams } from 'react-router'

const Input = () => {
  const { input, color, color2 } = useParams()

  // set color = first color param, set bg color = second color param
  const colors = {
    color: `${color}`,
    backgroundColor: `${color2}`
  }

  const display = (input) => {
    // if input is a number
    if (isNaN(+input) == false) {
      return (
        <h1>The number is: {input}</h1>
      )
    } // if input is not a number
    else {
      return (
        <h1>The word is: hello</h1>
      )
    }
  }

  return (
    <div>
      <div className='box' style={colors}>{display(input)}</div>
    </div>
  )
}
export default Input