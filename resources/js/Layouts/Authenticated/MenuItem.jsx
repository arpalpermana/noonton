import { Link } from "@inertiajs/react";

export default function MenuItem({
    link,
    icon,
    titleMenu,
    isActive,
    method = "GET",
}) {
    return (
        <Link
            href={link ? route(link) : null}
            className={`side-link ${isActive && "active"}`}
            method={method}
            as="button"
        >
            {icon}
            {titleMenu}
        </Link>
    );
}
