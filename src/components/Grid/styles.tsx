import React from 'react'
import styled from 'styled-components'

const BaseGrid = styled.div`
  display: flex;
  margin: 0 -0.5rem;
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
`

const RTPCGrid: React.FC = (props) => {
  return <BaseGrid {...props}>{props.children}</BaseGrid>
}

export default RTPCGrid
