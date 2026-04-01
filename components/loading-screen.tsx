"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${hidden ? "is-hidden" : ""}`} aria-hidden={hidden}>
      <div className="loading-cluster">
        <div className="loading-rings">
          <span />
          <span />
          <span />
        </div>
        <div className="loading-orb" />
      </div>
      <p>Memuat portfolio...</p>
    </div>
  );
}
