import axios from "axios";
import { Camper } from "../types/camper";

const instance = axios.create({
  baseURL: "https://campers-api.goit.study",
});

interface fetchCampersResponse{
    campers: Camper[];
    total: number;

}

export const fetchCampers = async ({pageParam = 1}): Promise<fetchCampersResponse> => {
 try {
     const { data } = await instance.get<{ campers: Camper[]; total: number }>(
         `/campers?page=${pageParam}&limit=4`);
    return data; 
  } catch (error) {
    console.error("Error fetching campers:", error);
     return { campers:[], total:0};
  }
};