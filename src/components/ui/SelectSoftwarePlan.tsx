import { useState } from 'react'
import {
  setSoftwarePlan,
  billingServiceToggle,
  featureTableOneToggle,
  sectionTwoVisibilityToggle
} from '../../store/actions'
import { useStore } from '@/store/useStore'

export default function SelectSoftwarePlan() {
  const [isChecked, setChecked] = useState(false)
  const { softwarePlan } = useStore()
  const toggleHandler = () => {
    setChecked(!isChecked)
  }
  return (
    <>
      <div className="mt-14 flex justify-center gap-8 font-mulish">
        <div className="mx-5 flex flex-col items-center sm:mx-0 md:mx-[33px] md:w-[840px] lg:w-[790px]">
          <div className="flex flex-col items-center justify-center">
            <p className=" text-subtitle-2 font-semibold text-im-600">
              Step 1/3
            </p>
            <span className="text-heading-5 text-[20324A] max-sm:w-[320px] sm:text-heading-4 md:text-heading-3">
              <p className="ml-[25px] mr-[30px] text-center font-bold sm:ml-[31.25px] sm:mr-[37.25px] md:ml-[39px] md:mr-[46.8px]">
                Select Your Imagn Software Plan
              </p>
            </span>
          </div>

          <div className="mt-4 flex w-[296px] items-center justify-center gap-4 sm:w-[452px]">
            <p className="w-[107px] text-right text-subtitle-3 text-global-brand-body sm:w-[182px]">
              Billed Monthly
            </p>
            <div className="h-14 w-14 pt-3">
              <label className="flex cursor-pointer items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="hidden"
                    checked={isChecked}
                    onChange={toggleHandler}
                  />
                  <div
                    className={`top-1 h-[28px] w-[49px]  rounded-full shadow-inner  ${
                      isChecked ? 'bg-im-brand-accent ' : ' bg-grey-400 '
                    }`}
                  ></div>
                  <div
                    className={` absolute inset-y-0 left-1 top-1 h-[20px] w-[20px] rounded-full shadow ${
                      isChecked
                        ? 'translate-x-full transform bg-white'
                        : 'bg-white'
                    }`}
                  ></div>
                </div>
              </label>
            </div>
            <p className="hidden w-[96px] text-left text-grey-400 max-sm:block ">
              Billed Yearly
            </p>
            <p className="hidden w-[182px] text-left text-subtitle-4 font-semibold text-grey-400 sm:block">
              Billed Annually
              <span className="text-subtitle-5">(Save 10%)</span>
            </p>
          </div>

          <div className="mt-8 flex w-full flex-col items-center gap-12 self-stretch sm:mt-12 sm:flex-row sm:gap-6">
            <div
              onClick={() => {
                setSoftwarePlan('basic')
                billingServiceToggle(false)
                featureTableOneToggle(true)
                sectionTwoVisibilityToggle(true)
              }}
              className={`flex h-[256px] w-full flex-col items-center justify-center gap-4 self-stretch rounded-xl border border-global-medical-billing-blue bg-global-custom-card-blue py-10 sm:h-[380px] sm:w-full md:h-[380px] 
              ${softwarePlan == 'pro' ? 'opacity-50' : ''}`}
            >
              <p className="text-center text-subtitle-1 font-semibold text-global-medical-billing-blue">
                Imagn Billing
              </p>
              <p className="text-center font-mulish text-heading-4 font-bold text-global-title md:text-heading-3">
                {isChecked ? '$445' : ' $495'}
                <span className="text-body-3 font-normal text-global-brand-body">
                  / month
                </span>
              </p>
            </div>
            <div
              onClick={() => {
                setSoftwarePlan('pro')
                billingServiceToggle(false)
                featureTableOneToggle(true)
                sectionTwoVisibilityToggle(true)
              }}
              className={`relative flex h-[256px] w-full flex-col items-center justify-center gap-4 self-stretch rounded-xl border border-im-link bg-global-im-bg-1 py-10 sm:h-[380px] sm:w-full md:h-[380px]
              ${softwarePlan == 'basic' ? 'opacity-50' : ''}`}
            >
              <div className="absolute -top-6 left-[100px] flex items-start gap-2 rounded-[20px] border border-im-800 bg-im-brand-accent px-4 py-3 sm:-top-6 sm:left-[68px] md:-top-6 md:left-[130px]">
                <p className="text-center text-subtitle-4 font-semibold text-white">
                  Most popular
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-center text-subtitle-4 font-semibold text-im-brand-accent">
                  Combine & save 25%
                </p>
                <p className="text-center text-subtitle-1 font-semibold text-im-link">
                  Imagn Billing + <br className="hidden max-md:block" /> Imagn
                  Sleep
                </p>
              </div>

              <p className="text-center text-heading-4 font-bold text-global-title md:text-heading-3">
                {isChecked ? '$715' : '$795'}
                <span className="text-body-3 font-normal text-global-brand-body">
                  / month
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
