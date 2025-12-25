// مصفوفة النصائح والنفحات
const tips = [
    "الصلاة على النبي ﷺ تفتح الأبواب المغلقة وتكفي الهم.",
    "بر الوالدين هو جنة الدنيا وطريقك المختصر للآخرة.",
    "من ترك شيئاً لله عوضه الله خيراً منه بكثير.",
    "الكلمة الطيبة صدقة، فاجعل لسانك دائماً رطباً بذكر الله.",
    "قيام الليل هو شرف المؤمن ومصدر السكينة في القلب.",
    "الاستغفار يفتح الأقفال ويجلب الرزق بإذن الله.",
    "صلاة الفجر تجعل الإنسان في ذمة الله طوال اليوم.",
    "لا تحزن إن الله معنا؛ شعار المؤمن في كل أزمة.",
    "أحب الأعمال إلى الله أدومها وإن قل.",
    "من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة."
];

const azkar = ["سبحان الله", "الحمد لله", "لا إله إلا الله", "الله أكبر", "أستغفر الله"];
let zIdx = 0, countNum = 0, lastIdx = -1;

// --- وظائف المسبحة ---
const counterDisplay = document.getElementById('counter');
const zekrName = document.getElementById('zekr-name');

document.getElementById('tapBtn').onclick = () => { 
    countNum++; 
    counterDisplay.innerText = countNum; 
};

document.getElementById('resetBtn').onclick = () => { 
    countNum = 0; 
    counterDisplay.innerText = 0; 
};

document.getElementById('changeZekrBtn').onclick = () => { 
    zIdx = (zIdx + 1) % azkar.length; 
    zekrName.innerText = azkar[zIdx]; 
    countNum = 0; 
    counterDisplay.innerText = 0; 
};

// --- وظيفة تشغيل الصوت (سورة الفاتحة) ---
const audio = document.getElementById('quranAudio');
const playBtn = document.getElementById('playAudioBtn');

playBtn.onclick = () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i> إيقاف التلاوة';
        playBtn.classList.add('playing');
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i> استمع لسورة الفاتحة';
        playBtn.classList.remove('playing');
    }
};

// إرجاع الزر لوضعه الطبيعي عند انتهاء الصوت
audio.onended = () => {
    playBtn.innerHTML = '<i class="fas fa-play"></i> استمع لسورة الفاتحة';
    playBtn.classList.remove('playing');
};

// --- وظيفة النفحات العشوائية ---
document.getElementById('newTipBtn').onclick = () => {
    const tipEl = document.getElementById('tip-display');
    let nextIdx;
    do { nextIdx = Math.floor(Math.random() * tips.length); } while (nextIdx === lastIdx);
    lastIdx = nextIdx;

    tipEl.style.opacity = '0';
    setTimeout(() => { 
        tipEl.innerText = tips[nextIdx]; 
        tipEl.style.opacity = '1'; 
    }, 300);
};

// --- وظيفة تغيير الثيم ---
document.getElementById('themeBtn').onclick = () => {
    document.body.classList.toggle('dark-theme');
    const icon = document.querySelector('#themeBtn i');
    if (document.body.classList.contains('dark-theme')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
};