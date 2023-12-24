import ReactDOM from "react-dom/client"
import {BrowserRouter} from 'react-router-dom'

// root component
import App from "./App"

// css
import './assets/css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)