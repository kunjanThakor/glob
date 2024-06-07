import { Filehandle } from "./filehandle";
import { Projectdetails } from "./projectdetails";

export interface Project {
    id?: number;
    title: string;
    description: string;
    projectImage?: Filehandle;
    projectDetails: Projectdetails;
}
