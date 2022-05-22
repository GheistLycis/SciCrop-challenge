import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import TemplateDefault from "./templates/Default"
import Map from "./pages/Map"
import Register from "./pages/Register"

export default function App() {
    return (
        <TemplateDefault>
            <Router>
                <Routes>
                    <Route path="/" element={<Map />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </TemplateDefault>
    )
}