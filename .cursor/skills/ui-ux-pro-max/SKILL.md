---
name: ui-ux-pro-max
description: Provides senior product UI/UX critique and implementation guidance for MerhabaMap. Use when designing or reviewing screens, layout, navigation, auth flows, mobile/web parity, visual hierarchy, premium polish, accessibility, microcopy, spacing, CTAs, forms, maps, cards, headers, bottom navigation, or when the user asks whether a UI idea looks good, cheap, premium, high-end, modern, native, or consistent.
---

# UI/UX Pro Max

Use this skill before proposing or implementing meaningful UI/UX changes in MerhabaMap.

## Core Stance

- Do not blindly implement weak UI requests. Identify the user's goal, explain UX risks briefly, then propose the strongest option within the existing design language.
- Prefer product clarity over decoration: reduce cognitive load, make hierarchy obvious, and keep the primary action visually unmistakable.
- Optimize for a Germany-first, Turkish-community product: trustworthy, calm, warm, premium, not noisy or gamified.
- Treat mobile as native product design, not a squeezed desktop page.

## MerhabaMap Design Rules

- Mobile MerhabaMap logo and primary buttons must use the official Turkey flag red `#E30A17` on both iOS and Android. Do not tune different mobile reds per platform.
- **Bereichs-Farben (AGENTS.md):** **Orte** — MerhabaMap-Rot `#E30A17`; **Events** — MerhabaMap-Schwarz `#000000` (`text-merhaba-black` / `--merhaba-black`); **Communities** — MerhabaMap-Blau `#00AEEF` (`text-community` / `--merhaba-blue`); **Karte / Discovery-CTAs + Standort** — MerhabaMap-Türkis `#30D5C8` nur wie dort definiert.
- Turquoise means exactly `#30D5C8` and is reserved for Discovery map entry buttons and the "Mein Standort" marker. Do not use turquoise for generic CTAs, links, text accents, large surfaces, or Community accents (use community blue instead).
- Use light gray app surfaces (`#f3f4f6`, `#f6f7f9`, `#f9fafb`) to separate cards and chrome without making the UI feel heavy.
- Keep cards premium: soft borders, restrained shadows, generous radius, no loud glow unless there is a strong reason.
- Avoid visual nesting where possible. If there is a card containing buttons containing borders, remove one layer.

## Review Checklist

Before changing UI, check:

- **Task clarity:** What is the user trying to do on this screen?
- **Hierarchy:** Is there exactly one dominant primary action?
- **Spacing:** Does the layout breathe without feeling empty or pushed into safe areas?
- **Native fit:** Does it feel natural on iOS and Android sizes, not only in a web viewport?
- **Accessibility:** Are targets at least ~44pt, text legible, contrast sufficient, state communicated without color only?
- **Microcopy:** Is the copy short, human, and legally safe? Do not invent legal claims.
- **State handling:** Loading, disabled, error, empty and success states should be visible and calm.
- **Cost/security:** If UI changes can increase paid API calls or weaken auth/security, stop and ask for approval.

## Implementation Guidance

- For auth screens: brand can be centered as a welcome moment; OAuth buttons should be secondary; email/password/magic-link CTAs should be the clear primary action when present.
- For mobile shells: keep header chrome calm, bottom navigation predictable, and the center map tab visually distinct only with the approved turquoise.
- For forms: show concrete placeholder examples, inline errors close to the relevant control, and avoid empty inputs that look broken.
- For menus: prefer recognizable native patterns, but keep destructive/session actions visually separated.
- For cards: make the whole card pressable when it represents a destination; include a subtle action cue.

## Response Style

When asked for design judgment:

1. Give a clear recommendation.
2. Explain the top 2-4 reasons.
3. Mention one viable alternative only if it is genuinely competitive.
4. If implementation is requested, keep edits scoped and verify TypeScript after TS/TSX changes.
