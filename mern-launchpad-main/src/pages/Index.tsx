import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Home, Users, BookOpen, Utensils, Sparkles, Phone, Mail, MapPin, DollarSign, HandHeart, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-home.jpg";
import communityImage from "@/assets/community-hands.jpg";

const Index = () => {
  const programs = [
    {
      icon: Home,
      title: "Safe Housing",
      description: "Comfortable, secure living spaces where children feel at home and protected."
    },
    {
      icon: BookOpen,
      title: "Education Support",
      description: "Tutoring, school supplies, and educational activities to help every child succeed."
    },
    {
      icon: Utensils,
      title: "Nutritious Meals",
      description: "Healthy, balanced meals prepared with love three times daily, plus snacks."
    },
    {
      icon: Heart,
      title: "Emotional Care",
      description: "Counseling and therapeutic support to help children heal and grow emotionally."
    },
    {
      icon: Users,
      title: "Community Activities",
      description: "Sports, arts, music, and social programs that build confidence and friendships."
    },
    {
      icon: Sparkles,
      title: "Life Skills Training",
      description: "Preparing children for independence with practical skills and mentorship."
    }
  ];

  const ways = [
    {
      icon: DollarSign,
      title: "Donate",
      description: "Your financial support helps us provide care, education, and opportunities."
    },
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Share your time and talents to make a direct impact in children's lives."
    },
    {
      icon: Calendar,
      title: "Sponsor a Child",
      description: "Build a meaningful relationship through monthly sponsorship support."
    }
  ];

  const stats = [
    { number: "150+", label: "Children Served" },
    { number: "25", label: "Years of Service" },
    { number: "98%", label: "Successful Transitions" },
    { number: "200+", label: "Volunteers" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm">
              <Heart className="w-3 h-3 mr-1 fill-white" />
              Est. 1999
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Every Child Deserves a Loving Home
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
              At Hope Haven Children's Home, we provide a safe, nurturing environment where children can heal, 
              grow, and discover their potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8">
                <Heart className="mr-2 h-5 w-5" />
                Make a Difference
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8">
                Learn Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Hope Haven Children's Home exists to provide a safe, loving, and stable environment for 
                children who have experienced trauma, neglect, or loss. We believe every child deserves 
                the opportunity to thrive, and we're committed to giving them the support, care, and 
                resources they need to build bright futures.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <img 
                src={communityImage}
                alt="Children's hands joined together in community" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Building Futures, One Child at a Time
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Since 1999, we've been a beacon of hope for vulnerable children in our community. 
                Our holistic approach addresses not just immediate needs, but focuses on long-term 
                success and healing.
              </p>
              <ul className="space-y-3">
                {[
                  "24/7 caring staff supervision",
                  "Individual care plans for each child",
                  "Family reunification support when possible",
                  "College and career preparation programs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                      <Heart className="w-4 h-4 text-primary fill-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Programs & Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive care designed to help every child reach their full potential
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-card hover:shadow-xl transition-all duration-300 border-border group hover:border-primary/30">
                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 border-accent/20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent rounded-full p-2">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Success Story</h3>
                </div>
                <blockquote className="text-lg text-foreground/90 mb-6 leading-relaxed italic">
                  "Hope Haven gave me more than a roof over my head—they gave me a family, education, 
                  and most importantly, hope for my future. Today, I'm a college graduate working as 
                  a teacher, helping other kids the way Hope Haven helped me."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <p className="font-semibold text-foreground">Maria S.</p>
                    <p className="text-sm text-muted-foreground">Former Resident, Class of 2018</p>
                  </div>
                </div>
              </motion.div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Ways to Help
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your support transforms lives. Here's how you can make a difference today.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ways.map((way, index) => {
              const Icon = way.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full bg-white hover:shadow-2xl transition-all duration-300 border-border text-center group hover:-translate-y-1">
                    <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-full p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {way.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {way.description}
                    </p>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Learn More
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Get in Touch
              </h2>
              <p className="text-xl text-muted-foreground">
                Have questions? We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Phone, label: "Phone", value: "(555) 123-4567" },
                { icon: Mail, label: "Email", value: "info@hopehaven.org" },
                { icon: MapPin, label: "Address", value: "123 Hope Street, Your City" }
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 text-center bg-background hover:shadow-lg transition-all duration-300">
                      <div className="bg-accent/10 rounded-full p-3 w-fit mx-auto mb-4">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{contact.label}</h3>
                      <p className="text-muted-foreground text-sm">{contact.value}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Heart className="w-6 h-6 fill-primary text-primary" />
              Hope Haven Children's Home
            </h3>
            <p className="text-background/80 mb-6">
              Building brighter futures for children in need since 1999
            </p>
            <p className="text-sm text-background/60">
              © 2024 Hope Haven Children's Home. All rights reserved. | Tax ID: 12-3456789
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
