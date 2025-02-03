import { StrictMode } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
