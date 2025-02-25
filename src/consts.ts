import styled from "css-styled";
import { SelectoOptions } from "./types";

export const injector = styled(`
:host {
    position: fixed;
    display: none;
    border: 1px solid #4af;
    background: rgba(68, 170, 255, 0.5);
    z-index: 100;
}
:host {
    position: absolute;
}
`);

/**
 * @memberof Selecto
 */
export const CLASS_NAME = `selecto-selection ${injector.className}`;

export const PROPERTIES = [
    "boundContainer",
    "selectableTargets",
    "selectByClick",
    "selectFromInside",
    "continueSelect",
    "toggleContinueSelect",
    "keyContainer",
    "hitRate",
    "scrollOptions",
    "checkInput",
    "preventDefault",
    "ratio",
    "getElementRect",
    "preventDragFromInside",
    "rootContainer",
    "dragCondition",
    "clickBySelectEnd",
] as const;
/**
 * @memberof Selecto
 */
export const OPTIONS = [
    // ignore target, container,
    "dragContainer",
    "cspNonce",
    ...PROPERTIES,
] as const;

export const OPTION_TYPES: { [key in keyof SelectoOptions]: any } = {
    boundContainer: null,
    portalContainer: null,
    container: null,
    dragContainer: null,
    selectableTargets: Array,
    selectByClick: Boolean,
    selectFromInside: Boolean,
    continueSelect: Boolean,
    toggleContinueSelect: Array,
    keyContainer: null,
    hitRate: Number,
    scrollOptions: Object,
    checkInput: Boolean,
    preventDefault: Boolean,
    cspNonce: String,
    ratio: Number,
    getElementRect: Function,
    preventDragFromInside: Boolean,
    rootContainer: Object,
    dragCondition: Function,
    clickBySelectEnd: Boolean,
};

/**
 * @memberof Selecto
 */
export const EVENTS = [
    "dragStart",
    "drag",
    "dragEnd",
    "selectStart",
    "select",
    "selectEnd",
    "keydown",
    "keyup",
    "scroll",
] as const;

/**
 * @memberof Selecto
 */
export const METHODS = [
    "clickTarget",
    "getSelectableElements",
    "setSelectedTargets",
    "getElementPoints",
    "getSelectedTargets",
    "findSelectableTargets",
    "triggerDragStart",
    "checkScroll",
] as const;
