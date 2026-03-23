// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />

import Student from './Student.jsx'

function App() {
    return(
        <>
            <Student name="Spongebob" age={30} isStudent={true}/>
            <Student name="Patrick" age={42}/>
            <Student name="Squidward" age={50}/>
            <Student name="Sandy" age={27} isStudent={true}/>
            <Student />
        </>
    );
}

export default App