import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try
      {
        const response = await axios.get(url)
        setData(response.data)
      } catch (error)
      {
        setError(error.message)
      }
      setLoading(false)
    }
    fetchData()
  }, [ url ])
  const reFetch = async () => {
    setLoading(true)
    try
    {
      const response = await axios.get(url)
      setData(response.data)
    } catch (error)
    {
      setError(error.message)
    }
    setLoading(false)
  }
  return { data, loading, error, reFetch }
}
export default useFetch
