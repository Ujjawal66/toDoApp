import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: min-content;
  border: 2px solid var(--color-grey-light);
border-radius: 50%;
&:hover {
  border-color: var(--gradian-color1);
}
  span{
    display: flex;
position: relative;
justify-content: center; align-items: center;
height: 3rem;
width: 3rem;
font-size: 1.3em;
background: linear-gradient(to right,var(--gradian-color1) 20%, var(--gradian-color2) 40%, var(--color-light)70%);
-webkit-mask-repeat: no-repeat;
mask-repeat: no-repeat;
mask-position: center;
mask-size: 45%;
}
transition: 250ms;
`

const LogoDesignA = ({url = null}) => {
  const [val, setVal] = useState(45);
  const logoStyle = {
    maskImage: `url(${url})`,
    WebkitMaskImage: `url(${url})`,
  }
  const addStyle = {
    background: 'var(--white)',
    maskImage: `url(ship/add.svg)`,
    WebkitMaskImage: `url(ship/add.svg)`,
  }
  return (
    <Container>
      <span style={url? logoStyle:addStyle}></span>
    </Container>
  )
}

export default LogoDesignA;