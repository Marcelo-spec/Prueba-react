import { useState, useEffect } from 'react'
import getData from '../src/getData'

const useGetData = () => {
  const [data, setData] = useState( [] )
  const [loading, setLoading] = useState( true )

  const getCharacters = async () => {
    const characters = await getData()
    setData( characters )
    setLoading( false )
  }

  useEffect( () => {
    getCharacters()
  }, [] )

  return {
    data,
    loading
  }
}

export default useGetData