window.addEventListener("DOMContentLoaded", (event) => {
    var data = window.location.hash.substr(1);
    const urlParams = new URLSearchParams(data);

    document.getElementById("field-firstname").value = urlParams.get("f"); //firstname
    document.getElementById("field-lastname").value = urlParams.get("l"); //lastname
    document.getElementById("field-birthday").value = urlParams.get("b"); //birthday
    document.getElementById("field-lieunaissance").value = urlParams.get("p"); //place of born
    document.getElementById("field-address").value = urlParams.get("a"); //address
    document.getElementById("field-town").value = urlParams.get("c"); //city
    document.getElementById("field-zipcode").value = urlParams.get("z"); //zipcode
    const reason = urlParams.get("r"); //reason
    document.getElementById("checkbox-travail").checked = (reason==='work');
    document.getElementById("checkbox-courses").checked = (reason==='buy');
    document.getElementById("checkbox-sante").checked = (reason==='health');
    document.getElementById("checkbox-famille").checked = (reason==='family');
    document.getElementById("checkbox-sport").checked = (reason==='sport');
    document.getElementById("checkbox-judiciaire").checked = (reason==='legal');
    document.getElementById("checkbox-missions").checked = (reason==='mission');

    document.getElementById("generate-btn").click()
    
    //remove loading indicator
    document.getElementById('loading-i').style.display = 'none';

    Swal.fire({
        icon: "success",
        title: "Attestation Téléchargée",
        text: "Fichier disponible dans votre répértoire de téléchargements",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        footer: "*Ajouter cette page à vos favories ou écran d'accueil"
    });
});