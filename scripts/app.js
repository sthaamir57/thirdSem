const today = new Date();
const day = today.getDay();
const firstSubjects = document.querySelector(".first-subjects");
const lastSubjects = document.querySelector(".last-subjects");
const firstThreeDays = document.querySelector(".first-three-days");
const lastThreeDays = document.querySelector(".last-three-days");
const todaySubjects = document.querySelector(".today-sub");
const subject = {
  CG: {
    title: "Comp. Graphics",
    link: "https://meet.google.com/zxw-vpbw-eas",
  },
  CA: {
    title: "Comp. Architecture",
    link: "https://meet.google.com/fqy-wcve-qfk",
  },
  NM: {
    title: "Numerical Method",
    link: "https://meet.google.com/bdu-fgwz-rpu",
  },
  STAT: {
    title: "Statistics",
    link: "https://meet.google.com/pht-ttpv-hyb",
  },
  DSA: {
    title: "DSA",
    // link: "https://meet.google.com/yak-ddjh-kcs",
    // link: "https://meet.google.com/kmm-jckn-aah",
    link: "https://meet.google.com/ssw-hkhf-oyk",
  },
};

const hide1 = document.querySelector(".hide-1");
const hide2 = document.querySelector(".hide-2");

loadAllFunctions();

function loadAllFunctions() {
  display();
}

function display() {
  if (day === 6) {
    console.log("Today is HOliday");
    alert("NO classes today");
  } else if (day === 0 || day === 1 || day === 2) {
    subFirst(day);
  } else {
    subLast(day);
  }
}

function subFirst(day) {
  let element = `<ul class="subjects s1">
  <li><a href="${subject.CG.link}">${subject.CG.title}</a></li>
        <li><a href="${subject.CA.link}">${subject.CA.title}</a></li>
        
</ul>`;
  hide1.style.display = "none";
  firstThreeDays.children[day].classList.replace("opacity-0", "opacity-1");
  firstThreeDays.children[day].children[1].innerHTML = `${element}`;
}

function subLast(day) {
  let element = `<ul class="subjects s2">
        <li><a href="${subject.NM.link}">${subject.NM.title}</a></li>
        <li><a href="${subject.STAT.link}">${subject.STAT.title}</a></li>
        <li><a href="${subject.DSA.link}">${subject.DSA.title}</a></li>
</ul>`;
  hide2.style.display = "none";
  lastThreeDays.children[day - 3].classList.replace("opacity-0", "opacity-1");
  lastThreeDays.children[day - 3].children[1].innerHTML = `${element}`;
}
