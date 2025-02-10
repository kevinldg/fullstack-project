import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function AddBookmarkPage() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const favicon = url + "/favicon.ico";
            const response = await axios.post("/api/bookmarks/add", { name, url, favicon });

            if (response.status === 201 || response.status === 200) {
                navigate("/bookmarks");
            }
        } catch (error) {
            console.error("Error adding bookmark:", error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Add Bookmark</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label>
                    <p>Name</p>
                    <input type="text" value={name} placeholder="Name" onChange={event => setName(event.target.value)} className="border-black border px-2 py-1" />
                </label>
                <label>
                    <p>URL</p>
                    <input type="text" value={url} placeholder="URL" onChange={event => setUrl(event.target.value)} className="border-black border px-2 py-1" />
                </label>
                <button className="w-32 p-2 border-black border text-center hover:bg-neutral-100">Add Bookmark</button>
            </form>
        </div>
    );
}