# Toka UI MVP – Full Sprint Backlog, Project Setup & Developer Rules

**Sprint Duration:** 2 weeks  
**Priority:** MVP-first (core functionality only)  
**Team:** Offshore development  
**Technologies:**

- **Next.js 15** – React framework with server-side rendering and optimized routing.
- **TypeScript** – For static type checking and improved developer experience.
- **Tailwind CSS** – For utility-first styling with a custom theme supporting our black-and-white minimal design.
- **shadcn** – Component library for consistent, modern UI components.
- **Supabase** – Backend for authentication, database management, and real-time features.
- **Prettier & tailwind-prettier-plugin** – To enforce code formatting standards and ensure that Tailwind classes are formatted consistently.

**Note:**  
All interactive elements must include appropriate ARIA roles, labels, and error state styling. Environment variables, API endpoints, and configuration instructions must be documented. Future enhancements (e.g., real-time co-editing, advanced commenting, role-based access, notifications, and external integrations) are deferred to later sprints.

---

## Developer Rules & Quality Assurance Guidelines

- **After Each Task:**
  - Run the application locally to ensure it starts without errors.
  - Lint the code using the project's ESLint configuration.
  - Run Prettier to format the code; ensure that the Prettier configuration along with the tailwind-prettier-plugin is active.
  - Confirm that all tests pass before moving on to the next task.
- **Version Control:**
  - Commit code regularly with clear commit messages that reference completed tasks.
  - Each commit must result in a working state of the application.
- **Code Reviews:**
  - Perform self-reviews and peer reviews to maintain code quality.

---

## 0. Project Setup (Epic)

### 0.1: Initialize Next.js 15 Project with TypeScript

- [x] **Task:**
  - Create a new Next.js 15 project using the official starter template configured for TypeScript.
  - Set up the repository with the following folder structure:
    - `/pages` – For routing and page components.
    - `/components` – For reusable UI components.
    - `/lib` – For utility functions, API integrations, etc.
  - Commit the initial boilerplate code.
- [x] **Acceptance Criteria:**
  - The project builds successfully without any type errors.
  - The initial Next.js app runs locally and is accessible in the browser.
- [x] **Developer Checklist:**
  - [x] Run application locally.
  - [x] Lint for errors.
  - [x] Run basic E2E tests (using Puppeteer) confirming landing page loads.
  - [x] Commit changes.

### 0.2: Configure Tailwind CSS and Custom Theme

- [x] **Task:**
  - Install and configure Tailwind CSS in the Next.js project.
  - Create a custom Tailwind configuration that enforces our black-and-white minimal design:
    - Define custom colors (black, white, gray tones) as required.
    - Disable any default color palettes that conflict with our design.
  - Create a sample page that demonstrates Tailwind classes and the custom theme.
- [x] **Acceptance Criteria:**
  - Tailwind CSS is fully integrated with the custom theme applied.
  - The sample page renders with the correct black-and-white aesthetic.
- [x] **Developer Checklist:**
  - [x] Run application locally.
  - [x] Lint for errors.
  - [x] Run E2E test for sample page.
  - [x] Commit changes.

### 0.3: Integrate Prettier and tailwind-prettier-plugin

- [x] **Task:**
  - Install Prettier and tailwind-prettier-plugin as development dependencies.
  - Configure Prettier with a configuration file (e.g., `.prettierrc`) that includes the tailwind-prettier-plugin to ensure proper ordering and formatting of Tailwind CSS classes.
  - Document the configuration in the project README.
  - Run Prettier on the codebase to verify formatting.
- [x] **Acceptance Criteria:**
  - Prettier and tailwind-prettier-plugin are installed and active.
  - Code formatting adheres to the defined Prettier rules.
- [x] **Developer Checklist:**
  - [x] Run Prettier across the project and confirm no formatting issues.
  - [x] Lint for errors.
  - [x] Commit changes.

### 0.4: Integrate shadcn Component Library

- [x] **Task:**
  - Install the shadcn component library.
  - Set up a few basic components (e.g., buttons, inputs) using shadcn.
  - Ensure these components reflect our minimal, sleek design.
- [x] **Acceptance Criteria:**
  - Basic shadcn components are available and styled per our design guidelines.
  - Components integrate seamlessly with Next.js.
