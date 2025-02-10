export default function Home() {
    return (
        <div className="p-4 flex flex-col gap-2">
            <a href="/schedule" className="w-32 p-2 border-black border text-center hover:bg-neutral-100">Schedule</a>
            <a href="/bookmarks" className="w-32 p-2 border-black border text-center hover:bg-neutral-100">Bookmarks</a>
        </div>
    );
}