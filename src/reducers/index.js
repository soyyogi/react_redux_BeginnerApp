import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'It\'s my life', duration: '4:05'},
        { title: 'Rap God', duration: '7:22'},
        { title: 'Numb', duration: '2:35'},
        { title: 'I me myself', duration: '4:55'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});