# Angular Practical Report (Word Document Template)

*Instructions: Copy the sections below into a Word Document. Take screenshots of the running application for the "Output Screenshot" sections.*

---

## Practical 1 & 2: Environment Setup
**Goal:** Setup Node.js and Angular CLI.

**Commands:**
```bash
node -v
npm -v
npm install -g @angular/cli
ng version
```

---

## Practical 3: Angular Components
**Aim:** To demonstrate the creation and use of Angular Components.

**Code (hello.ts):**
```typescript
export class HelloComponent {
  message: string = 'Welcome to Angular Practical!';
}
```

**Output Screenshot:**
[Insert Screenshot of "Prac 3: Components" tab here]

---

## Practical 4: Data Binding
**Aim:** To demonstrate Data Binding (Interpolation, Property, Event, Class).

**Code (data-binding.html):**
```html
<p>Hello, my name is {{ name }}</p>
<button [disabled]="isDisable">Submit</button>
<button [class.active]="isActive" (click)="toggleActive()">Click Me</button>
```

**Output Screenshot:**
[Insert Screenshot of "Prac 4: Data Binding" tab here]

---

## Practical 5: Directives
**Aim:** To demonstrate Angular Directives (*ngIf, *ngFor, [ngClass]).

**Code (directives.html):**
```html
<p *ngIf="showText">Conditional Text</p>
<li *ngFor="let sub of subjects">{{ sub }}</li>
<p [ngClass]="{ 'pass': marks >= 40 }">Result</p>
```

**Output Screenshot:**
[Insert Screenshot of "Prac 5: Directives" tab here]

---

## Practical 6: Pipes
**Aim:** To demonstrate built-in and async pipes.

**Code (pipes.html):**
```html
<p>{{ name | uppercase }}</p>
<p>{{ price | currency:'INR' }}</p>
<p>{{ today | date:'fullDate' }}</p>
<p>{{ dataPromise | async }}</p>
```

**Output Screenshot:**
[Insert Screenshot of "Prac 6: Pipes" tab here]
