import MovieCard from "./MovieCard";
import { movies } from "@/data/data";
import {Skeleton} from "@/components/ui/skeleton"
import { Movie } from "@/types/Movie";
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface MoviesListProps {
  data: Movie[];
  handleDeleteMovie: (imdbid: string) => void;
}

const MoviesList = ({data,handleDeleteMovie}: MoviesListProps) => {
  const [parent] = useAutoAnimate();
  return (
    <div ref={parent} className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 w-full gap-1">
      {data.length !== 0 ? data.map((movie,i)=> 
        <div className="flex w-full h-full" key={movie.imdbid}>
          <MovieCard movie={movie} handleDeleteMovie={handleDeleteMovie} />
        </div>
      ) :
      Array.from({length:16}).map((_,i)=> <Skeleton key={i+"skeleton"} className="flex w-full h-60" />)
      }
    </div>
  );
}

export default MoviesList;