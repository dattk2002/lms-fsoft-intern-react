import { AccountService } from './account.service';
import { AuthService } from './auth.service';

export const services = [AuthService, AccountService];

export * from './auth.service';
export * from './account.service';
