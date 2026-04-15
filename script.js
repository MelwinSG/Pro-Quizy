// ============================================================
// DATA — Question Bank
// ============================================================
const SUBJECTS = [
  { id: 'math', name: 'Mathematics', icon: '', color: '#7c6fff' },
  { id: 'physics', name: 'Physics', icon: '', color: '#5b9ef8' },
  { id: 'chemistry', name: 'Chemistry', icon: '', color: '#34c98f' },
  { id: 'biology', name: 'Biology', icon: '', color: '#e87dc5' },
  { id: 'english', name: 'English', icon: '', color: '#f5a623' },
  { id: 'gk', name: 'General Knowledge', icon: '', color: '#f06060' },
  { id: 'logic', name: 'Logical Reasoning', icon: '', color: '#b45ef8' },
  { id: 'aptitude', name: 'Aptitude', icon: '', color: '#5b9ef8' },
  { id: 'coding', name: 'Coding Basics', icon: '', color: '#34c98f' },
  { id: 'affairs', name: 'Current Affairs', icon: '', color: '#f5a623' },
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
    { q: "The value of lim_{x → 0} sin 5x / x is:", opts: ["0","1","5","∞"], ans: 2, expl: "As x → 0, sin 5x ≈ 5x so the limit is 5.", diff: "hard", topic: "Calculus" },
    { q: "If f(x) = log(sin x), then f'(x) is:", opts: ["tan x","cot x","sec x","csc x"], ans: 1, expl: "d/dx log(sin x) = cos x / sin x = cot x.", diff: "hard", topic: "Calculus" },
    { q: "The value of ∫_0^{π/2} sin^2 x dx is:", opts: ["π/2","π/4","1","0"], ans: 1, expl: "Use sin^2 x = (1-cos2x)/2; integral = π/4.", diff: "hard", topic: "Calculus" },
    { q: "According to Euler's Theorem for homogeneous functions, if u is of degree n, then x∂u/∂x + y∂u/∂y =", opts: ["u","nu","(n-1)u","n^2 u"], ans: 1, expl: "Euler's homogeneous function theorem gives n u.", diff: "hard", topic: "Calculus" },
    { q: "The radius of convergence of the series ∑ x^n / n! is:", opts: ["0","1","e","∞"], ans: 3, expl: "The exponential series has infinite radius of convergence.", diff: "hard", topic: "Series" },
    { q: "The rank of a 3 × 3 identity matrix is:", opts: ["0","1","2","3"], ans: 3, expl: "The identity matrix has full rank equal to its size.", diff: "easy", topic: "Linear Algebra" },
    { q: "If the determinant of a matrix A is zero, the matrix is called:", opts: ["Orthogonal","Singular","Non-singular","Identity"], ans: 1, expl: "A matrix with determinant zero is singular.", diff: "easy", topic: "Linear Algebra" },
    { q: "The eigenvalues of a triangular matrix are:", opts: ["Always 0 and 1","Its diagonal elements","Its trace","Always real"], ans: 1, expl: "Eigenvalues of a triangular matrix equal the diagonal entries.", diff: "medium", topic: "Linear Algebra" },
    { q: "According to the Cayley-Hamilton Theorem, every square matrix satisfies its own:", opts: ["Characteristic equation","Rank equation","Adjoint equation","Trace"], ans: 0, expl: "Cayley-Hamilton says A satisfies its characteristic polynomial.", diff: "hard", topic: "Linear Algebra" },
    { q: "A square matrix A is orthogonal if:", opts: ["A = A^T","A = A^{-1}","AA^T = I","|A| = 0"], ans: 2, expl: "Orthogonal matrices satisfy AA^T = I.", diff: "medium", topic: "Linear Algebra" },
    { q: "The order of the differential equation ((d^2 y)/(dx^2))^3 + ((dy)/(dx))^4 - y = 0 is:", opts: ["4","3","2","1"], ans: 2, expl: "Order is the highest derivative present, here second order.", diff: "hard", topic: "Differential Equations" },
    { q: "The integrating factor (I.F.) for the linear DE dy/dx + P y = Q is:", opts: ["∫P dx","e^{∫P dx}","e^{∫Q dx}","log P"], ans: 1, expl: "The integrating factor for dy/dx + P y = Q is e^{∫P dx}.", diff: "hard", topic: "Differential Equations" },
    { q: "The particular integral of (D^2 + 4)y = e^{3x} is:", opts: ["e^{3x}/13","e^{3x}/5","e^{3x}/7","13 e^{3x}"], ans: 0, expl: "For (D^2+4) e^{3x}, substitute D=3 gives 13, so PI = e^{3x}/13.", diff: "hard", topic: "Differential Equations" },
    { q: "The Laplace transform of L{e^{at}} is:", opts: ["1/(s-a)","1/(s+a)","a/(s^2+a^2)","s/(s^2-a^2)"], ans: 0, expl: "L{e^{at}} = 1/(s-a)", diff: "medium", topic: "Laplace Transform" },
    { q: "The solution to dy/dx = y with y(0)=1 is:", opts: ["y = x","y = e^x","y = log x","y = x^2"], ans: 1, expl: "The solution is y = e^x with initial condition y(0)=1.", diff: "easy", topic: "Differential Equations" },
    { q: "If φ is a scalar field, then ∇×(∇φ) is always:", opts: ["1","φ","0 vector","∇^2 φ"], ans: 2, expl: "The curl of any gradient field is the zero vector.", diff: "hard", topic: "Vector Calculus" },
    { q: "The divergence of the vector field r = x i + y j + z k is:", opts: ["0","1","2","3"], ans: 3, expl: "div r = ∂x/∂x + ∂y/∂y + ∂z/∂z = 3.", diff: "easy", topic: "Vector Calculus" },
    { q: "The Cauchy-Riemann equations in Cartesian form are:", opts: ["u_x = v_y, u_y = -v_x","u_x = -v_y, u_y = v_x","u_x = v_x, u_y = v_y","u_z = v_z"], ans: 0, expl: "The correct CR equations are u_x = v_y and u_y = -v_x.", diff: "hard", topic: "Complex Analysis" },
    { q: "The value of e^{iθ} is equal to:", opts: ["cos θ - i sin θ","cos θ + i sin θ","sin θ + i cos θ","tan θ"], ans: 1, expl: "Euler's formula gives e^{iθ} = cos θ + i sin θ.", diff: "hard", topic: "Complex Analysis" },
    { q: "A function f(z) is analytic at a point if it is:", opts: ["Continuous","Differentiable","Real-valued","Constant"], ans: 1, expl: "Analytic means complex-differentiable in a neighborhood of the point.", diff: "hard", topic: "Complex Analysis" },
    { q: "If P(A)=0.4, P(B)=0.5 and A, B are independent, then P(A ∩ B) is:", opts: ["0.9","0.1","0.2","0.02"], ans: 2, expl: "For independent events P(A∩B)=0.4×0.5=0.2.", diff: "medium", topic: "Probability" },
    { q: "The mean of a Poisson distribution with parameter λ is:", opts: ["√λ","λ^2","λ","1/λ"], ans: 2, expl: "The mean of Poisson(λ) is λ.", diff: "medium", topic: "Probability" },
    { q: "In a Normal distribution, the area under the curve between μ-σ and μ+σ is approximately:", opts: ["50%","68%","95%","99%"], ans: 1, expl: "Approximately 68% of data lies within one standard deviation.", diff: "medium", topic: "Statistics" },
    { q: "The Newton-Raphson formula for finding roots is x_{n+1} =", opts: ["x_n - f(x_n)/f'(x_n)","x_n + f(x_n)/f'(x_n)","f(x_n)/f'(x_n)","x_n - f(x_n)"], ans: 0, expl: "Newton-Raphson uses x_{n+1} = x_n - f(x_n)/f'(x_n).", diff: "hard", topic: "Numerical Methods" },
    { q: "Trapezoidal rule is used for:", opts: ["Solving DEs","Numerical Integration","Finding Roots","Interpolation"], ans: 1, expl: "The trapezoidal rule approximates definite integrals.", diff: "easy", topic: "Numerical Methods" },
    { q: "The number of edges in a complete graph K_n is:", opts: ["n","n^2","n(n-1)/2","n-1"], ans: 2, expl: "A complete graph has n(n-1)/2 edges.", diff: "medium", topic: "Graph Theory" },
    { q: "The value of Γ(1/2) is:", opts: ["1","π","√π","1/2"], ans: 2, expl: "Γ(1/2)=√π.", diff: "hard", topic: "Special Functions" },
    { q: "Which of the following is a tautology?", opts: ["P ∨ ¬P","P ∧ ¬P","P → ¬P","¬P"], ans: 0, expl: "P ∨ ¬P is always true by the law of excluded middle.", diff: "easy", topic: "Logic" },
    { q: "The period of the function sin(2x) is:", opts: ["2π","π","π/2","4π"], ans: 1, expl: "sin(2x) has period π.", diff: "easy", topic: "Trigonometry" },
    { q: "The derivative of tan^{-1}(x) is:", opts: ["1/(1-x^2)","1/(1+x^2)","sec^2 x","1/√(1-x^2)"], ans: 1, expl: "d/dx arctan x = 1/(1+x^2).", diff: "medium", topic: "Calculus" },
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
    { q: "A particle moves in uniform circular motion. The magnitude of its centripetal acceleration is:", opts: ["v/r","v^2/r","rv^2","r/v^2"], ans: 1, expl: "Centripetal acceleration is a = v^2 / r pointing toward the center.", diff: "easy", topic: "Mechanics" },
    { q: "For a damped harmonic oscillator, the amplitude decays exponentially because of:", opts: ["Restoring force","Damping force","Resonance","Inertia"], ans: 1, expl: "Damping force removes energy, causing exponential decay of amplitude.", diff: "medium", topic: "Oscillations" },
    { q: "The de Broglie wavelength of an electron depends on its:", opts: ["Charge","Mass","Momentum","Energy only"], ans: 2, expl: "λ = h/p, so the wavelength depends on momentum.", diff: "medium", topic: "Modern Physics" },
    { q: "Which quantity remains constant for a photon traveling in vacuum?", opts: ["Frequency","Wavelength","Energy","Speed"], ans: 3, expl: "In vacuum, the speed of light c is constant for all photons.", diff: "easy", topic: "Optics" },
    { q: "The work done by a conservative force around a closed path is:", opts: ["Positive","Negative","Zero","Depends on path"], ans: 2, expl: "For conservative forces, the net work around any closed loop is zero.", diff: "easy", topic: "Mechanics" },
    { q: "The magnetic field at the center of a circular current loop of radius r carrying current I is proportional to:", opts: ["I/r","I r","I r^2","I/r^2"], ans: 0, expl: "B at center of loop is μ₀ I / (2 r).", diff: "medium", topic: "Magnetism" },
    { q: "In an ideal gas, increasing temperature at constant volume changes the internal energy by ΔU =:", opts: ["nRT","nC_vΔT","nC_pΔT","PΔV"], ans: 1, expl: "At constant volume for an ideal gas, ΔU = n C_v ΔT.", diff: "medium", topic: "Thermodynamics" },
    { q: "The first law of thermodynamics is a statement of conservation of:", opts: ["Entropy","Mass","Energy","Temperature"], ans: 2, expl: "It states that energy change equals heat added minus work done by the system.", diff: "easy", topic: "Thermodynamics" },
    { q: "A simple pendulum has maximum speed at which displacement?", opts: ["Mean position","Maximum displacement","Quarter period","End points"], ans: 0, expl: "The pendulum’s speed is greatest as it passes through the mean position.", diff: "easy", topic: "Oscillations" },
    { q: "The equivalent capacitance of two identical capacitors C in series is:", opts: ["C/2","2C","C","4C"], ans: 0, expl: "Series capacitance is C_eq = C/2 for two identical capacitors.", diff: "easy", topic: "Electricity" },
    { q: "The energy levels of a hydrogen atom are proportional to:", opts: ["n^2","1/n","1/n^2","n"], ans: 2, expl: "Hydrogen energy levels are E_n ∝ -1/n^2.", diff: "medium", topic: "Quantum Mechanics" },
    { q: "The intensity of light from a point source varies with distance as:", opts: ["1/r","1/r^2","r","r^2"], ans: 1, expl: "Intensity from a point source follows the inverse square law, 1/r^2.", diff: "easy", topic: "Optics" },
    { q: "Ohm's law is not valid for a device whose voltage-current characteristic is:", opts: ["Linear","Nonlinear","Proportional","Zero"], ans: 1, expl: "Ohm's law holds for linear resistive devices; non-linear elements violate it.", diff: "medium", topic: "Electricity" },
    { q: "The magnetic flux through a coil is maximum when the plane of the coil is oriented:", opts: ["Parallel to field","Perpendicular to field","At 45° to field","At 90° to field"], ans: 1, expl: "Flux is maximum when the area vector is aligned with the magnetic field, i.e., coil plane perpendicular to field.", diff: "medium", topic: "Magnetism" },
    { q: "A charge q moves with velocity v in magnetic field B. The magnetic force is zero when v is:", opts: ["Perpendicular to B","Parallel to B","At 45° to B","Zero"], ans: 1, expl: "Magnetic force q v × B is zero when velocity is parallel or antiparallel to the field.", diff: "easy", topic: "Magnetism" },
    { q: "For a blackbody, the peak wavelength of emitted radiation shifts with temperature according to:", opts: ["Stefan-Boltzmann law","Wien's displacement law","Planck's law","Kirchhoff's law"], ans: 1, expl: "Wien's law relates peak wavelength inversely to temperature.", diff: "medium", topic: "Thermodynamics" },
    { q: "The normal mode frequency of a string fixed at both ends depends on the length L as:", opts: ["1/L","1/L^2","L","L^2"], ans: 0, expl: "Fundamental frequency of a string is proportional to 1/L.", diff: "medium", topic: "Waves" },
    { q: "In a series LR circuit, the current lags the voltage by an angle of:", opts: ["0°","90°","less than 90°","greater than 90°"], ans: 2, expl: "For an LR series circuit, current lags voltage by an angle between 0° and 90°.", diff: "medium", topic: "Electricity" },
    { q: "The work function of a metal is the minimum energy needed to:", opts: ["Ionize an atom","Cause photoemission","Heat the metal","Break a bond"], ans: 1, expl: "Photoelectric emission requires photon energy at least equal to the work function.", diff: "easy", topic: "Modern Physics" },
    { q: "A beam of electrons accelerated through a potential difference V has de Broglie wavelength λ =:", opts: ["h/√(2meV)","h/√(meV)","h/2meV","h eV"], ans: 0, expl: "Electron wavelength is λ = h / √(2 m e V) in non-relativistic approximation.", diff: "hard", topic: "Quantum Mechanics" },
    { q: "If a wire of resistance R is stretched to double its length without changing volume, its new resistance becomes:", opts: ["R/2","R","2R","4R"], ans: 3, expl: "Resistance scales as length/area; doubling length halves area, so R' = 4R.", diff: "hard", topic: "Electricity" },
    { q: "The torque on a current loop in a uniform magnetic field is maximum when the plane of the loop is:", opts: ["Parallel to field","Perpendicular to field","At 45° to field","At 90° to field"], ans: 1, expl: "Torque = μB sinθ is maximum when the loop plane is perpendicular, so magnetic moment perpendicular to field.", diff: "medium", topic: "Magnetism" },
    { q: "In special relativity, the quantity that remains invariant for all observers is:", opts: ["Time interval","Length","Mass","Spacetime interval"], ans: 3, expl: "The spacetime interval between events is invariant under Lorentz transformations.", diff: "hard", topic: "Relativity" },
    { q: "Kirchhoff's voltage law states that the sum of potential differences around any closed loop is:", opts: ["Positive","Negative","Zero","Equal to current"], ans: 2, expl: "KVL follows from conservation of energy in electrical circuits.", diff: "easy", topic: "Electricity" },
    { q: "A dielectric inserted into a capacitor with fixed battery connected increases the capacitance and causes charge on plates to:", opts: ["Decrease","Increase","Stay same","Become zero"], ans: 1, expl: "With fixed voltage, adding a dielectric increases capacitance and therefore increases charge stored.", diff: "medium", topic: "Electricity" },
    { q: "The phase velocity of a matter wave may exceed c, but the signal speed is limited by:", opts: ["Phase velocity","Group velocity","Particle velocity","Energy"], ans: 1, expl: "Information travels at the group velocity, not the phase velocity.", diff: "hard", topic: "Modern Physics" },
    { q: "The Poynting vector gives the rate of energy flow per unit area in an electromagnetic wave and is defined as:", opts: ["E × B","E · B","E + B","B × E"], ans: 0, expl: "Poynting vector S = (1/μ₀) E × B for electromagnetic waves.", diff: "hard", topic: "Electromagnetism" },
    { q: "The critical angle for total internal reflection exists when light passes from a medium of refractive index n1 to n2 if:", opts: ["n1 < n2","n1 > n2","n1 = n2","n2 = 0"], ans: 1, expl: "Total internal reflection occurs only when light travels from higher to lower refractive index.", diff: "medium", topic: "Optics" },
    { q: "The moment of inertia of a uniform thin rod of length L about an axis perpendicular to the rod through one end is:", opts: ["1/12 mL^2","1/3 mL^2","1/2 mL^2","2/3 mL^2"], ans: 1, expl: "For a rod about one end, I = (1/3)mL^2.", diff: "medium", topic: "Mechanics" },
    { q: "In an RLC series circuit at resonance, the impedance is equal to:", opts: ["R","0","XL","XC"], ans: 0, expl: "At resonance, inductive and capacitive reactances cancel, leaving impedance R.", diff: "medium", topic: "Electricity" },
    { q: "A neutron and a proton have nearly equal masses. The difference arises mainly from:", opts: ["Charge energy","Strong interaction binding","Quark mass difference","Electromagnetic self-energy"], ans: 2, expl: "The neutron is slightly heavier due to the up/down quark mass difference and strong interaction details.", diff: "hard", topic: "Nuclear Physics" },
    { q: "The refractive index of a medium is the ratio of the speed of light in vacuum to that in the medium. If n = 1.5, the speed in medium is:", opts: ["2.0×10^8 m/s","3.0×10^8 m/s","4.5×10^8 m/s","1.5×10^8 m/s"], ans: 0, expl: "v = c/n = 3×10^8 / 1.5 = 2.0×10^8 m/s.", diff: "easy", topic: "Optics" },
    { q: "The electric potential at a point due to a point charge Q is given by V =:", opts: ["kQ/r^2","kQ/r","kQr","kQ"], ans: 1, expl: "Potential of a point charge is kQ/r.", diff: "easy", topic: "Electricity" },
    { q: "The linear momentum of a photon with energy E is:", opts: ["E/c","E^2/c","E/c^2","c/E"], ans: 0, expl: "Photon momentum is p = E/c.", diff: "medium", topic: "Modern Physics" },
    { q: "A particle under constant force has motion described by a parabolic path if projected. The horizontal motion is:", opts: ["Uniform acceleration","Uniform velocity","Variable acceleration","Rest"], ans: 1, expl: "Neglecting air resistance, horizontal velocity is constant, so motion is uniform.", diff: "easy", topic: "Mechanics" },
    { q: "The angular frequency ω of a simple harmonic oscillator with mass m and spring constant k is:", opts: ["k/m","√(k/m)","m/k","k²/m"], ans: 1, expl: "ω = √(k/m) for a mass-spring system.", diff: "easy", topic: "Oscillations" },
    { q: "A charged particle entering a uniform magnetic field perpendicular to its velocity moves in a:", opts: ["Straight line","Parabola","Circle","Ellipse"], ans: 2, expl: "Magnetic force provides centripetal acceleration, causing circular motion.", diff: "medium", topic: "Magnetism" },
    { q: "The Miller effect in electronics involves an increase in apparent input capacitance due to:", opts: ["Series resistance","Feedback capacitance","Inductive coupling","Thermal noise"], ans: 1, expl: "Miller effect arises from feedback capacitance multiplying the effective input capacitance.", diff: "hard", topic: "Electronics" },
    { q: "The time dilation factor in special relativity depends on γ = 1/√(1-v^2/c^2). For v = 0.6c, γ is approximately:", opts: ["1.25","1.67","2.0","1.15"], ans: 0, expl: "γ = 1/√(1-0.36) = 1/√0.64 = 1.25.", diff: "hard", topic: "Relativity" },
  ],
  chemistry: [
    { q: "The Heisenberg Uncertainty Principle is mathematically expressed as:", opts: ["Δx · Δp ≥ h/(4π)", "E = mc^2", "λ = h/(mv)", "ΔV · ΔP = nRT"], ans: 0, expl: "The uncertainty principle is Δx Δp ≥ ħ/2, often written as ≥ h/(4π).", diff: "medium", topic: "Physical Chemistry" },
    { q: "For a spontaneous process at constant temperature and pressure, ΔG must be:", opts: ["Zero", "Positive", "Negative", "Infinite"], ans: 2, expl: "Spontaneous processes at constant T and P have ΔG < 0.", diff: "easy", topic: "Thermodynamics" },
    { q: "The order of a reaction whose rate constant has units mol^{-1} L s^{-1} is:", opts: ["Zero order", "First order", "Second order", "Third order"], ans: 2, expl: "These units correspond to a second-order reaction.", diff: "medium", topic: "Chemical Kinetics" },
    { q: "According to Arrhenius, a plot of ln k vs 1/T gives a slope of:", opts: ["-Ea/R", "Ea/R", "R/Ea", "-A/R"], ans: 0, expl: "The Arrhenius equation gives ln k = -Ea/(RT) + ln A, so slope = -Ea/R.", diff: "medium", topic: "Chemical Kinetics" },
    { q: "The pH of a 0.001 M HCl solution is:", opts: ["1", "2", "3", "4"], ans: 2, expl: "0.001 M HCl has [H+] = 1×10^-3, so pH = 3.", diff: "easy", topic: "Acids & Bases" },
    { q: "The shape of SF6 according to VSEPR theory is:", opts: ["Tetrahedral", "Trigonal bipyramidal", "Octahedral", "Square planar"], ans: 2, expl: "SF6 has six bonding pairs around S, giving an octahedral shape.", diff: "easy", topic: "Inorganic Chemistry" },
    { q: "Which of the following transition metal ions is diamagnetic?", opts: ["Cu^{2+}", "Fe^{3+}", "Zn^{2+}", "Mn^{2+}"], ans: 2, expl: "Zn2+ has a full d10 configuration and is diamagnetic.", diff: "medium", topic: "Coordination Chemistry" },
    { q: "The coordination number of cobalt in [Co(en)3]^{3+} is:", opts: ["3", "4", "6", "2"], ans: 2, expl: "Each ethylenediamine ligand is bidentate, giving a coordination number of 6.", diff: "medium", topic: "Coordination Chemistry" },
    { q: "For a strong field ligand, the crystal field splitting Δo is:", opts: ["Less than pairing energy (P)", "Greater than pairing energy (P)", "Equal to P", "Zero"], ans: 1, expl: "Strong field ligands produce Δo > P, causing pairing of electrons.", diff: "medium", topic: "Crystal Field Theory" },
    { q: "The hybridisation of central atom in XeF4 is:", opts: ["sp^3", "sp^3d", "sp^3d^2", "dsp^2"], ans: 2, expl: "XeF4 has eight electron pairs around Xe, implying sp^3d^2 hybridisation.", diff: "medium", topic: "Inorganic Chemistry" },
    { q: "The most stable carbocation among the following is:", opts: ["Methyl", "Primary", "Secondary", "Tertiary"], ans: 3, expl: "Tertiary carbocations are stabilized by alkyl groups via hyperconjugation.", diff: "easy", topic: "Organic Chemistry" },
    { q: "The reaction of an alkyl halide with aqueous KOH to form an alcohol is an example of:", opts: ["Nucleophilic substitution", "Electrophilic addition", "Elimination", "Rearrangement"], ans: 0, expl: "Alkyl halide + aqueous KOH undergoes nucleophilic substitution to form an alcohol.", diff: "easy", topic: "Organic Chemistry" },
    { q: "Which compound will undergo the Cannizzaro reaction?", opts: ["Acetaldehyde", "Formaldehyde", "Acetone", "Propionaldehyde"], ans: 1, expl: "Only aldehydes with no α-hydrogen, like formaldehyde, undergo Cannizzaro reaction.", diff: "medium", topic: "Organic Chemistry" },
    { q: "The monomer of natural rubber is:", opts: ["Neoprene", "Isoprene", "Styrene", "Butadiene"], ans: 1, expl: "Natural rubber is primarily polyisoprene.", diff: "easy", topic: "Polymer Chemistry" },
    { q: "Aromaticity is determined by Hückel’s rule, which states the system must have:", opts: ["4n π electrons", "(4n+2) π electrons", "2n π electrons", "6n π electrons"], ans: 1, expl: "Hückel’s rule for aromaticity is (4n+2) π electrons.", diff: "medium", topic: "Organic Chemistry" },
    { q: "The Nernst equation relates the electrode potential to:", opts: ["Temperature only", "Concentration of ions", "Pressure only", "Volume of solution"], ans: 1, expl: "The Nernst equation shows how potential depends on ion concentration and temperature.", diff: "medium", topic: "Electrochemistry" },
    { q: "Which law states that molar conductivity at infinite dilution is the sum of ionic conductivities?", opts: ["Raoult's Law", "Kohlrausch's Law", "Faraday's Law", "Henry's Law"], ans: 1, expl: "Kohlrausch's Law states molar conductivity at infinite dilution equals the sum of individual ionic conductivities.", diff: "medium", topic: "Electrochemistry" },
    { q: "In a Galvanic cell, oxidation occurs at the:", opts: ["Anode", "Cathode", "Salt bridge", "Electrolyte"], ans: 0, expl: "Oxidation occurs at the anode in a galvanic cell.", diff: "easy", topic: "Electrochemistry" },
    { q: "The unit of specific conductance is:", opts: ["Ohm · cm", "Ohm^{-1} · cm^{-1}", "Ohm · cm^{-1}", "S · cm^2 · mol^{-1}"], ans: 1, expl: "Specific conductance is measured in siemens per centimeter, or Ohm^{-1} cm^{-1}.", diff: "medium", topic: "Electrochemistry" },
    { q: "Colligative properties depend only on the:", opts: ["Nature of solute", "Number of solute particles", "Nature of solvent", "Temperature"], ans: 1, expl: "Colligative properties depend only on the number of solute particles, not their identity.", diff: "easy", topic: "Solutions" },
    { q: "Beer-Lambert Law relates absorbance to:", opts: ["Path length and concentration", "Wavelength and frequency", "Temperature", "Refractive index"], ans: 0, expl: "Beer-Lambert law states absorbance is proportional to path length and concentration.", diff: "easy", topic: "Analytical Chemistry" },
    { q: "In IR spectroscopy, the functional group region generally lies between:", opts: ["4000-1500 cm^{-1}", "1500-600 cm^{-1}", "100-10 cm^{-1}", "10000-4000 cm^{-1}"], ans: 0, expl: "The functional group region in IR is typically 4000-1500 cm^{-1}.", diff: "medium", topic: "Spectroscopy" },
    { q: "The reference compound used in NMR spectroscopy is:", opts: ["CDCl_3", "D_2O", "TMS", "Benzene"], ans: 2, expl: "Tetramethylsilane (TMS) is commonly used as the NMR reference.", diff: "easy", topic: "Spectroscopy" },
    { q: "The fingerprint region in IR spectroscopy is used for:", opts: ["Identifying functional groups", "Confirming identity of a compound", "Determining molecular weight", "Checking purity"], ans: 1, expl: "The fingerprint region is used to confirm the identity of a compound.", diff: "medium", topic: "Spectroscopy" },
    { q: "Auxochromes are groups that:", opts: ["Give color to a compound", "Shift the absorption max to a longer wavelength", "Stop light absorption", "Absorb UV light only"], ans: 1, expl: "Auxochromes shift the absorption maximum to a longer wavelength.", diff: "medium", topic: "Organic Chemistry" },
    { q: "Which of the following is a condensation polymer?", opts: ["Polyethylene", "PVC", "Nylon-6,6", "Polystyrene"], ans: 2, expl: "Nylon-6,6 is formed by condensation polymerization.", diff: "medium", topic: "Polymer Chemistry" },
    { q: "The primary pollutant responsible for acid rain is:", opts: ["CO", "CH_4", "SO_2", "CO_2"], ans: 2, expl: "SO_2 is a major acid rain precursor.", diff: "easy", topic: "Environmental Chemistry" },
    { q: "BOD measures:", opts: ["Organic matter in water", "Oxygen in the atmosphere", "Nitrogen in soil", "Industrial noise"], ans: 0, expl: "BOD measures the amount of organic matter in water by oxygen demand.", diff: "medium", topic: "Environmental Chemistry" },
    { q: "Which greenhouse gas has the highest global warming potential per molecule?", opts: ["CO_2", "CH_4", "CFCs", "N_2O"], ans: 2, expl: "CFCs have very high global warming potentials per molecule.", diff: "hard", topic: "Environmental Chemistry" },
    { q: "The Ziegler-Natta catalyst is used in the synthesis of:", opts: ["Polyesters", "Polyethylene", "Nylon", "Bakelite"], ans: 1, expl: "Ziegler-Natta catalysts are used to polymerize ethylene into polyethylene.", diff: "medium", topic: "Polymer Chemistry" },
  ],
  biology: [
    { q: "Which organelle is primarily responsible for ATP production?", opts: ["Nucleus","Ribosome","Mitochondria","Golgi apparatus"], ans: 2, expl: "Mitochondria are the primary site of ATP production.", diff: "easy", topic: "Cell Biology" },
    { q: "The fluid mosaic model of the cell membrane was proposed by:", opts: ["Watson & Crick","Singer & Nicolson","Darwin & Wallace","Mendel"], ans: 1, expl: "Singer and Nicolson proposed the fluid mosaic model.", diff: "medium", topic: "Cell Biology" },
    { q: "Which phase of mitosis involves chromosome alignment at the equator?", opts: ["Prophase","Metaphase","Anaphase","Telophase"], ans: 1, expl: "Chromosomes align at the metaphase plate during metaphase.", diff: "easy", topic: "Cell Biology" },
    { q: "What is the function of tRNA?", opts: ["DNA replication","Protein transport","Amino acid transfer","Lipid synthesis"], ans: 2, expl: "tRNA transfers amino acids to the ribosome.", diff: "easy", topic: "Molecular Biology" },
    { q: "Which enzyme unwinds DNA during replication?", opts: ["Ligase","Helicase","Polymerase","Primase"], ans: 1, expl: "Helicase unwinds the DNA double helix.", diff: "medium", topic: "Molecular Biology" },
    { q: "The basic unit of heredity is:", opts: ["Chromosome","Gene","DNA","RNA"], ans: 1, expl: "A gene is the basic unit of heredity.", diff: "easy", topic: "Genetics" },
    { q: "Which nitrogenous base is not found in RNA?", opts: ["Adenine","Guanine","Thymine","Cytosine"], ans: 2, expl: "RNA contains uracil instead of thymine.", diff: "easy", topic: "Genetics" },
    { q: "Hardy-Weinberg equilibrium assumes:", opts: ["Mutation","Natural selection","Random mating","Genetic drift"], ans: 2, expl: "Random mating is required for Hardy-Weinberg equilibrium.", diff: "medium", topic: "Evolution" },
    { q: "Which process produces genetically identical cells?", opts: ["Meiosis","Mitosis","Fertilization","Crossing over"], ans: 1, expl: "Mitosis produces genetically identical daughter cells.", diff: "easy", topic: "Cell Biology" },
    { q: "What is the main product of photosynthesis?", opts: ["Oxygen","Glucose","Carbon dioxide","ATP"], ans: 1, expl: "Glucose is the main organic product of photosynthesis.", diff: "easy", topic: "Plant Biology" },
    { q: "Which cycle occurs in the mitochondria?", opts: ["Calvin cycle","Krebs cycle","Glycolysis","Light reaction"], ans: 1, expl: "The Krebs cycle takes place in the mitochondria.", diff: "medium", topic: "Cellular Respiration" },
    { q: "Which hormone regulates blood glucose levels?", opts: ["Thyroxine","Insulin","Adrenaline","Estrogen"], ans: 1, expl: "Insulin lowers blood glucose by promoting uptake into cells.", diff: "easy", topic: "Human Biology" },
    { q: "The nephron is the functional unit of:", opts: ["Liver","Kidney","Lung","Heart"], ans: 1, expl: "The nephron is the functional unit of the kidney.", diff: "easy", topic: "Human Biology" },
    { q: "Which blood cells are responsible for immunity?", opts: ["RBCs","Platelets","WBCs","Plasma"], ans: 2, expl: "White blood cells defend the body against infection.", diff: "easy", topic: "Immunology" },
    { q: "Which part of the brain controls balance?", opts: ["Cerebrum","Medulla","Cerebellum","Hypothalamus"], ans: 2, expl: "The cerebellum coordinates balance and movement.", diff: "medium", topic: "Neurobiology" },
    { q: "What is the genetic material in most organisms?", opts: ["RNA","DNA","Protein","Lipid"], ans: 1, expl: "DNA stores the genetic information in most organisms.", diff: "easy", topic: "Genetics" },
    { q: "Which type of RNA carries genetic information from DNA to ribosome?", opts: ["tRNA","rRNA","mRNA","snRNA"], ans: 2, expl: "mRNA carries the genetic code from DNA to ribosomes.", diff: "easy", topic: "Molecular Biology" },
    { q: "Which bond links amino acids in proteins?", opts: ["Glycosidic bond","Peptide bond","Hydrogen bond","Ionic bond"], ans: 1, expl: "Peptide bonds link amino acids in a protein chain.", diff: "easy", topic: "Biochemistry" },
    { q: "Which enzyme joins Okazaki fragments?", opts: ["Helicase","DNA ligase","Polymerase","Topoisomerase"], ans: 1, expl: "DNA ligase seals nicks between Okazaki fragments.", diff: "medium", topic: "Molecular Biology" },
    { q: "Which kingdom includes multicellular autotrophs?", opts: ["Fungi","Protista","Plantae","Monera"], ans: 2, expl: "Plantae includes multicellular autotrophs.", diff: "easy", topic: "Taxonomy" },
    { q: "Which gas is released during photosynthesis?", opts: ["CO₂","O₂","N₂","H₂"], ans: 1, expl: "Plants release oxygen during photosynthesis.", diff: "easy", topic: "Plant Biology" },
    { q: "Which structure is responsible for protein synthesis?", opts: ["Lysosome","Ribosome","Vacuole","Peroxisome"], ans: 1, expl: "Ribosomes assemble proteins from amino acids.", diff: "easy", topic: "Molecular Biology" },
    { q: "Which vitamin is synthesized in skin?", opts: ["Vitamin A","Vitamin B","Vitamin C","Vitamin D"], ans: 3, expl: "Vitamin D is synthesized in the skin upon UV exposure.", diff: "medium", topic: "Human Biology" },
    { q: "Which process converts glucose into pyruvate?", opts: ["Krebs cycle","Glycolysis","Fermentation","Oxidative phosphorylation"], ans: 1, expl: "Glycolysis breaks glucose into pyruvate.", diff: "easy", topic: "Cellular Respiration" },
    { q: "Which blood group is universal donor?", opts: ["A","B","AB","O"], ans: 3, expl: "O negative is the universal donor blood type.", diff: "easy", topic: "Human Biology" },
    { q: "Which ecological level includes all ecosystems on Earth?", opts: ["Population","Community","Biosphere","Habitat"], ans: 2, expl: "The biosphere is the global ecological system that includes all ecosystems.", diff: "medium", topic: "Ecology" },
    { q: "Which molecule stores genetic information?", opts: ["Protein","Lipid","DNA","Carbohydrate"], ans: 2, expl: "DNA is the main molecule that stores genetic information.", diff: "easy", topic: "Genetics" },
    { q: "Which type of immunity is acquired after vaccination?", opts: ["Innate immunity","Passive immunity","Active immunity","Natural immunity"], ans: 2, expl: "Vaccination induces active immunity by stimulating the immune system.", diff: "medium", topic: "Immunology" },
    { q: "Which organelle contains digestive enzymes?", opts: ["Ribosome","Lysosome","Nucleus","Golgi body"], ans: 1, expl: "Lysosomes contain enzymes that digest cellular waste.", diff: "easy", topic: "Cell Biology" },
    { q: "Which scientist is known as the father of genetics?", opts: ["Darwin","Mendel","Lamarck","Watson"], ans: 1, expl: "Gregor Mendel is known as the father of genetics.", diff: "medium", topic: "Genetics" },
  ],
  english: [
    { q: "Choose the correct synonym of 'Abundant':", opts: ["Scarce","Plenty","Rare","Empty"], ans: 1, expl: "Abundant means plentiful or plenty.", diff: "easy", topic: "Vocabulary" },
    { q: "Choose the correct antonym of 'Transparent':", opts: ["Clear","Opaque","Bright","Light"], ans: 1, expl: "Opaque is the opposite of transparent.", diff: "easy", topic: "Vocabulary" },
    { q: "Identify the correct sentence:", opts: ["She don't like coffee.", "She doesn't likes coffee.", "She doesn't like coffee.", "She not like coffee."], ans: 2, expl: "The correct sentence uses 'doesn't like' for third-person singular.", diff: "easy", topic: "Grammar" },
    { q: "He _____ to the market yesterday.", opts: ["go","goes","went","going"], ans: 2, expl: "Use the past tense 'went' for an action that happened yesterday.", diff: "easy", topic: "Grammar" },
    { q: "_____ apple a day keeps the doctor away.", opts: ["A","An","The","No article"], ans: 1, expl: "'An' is used before a vowel sound like 'apple.'", diff: "easy", topic: "Grammar" },
    { q: "Identify the part of speech of 'quickly':", opts: ["Noun","Verb","Adjective","Adverb"], ans: 3, expl: "Quickly is an adverb describing how something is done.", diff: "easy", topic: "Grammar" },
    { q: "Choose the correct passive voice: 'She wrote a letter.'", opts: ["A letter writes by her.", "A letter was written by her.", "A letter is written by her.", "A letter wrote by her."], ans: 1, expl: "The correct passive form is 'A letter was written by her.'", diff: "medium", topic: "Grammar" },
    { q: "Choose the correct spelling:", opts: ["Recieve","Receive","Receeve","Receve"], ans: 1, expl: "The correct spelling is 'Receive.'", diff: "easy", topic: "Spelling" },
    { q: "They have been working _____ morning.", opts: ["since","for","from","by"], ans: 0, expl: "Use 'since morning' to indicate the starting point in time.", diff: "medium", topic: "Grammar" },
    { q: "Choose the correct meaning of the idiom 'Break the ice':", opts: ["To shatter ice","To start a conversation","To feel cold","To end a meeting"], ans: 1, expl: "'Break the ice' means to start a conversation or ease tension.", diff: "easy", topic: "Idioms" },
    { q: "Choose the correct sentence:", opts: ["Each of the students have a book.", "Each of the students has a book.", "Each of the student have a book.", "Each students has a book."], ans: 1, expl: "Each of the students has a book is grammatically correct.", diff: "medium", topic: "Grammar" },
    { q: "Identify the tense: 'She is reading a book.'", opts: ["Past","Present continuous","Future","Present perfect"], ans: 1, expl: "This sentence is in the present continuous tense.", diff: "easy", topic: "Grammar" },
    { q: "He is fond _____ music.", opts: ["in","on","of","for"], ans: 2, expl: "The correct preposition is 'fond of.'", diff: "easy", topic: "Grammar" },
    { q: "Choose the correct indirect speech: He said, 'I am tired.'", opts: ["He said he is tired.", "He said he was tired.", "He says he was tired.", "He said he tired."], ans: 1, expl: "In reported speech, 'am' changes to 'was.'", diff: "medium", topic: "Grammar" },
    { q: "Choose the correct synonym of 'Rapid':", opts: ["Slow","Fast","Weak","Small"], ans: 1, expl: "Rapid means fast.", diff: "easy", topic: "Vocabulary" },
    { q: "Identify the error: 'She did not knew the answer.'", opts: ["She","did not","knew","answer"], ans: 2, expl: "The correct form is 'did not know,' so 'knew' is wrong.", diff: "medium", topic: "Grammar" },
    { q: "If I _____ rich, I would travel the world.", opts: ["am","was","were","be"], ans: 2, expl: "Use 'were' in the subjunctive mood for hypothetical statements.", diff: "medium", topic: "Grammar" },
    { q: "He _____ finished his work.", opts: ["have","has","having","had been"], ans: 1, expl: "The correct present perfect form is 'has finished.'", diff: "easy", topic: "Grammar" },
    { q: "Choose the antonym of 'Optimistic':", opts: ["Hopeful","Cheerful","Pessimistic","Positive"], ans: 2, expl: "Pessimistic is the opposite of optimistic.", diff: "easy", topic: "Vocabulary" },
    { q: "Identify the figure of speech: 'The wind whispered.'", opts: ["Simile","Metaphor","Personification","Hyperbole"], ans: 2, expl: "This is personification because wind is given a human quality.", diff: "medium", topic: "Literature" },
    { q: "I will come _____ you call me.", opts: ["unless","if","though","because"], ans: 1, expl: "Use 'if' to express a condition.", diff: "easy", topic: "Grammar" },
    { q: "Choose the correct plural form of 'Child':", opts: ["Childs","Children","Childes","Childrens"], ans: 1, expl: "The plural of child is children.", diff: "easy", topic: "Grammar" },
    { q: "He is very good _____ mathematics.", opts: ["in","at","on","for"], ans: 1, expl: "The correct preposition is 'good at.'", diff: "easy", topic: "Grammar" },
    { q: "Identify the sentence type: 'Close the door.'", opts: ["Interrogative","Declarative","Imperative","Exclamatory"], ans: 2, expl: "This is an imperative sentence giving a command.", diff: "easy", topic: "Grammar" },
    { q: "You _____ obey your parents.", opts: ["may","must","could","might"], ans: 1, expl: "'Must' is the correct modal to indicate obligation.", diff: "easy", topic: "Grammar" },
    { q: "She is taller _____ her sister.", opts: ["than","then","from","as"], ans: 0, expl: "Use 'than' in comparative sentences.", diff: "easy", topic: "Grammar" },
    { q: "Choose the correct synonym of 'Ancient':", opts: ["Modern","Old","New","Recent"], ans: 1, expl: "Ancient means old.", diff: "easy", topic: "Vocabulary" },
    { q: "Neither Ram nor Shyam _____ present.", opts: ["are","were","is","have"], ans: 2, expl: "Use 'is' with neither/nor subjects.", diff: "medium", topic: "Grammar" },
    { q: "Identify the correct sentence:", opts: ["He go to school daily.", "He goes to school daily.", "He going to school daily.", "He gone to school daily."], ans: 1, expl: "The correct simple present form is 'He goes to school daily.'", diff: "easy", topic: "Grammar" },
    { q: "Choose the correct meaning of the idiom 'Once in a blue moon':", opts: ["Frequently","Rarely","Always","Never"], ans: 1, expl: "The idiom means rarely.", diff: "easy", topic: "Idioms" },
  ],
  gk: [
    { q: "Who was the first Governor-General of independent India?", opts: ["Lord Mountbatten","C. Rajagopalachari","Dr. Rajendra Prasad","Jawaharlal Nehru"], ans: 0, expl: "Louis Mountbatten served as the first Governor-General of independent India.", diff: "medium", topic: "History" },
    { q: "The 'Indus Valley Civilization' belonged to which age?", opts: ["Paleolithic","Neolithic","Bronze Age","Iron Age"], ans: 2, expl: "The Indus Valley Civilization developed during the Bronze Age.", diff: "easy", topic: "History" },
    { q: "The famous Sun Temple is located in which Indian state?", opts: ["Odisha","Gujarat","Karnataka","Tamil Nadu"], ans: 0, expl: "The Sun Temple at Konark is located in Odisha.", diff: "medium", topic: "Culture" },
    { q: "Who is known as the 'Iron Man of India'?", opts: ["Bhagat Singh","Subhas Chandra Bose","Sardar Vallabhbhai Patel","Lal Bahadur Shastri"], ans: 2, expl: "Sardar Vallabhbhai Patel is known as the Iron Man of India.", diff: "easy", topic: "History" },
    { q: "The classical dance form 'Kathakali' originated in which state?", opts: ["Andhra Pradesh","Tamil Nadu","Kerala","Karnataka"], ans: 2, expl: "Kathakali originated in Kerala.", diff: "easy", topic: "Culture" },
    { q: "Which Article of the Indian Constitution deals with the 'Right to Equality'?", opts: ["Article 14","Article 19","Article 21","Article 32"], ans: 0, expl: "Article 14 provides for equality before the law and equal protection of the laws.", diff: "medium", topic: "Polity" },
    { q: "The 'Fundamental Duties' were added to the Constitution by which Amendment?", opts: ["42nd Amendment","44th Amendment","52nd Amendment","73rd Amendment"], ans: 0, expl: "The 42nd Amendment added Fundamental Duties to the Constitution.", diff: "medium", topic: "Polity" },
    { q: "Who is the ex-officio Chairman of the Rajya Sabha?", opts: ["President","Vice-President","Prime Minister","Speaker"], ans: 1, expl: "The Vice-President of India is the ex-officio Chairman of the Rajya Sabha.", diff: "medium", topic: "Polity" },
    { q: "The concept of 'Panchayati Raj' was first adopted by which state?", opts: ["Rajasthan","Maharashtra","Gujarat","Uttar Pradesh"], ans: 0, expl: "Rajasthan was the first state to implement Panchayati Raj.", diff: "medium", topic: "Polity" },
    { q: "What is the maximum gap allowed between two sessions of Parliament?", opts: ["3 months","4 months","6 months","1 year"], ans: 2, expl: "Parliament cannot remain adjourned for more than six months between sessions.", diff: "medium", topic: "Polity" },
    { q: "Which is the longest river in the world?", opts: ["Amazon","Nile","Yangtze","Mississippi"], ans: 1, expl: "The Nile is generally considered the longest river in the world.", diff: "easy", topic: "Geography" },
    { q: "The 'Equinox' occurs when the sun is vertically above the:", opts: ["Tropic of Cancer","Tropic of Capricorn","Poles","Equator"], ans: 3, expl: "Equinoxes occur when the sun is directly above the Equator.", diff: "easy", topic: "Geography" },
    { q: "Which planet is known as the 'Earth's Twin'?", opts: ["Mars","Venus","Neptune","Saturn"], ans: 1, expl: "Venus is often called Earth's twin because of its similar size and proximity.", diff: "easy", topic: "Science" },
    { q: "The 'Silent Valley National Park' is located in which Indian state?", opts: ["Kerala","Uttarakhand","Himachal Pradesh","Assam"], ans: 0, expl: "Silent Valley National Park is located in Kerala.", diff: "medium", topic: "Environment" },
    { q: "Which layer of the atmosphere contains the Ozone Layer?", opts: ["Troposphere","Stratosphere","Mesosphere","Exosphere"], ans: 1, expl: "The Ozone Layer is located in the stratosphere.", diff: "easy", topic: "Science" },
    { q: "Which gas is used in fire extinguishers?", opts: ["Oxygen","Nitrogen","Carbon dioxide","Helium"], ans: 2, expl: "Carbon dioxide is commonly used in fire extinguishers.", diff: "easy", topic: "Science" },
    { q: "What is the chemical name of Vitamin C?", opts: ["Retinol","Ascorbic Acid","Calciferol","Tocopherol"], ans: 1, expl: "Vitamin C is also called ascorbic acid.", diff: "easy", topic: "Science" },
    { q: "The first artificial satellite launched by India was:", opts: ["Bhaskara","Rohini","Aryabhata","INSAT-1A"], ans: 2, expl: "Aryabhata was India's first artificial satellite.", diff: "medium", topic: "Space" },
    { q: "Who discovered the 'Law of Universal Gravitation'?", opts: ["Albert Einstein","Isaac Newton","Galileo Galilei","Stephen Hawking"], ans: 1, expl: "Isaac Newton formulated the law of universal gravitation.", diff: "easy", topic: "Science" },
    { q: "Which organ in the human body is responsible for filtering blood?", opts: ["Heart","Lungs","Kidneys","Liver"], ans: 2, expl: "Kidneys filter waste products from the blood.", diff: "easy", topic: "Biology" },
    { q: "Where is the headquarters of the World Health Organization (WHO) located?", opts: ["New York","Paris","Geneva","Rome"], ans: 2, expl: "WHO headquarters is located in Geneva.", diff: "easy", topic: "International" },
    { q: "The 'Great Depression' started in which year?", opts: ["1914","1929","1939","1945"], ans: 1, expl: "The Great Depression began in 1929.", diff: "medium", topic: "History" },
    { q: "Which organization is known as the 'Lender of the Last Resort' in India?", opts: ["SBI","NABARD","RBI","SEBI"], ans: 2, expl: "The Reserve Bank of India is the lender of last resort.", diff: "medium", topic: "Economy" },
    { q: "The 'Nobel Prize' is not given in which of the following fields?", opts: ["Physics","Mathematics","Economics","Peace"], ans: 1, expl: "There is no Nobel Prize for Mathematics.", diff: "easy", topic: "International" },
    { q: "Which country is the largest producer of tea in the world?", opts: ["India","China","Sri Lanka","Kenya"], ans: 1, expl: "China is the largest producer of tea worldwide.", diff: "medium", topic: "Economy" },
    { q: "Who wrote the book 'Wings of Fire'?", opts: ["APJ Abdul Kalam","Arundhati Roy","Vikram Seth","Khushwant Singh"], ans: 0, expl: "Wings of Fire was written by APJ Abdul Kalam.", diff: "easy", topic: "Literature" },
    { q: "The 'Dada Saheb Phalke Award' is associated with which field?", opts: ["Literature","Cinema","Sports","Social Work"], ans: 1, expl: "The Dada Saheb Phalke Award is India's highest film honor.", diff: "medium", topic: "Culture" },
    { q: "In which year did the First World War end?", opts: ["1914","1916","1918","1920"], ans: 2, expl: "The First World War ended in 1918.", diff: "easy", topic: "History" },
    { q: "Which is the largest desert in the world?", opts: ["Sahara","Gobi","Antarctic","Thar"], ans: 2, expl: "The Antarctic Desert is the largest in the world.", diff: "medium", topic: "Geography" },
    { q: "What is the currency of South Korea?", opts: ["Yen","Won","Ringgit","Baht"], ans: 1, expl: "The South Korean currency is the won.", diff: "easy", topic: "Economy" },
  ],
  logic: [
    { q: "Find the missing number in the series: 7, 10, 16, 28, 52, ?", opts: ["88","96","100","104"], ans: 2, expl: "Difference pattern doubles: 3,6,12,24, so next term is 52+48 = 100.", diff: "medium", topic: "Series" },
    { q: "In a certain code, 'PETER' is written as 'SGWHT'. How is 'ROBIN' written?", opts: ["UQDLS","UREMS","TQCKS","UPDLR"], ans: 1, expl: "This follows the coded answer provided in the key.", diff: "hard", topic: "Coding-Decoding" },
    { q: "Find the missing term: SCD, TEF, UGH, ____, WKL", opts: ["VIJ","VJI","CMN","UJI"], ans: 0, expl: "Letters advance sequentially: S→T→U→V→W, C→E→G→I→K, D→F→H→J→L.", diff: "medium", topic: "Coding-Decoding" },
    { q: "If 'LIGHT' is coded as 75, how is 'NIGHT' coded?", opts: ["77","78","80","82"], ans: 0, expl: "This uses the coded answer provided in the key.", diff: "medium", topic: "Coding-Decoding" },
    { q: "Which number replaces the question mark? 121, 144, 169, 196, ?", opts: ["210","225","256","289"], ans: 1, expl: "These are consecutive perfect squares: 11^2,12^2,13^2,14^2, so next is 15^2 = 225.", diff: "easy", topic: "Number Series" },
    { q: "Pointing to a photograph, a man said, 'I have no brother or sister, but that man's father is my father's son.' Whose photograph was it?", opts: ["His own","His son's","His father's","His nephew's"], ans: 1, expl: "The man is referring to his son.", diff: "medium", topic: "Blood Relations" },
    { q: "A man walks 5 km East, turns right and walks 4 km, then turns left and walks 5 km. In which direction is he now from the starting point?", opts: ["South-East","North-East","South","West"], ans: 0, expl: "He ends up to the south-east of the start point.", diff: "easy", topic: "Directions" },
    { q: "If A + B means A is the mother of B; A - B means A is the brother of B; A × B means A is the father of B. Which of the following means P is the maternal uncle of Q?", opts: ["Q - N × M + P","P - M + N × Q","P - M + Q","M + P - Q"], ans: 1, expl: "This is the expression denoted by the provided answer key.", diff: "hard", topic: "Blood Relations" },
    { q: "A person is facing North-West. He turns 90° clockwise, then 180° anticlockwise. Which direction is he facing now?", opts: ["South-East","South-West","North-East","South"], ans: 1, expl: "North-West → North-East → South-West after the two turns.", diff: "medium", topic: "Directions" },
    { q: "Six people P, Q, R, S, T, and U are sitting in a circle. R is between P and Q. T is to the left of U. S is to the right of P. Who is sitting opposite to R?", opts: ["S","T","U","Cannot be determined"], ans: 2, expl: "Based on the seating arrangement, U sits opposite R.", diff: "medium", topic: "Seating Arrangement" },
    { q: "Statements: All Poets are Daydreamers. All Painters are Daydreamers. Conclusions: I. All Painters are Poets. II. Some Daydreamers are not Painters.", opts: ["Only I follows","Only II follows","Both follow","Neither follows"], ans: 3, expl: "Neither conclusion must necessarily follow from the given statements.", diff: "hard", topic: "Syllogism" },
    { q: "Statements: Some Mangoes are Yellow. Some Tiffin-boxes are Mangoes. Conclusions: I. Some Mangoes are Green. II. Tiffin-boxes are Yellow.", opts: ["Only I follows","Only II follows","Both follow","Neither follows"], ans: 3, expl: "Neither conclusion can be drawn with certainty.", diff: "hard", topic: "Syllogism" },
    { q: "Which diagram correctly represents: Mammals, Cows, Crows?", opts: ["Two separate circles inside a large one","One circle inside another, and a third separate","Three intersecting circles","Three separate circles"], ans: 1, expl: "Cows are mammals and crows are separate, so one circle inside another plus a separate circle.", diff: "medium", topic: "Venn Diagrams" },
    { q: "In a group of 50 students, 30 like Tea, 25 like Coffee, and 10 like both. How many like neither?", opts: ["5","10","15","0"], ans: 0, expl: "30 + 25 - 10 = 45 like tea or coffee, so 5 like neither.", diff: "easy", topic: "Venn Diagrams" },
    { q: "Statements: No Paper is Pen. Some Paper is Eraser. Conclusions: I. Some Eraser is not Pen. II. Some Pen is Eraser.", opts: ["Only I follows","Only II follows","Both follow","Neither follows"], ans: 0, expl: "Only conclusion I follows.", diff: "hard", topic: "Syllogism" },
    { q: "In a row of boys, Jeevan is 7th from the start and 11th from the end. How many boys are in the row?", opts: ["17","18","19","20"], ans: 0, expl: "Total = 7 + 11 - 1 = 17.", diff: "easy", topic: "Seating Arrangement" },
    { q: "If Tuesday falls on the 4th of a month, what day will it be on the 24th?", opts: ["Monday","Tuesday","Wednesday","Sunday"], ans: 0, expl: "20 days later is 6 days ahead, so Tuesday + 6 = Monday.", diff: "easy", topic: "Calendar" },
    { q: "Assertion (A): Leaves are green. Reason (R): Chlorophyll is present in leaves.", opts: ["Both A and R are true, R is correct explanation","Both true, R is not explanation","A true, R false","A false, R true"], ans: 0, expl: "Both statements are true and R correctly explains A.", diff: "medium", topic: "Assertion-Reason" },
    { q: "Find the odd one out:", opts: ["Keyboard","Mouse","Monitor","Stylus"], ans: 2, expl: "Monitor is the only output device; the others are input devices.", diff: "easy", topic: "Odd One Out" },
    { q: "If '+' means '×', '-' means '÷', '×' means '-' and '÷' means '+', find: 10 + 5 - 2 ÷ 4.", opts: ["25","29","31","15"], ans: 1, expl: "The expression becomes 10×5 ÷2 +4 = 50÷2+4 = 29.", diff: "medium", topic: "Symbolic Reasoning" },
    { q: "Is X an even number? I. X+3 is odd. II. 2X is even.", opts: ["I alone is sufficient","II alone is sufficient","Both I and II together","Neither"], ans: 0, expl: "Statement I alone is sufficient; II is true for all integers and doesn't determine parity.", diff: "hard", topic: "Data Sufficiency" },
    { q: "Five people A, B, C, D, E are of different heights. A is taller than C but shorter than B. D is shorter than C. Who is the tallest?", opts: ["B","E","Cannot be determined","A"], ans: 2, expl: "E's height is unknown, so the tallest cannot be determined.", diff: "medium", topic: "Analytical Reasoning" },
    { q: "If 1st January 2024 was a Monday, what day was 1st January 2025?", opts: ["Tuesday","Wednesday","Thursday","Monday"], ans: 1, expl: "2024 is a leap year, so the day advances by 2 to Wednesday.", diff: "easy", topic: "Calendar" },
    { q: "A clock shows 3:00. If the minute hand points North-East, in which direction does the hour hand point?", opts: ["South-East","North-West","South-West","North"], ans: 0, expl: "If 12 is North-East, then 3 o'clock points South-East.", diff: "medium", topic: "Directions" },
    { q: "Which word cannot be formed from 'INDEPENDENT'?", opts: ["DEEP","PENT","DEPEND","DENTIST"], ans: 3, expl: "DENTIST requires an S, which is not available in INDEPENDENT.", diff: "medium", topic: "Word Formation" },
    { q: "What number should come in the blank? 3, 8, 15, 24, 35, ___", opts: ["44","46","48","50"], ans: 2, expl: "Differences are 5,7,9,11,13, so next term is 35+13 = 48.", diff: "medium", topic: "Number Series" },
    { q: "'Mountain' is to 'Valley' as 'Genius' is to:", opts: ["Brain","Idiot","Thinker","Smart"], ans: 1, expl: "They are opposites, like mountain and valley.", diff: "easy", topic: "Analogies" },
    { q: "Choose the word that is necessary for 'School':", opts: ["Student","Library","Playground","Uniform"], ans: 0, expl: "A school needs students; the other items are not strictly necessary.", diff: "easy", topic: "Analogy" },
    { q: "Find the missing number in the matrix: [3, 6, 9], [5, 10, 15], [4, 8, ?]", opts: ["10","12","14","16"], ans: 1, expl: "Each row multiplies by 3, so 4×3 = 12.", diff: "easy", topic: "Matrix" },
    { q: "If 3^x = 81, what is the value of x?", opts: ["3","4","5","6"], ans: 1, expl: "81 = 3^4.", diff: "easy", topic: "Exponents" },
  ],
  aptitude: [
    { q: "What is 20% of 250?", opts: ["40","45","50","60"], ans: 2, expl: "20% of 250 = 0.2 × 250 = 50.", diff: "easy", topic: "Percentages" },
    { q: "Simplify: ( 15 + 5 × 2 )", opts: ["40","25","20","30"], ans: 1, expl: "5×2 = 10, then 15+10 = 25.", diff: "easy", topic: "BODMAS" },
    { q: "If ( x = 10 ), find ( 2x + 5 )", opts: ["20","25","30","15"], ans: 1, expl: "2×10 + 5 = 25.", diff: "easy", topic: "Algebra" },
    { q: "Find the average of 10, 20, 30", opts: ["15","20","25","30"], ans: 1, expl: "Average = (10+20+30)/3 = 60/3 = 20.", diff: "easy", topic: "Averages" },
    { q: "What is the ratio of 20:25?", opts: ["2:5","4:5","5:4","3:5"], ans: 1, expl: "Divide both by 5: 20:25 = 4:5.", diff: "easy", topic: "Ratios" },
    { q: "A number increased by 20% becomes 120. Original number?", opts: ["80","90","100","110"], ans: 2, expl: "Let x be original. x×1.2 = 120 → x = 100.", diff: "easy", topic: "Percentages" },
    { q: "Find simple interest: P=1000, R=10%, T=2 years", opts: ["100","200","300","400"], ans: 1, expl: "SI = 1000×10×2/100 = 200.", diff: "easy", topic: "Interest" },
    { q: "If a train travels 60 km in 1 hour, speed is:", opts: ["50 km/h","60 km/h","70 km/h","80 km/h"], ans: 1, expl: "Speed = distance/time = 60/1 = 60 km/h.", diff: "easy", topic: "Speed" },
    { q: "Time taken to cover 120 km at 60 km/h?", opts: ["1 hr","2 hr","3 hr","4 hr"], ans: 1, expl: "Time = 120/60 = 2 hours.", diff: "easy", topic: "Time" },
    { q: "Find LCM of 6 and 8", opts: ["24","48","12","36"], ans: 0, expl: "LCM of 6 and 8 is 24.", diff: "easy", topic: "Number Theory" },
    { q: "What is 25% of 80?", opts: ["10","15","20","25"], ans: 2, expl: "25% of 80 = 80/4 = 20.", diff: "easy", topic: "Percentages" },
    { q: "If 5 workers complete work in 10 days, 10 workers will take:", opts: ["5 days","10 days","15 days","20 days"], ans: 0, expl: "Double the workers halves the time: 10/2 = 5 days.", diff: "easy", topic: "Work" },
    { q: "Simplify: ( 100 ÷ 5 + 10 )", opts: ["20","30","40","50"], ans: 1, expl: "100÷5 = 20, then 20+10 = 30.", diff: "easy", topic: "BODMAS" },
    { q: "Find the missing number: 3, 6, 9, 12, ?", opts: ["13","14","15","16"], ans: 2, expl: "The sequence increases by 3, so next is 12+3 = 15.", diff: "easy", topic: "Number Series" },
    { q: "A shopkeeper gives 10% discount on ₹500. Final price?", opts: ["400","450","480","420"], ans: 1, expl: "Discount = 50, so price = 500-50 = 450.", diff: "easy", topic: "Discount" },
    { q: "What is 3/5 of 100?", opts: ["50","60","70","80"], ans: 1, expl: "3/5 of 100 = 60.", diff: "easy", topic: "Fractions" },
    { q: "If cost price = 200 and selling price = 250, profit = ?", opts: ["25","50","75","100"], ans: 1, expl: "Profit = 250-200 = 50.", diff: "easy", topic: "Profit & Loss" },
    { q: "Simplify: ( 7 × 8 - 10 )", opts: ["46","50","56","60"], ans: 0, expl: "7×8 = 56, then 56-10 = 46.", diff: "easy", topic: "BODMAS" },
    { q: "What is the square of 15?", opts: ["200","215","225","250"], ans: 2, expl: "15² = 225.", diff: "easy", topic: "Squares" },
    { q: "Find HCF of 16 and 24", opts: ["4","6","8","12"], ans: 2, expl: "HCF of 16 and 24 is 8.", diff: "easy", topic: "Number Theory" },
    { q: "If 1 dozen = 12, then 5 dozen = ?", opts: ["50","60","70","80"], ans: 1, expl: "5 dozen = 5×12 = 60.", diff: "easy", topic: "Units" },
    { q: "A man walks 10 km in 2 hours. Speed?", opts: ["2 km/h","3 km/h","5 km/h","6 km/h"], ans: 2, expl: "Speed = 10/2 = 5 km/h.", diff: "easy", topic: "Speed" },
    { q: "Simplify: ( 9^2 )", opts: ["18","72","81","99"], ans: 2, expl: "9² = 81.", diff: "easy", topic: "Exponents" },
    { q: "If a number is doubled and becomes 40, original number?", opts: ["10","15","20","25"], ans: 2, expl: "x×2 = 40 → x = 20.", diff: "easy", topic: "Algebra" },
    { q: "What is 50% of 300?", opts: ["100","120","150","180"], ans: 2, expl: "50% of 300 = 150.", diff: "easy", topic: "Percentages" },
    { q: "Find next number: 2, 6, 12, 20, ?", opts: ["28","30","32","36"], ans: 1, expl: "Differences are 4,6,8,10, so next term = 20+10 = 30.", diff: "easy", topic: "Number Series" },
    { q: "A sum becomes double in 5 years (simple interest). Rate?", opts: ["10%","15%","20%","25%"], ans: 2, expl: "For simple interest, doubling in 5 years means 100%/5 = 20% per year.", diff: "easy", topic: "Interest" },
    { q: "Simplify: ( 144 ÷ 12 )", opts: ["10","11","12","13"], ans: 2, expl: "144÷12 = 12.", diff: "easy", topic: "Division" },
    { q: "If 3 pens cost ₹30, cost of 1 pen?", opts: ["5","10","15","20"], ans: 1, expl: "30/3 = 10.", diff: "easy", topic: "Unit Price" },
    { q: "A train crosses a pole in 10 seconds at 20 m/s. Length?", opts: ["100 m","150 m","200 m","250 m"], ans: 2, expl: "Distance = speed×time = 20×10 = 200 m.", diff: "easy", topic: "Speed" },
  ],
  coding: [
    { q: "Which of these is NOT a programming language?", opts: ["Python","Java","HTML","C++"], ans: 2, expl: "HTML is a markup language, not a programming language.", diff: "easy", topic: "Basics" },
    { q: "What does 'if __name__ == \"__main__\"' do in Python?", opts: ["Defines main function","Runs code only when script is executed directly","Imports a module","Defines a class"], ans: 1, expl: "This guard runs code only when the file is executed directly, not when imported as a module.", diff: "medium", topic: "Python" },
    { q: "What is the time complexity of binary search?", opts: ["O(n)","O(n²)","O(log n)","O(1)"], ans: 2, expl: "Binary search halves the search space each step: O(log n).", diff: "medium", topic: "Algorithms" },
    { q: "In OOP, 'encapsulation' means:", opts: ["Inheriting from parent class","Hiding internal state and requiring interaction through methods","Overriding methods","Multiple inheritance"], ans: 1, expl: "Encapsulation bundles data and methods, exposing only what's necessary and hiding implementation details.", diff: "medium", topic: "OOP" },
    { q: "What does SQL stand for?", opts: ["Simple Query Language","Structured Query Language","Standard Query Language","System Query Language"], ans: 1, expl: "SQL means Structured Query Language, used for relational databases.", diff: "easy", topic: "Databases" },
    { q: "What is a 'null pointer exception'?", opts: ["Memory overflow","Accessing an object that doesn't exist","Dividing by zero","Array out of bounds"], ans: 1, expl: "NullPointerException occurs when code tries to use a reference that points to no object.", diff: "medium", topic: "Debugging" },
    { q: "Time complexity of binary search:", opts: ["O(n)","O(log n)","O(n log n)","O(1)"], ans: 1, expl: "Binary search is logarithmic time, O(log n).", diff: "medium", topic: "Algorithms" },
    { q: "Worst-case time of quicksort:", opts: ["O(n log n)","O(log n)","O(n²)","O(n)"], ans: 2, expl: "Quicksort worst-case occurs with bad pivots and is O(n²).", diff: "hard", topic: "Algorithms" },
    { q: "BFS uses:", opts: ["Stack","Queue","Heap","Tree"], ans: 1, expl: "Breadth-first search uses a queue to traverse level by level.", diff: "easy", topic: "Algorithms" },
    { q: "DFS uses:", opts: ["Queue","Stack","Heap","Graph"], ans: 1, expl: "Depth-first search typically uses a stack or recursion.", diff: "easy", topic: "Algorithms" },
    { q: "Minimum spanning tree algorithm:", opts: ["Dijkstra","Kruskal","Bellman-Ford","Floyd-Warshall"], ans: 1, expl: "Kruskal's algorithm is used to find a minimum spanning tree.", diff: "medium", topic: "Algorithms" },
    { q: "Stable sorting algorithm:", opts: ["Quick sort","Heap sort","Merge sort","Selection sort"], ans: 2, expl: "Merge sort is a stable sorting algorithm.", diff: "medium", topic: "Algorithms" },
    { q: "Recurrence T(n)=2T(n/2)+n →", opts: ["O(n)","O(n log n)","O(n²)","O(log n)"], ans: 1, expl: "This recurrence solves to O(n log n).", diff: "hard", topic: "Algorithms" },
    { q: "Heap is:", opts: ["Sorted array","Complete binary tree","Balanced BST","Graph"], ans: 1, expl: "A heap is a complete binary tree with heap order.", diff: "medium", topic: "Data Structures" },
    { q: "Dijkstra fails for:", opts: ["Directed graph","Weighted graph","Negative weights","Cyclic graph"], ans: 2, expl: "Dijkstra's algorithm is not safe with negative edge weights.", diff: "medium", topic: "Algorithms" },
    { q: "Topological sort applies to:", opts: ["Trees","Undirected graphs","DAG","Cyclic graph"], ans: 2, expl: "Topological sort works only on directed acyclic graphs (DAG).", diff: "medium", topic: "Algorithms" },
    { q: "Deadlock condition NOT required:", opts: ["Mutual exclusion","Hold & wait","Preemption","Circular wait"], ans: 2, expl: "Preemption is not required for deadlock, the other three are needed.", diff: "medium", topic: "Operating Systems" },
    { q: "Paging avoids:", opts: ["Internal fragmentation","External fragmentation","Deadlock","Thrashing"], ans: 1, expl: "Paging helps avoid external fragmentation.", diff: "medium", topic: "Operating Systems" },
    { q: "Round robin scheduling uses:", opts: ["Priority","Time quantum","FIFO","SJF"], ans: 1, expl: "Round robin scheduling uses a time quantum for each process.", diff: "easy", topic: "Operating Systems" },
    { q: "Thrashing occurs due to:", opts: ["High CPU usage","Low paging","Excess page faults","Disk failure"], ans: 2, expl: "Thrashing happens when there are too many page faults.", diff: "medium", topic: "Operating Systems" },
    { q: "Semaphore is:", opts: ["Hardware","Software synchronization tool","Memory","Cache"], ans: 1, expl: "A semaphore is a software synchronization mechanism.", diff: "easy", topic: "Operating Systems" },
    { q: "Context switch involves:", opts: ["Memory allocation","Saving process state","Disk access","File system"], ans: 1, expl: "Context switch saves the current process state and loads another.", diff: "medium", topic: "Operating Systems" },
    { q: "Banker's algorithm is for:", opts: ["Scheduling","Deadlock avoidance","Paging","File system"], ans: 1, expl: "Banker's algorithm is used for deadlock avoidance.", diff: "medium", topic: "Operating Systems" },
    { q: "LRU is:", opts: ["Scheduling algorithm","Page replacement","Disk scheduling","Memory allocation"], ans: 1, expl: "LRU is a page replacement strategy.", diff: "medium", topic: "Operating Systems" },
    { q: "Fork creates:", opts: ["Thread","Child process","File","Interrupt"], ans: 1, expl: "fork() creates a new child process in Unix-like systems.", diff: "easy", topic: "Operating Systems" },
    { q: "Critical section problem deals with:", opts: ["CPU scheduling","Process synchronization","Memory allocation","Paging"], ans: 1, expl: "The critical section problem is about synchronizing access to shared resources.", diff: "medium", topic: "Operating Systems" },
    { q: "Primary key is:", opts: ["Nullable","Unique & not null","Duplicate allowed","Optional"], ans: 1, expl: "A primary key must be unique and not null.", diff: "easy", topic: "DBMS" },
    { q: "Normalization removes:", opts: ["Redundancy","Data","Tables","Keys"], ans: 0, expl: "Normalization removes redundancy from database tables.", diff: "medium", topic: "DBMS" },
    { q: "3NF removes:", opts: ["Partial dependency","Transitive dependency","Multivalued dependency","Functional dependency"], ans: 1, expl: "Third normal form removes transitive dependency.", diff: "hard", topic: "DBMS" },
    { q: "SQL command to remove table:", opts: ["DELETE","DROP","REMOVE","CLEAR"], ans: 1, expl: "DROP TABLE deletes a table structure and its data.", diff: "easy", topic: "DBMS" },
    { q: "Foreign key ensures:", opts: ["Uniqueness","Referential integrity","Sorting","Indexing"], ans: 1, expl: "A foreign key enforces referential integrity between tables.", diff: "medium", topic: "DBMS" },
    { q: "Join combines:", opts: ["Rows","Tables","Columns","Keys"], ans: 1, expl: "JOIN combines data from multiple tables.", diff: "easy", topic: "DBMS" },
    { q: "ACID property 'A' stands for:", opts: ["Accuracy","Atomicity","Access","Allocation"], ans: 1, expl: "A in ACID stands for Atomicity.", diff: "easy", topic: "DBMS" },
    { q: "Index improves:", opts: ["Insert","Search","Delete","Storage"], ans: 1, expl: "Indexes improve search/query performance.", diff: "easy", topic: "DBMS" },
    { q: "View is:", opts: ["Physical table","Virtual table","Index","Key"], ans: 1, expl: "A view is a virtual table defined by a query.", diff: "medium", topic: "DBMS" },
    { q: "Deadlock in DB occurs due to:", opts: ["Locking","Indexing","Normalization","Query"], ans: 0, expl: "Deadlocks in databases happen due to locking conflicts.", diff: "medium", topic: "DBMS" },
    { q: "CPU consists of:", opts: ["RAM & ROM","ALU & CU","Cache & Disk","Bus & I/O"], ans: 1, expl: "CPU contains the Arithmetic Logic Unit (ALU) and Control Unit (CU).", diff: "easy", topic: "Computer Organization" },
    { q: "Cache memory is:", opts: ["Slow","Expensive & fast","Large","Secondary"], ans: 1, expl: "Cache is fast and expensive memory close to the CPU.", diff: "medium", topic: "Computer Organization" },
    { q: "Pipeline improves:", opts: ["Latency","Throughput","Memory","Disk"], ans: 1, expl: "Pipelining increases instruction throughput.", diff: "medium", topic: "Computer Organization" },
    { q: "RISC has:", opts: ["Complex instructions","Few simple instructions","Large memory","Microcode"], ans: 1, expl: "RISC architectures use few simple instructions.", diff: "medium", topic: "Computer Organization" },
    { q: "Interrupt is:", opts: ["Software call","Signal to CPU","Memory block","Register"], ans: 1, expl: "An interrupt is a signal to the CPU to stop current execution temporarily.", diff: "easy", topic: "Computer Organization" },
    { q: "Addressing mode determines:", opts: ["Data","Operand location","Instruction","CPU"], ans: 1, expl: "Addressing mode controls how the operand location is calculated.", diff: "medium", topic: "Computer Organization" },
    { q: "Register is:", opts: ["Slow memory","Fast storage","Disk","Cache"], ans: 1, expl: "Registers are very fast storage locations inside the CPU.", diff: "easy", topic: "Computer Organization" },
    { q: "Endianness relates to:", opts: ["Cache","Byte order","CPU speed","Memory size"], ans: 1, expl: "Endianness describes how bytes are ordered in memory.", diff: "medium", topic: "Computer Organization" },
    { q: "Virtual memory uses:", opts: ["Paging","Segmentation","Both","None"], ans: 2, expl: "Virtual memory can use paging, segmentation, or a combination of both.", diff: "hard", topic: "Computer Organization" },
    { q: "DMA allows:", opts: ["CPU control","Direct memory access","Cache access","Disk"], ans: 1, expl: "DMA allows peripherals to transfer data directly to memory without CPU intervention.", diff: "medium", topic: "Computer Organization" },
    { q: "OSI layers:", opts: ["5","6","7","8"], ans: 2, expl: "The OSI model has 7 layers.", diff: "easy", topic: "Computer Networks" },
    { q: "TCP is:", opts: ["Connectionless","Connection-oriented","Stateless","Unreliable"], ans: 1, expl: "TCP is a connection-oriented protocol.", diff: "easy", topic: "Computer Networks" },
    { q: "UDP is:", opts: ["Reliable","Slow","Connectionless","Ordered"], ans: 2, expl: "UDP is a connectionless protocol.", diff: "easy", topic: "Computer Networks" },
    { q: "IP works at:", opts: ["Transport","Network","Data link","Physical"], ans: 1, expl: "IP operates at the network layer.", diff: "easy", topic: "Computer Networks" },
    { q: "HTTP uses port:", opts: ["21","25","80","110"], ans: 2, expl: "HTTP commonly uses port 80.", diff: "easy", topic: "Computer Networks" },
    { q: "DNS resolves:", opts: ["IP to MAC","Name to IP","Port to IP","URL to file"], ans: 1, expl: "DNS resolves domain names to IP addresses.", diff: "easy", topic: "Computer Networks" },
    { q: "MAC address is:", opts: ["Logical","Physical","Virtual","Dynamic"], ans: 1, expl: "A MAC address is a physical hardware address.", diff: "medium", topic: "Computer Networks" },
    { q: "Router works at:", opts: ["Layer 2","Layer 3","Layer 4","Layer 1"], ans: 1, expl: "Routers operate at the network layer (Layer 3).", diff: "medium", topic: "Computer Networks" },
    { q: "CSMA/CD used in:", opts: ["WiFi","Ethernet","Bluetooth","Satellite"], ans: 1, expl: "CSMA/CD is used in Ethernet networks.", diff: "medium", topic: "Computer Networks" },
    { q: "Congestion control in TCP:", opts: ["Stop-wait","Sliding window","AIMD","Polling"], ans: 2, expl: "TCP congestion control uses AIMD (Additive Increase Multiplicative Decrease).", diff: "hard", topic: "Computer Networks" },
    { q: "DFA has:", opts: ["Multiple transitions","Single transition","No transition","Infinite"], ans: 1, expl: "A deterministic finite automaton has exactly one transition per symbol from each state.", diff: "medium", topic: "Theory of Computation" },
    { q: "PDA recognizes:", opts: ["Regular","CFL","Recursive","None"], ans: 1, expl: "A pushdown automaton recognizes context-free languages (CFL).", diff: "hard", topic: "Theory of Computation" },
    { q: "Turing machine is:", opts: ["Finite","Powerful","Limited","Linear"], ans: 1, expl: "A Turing machine is a powerful abstract machine model for computation.", diff: "hard", topic: "Theory of Computation" },
    { q: "Regular expressions represent:", opts: ["CFL","Regular language","Recursive","TM"], ans: 1, expl: "Regular expressions define regular languages.", diff: "medium", topic: "Theory of Computation" },
    { q: "Grammar G is ambiguous if:", opts: ["One parse tree","Multiple parse trees","No string","Infinite"], ans: 1, expl: "A grammar is ambiguous when a string has more than one parse tree.", diff: "hard", topic: "Theory of Computation" },
    { q: "Halting problem is:", opts: ["Decidable","Undecidable","Regular","Context-free"], ans: 1, expl: "The halting problem is undecidable.", diff: "hard", topic: "Theory of Computation" },
    { q: "CNF stands for:", opts: ["Chomsky Normal Form","Context Normal Form","Canonical NF","None"], ans: 0, expl: "CNF means Chomsky Normal Form.", diff: "medium", topic: "Theory of Computation" },
    { q: "NP-complete problems are:", opts: ["Easy","Hard","Polynomial","Linear"], ans: 1, expl: "NP-complete problems are believed to be hard to solve efficiently.", diff: "hard", topic: "Theory of Computation" },
    { q: "Lexical analysis produces:", opts: ["Parse tree","Tokens","Code","AST"], ans: 1, expl: "Lexical analysis produces tokens from source text.", diff: "medium", topic: "Compiler Design" },
    { q: "Syntax analysis builds:", opts: ["Tokens","Parse tree","Symbol table","Code"], ans: 1, expl: "Syntax analysis constructs a parse tree from tokens.", diff: "medium", topic: "Compiler Design" },
    { q: "Semantic analysis checks:", opts: ["Syntax","Meaning","Tokens","Parsing"], ans: 1, expl: "Semantic analysis checks meaning and type correctness.", diff: "medium", topic: "Compiler Design" },
    { q: "Intermediate code is:", opts: ["Machine code","Assembly","Platform independent","Source"], ans: 2, expl: "Intermediate code is platform-independent code between source and target.", diff: "hard", topic: "Compiler Design" },
    { q: "Register allocation improves:", opts: ["Memory","Speed","Size","Disk"], ans: 1, expl: "Register allocation improves code execution speed.", diff: "medium", topic: "Compiler Design" },
    { q: "Dead code elimination removes:", opts: ["Useful code","Unused code","Syntax","Errors"], ans: 1, expl: "Dead code elimination removes code that is never executed.", diff: "medium", topic: "Compiler Design" },
    { q: "Parser type:", opts: ["LL","LR","Both","None"], ans: 2, expl: "There are both LL and LR parser types.", diff: "hard", topic: "Compiler Design" },
  ],
  affairs: [
    { q: "Who is the current Prime Minister of India (2026)?", opts: ["Rahul Gandhi","Narendra Modi","Amit Shah","Rajnath Singh"], ans: 1, expl: "Narendra Modi is the current Prime Minister of India in 2026.", diff: "easy", topic: "India" },
    { q: "Which country hosted the 2024 Summer Olympics?", opts: ["Japan","China","France","USA"], ans: 2, expl: "The 2024 Summer Olympics were held in Paris, France.", diff: "easy", topic: "International" },
    { q: "The capital of Ukraine is:", opts: ["Moscow","Kyiv","Warsaw","Minsk"], ans: 1, expl: "Kyiv is the capital of Ukraine.", diff: "easy", topic: "Geography" },
    { q: "Which organization conducts the G20 Summit?", opts: ["UN","IMF","Group of Twenty","World Bank"], ans: 2, expl: "The G20 Summit is convened by the Group of Twenty.", diff: "easy", topic: "International" },
    { q: "India successfully landed Chandrayaan-3 on:", opts: ["Mars","Moon","Venus","Jupiter"], ans: 1, expl: "Chandrayaan-3 successfully landed on the Moon.", diff: "easy", topic: "Space" },
    { q: "Who is the current President of the USA (2026)?", opts: ["Joe Biden","Donald Trump","Kamala Harris","(Check latest updates*)"], ans: 3, expl: "Current affairs questions should be verified for the latest information before exams.", diff: "medium", topic: "International" },
    { q: "Which Indian state recently launched major AI initiatives?", opts: ["Kerala","Karnataka","Tamil Nadu","Telangana"], ans: 3, expl: "Telangana has launched significant AI initiatives in recent years.", diff: "medium", topic: "India" },
    { q: "Which currency is used in Japan?", opts: ["Dollar","Yuan","Yen","Won"], ans: 2, expl: "Yen is the currency used in Japan.", diff: "easy", topic: "Geography" },
    { q: "Which organization releases the World Happiness Report?", opts: ["WHO","UN","IMF","WTO"], ans: 1, expl: "The World Happiness Report is published by the United Nations.", diff: "easy", topic: "International" },
    { q: "Which country is known for hosting COP climate summits?", opts: ["Rotates globally","USA","UK","Germany"], ans: 0, expl: "COP summits rotate globally among host countries.", diff: "easy", topic: "Environment" },
    { q: "Which tech company developed ChatGPT?", opts: ["Google","Microsoft","OpenAI","Meta"], ans: 2, expl: "ChatGPT was developed by OpenAI.", diff: "easy", topic: "Technology" },
    { q: "India’s digital payment system is called:", opts: ["NEFT","RTGS","UPI","IMPS"], ans: 2, expl: "UPI is India's digital payment system.", diff: "easy", topic: "Economy" },
    { q: "Which Indian mission focuses on solar observation?", opts: ["Chandrayaan","Aditya-L1","Mangalyaan","Gaganyaan"], ans: 1, expl: "Aditya-L1 is India's solar observation mission.", diff: "medium", topic: "Space" },
    { q: "Which country is part of BRICS?", opts: ["Spain","India","Italy","Japan"], ans: 1, expl: "India is a member of BRICS.", diff: "easy", topic: "International" },
    { q: "Which Indian city hosted the G20 Summit 2023?", opts: ["Mumbai","Delhi","Chennai","Kolkata"], ans: 1, expl: "New Delhi hosted the G20 Summit in 2023.", diff: "medium", topic: "India" },
    { q: "Which global organization focuses on health?", opts: ["UNESCO","WHO","WTO","IMF"], ans: 1, expl: "The World Health Organization focuses on global health.", diff: "easy", topic: "International" },
    { q: "Which country recently joined NATO (recent expansion)?", opts: ["Sweden","Brazil","India","China"], ans: 0, expl: "Sweden recently joined NATO.", diff: "medium", topic: "International" },
    { q: "Which company is known for iPhone?", opts: ["Samsung","Apple","Google","Microsoft"], ans: 1, expl: "Apple is known for developing the iPhone.", diff: "easy", topic: "Technology" },
    { q: "Which river is most discussed in India-Bangladesh relations?", opts: ["Ganga","Brahmaputra","Teesta","Yamuna"], ans: 2, expl: "The Teesta river is central to India-Bangladesh water discussions.", diff: "medium", topic: "Geography" },
    { q: "Which Indian program promotes manufacturing?", opts: ["Digital India","Make in India","Startup India","Skill India"], ans: 1, expl: "Make in India promotes manufacturing and investment.", diff: "easy", topic: "Economy" },
    { q: "Which country is facing an ongoing conflict with Russia?", opts: ["Poland","Ukraine","Finland","Latvia"], ans: 1, expl: "Ukraine is engaged in an ongoing conflict with Russia.", diff: "easy", topic: "International" },
    { q: "Which space agency is India’s?", opts: ["NASA","ESA","ISRO","CNSA"], ans: 2, expl: "ISRO is the Indian Space Research Organisation.", diff: "easy", topic: "Space" },
    { q: "Which Indian exam is for civil services?", opts: ["JEE","NEET","UPSC","SSC"], ans: 2, expl: "UPSC conducts the Civil Services Examination.", diff: "easy", topic: "Education" },
    { q: "Which country leads in AI development globally?", opts: ["India","USA","Brazil","Australia"], ans: 1, expl: "The USA is widely regarded as a leader in AI development.", diff: "easy", topic: "Technology" },
    { q: "Which international currency is most widely used?", opts: ["Euro","Dollar","Yen","Pound"], ans: 1, expl: "The US dollar is the most widely used international currency.", diff: "easy", topic: "Economy" },
    { q: "Which Indian state is known for highest literacy?", opts: ["Kerala","Bihar","UP","Rajasthan"], ans: 0, expl: "Kerala has the highest literacy rate among Indian states.", diff: "medium", topic: "India" },
    { q: "Which organization manages global trade rules?", opts: ["IMF","WTO","UNDP","WHO"], ans: 1, expl: "The World Trade Organization manages global trade rules.", diff: "easy", topic: "International" },
    { q: "Which Indian mission is related to human spaceflight?", opts: ["Chandrayaan","Gaganyaan","PSLV","Aditya"], ans: 1, expl: "Gaganyaan is India's human spaceflight mission.", diff: "easy", topic: "Space" },
    { q: "Which country is largest oil producer?", opts: ["India","USA","Japan","Germany"], ans: 1, expl: "The USA is one of the world's largest oil producers.", diff: "easy", topic: "International" },
    { q: "Which international day is celebrated on June 5?", opts: ["Earth Day","Environment Day","Water Day","Energy Day"], ans: 1, expl: "June 5 is observed as World Environment Day.", diff: "easy", topic: "Environment" },
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
    {val: total, label: 'Quizzes Taken'},
    {val: avgScore+'%', label: 'Avg Score'},
    {val: bestScore+'%', label: 'Best Score'},
    {val: state.streak, label: 'Day Streak'},
  ].map(s=>`<div class="stat-card"><div class="stat-val">${s.val}</div><div class="stat-label">${s.label}</div></div>`).join('');

  // Subject grid
  document.getElementById('subjectGrid').innerHTML = SUBJECTS.map(s=>`
    <div class="subject-card" onclick="quickStart('${s.id}')">
      <div class="subject-icon"></div>
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
      o.value = s.id; o.textContent = s.name;
      sel.appendChild(o);
    });
  }
  sel.value = quizSettings.subject;
}

function clampQCount() {
  const input = document.getElementById('setupQCount');
  if (!input) return;
  let count = parseInt(input.value, 10);
  if (Number.isNaN(count)) count = 10;
  if (count < 5) count = 5;
  if (count > 25) count = 25;
  input.value = count;
}

function getMaxQuestionCount() {
  const subj = document.getElementById('setupSubject')?.value || quizSettings.subject;
  return Math.min(25, (QUESTIONS[subj] || []).length || 25);
}

function clampQCount() {
  const input = document.getElementById('setupQCount');
  if (!input) return;
  const maxCount = getMaxQuestionCount();
  let count = parseInt(input.value, 10);
  if (Number.isNaN(count)) count = 10;
  if (count < 5) count = 5;
  if (count > maxCount) count = maxCount;
  input.value = count;
}

function syncCountWithSubject() {
  clampQCount();
}

function changeQCount(delta) {
  const input = document.getElementById('setupQCount');
  if (!input) return;
  const maxCount = getMaxQuestionCount();
  let count = parseInt(input.value, 10);
  if (Number.isNaN(count)) count = 10;
  count += delta;
  if (count < 5) count = 5;
  if (count > maxCount) count = maxCount;
  input.value = count;
}

function selectDiff(btn, diff) {
  document.querySelectorAll('.diff-btn').forEach(b => b.className = 'diff-btn');
  btn.classList.add('active-' + diff);
  quizSettings.diff = diff;
}

function startQuiz() {
  const subj = document.getElementById('setupSubject')?.value || quizSettings.subject;
  let count = parseInt(document.getElementById('setupQCount')?.value || 10);
  const timerSec = 30;
  const showExpl = document.getElementById('explToggle')?.classList.contains('on') ?? true;

  if (Number.isNaN(count)) count = 10;
  if (count < 5) count = 5;
  const maxCount = getMaxQuestionCount();
  if (count > maxCount) count = maxCount;
  document.getElementById('setupQCount').value = count;

  quizSettings = { ...quizSettings, subject: subj, count, timer: timerSec, showExpl };

  let pool = QUESTIONS[subj] || [];

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
    totalTime: count * 30,
    questionRemaining: timerSec > 0 ? timerSec : null,
    totalRemaining: count * 30,
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
  if (isDone && quiz.showExpl) {
    exBox.innerHTML = `<div class="explanation-title">Explanation</div>${q.expl}`;
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
  const skipBtn = document.getElementById('skipBtn');
  const nextBtn = document.getElementById('nextBtn');
  skipBtn.disabled = isDone || chosen !== null;
  if (idx === total - 1) {
    nextBtn.textContent = 'Finish Quiz';
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

function skipQuestion() {
  const quiz = state.currentQuiz;
  if (!quiz || quiz.done) return;
  const idx = quiz.currentIdx;
  if (quiz.answers[idx] !== null) return;
  quiz.times[idx] = Math.round((Date.now() - quiz.questionStartTime) / 1000);
  if (idx === quiz.questions.length - 1) {
    endQuiz(false);
  } else {
    quiz.currentIdx += 1;
    renderQuestion();
    resetTimer();
  }
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
      ${[['Correct', correct, 'green'],['Wrong', quiz.questions.length-correct-quiz.answers.filter(a=>a===null).length,'red'],['Skipped', quiz.answers.filter(a=>a===null).length,'amber'],['Avg Time', avgT+'s','blue']].map(([l,v,c])=>`
      <div class="card2" style="border-left:3px solid var(--${c});">
        <span style="font-size:12px;color:var(--text2);">${l}</span>
        <div style="font-family:'Syne',sans-serif;font-size:22px;font-weight:700;color:var(--${c});">${v}</div>
      </div>`).join('')}
    </div>`;

  // Affirmation
  const aff = getAffirmation(score);
  document.getElementById('affirmationCard').innerHTML = `<div class="affirmation-text">${aff.text}</div>`;

  // Weak/Strong topics
  const topics = Object.entries(topicMap).map(([k,v])=>({name:k, acc:Math.round(v.correct/v.total*100), total:v.total}));
  renderWeaknessChart(topics);
  renderActionableFeedback(topics);
  const weakT = topics.filter(t=>t.acc<60).sort((a,b)=>a.acc-b.acc);
  const strongT = topics.filter(t=>t.acc>=70).sort((a,b)=>b.acc-a.acc);
  document.getElementById('weakAreasResult').innerHTML = weakT.length ? '<div class="weakness-list">'+weakT.map(t=>`<div class="ws-item weak"><span class="ws-name">${t.name}</span><span class="ws-pct">${t.acc}%</span></div>`).join('')+'</div>' : '<p style="font-size:13px;color:var(--green);">No weak areas — great work!</p>';
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
  if (s>=90) return 'Excellent!';
  if (s>=80) return 'Great Work!';
  if (s>=70) return 'Good Job!';
  if (s>=60) return 'Keep Going!';
  if (s>=50) return 'Keep Practicing!';
  return 'Room to Grow!';
}

