import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
    name: 'securityTrustUrl',
})
export class SecurityTrustUrlPipe implements PipeTransform {
    specialType: string[] = ['mov', 'wav'];

    constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) {}

    transform(value: string): Observable<SafeUrl | string> {
        if (typeof value !== 'string') {
            return of(value);
        }
        const splitStringUrlList = value?.split('.');
        const typeOfFile = splitStringUrlList[splitStringUrlList.length - 1];
        if (this.specialType.includes(typeOfFile.toLowerCase())) {
            return this.httpClient.get(value, { responseType: 'blob' as 'json' }).pipe(
                map((res: any) => {
                    const file = new Blob([res], { type: res.type });
                    const blob = window.URL.createObjectURL(file);
                    return this.sanitizer.bypassSecurityTrustUrl(blob);
                })
            );
        }
        return of(value);
    }
}
