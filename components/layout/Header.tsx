"use client";

import { Activity } from "lucide-react";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="h-6 w-6" />
            <h1 className="text-2xl font-bold">BlockchainReports</h1>
          </div>
        </div>
      </div>
    </header>
  );
}