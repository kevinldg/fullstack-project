import {Route, Routes} from "react-router-dom";
import ViewBookmarks from "./pages/bookmarks/view.jsx";
import Home from "./pages/index.jsx";
import ViewSchedule from "./pages/./schedule/view.jsx";
import AddBookmarkPage from "./pages/bookmarks/add.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import ChatView from "./pages/chat/view.jsx";

export default function App() {

    return (
        <>
            <div className="w-fit mt-4 ml-4 p-2 bg-neutral-200 rounded-full hover:scale-110 transition-transform">
                <a href="/">
                    <FontAwesomeIcon icon={faHouse} className="text-2xl" />
                </a>
            </div>
            <Routes>
                <Route path="/" element={<Home/>} />
                {/* Schedule */}
                <Route path="/schedule" element={<ViewSchedule/>} />
                {/* Bookmarks */}
                <Route path="/bookmarks">
                    <Route index element={<ViewBookmarks/>} />
                    <Route path="add" element={<AddBookmarkPage/>} />
                </Route>
                {/* Chat */}
                <Route path="/chat" element={<ChatView/>} />
            </Routes>
        </>
    );
}

