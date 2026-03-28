// React hook = Special function that allows functional components
//                to use React features without writing class components (React v16.8)
//                (useState, useEffect, useContext, useReducer, useCallback, and more...)

// useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the Virtual DOM.
//              [name, setName]

import Counter from './Counter.jsx';
import MyComponent from './MyComponent.jsx';

function App() {
    return (
        <div className="app-container">
            <h1>My React App</h1>
            <Counter />
            <MyComponent />
        </div>
    );
}
export default App