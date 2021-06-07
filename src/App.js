import TreeNode from './Components/TreeNode.js'

function App() {

    const test = {
        "firstName": "Joe",
        "lastName": "Jackson",
        "gender": "male",
        "age": 28,
        "address": {
            "streetAddress": "101",
            "city": "San Diego",
            "state": "CA"
        },
        "phoneNumbers": [
            { "type": "home", "number": "7349282382" }
        ]
     }

     for(let o in test){
        console.log("o val " + o + " array value " + Array.isArray(test[o]))
    }

  return (
    <div className="App">
      <h1>JSON File Viewer</h1>
      <TreeNode data={test}/>
    </div>
  );
}

export default App;