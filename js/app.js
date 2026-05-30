import {
    dmsToDecimal
}
from "./dms.js";
import { calculateCoordinates }
from "./geometry.js";

import { calculateMB }
from "./calculator.js";

// import { copyParameters }
// from "./clipboard.js";

// import { exportParam }
// from "./export.js";

// let parameterText = "";

document
.getElementById("calculateBtn")
.addEventListener(
    "click",
    runCalculation
);

// document
// .getElementById("copyBtn")
// .addEventListener(
//     "click",
//     () =>
//     {
//         copyParameters(parameterText);
//     }
// );

// document
// .getElementById("exportBtn")
// .addEventListener(
//     "click",
//     () =>
//     {
//         exportParam(parameterText);
//     }
// );

// dms tool
document
.getElementById("dmsBtn")
.addEventListener(
    "click",
    toggleDmsPanel
);

document
.getElementById("convertDmsBtn")
.addEventListener(
    "click",
    convertDmsCoordinates
);

function runCalculation()
{
    const distance =
    parseFloat(
        document.getElementById(
            "distance"
        ).value
    );

    const mountType =
    document.getElementById(
        "mountType"
    ).value;

    const gps =
    calculateCoordinates(
        distance,
        mountType
    );

    const mb =
    calculateMB(
        gps.gps1,
        gps.gps2
    );

    document.getElementById("gps1x").innerText =
        gps.gps1.x.toFixed(4);

    document.getElementById("gps1y").innerText =
        gps.gps1.y.toFixed(4);

    document.getElementById("gps1z").innerText =
        gps.gps1.z.toFixed(4);

    document.getElementById("gps2x").innerText =
        gps.gps2.x.toFixed(4);

    document.getElementById("gps2y").innerText =
        gps.gps2.y.toFixed(4);

    document.getElementById("gps2z").innerText =
        gps.gps2.z.toFixed(4);

    document.getElementById("mbx").innerText =
        mb.x.toFixed(4);

    document.getElementById("mby").innerText =
        mb.y.toFixed(4);

    document.getElementById("mbz").innerText =
        mb.z.toFixed(4);

    // parameterText =

`GPS1_POS_X=${gps.gps1.x.toFixed(4)}
GPS1_POS_Y=${gps.gps1.y.toFixed(4)}
GPS1_POS_Z=${gps.gps1.z.toFixed(4)}

GPS2_POS_X=${gps.gps2.x.toFixed(4)}
GPS2_POS_Y=${gps.gps2.y.toFixed(4)}
GPS2_POS_Z=${gps.gps2.z.toFixed(4)}

GPS1_MB_OFS_X=${mb.x.toFixed(4)}
GPS1_MB_OFS_Y=${mb.y.toFixed(4)}
GPS1_MB_OFS_Z=${mb.z.toFixed(4)}
`;
}

runCalculation();

 //dms tool
 function toggleDmsPanel()
 {
     const panel =
     document.getElementById(
         "dmsPanel"
     );
 
     panel.style.display =
         panel.style.display === "none"
         ? "block"
         : "none";
 }

 function convertDmsCoordinates()
{
    const latitude =
    dmsToDecimal(
        parseFloat(
            document.getElementById(
            "latDeg"
            ).value
        ),

        parseFloat(
            document.getElementById(
            "latMin"
            ).value
        ),

        parseFloat(
            document.getElementById(
            "latSec"
            ).value
        ),

        document.getElementById(
        "latDir"
        ).value
    );

    const longitude =
    dmsToDecimal(
        parseFloat(
            document.getElementById(
            "lonDeg"
            ).value
        ),

        parseFloat(
            document.getElementById(
            "lonMin"
            ).value
        ),

        parseFloat(
            document.getElementById(
            "lonSec"
            ).value
        ),

        document.getElementById(
        "lonDir"
        ).value
    );

    document.getElementById(
    "latitudeResult"
    ).innerText =
    latitude.toFixed(7);

    document.getElementById(
    "longitudeResult"
    ).innerText =
    longitude.toFixed(7);
}