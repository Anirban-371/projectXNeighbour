import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { Utility } from './utility/utility';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppLdRoutingModule } from './app-ld-routing/app-ld-routing.module';
import { SearchComponent } from './search/search.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationLoginComponent} from './registration-login/registration-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { QuoteRequestComponent } from './quote-request/quote-request.component';
import { ServiceDesciptionsComponent } from './service-desciptions/service-desciptions.component';
import { GetHiredRegistrationComponent } from './get-hired-registration/get-hired-registration.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ServiceProviderListComponent } from './service-provider-list/service-provider-list.component';
import { GetHiredRegistrationMoreComponent } from './get-hired-registration-more/get-hired-registration-more.component';
import { GetHiredRegistrationMorePage1Component } from './get-hired-registration-more-page1/get-hired-registration-more-page1.component';
import { GetHiredRegistrationMorePageNotificationComponent } from './get-hired-registration-more-page-notification/get-hired-registration-more-page-notification.component';
import { GetHiredRegistrationMorePageCompanyComponent } from './get-hired-registration-more-page-company/get-hired-registration-more-page-company.component';
import { GetHiredRegistrationMorePageHireyoureasonComponent } from './get-hired-registration-more-page-hireyoureason/get-hired-registration-more-page-hireyoureason.component';
import { GetHiredRegistrationMorePagePricingComponent } from './get-hired-registration-more-page-pricing/get-hired-registration-more-page-pricing.component';
import { KeysPipe } from './utility/Pipes';
import {AvatarUploadComponent} from './avatar-upload/avatar-upload.component';
import { EstimationComponent } from './estimation/estimation.component';
import {CheckoutComponent} from './checkout/checkout.component';
import { Customer } from './pojo/customer';
import { AdminComponent } from './admin/admin.component';
import { HireLocationComponent } from './hire-location/hire-location.component';
import { HiringComponent } from './hiring/hiring.component';
import { HireTimeComponent } from './hire-time/hire-time.component';
import { HireResultComponent } from './hire-result/hire-result.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomepageComponent,
    SearchComponent,
    ServiceListComponent,
    LoginComponent,
    RegisterComponent,
    RegistrationLoginComponent,
    HeaderComponent,
    FooterComponent,
    TeamComponent,
    QuoteRequestComponent,
    ServiceDesciptionsComponent,
    GetHiredRegistrationComponent,
    ServiceProviderListComponent,
    GetHiredRegistrationMoreComponent,
    GetHiredRegistrationMorePage1Component,
    GetHiredRegistrationMorePageNotificationComponent,
    GetHiredRegistrationMorePageCompanyComponent,
    GetHiredRegistrationMorePageHireyoureasonComponent,
    GetHiredRegistrationMorePagePricingComponent,
    KeysPipe,
    AvatarUploadComponent,
    EstimationComponent,
    CheckoutComponent,
    AdminComponent,
    HireLocationComponent,
    HiringComponent,
    HireTimeComponent,
    HireResultComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppLdRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgMultiSelectDropDownModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCgQWElk2kBnrczZ4AuHm_hdib99jKD_M8',
      libraries: ['geometry', 'places']
    })
  ],
  providers: [
    Utility,
    KeysPipe,
    Customer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
