// Test API route for debugging purposes
export default function testHandler(req, res) {
  res.status(200).json({ message: 'Test route is working' });
}
