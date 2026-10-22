const levels = [
  {
    label: "LEVEL 1",
    title: "WARM-UP",
    tag: "CHOOSE THE WORD",
    coach: "First decide what information you need. This will help you choose the question word.",
    type: "choice",
    items: [
      { icon: "⚽", prompt: "Which word asks about a <em>place</em>?", context: "Ben plays football in the park.", options: ["What", "Where", "When"], answer: "Where", explain: "Where asks about a place. Where does Ben play football?" },
      { icon: "🎾", prompt: "Which word asks about <em>time</em>?", context: "Mia trains on Tuesdays.", options: ["When", "Who", "Whose"], answer: "When", explain: "When asks about time. When does Mia train?" },
      { icon: "🏀", prompt: "Which word asks about a <em>person</em>?", context: "Alex plays basketball.", options: ["How old", "Who", "What"], answer: "Who", explain: "Who asks about a person. Who plays basketball?" },
      { icon: "🥋", prompt: "Which word asks about a <em>sport</em>?", context: "Leo does karate.", options: ["What", "Where", "Whose"], answer: "What", explain: "What asks about a thing or activity. What sport does Leo do?" },
      { icon: "👟", prompt: "Which word asks about the <em>owner</em>?", context: "They are Ben's football boots.", options: ["Who", "When", "Whose"], answer: "Whose", explain: "Whose asks about the owner. Whose football boots are these?" },
      { icon: "🏅", prompt: "Which words ask about a <em>number</em>?", context: "The team has got five medals.", options: ["How old", "How many", "What"], answer: "How many", explain: "How many asks about a number. How many medals has the team got?" },
      { icon: "🛹", prompt: "Which words ask about someone's <em>age</em>?", context: "The skateboarder is ten.", options: ["When", "How many", "How old"], answer: "How old", explain: "How old asks about age. How old is the skateboarder?" }
    ]
  },
  {
    label: "LEVEL 2",
    title: "BUILD IT",
    tag: "BUILD THE QUESTION",
    coach: "Follow the formula. Use is/are with Whose and have/has ... got with How many.",
    type: "builder",
    items: [
      { icon: "🎾", prompt: "Emma plays tennis <em>at the sports centre</em>.", context: "Ask about the place.", words: ["tennis", "Emma", "Where", "play", "does", "?"], answer: ["Where", "does", "Emma", "play", "tennis", "?"], explain: "After does, use play — not plays." },
      { icon: "⚽", prompt: "They train <em>on Saturdays</em>.", context: "Ask about the time.", words: ["train", "When", "they", "?", "do"], answer: ["When", "do", "they", "train", "?"], explain: "Use do with they." },
      { icon: "🥋", prompt: "Max does <em>karate</em>.", context: "Ask about the sport.", words: ["Max", "What", "do", "does", "sport", "?"], answer: ["What", "sport", "does", "Max", "do", "?"], explain: "The first do is the action verb; does is the helper." },
      { icon: "🏀", prompt: "You have got <em>four balls</em>.", context: "Ask about the number.", words: ["got", "How many", "you", "balls", "have", "do", "?"], answer: ["How many", "balls", "have", "you", "got", "?"], explain: "Use have got with I, you, we, and they." },
      { icon: "🏀", prompt: "<em>Sam</em> plays basketball after school.", context: "Ask about the person who does the action.", words: ["after school", "Who", "basketball", "plays", "does", "?"], answer: ["Who", "plays", "basketball", "after school", "?"], explain: "When Who does the action, put the verb with -s straight after it." },
      { icon: "🏸", prompt: "It is <em>Olivia's racket</em>.", context: "Ask about the owner.", words: ["it", "does", "Whose", "racket", "is", "?"], answer: ["Whose", "racket", "is", "it", "?"], explain: "Use is/are after Whose + noun: Whose racket is it?" },
      { icon: "🏅", prompt: "The coach is <em>thirty</em>.", context: "Ask about the coach's age.", words: ["coach", "does", "the", "How old", "is", "?"], answer: ["How old", "is", "the", "coach", "?"], explain: "Use is for age. You do not need do or does." }
    ]
  },
  {
    label: "LEVEL 3",
    title: "THE FINAL",
    tag: "FIND THE RIGHT QUESTION",
    coach: "Check the formula: Whose + noun + is/are; How many + noun + have/has + subject + got.",
    type: "correct",
    items: [
      { icon: "🏐", prompt: "Nina plays volleyball <em>at school</em>.", context: "Choose the correct question about the place.", options: ["Where Nina plays volleyball?", "Where does Nina play volleyball?", "Where does Nina plays volleyball?"], answer: 1, explain: "Correct: Where + does + Nina + play. There is no -s on play after does." },
      { icon: "🏃", prompt: "You run <em>on Sundays</em>.", context: "Choose the correct question about the time.", options: ["When do you run?", "When you do run?", "When does you run?"], answer: 0, explain: "Use do with you and put it before the subject." },
      { icon: "🏒", prompt: "<em>Leo</em> plays hockey.", context: "Choose the correct question about the person.", options: ["Who does play hockey?", "Who play hockey?", "Who plays hockey?"], answer: 2, explain: "Who is the subject here, so use plays without does." },
      { icon: "⚽", prompt: "He has got <em>six balls</em>.", context: "Choose the correct question about the number.", options: ["How many balls has he got?", "How many balls have he got?", "How many balls has got he?"], answer: 0, explain: "Use has got with he, she, and it: How many balls has he got?" },
      { icon: "🚴", prompt: "It is <em>Sam's bike</em>.", context: "Choose the correct question about the owner.", options: ["Whose is bike it?", "Whose bike is it?", "Whose bike are it?"], answer: 1, explain: "Whose + noun + is/are + subject: Whose bike is it?" },
      { icon: "🧗", prompt: "Oliver is <em>ten</em>.", context: "Choose the correct question about age.", options: ["How old Oliver is?", "How old does Oliver?", "How old is Oliver?"], answer: 2, explain: "For age, use How old + is + name." },
      { icon: "🏓", prompt: "They play <em>table tennis</em> on Fridays.", context: "Choose the correct question about the activity.", options: ["What do they play on Fridays?", "What they play on Fridays?", "What does they play on Fridays?"], answer: 0, explain: "Use do with they: What do they play...?" }
    ]
  }
];

