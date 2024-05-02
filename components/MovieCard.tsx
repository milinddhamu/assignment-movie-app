import React from "react";
import CustomImage from "./image-with-skeleton";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FaStar } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Movie } from "@/types/Movie";


type MovieCardProps = {
  movie: Movie;
  handleDeleteMovie: (imdbid: string) => void;
};

const MovieCard = ({movie,handleDeleteMovie}:MovieCardProps) => {
  return (
    <AlertDialog>
      <div className="flex w-full h-full relative group hover:cursor-pointer hover:scale-125 transition-transform duration-500 hover:z-20 macShadow rounded-lg overflow-hidden">
        <div className="group-hover:brightness-25 transition-all duration-300">
          <CustomImage
            src={movie.image}
            alt={movie.title}
            />
        </div>
        <div className="opacity-0 group-hover:opacity-100 absolute top-0 h-40 flex w-full bg-gradient-to-b from-black to-black/0 transition-opacity duration-500 rounded-lg"></div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute z-10 p-2 flex flex-col justify-between h-full w-full">
          <div className="flex flex-row justify-between gap-2">
          <span>
            <h1 className="text-sm font-medium">{movie.title}</h1>
            <p className="text-xs flex items-center gap-1"><FaStar className="text-yellow-500" />{movie.rating}</p>
          </span>
          <AlertDialogTrigger>
          <Button variant="destructive" size="icon" className="aspect-square"><RiDeleteBin6Fill /></Button>
          </AlertDialogTrigger>
          </div>

          <div className="flex flex-row gap-1 flex-wrap">{movie.genre.map((genre)=> <Badge key={genre} className="whitespace-nowrap" variant="secondary">{genre}</Badge>)}
          </div>
          
        </div>
      </div>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this movie from collection.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDeleteMovie(movie.imdbid)}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  );
}

export default MovieCard;