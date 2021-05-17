export class EmployeeDetail {
    employeeId: number;
    firstName: string;
    lastName: string;
    preferredName: string;
    jobTitle: string;
    department: string;
    phoneNumber: string;
    email: string;
    office: string;
    skypeId: string;

    constructor(args: any) {
        args = !!args ? args : {};
        this.employeeId = !!args.employeeId ? args.employeeId : 0;
        this.firstName = !!args.firstName ? args.firstName : '';
        this.lastName = !!args.lastName ? args.lastName : '';
        this.preferredName = !!args.preferredName ? args.preferredName : '';
        this.jobTitle = !!args.jobTitle ? args.jobTitle : '';
        this.department = !!args.department ? args.department : '';
        this.phoneNumber = !!args.phoneNumber ? args.phoneNumber : '';
        this.email = !!args.email ? args.email : '';
        this.office = !!args.office ? args.office : '';
        this.skypeId = !!args.skypeId ? args.skypeId : '';
    }
}
