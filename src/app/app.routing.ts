import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to 'home'
    {path: '', pathMatch : 'full', redirectTo: 'storehouse'},

    // Redirect signed in user to the '/storehouse'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'storehouse'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'contacts', loadChildren: () => import('app/modules/admin/contacts/contacts.module').then(m => m.ContactsModule)},
            {path: 'contactshall', loadChildren: () => import('app/modules/admin/contactshall/contacts.module').then(c => c.ContactsModule)},
            {path: 'storehouse', loadChildren: () => import('app/modules/admin/addstorehouse/ecommerce.module').then(s => s.ECommerceModule)},
            {path: 'salehall', loadChildren: () => import('app/modules/admin/addsalehall/ecommerce.module').then(h => h.ECommerceModule)},
        ]
    },
    // managstor routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'addgoods', loadChildren: () => import('app/modules/manager store/addgoods/ecommerce.module').then(g => g.ECommerceModule)},
            {path: 'addoutgoingmer', loadChildren: () => import('app/modules/manager store/addoutgoingmerchandise/ecommerce.module').then(o => o.ECommerceModule)},
            {path: 'addtransport', loadChildren: () => import('app/modules/manager store/addtransporttrip/ecommerce.module').then(h => h.ECommerceModule)},
         ]
         },
//     // managhall routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'addedgoods', loadChildren: () => import('app/modules/managhall/addgoods/ecommerce.module').then(g => g.ECommerceModule)},
            {path: 'addorder', loadChildren: () => import('app/modules/managhall/addordergoods/ecommerce.module').then(m => m.ECommerceModule)},
            {path: 'addscale', loadChildren: () => import('app/modules/managhall/addscale/ecommerce.module').then(m => m.ECommerceModule)},
                  ]
    }
 ];
