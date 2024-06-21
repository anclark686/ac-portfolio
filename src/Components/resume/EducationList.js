class Education {
  constructor(school, degree, date) {
    this.school = school;
    this.degree = degree;
    this.date = date;
  }
}

const odu = new Education(
  "Old Dominion University",
  "Bachelor of Science in Criminal Justice",
  "May 10, 2014",
);

const ada = new Education(
  "Ada Developers Academy",
  "Software Development Bootcamp",
  "Jan. 24, 2024",
);

let education = [odu, ada];

export default education;
