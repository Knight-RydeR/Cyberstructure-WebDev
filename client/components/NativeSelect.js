// NativeSelect.js

import React, { useCallback, forwardRef } from 'react';
import PropTypes from 'prop-types';

const NativeSelect = forwardRef(({
    items,
    onChange,
    placeholderLabel,
    ...rest,
}, ref) => {
    const renderOptions = useCallback(() => {
        const selectableOptions = items.map((item, index) => (
            <option
                value={ item.value }
                key={ `native-option-${index}` }>
                { item.label }
            </option>
        ));

        if (placeholderLabel) {
            const placeholderOption = (
                <option
                    disabled
                    value={ placeholderLabel }
                    key="native-option-disabled">
                    { placeholderLabel }
                </option>
            );

            return [placeholderOption, ...selectableOptions];
        }

        return selectableOptions;
    }, [items, placeholderLabel]);

    const handleChange = useCallback((event) => {
        const selectedItem = items.find((elem) => elem.value === event.target.value);

        onChange && onChange(selectedItem);
    }, [items, onChange]);

    return (
        <select
            { ...rest }
            ref={ ref }
            onBlur={ onBlur }
            className={ className }
            onChange={ handleChange }
            value={ selected?.value ?? placeholderLabel }>
            { renderOptions() }
        </select>
    );
});

NativeSelect.propTypes = {
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    selected: PropTypes.object,
    className: PropTypes.string,
    items: PropTypes.array.isRequired,
    placeholderLabel: PropTypes.string,
};

export default NativeSelect;