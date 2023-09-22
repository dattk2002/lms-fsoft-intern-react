export const COMMON_FORM_CONTROL = {
    IDField: {
        maxLength: 64,
        validators: {
            required: null,
            pattern: '^[a-zA-Z0-9-_.]*$',
        },
        errorMessages: {
            required: 'validation.required',
            pattern: 'validation.pattern',
        },
    },
    TextField: {
        maxLength: 128,
    },
    TextareaField: {
        maxLength: 256,
    },
};
