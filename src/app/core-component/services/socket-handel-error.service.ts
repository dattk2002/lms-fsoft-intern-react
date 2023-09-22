import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Injectable({
    providedIn: 'root',
})
export class SocketHandlerService {
    constructor(private confirmationService: ConfirmationService) {}

    public handleError = (error: any) => {
        switch (error) {
            default:
                this.showALertWhenSocketError();
                break;
        }
    };

    showALertWhenSocketError() {
        this.confirmationService.confirm({
            message:'',
            rejectVisible: true,
            acceptLabel: '',
            header: '',
            icon: 'pi pi-info-circle',
            key: 'global',
            accept: () => {
                location.reload();
            },
            reject: () => {},
        });
    }
}
