import {
  billingServiceToggle,
  essentialBillingToggle,
  essentialSleepToggle,
  featureTableOneToggle,
  featureTableTwoToggle,
  premiumBillingToggle,
  premiumSleepToggle,
  sectionThreeVisibilityToggle,
  setImplementationPlan
} from '@/store/actions'
import { useStore } from '../../store/useStore'
import Image from 'next/image'
import Lock from '../../assets/Lock.svg'
import WarningCircle from '../../assets/WarningCircle.svg'

export default function ImplementationPlan() {
  const {
    implementationPlan,
    softwarePlan,
    essentialBillingCounter,
    essentialSleepCounter,
    premiumBillingCounter,
    premiumSleepCounter
  } = useStore()

  const handleEssentialBillingChange = () => {
    essentialBillingCounter == true
      ? essentialSleepCounter == true
        ? essentialBillingToggle(false)
        : handleEssentialSwitch()
      : essentialBillingToggle(true)
  }

  const handleEssentialSleepChange = () => {
    essentialSleepCounter == true
      ? essentialBillingCounter == true
        ? essentialSleepToggle(false)
        : handleEssentialSwitch()
      : essentialSleepToggle(true)
  }

  const handleEssentialSwitch = () => {
    essentialBillingToggle(!essentialBillingCounter)
    essentialSleepToggle(!essentialSleepCounter)
  }

  const handlePremiumBillingChange = () => {
    premiumBillingCounter == true
      ? premiumSleepCounter == true
        ? premiumBillingToggle(false)
        : handlePremiumSwitch()
      : premiumBillingToggle(true)
  }

  const handlePremiumSleepChange = () => {
    premiumSleepCounter == true
      ? premiumBillingCounter == true
        ? premiumSleepToggle(false)
        : handlePremiumSwitch()
      : premiumSleepToggle(true)
  }

  const handlePremiumSwitch = () => {
    premiumBillingToggle(!premiumBillingCounter)
    premiumSleepToggle(!premiumSleepCounter)
  }

  return (
    <>
      <div className="mt-[140px] flex items-center justify-center font-mulish ">
        <div className="flex-start flex flex-col gap-8 sm:w-[536px] md:w-[841px] lg:w-[790px]">
          {/* Card Parent */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center gap-2">
              <text className="text-center text-subtitle-2 font-semibold text-im-600">
                Step 2/3
              </text>
              <text className="w-[320px] text-center text-heading-5 font-bold sm:w-[460px] sm:text-heading-4 md:w-full md:text-heading-3">
                Select Your Implementation Package
              </text>
            </div>
            <div className="flex flex-col items-start justify-center max-sm:gap-6 sm:flex-row sm:gap-4 md:w-full md:gap-[30px]">
              {/* card one */}
              <div
                className={`flex flex-col items-start rounded-lg border border-global-custom-border-blue
                ${
                  implementationPlan == 'premium'
                    ? 'border-opacity-50 opacity-50'
                    : ''
                }`}
                onClick={() => {
                  setImplementationPlan('essential')
                  featureTableTwoToggle(true)
                  sectionThreeVisibilityToggle(true)
                }}
              >
                <div className="flex h-[184px] w-full flex-col items-center justify-center gap-4 self-stretch rounded-t-lg bg-global-custom-card-blue px-6 sm:h-[180px] sm:px-4 sm:py-10 md:h-[220px] md:px-0">
                  <div className="flex flex-col items-center gap-1">
                    <text className="text-subtitle-4 font-semibold text-global-medical-billing-blue">
                      Combined & saved 25%
                    </text>
                    <text className="w-[251px] text-center text-subtitle-1 font-semibold text-global-title">
                      Essential (Remote)
                    </text>
                  </div>
                  <div className="w-[82px] text-center text-heading-5 font-bold text-global-title">
                    {softwarePlan == 'pro'
                      ? essentialBillingCounter && essentialSleepCounter
                        ? '$2,995'
                        : '$1,995'
                      : '$1,995'}
                  </div>
                </div>
                <div className="flex h-[156px] flex-col items-center justify-center self-stretch px-6 py-4 sm:h-[148px] sm:px-4 sm:py-10 md:h-[160px] md:px-0">
                  <div className="flex items-center justify-center gap-3 self-stretch">
                    <text>Imagn Billing</text>
                    <span className="h-[56px] w-[56px] pt-3">
                      <label
                        className={`flex cursor-pointer items-center ${
                          softwarePlan == 'basic' ? '' : 'mr-10'
                        }`}
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="toggle"
                            className="hidden"
                            checked={essentialBillingCounter}
                            disabled={softwarePlan == 'basic'}
                            onChange={handleEssentialBillingChange}
                          />
                          <div
                            className={`top-1 h-[28px] w-[49px] rounded-full shadow-inner  ${
                              essentialBillingCounter
                                ? 'bg-im-brand-accent'
                                : ' bg-grey-400 '
                            }`}
                          ></div>
                          <div
                            className={` absolute inset-y-0 left-1 top-1 h-[20px] w-[20px] rounded-full bg-white shadow ${
                              essentialBillingCounter
                                ? 'translate-x-full transform bg-white '
                                : 'bg-white'
                            }`}
                          ></div>
                        </div>
                      </label>
                    </span>
                    <Image height={20} width={20} src={Lock} alt="lock icon" />
                  </div>
                  <div className="flex items-center justify-center gap-3 self-stretch">
                    <text>Imagn Sleep</text>
                    <span className="h-[56px] w-[56px] pt-3">
                      <label className="mr-10 flex cursor-pointer items-center">
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="toggle"
                            className="  hidden"
                            disabled={softwarePlan == 'basic'}
                            checked={essentialSleepCounter}
                            onChange={handleEssentialSleepChange}
                          />
                          <div
                            className={`top-1 h-[28px] w-[49px] rounded-full shadow-inner  ${
                              essentialSleepCounter
                                ? 'bg-im-brand-accent'
                                : ' bg-grey-400 '
                            }`}
                          ></div>
                          <div
                            className={` absolute inset-y-0 left-1 top-1 h-[20px] w-[20px] rounded-full bg-white shadow ${
                              essentialSleepCounter
                                ? 'translate-x-full transform bg-white '
                                : 'bg-white'
                            }`}
                          ></div>
                        </div>
                      </label>
                    </span>
                    <Image height={20} width={20} src={Lock} alt="lock icon" />
                  </div>
                </div>
              </div>

              {/* card 2 */}
              <div
                className={`flex flex-col items-start rounded-lg border border-im-600
                ${
                  implementationPlan == 'essential'
                    ? 'border-opacity-50 opacity-50'
                    : ''
                }`}
                onClick={() => {
                  setImplementationPlan('premium')
                  featureTableTwoToggle(true)
                  sectionThreeVisibilityToggle(true)
                }}
              >
                <div className="flex h-[184px] flex-col items-center justify-center gap-4 self-stretch rounded-t-lg border-im-600 bg-global-im-bg-1 px-6 sm:h-[180px] sm:px-4 sm:py-10 md:h-[220px] md:px-0">
                  <div className="flex flex-col items-center gap-1">
                    <text className="text-subtitle-4 font-semibold text-global-medical-billing-blue">
                      Combined & saved 25%
                    </text>
                    <text className="w-[251px] text-center text-subtitle-1 font-semibold text-global-title">
                      Essential (Remote)
                    </text>
                  </div>
                  <div className="w-[82px] text-center text-heading-5 font-bold text-global-title">
                    {softwarePlan == 'pro'
                      ? premiumBillingCounter && premiumSleepCounter
                        ? '$15,995'
                        : '$11,995'
                      : '$11,995'}
                  </div>
                </div>
                <div className="flex h-[156px] flex-col items-center justify-center self-stretch px-6 py-4 sm:h-[148px] sm:px-4 sm:py-10 md:h-[160px] md:px-0">
                  <div className="flex items-center justify-center gap-3 self-stretch">
                    <text>Imagn Billing</text>
                    <span className="h-[56px] w-[56px] pt-3">
                      <label className="mr-10 flex cursor-pointer items-center">
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="toggle"
                            className="  hidden"
                            disabled={softwarePlan == 'basic'}
                            checked={premiumBillingCounter}
                            onChange={handlePremiumBillingChange}
                          />
                          <div
                            className={`top-1 h-[28px] w-[49px] rounded-full shadow-inner  ${
                              premiumBillingCounter
                                ? 'bg-im-brand-accent'
                                : ' bg-grey-400 '
                            }`}
                          ></div>
                          <div
                            className={` absolute inset-y-0 left-1 top-1 h-[20px] w-[20px] rounded-full bg-white shadow ${
                              premiumBillingCounter
                                ? 'translate-x-full transform bg-white '
                                : 'bg-white'
                            }`}
                          ></div>
                        </div>
                      </label>
                    </span>
                    <Image height={20} width={20} src={Lock} alt="lock icon" />
                  </div>
                  <div className="flex items-center justify-center gap-3 self-stretch">
                    <text>Imagn Sleep</text>
                    <span className="h-[56px] w-[56px] pt-3">
                      <label className="mr-10 flex cursor-pointer items-center">
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="toggle"
                            className="  hidden"
                            disabled={softwarePlan == 'basic'}
                            checked={premiumSleepCounter}
                            onChange={handlePremiumSleepChange}
                          />
                          <div
                            className={`top-1 h-[28px] w-[49px] rounded-full shadow-inner  ${
                              premiumSleepCounter
                                ? 'bg-im-brand-accent'
                                : ' bg-grey-400 '
                            }`}
                          ></div>
                          <div
                            className={` absolute inset-y-0 left-1 top-1 h-[20px] w-[20px] rounded-full bg-white shadow ${
                              premiumSleepCounter
                                ? 'translate-x-full transform bg-white '
                                : 'bg-white'
                            }`}
                          ></div>
                        </div>
                      </label>
                    </span>
                    <Image height={20} width={20} src={Lock} alt="lock icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex w-[320px] flex-col items-center gap-3 rounded-lg border border-[#76bf1700] bg-grey-100 p-4 px-5 sm:w-[536px] md:w-[656px] md:px-5 md:py-4">
              <div className="flex items-start justify-center gap-2 self-stretch">
                <span className="mt-1 h-5 w-5">
                  <Image
                    className="w-full"
                    alt="warning icon"
                    src={WarningCircle}
                  />
                </span>
                <text className="text-center text-subtitle-4 font-semibold">
                  You must select ‘Imagn Sleep Software’ in step 1 to enable
                  ‘Imagn Sleep Implementation’
                </text>
              </div>
              <text className="text-center text-[16px] font-semibold text-im-link underline">
                Select ‘Imagn Billing + Imagn Sleep’ software
              </text>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
