import { AxiosResponse } from 'axios'

// * app state
export interface IRootState {
  company: ICompany
  properties: Array<IProperty>
  branchInfo: IMoreDetailBranch
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

export interface IMoreDetailBranch {
  accountType: string
  profile: {
    profileWebsite: string
    agencyBanner: string
    agencyWebsite: string
    agencyLogoStandard: string
    agencyLogoSmall: string
    logoColour: string
    backgroundColour: string
    mapLatitude: string
    mapLongitude: string
    mapCertainty: number
    agencyDescription: string
    numberForSale: number
    numberForRent: number
    numberForSaleCommercial: number
    numberForRentCommercial: number
  }
  name: string
  details: {
    streetAddress1: string
    streetAddress2: string
    suburb: string
    state: string
    postcode: string
    agencyWebsite: string
    principalName: string
  }
  id: number
  agents: Array<IAgent>
  contactDetails: {
    businessSale: {
      email: string
      phone: string
    }
    businessRent: object
    commercialLease: {
      email: string
      phone: string
    }
    commercialSale: {
      email: string
      phone: string
    }
    emailDomains: Array<any>
    general: {
      email: string
      fax: string
      phone: string
      mobile: string
    }
    residentialRent: {
      email: string
      phone: string
    }
    residentialSale: {
      email: string
      phone: string
    }
  }
}

export type TMedia = {
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

export interface IAgent {
  agencyId: number
  id: number
  firstName: string
  photo: string
  lastName: string
  phone: string
  facebookUrl?: string
  twitterUrl?: string
  profileText?: string
  mugShotNew?: string
  contactTypeCode: number
}

// * for function separateRentAndSale
export type newListElement = {
  cate: 'rent' | 'sale'
  icon: React.ReactNode
  properties: Array<IProperty>
}

// * type for 'property page' property description
export interface ITemPropertyElement {
  description: string
  features: string[]
  disclaimer: string
}

export interface ISeverAPIResponse extends AxiosResponse {
  code: number
  data: any
}
