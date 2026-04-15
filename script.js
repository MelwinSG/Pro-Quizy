// ============================================================
// DATA — Question Bank
// ============================================================
const SUBJECTS = [
  { id: 'math', name: 'Mathematics', icon: '🔢', color: '#7c6fff' },
  { id: 'physics', name: 'Physics', icon: '⚛️', color: '#5b9ef8' },
  { id: 'chemistry', name: 'Chemistry', icon: '🧪', color: '#34c98f' },
  { id: 'biology', name: 'Biology', icon: '🧬', color: '#e87dc5' },
  { id: 'english', name: 'English', icon: '📝', color: '#f5a623' },
  { id: 'gk', name: 'General Knowledge', icon: '🌍', color: '#f06060' },
  { id: 'logic', name: 'Logical Reasoning', icon: '🧠', color: '#b45ef8' },
  { id: 'aptitude', name: 'Aptitude', icon: '📐', color: '#5b9ef8' },
  { id: 'coding', name: 'Coding Basics', icon: '💻', color: '#34c98f' },
  { id: 'affairs', name: 'Current Affairs', icon: '📰', color: '#f5a623' },
];

const QUESTIONS = {
  math: [
    { q: "What is the square root of 144?", opts: ["10","11","12","13"], ans: 2, expl: "12 × 12 = 144, so √144 = 12.", diff: "easy", topic: "Arithmetic" },
    { q: "If 2x + 5 = 17, what is x?", opts: ["5","6","7","8"], ans: 1, expl: "2x = 12, so x = 6.", diff: "easy", topic: "Algebra" },
    { q: "What is 15% of 200?", opts: ["25","30","35","40"], ans: 1, expl: "15/100 × 200 = 30.", diff: "easy", topic: "Percentages" },
    { q: "Solve: x² - 5x + 6 = 0", opts: ["x=2,3","x=1,6","x=-2,-3","x=3,4"], ans: 0, expl: "Factor: (x-2)(x-3) = 0, so x=2 or x=3.", diff: "medium", topic: "Algebra" },
    { q: "What is the area of a circle with radius 7? (π≈22/7)", opts: ["144","154","164","174"], ans: 1, expl: "Area = πr² = 22/7 × 49 = 154.", diff: "medium", topic: "Geometry" },
    { q: "If a train travels 240 km in 4 hours, what is its speed?", opts: ["50 km/h","55 km/h","60 km/h","65 km/h"], ans: 2, expl: "Speed = 240/4 = 60 km/h.", diff: "easy", topic: "Speed & Distance" },
    { q: "What is log₁₀(1000)?", opts: ["2","3","4","10"], ans: 1, expl: "10³ = 1000, so log₁₀(1000) = 3.", diff: "medium", topic: "Logarithms" },
    { q: "The sum of angles in a triangle is:", opts: ["90°","180°","270°","360°"], ans: 1, expl: "By the triangle angle-sum theorem, all three angles add to 180°.", diff: "easy", topic: "Geometry" },
    { q: "What is the derivative of x³?", opts: ["2x","3x","3x²","x²"], ans: 2, expl: "d/dx(xⁿ) = n·xⁿ⁻¹, so d/dx(x³) = 3x².", diff: "hard", topic: "Calculus" },
    { q: "How many prime numbers are there between 1 and 20?", opts: ["6","7","8","9"], ans: 2, expl: "Primes: 2,3,5,7,11,13,17,19 — that's 8 primes.", diff: "medium", topic: "Number Theory" },
    { q: "What is 2⁸?", opts: ["128","256","512","64"], ans: 1, expl: "2⁸ = 256.", diff: "easy", topic: "Powers" },
    { q: "If P(A)=0.4 and P(B)=0.6 and they are independent, P(A∩B)=?", opts: ["0.24","0.36","0.48","1.0"], ans: 0, expl: "P(A∩B) = P(A)·P(B) = 0.4×0.6 = 0.24 for independent events.", diff: "hard", topic: "Probability" },
    { q: "Find the LCM of 12 and 18.", opts: ["24","36","48","72"], ans: 1, expl: "LCM(12,18) = 36.", diff: "easy", topic: "Arithmetic" },
    { q: "The slope of the line 3x - 4y = 12 is:", opts: ["3/4","4/3","-3/4","-4/3"], ans: 0, expl: "Rewrite: y = (3/4)x - 3, so slope = 3/4.", diff: "medium", topic: "Coordinate Geometry" },
    { q: "In an AP with first term 2 and common difference 3, what is the 10th term?", opts: ["26","28","29","32"], ans: 2, expl: "aₙ = a + (n-1)d = 2 + 9×3 = 29.", diff: "medium", topic: "Sequences" },
  ],
  physics: [
    { q: "What is the SI unit of force?", opts: ["Watt","Joule","Newton","Pascal"], ans: 2, expl: "Force is measured in Newtons (N). F = ma.", diff: "easy", topic: "Mechanics" },
    { q: "Speed of light in vacuum is approximately:", opts: ["3×10⁶ m/s","3×10⁸ m/s","3×10¹⁰ m/s","3×10⁴ m/s"], ans: 1, expl: "c ≈ 3×10⁸ m/s is the speed of light in vacuum.", diff: "easy", topic: "Optics" },
    { q: "Ohm's Law states V = ?", opts: ["I/R","IR","I²R","I+R"], ans: 1, expl: "Ohm's Law: Voltage = Current × Resistance (V = IR).", diff: "easy", topic: "Electricity" },
    { q: "A body is in free fall. Its acceleration is:", opts: ["0 m/s²","5 m/s²","9.8 m/s²","10.8 m/s²"], ans: 2, expl: "Free fall acceleration = g ≈ 9.8 m/s² due to gravity.", diff: "easy", topic: "Mechanics" },
    { q: "Which law explains why a rocket moves forward?", opts: ["Newton's 1st Law","Newton's 2nd Law","Newton's 3rd Law","Kepler's Law"], ans: 2, expl: "Action–reaction (3rd Law): exhaust gases pushed back → rocket pushed forward.", diff: "medium", topic: "Mechanics" },
    { q: "The unit of electrical resistance is:", opts: ["Farad","Ampere","Volt","Ohm"], ans: 3, expl: "Resistance is measured in Ohms (Ω).", diff: "easy", topic: "Electricity" },
    { q: "Energy stored in a spring is called:", opts: ["Kinetic energy","Thermal energy","Elastic potential energy","Chemical energy"], ans: 2, expl: "Compressed/stretched springs store elastic potential energy = ½kx².", diff: "medium", topic: "Energy" },
    { q: "The phenomenon of light bending when entering a denser medium is:", opts: ["Reflection","Diffraction","Refraction","Dispersion"], ans: 2, expl: "Refraction — light changes direction when it changes medium.", diff: "easy", topic: "Optics" },
    { q: "Absolute zero in Celsius is:", opts: ["-100°C","-173°C","-273°C","-373°C"], ans: 2, expl: "Absolute zero (0 K) = -273.15°C.", diff: "medium", topic: "Thermodynamics" },
    { q: "The formula for power is:", opts: ["P=F/t","P=W/t","P=Fv only","P=mgh"], ans: 1, expl: "Power = Work done / Time (P = W/t).", diff: "easy", topic: "Energy" },
  ],
  chemistry: [
    { q: "What is the atomic number of Carbon?", opts: ["4","6","8","12"], ans: 1, expl: "Carbon has 6 protons, so its atomic number is 6.", diff: "easy", topic: "Atomic Structure" },
    { q: "What is the chemical formula for water?", opts: ["HO","H₂O","H₂O₂","H₃O"], ans: 1, expl: "Water is H₂O — two hydrogen atoms bonded to one oxygen.", diff: "easy", topic: "Chemical Formulas" },
    { q: "Which element is the most abundant in Earth's crust?", opts: ["Silicon","Iron","Oxygen","Aluminium"], ans: 2, expl: "Oxygen makes up about 46% of Earth's crust by mass.", diff: "medium", topic: "Elements" },
    { q: "What is pH of a neutral solution?", opts: ["0","7","14","4"], ans: 1, expl: "A pH of 7 is neutral; below 7 is acidic, above 7 is basic.", diff: "easy", topic: "Acids & Bases" },
    { q: "Which gas is produced during photosynthesis?", opts: ["CO₂","N₂","O₂","H₂"], ans: 2, expl: "Plants release oxygen (O₂) as a byproduct of photosynthesis.", diff: "easy", topic: "Organic Chemistry" },
    { q: "What type of bond holds NaCl together?", opts: ["Covalent","Ionic","Metallic","Hydrogen"], ans: 1, expl: "NaCl is held by ionic bonds — Na⁺ and Cl⁻ attract each other.", diff: "medium", topic: "Chemical Bonding" },
    { q: "Which law states that matter cannot be created or destroyed?", opts: ["Boyle's Law","Law of Conservation of Mass","Avogadro's Law","Charles' Law"], ans: 1, expl: "Conservation of Mass — total mass before and after a reaction stays constant.", diff: "medium", topic: "Chemical Laws" },
    { q: "Avogadro's number is approximately:", opts: ["6.022×10²³","6.022×10²²","6.022×10²⁴","6.022×10²⁰"], ans: 0, expl: "Avogadro's number Nₐ ≈ 6.022×10²³ particles per mole.", diff: "medium", topic: "Mole Concept" },
  ],
  biology: [
    { q: "What is the powerhouse of the cell?", opts: ["Nucleus","Ribosome","Mitochondria","Golgi body"], ans: 2, expl: "Mitochondria produce ATP through cellular respiration — the cell's energy currency.", diff: "easy", topic: "Cell Biology" },
    { q: "DNA stands for:", opts: ["Deoxyribonucleic Acid","Diribonucleic Acid","Deoxyribose Nucleic Acid","Double Nucleic Acid"], ans: 0, expl: "DNA = Deoxyribonucleic Acid, the molecule carrying genetic information.", diff: "easy", topic: "Genetics" },
    { q: "How many chromosomes does a human body cell have?", opts: ["23","46","44","48"], ans: 1, expl: "Humans have 46 chromosomes (23 pairs) in somatic cells.", diff: "easy", topic: "Genetics" },
    { q: "Photosynthesis occurs in which part of the plant cell?", opts: ["Nucleus","Mitochondria","Chloroplast","Ribosome"], ans: 2, expl: "Chloroplasts contain chlorophyll and are the site of photosynthesis.", diff: "easy", topic: "Plant Biology" },
    { q: "Which blood group is the universal donor?", opts: ["A","B","AB","O"], ans: 3, expl: "Blood group O (negative) is the universal donor — no A or B antigens.", diff: "medium", topic: "Human Biology" },
    { q: "The process by which cells divide is called:", opts: ["Meiosis only","Mitosis only","Both mitosis and meiosis","Osmosis"], ans: 2, expl: "Mitosis (body cell division) and meiosis (sex cell division) are both cell division processes.", diff: "medium", topic: "Cell Biology" },
    { q: "Which organ produces insulin?", opts: ["Liver","Kidney","Pancreas","Spleen"], ans: 2, expl: "The pancreas produces insulin to regulate blood sugar levels.", diff: "easy", topic: "Human Biology" },
    { q: "Charles Darwin's theory of evolution is based on:", opts: ["Survival of the fittest","Spontaneous generation","Inheritance of acquired traits","Mutation only"], ans: 0, expl: "Natural selection — organisms best adapted to their environment survive and reproduce.", diff: "medium", topic: "Evolution" },
  ],
  english: [
    { q: "Which word is a synonym for 'Diligent'?", opts: ["Lazy","Careless","Hardworking","Slow"], ans: 2, expl: "'Diligent' means showing care and effort in work — 'Hardworking' is the closest synonym.", diff: "easy", topic: "Vocabulary" },
    { q: "Identify the correct sentence:", opts: ["She don't know the answer","She doesn't knows the answer","She doesn't know the answer","She don't knows the answer"], ans: 2, expl: "Third-person singular requires 'doesn't' + base verb: 'She doesn't know.'", diff: "easy", topic: "Grammar" },
    { q: "What is the plural of 'criterion'?", opts: ["Criterions","Criteria","Criterias","Criterion"], ans: 1, expl: "'Criterion' is from Greek; its plural is 'criteria'.", diff: "medium", topic: "Vocabulary" },
    { q: "Antonym of 'Benevolent' is:", opts: ["Kind","Generous","Malevolent","Friendly"], ans: 2, expl: "'Benevolent' means well-wishing; 'malevolent' means wishing harm — the opposite.", diff: "medium", topic: "Vocabulary" },
    { q: "Which figure of speech is used in: 'Time is money'?", opts: ["Simile","Metaphor","Hyperbole","Personification"], ans: 1, expl: "A metaphor directly equates two things — here, time is directly called money.", diff: "medium", topic: "Literature" },
    { q: "The passive voice of 'She wrote the letter' is:", opts: ["The letter was written by her","The letter is written by her","The letter wrote by her","She had written the letter"], ans: 0, expl: "Past tense passive: 'The letter was written by her.'", diff: "easy", topic: "Grammar" },
  ],
  gk: [
    { q: "Which planet is known as the Red Planet?", opts: ["Venus","Mars","Jupiter","Saturn"], ans: 1, expl: "Mars has a reddish appearance due to iron oxide (rust) on its surface.", diff: "easy", topic: "Space" },
    { q: "Who wrote 'Romeo and Juliet'?", opts: ["Charles Dickens","Leo Tolstoy","William Shakespeare","Mark Twain"], ans: 2, expl: "Romeo and Juliet is a tragedy by William Shakespeare, written around 1594–1596.", diff: "easy", topic: "Literature" },
    { q: "What is the capital of Australia?", opts: ["Sydney","Melbourne","Canberra","Brisbane"], ans: 2, expl: "Canberra is the capital of Australia — not Sydney, which is the largest city.", diff: "medium", topic: "Geography" },
    { q: "The Great Wall of China was primarily built to:", opts: ["Showcase architecture","Protect against invasions","Mark the border","Regulate trade"], ans: 1, expl: "The Great Wall was built as a military fortification to defend against northern invasions.", diff: "medium", topic: "History" },
    { q: "Which element has the symbol 'Au'?", opts: ["Silver","Aluminium","Gold","Argon"], ans: 2, expl: "Au comes from the Latin 'aurum', meaning gold.", diff: "medium", topic: "Science" },
    { q: "Who invented the telephone?", opts: ["Thomas Edison","Nikola Tesla","Alexander Graham Bell","Guglielmo Marconi"], ans: 2, expl: "Alexander Graham Bell is credited with inventing the telephone in 1876.", diff: "easy", topic: "Inventions" },
    { q: "The Nile is the world's longest river. Which continent is it on?", opts: ["Asia","South America","Africa","Europe"], ans: 2, expl: "The Nile flows through northeastern Africa, passing through Egypt to the Mediterranean.", diff: "easy", topic: "Geography" },
    { q: "What is the smallest country in the world by area?", opts: ["Monaco","San Marino","Vatican City","Liechtenstein"], ans: 2, expl: "Vatican City, at ~0.44 km², is the smallest recognized country by area.", diff: "medium", topic: "Geography" },
  ],
  logic: [
    { q: "If all birds can fly, and a penguin is a bird, then:", opts: ["A penguin can fly","A penguin cannot fly","We can't conclude anything","Penguins are not birds"], ans: 0, expl: "By deductive logic (given the premises), a penguin can fly. The premise is actually false, but the conclusion follows from it.", diff: "medium", topic: "Deductive Reasoning" },
    { q: "Complete the series: 2, 4, 8, 16, __", opts: ["24","28","32","36"], ans: 2, expl: "Each term doubles: ×2 each time. 16×2 = 32.", diff: "easy", topic: "Number Series" },
    { q: "If ROSE = 6521, CHAIR = 73456, then RICE = ?", opts: ["6571","6574","6521","6524"], ans: 1, expl: "R=6, I=4, C=7, E=1 → RICE = 6574.", diff: "hard", topic: "Coding-Decoding" },
    { q: "A is taller than B. B is taller than C. Who is shortest?", opts: ["A","B","C","Can't determine"], ans: 2, expl: "A > B > C, so C is the shortest.", diff: "easy", topic: "Ordering" },
    { q: "Find the odd one out: 3, 5, 7, 9, 11", opts: ["3","9","11","5"], ans: 1, expl: "All except 9 are prime numbers. 9 = 3×3 is composite.", diff: "medium", topic: "Odd One Out" },
    { q: "If CAT = 3120, then DOG = ?", opts: ["4156","4157","4158","4159"], ans: 1, expl: "C=3, A=1, T=20 → 3+1+20=24. D=4, O=15, G=7 → 4+15+7 but positionally D=4,O=15,G=7 = 4157.", diff: "hard", topic: "Coding-Decoding" },
    { q: "In a row, Ram is 7th from the left and 5th from the right. How many people are in the row?", opts: ["10","11","12","13"], ans: 1, expl: "Total = (7-1) + (5-1) + 1 = 6+4+1 = 11.", diff: "medium", topic: "Arrangement" },
    { q: "Complete: ACE, BDF, CEG, ___", opts: ["DFH","DGH","EFH","EGI"], ans: 0, expl: "Pattern: each letter increases by 2 from position to position, and start letter increases by 1. A+1=B, C+1=D, E+1=F, G+1=H → DFH.", diff: "medium", topic: "Letter Series" },
  ],
  aptitude: [
    { q: "A shopkeeper marks a product 40% above cost price and gives 20% discount. Profit %?", opts: ["10%","12%","14%","16%"], ans: 1, expl: "CP=100, MP=140, SP=140×0.8=112, Profit=12%.", diff: "medium", topic: "Profit & Loss" },
    { q: "Two numbers are in ratio 3:5. Their LCM is 75. Find the numbers.", opts: ["9,15","15,25","12,20","18,30"], ans: 1, expl: "Numbers = 3k, 5k. LCM = 15k = 75, so k=5. Numbers = 15, 25.", diff: "medium", topic: "Ratio" },
    { q: "A pipe fills a tank in 6 hrs, another in 12 hrs. Together?", opts: ["3 hrs","4 hrs","4.5 hrs","5 hrs"], ans: 1, expl: "Combined rate = 1/6+1/12 = 3/12 = 1/4. Time = 4 hrs.", diff: "medium", topic: "Time & Work" },
    { q: "Simple interest on ₹1000 at 5% for 3 years:", opts: ["₹100","₹150","₹200","₹250"], ans: 1, expl: "SI = P×R×T/100 = 1000×5×3/100 = ₹150.", diff: "easy", topic: "Interest" },
    { q: "The average of 5 numbers is 10. If one number is removed, average becomes 8. The removed number is:", opts: ["12","14","18","20"], ans: 2, expl: "Sum of 5 = 50. Sum of 4 = 32. Removed = 50-32 = 18.", diff: "medium", topic: "Averages" },
  ],
  coding: [
    { q: "Which of these is NOT a programming language?", opts: ["Python","Java","HTML","C++"], ans: 2, expl: "HTML (HyperText Markup Language) is a markup language, not a programming language.", diff: "easy", topic: "Basics" },
    { q: "What does 'if __name__ == \"__main__\"' do in Python?", opts: ["Defines main function","Runs code only when script is executed directly","Imports a module","Defines a class"], ans: 1, expl: "This guard runs code only when the file is run directly, not when imported as a module.", diff: "medium", topic: "Python" },
    { q: "What is the time complexity of binary search?", opts: ["O(n)","O(n²)","O(log n)","O(1)"], ans: 2, expl: "Binary search halves the search space each step: O(log n).", diff: "medium", topic: "Algorithms" },
    { q: "In OOP, 'encapsulation' means:", opts: ["Inheriting from parent class","Hiding internal state and requiring interaction through methods","Overriding methods","Multiple inheritance"], ans: 1, expl: "Encapsulation bundles data and methods, exposing only what's necessary — protecting internal state.", diff: "medium", topic: "OOP" },
    { q: "What does SQL stand for?", opts: ["Simple Query Language","Structured Query Language","Standard Query Language","System Query Language"], ans: 1, expl: "SQL = Structured Query Language, used to manage relational databases.", diff: "easy", topic: "Databases" },
    { q: "What is a 'null pointer exception'?", opts: ["Memory overflow","Accessing an object that doesn't exist","Dividing by zero","Array out of bounds"], ans: 1, expl: "NullPointerException occurs when code tries to use a reference that points to no object (null).", diff: "medium", topic: "Debugging" },
  ],
  affairs: [
    { q: "G20 is a group of how many major economies?", opts: ["15","20","25","19"], ans: 1, expl: "G20 comprises 19 countries plus the EU — major economies representing ~85% of global GDP.", diff: "easy", topic: "International" },
    { q: "What is the full form of ISRO?", opts: ["Indian Space Research Organisation","International Space Research Organization","Indian Scientific Research Organisation","Indian Space and Research Office"], ans: 0, expl: "ISRO = Indian Space Research Organisation, India's national space agency.", diff: "easy", topic: "India" },
    { q: "The United Nations has how many member states?", opts: ["185","193","197","200"], ans: 1, expl: "As of 2024, the UN has 193 member states.", diff: "medium", topic: "International" },
    { q: "UNESCO stands for:", opts: ["United Nations Educational, Scientific and Cultural Organization","United Nations Economic and Social Council","Universal Nations Education and Science Committee","United Nations Environmental Studies Committee"], ans: 0, expl: "UNESCO promotes education, science, and culture internationally.", diff: "medium", topic: "International" },
  ],
};

