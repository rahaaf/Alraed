import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './core/auth/auth.service';
import { UserService } from './core/user/user.service';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit
{
    user: Observable<any>;
    /**
     * Constructor
     */
     constructor(private authService: UserService) { }

     ngOnInit(): void {
         this.user =  this.authService.user$;
     }
}
