---
title: "Tomato MCP"
label: "Tool / AI integration"
category: tool
summary: "A small MCP server that lets an AI app such as Claude read and update my Tomato Timer task list."
order: 2
thumb: "../../assets/projects/tomato-mcp/diagram.webp"
link: "https://github.com/jay1zzzo/tomato-mcp"
linkText: "View on GitHub"
imagesTitle: "How it connects"
imagesLayout: wide
images:
  - src: "../../assets/projects/tomato-mcp/diagram.webp"
    alt: "Diagram in four boxes joined by arrows. An AI app, tested with Claude Desktop and Claude Code, connects over MCP to Tomato MCP, a small MCP server with four tools that never deletes tasks. That connects through the GitHub API to one task file in a private GitHub repository, which syncs with my Tomato Timer app."
    caption: "How Tomato MCP connects an AI app to my task list. Drawn from the project's public README."
---

## What it is

MCP is a standard way for an AI app to use outside tools. Tomato MCP is a small MCP server that lets an AI app read and change my Tomato Timer task list. I have tested it with Claude Desktop and Claude Code.

It connects the AI app to the same task list my Tomato Timer uses. Changes made through the AI show up in the timer on the next sync, and the other way round. I built it after Tomato Timer, and I published it to show how the connection works.

Tomato Timer itself is not a public product and cannot be installed. You can read about it on its own page: [Tomato Timer](/projects/tomato-timer/).

## What an AI app can do with it

- Get a short snapshot: today's open tasks, how many are in Later, what was done today and the next content-calendar posts.
- List today's tasks, Later tasks or tasks finished today.
- Add a task to Today or Later, starred or not.
- Mark a task done or not done, move it to the top or bottom, move it between Today and Later, star or unstar it, or rename it.

It never deletes tasks, and it only changes the rows it edits.

## My contribution

I built Tomato MCP with Claude Code. I decided what it should do, reviewed the work and tested it. I am not claiming to have written it from scratch.

## How it fits my other tools

Tomato MCP sits alongside Job Desk and Downloads Tidier as part of my interest in connecting AI apps to everyday work and making routine jobs simpler.

## Technical detail

- A Python server that speaks MCP over a local connection. It needs Python 3.10 or newer and is MIT licensed.
- Four tools: get_context, list_tasks, add_task and update_task. Replies are short lists rather than whole files, so an AI app can stay up to date cheaply.
- It reads and writes the task file in a private GitHub repository through the GitHub API, using an access token limited to that one repository.
- If the app saves at the same moment, it reloads and tries again instead of overwriting, up to three times.
- It includes three automated tests that run without a network connection or a real token.
- It runs on the computer where it is installed. A hosted version for web-based AI apps does not exist yet.
