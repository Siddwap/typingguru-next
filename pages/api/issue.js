export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    res.send({ message: 'nothing to see here' });
    // Handle any other HTTP method
  }
}
