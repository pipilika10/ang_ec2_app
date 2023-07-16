import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { AppService } from './app.service';
import{takeUntil}from 'rxjs/operators';
import{Subject}from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ang_ec2_app';

}
