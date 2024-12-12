import Image from "next/image";
import Link from 'next/link'

function Navbar({}){
    return (
        <div className="h-28 bg-blue-200  flex items-center pl-4 justify-between">
          <Image src={"/Capture.png"} alt="Logo" width="180" height="80" />
          <nav className="flex gap-4 pr-4">
            <Link href="/" className="text-blue-700 hover:underline">
              Home
            </Link>
            <Link href="/login" className="text-blue-700 hover:underline">
              Login
            </Link>
          </nav>
        </div>
    );
}
export default Navbar;