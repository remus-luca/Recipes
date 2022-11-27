import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { UserResponse } from 'src/interfaces/user-response.interface';
import { User } from 'src/interfaces/user.interface';

const ADMIN_UID = 'fgkeHG1uZvNlRPUNMoc4c4H6fUe2';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<User>(null);

  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe((user: UserResponse) => {
      return user && this.onUserSignIn(user);
    });
  }

  onUserSignIn(user: UserResponse): void {
    this.user$.next({
      email: user.email,
      name: user.displayName,
      picture: user.photoURL,
      uid: user.uid,
      isAdmin: user.uid === ADMIN_UID,
    });
  }

  logout(): void {
    this.angularFireAuth.signOut();
    this.user$.next(null);
  }
}
