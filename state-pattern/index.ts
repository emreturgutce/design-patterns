interface State {
    pull(wrapper: CeilingPullChain): void;
}

class CeilingPullChain {
    private currentState: State;

    constructor() {
        this.currentState = new Off();
    }

    setState(s: State) {
        this.currentState = s;
    }

    pull() {
        this.currentState.pull(this);
    }
}

class Off implements State {
    pull(wrapper: CeilingPullChain): void {
        wrapper.setState(new Low());
        console.log('Low speed');
    }
}

class Low implements State {
    pull(wrapper: CeilingPullChain): void {
        wrapper.setState(new Medium());
        console.log('Medium speed');
    }
}

class Medium implements State {
    pull(wrapper: CeilingPullChain): void {
        wrapper.setState(new High());
        console.log('High speed');
    }
}

class High implements State {
    pull(wrapper: CeilingPullChain): void {
        wrapper.setState(new Off());
        console.log('Off speed');
    }
}

const chain = new CeilingPullChain();

for (let i = 0; i < 10; i++) {
    chain.pull();
}
