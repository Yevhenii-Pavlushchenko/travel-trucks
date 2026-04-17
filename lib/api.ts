import axios from "axios";
import { Camper } from "../types/camper";
import { CamperFilters } from "../types/filters";

const instance = axios.create({
  baseURL: "https://campers-api.goit.study",
});

export interface fetchCampersResponse {
  campers: Camper[];
  total: number;
}

export const fetchCampers = async ({
  pageParam = 1,
  filters = {},
}: {
  pageParam?: number;
  filters?: CamperFilters; 
}): Promise<fetchCampersResponse> => {
  try {

    const activeFilters = Object.fromEntries(
      Object.entries(filters).filter(
        ([_, value]) => value !== undefined && value !== ""
      )
    );

    const { data } = await instance.get<fetchCampersResponse>("/campers", {
      params: {
        ...activeFilters,
        page: pageParam,
        perPage: 4, 
      },
    });

    return data;
  } catch (error) {
    console.error("Error fetching campers:", error);
    throw error;
  }
};
