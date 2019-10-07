// this code to get all the elements in the page with the attribute "VehModAccessories" and map in it to return the labe and text
[...document.querySelectorAll("[data-codelist='VehModAccessories'] label")].map(
  label => {
    return [label.getAttribute("for"), label.textContent];
  }
);
