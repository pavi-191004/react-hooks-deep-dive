import { useEffect, useState } from "react";
import "./CheckNetwork.css";

const CheckNetwork = () => {
  const [isOnline, setOnline] = useState(navigator?.onLine ?? true);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
      setShowReconnected(true);
    };

    const handleOffline = () => {
      setOnline(false);
      setShowReconnected(false);
    };

    window?.addEventListener?.("online", handleOnline);
    window?.addEventListener?.("offline", handleOffline);

    return () => {
      window?.removeEventListener?.("online", handleOnline);
      window?.removeEventListener?.("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    let timer;
    if (showReconnected) {
      timer = setTimeout(() => setShowReconnected(false), 8000);
    }

    return () => clearTimeout(timer ?? null);
  }, [showReconnected]);

  return (
    <div className="container">
      <h1>Internet Connection Monitor</h1>

      <div
        className={`status-badge ${
          isOnline ? "status-online" : "status-offline"
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </div>

      {showReconnected && isOnline && (
        <div className="reconnected-message">Reconnected</div>
      )}
    </div>
  );
};

export default CheckNetwork;
