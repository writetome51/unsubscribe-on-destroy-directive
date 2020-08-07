# UnsubscribeOnDestroyComponent

An abstract Angular component class that any Angular component class which uses  
[Subscriptions](https://rxjs-dev.firebaseapp.com/api/index/class/Subscription) may want to extend 
from.

During the `ngOnDestroy()` hook, it unsubscribes from all Subscriptions inside   
`this._subscriptions`. 
Have your component classes that use Subscriptions  
inherit from this class, add their subscriptions to `this._subscriptions`, then let  
this class automatically unsubscribe from all of them during `ngOnDestroy()`.  


## Example
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
    }

}
```  

## Properties
```ts
protected _subscriptions: Array<{ unsubscribe: () => any }>
```


## Methods
```
ngOnDestroy() : void
    // Angular lifecycle hook.
``` 


## Installation

`npm i  @writetome51/unsubscribe-on-destroy-component`

## Loading
```ts
import { UnsubscribeOnDestroyComponent } 
	from '@writetome51/unsubscribe-on-destroy-component';
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
