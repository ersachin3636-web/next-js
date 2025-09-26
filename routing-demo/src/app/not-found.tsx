import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you are looking for could not be found.
      </p>
      <Link
        href="/"
        className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}
