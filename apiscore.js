export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body; // { NAME: "A", SCORE: "100" }
      const result = await fetch("https://sheetdb.io/api/v1/fclztzy19wtgb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [data] })
      });
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: err.toString() });
    }
  }
  res.status(200).send("Bridge is running!");
}