- [x] **Developer Checklist:**
  - [x] Run application locally.
  - [x] Lint for errors.
  - [x] Execute E2E tests verifying component rendering.
  - [x] Commit changes.

### 0.5: Set Up Supabase Integration

- [x] **Task:**
  - [x] Install the Supabase client library and integrate it into the Next.js project.
  - [x] Configure environment variables for:
    - `NEXT_PUBLIC_SUPABASE_URL`
    - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - [x] Create initial API endpoints for user authentication and basic data persistence.
  - [x] Verify connectivity by testing a simple Supabase query.
- [x] **Acceptance Criteria:**
  - [x] Supabase is properly integrated and initial endpoints interact with the Supabase backend.
  - [x] Authentication flows can connect to Supabase to store and retrieve user data.
- [x] **Developer Checklist:**
  - [x] Run application locally.
  - [x] Lint for errors.
  - [x] Run E2E tests for authentication endpoints.
  - [x] Commit changes.

---

## 1. User Authentication & Onboarding (Epic)

### 1.1: Implement Sign-Up Page with Benefits Panel and Minimal Form

- [x] **Build Benefits Panel (Left Side)**
  - [x] Display benefit bullet points with icons:
    - "Seamless integration between design and development"
    - "Live preview that updates your design in real time"
    - "Export code in multiple formats: HTML, CSS, JSX, and Tailwind"
    - "Version control with a timeline-based audit trail"
    - "Easily manage multiple design systems in one place"
- [x] **Build Minimal Sign-Up Form (Right Side)**
  - [x] Fields:
    - **Name:** Text input.
    - **Email:** Text input with email format validation.
    - **Password:** Password input with strength validation.
  - [x] Display inline error messages for invalid input.
  - [x] Include a "Sign Up" button.
- [x] **Navigation**
  - [x] Add a small "Home" link (e.g., in the header or footer) for navigation back to the landing page.
- [x] **Functionality**
  - [x] On form submission, validate inputs.
  - [x] If valid, create the user account via Supabase authentication and redirect to the Confirmation Page.
- [x] **Acceptance Criteria:**
  - The page renders exactly as specified with the benefit text.
  - The form validates inputs, displays errors correctly, and the "Home" link functions.
  - User data is saved using Supabase.
- [x] **Developer Checklist:**
  - [x] Run application locally.
  - [x] Lint for errors.
  - [x] Run E2E tests simulating user sign-up.
  - [x] Commit changes.

---

### 1.2: Implement Post Sign-Up Confirmation Page

- [x] **UI Details:**
  - [x] Display message: "Your account has been successfully created!"
  - [x] Provide a "Continue to Onboarding" button.
  - [x] Provide a secondary "Log In" link.
- [x] **Functionality:**
  - [x] This page is only accessible immediately after a successful sign-up.
- [x] **Acceptance Criteria:**
  - The confirmation message and both buttons/links work and follow the black-and-white minimal aesthetic.
- [x] **Developer Checklist:**
  - [x] Run application locally.
  - [x] Lint for errors.
  - [x] Execute E2E test for navigation from sign-up to confirmation.
  - [x] Commit changes.

---

### 1.3: Implement First-Time Onboarding Wizard

- [x] **Step 1: Design System Basics**
  - [x] Fields:
    - **Design System Name:** Required (e.g., "Project Alpha Design System").
    - **Description:** Optional text area.
  - [x] Display instruction: "Name your design system (e.g., 'Project Alpha Design System')."
- [x] **Step 2: Primary Style Choices**
  - [x] Controls:
    - **Primary Color Picker:** Default sample color provided with live preview.
    - **Primary Font Dropdown:** Options include Inter, Helvetica, Arial.
  - [x] Display instruction: "Select your primary color and font to set the base style."
- [x] **Step 3: Confirmation and Creation**
  - [x] Display a summary of the design system name and chosen styles.
  - [x] Provide a "Create Design System" button.
  - [x] Optionally, include a "Skip Tour" link.
- [x] **Functionality:**
  - [x] Include progress indicators (e.g., "Step 1 of 3").
  - [x] Allow navigation forward and backward between steps.
  - [x] Persist the design system to Supabase and redirect to the Dashboard upon completion.
- [x] **Acceptance Criteria:**
  - The wizard guides the user accurately through all steps.
  - Data is persisted correctly and navigation works as specified.
