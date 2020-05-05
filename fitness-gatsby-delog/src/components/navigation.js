import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation">
    <Link to="/training">Training</Link>
    <Link to="/tutorials">Tutorials</Link>
    <Link to="/nutrition">Nutrition</Link>
    <Link to="/testimonials">Testimonials</Link>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)