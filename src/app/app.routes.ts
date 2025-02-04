import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PdfComponent } from './pdf/pdf.component';
import { OffersComponent } from './offers/offers.component';

export const routes: Routes = [
    { path: '', redirectTo: '/badiaa', pathMatch: 'full' } ,
    { path: 'badiaa', component: HomeComponent } ,
    { path: 'catalogue', component: CatalogueComponent },
    { path: 'offres', component: OffersComponent },
    { path: 'pdf', component: PdfComponent },
    { path: '**' , component:Error404Component},
];
