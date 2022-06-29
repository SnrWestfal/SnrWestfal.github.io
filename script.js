(function newFact() {
    var facts = ['Технологии, которые я изучил', 'Frontend<br> HTML CSS JavaScript NodeJS React TailwindCSS Figma', 'Backend<br> Python Django PHP RestAPI MySQL RabbitMQ'];
    var randomFact = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerHTML = facts[randomFact];
  })();