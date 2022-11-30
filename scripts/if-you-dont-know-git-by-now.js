const main = () => {
  const userProfileFrame = document.getElementById("user-profile-frame");

  if (!userProfileFrame) return;

  const container = document.createElement("div");
  const title1 = document.createElement("h2");
  const title2 = document.createElement("h1");

  const containerStyles = [
    "display: flex",
    "flex-direction: column",
    "justify-content: center",
    "align-items: center",
    "margin-top: 2rem",
  ];

  container.style = containerStyles.join(";");

  title1.innerHTML = "IT MUST GONNA BE A";
  title2.innerHTML = "TOTAL ECLIPSE OF THE CODE";

  container.appendChild(title1);
  container.appendChild(title2);
  userProfileFrame.insertAdjacentElement("beforebegin", container);
};

main();
