"use client";

import { useEffect, useState } from "react";

interface StockData {
  symbol: string;
  exchange: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}

const STOCKS: StockData[] = [
  { symbol: "GEN", exchange: "TSX-V", price: "0.085", change: "+0.005", changePercent: "+6.25%", isPositive: true },
  { symbol: "GENRF", exchange: "OTCQB", price: "0.062", change: "+0.003", changePercent: "+5.08%", isPositive: true },
  { symbol: "W85", exchange: "FRA", price: "\u20AC0.058", change: "-0.002", changePercent: "-3.33%", isPositive: false },
];

export function StockTicker() {
  const [stocks, setStocks] = useState(STOCKS);
  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    setLastUpdate(new Date().toLocaleTimeString());
    const interval = setInterval(() => {
      setStocks(prev => prev.map(s => {
        const delta = (Math.random() - 0.45) * 0.005;
        const newPrice = Math.max(0.01, parseFloat(s.price.replace("\u20AC", "")) + delta);
        const change = delta;
        const pct = (delta / newPrice) * 100;
        return {
          ...s,
          price: s.exchange === "FRA" ? `\u20AC${newPrice.toFixed(3)}` : newPrice.toFixed(3),
          change: `${change >= 0 ? "+" : ""}${change.toFixed(3)}`,
          changePercent: `${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%`,
          isPositive: change >= 0,
        };
      }));
      setLastUpdate(new Date().toLocaleTimeString());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-8 py-3 px-6 bg-[#1a2424] border-b border-white/[0.05]">
      {stocks.map((s) => (
        <div key={s.symbol} className="flex items-center gap-3">
          <span className="font-[family-name:var(--font-mono)] text-xs font-semibold tracking-wider text-white/40 uppercase">{s.exchange}: {s.symbol}</span>
          <span className="text-sm font-semibold text-white/80">{s.price}</span>
          <span className={`text-xs font-medium ${s.isPositive ? "text-gen-green" : "text-red-400"}`}>
            {s.change} ({s.changePercent})
          </span>
        </div>
      ))}
      <span className="ml-auto text-[10px] text-white/20">Updated {lastUpdate}</span>
    </div>
  );
}
