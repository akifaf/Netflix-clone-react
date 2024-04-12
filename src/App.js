import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Row from './components/RowPost/Row'
import { originals, action, horror, comedy, trending } from './constants/urls'

function App() {
  return (
    <div>
    <Navbar />
    <Banner />
    <Row title="Netflix Oringinals" url={originals}/>
    <Row title="Trending" isSmall url={trending}/>
    <Row title="Horror Movies" isSmall url={horror}/>
    <Row title="Action Movies" isSmall url={action}/>
    <Row title="Comedies" isSmall url={comedy}/>
    </div>
  )
}

export default App