---
title: "Building Truly Reusable React Components"
description: "Principles and patterns for creating React components that scale across projects and teams."
pubDate: 2026-01-10
tags: ["React", "Components", "Architecture"]
draft: false
---

After building component libraries used across multiple projects, I've developed strong opinions about what makes a component truly reusable. Here are the principles I follow.

## The Single Responsibility Principle

A reusable component should do one thing well. If you find yourself passing a `variant` prop that fundamentally changes the component's behavior, you probably need two components.

```jsx
// Too many responsibilities
<Card variant="blog" />
<Card variant="pricing" />
<Card variant="testimonial" />

// Better: separate components with shared primitives
<BlogCard />
<PricingCard />
<TestimonialCard />
```

## Composition Over Configuration

Instead of a monolithic component with dozens of props, build small composable pieces:

```jsx
// Configuration approach (rigid)
<DataTable
  columns={columns}
  sortable
  filterable
  paginated
  selectable
/>

// Composition approach (flexible)
<Table>
  <Table.Header sortable>
    {columns.map(col => <Table.Column key={col.id} {...col} />)}
  </Table.Header>
  <Table.Body>
    {rows.map(row => <Table.Row key={row.id} {...row} />)}
  </Table.Body>
  <Table.Pagination />
</Table>
```

## Document with Storybook

Every reusable component deserves a Storybook story. I structure stories to show:

1. **Default state**: The component with minimal props
2. **Variants**: All visual variations
3. **Edge cases**: Empty states, long text, missing data
4. **Interactive**: Controls panel for live prop manipulation

## Test What Matters

For reusable components, I focus tests on:

- **Rendering**: Does it render without crashing?
- **Props**: Do props change the output correctly?
- **Accessibility**: Is it keyboard navigable? Does it have proper ARIA attributes?
- **Events**: Do callbacks fire with correct arguments?

Using Vitest with Testing Library gives fast, reliable tests:

```typescript
describe('Button', () => {
  it('calls onClick when pressed', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });
});
```

## Conclusion

Reusable components save time across the organization. Invest upfront in good API design, documentation, and testing — your future self and teammates will thank you.
