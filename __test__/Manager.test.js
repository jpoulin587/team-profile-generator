const Manager = require('../lib/Manager');

    it('should return employee github from ', () =>{
        const test = "555";
        const employee = new Manager("Dave", 1, "dave@company.com", test );
        expect(employee.office).toBe(test);
    })

    it('should return employee github from getHub()', () =>{
        const test = "555";
        const employee = new Manager("Dave", 1, "dave@company.com", test );
        expect(employee.getOffice()).toBe(test);
    }) 

    it('should return employee role from getRole()', () =>{
        const test = "Manager";
        const employee = new Manager(test);
        expect(employee.getRole()).toBe(test);
    })