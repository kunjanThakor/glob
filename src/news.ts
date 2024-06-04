import { NewsImage } from "./news-image";

export interface News {
    title: string,
    description: string,
    newsDate?: string;
    newsImage?: NewsImage
}
