import { Heart, Target, Eye } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About VITAL</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          VITAL is a community-driven organization committed to empowering individuals and creating lasting positive change through leadership, service, and connection.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "Our Mission", text: "To inspire and equip individuals to take meaningful action in their communities, fostering growth, resilience, and unity." },
          { icon: Eye, title: "Our Vision", text: "A world where every individual has the opportunity and support to make a positive impact in their community." },
          { icon: Heart, title: "Our Values", text: "Integrity, compassion, collaboration, and dedication guide everything we do at VITAL." },
        ].map((item) => (
          <div key={item.title} className="p-6 rounded-2xl border border-border bg-card text-center space-y-3">
            <item.icon className="h-10 w-10 text-primary mx-auto" />
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}