import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Car, 
  Clock, 
  CreditCard, 
  MapPin, 
  Smartphone, 
  Shield,
  Search,
  Calendar,
  Users,
  Building,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import businessDashboard from '@/assets/business-dashboard.jpg';

const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Find Parking',
      description: 'Locate available parking spots in real-time with our smart map technology.',
      color: 'text-primary'
    },
    {
      icon: Calendar,
      title: 'Reserve Ahead',
      description: 'Book your parking spot in advance and guarantee your space.',
      color: 'text-blue-500'
    },
    {
      icon: CreditCard,
      title: 'Easy Payment',
      description: 'Pay securely through the app with your preferred payment method.',
      color: 'text-green-500'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'No more circling blocks looking for parking. Go straight to your spot.',
      color: 'text-orange-500'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Enter your zone number',
      description: 'Simply type in the zone number displayed on parking signs.',
      image: '/api/placeholder/300/200'
    },
    {
      number: '2',
      title: 'Set your time',
      description: 'Choose how long you need to park with flexible time options.',
      image: '/api/placeholder/300/200'
    },
    {
      number: '3',
      title: 'Select your vehicle',
      description: 'Pick from your saved vehicles or add a new one quickly.',
      image: '/api/placeholder/300/200'
    },
    {
      number: '4',
      title: 'Pay & go',
      description: 'Complete your payment and start parking immediately.',
      image: '/api/placeholder/300/200'
    }
  ];

  const stats = [
    { value: '2M+', label: 'Active Users' },
    { value: '500K+', label: 'Parking Spots' },
    { value: '50+', label: 'Cities' },
    { value: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Woman using ParkSmart app"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/80" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center lg:text-left lg:max-w-none">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="mb-12 lg:mb-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                  Park. Pay. Go.
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up">
                  When you're on the go, the free ParkSmart app makes it easy to find and pay for parking without running back to feed the meter. And for added convenience, you can reserve spots ahead of time.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-scale-in">
                  <Button variant="secondary" size="lg" className="btn-hover-lift text-sm sm:text-base">
                    <Smartphone className="mr-2 h-5 w-5" />
                    Get the mobile app
                  </Button>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 sm:px-6">
                    <Search className="mr-3 h-5 w-5 text-white flex-shrink-0" />
                    <input 
                      type="text" 
                      placeholder="Search by location or venue"
                      className="bg-transparent border-none text-white placeholder-white/70 text-sm sm:text-lg focus:outline-none flex-1 min-w-0"
                    />
                    <Button size="sm" variant="secondary" className="ml-2">
                      Search
                    </Button>
                  </div>
                </div>
              </div>

              {/* Hero Image - Hidden on mobile, visible on lg+ */}
              <div className="hidden lg:block relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={heroImage} 
                    alt="Woman using ParkSmart app"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-12 lg:mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-white/80 text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The smarter way to park
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              ParkSmart puts the power to park in your hands. Whether you're looking for a spot now or reserving a spot for later, ParkSmart has you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-0 shadow-md h-full">
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-4 mx-auto`}>
                    <feature.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground flex-1">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Parking's even easier with the app
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Get started in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-xl sm:text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-8 sm:top-10 -right-8 xl:-right-12 w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                ParkSmart for Business
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
                Learn about the smarter way to manage your business's parking expenses. As an admin for your ParkSmart for Business account, you can easily manage employee parking, set budgets, and track spending.
              </p>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  'Centralized billing and reporting',
                  'Employee spending controls',
                  'Real-time expense tracking',
                  'Integration with expense management systems'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" className="btn-hover-lift w-full sm:w-auto">
                <Building className="mr-2 h-5 w-5" />
                Learn More About Business Solutions
              </Button>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={businessDashboard} 
                    alt="Business dashboard interface"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to start parking smarter?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
            Join millions of users who have made parking effortless with ParkSmart.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="btn-hover-lift">
              <Smartphone className="mr-2 h-5 w-5" />
              Download iOS App
            </Button>
            <Button variant="secondary" size="lg" className="btn-hover-lift">
              <Smartphone className="mr-2 h-5 w-5" />
              Download Android App
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;