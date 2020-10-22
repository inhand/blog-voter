import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoterComponent } from './voter/voter.component';



@NgModule({
  declarations: [VoterComponent],
  exports: [
    VoterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VoterModule { }
