import React from "react";

export default function CreateAccount() {
  const [nodeData, setNodeData] = useState(null);

  useEffect(() => {
    const getNodeInfo = async () => {
      try {
        const response = await axios.get("http://localhost:3001/iota");
        console.log(response.data);
        setNodeData(response.data);
      } catch (error) {
        console.log(error.data);
      }
    };
    getNodeInfo();
  }, []);
  return <div>CreateAccount</div>;
}
