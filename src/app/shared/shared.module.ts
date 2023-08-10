import { NgModule } from '@angular/core';
import { CyberButtonComponent } from './components/cyber-button/cyber-button.component';
import { GridBackgroundComponent } from './components/grid-background/grid-background.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { ScannerComponent } from './components/scanner/scanner';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    CyberButtonComponent,
    GridBackgroundComponent,
    ScannerComponent,
    InfoCardComponent,
    PhotoCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    CyberButtonComponent,
    GridBackgroundComponent,
    ScannerComponent,
    InfoCardComponent,
    PhotoCardComponent,
  ],
  providers: []
})
export class SharedModule { }
