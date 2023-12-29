import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero';
import { Highlights } from './components/Highlights/Highlights';
import { ComingUp } from './components/ComingUp/ComingUp';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <ToastProvider>
      <Router>
        <Header />
        <Hero />
        <Highlights />
        <ComingUp />
        <Footer />
      </Router>
    </ToastProvider>
  )
}

export default App
