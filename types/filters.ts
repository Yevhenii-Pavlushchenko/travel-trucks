import { CamperForm, CamperTransmission, CamperEngine } from "./camper";

export interface CamperFilters {
  location?: string;
  form?: CamperForm;
  transmission?: CamperTransmission;
  engine?: CamperEngine;
}