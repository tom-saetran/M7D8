import { Link } from "react-router-dom"
import { SearchResult } from "./Search"

const SearchResults = (searchResult: SearchResult) => (
    <div>
        {searchResult.data.map(item => {
            return (
                <div key={item.id}>
                    <Link className="link" to={"/result/" + item.id}>
                        {item.title}
                    </Link>
                </div>
            )
        })}
    </div>
)

export default SearchResults
