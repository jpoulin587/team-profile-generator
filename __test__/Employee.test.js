const Employee = require('../lib/Employee');

describe("Employee class", () => {
    it("can be instantiated", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
        expect(employee instanceof Employee).toBe(true);
    })

    it('should have a name property that can be set on instantiation', () => {
        const employee = new Employee('Dave');
        expect(employee.name).toBe('Dave');
    })

    it('should have a id property that can be set on instantiation', () => {
        const employee = new Employee('Dave', 1);
        expect(employee.id).toBe(1);
    })

    it('should have a email property that can be set on instantiation', () => {
        const employee = new Employee('Dave', 1, 'dave@company.com');
        expect(employee.email).toBe('dave@company.com');
    })

    it('should return employee name from getName()', () =>{
        const test = "Dave";
        const employee = new Employee(test);
        expect(employee.getName()).toBe(test);
    })
    
    it('should return employee id from getId()', () =>{
        const test = 1;
        const employee = new Employee("Dave", test);
        expect(employee.getId()).toBe(test);
    })
    
    it('should return employee email from getEmail()', () =>{
        const test = "dave@company.com";
        const employee = new Employee("Dave", 1, test);
        expect(employee.getEmail()).toBe(test);
    })

    it('should return employee role from getRole()', () =>{
        const test = "Employee";
        const employee = new Employee(test);
        expect(employee.getRole()).toBe(test);
    })

});