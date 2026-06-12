export default function Footer() {
    return (
        <footer className="p-4 text-white bg-gray-100 dark:bg-gray-900 border-t text-center text-sm">
            <p>
                &copy; {new Date().getFullYear()} My App. All rights reserved.
            </p>
        </footer>
    );
}
