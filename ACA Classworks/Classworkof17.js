// Return array of courses including average evaluation for each course,
// Վերադարձնել բոլոր առարկաների ցուցակը և նրանց միջին քննական արդյունքը։
// For the given list of exams, and evaluations do the following exercises.
// Տրված քննությունների արդյունքների ցուցակի համար, կատարել հետևյալ վարժությունները։

const evaluations = [
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe",
      courseId: 1, // Unique identifier for each course
      courseName: "JS Bootcamp",
      score: 70
    },
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe",
      courseId: 2, // Unique identifier for each course
      courseName: "JS Level 0",
      score: 60
    },
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe",
      courseId: 3, // Unique identifier for each course
      courseName: "JS Level 1",
      score: 50
    },
    {
      studentId: 2, // Unique identifier for each student
      studentName: "Tom Colins",
      courseId: 1, // Unique identifier for each course
      courseName: "JS Bootcamp",
      score: 60
    },
    {
      studentId: 2, // Unique identifier for each student
      studentName: "Tom Colins",
      courseId: 2, // Unique identifier for each course
      courseName: "JS Level 0",
      score: 50
    },
    {
      studentId: 2, // Unique identifier for each student
      studentName: "Tom Colins",
      courseId: 3, // Unique identifier for each course
      courseName: "JS Level 1",
      score: 40
    },
    {
      studentId: 3, // Unique identifier for each student
      studentName: "Sarah Conor",
      courseId: 1, // Unique identifier for each course
      courseName: "JS Bootcamp",
      score: 45
    },
    {
      studentId: 3, // Unique identifier for each student
      studentName: "Sarah Conor",
      courseId: 2, // Unique identifier for each course
      courseName: "JS Level 0",
      score: 35
    },
    {
      studentId: 3, // Unique identifier for each student
      studentName: "Sarah Conor",
      courseId: 3, // Unique identifier for each course
      courseName: "JS Level 1",
      score: 25
    }
   ];
   function getAverageScore(){
    let averageScore = {};
    for(let i = 0; i < evaluations.length; i++){
      if(!averageScore[evaluations[i].courseId]){
        averageScore[evaluations[i].courseId] = {
          courseName: evaluations[i].courseName,
          averageScore: evaluations[i].score,
          studentCount: 1
        }
      } else {
        averageScore[evaluations[i].courseId].averageScore += evaluations[i].score;
        averageScore[evaluations[i].courseId].studentCount++;
      }
    }
    for(let key in averageScore){
      averageScore[key].averageScore = averageScore[key].averageScore / averageScore[key].studentCount;
    }
    console.log(averageScore);
  }
    getAverageScore();