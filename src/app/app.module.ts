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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CaptializePipe } from './core/pipes/captialize.pipe';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { HttpCachingInterceptor } from './core/intercepters/http.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PaginatorComponent,
    PokemonDetailsPageComponent,
    PokemonListItemComponent,
    CaptializePipe,
    HeaderComponent,
    SearchFieldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    OverlayModule,
    MatProgressSpinnerModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpCachingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
