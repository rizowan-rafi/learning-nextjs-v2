import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="p-4 bg-gray-100 text-white dark:bg-gray-900 border-b">
            <div className="container mx-auto flex justify-between items-center">
                <span className="font-bold">My Logo</span>
                <div className="space-x-4">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/about" className="hover:underline">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}
