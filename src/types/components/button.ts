import { ReactNode } from "react"
import PropTypes from "prop-types"

export type typeVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "ghost"
  | "link"
  | "outline"
  | "danger"
  | "text"
export type typeSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"
export type typeIcon = ReactNode | undefined
export type typeDisabled = boolean | false | undefined
export type typeIsChild = boolean | false | undefined

export const propTypesVariant: PropTypes.Requireable<string> = PropTypes.string
export const propTypesSize: PropTypes.Requireable<string> = PropTypes.string
export const propTypesIcon: PropTypes.Requireable<PropTypes.ReactNodeLike> =
  PropTypes.node
export const propTypesDisabled: PropTypes.Requireable<boolean> = PropTypes.bool
export const propTypesIsChild: PropTypes.Requireable<boolean> = PropTypes.bool
