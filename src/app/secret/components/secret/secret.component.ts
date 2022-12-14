import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss'],
})
export class SecretComponent implements OnInit {
  userSecret: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.activeUser$
      .pipe(tap((val) => console.log(val)))
      .subscribe(({ secret }) => (this.userSecret = secret));
  }
}
