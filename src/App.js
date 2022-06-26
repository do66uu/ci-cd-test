import {useState} from "react";

function App() {
    const [state, setState] = useState(0)

    const increment = () => setState(prev => prev + 1);

    return (
        <div className="App">
            <h1 style={{fontSize: 70, color: 'blue'}}>value = {state}</h1>
            <button
                style={{background: 'pink', color: "white", padding: 15}}
                onClick={increment}
            >
                Increment
            </button>
        </div>
    );
}

export default App;
