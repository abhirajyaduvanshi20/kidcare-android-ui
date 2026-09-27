export const INITIAL_KIDS = [
  {
    id: "kid-101",
    name: "Reyansh Sharma",
    gender: "Male",
    dob: "2023-04-14",
    age: "1 yr 5 mos",
    bloodGroup: "B+",
    weight: 11.2,
    height: 82.5,
    headCircumference: 46.8,
    avatar: "/assets/sample_kid_svg.xml",
    photo: "/assets/kid1_1.png",
    allergies: ["Peanuts", "Dust"],
    illnesses: ["Mild Eczema"],
    doctor: "Dr. Ila B",
    hospital: "KidCare Pediatrics & Child Wellness",
    themeColor: "from-blue-600 to-indigo-800",
    gradient: "linear-gradient(135deg, #056DB4 0%, #012741 100%)",
    activeVaccinesCount: "9/14 Given"
  },
  {
    id: "kid-102",
    name: "Ananya Sharma",
    gender: "Female",
    dob: "2021-08-20",
    age: "3 yrs 1 mo",
    bloodGroup: "O+",
    weight: 14.8,
    height: 96.0,
    headCircumference: 49.2,
    avatar: "/assets/user_child_placeholder_green.xml",
    photo: "/assets/ss.png",
    allergies: ["Lactose sensitive"],
    illnesses: ["None"],
    doctor: "Dr. Ila B",
    hospital: "KidCare Pediatrics & Child Wellness",
    themeColor: "from-emerald-500 to-teal-800",
    gradient: "linear-gradient(135deg, #53BF9D 0%, #115e59 100%)",
    activeVaccinesCount: "12/15 Given"
  }
];

export const INITIAL_PARENT = {
  id: "parent-01",
  name: "Priya Sharma",
  relation: "Mother",
  phone: "+91 98765 43210",
  email: "priya.sharma@example.com",
  city: "Bengaluru, India",
  emergencyContact: "+91 98765 00000",
  avatar: "/assets/profile_pic_image.xml"
};

export const INITIAL_FLIPS = [
  {
    id: "flip-001",
    kidId: "kid-101",
    kidName: "Reyansh Sharma",
    type: "ASK_QUESTION",
    title: "Mild fever after 14-month MMR booster shot",
    description: "Reyansh received his booster dose yesterday morning and developed a low-grade temperature (99.8 F) today with mild fussiness. Should we give paracetamol drops?",
    createdDate: "2026-09-25T14:30:00Z",
    status: "Answered",
    statusColor: "#53BF9D",
    attachments: [
      { type: "image", name: "thermometer_reading.jpg", url: "/assets/ss.png" }
    ],
    doctorReply: {
      doctorName: "Dr. Ila B",
      doctorRole: "Senior Pediatrician",
      replyDate: "2026-09-25T16:15:00Z",
      text: "Low-grade fever is a normal immune reaction within 48h of the booster. You may give Calpol (Paracetamol) drops 1.2 ml if temperature exceeds 100 F or if he is irritable. Keep him well hydrated and sponge with lukewarm water.",
      doctorAvatar: "/assets/dr_ila_b.png"
    }
  },
  {
    id: "flip-002",
    kidId: "kid-101",
    kidName: "Reyansh Sharma",
    type: "EMERGENCY",
    title: "Dry cough and wheezing during night sleep",
    description: "Coughing bouts triggered after weather change, especially when lying down. Breathing is slightly rapid.",
    createdDate: "2026-09-26T21:00:00Z",
    status: "Under Review",
    statusColor: "#F7931E",
    attachments: [],
    doctorReply: null
  },
  {
    id: "flip-003",
    kidId: "kid-102",
    kidName: "Ananya Sharma",
    type: "FEEDBACK",
    title: "Response to new digestion probiotic powder",
    description: "Her bowel movements have normalized and stomach cramps subsided after 4 days on the prescribed probiotic. Sharing follow-up feedback.",
    createdDate: "2026-09-22T10:00:00Z",
    status: "Acknowledged",
    statusColor: "#B24592",
    attachments: [],
    doctorReply: {
      doctorName: "Dr. Ila B",
      doctorRole: "Senior Pediatrician",
      replyDate: "2026-09-22T12:45:00Z",
      text: "Excellent news! Continue the probiotic for another 3 days to establish gut flora, then return to normal yogurt intake.",
      doctorAvatar: "/assets/dr_ila_b.png"
    }
  },
  {
    id: "flip-004",
    kidId: "kid-101",
    kidName: "Reyansh Sharma",
    type: "ROUTINE_CHECK",
    title: "18-Month Developmental Milestones check",
    description: "Walking steadily, climbing steps with support, saying 10+ words clearly, stacking 4 blocks.",
    createdDate: "2026-09-20T09:15:00Z",
    status: "Approved",
    statusColor: "#5BBF9B",
    attachments: [],
    doctorReply: {
      doctorName: "Dr. Ila B",
      doctorRole: "Senior Pediatrician",
      replyDate: "2026-09-20T11:00:00Z",
      text: "Growth and motor/speech milestones are tracking wonderfully at the 75th percentile!",
      doctorAvatar: "/assets/dr_ila_b.png"
    }
  }
];

