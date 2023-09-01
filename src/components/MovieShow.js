import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const MovieShow = ({movies}) => {
    const params= useParams()
    console.log(params)
    return ( <div>
        <h1>{movies[params.movieId].title}</h1>
    </div> );
}
 
export default MovieShow;