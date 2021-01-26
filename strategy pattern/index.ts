interface IFlyBehaviour {
	fly(): void;
}

class SimpleFlyBehaviour implements IFlyBehaviour {
	fly(): void {
		console.log('Simple Fly Performed.');
	}
}

class FastFlyBehaviour implements IFlyBehaviour {
	fly(): void {
		console.log('Fast Fly Performed.');
	}
}

interface IDisplayBehaviour {
	display(): void;
}

class OrdinaryDisplayBehaviour implements IDisplayBehaviour {
	display(): void {
		console.log('Ordinary Display.');
	}
}

class FancyDisplayBehaviour implements IDisplayBehaviour {
	display(): void {
		console.log('Fancy Display.');
	}
}

abstract class Duck {
	private readonly flyBehaviour: IFlyBehaviour;
	private readonly displayBehaviour: IDisplayBehaviour;

	constructor(
		flyBehaviour: IFlyBehaviour,
		displayBehaviour: IDisplayBehaviour,
	) {
		this.flyBehaviour = flyBehaviour;
		this.displayBehaviour = displayBehaviour;
	}

	fly() {
		this.flyBehaviour.fly();
	}

	quack() {
		console.log('Quack');
	}

	display() {
		this.displayBehaviour.display();
	}
}

class WildDuck extends Duck {
	constructor() {
		super(new FastFlyBehaviour(), new FancyDisplayBehaviour());
	}
}

const duck = new WildDuck();
duck.fly();
duck.quack();
duck.display();
