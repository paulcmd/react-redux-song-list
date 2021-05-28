import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I want it that way', duration: '1:45' }
    ]
}

const selectSongReducer = (selectedSong = null, action) => {
    
    if (action.type === 'SELECTED_SONG') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer
})


/*
13 - //selectedSong is inititated as null
15 - action.payload returns the selected song object, else if its an action
of a different type, returns the currently selected song
*/