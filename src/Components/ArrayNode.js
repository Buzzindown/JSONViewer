import React, { Component } from 'react'
import TreeNode from './TreeNode'
import { v4 as newKey } from 'uuid'

class ArrayNode extends Component {
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

       const list = data.map((value, index) => {
            return (<TreeNode 
                        key={newKey()} 
                        keyName={"[ " + index + " ]"} 
                        data={value}
                    />)
        })
        
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
        const {keyName} = this.state
        return (<li>
                 <button 
                    type="button" 
                    onClick={() => this.toggleShowing()}>
                    {keyName}
                 </button>
              </li>)
    }
    
    render() {
        return (
            this.state.showing ? this.renderShowing() : this.renderNotShowing()
        )
    }
}

export default ArrayNode
