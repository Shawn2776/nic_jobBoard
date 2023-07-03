import Image from 'next/image'
import Job from "./job/page";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="flex justify-center mt-10 mb-10 md:mx-auto">
        <h1 className="text-2xl">NIC Work-Study Job Board</h1>
      </div>
      <hr />
      <section className="mt-10 text-center">
        <p className="bg-[#98002e] text-white md:py-6 md:mx-auto md:w-[50%]">
          Additional work-study jobs are added weekly, so check back often for
          new opportunities.
        </p>
      </section>
      <section className="flex flex-col mt-6 space-y-3 px-8 mb-4 pb-4 border-b-2 md:mt-6 border-b-black md:flex-row md:space-x-4 md:border-b-2 md:my-auto md:mb-10">
        <div className="md:flex md:mt-7">
          <p>Filter By:</p>
        </div>
        <div className="space-y-4 md:space-x-4">
          <select className="border-2 rounded-md border-black">
            <option disabled selected>
              -- All Categories --
            </option>
          </select>
          <select className="border-2 rounded-md border-black">
            <option disabled selected>
              -- All Departments --
            </option>
          </select>
        </div>
      </section>
      <section className="md:my-8 flex flex-col mt-8">
        <Job />
        <hr />
        <Job />
      </section>
    </main>
  );
}
