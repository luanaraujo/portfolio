
class TextGlitch {
    
    constructor(root) {
        this._root = root;
        this._elClips = root.querySelectorAll(".TextGlitch-clip");
        this._elWords = root.querySelectorAll(".TextGlitch-word");
        this._frame = this._frame.bind(this);
        this._unglitch = this._unglitch.bind(this);
        this._frameId = null;
        this._text = "";
        this._textAlt = [];
        this._language = "portuguese"; // Adicione uma variável de idioma inicial
        Object.seal(this);

        this.setTexts([
            "$hello friend! My name is Luan Araujo and this is my portfolio.",
            "$HELLO FRIEND? MY NAME IS LUAN ARAUJO AND THIS IS MY PORTFOLIO.",
            "#µ37(0 [R132q? µ30) @J19 c1L3t1+ Qn 1z3e +h0$.&",
            "¨µ31)* {&13Nb? #y1 n2m4 1a 3ua1 +L0 p0rt1f1o!@",
            "§#+:|* {&><@$? {&13Nb?i0it 3n d2@ L5u@ Ar@2jo$*",
        ]);

        // this.setTexts( [
        // 	"hello world !",
        // 	"HELLO WORLD ?",
        // 	"µ3770 3027q ?",
        // 	"µ311p MQ51b ?",
        // ] );
    }

    on() {
        if (!this._frameId) {
            this._frame();
        }
    }

    off() {
        clearTimeout(this._frameId);
        this._frameId = null;
        this._unglitch();
    }

    setTexts([text, ...alt]) {
        this._text = text;
        this._textAlt = alt;
        this._updateText(); 
    }

    _frame() {
        this._glitch();
        setTimeout(this._unglitch, 50 + Math.random() * 200);
        this._frameId = setTimeout(this._frame, 250 + Math.random() * 500);
    }

    _glitch() {
        this._addClipCSS();
        this._textContent(this._randText());
        this._root.classList.add("TextGlitch-blended");
    }

    _unglitch() {
        this._removeClipCSS();
        this._updateText(); 
        this._root.classList.remove("TextGlitch-blended");
    }

    _textContent(txt) {
        this._elWords.forEach((el) => (el.textContent = txt));
    }

    _addClipCSS() {
        const clips = this._elClips,
            clip1 = this._randDouble(0.1),
            clip2 = this._randDouble(0.1);

        clips[0].style.transform = `translate(${this._randDouble(0.3)}em, .02em)`;
        clips[2].style.transform = `translate(${this._randDouble(0.3)}em, -.02em)`;
        clips[0].style.clipPath = `inset( 0 0 ${0.6 + clip1}em 0 )`;
        clips[1].style.clipPath = `inset( ${0.4 - clip1}em 0 ${0.3 - clip2}em 0 )`;
        clips[2].style.clipPath = `inset( ${0.7 + clip2}em 0 0 0 )`;
    }

    _removeClipCSS() {
        this._elClips.forEach((el) => {
            el.style.clipPath = el.style.transform = "";
        });
    }

    _randText() {
        const txt = Array.from(this._text);

        for (let i = 0; i < 12; ++i) {
            const ind = this._randInt(this._text.length);

            txt[ind] = this._textAlt[this._randInt(this._textAlt.length)][ind];
        }
        return txt.join("");
    }

    _randDouble(d) {
        return Math.random() * d - d / 2;
    }

    _randInt(n) {
        return (Math.random() * n) | 0;
    }

   // Função para atualizar o texto com base no idioma selecionado
   _updateText() {

    // Crie um objeto de tradução que mapeia chaves de tradução para os textos correspondentes em diferentes idiomas
    const translations = {
        "hello-friend": {
            english: "$Hello friend! My name is Luan Araujo and this is my portfolio.",
            portuguese: "$Olá amigo(a)! Meu nome é Luan Araujo e este é o meu portfólio."
        },
        
    };

    // Atualize o texto com base no idioma selecionado e na chave de tradução
    const translationKey = "hello-friend"; // Use a chave de tradução correspondente ao elemento que você deseja traduzir
    if (this._language === "english") {
        this._text = translations[translationKey].english;
    } else if (this._language === "portuguese") {
        this._text = translations[translationKey].portuguese;
    }
    

    this._textContent(this._text); // Atualize o texto
}
}

class MeusProjetos {
    