export const INITIAL_APPOINTMENTS = [
  {
    id: "apt-101",
    kidId: "kid-101",
    kidName: "Reyansh Sharma",
    doctor: "Dr. Ila B",
    specialty: "Senior Pediatrician & Child Specialist",
    hospital: "KidCare Wellness Center",
    date: "2026-09-28",
    time: "03:00 PM",
    timestamp: "Tomorrow at 3:00 PM",
    mode: "Online Video Consultation",
    type: "UPCOMING",
    status: "Confirmed",
    bookingCode: "KC-89412",
    symptoms: ["Seasonal Cold", "Post-Vaccination Review", "Diet Advice"],
    notes: "Please have the temperature log and vaccination card ready.",
    doctorAvatar: "/assets/dr_ila_b.png",
    guidelines: [
      "Keep child in a well-lit room for visual assessment",
      "Have previous prescription and thermometer handy",
      "Test camera and microphone 5 minutes prior to appointment"
    ]
  },
  {
    id: "apt-102",
    kidId: "kid-102",
    kidName: "Ananya Sharma",
    doctor: "Dr. Ila B",
    specialty: "Senior Pediatrician & Child Specialist",
    hospital: "KidCare Pediatrics Clinic",
    date: "2026-09-14",
    time: "11:30 AM",
    timestamp: "14 Sep 2026, 11:30 AM",
    mode: "Walk-in",
    type: "COMPLETED",
    status: "Completed",
    bookingCode: "KC-77219",
    symptoms: ["Allergy & Rash", "Routine Growth"],
    notes: "Prescribed antihistamine syrup and skin moisturizer. Advised hydration.",
    doctorAvatar: "/assets/dr_ila_b.png",
    prescriptionId: "rx-301"
  },
  {
    id: "apt-103",
    kidId: "kid-101",
    kidName: "Reyansh Sharma",
    doctor: "Dr. Ila B",
    specialty: "Senior Pediatrician & Child Specialist",
    hospital: "KidCare Wellness Center",
    date: "2026-08-10",
    time: "05:00 PM",
    timestamp: "10 Aug 2026, 5:00 PM",
    mode: "Online Video Consultation",
    type: "COMPLETED",
    status: "Completed",
    bookingCode: "KC-61044",
    symptoms: ["Teething Discomfort", "Fever"],
    notes: "Teething gel and paracetamol SOS advised.",
    doctorAvatar: "/assets/dr_ila_b.png",
    prescriptionId: "rx-298"
  },
  {
    id: "apt-105",
    kidId: "kid-101",
    kidName: "Reyansh Sharma",
    doctor: "Dr. Ila B",
    specialty: "Senior Pediatrician & Child Specialist",
    hospital: "KidCare Wellness Center",
    date: "2026-10-02",
    time: "11:00 AM",
    timestamp: "02 Oct 2026, 11:00 AM",
    mode: "Online Video Consultation",
    type: "FOLLOW-UP",
    status: "Follow-up Due",
    bookingCode: "KC-91823",
    symptoms: ["Post-Viral Rhinopharyngitis Review", "Fever Resolution Check"],
    notes: "Review lung sounds and check temperature chart 5 days post Calpol & Nasoclear course.",
    doctorAvatar: "/assets/dr_ila_b.png",
    linkedPrescriptionId: "rx-301",
    followUpDueWindow: "Due within 4 days",
    isDoctorRecommended: true
  },
  {
    id: "apt-106",
    kidId: "kid-102",
    kidName: "Ananya Sharma",
    doctor: "Dr. Ila B",
    specialty: "Senior Pediatrician & Child Specialist",
    hospital: "KidCare Pediatrics Clinic",
    date: "2026-09-30",
    time: "04:30 PM",
    timestamp: "30 Sep 2026, 04:30 PM",
    mode: "Walk-in",
    type: "FOLLOW-UP",
    status: "Follow-up Scheduled",
    bookingCode: "KC-88401",
    symptoms: ["Skin Rash & Allergy Recovery", "Weight Check"],
    notes: "Skin barrier evaluation following antihistamine ointment therapy.",
    doctorAvatar: "/assets/dr_ila_b.png",
    linkedPrescriptionId: "rx-301",
    followUpDueWindow: "Scheduled for Wednesday",
    isDoctorRecommended: true
  },
  {
    id: "apt-104",
    kidId: "kid-101",
    kidName: "Reyansh Sharma",
    doctor: "Dr. Ila B",
    specialty: "Senior Pediatrician",
    hospital: "KidCare Wellness Center",
    date: "2026-07-02",
    time: "04:15 PM",
    timestamp: "02 Jul 2026, 4:15 PM",
    mode: "Walk-in",
    type: "CANCELLED",
    status: "Cancelled",
    bookingCode: "KC-55109",
    symptoms: ["Travel Checkup"],
    notes: "Cancelled by parent due to rescheduled flight.",
    doctorAvatar: "/assets/dr_ila_b.png"
  }
];

export const INITIAL_VACCINES = [
  {
    id: "vac-01",
    kidId: "kid-101",
    name: "BCG",
    disease: "Tuberculosis",
    ageDue: "At Birth",
    status: "GIVEN",
    dueDate: "2023-04-14",
    givenDate: "2023-04-15",
    doctor: "Dr. Ila B",
    brand: "Serum Institute BCG",
    batchNo: "BCG-9981A",
    certificateImage: "/assets/pdf_logo_tp.png",
    notes: "Normal left arm induration observed."
  },
  {
    id: "vac-02",
    kidId: "kid-101",
    name: "Hepatitis B - Dose 1",
    disease: "Hepatitis B Virus",
    ageDue: "At Birth",
    status: "GIVEN",
    dueDate: "2023-04-14",
    givenDate: "2023-04-15",
    doctor: "Dr. Ila B",
    brand: "GeneVac-B",
    batchNo: "HEP-4022",
    certificateImage: "/assets/pdf_logo_tp.png",
    notes: "Administered in right anterolateral thigh."
  },
  {
    id: "vac-03",
    kidId: "kid-101",
    name: "OPV - Zero Dose",
    disease: "Poliomyelitis",
    ageDue: "At Birth",
    status: "GIVEN",
    dueDate: "2023-04-14",
    givenDate: "2023-04-15",
    doctor: "Dr. Ila B",
    brand: "Biopolio Oral",
    batchNo: "OPV-110",
    certificateImage: "/assets/pdf_logo_tp.png",
    notes: "2 oral drops administered."
  },
  {
    id: "vac-04",
    kidId: "kid-101",
    name: "DTwP / DTaP - Dose 1",
    disease: "Diphtheria, Tetanus, Pertussis",
    ageDue: "6 Weeks",
    status: "GIVEN",
    dueDate: "2023-05-26",
    givenDate: "2023-05-28",
    doctor: "Dr. Ila B",
    brand: "Infanrix Hexa",
    batchNo: "INF-7721",
    certificateImage: "/assets/pdf_logo_tp.png",
    notes: "Mild fever recorded, resolved in 24 hrs."
  },
  {
    id: "vac-05",
    kidId: "kid-101",
    name: "IPV - Dose 1 + Hib - 1",
    disease: "Polio & Haemophilus Influenzae B",
    ageDue: "6 Weeks",
    status: "GIVEN",
    dueDate: "2023-05-26",
    givenDate: "2023-05-28",
    doctor: "Dr. Ila B",
    brand: "Hexaxim",
    batchNo: "HEX-9011",
    certificateImage: "/assets/pdf_logo_tp.png",
    notes: "Given as combined hexavalent shot."
  },
  {
    id: "vac-06",
    kidId: "kid-101",
    name: "Rotavirus - Dose 1",
    disease: "Rotaviral Gastroenteritis / Diarrhea",
    ageDue: "6 Weeks",
    status: "GIVEN",
    dueDate: "2023-05-26",
    givenDate: "2023-05-28",
    doctor: "Dr. Ila B",
    brand: "Rotarix Oral",
    batchNo: "ROTA-334",
    certificateImage: "/assets/pdf_logo_tp.png",
    notes: "Tolerated well without spit up."
  },
  {
    id: "vac-07",
    kidId: "kid-101",
    name: "PCV (Pneumococcal) - Dose 1",
    disease: "Pneumonia, Meningitis, Ear infections",
    ageDue: "6 Weeks",
    status: "GIVEN",
    dueDate: "2023-05-26",
    givenDate: "2023-05-28",
    doctor: "Dr. Ila B",
    brand: "Prevenar 13",
    batchNo: "PCV-1309",
    certificateImage: "/assets/pdf_logo_tp.png",
    notes: "Right thigh injection."
  },
  {
    id: "vac-08",
    kidId: "kid-101",
    name: "Hexavalent 2 (DTP + IPV + Hib + HepB)",
    disease: "6-in-1 Essential Booster",
    ageDue: "10 Weeks",
    status: "GIVEN",
    dueDate: "2023-07-07",
    givenDate: "2023-07-09",
    doctor: "Dr. Ila B",
    brand: "Hexaxim 2",
    batchNo: "HEX-9244",
    certificateImage: "/assets/pdf_logo_tp.png",
    notes: "No adverse events."
  },
  {
    id: "vac-09",
    kidId: "kid-101",
    name: "MMR (Measles, Mumps, Rubella) - Dose 1",
    disease: "Measles, Mumps & Rubella",
    ageDue: "9 Months",
    status: "GIVEN",
    dueDate: "2024-01-14",
    givenDate: "2024-01-16",
    doctor: "Dr. Ila B",
    brand: "Tresivac",
    batchNo: "TRE-4451",
    certificateImage: "/assets/pdf_logo_tp.png",
    notes: "Given sub-cutaneously."
  },
  {
    id: "vac-10",
    kidId: "kid-101",
    name: "Varicella (Chickenpox) - Dose 1",
    disease: "Chickenpox virus",
    ageDue: "15 Months",
    status: "DUE",
    dueDate: "2024-07-14",
    givenDate: null,
    doctor: "Dr. Ila B",
    brand: "Varilrix / Variped",
    batchNo: "",
    certificateImage: null,
    notes: "Recommended to schedule this week."
  },
  {
    id: "vac-11",
    kidId: "kid-101",
    name: "Hepatitis A - Dose 1 (Live / Inactivated)",
    disease: "Hepatitis A Viral Jaundice",
    ageDue: "18 Months",
    status: "UPCOMING",
    dueDate: "2024-10-14",
    givenDate: null,
    doctor: "Dr. Ila B",
    brand: "Havrix / Avaxim",
    batchNo: "",
    certificateImage: null,
    notes: "Due in 3 weeks."
  },
  {
    id: "vac-12",
    kidId: "kid-101",
    name: "Annual Influenza (Flu) Booster",
    disease: "Seasonal Influenza H1N1/H3N2",
    ageDue: "Annual",
    status: "UPCOMING",
    dueDate: "2024-11-01",
    givenDate: null,
    doctor: "Dr. Ila B",
    brand: "Fluarix Tetra",
    batchNo: "",
    certificateImage: null,
    notes: "Recommended before winter season."
  }
];

