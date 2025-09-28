import { HeroButton } from "@/components/ui/hero-button";
import { StatsCard } from "@/components/ui/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Award, Smartphone, Shield, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/kerala-hero.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/80" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              Travelinnee
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-2">
              Smart Travel Companion for Kerala
            </p>
            <p className="text-sm md:text-base opacity-75">
              Powered by Government of Kerala (NATPAC)
            </p>
          </div>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Plan, book, and track your journeys across Kerala with AI-powered guidance. 
            Earn rewards while helping build better transportation for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard">
              <HeroButton variant="hero" size="xl" className="min-w-48">
                <Smartphone className="mr-2" />
                Start Your Journey
              </HeroButton>
            </Link>
            <Link to="/admin">
              <HeroButton variant="outline" size="xl" className="min-w-48 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <BarChart3 className="mr-2" />
                NATPAC Portal
              </HeroButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transforming Kerala's Transportation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-time insights and intelligent planning for sustainable mobility across God's Own Country
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Active Users"
              value="50K+"
              subtitle="Verified Kerala Citizens"
              icon={<Users />}
              variant="kerala"
            />
            <StatsCard
              title="Trips Tracked"
              value="2.5M+"
              subtitle="Journeys Analyzed"
              icon={<MapPin />}
              variant="default"
            />
            <StatsCard
              title="CO₂ Saved"
              value="1,200T"
              subtitle="Environmental Impact"
              icon={<Award />}
              variant="reward"
            />
            <StatsCard
              title="Data Points"
              value="10M+"
              subtitle="For Transportation Planning"
              icon={<BarChart3 />}
              variant="default"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Travelinnee?</h2>
            <p className="text-muted-foreground">Built for Kerala citizens, powered by advanced technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-kerala hover:shadow-float transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-kerala rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Smart Trip Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI-powered route optimization across bus, metro, train, and flight options with real-time updates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-kerala hover:shadow-float transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-reward rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Rewards & Incentives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn scratch cards, discounts, and certificates for sustainable travel choices and data contribution.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-kerala hover:shadow-float transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Government-grade security with anonymized data collection and optional identity verification.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-kerala text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Travel Experience?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of Kerala citizens already using Travelinnee for smarter, more rewarding journeys.
          </p>
          <Link to="/auth">
            <HeroButton variant="reward" size="xl" className="min-w-64">
              Get Started Now
            </HeroButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;