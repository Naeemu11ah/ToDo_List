let head_container = document.querySelector(".inside_head");
let final_screen = document.querySelector("#final_screen");
let add_btn = document.createElement("button");
let clear = document.querySelector(".clear");
let input = document.querySelector("#input");
let text_btn = document.createElement("input");
text_btn.placeholder = "Enter a Task ";
text_btn.type = "text";

head_container.addEventListener("click", () => {
  text_btn.classList.add("display");
  input.prepend(text_btn);
  add_btn.innerText = "Add";
  add_btn.classList.add("submit");
  input.append(add_btn);
});

add_btn.addEventListener("click", () => {
  if (text_btn.value === "") {
    return;
  } else {
    let checkbox_div = document.createElement("div");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "5px";
    let label = document.createElement("label");

    checkbox_div.classList.add("checkbox_container");
    label.innerText = text_btn.value.toUpperCase();

    final_screen.append(checkbox_div);
    checkbox_div.append(checkbox);
    checkbox_div.append(label);

    text_btn.value = "";
    input.innerText = "";

    checkbox.addEventListener("click", () => {
      label.classList.toggle("checkbox_clicked");
    });
  }
});

clear.addEventListener("click", () => {
  final_screen.innerHTML = "";
  input.innerHTML = "";
});
