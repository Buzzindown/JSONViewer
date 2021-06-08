import './Styles/style.css'
import ParentForApi from './Components/ParentForApi.js'

function App() {


    const test = {
                    "quiz":{
                        "sport": {
                            "q1": {
                                "question": "Which one is correct team name in NBA?",
                                "options": [
                                    "New York Bulls",
                                    "Los Angeles Kings",
                                    "Golden State Warriros",
                                    "Huston Rocket"
                                ],
                                "answer": "Huston Rocket"
                            }
                        },
                        "maths": {
                            "q1": {
                                "question": "5 + 7 = ?",
                                "options": [
                                    "10",
                                    "11",
                                    "12",
                                    "13"
                                ],
                                "answer": "12"
                            },
                            "q2": {
                                "question": "12 - 8 = ?",
                                "options": [
                                    "1",
                                    "2",
                                    "3",
                                    "4"
                                ],
                                "answer": "4"
                            }
                        }
                    }
                }



     for(let o in test){
        console.log("o val " + o + " array value " + Array.isArray(test[o]))
    }

  

    // for testing, pass a JSON object as a "data" prop to a tree node component

  return (
    <div className="App">
      <h1>JSON Viewer</h1>
      <ParentForApi/>
    </div>
  );


}

export default App;