export const INITIAL_GROWTH_LOGS = [
  { date: "2023-04-14", ageMonth: 0, weight: 3.3, height: 50.0, headCircumference: 35.0, note: "Birth metrics" },
  { date: "2023-05-28", ageMonth: 1.5, weight: 4.6, height: 56.2, headCircumference: 37.8, note: "6 weeks checkup" },
  { date: "2023-07-09", ageMonth: 3, weight: 6.1, height: 61.5, headCircumference: 40.2, note: "10 weeks checkup" },
  { date: "2023-10-14", ageMonth: 6, weight: 7.8, height: 67.5, headCircumference: 43.1, note: "6 months milestone" },
  { date: "2024-01-16", ageMonth: 9, weight: 9.1, height: 72.8, headCircumference: 45.0, note: "9 months checkup" },
  { date: "2024-04-14", ageMonth: 12, weight: 10.2, height: 77.0, headCircumference: 46.2, note: "1 year birthday" },
  { date: "2024-09-20", ageMonth: 17, weight: 11.2, height: 82.5, headCircumference: 46.8, note: "Latest consultation" }
];

export const WHO_GROWTH_PERCENTILES = {
  // Age in months: [3rd percentile, 50th percentile (median), 97th percentile]
  weightBoys: [
    { month: 0, p3: 2.5, p50: 3.3, p97: 4.4 },
    { month: 2, p3: 4.3, p50: 5.6, p97: 7.1 },
    { month: 4, p3: 5.6, p50: 7.0, p97: 8.7 },
    { month: 6, p3: 6.4, p50: 7.9, p97: 9.8 },
    { month: 9, p3: 7.1, p50: 8.9, p97: 11.0 },
    { month: 12, p3: 7.7, p50: 9.6, p97: 12.0 },
    { month: 15, p3: 8.3, p50: 10.3, p97: 12.8 },
    { month: 18, p3: 8.8, p50: 10.9, p97: 13.7 },
    { month: 24, p3: 9.7, p50: 12.2, p97: 15.3 }
  ],
  heightBoys: [
    { month: 0, p3: 46.3, p50: 49.9, p97: 53.4 },
    { month: 2, p3: 54.4, p50: 58.4, p97: 62.4 },
    { month: 4, p3: 60.0, p50: 63.9, p97: 67.8 },
    { month: 6, p3: 63.6, p50: 67.6, p97: 71.6 },
    { month: 9, p3: 67.5, p50: 72.0, p97: 76.5 },
    { month: 12, p3: 71.0, p50: 75.7, p97: 80.5 },
    { month: 15, p3: 74.1, p50: 79.1, p97: 84.1 },
    { month: 18, p3: 76.9, p50: 82.3, p97: 87.7 },
    { month: 24, p3: 82.1, p50: 87.8, p97: 93.5 }
  ]
};

