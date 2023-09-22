export const DATE_FORMAT = 'dd/MM/yyyy';
export const DATE_TIME_FORMAT = 'dd/MM/yyyy HH:mm:ss';
export const DATE_PICKER_FORMAT = 'dd/mm/yy';
export const TABLE_CONFIG = {
    ROWS_PER_PAGE: [10, 20, 30, 50, 100],
    ROWS: 30,
};
export const CODE_PATTERN = '^[a-zA-Z0-9-_.]*$';
export const POSTFIX_PATTERN = '^[a-zA-Z0-9]*$';
export const PHONE_PATTERN = '^(\\(\\+[0-9]{2}\\)|\\+|\\d)[0-9]{8,15}$';
export const EMAIL_PATTERN = '^([a-z0-9])(?!.*?\\.\\.)[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const PHONE_MAX_LENGTH = 16;
export const PHONE_MIN_LENGTH = 9;

export enum ElementType {
    INTEGER = 'INTEGER',
    NUMERIC = 'NUMERIC',
    STRING = 'STRING',
    VALUE_LIST = 'VALUE_LIST',
    CHECKBOX = 'CHECKBOX',
    BOM_VALIDATION = 'BOM_VALIDATION',
    LIST = 'LIST',
    CTQ = 'CTQ',
    RESULT = 'RESULT',
    NO = 'NO',
    NAME = 'NAME',
}
export const STRING_EMPTY = '';

export const MODE = 'mode'; // Mode routing
export const ID = 'id'; // Current id for item
export const WORK_STATION_ID = 'WORK_STATION_ID';
export const LINE_ID = 'LINE_ID';

export enum DayOfWeek {
    SUNDAY = 'SUNDAY',
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    CHECKBOX = 'CHECKBOX',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY',
}
