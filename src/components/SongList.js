import React from 'react'
import { connect } from 'react-redux'
import { selectedSong } from '../actions'

const songList = (props) => {
    const songs = props.songs.map((song) => {
        return (
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <button className="ui button primary">Select</button>
                </div>
                <div className="content">{song.title}</div>
            </div>
        )
    })

    return <div className="ui divided list">{songs}</div>
}

const mapStateToProps = (state) => {
    console.log(state.songs)
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps)(songList)
