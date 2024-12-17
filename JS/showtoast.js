// TOAST MESSAGE
export function showToast(message, type = "info") {
  const duration = 3000; // Fixed timeout duration in milliseconds

  let toastContainer = document.getElementById("toastContainer");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toastContainer";
    toastContainer.style.position = "fixed";
    toastContainer.style.bottom = "20px";
    toastContainer.style.right = "20px";
    toastContainer.style.zIndex = "9999";
    toastContainer.style.display = "flex";
    toastContainer.style.flexDirection = "column";
    toastContainer.style.gap = "10px";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.padding = "10px 20px";
  toast.style.color = "#fff";
  toast.style.borderRadius = "5px";
  toast.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
  toast.style.transition = "opacity 0.5s";
  toast.style.opacity = "1";

  if (type === "success") {
    toast.style.backgroundColor = "green";
  } else if (type === "error") {
    toast.style.backgroundColor = "red";
  } else if (type === "warning") {
    toast.style.backgroundColor = "orange";
  } else {
    toast.style.backgroundColor = "blue";
  }

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, duration);
}
// "success" , "error" , "info" , "warning"