// ============================================================
// STATE
// ============================================================
let state = {
  currentQuiz: null,
  quizHistory: JSON.parse(localStorage.getItem('qm_history') || '[]'),
  subjectStats: JSON.parse(localStorage.getItem('qm_subjstats') || '{}'),
  streak: parseInt(localStorage.getItem('qm_streak') || '0'),
  totalQuizzes: parseInt(localStorage.getItem('qm_total') || '0'),
};
let quizSettings = { subject: 'math', diff: 'easy', count: 10, timer: 30, showExpl: true };
let timerInterval = null;
let scoreChart = null, subjChart = null, weaknessChart = null;

function saveState() {
  localStorage.setItem('qm_history', JSON.stringify(state.quizHistory));
  localStorage.setItem('qm_subjstats', JSON.stringify(state.subjectStats));
  localStorage.setItem('qm_streak', state.streak);
  localStorage.setItem('qm_total', state.totalQuizzes);
}

// ============================================================
// NAV
// ============================================================
function showPage(id, navEl) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (navEl) navEl.classList.add('active');
  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('open')) toggleSidebar();

  if (id === 'home') renderHome();
  if (id === 'dashboard') renderDashboard();
  if (id === 'history') renderHistory();
  if (id === 'weaknesses') renderWeaknesses();
  if (id === 'tips') renderTips();
  if (id === 'quiz-setup') renderSetup();
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('overlay');
  sb.classList.toggle('open');
  ov.classList.toggle('show');
}

