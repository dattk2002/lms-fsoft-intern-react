import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { AccountService } from 'src/app/core-component/auth/services/account.service';

@Directive({
    selector: '[appUserRoleAuthorize]',
})
export class AuthorityDirective {
    private authorities: string[];

    constructor(
        private accountService: AccountService,
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>
    ) {}

    @Input()
    set appUserRoleAuthorize(value: string | string[]) {
        this.authorities = typeof value === 'string' ? [<string>value] : <string[]>value;
        this.updateView();
    }

    /**
     * update view by user role
     */
    updateView() {
        /**
         * get account
         */
        this.viewContainerRef.clear();
        if (this.accountService.hasAnyAuthority(this.authorities)) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }
}
