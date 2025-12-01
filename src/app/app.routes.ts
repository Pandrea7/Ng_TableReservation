import { RouterModule, Routes } from '@angular/router';
import { SelectRestaurantComponent } from './select-restaurant-component/select-restaurant-component';
import { NgModule } from '@angular/core';
import { GuestDataComponent } from './guest-data-component/guest-data-component';

export const routes: Routes = [
    {path: '', component: SelectRestaurantComponent},
    {path: 'guest-data', component: GuestDataComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModul {}