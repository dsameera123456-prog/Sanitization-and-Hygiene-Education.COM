const surveyItems = [
  {
    title: "Handwashing Awareness",
    survey: "70% follow proper handwashing",
    description: "Personal hygiene practice observed during community interactions.",
    detail: "Handwashing awareness improves household hygiene and reduces the spread of communicable diseases. The survey showed good adoption, but regular soap use and correct timing still need reinforcement.",
    benefits: ["Reduces disease spread", "Prevents infections", "Improves health", "Builds healthy habits"],
    disadvantages: ["Diarrhea risk", "Germ spread", "Infections", "Poor health"],
    tip: "Wash hands with soap for 20 seconds.",
    color: "linear-gradient(135deg, #2563eb, #06b6d4)",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/OCD_handwash.jpg",
    label: "Soap and clean hands"
  },
  {
    title: "Waste Management",
    survey: "42% follow waste segregation",
    description: "Segregation practices were limited in several community areas.",
    detail: "Waste segregation is one of the most important steps for clean surroundings. Low adoption can lead to mixed garbage, blocked drains, pollution, and disease-spreading conditions.",
    benefits: ["Cleaner surroundings", "Less pollution", "Better health", "Cleaner environment"],
    disadvantages: ["Pollution", "Disease spread", "Mosquito breeding", "Dirty surroundings"],
    tip: "Separate wet and dry waste.",
    color: "linear-gradient(135deg, #059669, #84cc16)",
    image: "assets/survey/waste-management.svg",
    label: "Separate waste bins"
  },
  {
    title: "Safe Drinking Water",
    survey: "75% use safe drinking water",
    description: "Most surveyed families reported using safer drinking water sources.",
    detail: "Safe drinking water protects families from water-borne diseases. Awareness should continue around boiling, filtration, storage hygiene, and preventing contamination at home.",
    benefits: ["Prevents diseases", "Improves health", "Safe for children", "Reduces infections"],
    disadvantages: ["Cholera", "Typhoid", "Diarrhea", "Stomach infections"],
    tip: "Drink boiled or filtered water.",
    color: "linear-gradient(135deg, #0891b2, #22d3ee)",
    image: "https://images.squarespace-cdn.com/content/v1/631ad7c29c83a911cf20466c/5654e9b4-0114-48b1-a538-d2c0722bbc07/tap-water-glass.png",
    label: "Filtered drinking water"
  },
  {
    title: "Environmental Cleanliness",
    survey: "67% maintain clean surroundings",
    description: "Clean surroundings were observed in many homes and streets.",
    detail: "Environmental cleanliness supports healthy living conditions. Daily sweeping, proper drain care, and responsible public behavior reduce pollution, odor, and infection risks.",
    benefits: ["Healthy environment", "Better quality of life", "Reduced pollution", "Fewer diseases"],
    disadvantages: ["Bad smell", "Mosquitoes", "Pollution", "Diseases"],
    tip: "Keep surroundings clean daily.",
    color: "linear-gradient(135deg, #4f46e5, #14b8a6)",
    image: "https://static.wixstatic.com/media/cab1d9_11aa5071284d4d43b99396104d7d5505~mv2.jpg/v1/fill/w_980%2Ch_653%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/DSC05561.jpg",
    label: "Clean community street"
  },
  {
    title: "Disease Prevention",
    survey: "65% know prevention methods",
    description: "Awareness exists, but prevention habits need stronger follow-up.",
    detail: "Disease prevention depends on clean surroundings, safe water, mosquito control, and early awareness. Community education helps families identify risks before they become health emergencies.",
    benefits: ["Prevents dengue", "Prevents malaria", "Protects families", "Improves health"],
    disadvantages: ["Mosquito-borne diseases", "Health risks", "Medical expenses", "Poor living conditions"],
    tip: "Avoid stagnant water.",
    color: "linear-gradient(135deg, #7c3aed, #06b6d4)",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Aedes_aegypti.jpg",
    label: "Disease prevention"
  }
];

