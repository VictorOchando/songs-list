import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "title 1", duration: "2:34" },
        { title: "title 2", duration: "3:15" },
        { title: "title 3", duration: "4:21" },
        { title: "title 4", duration: "2:05" },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});
