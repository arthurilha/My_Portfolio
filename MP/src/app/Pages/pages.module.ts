import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './pages-routing.module';
import { SobreComponent } from './portfolio/sobre/sobre.component';
import { ConhecimentosComponent } from './conhecimentos/conhecimentos.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContatosComponent } from './contatos/contatos.component';


@NgModule({
  declarations: [
    HomeComponent,
    ConhecimentosComponent,
    PortfolioComponent,
    ContatosComponent,
    SobreComponent

  ],
  imports: [
    CommonModule,
    RoutingModule,
  ]
})
export class PagesModule { }
