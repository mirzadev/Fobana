import React, { useState } from "react";
import "./OnlinePaymentOptionsStyles.css";
import Fobana_Logo from "../../Assets/Cover/Fobana_Logo.png";
import membershipFee from "../../Assets/OnlinePayments/membershipFee-image.png";
import membershipQR from "../../Assets/OnlinePayments/QR-Code_2022_membership_fee.png";
import genFundImage from "../../Assets/OnlinePayments/GenFundDonation.png";
import genFundQR from "../../Assets/OnlinePayments/QR-Code-GenFund.png";
import reliefImage from "../../Assets/OnlinePayments/ReliefFunds.png";
import reliefQR from "../../Assets/OnlinePayments/QR-Code_emergency_relief_fund2.png";

function FobanaPaymentOption() {
  const [showQR, setShowQR] = useState(false);
  return (
    <div className="payment_Container">
      <div className="FOBANA_logo">
        <img id="Fobana-logo" src={Fobana_Logo} alt="FOBANA Logo" />
      </div>
      <h1 className="text-3xl font-bold mb-8 text-center">
        FOBANA ONLINE PAYMENTS
      </h1>

      {/* Three fund cards in a row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Membership Fee */}
        <div className="border rounded-2xl p-4 shadow-md text-center">
          <a
            href="https://www.paypal.com/donate/?business=fobanac@gmail.com&currency_code=USD"
            target="_blank"
            rel="noopener noreferrer"
            className="payment-Option"
          >
            <img
              src={membershipFee}
              alt="General Fund"
              className="mb-4 mx-auto"
            />
          </a>
          <button className="bg-blue-600 text-white px-2 py-2 rounded mb-4 w-full">
            <a
              href="https://www.paypal.com/donate/?business=fobanac@gmail.com&currency_code=USD"
              target="_blank"
              rel="noopener noreferrer"
              className="payment-Option"
            >
              Pay
            </a>
          </button>
          <div className="border rounded-2xl p-4 shadow-md text-center">
            <a
              href="https://www.paypal.com/donate/?business=fobanac@gmail.com&currency_code=USD"
              target="_blank"
              rel="noopener noreferrer"
              className="payment-Option"
            >
              <img
                src={membershipQR}
                alt="General Fund QR"
                className="mb-4 mx-auto"
              />
            </a>
          </div>
        </div>

        {/* General Fund */}
        <div className="border rounded-2xl p-4 shadow-md text-center">
          <a
            href="https://www.paypal.com/donate?token=VLLOxeIOdKGY0JXEDbO5JwEA-BtZsnK2SA6DO_zjAOtVWZwfqjFThlAhwZvWCltxRbtwIi1Gspb6UcRr"
            target="_blank"
            rel="noopener noreferrer"
            className="payment-Option"
          >
            <img
              src={genFundImage}
              alt="General Fund"
              className="mb-4 mx-auto"
            />
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4 w-full">
            <a
              href="https://www.paypal.com/donate?token=VLLOxeIOdKGY0JXEDbO5JwEA-BtZsnK2SA6DO_zjAOtVWZwfqjFThlAhwZvWCltxRbtwIi1Gspb6UcRr"
              target="_blank"
              rel="noopener noreferrer"
              className="payment-Option"
            >
              Donate
            </a>
          </button>
          <div className="border rounded-2xl p-4 shadow-md text-center">
            <a
              href="https://www.paypal.com/donate?token=VLLOxeIOdKGY0JXEDbO5JwEA-BtZsnK2SA6DO_zjAOtVWZwfqjFThlAhwZvWCltxRbtwIi1Gspb6UcRr"
              target="_blank"
              rel="noopener noreferrer"
              className="payment-Option"
            >
              <img
                src={genFundQR}
                alt="General Fund QR"
                className="mb-4 mx-auto"
              />
            </a>
          </div>
        </div>

        {/* Relief Fund */}
        <div className="border rounded-2xl p-4 shadow-md text-center">
          <a
            href="https://www.paypal.com/donate?token=hFOtQObMxAB_PMy_9WH4i3wqfI9aOQEXn-aFwrM2EumClsoQmwPHPBpZFhJ9Av9dDctedqmrHB0ISDfF"
            target="_blank"
            rel="noopener noreferrer"
            className="payment-Option"
          >
            <img
              src={reliefImage}
              alt="General Fund"
              className="mb-4 mx-auto"
            />
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4 w-full">
            <a
              href="https://www.paypal.com/donate?token=hFOtQObMxAB_PMy_9WH4i3wqfI9aOQEXn-aFwrM2EumClsoQmwPHPBpZFhJ9Av9dDctedqmrHB0ISDfF"
              target="_blank"
              rel="noopener noreferrer"
              className="payment-Option"
            >
              Donate
            </a>
          </button>
          <div className="border rounded-2xl p-4 shadow-md text-center">
            <a
              href="https://www.paypal.com/donate?token=hFOtQObMxAB_PMy_9WH4i3wqfI9aOQEXn-aFwrM2EumClsoQmwPHPBpZFhJ9Av9dDctedqmrHB0ISDfF"
              target="_blank"
              rel="noopener noreferrer"
              className="payment-Option"
            >
              <img
                src={reliefQR}
                alt="General Fund QR"
                className="mb-4 mx-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Executive Committee Nomination Fee Section */}
      <h2 className="text-2xl font-bold mb-4">
        FOBANA Exec. Committee Member Nomination Fee
      </h2>
      <div className="execOnline-container">
        <div className="border rounded-2xl p-6 shadow-md text-center">
          <p className="membership-dropdown">Select Your Membership</p>
          <select
            className="mb-4 px-4 py-2 border rounded w-full max-w-sm mx-auto"
            onChange={(e) => {
              const url = e.target.value;
              if (url) {
                window.open(url, "_blank"); // use "_self" if you want it to open in the same tab
              }
            }}
          >
            <option value="">Select an Option</option>
            <option value="https://www.paypal.com/ncp/payment/Q5L5D9ZJ95J9C">
              Chairperson/VC/Exec. Secy. - $500.00 USD
            </option>
            <option value="https://www.paypal.com/ncp/payment/Q5L5D9ZJ95J9C">
              Joint Exec. Secy./Treasurer - $300.00 USD
            </option>
            <option value="https://www.paypal.com/ncp/payment/Q5L5D9ZJ95J9C">
              Outstanding/Exec. Member - $100.00 USD
            </option>
          </select>

          {/* Payment options */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button>
              <a
                href="https://www.paypal.com/pay/checkout?atomic-event-state=eyJkb21haW4iOiJzZGtfcGF5cGFsX3Y1IiwiZXZlbnRzIjpbXSwiaW50ZW50IjoiY2xpY2tfcGF5bWVudF9idXR0b24iLCJpbnRlbnRUeXBlIjoiY2xpY2siLCJpbnRlcmFjdGlvblN0YXJ0VGltZSI6MzM3NCwidGltZVN0YW1wIjozMzc0LCJ0aW1lT3JpZ2luIjoxNzQ0MTYxNzk3NjQ5LjEsInRhc2siOiJzZWxlY3Rfb25lX3RpbWVfY2hlY2tvdXQiLCJmbG93Ijoib25lLXRpbWUtY2hlY2tvdXQiLCJ1aVN0YXRlIjoid2FpdGluZyIsInBhdGgiOiIvc21hcnQvYnV0dG9ucyIsInZpZXdOYW1lIjoicGF5cGFsLXNkayJ9&sessionID=uid_e1138983c7_mde6mdq6ndy&buttonSessionID=uid_16c28c0418_mde6mjm6mtc&stickinessID=uid_54ade97791_mdq6mte6mda&smokeHash=&sign_out_user=false&hostedButtonId=Q5L5D9ZJ95J9C&fundingSource=paypal&buyerCountry=US&locale.x=en_US&commit=true&client-metadata-id=uid_e1138983c7_mde6mdq6ndy&enableFunding.0=venmo&standaloneFundingSource=paypal&branded=true&token=8H753062HN843444B&clientID=BAAMzhzFUNDsXr_tjpd9IOBlbkM-spOvCSFZJjagYhssMAAwyxzwLN0hPIb-lQ-C45EHcRd2GRyIai8VIE&env=production&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9QkFBTXpoekZVTkRzWHJfdGpwZDlJT0JsYmtNLXNwT3ZDU0ZaSmphZ1loc3NNQUF3eXh6d0xOMGhQSWItbFEtQzQ1RUhjUmQyR1J5SWFpOFZJRSZjb21wb25lbnRzPWhvc3RlZC1idXR0b25zJmVuYWJsZS1mdW5kaW5nPXZlbm1vJmN1cnJlbmN5PVVTRCIsImF0dHJzIjp7ImRhdGEtdWlkIjoidWlkX25ld2h6Y3d1Z2hyZmRnZWlzc3F3dXR0Y3Vtb3pkdSJ9fQ&country.x=US&xcomponent=1&version=5.0.478&ssrt=1744161804770&ul=1"
                target="_blank"
                rel="noopener noreferrer"
                className="payment-Option"
              >
                PayPal
              </a>
            </button>
            <div className="text-center">
              {/* Venmo Button */}
              <button
                onClick={() => setShowQR(true)}
                className="bg-green-600 text-white px-6 py-2 rounded"
              >
                Venmo
              </button>

              {/* QR Code Display */}
              {showQR && (
                <div className="relative inline-block mt-6">
                  {/* QR Code Image */}
                  <img
                    src="/Venmo-QR-Code.png"
                    alt="Venmo QR Code"
                    className="rounded-[2rem] w-80 h-auto border shadow-lg"
                  />

                  {/* Close Icon (overlapping top-right corner of image) */}
                  <button
                    onClick={() => setShowQR(false)}
                    className="absolute top-1 right-1 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 hover:text-red-600 rounded-full p-1 text-xl font-bold"
                    aria-label="Close"
                  >
                    Close Venmo
                  </button>
                </div>
              )}
            </div>
            <button>
              <a
                href="https://www.paypal.com/pay/checkout?atomic-event-state=eyJkb21haW4iOiJzZGtfcGF5cGFsX3Y1IiwiZXZlbnRzIjpbXSwiaW50ZW50IjoiY2xpY2tfcGF5bWVudF9idXR0b24iLCJpbnRlbnRUeXBlIjoiY2xpY2siLCJpbnRlcmFjdGlvblN0YXJ0VGltZSI6MzM3NCwidGltZVN0YW1wIjozMzc0LCJ0aW1lT3JpZ2luIjoxNzQ0MTYxNzk3NjQ5LjEsInRhc2siOiJzZWxlY3Rfb25lX3RpbWVfY2hlY2tvdXQiLCJmbG93Ijoib25lLXRpbWUtY2hlY2tvdXQiLCJ1aVN0YXRlIjoid2FpdGluZyIsInBhdGgiOiIvc21hcnQvYnV0dG9ucyIsInZpZXdOYW1lIjoicGF5cGFsLXNkayJ9&sessionID=uid_e1138983c7_mde6mdq6ndy&buttonSessionID=uid_16c28c0418_mde6mjm6mtc&stickinessID=uid_54ade97791_mdq6mte6mda&smokeHash=&sign_out_user=false&hostedButtonId=Q5L5D9ZJ95J9C&fundingSource=paypal&buyerCountry=US&locale.x=en_US&commit=true&client-metadata-id=uid_e1138983c7_mde6mdq6ndy&enableFunding.0=venmo&standaloneFundingSource=paypal&branded=true&token=8H753062HN843444B&clientID=BAAMzhzFUNDsXr_tjpd9IOBlbkM-spOvCSFZJjagYhssMAAwyxzwLN0hPIb-lQ-C45EHcRd2GRyIai8VIE&env=production&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9QkFBTXpoekZVTkRzWHJfdGpwZDlJT0JsYmtNLXNwT3ZDU0ZaSmphZ1loc3NNQUF3eXh6d0xOMGhQSWItbFEtQzQ1RUhjUmQyR1J5SWFpOFZJRSZjb21wb25lbnRzPWhvc3RlZC1idXR0b25zJmVuYWJsZS1mdW5kaW5nPXZlbm1vJmN1cnJlbmN5PVVTRCIsImF0dHJzIjp7ImRhdGEtdWlkIjoidWlkX25ld2h6Y3d1Z2hyZmRnZWlzc3F3dXR0Y3Vtb3pkdSJ9fQ&country.x=US&xcomponent=1&version=5.0.478&ssrt=1744161804770&ul=1"
                target="_blank"
                rel="noopener noreferrer"
                className="payment-Option"
              >
                Checkout
              </a>
            </button>
          </div>

          {/* Card Icons */}
          <div className="mt-4 flex justify-center gap-2">
            <a
              href="https://www.paypal.com/pay/checkout?atomic-event-state=eyJkb21haW4iOiJzZGtfcGF5cGFsX3Y1IiwiZXZlbnRzIjpbXSwiaW50ZW50IjoiY2xpY2tfcGF5bWVudF9idXR0b24iLCJpbnRlbnRUeXBlIjoiY2xpY2siLCJpbnRlcmFjdGlvblN0YXJ0VGltZSI6MzM3NCwidGltZVN0YW1wIjozMzc0LCJ0aW1lT3JpZ2luIjoxNzQ0MTYxNzk3NjQ5LjEsInRhc2siOiJzZWxlY3Rfb25lX3RpbWVfY2hlY2tvdXQiLCJmbG93Ijoib25lLXRpbWUtY2hlY2tvdXQiLCJ1aVN0YXRlIjoid2FpdGluZyIsInBhdGgiOiIvc21hcnQvYnV0dG9ucyIsInZpZXdOYW1lIjoicGF5cGFsLXNkayJ9&sessionID=uid_e1138983c7_mde6mdq6ndy&buttonSessionID=uid_16c28c0418_mde6mjm6mtc&stickinessID=uid_54ade97791_mdq6mte6mda&smokeHash=&sign_out_user=false&hostedButtonId=Q5L5D9ZJ95J9C&fundingSource=paypal&buyerCountry=US&locale.x=en_US&commit=true&client-metadata-id=uid_e1138983c7_mde6mdq6ndy&enableFunding.0=venmo&standaloneFundingSource=paypal&branded=true&token=8H753062HN843444B&clientID=BAAMzhzFUNDsXr_tjpd9IOBlbkM-spOvCSFZJjagYhssMAAwyxzwLN0hPIb-lQ-C45EHcRd2GRyIai8VIE&env=production&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9QkFBTXpoekZVTkRzWHJfdGpwZDlJT0JsYmtNLXNwT3ZDU0ZaSmphZ1loc3NNQUF3eXh6d0xOMGhQSWItbFEtQzQ1RUhjUmQyR1J5SWFpOFZJRSZjb21wb25lbnRzPWhvc3RlZC1idXR0b25zJmVuYWJsZS1mdW5kaW5nPXZlbm1vJmN1cnJlbmN5PVVTRCIsImF0dHJzIjp7ImRhdGEtdWlkIjoidWlkX25ld2h6Y3d1Z2hyZmRnZWlzc3F3dXR0Y3Vtb3pkdSJ9fQ&country.x=US&xcomponent=1&version=5.0.478&ssrt=1744161804770&ul=1"
              target="_blank"
              rel="noopener noreferrer"
              className="payment-Option"
            >
              <img
                src="/various-card.png"
                alt="Visa"
                className="various-card"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FobanaPaymentOption;
