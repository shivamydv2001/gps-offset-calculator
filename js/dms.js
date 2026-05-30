export function dmsToDecimal(
    degrees,
    minutes,
    seconds,
    direction
)
{
    let decimal =
        Number(degrees) +
        Number(minutes)/60 +
        Number(seconds)/3600;

    if(
        direction === "S" ||
        direction === "W"
    )
    {
        decimal *= -1;
    }

    return decimal;
}