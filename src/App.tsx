import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Hero />
      </Router>
    </>
  )
}

export default App
