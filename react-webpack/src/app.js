'use strict'

import React from 'react'
import createReactClass from 'create-react-class'

var Title = React.createClass({
    render: function() {
        //return <h1>Título</h1>
        return React.createElement('h1', null, 'Titulo')
    }
})

export default Title