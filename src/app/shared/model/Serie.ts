import { MasterTable } from "./MasterTable";

export interface Serie{
    id?: number;
    nombre?: string;
    caratula?: string;
    sinopsis?: string;
    plataforma?: MasterTable;   
 }