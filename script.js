const quizData = [
  {
    question: "The diurnal variation of pressure in middle latitudes is",
    options: ["2 hPa", "10 hPa", "Less than 1.5 hPa"],
    answer: "2 hPa"
  },
  {
    question: "Lines of constant wind speed are called",
    options: ["Isobars", "Isotachs", "Isallobars"],
    answer: "Isotachs"
  },
  {
    question: "Tamil Nadu gets maximum rainfall during",
    options: ["SW monsoon", "Pre monsoon", "NE monsoon"],
    answer: "NE monsoon"
  },
  {
    question: "The change of temperature with height is called",
    options: ["DALR", "Lapse rate", "SALR"],
    answer: "Lapse rate"
  },
  {
    question: "Norwesters are frequent in",
    options: ["May", "July", "April"],
    answer: "May"
  },
  {
    question: "Tropical storms in Arabian sea and Bay of Bengal are called",
    options: ["Hurricanes", "Typhoons", "Cyclones"],
    answer: "Cyclones"
  },
  {
    question: "If the pressure is rising around a cyclone, it is termed as",
    options: ["Filling", "Deepening", "Lifting"],
    answer: "Filling"
  },
  {
    question: "Favourable area of formation of depressions in monsoon months over Bay of Bengal is",
    options: ["South Bay", "Head Bay", "Central Bay"],
    answer: "Head Bay"
  },
  {
    question: "The vector difference between the real wind and geostrophic wind is",
    options: ["Ageostrophic wind", "Gradient wind", "Thermal wind"],
    answer: "Ageostrophic wind"
  },
  {
    question: "The surface discontinuity between polar Easterlies and temperate Westerlies is called",
    options: ["Polar Front", "Equatorial discontinuity", "Polar boundary"],
    answer: "Polar Front"
  },
  {
    question: "The met instrument Nephoscope is used for observing",
    options: ["Wind speed", "Cloud movement", "Cloud height"],
    answer: "Cloud movement"
  },
  {
    question: "Showery precipitation occurs from",
    options: ["Nimbostratus type of clouds", "Stratiform clouds", "Cumuliform clouds"],
    answer: "Cumuliform clouds"
  },
  {
    question: "The wind blowing in the night from land towards sea is",
    options: ["Anabatic wind", "Land breeze", "Katabatic wind"],
    answer: "Land breeze"
  },
  {
    question: "The height band between freezing level and FL 250 in a well developed CB has worst",
    options: ["Icing", "Bumpiness", "Hail formation"],
    answer: "Icing"
  },
  {
    question: "D value (altimeter correction) is",
    options: ["Always negative", "Always positive", "Either positive or negative"],
    answer: "Either positive or negative"
  },
  {
    question: "Pressure altitude of aerodrome is",
    options: ["QNH", "QNE", "QFF"],
    answer: "QNE"
  },
  {
    question: "The amount of water vapour that air can hold depends on",
    options: ["Dew Point", "Air Temperature", "RH"],
    answer: "Air Temperature"
  },
  {
    question: "Moisture is added to a parcel of air by",
    options: ["Sublimation and Condensation", "Evaporation and Condensation", "Evaporation only"],
    answer: "Sublimation and Condensation"
  },
  {
    question: "Pressure Altimeter indicates the height of aircraft",
    options: ["Above msl", "Above aerodrome", "Above given datum"],
    answer: "Above given datum"
  },
  {
    question: "Alticor is applied to the pressure altitude to get",
    options: ["Indicated altitude", "True altitude", "Aircraft elevation"],
    answer: "True altitude"
  },
  {
    question: "Under ISA conditions QNH is reduced to msl",
    options: ["QFF", "QNE", "QFE"],
    answer: "QFE"
  },
  {
    question: "The highest altitude below which an aircraft will fly on local QNH is called Transition",
    options: ["Level", "Altitude", "Layer"],
    answer: "Altitude"
  },
  {
    question: "Flying from Cold to Warm area, the altimeter",
    options: ["Under reads", "Over reads", "No change"],
    answer: "Under reads"
  },
  {
    question: "In Contour charts the flight level 100 corresponds to",
    options: ["700 hPa/14000 ft", "700 hPa/12000 ft", "700 hPa/10000 ft"],
    answer: "700 hPa/10000 ft"
  },
  {
    question: "If at 10,000 ft the air temperature is as per ISA then the Density altitude will be",
    options: ["14000 ft", "10000 ft", "12000 ft"],
    answer: "10000 ft"
  },
  {
    question: "A process in which heat content remains constant is called",
    options: ["Isothermal process", "Isobaric process", "Adiabatic process"],
    answer: "Adiabatic process"
  },
  {
    question: "The phase change from water vapour to water is called",
    options: ["Sublimation", "Condensation", "Deposition"],
    answer: "Condensation"
  },
  {
    question: "The change of phase that requires or liberates heat without change in temperature is",
    options: ["Condensation", "Evaporation", "Latent heat"],
    answer: "Latent heat"
  },
  {
    question: "The saturation vapour pressure is dependent on",
    options: ["Pressure only", "Temperature only", "Condensation only"],
    answer: "Temperature only"
  },
  {
    question: "Supercooled water can attain a temperature of",
    options: ["-40°C", "-50°C", "-60°C"],
    answer: "-40°C"
  },
  {
    question: "Pressure decreases rapidly with height in",
    options: ["Warm air", "Cold air", "Both"],
    answer: "Cold air"
  },
  {
    question: "The atmospheric particles upon which ice crystals form by deposition are called",
    options: ["Freezing nuclei", "Condensation nuclei", "Sublimation nuclei"],
    answer: "Condensation nuclei"
  },
  {
    question: "When wind blows over rough surface on the earth, it produces Turbulence, which is",
    options: ["Mechanical only", "Frictional and mechanical both", "Frictional only"],
    answer: "Mechanical only"
  },
  {
    question: "Worst airframe icing is experienced on aircraft in flight in",
    options: ["Freezing rain", "Freezing fog", "Snow"],
    answer: "Freezing fog"
  },
  {
    question: "Continuous rain/snow is likely to fall from cloud",
    options: ["CB", "NS", "ST"],
    answer: "NS"
  },
  {
    question: "Freezing rain occurs from",
    options: ["Cold occlusion", "Cold front", "Warm front"],
    answer: "Warm front"
  },
  {
    question: "Radiation fog occurs only",
    options: ["Over land", "Over sea", "In Clouds"],
    answer: "Over land"
  },
  {
    question: "Transmissometer provides a continuous record of",
    options: ["Temperature", "RVR (Runway Visual Range)", "Relative humidity"],
    answer: "RVR (Runway Visual Range)"
  },
  {
    question: "Steaming fog is likely to form due to advection of",
    options: ["Warm air over cold land", "Cold air over cold sea", "Cold air over warm sea"],
    answer: "Cold air over warm sea"
  },
  {
    question: "Increasing wind speed to the left downstream indicates",
    options: ["Anticyclonic vorticity", "Cyclonic vorticity", "Convergence"],
    answer: "Anticyclonic vorticity"
  },
  {
    question: "When wind speed decreases downstream and isobars close up, it indicates",
    options: ["Vorticity", "Convergence", "Divergence"],
    answer: "Convergence"
  },
  {
    question: "CAT is associated with",
    options: ["Unstable atmosphere", "Inversion", "Wind shear"],
    answer: "Wind shear"
  },
  {
    question: "Jet streams form due to",
    options: ["Thermal gradient", "Wind gradient", "Pressure gradient"],
    answer: "Thermal gradient"
  },
  {
    question: "When cold air mass displaces warm air mass the front that forms is",
    options: ["Occluded front", "Cold front", "Warm front"],
    answer: "Cold front"
  },
  {
    question: "Cold sector clouds in a frontal depression are",
    options: ["CU, CB, NS", "AC, AS", "CU, CB, AS, NS, CS, CI"],
    answer: "CU, CB, AS, NS, CS, CI"
  },
  {
    question: "The air mass that affects India in winters is",
    options: ["Tc", "Em", "Pm"],
    answer: "Tc"
  },
  {
    question: "What type of air movement is there in a trough of low pressure area",
    options: ["Descending", "Converging and ascending", "Diverging"],
    answer: "Converging and ascending"
  },
  {
    question: "One of the most dominating feature of general circulation of the earth is",
    options: ["Ferrel cell", "Zonal flow", "Trade winds"],
    answer: "Trade winds"
  },
  {
    question: "N hemisphere is _______ than S hemisphere in summers",
    options: ["Cooler", "Warmer", "The same"],
    answer: "Warmer"
  },
  {
    question: "Highest temperatures occur in",
    options: ["Tropics", "Oceans", "Sub tropics N of equator"],
    answer: "Tropics"
  },
  {
    question: "The ITCZ in January lies",
    options: ["S of equator", "N of equator", "Over Capricorn"],
    answer: "N of equator"
  },
  {
    question: "In winter lows and depressions move from Mediterranean towards",
    options: ["Europe", "Iran", "N India, Afghanistan"],
    answer: "N India, Afghanistan"
  },
  {
    question: "High pressure exists over continents in",
    options: ["Winters", "Summers", "Autumn"],
    answer: "Winters"
  },
  {
    question: "No tropical storms form over",
    options: ["N Atlantic", "S Pacific", "S Atlantic"],
    answer: "S Atlantic"
  },
  {
    question: "How far are Mascarene Islands from India?",
    options: ["3000 km in the N", "4000 km in the S", "5000 km in the W"],
    answer: "4000 km in the S"
  },
  {
    question: "Mascarene Islands are situated in",
    options: ["N Atlantic Ocean", "W Pacific Ocean", "Indian Ocean"],
    answer: "Indian Ocean"
  },
  {
    question: "Indian Ocean Dipole (IOD) causes more rainfall in SW Monsoon, when",
    options: ["Positive", "Negative", "Neutral"],
    answer: "Positive"
  },
  {
    question: "Tropical Stratospheric Circulation _______ of Tropopause",
    options: ["Does not affect temperature", "Affects STJ", "Affects temperature"],
    answer: "Affects temperature"
  },
  {
    question: "In winters Col in a pressure system may produce",
    options: ["CB", "ST", "NS"],
    answer: "ST"
  },
  {
    question: "In a METAR SCT 100 indicates",
    options: ["5-7 Octa clouds at 1000 m", "1-2 Octa clouds at 100 m", "3-4 Octa clouds at 1000 ft"],
    answer: "3-4 Octa clouds at 1000 ft"
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
