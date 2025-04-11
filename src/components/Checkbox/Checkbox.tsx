import * as React from "react";
import { styled } from "@mui/material/styles";
import { Checkbox as MUICheckbox, CheckboxProps } from "@mui/material";
import theme from "../../theme/theme";

export interface CustomCheckboxProps extends Omit<CheckboxProps, 'size'> {
    size?: 'default' | 'large'
}
const getSizeStyles = (size: string) => ({
    width: size,
    height: size,
});

const BpIcon = styled('span')<{ customSize: string }>(({ customSize }) => ({
    cursor: 'pointer',
    borderRadius: '0.125rem',
    ...getSizeStyles(customSize === "default" ? "0.75rem" : "1.25rem"),
    boxShadow: 'none',
    backgroundColor: theme.colors.defaults.surface.backdrop,
    outline: `1px solid ${theme.colors.defaults.border.default}`,
    'input::hover ~ &': {
        backgroundColor: theme.colors.defaults.surface.hover,
        outline: `1px solid ${theme.colors.defaults.border.hover}`,
    },
    'input:disabled ~ &': {
        cursor: 'not-allowed',
        outline:  `1px solid ${theme.colors.defaults.border.default}`,
    },

}));

const BpCheckedIcon = styled(BpIcon)({
    '&::before': {
        display: 'block',
        content: '""',
        width: '100%',
        height: '100%',
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        backgroundSize: 'contain',
        'input:disabled ~ &': {
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath " +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23545859'/%3E%3C/svg%3E\")",
        },
    },
});

const BpIndeterminateIcon = styled(BpIcon)({
    '&::before': {
        display: 'block',
        content: '""',
        width: '100%',
        height: '100%',
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect x='3' y='7' width='10' height='2' fill='%23fff'/%3E%3C/svg%3E\")",
        backgroundSize: 'contain',
    },
});

const Checkbox: React.FC<CustomCheckboxProps> = ({ size = 'default', ...props }) => {
    return (
        <MUICheckbox
            disableRipple
            color="default"
            indeterminateIcon={<BpIndeterminateIcon customSize={size} />}
            checkedIcon={<BpCheckedIcon customSize={size} />}
            icon={<BpIcon customSize={size} />}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
        />
    );
}

export default Checkbox;
