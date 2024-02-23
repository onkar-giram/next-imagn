import React from 'react'
import ShowIcon from '../../assets/showicon.svg'

export default function FeatureTable() {
  return (
    <>
      <div className="mx-5 mt-12 flex flex-col items-center font-mulish">
        <div className="mx-[8px] my-[24px] w-[320px] sm:my-0 sm:w-[536px] md:w-[840px] lg:w-[1000px] xl:w-[1126px]">
          <div className="overflow-x-auto ">
            <table className="mx-5 min-w-full divide-y divide-gray-200">
              <thead className="h-[100px]  w-[500px]">
                <tr className="h-[100px]">
                  <th className="sticky left-0 z-10 bg-white py-[24px] text-subtitle-4 font-semibold text-global-feature-heading ">
                    <div className="flex w-[213px] items-center sm:w-[260px] md:w-[420px] ">
                      <p className="ml-5">
                        Feature Comparison
                        <span></span>
                      </p>
                    </div>
                  </th>
                  <th className=" w-[120px] py-[24px] text-subtitle-4  font-semibold tracking-wider text-global-title sm:w-[180px] md:w-[232px] lg:w-[272px]">
                    <p className="mx-2 w-[72px] ">Imagn Billing</p>
                  </th>
                  <th className=" border-im-swatches-brand-accent mx-[4px]  w-[120px] border-t-4 bg-global-feature-background py-[24px] text-subtitle-4  font-semibold tracking-wider text-global-title md:w-[232px] lg:w-[272px]">
                    <p className="w-[72px]  px-5">
                      Imagn Billing + Imagn Sleep
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody
                className={`divide-y divide-gray-200 bg-white text-body-4 `}
              >
                <tr className="min-h-[120px]">
                  <td className="sticky left-0 z-10 flex items-center bg-white px-6 py-4 sm:w-[215px] md:w-[310px] lg:w-[390px] ">
                    Easy access to common ICD codes so you don’t have to
                    memorize!0
                    <span className="ml-auto"></span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span></span>
                  </td>
                  <td className="whitespace-nowrap bg-global-feature-background px-6  py-4 ">
                    <span></span>
                  </td>
                </tr>
                <tr className="min-h-[120px]">
                  <td className="sticky left-0 z-10 flex items-center bg-white px-6 py-4 sm:w-[215px] md:w-[310px] lg:w-[390px] ">
                    Real-time tracking and updates between insurance companies,
                    the billing team, and your practice.
                    <span className="ml-auto"></span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span></span>
                  </td>
                  <td className="whitespace-nowrap bg-global-feature-background px-6  py-4 ">
                    <span></span>
                  </td>
                </tr>
                <tr className="min-h-[120px]">
                  <td className="sticky left-0 z-10 flex items-center bg-white px-6 py-4 sm:w-[215px] md:w-[310px] lg:w-[390px] ">
                    <p>
                      Access to Imagn 3rd Party Billing*
                      <span className="block text-grey-400">
                        *Additional feels apply
                      </span>
                    </p>
                    <span className="ml-auto"></span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span></span>
                  </td>
                  <td className="whitespace-nowrap bg-global-feature-background px-6  py-4 ">
                    <span></span>
                  </td>
                </tr>
                <tr className="min-h-[120px]">
                  <td className="sticky left-0 z-10 flex items-center bg-white px-6 py-4 sm:w-[215px] md:w-[310px] lg:w-[390px] ">
                    Easy access to common ICD codes so you don’t have to
                    memorize!
                    <span className="ml-auto"></span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span></span>
                  </td>
                  <td className="whitespace-nowrap bg-global-feature-background px-6  py-4 ">
                    <span></span>
                  </td>
                </tr>
                <tr className="min-h-[120px]">
                  <td className="sticky left-0 z-10 flex items-center bg-white px-6 py-4 sm:w-[215px] md:w-[310px] lg:w-[390px] ">
                    No contract
                    <span className="ml-auto"></span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span></span>
                  </td>
                  <td className="whitespace-nowrap bg-global-feature-background px-6  py-4 ">
                    <span></span>
                  </td>
                </tr>
                <tr className="min-h-[120px]">
                  <td className="sticky left-0 z-10 flex items-center bg-white px-6 py-4 sm:w-[215px] md:w-[310px] lg:w-[390px] ">
                    Self scoring sleep screening
                    <span className="ml-auto"></span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <p className="ml-auto text-center text-[18px] text-subtitle-2 font-semibold">
                      -
                    </p>
                  </td>
                  <td className="whitespace-nowrap bg-global-feature-background px-6  py-4 ">
                    <span></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" mx-[8px] flex w-[320px] items-center justify-around  sm:my-0 sm:w-[536px]  md:w-[840px] md:justify-start lg:w-[1000px] xl:w-[1126px]">
          <p className=" font-regular mt-3 w-[175px] text-global-title sm:w-auto md:ml-5 xl:ml-6 ">
            Not sure which software plan is best for you?
          </p>
          <span className="text-im-swatches-link mt-5 text-center text-[16px] font-bold underline md:ml-10 xl:ml-12">
            Learn more
          </span>
        </div>
      </div>
    </>
  )
}
