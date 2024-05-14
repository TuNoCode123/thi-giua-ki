const cars = [
  {
    loaiXe: "vios",
    imagine:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXrEY1sljBuNXNCyOREgwPmYBnFF_p9SFKnoBRKwqYw&s",
    soCho: "4",
    price: "4",
  },
  {
    loaiXe: "camry",
    imagine:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXrEY1sljBuNXNCyOREgwPmYBnFF_p9SFKnoBRKwqYw&s",
    soCho: "4",
    price: "4",
  },
  {
    loaiXe: "kiamoning",
    imagine:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXrEY1sljBuNXNCyOREgwPmYBnFF_p9SFKnoBRKwqYw&s",
    soCho: "4",
    price: "4",
  },
  {
    loaiXe: "bmw",
    imagine:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXrEY1sljBuNXNCyOREgwPmYBnFF_p9SFKnoBRKwqYw&s",
    soCho: "4",
    price: "4",
  },
];
const card = document.querySelector(".card");
const ul = document.createElement("div");
ul.classList.add("list-item");
for (let i = 0; i < cars.length; i++) {
  const li = document.createElement("div");
  li.classList.add("item1");
  li.style.width = "600px";
  li.style.height = "200px";
  const loaiXeDiv = document.createElement("div");
  const loaiXe = cars[i].loaiXe;
  loaiXeDiv.innerHTML = loaiXe;
  const imagineLi = document.createElement("img");
  const imagine = cars[i].imagine;
  imagineLi.src = imagine;
  const soChoLi = document.createElement("div");
  const soCho = cars[i].soCho;
  soChoLi.innerHTML = "so cho  " + soCho;
  const priceLi = document.createElement("div");
  const price = cars[i].price;
  priceLi.innerHTML = price;
  li.appendChild(loaiXeDiv);
  li.appendChild(imagineLi);
  li.appendChild(soChoLi);
  li.appendChild(priceLi);
  ul.appendChild(li);
}
card.appendChild(ul);