// ============================================================
// THEME
// ============================================================
function toggleTheme() {
  const btn = document.getElementById('themeToggle');
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    btn.classList.remove('on');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    btn.classList.add('on');
  }
  renderCharts();
}

// ============================================================
// HOME
// ============================================================
function renderHome() {
  // Stats row
  const total = state.quizHistory.length;
  const avgScore = total ? Math.round(state.quizHistory.reduce((a,q)=>a+q.score,0)/total) : 0;
  const bestScore = total ? Math.max(...state.quizHistory.map(q=>q.score)) : 0;
  document.getElementById('home-stats-row').innerHTML = [
    {val: total, label: 'Quizzes Taken', icon:'📝'},
    {val: avgScore+'%', label: 'Avg Score', icon:'📈'},
    {val: bestScore+'%', label: 'Best Score', icon:'🏆'},
    {val: state.streak+'🔥', label: 'Day Streak', icon:''},
  ].map(s=>`<div class="stat-card"><div class="stat-val">${s.val}</div><div class="stat-label">${s.icon} ${s.label}</div></div>`).join('');

  // Subject grid
  document.getElementById('subjectGrid').innerHTML = SUBJECTS.map(s=>`
    <div class="subject-card" onclick="quickStart('${s.id}')">
      <div class="subject-icon">${s.icon}</div>
      <div class="subject-name">${s.name}</div>
      <div class="subject-count">${QUESTIONS[s.id]?.length||0} questions</div>
    </div>`).join('');

  // Weaknesses & strengths
  const {weak, strong} = computeWeakStrong();
  const wEl = document.getElementById('home-weaknesses');
  const sEl = document.getElementById('home-strengths');
  if (!weak.length) {
    wEl.innerHTML = '<div class="empty-state" style="padding:20px 0;"><div style="font-size:14px;color:var(--text3);">Take some quizzes to discover your weak areas!</div></div>';
  } else {
    wEl.innerHTML = '<div class="weakness-list">' + weak.slice(0,3).map(w=>`<div class="ws-item weak"><span class="ws-name">${w.name}</span><span class="ws-pct">${w.acc}%</span></div>`).join('') + '</div>';
  }
  if (!strong.length) {
    sEl.innerHTML = '<div style="font-size:14px;color:var(--text3);padding:20px 0;text-align:center;">No strengths detected yet.</div>';
  } else {
    sEl.innerHTML = '<div class="strength-list">' + strong.slice(0,3).map(s=>`<div class="ws-item strong"><span class="ws-name">${s.name}</span><span class="ws-pct">${s.acc}%</span></div>`).join('') + '</div>';
  }
}

