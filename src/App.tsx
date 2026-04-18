import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '@components/Header'
import Footer from '@components/Footer'
import FloatingContact from '@components/FloatingContact'
import HomePage from '@pages/HomePage'
import AdvantagePage from '@pages/AdvantagePage'
import ServicePage from '@pages/ServicePage'
import QnAPage from '@pages/QnAPage'

function App() {
  return (
    <Router>
      <div className="app-shell">
        <div className="ambient-orb ambient-orb-left" />
        <div className="ambient-orb ambient-orb-right" />
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/advantage" element={<AdvantagePage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/qna" element={<QnAPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  )
}

export default App
