import React, {useState, useEffect} from "react";

// useEffect() = React Hook que diz ao React PARA EXECUTAR ESTE CÓDIGO QUANDO (escolha um):
//              Este componente renderiza novamente
//              Este componente é montado
//              O estado de um valor muda

// useEffect(function, [dependencies])

// 1. useEffect(() => {})           // Executa após cada renderização
// 2. useEffect(() => {}, [])       // Executa apenas na montagem (mount)
// 3. useEffect(() => {}, [value])  // Executa na montagem + quando o valor muda

// USOS
// #1 Event Listeners
// #2 Manipulação de DOM
// #3 Subscriptions (atualizações em tempo real)
// #4 Buscando dados de uma API
// #5 Limpeza (clean up) quando um componente é desmontado

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        return () => {
            // CÓDIGO DE LIMPEZA (CLEANUP)
        }
    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleRezise)
        console.log("EVENT LISTENER ADDED");
        return () => {
            window.removeEventListener("resize", handleRezise);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`; 
    }, [width, height]);

    function handleRezise(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (<>
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br/>
            <button onClick={changeColor}>Change Color</button>
        </div>
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
    </>);
}

export default MyComponent;