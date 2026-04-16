export type CamperForm = "integrated" | "alcove" | "panel_van" | "semi_integrated";
export type CamperTransmission = "automatic" | "manual";
export type CamperEngine = "diesel" | "petrol" | "hybrid" | "electric";

export type CamperAmenity = 

  | "ac" 
  | "bathroom" 
  | "kitchen" 

  | "tv" 
  | "radio" 
  | "refrigerator" 

  | "microwave" 
  | "gas" 
  | "water";

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: CamperTransmission;
  engine: CamperEngine;
  amenities: CamperAmenity[]; 
  coverImage: string;         
  totalReviews: number;       
}