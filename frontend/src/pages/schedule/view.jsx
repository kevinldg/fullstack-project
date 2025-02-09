import {useEffect, useState} from "react";
import {fetchSchedule} from "../../services/scheduleService.js";

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

    return <pre>{JSON.stringify(schedule, null, 2)}</pre>;
}