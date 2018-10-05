import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './components/app/app.component';
import { employeeComponent } from './components/app/Employee/employee.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        FormsModule,
        ServerModule,
        AppModuleShared
    ]
})
export class AppModule {
}
