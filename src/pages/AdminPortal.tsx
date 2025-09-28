import { useState } from "react";
import { StatsCard } from "@/components/ui/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  MapPin, 
  BarChart3, 
  Database, 
  Download,
  Calendar,
  Filter,
  TrendingUp,
  Clock,
  Route,
  Shield,
  FileSpreadsheet
} from "lucide-react";

const AdminPortal = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-kerala text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">NATPAC Analytics Dashboard</h1>
              <p className="opacity-80">Transportation Planning & Research</p>
            </div>
            <div className="flex gap-3">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="w-3 h-3 mr-1" />
                Secure Access
              </Badge>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="trips">Trip Data</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Active Users"
                value="47,523"
                subtitle="↑12% from last month"
                icon={<Users />}
                variant="kerala"
              />
              <StatsCard
                title="Daily Trips"
                value="8,945"
                subtitle="Anonymized data points"
                icon={<Route />}
                variant="default"
              />
              <StatsCard
                title="Data Coverage"
                value="89%"
                subtitle="Of Kerala districts"
                icon={<MapPin />}
                variant="default"
              />
              <StatsCard
                title="CO₂ Impact"
                value="2,450T"
                subtitle="Emissions avoided"
                icon={<TrendingUp />}
                variant="reward"
              />
            </div>

            {/* Real-time Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Live Trip Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Bus Transport</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted rounded-full">
                          <div className="w-16 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-sm">67%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Train</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted rounded-full">
                          <div className="w-6 h-2 bg-secondary rounded-full"></div>
                        </div>
                        <span className="text-sm">25%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Metro</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted rounded-full">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                        </div>
                        <span className="text-sm">8%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Peak Hours Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-primary/10 rounded-lg">
                      <span className="font-medium">Morning Rush</span>
                      <span className="text-primary font-bold">7-9 AM</span>
                    </div>
                    <div className="flex justify-between p-3 bg-secondary/10 rounded-lg">
                      <span className="font-medium">Evening Peak</span>
                      <span className="text-secondary font-bold">5-7 PM</span>
                    </div>
                    <div className="flex justify-between p-3 bg-muted rounded-lg">
                      <span className="font-medium">Off-Peak</span>
                      <span className="text-muted-foreground">10 AM-4 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Regional Insights */}
            <Card>
              <CardHeader>
                <CardTitle>District-wise Travel Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Ernakulam</h4>
                    <p className="text-2xl font-bold text-primary">15,234</p>
                    <p className="text-sm text-muted-foreground">Daily trips</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Thiruvananthapuram</h4>
                    <p className="text-2xl font-bold text-secondary">12,567</p>
                    <p className="text-sm text-muted-foreground">Daily trips</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Thrissur</h4>
                    <p className="text-2xl font-bold text-accent">8,943</p>
                    <p className="text-sm text-muted-foreground">Daily trips</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Users"
                value="47,523"
                subtitle="Verified accounts"
                icon={<Users />}
                variant="kerala"
              />
              <StatsCard
                title="Anonymous Users"
                value="12,847"
                subtitle="Privacy mode active"
                icon={<Shield />}
                variant="default"
              />
              <StatsCard
                title="Age Group 18-35"
                value="65%"
                subtitle="Primary demographic"
                icon={<Users />}
                variant="default"
              />
              <StatsCard
                title="Monthly Growth"
                value="+12%"
                subtitle="New registrations"
                icon={<TrendingUp />}
                variant="reward"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>User Demographics (Anonymized)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Age Distribution</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>18-25</span>
                        <Badge variant="outline">28%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>26-35</span>
                        <Badge variant="outline">37%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>36-50</span>
                        <Badge variant="outline">25%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>50+</span>
                        <Badge variant="outline">10%</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Travel Purpose</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Work Commute</span>
                        <Badge variant="outline">45%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Education</span>
                        <Badge variant="outline">22%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Personal</span>
                        <Badge variant="outline">20%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Tourism</span>
                        <Badge variant="outline">13%</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trips" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Trip Data Analysis</h2>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Date Range
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Daily Trips"
                value="8,945"
                subtitle="Today's count"
                icon={<Route />}
                variant="kerala"
              />
              <StatsCard
                title="Avg Distance"
                value="24.5 km"
                subtitle="Per trip"
                icon={<MapPin />}
                variant="default"
              />
              <StatsCard
                title="Avg Duration"
                value="42 min"
                subtitle="Including wait time"
                icon={<Clock />}
                variant="default"
              />
              <StatsCard
                title="Cost Efficiency"
                value="₹1.8/km"
                subtitle="Average cost"
                icon={<BarChart3 />}
                variant="reward"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Popular Routes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">Kochi → Thiruvananthapuram</p>
                      <p className="text-sm text-muted-foreground">3,247 trips this week</p>
                    </div>
                    <Badge>High Traffic</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">Thrissur → Kochi</p>
                      <p className="text-sm text-muted-foreground">2,891 trips this week</p>
                    </div>
                    <Badge variant="secondary">Medium Traffic</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">Kozhikode → Kochi</p>
                      <p className="text-sm text-muted-foreground">1,654 trips this week</p>
                    </div>
                    <Badge variant="outline">Regular Traffic</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Congestion Hotspots</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                      <span>NH 66 - Kochi Bypass</span>
                      <Badge variant="destructive">Critical</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                      <span>MC Road - Thiruvalla</span>
                      <Badge style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>Moderate</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <span>NH 544 - Thrissur</span>
                      <Badge variant="secondary">Low</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Environmental Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <p className="text-2xl font-bold text-primary">2,450 tons</p>
                      <p className="text-sm text-muted-foreground">CO₂ emissions avoided</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 border rounded-lg">
                        <p className="font-bold">85%</p>
                        <p className="text-xs text-muted-foreground">Public transport usage</p>
                      </div>
                      <div className="text-center p-3 border rounded-lg">
                        <p className="font-bold">₹12.5M</p>
                        <p className="text-xs text-muted-foreground">Fuel cost savings</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Data Export & Reports</h2>
              <Button className="bg-gradient-kerala">
                <FileSpreadsheet className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-kerala transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Trip Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detailed trip patterns, routes, and transportation mode usage
                  </p>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-kerala transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Demographics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Anonymized user demographics and travel behavior insights
                  </p>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Export Excel
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-kerala transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">GIS Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Geographic data for mapping and spatial analysis
                  </p>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Export GIS
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Privacy & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Data Protection</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ AES-256 encryption at rest</li>
                      <li>✓ TLS 1.3 for data in transit</li>
                      <li>✓ Anonymized user identities</li>
                      <li>✓ GDPR compliant data handling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Access Controls</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Role-based access control</li>
                      <li>✓ Multi-factor authentication</li>
                      <li>✓ Audit trail logging</li>
                      <li>✓ Regular security reviews</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPortal;