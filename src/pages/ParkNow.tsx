import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Search, 
  Navigation, 
  Clock, 
  Car,
  CreditCard,
  Timer,
  Locate
} from 'lucide-react';

const ParkNow = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [zoneNumber, setZoneNumber] = useState('');

  const nearbySpots = [
    {
      id: 1,
      name: 'Main Street Parking',
      address: '123 Main St, Downtown',
      distance: '0.1 miles',
      rate: '$2.50/hour',
      availability: 'High',
      type: 'Street Parking'
    },
    {
      id: 2,
      name: 'City Center Garage',
      address: '456 Center Ave, Downtown',
      distance: '0.3 miles',
      rate: '$3.00/hour',
      availability: 'Medium',
      type: 'Parking Garage'
    },
    {
      id: 3,
      name: 'Plaza Lot',
      address: '789 Plaza Blvd, Downtown',
      distance: '0.5 miles',
      rate: '$2.00/hour',
      availability: 'Low',
      type: 'Surface Lot'
    }
  ];

  const quickActions = [
    {
      icon: MapPin,
      title: 'Find by Location',
      description: 'Search for parking near your destination',
      action: 'search'
    },
    {
      icon: Timer,
      title: 'Enter Zone Number',
      description: 'Type the zone number from the parking sign',
      action: 'zone'
    },
    {
      icon: Navigation,
      title: 'Use Current Location',
      description: 'Find parking spots near you right now',
      action: 'location'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-light">
      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Parking Now
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Locate available parking spots instantly. No more circling the block!
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter address, venue, or zone number"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-white/70 text-lg border-none focus:outline-none"
                  />
                </div>
                <Button variant="secondary" size="lg" className="whitespace-nowrap">
                  Find Parking
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            How would you like to park?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="card-hover cursor-pointer border-2 hover:border-primary transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <action.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {action.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {action.description}
                  </p>
                  {action.action === 'zone' && (
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="e.g., 12345"
                        value={zoneNumber}
                        onChange={(e) => setZoneNumber(e.target.value)}
                        className="text-center text-lg font-mono"
                      />
                      <Button variant="outline" size="sm" className="w-full">
                        Start Parking
                      </Button>
                    </div>
                  )}
                  {action.action === 'location' && (
                    <Button variant="outline" size="sm" className="w-full">
                      <Locate className="w-4 h-4 mr-2" />
                      Use My Location
                    </Button>
                  )}
                  {action.action === 'search' && (
                    <Button variant="outline" size="sm" className="w-full">
                      <Search className="w-4 h-4 mr-2" />
                      Search Location
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Nearby Parking Spots */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Nearby Parking Spots
            </h2>
            <Button variant="outline">
              <MapPin className="w-4 h-4 mr-2" />
              View on Map
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {nearbySpots.map((spot) => (
              <Card key={spot.id} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{spot.name}</CardTitle>
                      <p className="text-muted-foreground text-sm mt-1">
                        {spot.address}
                      </p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      spot.availability === 'High' 
                        ? 'bg-success-light text-success' 
                        : spot.availability === 'Medium'
                        ? 'bg-warning/20 text-warning'
                        : 'bg-destructive/20 text-destructive'
                    }`}>
                      {spot.availability}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Navigation className="w-4 h-4" />
                        <span>{spot.distance}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Car className="w-4 h-4" />
                        <span>{spot.type}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary">{spot.rate}</span>
                      </div>
                      <Button variant="hero" size="sm">
                        Park Here
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Park */}
        <section className="mt-16">
          <Card className="bg-muted/50">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  New to ParkSmart?
                </h3>
                <p className="text-muted-foreground">
                  Here's how easy it is to get started
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: '1', title: 'Choose a spot', icon: MapPin },
                  { step: '2', title: 'Set your time', icon: Clock },
                  { step: '3', title: 'Add payment', icon: CreditCard },
                  { step: '4', title: 'Start parking', icon: Car }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
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

export default ParkNow;