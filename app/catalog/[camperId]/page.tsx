import type { Metadata } from "next";
import { fetchCamperById } from "@/lib/api"; 
import CamperView from "./CamperView"; 

type Props = {
  params: Promise<{ camperId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {

     const { camperId } = await params; 
  const camper = await fetchCamperById(camperId);

  if (!camper) return { title: "Camper Not Found" };
const imageUrl = camper.gallery?.[0]?.original || '/nocamper.png'; 

  return {
    title: `${camper.name} | Travel Trucks`,
    description: camper.description,
    openGraph: {
      title: camper.name,
      description: camper.description,
      images: [imageUrl], 
    },
  };
}

export default function Page() {
  return <CamperView />;
}
