import React from 'react'
import { connect } from 'react-redux';

function SongDetails({ song }) {
    return (
        <div>
            <p>{song? `Title: ${song.title}` : 'Select a song'}</p>
            <p>{song? `Duration: ${song.duration}` : ''}</p>
        </div>
    );
}

function mapStateToProps(state) {
    return { song: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetails);
