import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState([])

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }

    //Para efectos secundarios despues de una accion, en este caso despues de cambiar el estado
    useEffect(() => {
      getImages()
    }, //Cuantas veces disparara el efecto secundario 
    [])

    return {
        images,
        isLoading
    }
}
