# ADR 0003: Use HTML, CSS, and JavaScript Stack

## Status
Accepted

## Context
The goal of the project was to create a simple static website with minimal resources. We needed a stack that could deliver the best performance and simplicity for a static site without requiring backend complexity.

## Decision
We chose the classic **HTML**, **CSS**, and **JavaScript** stack. This combination is perfect for static websites as it allows rapid development with high performance, good compatibility across browsers, and minimal server-side processing.

## Alternatives Considered
- **React**: Good for dynamic sites, but added unnecessary complexity for a static project.
- **Vue.js**: Similar to React, would have required additional setup and tooling for a static website.
- **Jekyll**: A static site generator that integrates with GitHub Pages but requires familiarity with Ruby, which was not ideal.

## Consequences
- **Pros**: Quick and easy development with a minimal learning curve. No need for additional tools or build processes.
- **Cons**: Limited features compared to modern JavaScript frameworks for interactive sites. This stack isn't ideal if future dynamic features are required.

## Date
2025-04-17

## Author
Thulani
