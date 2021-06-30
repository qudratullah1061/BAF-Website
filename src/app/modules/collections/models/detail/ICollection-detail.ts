import { ICollectionDetailFocalItems } from "@collections/models/detail/ICollection-detail-focal-items";
import { ICollectionDetailFeaturedItems } from "./icollection-detail-featured-items";

export interface ICollectionDetail {

    pageTitle: string,
    body1: String,
    id: number,
    code: string,
    name: String,
    itemFormatId: string,
    itemTypeName: string,
    iiifid: String,
    fsId: String,
    properties: string,
    description: string,
    dateRange: String,
    websiteProvenance: string,
    creatorProfile: string,
    totalItems: number,
    onlineItems: number,
    squareImage: string,
    landscapeImage: string,
    portraitImage: string,
    featuredItems?: ICollectionDetailFeaturedItems[],
    focalItems?: ICollectionDetailFocalItems[]
}
