abstract class Generalization {
    // 1. Standardize the skeleton of an algorithm
    findSolution() {
        this.stepOne();
        this.stepTwo();
        this.stepThree();
        this.stepFour();
    }

    // 2. Common implementations of individual steps are defined in base class
    private stepOne() {
        console.log('Generalization.stepOne');
    }

    // 3. Steps requiring peculiar implementations are "placeholders" in the base class
    protected abstract stepTwo(): void;
    protected abstract stepThree(): void;

    protected stepFour() {
        console.log('Generalization.stepFour');
    }
}

abstract class Specialization extends Generalization {
    protected stepThree() {
        this.step3_1();
        this.step3_2();
        this.step3_3();
    }

    private step3_1() {
        console.log('Specialization.step3_1');
    }

    protected abstract step3_2(): void;

    private step3_3() {
        console.log('Specialization.step3_3');
    }
}

class Realization extends Specialization {
    protected stepTwo() {
        console.log('Realization.stepTwo');
    }

    protected step3_2() {
        console.log('Realization.step3_2');
    }

    protected stepFour() {
        console.log('Realization.stepFour');
        super.stepFour();
    }
}

const algorithm: Generalization = new Realization();

algorithm.findSolution();
