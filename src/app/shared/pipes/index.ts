import { HighlighterPipe } from './highlighter.pipe';
import { OrderByPipe } from './order-by.pipe';
import { SecurityTrustUrlPipe } from './security-trust-url.pipe';

export const sharedPipes = [
    OrderByPipe,
    HighlighterPipe,
    SecurityTrustUrlPipe,
];

export * from './order-by.pipe';
export * from './highlighter.pipe';
export * from './security-trust-url.pipe';
