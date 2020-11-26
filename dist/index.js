// This class is made specifically for use in Angular 4 and above.
// Any directive class using Subscriptions can extend from this.
// During the ngOnDestroy() hook, it unsubscribes from all subscriptions inside
// this._subscriptions.

export class UnsubscribeOnDestroyDirective {

	constructor() {
		this._subscriptions = [];
	}


	ngOnDestroy() {
		this.__unsubscribeAll();
	}


	__unsubscribeAll() {
		for (let i = 0, length = this._subscriptions.length; i < length; ++i) {
			this._subscriptions[i].unsubscribe();
		}
	}

}
