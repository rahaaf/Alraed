import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { UserService } from 'app/core/user/user.service';
import { Observable } from 'rxjs';

@Component({
    selector       : 'inventory',
    templateUrl    : './inventory.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryComponent
{   user: Observable<any>;
    /**
     * Constructor
     */
    constructor( private userservice: UserService)
    {
        this.user = userservice.user$;
    }
}
