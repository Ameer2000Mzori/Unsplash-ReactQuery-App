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
      <div className="flex flex-col text-center items-center justify-center gap-3 bg-zinc-300">
        <div className="h-[10vh] w-[100vw] flex flex-row text-center items-center justify-center gap-4">
          <button
            className="w-[120px] h-[30px] bg-zinc-500 text-white rounded-lg"
            onClick={getData}
          >
            Get Data
          </button>
          <input
            className="pl-2"
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
          </select>
        </div>

        {isLoading && <p>Loading...</p>}
        {isError && <p>Error occurred</p>}
        {data && (
          <div className="w-[90%] flex flex-row flex-wrap text-center items-center justify-center ga-4">
            {/* Render your data */}
            {data.results.map((photo) => (
              <img
                className="h-[200px] w-[200px] object-cover m-2 "
                key={photo.id}
                src={photo.urls.small}
                alt={photo.alt_description}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Home
