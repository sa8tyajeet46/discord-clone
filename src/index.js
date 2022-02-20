import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from './Header';
import Hero from './Hero';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './Store';
import selectChannelId from './features/channelSlice';
ReactDOM.render(
    <Provider store={store}>
   <BrowserRouter>
   <Routes>
       <Route path="/" exact element={<div>
       <Header />
       <Hero />
       </div>}>
           </Route>
           <Route path="channels" exact element={<Home />}></Route>
           <Route path="channels/:id"  element={<Home />}></Route>
           </Routes>
           </BrowserRouter></Provider>,
     document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
