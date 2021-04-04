export type RootStackParamList = {
  Root: undefined;
  DestinationSearch: undefined;
  GuestDetails: undefined;
  Listing: { listingId: string | number };
  NotFound: undefined;
};

export type HomeTabParamList = {
  Explore: undefined;
  Saved: undefined;
  Trips: undefined;
  Inbox: undefined;
  Profile: undefined;
};

export type SearchResultsTabParamList = {
  List: undefined;
  Map: undefined;
};

export type HomeParamList = {
  Home:
    | {
        screen: string;
        params: {
          screen: string;
          params: {
            guests: number;
          };
        };
      }
    | undefined;
  DestinationSearch: undefined;
  GuestDetails: undefined;
  SearchResults:
    | {
        guests: number;
      }
    | undefined;
};

export type SearchParamList = {
  SearchResults: undefined;
};

export type ExploreParamList = {
  Welcome: undefined;
  SearchResults: {
    guests: number;
  };
};
