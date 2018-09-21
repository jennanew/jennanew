var opinion = document.getElementById("opinion");
var codename = document.getElementById("codename");
var country = document.getElementById("country");

var opiniondb = new Array(
    {
        opinion: "All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. You cancopy and paste your own.",
        codename: "ANDREW",
        country: "San Diego. US"
    },
    {
        opinion: "I love HTML",
        codename: "Victoria",
        country: "Cuba"
    },
    {
        opinion: "I love CSS",
        codename: "Marina",
        country: "Brasile"
    }
);

var i=0;

function next() {
    if(i==2)
    {
    i=0;
    opinion.innerText = opiniondb[i].opinion;
    codename.innerText = opiniondb[i].codename;
    country.innerText = opiniondb[i].country;
    opinion.style.width = "70%";
    }
    else
    {
    i++;
    opinion.innerText = opiniondb[i].opinion;
    codename.innerText = opiniondb[i].codename;
    country.innerText = opiniondb[i].country;
    opinion.style.width = "auto";
    }
    
}

function prev() {
    if(i==0)
    {
    i=2;
    opinion.innerText = opiniondb[i].opinion;
    codename.innerText = opiniondb[i].codename;
    country.innerText = opiniondb[i].country;
    opinion.style.width = "70%";
    }
    else
    {
    i--;
    opinion.innerText = opiniondb[i].opinion;
    codename.innerText = opiniondb[i].codename;
    country.innerText = opiniondb[i].country;
    opinion.style.width = "auto"; 
    }
    
}
