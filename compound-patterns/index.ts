interface Quackable extends QuackObservable {
    quack(): void;
}

interface QuackObservable {
    registerObserver(observer: Observer): void;
    notifyObservers(): void;
}

class Observable implements QuackObservable {
    observers: Observer[] = [];
    duck: QuackObservable;

    constructor(duck: QuackObservable) {
        this.duck = duck;
    }

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }
    notifyObservers(): void {
        this.observers.forEach((observer) => observer.update(this.duck));
    }
}

class MallardDuck implements Quackable {
    observable: Observable;

    constructor() {
        this.observable = new Observable(this);
    }

    registerObserver(observer: Observer): void {
        this.observable.registerObserver(observer);
    }
    notifyObservers(): void {
        this.observable.notifyObservers();
    }
    quack(): void {
        console.log('Quack');
        this.notifyObservers();
    }
}

interface Observer {
    update(duck: QuackObservable): void;
}

class Quackologist implements Observer {
    update(duck: QuackObservable): void {
        console.log(`Quackologist ${duck} just quacked.`);
    }
}

class RedheadDuck implements Quackable {
    registerObserver(observer: Observer): void {
        throw new Error('Method not implemented.');
    }
    notifyObservers(): void {
        throw new Error('Method not implemented.');
    }
    quack(): void {
        console.log('Quack');
    }
}

class DuckCall implements Quackable {
    registerObserver(observer: Observer): void {
        throw new Error('Method not implemented.');
    }
    notifyObservers(): void {
        throw new Error('Method not implemented.');
    }
    quack(): void {
        console.log('Kwak');
    }
}

class RubberDuck implements Quackable {
    registerObserver(observer: Observer): void {
        throw new Error('Method not implemented.');
    }
    notifyObservers(): void {
        throw new Error('Method not implemented.');
    }
    quack(): void {
        console.log('Squeak');
    }
}

class Goose {
    honk(): void {
        console.log('Honk');
    }
}

// Adapter Pattern
class GooseAdapter implements Quackable {
    goose: Goose;

    constructor(goose: Goose) {
        this.goose = goose;
    }
    registerObserver(observer: Observer): void {
        throw new Error('Method not implemented.');
    }
    notifyObservers(): void {
        throw new Error('Method not implemented.');
    }

    quack(): void {
        this.goose.honk();
    }
}

// it is a decorator
class QuackCounter implements Quackable {
    duck: Quackable;
    static numberOfQuacks: number = 0;
    observable: Observable;

    constructor(duck: Quackable) {
        this.duck = duck;
        this.observable = new Observable(this);
    }
    registerObserver(observer: Observer): void {
        this.observable.registerObserver(observer);
    }
    notifyObservers(): void {
        this.observable.notifyObservers();
    }

    quack(): void {
        this.duck.quack();
        QuackCounter.numberOfQuacks++;
        this.notifyObservers();
    }

    static getQuacks(): number {
        return QuackCounter.numberOfQuacks;
    }
}

abstract class AbstractDuckFactory {
    abstract createMallardDuck(): Quackable;
    abstract createRedheadDuck(): Quackable;
    abstract createDuckCall(): Quackable;
    abstract createRubberDuck(): Quackable;
}

class DuckFactory extends AbstractDuckFactory {
    createMallardDuck(): Quackable {
        return new MallardDuck();
    }
    createRedheadDuck(): Quackable {
        return new RedheadDuck();
    }
    createDuckCall(): Quackable {
        return new DuckCall();
    }
    createRubberDuck(): Quackable {
        return new RubberDuck();
    }
}

class CountingDuckFactory extends AbstractDuckFactory {
    createMallardDuck(): Quackable {
        return new QuackCounter(new MallardDuck());
    }
    createRedheadDuck(): Quackable {
        return new QuackCounter(new RedheadDuck());
    }
    createDuckCall(): Quackable {
        return new QuackCounter(new DuckCall());
    }
    createRubberDuck(): Quackable {
        return new QuackCounter(new RubberDuck());
    }
}

class Flock implements Quackable {
    observable: Observable;
    quackers: Quackable[] = [];

    constructor() {
        this.observable = new Observable(this);
    }

    registerObserver(observer: Observer): void {
        this.observable.registerObserver(observer);
    }
    notifyObservers(): void {
        this.observable.notifyObservers();
    }

    add(quacker: Quackable): void {
        this.quackers.push(quacker);
    }

    quack(): void {
        this.quackers.forEach((quacker) => quacker.quack());
        this.notifyObservers();
    }
}

const duckFactory = new CountingDuckFactory();
const quackologist = new Quackologist();
const flock = new Flock();
flock.add(duckFactory.createMallardDuck());
flock.add(duckFactory.createMallardDuck());
flock.add(duckFactory.createMallardDuck());

flock.registerObserver(quackologist);

const duck1 = duckFactory.createMallardDuck();
const duck2 = duckFactory.createMallardDuck();

duck1.registerObserver(quackologist);
duck2.registerObserver(quackologist);

simulate(flock);
simulate(duck1);
simulate(duck2);

console.log('Count ' + QuackCounter.getQuacks());

function simulate(duck: Quackable) {
    duck.quack();
}