- [x] **Developer Checklist:**
  - [x] Run application locally.
  - [x] Lint for errors.
  - [x] Run E2E tests simulating onboarding flow.
  - [x] Commit changes.

---

## 2. Design System Dashboard (Epic)

### 2.1: Implement Multi-Design System Management Interface

- [x] **UI Details:**
  - [x] Display existing design systems as cards or list items with:
    - Name
    - (Optional) Thumbnail image
    - Date created
  - [x] Include a "Create New Design System" button.
  - [x] Provide a dropdown or sidebar for switching between design systems.
  - [x] Include options to rename or delete a design system (with confirmation on delete).
- [x] **Functionality:**
  - [x] Selecting a design system loads its data into the dashboard.
  - [x] All actions (create, switch, rename, delete) interact with Supabase for persistence.
- [x] **Acceptance Criteria:**
  - Users can manage design systems as specified with smooth data transitions.
- [x] **Developer Checklist:**
  - [x] Run application locally.
  - [x] Lint for errors.
  - [x] Run E2E tests verifying design system creation and switching.
  - [x] Commit changes.

### 2.2: Implement Dashboard with Five Main Section Cards

- [x] **UI Details:**
  - [x] Display five section cards representing:
    - **Foundations:** (Icon: palette)
    - **Components:** (Icon: puzzle piece)
    - **Patterns & Layouts:** (Icon: grid)
    - **Documentation & Guidelines:** (Icon: document)
    - **Assets:** (Icon: image)
  - [x] Arrange cards in a responsive grid.
  - [x] Display the active design system's name prominently.
- [x] **Navigation:**
  - [x] Clicking a card navigates to its corresponding detailed view.
- [x] **Acceptance Criteria:**
  - All five section cards are visible and navigable as specified.
- [x] **Developer Checklist:**
  - [x] Run application locally.
  - [x] Lint for errors.
  - [x] Run E2E tests for card navigation.
  - [x] Commit changes.

### 2.3: Implement Foundations Detail View with Editing Capability

- [x] **UI Details:**
  - **Subsections:**
    - **Colors:**
      - [x] Display a grid of color swatches showing:
        - Color name (e.g., "Primary Blue")
        - Hex code (e.g., "#0000FF")
      - [x] "Add New Color" button opens a form with:
        - [x] Color Picker (with live preview)
        - [x] Text input for color name
        - [x] Editable hex code field (auto-populated)
      - [x] Allow editing and deletion of existing colors.
    - **Typography:**
      - [x] List text styles (e.g., Heading, Body) with details: font family, size, weight.
      - [x] Enable editing using dropdowns and number inputs.
    - **Spacing:**
      - [x] Display and edit spacing scale values.
- [x] **Functionality:**
  - [x] Save changes immediately or via a "Save" button.
  - [x] Generate CSS variables from these tokens.
- [x] **Acceptance Criteria:**
  - Users can add, edit, and delete foundation tokens with real-time updates in the UI and proper data persistence.
- [x] **Developer Checklist:**
  - [x] Run application locally.
  - [x] Lint for errors.
  - [x] Run E2E tests for adding/editing tokens.
  - [x] Commit changes.

### 2.4: Implement Components Detail View with Editing

- [x] **UI Details:**
  - [x] Display a grid or list of components (e.g., Button, Card) with:
    - Thumbnail image (or placeholder icon)
    - Component name
  - [x] "Add Component" button opens a form with:
    - Component Name
    - (Optional) Base template selection (e.g., Button, Card)
  - [x] On selection of a component, navigate to an **Edit View**.
- [x] **Edit View Details:**
  - [x] Render the component in the Live Preview area.
  - [x] Display a right sidebar with editable properties:
    - For example, for a Button:
      - Text label input
      - Dropdown for color (populated from Foundations tokens)
      - Slider/number input for size
- [x] **Functionality:**
  - [x] Save changes to the component in the design system.
- [x] **Acceptance Criteria:**
  - Components can be added, viewed, and edited with changes reflected in the Live Preview.
- [x] **Developer Checklist:**
  - [x] Run application locally.
  - [x] Lint for errors.
  - [x] Run E2E tests for component addition and editing.
  - [x] Commit changes.

### 2.5: Implement Patterns & Layouts Detail View with Editing

