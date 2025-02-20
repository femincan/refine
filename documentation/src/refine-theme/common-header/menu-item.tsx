import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import { NavbarPopoverItemType } from "./constants";

type MenuItemProps = {
    item: NavbarPopoverItemType["items"][0];
    isPermanentLight?: boolean;
};

export const MenuItem: React.FC<MenuItemProps> = ({
    item,
    isPermanentLight,
}) => {
    const Icon = item.icon;

    return (
        <Link to={item.link} className="no-underline">
            <div
                className={clsx(
                    "flex items-center",
                    "p-4",
                    "transition duration-150 ease-in-out",
                    "rounded-lg",
                    "hover:bg-gray-50 dark:hover:bg-gray-700",
                    isPermanentLight && "hover:!bg-gray-50",
                )}
            >
                <div className="shrink-0">
                    <Icon />
                </div>
                <div className="ml-2">
                    <div
                        className={clsx(
                            "text-gray-900 dark:text-white",
                            "font-semibold",
                            isPermanentLight && "!text-gray-900",
                        )}
                    >
                        {item.label}
                    </div>
                    <div
                        className={clsx(
                            "text-gray-500 dark:text-gray-400",
                            "text-xs",
                            isPermanentLight && "!text-gray-500",
                        )}
                    >
                        {item.description}
                    </div>
                </div>
            </div>
        </Link>
    );
};
