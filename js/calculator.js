export function calculateMB(gps1,gps2)
{
    return {

        x:gps1.x-gps2.x,

        y:gps1.y-gps2.y,

        z:gps1.z-gps2.z

    };
}