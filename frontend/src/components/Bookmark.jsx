export default function Bookmark({id, name, url, favicon}) {
    return (
        <div className="w-64 p-4 border-black border-2 flex flex-col gap-2">
            <div className="flex items-center gap-4">
                <img src={favicon} alt={id} width={32} height={32} />
                <p>{name}</p>
            </div>
            <a className="underline text-blue-600 w-fit" href={url}>Link</a>
        </div>
    );
}