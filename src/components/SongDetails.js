import React from 'react'
import { connect } from 'react-redux';

function SongDetails(props) {
    return (
        <div>
            {props.song?.title}
            {props.song?.duration}
        </div>
    );
}

function mapStateToProps(state) {
    return { song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails);
