import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} `}>
    <div className="container-fluid  ">
      <a className={`navbar-brand ${props.mode ==='light'?'text-dark':'text-light'}`} href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={`nav-link active ${props.mode ==='light'?'text-dark':'text-light'} `} aria-current="page"  activeClassName="is-active"  href="/" exact>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" activeClassName="is-active" href="/" exact>{props.abouttext}</a>
          </li>
          
          
        </ul>
       
      </div>
    </div>
   <div className="themecolor">
    <div className="color1">
      <input type="radio" name="color" id="red" value={'red'} onClick={props.redcolor} />
      <label htmlFor="color">red</label>
      </div>
      <div className="color2">
      <input type="radio" name="color" id="green" value={'green'} onClick={props.greencolor}/>
      <label htmlFor="color">green</label>
      </div>
      <div className="color3">
      <input type="radio" name="color" id="violet" value={'violet'} onClick={props.violetcolor} />
      <label htmlFor="color">violet</label>
      </div>
      </div>
  
    <div className={`form-check form-switch text-${props.textmode} `}>
  <input className="form-check-input" onClick={props.togglemode } type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
</div>
  </nav>
  )
}
Navbar.propTypes={
  title:PropTypes.string.isRequired,
  abouttext:PropTypes.string
}
// Navbar.defaultProps ={
//   title:"this is me",
//   abouttext:"this is about"
// }