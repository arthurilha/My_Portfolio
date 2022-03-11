import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './pages-routing.module';
import { SobreComponent } from './sobre/sobre.component';
import { ConhecimentosComponent } from './conhecimentos/conhecimentos.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ConhecimentosComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
  ]
})
export class PagesModule { }
