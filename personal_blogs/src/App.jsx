import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './utils/ThemeContext'
import './styles/reset.css'
import './styles/prism.css'
import './styles/variables.css'
import './styles/style.css'
import './styles/hover-focus.css'
import './styles/dark-theme.css'
import './styles/responsive.css'
import './styles/articles.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Newsletter from './pages/Newsletter'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="page">
          <div className="background before"></div>
          <div className="background after"></div>
          <Header />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/newsletter" element={<Newsletter />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
