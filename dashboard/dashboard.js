const editbtn = document.getElementById("edit");
const newEdit = document.getElementById("id03");
const entry = document.getElementById("id04");
const profile = document.getElementById('id02');
const profileBtn = document.getElementById('profileBtn');
const profileCancel = document.getElementById('profileCancel');
const newEditBtn = document.getElementById('newEdit');
const newEditCancel = document.getElementById('newEditCancel');
const entryItem =  document.getElementById('entryItem');
const entryItemCancel = document.getElementById('entryItemCancel');

entryItemCancel.onclick = () => {
    entry.style.display = "none";
}

entryItem.onclick = () => {
    entry.style.display = "block";
}

newEditCancel.onclick = () => {
    newEdit.style.display = "none";
}

newEditBtn.onclick = () => {
    newEdit.style.display = "block";
}

profileCancel.onclick = () => {
    profile.style.display = 'none';
}

profileBtn.onclick = () => {
    profile.style.display = 'block';
}


editbtn.onclick = () =>  {
    newEdit.style.display = 'block';
    entry.style.display = 'none';
}

window.onclick = (event) => {
    'use strict';
    if (event.target === profile) {
        profile.style.display = "none";
    } else if (event.target === newEdit) {
        newEdit.style.display = "none";
    } else if (event.target === entry) {
        entry.style.display = "none";
    }    
};
