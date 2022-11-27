import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { MoreRecipesComponent } from './components/more-recipes/more-recipes.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddRecipeFormComponent } from './components/add-recipe-form/add-recipe-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { RecipeDetailWrapperComponent } from './components/recipe-detail-wrapper/recipe-detail-wrapper.component';
import { MoreLessComponent } from './components/more-less/more-less.component';
import { ShopIngredientsComponent } from './components/shop-ingredients/shop-ingredients.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { FilterPipe } from './filter.pipe';
import { AngularFireModule } from '@angular/fire/compat';
import { firebase, firebaseui, FirebaseUIModule } from 'firebaseui-angular';
import {
  AngularFireAuthModule,
  USE_EMULATOR as USE_AUTH_EMULATOR,
} from '@angular/fire/compat/auth';
import { GoogleAuthComponent } from './components/google-auth/google-auth.component';
import { environment } from 'src/environments/environment';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoreRecipesComponent,
    RecipeItemComponent,
    NotFoundComponent,
    FooterComponent,
    AddRecipeFormComponent,
    ContactComponent,
    AboutComponent,
    RecipeDetailWrapperComponent,
    MoreLessComponent,
    ShopIngredientsComponent,
    ProductsComponent,
    CartComponent,
    FilterPipe,
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
    MoreLessComponent,
    GoogleAuthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    NgbModule,
    MatChipsModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  exports: [],
  providers: [
    // {
    //   // provide: USE_AUTH_EMULATOR,
    //   // useValue: !environment.production ? ['localhost', 9099] : undefined,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
