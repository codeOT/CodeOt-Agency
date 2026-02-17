export interface Service {
  index: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  url: string;
}

export interface Stat {
  value: string;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface FormData {
  name: string;
  email: string;
  budget: string;
  message: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}