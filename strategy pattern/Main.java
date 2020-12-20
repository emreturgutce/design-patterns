class ModelDuck extends Duck {
    public ModelDuck() {
        flyBehaviour = new FlyWithoutWings();
        quackBehaviour = new SqueakQuack();
    }

    @Override
    public void display() {
        System.out.println("Model duck display");
    }
}

abstract class Duck {
    QuackBehaviour quackBehaviour;
    FlyBehaviour flyBehaviour;

    public Duck() {
    }

    public abstract void display();

    public void performFly() {
        flyBehaviour.fly();
    }

    public void performQuack() {
        quackBehaviour.quack();
    }

    public void swim() {
        System.out.println("All ducks float");
    }
}

interface QuackBehaviour {
    public void quack();
}

class MuteQuack implements QuackBehaviour {
    @Override
    public void quack() {
        System.out.println("Mute Quack");
    }

}

class SqueakQuack implements QuackBehaviour {
    @Override
    public void quack() {
        System.out.println("Squeak Quack");
    }

}

interface FlyBehaviour {
    public void fly();
}

class FlyWithWings implements FlyBehaviour {
    @Override
    public void fly() {
        System.out.println("Fly with wings");
    }
}

class FlyWithoutWings implements FlyBehaviour {
    @Override
    public void fly() {
        System.out.println("Fly without wings");
    }
}