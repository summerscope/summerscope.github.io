import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { typography } from "styles/traits";
import { theme } from "styled-system";
import { colors } from "styles/values";

const buttonOrLink = ({
  kind,
  fill,
  wide,
  openExternalLink: url,
  openInternalLink: to,
  type = "button",
  children,
  ...props
}) => {
  if (url) {
    return (
      <a href={url} target="_blank" {...props}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <button type={type} {...props}>
        {children}
      </button>
    );
  }
};

const Button = styled(buttonOrLink)`
  display: inline-block;
  cursor: pointer;
  font: inherit;
  ${typography.light.m.lh20.center};
  text-decoration: none;
  padding: 0.667rem 1.333rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  transition: all 200ms ease;

  ${props =>
    props.kind === "buy" &&
    css`
      color: white;
      background-color: ${theme("buyColour")};
      &:not([disabled]) {
        &:hover,
        &:focus,
        &:active {
          background-color: ${colors.green3};
        }
      }
    `};
  ${props =>
    props.kind === "sell" &&
    css`
      color: white;
      background-color: ${theme("sellColour")};
      &:not([disabled]) {
        &:hover,
        &:focus,
        &:active {
          background-color: ${colors.red4};
        }
      }
    `};
  ${props =>
    props.kind === "primary" &&
    css`
      color: white;
      background-color: ${theme("activeColour")};
      &:not([disabled]) {
        &:hover,
        &:focus,
        &:active {
          background-color: ${colors.purple2};
        }
      }
    `};
  ${props =>
    props.kind === "secondary" &&
    css`
      background-color: transparent;
      border: 1px solid ${colors.greyDark1};
      color: ${colors.greyDark1};
      text-shadow: none;
      &:not([disabled]) {
        &:hover,
        &:focus,
        &:active {
          background-color: ${colors.greyDark1};
          color: white;
        }
      }
    `};
  ${props =>
    props.fill &&
    css`
      width: 100%;
    `};

  ${props =>
    props.wide &&
    css`
      padding: 0.667rem 4rem;
    `};

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      user-select: none;
      cursor: default;
    `};
`;

Button.propTypes = {
  kind: PropTypes.oneOf(["buy", "sell", "primary", "secondary"]),
  /** Fills container width */
  fill: PropTypes.bool,
  /** A wider style button */
  wide: PropTypes.bool,
  /** External anchor styled as button */
  openExternalLink: PropTypes.string,
  /** Internal Link (using react router) styled as button */
  openInternalLink: PropTypes.string
};

Button.defaultProps = {
  kind: "primary",
  wide: false,
  fill: false
};

/**
 * @component
 */
export default Button;
