import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import {LandPage} from './pages/LandPage'

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandPage/>} />
            </Routes>
        </Router>
    );
}