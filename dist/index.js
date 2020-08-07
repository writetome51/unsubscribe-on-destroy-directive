import {hasValue} from '@writetome51/has-value-no-value';


// This class is made specifically for use in Angular 4 and above.
// Any component class using Subscriptions should extend from this.
// During the ngOnDestroy() hook, it unsubscribes from all subscriptions inside
// this._subscriptions.
// To make sure this unsubscribes all subscriptions your component is using,
// you first need to add those subscriptions into `this._subscriptions`.

export class UnsubscribeOnDestroyComponent {

	constructor() {
		this._subscriptions = [];
	}


	ngOnDestroy() {
		this.__unsubscribeAll();
	}


	__unsubscribeAll() {
		this._subscriptions.forEach((subscription) => {
			if (hasValue(subscription.unsubscribe)) {
				subscription.unsubscribe();
			}
		});
	}
}
