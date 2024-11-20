export default function Button({
    type = "submit",
    className = "",
    variant = "primary",
    processing = false,
    children,
}) {
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full btn-${variant} ${
                processing && "opacity-30"
            }  ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
