import { OnDestroy } from '@angular/core';


// This class is made specifically for use in Angular 4 and above.
// Any directive class using Subscriptions can extend from this.
// During the ngOnDestroy() hook, it unsubscribes from all subscriptions inside
// this._subscriptions.

export abstract class UnsubscribeOnDestroyDirective implements OnDestroy {

	protected _subscriptions: Array<{ unsubscribe: () => any }> = [];


	ngOnDestroy() {
		this.__unsubscribeAll();
	}


	private __unsubscribeAll(): void {
		for (let i = 0, length = this._subscriptions.length;  i < length;  ++i) {
			this._subscriptions[i].unsubscribe();
		}
	}


}
