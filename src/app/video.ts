// src/app/video.model.ts
export interface Video {
    id: number;
    name: string;
    picByte: string; // Assuming the video data is a Base64 encoded string
}
