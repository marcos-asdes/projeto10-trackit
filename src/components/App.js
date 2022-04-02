import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./LoginScreen.js";
/* import RegisterScreen from "./RegisterScreen.js"; */
/* import HabitsScreen from "./HabitsScreen.js"; */
/* import TodayScreen from "./TodayScreen.js"; */
/* import HistoricScreen from "./HistoricScreen.js"; */

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                {/* <Route path="/register" element={<RegisterScreen />} /> */}
                {/* <Route path="/habits" element={<HabitsScreen />} /> */}
                {/* <Route path="/today" element={<TodayScreen/>} /> */}
                {/* <Route path="/historic" element={<HistoricScreen />} /> */}
            </Routes>
        </BrowserRouter>
    )
}