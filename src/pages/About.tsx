import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Target, 
  Award, 
  Heart,
  Globe,
  Lightbulb,
  Shield,
  Zap,
  ArrowRight,
  Linkedin,
  Mail
} from 'lucide-react';
import smartCity from '@/assets/smart-city.jpg';
import teamSarah from '@/assets/team-sarah.jpg';
import teamMichael from '@/assets/team-michael.jpg';
import teamEmily from '@/assets/team-emily.jpg';
import teamDavid from '@/assets/team-david.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'We exist to solve urban mobility challenges and make parking effortless for everyone.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Every decision we make puts our users and their parking experience at the center.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously push the boundaries of what\'s possible in smart parking technology.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We protect user data and ensure secure, reliable parking transactions every time.'
    }
  ];

  const stats = [
    { value: '50+', label: 'Cities Served' },
    { value: '2M+', label: 'Happy Users' },
    { value: '500K+', label: 'Parking Spots' },
    { value: '10M+', label: 'Transactions' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former urban planner with 15 years of experience in smart city solutions.',
      image: teamSarah
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      bio: 'Tech entrepreneur with expertise in mobile payments and IoT infrastructure.',
      image: teamMichael
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Product',
      bio: 'Product leader focused on creating intuitive user experiences.',
      image: teamEmily
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Engineering leader with deep expertise in scalable platform architecture.',
      image: teamDavid
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'ParkSmart was founded with a vision to revolutionize urban parking.'
    },
    {
      year: '2019',
      title: 'First Million Users',
      description: 'Reached our first major milestone with 1 million registered users.'
    },
    {
      year: '2020',
      title: 'Business Platform Launch',
      description: 'Launched ParkSmart for Business to serve enterprise customers.'
    },
    {
      year: '2021',
      title: 'National Expansion',
      description: 'Expanded operations to 25+ cities across the country.'
    },
    {
      year: '2022',
      title: 'API Platform',
      description: 'Released our developer API platform for third-party integrations.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Launched international operations and reached 50+ cities worldwide.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Transforming Urban Mobility
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to eliminate parking frustration and create smarter, 
            more sustainable cities through innovative technology.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                At ParkSmart, we believe that finding parking shouldn't be a source of stress or wasted time. 
                Our mission is to transform the urban parking experience through intelligent technology that 
                connects drivers with available spaces instantly.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                We're building a future where parking is seamless, cities are less congested, 
                and people can focus on what matters most to them.
              </p>
              <Button variant="hero" size="lg" className="btn-hover-lift">
                <ArrowRight className="mr-2 h-5 w-5" />
                Join Our Mission
              </Button>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={smartCity} 
                    alt="Smart city with connected parking infrastructure"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover text-center border-0 shadow-md">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind ParkSmart's innovative parking solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-hover text-center border-0 shadow-md">
                <CardContent className="p-4 sm:p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 object-cover"
                  />
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                    {member.role}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8">
                      <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8">
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to transform parking.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-background rounded-lg p-6 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-lg font-bold text-primary">{item.year}</span>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Whether you're a user, partner, or potential team member, 
            we'd love to have you be part of the ParkSmart story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="btn-hover-lift">
              <Users className="mr-2 h-5 w-5" />
              View Careers
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;