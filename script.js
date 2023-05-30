const form = document.getElementById("songQuiz");
form.addEventListener("submit", submitted);

function submitted(event) {
    event.preventDefault();
    const answers = {
        q1: document.querySelector('input[name="ans1"]:checked').value,
        q2: document.querySelector('input[name="ans2"]:checked').value,
        q3: document.querySelector('input[name="ans3"]:checked').value,
        q4: document.querySelector('input[name="ans4"]:checked').value
    }
    const res = calculate(answers);
    display(res);
}

function calculate(answers) {
    let s1bbb = 0;
    let s2yesh = 0;
    let s3aleph = 0;

    if(answers.q1 === "no") {
        s2yesh++;
        s3aleph++;
    } else if(answers.q1 === "yes") {
        s1bbb++;
    }

    if(answers.q2 === "yes") {
        s3aleph++;
    } else if(answers.q2 === "no") {
        s2yesh++;
        s1bbb++;
    }

    if(answers.q3 === "beat") {
        s1bbb++;
    } else if(answers.q3 === "lyrics") {
        s2yesh++;
        s3aleph++;
    }

    if(answers.q4 === "per") {
        s2yesh++;
    } else if(answers.q4 === "guitar") {
        s1bbb++;
    } else if(answers.q4 === "vocals") {
        s3aleph++;
    }

    let songList = [];

    if((s2yesh > s1bbb && s2yesh > s3aleph) || ((s2yesh === s1bbb && s2yesh > s3aleph) || (s2yesh === s3aleph && s2yesh > s1bbb))) {
        songList.push("Ani Yeshena");
    } if ((s1bbb > s2yesh && s1bbb > s3aleph) || ((s1bbb === s2yesh && s2yesh > s3aleph) || (s1bbb === s3aleph && s2yesh < s1bbb))) {
        songList.push("Adir Adirim");
    } if((s3aleph > s1bbb && s2yesh < s3aleph) || ((s3aleph === s1bbb && s2yesh < s3aleph) || (s2yesh === s3aleph && s2yesh > s1bbb))) {
        songList.push("Aleph Bet (Hoshana)");
    }

    return songList;
}

function display(res) {
    const resRepl = document.getElementById("quiz");
    resRepl.innerHTML = "";
    const scr = document.createElement('h1');
    scr.textContent = "You should listen to: "
    const list = document.createElement('ul');
    res.forEach((song) => {
        const item = document.createElement('li');
        item.textContent = song;
        list.appendChild(item);
        if(song === "Adir Adirim") {
            const aa = document.createElement('iframe');
            aa.src ="https://www.youtube.com/embed/2Dgt27ILk8g?controls=1&mute=0&autoplay=0";
            list.appendChild(aa);
        } else if(song === "Ani Yeshena") {
            const aa = document.createElement('iframe');
            aa.src ="https://www.youtube.com/embed/xPjkCu-4H9E?controls=1&mute=0&autoplay=0";
            list.appendChild(aa);
        } else if(song === "Aleph Bet (Hoshana)") {
            const aa = document.createElement('iframe');
            aa.src ="https://www.youtube.com/embed/Bl1epz3tSSA?controls=1&mute=0&autoplay=0";
            list.appendChild(aa);
        }
    });
    resRepl.appendChild(list);
    
}

var player = document.getElementById("player");
player.addEventListener('ended', function() {
    player.src += '&autoplay=1';
}) 