import { Route } from '@angular/router';
import { InventoryComponent } from 'app/modules/manager store/addtransporttrip/addtransporttrip/inventory.component';
import { InventoryListComponent } from 'app/modules/manager store/addtransporttrip/addtransporttrip/list/inventory.component';
import { InventoryProductsResolver} from 'app/modules/manager store/addtransporttrip/addtransporttrip/inventory.resolvers';

export const ecommerceRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'addtransport'
    },
    {
        path     : 'addtransport',
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
