(function newSkill() {
    const skills = ['Технологии, которые я изучил', 'Frontend<br> HTML CSS JavaScript NodeJS React TailwindCSS Figma'];
    const randomFact = Math.floor(Math.random() * skills.length);
    document.getElementById('factDisplay').innerHTML = skills[randomFact];
  })();
