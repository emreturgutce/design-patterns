interface IObserver<T> {
	update(msg?: string): void;
	getData(): T;
}

interface IObservable<T> {
	register(observer: IObserver<T>): void;
	remove(observer: IObserver<T>): void;
	notify(msg?: string): void;
	getData(): T;
}

class Observer<T> implements IObserver<T> {
	private readonly id = Math.floor(Math.random() * 100);
	private observable: IObservable<T>;
	private data: T;

	constructor(observable: IObservable<T>) {
		this.observable = observable;
	}

	update(msg?: string): void {
		if (msg) {
			console.log(`ObserverId ${this.id} - ${msg}`);
		}
		this.data = this.observable.getData();
		console.log(`ObserverId ${this.id} => Value is updated`);
	}

	getData(): T {
		return this.data;
	}
}

class Observable<T> implements IObservable<T> {
	private observers: IObserver<T>[] = [];
	private data: T;

	setData(data: T): void {
		this.data = data;
		this.notify(`Observable => Data property set to ${data}.`);
	}

	getData(): T {
		return this.data;
	}

	register(observer: IObserver<T>): void {
		this.observers.push(observer);
	}

	remove(observer: IObserver<T>): void {
		this.observers = this.observers.filter((o) => o !== observer);
	}

	notify(msg?: string): void {
		console.log('** Sending notification to all observers. **');
		for (const observer of this.observers) observer.update(msg);
	}
}

const observable = new Observable<string>();
const observer1 = new Observer<string>(observable);
const observer2 = new Observer<string>(observable);
const observer3 = new Observer<string>(observable);
observable.register(observer1);
observable.register(observer2);
observable.register(observer3);
observable.setData('OBSERVER');
observable.remove(observer2);
observable.getData();
