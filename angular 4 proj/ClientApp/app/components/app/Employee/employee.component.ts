import { Component } from "../../../../../node_modules/@angular/core";


@Component({
    
        selector: 'My-employee',
    templateUrl:'./employee.component.html',
    styleUrls: ['EmpStyle.css']
        
})

export class employeeComponent {

    firstname: string = "chandra";
    lastname: string = "talluri";
    gender: string = "m";
    age: string = "28";
    ShowDetails: boolean = true;
    onClick(): void {
        console.log('Button clicked')
        this.ShowDetails = !this.ShowDetails;
        
      
        
    }
    name: string = 'Tom';
    Employees: any[];
    //    = [
    //    //{ id: 'emp01', name: 'ab1' },
    //    //{ id: 'emp02', name: 'ab2' },
    //    //{ id: 'emp03', name: 'ab3' }
    //];

    constructor() {
        this.Employees = [
                { id: 'emp01', name: 'ab1' },
        { id: 'emp02', name: 'ab2' },
                { id: 'emp03', name: 'ab3' }
        ];
    }

    Getemployees(): void {
        this.Employees = [
            { id: 'emp01', name: 'ab1' },
            { id: 'emp02', name: 'ab2' },
            { id: 'emp03', name: 'ab3' },
            { id: 'emp04', name: 'ab4' }
        ];
    }

    trackbyempcode(index: number, employee: any): string { return employee.code; }

}