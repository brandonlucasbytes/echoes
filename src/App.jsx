import { Outlet } from 'react-router-dom'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { persistor, store } from './store/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          <Outlet />
          <Footer />
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
