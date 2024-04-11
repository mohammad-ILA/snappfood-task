import type { Meta, StoryObj } from "@storybook/react";
import Card from "@/components/common/card";
import "@/stories/assets/global.sass";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    direction: "rtl",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalVendor: Story = {
  args: {
    title: "رستوران",
    voteCount: 1294,
    rate: 3.2,
    logo: "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/62c149a839084.jpg",
    is_pro: false,
    deliveryFee: 87400,
    backgroundImage:
      "https://cdn.snappfood.ir/media/cache/vendor_item_cover/uploads/images/vendors/covers/62c149a83fd3b.jpg",
    description: "بهترین رستوران بین المللی",
    isZFExpress: false,
  },
};
export const ProVendor: Story = {
  args: {
    title: "رستوران",
    voteCount: 1294,
    rate: 3.2,
    logo: "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/62c149a839084.jpg",
    is_pro: true,
    best_coupon: "ارسال رایگان و ۱۰% تخفیف ویژه کاربران PRO",
    deliveryFee: 87400,
    backgroundImage:
      "https://cdn.snappfood.ir/media/cache/vendor_item_cover/uploads/images/vendors/covers/62c149a83fd3b.jpg",
    description: "بهترین رستوران بین المللی",
    isZFExpress: false,
  },
};
export const DiscountVendor: Story = {
  args: {
    title: "رستوران",
    voteCount: 1294,
    rate: 3.2,
    logo: "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/62c149a839084.jpg",
    is_pro: true,
    best_coupon: "ارسال رایگان و ۱۰% تخفیف ویژه کاربران PRO",
    discountValueForView: 20,
    deliveryFee: 87400,
    backgroundImage:
      "https://cdn.snappfood.ir/media/cache/vendor_item_cover/uploads/images/vendors/covers/62c149a83fd3b.jpg",
    description: "بهترین رستوران بین المللی",
    isZFExpress: false,
  },
};
export const IsExpressVendor: Story = {
  args: {
    title: "رستوران",
    voteCount: 1294,
    rate: 3.2,
    logo: "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/62c149a839084.jpg",
    is_pro: true,
    best_coupon: "ارسال رایگان و ۱۰% تخفیف ویژه کاربران PRO",
    discountValueForView: 20,
    deliveryFee: 87400,
    backgroundImage:
      "https://cdn.snappfood.ir/media/cache/vendor_item_cover/uploads/images/vendors/covers/62c149a83fd3b.jpg",
    description: "بهترین رستوران بین المللی",
    isZFExpress: true,
  },
};
