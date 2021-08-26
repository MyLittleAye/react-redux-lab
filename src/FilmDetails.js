import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/dist/material.blue-green.min.css';

import { store } from './store/store';

export function FilmDetails() {

    const state = store.getState();
    const films = state.films;
    const film = films[0] || {};

    return (
        <>
            <div style={{ ...styles.container }} className='mdl-card mdl-shadow--2dp'>
                <div style={{}}>
                    <h1>{film.title}</h1>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '1 1 30%' }}>
                        <img src={film.poster_path} alt="" style={styles.poster} />
                    </div>
                    <div style={{ flex: '1 1 70%' }}>
                        <h1>{film.title}</h1>
                        <h2>{film.tagline}</h2>
                        <p>{film.overview}</p>
                        <p>Viewer's ratings: <span>{film.vote_average}</span> / <span>{film.vote_count}</span></p>
                        <p>Released: {film.release_date}</p>
                        <p>Runtime: {film.runtime} minutes</p>
                        <a href={film.homepage} target="movie_site">{film.homepage}</a>
                        <p>Pick dates will go here</p>
                        <p>Showing times will go here</p>
                    </div>
                </div>
            </div>
        </>
    );
}

const styles = {
    poster: {
        height: 100
    },
    ontainer: {
        width: '95%',
        margin: '20px 20px',
        padding: '20px',
    },
    poster: {
        maxWidth: '95%',
        objectFit: 'contain',
    },
    wrapper: {
        marginTop: '20px',
    },
    headline: {
        fontSize: '1.2em',
    },
    showingTimesWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    tile: {
        background: 'black',
        color: 'white',
        fontWeight: 'bold',
        padding: '20px',
        margin: '10px',
    }
};