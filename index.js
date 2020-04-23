
function refreshData() {
    const firstname = document.getElementById("first-name").value; //firstname
    const lastname = document.getElementById("last-name").value; //lastname
    const birthday = document.getElementById("birthdate").value; //birthday
    const lieunaissance = document.getElementById("birth-place").value; //place of born
    const address = document.getElementById("address").value; //address
    const town = document.getElementById("city").value; //city
    const zipcode = document.getElementById("post-code").value; //zipcode
    var   reason = document.getElementById('motive').value;

    var data = {
        f: firstname,
        l: lastname,
        b: birthday,
        p: lieunaissance,
        a: address,
        c: town,
        z: zipcode,
        r: reason
    }

    var url = "/deplacement-covid-19/generate.html#" //+ (isBeta ? "?beta" : "") +"#";
    document.querySelector("#generation-link > a").href = window.location.origin + url + serialize(data);
    document.querySelector("#generation-link > a").innerText = window.location.origin + url + serialize(data);
}

function serialize(obj) {
    var str = [];
    for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
}

function formSubmit(evt) {
    evt.preventDefault();
    refreshData();
    document.getElementById('div-url-generate').style.display = 'block';
}

setTimeout(function () {
    $(document).unbind('submit');
    $(document).off('submit');
    document.addEventListener('submit', formSubmit, {capture:true});
}, 2000)

document.getElementById('div-url-generate').style.display = 'none';
document.getElementById('generation-link').style.overflowWrap = "break-word";

