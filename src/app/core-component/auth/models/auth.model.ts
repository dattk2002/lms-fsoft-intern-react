export interface Account {
    id: number;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
    ssoId: string;
    fullName: string;
    email: string;
    status: string;
    roleDto: any[];
    roles: string[];
    permissions?: PermissionsEntity[] | null;
    langKey: string;
    homepage?: string;
}
export interface PermissionsEntity {
    id: number;
    code: string;
    name: string;
    description: string;
}
