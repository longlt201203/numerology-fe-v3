import { BreadcrumbProps, CollapseProps, MenuProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number];
export type BreadcrumbItem = Required<BreadcrumbProps>["items"][number];
export type CollapseItem = Required<CollapseProps>["items"][number];