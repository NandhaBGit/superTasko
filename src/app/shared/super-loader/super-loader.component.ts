import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { SuperLoaderService } from '../../core/service/super-loader.service';

@Component({
  selector: 'super-loader',
  imports: [CommonModule, MaterialModule],
  templateUrl: './super-loader.component.html',
  styleUrl: './super-loader.component.scss'
})
export class SuperLoaderComponent {


  constructor(protected _loader: SuperLoaderService) { }

}
