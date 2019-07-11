import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'lista-passagem', loadChildren: './lista-passagem/lista-passagem.module#ListaPassagemPageModule' },
  { path: 'modal-passagem', loadChildren: './modal-passagem/modal-passagem.module#ModalPassagemPageModule' },
  { path: 'passagem-detail/:id', loadChildren: './passagem-detail/passagem-detail.module#PassagemDetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
