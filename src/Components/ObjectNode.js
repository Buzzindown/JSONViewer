import React, { Component } from 'react'
import TreeNode from './TreeNode.js'
import { v4 as newKey } from 'uuid'

class ObjectNode extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            showing: false,
            keyName: this.props.keyName,
            data: this.props.data
        }

    }

    toggleShowing = () => {
        this.setState({
            showing: !this.state.showing
        })
    }

    renderShowing = () => {
        const {keyName, data} = this.state
        let list = []
        for(let key in data){
            list.push(<TreeNode 
                        key={newKey()} 
                        data={data[key]} 
                        keyName={key}
                      />)
        }
        return (<li>
                 <button 
                    type="button" 
                    onClick={() => this.toggleShowing()}>
                    {keyName}
                 </button>
                 <ul>
                     {list}
                 </ul>
              </li>)
    }

    renderNotShowing = () => {
        return (<li>
                 <button 
                    type="button" 
                    onClick={() => this.toggleShowing()}>
                    {this.state.keyName}
                 </button>
              </li>)
    }
    
    render() {
        return (
            this.state.showing ? this.renderShowing() : this.renderNotShowing()
        )
    }
}

export default ObjectNode
