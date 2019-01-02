import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BaseClass } from '@writetome51/base-class';

// This class is made specifically for use in Angular 4+.
// Any component class using Subscriptions should extend from this.
// During the ngOnDestroy() hook, it unsubscribes from all subscriptions inside
// this._subscriptions.
// To make sure this unsubscribes all subscriptions your component is using,
// you first need to add those subscriptions into this._subscriptions.
// That should (probably) be done in the ngAfterViewInit() hook.

export abstract class UnsubscribeOnDestroyComponent extends BaseClass implements OnDestroy {

	protected _subscriptions: Subscription[] = [];


	ngOnDestroy() {
		this._unsubscribeAll();
	}


	protected _unsubscribeAll(): void {
		this._subscriptions.forEach((subscription) => {
			if (typeof subscription !== ('undefined' || 'null')) {
				subscription.unsubscribe();
			}
		});
	}


}