# 🎓 Kinematics Classes — Official Coaching Institute Website

A modern, high-conversion, responsive website built for **Kinematics Classes**, a premier coaching institute preparing students for **IIT-JEE (Main & Advanced)**, **NEET-UG**, and **Classes 8th to 12th Foundations & Board Exams**.

---

## 🌟 Key Features Included

1. **Academic Branding & Identity:**
   - Visual physics atomic motif & crisp **Red & White** theme (Crimson Red, Scarlet & Crisp White).
   - Tagline: *"Learn • Solve • Excel"*.
   - Accreditation & trust indicators (ISO certified, 12+ years pedigree, 1,850+ IIT/AIIMS selections).

2. **Interactive Lead Generation & Admissions:**
   - **Hero Quick Counseling Form:** Allows students to choose their class, target exam, and preferred mode (Offline vs Hybrid).
   - **2-Day Free Trial Demo Modal:** Lets prospective students claim a trial pass without friction.
   - **Direct WhatsApp Sync:** Pre-fills personalized enquiry messages with student name, class, and chosen course.
   - **Floating Action Dock:** Always accessible WhatsApp & Phone call buttons on desktop and mobile.

3. **Dynamic Course Catalog (Filtered Tabs):**
   - **IIT-JEE (Main + Advanced):** 2-Year Pinnacle & Super 30 Droppers program.
   - **NEET-UG Medical:** 2-Year Conqueror & 1-Year Ascend repeater program.
   - **Foundations (Classes 8th to 10th):** Junior Spark & Catalyst Olympiad/NTSE base.
   - **Board Exam Boosters:** 12th Board 95%+ target program.

4. **K-SAT Scholarship Calculator:**
   - Interactive slider allowing students to calculate estimated tuition fee waivers (up to 100%) based on their target marks.

5. **Star Faculty Showcase:**
   - Profiles of IITian and AIIMS doctors with degrees, experience, and student ratings.

6. **Hall of Fame & Results:**
   - AIR rankers with target colleges (IIT Delhi, AIIMS New Delhi, IIT Bombay), marks, and student testimonials.

7. **Batch Schedules Table:**
   - Displays real-time day schedules, timings, and urgent remaining seats indicators.

8. **Free Study Material & Formula Books:**
   - Instant download request popup for high-yield physics handbooks and mind maps.

9. **Interactive FAQ Accordion:**
   - Answers addressing batch size (strict 25-30 cap), doubt desks, tests, and fees.

---

## 🚀 How to Run & Preview

### Method 1: Direct in Any Browser (Zero setup)
Simply double-click on `index.html` or right-click `index.html` -> **Open With** -> **Google Chrome** (or Edge/Brave/Firefox).

### Method 2: Local HTTP Server (Optional)
If you have Python installed, open PowerShell in this folder and run:
```powershell
python -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## ⚙️ How to Customize Your Store & Institute Details

| Item to Change | File | Where to find |
| :--- | :--- | :--- |
| **Institute Phone Number** | `index.html` & `app.js` | Search for `+91 77373 26011` or `917737326011` and replace with your actual phone number. |
| **Institute Address** | `index.html` | Under `#store-info` or `#contact` section. |
| **Institute Email** | `index.html` | Search for `info@kinematicsclasses.com`. |
| **Courses & Offerings** | `app.js` | Update the `COURSES_DATA` array at the top of `app.js`. |
| **Faculty Mentors** | `app.js` | Update the `FACULTY_DATA` array in `app.js`. |
| **Recent Toppers** | `app.js` | Update the `TOPPERS_DATA` array in `app.js`. |
| **FAQs** | `app.js` | Update the `FAQS_DATA` array in `app.js`. |

---

## 📱 Mobile-First Responsive Design
- Tested across standard desktop widths, tablets (iPad/Surface), and mobile viewports.
- Features a slide-out hamburger navigation menu for smartphones.

