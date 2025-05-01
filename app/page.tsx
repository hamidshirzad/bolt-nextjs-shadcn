"use client";

import { FileText, Lock, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/layout/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { KeyFeatures } from "@/components/dashboard/KeyFeatures";
import { ComplianceStatus } from "@/components/dashboard/ComplianceStatus";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard
              title="Total Reports"
              value="2,543"
              change="+20.1% from last month"
              Icon={FileText}
            />
            <MetricCard
              title="Smart Contracts"
              value="1,259"
              change="+10.5% from last month"
              Icon={Lock}
            />
            <MetricCard
              title="Active Users"
              value="573"
              change="+12.3% from last month"
              Icon={Users}
            />
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <PerformanceChart />
              <div className="grid gap-4 md:grid-cols-2">
                <KeyFeatures />
                <ComplianceStatus />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}