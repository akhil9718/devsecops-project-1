import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));

    fetch("http://localhost:5000/health")
      .then((res) => res.json())
      .then((data) => setHealth(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>🚀 DevSecOps Project</h1>

      <h2>{message}</h2>

      <hr />

      {health && (
        <>
          <h3>Application Health</h3>

          <p>Status : {health.status}</p>

          <p>Application : {health.application}</p>

          <p>Version : {health.version}</p>
        </>
      )}
    </div>
  );
}

export default App;