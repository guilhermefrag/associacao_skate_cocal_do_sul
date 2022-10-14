import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import {Cart} from './pages/Cart'

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </Router>
    );
}