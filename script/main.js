let ptop = 0;
let pleft = 0;
// const obs1x = 50;
// const obs1y = 50;

// const obs2x = 150;
// const obs2y = 150;


document.addEventListener("click", function(e) {
    console.log(e.target);
    if (e.target.className=="down key" && ptop<150) {
        if (pleft>0 && pleft<100 && ptop>=0 && ptop<=0) {
        } else {
            if (pleft>100 && pleft<200 && ptop>=100 && ptop<=200) {
            } else {            
                ptop = ptop+10;
                document.getElementsByClassName('square')[0].style.top = ptop+'px';
            }
        }   
    }
    if (e.target.className=="up key" && ptop>0) {
        if (pleft>0 && pleft<100 && ptop>=50 && ptop<=100) {
        } else {
            if (pleft>100 && pleft<200 && ptop>=150 && ptop<=150) {
            } else {
                ptop = ptop-10;
                document.getElementsByClassName('square')[0].style.top = ptop+'px';
            }
        }
    }
    if (e.target.className=="right key" && pleft<250) {
        if (pleft>=0 && pleft<=0 && ptop>0 && ptop<100) {
        } else {
            if (pleft>=100 && pleft<200 && ptop>100 && ptop<200) {
            } else {
                pleft = pleft+10;
                document.getElementsByClassName('square')[0].style.left = pleft+'px';
            }
        }
    }
    if (e.target.className=="left key" && pleft>0) {
        if (pleft>50 && pleft<=100 && ptop>0 && ptop<100) {
        } else {
            if (pleft>100 && pleft<=200 && ptop>100 && ptop<200) {
            } else {
                pleft = pleft-10;
                document.getElementsByClassName('square')[0].style.left = pleft+'px';
            }
        }
    }
    console.log(ptop, pleft);
  });
