abstract class ReportGenerator {
    generate() {
        this.createDatabaseConnection();
        this.executeQuery();
        this.convert();
    }

    protected createDatabaseConnection() {
        console.log('Creating Database Connection...');
    }

    protected abstract executeQuery(): void;

    protected abstract convert(): void;
}

class TaxReporter extends ReportGenerator {
    protected executeQuery(): void {
        console.log('Executing MySQL Query...');
    }
    protected convert(): void {
        console.log('Converting to PDF...');
    }
}

class ExpenseReporter extends ReportGenerator {
    protected createDatabaseConnection(): void {
        console.log('Creating Database Connection...');
    }
    protected executeQuery(): void {
        console.log('Executing Postgres Query...');
    }
    protected convert(): void {
        console.log('Converting to XLS...');
    }
}

const reporter: ReportGenerator = new ExpenseReporter();

reporter.generate();
