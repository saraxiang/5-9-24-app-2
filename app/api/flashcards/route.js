// This is a mock API endpoint for creating flashcards
// In a real application, this would involve database operations

export function POST(req, res) {
  // Log the req and req.body object for debugging
  console.log('req object:', req);
  console.log('req.body before parsing:', req.body);

  // Log the headers for debugging
  console.log('req headers:', req.headers);

  // Additional detailed logging to inspect the req.body
  console.log('Detailed req.body logging:', JSON.stringify(req.body, null, 2));

  // Check if the Content-Type header is set to 'application/json'
  if (req.headers['content-type'] !== 'application/json') {
    console.error('Incorrect Content-Type header.');
    return res.status(400).json({ message: 'Bad Request: Content-Type header must be application/json.' });
  }

  // Check if the request body is parsed correctly
  if (!req.body) {
    console.error('Request body is undefined.');
    return res.status(400).json({ message: 'Bad Request: Missing request body.' });
  }

  // Check if the front and back values are present in the request body
  const { front, back } = req.body;
  console.log('front value:', front); // Log the front value for debugging
  console.log('back value:', back); // Log the back value for debugging

  if (!front || !back) {
    console.error('Missing front or back value.');
    return res.status(400).json({ message: 'Bad Request: Missing front or back value.' });
  }

  try {
    // Log the front and back values for debugging
    console.log('front value:', front);
    console.log('back value:', back);

    // TODO: Save the flashcard to a database
    // For now, we'll just log it to the console
    console.log('Saving flashcard:', { front, back });

    // Send a response to indicate the flashcard has been saved
    res.status(200).json({ message: 'Flashcard saved successfully!' });
  } catch (error) {
    // Log the full error for debugging purposes
    console.error('Error saving flashcard:', error.message);
    console.error('Error stack:', error.stack);

    // Send a response to indicate an internal server error
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}

export function GET(req, res) {
  // TODO: Retrieve and send all flashcards from the database
  // For now, we'll just send a placeholder response
  res.status(200).json({ message: 'Retrieved all flashcards successfully!' });
}
