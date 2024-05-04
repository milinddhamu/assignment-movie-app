import {Skeleton} from "@/components/ui/skeleton"

export default function Loading(){
  return (
    <div className="flex w-full justify-center pt-10 px-2 h-dvh max-h-dvh">
      <div className="flex w-full max-w-screen-lg">
        <Skeleton className="flex w-full h-full bg-gradient-to-t dark:from-black from-white to-black/0" />
        </div>
    </div>
  )
}