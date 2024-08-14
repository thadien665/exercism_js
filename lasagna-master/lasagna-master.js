/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer){
if (timer === 0) {
    return 'Lasagna is done.';
}
else if (timer > 0) {
    return 'Not done, please wait.';
}
else {
    return 'You forgot to set the timer.';
}
};

export function preparationTime(layers, time = 2){
    return layers.length * time; 
}

export function quantities(layers_2){
    let noodles_quantity = 0;
    let sauce_quantity = 0;
    
    layers_2.forEach(element => {
        if (element === 'noodles') {
            noodles_quantity += 1;
        }
        else if (element === 'sauce') {
            sauce_quantity += 1;
        }
    });
    let noodles_sum = noodles_quantity * 50;
    let sauce_sum = sauce_quantity * 0.2;
    return { 
        noodles: noodles_sum, 
        sauce: sauce_sum 
    };
}

export function addSecretIngredient(friends_list, my_list){
    my_list.push(friends_list[friends_list.length - 1]);
}

export function scaleRecipe(recipe, people){
    let scale = Number(people / 2);
    let updated_recipe = {};

    for (let key in recipe) {
        updated_recipe[key] = recipe[key] * scale;
    }

    return updated_recipe;
}