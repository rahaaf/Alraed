import { Route } from '@angular/router';
import { InventoryComponent } from 'app/modules/managhall/addordergoods/addordergoods/inventory.component';
import { InventoryListComponent } from 'app/modules/managhall/addordergoods/addordergoods/list/inventory.component';
import { InventoryProductsResolver} from 'app/modules/managhall/addordergoods/addordergoods/inventory.resolvers';

export const ecommerceRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'addorder'
    },
    {
        path     : 'addorder',
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
