// Local File Dependancies
import courses from "./courses";
import studyGroups from "./studyGroups";
// Note: Course & studyGroup differ by *one* key: studyGroupId and courseId which are pointers to each other
type Course = {
    id: number,
    studyGroupId: number,
    title: string,
    keywords: string[],
    eventType: string
};

type StudyGroup = {
    id: number,
    courseId: number,
    title: string,
    keywords: string[],
    eventType: string
};

type SearchEventOptions = {
    query: string | number,
    eventType: string
}

function searchEvents(options){

}