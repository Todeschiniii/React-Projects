import { StrictMode } from 'react' // Detecta erros e práticas ruins no código, mostra avisos no console, ajuda a evitar bugs futuros.
import { createRoot } from 'react-dom/client' // Cria a Raíz do aplicativo React, onde os componentes serão renderizados.
import './index.css'
import App from '../my-react-classes/7/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,  
)
