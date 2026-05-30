export function exportParam(text)
{
    const blob =
    new Blob(
        [text],
        {type:"text/plain"}
    );

    const url =
    URL.createObjectURL(blob);

    const a =
    document.createElement("a");

    a.href = url;

    a.download =
    "gps_offsets.param";

    a.click();

    URL.revokeObjectURL(url);
}