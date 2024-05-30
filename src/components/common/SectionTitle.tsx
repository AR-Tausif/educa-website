import styles from "./SectionTitle.module.css";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className={`${styles.sectionTitle} flex justify-center gap-1 mb-6`}>
      <div className="border-b-2  w-5/12 border-blue-500"></div>
      <div>
        <i className="font-bold animate-pulse text-blue-500 text-xl">{title}</i>
      </div>
      <div className="border-b-2 w-5/12 border-blue-500"></div>
    </div>
  );
};

export default SectionTitle;
