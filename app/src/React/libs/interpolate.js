export function interpolate(obj) 
{
    let chaine = this.valueOf();
    const replacer = function (match) 
    {
        return obj.prop_access(match.replace(/{{/i,"").replace(/}}/i,"").trim()) 
    };
    while (chaine != chaine.replace(/{{( )*[a-zA-Z0-9.]+( )*}}/i, replacer)) // Détecte chaine caractères entre {{ }}. Enlève les accolades et cherche la correspondance de l'objet
    {
        chaine = chaine.replace(/{{( )*[a-zA-Z0-9.]+( )*}}/i, replacer);
    }
    return chaine;
}