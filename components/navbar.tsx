import { ModeToggle } from "@/components/theme-toggle"
import Link from 'next/link'

export default function Navbar(){
  return (
    <div className="flex flex-row w-full justify-center">
      <div className="flex flex-row justify-between items-center w-full max-w-screen-lg p-2 sm:px-0 gap-2">
        <Link href='/' className="font-semibold hover:underline">MovieApp</Link>
        <ModeToggle />
      </div>
    </div>
  );
}
