import { TopicData } from "./topic";

export interface AgencyDemographicsData {
  age?: string[];
  ageFrom?: number;
  ageTo?: number;
  genders?: string[];
}

export interface AgencyData {
  id: string | null;
  name: string;
  city: string;
  topics: TopicData[];
  topicIds: string[];
  demographics?: AgencyDemographicsData;
  description: string;
  offline: boolean;
  online: boolean;
  postcode: string;
  teamAgency: string;
  consultingType: string;
  status: string | undefined;
}
