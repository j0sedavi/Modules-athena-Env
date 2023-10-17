export function centerObject(width,height) {
  let sc = Screen.getMode();
  let list = {
    x: sc.width / 2 - width / 2,
    y: sc.height / 2 - height / 2
  };
  return list;
}
export function removeAccents(palavra) {
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
export function centerFont(font,text) {
  let sc = Screen.getMode();
  let ft = font.getTextSize(removeAccents(text));
  let list = {
    x: sc.width / 2 - ft.width / 2,
    y: sc.height / 2 - ft.height / 2
  }
  return list;
}
export function centerFontAtObject(x1,y1,width1,height1,font,text) {
  let objX = x1;
  let objY = y1;
  let sz = font.getTextSize(removeAccents(text));
  let h = (width1 - sz.width) / 2;
  let v = (height1 - sz.height) / 2;
  let newX = x1 + h;
  let newY = y1 + v;
  let list = {
    x: newX,
    y:newY
  }
  return list;
}
export function arrayInclude(array, valor) {
  return array.includes(valor);
}
export function getItemPosition(item, array) {
  if (array.indexOf(item) !== -1) {
    return array.indexOf(item);
  } else {
    return -1;
  }
}
export function count(c,str) {
  let counter = 0;
  for(let i = 0;i < str.length;i++) {
    if(str[i].toLowerCase() === c) {
      counter++
    }
  }
  return counter
}
export function isJSON(jsonString) {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (error) {
        return false; 
    }
}
export function formatCurrency(valor) {
    return valor.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
export function UUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export function replaceAll(str, search, replacement) {
    return str.replace(new RegExp(search, 'g'), replacement);
}
export function removeDuplicates(array) {
    return Array.from(new Set(array));
}
export function sortNumbersAscending(array) {
    return array.sort((a, b) => a - b);
}
export function isNull(value) {
    return value === null || value === undefined;
}
export function isArray(obj) {
    return Array.isArray(obj);
}
export function isPrime(numero) {
  if (numero <= 1) return false;
  if (numero <= 3) return true;

  if (numero % 2 === 0 || numero % 3 === 0) return false;

  let i = 5;
  while (i * i <= numero) {
    if (numero % i === 0 || numero % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}
export function isdigit(str) {
  return !isNaN(parseFloat(str)) && isFinite(str);
}