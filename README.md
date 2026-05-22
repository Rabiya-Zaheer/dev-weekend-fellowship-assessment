#  Pomodoro Timer App
A simple and responsive Pomodoro Timer web application built with **React + Vite**.  
Boost your productivity by alternating between focused work sessions and short breaks — with automatic session tracking built in.

---

##  Getting Started
### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)
### Installation
```bash
# 1. Clone the repository
git clone https://github.com/your-username/pomodoro-timer.git
# 2. Navigate into the project folder
cd pomodoro-timer
# 3. Install dependencies
npm install
# 4. Start the development server
npm run dev
```
Then open your browser and go to: `http://localhost:5173`

---
##  Project Structure
```
pomodoro-timer/
├── public/
└── src/
    ├── App.jsx        # Main Pomodoro logic & state
    ├── App.css        # Component styling
    └── main.jsx       # React entry point
```
---
##  How It Works
1. Timer starts in **Focus Mode** (25 minutes)
2. When the timer hits zero:
   - The focus session is saved to history
   - App automatically switches to **Break Mode** (5 minutes)
3. After the break ends, it switches back to Focus Mode
4. All focus sessions for the current day are stored via **LocalStorage**
5. History resets automatically at midnight (new day)
---
##  Key Features
-  25-minute focus / 5-minute break cycle
-  Session history tracking (per day)
-  Persistent storage with LocalStorage
-  Auto mode switching (focus ↔ break)
-  Responsive UI
---
##  Built With
- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — Build tool & dev server
---
##  Future Improvements
- [ ] Custom focus/break durations
- [ ] Sound notifications on session end
- [ ] Progress bar / animations
- [ ] Dark / light theme toggle
- [ ] Desktop notifications
---
##  Author
Built as a frontend learning project.

---
##  License
This project is for educational use only.
```
