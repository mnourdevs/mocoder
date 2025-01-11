import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { StaticImageData } from "next/image";
import { NextRequest, NextResponse } from "next/server";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { ChangeEvent, ElementType, FormEvent } from "react";

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

export interface ProjectProps {
  title: string;
  // description: string;
  imageUrl: StaticImageData;
  liveUrl: string;
  // githubUrl: string;
  tags: string[]; 
}
export type DataProps = {
  navigation: NavType[];
  connectSocial: NavType[];
  home: {
    name: string;
    job: string[];
    content: string[];
  };
  footer: {
    name: string;
    body: string;
    href: string;
    src: StaticImageData;
  }[];
  aboutMe: CardProps[];
  projects:ProjectProps[];
  teamProjects:ProjectProps[]
};

export type ChildrenProps = {
  children: React.ReactNode;
};

export interface ContactFormInterface {
  state: ReducerInitialType;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

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
  error: string;
};

// type for reducer action
export type ReducerActionType = {
  type: string;
  payload: { name: string; value: string } | string;
};

// type for dark-theme div
export type DarkThemeProps = {
  children: React.JSX.Element | React.JSX.Element[];
};

// interface for emails
export interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export type HandlerProps = (
  req: NextRequest
) => Promise<NextResponse<SMTPTransport.SentMessageInfo | any>>;

export interface CustomAPIErrorProps {
  message: string;
  statusCode: number;
}

export interface UseContactFormReturnInterface {
  state: ReducerInitialType;
  router: AppRouterInstance;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
