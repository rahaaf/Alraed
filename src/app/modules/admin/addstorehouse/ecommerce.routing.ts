import { Route } from '@angular/router';
import { InventoryComponent } from 'app/modules/admin/addstorehouse/storehouse/inventory.component';
import { InventoryListComponent } from 'app/modules/admin/addstorehouse/storehouse/list/inventory.component';
import { InventoryProductsResolver} from 'app/modules/admin/addstorehouse/storehouse/inventory.resolvers';

export const ecommerceRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'storehouse'
    },
    {
        path     : 'storehouse',
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
