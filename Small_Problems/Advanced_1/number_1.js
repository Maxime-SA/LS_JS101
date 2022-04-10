const template1 = 'The %{adjectives} brown %{nouns} %{adverbs} %{verbs} the %{adjectives} yellow %{nouns}, ' +
                  'who %{adverbs} %{verbs} his %{nouns} and looks around.';

function madlibs(template) {

  const replacement = {
    adjectives : ['quick','lazy','sleepy','noisy','hungry'],
    nouns : ['fox','dog','head','leg','tail','cat'],
    verbs : ['jumps','lifts','bites','licks','pats'],
    adverbs : ['easily','lazily','noisily','excitedly'],
  };

  function replaceText(match) {
    let key = match.replace(/[^a-z]/gi, '');
    let index = Math.floor(Math.random() * replacement[key].length);
    return replacement[key][index];
  }

  return template.replace(/%{[a-z]+}/gi, replaceText);

}

console.log(madlibs(template1));