function computeWeakStrong() {
  const stats = state.subjectStats;
  const arr = Object.entries(stats).map(([k,v])=>({
    id: k, name: SUBJECTS.find(s=>s.id===k)?.name||k,
    acc: v.total ? Math.round(v.correct/v.total*100) : 0, total: v.total
  })).filter(x=>x.total>=3);
  const sorted = arr.sort((a,b)=>a.acc-b.acc);
  return { weak: sorted.filter(x=>x.acc<60), strong: sorted.filter(x=>x.acc>=70).reverse() };
}

function quickStart(subjectId) {
  quizSettings.subject = subjectId;
  showPage('quiz-setup', document.querySelector('[onclick*=quiz-setup]'));
  document.getElementById('setupSubject').value = subjectId;
}

// ============================================================
// SETUP
// ============================================================
function renderSetup() {
  const sel = document.getElementById('setupSubject');
  if (!sel.options.length) {
    SUBJECTS.forEach(s => {
      const o = document.createElement('option');
      o.value = s.id; o.textContent = s.icon+' '+s.name;
      sel.appendChild(o);
    });
  }
  sel.value = quizSettings.subject;
}

function selectDiff(btn, diff) {
  document.querySelectorAll('.diff-btn').forEach(b => b.className = 'diff-btn');
  btn.classList.add('active-' + diff);
  quizSettings.diff = diff;
}

function startQuiz() {
  const subj = document.getElementById('setupSubject')?.value || quizSettings.subject;
  const count = parseInt(document.getElementById('setupQCount')?.value || 10);
  const timerSec = parseInt(document.getElementById('setupTimer')?.value ?? 30);
  const showExpl = document.getElementById('explToggle')?.classList.contains('on') ?? true;

  quizSettings = { ...quizSettings, subject: subj, count, timer: timerSec, showExpl };

  let pool = (QUESTIONS[subj] || []).filter(q => {
    if (quizSettings.diff === 'easy') return q.diff === 'easy';
    if (quizSettings.diff === 'hard') return q.diff === 'hard';
    return true;
  });
  if (!pool.length) pool = QUESTIONS[subj] || [];

  const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));

  state.currentQuiz = {
    subject: subj,
    subjectName: SUBJECTS.find(s=>s.id===subj)?.name || subj,
    questions: shuffled,
    answers: new Array(shuffled.length).fill(null),
    times: new Array(shuffled.length).fill(0),
    currentIdx: 0,
    startTime: Date.now(),
    questionStartTime: Date.now(),
    timerPerQ: timerSec,
    showExpl,
    done: false,
  };

  showPage('quiz', null);
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  renderQuestion();
  startTimer();
}

