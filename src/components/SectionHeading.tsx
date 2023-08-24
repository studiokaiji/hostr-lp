import { H2 } from "./H2";

type SectionHeadingProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: React.ReactNode;
};

export const SectionHeading = ({ title, icon: Icon }: SectionHeadingProps) => (
  <div className="space-y-6 text-center flex flex-col items-center">
    <Icon width={60} height={60} />
    <H2>{title}</H2>
  </div>
);
