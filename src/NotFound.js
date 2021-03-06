import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/dist/material.purple-indigo.min.css';

export function NotFound() {
    console.log("NotFound");

    return (
        <>
            <h1>404 Not Found</h1>
            <p>Oops! We couldn't find the thing you're asking for. Sorry about that!</p>
            <p>Maybe try one of these instead?</p>
            <ul>
            <li><a href="/">Find a movie</a></li>
            <li><a href="/login">Log in</a></li>
            <li><a href="/account">Register</a></li>
            </ul>
        </>
    );
}