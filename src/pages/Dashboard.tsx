import { useState } from "react";
import { HeroButton } from "@/components/ui/hero-button";
import { StatsCard } from "@/components/ui/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Route, 
  Award, 
  Leaf, 
  Clock, 
  IndianRupee,
  Bus,
  Train,
  Plane,
  MessageCircle,
  Gift,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-kerala text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, Priya!</h1>
              <p className="opacity-80">Ready for your next journey?</p>
            </div>
            <div className="flex gap-3">
              <Link to="/chat">
                <HeroButton variant="reward" size="sm">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  AI Assistant
                </HeroButton>
              </Link>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Award className="w-3 h-3 mr-1" />
                Gold Member
              </Badge>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">47</div>
              <div className="text-sm opacity-80">Trips This Month</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">₹2,340</div>
              <div className="text-sm opacity-80">Money Saved</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">126kg</div>
              <div className="text-sm opacity-80">CO₂ Avoided</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">850</div>
              <div className="text-sm opacity-80">Reward Points</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="travel">Travel</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/plan-trip">
                <Card className="hover:shadow-kerala transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Route className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Plan New Trip</h3>
                    <p className="text-sm text-muted-foreground">AI-powered route planning</p>
                  </CardContent>
                </Card>
              </Link>

              <Card className="hover:shadow-kerala transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Gift className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <h3 className="font-semibold mb-2">Scratch Cards</h3>
                  <p className="text-sm text-muted-foreground">3 cards available</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-kerala transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 mx-auto mb-3 text-secondary" />
                  <h3 className="font-semibold mb-2">Track Trip</h3>
                  <p className="text-sm text-muted-foreground">Live journey tracking</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Recent Trips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Bus className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Kochi → Thrissur</p>
                        <p className="text-sm text-muted-foreground">KSRTC Express</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹95</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Train className="w-5 h-5 text-secondary" />
                      <div>
                        <p className="font-medium">Thiruvananthapuram → Kochi</p>
                        <p className="text-sm text-muted-foreground">Vande Bharat</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹285</p>
                      <p className="text-sm text-muted-foreground">Yesterday</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="travel" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-3">
                        <Plane className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">COK → BLR</p>
                          <p className="text-sm text-muted-foreground">Tomorrow 6:30 AM</p>
                        </div>
                      </div>
                      <Badge>Confirmed</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Travel Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Preferred Mode</span>
                      <Badge variant="outline">Public Transport</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Eco-Friendly Routes</span>
                      <Badge variant="outline">Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Budget Range</span>
                      <Badge variant="outline">₹50-500</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatsCard
                title="Available Points"
                value="850"
                subtitle="Earned this month"
                icon={<Award />}
                variant="reward"
              />
              <StatsCard
                title="Scratch Cards"
                value="3"
                subtitle="Ready to claim"
                icon={<Gift />}
                variant="kerala"
              />
              <StatsCard
                title="Total Savings"
                value="₹12,500"
                subtitle="Through rewards"
                icon={<IndianRupee />}
                variant="default"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Available Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-medium mb-2">50% Off Next Bus Ride</h4>
                    <p className="text-sm text-muted-foreground mb-3">Valid for KSRTC services</p>
                    <HeroButton variant="kerala" size="sm">Claim - 200 pts</HeroButton>
                  </div>
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-medium mb-2">Free Metro Day Pass</h4>
                    <p className="text-sm text-muted-foreground mb-3">Kochi Metro unlimited rides</p>
                    <HeroButton variant="kerala" size="sm">Claim - 400 pts</HeroButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Distance"
                value="2,450 km"
                subtitle="This month"
                icon={<MapPin />}
                variant="default"
              />
              <StatsCard
                title="CO₂ Footprint"
                value="45.2 kg"
                subtitle="30% below average"
                icon={<Leaf />}
                variant="kerala"
              />
              <StatsCard
                title="Time Saved"
                value="12.5 hrs"
                subtitle="Through smart routing"
                icon={<Clock />}
                variant="default"
              />
              <StatsCard
                title="Cost Per Trip"
                value="₹127"
                subtitle="Average this month"
                icon={<IndianRupee />}
                variant="default"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Travel Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Most Used Routes</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Kochi → Thiruvananthapuram</span>
                        <span className="text-muted-foreground">12 trips</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Thrissur → Kochi</span>
                        <span className="text-muted-foreground">8 trips</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Preferred Transport</h4>
                    <div className="flex gap-2">
                      <Badge variant="outline">Bus 45%</Badge>
                      <Badge variant="outline">Train 30%</Badge>
                      <Badge variant="outline">Metro 15%</Badge>
                      <Badge variant="outline">Flight 10%</Badge>
                    </div>
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

export default Dashboard;