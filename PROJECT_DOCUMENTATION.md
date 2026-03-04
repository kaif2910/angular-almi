# StockMaster Pro - Inventory Management System
## Project Documentation (Practicals 3-6)

### 1. Project Goal
To build a professional, single-page Inventory Management System that demonstrates core Angular concepts: Components, Data Binding, Directives, and Pipes.

### 2. Implementation Logic
- **Component (Prac 3)**: Created a centralized `AppComponent` to manage state and logic.
- **Data Binding (Prac 4)**:
    - **Interpolation**: Used `{{ appName }}` and `{{ lastUpdated }}` for dynamic headers.
    - **Property Binding**: Used `[disabled]` to prevent issuing items when stock is zero.
    - **Event Binding**: Implemented `(click)` handlers for `issueItem()` and `restockItem()`.
- **Directives (Prac 5)**:
    - `*ngFor`: Iterates through the inventory array to build the table rows.
    - `*ngIf`: Controls the visibility of the inventory table.
    - `[ngClass]`: Dynamically styles stock status (Green for OK, Yellow for Low, Red for Out).
- **Pipes (Prac 6)**:
    - `currency:'INR'`: Formats prices as ₹.
    - `uppercase`: Formats item names.
    - `date`: Formats the last activity timestamp.

### 3. How to Build & Run
- **Install CLI**: `npm install -g @angular/cli`
- **Install Dependencies**: `npm install`
- **Run App**: `ng serve`
- **Build App**: `ng build`

---

### [ SPACE FOR CODE SCREENSHOTS ]
*Paste screenshots of your `app.ts`, `app.html`, and `app.css` here.*

---

### [ SPACE FOR OUTPUT SCREENSHOTS ]
*Paste screenshots of the running application, including the table view and the hidden state.*
