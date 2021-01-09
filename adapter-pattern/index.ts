class SquarePeg {
    private width: number;

    constructor(width: number) {
        this.width = width;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width: number) {
        this.width = width;
    }
}

class RoundHole {
    private readonly radius: number;

    constructor(radius: number) {
        this.radius = radius;
        console.log(`RoundHole: max SquarePeg is ${radius * Math.sqrt(2)}`);
    }

    getRadius() {
        return this.radius;
    }
}

class SquarePegAdapter {
    private readonly squarePeg: SquarePeg;

    constructor(width: number) {
        this.squarePeg = new SquarePeg(width);
    }

    makeFit(roundHole: RoundHole) {
        const amount =
            this.squarePeg.getWidth() - roundHole.getRadius() * Math.sqrt(2);

        console.log(
            `Reducing SquarePeg ${this.squarePeg.getWidth()} by ${
                amount < 0 ? 0 : amount
            } amount`,
        );

        if (amount > 0) {
            this.squarePeg.setWidth(this.squarePeg.getWidth() - amount);

            console.log(` width is now ${this.squarePeg.getWidth()}`);
        }
    }
}

const roundHole: RoundHole = new RoundHole(5);

let squarePegAdapter: SquarePegAdapter;

for (let i = 6; i < 10; i++) {
    squarePegAdapter = new SquarePegAdapter(i);
    squarePegAdapter.makeFit(roundHole);
}
