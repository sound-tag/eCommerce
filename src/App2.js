import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components2/About';
import Blog from './components2/Blog';
import Cart from './components2/Cart';
import Contact from './components2/Contact';
import Footer from './components2/Footer';
import Home from './components2/Home';
// import Navbar2 from './components2/Navbar2';
import Shop from './components2/Shop';
import Sproduct from './components2/Sproduct';
import './components2/style3.css';
import {createStore} from 'redux';
import Cartreducers from './reducers/Cartreducers';
import { Provider } from 'react-redux';
// import Api from './components2/Api';
import Props from './components2/Props';
import NavRespo from './components2/NavRespo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import By from './components2/By';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

function App2() {


  const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, Cartreducers)
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)

  // const store = createStore(Cartreducers);

  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <NavRespo />
      {/* <Navbar2 /> */}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='blog' element={<Blog />} />
            <Route path='shop' element={<Shop />} />
            <Route path='shop/:id' element={<Sproduct />} />
            <Route path='cart' element={<Cart />} />
            <Route path='by' element={<By />} />
            <Route path='props' element={<Props />} />
        </Routes>
        <ToastContainer />
      <Footer />
    </BrowserRouter>
        
      </PersistGate>
    </Provider>
  )
}

export default App2
