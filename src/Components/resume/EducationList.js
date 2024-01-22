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
)

const psu = new Education(
  "Penn State University",
  "Graduate Level Coursework in Statistics",
  "Dec. 31, 2015",
)

const ada = new Education(
  "Ada Developers Academy",
  "Software Development Bootcamp",
  "Jan. 24, 2024",
)

let education = [odu, psu, ada]

export default education;