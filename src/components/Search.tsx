import React, { ChangeEvent } from "react"
import { RouteComponentProps } from "react-router-dom"
import SearchResults from "./SearchResults"

export interface searchResult {
    data: [
        id: number,
        readable: boolean,
        title: string,
        title_short: string,
        title_version: string | "",
        link: string | "",
        duration: number,
        rank: number,
        explicit_lyrics: boolean,
        explicit_content_lyrics: number,
        explicit_content_cover: number,
        preview: string,
        md5_image: string,
        type: string,

        artist: {
            id: number
            name: string
            link: string
            picture: string
            picture_small: string
            picture_medium: string
            picture_big: string
            picture_xl: string
            tracklist: string
            type: string
        },

        album: {
            id: number
            name: string
            link: string
            cover: string
            cover_small: string
            cover_medium: string
            cover_big: string
            cover_xl: string
            tracklist: string
            type: string
            md5_image: string
        }
    ]
}

const Search = (props: RouteComponentProps) => {
    const [searchValue, setSearchValue] = React.useState<string>("")
    const [searchResult, setSearchResult] = React.useState<any | undefined>(undefined)

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const result = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchValue)
            if (result.ok) {
                const data = await result.json()
                setSearchResult(data)
            } else throw new Error("Failed to fetch")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSearch(e)}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchValue}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setSearchValue(e.target.value)
                            }}
                        />
                        <button type="submit">Search</button>
                    </form>
                    {searchResult && <SearchResults {...searchResult} />}
                </header>
            </div>
        </>
    )
}

export default Search
