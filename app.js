/**
 * KINEMATICS CLASSES - CORE JAVASCRIPT
 * Interactive features: Dynamic Courses, Mentors, Rankers, Scholarship Estimator,
 * Demo Booking Modal, WhatsApp Lead Generation, and Accordions.
 */

// ==========================================================================
// 1. DATA REPOSITORIES
// ==========================================================================

const COURSES_DATA = [
  {
    id: 'jee-2yr',
    title: 'JEE Pinnacle (2-Year Integrated)',
    subtitle: 'For Class 11th Students Moving to 12th',
    category: 'jee',
    categoryBadge: 'IIT-JEE (Main + Adv)',
    targetYear: 'Target 2027 / 2028',
    features: [
      'Exhaustive coverage of Physics, Chemistry & Mathematics',
      'Daily Practice Problem (DPP) sheets + Video solutions',
      'Weekend simulated Computer-Based Tests (CBT)',
      'Special Advanced Level problem-solving workshops by IITians'
    ],
    duration: '2 Years (650+ Hours)',
    batchSize: 'Max 25 Students',
    mode: 'Classroom & Hybrid'
  },
  {
    id: 'neet-2yr',
    title: 'NEET Conqueror (2-Year Medical)',
    subtitle: 'For Class 11th Biology Aspirants',
    category: 'neet',
    categoryBadge: 'NEET-UG Medical',
    targetYear: 'Target 2027 / 2028',
    features: [
      'Line-by-line NCERT Biology mastery + diagram drills',
      'High-scoring Physics mechanics & numericals approach',
      'Bi-weekly OMR-based simulated All-India Mock Tests',
      'Detailed doubt sessions with senior AIIMS/doctor faculty'
    ],
    duration: '2 Years (700+ Hours)',
    batchSize: 'Max 25 Students',
    mode: 'Classroom & Hybrid'
  },
  {
    id: 'jee-dropper',
    title: 'Super 30 Target Dropper Batch',
    subtitle: 'For 12th Passed Students Repeating JEE',
    category: 'jee',
    categoryBadge: 'JEE Advanced Droppers',
    targetYear: 'Target JEE 2027',
    features: [
      'Intense 6-hour daily timetable with classroom + guided self-study',
      'Micro-level concept repair and test-taking speed improvement',
      'Past 15 years chapter-wise JEE Advanced analysis',
      'Personal 1-on-1 mentor assigned for weekly progress review'
    ],
    duration: '1 Year Intensive',
    batchSize: 'Strictly 30 Students',
    mode: 'Offline Classroom'
  },
  {
    id: 'neet-repeater',
    title: 'NEET Ascend (1-Year Dropper / Repeater)',
    subtitle: 'For 12th Pass Medico Aspirants Aiming 680+',
    category: 'neet',
    categoryBadge: 'NEET-UG Dropper',
    targetYear: 'Target NEET 2027',
    features: [
      'Target 700+ marks framework with zero-error practice series',
      'Comprehensive NCERT Chemistry & Physics question banks',
      '60+ full-length syllabus mock tests before the actual exam',
      'Weekly stress management and speed drills'
    ],
    duration: '1 Year Intensive',
    batchSize: 'Max 28 Students',
    mode: 'Offline Classroom'
  },
  {
    id: 'foundation-9-10',
    title: 'Catalyst Foundation (Classes 9th & 10th)',
    subtitle: 'Early Edge for NTSE, Olympiads & JEE/NEET Base',
    category: 'foundation',
    categoryBadge: 'Olympiad & Pre-JEE',
    targetYear: 'Class 9 & 10',
    features: [
      'Mathematics, Physics, Chemistry & Mental Ability (MAT)',
      'Strong logical foundation beyond rote school textbooks',
      'Olympiad & NTSE preparation integrated with school syllabus',
      'CBSE/ICSE board exam 95%+ marks guarantee focus'
    ],
    duration: 'Annual Program',
    batchSize: 'Max 25 Students',
    mode: 'Classroom & Online'
  },
  {
    id: 'foundation-8',
    title: 'Junior Spark (Class 8th Foundation)',
    subtitle: 'Nurturing Curiosity & Scientific Temperament',
    category: 'foundation',
    categoryBadge: 'Junior Foundation',
    targetYear: 'Class 8th',
    features: [
      'Intuitive science experiments and visual arithmetic',
      'Mental math shortcuts, logical reasoning & puzzle solving',
      'Building habit of daily self-study without stress',
      'School exam excellence with regular feedback to parents'
    ],
    duration: 'Annual Program',
    batchSize: 'Max 20 Students',
    mode: 'Classroom & Online'
  },
  {
    id: 'boards-12',
    title: 'Board Excellence Booster (12th Board)',
    subtitle: 'Scoring 95%+ in CBSE & State Board Exams',
    category: 'boards',
    categoryBadge: '12th Board Booster',
    targetYear: 'Board Exam 2027',
    features: [
      'Exact subjective answer-writing techniques for Board checking',
      'Derivations, definitions, and diagram precision training',
      'Previous 10 years CBSE sample papers solved with rubric',
      'Special weekend classes for English & Computer Science'
    ],
    duration: '6 Months Fastrack',
    batchSize: 'Max 25 Students',
    mode: 'Classroom & Hybrid'
  }
];