const weeks = [
  ["Week 1", "Community Survey and Field Observation", ["Door-to-door visits", "Community interaction", "Hygiene assessment", "Data collection"]],
  ["Week 2", "Handwashing and Personal Hygiene Awareness", ["Handwashing demonstrations", "Hygiene sessions", "Student awareness", "Public interaction"]],
  ["Week 3", "School and Anganwadi Awareness Programs", ["School visits", "Anganwadi sessions", "Mid-day meal awareness", "Interactive learning"]],
  ["Week 4", "Environmental Sanitation Awareness", ["Waste management awareness", "Drainage cleanliness", "Mosquito prevention", "Street sanitation"]],
  ["Week 5", "Disease Prevention and Safe Drinking Water Awareness", ["Dengue awareness", "Malaria prevention", "Water safety", "Water contamination prevention"]],
  ["Week 6", "Women Hygiene and Health Education", ["Menstrual hygiene awareness", "Personal cleanliness education", "Safe disposal methods", "Health discussions"]],
  ["Week 7", "Community Participation and Civic Responsibility", ["Community discussions", "Cleanliness campaigns", "Municipal awareness", "Public responsibility programs"]],
  ["Week 8", "Project Evaluation and Final Documentation", ["Feedback collection", "Project analysis", "Outcome evaluation", "Final documentation"]]
];

const prevention = [
  {
    title: "Dengue",
    symptoms: ["High fever", "Severe headache", "Joint pain"],
    prevention: ["Remove stagnant water", "Use mosquito nets", "Cover water containers"],
    tip: "Check coolers, pots, and open containers every week."
  },
  {
    title: "Malaria",
    symptoms: ["Fever with chills", "Sweating", "Body pain"],
    prevention: ["Use mosquito repellents", "Maintain drainage", "Sleep under nets"],
    tip: "Prevent mosquito breeding near homes."
  },
  {
    title: "Typhoid",
    symptoms: ["Long fever", "Weakness", "Stomach pain"],
    prevention: ["Drink safe water", "Wash hands", "Eat hygienic food"],
    tip: "Avoid uncovered food and unsafe water."
  },
  {
    title: "Cholera",
    symptoms: ["Watery diarrhea", "Vomiting", "Dehydration"],
    prevention: ["Use boiled water", "Maintain sanitation", "Wash fruits and vegetables"],
    tip: "Use clean water for drinking and cooking."
  },
  {
    title: "Diarrhea",
    symptoms: ["Loose stools", "Cramps", "Dehydration"],
    prevention: ["Wash hands", "Use clean toilets", "Store food safely"],
    tip: "Keep ORS available and seek care when symptoms persist."
  },
  {
    title: "Mosquito Prevention",
    symptoms: ["Bites", "Fever risk", "Skin irritation"],
    prevention: ["Avoid stagnant water", "Keep surroundings clean", "Use window screens"],
    tip: "Dry unused containers and clean drains regularly."
  }
];

