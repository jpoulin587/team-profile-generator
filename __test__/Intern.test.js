const Intern = require('../lib/Intern');

    it('should return employee github from ', () =>{
        const test = "Coding Bootcamp";
        const employee = new Intern("Dave", 1, "dave@company.com", test );
        expect(employee.school).toBe(test);
    })

    it('should return employee github from getHub()', () =>{
        const test = "Coding Bootcamp";
        const employee = new Intern("Dave", 1, "dave@company.com", test );
        expect(employee.getSchool()).toBe(test);
    }) 

    it('should return employee role from getRole()', () =>{
        const test = "Intern";
        const employee = new Intern(test);
        expect(employee.getRole()).toBe(test);
    })