    constructor(root) {
        this._root = root;
        this._elClips = root.querySelectorAll(".MeusProjetos-clip");
        this._elWords = root.querySelectorAll(".MeusProjetos-word");
        this._frame = this._frame.bind(this);
        this._unglitch = this._unglitch.bind(this);
        this._frameId = null;
        this._text = "";
        this._textAlt = [];
        this._language = "portuguese"; // Adicione uma variável de idioma inicial
        Object.seal(this);

        this.setTexts([
            "Projetos",
            "PROJETOS",
            "#µ37(0[R",
            "¨µ31)*{&",
            "§#+:|*{&",
        ]);
    }

    on() {
        if (!this._frameId) {
            this._frame();
        }
    }

    off() {
        clearTimeout(this._frameId);
        this._frameId = null;
        this._unglitch();
    }

    setTexts([text, ...alt]) {
        this._text = text;
        this._textAlt = alt;
        this._updateText(); 
    }

    _frame() {
        this._glitch();
        setTimeout(this._unglitch, 50 + Math.random() * 200);
        this._frameId = setTimeout(this._frame, 250 + Math.random() * 500);
    }

    _glitch() {
        this._addClipCSS();
        this._textContent(this._randText());
        this._root.classList.add("MeusProjetos-blended");
    }

    _unglitch() {
        this._removeClipCSS();
        this._updateText(); 
        this._root.classList.remove("MeusProjetos-blended");
    }

    _textContent(txt) {
        this._elWords.forEach((el) => (el.textContent = txt));
    }

    _addClipCSS() {
        const clips = this._elClips,
            clip1 = this._randDouble(0.1),
            clip2 = this._randDouble(0.1);

        clips[0].style.transform = `translate(${this._randDouble(0.3)}em, .02em)`;
        clips[2].style.transform = `translate(${this._randDouble(0.3)}em, -.02em)`;
        clips[0].style.clipPath = `inset( 0 0 ${0.6 + clip1}em 0 )`;
        clips[1].style.clipPath = `inset( ${0.4 - clip1}em 0 ${0.3 - clip2}em 0 )`;
        clips[2].style.clipPath = `inset( ${0.7 + clip2}em 0 0 0 )`;
    }

    _removeClipCSS() {
        this._elClips.forEach((el) => {
            el.style.clipPath = el.style.transform = "";
        });
    }

    _randText() {
        const txt = Array.from(this._text);

        for (let i = 0; i < 12; ++i) {
            const ind = this._randInt(this._text.length);

            txt[ind] = this._textAlt[this._randInt(this._textAlt.length)][ind];
        }
        return txt.join("");
    }

    _randDouble(d) {
        return Math.random() * d - d / 2;
    }

    _randInt(n) {
        return (Math.random() * n) | 0;
    }

   // Função para atualizar o texto com base no idioma selecionado
   _updateText() {
    // Crie um objeto de tradução que mapeia chaves de tradução para os textos correspondentes em diferentes idiomas
    const translations = {
        "projects.title": {
            english: "Projects",
            portuguese: "Projetos"
        },
        // Adicione mais chaves de tradução conforme necessário para outros elementos
    };

    // Atualize o texto com base no idioma selecionado e na chave de tradução
    const translationKey = "projects.title"; // Use a chave de tradução correspondente ao elemento que você deseja traduzir
    if (this._language === "english") {
        this._text = translations[translationKey].english;
    } else if (this._language === "portuguese") {
        this._text = translations[translationKey].portuguese;
    }
    

    this._textContent(this._text); // Atualize o texto
}
}

class TranslationHandler {
    constructor(root, translationKey, translations) {
        this._root = root;
        this._translationKey = translationKey;
        this._translations = translations;
        this._language = "portuguese"; // Idioma inicial (você pode definir como necessário)
        this._text = "";
        Object.seal(this);

        
        this._updateText();
    }

    // Ative a tradução
    enable() {
        this._updateText(); // Atualize o texto quando a tradução é ativada
    }

    // Defina o idioma
    setLanguage(language) {
        this._language = language;
        this._updateText(); // Atualize o texto com base no novo idioma
    }