export const INITIAL_PRESCRIPTIONS = [
  {
    id: "rx-301",
    kidId: "kid-101",
    kidName: "Reyansh Sharma",
    title: "Prescription - Upper Respiratory Infection & Low Fever",
    date: "2026-09-14",
    doctor: "Dr. Ila B",
    specialty: "Senior Pediatrician",
    registrationNo: "KMC-45910",
    diagnosis: "Acute viral rhinopharyngitis with low grade temperature",
    medicines: [
      {
        name: "Calpol Paediatric Drops (Paracetamol 100mg/ml)",
        dosage: "1.2 ml SOS (Max 4 times in 24 hrs)",
        duration: "3 days",
        instructions: "Give only if temperature is above 99.5°F or child is irritable."
      },
      {
        name: "Nasoclear Saline Nasal Drops",
        dosage: "2 drops in each nostril before feeds",
        duration: "5 days",
        instructions: "Helps clear nasal congestion before sleep and feeding."
      },
      {
        name: "Zinc & Vitamin D3 Oral Solution (Pedichamp)",
        dosage: "2.5 ml once daily after breakfast",
        duration: "14 days",
        instructions: "Immunity support & mucosal healing."
      }
    ],
    advice: "Continue breast/formula feeding, maintain lukewarm steam inhalation for 3 mins, avoid cold direct AC breeze.",
    fileType: "PRESCRIPTION",
    fileUrl: "/assets/pdf_logo_tp.png",
    downloadName: "Reyansh_Prescription_14Sep2026.pdf"
  },
  {
    id: "rx-298",
    kidId: "kid-101",
    kidName: "Reyansh Sharma",
    title: "Pathology - Complete Blood Count (CBC) & CRP",
    date: "2026-08-10",
    doctor: "Dr. Ila B / Metropolis Diagnostics",
    specialty: "Clinical Pathology",
    registrationNo: "NABL-7809",
    diagnosis: "Routine viral panel screening",
    medicines: [],
    labResults: [
      { test: "Hemoglobin (Hb)", value: "11.8 g/dL", range: "11.0 - 14.0", status: "Normal" },
      { test: "Total Leukocyte Count (WBC)", value: "7,400 /mcL", range: "6,000 - 12,000", status: "Normal" },
      { test: "Platelet Count", value: "285,000 /mcL", range: "150,000 - 450,000", status: "Normal" },
      { test: "C-Reactive Protein (CRP)", value: "2.1 mg/L", range: "< 5.0", status: "Normal" }
    ],
    advice: "CBC parameters within healthy pediatric reference limits.",
    fileType: "PATHOLOGY",
    fileUrl: "/assets/ss.png",
    downloadName: "CBC_Report_Reyansh_Aug2026.pdf"
  },
  {
    id: "rx-295",
    kidId: "kid-102",
    kidName: "Ananya Sharma",
    title: "Radiology - Chest X-Ray (PA View)",
    date: "2026-06-18",
    doctor: "Dr. Ila B / Apex Radiology Center",
    specialty: "Pediatric Radiology",
    registrationNo: "RAD-3310",
    diagnosis: "Pre-school seasonal wheeze evaluation",
    medicines: [],
    labResults: [
      { test: "Lung Fields", value: "Clear bilateral lung zones", range: "-", status: "Normal" },
      { test: "Cardiothoracic Ratio", value: "< 50%", range: "< 50%", status: "Normal" },
      { test: "Costophrenic Angles", value: "Sharp and clear", range: "-", status: "Normal" }
    ],
    advice: "No focal consolidation, pneumothorax or pleural effusion seen.",
    fileType: "RADIOLOGY",
    fileUrl: "/assets/pdf_logo.jpg",
    downloadName: "Chest_XRay_Ananya.pdf"
  }
];

