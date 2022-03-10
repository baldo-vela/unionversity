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
    query: (string | number),
    eventType: 'courses' | 'groups' 
}

/**
 * Takes two numbers and returns their sum
 * @param args of the type SearchEventOptions where query must either be a string or number, and eventType is either a Course or StudyGroup
 * @returns events that satisfy the query
 */
function searchEvents(args: SearchEventOptions){
    // Ye olde ternary operator
    // either a value of course or studyGroup, which are arrays of Course or StudyGroup objects, respectively.
    const events: (Course | StudyGroup)[] = args.eventType === 'courses' ? courses : studyGroups;
    // Reminder this is a union typed callback argument
    return events.filter((event: Course | StudyGroup) => {
        if (typeof args.query === 'number') {
            return event.id === args.query;
        }
        if (typeof args.query === 'string') {
            return event.keywords.includes(args.query);
        }
    })
}

let enrolledEvents: (Course | StudyGroup)[] = [];

function enroll(event: Course | StudyGroup){
    enrolledEvents = [...enrolledEvents, event]

}

const searchResults = searchEvents({
    query: 2,
    eventType:'courses'
});
console.log(searchResults);

enroll(searchResults[0]);
console.log(enrolledEvents);