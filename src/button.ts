import Widget, { IWidgetOptions, IWidgetEventArguments, IWidgetOptionCallback } from "./widget";

export default class Button extends Widget {
    constructor(element: HTMLElement, options: IButtonOptions<Button>) {
        super(element, options);
    }
}

export interface IButtonOptions<T> extends IWidgetOptions<T> {
    disabled?: boolean;
    onClick?: IWidgetOptionCallback<IButtonClickEventArguments<T>>;
}

export interface IButtonClickEventArguments<T> extends IWidgetEventArguments<T> {
    event: Event;
}