export const WEEKLY_DIET_PLAN = {
  "Monday": [
    {
      id: "mon-em",
      mealType: "Early Morning",
      timeSlot: "06:30 AM - 07:00 AM",
      title: "Warm Spiced Milk & Soaked Almonds",
      subtitle: "Brain hydration & morning enzyme activation",
      calories: "140 kcal",
      protein: "5g",
      carbs: "12g",
      fats: "7g",
      image: "/assets/glass_full_fresh_milk_1.png",
      foodItems: [
        { item: "Warm Whole Cow Milk / Breast Milk", quantity: "120", unit: "ml" },
        { item: "Soaked & Peeled Almonds Paste", quantity: "3", unit: "nuts" },
        { item: "Pinch of Organic Turmeric", quantity: "1", unit: "pinch" }
      ],
      benefits: "Calcium & healthy fats for bone growth and neurological development.",
      tips: "Serve lukewarm. Peeling almonds aids infant digestibility."
    },
    {
      id: "mon-bf",
      mealType: "Breakfast",
      timeSlot: "08:30 AM - 09:00 AM",
      title: "Sprouted Ragi Porridge with Ghee & Soft Banana",
      subtitle: "Iron-rich, easily digestible morning fuel",
      calories: "260 kcal",
      protein: "7g",
      carbs: "42g",
      fats: "6g",
      image: "/assets/bowl.png",
      foodItems: [
        { item: "Organic Sprouted Ragi Flour Porridge", quantity: "1", unit: "small bowl (100g)" },
        { item: "Pure Cow Desi Ghee", quantity: "1", unit: "tsp" },
        { item: "Mashed Elaichi Banana Slices", quantity: "1/2", unit: "banana" }
      ],
      benefits: "High calcium, natural iron, and complex carbs for sustained play energy.",
      tips: "Cook ragi until glossy to ensure easy digestion."
    },
    {
      id: "mon-lu",
      mealType: "Lunch",
      timeSlot: "12:45 PM - 01:30 PM",
      title: "Yellow Moong Dal Khichdi with Steamed Carrots & Curd",
      subtitle: "Complete protein profile with gut-friendly probiotics",
      calories: "340 kcal",
      protein: "14g",
      carbs: "52g",
      fats: "8g",
      image: "/assets/rice_bowl_1.png",
      foodItems: [
        { item: "Soft Steamed Moong Dal & Rice Khichdi", quantity: "1", unit: "medium bowl (120g)" },
        { item: "Steamed Carrot & Spinach Puree", quantity: "2", unit: "tbsp" },
        { item: "Fresh Homemade Set Curd / Yogurt", quantity: "3", unit: "tbsp" },
        { item: "Cumin & Ghee Tadka", quantity: "1/2", unit: "tsp" }
      ],
      benefits: "Moong dal + rice provides complete essential amino acids for tissue repair.",
      tips: "Keep khichdi soft and semi-solid for toddler self-feeding."
    },
    {
      id: "mon-dn",
      mealType: "Dinner",
      timeSlot: "07:30 PM - 08:15 PM",
      title: "Soft Multigrain Phulka with Stewed Lauki (Bottle Gourd) & Paneer",
      subtitle: "Light soothing dinner promoting deep uninterrupted sleep",
      calories: "280 kcal",
      protein: "10g",
      carbs: "38g",
      fats: "7g",
      image: "/assets/lunch.png",
      foodItems: [
        { item: "Soft Wheat-Ragi Phulka mashed in dal", quantity: "1", unit: "piece" },
        { item: "Mild Stewed Bottle Gourd & Pumpkin", quantity: "1/2", unit: "cup" },
        { item: "Crumbled Fresh Malai Paneer", quantity: "20", unit: "grams" }
      ],
      benefits: "Tryptophan from paneer aids natural melatonin production for restful sleep.",
      tips: "Feed at least 1.5 hours prior to bedtime."
    }
  ],
  "Tuesday": [
    {
      id: "tue-em",
      mealType: "Early Morning",
      timeSlot: "06:30 AM - 07:00 AM",
      title: "Warm Cardamom Milk with Munakka (Sweet Raisin) Puree",
      subtitle: "Gentle natural gut motility & morning hydration",
      calories: "135 kcal",
      protein: "4.5g",
      carbs: "16g",
      fats: "6g",
      image: "/assets/glass_full_fresh_milk_1.png",
      foodItems: [
        { item: "Warm Cow Milk", quantity: "120", unit: "ml" },
        { item: "Soaked Munakka / Black Raisins Puree", quantity: "4", unit: "pieces" }
      ],
      benefits: "Prevents infant constipation and provides natural iron boost.",
      tips: "Strain out raisin seeds before boiling with milk."
    },
    {
      id: "tue-bf",
      mealType: "Breakfast",
      timeSlot: "08:30 AM - 09:00 AM",
      title: "Soft Steamed Vegetable Idli with Mild Coconut Chutney",
      subtitle: "Fermented probiotic powerhouse for toddler gut health",
      calories: "240 kcal",
      protein: "6g",
      carbs: "45g",
      fats: "4g",
      image: "/assets/rice_bowl_1.png",
      foodItems: [
        { item: "Mini Soft Steamed Rice-Urad Idlis", quantity: "2", unit: "pieces" },
        { item: "Steamed Grated Carrot & Beetroot Garnish", quantity: "1", unit: "tbsp" },
        { item: "Mild Roasted Gram & Coconut Dip", quantity: "2", unit: "tsp" }
      ],
      benefits: "Fermentation enhances bioavailability of B-complex vitamins.",
      tips: "Dip idli in warm milk or rasam for extra softness."
    },
    {
      id: "tue-lu",
      mealType: "Lunch",
      timeSlot: "12:45 PM - 01:30 PM",
      title: "Mashed Toor Dal Rice with Ghee & Pumpkin Puree",
      subtitle: "Hearty, comforting protein & Vitamin A enrichment",
      calories: "350 kcal",
      protein: "13g",
      carbs: "54g",
      fats: "9g",
      image: "/assets/lunch.png",
      foodItems: [
        { item: "Soft Boiled Sona Masoori Rice", quantity: "1/2", unit: "cup" },
        { item: "Protein-rich Toor Lentil Dal", quantity: "1/2", unit: "cup" },
        { item: "Yellow Sweet Pumpkin Mash", quantity: "2", unit: "tbsp" },
        { item: "Desi Ghee Tempering with Hing", quantity: "1", unit: "tsp" }
      ],
      benefits: "Beta-carotene from pumpkin supports healthy eyesight and epithelial tissue.",
      tips: "Hing (asafoetida) helps eliminate digestive gas."
    },
    {
      id: "tue-dn",
      mealType: "Dinner",
      timeSlot: "07:30 PM - 08:15 PM",
      title: "Moong Dal & Vegetable Dalia (Broken Wheat Porridge)",
      subtitle: "Fiber-rich, easily digestible evening meal",
      calories: "270 kcal",
      protein: "9g",
      carbs: "40g",
      fats: "6g",
      image: "/assets/bowl.png",
      foodItems: [
        { item: "Roasted Broken Wheat & Moong Dal Dalia", quantity: "1", unit: "small bowl (120g)" },
        { item: "Finely Chopped Steamed Green Beans & Peas", quantity: "2", unit: "tbsp" },
        { item: "A2 Cow Ghee Drop", quantity: "1/2", unit: "tsp" }
      ],
      benefits: "Whole fiber promotes smooth nighttime digestion.",
      tips: "Pressure cook dalia until velvety soft."
    }
  ],
  "Wednesday": [
    {
      id: "wed-em",
      mealType: "Early Morning",
      timeSlot: "06:30 AM - 07:00 AM",
      title: "Warm Saffron Milk & Soaked Walnut Paste",
      subtitle: "DHA & Omega-3 brain synapse nourishment",
      calories: "150 kcal",
      protein: "5g",
      carbs: "11g",
      fats: "8.5g",
      image: "/assets/glass_full_fresh_milk_1.png",
      foodItems: [
        { item: "Warm Cow Milk", quantity: "120", unit: "ml" },
        { item: "Soaked Walnut Kernel Paste", quantity: "2", unit: "halves" },
        { item: "Kesar (Saffron) Strand", quantity: "1", unit: "strand" }
      ],
      benefits: "Plant ALA omega-3 fatty acids for cognitive speed and memory development.",
      tips: "Soaking walnuts removes natural tannins."
    },
    {
      id: "wed-bf",
      mealType: "Breakfast",
      timeSlot: "08:30 AM - 09:00 AM",
      title: "Soft Scrambled Pasture Egg with Whole-Wheat Toast",
      subtitle: "Choline & lutein powerhouse for rapid neural growth",
      calories: "290 kcal",
      protein: "12g",
      carbs: "24g",
      fats: "14g",
      image: "/assets/fried_eggs.png",
      foodItems: [
        { item: "Pasture-Raised Egg (Soft Scrambled in Ghee)", quantity: "1", unit: "egg" },
        { item: "Toasted Whole-Wheat Bread Fingers", quantity: "1", unit: "slice" },
        { item: "Steamed Sweet Apple Puree", quantity: "2", unit: "tbsp" }
      ],
      benefits: "Egg yolk provides high dietary choline critical for hippocampus development.",
      tips: "Cut toast into finger-sized strips for self-feeding practice."
    },
    {
      id: "wed-lu",
      mealType: "Lunch",
      timeSlot: "12:45 PM - 01:30 PM",
      title: "Masoor (Red Lentil) Vegetable Khichdi with Fresh Yogurt",
      subtitle: "Bioavailable zinc, iron & gut friendly bacteria",
      calories: "330 kcal",
      protein: "14g",
      carbs: "50g",
      fats: "7g",
      image: "/assets/lentil_salad.png",
      foodItems: [
        { item: "Skinless Red Masoor Dal & Rice Porridge", quantity: "1", unit: "bowl (120g)" },
        { item: "Steamed Spinach & Zucchini Puree", quantity: "2", unit: "tbsp" },
        { item: "Fresh Homemade Curd", quantity: "3", unit: "tbsp" }
      ],
      benefits: "Masoor dal is the quickest-digesting legume with high zinc for mucosal immunity.",
      tips: "Add a dash of lemon juice to enhance non-heme iron absorption."
    },
    {
      id: "wed-dn",
      mealType: "Dinner",
      timeSlot: "07:30 PM - 08:15 PM",
      title: "Oats & Lentil Savory Porridge with Grated Paneer",
      subtitle: "Slow-release carbs and calming magnesium for night sleep",
      calories: "260 kcal",
      protein: "10g",
      carbs: "36g",
      fats: "7g",
      image: "/assets/sleeping_baby.png",
      foodItems: [
        { item: "Rolled Oats cooked in vegetable broth", quantity: "1", unit: "small bowl (100g)" },
        { item: "Yellow Moong Dal Mash", quantity: "2", unit: "tbsp" },
        { item: "Fresh Grated Cottage Cheese (Paneer)", quantity: "15", unit: "grams" }
      ],
      benefits: "Beta-glucan fiber from oats stabilizes blood sugar overnight.",
      tips: "Keep consistency porridge-like."
    }
  ],
  "Thursday": [
    {
      id: "thu-em",
      mealType: "Early Morning",
      timeSlot: "06:30 AM - 07:00 AM",
      title: "Warm Turmeric Milk with Pureed Fig (Anjeer)",
      subtitle: "Gentle morning mineral tonic",
      calories: "140 kcal",
      protein: "4.5g",
      carbs: "17g",
      fats: "6g",
      image: "/assets/glass_full_fresh_milk_1.png",
      foodItems: [
        { item: "Warm Cow Milk", quantity: "120", unit: "ml" },
        { item: "Soaked Dry Fig Paste", quantity: "1", unit: "fig" },
        { item: "Turmeric Pinch", quantity: "1", unit: "pinch" }
      ],
      benefits: "Natural dietary fiber and potassium prevent colic and morning sluggishness.",
      tips: "Boil soaked fig in milk for 2 minutes."
    },
    {
      id: "thu-bf",
      mealType: "Breakfast",
      timeSlot: "08:30 AM - 09:00 AM",
      title: "Vegetable Suji (Semolina) Upma with Ghee",
      subtitle: "Light comforting morning breakfast with mixed vegetables",
      calories: "250 kcal",
      protein: "6g",
      carbs: "44g",
      fats: "6g",
      image: "/assets/bowl.png",
      foodItems: [
        { item: "Roasted Semolina Vegetable Upma", quantity: "1", unit: "small bowl (100g)" },
        { item: "Finely Diced Steamed Carrots & Peas", quantity: "2", unit: "tbsp" },
        { item: "Desi Cow Ghee", quantity: "1", unit: "tsp" }
      ],
      benefits: "Quick digestible energy without taxing the toddler tummy.",
      tips: "Keep vegetables finely chopped or grated to prevent choking hazard."
    },
    {
      id: "thu-lu",
      mealType: "Lunch",
      timeSlot: "12:45 PM - 01:30 PM",
      title: "Soft Curd Rice with Steamed Green Moong Sprouts & Beet Puree",
      subtitle: "Cooling, probiotic rich midday feast",
      calories: "320 kcal",
      protein: "12g",
      carbs: "50g",
      fats: "7g",
      image: "/assets/rice_bowl_1.png",
      foodItems: [
        { item: "Soft Mashed Rice with Fresh Curd", quantity: "1", unit: "cup" },
        { item: "Steamed & Mashed Green Moong Sprouts", quantity: "2", unit: "tbsp" },
        { item: "Roasted Cumin & Curry Leaf Infusion", quantity: "1/2", unit: "tsp" }
      ],
      benefits: "Live lactobacillus cultures promote optimal microbiome diversity.",
      tips: "Serve at room temperature, not chilled from fridge."
    },
    {
      id: "thu-dn",
      mealType: "Dinner",
      timeSlot: "07:30 PM - 08:15 PM",
      title: "Soft Steamed Vegetable Rice Kheer / Porridge with Jaggery",
      subtitle: "Comforting, warm dinner for cozy bedtime",
      calories: "260 kcal",
      protein: "6g",
      carbs: "46g",
      fats: "5g",
      image: "/assets/lunch.png",
      foodItems: [
        { item: "Well-Cooked Soft Rice in Cow Milk", quantity: "1", unit: "bowl (100g)" },
        { item: "Natural Organic Palm Jaggery", quantity: "1/2", unit: "tsp" },
        { item: "Cardamom & Nutmeg Powder", quantity: "1", unit: "pinch" }
      ],
      benefits: "Nutmeg contains trace myristicin which relaxes nerves before sleep.",
      tips: "Add jaggery only after cooling slightly to prevent milk curdling."
    }
  ],
  "Friday": [
    {
      id: "fri-em",
      mealType: "Early Morning",
      timeSlot: "06:30 AM - 07:00 AM",
      title: "Warm Almond Milk & Pureed Dates",
      subtitle: "Natural morning energy boost and iron replenishment",
      calories: "145 kcal",
      protein: "4.8g",
      carbs: "18g",
      fats: "6.5g",
      image: "/assets/glass_full_fresh_milk_1.png",
      foodItems: [
        { item: "Warm Cow Milk", quantity: "120", unit: "ml" },
        { item: "Soft Seedless Medjool Date Puree", quantity: "1", unit: "date" }
      ],
      benefits: "Natural iron, potassium and magnesium.",
      tips: "Dates provide unrefined natural sweetness."
    },
    {
      id: "fri-bf",
      mealType: "Breakfast",
      timeSlot: "08:30 AM - 09:00 AM",
      title: "Moong Dal Cheela (Pancake) with Paneer Mash",
      subtitle: "Gluten-free, high-protein morning start",
      calories: "270 kcal",
      protein: "13g",
      carbs: "32g",
      fats: "9g",
      image: "/assets/fried_eggs.png",
      foodItems: [
        { item: "Soft Yellow Moong Dal Savory Crepe", quantity: "1", unit: "small cheela" },
        { item: "Fresh Mashed Soft Paneer Stuffing", quantity: "25", unit: "grams" },
        { item: "Coriander & Mint Mild Dip", quantity: "1", unit: "tbsp" }
      ],
      benefits: "High plant protein and leucine for active muscle recovery.",
      tips: "Cook on low flame with ghee until soft and tender."
    },
    {
      id: "fri-lu",
      mealType: "Lunch",
      timeSlot: "12:45 PM - 01:30 PM",
      title: "Steamed Rice with Mixed Vegetable Sambar & Ghee",
      subtitle: "Drumstick, carrot & pumpkin lentil stew with rice",
      calories: "340 kcal",
      protein: "12g",
      carbs: "54g",
      fats: "8g",
      image: "/assets/rice_bowl_1.png",
      foodItems: [
        { item: "Steamed Soft Jasmine Rice", quantity: "1/2", unit: "cup" },
        { item: "Mild Pediatric Sambar (Toor Dal + Veggies)", quantity: "1/2", unit: "cup" },
        { item: "Steamed Bottle Gourd Cubes", quantity: "2", unit: "tbsp" },
        { item: "A2 Cow Ghee", quantity: "1", unit: "tsp" }
      ],
      benefits: "Rich variety of phytonutrients from 4 different vegetables.",
      tips: "Strain out chili and whole spices before serving."
    },
    {
      id: "fri-dn",
      mealType: "Dinner",
      timeSlot: "07:30 PM - 08:15 PM",
      title: "Light Mixed Vegetable & Lentil Clear Soup with Soft Toast",
      subtitle: "Hydrating, restorative pre-weekend dinner",
      calories: "230 kcal",
      protein: "8g",
      carbs: "34g",
      fats: "5g",
      image: "/assets/sleeping_baby.png",
      foodItems: [
        { item: "Steamed Carrot, Spinach & Moong Dal Broth", quantity: "1", unit: "cup (150ml)" },
        { item: "Whole Wheat Soft Toast Soldiers", quantity: "1", unit: "slice" },
        { item: "Ghee Drop", quantity: "1/2", unit: "tsp" }
      ],
      benefits: "High hydration, electrolyte balance and easily assimilated vitamins.",
      tips: "Blend soup smooth for younger toddlers."
    }
  ],
  "Saturday": [
    {
      id: "sat-em",
      mealType: "Early Morning",
      timeSlot: "06:30 AM - 07:00 AM",
      title: "Warm Milk with Soaked Cashew & Almond Powder",
      subtitle: "Weekend nourishing boost for active playtime",
      calories: "155 kcal",
      protein: "5.5g",
      carbs: "13g",
      fats: "9g",
      image: "/assets/glass_full_fresh_milk_1.png",
      foodItems: [
        { item: "Warm Cow Milk", quantity: "120", unit: "ml" },
        { item: "Finely Ground Almond-Cashew Powder", quantity: "1", unit: "tsp" }
      ],
      benefits: "Magnesium, phosphorus and copper for bone mineralization.",
      tips: "Ensure nuts are ground super-fine into flour."
    },
    {
      id: "sat-bf",
      mealType: "Breakfast",
      timeSlot: "08:30 AM - 09:00 AM",
      title: "Whole Wheat Banana Pancakes with Wild Honey Drizzle",
      subtitle: "Wholesome, fun weekend finger food breakfast",
      calories: "280 kcal",
      protein: "7g",
      carbs: "48g",
      fats: "7g",
      image: "/assets/bowl.png",
      foodItems: [
        { item: "Fluffy Whole Wheat & Ripe Banana Pancakes", quantity: "2", unit: "mini pieces" },
        { item: "Pure Desi Ghee Cooked", quantity: "1", unit: "tsp" },
        { item: "Few Drops Raw Forest Honey (Age 1+ Only)", quantity: "1/2", unit: "tsp" }
      ],
      benefits: "Potassium from bananas helps maintain intracellular fluid balance.",
      tips: "Honey is strictly for toddlers above 12 months."
    },
    {
      id: "sat-lu",
      mealType: "Lunch",
      timeSlot: "12:45 PM - 01:30 PM",
      title: "Paneer & Pea Pulao with Cucumber Tadka Raita",
      subtitle: "Festive, calcium-rich weekend family lunch",
      calories: "360 kcal",
      protein: "15g",
      carbs: "50g",
      fats: "10g",
      image: "/assets/lunch.png",
      foodItems: [
        { item: "Mild Cumin Basmati Rice with Green Peas", quantity: "1/2", unit: "cup" },
        { item: "Soft Sautéed Paneer Cubes", quantity: "30", unit: "grams" },
        { item: "Grated Cucumber in Fresh Homemade Curd", quantity: "3", unit: "tbsp" }
      ],
      benefits: "Calcium from paneer and live cultures from raita support skeleton and gut.",
      tips: "Soak paneer in warm water first for maximum pillow-softness."
    },
    {
      id: "sat-dn",
      mealType: "Dinner",
      timeSlot: "07:30 PM - 08:15 PM",
      title: "Steamed Moong Dal & Spinach Khichdi with Ghee",
      subtitle: "Detoxifying and light evening meal after weekend activity",
      calories: "280 kcal",
      protein: "11g",
      carbs: "42g",
      fats: "7g",
      image: "/assets/rice_bowl_1.png",
      foodItems: [
        { item: "Soft Spinach & Yellow Moong Khichdi", quantity: "1", unit: "bowl (120g)" },
        { item: "Pure Cow Desi Ghee", quantity: "1", unit: "tsp" },
        { item: "Pinch of Roasted Jeera (Cumin)", quantity: "1", unit: "pinch" }
      ],
      benefits: "Folate from spinach and clean carbs ensure restful weekend sleep.",
      tips: "Puree spinach smoothly before cooking with lentils."
    }
  ],
  "Sunday": [
    {
      id: "sun-em",
      mealType: "Early Morning",
      timeSlot: "06:30 AM - 07:00 AM",
      title: "Warm Saffron & Cardamom Cow Milk",
      subtitle: "Gentle aromatic awakening & digestive soothing",
      calories: "135 kcal",
      protein: "4.5g",
      carbs: "12g",
      fats: "6g",
      image: "/assets/glass_full_fresh_milk_1.png",
      foodItems: [
        { item: "Warm Whole Cow Milk", quantity: "120", unit: "ml" },
        { item: "Crushed Cardamom & Saffron", quantity: "1", unit: "pinch" }
      ],
      benefits: "Cardamom stimulates saliva and digestive secretions.",
      tips: "Serve cozy and warm."
    },
    {
      id: "sun-bf",
      mealType: "Breakfast",
      timeSlot: "08:30 AM - 09:00 AM",
      title: "Soft Vegetable Poha (Flattened Rice) with Steamed Peas & Ghee",
      subtitle: "Iron-fortified traditional Sunday breakfast",
      calories: "250 kcal",
      protein: "6g",
      carbs: "46g",
      fats: "5.5g",
      image: "/assets/fried_eggs.png",
      foodItems: [
        { item: "Soft Steamed Thick Poha with Turmeric", quantity: "1", unit: "bowl (100g)" },
        { item: "Steamed Sweet Green Peas & Potato Mash", quantity: "2", unit: "tbsp" },
        { item: "Fresh Lemon Juice & Coriander Squeeze", quantity: "1/2", unit: "tsp" }
      ],
      benefits: "Flattened rice is naturally iron-rich; lemon juice vitamin C boosts absorption.",
      tips: "Rinse poha gently and let rest for 5 minutes so it turns extra soft."
    },
    {
      id: "sun-lu",
      mealType: "Lunch",
      timeSlot: "12:45 PM - 01:30 PM",
      title: "Soft Chicken Broth with Rice (or Paneer Lentil Rice for Veg)",
      subtitle: "Sunday high-protein restorative family meal",
      calories: "350 kcal",
      protein: "16g",
      carbs: "48g",
      fats: "9g",
      image: "/assets/rice_bowl_1.png",
      foodItems: [
        { item: "Shredded Tender Chicken in Bone Broth / Soft Paneer", quantity: "40", unit: "grams" },
        { item: "Steamed White Jasmine Rice", quantity: "1/2", unit: "cup" },
        { item: "Steamed Carrot & Sweet Corn Puree", quantity: "2", unit: "tbsp" },
        { item: "Desi Ghee", quantity: "1", unit: "tsp" }
      ],
      benefits: "Collagen, zinc and amino acids support gut lining and immune defense.",
      tips: "Ensure chicken is pressure-cooked until completely shreddable."
    },
    {
      id: "sun-dn",
      mealType: "Dinner",
      timeSlot: "07:30 PM - 08:15 PM",
      title: "Mild Pumpkin & Apple Porridge with A2 Ghee",
      subtitle: "Soothing Sunday evening digestive rest meal",
      calories: "240 kcal",
      protein: "5g",
      carbs: "42g",
      fats: "5g",
      image: "/assets/lunch.png",
      foodItems: [
        { item: "Steamed Red Pumpkin & Fuji Apple Mash", quantity: "1", unit: "cup" },
        { item: "Roasted Rice Flour Base", quantity: "2", unit: "tbsp" },
        { item: "Pure Cow Ghee", quantity: "1/2", unit: "tsp" }
      ],
      benefits: "Gentle on the stomach to prepare for the active preschool week ahead.",
      tips: "Feed at 07:30 PM for a restful night."
    }
  ]
};

