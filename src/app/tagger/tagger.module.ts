import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaggerComponent } from './tagger/tagger.component';



@NgModule({
  declarations: [TaggerComponent],
  exports: [
    TaggerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaggerModule { }
