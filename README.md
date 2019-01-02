# UnsubscribeOnDestroyComponent

An abstract Angular component class that any Angular component class which uses  
Subscriptions may want to extend from.  During the ngOnDestroy() hook, it unsubscribes  
from all Subscriptions inside `this._subscriptions`.  For a subclass to make sure this  
unsubscribes all subscriptions it's using, it must add those subscriptions into   
`this._subscriptions`.  That should (probably) be done in the ngAfterViewInit() hook.

## Installation

You must have npm installed first. Then, in the command line:

    npm install @writetome51/unsubscribe-on-destroy-component

## Loading

    // if using TypeScript:
    import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
    // if using ES5 JavaScript:
    var  UnsubscribeOnDestroyComponent = 
            require('@writetome51/unsubscribe-on-destroy-component').UnsubscribeOnDestroyComponent;
    

## Properties
```
protected _subscriptions : Subscription[]  (read-writable)

public className : string (read-only)
```

## Methods
```
ngOnDestroy() : void
     // lifecycle hook.
     // When called, all Subscriptions inside this._subscriptions are unsubscribed.
     // If you override this, don't forget to call super.ngOnDestroy() inside the overrider.


protected   _createGetterAndOrSetterForEach(
                  propertyNames: string[],
                  configuration: IGetterSetterConfiguration
            ) : void
     /*********************
     Use this method when you have a bunch of properties that need getter and/or 
     setter functions that all do the same thing. You pass in an array of string 
     names of those properties, and the method attaches the same getter and/or 
     setter function to each property.
     IGetterSetterConfiguration is this object:
     {
         get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function,
             // get_setterFunction takes the property name as first argument and 
             // returns the setter function.  The setter function must take one 
             // parameter and return void.
     
         get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function
             // get_getterFunction takes the property name as first argument and 
             // returns the getter function.  The getter function must return something.
     }
     *********************/ 
   
   
protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _runMethod_and_returnThis(
    callingObject, 
    method: Function, 
    methodArgs: any[], 
    additionalAction?: Function // takes the result returned by method as an argument.
) : this
```

## Usage Example
```
export class ExamplePageComponent extends UnsubscribeOnDestroyComponent 
	implements OnDestroy, AfterViewInit {

	constructor() {
		super();
	}

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


	// Overrides ngOnDestroy():
	ngOnDestroy() {
		super.ngOnDestroy();
		// do other things...
	}

}
```

## Inheritance Chain

UnsubscribeOnDestroyComponent<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## License
[MIT](https://choosealicense.com/licenses/mit/)