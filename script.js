// AJ CodeLab: all demos run locally in the visitor's browser.
const nav = document.getElementById('nav');
document.getElementById('menuToggle').addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('aj-codelab-theme') === 'light') document.body.classList.add('light');
function themeIcon(){ themeToggle.textContent = document.body.classList.contains('light') ? '☾' : '☼'; }
themeIcon();
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('aj-codelab-theme', document.body.classList.contains('light') ? 'light' : 'dark');
  themeIcon();
});

const pythonLessons = {
 intro:{n:'01',title:'Python के हो?',text:'Python एउटा सजिलै पढ्न सकिने programming language हो। यसबाट automation, web development, data analysis र AI सम्बन्धी project बनाउन सकिन्छ।',code:'print("नमस्कार, AJ CodeLab!")',tip:'माथिको सन्देश परिवर्तन गरेर आफ्नो नाम print गर्नुहोस्।'},
 variables:{n:'02',title:'Variables र Data Types',text:'Variable भनेको value राख्ने नाम हो। Python मा text का लागि string, पूर्ण संख्याका लागि int र दशमलवका लागि float प्रयोग हुन्छ।',code:'name = "Aayush"\\nage = 16\\nprint(name)\\nprint(age)',tip:'आफ्नो demo नाम र मनपर्ने संख्या राखेर अभ्यास गर्नुहोस्।'},
 condition:{n:'03',title:'If / Else',text:'Condition ले कुनै अवस्था सही वा गलत छ भनेर जाँच्छ। त्यसअनुसार फरक code चलाउन सकिन्छ।',code:'marks = 75\\nif marks >= 40:\\n    print("Pass")\\nelse:\\n    print("Try again")',tip:'marks को value परिवर्तन गरेर नतिजा अनुमान गर्नुहोस्।'},
 loops:{n:'04',title:'Loops',text:'Loop ले एउटै काम धेरै पटक गर्न मद्दत गर्छ। for loop ले sequence का item हरूमा पालैपालो काम गर्छ।',code:'for number in range(1, 6):\\n    print(number)',tip:'range(1, 6) लाई range(1, 11) बनाएर हेर्नुहोस्।'},
 functions:{n:'05',title:'Functions',text:'Function भनेको फेरि प्रयोग गर्न मिल्ने code block हो। def keyword बाट function बनाइन्छ।',code:'def greet(name):\\n    print("नमस्कार", name)\\n\\ngreet("Aayush")',tip:'greet() मा अर्को demo नाम पठाएर अभ्यास गर्नुहोस्।'},
 project:{n:'06',title:'सानो Project: Simple Calculator',text:'तलको उदाहरणले दुई संख्याको जोड देखाउँछ। पछि घटाउ, गुणन र भागका विकल्प थप्न सक्नुहुन्छ।',code:'first = 12\\nsecond = 8\\nresult = first + second\\nprint("जम्मा:", result)',tip:'१२ र ८ को सट्टा अरू संख्या राखेर नतिजा जाँच्नुहोस्।'}
};
const lesson = document.getElementById('pythonLesson');
document.querySelectorAll('[data-python]').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('[data-python]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const d = pythonLessons[btn.dataset.python];
  lesson.innerHTML = `<div class="code-title"><span>📘 LESSON ${d.n}</span><span>PYTHON BASICS</span></div><h3>${d.title}</h3><p>${d.text}</p><div class="code-block"><button class="copy-btn">Copy</button><pre><code>${d.code.replace(/&/g,'&amp;').replace(/</g,'&lt;')}</code></pre></div><p class="tip">💡 अभ्यास: ${d.tip}</p>`;
  bindCopy();
}));
function bindCopy(){document.querySelectorAll('.copy-btn').forEach(btn=>btn.onclick=async()=>{const code=btn.parentElement.querySelector('code').innerText;try{await navigator.clipboard.writeText(code);btn.textContent='Copied!';setTimeout(()=>btn.textContent='Copy',1300)}catch{btn.textContent='Select code';}})}
bindCopy();

