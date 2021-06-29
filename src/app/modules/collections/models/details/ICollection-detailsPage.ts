import { ICollectionDetailsFocalItems } from "./icollection-details-focal-items";

export interface ICollectionDetailPage {

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
    featuredItems: [],
    focalItems: ICollectionDetailsFocalItems
}
