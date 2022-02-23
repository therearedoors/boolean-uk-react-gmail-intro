import './styles/app.css'
import Header from './header.jsx'
import Nav from './nav.jsx'
import Main from './main.jsx'

export const App = () => {
  return (
    <div className="app">
      <Header/>
      <Nav/>
      <Main/>
    </div>
  )
}