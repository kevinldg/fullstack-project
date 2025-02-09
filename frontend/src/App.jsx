import {Route, Routes} from "react-router-dom";
import ViewBookmarks from "./pages/bookmarks/view.jsx";
import Home from "./pages/index.jsx";
import ViewSchedule from "./pages/./schedule/view.jsx";

export default function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                {/* Schedule */}
                <Route path="/schedule" element={<ViewSchedule/>} />
                {/* Bookmarks */}
                <Route path="/bookmarks">
                    <Route index element={<ViewBookmarks/>} />
                </Route>
            </Routes>
        </>
    );
}

