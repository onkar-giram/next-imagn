import React from 'react'
import SelectSoftwarePlan from './ui/SelectSoftwarePlan'
import BillingService from './ui/BillingService'
import FeatureTableOne from './ui/FeatureTableOne'
// import FeatureTable from './ui/FeatureTable'

export default function BillingStepOne() {
  return (
    <>
      <SelectSoftwarePlan />
      {/* <FeatureTable /> */}
      <FeatureTableOne />
      <BillingService />
    </>
  )
}
