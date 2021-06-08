import React, { Component } from 'react'
import ValueNode from './ValueNode.js'
import ObjectNode from './ObjectNode.js'
import ArrayNode from './ArrayNode.js'

class TreeNode extends Component {

    constructor(props) {
        super(props)

        this.state = {
             keyName: this.props.keyName,
             data: this.props.data
        }
    }

    isValue(object){
        if(object === null || typeof object === 'undefined' || typeof object === 'object') {
            return false
        }
        return true
    }

    isObject(object){
        if(object !== null && typeof object === 'object' && !Array.isArray(object)) {
            return true
        }
        return false
    }

    isArray(object){
        if(typeof object === 'object' && Array.isArray(object)) {
            return true
        }
        return false
    }

    
    render() {
        
        const { keyName, data } = this.state 
        console.log("FROM NODE " + JSON.stringify(data))
        if(this.isValue(data)){

           return <ValueNode data={data} keyName={keyName}/>

        }else if(this.isObject(data)){

            return <ObjectNode data={data} keyName={keyName}/>

        }else if(this.isArray(data)){

            return <ArrayNode data={data} keyName={keyName}/>

        }

        return <h1>ERROR</h1>
    }
}

export default TreeNode
