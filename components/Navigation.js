import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center py-4 bg-blue-500 text-white sticky top-0">
      <div className="flex items-center">
        <Link href="/" className="text-lg font-semibold">
          Flashcard App
        </Link>
      </div>
      <div>
        <Link href="/" className="mr-5 hover:underline">
          All Flashcards
        </Link>
        <Link href="/create" className="mr-5 hover:underline">
          Create Flashcard
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
