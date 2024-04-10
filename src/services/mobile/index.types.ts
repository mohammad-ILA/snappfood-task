export interface GetVendersListApiRequest {
  page: number;
  page_size: number;
  lat: number;
  long: number;
}
interface FiltersSectionsDataType {
  image: string | null;
  title: string;
  value: string;
  single_choice: boolean;
  selected: boolean;
  kind: string;
  description: string;
  open: boolean;
  exclude_in_pickup: boolean;
}
interface FiltersTopDataType {
  image: string | null;
  title: string;
  value: string;
  single_choice: boolean;
  selected: boolean;
  kind: string;
  open: boolean;
  exclude_in_pickup: boolean;
}
interface ExtraSectionsCategoriesType {
  data: any[];
  open: false;
  single_choice: boolean;
}
interface ExtraSectionsFiltersType {
  sections: {
    section_name: string;
    section_name_fa: string;
    data: FiltersSectionsDataType[];
    description: string;
    open: boolean;
    suggest: boolean;
    exclude_in_pickup: boolean;
  };
  top: {
    badge: string;
    data: FiltersTopDataType[];
    open: boolean;
  };
}
interface ExtraSectionsPickupType {
  active: boolean;
  filter_text: string;
  is_new: boolean;
  open: boolean;
}
export interface ExtraSectionsType {
  render_type: number;
  categories: ExtraSectionsCategoriesType;
  filters: ExtraSectionsFiltersType;
  pickup: ExtraSectionsPickupType;
}
interface SchedulesType {
  type: number;
  weekday: number;
  allDay: boolean;
  startHour: string;
  stopHour: string;
}
interface BadgesType {
  title: string;
  description: string;
  image: string;
  white_image: string;
}
interface UserImageType {
  id: number;
  description: string | null;
  fileName: string;
  thumbNailSource: string;
  likeCount: number;
  commentCount: number;
  timeDifference: number;
  imageType: string;
  userType: string;
}
interface PreorderTodayType {
  weekday: string;
  name: string;
  startHour: string;
  intervals: any;
}
interface CuisinesArrayType {
  id: number;
  title: string;
}
export interface FinalResultDataType {
  id: number;
  vendorCode: string;
  noOrder: boolean;
  title: string;
  description: string;
  rate: number;
  rating: number;
  logo: string;
  defLogo: string;
  taxEnabled: boolean;
  taxIncluded: boolean;
  taxEnabledInProducts: boolean;
  taxEnabledInPackaging: boolean;
  taxEnabledInDeliveryFee: boolean;
  tax: number;
  serviceFee: number;
  deliveryArea: string;
  discount: number;
  isOpen: true;
  minDeliveryFee: number;
  maxDeliveryFee: number;
  deliveryTime: number;
  paymentTypes: number[];
  schedules: SchedulesType[];
  minOrder: number;
  address: string;
  phone: string;
  website: string;
  status: number;
  lat: number;
  lon: number;
  restaurantClass: string;
  foodTypes: any[];
  restaurantTypes: any[];
  isFavorite: boolean;
  priority: number;
  city: string;
  area: string;
  commentCount: number;
  recommendedFor: string;
  establishment: string;
  mostPopularItems: string;
  costsForTwo: number;
  onlineOrder: boolean;
  voteCount: number;
  discountType: string | null;
  menuUrl: string;
  discountValue: number;
  discountForAll: boolean;
  containerFee: number;
  deliveryGuarantee: boolean;
  badges: BadgesType[];
  discountStartHour1: string;
  discountStopHour1: string;
  discountStartHour2: string;
  discountStopHour2: string;
  discountValueForView: number;
  coverPath: string;
  cuisinesArray: CuisinesArrayType[];
  preOrderEnabled: boolean;
  preorderToday: PreorderTodayType;
  vendorType: string;
  childType: string;
  budgetClass: string;
  vendorTypeTitle: string;
  isZFExpress: boolean;
  deliveryFee: number;
  backgroundImage: string;
  backgroundImageCustom: string;
  has_coupon: boolean;
  coupon_count: number;
  best_coupon: string;
  is_pro: boolean;
  has_first_coupon: boolean;
  userImage: UserImageType[];
  menuImage: any[];
  countReview: number;
  countOfUserImages: number;
  deliveryFeeDiscount: number;
  trendingScore: number;
  delay: string;
  deliver: boolean;
  eta: number;
  min_eta: number;
  max_eta: number;
  open_at_eta: boolean;
  action: string;
  has_delay: boolean;
  delay_time: number;
  total_time: number;
  bid: boolean;
  superTypeAlias: string;
  is_food_party: boolean;
  is_market_party: boolean;
  click_id: any;
  cpc_campaign_hash: any;
  cpc_spot: any;
  is_ecommerce: boolean;
  is_economical: boolean;
  is_grocery_vip: boolean;
  is_grocery_returnable: boolean;
  is_grocery_economic: boolean;
  vendor_status: any;
  status_title: string;
  status_text: string;
  status_description: string;
  has_cashback: boolean;
  new_type: string;
  new_type_title: string;
  is_eco: boolean;
}
export interface FinalResultType {
  icon: string;
  type: string;
  data: FinalResultDataType;
}
export interface GetVendersListApiResponse {
  render_type: number;
  status: boolean;
  data: {
    count: number;
    extra_sections: ExtraSectionsType;
    finalResult: FinalResultType[];
    meta_tags: {
      header: string;
      title: string;
      description: string;
    };
    open_count: number;
  };
}