    // Função para atualizar o texto com base no idioma selecionado
    _updateText() {
        if (this._translations.hasOwnProperty(this._translationKey)) {
            const translationData = this._translations[this._translationKey];
            this._text = translationData[this._language] || "";
        } else {
            // Se a chave de tradução não for encontrada, defina o texto como vazio ou algum valor padrão
            this._text = "";
        }

        // Atualize o conteúdo do elemento HTML com o novo texto traduzido
        this._root.innerText = this._text;
    }
}
        // Crie um objeto de tradução que mapeia chaves de tradução para os textos correspondentes em diferentes idiomas
  
        const translations = {
            "sobre-mim": {
                english: "I am currently pursuing a degree in Analysis and Systems Development, and I previously completed a four-year program in Computer Science at the University Center Filadélfia - UniFil. I am continuously deepening my knowledge in the field of systems development, always striving for more knowledge, and with a strong desire to put everything into practice. I remain highly motivated to learn whatever is necessary to grow in this field.",
                portuguese: "Atualmente estou cursando Análise e Desenvolvimento de Sistemas, também cursei Ciência da Computação por 4 anos, no Centro Universitário Filadélfia - UniFil. Estou me aprofundando cada vez mais na área de desenvolvimento de sistemas, sempre buscando mais conhecimento, e com muita vontade de colocar tudo em prática. Sigo com muita disposição para aprender o que for necessário para crescer na área.",
            },
            "projects.social": {
                english: "My social media links!",
                portuguese: "Minhas redes sociais!",
            },
            "helpcar.title": {
                english: "HelpCar Baterias Website",
                portuguese: "Site HelpCar Baterias",
            },
            "helpcar-description": {
                english: "A contact website for HelpCar Baterias company, using HTML, CSS, and JavaScript.",
                portuguese: "Projeto de um site de contato para a empresa HelpCar Baterias, usando HTML, CSS e Javascript",
            },
            "projects-assinatura": {
                english: "Signature Processor",
                portuguese: "Tratador de Assinaturas",
            },
            "assinatura-descricao": {
                english: "A signature processing program using Python and its libraries: OpenCV, Streamlit, Numpy, Matplotlib and OS. In it is possible to load a image, select a folder and also the level of filtering desired. After that the program converts the image to a grayscale format, apply the binary limiar filter, also a Gaussian smoothing filter and a median filter.",
                portuguese: "Projeto de um programa de tratamento de assinaturas eletrônicas, usando Python e suas bibliotecas: OpenCV, Streamlit, Numpy, Matplotlib e OS. Nele é possível carregar a imagem, selecionar a pasta de destino e então selecionar o nível de filtro desejado. Ao selecionar o valor, o programa converte a imagem para uma escala cinza, aplica o filtro limiar binário, um filtro de suavização Gaussiano e o de mediana.",
            },
            "projects-table": {
                english: "Table Processor",
                portuguese: "Tratador de Tabelas",
            },
            "table-description": {
                english: "A program for processing tables of exam values using Python and its libraries: Pandas, Streamlit, Re, Openpyxl, and Base64. In it is possible to load a excel table, select the columns you want to use in the process, and after that, the data is treated into a new table wich is exported into a CSV file.",
                portuguese: "Projeto de um programa de tratamento de tabelas de valores de exames, usando Python e suas bibliotecas: Pandas, Streamlit, Re, Openpyxl e Base64. Nele é possível carregar a tabela em excel, selecionar as colunas dos códigos de procedimento e valor, que você quer usar no tratamento, que serão adicionadas na tabela base (que está pronta para importação). Após a seleção das colunas, os dados são tratados e salvos em uma nova tabela com base no modelo que o programa usa de base. E então, o programa gera o download da tabela tratada, em csv.",
            },
            "projects-menu": {
                english: "Digital Menu",
                portuguese: "Cardápio Digital",
            },
            "menu-description": {
                english: "A personal project for a simple digital menu prototype using Java Spring, Spring MVC, React, TypeScript, and PostgreSQL. For the fronted, I used the following tecnologies: React, TypeScript, and React Query. This menu allows the user to include new products and delete the existing ones. In my Linkedin profile I uploaded a video showing the program.",
                portuguese: "Projeto pessoal de um simples protótipo de cardápio digital utilizando as seguintes tecnologias no backend: Java Spring e Spring MVC para criação do servidor, Spring Data JPA para manipulação e persistência de dados, Lombok e o banco de dados PostgreSQL. No frontend foram utilizadas as tecnologias: React, Typescript e React Query. Esse cardápio permite incluir novos produtos e fazer a exclusão do cardápio. No meu Linkedin eu postei um vídeo mostrando o funcionamento.",
            },
            "projects-links":{
                english: "DevLinks - Luan Araujo",
                portuguese: "DevLinks - Luan Araujo",
            },
            "links-description":{
                english: "Project carried out to complete the exclusive and free program, Discover, promoted by Rocketseat for teaching web technologies.",
                portuguese:"Prjeto realizado para concluir o programa exclusivo e gratuito, Discover, promovido pela Rocketseat para ensino de tecnologias WEB.",
            }
            // Adicione mais chaves de tradução conforme necessário
        };
        





