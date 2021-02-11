export function transpolate(obj) 
{
    let chaine = this.valueOf();
    const replacer = function (match) {
        return obj.prop_access(match.replace(/{{/i,"").replace(/}}/i,"").trim())
    };
    while (chaine != chaine.replace(/{{( )*[a-zA-Z0-9.]+( )*}}/i, replacer)) {
        chaine = chaine.replace(/{{( )*[a-zA-Z0-9.]+( )*}}/i, replacer);
    }
    return chaine
}