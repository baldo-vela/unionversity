"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Local File Dependancies
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
/**
 * Takes two numbers and returns their sum
 * @param args of the type SearchEventOptions where query must either be a string or number, and eventType is either a Course or StudyGroup
 * @returns events that satisfy the query
 */
function searchEvents(args) {
    // Ye olde ternary operator
    // either a value of course or studyGroup, which are arrays of Course or StudyGroup objects, respectively.
    const events = args.eventType === 'courses' ? courses_1.default : studyGroups_1.default;
    // Reminder this is a union typed callback argument
    return events.filter((event) => {
        if (typeof args.query === 'number') {
            return event.id === args.query;
        }
        if (typeof args.query === 'string') {
            return event.keywords.includes(args.query);
        }
    });
}
let enrolledEvents = [];
function enroll(event) {
    enrolledEvents = [...enrolledEvents, event];
}
const searchResults = searchEvents({
    query: 2,
    eventType: 'courses'
});
console.log(searchResults);
enroll(searchResults[0]);
console.log(enrolledEvents);
