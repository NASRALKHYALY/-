// مصفوفة النصائح
const tips = [
    "الصلاة على النبي ﷺ تفتح الأبواب المغلقة وتكفي الهم.",
    "بر الوالدين هو جنة الدنيا وطريقك المختصر للآخرة.",
    "من ترك شيئاً لله عوضه الله خيراً منه بكثير.",
    "الكلمة الطيبة صدقة، فاجعل لسانك دائماً رطباً بذكر الله.",
    "قيام الليل هو شرف المؤمن ومصدر السكينة في القلب.",
    "الاستغفار يفتح الأقفال ويجلب الرزق بإذن الله.",
    "صلاة الفجر تجعل الإنسان في ذمة الله طوال اليوم.",
    "أحب الأعمال إلى الله أدومها وإن قل."
];

// مصفوفة أسماء السور
const surahs = ["الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس", "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه", "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم", "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر", "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق", "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة", "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج", "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس", "التكوير", "الانفطار", "المطففين", "الانشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد", "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات", "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر", "المسد", "الإخلاص", "الفلق", "الناس"];

const azkar = ["سبحان الله", "الحمد لله", "لا إله إلا الله", "الله أكبر", "أستغفر الله"];

// --- 1. برمجة المسبحة ---
let count = 0;
let zekrIdx = 0;
const counterDisp = document.getElementById('counter');
const zekrDisp = document.getElementById('zekr-name');

document.getElementById('tapBtn').addEventListener('click', () => {
    count++;
    counterDisp.innerText = count;
});

document.getElementById('resetBtn').addEventListener('click', () => {
    count = 0;
    counterDisp.innerText = 0;
});

document.getElementById('changeZekrBtn').addEventListener('click', () => {
    zekrIdx = (zekrIdx + 1) % azkar.length;
    zekrDisp.innerText = azkar[zekrIdx];
    count = 0;
    counterDisp.innerText = 0;
});

// --- 2. برمجة المصحف الشريف ---
const surahSelect = document.getElementById('surahSelect');
const mainAudio = document.getElementById('mainQuranAudio');
const currentSurahName = document.getElementById('currentSurahName');

surahs.forEach((name, index) => {
    let option = document.createElement('option');
    let num = (index + 1).toString().padStart(3, '0');
    option.value = num;
    option.text = `سورة ${name}`;
    surahSelect.appendChild(option);
});

surahSelect.addEventListener('change', function() {
    const code = this.value;
    const name = this.options[this.selectedIndex].text;
    mainAudio.src = `https://server8.mp3quran.net/afs/${code}.mp3`;
    currentSurahName.innerText = `تلاوة: ${name}`;
    mainAudio.play();
});

// --- 3. برمجة نفحة ربانية ---
const fatihaAudio = document.getElementById('quranAudio');
const fatihaBtn = document.getElementById('playAudioBtn');

fatihaBtn.onclick = () => {
    if (fatihaAudio.paused) {
        fatihaAudio.play();
        fatihaBtn.innerHTML = '<i class="fas fa-pause"></i> إيقاف مؤقت';
    } else {
        fatihaAudio.pause();
        fatihaBtn.innerHTML = '<i class="fas fa-play"></i> استمع لسورة الفاتحة';
    }
};

// --- 4. تبديل النصائح ---
document.getElementById('newTipBtn').onclick = () => {
    const display = document.getElementById('tip-display');
    const rand = Math.floor(Math.random() * tips.length);
    display.innerText = tips[rand];
};

// --- 5. تبديل الثيم ---
document.getElementById('themeBtn').onclick = () => {
    document.body.classList.toggle('dark-theme');
    const icon = document.querySelector('#themeBtn i');
    icon.className = document.body.classList.contains('dark-theme') ? 'fas fa-sun' : 'fas fa-moon';
};