- [ ] **UI Details:**
  - [ ] Display a grid or list of design patterns (e.g., "Sign-Up Form Layout") with:
    - Title
    - Placeholder thumbnail
  - [ ] "Add Pattern" button opens a form to create a new pattern.
  - [ ] On selecting a pattern, navigate to an **Edit View** that includes:
    - A Live Preview of the pattern.
    - (Optional for MVP) A simple text-based interface for configuring the layout.
- [ ] **Functionality:**
  - [ ] Save pattern data to the design system.
- [ ] **Acceptance Criteria:**
  - Patterns can be created and edited with proper navigation between list and detail views.
- [ ] **Developer Checklist:**
  - [ ] Run application locally.
  - [ ] Lint for errors.
  - [ ] Run E2E tests for pattern creation and editing.
  - [ ] Commit changes.

---

### 2.6: Implement Documentation & Guidelines (Docs) Detail View

- [ ] **UI Details:**
  - [ ] Display a list of documentation pages (with at least one default page titled "Overview").
  - [ ] "Add Document" button opens a form with:
    - Title field
    - Rich text/markdown editor (supporting basic formatting: bold, italic, headings)
- [ ] **Functionality:**
  - [ ] Save and update documentation content.
- [ ] **Acceptance Criteria:**
  - Users can add, edit, and delete documentation pages with proper formatting.
- [ ] **Developer Checklist:**
  - [ ] Run application locally.
  - [ ] Lint for errors.
  - [ ] Run E2E tests for documentation editing.
  - [ ] Commit changes.

---

### 2.7: Implement Assets Detail View with Upload & Management

- [ ] **UI Details:**
  - [ ] Display a gallery or list of asset items with:
    - Thumbnail preview (if image)
    - File name and type (e.g., PNG, SVG)
  - [ ] "Upload Asset" button opens a file selection dialog.
  - [ ] Provide an option to delete (with confirmation) and optionally rename assets.
- [ ] **Functionality:**
  - [ ] Uploads and deletions update the asset gallery in real time.
  - [ ] Assets are stored and linked to the current design system.
- [ ] **Acceptance Criteria:**
  - Users can upload, view, and delete assets as specified.
- [ ] **Developer Checklist:**
  - [ ] Run application locally.
  - [ ] Lint for errors.
  - [ ] Run E2E tests for asset upload and deletion.
  - [ ] Commit changes.

---

## 3. Live Preview & Editing (Epic)

### 3.1: Implement Live Preview Canvas with Dotted Grid Background

- [ ] **UI Details:**
  - [ ] Allocate a large portion of the screen for the Live Preview area.
  - [ ] Render a subtle, repeating gray dotted grid as the background.
- [ ] **Functionality:**
  - [ ] When a component or pattern is selected, render it on the canvas.
  - [ ] Ensure real-time updates as changes occur from the editing sidebar.
- [ ] **Acceptance Criteria:**
  - The Live Preview area displays items with the dotted grid background and updates in real time.
- [ ] **Developer Checklist:**
  - [ ] Run application locally.
  - [ ] Lint for errors.
  - [ ] Run E2E tests to confirm real-time updates in the preview.
  - [ ] Commit changes.

---

### 3.2: Implement Right Sidebar with UI Tools for Editing

- [ ] **UI Details:**
  - [ ] The right sidebar appears only when an item (component/pattern) is selected.
  - [ ] Display controls based on the selected item:
    - **For a Button Component:**
      - Text input for the button label.
      - Dropdown for color selection (populated from Foundations tokens).
      - Slider or number input for size.
  - [ ] Title the sidebar appropriately (e.g., "Edit Button Component").
- [ ] **Functionality:**
  - [ ] Implement two-way data binding so that changes update the Live Preview immediately.
  - [ ] Save the updated properties to the design system's state.
- [ ] **Acceptance Criteria:**
  - The sidebar displays correct controls and updates are reflected immediately in the Live Preview.
- [ ] **Developer Checklist:**
  - [ ] Run application locally.
  - [ ] Lint for errors.
  - [ ] Run E2E tests for sidebar interactions.
  - [ ] Commit changes.

---

### 3.3: Implement Viewport Toggle for Responsive Preview

