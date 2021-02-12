export function interpolate(obj) 
{
    let string = this.valueOf();
    const modifier = (match) =>
    {
        return obj.prop_access(match.replace(/{{/i,"").replace(/}}/i,"").trim()) 
    };
    while (string != string.replace(/{{( )*[a-zA-Z0-9.]+( )*}}/i, modifier)) // Détecte chaine caractères entre {{ }}. Enlève les accolades et cherche la correspondance de l'objet
    {
        string = string.replace(/{{( )*[a-zA-Z0-9.]+( )*}}/i, modifier);
    }
    return string;
}