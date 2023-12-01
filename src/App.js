
import {Component} from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom"

import './App.css';

import Home from "./components/Home"
import Products from "./components/Products"

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
    )
  }
}
  
  


export default App;
