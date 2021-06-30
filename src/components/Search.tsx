import React, { ChangeEvent } from "react"
import { RouteComponentProps } from "react-router-dom"

interface searchResult {
    any?: any
}

const Search = (props: RouteComponentProps) => {
    const [searchValue, setSearchValue] = React.useState<string>("")
    const [searchResult, setSearchResult] = React.useState<any>(undefined)

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
            {searchResult && <div>{}</div>}
        </>
    )
}

export default Search
