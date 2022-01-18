function $(x) {
    return document.getElementById(x);
  }
  
  const langs = ["HTML", "CSS", "JavaScript"];
  let used = $(`built`).textContent;
  
  for(let i=0; i<=(langs.length-1); i++){
    if (i === langs.length-1)
      used += `and `;
    used += (langs[i]+` `);;
  }
  
  $(`built`).textContent = used ;