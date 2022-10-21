import React from 'react'
import { StyledFormButton } from './Styles'

const StepperControl = () => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
    <span>
    <StyledFormButton>Back</StyledFormButton>
    <StyledFormButton>Next</StyledFormButton>
    </span> </div>
  )
}

export default StepperControl