const FACULTY_DATA = [
  {
    name: 'Er. Rajesh Verma',
    role: 'HOD Physics & Co-Founder',
    degree: 'B.Tech, IIT Kanpur',
    experience: '14+ Years Experience',
    desc: 'Author of "Visual Mechanics for JEE". Renowned for making complex rotational dynamics and electromagnetism effortlessly simple through live physical models.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Dr. Ananya Sen',
    role: 'HOD Biology (NEET Specialist)',
    degree: 'MBBS, AIIMS New Delhi',
    experience: '11+ Years Experience',
    desc: 'Trained over 400+ doctors across top government medical colleges. Known for mnemonic-based NCERT memorization and high-yield diagram revision.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Er. Manan Sharma',
    role: 'HOD Mathematics',
    degree: 'M.Tech, IIT Bombay',
    experience: '12+ Years Experience',
    desc: 'Master of coordinate geometry and calculus tricks. Specializes in solving 3-minute JEE Advanced questions in under 45 seconds using graphical techniques.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Dr. Vikramaditya Joshi',
    role: 'HOD Chemistry',
    degree: 'Ph.D., IIT Roorkee',
    experience: '13+ Years Experience',
    desc: 'Turns organic reaction mechanisms into a fun story. Students consistently credit him for 95+ percentile in JEE Chemistry and full marks in boards.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop'
  }
];

const TOPPERS_DATA = [
  {
    name: 'Akash Verma',
    rank: 'AIR 142',
    exam: 'JEE Advanced 2025',
    college: 'IIT Delhi — Computer Science',
    score: '318 / 360',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Riddhi Aggarwal',
    rank: 'AIR 89',
    exam: 'NEET-UG 2025',
    college: 'AIIMS New Delhi (MBBS)',
    score: '715 / 720',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Devansh Singhal',
    rank: 'AIR 318',
    exam: 'JEE Advanced 2025',
    college: 'IIT Bombay — Electrical Engg.',
    score: '298 / 360',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Tanya Sanyal',
    rank: 'State Rank 3',
    exam: 'CBSE 12th & JEE (99.6%ile)',
    college: '99.2% in Class 12th Boards',
    score: '100/100 in Physics',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop'
  }
];

