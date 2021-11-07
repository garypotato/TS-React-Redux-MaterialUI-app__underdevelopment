import { AxiosResponse } from 'axios'

// * app state
export interface IRootState {
  company: ICompany
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
