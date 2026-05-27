import { Link } from "react-router-dom";
import { Leaf, ArrowRight, Calendar, Users, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <section className="relative py-24 md:py-36 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="relative max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Leaf className="h-4 w-4" /> Welcome to VITAL
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Empowering Lives,<br />
            <span className="text-primary">Creating Impact</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            VITAL is dedicated to making a difference through community engagement, leadership, and meaningful action.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Button asChild size="lg">
              <Link to="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/apply">Apply as Team Leader</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 pb-24 grid md:grid-cols-3 gap-6">
        {[
          { icon: Megaphone, title: "Announcements", desc: "Stay updated with the latest news and updates.", to: "/announcements" },
          { icon: Calendar, title: "Upcoming Meetings", desc: "View our schedule and join upcoming events.", to: "/schedule" },
          { icon: Users, title: "Join Our Team", desc: "Apply to become a team leader and make an impact.", to: "/apply" },
        ].map((item) => (
          <Link key={item.to} to={item.to} className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <item.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
};