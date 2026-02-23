---
title: Identity Wallet
description: A DID-based Identity Wallet mobile application built with React Native. Users can manage their decentralized identities, credentials, and digital documents securely on their mobile devices.
technologies:
  - React Native
  - TypeScript
  - DID
  - Sentry
role: Mobile Developer
status: completed
startDate: "2023"
---

## Overview

Identity Wallet is a mobile application that empowers users to take full control of their digital identities through decentralized identifier (DID) technology. The app provides a secure, user-friendly interface for managing verifiable credentials, digital documents, and identity attestations — all stored locally on the user's device.

## Key Features

- **Decentralized Identity Management** — Create and manage DIDs following W3C standards, giving users full ownership of their digital identity without relying on centralized authorities.
- **Credential Storage & Presentation** — Securely store verifiable credentials and selectively share them with requesting parties through QR code scanning.
- **Document Vault** — Encrypted local storage for sensitive digital documents such as IDs, certificates, and licenses.
- **Biometric Authentication** — Fingerprint and face recognition support for quick, secure access to the wallet.
- **Offline Capability** — Core functionality works without an internet connection, with sync when connectivity is restored.

## Technical Highlights

- Built with **React Native** and **TypeScript** for a type-safe, cross-platform codebase targeting both iOS and Android.
- Implemented DID resolution and credential verification following **W3C DID Core** and **Verifiable Credentials** specifications.
- Integrated **Sentry** for real-time error tracking and performance monitoring across devices.
- Used secure storage APIs (Keychain on iOS, Keystore on Android) for encryption key management.
- Designed a modular architecture separating identity, credential, and document layers for maintainability.

## Challenges & Solutions

- **Secure Key Storage** — Needed to store private keys safely on diverse mobile devices. Solved by abstracting platform-specific secure storage (iOS Keychain / Android Keystore) behind a unified TypeScript interface.
- **Offline-First Architecture** — Users needed access to credentials without internet. Implemented a local-first data layer with background sync to ensure availability regardless of connectivity.
- **Cross-Platform Consistency** — Maintaining consistent UI and behavior across iOS and Android required careful platform-specific adjustments while keeping the shared codebase clean using React Native's Platform API.
