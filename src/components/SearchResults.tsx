import { searchResult } from "./Search"

const SearchResults = (searchResult: any) =>
    searchResult.data.map((item: any) => {
        return <small>{item.title}</small>
    })

export default SearchResults
