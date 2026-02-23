---
name: vercel-composition-patterns
description:
  React composition patterns that scale. Use when refactoring components with
  boolean prop proliferation, building flexible component libraries, or
  designing reusable APIs. Triggers on tasks involving compound components,
  render props, context providers, or component architecture. Includes React 19
  API changes.
license: MIT
metadata:
  author: vercel
  version: '1.0.0'
---

# React Composition Patterns

Composition patterns for building flexible, maintainable React components. Avoid
boolean prop proliferation by using compound components, lifting state, and
composing internals.

## When to Apply

- Refactoring components with many boolean props
- Building reusable component libraries
- Designing flexible component APIs
- Working with compound components or context providers

## Rule Categories by Priority

| Priority | Category                | Impact | Prefix          |
| -------- | ----------------------- | ------ | --------------- |
| 1        | Component Architecture  | HIGH   | `architecture-` |
| 2        | State Management        | MEDIUM | `state-`        |
| 3        | Implementation Patterns | MEDIUM | `patterns-`     |
| 4        | React 19 APIs           | MEDIUM | `react19-`      |

## Key Rules

### Component Architecture (HIGH)

- `architecture-avoid-boolean-props` – Don't add boolean props to customize behavior; use composition
- `architecture-compound-components` – Structure complex components with shared context

### State Management (MEDIUM)

- `state-decouple-implementation` – Provider is the only place that knows how state is managed
- `state-lift-state` – Move state into provider components for sibling access

### Implementation Patterns (MEDIUM)

- `patterns-explicit-variants` – Create explicit variant components instead of boolean modes
- `patterns-children-over-render-props` – Use children for composition instead of renderX props

### React 19 APIs (MEDIUM)

- `react19-no-forwardref` – Don't use `forwardRef`; refs are now regular props in React 19
- Use `use()` instead of `useContext()` in React 19
