---
title: "Ketchup"
label: "Tool"
category: tool
summary: "A focus timer and task list I built for myself to keep on top of deadlines. It syncs across my Mac, PC and phone. It used to be called Tomato Timer."
order: 1
thumb: "../../assets/projects/ketchup/thumb.webp"
# Screenshots from workspace/ai-portfolio/screenshots/hd (21 Nov 2026). All use made-up tasks.
# The red Tomato look is left out on purpose.
imagesTitle: "Screenshots"
imagesNote: "Example tasks, not my real list."
imagesLayout: two
images:
  - src: "../../assets/projects/ketchup/01-focus.webp"
    alt: "Dark timer screen at 24:57 where only the task, Draft the spring newsletter, and the time are bright. Everything else has faded back."
    caption: "Focus mode: everything except the task and the time fades back."
  - src: "../../assets/projects/ketchup/02-today.webp"
    alt: "Task window with Today, Later and Upcoming tabs. Four example tasks, the first a favourite and two with date labels."
    caption: "The Today list, with favourites and optional dates and times."
  - src: "../../assets/projects/ketchup/03-upcoming.webp"
    alt: "The Upcoming tab, with example tasks grouped under Overdue, Today and Tomorrow."
    caption: "Upcoming groups dated tasks by when they are due."
  - src: "../../assets/projects/ketchup/04-looks.webp"
    alt: "The same timer screen in four looks: Studio, dark with a coral ring; Kitchen timer, light with a dial of ticks; Garden, pale green; and Mono, black and white."
    caption: "Four of the five looks. Each one has a light and a dark version."
  - src: "../../assets/projects/ketchup/05-phone.webp"
    alt: "Four phone screens side by side: the Today list, adding a task with quick date buttons, the Upcoming list in green, and the Today list in black and white."
    caption: "On the phone: Today, adding a task, Upcoming, and Today in another look."
  - src: "../../assets/projects/ketchup/06-settings.webp"
    alt: "Settings window open on Appearance, with six look previews, a light, dark or match Mac switch and a text size choice."
    caption: "Appearance settings."
---

## The problem

I built it because I find it hard to stay on top of tasks, and I wanted something that helps me start and finish.

## What I made

Ketchup is a focus timer and task list for myself. It syncs across my Mac, PC and phone. I renamed it from Tomato Timer in November 2026, when I redesigned it. The name is a play on catching up.

- Focus and break sessions. While I focus, everything except the task and the time fades back.
- Today, Later and Upcoming lists, with favourites and optional dates and times.
- A task dated in the future waits in Upcoming until its day, unless I make it a favourite.
- A read-only Deadlines panel above the lists.
- Five looks, each in light and dark. The one I pick follows me between devices.
- A redesigned phone page, with a pop-up for adding and editing tasks.
- A small floating timer on the Mac.
- Sync saves my data to a private GitHub repository.

Ketchup is not a public product and cannot be installed.

## How it keeps changing

I use it every day, notice what slows me down, and make a small fix. On 21 November 2026 I made 23 small releases. Seven were planned, 11 came from using it, four fixed bugs I ran into, and one fixed a problem found while testing.

- **Cutting back.** I hid panels I wasn't using instead of deleting them, so no saved settings were lost.
- **Finding bugs.** The look kept switching back between devices because they were comparing clock times. It now uses a simple counter.
- **Updates.** The first update prompt pulled me to another desktop. Now it waits until I click into the app.

## My contribution

I built Ketchup with Claude Code. I decided what each part should do, reviewed the work and tested it. I am not claiming to have written it from scratch.

## Ketchup MCP

I later built a small connector that lets an AI app read and change the same task list. It has its own page: [Ketchup MCP](/projects/ketchup-mcp/).

## What I learned

Fixing a problem I have myself gets it improved quicker. Keeping it simple matters.
