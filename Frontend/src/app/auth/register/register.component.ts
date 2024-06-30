import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  hidePwdContent: boolean = true;
  hidePwdContents: boolean = true;
  registerFrom: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private snackBar: MatSnackBar) {
    this.registerFrom = fb.group({
      firstName: fb.control('', [Validators.required]),
      lastName: fb.control('',[Validators.required]),
      email: fb.control('',[Validators.required]),
      // mobile: fb.control(''),
      password: fb.control('',[Validators.required]),
      rpassword: fb.control('',[Validators.required]),

    });
    
  }
  register(){
    let user = {
      name: this.registerFrom.get("firstName")?.value,
      phoneNumber: this.registerFrom.get("lastName")?.value,
      email: this.registerFrom.get("email")?.value,
      password: this.registerFrom.get("password")?.value,
    };
    this.apiService.register(user).subscribe({
      next: res =>{
        this.snackBar.open(res, 'OK');
      }
    })
  }
}
