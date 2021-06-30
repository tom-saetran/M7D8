import { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router-dom"

interface id {
    id: string
}

interface Artist {
    name: string
    picture: string
    picture_big: string
}

interface Album {
    title: string
}

interface Results {
    title: string
    duration: number
    artist: Artist
    album: Album
}

type props = id & RouteComponentProps

const Result = (props: props) => {
    const [data, setData] = useState<Results | undefined>(undefined)

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetch("https://striveschool-api.herokuapp.com/api/deezer/track/" + props.id)
                if (result.ok) {
                    const data = await result.json()
                    setData(data)
                } else throw new Error("Failed to fetch")
            } catch (error) {
                console.error(error)
            }
        }
        getData()
    }, [props.id])

    return (
        <>
            <div>Track Name: {data?.title}</div>
            <br />
            <div>From Album: {data?.album.title}</div>
            <br />
            <div>Duration(seconds): {data?.duration}</div>
            <br />
            <div>Artist: {data?.artist.name}</div>
            <br />
            <img alt="" src={data?.artist.picture_big} />
        </>
    )
}

export default Result
