---
title: "Downloads Tidier"
label: "Tool / Open source"
category: tool
summary: "Sorts a messy Downloads folder by file type, with preview first and undo. It never deletes or overwrites. Free and open source."
order: 3
stats:
  - { value: 179, label: "tests" }
  - { value: 3, label: "operating systems checked: Windows, macOS and Linux" }
link: "https://github.com/jay1zzzo/downloads-tidier"
linkText: "See the code on GitHub"
# Screenshots from the project's GitHub page (docs/images). Click to enlarge.
imagesTitle: "Before and after"
imagesLayout: wide
images:
  - src: "../../assets/projects/downloads-tidier/before.png"
    alt: "A Downloads folder before tidying: dozens of loose installers, zip files, videos and images in one long list."
    caption: "Before: a messy Downloads folder."
  - src: "../../assets/projects/downloads-tidier/after.png"
    alt: "The same folder after tidying: files sorted into Archives, Audio, Documents, Images, Installers, Other, Spreadsheets and Video folders, plus the tool's log file."
    caption: "After: sorted into folders by file type, plus the tool's log file."
---

## The problem

My Downloads folder was a mess, and I didn't trust tools that move files without a way back.

## What I did

I built a free, open-source tool that sorts a folder by file type, with preview first, apply, and undo. It never deletes or overwrites.

I built it with Claude Code. I planned it first, then built it in 8 reviewed steps. I'm not yet coding from scratch.

- Version 0.1.0, MIT licence
- 179 tests
- Checks on Windows, macOS and Linux, run by GitHub Actions

## What I learned

- Plan first, and build in small checked steps.
- Safety matters more than speed when software touches people's files.
- Test properly: 179 tests, on three operating systems.
- Be honest that I built it with Claude Code.
