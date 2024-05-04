import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link'
import { Movie } from '@/types/Movie';
import { headers } from 'next/headers';
import { GoArrowLeft } from "react-icons/go";
import {Button} from "@/components/ui/button"
import { notFound } from 'next/navigation';

async function getData(movieId:string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movie/${movieId}`, {
    method: 'GET',
  })
  if (res.ok) {
    return res.json()
  }
  if(res.status === 500 || res.status === 404){
    notFound();
  }
  
}

export default async function Page({ params }: { params: { movie: string } }) {
  const response = await getData(params.movie);
  const moviedata:Movie = response?.data;
  return (
    <div className="flex w-full justify-center pt-10 px-2">
      <div className="flex flex-col justify-center items-center sm:flex-row w-full max-w-screen-lg relative">
        <div className="flex w-full justify-center items-center relative">
          <div className="hidden absolute sm:flex h-full w-full bg-gradient-to-t from-white/70 dark:from-black via-black/0 to-black/0 z-10" />
          <Image 
            src={moviedata.image}
            alt={moviedata.title}
            width={500}
            height={500}
            className="w-full rounded-t-xl sm:rounded-tr-none"
            
          />
          <Button 
            asChild
            size="icon"
            className="absolute top-2 left-2 z-20 "
            >
            <Link 
              href='/' >
                <GoArrowLeft />
            </Link>
          </Button>

        </div>
        <div className="absolute top-2/3 sm:relative sm:top-auto flex flex-col w-full justify-start sm:justify-center items-start p-4 py-8 md:p-6 gap-4 dark:bg-zinc-900/70 bg-zinc-200/70 sm:h-full backdrop-blur-lg h-auto sm:rounded-tr-xl">
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black drop-shadow-xl">{moviedata.title}</h1>
          
          <div className="flex flex-row justify-between w-full font-semibold">
          {moviedata.rating &&
            <span className="flex flex-row gap-2 items-center">
              <FaStar className="text-yellow-500" />
              {moviedata.rating}
            </span> }
            {moviedata.year && <p>Year {moviedata.year}</p>}
          </div>
          
          <p>{moviedata.description}</p>
          
          {moviedata.genre &&  
            <div className="flex flex-row">
              <p className='brightness-50'>Genre:&nbsp;</p>
              <span className="flex flex-wrap flex-row gap-2">
              {moviedata.genre.map((genre)=> <Badge key={genre} className="whitespace-nowrap" variant="secondary">{genre}</Badge>)}
              </span>
            </div> }

          { moviedata.imdb_link && <span className="flex flex-row">
            <p className='brightness-50'>IMDB:&nbsp;</p>
            <Link 
              href={moviedata.imdb_link} 
              className="hover:underline text-blue-500"
              target="_blank"
              >{moviedata.imdb_link}</Link>
          </span> }
        </div>
      </div>
    </div>
  )
};