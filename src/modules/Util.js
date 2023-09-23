//By Daviz7 module util Athena V3
/*  Funções
centerObject
removeAccents
cutSpriteSheet
insertLineBreaks
limitTextWithEllipsis
getDistance
random
clamp
shuffleArray
calculateAverage
findMaxValue
findMinValue
degreesToRadians
arrayInclude
openJsonFile
editFile
createfile
*/
export function centerObject(width,height) {
  let sc = Screen.getMode();
  let list = {
    x: sc.width / 2 - width / 2,
    x: sc.height / 2 - height / 2
  };
  return list;
}
function removeAccents(palavra) {
  const mapaAcentos = {
    'á': 'a', 'à': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a',
    'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
    'í': 'i', 'ì': 'i', 'î': 'i', 'ï': 'i',
    'ó': 'o', 'ò': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o',
    'ú': 'u', 'ù': 'u', 'û': 'u', 'ü': 'u',
    'ç': 'c',
  };

  return palavra.replace(/[áàâãäéèêëíìîïóòôõöúùûüç]/g, function (letra) {
    return mapaAcentos[letra];
  });
}
export function cutSpriteSheet(image,width,height,x,y) {
  image.startx = x;
  image.starty = y;
  image.endx = x + width;
  image.endy = y + height;
  return true;
}
export function insertLineBreaks(text, charactersPerLine) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += text[i];
    if ((i + 1) % charactersPerLine === 0) {
      result += '\n';
    }
  }
  return result;
}
export function limitTextWithEllipsis(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
}
export function getDistance(x1,y1,x2,y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
export function random(min,max) {
  return Math.random() * (max - min) + min;
}
export function clamp(valor, min, max) {
  return Math.min(Math.max(valor, min), max);
}
export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
export function calculateAverage(array) {
  if (array.length === 0) {
    return 0; // Retorna 0 se o array estiver vazio para evitar divisão por zero
  }
  const soma = array.reduce((acc, valor) => acc + valor, 0);
  return soma / array.length;
}
export function findMaxValue(array) {
  if (array.length === 0) {
    return undefined; // Retorna undefined se o array estiver vazio
  }

  let maiorValor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maiorValor) {
      maiorValor = array[i];
    }
  }
  return maiorValor;
}
export function findMinValue(array) {
  if (array.length === 0) {
    return -1; // Retorna -1 se o array estiver vazio
  }

  let indiceMenor = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[indiceMenor]) {
      indiceMenor = i;
    }
  }
  return indiceMenor;
}
export function degreesToRadians(graus) {
  return graus * (Math.PI / 180);
}
export function arrayInclude(array, valor) {
  return array.includes(valor);
}
export function openJsonFile(cfile) {
  
}
export function editFile(cfile,edit) {
  
}
export function createFile(cfile) {
  
}