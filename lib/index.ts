import { BaseClass } from '@writetome51/base-class';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// This class is made specifically for use in Angular 4 and above.
// Any component class using Subscriptions should extend from this.
// During the ngOnDestroy() hook, it unsubscribes from all subscriptions inside
// this._subscriptions.
// To make sure this unsubscribes all subscriptions your component is using,
// you first need to add those subscriptions into this._subscriptions.
// That should (probably) be done in the ngAfterViewInit() hook.

export abstract class UnsubscribeOnDestroyComponent extends BaseClass implements OnDestroy {

	protected _subscriptions: Subscription[] = [];


	ngOnDestroy() {
		this.__unsubscribeAll();
	}


	private __unsubscribeAll(): void {
		this._subscriptions.forEach((subscription) => {
			if (typeof subscription !== 'undefined') {
				subscription.unsubscribe();
			}
		});
	}


}