const passwordInput = document.getElementById('passwordInput');
passwordInput.addEventListener('input', () => {
  const p = passwordInput.value;
  let score = 0;
  if(p.length >= 8) score++;
  if(p.length >= 12) score++;
  if(/[a-z]/.test(p) && /[A-Z]/.test(p)) score++;
  if(/[0-9]/.test(p)) score++;
  if(/[^A-Za-z0-9]/.test(p)) score++;
  const bar = document.getElementById('strengthBar');
  const text = document.getElementById('strengthText');
  const width = [0,20,40,60,80,100][score];
  bar.style.width = width + '%';
  bar.style.background = score < 2 ? '#ef7777' : score < 4 ? '#e9c46a' : '#63e6a5';
  text.textContent = !p ? 'पासवर्ड टाइप गरेर जाँच गर्नुहोस्।' : score < 2 ? 'कमजोर — लामो र फरक प्रकारका अक्षर प्रयोग गर्नुहोस्।' : score < 4 ? 'मध्यम — अझ लामो र unique बनाउनुहोस्।' : 'राम्रो सुरुवात! हरेक account मा फरक password राख्नुहोस्।';
});

document.querySelectorAll('.choice').forEach(btn => btn.addEventListener('click', () => {
  const feedback = document.getElementById('phishFeedback');
  feedback.textContent = btn.dataset.answer === 'suspicious'
    ? 'सही! तुरुन्तै दबाब दिने र password माग्ने सन्देश phishing हुन सक्छ। Link नखोल्नुहोस्; आधिकारिक app/site बाट जाँच गर्नुहोस्।'
    : 'फेरि सोच्नुहोस्: अनौठो link र password माग्ने सन्देश ठूलो चेतावनी हो।';
}));

const checks = [...document.querySelectorAll('.checklist input')];
function updateChecks(){const done=checks.filter(c=>c.checked).length;document.getElementById('checkProgress').textContent=`${done} / ${checks.length} पूरा`;}
checks.forEach(c=>c.addEventListener('change',updateChecks));

document.querySelectorAll('[data-quiz]').forEach(btn=>btn.addEventListener('click',()=>{
  document.getElementById('quizFeedback').textContent = btn.dataset.quiz === 'b'
    ? 'एकदम सही! स्पष्ट अनुमति र तय गरिएको scope बिना security test गर्नु हुँदैन।'
    : 'त्यो सही होइन। सुरक्षा परीक्षणका लागि पहिले स्पष्ट अनुमति र तय गरिएको दायरा चाहिन्छ।';
}));

const lessonDetails = {
 ethics:['Ethical Hacking के हो?','Ethical hacking भनेको अनुमति लिएर कुनै system वा application को सुरक्षा कमजोरी पहिचान गरी त्यसलाई सुधार्न सहयोग गर्ने प्रक्रिया हो। यसको आधारभूत नियम: अनुमति, निश्चित scope, सुरक्षित परीक्षण र जिम्मेवार रिपोर्टिङ। अभ्यास केवल आफ्नै बनाएको demo वा स्पष्ट रूपमा अनुमति दिइएको training lab मा गर्नुहोस्।'],
 safety:['Cyber Safety का आधार','हरेक account मा फरक र लामो password प्रयोग गर्नुहोस्। सम्भव भए Multi-Factor Authentication (MFA) खोल्नुहोस्। अनपेक्षित link, attachment वा password माग्ने सन्देशमा शंका गर्नुहोस्। Software अद्यावधिक राख्नुहोस् र recovery विकल्प सुरक्षित राख्नुहोस्।'],
 network:['Network र Web Basics','IP address ले network मा device पहिचान गर्न मद्दत गर्छ। DNS ले domain name लाई IP address सँग जोड्छ। HTTPS ले browser र website बीचको communication encrypt गर्छ। यी आधार बुझ्नु security learning को राम्रो सुरुवात हो।'],
 checking:['सुरक्षित Security Checking','आफ्नो demo website मा HTTPS, बलियो authentication, सुरक्षित password storage, software updates, access permissions र backup जाँच्नुहोस्। भेटिएको समस्या, प्रभाव र सुधारको उपाय लेखेर रिपोर्ट बनाउनुहोस्। अनुमति नभएको system परीक्षण नगर्नुहोस्।']
};
const modal=document.getElementById('lessonModal');
document.querySelectorAll('[data-open]').forEach(btn=>btn.addEventListener('click',()=>{
  const d=lessonDetails[btn.dataset.open];document.getElementById('modalTitle').textContent=d[0];
  document.getElementById('modalBody').innerHTML=`<p>${d[1]}</p><p><b>अभ्यास:</b> मुख्य बुँदाहरू आफ्नो शब्दमा नोट गर्नुहोस् र सुरक्षित demo वातावरणमा मात्र प्रयोग गर्नुहोस्।</p>`;
  modal.classList.add('show');modal.setAttribute('aria-hidden','false');
}));
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true')}
document.getElementById('modalClose').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.getElementById('year').textContent=new Date().getFullYear();
