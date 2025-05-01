"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { performanceData } from "@/lib/data";

export function PerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Overview</CardTitle>
        <CardDescription>
          System performance metrics over the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="transactions" stroke="hsl(var(--chart-1))" name="Transactions" />
            <Line type="monotone" dataKey="reports" stroke="hsl(var(--chart-2))" name="Reports" />
            <Line type="monotone" dataKey="audits" stroke="hsl(var(--chart-3))" name="Audits" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}