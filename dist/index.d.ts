import { BaseClass } from '@writetome51/base-class';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';


export declare abstract class UnsubscribeOnDestroyComponent extends BaseClass implements OnDestroy {


	protected _subscriptions: Subscription[];


	ngOnDestroy(): void;


	private __unsubscribeAll;


}
