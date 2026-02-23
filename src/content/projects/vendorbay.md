---
title: VendorBay
description: A medical equipment e-commerce platform serving vendors in Canada and the USA. Built the entire frontend using React, Next.js, and Bootstrap. Managed state with Redux and integrated data through GraphQL APIs with Apollo.
technologies:
  - Next.js
  - React
  - Bootstrap
  - Redux
  - GraphQL
  - Apollo
role: Frontend Developer
status: completed
startDate: "2022"
liveUrl: https://myvendorbay.com/
---

## Overview

VendorBay is a specialized e-commerce platform designed for the medical equipment industry, connecting vendors and buyers across Canada and the USA. The platform provides a comprehensive marketplace where medical equipment suppliers can list their products and healthcare facilities can discover, compare, and purchase the equipment they need.

## Key Features

- **Product Catalog** — A rich, filterable catalog of medical equipment with detailed specifications, certifications, and pricing information.
- **Vendor Storefronts** — Each vendor gets a customizable storefront to showcase their products, company information, and certifications.
- **Advanced Search & Filtering** — Multi-faceted search with filters for category, price range, certification status, location, and shipping options.
- **Quote Request System** — Buyers can request custom quotes for bulk orders or specialized equipment configurations.
- **Order Management** — Full order lifecycle tracking from purchase through shipping and delivery.

## Technical Highlights

- Built the complete frontend with **Next.js** and **React**, leveraging server-side rendering for SEO-critical product pages.
- Used **Bootstrap** for a responsive grid system and utility classes, customized with the project's design system.
- Managed complex application state with **Redux**, handling cart operations, user sessions, filters, and vendor dashboards.
- Integrated **GraphQL APIs** via **Apollo Client** for efficient data fetching — querying only the fields needed per component reduced payload sizes significantly.
- Implemented optimistic UI updates for cart and wishlist operations to create a snappy user experience.

## Challenges & Solutions

- **Complex State Management** — With cart, filters, user auth, and vendor data all in play, state could easily become tangled. Organized Redux into feature-based slices with normalized entity stores and selector memoization for performance.
- **GraphQL Schema Complexity** — The medical equipment domain has deeply nested product relationships (categories, specifications, certifications). Designed query fragments and custom hooks to encapsulate common data patterns and prevent over-fetching.
- **Cross-Border Compliance** — Serving both Canada and the USA meant handling different tax rules, shipping regulations, and currency. Built locale-aware components that adapted pricing display and checkout flows based on the user's region.
