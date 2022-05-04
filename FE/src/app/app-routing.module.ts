import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
=======
import { RouterModule, Routes } from '@angular/router';
>>>>>>> f804b55e1d1d29cb4ec5b2a9a22afbefe10f3564

const routes: Routes = [];

@NgModule({
<<<<<<< HEAD
  declarations: [],
  imports: [
    CommonModule
  ]
=======
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
>>>>>>> f804b55e1d1d29cb4ec5b2a9a22afbefe10f3564
})
export class AppRoutingModule { }
