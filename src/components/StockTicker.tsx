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
    <div className="flex items-center justify-center gap-6 md:gap-8 py-2.5 px-6 bg-[#F5F3ED] border-b border-[#E8E5DD] text-sm">
      {stocks.map((s) => (
        <div key={s.symbol} className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-body)] text-xs font-semibold tracking-wider text-[#4A5568] uppercase">{s.exchange}: {s.symbol}</span>
          <span className="text-sm font-semibold text-[#2D3748]">{s.price}</span>
          <span className={`text-xs font-medium ${s.isPositive ? "text-[#7CC842]" : "text-red-500"}`}>
            {s.change} ({s.changePercent})
          </span>
        </div>
      ))}
      <span className="hidden md:inline ml-auto text-[10px] text-[#6B7B8D]">Updated {lastUpdate}</span>
    </div>
  );
}