const $ = (selector) => document.querySelector(selector);

const els = {
  home: $("#homeScreen"), game: $("#gameScreen"), results: $("#resultsScreen"),
  score: $("#scoreValue"), streak: $("#streakValue"), start: $("#startButton"),
  back: $("#backButton"), restart: $("#restartButton"), sound: $("#soundToggle"),
  levelLabel: $("#levelLabel"), levelTitle: $("#levelTitle"), progressLabel: $("#progressLabel"),
  progressPercent: $("#progressPercent"), progressBar: $("#progressBar"), coach: $("#coachText"),
  tag: $("#challengeTag"), icon: $("#sportIcon"), instruction: $("#instructionText"),
  prompt: $("#promptText"), translation: $("#translationText"), answerArea: $("#answerArea"),
  feedback: $("#feedbackBox"), feedbackIcon: $("#feedbackIcon"), feedbackTitle: $("#feedbackTitle"),
  feedbackText: $("#feedbackText"), check: $("#checkButton"), next: $("#nextButton"),
  drawer: $("#formulaDrawer"), formulaToggle: $("#formulaToggle"), formulaClose: $("#formulaClose"),
  finalScore: $("#finalScore"), correctCount: $("#correctCount"), accuracy: $("#accuracyValue"),
  bestStreak: $("#bestStreak"), resultMessage: $("#resultMessage"), learnedRule: $("#learnedRule")
};

let state = {};

function resetState() {
  state = {
    level: 0,
    item: 0,
    score: 0,
    streak: 0,
    bestStreak: 0,
    correct: 0,
    attempts: 0,
    selected: null,
    built: [],
    locked: false,
    sound: state.sound !== false
  };
  updateScoreboard();
}

function totalQuestions() {
  return levels.reduce((sum, level) => sum + level.items.length, 0);
}

function completedQuestions() {
  return levels.slice(0, state.level).reduce((sum, level) => sum + level.items.length, 0) + state.item;
}

function updateScoreboard() {
  els.score.textContent = String(state.score || 0).padStart(3, "0");
  els.streak.textContent = `${state.streak || 0} 🔥`;
}

function playTone(success = true) {
  if (!state.sound || !(window.AudioContext || window.webkitAudioContext)) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const context = new AudioCtx();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.type = success ? "sine" : "triangle";
  oscillator.frequency.setValueAtTime(success ? 520 : 190, context.currentTime);
  if (success) oscillator.frequency.exponentialRampToValueAtTime(760, context.currentTime + .12);
  gain.gain.setValueAtTime(.08, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .18);
  oscillator.start();
  oscillator.stop(context.currentTime + .18);
}

