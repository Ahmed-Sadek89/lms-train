export interface Course {
    title: string;
    statistics: {
        total_duration: number;
        total_course: number;
    };
    contents: {
        type: "video" | "file";
        title: string;
        duration: number;
        isPremium: boolean
        fileSize: number;
    }[];
}