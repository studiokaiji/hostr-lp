import { H3 } from "./H3";

export type FeatureProps = {
  emoji: string;
  title: string;
  description: React.ReactNode;
};

export const Feature = ({ emoji, title, description }: FeatureProps) => (
  <div className="p-8 bg-primary bg-opacity-20 border-primary border-4">
    <H3 className="leading-normal">
      {emoji}
      <br />
      {title}
    </H3>
    <p className="mt-3">{description}</p>
  </div>
);
