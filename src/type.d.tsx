import { AxiosResponse } from 'axios'

// * app state
export interface IRootState {
  company: ICompany
  properties: Array<IProperty>
}

export interface ICompany {
  companyName: string
  branches: Array<IBranch>
  selectedBranch: number
}

export interface IBranch {
  inSuburb?: boolean
  hasRecentlySold?: boolean
  id: number
  name?: string
  suburb: string
  address1?: string
  address2?: string
  telephone?: string
  rentalTelephone?: string
  mobile?: string
  fax?: string
  state?: string
  description?: string
  email?: string
  rentalEmail?: string
  accountType?: number
  numberForSale?: number
  numberForRent?: number
  domainUrl?: string
  showTabSoldLastYear?: boolean
}

type TMedia = {
  category: string
  type: string
  url: string
}
export interface IProperty {
  objective: 'rent' | 'sale'
  propertyTypes: Array<string>
  status: 'live' | 'leased' | 'archived'
  saleMode: 'rent' | 'leased' | 'archived' | 'buy'
  channel: 'residential'
  addressParts: {
    stateAbbreviation: string
    displayType: string
    streetNumber: string
    unitNumber: string
    street: string
    suburb: string
    postcode: string
    displayAddress: string
  }
  advertiserIdentifiers: {
    advertiserType: 'agency'
    advertiserId: number
    contactIds: Array<number>
    agentIds: Array<string>
  }
  bathrooms: number
  bedrooms: number
  buildingAreaSqm: number
  carspaces: number
  dateAvailable: string
  dateUpdated: string
  dateListed: string
  description: string
  features: Array<string>
  geoLocation: {
    latitude: number
    longitude: number
  }
  headline: string
  id: number
  inspectionDetails: {
    inspections: Array<object>
    pastInspections: Array<object>
    isByAppointmentOnly: boolean
  }
  isNewDevelopment: boolean
  media: Array<TMedia>
  priceDetails: {
    canDisplayPrice: boolean
    displayPrice: string
  }
  seoUrl: string
}

// * for function separateRentAndSale
export type newListElement = {
  cate: 'rent' | 'sale'
  icon: React.ReactNode
  properties: Array<IProperty>
}
