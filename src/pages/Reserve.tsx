import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Search, 
  Car,
  CreditCard,
  Shield,
  CheckCircle,
  Plus,
  Star
} from 'lucide-react';
import parkingGarage from '@/assets/parking-garage.jpg';
import surfaceLot from '@/assets/surface-lot.jpg';
import airportParking from '@/assets/airport-parking.jpg';

const Reserve = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState('2');

  const reservationSpots = [
    {
      id: 1,
      name: 'Downtown Plaza Garage',
      address: '123 Main St, Downtown',
      rating: 4.8,
      reviews: 245,
      hourlyRate: '$3.50',
      features: ['Covered', 'Security Cameras', 'EV Charging'],
      image: parkingGarage
    },
    {
      id: 2,
      name: 'Business District Lot',
      address: '456 Commerce Ave, Business District',
      rating: 4.6,
      reviews: 189,
      hourlyRate: '$2.75',
      features: ['Open Air', 'Well Lit', '24/7 Access'],
      image: surfaceLot
    },
    {
      id: 3,
      name: 'Airport Terminal Parking',
      address: '789 Airport Blvd, Airport',
      rating: 4.9,
      reviews: 567,
      hourlyRate: '$4.00',
      features: ['Shuttle Service', 'Covered', 'Long-term Rates'],
      image: airportParking
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Guaranteed Spot',
      description: 'Your parking space is reserved and waiting for you'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Modify or cancel your reservation up to 1 hour before'
    },
    {
      icon: CreditCard,
      title: 'Secure Payment',
      description: 'Pay in advance with our secure payment system'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-light">
      {/* Header Section */}
      <section className="bg-primary text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Reserve Parking
            </h1>
            <p className="text-lg sm:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Book your parking spot in advance and guarantee your space. 
              Perfect for events, meetings, or when you need peace of mind.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search Form */}
        <section className="mb-8 sm:mb-12">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-center">Find & Reserve Parking</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="sm:col-span-2 lg:col-span-2">
                  <Label htmlFor="location" className="text-sm font-medium">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="location"
                      type="text"
                      placeholder="Enter address, venue, or landmark"
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="date" className="text-sm font-medium">Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="time" className="text-sm font-medium">Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="time"
                      type="time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col justify-end sm:col-span-2 lg:col-span-1">
                  <Button variant="hero" size="lg" className="w-full">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-4 space-x-4">
                <Label htmlFor="duration" className="text-sm font-medium">Duration:</Label>
                <select 
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="border border-input rounded-md px-3 py-1 text-sm"
                >
                  <option value="1">1 hour</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                  <option value="4">4 hours</option>
                  <option value="8">8 hours</option>
                  <option value="24">All day</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Benefits */}
        <section className="mb-8 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-primary/20">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Available Spots */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Available Reservations
            </h2>
            <Button variant="outline" className="w-full sm:w-auto">
              <MapPin className="w-4 h-4 mr-2" />
              View on Map
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {reservationSpots.map((spot) => (
              <Card key={spot.id} className="card-hover overflow-hidden">
                <div className="relative">
                  <img 
                    src={spot.image} 
                    alt={spot.name}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-primary">
                    {spot.hourlyRate}/hour
                  </div>
                </div>
                
                <CardHeader className="pb-2 sm:pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg truncate">{spot.name}</CardTitle>
                      <p className="text-muted-foreground text-sm mt-1 truncate">
                        {spot.address}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1 text-sm ml-2 flex-shrink-0">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{spot.rating}</span>
                      <span className="text-muted-foreground hidden sm:inline">({spot.reviews})</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {spot.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Total: <span className="font-semibold text-foreground">
                          ${(parseFloat(spot.hourlyRate.replace('$', '')) * parseInt(duration)).toFixed(2)}
                        </span> for {duration} hour{duration !== '1' ? 's' : ''}
                      </div>
                      <Button variant="hero" size="sm">
                        Reserve Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How Reservations Work */}
        <section className="mt-16">
          <Card className="bg-muted/50">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  How Reservations Work
                </h3>
                <p className="text-muted-foreground">
                  Simple steps to guarantee your parking spot
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: '1', title: 'Search & Select', icon: Search, description: 'Find and choose your preferred parking location' },
                  { step: '2', title: 'Pick Date & Time', icon: Calendar, description: 'Select when you need the parking spot' },
                  { step: '3', title: 'Secure Payment', icon: CreditCard, description: 'Pay in advance to guarantee your reservation' },
                  { step: '4', title: 'Park with Confidence', icon: Car, description: 'Arrive and park in your reserved spot' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Reserve;