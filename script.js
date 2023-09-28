
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
        this._language = "english"; // Adicione uma variável de idioma inicial
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
        this._updateText(); // Chame a função para atualizar o texto quando os textos são definidos
    }

    // private:
    // .....................................................................
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
        this._updateText(); // Chame a função para atualizar o texto quando o efeito é desligado
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
            english: "$hello friend! My name is Luan Araujo and this is my portfolio.",
            portuguese: "$Olá amigo(a)! Meu nome é Luan Araujo e este é o meu portfólio."
        },
        "sobre":{
            english: "Currently, I am studying Analysis and Systems Development, and I also studied Computer Science (4 years) at UNIFIL. Today, in college and on my own, I am delving deeper into the development field, always seeking more knowledge, eager to put everything into practice, and very willing to learn whatever is necessary to start and grow in this field.",
            portuguese:"Atualmente, estou cursando Análise e Desenvolvimento de Sistemas, e cursei também Ciência da Computação (4 anos) na UNIFIL. Hoje na faculdade e por conta, estou me aprofundando cada vez mais na área de desenvolvimento, buscando sempre mais conhecimento, com muita vontade de colocar tudo em prática e também com muita disposição para aprender o que for necessário para iniciar e crescer muito nessa área."
        }
        // Adicione mais chaves de tradução conforme necessário para outros elementos
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


const englishButton = document.getElementById("english-button");
const portugueseButton = document.getElementById("portuguese-button");
const elTitle = document.querySelector("#title");
const glitch = new TextGlitch(elTitle);

glitch.on();

// Adicione eventos de clique para os botões de idioma
englishButton.addEventListener("click", function () {
    glitch._language = "english"; // Defina o idioma como inglês
    glitch._updateText(); // Atualize o texto
});

portugueseButton.addEventListener("click", function () {
    glitch._language = "portuguese"; // Defina o idioma como português
    glitch._updateText(); // Atualize o texto
});
