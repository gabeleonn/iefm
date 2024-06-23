import { Outlet } from "react-router-dom";
import { Navigation } from "@/components/navigation";
import { Fragment } from "react/jsx-runtime";

export function Base({ withNav = true }: { withNav?: boolean }) {
    return (
        <Fragment>
            {withNav ? <Navigation /> : null}
            <Outlet />
        </Fragment>
    )
}