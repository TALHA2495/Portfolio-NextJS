```markdown
# Design System: Editorial Technical Portfolio

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Architect’s Monograph"**

This design system moves beyond the standard "developer dashboard" aesthetic to embrace the world of high-end digital publishing. It is designed to position a Junior Software Engineer not as a beginner, but as a sophisticated craftsperson. 

The system breaks the "template" feel by utilizing **intentional asymmetry** and **rhythmic white space**. Rather than boxing content into rigid containers, we treat the screen as a canvas where code meets couture. The experience is defined by dramatic typographic scales, cinematic depth, and a "quiet luxury" approach to interactions.

---

## 2. Colors & Tonal Depth

The palette is rooted in a "near-black" charcoal ecosystem, avoiding the harshness of pure `#000000`. It utilizes a sophisticated layering of cool-toned darks to create a sense of physical space.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning or layout containment. Structural boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit directly against a `surface` background. Let the change in tonal value create the edge.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to create "nested" depth:
- **Base Layer:** `background` (#111316) for the overall page.
- **Section Layer:** `surface-container-low` (#1a1c1f) for large content blocks.
- **Interactive Layer:** `surface-container-high` (#282a2d) for cards or hovered states.
- **Floating Layer:** `surface-container-highest` (#333538) for modals or menus.

### The "Glass & Gradient" Rule
To achieve a signature premium feel, use **Glassmorphism** for floating elements (Navigation bars, Tooltips). 
- **Recipe:** Combine a semi-transparent `surface-container` color (60-80% opacity) with a `backdrop-blur` of 12px–20px. 
- **Signature Accents:** Main CTAs or active states should utilize a subtle linear gradient: `primary` (#00daf3) to `primary-container` (#009fb2) at a 135-degree angle. This provides a "soul" to the UI that flat colors lack.

---

## 3. Typography

Typography is the primary driver of the "Editorial" feel. We pair the technical precision of **Inter** and **Space Grotesk** with the humanist warmth of **Manrope**.

| Role | Font Family | Size | Character |
| :--- | :--- | :--- | :--- |
| **Display-LG** | Inter | 3.5rem | Bold, tight tracking (-2%). Use for Hero statements. |
| **Headline-MD** | Inter | 1.75rem | Medium weight. Use for section headers. |
| **Title-LG** | Manrope | 1.375rem | Semibold. Perfect for project titles. |
| **Body-LG** | Manrope | 1.0rem | Regular. Optimized for long-form case studies. |
| **Label-MD** | Space Grotesk | 0.75rem | All caps, 5% letter spacing. Use for "MERN Stack" tags. |

**Director's Note:** For Hero sections, occasionally wrap a single word in an *italic serif* (e.g., Playfair Display) to inject a high-fashion editorial contrast against the technical sans-serif.

---

## 4. Elevation & Depth

We eschew traditional drop shadows in favor of **Ambient Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. The subtle 2% difference in hex value creates a "soft lift" that feels more modern than a shadow.
*   **Ambient Shadows:** When a float is required (e.g., a project card on hover), use an extra-diffused shadow: `offset: 0 20px, blur: 40px, color: rgba(0, 0, 0, 0.25)`.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` (#414754) at **15% opacity**. Never use a 100% opaque border.
*   **Soft Glows:** For "Primary" actions, apply a subtle outer glow using the `primary` color (#00daf3) with a 20px blur at 10% opacity to mimic a soft neon tube.

---

## 5. Components

### Buttons
- **Primary:** Gradient background (`primary` to `primary-container`), `on-primary` text, `lg` (1rem) corner radius.
- **Secondary:** Transparent background with a `Ghost Border`. Text in `primary`.
- **Tertiary/Ghost:** No background or border. `on-surface` text. Use for "View All" or "Back" links.

### Project Cards
- **Forbid:** Do not use internal divider lines.
- **Structure:** Use `surface-container-low` background. Use vertical white space (32px+) to separate the image from the description.
- **Interaction:** On hover, transition the background to `surface-container-high` and apply an ambient shadow.

### Status Chips (Tech Stack)
- **Selection Chips:** Use `secondary-container` (#5203d5) with `on-secondary-container` (#c0acff) text. 
- **Styling:** Use `label-md` typography. Rounded-full (9999px) for a "pill" look that contrasts against the `lg` card corners.

### Input Fields
- **Default State:** `surface-container-highest` background, no border, `lg` radius.
- **Focus State:** `Ghost Border` becomes visible at 40% opacity; subtle `primary` glow.

---

## 6. Do’s and Don’ts

### Do
- **Do** use asymmetrical margins (e.g., 12-column grid where the content occupies columns 3 through 10) to create an editorial feel.
- **Do** lean into the "Tertiary" blue/purple accents (#adc7ff) for subtle background glows behind code snippets.
- **Do** prioritize "Type as Image"—let oversized headlines be the primary visual element.

### Don't
- **Don't** use 100% white (#ffffff) for body text. Use `on-surface` (#e2e2e6) to reduce eye strain and maintain the premium dark aesthetic.
- **Don't** use standard 4px or 8px border radii. This system requires `lg` (16px) or `xl` (24px) to feel friendly yet sophisticated.
- **Don't** use dividers or horizontal rules. If you feel the need for a line, use a 48px gap of empty space instead.

---

## 7. The Grid & Spacing
- **Grid:** 12-column grid, 24px gutter, 80px-120px margins.
- **Rhythm:** Use a strict 8px-based spacing scale, but favor "Generous" increments (32px, 64px, 128px) to emphasize the editorial nature. High-end design breathes.```