const FAQS_DATA = [
  {
    question: 'What is the batch size at Kinematics Classes?',
    answer: 'Unlike crowded coaching mega-centers that seat 150–200 students per batch, Kinematics Classes strictly limits every classroom cohort to 25 to 30 students. This guarantees that mentors know each student by name and track their doubts individually.'
  },
  {
    question: 'How do you help students who have doubts after class hours?',
    answer: 'We provide a dedicated 1-on-1 Doubt Desk available 6 days a week from 3:00 PM to 8:00 PM. Students can sit with subject faculty to solve questions from DPPs, HC Verma, Irodov, or NCERT. Furthermore, students have direct access to faculty on our student doubt portal.'
  },
  {
    question: 'What is K-SAT and how can I get a scholarship?',
    answer: 'K-SAT stands for Kinematics Scholarship & Aptitude Test. Held every Sunday (both online and offline), it assesses analytical ability, basic math, and science. Depending on your performance, you can earn up to a 100% tuition fee waiver.'
  },
  {
    question: 'Can I attend demo lectures before paying the admission fee?',
    answer: 'Yes! We encourage every student and parent to attend a 2-day complimentary trial class with our core faculty. Experience the atmosphere, interaction, and teaching pedagogy first, then decide.'
  },
  {
    question: 'Do you balance Board exams along with JEE/NEET preparation?',
    answer: 'Absolutely. Board concepts form the core building blocks for competitive exams. We cover full NCERT line-by-line, conduct subjective answer-writing sessions, and hold special revision batches for English and secondary subjects before board exams.'
  },
  {
    question: 'What study material and mock tests are provided?',
    answer: 'Every enrolled student receives comprehensive printed modules (theory + graded practice problems), Daily Practice Problem (DPP) booklets, formula handbooks, and access to our CBT (Computer-Based Test) portal with detailed AI time-management analytics.'
  }
];

// ==========================================================================
// 2. DOM INITIALIZATION & RENDERING
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  renderCourses('all');
  renderFaculty();
  renderToppers();
  renderFaqs();
  setupEventListeners();
  setupScholarshipSlider();
  setupStickyNavbar();
});

