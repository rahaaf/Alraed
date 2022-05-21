/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './core/user/user.service';
import { TranslocoService } from '@ngneat/transloco';


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
     constructor(private authService: UserService,) { }

     ngOnInit(): void {
         this.user =  this.authService.user$;
     }
}
