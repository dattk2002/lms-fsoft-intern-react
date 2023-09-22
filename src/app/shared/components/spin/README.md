# Spin Component

A spinner for displaying loading state of a page or a section.

## When To Use

When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude.


## API

#### Selector: `<app-spin></app-spin>`

| Property | Description | Type | Default Value | Global Config |
| -------- | ----------- | ---- | ------------- | ------------- |
| `[delay]` | specifies a delay in milliseconds for loading state (prevent flush), unit: milliseconds | `number` | - |
| `[indicator]` | the spinning indicator | `TemplateRef<void>` | - | ✅ |
| `[size]` | size of Spin | `'large' \| 'small' \| 'default'` | `'default'` |
| `[spinning]` | whether Spin is spinning | `boolean` | `true` |
| `[simple]` | whether Spin has no children | `boolean` | `false` |

## Examples

### Basic usage
A simple loading status.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'demo-spin-basic',
  template: `
    <app-spin [simple]="true"></app-spin>
  `
})
export class DemoSpinBasicComponent {}
```

### Inside a container
Spin in a container.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'demo-spin-inside',
  template: `
    <div class="example">
      <app-spin [simple]="true"></app-spin>
    </div>
  `,
  styles: [
    `
      .example {
        text-align: center;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        margin-bottom: 20px;
        padding: 30px 50px;
        margin: 20px 0;
      }
    `
  ]
})
export class DemoSpinInsideComponent {}
```

### Custom spinning indicator
Use custom loading indicator.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'demo-spin-custom-indicator',
  template: `
    <ng-template #indicatorTemplate><i class="fas fa-spinner"></i></ng-template>
    <app-spin [simple]="true" [indicator]="indicatorTemplate"> </app-spin>
  `,
  styles: [
    `
      i {
        font-size: 24px;
      }
    `
  ]
})
export class DemoSpinCustomIndicatorComponent {}

```

### Delay & Embedded mode
Specifies a delay for loading state. If spinning ends during delay, loading status won't appear.

Embedding content into app-spin will alter it into loading state.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'demo-spin-delay-and-debounce',
  template: `
    <app-spin [spinning]="isSpinning" [delay]="500">
      <div class="example">Something here</div>
    </app-spin>
  `,
   styles: [
    `
      .example {
        text-align: center;
        height:100px;
        width:100%;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        padding: 40px 20px;
      }
    `
  ]
})
export class DemoSpinDelayAndDebounceComponent {
  isSpinning = true;
}

```
