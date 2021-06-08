import {Component} from 'react'
import axios from 'axios'
import TreeNode from './TreeNode.js'

class ParentForApi extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             list: []
        }
    }

    APIfetch = () => {
        axios.get('https://random-data-api.com/api/vehicle/random_vehicle')
        .then(response => {
        let temp = this.state.list
        temp.push(response.data)
         this.setState({
             list: temp
         })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
      }
    
    render() {
        return (
            <div>
                <button onClick={() => this.APIfetch()}>fetch data</button>
                <TreeNode data={this.state.list} keyName="root"/>
            </div>
        )
    }
}

export default ParentForApi

