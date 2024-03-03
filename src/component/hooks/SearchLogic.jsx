import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useSearchLogic = (searchTerm, pages) => {
  const accessKey = '25DRAuEnGbBRfk0JVmkEimzUQaVIMyfiDo9BUpPvOAg'

  const { data, isLoading, isError } = useQuery({
    queryKey: ['searchPhotos', searchTerm, pages],
    queryFn: () =>
      axios
        .get(`https://api.unsplash.com/search/photos`, {
          params: {
            query: searchTerm,
            client_id: accessKey,
            per_page: pages,
          },
        })
        .then((res) => res.data),
  })

  return { data, isLoading, isError }
}

export default useSearchLogic
