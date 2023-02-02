import React from "react"
import Home from "./components/Home"
import Destination from "./components/Destination"
import Crew from "./components/Crew"
import Technology from "./components/Technology"
import {Routes, Route, Link, useLocation, NavLink} from "react-router-dom"
import hamburgerIcon from "./icon-hamburger.svg"
import closeIcon from "./icon-close.svg"

function App() {

  const [navState, setNavState] = React.useState(false)

  function handleClick(){
    setNavState(prevState => !prevState)
  }

  const navStyle = navState? {transform: "translateX(0)"} : null   

  const iconStyle = navState? {backgroundImage: `url(${closeIcon})`} 
  : {backgroundImage: `url(${hamburgerIcon})`}
 
  const {pathname} = useLocation()

  console.log(pathname)

  
  // console.log(location.pathname)
  // console.log(homeRef.current.children[0].getAttribute("href"))
  // const homeActiveStyle = currentPath === homeRefPath? {borderColor: "rgba( var(--clr-white), 1"} : null

  return (
    <div className="app home">
      <header className="primary-header flex">
        <div>
          <img src="../assets/shared/logo.svg" alt="space tourism logo" className="logo"/>
        </div>
        <button className="mobile-nav-toggle" style={iconStyle} aria-controls="primary-navigation" onClick={handleClick}><span className="sr-only" aria-expanded="false">Menu</span></button>
        <nav>
            <ul id="primary-navigation" className="primary-navigation underline-indicators flex" style={navStyle}>
              <li>
                <NavLink to="/" className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">00</span>Home</NavLink>
              </li>
              <li>
                <NavLink to="/destination" className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">01</span>Destination</NavLink>
              </li>
              <li>
                <NavLink to="/crew" className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">02</span>Crew</NavLink>
              </li>
              <li>
                <NavLink to="/technology" className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">03</span>Technology</NavLink>
              </li>
            </ul>
        </nav>
      </header>

      <div className="components">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/destination/*" element={<Destination/>}/>
          <Route path="/crew/*" element={<Crew/>}/>
          <Route path="/technology/*" element={<Technology/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
