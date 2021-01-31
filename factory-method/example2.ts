abstract class Creator {
	abstract factoryMethod(): Product;

	someOperation(): string {
		const product = this.factoryMethod();
		return `Creator: The same creator's code has just worked with ${product.operation()}`;
	}
}

class ConcreteCreator1 extends Creator {
	factoryMethod(): Product {
		return new ConcreteProduct1();
	}
}

class ConcreteCreator2 extends Creator {
	factoryMethod(): Product {
		return new ConcreteProduct2();
	}
}

interface Product {
	operation(): string;
}

class ConcreteProduct1 implements Product {
	operation(): string {
		return '{Result of the ConcreteProduct1}';
	}
}

class ConcreteProduct2 implements Product {
	operation(): string {
		return '{Result of the ConcreteProduct2}';
	}
}

const creator1 = new ConcreteCreator1();
const creator2 = new ConcreteCreator2();
console.log(creator1.someOperation());
console.log(creator2.someOperation());
