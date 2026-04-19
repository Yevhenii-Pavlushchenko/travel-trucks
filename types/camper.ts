export type CamperForm = "integrated" | "panel_van" | "alcove"| "semi_integrated"; 
export type CamperTransmission = "automatic" | "manual";
export type CamperEngine = "diesel" | "petrol" | "hybrid" | "electric";

export interface GalleryItem {
  thumb: string;
  original: string;
}

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
    amenities: string[]; 
    coverImage: string;
  gallery?: GalleryItem[]
  totalReviews: number;       
}