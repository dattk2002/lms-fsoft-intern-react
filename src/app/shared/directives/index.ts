import { TreeTableUnsortDirective } from './tree-table-unsort.directive';
import { AuthorityDirective } from './authority.directive';
import { TableUnsortDirective } from './table-unsort.directive';
import { KeyValueTagSelectDirective } from './toggle-column.directive';
import { UppercaseInputDirective } from './format-text.directive';

export const sharedDirectives = [
    KeyValueTagSelectDirective,
    AuthorityDirective,
    TableUnsortDirective,
    TreeTableUnsortDirective,
    UppercaseInputDirective,
];

export * from './toggle-column.directive';
export * from './authority.directive';
export * from './table-unsort.directive';
export * from './tree-table-unsort.directive';
export * from './format-text.directive';
