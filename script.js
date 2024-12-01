// Lista de cores disponíveis no HTML5
const coresHTML5 = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", 
    "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", 
    "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", 
    "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta", 
    "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", 
    "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", 
    "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", 
    "GhostWhite", "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", 
    "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", 
    "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", 
    "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", 
    "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", 
    "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", 
    "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", 
    "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", 
    "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", 
    "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", 
    "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", 
    "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", 
    "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", 
    "YellowGreen"];
    
    // Escolher 10 cores aleatórias
    const coresAleatorias = [];
    while (coresAleatorias.length < 10) {
        const cor = coresHTML5[Math.floor(Math.random() * coresHTML5.length)];
        if (!coresAleatorias.includes(cor)) {
            coresAleatorias.push(cor);
        }
    }
    
    // Escolher uma cor para adivinhar
    const corCorreta = coresAleatorias[Math.floor(Math.random() * coresAleatorias.length)].toLowerCase();
    
    console.log("Cor correta:", corCorreta); // Para ajudar a testar
    
    function verificarCor() {
        const corInput = document.getElementById("inputColor").value.toLowerCase();
        const resultado = document.getElementById("resultado");
    
        if (corInput === corCorreta) {
            document.body.style.backgroundColor = corCorreta;
            resultado.textContent = "Parabéns! Você acertou!";
        } else {
            const dica = corInput < corCorreta ? "Escolha uma cor mais para o final do alfabeto." : "Escolha uma cor mais para o início do alfabeto.";
            resultado.textContent = `Você errou! ${dica}`;
        }
    }
    