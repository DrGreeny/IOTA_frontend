export default function handler(req, res) {
  /*   const { ClientBuilder } = require("@iota/client");
  const client = new ClientBuilder()
    .node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")
    .build();
  client.getInfo().then(console.log).catch(console.error);
 */
  res.status(200).json({ name: "John Doe" });
}
