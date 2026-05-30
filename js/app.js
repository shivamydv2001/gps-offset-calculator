import { dmsToDecimal } from "./dms.js";
import { calculateCoordinates } from "./geometry.js";
import { calculateMB } from "./calculator.js";

document.addEventListener("DOMContentLoaded", () => {

    const $ = (id) => document.getElementById(id);

    function on(id, event, handler) {
        const el = $(id);
        if (el) el.addEventListener(event, handler);
    }

    // -------------------- NAV --------------------
    on("showGpsBtn", "click", showGpsTool);
    on("showDmsBtn", "click", showDmsTool);
    on("gpsBackBtn", "click", showHome);
    on("dmsBackBtn", "click", showHome);

    // -------------------- MAIN CALC --------------------
    on("calculateBtn", "click", runCalculation);

    function runCalculation() {
        const distanceInput = $("distance")?.value?.trim();
        const distance = distanceInput ? parseFloat(distanceInput) : 0;

        const mountType = $("mountType")?.value || "default";

        if (isNaN(distance)) {
            alert("Invalid distance value");
            return;
        }

        const gps = calculateCoordinates(distance, mountType);
        const mb = calculateMB(gps.gps1, gps.gps2);

        updateOutput("gps1", gps.gps1);
        updateOutput("gps2", gps.gps2);
        updateMB(mb);
    }

    function updateOutput(prefix, data) {
        const set = (key, val) => {
            const el = $(key);
            if (el) el.innerText = val.toFixed(4);
        };

        set(`${prefix}x`, data.x);
        set(`${prefix}y`, data.y);
        set(`${prefix}z`, data.z);
    }

    function updateMB(mb) {
        const set = (key, val) => {
            const el = $(key);
            if (el) el.innerText = val.toFixed(4);
        };

        set("mbx", mb.x);
        set("mby", mb.y);
        set("mbz", mb.z);
    }

    // Run once safely AFTER DOM is ready
    runCalculation();

    // -------------------- DMS TOOL --------------------
    on("dmsBtn", "click", toggleDmsPanel);
    on("convertDmsBtn", "click", convertDmsCoordinates);

    function toggleDmsPanel() {
        const panel = $("dmsPanel");
        if (!panel) return;

        panel.style.display =
            panel.style.display === "none" ? "block" : "none";
    }

    function convertDmsCoordinates() {
        const lat = dmsToDecimal(
            parseFloat($("latDeg")?.value || 0),
            parseFloat($("latMin")?.value || 0),
            parseFloat($("latSec")?.value || 0),
            $("latDir")?.value || "N"
        );

        const lon = dmsToDecimal(
            parseFloat($("lonDeg")?.value || 0),
            parseFloat($("lonMin")?.value || 0),
            parseFloat($("lonSec")?.value || 0),
            $("lonDir")?.value || "E"
        );

        const latEl = $("latitudeResult");
        const lonEl = $("longitudeResult");

        if (latEl) latEl.innerText = lat.toFixed(7);
        if (lonEl) lonEl.innerText = lon.toFixed(7);
    }

    // -------------------- NAV VIEWS --------------------
    function showHome() {
        setDisplay("homePage", "block");
        setDisplay("gpsTool", "none");
        setDisplay("dmsTool", "none");
    }

    function showGpsTool() {
        setDisplay("homePage", "none");
        setDisplay("gpsTool", "block");
        setDisplay("dmsTool", "none");
    }

    function showDmsTool() {
        setDisplay("homePage", "none");
        setDisplay("gpsTool", "none");
        setDisplay("dmsTool", "block");
    }

    function setDisplay(id, value) {
        const el = $(id);
        if (el) el.style.display = value;
    }

});