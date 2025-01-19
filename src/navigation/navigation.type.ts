import { IIndicatorSlug } from "../type";

export type RootStackParamList = {
  Home: undefined;
  Detail: {slug: IIndicatorSlug};
  Historical: {slug: IIndicatorSlug};
}