const englishButton = document.getElementById("english-button");
const portugueseButton = document.getElementById("portuguese-button");
const elTitle = document.querySelector("#title");
const elProjetos = document.querySelector("#projetos");

const elSobremim = document.querySelector("#sobre p");
const sobreMimTranslator = new TranslationHandler(elSobremim, "sobre-mim", translations);
sobreMimTranslator.enable();

const elRedes = document.querySelector("#sobre h3");
const elRedesTranslator = new TranslationHandler(elRedes, "projects.social", translations);
elRedesTranslator.enable();

const elHelpCar = document.querySelector("#helpcar h3");
const elHelpCarTranslator = new TranslationHandler(elHelpCar, "helpcar.title", translations);
elHelpCarTranslator.enable();

const elHelpDesc = document.querySelector("#helpcar p");
const elHelpDescTranslator = new TranslationHandler(elHelpDesc, "helpcar-description", translations);
elHelpDescTranslator.enable();

const elAssTitle = document.querySelector("#assinatura h3");
const elAssTitleTranslator = new TranslationHandler(elAssTitle, "projects-assinatura", translations);
elAssTitleTranslator.enable();

const elAssDesc = document.querySelector("#assinatura p");
const elAssDescTranslator = new TranslationHandler(elAssDesc, "assinatura-descricao", translations);
elAssDescTranslator.enable();

const elTable = document.querySelector("#tabela h3");
const elTableTranslator = new TranslationHandler(elTable, "projects-table", translations);
elTableTranslator.enable();

const elTableDesc = document.querySelector("#tabela p");
const elTableDescTranslator = new TranslationHandler(elTableDesc, "table-description", translations);
elTableDescTranslator.enable();

const elMenu = document.querySelector("#cardapio h3");
const elMenuTranslator = new TranslationHandler(elMenu, "projects-menu", translations);
elMenuTranslator.enable();

const elMenuDesc = document.querySelector("#cardapio p");
const elMenuDescTranslator = new TranslationHandler(elMenuDesc, "menu-description", translations);
elMenuDescTranslator.enable();

const elLink = document.querySelector("#devlinks h3");
const elLinkTranslator = new TranslationHandler(elLink, "projects-links", translations);
elLinkTranslator.enable();

const elLinkDesc = document.querySelector("#devlinks p");
const elLinkDescTranslator = new TranslationHandler(elLinkDesc, "links-description", translations);
elLinkDescTranslator.enable();

const glitchTitle = new TextGlitch(elTitle);
const glitchProjetos = new MeusProjetos(elProjetos);

glitchTitle.on();
glitchProjetos.on();

// Adicione eventos de clique para os botões de idioma
englishButton.addEventListener("click", function () {
    glitchTitle._language = "english";
    glitchTitle._updateText();
    glitchProjetos._language = "english";
    glitchProjetos._updateText();
    sobreMimTranslator.setLanguage("english");
    elRedesTranslator.setLanguage("english");
    elHelpCarTranslator.setLanguage("english");
    elHelpDescTranslator.setLanguage("english");
    elAssTitleTranslator.setLanguage("english");
    elAssDescTranslator.setLanguage("english");
    elTableTranslator.setLanguage("english");
    elTableDescTranslator.setLanguage("english");
    elMenuTranslator.setLanguage("english");
    elMenuDescTranslator.setLanguage("english");
    elLinkTranslator.setLanguage("english");
    elLinkDescTranslator.setLanguage("english");
});

portugueseButton.addEventListener("click", function () {
    glitchTitle._language = "portuguese";
    glitchTitle._updateText();
    glitchProjetos._language = "portuguese";
    glitchProjetos._updateText();
    sobreMimTranslator.setLanguage("portuguese");
    elRedesTranslator.setLanguage("portuguese");
    elHelpCarTranslator.setLanguage("portuguese");
    elHelpDescTranslator.setLanguage("portuguese");
    elAssTitleTranslator.setLanguage("portuguese");
    elAssDescTranslator.setLanguage("portuguese");
    elTableTranslator.setLanguage("portuguese");
    elTableDescTranslator.setLanguage("portuguese");
    elMenuTranslator.setLanguage("portuguese");
    elMenuDescTranslator.setLanguage("portuguese");
    elLinkTranslator.setLanguage("portuguese");
    elLinkDescTranslator.setLanguage("portuguese");
});