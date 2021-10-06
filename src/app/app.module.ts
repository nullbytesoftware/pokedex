import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokemonDetailsPageComponent } from './pages/pokemon-details-page/pokemon-details-page/pokemon-details-page.component';
import { MatButtonModule } from '@angular/material/button';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CaptializePipe } from './core/pipes/captialize.pipe';
import { PaginatorComponent } from './components/paginator/paginator.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PaginatorComponent,
    PokemonDetailsPageComponent,
    PokemonListItemComponent,
    CaptializePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
