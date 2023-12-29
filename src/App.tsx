import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero';
import { Highlights } from './components/Highlights/Highlights';
import { ComingUp } from './components/ComingUp/ComingUp';

function App() {
  return (
    <ToastProvider>
      <Router>
        <Header />
        <Hero />
        <Highlights />
        <ComingUp />
      </Router>
    </ToastProvider>
  )
}

export default App
