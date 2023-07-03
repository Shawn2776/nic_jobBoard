"use client";

import React, { useState } from "react";

function Job() {
  const [isVisible, setIsVisible] = useState(true);

  const showMoreInfo = () => setIsVisible(!isVisible);

  return (
    <section className="md:shadow-md md:hover:shadow-xl md:hover:cursor-pointer md:px-6 md:border-2 md:mt-2">
      <div
        className="mt-4 pt-2 px-8 md:flex md:justify-evenly md:mb-4 transition ease-in-out duration-600"
        onClick={showMoreInfo}
      >
        <p>
          <b>Type:</b>
          <br className="hidden md:flex" /> On-Campus NIC
        </p>
        <p>
          <b>Job Title:</b>
          <br className="hidden md:flex" /> Cashier/Merchandiser
        </p>
        <p>
          <b>Department:</b>
          <br className="hidden md:flex" /> -- None --
        </p>
        <p>
          <b>Location:</b>
          <br className="hidden md:flex" /> Follett-NIC Bookstore; On-Campus
        </p>
        <p>
          <b>Supervisor:</b>
          <br className="hidden md:flex" />{" "}
          <a href="mailto:sheila@gmail.com">Sheila Johnson</a>
        </p>
        <p>
          <b>Phone:</b>
          <br className="hidden md:flex" />{" "}
          <a href="tel:12087693364">(208) 769-3364</a>
        </p>
        <p>
          <b>Pay:</b>
          <br className="hidden md:flex" /> $14.00
        </p>
      </div>
      <div>
        <div
          className={
            isVisible
              ? "flex justify-center md:flex-col md:justify-center transition ease-in-out duration-600 md:ml-[45%]"
              : "hidden transition ease-in-out duration-600"
          }
          onClick={showMoreInfo}
        >
          <p className="border-2 px-4 py-2 bg-[#98002e] text-white mb-4 md:hover:cursor-pointer md:w-44 md:text-center">
            Show More Info
          </p>
        </div>
        <div
          className={
            isVisible
              ? "hidden transition ease-in-out duration-600"
              : "flex flex-col transition ease-in-out duration-600"
          }
          onClick={showMoreInfo}
        >
          <p>
            <b>Length of Employment:</b> Full Academic Year
          </p>
          <br />
          <p>
            <b>Department Description:</b>
            <br />
            Follett/NIC Cardinal Bookstores primary mission as a retail
            operation is to provide the textbooks, supplies, imprinted clothing,
            giftware and services needed by students, faculty, staff and
            visitors.
          </p>
          <br />
          <p>
            <b>Duties and Responsibilities:</b>
            <ul className="list-disc md:ml-4">
              <li>
                Operate cash register, accepting cash, credit or financial aid
                payments.
              </li>
              <li>
                Carry, shelve and straightens merchandise, stocks shelves,
                prices merchandise and may assist in setting up displays and
                signs.
              </li>
              <li>Pick, process and pack orders for shipping</li>
              <li>
                May provide customer service/sales functions for special events
                (including but not limited to graduation and athletic events)
              </li>
              <li>
                Support a store environment where all associates and customers
                are welcome
              </li>
            </ul>
          </p>
          <br />
          <p>
            <b>Desired Qualifications:</b>
            <br />
            Greet customers and provide customer service, both in-person and on
            the phone. Assist customers with the selection and purchasing of
            their required course materials. Process sales transactions and
            maintain an accurate cash drawer. Assist regular staff with stocking
            food, beverages, merchandise, and textbooks, as needed.
          </p>
          <br />
          <p>
            <b>Desired Skills:</b>
            <br />
            Strong customer service skills, communication skills; ask and answer
            questions in a clear manner, be reliable, friendly, and
            approachable, must be able to maintain confidentiality at all times
            and exercise a high level of professionalism, tact and diplomacy.
            Attention to detail. A willingness to work scheduled hours is
            required during high traffic times and peak periods.Basic
            technological proficiency. The ability to stand, walk and lift 15-25
            lbs. Visual ability to read price tag information. Ability to read
            the English language sufficient to read customer receipts,
            identification, computer screen and other similar written materials.
            Basic mathematical skills, including addition and subtraction, are
            necessary to verify cash register functions, balance cash register,
            make change, and assist with inventory counts. Sufficient manual
            dexterity in at least one hand to operate all cash registers and
            electronic equipment; manually complete paperwork; and unload,
            price, and stack merchandise. Visual ability, corrected, to enable
            the cashier to observe at a distance of 30 yards, verify customer
            identification, and read computer monitor and cashiering forms at
            close range.
          </p>
          <br />
          <p>
            <b>Educational Outcomes:</b>
            <ol className="list-decimal md:ml-4">
              <li>
                Gain knowledge of product and materials provided by the
                bookstore.
              </li>
              <li>
                Employees will gain cash handling and customer service skills.
              </li>
              <li>
                Learn the basics of merchandising, and product organization.
              </li>
              <li>
                Learn the basics of online ordering and receiving processes.
              </li>
              <li>
                Increase personal time management and multi-tasking skills.
              </li>
            </ol>
          </p>
          <div className="flex mt-4 mb-4 mx-auto">
            <p className="border-2 px-4 py-2 bg-[#98002e] text-white mb-4">
              Show Less Info
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Job;
