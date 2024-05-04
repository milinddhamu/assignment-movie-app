import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-dvh max-h-dvh">
      <h2 className="font-black text-4xl dark:bg-gradient-to-t bg-gradient-to-b from-black to-white text-transparent bg-clip-text">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="text-blue-500 hover:underline">Return Home</Link>
    </div>
  )
}