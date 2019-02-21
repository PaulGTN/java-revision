let userFloor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
  for (let step = 1; step <= userFloor; step++) {
    let blank = userFloor - step
    console.log(" ".repeat(blank) + "#".repeat(step))
  } 