function showScreen(screen) {
  els.home.classList.add("hidden");
  els.game.classList.add("hidden");
  els.results.classList.add("hidden");
  screen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startGame() {
  resetState();
  showScreen(els.game);
  renderQuestion();
}

function currentLevel() { return levels[state.level]; }
function currentItem() { return currentLevel().items[state.item]; }

function renderQuestion() {
  state.selected = null;
  state.built = [];
  state.locked = false;
  const level = currentLevel();
  const item = currentItem();
  const overallCurrent = completedQuestions() + 1;
  const total = totalQuestions();
  const percent = Math.round((overallCurrent / total) * 100);

  els.levelLabel.textContent = level.label;
  els.levelTitle.textContent = level.title;
  els.tag.textContent = level.tag;
  els.coach.textContent = level.coach;
  els.icon.textContent = item.icon;
  els.progressLabel.textContent = `Task ${overallCurrent} of ${total}`;
  els.progressPercent.textContent = `${percent}%`;
  els.progressBar.style.width = `${percent}%`;
  els.prompt.innerHTML = item.prompt;
  els.translation.textContent = item.context;
  els.instruction.textContent = level.type === "choice" ? "Which question word do you need?" : level.type === "builder" ? "Put the words in the correct order" : "Which question has the correct word order?";
  els.feedback.className = "feedback hidden";
  els.check.classList.remove("hidden");
  els.check.disabled = true;
  els.next.classList.add("hidden");
  els.answerArea.innerHTML = "";

  if (level.type === "choice") renderChoices(item);
  if (level.type === "builder") renderBuilder(item);
  if (level.type === "correct") renderCorrections(item);

  const card = $(".challenge-card");
  card.classList.remove("pop");
  requestAnimationFrame(() => card.classList.add("pop"));
}

function renderChoices(item) {
  const grid = document.createElement("div");
  grid.className = "choice-grid";
  item.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = option;
    button.addEventListener("click", () => {
      if (state.locked) return;
      grid.querySelectorAll("button").forEach((b) => b.classList.remove("selected"));
      button.classList.add("selected");
      state.selected = option;
      els.check.disabled = false;
    });
    grid.appendChild(button);
  });
  els.answerArea.appendChild(grid);
}

function renderBuilder(item) {
  const board = document.createElement("div");
  board.className = "sentence-board empty";
  board.setAttribute("aria-label", "Question you have built");
  const bank = document.createElement("div");
  bank.className = "word-bank";
  item.words.forEach((word, index) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "word-chip";
    chip.textContent = word;
    chip.dataset.index = index;
    chip.addEventListener("click", () => addWord(index, word));
    bank.appendChild(chip);
  });
  els.answerArea.append(board, bank);
}

function addWord(index, word) {
  if (state.locked) return;
  state.built.push({ index, word });
  const original = els.answerArea.querySelector(`.word-bank [data-index="${index}"]`);
  original.classList.add("used");
  const placed = document.createElement("button");
  placed.type = "button";
  placed.className = "word-chip";
  placed.textContent = word;
  placed.title = "Remove word";
  placed.addEventListener("click", () => removeWord(index));
  const board = els.answerArea.querySelector(".sentence-board");
  board.classList.remove("empty", "wrong");
  board.appendChild(placed);
  els.check.disabled = state.built.length === 0;
}

function removeWord(index) {
  if (state.locked) return;
  const position = state.built.findIndex((entry) => entry.index === index);
  if (position < 0) return;
  state.built.splice(position, 1);
  const original = els.answerArea.querySelector(`.word-bank [data-index="${index}"]`);
  original.classList.remove("used");
  const board = els.answerArea.querySelector(".sentence-board");
  board.children[position].remove();
  if (!state.built.length) board.classList.add("empty");
  els.check.disabled = state.built.length === 0;
}

function renderCorrections(item) {
  const wrap = document.createElement("div");
  wrap.className = "question-options";
  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "question-option";
    button.innerHTML = `<span>${String.fromCharCode(65 + index)}</span>${option}`;
    button.addEventListener("click", () => {
      if (state.locked) return;
      wrap.querySelectorAll("button").forEach((b) => b.classList.remove("selected"));
      button.classList.add("selected");
      state.selected = index;
      els.check.disabled = false;
    });
    wrap.appendChild(button);
  });
  els.answerArea.appendChild(wrap);
}

function checkAnswer() {
  if (state.locked) return;
  const level = currentLevel();
  const item = currentItem();
  let isCorrect = false;
  if (level.type === "choice") isCorrect = state.selected === item.answer;
  if (level.type === "builder") isCorrect = state.built.map((x) => x.word).join("|") === item.answer.join("|");
  if (level.type === "correct") isCorrect = state.selected === item.answer;

  state.attempts += 1;
  if (isCorrect) handleCorrect(level, item);
  else handleWrong(level, item);
}

