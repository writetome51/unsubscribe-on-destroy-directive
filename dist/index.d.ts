import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BaseClass } from '@writetome51/base-class';


export declare abstract class UnsubscribeOnDestroyComponent extends BaseClass implements OnDestroy {

	protected _subscriptions: Subscription[];


	ngOnDestroy(): void;


	protected _unsubscribeAll(): void;
}
