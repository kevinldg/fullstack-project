import axios from "axios";

export const fetchSchedule = () => axios.get("/api/schedule").then(response => response.data).catch(error => {
    return error;
});