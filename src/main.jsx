import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store,persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { positions,transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { ModalProvider } from './context/ModelContext'


const options  = {
  timeout:2000,
  position: positions.TOP_CENTER,
  transitions:transitions.SCALE,
  
  
};


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <AlertProvider template={AlertTemplate} { ...options}>
   <StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <ModalProvider>
      <App />
      </ModalProvider>
    </PersistGate>
  </StrictMode>,
   </AlertProvider>
   </Provider>
)
