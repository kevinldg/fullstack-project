export default function Schedule({date, topic}) {
    return (
        <li className="flex items-center gap-4">
            <p className="font-bold">{date}</p>
            <p>{topic}</p>
        </li>
    );
}