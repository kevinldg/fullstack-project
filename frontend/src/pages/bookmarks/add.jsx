import {useState} from "react";

export default function AddBookmarkPage() {

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`A bookmark was submitted: ${name} ${url}`);
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
                <button className="w-fit px-2 py-1 bg-blue-500 text-white">Add Bookmark</button>
            </form>
        </div>
    );
}