// ============================================================
// QUIZ
// ============================================================
function renderQuestion() {
  const quiz = state.currentQuiz;
  const q = quiz.questions[quiz.currentIdx];
  const idx = quiz.currentIdx;
  const total = quiz.questions.length;

  document.getElementById('quizSubjectLabel').textContent = quiz.subjectName;
  document.getElementById('quizProgressInfo').textContent = `Question ${idx+1} of ${total}`;
  document.getElementById('progressText').textContent = `${idx+1} / ${total}`;
  document.getElementById('progressPct').textContent = Math.round(((idx+1)/total)*100)+'%';
  document.getElementById('quizProgressBar').style.width = ((idx+1)/total*100)+'%';

  // Meta
  const diffColors = {easy:'badge-green',medium:'badge-amber',hard:'badge-red'};
  document.getElementById('questionMeta').innerHTML = `
    <span class="badge ${diffColors[q.diff]||'badge-blue'}">${q.diff}</span>
    <span class="badge badge-blue">${q.topic}</span>
    <span class="badge badge-purple">${quiz.subjectName}</span>`;

  document.getElementById('questionText').textContent = q.q;

  const chosen = quiz.answers[idx];
  const isDone = quiz.done;
  const letters = ['A','B','C','D'];
  document.getElementById('optionsList').innerHTML = q.opts.map((opt, oi) => {
    let cls = 'option';
    if (isDone) {
      if (oi === q.ans) cls += ' show-correct';
      else if (oi === chosen && chosen !== q.ans) cls += ' wrong';
    } else if (oi === chosen) cls += ' selected';
    const disabled = isDone || chosen !== null;
    return `<div class="${cls}" ${disabled?'style="pointer-events:none;cursor:default;"':'onclick="selectAnswer('+oi+')"'}>
      <span class="option-letter">${letters[oi]}</span>${opt}
    </div>`;
  }).join('');

  // Explanation
  const exBox = document.getElementById('explanationBox');
  if (isDone || (quiz.showExpl && chosen !== null)) {
    exBox.innerHTML = `<div class="explanation-title">💡 Explanation</div>${q.expl}`;
    exBox.classList.add('show');
  } else if (chosen !== null && quiz.showExpl) {
    exBox.innerHTML = `<div class="explanation-title">💡 Explanation</div>${q.expl}`;
    exBox.classList.add('show');
  } else {
    exBox.classList.remove('show');
  }

  // Dots
  document.getElementById('qDots').innerHTML = quiz.questions.map((_, i) => {
    let cls = 'q-dot';
    if (i === idx) cls += ' current';
    else if (quiz.done) cls += quiz.answers[i]===quiz.questions[i].ans ? ' correct-dot' : ' wrong-dot';
    else if (quiz.answers[i] !== null) cls += ' answered';
    return `<div class="${cls}"></div>`;
  }).join('');

  // Nav
  document.getElementById('prevBtn').disabled = idx === 0;
  const nextBtn = document.getElementById('nextBtn');
  if (idx === total - 1) {
    nextBtn.textContent = '✅ Finish Quiz';
    nextBtn.className = 'btn btn-success';
    nextBtn.onclick = () => endQuiz(false);
  } else {
    nextBtn.textContent = 'Next →';
    nextBtn.className = 'btn btn-primary';
    nextBtn.onclick = () => navigateQ(1);
  }
  quiz.questionStartTime = Date.now();
}

function selectAnswer(optIdx) {
  const quiz = state.currentQuiz;
  if (quiz.done || quiz.answers[quiz.currentIdx] !== null) return;
  quiz.answers[quiz.currentIdx] = optIdx;
  quiz.times[quiz.currentIdx] = Math.round((Date.now() - quiz.questionStartTime)/1000);
  renderQuestion();
}

function navigateQ(dir) {
  const quiz = state.currentQuiz;
  const newIdx = quiz.currentIdx + dir;
  if (newIdx < 0 || newIdx >= quiz.questions.length) return;
  quiz.currentIdx = newIdx;
  renderQuestion();
  resetTimer();
}

function endQuiz(quit) {
  clearInterval(timerInterval);
  const quiz = state.currentQuiz;
  if (!quiz) return;
  quiz.done = true;

  // Score
  let correct = 0;
  const topicMap = {};
  quiz.questions.forEach((q, i) => {
    const isCorrect = quiz.answers[i] === q.ans;
    if (isCorrect) correct++;
    if (!topicMap[q.topic]) topicMap[q.topic] = {correct:0, total:0};
    topicMap[q.topic].total++;
    if (isCorrect) topicMap[q.topic].correct++;
  });
  const score = Math.round((correct / quiz.questions.length) * 100);

  // Update subject stats
  if (!state.subjectStats[quiz.subject]) state.subjectStats[quiz.subject] = {correct:0, total:0, history:[]};
  state.subjectStats[quiz.subject].correct += correct;
  state.subjectStats[quiz.subject].total += quiz.questions.length;
  state.subjectStats[quiz.subject].history = (state.subjectStats[quiz.subject].history||[]).concat(score).slice(-20);

  // Save to history
  state.quizHistory.unshift({
    id: Date.now(), subject: quiz.subject, subjectName: quiz.subjectName,
    score, correct, total: quiz.questions.length,
    date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(),
    topicMap, diff: quizSettings.diff,
    avgTime: Math.round(quiz.times.filter(t=>t>0).reduce((a,b)=>a+b,0)/Math.max(quiz.times.filter(t=>t>0).length,1))
  });
  state.quizHistory = state.quizHistory.slice(0, 100);
  state.totalQuizzes++;
  saveState();

  if (!quit) {
    showResultsPage(score, correct, topicMap);
    if (score >= 80) launchConfetti();
  }
}

