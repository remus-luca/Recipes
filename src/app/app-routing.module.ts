import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';

import { HomeComponent } from './components/home/home.component';
import { MoreRecipesComponent } from './components/more-recipes/more-recipes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecipeDetailWrapperComponent } from './components/recipe-detail-wrapper/recipe-detail-wrapper.component';
import { ShopIngredientsComponent } from './components/shop-ingredients/shop-ingredients.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/magazin-ingrediente', component: ShopIngredientsComponent },
  { path: 'home/magazin-ingrediente/cosul-meu', component: CartComponent },
  { path: 'home/retete', component: MoreRecipesComponent },
  { path: 'home/retete/:id', component: RecipeDetailWrapperComponent },
  // { path: 'retete/:id', component: RecipeDetailWrapperComponent },
  { path: 'home/contact', component: ContactComponent },
  { path: 'home/despre', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
