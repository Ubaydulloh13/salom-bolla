const textarea = document.getElementById('textarea');
const select = document.getElementById('select');
const select2 = document.getElementById('select2');
const btn = document.getElementById('btn');
const result = document.getElementById('textarea2');

const API='https://api.mymemory.translated.net/get?q=${fromTexArea.value}&langpair=${fromSelect.value}|${toSelect.value}';
let langs = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "zh", name: "Chinese" },
  { code: "ja", name: "Japanese" },
  { code: "ar", name: "Arabic" },
  { code: "ru", name: "Russian" },
  { code: "hi", name: "Hindi" },
  { code: "bn", name: "Bengali" },
  { code: "pt", name: "Portuguese" },
  { code: "it", name: "Italian" },
  { code: "ko", name: "Korean" },
  { code: "tr", name: "Turkish" },
  { code: "ur", name: "Urdu" },
  { code: "fa", name: "Persian" },
  { code: "id", name: "Indonesian" },
  { code: "ms", name: "Malay" },
  { code: "th", name: "Thai" },
  { code: "vi", name: "Vietnamese" },
  { code: "sw", name: "Swahili" },
  { code: "pl", name: "Polish" },
  { code: "uk", name: "Ukrainian" },
  { code: "uz", name: "Uzbek" },
  { code: "ro", name: "Romanian" },
  { code: "nl", name: "Dutch" },
  { code: "sv", name: "Swedish" },
  { code: "no", name: "Norwegian" },
  { code: "fi", name: "Finnish" },
  { code: "hu", name: "Hungarian" },
  { code: "cs", name: "Czech" },
  { code: "el", name: "Greek" },
  { code: "he", name: "Hebrew" },
  { code: "bg", name: "Bulgarian" },
  { code: "da", name: "Danish" },
  { code: "sk", name: "Slovak" },
  { code: "sl", name: "Slovenian" },
  { code: "sr", name: "Serbian" },
  { code: "hr", name: "Croatian" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "ml", name: "Malayalam" },
  { code: "kn", name: "Kannada" },
  { code: "mr", name: "Marathi" },
  { code: "gu", name: "Gujarati" },
  { code: "pa", name: "Punjabi" },
];

langs.map(til => {
  const option = document.createElement('option');
  option.value = til.code;
  option.innerText = til.name;
  select.appendChild(option);
});

langs.map(til => {
  const option = document.createElement('option');
  option.value = til.code;
  option.innerText = til.name;
  select2.appendChild(option);
});

btn.addEventListener('click', async () => {
  if (textarea.value.trim().length < 1) {
    alert("matn kiritilmagan");
  } else {
    const javob = await fetch(`https://api.mymemory.translated.net/get?q=${textarea.value}&langpair=${select.value}|${select2.value}`);
    const data = await javob.json(); 
    console.log(data);
    result.value = data.responseData.translatedText; 
  }
});