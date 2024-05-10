// This is the API route for creating new flashcards
export default function handler(req, res) {
  // Check for POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
    // Here you would typically handle the data persistence.
    // For now, we'll just simulate a successful save operation.

    // Respond with a success message
    res.status(200).json({ message: 'Flashcard saved successfully!' });
  } catch (error) {
    // Handle any errors that occur during the save operation
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
