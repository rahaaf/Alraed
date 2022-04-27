import { Route } from '@angular/router';
import { CanDeactivateContactsDetails } from 'app/modules/admin/contacts/contacts.guards';
import { ContactsContactResolver, ContactsCountriesResolver, ContactsResolver, ContactsTagsResolver } from 'app/modules/admin/contacts/contacts.resolvers';
import { ContactsComponent } from 'app/modules/admin/contacts/contacts.component';
import { ContactsListComponent } from 'app/modules/admin/contactshall/list/list.component';
import { ContactsDetailsComponent } from 'app/modules/admin/contactshall/details/details.component';

export const contactsRoutes: Route[] = [
    {
        path     : '',
        component: ContactsComponent,
        resolve  : {
            tags: ContactsTagsResolver
        },
        children : [
            {
                path     : '',
                component: ContactsListComponent,
                resolve  : {
                    contacts : ContactsResolver,
                    countries: ContactsCountriesResolver
                },
                children : [
                    {
                        path         : ':id',
                        component    : ContactsDetailsComponent,
                        resolve      : {
                            contact  : ContactsContactResolver,
                            countries: ContactsCountriesResolver
                        },
                        canDeactivate: [CanDeactivateContactsDetails]
                    }
                ]
            }
        ]
    }
];
