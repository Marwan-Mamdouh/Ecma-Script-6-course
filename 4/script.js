let table;
let areThereData = true;
async function fetchData() {
  try {
    const link = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(link, { method: "get" });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("invalid data");
  }
}

function displayTable(data, element, id) {
  if (data) {
    table = document.createElement("table");
    table.className = "table table-primary table-striped table-hover mb-0";
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    element.append(table);

    fillRow(tbody, data, id);
    if (areThereData) {
      fillHead(
        thead,
        data.then((prop) => prop[0])
      );
      table.append(thead);
      table.append(tbody);
    }
  } else {
    const h1 = document.createElement("h1");
    h1.innerText = "Invalid url";
    document.body.append(h1);
  }
}

function createRow() {
  return document.createElement("tr");
}

function createCells(row, user) {
  for (const item in user) {
    const cell = document.createElement("td");
    if (item !== "address" && item !== "company") {
      cell.textContent = user[item];
      row.append(cell);
    }
  }
}

function fillHeader(row, user) {
  const head = createRow();

  for (const item in user) {
    if (item !== "address" && item !== "company") {
      const cell = document.createElement("td");
      cell.textContent = item;
      head.append(cell);
    }
  }
  row.append(head);
}

function fillHead(element, user) {
  const row = createRow();
  user.then((props) => {
    for (const item in props) {
      if (item !== "address" && item !== "company") {
        const cell = document.createElement("td");
        cell.textContent = item;
        row.append(cell);
      }
    }
    element.append(row);
  });
}

function fillRow(element, data, id) {
  data.then((props) => {
    const arr = props.filter((item) => {
      return id ? item.id == id : true;
    });
    if (arr.length <= 0) {
      areThereData = false;
    }
    arr.map((user) => {
      const row = createRow();
      createCells(row, user);
      element.append(row);
      areThereData = true;
    });
  });
}

const div = document.querySelector("section");
div.className = "container mt-5";

const searchInput = document.createElement("input");
searchInput.placeholder = "search by ID";
searchInput.className =
  "mb-5 text-primary border-primary rounded p-2 focus-ring-primary focus-ring";

searchInput.addEventListener("input", (event) => {
  if (table) {
    // console.log(table);
    div.removeChild(table);
  }
  const id = event.target.value;
  displayTable(fetchData(), div, id);
});

div.prepend(searchInput);
