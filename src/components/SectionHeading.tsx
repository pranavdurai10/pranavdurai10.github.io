// Code written by Pranav Durai
interface Props {
  title: string;
}

const SectionHeading = ({ title }: Props) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-1 h-6 rounded-full bg-accent dark:bg-dark-highlight-bar" />
      <h2 className="text-2xl font-heading font-semibold text-primary dark:text-dark-text">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
