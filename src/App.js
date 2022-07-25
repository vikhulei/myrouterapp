import './App.css';
import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"


const Nav = styled.nav`
position: relative;
width: 100%;
height: 60px;
background-color: darkblue;
display: flex;
justify-content: space-between;
`
const LinksWrapper = styled.div`
height: 100%;
width: 500px;
float: right;
margin-right: 80px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Logo = styled.div `
  height: 100%;
  width: 50px;
  background-color: blue;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Logo>
          <NavLink to="/">LOGO</NavLink>
          </Logo>
          <LinksWrapper>
            <NavLink to="/pages/home">Home</NavLink>
            <NavLink to="/pages/about">About</NavLink>
            <NavLink to="/pages/contacts">Contacts</NavLink>
          </LinksWrapper>
        </Nav>
        <Routes>
          <Route 
            path="/pages/home"
            element={<Home/>}
          />
          <Route 
            path="/pages/about"
            element={<About/>}
          />
          <Route 
            path="/pages/contacts"
            element={<Contacts/>}
          />
        </Routes>
        <h1>Learn React</h1>
      </Router>
    </div>
  );
}

export default App;
