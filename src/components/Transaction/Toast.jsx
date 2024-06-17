import { CToast, CToastHeader, CToastBody } from "@coreui/react";

// eslint-disable-next-line react/prop-types
function Toast({ status }) {
  if (!status) return null;

  const toastColor = status === "ok" ? "#28a745" : "#dc3545"; // Green for success, red for error
  const toastMessage =
    status === "ok"
      ? "Transaction submitted successfully!"
      : "Failed to submit transaction.";

  return (
    <CToast
      className=" rounded-setup p-4 bg-2 text-white absolute right-0"
      autohide={true}
      visible={true}
    >
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill={toastColor}></rect>
        </svg>
        <div className="fw-bold me-auto">Transactions</div>
        <small>just now</small>
      </CToastHeader>
      <CToastBody>{toastMessage}</CToastBody>
    </CToast>
  );
}

export default Toast;
