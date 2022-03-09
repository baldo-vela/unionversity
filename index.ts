// Local File Dependancies
import courses from "./courses";
import studyGroups from "./studyGroups";

type Course = {
    id: number,
    courseId: number,
    title: string,
    keywords: string[],
    eventType: string
};