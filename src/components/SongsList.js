import React from 'react';
import { connect } from 'react-redux';

function SongsList(props) {

    function renderList() {
        return props.songs.map((song) => {
            return (
                <div className="item" key={song.title} >
                    <div className="right floated content" >
                        <button className="ui button primary" >
                            Select
                        </button>
                    </div>
                    <div className="content" >{song.title}</div>
                </div>
            );
        });
    }

    return (
        <div className="ui divided list">
            {renderList()}
        </div>
    );
}

function mapStateToProps(state) {
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongsList);
