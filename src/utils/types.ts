import { StaticImageData } from "next/image";
import { ChangeEvent, ElementType } from "react";
import { IconType } from "antd/es/notification/interface";

export type ImageType = {
  src: StaticImageData;
  alt: string;
};

export type NavType = {
  name: string;
  href: string;
  src: StaticImageData;
};

export type CardProps = {
  topic: string;
  body: string;
  color: string;
  Icon: ElementType;
};

export type DataProps = {
  navigation: NavType[];
  connectSocial: NavType[];
  home: {
    name: string;
    job: string;
    content: string[];
  };
  footer:{
    name: string;
    body: string;
    href:string;
    src:StaticImageData
  }[];
  aboutMe: CardProps[];
};

export type ChildrenProps = {
  children: React.ReactNode;
};

export type ContactFormProps = {
  type: string;
  label: string;
  value: string;
  name: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export type ButtonProps = {
  text?: string;
  children?: React.ReactNode;
};

// type for reducer INITIAL_STATE
export type ReducerInitialType = {
  name: string;
  email: string;
  message: string;
};

// type for reducer action
export type ReducerActionType = {
  type: string;
  payload: { name: string; value: string };
};

// type for dark-theme div
export type DarkThemeProps = {
  children: React.JSX.Element | React.JSX.Element[];
}

// interface for emails
export interface EmailTemplateProps {
  name: string
  email:string;
  message:string
}