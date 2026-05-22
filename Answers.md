# ANSWERS.md — Pomodoro Timer Assessment

---

## 1. How to Run the Project

```bash
# 1. Clone the repository
git clone https://github.com/Rabiya-Zaheer/Dev-Weekend-Fellowship-Assessment/tree/main

# 2. Move into the project folder
cd pomodoro-timer

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open: `http://localhost:5173`

No additional setup is required.

---

## 2. Stack & Design Choices

I chose **React + Vite** because it was the stack I was most comfortable with, and Vite provides a fast dev setup with instant hot module reloading — letting me focus on timer logic instead of build configuration.

### Design Decisions

**Centralized timer layout**
- The timer sits center-screen with large typography so the remaining time is instantly readable.
- Keeps the interface distraction-free and focused on the core interaction.

**Mode-based UI (Focus vs Break)**
- Two visual states with different background colors give immediate feedback about the current mode.
- Reduces confusion and makes the app state obvious at a glance.

---

## 3. Responsive & Accessibility

**Responsive behavior:**
- On small screens (~360px): timer scales down using flexible font sizing and a centered single-column layout.
- On larger screens (~1440px): layout stays centered with increased spacing for readability.
- Single-column design works consistently across all device sizes.

**Accessibility considerations:**
- Buttons are clearly labeled: Start, Pause, Reset.
- Sufficient color contrast between text and background.
- Simple layout avoids unnecessary complexity for screen readers.

**One thing I skipped:**
Full keyboard navigation (custom focus trapping, shortcuts). I prioritized core timer functionality over advanced accessibility features given the time constraints.

---

## 4. AI Usage

I used AI (ChatGPT) during development in the following areas:

- **Project structure guidance** — helped decide component structure for the React app.
- **Timer logic debugging** — assisted in fixing issues with `setInterval` and state updates.
- **LocalStorage implementation** — helped implement persistence for session history.

**One modification I made:**
The AI initially suggested storing history without considering daily reset. I modified the logic to include a date check using `toDateString()`, so history resets automatically when a new day starts — matching the "daily history" requirement.

---

## 5. Honest Gap

One area that isn't fully polished is the **timer transition experience**.

Currently:
- Mode switches instantly between focus and break.
- There is no animation or sound feedback when a session ends.

**If I had one more day, I would:**
- Add a subtle animation when switching modes.
- Add an audio notification when a session completes.
- Disable buttons during active countdown to prevent accidental resets.
- Polish mobile spacing for smoother responsiveness.
