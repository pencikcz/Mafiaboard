const volumeSlider =
  document.getElementById('volume');

let currentVolume = 1;

volumeSlider.addEventListener('input', e => {
  currentVolume = e.target.value;
});

const soundList = [
    { text: "Musel sem zabít 10 lidí", file: "10_lidi.wav" },
    { text: "Aaaaaaa", file: "aaa.wav" },
	{ text: "A ať se moc netrápí", file: "at_se_netrapi.wav" },
    { text: "Bordel", file: "bordel.wav" },
    { text: "Dohonili pěšky", file: "dohonili.wav" },
    { text: "Tys to dokázal", file: "dokazal.wav" },
    { text: "Mokrá prdel", file: "hadr.wav" },
	{ text: "Chcípni", file: "chcipni.wav" },
	{ text: "A je to", file: "jeto.wav" },
	{ text: "Karlo", file: "karlo.wav" },
	{ text: "Kurvičky", file: "kurvicky.wav" },
	{ text: "Milionáři", file: "milionari.wav" },
	{ text: "Na co čekáš", file: "na_co_cekas.wav" },
	{ text: "Nejedeš", file: "nejedes.wav" },
	{ text: "Ani na to nemysli", file: "nemysli.wav" },
	{ text: "Přece bych tě nenechal spát", file: "nenechal_spat.wav" },
	{ text: "Neserte mě", file: "neserte.wav" },
	{ text: "O tom nevim ani prd", file: "nevim_ani_prd.wav" },
	{ text: "Řikám že nevim ani hovno", file: "nevim_hovno.wav" },
	{ text: "Nojoo no", file: "nojo.wav" },
	{ text: "Poctivej občan", file: "obcan.wav" },
	{ text: "Nečekaně odešel", file: "odesel.wav" },
	{ text: "Pardon", file: "pardoon.wav" },
	{ text: "Copak to jde za páreček", file: "parecek.wav" },
	{ text: "Tak parchante!", file: "parchante.wav" },
	{ text: "Rozstřílim prdel na sračky", file: "paulie.wav" },
	{ text: "Ponaučení", file: "ponauceni.wav" },
	{ text: "Rozsypal", file: "rozsypal.wav" },
	{ text: "Salieri Aaaaa", file: "saliaaa.wav" },
	{ text: "Sešívaný xichty", file: "sesivky.wav" },
	{ text: "Stejně nasranej jako ty", file: "stejne_nasranej.wav" },
	{ text: "Hlavu do svěráku", file: "sverak.wav" },
	{ text: "Ty svině!", file: "svine.wav" },
	{ text: "Uuuuuu", file: "uuu.wav" },
	{ text: "V prdeli", file: "vprdeli.wav" },
	{ text: "Vrať se!", file: "vrat_se.wav" },
	{ text: "Chtěli vyjebávat", file: "vyjebavat.wav" },
	{ text: "Mám ženu a děti", file: "zena_deti.wav" },
	{ text: "Zkurvysyn", file: "zkurvysyn.wav" },
	{ text: "Big Dick", file: "bigdik.wav" },
	{ text: "Bongiornoo!", file: "bongiorno.wav" },
	{ text: "Do mě se nikdo srát nebude", file: "do_me_se_srat_nebude.wav" },
	{ text: "Chcípneš teplouši", file: "chcipnesteplo.wav" },
	{ text: "Já jedu taky", file: "jedutaky.wav" },
	{ text: "Ježišmarja", file: "jezismarja.wav" },
	{ text: "Měj se", file: "mej_se.wav" },
	{ text: "Takhle jim neujedem", file: "neujedem.wav" },
	{ text: "Protéza", file: "proteza.wav" },
	{ text: "Řídit bude kdo?", file: "riditbudekdo.wav" },
	{ text: "Si v prdeli", file: "sivprdeli.wav" },
	{ text: "Tlustej bastard", file: "tlustejbastard.wav" },
	{ text: "Zblbnul", file: "zblbnul.wav" },
];

const sounds = {};

const container = document.getElementById('soundboard');
const search = document.getElementById('search');

function createButtons(filter = "") {
  container.innerHTML = "";

  soundList
    .filter(sound =>
      sound.text.toLowerCase().includes(filter.toLowerCase())
    )
    .forEach(sound => {

      if (!sounds[sound.file]) {
        sounds[sound.file] =
          new Audio(`sounds/${sound.file}`);
      }

      const button = document.createElement('button');

      button.className = 'btn';
      button.textContent = sound.text;

      button.addEventListener('click', () => {
        const audio = sounds[sound.file];
		
		audio.volume = currentVolume;
		 
        audio.currentTime = 0;
        audio.play();
      });

      container.appendChild(button);
    });
}

search.addEventListener('input', e => {
  createButtons(e.target.value);
});

createButtons();