import { RouterModule, Routes } from '@angular/router';
import { SelectRestaurantComponent } from './select-restaurant-component/select-restaurant-component';
import { NgModule } from '@angular/core';
import { GuestDataComponent } from './guest-data-component/guest-data-component';
import { SelectDateComponent } from './select-date-component/select-date-component';
import { SelectTimeslotComponent } from './select-timeslot-component/select-timeslot-component';

export const routes: Routes = [
    {path: '', component: SelectRestaurantComponent},
    {path: 'guest-data', component: GuestDataComponent},
    {path: 'select-date', component: SelectDateComponent},
    {path: 'select-timeslot', component: SelectTimeslotComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModul {}