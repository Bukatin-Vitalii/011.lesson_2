class Student {
	constructor(name, surname, birthYear) {
		this.name = name;
		this.surname = surname;
		this.birthYear = birthYear;
		this.marks = [];
		this.attendance = [];
	}

	getAge() {
		return new Date().getFullYear() - this.birthYear;
	}

	getAverageMark() {
		return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;
	}

	present() {
		if (this.attendance.length < 25) {
			this.attendance.push(true);
		} else {
			console.log('You can\'t present more than 25 times!');
		}
	}

	absent() {
		if (this.attendance.length < 25) {
			this.attendance.push(false);
		} else {
			console.log('You can\'t absent more than 25 times!');
		}
	}

	summary() {
		let averageMark = this.getAverageMark();
		let averageAttendance = this.attendance.filter(Boolean).length / this.attendance.length;

		if (averageMark > 90 && averageAttendance > 0.9) {
			return 'Молодець!';
		} else if (averageMark < 90 && averageAttendance < 0.9) {
			return 'Редиска!';
		} else {
			return 'Добре, але можна краще';
		}
	}
}

let student1 = new Student('Vasya', 'Pupkin', 1990);
let student2 = new Student('Petya', 'Pupkin', 1991);

student1.marks = [100, 80, 100, 95, 100];
student2.marks = [10, 80, 50, 20, 45];


student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

student2.present();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();


console.log(
	`Student info: ${student1.name} ${student1.surname},
	Student Age: ${student1.getAge()},
	Student Average Mark: ${student1.getAverageMark()},
	Student Summary: ${student1.summary()}`
);

console.log(
	`Student info: ${student2.name} ${student2.surname},
	Student Age: ${student2.getAge()},
	Student Average Mark: ${student2.getAverageMark()},
	Student Summary: ${student2.summary()}`
);