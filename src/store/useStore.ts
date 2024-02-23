import { create } from 'zustand'

interface InitialStateObject {
  softwarePlan: string
  implementationPlan: string
  featureTableOneCounter: boolean
  featureTableTwoCounter: boolean
  billingServiceCounter: boolean
  essentialBillingCounter: boolean
  essentialSleepCounter: boolean
  premiumBillingCounter: boolean
  premiumSleepCounter: boolean
  sectionTwoVisibilityCounter: boolean
  sectionThreeVisibilityCounter: boolean
}

const initialState: InitialStateObject = {
  softwarePlan: '',
  implementationPlan: '',
  featureTableOneCounter: false,
  featureTableTwoCounter: false,
  billingServiceCounter: true,
  essentialBillingCounter: true,
  essentialSleepCounter: true,
  premiumBillingCounter: true,
  premiumSleepCounter: true,
  sectionTwoVisibilityCounter: false,
  sectionThreeVisibilityCounter: false
}

export const useStore = create(() => ({
  ...initialState
}))
