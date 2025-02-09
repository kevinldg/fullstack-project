import {useEffect, useState} from "react";
import {fetchBookmarks} from "../../services/bookmarkService.js";
import Bookmark from "../../components/Bookmark.jsx";

const loadBookmarks = async (setBookmarks, setLoading, setError) => {
    try {
        const data = await fetchBookmarks();
        setBookmarks(data);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
};

export default function ViewBookmarks() {
    const [bookmarks, setBookmarks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadBookmarks(setBookmarks, setLoading, setError);
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="p-4 flex flex-col gap-4">
            <h1 className="text-xl font-bold">Bookmarks</h1>
            <div className="flex flex-col gap-4">
                {bookmarks.map(bookmark => (
                    <Bookmark
                        key={bookmark.id}
                        name={bookmark.name}
                        url={bookmark.url}
                        favicon={bookmark.favicon}
                    />
                ))}
            </div>
        </div>
    );
}