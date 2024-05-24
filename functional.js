//Write code in a functional style to convert the input to the output:
//  input = { tag: “JAVASCRIPT” }
//  output = “(javascript)”

const input = { tag: "JAVASCRIPT" };

const output = `(${input.tag.toLowerCase()})`;

console.log(output);


const recipe = {
    name: "Spaghetti Bolognese",
    ingredients: ["egg", "salt”, “pepper”]
}
//Assuming that this object is immutable, write code to - Add a new ingredient (“cream”)
//- Replace “egg” with “egg white”
//- Remove an ingredient (“egg”)

const newRecipe = {
    ...recipe,
    ingredients: [...recipe.ingredients, "cream"]
};

const updatedRecipe = {
    ...recipe,
    ingredients: recipe.ingredients.map((ingredient) =>
        ingredient === "egg" ? "egg white" : ingredient
    )
};

const finalRecipe = {
    ...recipe,
    ingredients: recipe.ingredients.filter((ingredient) => ingredient !== "egg")

};