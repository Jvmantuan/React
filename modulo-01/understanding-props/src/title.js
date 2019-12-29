'use strict'

import React from 'react'

// Função Pura
const Title = ({ name }) => <h1>Olá, {`${name}!`}</h1>

Title.defaultProps = {
  name: 'Desconhecido'
}

export default Title
