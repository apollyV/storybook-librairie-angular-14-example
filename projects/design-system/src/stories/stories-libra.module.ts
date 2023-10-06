import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { HeaderComponent } from './header.component';
import { PageComponent } from './page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    HeaderComponent,
    PageComponent
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    PageComponent
  ]
})
export class StorybookLibModule { }