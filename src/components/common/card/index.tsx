import { CardProps } from "./index.types";
import styles from "./index.module.sass";
import ProIcon from "../icons/pro";
import variables from "@/components/common/styles/variables.module.sass";
import StarIcon from "../icons/star";
import { convertEnNumToFa } from "../functions/convert-en-num-to-fa";
import Image from "@/components/common/image";
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
  description,
}) => {
  return (
    <section className={styles.card}>
      <header className={styles.card__header}>
        <div className={styles.card__image}>
          <Image
            className={styles["card__image-img"]}
            loader={({ src }) => src}
            fill
            src={backgroundImage}
            alt=""
          />
        </div>
        <div
          className={
            styles.card__logo + " " + (is_pro ? styles.card__logo_active : "")
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
          {is_pro && (
            <div className={styles["card__logo-pro-image"]}>
              <ProIcon width="28" height="28" color={variables.primaryColor} />
            </div>
          )}
        </div>
        <div className={styles.card__advertisement}>
          <div className={styles["card__advertisement-text"]}></div>
          <div className={styles["card__advertisement-icon"]}></div>
        </div>
        {best_coupon && (
          <div className={styles.card__offer}>
            <div className={styles["card__offer-icon"]}>
              <ProIcon width="21" height="21" color={variables.primaryColor} />
            </div>
            <div className={styles["card__offer-text"]}>
              {convertEnNumToFa(best_coupon)}
            </div>
          </div>
        )}
      </header>
      <div className={styles.card__body}>
        <div className={styles["card__title-rate"]}>
          <div className={styles.card__title}>
            <h3 className={styles["card__title-text"]}>{title}</h3>
            {discountValueForView !== undefined && discountValueForView > 0 && (
              <div className={styles["card__title-discount"]}>
                تا {convertEnNumToFa(discountValueForView + "")}٪
              </div>
            )}
          </div>
          <div className={styles.card__rate}>
            <div className={styles["card__rate-count"]}>
              ({convertEnNumToFa(voteCount.toLocaleString())})
            </div>
            <div className={styles["card__rate-score"]}>
              <div className={styles["card__rate-score-text"]}>
                {convertEnNumToFa(rate.toString())}
              </div>
              <div className={styles["card__rate-score-icon"]}>
                <StarIcon
                  width="14"
                  height="14"
                  color={variables.verdunGreenColor}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card__description}>{description}</div>
        <div className={styles["card__send-duration"]}>
          <div className={styles.card__send}>
            <div className={styles["card__send-method"]}>
              {isZFExpress ? "ارسال اکسپرس" : "پیک فروشنده"}
            </div>
            <div className={styles["card__send-price"]}>
              {deliveryFee === 0
                ? "رایگان"
                : convertEnNumToFa(deliveryFee.toLocaleString()) +
                  " تومان"}{" "}
            </div>
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
