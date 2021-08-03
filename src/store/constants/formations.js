export const F_4231 = "4-2-3-1";
export const F_433 = "4-3-3";
export const F_343 = "3-4-3";
export const F_442 = "4-4-2";

export const Formations = {
    F_4321: "4-2-3-1",
    F_433: "4-3-3",
    F_343: "3-4-3",
    F_442: "4-4-2"
}

export const FormationPositions = {
    F_442: []   
}


Formations.install =  function (app) {
    app.config.globalProperties.$getConst = (key) => {
        return Formations[key];
    }
};

export default Formations;
