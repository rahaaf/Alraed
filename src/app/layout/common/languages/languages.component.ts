import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { DOCUMENT } from '@angular/common';

@Component({
    selector       : 'languages',
    templateUrl    : './languages.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'languages'
})
export class LanguagesComponent implements OnInit, OnDestroy
{
    availableLangs: AvailableLangs;
    activeLang: string;
    flagCodes: any;

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseNavigationService: FuseNavigationService,
        private _translocoService: TranslocoService,
        @Inject(DOCUMENT) private document: Document,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the available languages from transloco
        this.availableLangs = this._translocoService.getAvailableLangs();

        // Subscribe to language changes
        this._translocoService.langChanges$.subscribe((activeLang) => {

            // Get the active lang
            this.activeLang = activeLang;

            // Update the navigation
            this._updateNavigation(activeLang);
        });

        // Set the country iso codes for languages for flags
        this.flagCodes = {
            'en': 'us',
            'ar': 'sy'
        };
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set the active lang
     *
     * @param lang
     */
    setActiveLang(lang: string): void
    {
        // Set the active lang
        const htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
        htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
        this._translocoService.setDefaultLang(lang);
        this._translocoService.getTranslation(lang);
        this.changeCssFile(lang);
        this._translocoService.setActiveLang(lang);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    changeCssFile(lang: string) {
            const headTag = this.document.getElementsByTagName('head')[0] as HTMLHeadElement;
            const existingLink = this.document.getElementById('langCss') as HTMLLinkElement;
            const bundleName = lang === 'ar' ?       'src/language-css/ar.scss':'src/language-css/en.scss';
            if (existingLink) {
            existingLink.href = bundleName;
            } else {
            const newLink = this.document.createElement('link');
            newLink.rel = 'stylesheet';
            newLink.type = 'text/scss';
            newLink.id = 'langCss';
            newLink.href = bundleName;
            headTag.appendChild(newLink);
            }
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the navigation
     *
     * @param lang
     * @private
     */
    private _updateNavigation(lang: string): void
    {
        // For the demonstration purposes, we will only update the Dashboard names
        // from the navigation but you can do a full swap and change the entire
        // navigation data.
        //
        // You can import the data from a file or request it from your backend,
        // it's up to you.

        // Get the component -> navigation data -> item
        const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>('mainNavigation');

        // Return if the navigation component does not exist
        if ( !navComponent )
        {
            return null;
        }

        // Get the flat navigation data
        const navigation = navComponent.navigation;

        // Get the Project dashboard item and update its title
        const projectDashboardItem = this._fuseNavigationService.getItem('storehouse', navigation);
        if ( projectDashboardItem )
        {
            this._translocoService.selectTranslate('AddStore').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    projectDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }

        // Get the Analytics dashboard item and update its title
        const analyticsDashboardItem = this._fuseNavigationService.getItem('salehall', navigation);
        if ( analyticsDashboardItem )
        {
            this._translocoService.selectTranslate('AddHall').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    analyticsDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
                // Get the Contacts dashboard item and update its title
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const ContactsDashboardItem = this._fuseNavigationService.getItem('contacts', navigation);
        if ( ContactsDashboardItem )
        {
            this._translocoService.selectTranslate('Contactstore').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    ContactsDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const ContactshallItem = this._fuseNavigationService.getItem('contactshall', navigation);
        if ( ContactshallItem )
        {
            this._translocoService.selectTranslate('Contactshall').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    ContactshallItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const AddorderItem = this._fuseNavigationService.getItem('addorder', navigation);
        if ( AddorderItem )
        {
            this._translocoService.selectTranslate('Addorder').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    AddorderItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const AddgoodshallItem = this._fuseNavigationService.getItem('addedgoods', navigation);
        if ( ContactshallItem )
        {
            this._translocoService.selectTranslate('Addgoodshall').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    AddgoodshallItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        const addoutgoingmerItem = this._fuseNavigationService.getItem('addoutgoingmer', navigation);
        if ( addoutgoingmerItem )
        {
            this._translocoService.selectTranslate('Addoutgoingmer').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    addoutgoingmerItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const AddgoodsstoreItem = this._fuseNavigationService.getItem('addgoods', navigation);
        if ( AddgoodsstoreItem )
        {
            this._translocoService.selectTranslate('Addgoodsstore').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    AddgoodsstoreItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const AddscalItem = this._fuseNavigationService.getItem('addscale', navigation);
        if ( AddscalItem )
        {
            this._translocoService.selectTranslate('Addscale').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    AddscalItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
    }
}