- [ ] **UI Details:**
  - [ ] Add a small, non-invasive toggle control (icon/button) in a corner of the Live Preview area.
  - [ ] Provide preset options:
    - Mobile (e.g., 375px width)
    - Tablet (e.g., 768px width)
    - Desktop (e.g., 1200px width)
    - Custom (input fields for width and height)
- [ ] **Functionality:**
  - [ ] Resize the Live Preview canvas based on the selected viewport option.
  - [ ] Allow custom dimensions to be applied.
- [ ] **Acceptance Criteria:**
  - The viewport toggle accurately resizes the Live Preview and maintains design integrity.
- [ ] **Developer Checklist:**
  - [ ] Run application locally.
  - [ ] Lint for errors.
  - [ ] Run E2E tests for viewport changes.
  - [ ] Commit changes.

---

## 4. Code Generation & Export (Epic)

### 4.1: Implement Toggleable Code Panel with Multi-format Display

- [ ] **UI Details:**
  - [ ] Add a "Show Code" toggle button/icon that opens/closes the Code Panel.
  - [ ] Include tabs or a dropdown for selecting code formats:
    - HTML
    - CSS
    - JSX
    - Tailwind
  - [ ] Display code in a read-only text area with proper syntax highlighting.
  - [ ] Add a "Copy to Clipboard" button for the code.
- [ ] **Functionality:**
  - [ ] Dynamically generate code based on the current design system state and selected element.
  - [ ] Update the code output in real time as properties change.
- [ ] **Acceptance Criteria:**
  - The Code Panel toggles correctly and shows accurate code for each format.
  - The "Copy to Clipboard" function works as expected.
- [ ] **Developer Checklist:**
  - [ ] Run application locally.
  - [ ] Lint for errors.
  - [ ] Run E2E tests for code panel functionality.
  - [ ] Commit changes.

---

### 4.2: Implement Full Design System Export as Structured ZIP File

- [ ] **UI Details:**
  - [ ] Provide an "Export Design System" button accessible from the Dashboard.
- [ ] **Export Structure:**
  - [ ] **Styles Folder:**
    - Generate a CSS file containing design tokens (naming convention: `design-system-name_styles.css`).
  - [ ] **Components Folder:**
    - Include files for each component (HTML, CSS, JSX, etc.) as applicable.
  - [ ] **Docs Folder:**
    - Export documentation pages (in Markdown or HTML format).
  - [ ] **Assets Folder:**
    - Include all uploaded asset files.
  - [ ] **Manifest File:**
    - A JSON file containing metadata (design system name, version, date).
- [ ] **Functionality:**
  - [ ] Generate the ZIP file on the backend.
  - [ ] Trigger a browser download and show a loading indicator during the process.
- [ ] **Acceptance Criteria:**
  - The ZIP file is generated with the correct structure and downloads successfully.
- [ ] **Developer Checklist:**
  - [ ] Run application locally.
  - [ ] Lint for errors.
  - [ ] Run E2E tests for the export functionality.
  - [ ] Commit changes.

---

## 5. Version Control & Auditing (Epic)

### 5.1: Implement Version History Timeline (Snapshot List)

- [ ] **UI Details:**
  - [ ] Create a vertical list or modal view showing snapshots.
  - [ ] Each snapshot entry must include:
    - Timestamp (date and time)
    - Auto-generated description (e.g., "Added Button Component", "Updated Primary Color")
    - (Optional) A small preview thumbnail if feasible.
- [ ] **Functionality:**
  - [ ] Accessible via a "Version History" button in the Dashboard.
  - [ ] Snapshots are created manually via a "Save Snapshot" button.
- [ ] **Acceptance Criteria:**
  - The timeline displays snapshots in chronological order with clear details.
- [ ] **Developer Checklist:**
  - [ ] Run application locally.
  - [ ] Lint for errors.
  - [ ] Run E2E tests for version history display.
  - [ ] Commit changes.

---

### 5.2: Implement Snapshot Creation and Rollback Functionality

- [ ] **UI Details:**
  - [ ] Add a "Save Snapshot" button in the design system editor.
  - [ ] Each snapshot in the timeline includes a "Restore" button.
  - [ ] On clicking "Restore," display a confirmation dialog:
    - "Are you sure you want to rollback to this version? Unsaved changes will be lost."
