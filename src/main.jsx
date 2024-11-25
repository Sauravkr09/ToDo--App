import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  //Sharing the centralized store to whole application
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>
)
