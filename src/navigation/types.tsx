export type HomeStackParamList = {
  Root: undefined;
  DestinationSearch: undefined;
  GuestDetails: undefined;
  NotFound: undefined;
};

export type HomeTabParamList = {
  Explore: undefined;
  Saved: undefined;
  Trips: undefined;
  Inbox: undefined;
  Profile: undefined;
};

export type HomeParamList = {
  Home: { screen: string; params: { screen: string } } | undefined;
  DestinationSearch: undefined;
  GuestDetails: undefined;
  SearchResults: undefined;
};

export type SearchParamList = {
  SearchResults: undefined;
};

export type ExploreParamList = {
  Welcome: undefined;
  SearchResults: undefined;
};