- [ ] **Functionality:**
  - [ ] Capture the full design system state (tokens, components, patterns, docs, assets) with each snapshot.
  - [ ] On restore, overwrite the current state with the snapshot data and update all UI views accordingly.
- [ ] **Acceptance Criteria:**
  - Users can manually save snapshots and rollback to a snapshot without data inconsistency.
  - The confirmation dialog works correctly.
- [ ] **Developer Checklist:**
  - [ ] Run application locally.
  - [ ] Lint for errors.
  - [ ] Run E2E tests for snapshot creation and rollback.
  - [ ] Commit changes.

---

### 5.3: Implement Basic Audit Trail (Change Log) _(Optional for MVP)_

- [ ] **UI Details:**
  - [ ] Display an audit log view (integrated within the Version History view).
  - [ ] Log entries should include descriptions such as:
    - "Edited color 'Primary Blue' from #0000FF to #0055FF"
    - "Added new component 'Card'"
- [ ] **Functionality:**
  - [ ] Automatically record key actions (create, update, delete) across the design system.
- [ ] **Acceptance Criteria:**
  - The audit log is viewable and accurately reflects changes.
- [ ] **Developer Checklist:**
  - [ ] Run application locally.
  - [ ] Lint for errors.
  - [ ] Run E2E tests for audit log functionality.
  - [ ] Commit changes.

---

## 6. Dynamic Style Guide (Epic)

### 6.1: Implement Auto-Generated Live Style Guide Page

- [ ] **UI Details:**
  - [ ] Header displays the current design system name.
  - [ ] **Sections:**
    - **Foundations:**
      - List all colors with swatches and hex codes.
      - Display typography examples with font details.
      - Visualize spacing scales.
    - **Components:**
      - Show a gallery of components with their names and default renderings.
  - [ ] Include internal navigation (sidebar or table of contents) to jump between sections.
  - [ ] Use a clean, minimal design that matches Toka UI's aesthetic.
- [ ] **Functionality:**
  - [ ] The style guide should update in real time (or on page refresh) to reflect changes in the design system.
  - [ ] Make the style guide accessible via a dedicated link from the Dashboard.
- [ ] **Acceptance Criteria:**
  - The live style guide accurately reflects the current design system state.
  - Navigation within the style guide is user-friendly.
- [ ] **Developer Checklist:**
  - [ ] Run application locally.
  - [ ] Lint for errors.
  - [ ] Run E2E tests for style guide accuracy and navigation.
  - [ ] Commit changes.

---

# Reviewer & Colleague Feedback (Self-Review Notes)

1. **Detail Completeness:**

   - All benefit texts for the sign-up page are explicitly provided.
   - Form fields, validation rules, and error handling are clearly detailed.
   - Export file naming conventions and folder structure are explicitly outlined.
   - Snapshot creation is defined as manual for MVP simplicity.
   - Integration with Next.js 15, TypeScript, Tailwind, shadcn, Supabase, Prettier, and tailwind-prettier-plugin is clearly specified.

2. **Consistency & Data Integrity:**

   - All interactive elements must use ARIA roles and proper labeling.
   - Ensure consistent data binding across Live Preview, Sidebar, and Code Panel.
   - Rollback functionality should update Live Preview and all dependent views immediately.
   - Supabase is used for all authentication and data persistence actions.

3. **User Experience Enhancements:**

   - Error messages and interactive feedback should follow consistent styling.
   - Breadcrumbs or back buttons must be included in all detail views for smooth navigation.
   - The viewport toggle must maintain responsiveness and be unobtrusive.

4. **Developer Environment:**

   - Document environment variables and configuration settings in the project README.
   - Ensure that all initial setup tasks (Next.js, Tailwind, Prettier, shadcn, Supabase) are completed before feature development begins.
   - Adhere strictly to the Developer Rules & Quality Assurance Guidelines for each task.

5. **Future Considerations:**
   - Real-time co-editing, advanced commenting/annotations, role-based access, notifications, and external integrations are deferred for future sprints.

---

This document provides the full sprint backlog, including project setup, detailed feature stories with checkboxes, and developer rules for quality assurance. The offshore development team should follow these instructions precisely to implement the Toka UI MVP using Next.js 15, TypeScript, Tailwind CSS, shadcn, Supabase, Prettier, and tailwind-prettier-plugin. All tests must pass at each stage, and commits should be made regularly to ensure continuous progress.
