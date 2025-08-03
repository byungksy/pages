import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// 페이지 컴포넌트들
const Home: React.FC = () => {
  return (
    <div className="page">
      <h1>🏠 홈페이지</h1>
      <p>React Router가 적용된 GitHub Pages 앱입니다!</p>
      <div className="card">
        <p>이 페이지는 GitHub Pages에서 정상적으로 동작합니다.</p>
      </div>
    </div>
  )
}

const About: React.FC = () => {
  return (
    <div className="page">
      <h1>ℹ️ 소개</h1>
      <p>이 프로젝트는 React + Vite + GitHub Pages로 구성되었습니다.</p>
      <div className="card">
        <h3>기술 스택:</h3>
        <ul>
          <li>React 19.1.0</li>
          <li>Vite 7.0.4</li>
          <li>React Router DOM 7.7.1</li>
          <li>GitHub Pages</li>
        </ul>
      </div>
    </div>
  )
}

const Contact: React.FC = () => {
  return (
    <div className="page">
      <h1>📞 연락처</h1>
      <p>연락처 정보를 확인하세요.</p>
      <div className="card">
        <h3>연락 방법:</h3>
        <ul>
          <li>📧 Email: example@email.com</li>
          <li>📱 Phone: 010-1234-5678</li>
          <li>🌐 Website: https://github.com/byungksy</li>
        </ul>
      </div>
    </div>
  )
}

const NotFound: React.FC = () => {
  return (
    <div className="page">
      <h1>❌ 404 - 페이지를 찾을 수 없습니다</h1>
      <p>요청하신 페이지가 존재하지 않습니다.</p>
      <div className="card">
        <Link to="/" className="button">홈으로 돌아가기</Link>
      </div>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Router basename="/pages">
      <div className="app">
        <nav className="navigation">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              🚀 React App
            </Link>
            <div className="nav-links">
              <Link to="/" className="nav-link">홈</Link>
              <Link to="/about" className="nav-link">소개</Link>
              <Link to="/contact" className="nav-link">연락처</Link>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2024 React Router GitHub Pages Demo</p>
        </footer>
      </div>
    </Router>
  )
}

export default App 