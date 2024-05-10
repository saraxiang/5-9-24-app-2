// This is the API route for creating new flashcards and retrieving all flashcards

// In-memory array to store flashcards
let flashcards = [
  { id: 1, front: 'test1', back: 'test2' },
  { id: 2, front: 'test3', back: 'test4' },
  { id: 3, front: 'test5', back: 'test6' },
];

export default function handler(req, res) {
  // Handle GET request
  if (req.method === 'GET') {
    // Respond with the list of flashcards
    return res.status(200).json(flashcards);
  }

  // Check for POST request
  if (req.method === 'POST') {
    // Check for correct content type
    if (req.headers['content-type'] !== 'application/json') {
      return res.status(400).json({ message: 'Content-Type must be application/json' });
    }

    // Check if body data is present
    if (!req.body) {
      return res.status(400).json({ message: 'Body is empty' });
    }

    // Destructure front and back from the request body
    const { front, back } = req.body;

    // Check if front and back values are provided
    if (!front || !back) {
      return res.status(400).json({ message: 'Front and back values are required' });
    }

    try {
      // Add the new flashcard to the array
      const newFlashcard = { id: flashcards.length + 1, front, back };
      flashcards.push(newFlashcard);

      // Respond with a success message and the new flashcard
      return res.status(200).json({ message: 'Flashcard saved successfully!', flashcard: newFlashcard });
    } catch (error) {
      // Handle any errors that occur during the save operation
      return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }

  // If the request method is not GET or POST, return a 405 Method Not Allowed
  return res.status(405).json({ message: 'Method not allowed' });
}
