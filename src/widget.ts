export default class Widget {
    constructor(element: HTMLElement, options: IWidgetOptions<Widget>) {}
}

export interface IWidgetOptions<T> {
    visible?: boolean;
    onInitialized?: IWidgetOptionCallback<IWidgetEventArguments<T>>;
}

export interface IWidgetEventArguments<T> {
    component: T;
    element: HTMLElement;
}

export interface IWidgetOptionCallback<T> {
    (args: T): void;
}