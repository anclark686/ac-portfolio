class Job {
  constructor(company, title, dateRange, description) {
    this.company = company;
    this.title = title;
    this.dateRange = dateRange;
    this.description = description;
  }
}

const forstaDev1 = new Job(
  "Forsta",
  "Software Engineer II",
  "01/2024 - Present",
  "Develop new applications and maintain existing applications for a large legacy codebase used in the survey application Decipher. Technologies used include Python, various Javascript libraries and frameworks including React, Vue and AngularJS as well as AWS."
)

const qa = new Job(
  "Forsta",
  "QA Engineer",
  "07/2022 - 01/2024",
  "Tested new and old programs to ensure functionality, and desired effect. Coordinated with developers to ensure that new programs did not interfere with existing architecture, and worked as expected. Deployed new code on a bi-weekly basis into production. Worked with automated testing libraries such as Cypress to create automated tests for the user interface of our product. Developed a new program to create bi-weekly release reports, reducing the amount of human intervention by automating pulling of data. Interned to become a software developer by picking up increasingly difficult bug and feature cards with supervision."
)

const rsr = new Job(
  "Quest Diagnostics",
  "Route Service Representative",
  "12/2021 - 02/2023",
  "Was responsible for the safe and timely transportation of specimens, supplies, reports, equipment and materials to the appropriate destination. Gathered all specimens retrieved locally and transported to the nearest regional hub."
)

const srProjCoord = new Job(
  "Forsta (Formerly FocusVision)",
  "Senior Project Coordinator",
  "07/2021 - 07/2022",
  "Coordinated with market research companies to schedule and organize online market research studies. Extensive data entry, requiring precise attention to detail and superior organizational skills. Troubleshooting, and problem solving for both technical and logistical issues. Assisted with training and onboarding of new team members. Performed complex tasks including difficult bookings, troubleshooting and problem solving with clients, and billing and invoicing questions. Used tools such as Excel VBA to increase productivity."
)

const projCoord = new Job(
  "FocusVision Worldwide",
  "InterVu Project Coordinator",
  "09/2015 - 07/2021",
  "Coordinated with Market research companies to schedule and organize online market research studies. Extensive data entry, requiring precise attention to detail and superior organizational skills. Troubleshooting, and problem solving for both technical and logistical issues. Provided customer service, by communication with clients, team members and respondents to ensure studies were efficient and without issue."
)

const csrFV = new Job(
  "FocusVision Worldwide",
  "Client Services Representative",
  "11/2014 - 09/2015",
  "Monitored video and audio conferences, provided support for any potential problems. Worked to correct any connectivity, video/ audio or other computer issues. Provided excellent customer service in ensuring the smoothness of each session, and solving any problems which may have arisen."
)

// const csrAECC = new Job(
//   "Animal Emergency Critical Care",
//   "Customer Service Representative, Receptionist",
//   "09/2011 - 07/2014",
//   "Worked one on one with clients, in routine, unique and stressful situations, while ensuring their comfort. Performed various administrative and clerical duties such as: the use of Microsoft Office Suite, data entry, filing and invoicing. Peer training and other tasks that expanded on the principles of teamwork, integrity, and commitment to completing goals."
// )

let jobs = [
  forstaDev1,
  qa,
  rsr,
  srProjCoord,
  projCoord,
  csrFV,
];

export default jobs;