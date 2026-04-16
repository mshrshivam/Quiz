const quizData = [
  {
    question: "The variation of pressure in middle latitudes is",
    options: ["2 hPa", "10 hPa", "Less than 1.5 hPa"],
    answer: "10 hPa"
  },
  {
    question: "Lines of constant wind speed are called",
    options: ["Isobars", "Isotachs", "Isallobars"],
    answer: "Isotachs"
  },
  {
    question: "Tamil Nadu gets maximum rainfall during",
    options: ["SW monsoon", "Pre-monsoon", "NE monsoon"],
    answer: "NE monsoon"
  },
  {
    question: "The change of temperature with height is called",
    options: ["DALR", "Lapse rate", "SALR"],
    answer: "Lapse rate"
  },
  {
    question: "Nor'westers are frequent in",
    options: ["May", "July", "April"],
    answer: "April"
  },
  {
    question: "Tropical storms in Arabian Sea and Bay of Bengal are called",
    options: ["Hurricanes", "Typhoons", "Cyclones"],
    answer: "Cyclones"
  },
  {
    question: "If pressure is rising around a cyclone, it is termed as",
    options: ["Filling", "Deepening", "Lifting"],
    answer: "Filling"
  },
  {
    question: "Favourable area for depressions in Bay of Bengal is",
    options: ["South Bay", "Head Bay", "Central Bay"],
    answer: "Head Bay"
  },
  {
    question: "Vector difference between real wind and geostrophic wind",
    options: ["Ageostrophic wind", "Gradient wind", "Thermal wind"],
    answer: "Ageostrophic wind"
  },
  {
    question: "Discontinuity between polar easterlies and westerlies",
    options: ["Polar front", "Equatorial discontinuity", "Polar boundary"],
    answer: "Polar front"
  },
  {
    question: "Nephoscope is used to observe",
    options: ["Wind speed", "Cloud movement", "Cloud height"],
    answer: "Cloud movement"
  },
  {
    question: "Showery precipitation occurs from",
    options: ["Nimbostratus", "Stratiform", "Cumuliform"],
    answer: "Cumuliform"
  },
  {
    question: "Night wind from land to sea",
    options: ["Anabatic", "Land breeze", "Katabatic"],
    answer: "Land breeze"
  },
  {
    question: "Bright band in CB has worst",
    options: ["Icing", "Bumpiness", "Hail"],
    answer: "Icing"
  },
  {
    question: "D value is",
    options: ["Always negative", "Always positive", "Positive or negative"],
    answer: "Positive or negative"
  },
  {
    question: "Pressure altitude of aerodrome",
    options: ["QNH", "QNE", "QFF"],
    answer: "QNE"
  },
  {
    question: "Water vapour holding depends on",
    options: ["Dew point", "Temperature", "RH"],
    answer: "Temperature"
  },
  {
    question: "Moisture added by",
    options: ["Sublimation & condensation", "Evaporation & condensation", "Evaporation only"],
    answer: "Evaporation & condensation"
  },
  {
    question: "Pressure altimeter shows height",
    options: ["Above MSL", "Above aerodrome", "Above standard datum"],
    answer: "Above standard datum"
  },
  {
    question: "Altimeter setting gives",
    options: ["Indicated altitude", "True altitude", "Aircraft elevation"],
    answer: "True altitude"
  },
  {
    question: "QNH reduced to",
    options: ["QFF", "QNE", "QFE"],
    answer: "QNE"
  },
  {
    question: "Highest altitude using QNH",
    options: ["Level", "Altitude", "Layer"],
    answer: "Altitude"
  },
  {
    question: "Cold to warm altimeter",
    options: ["Under reads", "Over reads", "No change"],
    answer: "Under reads"
  },
  {
    question: "FL100 corresponds to",
    options: ["700hPa/10000ft", "700hPa/14000ft", "700hPa/12000ft"],
    answer: "700hPa/10000ft"
  },
  {
    question: "ISA temp at 10000 ft means density altitude",
    options: ["14000ft", "10000ft", "12000ft"],
    answer: "10000ft"
  },
  {
    question: "Constant heat process",
    options: ["Isothermal", "Isobaric", "Adiabatic"],
    answer: "Adiabatic"
  },
  {
    question: "Vapour to liquid",
    options: ["Sublimation", "Condensation", "Deposition"],
    answer: "Condensation"
  },
  {
    question: "Heat without temp change",
    options: ["Condensation", "Evaporation", "Latent heat"],
    answer: "Latent heat"
  },
  {
    question: "Saturation vapour pressure depends on",
    options: ["Pressure", "Temperature", "Condensation"],
    answer: "Temperature"
  },
  {
    question: "Supercooled water temp",
    options: ["-40°C", "-50°C", "-60°C"],
    answer: "-40°C"
  },
  {
    question: "Pressure decreases faster in",
    options: ["Warm air", "Cold air", "Both"],
    answer: "Cold air"
  },
  {
    question: "Ice crystals form on",
    options: ["Freezing nuclei", "Condensation nuclei", "Sublimation nuclei"],
    answer: "Freezing nuclei"
  },
  {
    question: "Icing occurs in",
    options: ["Freezing rain", "Drizzle", "Snow"],
    answer: "Freezing rain"
  },
  {
    question: "Continuous rain from",
    options: ["CB", "NS", "ST"],
    answer: "NS"
  },
  {
    question: "Freezing rain near",
    options: ["Cold occlusion", "Cold front", "Warm front"],
    answer: "Warm front"
  },
  {
    question: "Light rain occurs",
    options: ["In cloud", "Outside cloud", "Cumuliform"],
    answer: "In cloud"
  },
  {
    question: "Thermograph records",
    options: ["Temperature", "Dew point", "Humidity"],
    answer: "Temperature"
  },
  {
    question: "Steam fog forms from",
    options: ["Warm over cold", "Cold over cold", "Cold over warm"],
    answer: "Cold over warm"
  },
  {
    question: "Wind speed left downstream",
    options: ["Anticyclonic", "Cyclonic", "Neutral"],
    answer: "Anticyclonic"
  },
  {
    question: "Wind increase & close isobars",
    options: ["Convergence", "Divergence", "Velocity"],
    answer: "Convergence"
  },
  {
    question: "CAT linked to",
    options: ["Unstable air", "Inversion", "Wind shear"],
    answer: "Wind shear"
  },
  {
    question: "Winter hemisphere pressure",
    options: ["Low", "High", "Neutral"],
    answer: "High"
  },
  {
    question: "Tropical storms NOT in",
    options: ["N Atlantic", "S Pacific", "South Atlantic"],
    answer: "South Atlantic"
  },
  {
    question: "Mascarene Islands distance",
    options: ["3000km N", "4000km S", "5000km W"],
    answer: "4000km S"
  },
  {
    question: "Mascarene Islands located in",
    options: ["N Atlantic", "W Pacific", "Indian Ocean"],
    answer: "Indian Ocean"
  },
  {
    question: "Positive IOD causes",
    options: ["More rain", "Less rain", "No change"],
    answer: "More rain"
  },
  {
    question: "Stratospheric circulation",
    options: ["No effect", "Affects STJ", "Stops winds"],
    answer: "Affects STJ"
  },
  {
    question: "Wide col produces",
    options: ["CB", "ST", "NS"],
    answer: "ST"
  },
  {
    question: "Cold front steepness",
    options: ["Less steep", "Very steep", "Flat"],
    answer: "Very steep"
  },
  {
    question: "Cold sector clouds",
    options: ["CU CB NS", "AC AS", "All types"],
    answer: "All types"
  },
  {
    question: "Jet stream affecting India",
    options: ["STJ", "ETJ", "Polar"],
    answer: "STJ"
  },
  {
    question: "Air in trough",
    options: ["Descending", "Ascending", "Diverging"],
    answer: "Ascending"
  },
  {
    question: "Dominant circulation feature",
    options: ["Ferrel cell", "Zonal flow", "Trade winds"],
    answer: "Trade winds"
  },
  {
    question: "Winter hemisphere is",
    options: ["Cooler", "Warmer", "Same"],
    answer: "Cooler"
  },
  {
    question: "Highest temperature occurs in",
    options: ["Tropics", "Oceans", "Subtropics"],
    answer: "Tropics"
  },
  {
    question: "ITCZ in January",
    options: ["South", "North", "Equator"],
    answer: "South"
  },
  {
    question: "Winter lows move towards",
    options: ["Europe", "China", "India"],
    answer: "India"
  }
];

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackText = document.getElementById("feedback-text");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const scoreText = document.getElementById("score-text");
const scoreSummary = document.getElementById("score-summary");

