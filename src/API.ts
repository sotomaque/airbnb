/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id?: string,
  username?: string,
  email?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateListingInput = {
  id?: string | null,
  image: string,
  type: string,
  title: string,
  description: string,
  maxGuests: number,
  petsAllowed?: boolean | null,
  bed: number,
  bath: number,
  oldPrice?: number | null,
  currentPrice: number,
  latitude: number,
  longitude: number,
};

export type ModelListingConditionInput = {
  image?: ModelStringInput | null,
  type?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  maxGuests?: ModelIntInput | null,
  petsAllowed?: ModelBooleanInput | null,
  bed?: ModelIntInput | null,
  bath?: ModelIntInput | null,
  oldPrice?: ModelFloatInput | null,
  currentPrice?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelListingConditionInput | null > | null,
  or?: Array< ModelListingConditionInput | null > | null,
  not?: ModelListingConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Listing = {
  __typename: "Listing",
  id?: string,
  image?: string,
  type?: string,
  title?: string,
  description?: string,
  maxGuests?: number,
  petsAllowed?: boolean | null,
  bed?: number,
  bath?: number,
  oldPrice?: number | null,
  currentPrice?: number,
  latitude?: number,
  longitude?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateListingInput = {
  id: string,
  image?: string | null,
  type?: string | null,
  title?: string | null,
  description?: string | null,
  maxGuests?: number | null,
  petsAllowed?: boolean | null,
  bed?: number | null,
  bath?: number | null,
  oldPrice?: number | null,
  currentPrice?: number | null,
  latitude?: number | null,
  longitude?: number | null,
};

export type DeleteListingInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelListingFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  type?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  maxGuests?: ModelIntInput | null,
  petsAllowed?: ModelBooleanInput | null,
  bed?: ModelIntInput | null,
  bath?: ModelIntInput | null,
  oldPrice?: ModelFloatInput | null,
  currentPrice?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelListingFilterInput | null > | null,
  or?: Array< ModelListingFilterInput | null > | null,
  not?: ModelListingFilterInput | null,
};

export type ModelListingConnection = {
  __typename: "ModelListingConnection",
  items?:  Array<Listing | null > | null,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateListingMutationVariables = {
  input?: CreateListingInput,
  condition?: ModelListingConditionInput | null,
};

export type CreateListingMutation = {
  createListing?:  {
    __typename: "Listing",
    id: string,
    image: string,
    type: string,
    title: string,
    description: string,
    maxGuests: number,
    petsAllowed?: boolean | null,
    bed: number,
    bath: number,
    oldPrice?: number | null,
    currentPrice: number,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateListingMutationVariables = {
  input?: UpdateListingInput,
  condition?: ModelListingConditionInput | null,
};

export type UpdateListingMutation = {
  updateListing?:  {
    __typename: "Listing",
    id: string,
    image: string,
    type: string,
    title: string,
    description: string,
    maxGuests: number,
    petsAllowed?: boolean | null,
    bed: number,
    bath: number,
    oldPrice?: number | null,
    currentPrice: number,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteListingMutationVariables = {
  input?: DeleteListingInput,
  condition?: ModelListingConditionInput | null,
};

export type DeleteListingMutation = {
  deleteListing?:  {
    __typename: "Listing",
    id: string,
    image: string,
    type: string,
    title: string,
    description: string,
    maxGuests: number,
    petsAllowed?: boolean | null,
    bed: number,
    bath: number,
    oldPrice?: number | null,
    currentPrice: number,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetListingQueryVariables = {
  id?: string,
};

export type GetListingQuery = {
  getListing?:  {
    __typename: "Listing",
    id: string,
    image: string,
    type: string,
    title: string,
    description: string,
    maxGuests: number,
    petsAllowed?: boolean | null,
    bed: number,
    bath: number,
    oldPrice?: number | null,
    currentPrice: number,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListListingsQueryVariables = {
  filter?: ModelListingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListListingsQuery = {
  listListings?:  {
    __typename: "ModelListingConnection",
    items?:  Array< {
      __typename: "Listing",
      id: string,
      image: string,
      type: string,
      title: string,
      description: string,
      maxGuests: number,
      petsAllowed?: boolean | null,
      bed: number,
      bath: number,
      oldPrice?: number | null,
      currentPrice: number,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateListingSubscription = {
  onCreateListing?:  {
    __typename: "Listing",
    id: string,
    image: string,
    type: string,
    title: string,
    description: string,
    maxGuests: number,
    petsAllowed?: boolean | null,
    bed: number,
    bath: number,
    oldPrice?: number | null,
    currentPrice: number,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateListingSubscription = {
  onUpdateListing?:  {
    __typename: "Listing",
    id: string,
    image: string,
    type: string,
    title: string,
    description: string,
    maxGuests: number,
    petsAllowed?: boolean | null,
    bed: number,
    bath: number,
    oldPrice?: number | null,
    currentPrice: number,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteListingSubscription = {
  onDeleteListing?:  {
    __typename: "Listing",
    id: string,
    image: string,
    type: string,
    title: string,
    description: string,
    maxGuests: number,
    petsAllowed?: boolean | null,
    bed: number,
    bath: number,
    oldPrice?: number | null,
    currentPrice: number,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
