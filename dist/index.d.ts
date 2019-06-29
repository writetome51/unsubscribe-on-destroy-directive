import { OnDestroy } from '@angular/core';


export declare abstract class UnsubscribeOnDestroyComponent implements OnDestroy {

	protected _subscriptions: {
		unsubscribe: () => any;
	}[];


	ngOnDestroy(): void;


	private __unsubscribeAll;
}
