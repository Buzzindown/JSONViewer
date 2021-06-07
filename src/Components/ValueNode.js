import React, { Component } from 'react'

class  ValueNode extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            keyName: this.props.keyName,
            data: this.props.data
        }
    }

    
    render() {

        const {keyName, data} = this.state

        return (
            <li>{keyName} : {data}</li>
        )
    }
}

export default  ValueNode
