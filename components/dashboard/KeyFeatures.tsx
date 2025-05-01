import { Shield, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function KeyFeatures() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Features</CardTitle>
        <CardDescription>
          Core capabilities of our blockchain reporting system
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <Shield className="h-5 w-5 mt-0.5 text-primary" />
            <div>
              <h4 className="font-semibold">Data Security & Integrity</h4>
              <p className="text-sm text-muted-foreground">
                Immutable ledger ensures tamper-proof storage and verification of all reporting data
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <BarChart3 className="h-5 w-5 mt-0.5 text-primary" />
            <div>
              <h4 className="font-semibold">Real-time Analytics</h4>
              <p className="text-sm text-muted-foreground">
                AI-powered insights and automated reporting workflows
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}