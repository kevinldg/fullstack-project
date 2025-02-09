import {useEffect, useState} from "react";
import {fetchSchedule} from "../../services/scheduleService.js";
import Schedule from "../../components/Schedule.jsx";

const loadSchedule = async (setSchedule, setLoading, setError) => {
    try {
        const data = await fetchSchedule();
        setSchedule(data);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
};

export default function ViewSchedule() {
    const [schedule, setSchedule] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadSchedule(setSchedule, setLoading, setError);
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="p-4 flex flex-col gap-4">
            <h1 className="text-xl font-bold">Schedule</h1>
            <ul>
                {schedule.map(scheduleEntry => (
                    <Schedule key={scheduleEntry.id} date={scheduleEntry.date} topic={scheduleEntry.topic} />
                ))}
            </ul>
        </div>
    );
}