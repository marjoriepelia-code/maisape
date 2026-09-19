export interface Apartment {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  subtitle: string;
  description: string;
  priceFrom: string;
  area: string;
  bedrooms: string;
  suites: string;
  bathrooms: string;
  parkingSpots: string;
  mainImage: string;
  galleryImages: string[];
  features: string[];
  formUrl: string;
  formName: string;
  deliveryStatus: string;
  location: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatar: string;
  rating: number;
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}
