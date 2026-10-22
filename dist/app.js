const levels = [
  {
    label: "LEVEL 1",
    title: "WARM-UP",
    tag: "CHOOSE THE WORD",
    coach: "Сначала пойми, какую информацию мы хотим узнать. Это поможет выбрать вопросительное слово.",
    type: "choice",
    items: [
      { icon: "⚽", prompt: "Ты хочешь узнать <em>где</em> играет Ben.", context: "Ben plays football in the park.", options: ["What", "Where", "When"], answer: "Where", explain: "Where = где. Where does Ben play football?" },
      { icon: "🎾", prompt: "Ты хочешь узнать, <em>когда</em> тренируется Mia.", context: "Mia trains on Tuesdays.", options: ["When", "Who", "Whose"], answer: "When", explain: "When = когда. When does Mia train?" },
      { icon: "🏀", prompt: "Ты хочешь узнать, <em>кто</em> играет в баскетбол.", context: "Alex plays basketball.", options: ["How old", "Who", "What"], answer: "Who", explain: "Who = кто. Who plays basketball?" },
      { icon: "🏊", prompt: "Ты хочешь узнать, <em>каким спортом</em> занимается Leo.", context: "Leo does karate.", options: ["What", "Where", "Whose"], answer: "What", explain: "What = что / какой. What sport does Leo do?" },
      { icon: "🏐", prompt: "Ты хочешь узнать, <em>чей</em> это волейбольный мяч.", context: "It is Kate's volleyball.", options: ["Who", "When", "Whose"], answer: "Whose", explain: "Whose = чей / чья / чьё. Whose volleyball is it?" },
      { icon: "🏅", prompt: "Ты хочешь узнать, <em>сколько медалей</em> есть у команды.", context: "The team has five medals.", options: ["How old", "How many", "What"], answer: "How many", explain: "How many = сколько (с предметами). How many medals does the team have?" },
      { icon: "🛹", prompt: "Ты хочешь узнать, <em>сколько лет</em> скейтбордисту.", context: "The skateboarder is ten.", options: ["When", "How many", "How old"], answer: "How old", explain: "How old = сколько лет. How old is the skateboarder?" }
    ]
  },
  {
    label: "LEVEL 2",
    title: "BUILD IT",
    tag: "BUILD THE QUESTION",
    coach: "Ставь слова по местам: вопросительное слово → do/does → кто? → глагол. После does глагол без -s!",
    type: "builder",
    items: [
      { icon: "🎾", prompt: "Спроси: <em>Где Emma играет в теннис?</em>", context: "Собери английский вопрос.", words: ["tennis", "Emma", "Where", "play", "does", "?"], answer: ["Where", "does", "Emma", "play", "tennis", "?"], hint: "Where + does + Emma + play ...?", explain: "После does используем play, не plays." },
      { icon: "⚽", prompt: "Спроси: <em>Когда они тренируются?</em>", context: "Собери английский вопрос.", words: ["train", "When", "they", "?", "do"], answer: ["When", "do", "they", "train", "?"], hint: "When + do + they + train ...?", explain: "С they нужен помощник do." },
      { icon: "🥋", prompt: "Спроси: <em>Каким спортом занимается Max?</em>", context: "Собери английский вопрос.", words: ["Max", "What", "do", "does", "sport", "?"], answer: ["What", "sport", "does", "Max", "do", "?"], hint: "What sport + does + Max + do ...?", explain: "Здесь первое do — обычный глагол, а does — помощник." },
      { icon: "🏊", prompt: "Спроси: <em>Сколько раз в неделю ты плаваешь?</em>", context: "Собери английский вопрос.", words: ["week", "How many", "swim", "a", "times", "you", "do", "?"], answer: ["How many", "times", "a", "week", "do", "you", "swim", "?"], hint: "How many times a week + do + you + swim ...?", explain: "How many стоит вместе, а times a week уточняет количество." },
      { icon: "🏀", prompt: "Спроси: <em>Кто играет в баскетбол после школы?</em>", context: "Внимание: Who здесь само выполняет действие.", words: ["after school", "Who", "basketball", "plays", "does", "?"], answer: ["Who", "plays", "basketball", "after school", "?"], hint: "Who + plays + basketball ...? Помощник does не нужен.", explain: "Если Who означает «кто делает?», сразу ставим глагол с -s: Who plays...?" },
      { icon: "🏸", prompt: "Спроси: <em>Чью ракетку использует Anna?</em>", context: "Собери английский вопрос.", words: ["use", "does", "Anna", "Whose", "racket", "?"], answer: ["Whose", "racket", "does", "Anna", "use", "?"], hint: "Whose racket + does + Anna + use ...?", explain: "Whose ставим перед предметом: Whose racket...?" },
      { icon: "🏅", prompt: "Спроси: <em>Сколько лет тренеру?</em>", context: "Здесь нужен глагол to be.", words: ["coach", "does", "the", "How old", "is", "?"], answer: ["How old", "is", "the", "coach", "?"], hint: "How old + is + the coach ...?", explain: "С возрастом используем is, а do/does не нужен." }
    ]
  },
  {
    label: "LEVEL 3",
    title: "THE FINAL",
    tag: "FIND THE RIGHT QUESTION",
    coach: "Проверь три вещи: есть ли помощник, стоит ли он перед подлежащим и не осталось ли -s у глагола после does.",
    type: "correct",
    items: [
      { icon: "🏐", prompt: "Выбери правильный вопрос: <em>Где Nina играет в волейбол?</em>", context: "Только один вариант построен верно.", options: ["Where Nina plays volleyball?", "Where does Nina play volleyball?", "Where does Nina plays volleyball?"], answer: 1, explain: "Верно: Where + does + Nina + play. После does у play нет -s." },
      { icon: "🏃", prompt: "Выбери правильный вопрос: <em>Когда вы бегаете?</em>", context: "Только один вариант построен верно.", options: ["When do you run?", "When you do run?", "When does you run?"], answer: 0, explain: "С you используем do и ставим его перед подлежащим." },
      { icon: "🏒", prompt: "Выбери правильный вопрос: <em>Кто играет в хоккей?</em>", context: "Who означает «кто выполняет действие?»", options: ["Who does play hockey?", "Who play hockey?", "Who plays hockey?"], answer: 2, explain: "Who здесь подлежащее: сразу ставим plays, без does." },
      { icon: "🏊", prompt: "Выбери правильный вопрос: <em>Сколько бассейнов есть в городе?</em>", context: "Только один вариант построен верно.", options: ["How many pools are in the town?", "How many are pools in the town?", "How old pools are in the town?"], answer: 0, explain: "How many стоит перед существительным: How many pools...?" },
      { icon: "🚴", prompt: "Выбери правильный вопрос: <em>Чей это велосипед?</em>", context: "Здесь нужен глагол to be.", options: ["Whose does bike it?", "Whose bike is it?", "Who bike is it?"], answer: 1, explain: "Whose + предмет + is + подлежащее: Whose bike is it?" },
      { icon: "🧗", prompt: "Выбери правильный вопрос: <em>Сколько лет Oliver?</em>", context: "Здесь нужен глагол to be.", options: ["How many is Oliver?", "How old does Oliver?", "How old is Oliver?"], answer: 2, explain: "Возраст: How old + is + имя?" },
      { icon: "🏓", prompt: "Выбери правильный вопрос: <em>Что они играют по пятницам?</em>", context: "Только один вариант построен верно.", options: ["What do they play on Fridays?", "What they play on Fridays?", "What does they play on Fridays?"], answer: 0, explain: "С they нужен do: What do they play...?" }
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
  feedbackText: $("#feedbackText"), hint: $("#hintButton"), check: $("#checkButton"), next: $("#nextButton"),
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
  els.progressLabel.textContent = `Задание ${overallCurrent} из ${total}`;
  els.progressPercent.textContent = `${percent}%`;
  els.progressBar.style.width = `${percent}%`;
  els.prompt.innerHTML = item.prompt;
  els.translation.textContent = item.context;
  els.instruction.textContent = level.type === "choice" ? "Какое слово поможет задать вопрос?" : level.type === "builder" ? "Поставь слова в правильном порядке" : "Где правильный порядок слов?";
  els.feedback.className = "feedback hidden";
  els.check.classList.remove("hidden");
  els.check.disabled = true;
  els.next.classList.add("hidden");
  els.hint.disabled = false;
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
  board.setAttribute("aria-label", "Собранный вопрос");
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
  placed.title = "Убрать слово";
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
  showFeedback(true, state.streak >= 3 ? `Серия ×${state.streak}! ${item.explain}` : item.explain);
  els.check.classList.add("hidden");
  els.next.classList.remove("hidden");
  els.hint.disabled = true;
  playTone(true);
}

function handleWrong(level, item) {
  state.streak = 0;
  updateScoreboard();
  markAnswer(level, false, item);
  const advice = level.type === "builder"
    ? "Проверь начало вопроса и место do/does. Можно убрать слова и попробовать ещё раз."
    : "Сверь порядок слов со шпаргалкой и попробуй ещё раз.";
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
  els.feedbackTitle.textContent = correct ? "Great job!" : "Почти! Попробуй ещё.";
  els.feedbackText.textContent = text;
}

function showHint() {
  const level = currentLevel();
  const item = currentItem();
  let text;
  if (level.type === "choice") text = item.explain.split(".")[0] + ".";
  else if (level.type === "builder") text = item.hint;
  else text = "Начни с вопросительного слова. Затем проверь: нужен do/does или is/are?";
  els.feedback.className = "feedback";
  els.feedbackIcon.textContent = "💡";
  els.feedbackTitle.textContent = "Подсказка тренера";
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
    ? "Ты — капитан вопросов! Порядок слов почти идеален."
    : accuracy >= 65
      ? "Сильная игра! Ещё один матч — и вопросы станут лёгкими."
      : "Хорошая тренировка! Открой шпаргалку и сыграй ещё раз.";
  els.learnedRule.textContent = state.correct >= 17
    ? "Wh-word + do/does + subject + verb?"
    : "После DOES основной глагол всегда без -S.";
  showScreen(els.results);
  playTone(true);
}

els.start.addEventListener("click", startGame);
els.restart.addEventListener("click", startGame);
els.check.addEventListener("click", checkAnswer);
els.next.addEventListener("click", nextQuestion);
els.hint.addEventListener("click", showHint);
els.back.addEventListener("click", () => showScreen(els.home));
els.formulaToggle.addEventListener("click", () => els.drawer.classList.remove("hidden"));
els.formulaClose.addEventListener("click", () => els.drawer.classList.add("hidden"));
els.drawer.addEventListener("click", (event) => { if (event.target === els.drawer) els.drawer.classList.add("hidden"); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") els.drawer.classList.add("hidden"); });
els.sound.addEventListener("click", () => {
  state.sound = !state.sound;
  els.sound.setAttribute("aria-pressed", String(state.sound));
  els.sound.setAttribute("aria-label", state.sound ? "Выключить звук" : "Включить звук");
  els.sound.querySelector("span").textContent = state.sound ? "♪" : "×";
  if (state.sound) playTone(true);
});

resetState();
