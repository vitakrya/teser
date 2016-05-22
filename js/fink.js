var s;
(function (s) {
    var Student = (function () {
        function Student(firstName, middleInitial, lastName) {
            this.firstName = firstName;
            this.middleInitial = middleInitial;
            this.lastName = lastName;
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
        Student.prototype.greeter = function (person) {
            return "Hello, " + person.firstName + person.lastName;
        };
        Student.prototype.satNo = function () {
            console.log(this.firstName + ' says NO!');
        };
        return Student;
    })();
    s.Student = Student;
})(s || (s = {}));
console.log("My stupid commit");
