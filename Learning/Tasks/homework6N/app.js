const question1 = {
  image: "../../Assets/img0.jpg",
  question: "What color is sky?",
  answers: ["Blue", "Red", "White", "Yellow", "Green"],
  answer: 0,
  difficulty: 1,
};
const question2 = {
  image: "../../Assets/img1.jpg",
  question: "What color is blood?",
  answers: ["Blue", "Red", "White", "Yellow", "Green"],
  answer: 1,
  difficulty: 2,
};
const question3 = {
  image: "../../Assets/img2.jpg",
  question: "What color is cotton?",
  answers: ["Blue", "Red", "White", "Yellow", "Green"],
  answer: 2,
  difficulty: 3,
};
const question4 = {
  image: "../../Assets/img3.jpg",
  question: "What color is lemon?",
  answers: ["Blue", "Red", "White", "Yellow", "Green"],
  answer: 3,
  difficulty: 4,
};
const question5 = {
  image: "../../Assets/img4.jpg",
  question: "What color is green apple?",
  answers: ["Blue", "Red", "White", "Yellow", "Green"],
  answer: 4,
  difficulty: 5,
};
const question6 = {
  image: "../../Assets/img5.jpg",
  question: "What color is green?",
  answers: ["Sky", "Blood", "Cotton", "Lemon", "Green apple"],
  answer: 4,
  difficulty: 6,
};
const question7 = {
  image: "../../Assets/img6.jpg",
  question: "What color is yellow?",
  answers: ["Sky", "Blood", "Cotton", "Lemon", "Green apple"],
  answer: 3,
  difficulty: 7,
};
const question8 = {
  image: "../../Assets/img7.jpg",
  question: "What color is white?",
  answers: ["Sky", "Blood", "Cotton", "Lemon", "Green apple"],
  answer: 2,
  difficulty: 8,
};
const question9 = {
  image: "../../Assets/img8.jpg",
  question: "What color is red?",
  answers: ["Sky", "Blood", "Cotton", "Lemon", "Green apple"],
  answer: 1,
  difficulty: 9,
};
const question10 = {
  image: "../../Assets/img9.jpg",
  question: "What color is blue?",
  answers: ["Sky", "Blood", "Cotton", "Lemon", "Green apple"],
  answer: 0,
  difficulty: 10,
};

const questions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
];
const answers = [
  question1.answer,
  question2.answer,
  question3.answer,
  question4.answer,
  question5.answer,
  question6.answer,
  question7.answer,
  question8.answer,
  question9.answer,
  question10.answer,
];
const userAnswers = [];
const result = [];

$(document).ready(function () {
  for (i = 0; i < questions.length; i++) {
    let card = `
<div class="card hidden" data-id="${i}">
	<img src="../../Assets/img${i}.jpg" height="250" class="card-img-top" alt="...">

	<div class="card-body">
		<h5 class="card-title">${questions[i].question}</h5>

		<div class="card-answers my-5">
      <button class="btn btn-outline-dark" value="0">${questions[i].answers[0]}</button>
      <button class="btn btn-outline-dark" value="1">${questions[i].answers[1]}</button>
      <button class="btn btn-outline-dark" value="2">${questions[i].answers[2]}</button>
      <button class="btn btn-outline-dark" value="3">${questions[i].answers[3]}</button>
      <button class="btn btn-outline-dark" value="4">${questions[i].answers[4]}</button>
    </div>

	  <div class="card-buttons d-flex">
		  <button class="btn btn-dark me-auto previous">Previous</button>
	  	<button disabled class="btn btn-dark ms-auto next">Next</button>
	  </div>

	</div>
</div>`;

    $(".div").append(card);
  }

  $(".card").first().addClass("shown");

  //! ///////////////////////////// ANSWER BUTTONS

  $(".card-answers button").on("click", function () {
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");

    if ($(this).parent().find("button.selected").length != 0) {
      $(this).parent().parent().find(".next").prop("disabled", false);
    }

    
  });

  //! ///////////////////////////// NEXT BUTTON

  $(".card .card-buttons .next").on("click", function () {
    $(this)
      .parent()
      .parent()
      .parent()
      .next()
      .addClass("shown")
      .prevAll()
      .removeClass("shown");

    userAnswers.push(
      Number($(this).parent().parent().find(".selected").attr("value"))
    );

    if (
      $(this).parent().parent().parent().attr("data-id") == questions.length - 1) {
        for (i = 0; i < answers.length; i++) {
          result.push(answers[i] == userAnswers[i]);
        }

        $(this)
        .parent()
        .parent()
        .find(".next")
        .on("click", function () {
          $(".card").removeClass("shown");
          $(".div").append(`
        <div class="my-5">
          <h2>Questions: ${questions.length}</h2>
          <h2>Correct: ${result.filter(Boolean).length}</h2>
          <h2>Incorrect: ${questions.length - result.filter(Boolean).length}</h2>
        </div>`);
        });
    }
  });

  //! ///////////////////////////// PREVIOUS BUTTON

  $(".card .card-buttons .previous").on("click", function () {
    $(this)
      .parent()
      .parent()
      .parent()
      .prev()
      .addClass("shown")
      .nextAll()
      .removeClass("shown");

    userAnswers.pop();
  });
});



