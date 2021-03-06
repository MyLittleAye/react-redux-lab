// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { store } from './store/store';
import { actions } from './store/actions';
import { PickSeats as LoadedPage } from './PickSeats';

import './Date.js';
import './Currency.js';
import 'material-design-lite/material';

console.log(1234.567.toCurrency());

function App() {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    const unsubscribe = store.subscribe(() => setState({ ...store.getState() }));
    store.dispatch(actions.fetchInitialData());
    return unsubscribe;
  }, []);
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <a href="/" className="mdl-layout-title" style={styles.navlink}>Dinner and a Movie</a>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <a href="/account" className="mdl-layout__tab">My account</a>
            <a href="/logout" className="mdl-layout__tab">logout</a>
            <a href="/checkout" className="mdl-layout__tab"><i className="material-icons">shopping_cart</i></a>
            <a href="/login" className="mdl-layout__tab">Login</a>
            <a href="/register" className="mdl-layout__tab">Register</a>
          </nav>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <a href="/" className="mdl-layout-title" style={styles.navlink}>Dinner and a Movie</a>
        <nav className="mdl-navigation">
          <a href="/account" className="mdl-layout__link">My account</a>
          <a href="/logout" className="mdl-layout__link">logout</a>
          <a href="/checkout" className="mdl-layout__link"><i className="material-icons">shopping_cart</i></a>
          <a href="/login" className="mdl-layout__link">Login</a>
          <a href="/register" className="mdl-layout__link">Register</a>
        </nav>
      </div>
      <main className="mdl-layout__content">

        <LoadedPage />

      </main>
      <footer>
      </footer>
    </div>
  );
}

const styles = {
  navlink: {
    textTransform: "uppercase",
    textDecoration: "none",
    padding: "10px"
  }
}

export default App;
