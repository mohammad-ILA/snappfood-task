import styles from "@/components/common/card-skeleton/index.module.sass";

const CardSkeleton: React.FC = () => {
  return (
    <div className={styles["card-skeleton"]}>
      <div className={styles["card-skeleton__header"]}></div>
      <div className={styles["card-skeleton__body"]}>
        <div className={styles["card-skeleton__title"]}></div>
        <div className={styles["card-skeleton__description"]}></div>
      </div>
    </div>
  );
};
export default CardSkeleton;
