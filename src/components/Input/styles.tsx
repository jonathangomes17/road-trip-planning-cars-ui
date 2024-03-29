import React from 'react'
import styled, { css } from 'styled-components'
import IInput from './types'

export const BaseInput = styled.input`
  box-sizing: border-box;
  margin: 0;
  font-variant: tabular-nums;
  list-style: none;
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 1rem 2rem;
  color: rgba(0, 0, 0, 0.65);
  font-size: 1.5rem;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;

  ${(props: IInput) =>
    props.disabled &&
    css`
      background-color: #d6d6d6;
      cursor: not-allowed;
    `}
`

const RTPCInput: React.FC<IInput> = (props) => {
  return <BaseInput {...props} />
}

export default RTPCInput
