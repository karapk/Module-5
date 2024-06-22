//there is a request and response object that are passed to the function.
export default function handler(req, res) {
    if (req.method === "GET") {
      res.status(200).json({ name: "John Doe" });
    }else{
        res.status(404).json({message: "We're only doing/supporting GET method"});
    }
    res.status(200).json({ name: "John Doe" });
  }
  