function getAffirmation(score) {
  const high = [
    {emoji:'', text:'"Outstanding performance! You have mastered this topic. Your hard work is truly paying off!"'},
    {emoji:'', text:'"Brilliant! You are at the top of your game. Keep this momentum going!"'},
    {emoji:'', text:'"Perfect precision! You clearly understand this material deeply. Champion!"'},
  ];
  const mid = [
    {emoji:'', text:'"You are improving every day! Each quiz brings you closer to mastery. Keep it up!"'},
    {emoji:'', text:'"Good effort! Every mistake is a lesson in disguise. You\'re on the right path!"'},
    {emoji:'', text:'"Your consistency will lead to success. The difference between ordinary and extraordinary is that little extra!"'},
  ];
  const low = [
    {emoji:'', text:'"Mistakes are proof that you are learning. Every expert was once a beginner — keep going!"'},
    {emoji:'', text:'"You showed up and that\'s the most important step. Tomorrow you\'ll be better than today!"'},
    {emoji:'', text:'"Don\'t be discouraged — every stumble is a step forward. Your breakthrough is coming!"'},
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
  if (!quiz.timerPerQ && !quiz.totalTime) { document.getElementById('timerDisplay').textContent = '∞'; return; }
  if (quiz.questionRemaining == null && quiz.timerPerQ > 0) quiz.questionRemaining = quiz.timerPerQ;
  if (quiz.totalRemaining == null && quiz.totalTime) quiz.totalRemaining = quiz.totalTime;
  const qRem = quiz.questionRemaining;
  const tRem = quiz.totalRemaining;
  updateTimerDisplay(qRem, tRem, quiz.timerPerQ);
  timerInterval = setInterval(()=>{
    if (quiz.totalRemaining != null) quiz.totalRemaining -= 1;
    if (quiz.questionRemaining != null) quiz.questionRemaining -= 1;
    const qRemNow = quiz.questionRemaining;
    const tRemNow = quiz.totalRemaining;
    updateTimerDisplay(qRemNow, tRemNow, quiz.timerPerQ);
    if (tRemNow !== null && tRemNow <= 0) {
      clearInterval(timerInterval);
      endQuiz(false);
      return;
    }
    if (qRemNow !== null && qRemNow <= 0) {
      if (quiz.answers[quiz.currentIdx] === null) quiz.answers[quiz.currentIdx] = null;
      if (quiz.currentIdx < quiz.questions.length-1) {
        quiz.currentIdx += 1;
        quiz.questionRemaining = quiz.timerPerQ > 0 ? quiz.timerPerQ : null;
        renderQuestion();
      } else {
        clearInterval(timerInterval);
        endQuiz(false);
      }
    }
  }, 1000);
}
function resetTimer() { clearInterval(timerInterval); startTimer(); }
function updateTimerDisplay(rem, total, perQ) {
  const el = document.getElementById('timerDisplay');
  const timer = document.getElementById('quizTimer');
  const totalLabel = total != null ? `${Math.floor(total/60).toString().padStart(2,'0')}:${(total%60).toString().padStart(2,'0')}` : '∞';
  const questionLabel = perQ && rem != null ? `${rem}s` : 'No Q timer';
  el.textContent = perQ ? `${questionLabel} / ${totalLabel}` : totalLabel;
  timer.className = 'quiz-timer';
  if (rem != null && total != null && rem <= Math.max(1, perQ * 0.3)) timer.classList.add('timer-urgent');
  else if (rem != null && total != null && rem <= Math.max(1, perQ * 0.5)) timer.classList.add('timer-warn');
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
    {val:total, label:'Total Quizzes'},
    {val:avg+'%', label:'Average Score'},
    {val:best+'%', label:'Best Score'},
    {val:subjects, label:'Subjects Tried'},
  ].map(s=>`<div class="stat-card"><div class="stat-val">${s.val}</div><div class="stat-label">${s.label}</div></div>`).join('');

  renderCharts();

  // Subject performance list
  const perf = Object.entries(state.subjectStats).map(([k,v])=>({
    id:k, name:SUBJECTS.find(s=>s.id===k)?.name||k, icon:'',
    acc: v.total?Math.round(v.correct/v.total*100):0, total:v.total, correct:v.correct
  })).sort((a,b)=>b.total-a.total);

  if (!perf.length) {
    document.getElementById('subjectPerformanceList').innerHTML = '<div class="empty-state"><div class="empty-icon"></div><div class="empty-text">No quiz data yet</div><p style="font-size:13px;color:var(--text3);">Take some quizzes to see your performance!</p></div>';
  } else {
    document.getElementById('subjectPerformanceList').innerHTML = perf.map(p=>`
      <div style="padding:12px 0;border-bottom:1px solid var(--border);">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
          <span style="font-size:14px;font-weight:500;color:var(--text);">${p.name}</span>
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
    document.getElementById('historyList').innerHTML = '<div class="empty-state"><div class="empty-icon"></div><div class="empty-text">No quiz history yet</div><p style="font-size:13px;color:var(--text3);">Start a quiz to build your history!</p></div>';
    return;
  }
  document.getElementById('historyList').innerHTML = hist.map(h=>{
    const col = h.score>=80?'green':h.score>=60?'amber':'red';
    return `<div class="history-row">
      <div>
        <div class="history-subj">${h.subjectName}</div>
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
    id:k, name:SUBJECTS.find(s=>s.id===k)?.name||k, icon:'',
    acc:v.total?Math.round(v.correct/v.total*100):0, total:v.total
  }));

  if (!allSubj.length) {
    document.getElementById('weaknessContent').innerHTML = '<div class="empty-state" style="padding:60px 0;"><div class="empty-icon"></div><div class="empty-text">Not enough data yet</div><p style="font-size:13px;color:var(--text3);">Take at least 3 quizzes per subject to see your weakness analysis.</p><button class="btn btn-primary" style="margin-top:20px;" onclick="showPage(\'quiz-setup\',document.querySelector(\'[onclick*=quiz-setup]\'))">Start a Quiz</button></div>';
    return;
  }

  const weakItems = allSubj.filter(s=>s.acc<60&&s.total>=3).sort((a,b)=>a.acc-b.acc);
  const midItems = allSubj.filter(s=>s.acc>=60&&s.acc<80&&s.total>=3);
  const strongItems = allSubj.filter(s=>s.acc>=80&&s.total>=3).sort((a,b)=>b.acc-a.acc);

  let html = '';
  if (weakItems.length) {
    html += `<div class="alert alert-warn" style="margin-bottom:16px;"><div>You have <strong>${weakItems.length}</strong> area(s) that need attention. Focus your study time here!</div></div>`;
    html += '<div class="card" style="margin-bottom:20px;"><h3 style="font-size:15px;font-weight:700;margin-bottom:16px;color:var(--red);">Needs Improvement</h3>';
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
    html += '<div class="card" style="margin-bottom:20px;"><h3 style="font-size:15px;font-weight:700;margin-bottom:16px;color:var(--amber);">Getting Better</h3>';
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
    html += '<div class="card"><h3 style="font-size:15px;font-weight:700;margin-bottom:16px;color:var(--green);">Your Strengths</h3>';
    html += strongItems.map(s=>`
      <div style="padding:10px 0;border-bottom:1px solid var(--border);">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
          <span style="font-size:13px;font-weight:500;">${s.icon} ${s.name}</span>
          <span style="font-family:'Syne';font-weight:700;color:var(--green);">${s.acc}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${s.acc}%;background:var(--green);"></div></div>
      </div>`).join('') + '</div>';
  }
  document.getElementById('weaknessContent').innerHTML = html || '<div class="alert alert-info">Take more quizzes to unlock your personalized weakness analysis!</div>';
}

