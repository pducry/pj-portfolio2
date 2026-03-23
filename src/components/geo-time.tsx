"use client";

import { useState, useEffect } from "react";

const CITY_ABBR: Record<string, string> = {
  "São Paulo": "SP", "Sao Paulo": "SP",
  "Rio de Janeiro": "RJ",
  "Belo Horizonte": "BH",
  "Brasília": "BSB", "Brasilia": "BSB",
  "Curitiba": "CWB",
  "Porto Alegre": "POA",
  "Fortaleza": "FOR",
  "Salvador": "SSA",
  "Recife": "REC",
  "Manaus": "MAO",
  "New York": "NYC", "New York City": "NYC",
  "Los Angeles": "LA",
  "Chicago": "CHI",
  "San Francisco": "SF",
  "Miami": "MIA",
  "London": "LDN",
  "Paris": "PAR",
  "Berlin": "BER",
  "Amsterdam": "AMS",
  "Madrid": "MAD",
  "Barcelona": "BCN",
  "Lisbon": "LIS", "Lisboa": "LIS",
  "Milan": "MIL", "Milano": "MIL",
  "Rome": "ROM", "Roma": "ROM",
  "Tokyo": "TKY",
  "Shanghai": "SHA",
  "Beijing": "BJS",
  "Singapore": "SGP",
  "Dubai": "DXB",
  "Mumbai": "BOM",
  "Sydney": "SYD",
  "Melbourne": "MEL",
  "Buenos Aires": "BA",
  "Mexico City": "MEX",
  "Toronto": "YYZ",
  "Montreal": "MTL",
};

function abbreviate(city: string): string {
  if (CITY_ABBR[city]) return CITY_ABBR[city];
  const words = city.trim().split(/\s+/);
  if (words.length >= 2) return words.map((w) => w[0]).join("").toUpperCase();
  return city.slice(0, 3).toUpperCase();
}

async function getCity(lat: number, lon: number): Promise<string> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
      { headers: { "Accept-Language": "en-US" } }
    );
    const data = await res.json();
    const full =
      data.address?.city ||
      data.address?.town ||
      data.address?.village ||
      data.address?.county ||
      "";
    return full ? abbreviate(full) : "";
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
    <span className="hidden md:inline-flex items-center gap-1.5 text-xs tabular-nums text-muted">
      {city && <span className="text-foreground font-medium">{city}</span>}
      <span>{time}</span>
    </span>
  );
}
