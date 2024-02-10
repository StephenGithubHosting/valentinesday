export let sharedvalues = 1;
export const setSharedValues = (value) =>{
    sharedvalues = sharedvalues + value;
};
export const getSharedValues = () =>{
    return sharedvalues;
}

export let yesclicked = false;
export const setYesClicked = (value) =>{
    yesclicked = value;
    console.log(yesclicked);
}
export const getYesClicked = () =>{
    return yesclicked;
}
