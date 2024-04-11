string_parameterize = function (str1) {
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};
console.log(string_parameterize("Robin Singh from USA."));


function string(str){
    return str.split().toLowerCase().trim().join('-');
}
console.log(string_parameterize("Robin Singh from USA."));



protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, avg);
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("robin_singh@example.com"));