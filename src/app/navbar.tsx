import Link from "next/link";

export default function NavBar(){
    return (
        <>
            <nav className="bg-white shadow-md ">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/applications" className="text-gray-700 hover:text-black" > Applications </Link>
                        </li>
                        <li>
                            <Link href="/articles" className="text-gray-700 hover:text-black" > Articles </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}