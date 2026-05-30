export function drawDiagram(gps)
{
    const canvas =
    document.getElementById("diagram");

    if(!canvas)
        return;

    const ctx =
    canvas.getContext("2d");

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    const centerX =
    canvas.width/2;

    const centerY =
    canvas.height/2;

    ctx.fillText(
        "FC",
        centerX,
        centerY
    );
}