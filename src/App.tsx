import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer';
import { Index } from './pages/Index/Index';

function App() {
  return (
    <ToastProvider>
      <Router>
        <Header />
        <Index />
        <Footer />
      </Router>
    </ToastProvider>
  )
}

export default App
