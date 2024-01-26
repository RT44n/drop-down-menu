const menuController = () => {
  //Selects the drop down menu div
  const menu = document.querySelector(".menu");
  menu.style.display = "flex";
  menu.style.flexDirection = "column";
  menu.style.justifyContent = "center";
  menu.style.backgroundColor = "#020617";
  menu.style.color = "#cbd5e1";
  menu.style.width = "75px";

  //The drop down menu header
  const menuTitle = document.querySelector(".menuTitle");
  menuTitle.style.display = "flex";
  menuTitle.style.alignItems = "center";
  menuTitle.style.justifyContent = "center";
  menuTitle.style.fontWeight = "500";

  //Set the initial attribute of drop down menu items to none
  const menuDrop = document.querySelector(".menuDrop");
  menuDrop.style.display = "none";

  const menuItem = document.querySelectorAll(".menuItem");

  //function for when the mouse hovers over the menu header
  const menuDropEvent = () => {
    menu.style.backgroundColor = "#1e293b";
    menu.style.borderBottomLeftRadius = "10px";
    menu.style.borderBottomRightRadius = "10px";

    menuDrop.style.display = "block";
    menuDrop.style.margin = "0";
    menuDrop.style.listStyle = "none";
    menuDrop.style.padding = "4px";
    menuDrop.style.paddingBottom = "10px";

    menuTitle.style.color = "#f8fafc";
    menuTitle.style.fontWeight = "600";
    menuTitle.style.borderBottom = "4px solid #f8fafc";

    menuItem.forEach((item) => {
      item.style.padding = "4px";
    });
  };

  //function for when the mouse leaves the menu header
  const menuRetractEvent = () => {
    menu.style.backgroundColor = "#020617";
    menu.style.borderRadius = "0";

    menuDrop.style.display = "none";

    menuTitle.style.borderBottom = "0";
    menuTitle.style.fontWeight = "600";
    menuTitle.style.color = "#cbd5e1";
  };

  menuTitle.addEventListener("mouseenter", menuDropEvent);
  menuTitle.addEventListener("mouseleave", menuRetractEvent);
};

export { menuController };
