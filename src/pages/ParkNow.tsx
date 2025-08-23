import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import CustomMap from "@/components/MapContainer";
import {
  MapPin,
  Search,
  Navigation,
  Clock,
  Car,
  Bike,
  Circle,
  CreditCard,
  Timer,
  Locate,
} from "lucide-react";
import { getParkingStations } from "@/api/parkingApi";

const ParkNow = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [zoneNumber, setZoneNumber] = useState("");
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);


  const [stations, setStations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const nearbySpots = [
  //   {
  //     id: 1,
  //     name: "Main Street Parking",
  //     address: "123 Main St, Downtown",
  //     distance: "0.1 miles",
  //     rate: "$2.50/hour",
  //     availability: "High",
  //     type: "Street Parking",
  //   },
  //   {
  //     id: 2,
  //     name: "City Center Garage",
  //     address: "456 Center Ave, Downtown",
  //     distance: "0.3 miles",
  //     rate: "$3.00/hour",
  //     availability: "Medium",
  //     type: "Parking Garage",
  //   },
  //   {
  //     id: 3,
  //     name: "Plaza Lot",
  //     address: "789 Plaza Blvd, Downtown",
  //     distance: "0.5 miles",
  //     rate: "$2.00/hour",
  //     availability: "Low",
  //     type: "Surface Lot",
  //   },
  //   {
  //     id: 4,
  //     name: "Plaza Lot",
  //     address: "789 Plaza Blvd, Downtown",
  //     distance: "0.5 miles",
  //     rate: "$2.00/hour",
  //     availability: "Low",
  //     type: "Surface Lot",
  //   },
  //   {
  //     id: 5,
  //     name: "Plaza Lot",
  //     address: "789 Plaza Blvd, Downtown",
  //     distance: "0.5 miles",
  //     rate: "$2.00/hour",
  //     availability: "Low",
  //     type: "Surface Lot",
  //   },
  //   {
  //     id: 6,
  //     name: "Plaza Lot",
  //     address: "789 Plaza Blvd, Downtown",
  //     distance: "0.5 miles",
  //     rate: "$2.00/hour",
  //     availability: "Low",
  //     type: "Surface Lot",
  //   },
  // ];

  useEffect(() => {
    const fetchStations = async () => {
      try {
        setLoading(true);
        const res = await getParkingStations();
        setStations(res.data);
      } catch (err: any) {
        setError(err.message || "Failed to load parking stations");
      } finally {
        setLoading(false);
      }
    };

    fetchStations();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      });
    }
  }, []);

  const quickActions = [
    {
      icon: MapPin,
      title: "Find by Location",
      description: "Search for parking near your destination",
      action: "search",
    },
    {
      icon: Timer,
      title: "Enter Zone Number",
      description: "Type the zone number from the parking sign",
      action: "zone",
    },
    {
      icon: Navigation,
      title: "Use Current Location",
      description: "Find parking spots near you right now",
      action: "location",
    },
  ];

  const getAverageRating = (reviews: any[]) => {
    if (!reviews || reviews.length === 0) return "—";
    const total = reviews.reduce((sum, r) => sum + (r.rating || 0), 0);
    return (total / reviews.length).toFixed(1);
  };

  const getDistanceFromLatLonInKm = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 6371; // Radius of earth in KM
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in KM
  };

  const filteredStations = stations.filter((spot) => {
    if (!searchQuery) return true;

    const query = searchQuery.toLowerCase();
    const nameMatch = spot.owner_name?.toLowerCase().includes(query);
    const addressMatch = spot.owner_address?.toLowerCase().includes(query);

    return nameMatch || addressMatch;
  });


  

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
              Locate available parking spots instantly. No more circling the
              block!
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter Name or Location"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-white/70 text-lg border-none focus:outline-none"
                  />
                </div>
                {/* <Button
                  variant="secondary"
                  size="lg"
                  className="whitespace-nowrap"
                >
                  Find Parking
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Actions */}
        {/* <section className="mb-12">
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
        </section> */}

        {/* Nearby Parking Spots */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Nearby Parking Spots
            </h2>
          </div>

          {loading && <p>Loading parking spots...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {/* Horizontal Scroll Wrapper */}
          <div
            className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => {
              const container = e.currentTarget;
              let startX = e.pageX - container.offsetLeft;
              let scrollLeft = container.scrollLeft;

              const onMouseMove = (moveEvent: MouseEvent) => {
                const x = moveEvent.pageX - container.offsetLeft;
                const walk = (x - startX) * 1.5; // scroll speed
                container.scrollLeft = scrollLeft - walk;
              };

              const onMouseUp = () => {
                window.removeEventListener("mousemove", onMouseMove);
                window.removeEventListener("mouseup", onMouseUp);
              };

              window.addEventListener("mousemove", onMouseMove);
              window.addEventListener("mouseup", onMouseUp);
            }}
          >
            {filteredStations.length === 0 && !loading && (
              <p className="text-muted-foreground">No parking spots found.</p>
            )}
            {filteredStations.map((spot: any) => (
              <Card
                key={spot.ownerID}
                className="card-hover overflow-hidden min-w-[280px] max-w-[200px] flex-shrink-0"
              >
                {/* Image */}
                <img
                  src={
                    spot.images?.length
                      ? `https://backend.payandpark.online/${spot.images[0].image}`
                      : "./dummy image.jpeg"
                  }
                  alt={spot.owner_name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">
                        {spot.owner_name}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm mt-1">
                        {spot.owner_address || "Unavailable"}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {/* Rating + Distance + Slots */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span>{getAverageRating(spot.reviews) || "0"}</span>
                      </div>

                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Navigation className="w-4 h-4" />
                        <span>
                          {userLocation
                            ? `${getDistanceFromLatLonInKm(
                                userLocation.lat,
                                userLocation.lng,
                                parseFloat(spot.latitude),
                                parseFloat(spot.longitude)
                              ).toFixed(2)} km`
                            : "—"}
                        </span>
                      </div>

                      <div className="flex items-center space-x-1">
                        <Car className="w-4 h-4" />
                        <span>{spot.plots?.length || 0} slots</span>
                      </div>
                    </div>

                    {/* Compact Pricing */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      {["Car", "Bike", "Cycle"].map((type) => {
                        const priceObj = spot.pricing?.find(
                          (p: any) =>
                            p.vehicle_type.toLowerCase() === type.toLowerCase()
                        );

                        return (
                          <div
                            key={type}
                            className="flex items-center space-x-1"
                          >
                            {type === "Car" && (
                              <Car className="w-4 h-4 text-blue-600" />
                            )}
                            {type === "Bike" && (
                              <Bike className="w-4 h-4 text-green-600" />
                            )}
                            {type === "Cycle" && (
                              <Circle className="w-4 h-4 text-orange-600" />
                            )}
                            <span>
                              {priceObj ? `₹${priceObj.hourly_rate}/hr` : "—"}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* CTA */}
                    <div className="flex justify-end">
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

        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Parking Stations</h2>
          <CustomMap />
        </div>

        {/* How to Park */}
        <section className="mt-16">
          <Card className="bg-muted/50">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  New to Pay-And-Park?
                </h3>
                <p className="text-muted-foreground">
                  Here's how easy it is to get started
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Choose a spot", icon: MapPin },
                  { step: "2", title: "Set your time", icon: Clock },
                  { step: "3", title: "Add payment", icon: CreditCard },
                  { step: "4", title: "Start parking", icon: Car },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
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
