import { Filter, FilterMatchMode, Pageable } from '@core/models';

function convertToRsqlOperator(matchMode: FilterMatchMode): string {
    if (!matchMode) {
        return '==';
    }
    switch (matchMode) {
        case FilterMatchMode.Contains:
            return '=containsIgCase=';
        case FilterMatchMode.NotContains:
            return '=notContainsIgCase=';
        case FilterMatchMode.EndsWith:
            return '=endsWith=';
        case FilterMatchMode.StartsWith:
            return '=startsWith=';
        case FilterMatchMode.Equals:
            return '==';
        case FilterMatchMode.NotEquals:
            return '=!=';
        default:
            return '==';
    }
}

export function convertToRsqlSyntax(pagingRequest: Pageable): string {
    const params: { key: string; value: any }[] = [];

    //  page?: number;
    if (pagingRequest.page != null) {
        params.push({ key: 'page', value: pagingRequest.page });
    }
    // size?: number;
    if (pagingRequest.size != null) {
        params.push({ key: 'size', value: pagingRequest.size });
    }

    // sortOrder?: number;
    // sortField?: string;
    if (pagingRequest.sortField) {
        if (pagingRequest.sortOrder === 1) {
            params.push({ key: 'orderAsc', value: pagingRequest.sortField });
        } else {
            params.push({ key: 'orderDesc', value: pagingRequest.sortField });
        }
    }

    let filterString = 'isDeleted==false';
    const andOperator = ';';
    if (pagingRequest.filters) {
        // eslint-disable-next-line no-restricted-syntax
        for (const key in pagingRequest.filters) {
            if (key && pagingRequest.filters[key].value) {
                filterString += `${andOperator}${key}=='${pagingRequest.filters[key].value}'`;
            }
        }
    }

    if (pagingRequest.conditionalFilters) {
        pagingRequest.conditionalFilters.forEach((filter: Filter) => {
            const operator = convertToRsqlOperator(filter.matchMode);
            let value;
            if (typeof filter.value === 'string') {
                value = `'${filter.value}'`;
            } else if (typeof filter.value === 'number') {
                value = filter.value.toString();
            } else if (filter.value instanceof Date) {
                const date = filter.value as Date;
                value = `'${date.toISOString()}'`;
            } else {
                value = filter.value.toString();
            }
            filterString += `${andOperator}${filter.field}${operator}${value}`;
        });
    }

    params.push({ key: 'search', value: filterString });
    let query = '';
    params.forEach((param) => {
        if (query.length > 0) {
            query += '&';
        }
        query += `${param.key}=${encodeURIComponent(param.value)}`;
    });
    return query;
}
