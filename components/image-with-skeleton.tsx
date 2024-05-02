"use client"
import Image from "next/image";
import { useState } from "react";
import {Skeleton} from "@/components/ui/skeleton"

type CustomImageProps = {
  src: string;
  alt: string;
};

const CustomImage = ({src,alt}:CustomImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      {!imageLoaded && <Skeleton className="flex w-full h-full min-w-full" /> }
      <Image 
      src={src}
      alt={alt}
      height={500}
      width={500}
      className="aspect-auto"
      loading="lazy"
      onLoad={()=> setImageLoaded(true)}
      />
    </div>
  );
}

export default CustomImage;