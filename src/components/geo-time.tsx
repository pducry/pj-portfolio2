"use client";

import { useState, useEffect } from "react";

async function getCity(lat: number, lon: number): Promise<string> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
      { headers: { "Accept-Language": "en-US" } }
    );
    const data = await res.json();
    return (
      data.address?.city ||
      data.address?.town ||
      data.address?.village ||
      data.address?.county ||
      ""
    );
  } catch {
    return "";
  }
}

export function GeoTime() {
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const interval = setInterval(tick, 1000);

    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const c = await getCity(pos.coords.latitude, pos.coords.longitude);
          setCity(c);
        },
        () => {}
      );
    }

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <span className="hidden md:inline-block text-xs tabular-nums text-muted">
      {city ? `${city} · ${time}` : time}
    </span>
  );
}
