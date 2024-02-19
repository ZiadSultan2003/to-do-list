var selectedrow = null;
const container = document.querySelector(".container");
const form = document.querySelector("#student_form");
let student = document.querySelector("#student_list");
let input_submit = document.querySelector(".input_submit");
let Favorite = document.querySelector(".Favorite");
let row = document.createElement("tr");
const itemfavorite = document.getElementById("add_items_favorite");

//#region bind
function bind() {
  const input_text = document.querySelector("#input_text").value;

  let row = document.createElement("tr");
  row.classList.add("row", "justify-content-between", "col-12", "mb-3");
  row.innerHTML = `
      <td>${input_text}</td>
      <td>
       <button class="Favorite">
                <i class="fa-regular fa-star Favorite"></i>
      </button>
      <button class="btn btn-success Edit" id="edit">Edit</button>
      <button class="btn btn-danger delete">X</button>
      </td>`;
  student.appendChild(row);
}
//#endregion
// <input type="checkbox" id="checkbox1" class="line" name=""  /></td>

//#region add items
form.addEventListener("submit", (ele) => {
  ele.preventDefault();
  const input_text = document.querySelector("#input_text").value;
  if (input_text == "") {
  } else {
    if (input_text.trim().length > 0) {
      bind();
    }
    document.querySelector("#input_text").value = "";
  }
});
//#endregion
//#region serch items
const searchInput = document.querySelector("#search_input");
searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();
  const items = document.querySelectorAll(".row");
  items.forEach((item) => {
    const taskText = item
      .querySelector("td:nth-child(2)")
      .innerHTML.toLowerCase();
    if (taskText.includes(searchText)) {
      item.style.display = "table-row";
    } else {
      item.style.display = "none";
    }
  });
});
//#endregion
//#region delete
student.addEventListener("click", (ele) => {
  target = ele.target;
  if (
    target.classList.contains("delete") &&
    confirm("Are you sure you want to delete")
  ) {
    target.parentElement.parentElement.remove();
  }
});
//#endregion
//#region Edit
student.addEventListener("click", (ele) => {
  let target = ele.target;
  if (target.classList.contains("Edit")) {
    let selectedrow = target.parentElement.parentElement.children[0];
    console.log(selectedrow);
    document.querySelector("#input_text").value = selectedrow.innerHTML;
  }
});
//#endregion
//#region checkbox
student.addEventListener("click", (ele) => {
  let checkbox = document.querySelector(".line");
  let target = ele.target;
  if (target.classList.contains("line") && checkbox.checked) {
    let selectedrow = target.parentElement.parentElement.children[1];
    console.log(selectedrow);
    selectedrow.style.textDecoration = "line-through";
  } else {
    let selectedrow = target.parentElement.parentElement.children[1];
    selectedrow.style.textDecoration = "none";
  }
  // console.log("selectedrow");
});

//#endregion
//#region Favorite
student.addEventListener("click", (ele) => {
  target = ele.target;
  let Favorite = document.querySelector(".Favorite");
  if (target.classList.contains("Favorite")) {
    selectedrow = target.parentElement.parentElement.parentElement;
    selectedrow.classList.add("text-success");
    itemfavorite.appendChild(selectedrow);
  }
});
//#endregion