export const NUTRITION_MEALS = WEEKLY_DIET_PLAN["Monday"];

export const HEALTH_FEEDS = [
  {
    id: "feed-101",
    tag: "Nutrition & Brain",
    title: "Omega-3 & DHA: The Building Blocks of Toddler Cognitive Skills",
    readTime: "3 min read",
    author: "Dr. Ila B",
    likes: 142,
    image: "/assets/kid_meditating_mat_2.png",
    excerpt: "Why 80% of brain architecture is formed by age 3 and how healthy fats from eggs, walnuts, and breast milk support synapses."
  },
  {
    id: "feed-102",
    tag: "Vaccines & Immunity",
    title: "Demystifying Post-Vaccination Fever & Care Protocol",
    readTime: "4 min read",
    author: "Dr. Ila B",
    likes: 218,
    image: "/assets/nurse.png",
    excerpt: "Understanding why a slight temperature proves the vaccine is working, when to give fever medication, and red-flag symptoms."
  },
  {
    id: "feed-103",
    tag: "Sleep & Growth",
    title: "How Deep REM Sleep Triggers Growth Hormone Release in Babies",
    readTime: "2 min read",
    author: "Pediatric Sleep Team",
    likes: 95,
    image: "/assets/sleeping_baby.png",
    excerpt: "Children secrete over 70% of human growth hormone (HGH) during slow-wave non-REM stages. Tips for calm night routines."
  }
];

