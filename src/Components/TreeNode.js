import React, { Component } from 'react'

class TreeNode extends Component {
    // this will be our main container class that will return
    // array/object/value depending on it's type
    constructor(props) {
        super(props)
    
        // just want to hold data that we'll pass to one of our object
        this.state = {
             data: this.props.data
        }

        console.log(Object.keys(this.props.data));
    }

    // probably make methods for checking the types 
    // pass this the value part of our kv pairs
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
        if(this.isObject(object) && Array.isArray(object)) {
            return true
        }
        return false
    }

    
    render() {
        const { data } = this.state 
        if(this.isValue(data)){
            // create a value component and pass data
        }else if(this.isObject(data)){
            // create an object component and pass data
        }else if(this.isArray(data)){

        }
        return <h1>lol</h1>
    }
}

export default TreeNode