const activities = [
  {
    title: "Door-to-door visits",
    purpose: "Students visited households to understand sanitation practices, collect observations, and speak directly with families about hygiene habits.",
    actions: ["Interacted with residents", "Observed home sanitation practices", "Collected survey responses", "Explained daily hygiene precautions"],
    impact: ["Improved personal communication with families", "Helped identify real community problems", "Built trust with residents", "Encouraged families to follow cleaner habits"],
    tip: "Keep home surroundings clean and discuss hygiene practices with every family member."
  },
  {
    title: "Handwashing demonstrations",
    purpose: "Practical demonstrations were conducted to show the correct method and timing for washing hands with soap.",
    actions: ["Explained the 20-second handwashing method", "Demonstrated soap use", "Discussed handwashing before meals", "Highlighted handwashing after toilet use"],
    impact: ["Reduced infection risk", "Improved awareness among children", "Created healthier daily routines", "Encouraged proper soap usage"],
    tip: "Wash hands with soap before eating, after using toilets, and after touching waste."
  },
  {
    title: "School awareness sessions",
    purpose: "Awareness sessions were conducted for students to build hygiene habits at an early age.",
    actions: ["Conducted classroom discussions", "Explained personal hygiene", "Discussed clean drinking water", "Encouraged students to share learning at home"],
    impact: ["Improved student awareness", "Created child-led hygiene messaging", "Supported cleaner school habits", "Helped spread awareness to families"],
    tip: "Children can become strong hygiene ambassadors when they practice and share what they learn."
  },
  {
    title: "Anganwadi programs",
    purpose: "The team interacted with children and workers at Anganwadi centers to promote cleanliness, nutrition hygiene, and safe surroundings.",
    actions: ["Visited Anganwadi centers", "Observed cleanliness practices", "Discussed safe food handling", "Shared child-friendly hygiene messages"],
    impact: ["Supported early childhood health", "Improved awareness among caretakers", "Encouraged clean meal practices", "Reduced hygiene-related risks for children"],
    tip: "Clean hands, clean utensils, and clean surroundings are essential around young children."
  },
  {
    title: "Public hygiene awareness",
    purpose: "Public interactions focused on everyday hygiene responsibilities in homes, streets, schools, and shared community spaces.",
    actions: ["Discussed public cleanliness", "Explained disease risks", "Encouraged responsible waste disposal", "Promoted clean surroundings"],
    impact: ["Improved community participation", "Reduced careless littering habits", "Created shared responsibility", "Strengthened public health awareness"],
    tip: "Public hygiene improves only when every person treats cleanliness as a shared duty."
  },
  {
    title: "Women hygiene education",
    purpose: "Women hygiene sessions focused on personal cleanliness, menstrual hygiene, safe disposal practices, and health discussions.",
    actions: ["Discussed menstrual hygiene", "Explained safe disposal methods", "Promoted personal cleanliness", "Encouraged open health conversations"],
    impact: ["Improved health awareness", "Reduced hesitation around hygiene topics", "Supported safer disposal practices", "Encouraged better self-care"],
    tip: "Maintain personal hygiene and use safe, covered disposal methods for sanitary waste."
  },
  {
    title: "Safe drinking water awareness",
    purpose: "The activity explained why boiled, filtered, and safely stored water is important for preventing water-borne diseases.",
    actions: ["Explained water contamination risks", "Discussed boiling and filtration", "Checked storage practices", "Promoted covered water containers"],
    impact: ["Reduced risk of diarrhea and typhoid", "Improved household water safety", "Protected children from infections", "Encouraged better storage habits"],
    tip: "Use boiled or filtered water and store it in a clean, covered container."
  },
  {
    title: "Disease prevention awareness",
    purpose: "Disease prevention awareness focused on dengue, malaria, typhoid, cholera, diarrhea, and common sanitation-related health risks.",
    actions: ["Explained common symptoms", "Discussed mosquito prevention", "Promoted early medical care", "Shared sanitation precautions"],
    impact: ["Improved prevention knowledge", "Reduced mosquito-breeding risks", "Helped families identify warning signs", "Encouraged timely healthcare"],
    tip: "Avoid stagnant water and seek medical care when fever or severe symptoms continue."
  },
  {
    title: "Civic responsibility awareness",
    purpose: "This activity encouraged residents to participate in cleanliness efforts and support public sanitation initiatives.",
    actions: ["Discussed public responsibility", "Promoted municipal cooperation", "Encouraged cleanliness campaigns", "Explained responsible public behavior"],
    impact: ["Strengthened community ownership", "Encouraged cooperation with local services", "Supported cleaner public spaces", "Improved civic awareness"],
    tip: "A clean community needs regular participation from residents, students, and local bodies."
  }
];

const schemes = [
  {
    title: "Swachh Bharat Mission",
    objective: "Improve sanitation and cleanliness in communities.",
    benefits: "Cleaner public spaces, better hygiene, and reduced open defecation.",
    importance: "Supports long-term community cleanliness and civic responsibility."
  },
  {
    title: "National Health Mission",
    objective: "Strengthen public health services and community-level care.",
    benefits: "Better access to health awareness, immunization, and preventive care.",
    importance: "Helps families understand and use local health resources."
  },
  {
    title: "Jal Jeevan Mission",
    objective: "Provide safe and adequate drinking water through household tap connections.",
    benefits: "Improves water safety and reduces water-borne disease risks.",
    importance: "Connects hygiene awareness with reliable drinking water access."
  },
  {
    title: "Ayushman Bharat",
    objective: "Provide health protection and promote accessible healthcare.",
    benefits: "Supports vulnerable families with healthcare access.",
    importance: "Encourages preventive care and timely medical support."
  }
];

