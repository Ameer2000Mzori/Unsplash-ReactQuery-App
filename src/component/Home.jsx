import React, { useState } from 'react'
import SearchLogic from './hooks/SearchLogic.jsx'
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('cat')
  const [terms, setTerms] = useState('cat')
  const [pages, setPages] = useState(10)
  const { data, isLoading, isError } = SearchLogic(searchTerm, pages)

  const getData = () => {
    setSearchTerm(terms)
  }

  return (
    <>
      <button onClick={getData}>Get Data</button>
      <input
        type="text"
        value={terms}
        onChange={(e) => {
          setTerms(e.target.value)
        }}
      />

      <select
        onChange={(e) => {
          setPages(e.target.value)
        }}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error occurred</p>}
      {data && (
        <div>
          {/* Render your data */}
          {data.results.map((photo) => (
            <img
              key={photo.id}
              src={photo.urls.small}
              alt={photo.alt_description}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Home
