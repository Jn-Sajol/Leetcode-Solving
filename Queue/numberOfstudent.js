var countStudents = function(students, sandwiches) {
    while(true) {
        if(students.length === 0 && sandwiches.length === 0) {
            return 0;
        } else if(students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
        } else {
            let tempLength = students.length;
            while(tempLength) {
                if(students[0] !== sandwiches[0]) {
                    students.push(students.shift());
                    tempLength--;
                } else {
                    break;
                }
            }
            if(tempLength === 0) {
                return students.length;
            }
        }
    }
};