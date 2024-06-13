import { BreadcrumbProps, CollapseProps, FormProps, MenuProps, UploadProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number];
export type BreadcrumbItem = Required<BreadcrumbProps>["items"][number];
export type CollapseItem = Required<CollapseProps>["items"][number];
export type FormOnFinishHandler<T> = FormProps<T>["onFinish"];
export type UploadFileOnChangeHandler = UploadProps["onChange"];