const officialResources = [
  {
    name: "Swachh Bharat Mission",
    badge: "SBM",
    description: "National cleanliness mission promoting sanitation, waste management, and hygiene awareness across India.",
    website: "https://swachhbharatmission.ddws.gov.in/"
  },
  {
    name: "National Health Mission",
    badge: "NHM",
    description: "Government initiative to improve healthcare accessibility and public health services.",
    website: "https://nhm.gov.in/"
  },
  {
    name: "Jal Jeevan Mission",
    badge: "JJM",
    description: "Mission to provide safe and adequate drinking water to every rural household.",
    website: "https://jaljeevanmission.gov.in/"
  },
  {
    name: "Ayushman Bharat",
    badge: "PM-JAY",
    description: "National healthcare scheme providing affordable healthcare services to citizens.",
    website: "https://www.pmjay.gov.in/"
  },
  {
    name: "Ministry of Health and Family Welfare",
    badge: "MoHFW",
    description: "Official health ministry website containing public health programs and awareness resources.",
    website: "https://main.mohfw.gov.in/"
  },
  {
    name: "MyGov India",
    badge: "MyGov",
    description: "Citizen engagement platform containing awareness campaigns and government initiatives.",
    website: "https://www.mygov.in/"
  }
];

let activeSurveyIndex = 0;

const createList = (items) => items.map((item) => `<li>${item}</li>`).join("");

const teluguText = {
  "Sanitization and Hygiene": "పరిశుభ్రత మరియు ఆరోగ్య అలవాట్లు",
  "About": "గురించి",
  "Survey": "సర్వే",
  "Journey": "ప్రయాణం",
  "Prevention": "నివారణ",
  "Team": "బృందం",
  "Contact": "సంప్రదించండి",
  "Community Service Project 2025-2026": "కమ్యూనిటీ సర్వీస్ ప్రాజెక్ట్ 2025-2026",
  "Sanitization and Hygiene Education": "పరిశుభ్రత మరియు ఆరోగ్య విద్య",
  "Creating awareness about sanitation, personal hygiene, environmental cleanliness, and disease prevention in Gooty community.": "గూటి సమాజంలో పారిశుధ్యం, వ్యక్తిగత పరిశుభ్రత, పర్యావరణ శుభ్రత మరియు వ్యాధి నివారణపై అవగాహన కల్పించడం.",
  "Explore Project": "ప్రాజెక్ట్ చూడండి",
  "View Survey Results": "సర్వే ఫలితాలు చూడండి",
  "Weeks Completed": "వారాలు పూర్తయ్యాయి",
  "People Surveyed": "మందిని సర్వే చేశారు",
  "Community Interactions": "సమాజ పరస్పర చర్యలు",
  "Awareness Programs": "అవగాహన కార్యక్రమాలు",
  "About CSP": "CSP గురించి",
  "Engineering learning connected with public health action": "ప్రజారోగ్య చర్యలతో అనుసంధానమైన ఇంజినీరింగ్ అభ్యాసం",
  "Project Information": "ప్రాజెక్ట్ సమాచారం",
  "Academic and community implementation details": "విద్యా మరియు సమాజ అమలు వివరాలు",
  "Survey Gallery": "సర్వే గ్యాలరీ",
  "Community Survey & Awareness Gallery": "కమ్యూనిటీ సర్వే మరియు అవగాహన గ్యాలరీ",
  "Explore sanitation and hygiene problems identified during the project.": "ప్రాజెక్ట్ సమయంలో గుర్తించిన పారిశుధ్యం మరియు పరిశుభ్రత సమస్యలను చూడండి.",
  "Field Findings": "క్షేత్ర పరిశీలనలు",
  "Problems Identified": "గుర్తించిన సమస్యలు",
  "8 Week Journey": "8 వారాల ప్రయాణం",
  "Community Service Journey": "కమ్యూనిటీ సర్వీస్ ప్రయాణం",
  "Field Work": "క్షేత్ర పని",
  "Awareness Activities": "అవగాహన కార్యకలాపాలు",
  "Public Health": "ప్రజారోగ్యం",
  "Disease Prevention": "వ్యాధి నివారణ",
  "Support Systems": "సహాయక వ్యవస్థలు",
  "Government Schemes": "ప్రభుత్వ పథకాలు",
  "Trusted Links": "నమ్మకమైన లింకులు",
  "Official Government Resources": "అధికారిక ప్రభుత్వ వనరులు",
  "Explore trusted government initiatives and official resources related to sanitation, hygiene, healthcare, and clean water.": "పారిశుధ్యం, పరిశుభ్రత, ఆరోగ్య సంరక్షణ మరియు స్వచ్ఛమైన నీటి గురించి నమ్మకమైన ప్రభుత్వ వనరులను చూడండి.",
  "Project Gallery": "ప్రాజెక్ట్ గ్యాలరీ",
  "Community Engagement Moments": "సమాజ అవగాహన క్షణాలు",
  "Impact": "ప్రభావం",
  "Project Outcomes": "ప్రాజెక్ట్ ఫలితాలు",
  "Leadership": "నాయకత్వం",
  "Project Leadership": "ప్రాజెక్ట్ నాయకత్వం",
  "Student Team": "విద్యార్థి బృందం",
  "Our Team": "మా బృందం",
  "Students of Electronics and Communication Engineering working together to create awareness on sanitation, hygiene, and public health.": "పారిశుధ్యం, పరిశుభ్రత మరియు ప్రజారోగ్యంపై అవగాహన కల్పించడానికి కలిసి పనిచేస్తున్న ఎలక్ట్రానిక్స్ అండ్ కమ్యూనికేషన్ ఇంజినీరింగ్ విద్యార్థులు.",
  "Visit Official Website": "అధికారిక వెబ్‌సైట్ చూడండి",
  "Official Website": "అధికారిక వెబ్‌సైట్",
  "Close": "మూసివేయి",
  "View details": "వివరాలు చూడండి"
};

