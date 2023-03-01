function initFakeDatabase() {
  const ingredients = [
    [1, "San Marzano tomatoes",5],
    [2, "mozzarella di bufala sampana",4],
    [3, "basil leaves",3],
    [4, "olive oil",2],
    [5, "milk sauce", 4],
    [6, "rosemary leaves",3],
    [7, "garlic",4],
    [8, "black olives",7],
    [9, "arugula",3],
    [10, "al dente pasta",2],
    [11, "cheese mix",5],
    [12, "tomato sauce",3],
    [13, "ricotta",7],
    [14, "high gluten flour",4],
    [15, "New York water",5]
  ];
  localStorage.getItem("ingredients") || localStorage.setItem("ingredients",JSON.stringify(ingredients));

  const dough_type = [
    [1,"thin", 10],
    [2,"thick", 15]
  ];
  localStorage.getItem("dough_type") || localStorage.setItem("dough_type",JSON.stringify(dough_type));

  const dough_size = [
    [1,"small",1],
    [2,"medium",1.5],
    [3,"large",2]
  ];
  localStorage.getItem("dough_size") || localStorage.setItem("dough_size",JSON.stringify(dough_size));

  localStorage.getItem("extras") || localStorage.setItem("extras",JSON.stringify([]));

  const recipes = [
    [1,1],
    [1,2],
    [1,3],
    [1,4],
    [2,5],
    [2,6],
    [2,7],
    [3,8],
    [3,9],
    [4,10],
    [4,11],
    [4,12],
    [4,13],
    [4,2],
    [5,14],
    [5,15],
    [5,9]
  ];
  localStorage.getItem("recipes") || localStorage.setItem("recipes",JSON.stringify(recipes));

  localStorage.getItem("clients") || localStorage.setItem("clients",JSON.stringify([]));

  localStorage.getItem("messages") || localStorage.setItem("messages",JSON.stringify([]));

  const pizza_types = [
    [1,"Neapolitan","images/pizza/nik-owens-40OJLYVWeeM-unsplash.jpg",1], 
    [2,"Bianca","images/pizza/jonas-kakaroto-zlKdLdMREtE-unsplash.jpg",1],
    [3,"Sicilian","images/pizza/ivan-torres-MQUqbmszGGM-unsplash.jpg",1],
    [4,"Ziti","images/pizza/carissa-gan-_0JpjeqtSyg-unsplash.jpg",1],
    [5,"New York","images/pizza/aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash.jpg",1]
  ];
  localStorage.getItem("pizza_types") || localStorage.setItem("pizza_types",JSON.stringify(pizza_types));

  localStorage.getItem("orders") || localStorage.setItem("orders",JSON.stringify([]));

  localStorage.getItem("users") || localStorage.setItem("users",JSON.stringify([]));
}

export function dropFakeDatabase() {
  ["ingredients", "dough_types", "dough_size", "extras", "recipes", "clients", "messages", "pizza_types", "orders", "users"].forEach(element => {
    localStorage.removeItem(element);
  });
}

export function getFakeDatabaseTable(name) {
  return JSON.parse(localStorage.getItem(name));
}

export function setFakeDatabaseTable(tableArray) {
  return localStorage.setItem(JSON.stringify(tableArray));
}

export default initFakeDatabase;