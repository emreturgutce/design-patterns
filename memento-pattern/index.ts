class Memento {
	private readonly state: string;

	constructor(state: string) {
		this.state = state;
	}

	getState(): string {
		return this.state;
	}
}

class Originator {
	private state: string;
	private careTaker = new CareTaker();

	setState(state: string): void {
		console.log(`Originator: setting state to ${state}`);
		this.state = state;
	}

	save(): void {
		console.log('Originator: saving to memento.');
		this.careTaker.addMemento(new Memento(this.state));
	}

	restore(): void {
		this.state = this.careTaker.getMemento().getState();
		console.log(
			`Originator: state after restoring from memento: ${this.state}`,
		);
	}
}

class CareTaker {
	private mementos: Memento[] = [];

	addMemento(m: Memento): void {
		this.mementos.push(m);
	}

	getMemento(): Memento {
		return this.mementos.pop();
	}
}

const originator = new Originator();

originator.setState('State1');
originator.setState('State2');
originator.save();
originator.setState('State3');
originator.save();
originator.setState('State4');
originator.restore();
