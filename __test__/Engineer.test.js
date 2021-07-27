const Engineer = require('../lib/Engineer');

    it('should return employee github from ', () =>{
        const test = "github.com/dave";
        const employee = new Engineer("Dave", 1, "dave@company.com", test );
        expect(employee.gitHub).toBe(test);
    })

    it('should return employee github from getHub()', () =>{
        const test = "github.com/dave";
        const employee = new Engineer("Dave", 1, "dave@company.com", test );
        expect(employee.getGithub()).toBe(test);
    }) 

    it('should return employee role from getRole()', () =>{
        const test = "Engineer";
        const employee = new Engineer(test);
        expect(employee.getRole()).toBe(test);
    })