function setupLanguageSelector() {
  const select = document.querySelector(".language-select");
  const originalText = new WeakMap();

  function translatePage(language) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (node.parentElement.closest("script, style")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const original = originalText.get(node);
      const trimmed = original.trim();
      const translated = language === "te" ? teluguText[trimmed] : null;
      node.nodeValue = translated ? original.replace(trimmed, translated) : original;
    });
  }

  const saved = localStorage.getItem("csp-language") || "en";
  select.value = saved;
  translatePage(saved);

  select.addEventListener("change", () => {
    localStorage.setItem("csp-language", select.value);
    translatePage(select.value);
  });
}

function renderSurveyCards() {
  const grid = document.querySelector("#surveyGrid");
  grid.innerHTML = surveyItems.map((item, index) => `
    <button class="survey-card reveal" type="button" data-index="${index}" aria-label="Open ${item.title} survey details">
      <div class="survey-image has-photo" style="--visual-bg: ${item.color}; --photo: url('${item.image}');" data-label="${item.label}"></div>
      <div class="survey-body">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <span class="percent">${item.survey}</span>
      </div>
    </button>
  `).join("");
}

function renderTimeline() {
  const timeline = document.querySelector("#timeline");
  timeline.innerHTML = weeks.map(([week, title, activities]) => `
    <article class="timeline-item reveal">
      <span class="timeline-dot"></span>
      <div class="timeline-card">
        <strong>${week}</strong>
        <h3>${title}</h3>
        <ul>${createList(activities)}</ul>
      </div>
    </article>
  `).join("");
}

function renderActivityCards() {
  const grid = document.querySelector("#activityGrid");
  grid.innerHTML = activities.map((item, index) => `
    <button class="activity-card reveal" type="button" data-activity-index="${index}" aria-label="Open ${item.title} details">
      ${item.title}
      <span>View details</span>
    </button>
  `).join("");
}

function renderPreventionCards() {
  const grid = document.querySelector("#preventionGrid");
  grid.innerHTML = prevention.map((item) => `
    <article class="prevention-card reveal">
      <h3>${item.title}</h3>
      <h4>Symptoms</h4>
      <ul>${createList(item.symptoms)}</ul>
      <h4>Prevention Methods</h4>
      <ul>${createList(item.prevention)}</ul>
      <h4>Awareness Tip</h4>
      <p>${item.tip}</p>
    </article>
  `).join("");
}

