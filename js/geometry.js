export function calculateCoordinates(distance, mountType)
{
    const half = distance / 2;

    const diag =
        half * Math.cos(Math.PI / 4);

    switch(mountType)
    {
        case "diag_fr_rl":

            return {
                gps1:{
                    x: diag,
                    y: diag,
                    z: 0
                },

                gps2:{
                    x:-diag,
                    y:-diag,
                    z:0
                }
            };

        case "diag_fl_rr":

            return {
                gps1:{
                    x: diag,
                    y:-diag,
                    z:0
                },

                gps2:{
                    x:-diag,
                    y: diag,
                    z:0
                }
            };

        case "left_right":

            return {
                gps1:{
                    x:0,
                    y: half,
                    z:0
                },

                gps2:{
                    x:0,
                    y:-half,
                    z:0
                }
            };

        case "front_back":

            return {
                gps1:{
                    x: half,
                    y:0,
                    z:0
                },

                gps2:{
                    x:-half,
                    y:0,
                    z:0
                }
            };

        default:

            return {
                gps1:{x:0,y:0,z:0},
                gps2:{x:0,y:0,z:0}
            };
    }
}