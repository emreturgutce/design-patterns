interface AbstractProductA {
	usefulFunctionA(): string;
}

class ConcreteProductA1 implements AbstractProductA {
	usefulFunctionA(): string {
		return 'The result of the product A1.';
	}
}

class ConcreteProductA2 implements AbstractProductA {
	usefulFunctionA(): string {
		return 'The result of the product A2.';
	}
}

interface AbstractProductB {
	usefulFunctionA(): string;
	anotherUsefulFunction(collaborator: AbstractProductA): string;
}

class ConcreteProductB1 implements AbstractProductB {
	usefulFunctionA(): string {
		return 'The result of the product B1.';
	}
	anotherUsefulFunction(collaborator: AbstractProductA): string {
		const result = collaborator.usefulFunctionA();
		return `The result of the B1 collaborating with the (${result})`;
	}
}

class ConcreteProductB2 implements AbstractProductB {
	usefulFunctionA(): string {
		return 'The result of the product B2.';
	}

	anotherUsefulFunction(collaborator: AbstractProductA): string {
		const result = collaborator.usefulFunctionA();
		return `The result of the B2 collaborating with the (${result})`;
	}
}

interface AbstractFactory {
	createProductA(): AbstractProductA;
	createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
	createProductA(): AbstractProductA {
		return new ConcreteProductA1();
	}

	createProductB(): AbstractProductB {
		return new ConcreteProductB1();
	}
}

class ConcreteFactory2 implements AbstractFactory {
	createProductA(): AbstractProductA {
		return new ConcreteProductA2();
	}

	createProductB(): AbstractProductB {
		return new ConcreteProductB2();
	}
}

const factory1 = new ConcreteFactory1();
const factory2 = new ConcreteFactory2();

console.log(factory1.createProductA().usefulFunctionA());
console.log(
	factory1.createProductB().anotherUsefulFunction(factory1.createProductA()),
);
console.log(factory2.createProductA().usefulFunctionA());
console.log(
	factory2.createProductB().anotherUsefulFunction(factory1.createProductA()),
);
