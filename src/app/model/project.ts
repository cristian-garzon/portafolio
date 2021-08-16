import { Images } from "./images";

export class Project {
    id?: number;
    urlRepo?: string;
    description?: string;
    images: Images[] = [];

}
