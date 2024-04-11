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
  const renderProIcon = () => {
    if (is_pro) {
      return (
        <div className={styles["card__logo-pro-image"]}>
          <ProIcon width="28" height="28" color={variables.primaryColor} />
        </div>
      );
    }
    return null;
  };

  const renderBestCoupon = () => {
    if (best_coupon) {
      const convertedBestCouponEnNumbersToFa = convertEnNumToFa(best_coupon);
      return (
        <div className={styles.card__offer}>
          <div className={styles["card__offer-icon"]}>
            <ProIcon width="21" height="21" color={variables.primaryColor} />
          </div>
          <div className={styles["card__offer-text"]}>
            {convertedBestCouponEnNumbersToFa}
          </div>
        </div>
      );
    }
    return null;
  };

  const renderDiscount = () => {
    if (discountValueForView !== undefined && discountValueForView > 0) {
      return (
        <div className={styles["card__title-discount"]}>تا {discount}٪</div>
      );
    }
  };

  const deliveryFe =
    deliveryFee === 0
      ? "رایگان"
      : convertEnNumToFa(deliveryFee.toLocaleString()) + " تومان";

  const deliveryType = isZFExpress ? "ارسال اکسپرس" : "پیک فروشنده";

  const rateScore = convertEnNumToFa(rate.toString());

  const rateCount = convertEnNumToFa(voteCount.toLocaleString());

  const discount = convertEnNumToFa(discountValueForView + "");

  const activeClassLogo = is_pro ? styles.card__logo_active : "";

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
        <div className={`${styles.card__logo} ${activeClassLogo}`}>
          <Image
            loader={({ src }) => src}
            width={48}
            height={48}
            src={logo}
            alt=""
            className={styles["card__logo-image"]}
          />
          {renderProIcon()}
        </div>
        <div className={styles.card__advertisement}>
          <div className={styles["card__advertisement-text"]}></div>
          <div className={styles["card__advertisement-icon"]}></div>
        </div>
        {renderBestCoupon()}
      </header>
      <div className={styles.card__body}>
        <div className={styles["card__title-rate"]}>
          <div className={styles.card__title}>
            <h3 className={styles["card__title-text"]}>{title}</h3>
            {renderDiscount()}
          </div>
          <div className={styles.card__rate}>
            <div className={styles["card__rate-count"]}>({rateCount})</div>
            <div className={styles["card__rate-score"]}>
              <div className={styles["card__rate-score-text"]}>{rateScore}</div>
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
            <div className={styles["card__send-method"]}>{deliveryType}</div>
            <div className={styles["card__send-price"]}>{deliveryFe}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
