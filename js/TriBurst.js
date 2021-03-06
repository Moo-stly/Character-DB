var ver = navigator.appVersion;
var dom = document.getElementById ? 1 : 0;
var ie5 = (ver.indexOf('MSIE 5') > -1 && dom) ? 1 : 0;
var ie = (document.all);
var n = !ie;

var Tri_Burst = 0;
var Tri_Total = 0;
var Active_Tris = 1;

function mouseDown(e) {
    if (Active_Tris) {
        var mousex = (n) ? e.pageX : event.x;
        var mousey = (n) ? e.pageY : event.y;
        if (!Tri_Burst) {
            for (let z = 0; z <= 9; z++) {
                eval(`SHOW("Tris_${z}")`)
            }
            Tri_Burst = 1
            Tri_Total = 0
            for (i = 0; i <= 9; i++) {
                eval(`moveTo(${i},0,${mousex},${mousey})`)
            }
        }
    }
}

function initMouseEvents() {
    if (n) {
        document.captureEvents(Event.MOUSEDOWN, Event.MOUSEMOVE)
    }
    document.onmousedown = mouseDown
}

function moveTo(i, j, mousex, mousey) {
    if (j < eval(`anim_${i}_x.length`)) {
        let tempx = eval(`anim_${i}_x[j]+mousex`)
        let tempy = eval(`anim_${i}_y[j]+mousey`)
        if (ie) {
            if (tempy + 30 > (document.body.offsetHeight + document.body.scrollTop)) {
                tempy = document.body.offsetHeight + document.body.scrollTop - 30
            }
            if (tempx + 30 > (document.body.offsetWidth + document.body.scrollLeft)) {
                tempx = document.body.offsetWidth + document.body.scrollLeft - 30
            }
            eval(`document.all.Tris_${i}.style.left = tempx;`)
            eval(`document.all.Tris_${i}.style.top  = tempy;`)
        }
        if (n) {
            eval(`document.getElementById("Tris_${i}").style.left = tempx;`)
            eval(`document.getElementById("Tris_${i}").style.top  = tempy;`)
        }
        j++
        setTimeout(`moveTo(${i},${j},${mousex},${mousey})`, 55)
    } else {
        eval(`HIDE("Tris_${i}")`)
        Tri_Total++
    }
    if (Tri_Total == 1) {
        Tri_Burst = 0
        Tri_Total = 0
    }
}

function SHOW(divName) {
    if (document.all) {
        eval(`document.all.${divName}.style.visibility = "visible";`)
    } else {
        eval(`document.getElementById("${divName}").style.visibility = "visible";`)
    }
}

function HIDE(divName) {
    if (document.all) {
        eval(`document.all.${divName}.style.visibility = "hidden";`)
    } else {
        eval(`document.getElementById("${divName}").style.visibility = "hidden";`)
    }
}
anim_0_x = new Array(20, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0)
anim_0_y = new Array(-20, -40, -60, -80, -60, -40, -20, 0, 20, 40, 60, 80)
anim_1_x = new Array(20, 20, 17, 36, 60, 78, 90, 92, 93, 98, 108, 120, 133, 152, 181)
anim_1_y = new Array(-20, -20, -33, -38, -38, -27, -2, 25, 51, 84, 113, 141, 162, 212, 253)
anim_2_x = new Array(20, 20, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 18)
anim_2_y = new Array(-20, -20, -33, -38, -38, -27, -2, 25, 51, 84, 113, 141, 162, 212, 253)
anim_3_x = new Array(-20, -20, -2, -1, 7, 10, 18, 35, 60, 102, 94, 94, 93, 97, 108, 111, 117, 127)
anim_3_y = new Array(-20, -25, -64, -89, -104, -150, -173, -197, -213, -199, -151, -101, -66, -17, 27, 87, 140, 189)
anim_4_x = new Array(-20, -20, -10, -39, -30, -69, -64, -138, -154, -200, -181, -209, -191, -207, -203, -213, -202, -221, -211)
anim_4_y = new Array(-20, -20, -28, -51, -79, -100, -135, -154, -193, -183, -149, -134, -89, -60, 8, 51, 107, 157, 201)
anim_5_x = new Array(-20, -29, -51, -72, -105, -133, -164, -189, -209, -229, -247, -270, -279, -282, -283, -283, -285, -286, -288)
anim_5_y = new Array(-20, -55, -86, -116, -154, -183, -205, -217, -217, -198, -169, -120, -44, -8, 40, 87, 144, 190, 248)
anim_6_x = new Array(-20, -20, -7, 14, 44, 79, 143, 186, 217, 226, 234, 244, 250, 259, 265, 274)
anim_6_y = new Array(-20, -21, -72, -113, -139, -166, -188, -181, -126, -68, -3, 54, 134, 187, 215, 257)
anim_7_x = new Array(20, 20, -3, -9, -13, -27, -33, -44, -54, -66, -77, -95, -107, -136, -150, -160, -164, -168, -171, -172, -172, -176, -175)
anim_7_y = new Array(-20, -26, -43, -63, -89, -116, -145, -169, -201, -222, -240, -253, -254, -245, -220, -195, -160, -124, -81, -53, -26, 19, 68)
anim_8_x = new Array(-20, 20, -35, 39, 0, 45, -1, 24, -15, 14, -20, 35, -18, 38, -11, 16, 49, 64, 81, 93, 100, 103, 109)
anim_8_y = new Array(-20, -20, -32, -42, -62, -76, -89, -107, -132, -147, -173, -180, -192, -209, -236, -193, -119, -73, -24, 51, 95, 130, 188)
anim_9_x = new Array(-20, -51, -89, -110, -165, -191, -228, -240, -259, -271, -277, -281, -287)
anim_9_y = new Array(-20, -20, -35, -37, -34, -16, 10, 47, 105, 150, 189, 227, 273)
window.onload = initMouseEvents
