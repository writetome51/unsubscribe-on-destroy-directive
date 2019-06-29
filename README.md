# UnsubscribeOnDestroyComponent

An abstract Angular component class that any Angular component class which uses  
[Subscriptions](https://rxjs-dev.firebaseapp.com/api/index/class/Subscription) may want to extend 
from.

During the `ngOnDestroy()` hook, it unsubscribes from all Subscriptions inside   
`this._subscriptions`. 
The idea is to have your component classes that use Subscriptions  
inherit from this class, add their subscriptions to `this._subscriptions`, then let this class  
automatically unsubscribe  from all of them during `ngOnDestroy()`.  

NOTE:  Adding the subscriptions to `this._subscriptions` should be done in the  
`ngAfterViewInit()` hook.


## Usage Example
```
export class ExamplePageComponent extends UnsubscribeOnDestroyComponent 
    implements AfterViewInit {

    ngAfterViewInit() {
        this._subscriptions = this._subscriptions.concat(
            // Add any _subscriptions this component is using to this array:
            [
                this.subscriptionOne,
                this.subscriptionTwo,
                this.subscriptionThree
            ]
        );
        // And that's all you have to do.
    }

}
```  

## Properties
```ts
protected _subscriptions: { unsubscribe: () => any }[]
```


## Methods
```
ngOnDestroy() : void
    // Angular lifecycle hook.
    // When called, all subscriptions inside this._subscriptions are unsubscribed.
    // If you override this, don't forget to call super.ngOnDestroy() inside the 
    // overrider.
``` 


## Installation

`npm i  @writetome51/unsubscribe-on-destroy-component`

## Loading
```ts
// if using TypeScript:
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
// if using ES5 JavaScript:
var  UnsubscribeOnDestroyComponent = 
    require('@writetome51/unsubscribe-on-destroy-component').UnsubscribeOnDestroyComponent;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
