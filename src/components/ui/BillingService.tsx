import Image from 'next/image'
import React, { useState } from 'react'
import PlayCircle from '../../assets/PlayCircle.svg'
import MinusIcon from '../../assets/MinusIcon.svg'
import PlusCircle from '../../assets/PlusCircle.svg'
import ImagnBilling from '../../assets/ImagnBilling.png'
import { billingServiceToggle } from '../../store/actions'
import { useStore } from '@/store/useStore'
import MinusCircle from '../../assets/MinusCircle.svg'

export default function BillingService() {
  const [doctorCounter, setDoctorCounter] = useState(1)
  const billingServiceCounter: boolean = useStore(
    (state) => state.billingServiceCounter
  )
  return (
    <>
      <div className="mt-10 flex justify-center font-mulish">
        <div className="w-[320px] bg-grey-100 sm:w-[536px] md:w-[840px] lg:w-[1200px]">
          <div className="flex h-[100px] items-center gap-[225px] rounded-t-lg">
            <div className="flex items-center gap-4 pl-6 text-subtitle-3 font-semibold text-global-title">
              <p>Imagn Billing Service</p>
              <span className="hover:cursor-pointer">
                {billingServiceCounter == true ? (
                  <Image
                    src={MinusIcon}
                    alt="hide icon"
                    width={20}
                    height={20}
                    onClick={() => billingServiceToggle(false)}
                  />
                ) : (
                  <Image
                    src={PlusCircle}
                    alt="hide icon"
                    width={20}
                    height={20}
                    onClick={() => billingServiceToggle(true)}
                  />
                )}
              </span>
            </div>
          </div>

          <div
            className={`flex flex-col items-start gap-10 px-6 pb-8 md:gap-6 lg:flex-row lg:items-stretch ${billingServiceCounter ? '' : 'hidden'}`}
          >
            <div className="flex flex-col items-start gap-10 self-stretch rounded-b-lg border-dashed border-im-link pb-6 max-lg:border-b  lg:border-r lg:pr-5 ">
              <div className="gap-3">
                <p className="self-stretch text-subtitle-1 font-semibold text-global-title">
                  Included
                </p>
                <p className="self-stretch text-body-3 text-global-brand-body">
                  Verification of Benefits & Pre-Authorizations are included
                </p>
              </div>
              <div className="flex flex-col gap-10 sm:gap-6 md:flex-row">
                <div className="relative flex">
                  <Image
                    src={ImagnBilling}
                    alt="hide icon"
                    className=" h-[124px] w-[123px] sm:h-[140px] sm:w-[139px] md:w-[126px]"
                  />
                  <Image
                    alt="play icon"
                    src={PlayCircle}
                    className="absolute left-[42px] top-[42px] flex h-10 w-10 text-white "
                  />
                  <div className="flex w-[149px] flex-col items-start justify-between self-stretch bg-white px-6 py-4 sm:w-[349px] md:w-[230px]">
                    <p className="text-subtitle-4 font-semibold text-im-link">
                      Included
                    </p>
                    <p className="w-[109px] text-subtitle-3 font-semibold text-global-title ">
                      Verification of benefit
                    </p>
                    <p className="text-[12px] font-semibold text-im-link underline">
                      Learn more
                    </p>
                  </div>
                </div>

                <div className="relative flex">
                  <Image
                    src={ImagnBilling}
                    alt="hide icon"
                    className="h-[124px] w-[123px] sm:h-[140px] sm:w-[139px] md:w-[126px]"
                  />
                  <Image
                    alt="play icon"
                    src={PlayCircle}
                    className="absolute left-[42px] top-[42px] flex h-10 w-10 text-white "
                  />
                  <div className="flex w-[149px] flex-col items-start justify-between self-stretch bg-white px-6 py-4 sm:w-[349px] md:w-[230px]">
                    <p className="text-subtitle-4 font-semibold text-im-link">
                      Included
                    </p>
                    <p className="w-[109px] text-subtitle-3 font-semibold text-global-title ">
                      Pre-Authorization
                    </p>
                    <p className="text-[12px] font-semibold text-im-link underline">
                      Learn more
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-10 self-stretch ">
              <div className="gap-3">
                <p className="self-stretch text-subtitle-1 font-semibold text-global-title">
                  Pay Per Case
                </p>
                <p className="self-stretch text-body-3 text-global-brand-body">
                  You only pay a fee for successful claims!
                </p>
              </div>
              <div className="flex flex-col gap-10 sm:gap-6 md:flex-row">
                <div className="relative flex">
                  <Image
                    src={ImagnBilling}
                    alt="hide icon"
                    className="h-[124px] w-[123px] sm:h-[140px] sm:w-[139px] md:w-[126px]"
                  />
                  <Image
                    alt="play icon"
                    src={PlayCircle}
                    className="absolute left-[42px] top-[42px] flex h-10 w-10 text-white "
                  />
                  <div className="flex w-[149px] flex-col items-start justify-between self-stretch bg-white px-6 py-4 sm:w-[349px] md:w-[230px]">
                    <p className="text-subtitle-3 font-semibold text-global-title">
                      9%
                    </p>
                    <p className="w-[109px] text-subtitle-3 font-semibold text-global-title ">
                      of Successful Claim Amount
                    </p>
                    <p className="text-[12px] font-semibold text-im-link underline">
                      Learn more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-8 flex justify-center">
        <div className="bg-global-custom-bg-doctor-booking flex w-[320px] flex-col items-center justify-center gap-5 self-stretch rounded-lg py-6 sm:h-[100px] sm:w-[536px] sm:flex-row sm:gap-10 md:w-[840px] lg:w-[1200px]">
          <div className="flex flex-col items-center justify-center gap-6 self-stretch sm:w-[360px] sm:flex-row sm:gap-8 sm:pl-6">
            <p className="text-subtitle-4 font-semibold sm:w-[194px] sm:text-subtitle-3 md:w-[340px]">
              Add number of Doctors for credentialing
            </p>
            <div className="flex items-center gap-6 sm:gap-8">
              <span>
                {doctorCounter == 1 ? (
                  <Image
                    src={MinusCircle}
                    alt="reduce icon"
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-[28px] md:w-[28px]"
                  />
                ) : (
                  <Image
                    src={MinusIcon}
                    alt="reduce icon"
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-[28px] md:w-[28px]"
                    onClick={() => setDoctorCounter(doctorCounter - 1)}
                  />
                )}
              </span>
              <p>{doctorCounter}</p>
              <span>
                <Image
                  src={PlusCircle}
                  alt="add icon"
                  className="h-8 w-8 sm:h-10 sm:w-10 md:h-[28px] md:w-[28px]"
                  onClick={() => setDoctorCounter(doctorCounter + 1)}
                />
              </span>
            </div>
          </div>
          <div className="flex w-[288px] items-center justify-center border-grey-600 px-2 pt-4 max-sm:border-t sm:w-[140px] sm:border-l sm:px-10 sm:py-3">
            <p className="text-heading-5 font-bold text-global-title">
              {`$${795 * doctorCounter}`}
            </p>
          </div>
        </div>
      </div> */}

      <div className="mt-8 flex justify-center">
        <div className="flex w-[320px] flex-col items-center justify-center gap-5 self-stretch bg-global-custom-bg-doctor-booking py-6 sm:h-[100px] sm:w-[536px] sm:flex-row sm:py-[1px] md:w-[840px] md:justify-around lg:w-[1200px] ">
          <div className="flex flex-col items-center justify-center gap-6 self-stretch sm:w-[360px] sm:flex-row sm:gap-8 md:w-full md:justify-start md:gap-20 lg:gap-20">
            <p className="pl-8 text-subtitle-4 font-semibold text-global-title sm:text-subtitle-3 md:text-subtitle-2">
              Add number of Doctors for credentialing
            </p>
            <div className="flex items-center gap-6 sm:gap-8">
              <div className="flex h-[32px] w-[32px] items-center justify-center sm:h-[18px] sm:w-[18px] md:h-[28px] md:w-[28px]">
                {doctorCounter == 1 ? (
                  <Image
                    src={MinusCircle}
                    className="w-full"
                    alt="reduce icon"
                  />
                ) : (
                  <Image
                    src={MinusIcon}
                    onClick={() => setDoctorCounter(doctorCounter - 1)}
                    className="w-full"
                    alt="reduce icon"
                  />
                )}
              </div>
              <text className="text-subtitle-3 font-semibold text-global-title ">
                {doctorCounter}
              </text>
              <div className="flex h-[32px] w-[32px] items-center justify-center sm:h-[18px] sm:w-[18px] md:h-[28px] md:w-[28px]">
                <Image
                  src={PlusCircle}
                  onClick={() => setDoctorCounter(doctorCounter + 1)}
                  className="w-full"
                  alt="reduce icon"
                />
              </div>
            </div>
          </div>
          <div className="flex w-[288px] items-center justify-center gap-6 border-grey-600 px-2 py-3 pt-4 max-sm:border-t sm:w-auto sm:border-l sm:px-10 ">
            <text className="text-heading-5 font-bold text-global-title">
              ${795 * doctorCounter}
            </text>
          </div>
        </div>
      </div>
    </>
  )
}
