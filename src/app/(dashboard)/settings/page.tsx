import { Upload, Globe, Palette, Building2 } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { org } from "@/lib/mock-data";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Settings" description="Organization profile, branding, and preferences." />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Profile */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-stone-400" /> Organization profile
              </CardTitle>
              <CardDescription>This information appears on issued certificates.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex flex-col gap-2">
                <Label>Organization name</Label>
                <Input defaultValue={org.name} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Public URL slug</Label>
                <div className="flex items-center rounded-lg border border-stone-300 dark:border-stone-700">
                  <span className="px-3 text-sm text-stone-400">certigen.app/</span>
                  <input
                    defaultValue={org.slug}
                    className="h-11 flex-1 rounded-r-lg bg-transparent pr-3 text-[15px] focus:outline-none"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="md">Save changes</Button>
            </CardFooter>
          </Card>

          {/* Branding */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-stone-400" /> Branding
              </CardTitle>
              <CardDescription>Logo, colors, and signature used across templates.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-xl bg-amber-600 text-2xl font-semibold text-white">
                  {org.name[0]}
                </div>
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4" /> Upload logo
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Brand color</Label>
                <div className="flex gap-2">
                  {["#b45309", "#0f766e", "#1d4ed8", "#9333ea", "#be123c"].map((c) => (
                    <button
                      key={c}
                      className="h-9 w-9 rounded-full ring-2 ring-offset-2 ring-transparent hover:ring-stone-300 dark:ring-offset-stone-900"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="md">Save branding</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Side */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Globe className="h-4 w-4 text-stone-400" /> Custom domain
              </CardTitle>
              <CardDescription>Enterprise plan required.</CardDescription>
            </CardHeader>
            <CardContent>
              <Input placeholder="certificates.yourbrand.com" />
              <p className="mt-2 text-xs text-stone-400">Verify DNS to enable white-label verification.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {["Email notifications", "Weekly summary report", "Dark mode (system)"].map((p, i) => (
                <label key={p} className="flex items-center justify-between">
                  <span className="text-sm">{p}</span>
                  <input type="checkbox" defaultChecked={i < 2} className="h-4 w-4 accent-amber-600" />
                </label>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
