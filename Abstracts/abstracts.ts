type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {}

  public addHolidays(holidays: Holidays) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }

  public createHolidays() {
    const array: Holidays = [];
    for (let i = 0; i < 10; i++) {
      array.push({
        date: new Date(2024, 10, i + 1),
        reason: `${i}. ${this.name}`,
      });
    }
    return array;
  }

  public abstract printHolidays(): void;
}

class ItDepartment extends Department {
  protected holidays: Holidays = [];

  constructor() {
    super("IT Department");
  }

  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("no holidays");
    }
    console.log(`Here is list of holidays for ${this.name}`);

    this.holidays.forEach(
      (holiday: { date: Date; reason: string }, index: number) => {
        console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
      }
    );
  }
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];

  constructor() {
    super("Admin Department");
  }
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log("no holidays");
    }
    console.log(`Here is list of holidays for ${this.name}`);

    this.holidays.forEach(
      (holiday: { date: Date; reason: string }, index: number) => {
        console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`);
      }
    );
  }
}

const itDepartment: ItDepartment = new ItDepartment();
const adminDepartment: AdminDepartment = new AdminDepartment();

itDepartment.addHolidays(itDepartment.createHolidays());
adminDepartment.addHolidays(adminDepartment.createHolidays());

itDepartment.printHolidays();
adminDepartment.printHolidays();