function handleCorrect(level, item) {
  state.locked = true;
  state.correct += 1;
  state.streak += 1;
  state.bestStreak = Math.max(state.bestStreak, state.streak);
  state.score += 10 + Math.min(state.streak - 1, 5) * 2;
  updateScoreboard();
  markAnswer(level, true, item);
  showFeedback(true, state.streak >= 3 ? `Streak ×${state.streak}! ${item.explain}` : item.explain);
  els.check.classList.add("hidden");
  els.next.classList.remove("hidden");
  playTone(true);
}

function handleWrong(level, item) {
  state.streak = 0;
  updateScoreboard();
  markAnswer(level, false, item);
  const advice = level.type === "builder"
    ? "Check the beginning of the question and the position of do/does. Remove words and try again."
    : "Compare the word order with the cheat sheet and try again.";
  showFeedback(false, advice);
  playTone(false);
  setTimeout(() => clearWrongMark(level), 900);
}

function markAnswer(level, correct, item) {
  if (level.type === "choice") {
    els.answerArea.querySelectorAll("button").forEach((button) => {
      if (button.textContent === state.selected) button.classList.add(correct ? "correct" : "wrong");
      if (correct) button.disabled = true;
    });
  }
  if (level.type === "builder") {
    els.answerArea.querySelector(".sentence-board").classList.add(correct ? "correct" : "wrong");
  }
  if (level.type === "correct") {
    const buttons = [...els.answerArea.querySelectorAll("button")];
    if (buttons[state.selected]) buttons[state.selected].classList.add(correct ? "correct" : "wrong");
    if (correct) buttons.forEach((button) => { button.disabled = true; });
  }
}

function clearWrongMark(level) {
  if (level.type === "builder") els.answerArea.querySelector(".sentence-board")?.classList.remove("wrong");
  else els.answerArea.querySelectorAll(".wrong").forEach((el) => el.classList.remove("wrong"));
}

function showFeedback(correct, text) {
  els.feedback.className = `feedback${correct ? "" : " is-wrong"}`;
  els.feedbackIcon.textContent = correct ? "✓" : "!";
  els.feedbackTitle.textContent = correct ? "Great job!" : "Almost! Try again.";
  els.feedbackText.textContent = text;
}

function nextQuestion() {
  if (state.item < currentLevel().items.length - 1) {
    state.item += 1;
    renderQuestion();
    return;
  }
  if (state.level < levels.length - 1) {
    state.level += 1;
    state.item = 0;
    renderQuestion();
    return;
  }
  showResults();
}

function showResults() {
  const accuracy = state.attempts ? Math.round((state.correct / state.attempts) * 100) : 0;
  els.finalScore.textContent = state.score;
  els.correctCount.textContent = `${state.correct}/${totalQuestions()}`;
  els.accuracy.textContent = `${accuracy}%`;
  els.bestStreak.textContent = state.bestStreak;
  els.resultMessage.textContent = accuracy >= 85
    ? "You are a question champion! Your word order is excellent."
    : accuracy >= 65
      ? "Strong work! One more climb and questions will feel easy."
      : "Good training! Check the cheat sheet and climb again.";
  els.learnedRule.textContent = state.correct >= 17
    ? "Wh-word + do/does + subject + verb?"
    : "After DOES, the main verb never has -S.";
  showScreen(els.results);
  playTone(true);
}

els.start.addEventListener("click", startGame);
els.restart.addEventListener("click", startGame);
els.check.addEventListener("click", checkAnswer);
els.next.addEventListener("click", nextQuestion);
els.back.addEventListener("click", () => showScreen(els.home));
els.formulaToggle.addEventListener("click", () => els.drawer.classList.remove("hidden"));
els.formulaClose.addEventListener("click", () => els.drawer.classList.add("hidden"));
els.drawer.addEventListener("click", (event) => { if (event.target === els.drawer) els.drawer.classList.add("hidden"); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") els.drawer.classList.add("hidden"); });
els.sound.addEventListener("click", () => {
  state.sound = !state.sound;
  els.sound.setAttribute("aria-pressed", String(state.sound));
  els.sound.setAttribute("aria-label", state.sound ? "Turn sound off" : "Turn sound on");
  els.sound.querySelector("span").textContent = state.sound ? "♪" : "×";
  if (state.sound) playTone(true);
});

resetState();