export const SYMPTOMS_LIST = [
  { id: "sym-1", name: "Fever / High Temperature", icon: "🌡️", category: "Common" },
  { id: "sym-2", name: "Dry Cough / Congestion", icon: "🗣️", category: "Respiratory" },
  { id: "sym-3", name: "Runny / Blocked Nose", icon: "🤧", category: "Respiratory" },
  { id: "sym-4", name: "Vomiting / Nausea", icon: "🤢", category: "Stomach" },
  { id: "sym-5", name: "Loose Motions / Diarrhea", icon: "💧", category: "Stomach" },
  { id: "sym-6", name: "Skin Rash / Eczema / Hives", icon: "🔴", category: "Skin" },
  { id: "sym-7", name: "Loss of Appetite / Feeding Refusal", icon: "🥣", category: "General" },
  { id: "sym-8", name: "Ear Pain / Ear Pulling", icon: "👂", category: "ENT" },
  { id: "sym-9", name: "Teething Fussiness & Drooling", icon: "🦷", category: "Infant" },
  { id: "sym-10", name: "Vaccination Reaction Check", icon: "💉", category: "Preventative" },
  { id: "sym-11", name: "Growth & Weight Plateau", icon: "⚖️", category: "Development" },
  { id: "sym-12", name: "Sleep Disturbances / Night Waking", icon: "🌙", category: "Behavioral" }
];

