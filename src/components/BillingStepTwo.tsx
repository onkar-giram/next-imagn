import React from 'react'
import ImplementationPlan from './ui/ImplementationPlan'
import ImagnPricing from './ui/ImagnPricing'
import FeatureTableTwo from './ui/FeatureTableTwo'
import { useStore } from '@/store/useStore'

export default function BillingStepTwo() {
  const { sectionTwoVisibilityCounter, sectionThreeVisibilityCounter } =
    useStore()

  return (
    <>
      {sectionTwoVisibilityCounter && <ImplementationPlan />}
      {sectionTwoVisibilityCounter && <FeatureTableTwo />}
      {sectionThreeVisibilityCounter && <ImagnPricing />}
    </>
  )
}