function renderSchemeCards() {
  const grid = document.querySelector("#schemeGrid");
  grid.innerHTML = schemes.map((item) => `
    <article class="scheme-card reveal">
      <h3>${item.title}</h3>
      <h4>Objective</h4>
      <p>${item.objective}</p>
      <h4>Benefits</h4>
      <p>${item.benefits}</p>
      <h4>Importance</h4>
      <p>${item.importance}</p>
    </article>
  `).join("");
}

function renderResourceCards() {
  const grid = document.querySelector("#resourceGrid");
  grid.innerHTML = officialResources.map((item) => `
    <article class="resource-card reveal">
      <div class="resource-topline">
        <div class="resource-logo" aria-hidden="true">${item.badge}</div>
        <span class="official-badge">Official Website</span>
      </div>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <a class="resource-link" href="${item.website}" target="_blank" rel="noopener noreferrer" aria-label="Visit official website for ${item.name}">
        Visit Official Website
      </a>
    </article>
  `).join("");
}

function openModal(index) {
  activeSurveyIndex = (index + surveyItems.length) % surveyItems.length;
  const item = surveyItems[activeSurveyIndex];
  const modal = document.querySelector("#surveyModal");

  document.querySelector("#modalImage").style.setProperty("--visual-bg", item.color);
  document.querySelector("#modalImage").style.setProperty("--photo", `url('${item.image}')`);
  document.querySelector("#modalImage").classList.add("has-photo");
  document.querySelector("#modalImage").dataset.label = item.label;
  document.querySelector("#modalSurvey").textContent = `Survey Result: ${item.survey}`;
  document.querySelector("#modalTitle").textContent = item.title;
  document.querySelector("#modalDetail").textContent = item.detail;
  document.querySelector("#modalBenefits").innerHTML = createList(item.benefits);
  document.querySelector("#modalDisadvantages").innerHTML = createList(item.disadvantages);
  document.querySelector("#modalTip").textContent = `Awareness Tip: ${item.tip}`;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.querySelector("#surveyModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openActivityModal(index) {
  const item = activities[index];
  const modal = document.querySelector("#activityModal");

  document.querySelector("#activityModalTitle").textContent = item.title;
  document.querySelector("#activityModalPurpose").textContent = item.purpose;
  document.querySelector("#activityModalActions").innerHTML = createList(item.actions);
  document.querySelector("#activityModalImpact").innerHTML = createList(item.impact);
  document.querySelector("#activityModalTip").textContent = `Awareness Tip: ${item.tip}`;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeActivityModal() {
  const modal = document.querySelector("#activityModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openGalleryModal(tile) {
  const image = tile.querySelector("img");
  const title = tile.querySelector("figcaption strong");
  const info = tile.querySelector("figcaption span");
  const modal = document.querySelector("#galleryModal");
  const modalImage = document.querySelector("#galleryModalImage");

  modalImage.src = image.src;
  modalImage.alt = image.alt;
  document.querySelector("#galleryModalTitle").textContent = title.textContent;
  document.querySelector("#galleryModalInfo").textContent = info.textContent;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeGalleryModal() {
  const modal = document.querySelector("#galleryModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function setupInteractions() {
  document.querySelector("#surveyGrid").addEventListener("click", (event) => {
    const card = event.target.closest(".survey-card");
    if (card) openModal(Number(card.dataset.index));
  });

  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.querySelector(".modal-nav.prev").addEventListener("click", () => openModal(activeSurveyIndex - 1));
  document.querySelector(".modal-nav.next").addEventListener("click", () => openModal(activeSurveyIndex + 1));

  document.querySelector("#activityGrid").addEventListener("click", (event) => {
    const card = event.target.closest(".activity-card");
    if (card) openActivityModal(Number(card.dataset.activityIndex));
  });

  document.querySelectorAll("[data-close-activity]").forEach((element) => {
    element.addEventListener("click", closeActivityModal);
  });

  document.querySelectorAll(".gallery-tile").forEach((tile) => {
    tile.addEventListener("click", () => openGalleryModal(tile));
    tile.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openGalleryModal(tile);
      }
    });
  });

  document.querySelectorAll("[data-close-gallery]").forEach((element) => {
    element.addEventListener("click", closeGalleryModal);
  });

  document.addEventListener("keydown", (event) => {
    const surveyOpen = document.querySelector("#surveyModal").classList.contains("active");
    const activityOpen = document.querySelector("#activityModal").classList.contains("active");
    const galleryOpen = document.querySelector("#galleryModal").classList.contains("active");
    if (event.key === "Escape" && surveyOpen) closeModal();
    if (event.key === "Escape" && activityOpen) closeActivityModal();
    if (event.key === "Escape" && galleryOpen) closeGalleryModal();
    if (!surveyOpen) return;
    if (event.key === "ArrowLeft") openModal(activeSurveyIndex - 1);
    if (event.key === "ArrowRight") openModal(activeSurveyIndex + 1);
  });

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.classList.toggle("active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  });
}

function setupThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem("csp-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = savedTheme ? savedTheme === "dark" : prefersDark;

  function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    localStorage.setItem("csp-theme", isDark ? "dark" : "light");
  }

  applyTheme(useDark);

  themeToggle.addEventListener("click", () => {
    applyTheme(!document.body.classList.contains("dark-mode"));
  });
}

function setupPhotoReel() {
  const reel = document.querySelector(".photo-reel");
  if (!reel) return;

  const track = reel.querySelector(".photo-reel-track");
  const slides = Array.from(track.querySelectorAll("figure"));
  const previous = reel.querySelector(".photo-reel-prev");
  const next = reel.querySelector(".photo-reel-next");
  const dots = reel.querySelector(".photo-reel-dots");
  let activeIndex = 0;
  let autoScrollTimer;

  dots.innerHTML = slides.map((_, index) => `
    <button class="photo-reel-dot" type="button" aria-label="Show photo ${index + 1}"></button>
  `).join("");

  const dotButtons = Array.from(dots.querySelectorAll(".photo-reel-dot"));

  function updateDots(index) {
    activeIndex = (index + slides.length) % slides.length;
    dotButtons.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === activeIndex);
    });
  }

  function goToSlide(index) {
    const targetIndex = (index + slides.length) % slides.length;
    const targetLeft = slides[targetIndex].offsetLeft - track.offsetLeft;
    track.scrollTo({ left: targetLeft, behavior: "smooth" });
    updateDots(targetIndex);
  }

  previous.addEventListener("click", () => goToSlide(activeIndex - 1));
  next.addEventListener("click", () => goToSlide(activeIndex + 1));

  dotButtons.forEach((dot, index) => {
    dot.addEventListener("click", () => goToSlide(index));
  });

  track.addEventListener("scroll", () => {
    const slideWidth = slides[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 0);
    const index = Math.round(track.scrollLeft / slideWidth);
    updateDots(Math.max(0, Math.min(index, slides.length - 1)));
  }, { passive: true });

  function startAutoScroll() {
    clearInterval(autoScrollTimer);
    autoScrollTimer = setInterval(() => goToSlide(activeIndex + 1), 3500);
  }

  function pauseThenResume() {
    clearInterval(autoScrollTimer);
    setTimeout(startAutoScroll, 5000);
  }

  reel.addEventListener("mouseenter", () => clearInterval(autoScrollTimer));
  reel.addEventListener("mouseleave", startAutoScroll);
  reel.addEventListener("touchstart", pauseThenResume, { passive: true });
  previous.addEventListener("click", pauseThenResume);
  next.addEventListener("click", pauseThenResume);
  dotButtons.forEach((dot) => dot.addEventListener("click", pauseThenResume));

  updateDots(0);
  startAutoScroll();
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.counter);
      const suffix = element.dataset.suffix || "";
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      observer.unobserve(element);
    });
  }, { threshold: 0.45 });

  counters.forEach((counter) => observer.observe(counter));
}

window.addEventListener("load", () => {
  setTimeout(() => document.querySelector(".loader").classList.add("hidden"), 450);
});

renderSurveyCards();
renderTimeline();
renderActivityCards();
renderPreventionCards();
renderSchemeCards();
renderResourceCards();
setupThemeToggle();
setupInteractions();
setupLanguageSelector();
setupPhotoReel();
setupRevealAnimations();
setupCounters();
