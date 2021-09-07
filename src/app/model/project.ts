import { Images } from "./images";

export class Project {
    id?: number;
    urlRepo?: string;
    description?: string;
    images: Images[] = [];
    start?: string
    end?: string;
    workStation?: string;
    webSite?: string;
}
