import { Route } from '@angular/router';
import { InventoryComponent } from 'app/modules/admin/addsalehall/salehall/inventory.component';
import { InventoryListComponent } from 'app/modules/admin/addsalehall/salehall/list/inventory.component';
import { InventoryProductsResolver} from 'app/modules/admin/addsalehall/salehall/inventory.resolvers';

export const ecommerceRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'salehall'
    },
    {
        path     : 'salehall',
        component: InventoryComponent,
        children : [
            {
                path     : '',
                component: InventoryListComponent,
                resolve  : {
                    products  : InventoryProductsResolver,
                }
            }
        ]
        /*children : [
            {
                path     : '',
                component: ContactsListComponent,
                resolve  : {
                    tasks    : ContactsResolver,
                    countries: ContactsCountriesResolver
                },
                children : [
                    {
                        path         : ':id',
                        component    : ContactsDetailsComponent,
                        resolve      : {
                            task     : ContactsContactResolver,
                            countries: ContactsCountriesResolver
                        },
                        canDeactivate: [CanDeactivateContactsDetails]
                    }
                ]
            }
        ]*/
    }
];
