---
title: "Tomato Timer"
label: "Tool"
category: tool
summary: "A focus timer and task list I built for myself to keep on top of deadlines. It syncs across my Mac, PC and phone."
order: 1
thumb: "../../assets/projects/tomato-timer/01-hero.png"
# Screenshots from the hand-over pack. All use demo data only.
imagesTitle: "Screenshots"
imagesLayout: two
images:
  - src: "../../assets/projects/tomato-timer/01-hero.png"
    alt: "Dark timer app with a countdown at 18:18, a task called Write blog post in focus, and a list of five tasks open on the right."
    caption: "Mid-session: a focus task running, with the Today list open alongside."
  - src: "../../assets/projects/tomato-timer/02-theme-dark.png"
    alt: "Dark-themed timer screen with a green ring showing 05:00 and the label Ready for a short break."
    caption: "The dark theme, on a short break."
  - src: "../../assets/projects/tomato-timer/03-theme-light.png"
    alt: "Light-themed timer screen with a green ring showing 05:00 and the label Ready for a short break."
    caption: "The same screen in the light theme."
  - src: "../../assets/projects/tomato-timer/16-accent-colour-purple.png"
    alt: "Timer screen with a purple ring and purple highlights instead of coral."
    caption: "The focus colour changed to purple in settings."
  - src: "../../assets/projects/tomato-timer/08-task-complete.png"
    alt: "Task list where Reply to emails has a green tick and a line through it at the bottom of the list."
    caption: "A task ticked off moves to the bottom with a line through it."
  - src: "../../assets/projects/tomato-timer/12-content-calendar.png"
    alt: "Side panel titled Content calendar listing demo posts with dates and a Ready tick on the first."
    caption: "The content calendar, with a short brief and upcoming demo posts."
  - src: "../../assets/projects/tomato-timer/14-motivation-board.png"
    alt: "Dark board with four short motivational lines in different colours and styles."
    caption: "The motivation board: short lines placed freely on a blank wall."
  - src: "../../assets/projects/tomato-timer/18-sync-desktop-and-phone.png"
    alt: "A desktop timer with its task drawer next to a phone screen listing the same five tasks."
    caption: "Desktop and phone showing the same tasks (sync simulated for this image)."
---

## The problem

I built it because I find it hard to stay on top of tasks, and I wanted something that helps me start and finish.

## What I made

Tomato Timer is a focus timer and task list for myself. It syncs across my Mac, PC and phone.

- Focus and break sessions, with Today and Later task lists, favourites and drag-to-reorder.
- Reminders, a small content calendar, a files area and a motivation board.
- It runs as a web page, a Windows app and a Mac app (with a small floating timer window), plus a phone page for the task list.
- It is one HTML file with plain CSS and JavaScript, with no framework.
- Sync saves my data to a private GitHub repository. Each device keeps the newest edit to each item, and deleted items do not come back.

Tomato Timer is not a public product and cannot be installed.

## Tomato MCP

I later built a small connector that lets an AI app read and change the same task list. It has its own page: [Tomato MCP](/projects/tomato-mcp/).

## What I learned

Fixing a problem I have myself gets it improved quicker. Keeping it simple matters.
