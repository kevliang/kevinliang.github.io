function runShamePlane() {    
    var cal = map.emission;
    console.log("runShamePlane");
    console.log(cal);
    var coBarThreeEl = document.getElementById("coBarThree");
    var emissiontonnes = cal/1000
    setClassValue("co",emissiontonnes.toFixed(2))
    coBarThreeEl.style = "height: calc(" + emissiontonnes + "rem * 10)"
}

function setClassValue(className, value) {
    els = document.getElementsByClassName(className)

    for(i=0; i < els.length; i++) {
        els[i].innerText = value
    }
}

function changeOPT(e) {
    const bar = document.getElementById(e.currentTarget.id + "-bar")
    bar.classList.toggle("on");
}


const opt1 = document.getElementById("opt1");
opt1.addEventListener("change", changeOPT);

const opt2 = document.getElementById("opt2");
opt2.addEventListener("change", changeOPT);

//const opt3 = document.getElementById("opt3");
//opt3.addEventListener("change", changeOPT);

const opt4 = document.getElementById("opt4");
opt4.addEventListener("change", changeOPT);

const opt5 = document.getElementById("opt5");
opt5.addEventListener("change", changeOPT);

//const opt6 = document.getElementById("opt6"); 
//opt6.addEventListener("change", changeOPT);

const opt7 = document.getElementById("opt7")
opt7.addEventListener("change", changeOPT);


function addMetaData(from, to, co, toCity) {
    const tags = [
        { 
            name: "description",
            content: from + " â†’ " + to + " = " + co + "tCOâ‚‚e." + "Explore how this trip compares to the efforts you make to reduce your carbon footprint."
        }, 
        { 
            property: "og:url",
            content: location.href
        }, 
        {
            property: "og:title",
            content: from + " â†’ " + to + " = " + co + "tCOâ‚‚e"
        }, 
        {
            property: "og:description",
            content: "Explore how this trip compares to the efforts you make to reduce your carbon footprint." 
        }]

    for(i=0; i < tags.length; i++) {
        var meta=document.createElement('meta');
        meta.setAttribute('name', tags[i].content);
        meta.setAttribute('property', tags[i].property);
        meta.setAttribute('content', tags[i].content);
        document.getElementsByTagName('head')[0].appendChild(meta);
    }

    const desc = document.querySelector('meta[name="description"]')
    desc.setAttribute('content', 'The emissions for a plane seat flying to ' + to + " from " + from + " will be " + " tons of COâ‚‚. Resulting in the loss of " + "mÂ² of arctic summer ice. Explore how this trip compares to the efforts you make to reduce your carbon footprint.")

    const title = document.querySelector('title')
    title.innerText = "The COâ‚‚ emissions for flying to " + to
}
