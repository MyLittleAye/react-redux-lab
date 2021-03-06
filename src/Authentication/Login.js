import {store} from '../store/store';
import {actions} from '../store/actions';

import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/dist/material.purple-indigo.min.css';

export function Login() {

    function login(evt) {
        evt.preventDefault();
        store.dispatch(actions.login({
        email: evt.target['email'].value,
        password: evt.target['password'].value }));
        }

    return (
        <section style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
                <h1 className="mdl-card__title-text">Login</h1>
            </div>
            <div className="mdl-card__supporting-text">
                <div>
                    <p>First time user? <a href="/account">Register</a></p>
                </div>
                <form onSubmit={(evt) => login(evt)}>

                    <div style={styles.inputDivs}>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
                            <input id="email" className="mdl-textfield__input" />
                            <label className="mdl-textfield__label" htmlFor="email">Email</label>
                        </div>
                    </div>

                    <div style={styles.inputDivs}>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
                            <input id="password" className="mdl-textfield__input" />
                            <label className="mdl-textfield__label" htmlFor="email">Password</label>
                        </div>
                    </div>

                    <input type="submit" value="Login" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} />

                </form>
            </div>
        </section>
    );
}

const styles = {};