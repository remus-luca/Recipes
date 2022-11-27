import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FirebaseUISignInFailure,
  FirebaseUISignInSuccessWithAuthResult,
} from 'firebaseui-angular';
import { map, Observable, Subscription } from 'rxjs';
import { UserResponse } from 'src/interfaces/user-response.interface';
import { User } from 'src/interfaces/user.interface';
import { AuthService } from 'src/services/auth.service';
@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.scss'],
})
export class GoogleAuthComponent implements OnDestroy {
  user: User | null = null;
  subscriptions: Subscription = new Subscription();
  shouldSignIn: boolean = false;

  isLoggedIn$: Observable<boolean> = this.authService.user$
    .asObservable()
    .pipe(map((user: User) => !!user));

  user$: Observable<User> = this.authService.user$.asObservable();

  constructor(private authService: AuthService) {
    this.subscriptions.add(
      this.user$.subscribe((user: User) => (this.user = user))
    );
  }

  onSignInSuccess(data: FirebaseUISignInSuccessWithAuthResult): void {
    this.authService.onUserSignIn(data.authResult.user as UserResponse);
    this.shouldSignIn = false;
  }

  onSignInFail(error: FirebaseUISignInFailure): void {
    console.log('error: ', error);
  }

  openSignInModal(): void {
    this.shouldSignIn = true;
  }

  onLogout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
