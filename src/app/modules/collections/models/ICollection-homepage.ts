import { ICollectionHomepageCollection } from "./ICollection-homepage-collections";
import { ICollectionHomepgeDescription } from "./ICollection-homepage-description";

export interface ICollectionHomepage{
  HomepageDescription:ICollectionHomepgeDescription[],
  HomepageCollections:ICollectionHomepageCollection[],
}
