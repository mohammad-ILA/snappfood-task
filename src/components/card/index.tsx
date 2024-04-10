import { CardProps } from "./index.types";
import styles from "./index.module.sass";
import Image from "next/image";
const Card: React.FC<CardProps> = ({
  backgroundImage,
  best_coupon,
  deliveryFee,
  discountValueForView,
  isZFExpress,
  is_pro,
  logo,
  rate,
  title,
  voteCount,
}) => {
  return (
    <section className={styles.card}>
      <header className={styles.card__header}>
        <div className={styles.card__image}>
          <Image loader={({ src }) => src} fill src={backgroundImage} alt="" />
        </div>
        <div
          className={
            styles.card__logo + (is_pro ? styles.card__logo_active : "")
          }
        >
          <Image
            loader={({ src }) => src}
            width={48}
            height={48}
            src={logo}
            alt=""
            className={styles["card__logo-image"]}
          />
          <div className={styles["card__logo-pro-image"]}></div>
        </div>
        <div className={styles.card__advertisement}>
          <div className={styles["card__advertisement-test"]}></div>
          <div className={styles["card__advertisement-icon"]}></div>
        </div>
        <div className={styles.card__offer}>
          <div className={styles["card__offer-test"]}>{best_coupon}</div>
        </div>
      </header>
      <div className={styles.card__body}>
        <div className={styles["card__title-rate"]}>
          <div className={styles.card__title}>
            <h3 className={styles["card__title-text"]}>{title}</h3>
            <div className={styles["card__title-discount"]}>
              تا {discountValueForView}٪
            </div>
          </div>
          <div className={styles.card__rate}>
            <div className={styles["card__rate-count"]}>{voteCount}</div>
            <div className={styles["card__rate-score"]}>
              <div className={styles["card__rate-score-text"]}>{rate}</div>
              <div className={styles["card__rate-score-icon"]}></div>
            </div>
          </div>
        </div>
        <div className={styles.card__description}></div>
        <div className={styles["card__send-duration"]}>
          <div className={styles.card__send}>
            <div className={styles["card__send-method"]}>
              {isZFExpress ? "ارسال اکسپرس" : "پیک فروشنده"}
            </div>
            <div className={styles["card__send-price"]}>{deliveryFee}</div>
          </div>
          <div className={styles.card__duration}>
            <div className={styles["card__duration-text"]}></div>
            <div className={styles["card__duration-icon"]}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