let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

function renderQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];

  questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";
  feedbackText.textContent = "";
  feedbackText.className = "feedback";
  nextBtn.disabled = true;
  nextBtn.textContent =
    currentQuestionIndex === quizData.length - 1 ? "Show Score" : "Next Question";
  hasAnswered = false;

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(button, option));
    optionsContainer.appendChild(button);
  });
}

function handleAnswer(selectedButton, selectedOption) {
  if (hasAnswered) {
    return;
  }

  const currentQuestion = quizData[currentQuestionIndex];
  const optionButtons = optionsContainer.querySelectorAll(".option-btn");
  hasAnswered = true;

  optionButtons.forEach((button) => {
    button.disabled = true;

    if (button.textContent === currentQuestion.answer) {
      button.classList.add("correct");
    }
  });

  if (selectedOption === currentQuestion.answer) {
    score += 1;
    feedbackText.textContent = "Correct! You earned 1 mark.";
    feedbackText.classList.add("correct");
  } else {
    selectedButton.classList.add("wrong");
    feedbackText.textContent = `Wrong! Correct answer: ${currentQuestion.answer}`;
    feedbackText.classList.add("wrong");
  }

  nextBtn.disabled = false;
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  scoreText.textContent = `${score} / ${quizData.length}`;
  scoreSummary.textContent = `You answered ${score} question${score === 1 ? "" : "s"} correctly.`;
}

function goToNextQuestion() {
  if (!hasAnswered) {
    return;
  }

  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  showResults();
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  hasAnswered = false;
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  renderQuestion();
}

nextBtn.addEventListener("click", goToNextQuestion);
restartBtn.addEventListener("click", restartQuiz);

renderQuestion();
