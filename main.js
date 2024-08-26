let shop1 = document.getElementById("container1_1");


let generateShop = () =>{
    return (shop1.innerHTML = shopItemsData.map((x)=>{
    let{id, name, desc, img} = x;
    return `
        <div class="item" id="item1">
            <div class="text-item">${name}</div>
            <img src="${img}" alt="Fried Chicken" class="image">
            <div class="text-description">${desc}</div>
        </div>
    `;
}).join(""));
};

generateShop();

