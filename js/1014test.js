/* body와 컨테이너 요소 만들기 */
const bodyElement = document.querySelector("body");
const field = document.createElement("div");
bodyElement.appendChild(field);

/* 인덱스 0 ~ 4까지 작동한 async 객체 */
async function doFetch() {
    const response = await fetch("./json/공공데이터.json");
    const data = await response.json();
    for(let i = 0; i < 5; i++) {
        let div = document.createElement("div");
        let restNm = data.body[i].RSTR_NM;
        let lclas = data.body[i].MENU_CTGRY_LCLAS_NM;
        let menuNm = data.body[i].MENU_NM;
        div.innerHTML = `<h3>${restNm}</h3><p>${lclas} - ${menuNm}</p>`;
        div.setAttribute("class", "mainfield");
        field.appendChild(div);
    }
}

/* 호출 */
doFetch();

/* 버튼에서 이벤트 리스너 호출, 객체 받아오기 */
const addBtn = document.getElementById("add");
addBtn.addEventListener("click", buttonToFetch);

/* 원하는 인덱스를 찾기 위한 변수 */
let index = 5;

/* 버튼을 통해 호출될 async 객체 */
async function buttonToFetch() {
    const response = await fetch("./json/공공데이터.json");
    const data = await response.json();
    let div = document.createElement("div");
    let restNm = data.body[index].RSTR_NM;
    let lclas = data.body[index].MENU_CTGRY_LCLAS_NM;
    let menuNm = data.body[index].MENU_NM;
    div.innerHTML = `<h3>${restNm}</h3><p>${lclas} - ${menuNm}</p>`;
    div.setAttribute("class", "mainfield");
    field.appendChild(div);
    index++;
}