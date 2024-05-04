"use client"
import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle";
import MoviesList from "@/components/MoviesList";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"
import { Movie } from "@/types/Movie";

export default function Home() {
  const [movies,setMovies] = useState<Movie[]>([]);
  const [page,setPage] = useState(0);
  const { toast } = useToast();

  const handleNextPage = () => setPage(prev => prev !== 5 ? prev + 1 : prev)
  useEffect(()=>{
    const fetchData = async () => {
      fetch(`/api/movies/${page}`).then((res)=> res.json()).then(data => setMovies((prev)=>[...prev,...data]))
    }
    fetchData();
  },[page]);

  
  const handleDeleteMovie = (imdbid: string) => {
    fetch(`/api/delete/${imdbid}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.ok) {
        setMovies(movies.filter(m => m.imdbid !== imdbid));
        toast({
          title: "Movie deleted Successfuly",
          description: "Movie has been deleted successly from collection",
        })
      }
    })
    .catch((error) => {
      toast({
        title: "Error occured while deleting",
        description: "There has been a problem with your fetch operation",
      })
    });
  };

  return (
    <div className="flex w-full justify-center pt-10">
      <div className="flex flex-col items-center justify-between h-full w-full max-w-screen-2xl p-8 gap-8 ">
        <MoviesList data={movies} handleDeleteMovie={handleDeleteMovie} />
        <span>
          <Button onClick={handleNextPage}>
            Load More
          </Button>
        </span>
      </div>
    </div>
  );
}
