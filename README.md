# Dev-Weekend-Fellowship-Assessment
#  Pomodoro Timer App

A simple and responsive Pomodoro Timer web application built using **React + Vite**.  
It helps users improve productivity by alternating between focused work sessions and short breaks, with automatic session tracking.

---

##  Tech Stack

- React (Hooks: useState, useEffect, useRef)
- Vite
- JavaScript (ES6+)
- CSS (custom styling)
- LocalStorage (for persistence)

---

##  Features

-  25-minute focus timer (default)
-  5-minute break timer
-  Start, Pause, and Reset controls
-  Automatic switching between focus and break modes
-  Daily session history (focus sessions only)
-  Persistent history using LocalStorage
-  Auto-reset history on a new day
-  Responsive design for mobile and desktop

---
## Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/pomodoro-timer.git
### 2. Navigate into the project folder
cd pomodoro-timer
3. Install dependencies
npm install
4. Start the development server
npm run dev
5. Open in browser
http://localhost:5173
### Project Structure
src/
 ├── App.jsx        # Main Pomodoro logic
 ├── App.css        # Styling
 ├── main.jsx       # Entry point
How It Works
Timer starts at 25:00 in focus mode
When countdown reaches 0:
Focus session is saved in history
App switches to break mode (5 minutes)
After break ends, it switches back to focus mode
All completed focus sessions are stored for the current day
Data is saved using LocalStorage and resets each new day
Key Learning Points
React state management with hooks
Timer logic using setInterval and useRef
Conditional rendering based on app mode
LocalStorage for persistence
Basic responsive UI design
Future Improvements
Customizable focus/break durations
Sound notifications on session end
Progress indicators / animations
Dark/light theme toggle improvements
Author
Built as a frontend assessment project for learning and practice purposes.
License
This project is for educational use on