// ============================================================
// RESULTS
// ============================================================
function showResultsPage(score, correct, topicMap) {
  showPage('results', null);

  // Score ring
  const r = 54, circ = 2*Math.PI*r;
  const fill = circ * (score/100);
  const col = score>=80?'var(--green)':score>=60?'var(--amber)':'var(--red)';
  document.getElementById('scoreRingCard').innerHTML = `
    <div class="score-ring-container">
      <div class="score-ring pop-in">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r="${r}" fill="none" stroke="var(--bg4)" stroke-width="10"/>
          <circle cx="70" cy="70" r="${r}" fill="none" stroke="${col}" stroke-width="10"
            stroke-dasharray="${fill} ${circ}" stroke-linecap="round"/>
        </svg>
        <div class="score-ring-val" style="color:${col}">${score}%</div>
      </div>
      <div style="font-size:16px;font-weight:700;color:var(--text);">${getScoreLabel(score)}</div>
      <div style="font-size:13px;color:var(--text2);margin-top:6px;">${correct} / ${state.currentQuiz.questions.length} correct</div>
    </div>`;

  // Stats
  const quiz = state.currentQuiz;
  const avgT = Math.round(quiz.times.filter(t=>t>0).reduce((a,b)=>a+b,0)/Math.max(quiz.times.filter(t=>t>0).length,1));
  document.getElementById('resultStatsCol').innerHTML = `
    <div style="display:flex;flex-direction:column;gap:12px;height:100%;justify-content:center;">
      ${[['✅ Correct', correct, 'green'],['❌ Wrong', quiz.questions.length-correct-quiz.answers.filter(a=>a===null).length,'red'],['⏭ Skipped', quiz.answers.filter(a=>a===null).length,'amber'],['⏱ Avg Time', avgT+'s','blue']].map(([l,v,c])=>`
      <div class="card2" style="border-left:3px solid var(--${c});">
        <span style="font-size:12px;color:var(--text2);">${l}</span>
        <div style="font-family:'Syne',sans-serif;font-size:22px;font-weight:700;color:var(--${c});">${v}</div>
      </div>`).join('')}
    </div>`;

  // Affirmation
  const aff = getAffirmation(score);
  document.getElementById('affirmationCard').innerHTML = `<div class="affirmation-emoji">${aff.emoji}</div><div class="affirmation-text">${aff.text}</div>`;

  // Weak/Strong topics
  const topics = Object.entries(topicMap).map(([k,v])=>({name:k, acc:Math.round(v.correct/v.total*100), total:v.total}));
  renderWeaknessChart(topics);
  renderActionableFeedback(topics);
  const weakT = topics.filter(t=>t.acc<60).sort((a,b)=>a.acc-b.acc);
  const strongT = topics.filter(t=>t.acc>=70).sort((a,b)=>b.acc-a.acc);
  document.getElementById('weakAreasResult').innerHTML = weakT.length ? '<div class="weakness-list">'+weakT.map(t=>`<div class="ws-item weak"><span class="ws-name">${t.name}</span><span class="ws-pct">${t.acc}%</span></div>`).join('')+'</div>' : '<p style="font-size:13px;color:var(--green);">No weak areas — great work! 🎉</p>';
  document.getElementById('strongAreasResult').innerHTML = strongT.length ? '<div class="strength-list">'+strongT.map(t=>`<div class="ws-item strong"><span class="ws-name">${t.name}</span><span class="ws-pct">${t.acc}%</span></div>`).join('')+'</div>' : '<p style="font-size:13px;color:var(--text3);">Keep practicing to identify your strengths!</p>';

  // Review
  document.getElementById('reviewList').innerHTML = quiz.questions.map((q,i)=>{
    const chosen = quiz.answers[i];
    const isCorrect = chosen === q.ans;
    const isSkipped = chosen === null;
    const statusCls = isSkipped?'ri-skipped':isCorrect?'ri-correct':'ri-wrong';
    const statusIcon = isSkipped?'–':isCorrect?'✓':'✗';
    return `<div class="review-item">
      <div class="review-item-header" onclick="toggleReview(this)">
        <div class="ri-status ${statusCls}">${statusIcon}</div>
        <div style="flex:1;font-size:13px;font-weight:500;color:var(--text);">${q.q.length>80?q.q.slice(0,80)+'…':q.q}</div>
        <span style="font-size:11px;color:var(--text3);">▾</span>
      </div>
      <div class="review-item-body">
        <b>Your answer:</b> ${chosen!==null?q.opts[chosen]:'(skipped)'}<br>
        <b>Correct answer:</b> ${q.opts[q.ans]}<br><br>
        <b>Explanation:</b> ${q.expl}
      </div>
    </div>`;
  }).join('');
}

