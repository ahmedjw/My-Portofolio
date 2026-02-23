---
title: Mercibookoup
description: A progressive web app platform for swapping books between users in Europe. Built the frontend using Next.js, React, TypeScript, and Material UI with Agile methodology (Scrum). Integrated REST API data and implemented pagination using React Query.
technologies:
  - Next.js
  - React
  - TypeScript
  - Material UI
  - React Query
  - REST API
role: Frontend Developer
status: completed
startDate: "2023"
liveUrl: https://mercibookoup.com/
---

## Overview

Mercibookoup is a community-driven progressive web app that connects book lovers across Europe, enabling them to swap books with each other. The platform makes it easy to list books you've finished reading, discover titles from other users, and arrange swaps — promoting sustainable reading habits and building a network of book enthusiasts.

## Key Features

- **Book Listing & Discovery** — Users can list their available books with cover images, descriptions, and condition details, and browse a searchable catalog of books offered by others.
- **Smart Matching** — An algorithm suggests potential swaps based on users' wishlists and available books, streamlining the exchange process.
- **User Profiles** — Each user has a profile showcasing their library, swap history, and community rating.
- **Real-Time Notifications** — Instant notifications for swap requests, messages, and matches keep users engaged.
- **Responsive PWA** — Installable on mobile devices with offline browsing support for a native app-like experience.

## Technical Highlights

- Built with **Next.js** and **React** using **TypeScript** for a robust, server-rendered frontend with excellent SEO.
- Styled with **Material UI** for a polished, accessible component library with consistent design tokens.
- Managed server state with **React Query**, implementing efficient pagination, caching, and background refetching for the book catalog.
- Integrated **REST APIs** for all data operations with proper error boundaries and loading states.
- Followed **Agile/Scrum** methodology with sprint planning, daily standups, and retrospectives in a distributed team.

## Challenges & Solutions

- **Paginated Data Performance** — The book catalog could contain thousands of entries. Used React Query's infinite query pattern with cursor-based pagination to load data incrementally without overwhelming the client.
- **PWA Reliability** — Ensuring the app worked well when installed on mobile required careful service worker configuration and cache strategies to balance freshness with offline availability.
- **Cross-Cultural UX** — Serving users across multiple European countries meant supporting various languages and cultural expectations. Implemented i18n-ready component patterns and locale-aware date/currency formatting.
