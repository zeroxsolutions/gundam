import { ReactNode } from "react";
import PropTypes from "prop-types";

export type typeOpen = boolean | false | undefined;
export type typeIcon = ReactNode | undefined;
export type typeDisabled = boolean | false | undefined;

export const propTypesOpen: PropTypes.Requireable<boolean> = PropTypes.bool;
export const propTypesIcon: PropTypes.Requireable<PropTypes.ReactNodeLike> =
  PropTypes.node;
export const propTypesDisabled: PropTypes.Requireable<boolean> = PropTypes.bool;
