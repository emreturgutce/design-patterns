interface Command {
    execute: () => void;
}

class Light {
    on() {
        console.log('Light is on');
    }

    off() {
        console.log('Light is off');
    }
}

class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute() {
        this.light.on();
    }
}

class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute() {
        this.light.off();
    }
}

class SimpleRemoteControl {
    slot!: Command;

    constructor() {}

    setCommand(command: Command) {
        this.slot = command;
    }

    buttonWasPressed() {
        this.slot.execute();
    }
}

const remote = new SimpleRemoteControl();

const light = new Light();

remote.setCommand(new LightOnCommand(light));
remote.buttonWasPressed();

remote.setCommand(new LightOffCommand(light));
remote.buttonWasPressed();
