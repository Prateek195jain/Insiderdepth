export type CardData = {
  title?: string;
  icon?: string;
  sections?: { heading?: string; points: string[] }[];
  footer?: string;
  midSection?: { title: string; icon: string; image: string }[];
  chat?: {
    role: "user" | "bot";
    message: string;
    icon: string;
    time: string;
  }[];
};
