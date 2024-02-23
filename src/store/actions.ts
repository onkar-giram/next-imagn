import { useStore } from './useStore'

export const setSoftwarePlan = (newSoftwarePlan: string) =>
  useStore.setState(() => ({ softwarePlan: newSoftwarePlan }))

export const setImplementationPlan = (newPlan: string) =>
  useStore.setState(() => ({ implementationPlan: newPlan }))

export const featureTableOneToggle = (value: boolean) =>
  useStore.setState(() => ({ featureTableOneCounter: value }))

export const billingServiceToggle = (value: boolean) =>
  useStore.setState(() => ({ billingServiceCounter: value }))

export const featureTableTwoToggle = (value: boolean) =>
  useStore.setState(() => ({ featureTableTwoCounter: value }))

export const essentialBillingToggle = (value: boolean) =>
  useStore.setState(() => ({ essentialBillingCounter: value }))

export const essentialSleepToggle = (value: boolean) =>
  useStore.setState(() => ({ essentialSleepCounter: value }))

export const premiumBillingToggle = (value: boolean) =>
  useStore.setState(() => ({ premiumBillingCounter: value }))

export const premiumSleepToggle = (value: boolean) =>
  useStore.setState(() => ({ premiumSleepCounter: value }))

export const sectionTwoVisibilityToggle = (value: boolean) =>
  useStore.setState(() => ({ sectionTwoVisibilityCounter: value }))

export const sectionThreeVisibilityToggle = (value: boolean) =>
  useStore.setState(() => ({ sectionThreeVisibilityCounter: value }))
