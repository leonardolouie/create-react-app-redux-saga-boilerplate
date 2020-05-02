import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/**
 * package that uses react redux
 */
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/***
 * import todo reducers to map this actions to whole app
 */
import toDoApp from './reducers';

/***
 *
 * The new version of this file is using the createStore function (provided by redux) to create a single source of truth object about the state of the app (i.e., the store constant).
 *Then, it uses this store to feed the app with state.
 */

const store = createStore(toDoApp);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/**
 
The new version of this file is using the createStore function (provided by redux) to create a single source of truth object about the state of the app (i.e., the store constant). Then, it uses this store to feed the app with state.

Integrating React Components with Redux
After defining these Redux elements (actions, reducers, and the store), the next thing you can do is to define the React components that will use these elements. First, under the src directory, create two new directories:

./src/components: This is where you will create your Presentational Components; that is, components that are not aware of Redux.

./src/containers: This is where you will create Container Components; that is, components that tightly integrate to Redux.

After that, you can create a file called AddToDo.js inside the ./src/containers directory. Add the following code to the file you just created:
 */
