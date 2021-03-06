/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MavInput {
        /**
          * The id of input
         */
        "inputId": string;
        /**
          * The name for input
         */
        "isDisabled": boolean;
        /**
          * The label for input
         */
        "label": string;
        /**
          * The name for input
         */
        "name": string;
        /**
          * The name for input
         */
        "placeholder": string;
        /**
          * The name for input
         */
        "type": string;
        /**
          * The name for input
         */
        "value": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLMavInputElement extends Components.MavInput, HTMLStencilElement {
    }
    var HTMLMavInputElement: {
        prototype: HTMLMavInputElement;
        new (): HTMLMavInputElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "mav-input": HTMLMavInputElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MavInput {
        /**
          * The id of input
         */
        "inputId"?: string;
        /**
          * The name for input
         */
        "isDisabled"?: boolean;
        /**
          * The label for input
         */
        "label"?: string;
        /**
          * The name for input
         */
        "name"?: string;
        "onInputChange"?: (event: CustomEvent<any>) => void;
        /**
          * The name for input
         */
        "placeholder"?: string;
        /**
          * The name for input
         */
        "type"?: string;
        /**
          * The name for input
         */
        "value"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "mav-input": MavInput;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mav-input": LocalJSX.MavInput & JSXBase.HTMLAttributes<HTMLMavInputElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
