import axios from "axios";
import {useEffect, useState} from "react";

export default function App() {
    const [schedule, setSchedule] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSchedule = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get("/api/schedule");
                setSchedule(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSchedule();
    }, []);

    if (loading) return <p>Loading</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">Schedule</h1>
            <ul>
                {Object.entries(schedule).map(([date, topic]) => (
                    <li key={date} className="mb-2">
                        <strong>{date}:</strong> {topic}
                    </li>
                ))}
            </ul>
        </div>
    );
}

