(function newSkill() {
    const skills = ['Технологии, которые я изучил <br> обнови страницу :)', 'HTML CSS JavaScript JQuery PHP MySQL'];
    const randomFact = Math.floor(Math.random() * skills.length);
    document.getElementById('factDisplay').innerHTML = skills[randomFact];
  })();
