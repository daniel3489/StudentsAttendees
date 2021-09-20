const topNStudentsAttendees = (students, attendees, N) => {
	let studentsNumberOfAttendees = Array(students.length).fill(0);
    let topNStudentsAttendeesNames = [];

    for(k=0; k<students.length; k++) {
        for(i=0; i<attendees.length; i++) {
            for(j=0; j<attendees[i].length; j++) {
                if(students[k]==attendees[i][j]) {
                    studentsNumberOfAttendees[k]++;
                    break;
                }
            }
        }
    }

    let studentsNumberOfAttendeesWithNames = studentsNumberOfAttendees.map(function(e, i) {
        return [e, students[i]];
    }).sort().reverse();

    for(i=0; i<N; i++) {
        topNStudentsAttendeesNames[i] = studentsNumberOfAttendeesWithNames[i][1];
    }

    return topNStudentsAttendeesNames;
}

let students = ['Daniel', 'Almog', 'Maya', 'Elad'];

let attendees = [
                ['Daniel', 'Almog', 'Maya', 'Elad', 'Roni'],
                ['Almog', 'Maya', 'Elad', 'Roni', 'Almog'],
                ['Daniel', 'Almog', 'Maya', 'Roni', 'Gadi'],
                ['Daniel', 'Almog', 'Maya', 'Elad', 'Roni'],
                ['Yonni', 'Almog', 'Maya', 'Elad', 'Roni'],
                ['Daniel', 'Almog', 'Maya', 'Elad', 'Daniel']
                ];

let N = 3;

console.log(topNStudentsAttendees(students,attendees,N));