# UnsubscribeOnDestroyDirective

An abstract Angular directive class that any Angular directive class which uses  
[Subscriptions](https://rxjs-dev.firebaseapp.com/api/index/class/Subscription) can extend 
from.

During the `ngOnDestroy()` hook, it unsubscribes from all Subscriptions inside   
`this._subscriptions`. 
Have your component classes that use Subscriptions  
inherit from this class, add their subscriptions to `this._subscriptions`, then let  
this class automatically unsubscribe from all of them during `ngOnDestroy()`.  


## Example
```
export class ExamplePageComponent extends UnsubscribeOnDestroyDirective
    implements AfterViewInit {

    ngAfterViewInit() {
        this._subscriptions = this._subscriptions.concat(
            // Add any subscriptions this component is using to this array:
            [
                this.subscriptionOne,
                this.subscriptionTwo,
                // ...
            ]
        );
    }

}
``` 

## Properties
```
protected _subscriptions: Array<{ unsubscribe: () => any }>
```


## Methods
```
ngOnDestroy() : void
``` 


## Installation

`npm i  @writetome51/unsubscribe-on-destroy-directive`

## Loading
```ts
import { UnsubscribeOnDestroyDirective } 
	from '@writetome51/unsubscribe-on-destroy-directive';
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
