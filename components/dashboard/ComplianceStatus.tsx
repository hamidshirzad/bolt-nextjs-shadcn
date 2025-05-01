import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ComplianceStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Compliance Status</CardTitle>
        <CardDescription>
          Current regulatory compliance metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">GDPR Compliance</span>
            <span className="text-sm text-green-600 font-semibold">Compliant</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">SEC Requirements</span>
            <span className="text-sm text-green-600 font-semibold">Compliant</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">ISO 27001</span>
            <span className="text-sm text-green-600 font-semibold">Certified</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}