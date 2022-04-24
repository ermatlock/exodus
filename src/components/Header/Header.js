import React from 'react'
import "./Header.css"
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {
  return (
    <header>
      <h2>Exodus</h2>
      <SearchBar />
    </header>
  )
}

export default Header