export const INITIAL_NOTIFICATIONS = [
  {
    id: "notif-01",
    title: "Consultation Reminder",
    body: "Upcoming video consultation with Dr. Ila B tomorrow at 3:00 PM for Reyansh Sharma.",
    timestamp: "10 mins ago",
    read: false,
    type: "appointment",
    actionRoute: "appointments"
  },
  {
    id: "notif-02",
    title: "Doctor Replied to your Flip",
    body: "Dr. Ila B provided medical advice for 'Mild fever after 14-month booster shot'.",
    timestamp: "2 hours ago",
    read: false,
    type: "flip",
    actionRoute: "flips"
  },
  {
    id: "notif-03",
    title: "Vaccination Due Alert",
    body: "Varicella (Chickenpox) Dose 1 is due for Reyansh Sharma. Please book a slot.",
    timestamp: "1 day ago",
    read: true,
    type: "vaccine",
    actionRoute: "vaccines"
  },
  {
    id: "notif-04",
    title: "Growth Milestone Logged",
    body: "Reyansh is tracking healthy in the 65th percentile for weight and height.",
    timestamp: "3 days ago",
    read: true,
    type: "growth",
    actionRoute: "growth"
  }
];

export const FAQS = [
  {
    question: "What is a 'Flip' in KidCare?",
    answer: "A Flip is a rapid, asynchronous digital communication card between you and Dr. Ila B. You can send an 'Ask a Question' card, an 'Emergency Query', 'Feedback Flip', or 'Routine Milestone Check'. The pediatric team reviews your query and attachments to provide verified medical advice without requiring a full clinic visit."
  },
  {
    question: "How do I join the live video consultation?",
    answer: "Go to the Appointments tab and tap 'Join Live Video Consultation' on your upcoming appointment card when within 15 minutes of the scheduled time. Ensure your camera and microphone permissions are enabled."
  },
  {
    question: "Are WHO percentile growth charts accurate for Indian children?",
    answer: "Yes, KidCare utilizes the World Health Organization (WHO) Child Growth Standards 2006/2024 calibrated alongside Indian Academy of Pediatrics (IAP) percentiles to accurately track height, weight, and head circumference."
  },
  {
    question: "Can I download and share my child's medical prescriptions & records?",
    answer: "Yes, all prescriptions, lab test reports, and vaccination certificates are digitally signed and available in the Prescriptions tab. You can download PDF copies or share them directly with other healthcare providers."
  },
  {
    question: "How do I add a second child to the app?",
    answer: "You can tap on your child's profile card at the top and select '+ Add Child Profile' or go to Profile Settings > Add Kid Profile to manage multiple children in one parent account seamlessly."
  }
];
