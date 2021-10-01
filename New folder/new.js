const items = [
	// {
	//   name: "KJAER WEIS",
	//   title: "Matte, Naturally Liquid Lipstick",
	//   price: "30",
	//   prod_id_num: 101,
	//   img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-enthralling-819869029325-1_235x.jpg?v=1621349985",
	// },
	{
		name: "PHYTO",
		title: "Daily Brightening UV Defense SPF 30",
		price: "50",
		prod_id_num: 102,
		img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3606000578579-1_235x.jpg?v=1623217977",
	},
	{
		name: "M-61",
		title: "Hydraboost Gradual Tan Serum",
		price: "39",
		prod_id_num: 103,
		img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011552-1_235x.jpg?v=1626296817",
	},
	{
		name: "PHYTO",
		title: "PHYTONOVATHRIX Lotion",
		price: "46",
		prod_id_num: 104,
		img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3338221003546-1_235x.jpg?v=1620672324",
	},
	{
		name: "PHYTO",
		title: "Très Set Structure Spray",
		price: "54",
		prod_id_num: 105,
		img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840035204628-1_235x.jpg?v=1625845843",
	},
	{
		name: "ELLIS BROOKLYN",
		title: "MYTH Spectacular Scented Body Oil",
		price: "60",
		prod_id_num: 106,
		img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-852116006199-1_235x.jpg?v=1624610217",
	},
	{
		name: "SIO BEAUTY",
		title: "SiO Energy Serum",
		price: "30",
		prod_id_num: 107,
		img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-856580006709-1_235x.jpg?v=1624292184",
	},
	{
		name: "KLORANE",
		title: "Artistique Liquid Blush",
		price: "29",
		prod_id_num: 108,
		img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-cantaloup-037182655605-1_235x.jpg?v=1626338267",
	},
	{
		name: "RAHUA",
		title: "Legendary Amazon Oil™",
		price: "42",
		prod_id_num: 109,
		img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-859528006496-1_235x.jpg?v=1624292180",
	},
	{
		name: "KLORANE",
		title: "Matte, Naturally Liquid Lipstick",
		price: "51",
		prod_id_num: 110,
		img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-enthralling-819869029325-1_235x.jpg?v=1621349985",
	},
	{
		name: "Acqua Di Parma",
		title: "Daily Brightening UV Defense SPF 30",
		price: "10",
		prod_id_num: 111,
		img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3606000578579-1_235x.jpg?v=1623217977",
	},
	{
		name: "M-61",
		title: "Hydraboost Gradual Tan Serum",
		price: "19",
		prod_id_num: 112,
		img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011552-1_235x.jpg?v=1626296817",
	},
	{
		name: "PHYTO",
		title: "PHYTONOVATHRIX Lotion",
		price: "66",
		prod_id_num: 113,
		img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3338221003546-1_235x.jpg?v=1620672324",
	},
	{
		name: "Acqua Di Parma",
		title: "Très Set Structure Spray",
		price: "44",
		prod_id_num: 114,
		img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840035204628-1_235x.jpg?v=1625845843",
	},
	{
		name: "KLORANE",
		title: "MYTH Spectacular Scented Body Oil",
		price: "37",
		prod_id_num: 115,
		img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-852116006199-1_235x.jpg?v=1624610217",
	},
];

if (localStorage.getItem("items") == null) {
	localStorage.setItem("items", JSON.stringify(items));
}

// Showing product Grids

function showItems(l) {
	let items = l;
	let items_div = document.getElementById("items");

	items_div.innerHTML = null;

	items.forEach(function (el) {
		let div = document.createElement("div");
		let p_name = document.createElement("p");
		p_name.innerText = el.name;

		let span_title = document.createElement("span");
		span_title.innerText = el.title;

		let p_price = document.createElement("p");
		p_price.innerHTML = `&#163; ${el.price}`;

		let img = document.createElement("img");
		img.src = el.img;

		p_name.setAttribute(
			"style",
			" font-family: Montserrat Medium,sans-serif; font-weight: 400;letter-spacing: .2px;line-height: 24px;text-transform: uppercase;color: #12284c;font-size: 14px;"
		);
		span_title.setAttribute(
			"style",
			" font-family: Montserrat Light,sans-serif; font-weight: 300;letter-spacing: .18px;line-height: 20px;color: #12284c;font-size: 14px;"
		);
		p_price.setAttribute(
			"style",
			" font-family: Montserrat Light,sans-serif; font-weight: 400;line-height: 1.65;color: #12284c;font-size: 14px;"
		);

		img.addEventListener("click", function () {
			addtoVisited(el);
		});

		div.append(img, p_name, span_title, p_price);
		items_div.append(div);
	});
}
showItems(JSON.parse(localStorage.getItem("items")));
