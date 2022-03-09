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
    eventType: 'courses' | 'groups' 
}

/**
 * Takes two numbers and returns their sum
 * @param options of the type SearchEventOptions where query must either be a string or number, and eventType is either a Course or StudyGroup
 * @returns events that satisfy the query
 */
function searchEvents(options: SearchEventOptions){
    const events = options.eventType === 'courses' ? courses : studyGroups;
}