function renderWeaknessChart(topics) {
  const chartEl = document.getElementById('weakness-chart');
  if (!chartEl) return;
  if (weaknessChart) weaknessChart.destroy();
  if (!topics.length) {
    chartEl.parentElement.innerHTML = '<div style="padding:28px 16px;text-align:center;color:var(--text3);">No category performance data available.</div>';
    return;
  }
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const color = isDark ? '#8b9bff' : '#7c6fff';
  weaknessChart = new Chart(chartEl, {
    type: 'radar',
    data: {
      labels: topics.map(t=>t.name),
      datasets: [{
        label: 'Accuracy %',
        data: topics.map(t=>t.acc),
        backgroundColor: 'rgba(124,111,255,0.22)',
        borderColor: color,
        borderWidth: 2,
        pointBackgroundColor: color,
        pointBorderColor: '#fff',
        pointRadius: 4,
        fill: true,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: { color: isDark ? '#b0b7e6' : '#4a5068', stepSize: 20, backdropColor: 'transparent' },
          pointLabels: { color: isDark ? '#edf2ff' : '#344054', font: { size: 11 } },
          grid: { color: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' },
          angleLines: { color: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => `${ctx.formattedValue}%` } }
      }
    }
  });
}

function renderActionableFeedback(topics) {
  const container = document.getElementById('actionable-feedback');
  if (!container) return;
  if (!topics.length) {
    container.innerHTML = '<div style="padding:18px;border-radius:14px;background:rgba(124,111,255,0.08);color:var(--text3);">No actionable feedback available yet.</div>';
    return;
  }
  const alerts = topics.sort((a,b)=>a.acc-b.acc).map(topic => {
    let label = 'Strong area';
    let bg = 'rgba(52,201,143,0.12)';
    let border = 'rgba(52,201,143,0.28)';
    if (topic.acc < 50) { label = 'Needs urgent review'; bg = 'rgba(240,96,96,0.12)'; border = 'rgba(240,96,96,0.28)'; }
    else if (topic.acc < 70) { label = 'Review this topic'; bg = 'rgba(245,166,35,0.12)'; border = 'rgba(245,166,35,0.28)'; }
    return `<div style="border:1px solid ${border};background:${bg};border-radius:14px;padding:14px;display:grid;gap:8px;">
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px;font-weight:700;color:var(--text);">
        <span>${topic.name}</span>
        <span>${topic.acc}%</span>
      </div>
      <div style="font-size:13px;color:var(--text3);">${label} — focus on examples and explanations for this category.</div>
    </div>`;
  });
  container.innerHTML = alerts.join('');
}

function toggleReview(header) {  const body = header.nextElementSibling;
  body.classList.toggle('open');
}

function getScoreLabel(s) {
  if (s>=90) return '🏆 Excellent!';
  if (s>=80) return '🌟 Great Work!';
  if (s>=70) return '👍 Good Job!';
  if (s>=60) return '📚 Keep Going!';
  if (s>=50) return '💪 Keep Practicing!';
  return '🌱 Room to Grow!';
}

function getAffirmation(score) {
  const high = [
    {emoji:'🏆', text:'"Outstanding performance! You have mastered this topic. Your hard work is truly paying off!"'},
    {emoji:'🌟', text:'"Brilliant! You are at the top of your game. Keep this momentum going!"'},
    {emoji:'🎯', text:'"Perfect precision! You clearly understand this material deeply. Champion!"'},
  ];
  const mid = [
    {emoji:'📈', text:'"You are improving every day! Each quiz brings you closer to mastery. Keep it up!"'},
    {emoji:'💡', text:'"Good effort! Every mistake is a lesson in disguise. You\'re on the right path!"'},
    {emoji:'🔥', text:'"Your consistency will lead to success. The difference between ordinary and extraordinary is that little extra!"'},
  ];
  const low = [
    {emoji:'🌱', text:'"Mistakes are proof that you are learning. Every expert was once a beginner — keep going!"'},
    {emoji:'💪', text:'"You showed up and that\'s the most important step. Tomorrow you\'ll be better than today!"'},
    {emoji:'🌈', text:'"Don\'t be discouraged — every stumble is a step forward. Your breakthrough is coming!"'},
  ];
  const pool = score>=80?high:score>=60?mid:low;
  return pool[Math.floor(Math.random()*pool.length)];
}

// ============================================================
// TIMER
// ============================================================
function startTimer() {
  clearInterval(timerInterval);
  const quiz = state.currentQuiz;
  if (!quiz.timerPerQ) { document.getElementById('timerDisplay').textContent = '∞'; return; }
  let remaining = quiz.timerPerQ;
  updateTimerDisplay(remaining, quiz.timerPerQ);
  timerInterval = setInterval(()=>{
    remaining--;
    updateTimerDisplay(remaining, quiz.timerPerQ);
    if (remaining <= 0) {
      clearInterval(timerInterval);
      if (quiz.answers[quiz.currentIdx] === null) quiz.answers[quiz.currentIdx] = null;
      if (quiz.currentIdx < quiz.questions.length-1) { navigateQ(1); startTimer(); }
      else endQuiz(false);
    }
  }, 1000);
}
function resetTimer() { clearInterval(timerInterval); startTimer(); }
function updateTimerDisplay(rem, total) {
  const el = document.getElementById('timerDisplay');
  const timer = document.getElementById('quizTimer');
  el.textContent = rem+'s';
  timer.className = 'quiz-timer';
  if (rem <= total*0.3) timer.classList.add('timer-urgent');
  else if (rem <= total*0.5) timer.classList.add('timer-warn');
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const hist = state.quizHistory;
  const total = hist.length;
  const avg = total ? Math.round(hist.reduce((a,q)=>a+q.score,0)/total) : 0;
  const best = total ? Math.max(...hist.map(q=>q.score)) : 0;
  const subjects = new Set(hist.map(q=>q.subject)).size;

  document.getElementById('dashStatsRow').innerHTML = [
    {val:total, label:'Total Quizzes', icon:'📝'},
    {val:avg+'%', label:'Average Score', icon:'📊'},
    {val:best+'%', label:'Best Score', icon:'🏆'},
    {val:subjects, label:'Subjects Tried', icon:'📚'},
  ].map(s=>`<div class="stat-card"><div class="stat-val">${s.val}</div><div class="stat-label">${s.icon} ${s.label}</div></div>`).join('');

  renderCharts();

  // Subject performance list
  const perf = Object.entries(state.subjectStats).map(([k,v])=>({
    id:k, name:SUBJECTS.find(s=>s.id===k)?.name||k, icon:SUBJECTS.find(s=>s.id===k)?.icon||'📚',
    acc: v.total?Math.round(v.correct/v.total*100):0, total:v.total, correct:v.correct
  })).sort((a,b)=>b.total-a.total);

  if (!perf.length) {
    document.getElementById('subjectPerformanceList').innerHTML = '<div class="empty-state"><div class="empty-icon">📊</div><div class="empty-text">No quiz data yet</div><p style="font-size:13px;color:var(--text3);">Take some quizzes to see your performance!</p></div>';
  } else {
    document.getElementById('subjectPerformanceList').innerHTML = perf.map(p=>`
      <div style="padding:12px 0;border-bottom:1px solid var(--border);">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
          <span style="font-size:14px;font-weight:500;color:var(--text);">${p.icon} ${p.name}</span>
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="font-size:12px;color:var(--text3);">${p.correct}/${p.total} correct</span>
            <span style="font-family:'Syne',sans-serif;font-size:16px;font-weight:700;color:${p.acc>=70?'var(--green)':p.acc>=50?'var(--amber)':'var(--red)'};">${p.acc}%</span>
          </div>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${p.acc}%;background:${p.acc>=70?'var(--green)':p.acc>=50?'var(--amber)':'var(--red)'}"></div></div>
      </div>`).join('');
  }
}

function renderCharts() {
  const hist = state.quizHistory;
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const textCol = isDark ? '#9ba0b4' : '#4a5068';
  const gridCol = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

  // Score over time
  const recent = [...hist].reverse().slice(-15);
  if (scoreChart) scoreChart.destroy();
  const sCtx = document.getElementById('scoreChart');
  if (sCtx && recent.length) {
    scoreChart = new Chart(sCtx, {
      type: 'line',
      data: {
        labels: recent.map((_,i)=>'Q'+(i+1)),
        datasets: [{
          label: 'Score %', data: recent.map(q=>q.score),
          borderColor: '#7c6fff', backgroundColor: 'rgba(124,111,255,0.12)',
          fill: true, tension: 0.4, pointBackgroundColor: '#7c6fff', pointRadius: 4
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { min:0, max:100, ticks:{color:textCol,font:{size:11}}, grid:{color:gridCol} },
          x: { ticks:{color:textCol,font:{size:10}}, grid:{display:false} }
        }
      }
    });
  }

  // Subject accuracy
  const subj = Object.entries(state.subjectStats).map(([k,v])=>({
    name: SUBJECTS.find(s=>s.id===k)?.name?.split(' ')[0]||k,
    acc: v.total?Math.round(v.correct/v.total*100):0
  })).sort((a,b)=>b.acc-a.acc).slice(0,8);

  if (subjChart) subjChart.destroy();
  const scCtx = document.getElementById('subjectChart');
  if (scCtx && subj.length) {
    subjChart = new Chart(scCtx, {
      type: 'bar',
      data: {
        labels: subj.map(s=>s.name),
        datasets: [{
          label: 'Accuracy %',
          data: subj.map(s=>s.acc),
          backgroundColor: subj.map(s=>s.acc>=70?'rgba(52,201,143,0.7)':s.acc>=50?'rgba(245,166,35,0.7)':'rgba(240,96,96,0.7)'),
          borderRadius: 6, borderSkipped: false
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { min:0, max:100, ticks:{color:textCol,font:{size:11}}, grid:{color:gridCol} },
          x: { ticks:{color:textCol,font:{size:10}}, grid:{display:false} }
        }
      }
    });
  }
}

// ============================================================
// HISTORY
// ============================================================
function renderHistory() {
  const hist = state.quizHistory;
  if (!hist.length) {
    document.getElementById('historyList').innerHTML = '<div class="empty-state"><div class="empty-icon">📖</div><div class="empty-text">No quiz history yet</div><p style="font-size:13px;color:var(--text3);">Start a quiz to build your history!</p></div>';
    return;
  }
  document.getElementById('historyList').innerHTML = hist.map(h=>{
    const col = h.score>=80?'green':h.score>=60?'amber':'red';
    return `<div class="history-row">
      <div>
        <div class="history-subj">${SUBJECTS.find(s=>s.id===h.subject)?.icon||'📚'} ${h.subjectName}</div>
        <div class="history-detail">${h.date} · ${h.diff||''} · ${h.total} questions · avg ${h.avgTime||'?'}s/q</div>
      </div>
      <span style="font-family:'Syne',sans-serif;font-size:18px;font-weight:700;color:var(--${col});">${h.score}%</span>
    </div>`;
  }).join('');
}

// ============================================================
// WEAKNESSES
// ============================================================
function renderWeaknesses() {
  const {weak, strong} = computeWeakStrong();
  const allSubj = Object.entries(state.subjectStats).map(([k,v])=>({
    id:k, name:SUBJECTS.find(s=>s.id===k)?.name||k, icon:SUBJECTS.find(s=>s.id===k)?.icon||'📚',
    acc:v.total?Math.round(v.correct/v.total*100):0, total:v.total
  }));

  if (!allSubj.length) {
    document.getElementById('weaknessContent').innerHTML = '<div class="empty-state" style="padding:60px 0;"><div class="empty-icon">⚠️</div><div class="empty-text">Not enough data yet</div><p style="font-size:13px;color:var(--text3);">Take at least 3 quizzes per subject to see your weakness analysis.</p><button class="btn btn-primary" style="margin-top:20px;" onclick="showPage(\'quiz-setup\',document.querySelector(\'[onclick*=quiz-setup]\'))">Start a Quiz</button></div>';
    return;
  }

  const weakItems = allSubj.filter(s=>s.acc<60&&s.total>=3).sort((a,b)=>a.acc-b.acc);
  const midItems = allSubj.filter(s=>s.acc>=60&&s.acc<80&&s.total>=3);
  const strongItems = allSubj.filter(s=>s.acc>=80&&s.total>=3).sort((a,b)=>b.acc-a.acc);

  let html = '';
  if (weakItems.length) {
    html += `<div class="alert alert-warn" style="margin-bottom:16px;"><span style="font-size:18px;">⚠️</span><div>You have <strong>${weakItems.length}</strong> area(s) that need attention. Focus your study time here!</div></div>`;
    html += '<div class="card" style="margin-bottom:20px;"><h3 style="font-size:15px;font-weight:700;margin-bottom:16px;color:var(--red);">⚠️ Needs Improvement</h3>';
    html += '<div class="weakness-list">' + weakItems.map(s=>`
      <div class="ws-item weak" style="flex-direction:column;align-items:flex-start;gap:8px;">
        <div style="display:flex;width:100%;justify-content:space-between;align-items:center;">
          <span class="ws-name">${s.icon} ${s.name}</span>
          <span class="ws-pct">${s.acc}%</span>
        </div>
        <div class="progress-bar" style="width:100%;"><div class="progress-fill" style="width:${s.acc}%;background:var(--red);"></div></div>
        <div style="font-size:11px;color:var(--red);opacity:0.8;">${s.total} questions attempted</div>
      </div>`).join('') + '</div></div>';
  }
  if (midItems.length) {
    html += '<div class="card" style="margin-bottom:20px;"><h3 style="font-size:15px;font-weight:700;margin-bottom:16px;color:var(--amber);">📈 Getting Better</h3>';
    html += midItems.map(s=>`
      <div style="padding:10px 0;border-bottom:1px solid var(--border);">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
          <span style="font-size:13px;font-weight:500;">${s.icon} ${s.name}</span>
          <span style="font-family:'Syne';font-weight:700;color:var(--amber);">${s.acc}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${s.acc}%;background:var(--amber);"></div></div>
      </div>`).join('') + '</div>';
  }
  if (strongItems.length) {
    html += '<div class="card"><h3 style="font-size:15px;font-weight:700;margin-bottom:16px;color:var(--green);">💪 Your Strengths</h3>';
    html += strongItems.map(s=>`
      <div style="padding:10px 0;border-bottom:1px solid var(--border);">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
          <span style="font-size:13px;font-weight:500;">${s.icon} ${s.name}</span>
          <span style="font-family:'Syne';font-weight:700;color:var(--green);">${s.acc}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${s.acc}%;background:var(--green);"></div></div>
      </div>`).join('') + '</div>';
  }
  document.getElementById('weaknessContent').innerHTML = html || '<div class="alert alert-info"><span>ℹ️</span>Take more quizzes to unlock your personalized weakness analysis!</div>';
}

// ============================================================
// TIPS
// ============================================================
function renderTips() {
  const {weak} = computeWeakStrong();
  const tips = [
    { icon:'🧠', title:'Spaced Repetition', body:'Review material at increasing intervals: 1 day, 3 days, 1 week, 2 weeks. This technique dramatically improves long-term retention.', subj:[] },
    { icon:'📝', title:'Active Recall', body:'Instead of re-reading notes, test yourself. Close your book and try to recall the key concepts from memory.', subj:[] },
    { icon:'⏰', title:'Pomodoro Technique', body:'Study for 25 minutes, then take a 5-minute break. After 4 cycles, take a longer 15–30 minute break.', subj:[] },
    { icon:'🔢', title:'Math: Practice Daily', body:'Mathematics requires daily practice. Spend at least 30 minutes solving problems — even easy ones build fluency.', subj:['math','aptitude'] },
    { icon:'⚛️', title:'Physics: Understand Concepts', body:'Avoid rote memorization. Focus on understanding why a formula works — derive it yourself if possible.', subj:['physics'] },
    { icon:'🧪', title:'Chemistry: Use Mnemonics', body:'For the periodic table and chemical reactions, create acronyms or rhymes to help memorize patterns.', subj:['chemistry'] },
    { icon:'🧬', title:'Biology: Diagrams Help', body:'Draw and label diagrams repeatedly. Visual representation of processes like photosynthesis aids recall.', subj:['biology'] },
    { icon:'📚', title:'English: Read Daily', body:'Reading newspapers, novels, or even articles expands vocabulary and improves grammar instinctively.', subj:['english'] },
    { icon:'🌍', title:'GK: Follow the News', body:'Spend 15 minutes daily reading current affairs. Use apps or newspapers to stay updated.', subj:['gk','affairs'] },
    { icon:'🧠', title:'Logic: Solve Puzzles', body:'Practice with Sudoku, crosswords, and reasoning puzzles daily. They strengthen pattern recognition.', subj:['logic'] },
    { icon:'💻', title:'Coding: Build Projects', body:'Don\'t just read about coding — build small projects. Even a simple to-do app teaches core concepts.', subj:['coding'] },
  ];

  let personalizedTips = '';
  if (weak.length) {
    personalizedTips = `<div class="alert alert-info" style="margin-bottom:16px;"><span>🎯</span><div>Personalized tips based on your weak areas: <strong>${weak.map(w=>w.name).join(', ')}</strong></div></div>`;
  }

  const relevant = tips.filter(t=>t.subj.length===0 || t.subj.some(s=>weak.map(w=>w.id).includes(s)));
  const other = tips.filter(t=>t.subj.length>0 && !t.subj.some(s=>weak.map(w=>w.id).includes(s)));
  const sorted = [...relevant, ...other];

  document.getElementById('tipsContent').innerHTML = personalizedTips + sorted.map(t=>`
    <div class="tip-card" style="margin-bottom:12px;">
      <div class="tip-icon">${t.icon}</div>
      <div><div class="tip-title">${t.title}</div><div class="tip-body">${t.body}</div></div>
    </div>`).join('');
}

// ============================================================
// CONFETTI
// ============================================================
function launchConfetti() {
  const container = document.getElementById('confettiContainer');
  container.innerHTML = '';
  const colors = ['#7c6fff','#34c98f','#f5a623','#e87dc5','#5b9ef8','#f06060'];
  for (let i=0;i<60;i++) {
    const div = document.createElement('div');
    div.className = 'confetti-piece';
    div.style.left = Math.random()*100+'vw';
    div.style.background = colors[Math.floor(Math.random()*colors.length)];
    div.style.animationDuration = (1.5+Math.random()*2)+'s';
    div.style.animationDelay = Math.random()*1+'s';
    div.style.transform = `rotate(${Math.random()*360}deg)`;
    container.appendChild(div);
  }
  setTimeout(()=>container.innerHTML='', 4000);
}

// ============================================================
// INIT
// ============================================================
renderHome();
renderSetup();
