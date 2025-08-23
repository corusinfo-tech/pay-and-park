import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building, 
  Users, 
  BarChart3, 
  Shield, 
  CreditCard,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  Truck,
  MapPin,
  DollarSign
} from 'lucide-react';
import businessDashboard from '@/assets/business-dashboard.jpg';
import analyticsDashboard from '@/assets/analytics-dashboard.jpg';

const Business = () => {
  const features = [
    {
      icon: Users,
      title: 'Employee Management',
      description: 'Easily manage parking access for your entire team with centralized controls.',
      benefits: ['Add/remove employees instantly', 'Set individual spending limits', 'Role-based permissions']
    },
    {
      icon: BarChart3,
      title: 'Advanced Reporting',
      description: 'Get detailed insights into your parking spend with comprehensive reporting.',
      benefits: ['Real-time spending analytics', 'Custom report generation', 'Export to accounting systems']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security and compliance for your business data.',
      benefits: ['SOC 2 Type II compliant', 'Single sign-on (SSO)', 'Advanced fraud protection']
    },
    {
      icon: CreditCard,
      title: 'Flexible Billing',
      description: 'Choose from various billing options that work best for your business.',
      benefits: ['Monthly consolidated billing', 'Department cost allocation', 'Multiple payment methods']
    }
  ];

  const solutions = [
    {
      icon: Building,
      title: 'Corporate Solutions',
      description: 'Perfect for large enterprises with complex parking needs.',
      features: ['Custom integrations', 'Dedicated account manager', 'Priority support'],
      cta: 'Contact Sales'
    },
    {
      icon: Truck,
      title: 'Fleet Management',
      description: 'Streamline parking for your commercial vehicle fleet.',
      features: ['Vehicle tracking', 'Route optimization', 'Commercial rates'],
      cta: 'Learn More'
    },
    {
      icon: Users,
      title: 'Small Business',
      description: 'Affordable parking solutions for growing businesses.',
      features: ['Easy setup', 'Transparent pricing', 'Scalable plans'],
      cta: 'Get Started'
    }
  ];

  const stats = [
    { value: '500+', label: 'Enterprise Clients' },
    { value: '50K+', label: 'Business Users' },
    { value: '30%', label: 'Average Savings' },
    { value: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Pay-And-Park for Business
              </h1>
              <p className="text-lg sm:text-xl opacity-90 mb-6 sm:mb-8 leading-relaxed">
                Streamline your business parking expenses with our comprehensive management platform. 
                Give your employees the freedom to park anywhere while maintaining complete control over costs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
                <Button variant="secondary" size="lg" className="btn-hover-lift">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Pricing
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs sm:text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
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

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything you need to manage business parking
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform provides comprehensive tools to streamline parking management, 
              reduce costs, and improve employee experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Solutions for every business size
            </h2>
            <p className="text-xl text-muted-foreground">
              From startups to enterprise, we have the right solution for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="card-hover text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    {solution.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why businesses choose Pay-And-Park
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: DollarSign,
                    title: 'Reduce Costs',
                    description: 'Save up to 30% on parking expenses with smart spending controls and negotiated rates.'
                  },
                  {
                    icon: Clock,
                    title: 'Save Time',
                    description: 'Eliminate manual expense reporting and streamline the entire parking process.'
                  },
                  {
                    icon: MapPin,
                    title: 'Increase Accessibility',
                    description: 'Give employees access to parking in 50+ cities with one unified platform.'
                  },
                  {
                    icon: BarChart3,
                    title: 'Gain Insights',
                    description: 'Make data-driven decisions with comprehensive reporting and analytics.'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative order-2 lg:order-1">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={analyticsDashboard} 
                    alt="Business analytics dashboard showing parking data and insights"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your business parking?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join hundreds of companies that trust Pay-And-Park to manage their parking needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="btn-hover-lift">
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Mail className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
          </div>
          
          <p className="text-sm opacity-80 mt-6">
            No setup fees • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Business;