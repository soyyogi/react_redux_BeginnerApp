import React from 'react';
import { connect } from 'react-redux';

function SongsList() {
    return (
        <div>
            Songs List
        </div>
    )
}

function mapStateToProps(state) {
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongsList);
