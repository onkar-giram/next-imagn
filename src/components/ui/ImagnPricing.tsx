import { useStore } from '@/store/useStore'

export default function ImagnPricing() {
  const {
    implementationPlan,
    softwarePlan,
    essentialBillingCounter,
    essentialSleepCounter,
    premiumBillingCounter,
    premiumSleepCounter
  } = useStore()
  return (
    <>
      {/* <div className="mt-20 flex items-center justify-center font-mulish">
        <div className="flex w-[320px] flex-col items-start justify-center rounded-t-lg sm:w-[536px] sm:bg-grey-100 md:w-[840px] lg:w-[1200px]">
          <div className="flex flex-col items-start justify-between bg-grey-100 px-6 pb-6 pt-10 max-sm:mb-1 max-sm:gap-6 max-sm:px-4 max-sm:py-6 sm:w-[488px] sm:flex-row sm:justify-between">
            <text className="text-subtitle-4 font-bold text-global-title max-sm:w-[288px] sm:w-[152px] ">
              Your Imagn Billing + Imagn Sleep Software
            </text>
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-4 pb-4">
                <div className="flex w-[288px] items-start justify-between">
                  <text className="w-[126px] text-body-4 font-normal text-global-brand-body">
                    Monthly charges
                  </text>
                  <div className="flex w-[134px] flex-col items-start gap-2">
                    <text className="w-[134px] text-subtitle-4 font-semibold text-global-title line-through">
                      $295/month
                    </text>
                    <text className="w-[134px] text-subtitle-4 font-semibold text-global-title">
                      (First 2 months free)
                    </text>
                  </div>
                </div>
                <div className="flex w-[288px] items-center justify-between">
                  <text className="w-[126px] text-body-4 font-normal text-global-brand-body">
                    One-time Setup fee
                  </text>
                  <text className="w-[134px] text-subtitle-4 font-semibold text-global-title">
                    $399
                  </text>
                </div>
                <div className="flex w-[288px] items-center justify-between">
                  <text className="w-[126px] text-body-4 font-normal text-global-brand-body">
                    Credentialing fee
                  </text>
                  <text className="w-[134px] text-subtitle-4 font-semibold text-global-title">
                    $795
                  </text>
                </div>
              </div>
              <div className="flex items-center justify-between max-sm:w-[288px]">
                <text className="w-[126px] text-body-4 font-normal text-global-brand-body">
                  Total
                </text>
                <text className="w-[134px] text-subtitle-4 font-semibold text-global-title">
                  $1194
                </text>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between bg-grey-100 px-6 pb-6 max-sm:mb-1 max-sm:gap-6 max-sm:px-4 max-sm:py-6 sm:w-[488px] sm:flex-row">
            <text className="w-[288px] text-subtitle-4 font-bold text-global-title sm:w-[152px]">
              With Essential Implementation Package
            </text>
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-4 pb-4">
                <div className="flex w-[288px] items-center justify-between">
                  <text className="w-[126px] font-normal text-global-brand-body ">
                    One-time price
                  </text>
                  <text className="w-[134px] text-subtitle-4 font-semibold text-global-title">
                    $2995
                  </text>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between bg-grey-100 px-6 pb-6 max-sm:mb-1 max-sm:gap-6 max-sm:px-4 max-sm:py-6 sm:w-[488px] sm:flex-row">
            <text className="w-[288px] text-subtitle-4 font-bold text-global-title sm:w-[152px]">
              With Medical Billing + Sleep Medicine Support
            </text>
            <div className="flex w-[288px] items-center justify-between">
              <text className="w-[126px] font-normal text-global-brand-body ">
                Monthly charges
              </text>
              <div className="flex w-[134px] flex-col items-start gap-2">
                <text className="w-[134px] text-subtitle-4 font-semibold text-global-title line-through">
                  $295/month
                </text>
                <text className="w-[134px] text-subtitle-4 font-semibold text-global-title">
                  (First 2 months free)
                </text>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className=" flex flex-col items-center  font-mulish ">
        <div className="border-t-2 border-dashed border-global-title">
          <div className="sm:w-[536px bg-grey-100] ld:w-[1000px] mt-10 flex w-[320px]   flex-col  bg-grey-100 sm:w-[536px] sm:flex-row md:w-[840px] lg:w-[1000px]  xl:w-[1126px] ">
            <p className="mx-4 mt-3 pt-3 text-subtitle-4 font-bold sm:w-[152px] md:w-[250px] lg:w-[278px] xl:w-[436px]  ">
              Your Imagn Billing + Imagn Sleep Software
            </p>
            <table className="mx-4 mt-5 sm:w-[312px] md:w-[502px] lg:w-[496px]">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="py-2 text-body-4 text-global-brand-body">
                    Monthly charges
                  </td>
                  <td>
                    <p className=" ml-2 pb-1 pt-2 text-subtitle-4 font-semibold text-global-title">
                      $295/month
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-body-4 text-global-brand-body"> </td>
                  <td>
                    <p className="ml-2 pb-2 pt-1 text-subtitle-4 font-semibold text-global-title">
                      (First 2 months free)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-body-4 text-global-brand-body">
                    One time setup fee
                  </td>
                  <td>
                    <p className="ml-2 py-2 text-subtitle-4 font-semibold text-global-title">
                      $399
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-body-4 text-global-brand-body">
                    Credentialing Setup
                  </td>
                  <td>
                    <p className="ml-2 py-2 text-subtitle-4 font-semibold text-global-title">
                      $795
                    </p>
                  </td>
                </tr>
                <tr className="border-t border-grey-400 ">
                  <td className=" pb-2  pt-4 text-body-4 text-global-brand-body">
                    Total
                  </td>
                  <td className="border-t border-grey-400 ">
                    <p className="ml-2  pb-2 pt-4 text-subtitle-4 font-semibold text-global-title">
                      $1194
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-2 flex w-[320px] flex-col bg-grey-100 sm:mt-0 sm:w-[536px] sm:flex-row sm:py-2 md:w-[840px] lg:w-[1000px]  xl:w-[1126px]">
            <p className="mx-4 pt-3 text-subtitle-4 font-bold sm:w-[152px] md:w-[250px] lg:w-[278px] xl:w-[436px] ">
              {`With ${
                implementationPlan == 'premium' ? 'Premium' : 'Essential'
              } Implementation Package`}
            </p>
            <table className="mx-4 mt-5 sm:w-[312px] md:w-[502px] lg:w-[496px]">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="w-[140px] py-2 text-body-4 text-global-brand-body">
                    Monthly charges
                  </td>
                  <td>
                    <p className=" sm:ml-30  ml-2 pb-1 pt-2 text-subtitle-4 font-semibold text-global-title md:ml-[106px] lg:ml-[97px]">
                      {softwarePlan == 'basic'
                        ? implementationPlan == 'essential'
                          ? '$1,995'
                          : '$11,995'
                        : implementationPlan == 'essential'
                          ? essentialBillingCounter && essentialSleepCounter
                            ? '$2,995'
                            : '$1,995'
                          : premiumBillingCounter && premiumSleepCounter
                            ? '$15,995'
                            : '$11,195'}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-2 flex w-[320px] flex-col bg-grey-100 pb-3 sm:mt-0 sm:w-[540px] sm:flex-row sm:py-2 sm:pb-6 md:w-[836px] lg:w-[1000px]  xl:w-[1126px]">
            <p className="mx-4 pt-3 text-subtitle-4 font-bold sm:w-[152px] md:w-[250px] lg:w-[278px] xl:w-[436px] ">
              With Medical Billing + Sleep Medicine Support
            </p>
            <table className="mx-4 mt-5 sm:mt-0 sm:w-[312px] md:w-[502px] lg:w-[496px]">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="py-2  text-body-4 text-global-brand-body ">
                    Monthly charges
                  </td>
                  <td>
                    <p className="ml-2 pt-2 text-subtitle-4 font-semibold text-global-title sm:ml-4 md:ml-20">
                      $300 / month <br /> (First 2 months free)
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-2 flex w-[320px] justify-center bg-global-im-bg-1 sm:mt-0 sm:w-[536px] sm:flex-row sm:justify-end sm:py-2 md:w-[836px] md:justify-center lg:w-[1000px]  lg:justify-end xl:w-[1126px]">
            <div className="flex flex-col items-center sm:w-[336px]  md:ml-[300px] lg:mr-60  ">
              <table className="mx-4 mb-2 mr-[100px] mt-5 sm:ml-24  sm:w-[312px] md:ml-[60px] md:w-[502px]  lg:w-[496px] xl:ml-[130px]">
                <thead></thead>
                <tbody>
                  <tr>
                    <td className="w-[140px] py-2 text-body-4 text-global-brand-body">
                      Total Due Date
                    </td>
                    <td>
                      <p className=" sm:ml-30  ml-2 pb-1 pt-2 text-subtitle-4 font-semibold text-global-title md:ml-[106px]">
                        {softwarePlan == 'basic'
                          ? implementationPlan == 'essential'
                            ? '$3,295'
                            : '$13,285'
                          : implementationPlan == 'essential'
                            ? essentialBillingCounter && essentialSleepCounter
                              ? '$4,485'
                              : '$3,585'
                            : premiumBillingCounter && premiumSleepCounter
                              ? '$17,585'
                              : '$13,585'}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[140px] py-2 text-body-4 text-global-brand-body">
                      Monthly charges
                    </td>
                    <td>
                      <p className=" sm:ml-30  ml-2 pb-1 pt-2 text-subtitle-4 font-semibold text-global-title md:ml-[106px]">
                        $4535
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-col md:mr-[25px] md:flex-row lg:ml-[160px] lg:mr-[180px] xl:ml-[220px]">
                <button className="my-2 h-12 w-[288px] self-center rounded-md bg-gradient-to-r from-im-800 to-im-400 text-[18px] font-bold text-white sm:mr-7 sm:w-[312px] md:w-[229px] lg:w-[241] ">
                  Contact Sales
                </button>
                <button className=" my-2 h-12 w-[288px] self-center rounded-md border border-im-link text-[18px] font-bold text-im-link sm:mr-7 sm:w-[312px] md:w-[229px] lg:w-[241]">
                  Schedule a Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20 mt-7 flex  justify-center font-mulish">
        <div className="flex h-[174px] w-[320px] flex-col items-center justify-center rounded-md   bg-grey-100 sm:h-[134px] sm:w-[536px] md:h-[134px] md:w-[840px] lg:w-[1000px] xl:h-[69px] xl:w-[1126px] ">
          <div className=" mx-5 flex flex-col items-center justify-center   space-y-2  xl:mx-0 xl:flex-row xl:gap-6">
            <p className="items-centers mr-3 mt-3 flex justify-center text-center text-[16px] text-subtitle-3 font-semibold text-global-brand-body underline xl:mr-0">
              Still not sure, if medical billing is right for your practice?
            </p>

            <p className="items-centers mr-3 mt-3 flex justify-center text-center text-[18px] text-subtitle-4 font-bold text-im-link underline xl:mr-0">
              Take Our Free Assessment
            </p>

            <p className="  text-center text-[16px] font-semibold text-global-brand-body ">
              & see the ROI & why medical billing makes sense
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
