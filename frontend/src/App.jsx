import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import Map from "./pages/Map"
import Register from "./pages/Register"

import "./styles/App.css"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Map />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}