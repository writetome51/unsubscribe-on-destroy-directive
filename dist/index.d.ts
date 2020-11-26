import { OnDestroy } from '@angular/core';


export declare abstract class UnsubscribeOnDestroyDirective implements OnDestroy {

	protected _subscriptions: Array<{ unsubscribe: () => any; }>;


	ngOnDestroy(): void;


	private __unsubscribeAll;

}
