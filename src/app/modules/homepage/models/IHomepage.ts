import { IAPIBase } from "../../shared/models/IApi-base";
import { IHomepageFeaturedItems } from "./IHomepage-featured-items";
import { IHomepageNewsAndEvents } from "./IHomepage-news-and-events";
import { ISliderImages } from "./ISlider-images";

export interface IHomepage extends IAPIBase {
  totalItems: number;
  totalPeople: number;
  totalCollections: number;
  totalStories: number;
  sliderImages: ISliderImages[];
  homePageFeaturedItems: IHomepageFeaturedItems[];
  homePageNewsAndEvents: IHomepageNewsAndEvents[]
  pageId: number;
  pageTitle: number;
  body1: string;
  body2: string;
  body3: string;
}
