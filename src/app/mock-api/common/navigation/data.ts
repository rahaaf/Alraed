/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'storehouse',
        title   : 'AddStore',
        type    : 'basic',
        icon    : 'mat_outline:storefront',
        link    : '/storehouse',
    },
    {
        id      : 'salehall',
        title   : 'AddHall',
        type    : 'basic',
        icon    : 'mat_outline:store',
        link    : '/salehall'
    },
    {
        id   : 'contacts',
        title: 'Contactstore',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/contacts'
    },
    {
        id   : 'contactshall',
        title: 'Contactshall',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/contactshall'
    },
    {
        id      : 'addgoods',
        title   : 'Addgoodsstore',
        type    : 'basic',
        icon    : 'mat_outline:storefront',
        link    : '/addgoods'
    },
    {
        id      : 'addoutgoingmer',
        title   : 'Addoutgoingmer',
        type    : 'basic',
        icon    : 'mat_outline:store',
        link    : '/addoutgoingmer'
    },
    // {
    //     id   : 'addtransport',
    //     title: 'Addtransport',
    //     type : 'basic',
    //     icon : 'heroicons_outline:user-group',
    //     link : '/addtransport'
    // },
    {
        id      : 'addedgoods',
        title   : 'Addgoodshall',
        type    : 'basic',
        icon    : 'mat_outline:storefront',
        link    : '/addedgoods'
    },
    {
        id      : 'addorder',
        title   : 'Addorder',
        type    : 'basic',
        icon    : 'mat_outline:storefront',
        link    : '/addorder'
    },
    {
        id      : 'addscale',
        title   : 'Addscale',
        type    : 'basic',
        icon    : 'mat_outline:store',
        link    : '/addscale'
    },

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
