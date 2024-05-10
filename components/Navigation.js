import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center py-4 bg-blue-500 text-white sticky top-0">
      <div className="flex items-center">
        <Link href="/">
          <a className="text-lg font-semibold">Flashcard App</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a className="mr-5 hover:underline">All Flashcards</a>
        </Link>
        <Link href="/create">
          <a className="mr-5 hover:underline">Create Flashcard</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
