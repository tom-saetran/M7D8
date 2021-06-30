import { Link } from "react-router-dom"
import { searchResult } from "./Search"

const SearchResults = (searchResult: searchResult) => (
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
