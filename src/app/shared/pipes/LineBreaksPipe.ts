import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replaceLineBreak',
    pure: true,
})
export class LineBreaksPipe implements PipeTransform {
    // transform(value: string): string {
    //     return value.replace(/\n/g, '<br/>');
    // }
    transform(value: string): string {
        return value.replace(/\n/g, '<br/>');
    }
}
