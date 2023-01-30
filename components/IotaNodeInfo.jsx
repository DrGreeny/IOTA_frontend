import axios from "axios";
import { useEffect, useState } from "react";

export default function IotaNodeInfo() {
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

  return (
    <div className="">
      <div className="p-2">
        {nodeData !== null ? (
          <div className="flex flex-col items center">
            <div>Node Name: {nodeData.nodeInfo.name}</div>
            <div>Node version: {nodeData.nodeInfo.version}</div>
            <div>
              Node network name: {nodeData.nodeInfo.protocol.networkName}
            </div>
            <div>Healthy?: {nodeData.nodeInfo.status.isHealthy.toString()}</div>
            <div>Token Name: {nodeData.nodeInfo.baseToken.name}</div>
            <div>Ticker Symbol {nodeData.nodeInfo.baseToken.tickerSymbol}</div>
          </div>
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
}
