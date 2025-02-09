import axios from "axios";

export const fetchBookmarks = () => axios.get("/api/bookmarks").then(response => response.data).catch(error => {
    return error;
});