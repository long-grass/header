import React from 'react';

import { render } from 'react-dom';

import App from './components/App.js';
import Main from './components/First.js';

console.log(Main)


import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store.js'

console.log(store)
console.log(App)
console.log(Provider)
const router = (
	<Provider store={store}>
	    <Router history={history}>
	        <Route path="/" component={App}>
	            <IndexRoute>helloooo</IndexRoute>
	            <Route path="/view/:eventId"></Route>
       	    </Route>
 	    </Router>
	</Provider>
	)




render(router, document.getElementById('root'));