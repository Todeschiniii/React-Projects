import { StrictMode } from 'react' // Detecta erros e práticas ruins no código, mostra avisos no console, ajuda a evitar bugs futuros.
import { createRoot } from 'react-dom/client' // Cria a Raíz do aplicativo React, onde os componentes serão renderizados.
import './index.css' // Importa o arquivo de estilos CSS para o aplicativo.
import App from './Aplicativo.jsx' // Importa o componente principal do aplicativo, que é o ponto de entrada para a aplicação React.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>  
)