// Render Courses
function renderCourses(filter = 'all') {
  const container = document.getElementById('coursesGrid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? COURSES_DATA 
    : COURSES_DATA.filter(c => c.category === filter);

  container.innerHTML = filtered.map(course => `
    <div class="course-card" data-category="${course.category}">
      <div class="course-header">
        <div class="course-badge-row">
          <span class="course-category-badge">${course.categoryBadge}</span>
          <span class="course-target-year">${course.targetYear}</span>
        </div>
        <h3 class="course-title">${course.title}</h3>
        <p class="course-subtitle">${course.subtitle}</p>
      </div>

      <div class="course-body">
        <ul class="course-features-list">
          ${course.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join('')}
        </ul>

        <div class="course-meta-tags">
          <span class="meta-chip"><i class="fa-solid fa-clock"></i> ${course.duration}</span>
          <span class="meta-chip"><i class="fa-solid fa-users"></i> ${course.batchSize}</span>
          <span class="meta-chip"><i class="fa-solid fa-laptop-code"></i> ${course.mode}</span>
        </div>
      </div>

      <div class="course-footer">
        <button class="btn-card-primary" onclick="openDemoForCourse('${course.title}')">
          <i class="fa-solid fa-graduation-cap"></i> Free Demo
        </button>
        <button class="btn-card-syllabus" onclick="openDownloadModal('${course.title}')" title="Download Syllabus">
          <i class="fa-solid fa-file-arrow-down"></i> Syllabus
        </button>
      </div>
    </div>
  `).join('');
}

// Render Faculty
function renderFaculty() {
  const container = document.getElementById('facultyGrid');
  if (!container) return;

  container.innerHTML = FACULTY_DATA.map(f => `
    <div class="faculty-card">
      <div class="faculty-img-wrapper">
        <img src="${f.image}" alt="${f.name}" loading="lazy" />
        <span class="faculty-tag">${f.degree}</span>
      </div>
      <div class="faculty-info">
        <h3 class="faculty-name">${f.name}</h3>
        <div class="faculty-role">${f.role}</div>
        <p class="faculty-desc">${f.desc}</p>
        <div class="faculty-meta">
          <span><i class="fa-solid fa-award"></i> ${f.experience}</span>
          <span><i class="fa-solid fa-star"></i> 4.9/5 Rating</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Toppers
function renderToppers() {
  const container = document.getElementById('toppersGrid');
  if (!container) return;

  container.innerHTML = TOPPERS_DATA.map(t => `
    <div class="topper-card">
      <span class="topper-badge-top">${t.score}</span>
      <div class="topper-avatar-wrap">
        <img src="${t.avatar}" alt="${t.name}" loading="lazy" />
      </div>
      <h4 class="topper-name">${t.name}</h4>
      <div class="topper-rank-pill">${t.rank}</div>
      <div class="topper-exam">${t.exam}</div>
      <div class="topper-college">${t.college}</div>
    </div>
  `).join('');
}

// Render FAQs
function renderFaqs() {
  const container = document.getElementById('faqAccordion');
  if (!container) return;

  container.innerHTML = FAQS_DATA.map((faq, index) => `
    <div class="accordion-item ${index === 0 ? 'active' : ''}">
      <button class="accordion-header" onclick="toggleFaq(${index})">
        <h4>${faq.question}</h4>
        <i class="fa-solid fa-chevron-down accordion-icon"></i>
      </button>
      <div class="accordion-content" style="${index === 0 ? 'max-height: 250px;' : ''}">
        <div class="accordion-content-inner">
          <p>${faq.answer}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// Toggle FAQ item
function toggleFaq(index) {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach((item, idx) => {
    const content = item.querySelector('.accordion-content');
    if (idx === index) {
      const isActive = item.classList.contains('active');
      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    } else {
      item.classList.remove('active');
      const otherContent = item.querySelector('.accordion-content');
      if (otherContent) otherContent.style.maxHeight = null;
    }
  });
}

// ==========================================================================
// 3. SCHOLARSHIP SLIDER CALCULATOR
// ==========================================================================

function setupScholarshipSlider() {
  const slider = document.getElementById('marksRange');
  const sliderValue = document.getElementById('sliderValue');
  const output = document.getElementById('scholarshipOutput');

  if (!slider) return;

  slider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    sliderValue.textContent = val + '%';

    if (val >= 95) {
      output.textContent = 'Up to 100% Fee Waiver';
      output.style.color = '#16a34a';
    } else if (val >= 90) {
      output.textContent = 'Up to 75% Fee Waiver';
      output.style.color = '#dc2626';
    } else if (val >= 80) {
      output.textContent = 'Up to 50% Fee Waiver';
      output.style.color = '#b91c1c';
    } else if (val >= 70) {
      output.textContent = 'Up to 30% Fee Waiver';
      output.style.color = '#d97706';
    } else {
      output.textContent = 'Up to 15% Early Bird Discount';
      output.style.color = '#64748b';
    }
  });
}

// ==========================================================================
// 4. EVENT LISTENERS & MODAL MANAGEMENT
// ==========================================================================

function setupEventListeners() {
  // Course filter tabs
  const filterTabs = document.querySelectorAll('#courseFilterTabs .tab-btn');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');
      renderCourses(filter);
    });
  });

  // Mobile drawer controls
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileDrawer = document.getElementById('mobileDrawer');

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // Close drawer on clicking mobile link
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Demo Modal Triggers
  const openDemoNav = document.getElementById('openDemoModalNav');
  const openDemoHero = document.getElementById('heroBookDemoBtn');
  const openDemoMobile = document.getElementById('openDemoModalMobile');
  const closeDemoBtn = document.getElementById('closeDemoModalBtn');
  const demoBackdrop = document.getElementById('demoModalBackdrop');

  if (openDemoNav) openDemoNav.addEventListener('click', openDemoModal);
  if (openDemoHero) openDemoHero.addEventListener('click', openDemoModal);
  if (openDemoMobile) {
    openDemoMobile.addEventListener('click', () => {
      closeDrawer();
      openDemoModal();
    });
  }
  if (closeDemoBtn) closeDemoBtn.addEventListener('click', closeDemoModal);
  if (demoBackdrop) demoBackdrop.addEventListener('click', closeDemoModal);

  // Download Modal Triggers
  const closeDownloadBtn = document.getElementById('closeDownloadModalBtn');
  const dlBackdrop = document.getElementById('downloadModalBackdrop');
  if (closeDownloadBtn) closeDownloadBtn.addEventListener('click', closeDownloadModal);
  if (dlBackdrop) dlBackdrop.addEventListener('click', closeDownloadModal);

  // Success Modal Close
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');
  const successBackdrop = document.getElementById('successModalBackdrop');
  if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeSuccessModal);
  if (successBackdrop) successBackdrop.addEventListener('click', closeSuccessModal);

  // ESC key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDemoModal();
      closeDownloadModal();
      closeSuccessModal();
      closeDrawer();
    }
  });
}

