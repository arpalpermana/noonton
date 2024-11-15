import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function TextInput(
    {
        type = "text",
        defaultValue,
        className = "",
        variant = "primary",
        isFocused = false,
        isError,
        ...props
    },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={`rounded-2xl py-[13px] px-7 w-full input-${variant} ${className}`}
            ref={localRef}
        />
    );
});