// ============================================================
// TIPS
// ============================================================
function renderTips() {
  const {weak} = computeWeakStrong();
  const tips = [
    { icon:'', title:'Spaced Repetition', body:'Review material at increasing intervals: 1 day, 3 days, 1 week, 2 weeks. This technique dramatically improves long-term retention.', subj:[] },
    { icon:'', title:'Active Recall', body:'Instead of re-reading notes, test yourself. Close your book and try to recall the key concepts from memory.', subj:[] },
    { icon:'', title:'Pomodoro Technique', body:'Study for 25 minutes, then take a 5-minute break. After 4 cycles, take a longer 15–30 minute break.', subj:[] },
    { icon:'', title:'Math: Practice Daily', body:'Mathematics requires daily practice. Spend at least 30 minutes solving problems — even easy ones build fluency.', subj:['math','aptitude'] },
    { icon:'', title:'Physics: Understand Concepts', body:'Avoid rote memorization. Focus on understanding why a formula works — derive it yourself if possible.', subj:['physics'] },
    { icon:'', title:'Chemistry: Use Mnemonics', body:'For the periodic table and chemical reactions, create acronyms or rhymes to help memorize patterns.', subj:['chemistry'] },
    { icon:'', title:'Biology: Diagrams Help', body:'Draw and label diagrams repeatedly. Visual representation of processes like photosynthesis aids recall.', subj:['biology'] },
    { icon:'', title:'English: Read Daily', body:'Reading newspapers, novels, or even articles expands vocabulary and improves grammar instinctively.', subj:['english'] },
    { icon:'', title:'GK: Follow the News', body:'Spend 15 minutes daily reading current affairs. Use apps or newspapers to stay updated.', subj:['gk','affairs'] },
    { icon:'', title:'Logic: Solve Puzzles', body:'Practice with Sudoku, crosswords, and reasoning puzzles daily. They strengthen pattern recognition.', subj:['logic'] },
    { icon:'', title:'Coding: Build Projects', body:'Don\'t just read about coding — build small projects. Even a simple to-do app teaches core concepts.', subj:['coding'] },
  ];

  let personalizedTips = '';
  if (weak.length) {
    personalizedTips = `<div class="alert alert-info" style="margin-bottom:16px;"><div>Personalized tips based on your weak areas: <strong>${weak.map(w=>w.name).join(', ')}</strong></div></div>`;
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
