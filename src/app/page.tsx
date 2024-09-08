import Image from "next/image";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* hero section  */}
      <section className="lg:container m-auto px-2">
        <div className="grid md:grid-cols-2 my-[40px] md:my-[130px]">
          <div>
            <h1 className="font-[roc-wide] leading-[60px] tracking-widest uppercase text-5xl text-[#160e41]">
              Enroll providers with payers. Fast. with <span className="text-[#5d927c]">Plyhealth</span>
            </h1>

            <p className="mt-11 font-[400] text-xl">
              Eliminate administrative headache and bill more with 70% fewer days to in network status.
            </p>

            <div className="mt-11 flex items-center gap-7">
              <Button
                href="/demo"
                preset="primary"
                text="Request Demo"
                size="xl"
              />

              <div className="w-[2px] h-[30px] bg-[#ccc]"></div>

              <div>
                <h5 className="font-[600] text-[14px]">Backed by</h5>
                <img className="w-[130px]" src="https://framerusercontent.com/images/d1R9AwP9XnlEyZvL7QrRzMYH5A.png" alt="" />
              </div>
            </div>
          </div>

          <div className="lg:w-[115%] hidden md:block md:mt-[-50px]">
            <Image
              width={0}
              className="object-contain w-[100%] h-[auto]"
              height={0}
              sizes="100%"
              src={'https://framerusercontent.com/images/BhmN9SQdeJddEXoqNTBxBKnmtd0.png?lossless=1'}
              alt="hero"
            />
          </div>
        </div>
      </section>


      <section className="mb-[130px]">
        <div className="lg:container m-auto px-2">

          <div className="flex justify-around overflow-x-scroll overflow-y-hidden py-11 gap-3">
            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[150px] p-6 shadow-xl min-w-[150px] w-[150px] rounded-full">
              <img src="https://framerusercontent.com/images/z2xx6nATDqM6XREt0ucbwDCPfpg.png?lossless=1" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[150px] p-6 shadow-xl  min-w-[150px] w-[150px] rounded-full">
              <img src="https://framerusercontent.com/images/wY9RIxgLiXyXjSxIO9GUAmsDBuc.png?lossless=1" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[150px] p-6 shadow-xl  min-w-[150px] w-[150px] rounded-full">
              <img src="https://framerusercontent.com/images/Uj4C6y711Y0m6sLNpnxguEVcsA.png?lossless=1" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[150px] p-6 shadow-xl  min-w-[150px] w-[150px] rounded-full">
              <img src="https://framerusercontent.com/images/Aq1YUSgWQhugL0e6V65qsh56w.png?lossless=1" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[150px] p-6 shadow-xl  min-w-[150px] w-[150px] rounded-full">
              <img src="https://framerusercontent.com/images/eHLgawarL07Kd6ynZxUPkTQ6Y0.png?lossless=1" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[150px] p-6 shadow-xl  min-w-[150px] w-[150px] rounded-full">
              <img src="https://framerusercontent.com/images/QyzhIE3BkkW4aW0MxWhEixYTbSo.png?scale-down-to=1024&lossless=1" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[150px] p-6 shadow-xl  min-w-[150px] w-[150px] rounded-full">
              <img src="https://framerusercontent.com/images/s2ypBqG4b7jxy8ZDOPmz3AGBTQk.png?scale-down-to=1024&lossless=1" alt="" />
            </div>

          </div>
        </div>
      </section>


      <section className="mb-[80px] lg:mb-[200px]">
        <div className="lg:container m-auto px-2">
          <div className="text-center pb-6">
            <h2 className="text-4xl font-[roc-wide] text-[#160e41]">Is <span className="text-[#5d927c]">Ply</span> right for my organization?</h2>
            <p className="text-lg mt-2">Ply works with behavioral health practices of all sizes and specialties.</p>
          </div>

          <div className="px-4 pt-9 grid md:grid-cols-3 md:pt-[150px] gap-10">
            <div className="glossy-card relative">
              <div className="absolute top-[-15px] left-[-15px]">
                <img className="w-[60px] shadow-xl shadow-[#5d927c63] rounded-full" src="https://framerusercontent.com/images/6J8qq3CP85WMDvWDjsiLDc49NWM.png?lossless=1" alt="" />
              </div>

              <h3 className="font-[roc-wide] text-[#160e41] text-2xl">Digital telehealth</h3>

              <p className="mt-2">Enter provider data once and get in network with payers nation-wide.</p>
            </div>

            <div className="md:mt-[-80px]">
              <div className="glossy-card relative">
                <div className="absolute top-[-15px] left-[-15px]">
                  <img className="w-[60px] shadow-xl shadow-[#5d927c63] rounded-full" src="https://framerusercontent.com/images/WTDkmewiY9bIhoKjLYOaYjCPSkY.png?lossless=1" alt="" />
                </div>

                <h3 className="font-[roc-wide] text-[#160e41] text-2xl">Managed service organization (MSO)</h3>

                <p className="mt-2">Enter provider data once and get in network with payers nation-wide.</p>
              </div>
            </div>

            <div className="glossy-card relative">
              <div className="absolute top-[-15px] left-[-15px]">
                <img className="w-[60px] shadow-xl shadow-[#5d927c63] rounded-full" src="https://framerusercontent.com/images/ivA1CzAdVq3nb0zszap062ZOxqk.png?lossless=1" alt="" />
              </div>

              <h3 className="font-[roc-wide] text-[#160e41] text-2xl">Traditional clinic</h3>

              <p className="mt-2">Enter provider data once and get in network with payers nation-wide.</p>
            </div>


          </div>
        </div>
      </section>

      <section className="mb-[150px]">
        <div className="lg:container m-auto px-2">
          <div className="text-center pb-7">
            <h2 className="text-4xl font-[roc-wide] text-[#160e41]">How does <span className="text-[#5d927c]">Ply</span> work?</h2>
          </div>


          <div className="flex gap-11 mt-11">
            <div className="relative">
              <div className="absolute left-[50%] translate-x-[-50%] shadow bg-[#fafafa] w-[15px] h-[15px] border-[#5d927c] border-[4px] rounded-full"></div>
              <div className="h-[100%] w-[2px] bg-[#0505050f]"></div>

              <div className="absolute bottom-0 left-[50%] translate-x-[-50%] shadow bg-[#fafafa] w-[15px] h-[15px] border-[#5d927c]  border-[4px] rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-11 py-11">
              <div className="my-auto">
                <div className="self-start">
                  <h3 className="text-2xl uppercase font-[roc-wide] text-[#160e41]">One click apply</h3>
                  <div className="h-[5px] w-[60px] border-b-[3px] border-[#5d927c]"></div>
                </div>
                <p className="mt-5">
                  Onboard your data one time, apply for as many payers as you’d <br /> like with a click.
                </p>

                <div className="mt-5">
                  <Button
                    href="/demo"
                    preset="secondary"
                    text="Request Demo"
                  />
                </div>
              </div>
              <div>
                <Image
                  width={0}
                  height={0}
                  className="w-[100%]"
                  sizes="100%"
                  alt=""
                  src={'https://framerusercontent.com/images/NDbir1K5XkSl4YmWrDmkxf9W0I.png?scale-down-to=1024&lossless=1'}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-11">
            <div className="relative">
              <div className="h-[100%] w-[2px] bg-[#0505050f]"></div>
              <div className="absolute bottom-0 left-[50%] translate-x-[-50%] shadow bg-[#fafafa] w-[15px] h-[15px] border-[#5d927c]  border-[4px] rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-11 py-11">
              <div>
                <Image
                  width={0}
                  height={0}
                  className="w-[100%]"
                  sizes="100%"
                  alt=""
                  src={'https://framerusercontent.com/images/txXdjecJD8L9joDzIBWAzuoKpc.png?scale-down-to=1024&lossless=1'}
                />
              </div>

              <div className="my-auto">
                <div className="self-start">
                  <h3 className="text-2xl uppercase font-[roc-wide] text-[#160e41]">Monitor in real-time</h3>
                  <div className="h-[5px] w-[60px] border-b-[3px] border-[#5d927c]"></div>
                </div>
                <p className="mt-5">
                  Monitor the process of all enrolments in real-time through the Ply Health dashboard.
                </p>

                <div className="mt-5">
                  <Button
                    href="/demo"
                    preset="secondary"
                    text="Request Demo"
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="flex gap-11">
            <div className="relative">
              <div className="h-[100%] w-[2px] bg-[#0505050f]"></div>

              <div className="absolute bottom-0 left-[50%] translate-x-[-50%] shadow bg-[#fafafa] w-[15px] h-[15px] border-[#5d927c]  border-[4px] rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-11 py-11">
              <div className="my-auto">
                <div className="self-start">
                  <h3 className="text-2xl uppercase font-[roc-wide] text-[#160e41]">Get in network fast</h3>
                  <div className="h-[5px] w-[60px] border-b-[3px] border-[#5d927c]"></div>
                </div>
                <p className="mt-5">
                  Ply’s data checks, AI submission and programmatic follow-up ensures that you get in network ASAP.
                </p>

                <div className="mt-5">
                  <Button
                    href="/demo"
                    preset="secondary"
                    text="Request Demo"
                  />
                </div>
              </div>
              <div>
                <Image
                  width={0}
                  height={0}
                  className="w-[100%]"
                  sizes="100%"
                  alt=""
                  src={'https://framerusercontent.com/images/BSYdycPUiWRpsPAllUHcM5uTjQ0.png?scale-down-to=1024&lossless=1'}
                />
              </div>
            </div>
          </div>



        </div>
      </section>


      <section className="my-[140px]">
        <div className="lg:container m-auto px-2">

          <div className="text-center">
            <h2 className="text-4xl font-[roc-wide] text-[#160e41]">We work with payers in all 50 states.</h2>
          </div>

          <div className="flex justify-around overflow-x-scroll overflow-y-hidden py-11  gap-3">
            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[150px] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] rounded-full">
              <img src="https://framerusercontent.com/images/k8fYZgkzEG5UOJNqCHGdzXJeoTA.png?lossless=1" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[150px] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] rounded-full">
              <img src="https://framerusercontent.com/images/Ujzqa6FaJ5FzvnQeMMm06l5SPyo.png?lossless=1" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[150px] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] rounded-full">
              <img src="https://framerusercontent.com/images/LJifuQJXbwmRUkh50COz3faX4DQ.png?lossless=1" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[150px] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] rounded-full">
              <img src="https://framerusercontent.com/images/b7FvVPaFNkTu1SAecqIbOh45Tk.png?lossless=1" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[150px] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] rounded-full">
              <img src="https://framerusercontent.com/images/jkC59ACtitUAV4MrxgYyJnTRpUk.png?lossless=1" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[150px] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] rounded-full">
              <img src="https://framerusercontent.com/images/aO6o1U3sorthcXKRBo5Qe2fUc.png?lossless=1" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[150px] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] rounded-full">
              <img src="https://framerusercontent.com/images/UqaUBYpNE15V57y2qTFoLQSQO0M.png?lossless=1" alt="" />
            </div>

          </div>
        </div>
      </section>


      <section className="mb-[150px]">
        <div className="lg:container m-auto px-2">
          <div className="text-center pb-11">
            <h2 className="text-4xl font-[roc-wide] text-[#160e41]">What our customers are saying:</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-9 md:gap-5 pt-6">

            <div className="glossy-card">
              <Image src={require('./assets/quote.svg')} width={70} height={70} alt="" />

              <p className="mt-5">"Working with ... Ply has been a pleasure. They're very professional and communicative, and their technology platform makes the process of contracting and credentialing seamless."</p>

              <div className="flex gap-4 items-center mt-8">
                <img className="w-[60px] h-[60px] rounded-full border-[2px] border-[#5d927c]" src="https://framerusercontent.com/images/VmF9H68i6p1eCyhBVtC9mP3mOY.png?lossless=1" alt="" />

                <div className="leading-[17px]">
                  <p className="font-[500]">Aimun Malik</p>
                  <p className="text-[#30394e80] text-[13px]">Chief Executive Officer at ANNA</p>
                </div>
              </div>
            </div>

            <div className="glossy-card">
              <Image src={require('./assets/quote.svg')} width={70} height={70} alt="" />

              <p className="mt-5">"Working with ... Ply has been a pleasure. They're very professional and communicative, and their technology platform makes the process of contracting and credentialing seamless."</p>

              <div className="flex gap-4 items-center mt-8">
                <img className="w-[60px] h-[60px] rounded-full border-[2px] border-[#5d927c]" src="https://framerusercontent.com/images/iRKYy28KafVvkQxIjiDpHWlk.png" alt="" />

                <div className="leading-[17px]">
                  <p className="font-[500]">Yash M. Patel</p>
                  <p className="text-[#30394e80] text-[13px]">Co-Founder & CEO at Legion Health</p>
                </div>
              </div>
            </div>

            <div className="glossy-card">
              <Image src={require('./assets/quote.svg')} width={70} height={70} alt="" />

              <p className="mt-5">"Working with ... Ply has been a pleasure. They're very professional and communicative, and their technology platform makes the process of contracting and credentialing seamless."</p>

              <div className="flex gap-4 items-center mt-8">
                <img className="w-[60px] h-[60px] rounded-full border-[2px] border-[#5d927c]" src="https://framerusercontent.com/images/jvdYy5eX8dzVk3W7VuUC9Z4GV4.jpeg?lossless=1" alt="" />

                <div className="leading-[17px]">
                  <p className="font-[500]">Nicola Brummer</p>
                  <p className="text-[#30394e80] text-[13px]">Provider Account Manager at Finni</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      <footer>
        <div className="bg-[#fff]">
          <div className="lg:container m-auto py-5 px-2">
            <div className="py-11 grid grid-cols-2 md:grid-cols-3 gap-11">
              <div>
                <Image src={require('./assets/logo.svg')} alt="logo" />
                <p className="text-[#000000]/[0.7] text-[14px] mt-5">Ply helps behavioral health providers (e.g. therapists, social workers, psychiatrists) see more patients by getting them in network with insurance companies like Aetna or Medicaid. Ply submits enrollments 2x faster using automation and AI enabled data validation.</p>

                <div className="mt-8">
                  <Button
                    href="/demo"
                    preset="primary"
                    text="Request Demo"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-[roc-wide] mb-1">Other Links</h4>
                <Link href='/https://www.ycombinator.com/companies/ply-health' className="font-[500] text-[#000]/[0.5] text-[14px]">Career</Link>
              </div>

              <div className="col-span-2 md:col-span-1">
                <h4 className="font-[roc-wide] mb-3">Our Solution</h4>
                <img className="rounded-[20px] h-[200px]" src="https://lh7-us.googleusercontent.com/docsz/AD_4nXcMXSY2xKtBcO4T1bMrr_zU44eg-Shd1X_9JaM3loR6QgKdsuVHkOByIopdf09h2mBDLkIN563IS6LnLwhLnwQrvpoJKiG3qxYI6sAyIFgs6VCP0o-Eq-Y4niQc9koDRqzATtjI71T-pZFVZCBWP1jRbrE?key=qI7khypm2_NJ8SwqwOuqbw" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f0f5fc]">
          <div className="lg:container m-auto py-4 px-2">
            <p className="text-[#bab4dd] text-[12px] font-[500]">© Ply Health, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