// Modal open/close functions
function openDemoModal() {
  document.getElementById('demoModalBackdrop').classList.add('active');
  document.getElementById('demoModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDemoModal() {
  const backdrop = document.getElementById('demoModalBackdrop');
  const modal = document.getElementById('demoModal');
  if (backdrop) backdrop.classList.remove('active');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function openDownloadModal(resourceTitle = null) {
  if (resourceTitle) {
    const select = document.getElementById('dlKit');
    if (select) {
      // Find matching or keep current
      for (let opt of select.options) {
        if (opt.text.toLowerCase().includes('brochure')) {
          opt.selected = true;
          break;
        }
      }
    }
  }
  document.getElementById('downloadModalBackdrop').classList.add('active');
  document.getElementById('downloadModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDownloadModal() {
  const backdrop = document.getElementById('downloadModalBackdrop');
  const modal = document.getElementById('downloadModal');
  if (backdrop) backdrop.classList.remove('active');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function openSuccessModal(title, msg, whatsappUrl) {
  const modal = document.getElementById('successModal');
  const backdrop = document.getElementById('successModalBackdrop');
  const titleEl = document.getElementById('successModalTitle');
  const msgEl = document.getElementById('successModalMessage');
  const waLink = document.getElementById('successWhatsAppLink');

  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = msg;
  if (waLink && whatsappUrl) waLink.href = whatsappUrl;

  backdrop.classList.add('active');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSuccessModal() {
  const backdrop = document.getElementById('successModalBackdrop');
  const modal = document.getElementById('successModal');
  if (backdrop) backdrop.classList.remove('active');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Quick action from course card
function openDemoForCourse(courseName) {
  openDemoModal();
  const streamSelect = document.getElementById('demoStream');
  if (streamSelect) {
    if (courseName.includes('JEE')) streamSelect.value = 'Physics & Maths (JEE)';
    else if (courseName.includes('NEET')) streamSelect.value = 'Physics & Biology (NEET)';
    else if (courseName.includes('Foundation')) streamSelect.value = 'Science & Maths (Class 8-10 Foundation)';
    else streamSelect.value = 'Full Comprehensive Package';
  }
}

// Quick action from batch table
function quickApplyBatch(batchName) {
  openDemoModal();
  showToast(`Selected: ${batchName}. Fill your details to reserve.`);
}

function openKsatRegistration() {
  openDemoModal();
  showToast('Registration for K-SAT Scholarship: Fill your details below.');
}

// Filter course shortcut from footer
function filterCourses(category) {
  const tab = document.querySelector(`#courseFilterTabs .tab-btn[data-filter="${category}"]`);
  if (tab) {
    document.querySelectorAll('#courseFilterTabs .tab-btn').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  }
  renderCourses(category);
}

// Sticky Navbar Scroll
function setupStickyNavbar() {
  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ==========================================================================
// 5. FORM SUBMISSION HANDLERS (WITH WHATSAPP SYNC)
// ==========================================================================

// Handle Hero or Contact Form Submissions
function handleCounselingSubmit(source = 'hero') {
  let name, phone, courseOrClass, mode;

  if (source === 'hero') {
    name = document.getElementById('studentName').value.trim();
    phone = document.getElementById('studentPhone').value.trim();
    const studentClass = document.getElementById('studentClass').value;
    const targetGoal = document.getElementById('targetGoal').value;
    const modeEl = document.querySelector('input[name="learningMode"]:checked');
    mode = modeEl ? modeEl.value : 'Classroom Offline';
    courseOrClass = `${studentClass} - ${targetGoal}`;
  } else {
    name = document.getElementById('contactName').value.trim();
    phone = document.getElementById('contactPhone').value.trim();
    courseOrClass = document.getElementById('contactCourse').value;
    mode = 'Inquiry via Contact Section';
  }

  if (!name || !phone) {
    showToast('Please fill all required fields');
    return;
  }

  // Build personalized WhatsApp Lead message
  const institutePhone = '919876543210';
  const textMsg = `Hello Kinematics Classes!%0A%0AMy Name: *${encodeURIComponent(name)}*%0APhone: *${phone}*%0AInterested In: *${encodeURIComponent(courseOrClass)}*%0ALearning Mode: *${encodeURIComponent(mode)}*%0A%0APlease schedule my free counseling & demo session.`;
  const whatsappUrl = `https://wa.me/${institutePhone}?text=${textMsg}`;

  // Reset Form
  if (source === 'hero') {
    document.getElementById('heroCounselingForm').reset();
  } else {
    document.getElementById('contactAdmissionForm').reset();
  }

  // Show Success Modal
  openSuccessModal(
    'Inquiry Received Successfully!',
    `Thank you, ${name}! Your request has been recorded. Our Senior Academic Counselor will call you at ${phone} to schedule your session. You can also chat with us immediately on WhatsApp.`,
    whatsappUrl
  );
}

// Handle Modal Demo Class Booking
function handleDemoModalSubmit() {
  const name = document.getElementById('demoName').value.trim();
  const phone = document.getElementById('demoPhone').value.trim();
  const currentClass = document.getElementById('demoClass').value;
  const stream = document.getElementById('demoStream').value;
  const slot = document.getElementById('demoSlot').value;

  closeDemoModal();

  const institutePhone = '919876543210';
  const textMsg = `Hello Kinematics Classes!%0A%0A*Demo Class Booking Request*%0AStudent Name: *${encodeURIComponent(name)}*%0APhone: *${phone}*%0AClass: *${encodeURIComponent(currentClass)}*%0ASubject / Stream: *${encodeURIComponent(stream)}*%0APreferred Slot: *${encodeURIComponent(slot)}*%0A%0APlease confirm my 2-day trial pass!`;
  const whatsappUrl = `https://wa.me/${institutePhone}?text=${textMsg}`;

  document.getElementById('demoModalForm').reset();

  openSuccessModal(
    'Demo Class Seat Reserved!',
    `Congratulations ${name}! Your 2-Day Trial Pass for "${stream}" (${slot}) is reserved. We have forwarded your confirmation code via SMS.`,
    whatsappUrl
  );
}

// Handle Download Brochure / Kit
function handleDownloadSubmit() {
  const name = document.getElementById('dlName').value.trim();
  const phone = document.getElementById('dlPhone').value.trim();
  const kit = document.getElementById('dlKit').value;

  closeDownloadModal();

  const institutePhone = '919876543210';
  const textMsg = `Hi Kinematics Classes!%0A%0AMy Name: *${encodeURIComponent(name)}*%0APhone: *${phone}*%0AI requested the study material: *${encodeURIComponent(kit)}*.%0APlease share the PDF file.`;
  const whatsappUrl = `https://wa.me/${institutePhone}?text=${textMsg}`;

  document.getElementById('downloadForm').reset();

  openSuccessModal(
    'Study Kit Dispatched!',
    `Thank you ${name}! Your requested resource "${kit}" is being sent directly to your WhatsApp (${phone}). You can also click below to open the download immediately.`,
    whatsappUrl
  );
}

// ==========================================================================
// 6. TOAST UTILITY
// ==========================================================================

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

