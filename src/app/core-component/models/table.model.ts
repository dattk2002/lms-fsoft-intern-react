import { SafeAny } from "./any";

export interface Column {
    field?: string;
    header?: string;
    sort?: boolean;
    fieldType?: string;
    disabled?: boolean;
    width?: string;
    [key: string]: SafeAny;
}

export interface PagingState {
    pageSize?: number;
    pageOffset?: number;
    sortField?: string;
    sortOrder?: number;
}
