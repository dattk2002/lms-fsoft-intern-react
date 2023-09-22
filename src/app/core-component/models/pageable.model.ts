/**
 * Pagination request params
 */
export interface Pageable {
    page?: number;
    size?: number;
    sortOrder?: number;
    sortField?: string;
    filters?: Object;
    conditionalFilters?: Filter[];
}

export interface Filter {
    field: string;
    matchMode: FilterMatchMode;
    value: any;
}

export enum FilterMatchMode {
    StartsWith = 1,
    EndsWith,
    Equals,
    NotEquals,
    Contains,
    NotContains,
}

/**
 * Pagination response
 */
export interface PageableResponse<T> {
    content?: T;
    empty?: boolean;
    // set to true if it's the first page otherwise false
    first?: boolean;
    // set to true if its the last page otherwise false
    last?: boolean;
    // the number of records per page, this was passed from the client via param size
    size?: number;
    // the sorting parameter for the page
    sort?: Sort;
    // The total number of rows/records.
    // In our example, we passed this to the ui-grid options $scope.gridOptions.totalItems to determine how many pages will be available
    totalElements?: number;
    // The total number of pages which was derived from (totalElements / size)
    totalPages?: number;
    // the number of rows/records return for the page
    numberOfElements?: number;
    // the page number sent by the client,
    // in our response the number is 0 because in our backend we are using an array of Students which is a zero-based index,
    // so in our backend, we decrement the page number by 1
    number?: number;
}

export interface Sort {
    empty?: boolean;
    sorted?: boolean;
    unsorted?: boolean;
}
