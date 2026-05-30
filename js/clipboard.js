export function copyParameters(text)
{
    navigator.clipboard
    .writeText(text)
    .then(() =>
    {
        alert("Parameters copied");
    })
    .catch(error =>
    {
        console.error(error);
        alert("Copy failed");
    });
}

