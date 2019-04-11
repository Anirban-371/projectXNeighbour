import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomepageComponent} from '../homepage/homepage.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationLoginComponent} from '../registration-login/registration-login.component';
import { GetHiredRegistrationComponent } from '../get-hired-registration/get-hired-registration.component';
import { ServiceProviderListComponent } from '../service-provider-list/service-provider-list.component';
import {GetHiredRegistrationMoreComponent} from '../get-hired-registration-more/get-hired-registration-more.component';
import { EstimationComponent } from '../estimation/estimation.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { AdminComponent } from '../admin/admin.component';
import { HiringComponent } from '../hiring/hiring.component';
import { LogoutComponent } from '../logout/logout.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
        {
            path:'',
            component: HomepageComponent
        },
        {
            path : 'register',
            component : RegistrationLoginComponent
        },
        {
            path : 'login',
            component : RegistrationLoginComponent
        },
        {
            path : 'getEstimation',
            component: RegistrationComponent
        },
        {
            path : 'hire-me',
            component: GetHiredRegistrationComponent
        },
        {
            path : 'providerList',
            component: ServiceProviderListComponent
        },
        {
            path : 'getHired-More',
            component: GetHiredRegistrationMoreComponent
        },
        {
            path : 'estimation',
            component: EstimationComponent
        },
        {
            path : 'checkout',
            component: CheckoutComponent
        },
        {
            path : 'admin',
            component: AdminComponent
        },
        {
            path : 'hire',
            component: HiringComponent
        },
        {
            path: 'logout',
            component: LogoutComponent
        }
        ], {useHash: false})
    ],
    exports: [RouterModule]
})
export class AppLdRoutingModule {}
