// Extracting users and ratings from more than 50 users

document.querySelector("#ratings").onclick = function()
{
let x = ratings['user_id'].value_counts() > 50;
let y = x[x].index; //Number of user ID's
print(y.shape);
ratings = ratings[ratings['user_id'].isin(y)];
}