import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';

function App() {

  let [isUserLoggedIn, setIsUserLoggedIn ] = useState(true);

  return (
    <div className="App">
      { isUserLoggedIn && <Home /> }
      { !isUserLoggedIn && <Login isUserLoggedIn={setIsUserLoggedIn} />  }
    </div>
  );
}

export default App;
