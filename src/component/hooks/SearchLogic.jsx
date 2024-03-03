import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const SearchLogic = () => {
  const searchTerm = 'cat'
  const result = useQuery({
    queryFn: () =>
      axios.get(
        `https://api.unsplash.com//search/photos?query=${searchTerm}&client_id=574599&per_page=20`
      ),
  })

  console.log(result)
}

export default SearchLogic
