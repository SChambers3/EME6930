    
/* adverb array */
var adverb = [" lively", " patiently", " very", " quickly", "energetically", 
" reasonably", " bashfully", " bravely", " chaotically", " sadly", " barely", 
" correctly", " briskly", " gently", " greedily", " carefully"];

/* preposition array */
var preposition = [" into", " around", " over", " through", " in", " under",
 " toward", " beyond", " amidst", " along", " by", " behind", " up", " at",
  " from", " of", " with",];

/* adjective array */
var adjective = [" pink", " hot", " furry", " delicious", " gigantic",
 " beautiful", " blue", " little", " horrible", " slimy", " squishy",
  " brilliant", " shiny", " soft", " graceful", " deft", " agile", " clumsy",
   " sly", " burgundy", " fiery"];

/* verb array */
var verb = [" run", " sit", " think", " play"];

/* noun array */
var noun = [" cat", " house", " love", " America", " chair", " jar",
 " street", " unicorn", " dragon", " person", " llama", " gatekeeper",
  " potato", " elephant", " grape", " paper", " towel", " muffin", " square",
   " spaceship", " cow", " giraffe", " lion", " tentacle", " gnome", " banana",
    " school", " herd", " sun", " car", " cupcake", " planet", " hat", " truck",
     " form", " idea", " bun", " monster", " desktop", " ghost", " machine",
      " flower", " Billy", " Susan", " cheese", " sister", " leg", " skunk",
       " Smurf", " shoe", " Medusa", " movie", " bomb", " caravan", " shop",
        " bat", " ball", " boy", " bee", " puppy", " kitten", " chicken nugget",
         " hamburger", " perfume", " hobby", " city", " zipper", " sheep",
          " chip", " cookie"];

/* interjection array */
var interjection = [" Wow", " Yaoza", " Ay", " Oh My", " Ahh", " Hey", " Yay",
 " Shoot", " Cowabunga", " Wowzer", " Rats", " Ooh la la", " Drat", " Zoinks",
  " Super", " Ouch", " Wahoo", " Bravo"];
/* conjunction array */
var conjunction = [" and", " but", " for", " or", " nor", " yet", " so"];

/* pronoun array */
var pronoun = [" her", " his", " that", " our", " I", " your", " itself", 
" herself", " myself", " us", " mine", " them", " it", " this", " these", " those",];

/* article array */
var article = [" the", " a", " an"];

/* This is an array of the 100 most commonly used words in English. */
var commonWords = [
"the","be","to","of","and","a","in","that","have","I","it","for","not",
"on","with","he","as","you","do","at","this","but","his","by","from","they",
"we","say","her","she","or","an","will","my","one","all","would","there","their",
"what","so","up","out","if","about","who","get","which","go","me","when","make",
"can","like","time","no","just","him","know","take","people","into","year","your",
"good","some","could","them","see","other","than","then","now","look","only","come",
"its","over","think","also","back","after","use","two","how","our","work","first",
"well","way","even","new","want","because","any","these","give","day","most",'us'
];

/* Function to express where the chosen words are on the list.*/

function findWord(word, commonArray)
  {
  var len = commonArray.length;
    var position = -9;
  
  	for (i = 0; i < len; i++) 
    		if (commonArray[i] == word)
          position = i + 1;
    
      return position;
  }
 /* Function to write if the words are in the array and their position in the array.*/
 function writeWord(input)
  {
     var pos = findWord(input, commonWords);
    
    if (pos == -9){
      writeText("Your word is not on the most commonly used English words list.", "text");
    }else {
      writeText("The word  '" + input + "'  is number " + pos + " on the list of most commonly used English words.", "text");
  }
}

        // write it to writeText
        function writeText(txt, id)
        {  
        document.getElementById(id).innerHTML=txt;
        }


         // writes story 1 with user input
        function writeUserStory1(text, id)
        {
            var story1= document.getElementById("userInt").value + "! They said " + document.getElementById("userAdv").value + " as they jumped into their " +  document.getElementById("userNoun").value + " and flew off " + document.getElementById("userPrep").value + " their " + document.getElementById("userAdj").value + " tacomobile."
            writeText(story1, "UserStory")
        }
         // writes story 2 with user input
        function writeUserStory2(text, id)
        {
            var story2= "The " + document.getElementById("userNoun").value + " summersaults " + document.getElementById("userAdv").value +" " + document.getElementById("userPrep").value + " the " + document.getElementById("userAdj").value + " fence and then " + document.getElementById("userVerb").value + "s and yells, " + document.getElementById("userInt").value + "."
            writeText(story2, "UserStory")
        }
         // writes story 3 with user input
        function writeUserStory3(text, id)
        {
            var story3= "The " + document.getElementById("userAdj").value + " " + document.getElementById("userNoun").value + " saw a pickle " + document.getElementById("userVerb").value + " while jumping " + document.getElementById("userConj").value + " his mother."
            writeText(story3, "UserStory")
        }

         // writes story 4 with user input
        function writeUserStory4(text, id)
        {
            var story4= document.getElementById("userInt").value + ", screamed the " + document.getElementById("userNoun").value + " as it " + document.getElementById("userAdv").value + " fell from the " + document.getElementById("userAdj").value + " ball."
            writeText(story4, "UserStory")
        }
         // writes story 5 with user input
        function writeUserStory5(text, id)
        {
            var story5= " The " + document.getElementById("userNoun").value + "s saw the pythons " + document.getElementById("userAdv").value + " " + document.getElementById("userVerb").value + " but didn't stop the " + document.getElementById("userAdj").value + " danceoff."
            writeText(story5, "UserStory")
        }



         // returns random input from the arrays
        function randomPartOfSpeech(AnArray){
            return AnArray[Math.floor(Math.random() * (AnArray.length))];

        }


         // writes story 1 with random input

        function writeRandomStory1(text, id)
        {
            var story1= randomPartOfSpeech(interjection) + "! They said " + randomPartOfSpeech(adverb) + " as they jumped into their " +  randomPartOfSpeech(noun) + " and flew off " + randomPartOfSpeech(preposition) + " their " + randomPartOfSpeech(adjective) + " tacomobile."
            writeText(story1, "RandomStory")
        }
        // writes story 1 with random input
        function writeRandomStory2(text, id)
        {
            var story2= "The " + randomPartOfSpeech(noun) + " summersaults " + randomPartOfSpeech(adverb) +" " + randomPartOfSpeech(preposition) + " the " + randomPartOfSpeech(adjective) + " fence and then " + randomPartOfSpeech(verb) + "s and yells, " + randomPartOfSpeech(interjection) + "."
            writeText(story2, "RandomStory")
        }
        // writes story 3 with random input
        function writeRandomStory3(text, id)
        {
            var story3= "The " + randomPartOfSpeech(adjective) + " " + randomPartOfSpeech(noun) + " saw a pickle " + randomPartOfSpeech(verb) + " while jumping " + randomPartOfSpeech(conjunction) + " his mother."
            writeText(story3, "RandomStory")
        }
        // writes story 4 with random input
        function writeRandomStory4(text, id)
        {
            var story4= randomPartOfSpeech(interjection) + ", screamed the " + randomPartOfSpeech(noun) + " as it " + randomPartOfSpeech(adverb) + " fell from the " + randomPartOfSpeech(adjective) + " ball."
            writeText(story4, "RandomStory")
        }
        // writes story 5 with random input
        function writeRandomStory5(text, id)
        {
            var story5= " The " + randomPartOfSpeech(noun) + "s saw the pythons " + randomPartOfSpeech(adverb) + " " + randomPartOfSpeech(verb) + " but didn't stop the " + randomPartOfSpeech(adjective) + " danceoff."
            writeText(story5, "RandomStory")
        }

    /* Objects are created by calling this constructor below.*/
  function Hint (
      Def,
      Ex,
      Clue
){
          this.Def = Def;
          this.Ex = Ex;
          this.Clue = Clue;

              /* Creates a string using the constructor above.*/
        this.writeExample = function () {
          var str = 
          "<b>Definition:</b> "   + this.Def + "<br>" +
          "<b>Example:</b>  "   + this.Ex + "<br>" +
          "<b>Clue:</b> "   + this.Clue
;
          writeText(str, "hint");

      };
    }
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var NOUN = new Hint(
            "Nouns are naming words for people, places, things, and ideas.",
            "boy, car, Alabama, pen.",
            "Can you put 'a', 'an', or 'the' in front of it? Is it a name?"
        );
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var ART = new Hint(
            "Articles are 'a', 'an' and 'the'.",
            "a, an, the.",
            "This one doesn't need a clue."
        );
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var ADJ = new Hint(
            "Adjectives are descriptive words that modify a noun or pronoun.",
            "happy, silly, angry, blue, wet.",
            "Find the nouns and then ask 'which noun?' or 'what noun?'"
        );
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var ADV = new Hint(
            "Adverbs are descriptive words that modify an adjective, a verb, or another adverb.",
            "slyly, happily, deftly, really.",
            "Adverbs answer 'how', 'why', 'when', and 'where'. Many adverbs end with '-ly'. (If you don't know what it is, it is probably an adverb.)"       
        );
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var PREP = new Hint(
            "Prepositions are words used to refer to position, time, or movement.",
            "into, up, down, behind, for.",
            "Words that fin in 'The mouse goes ______ the box'. Also BUT AL DOES acronym."
        );
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var CONJ = new Hint(
            "Conjunctions are words that join groups of similar words together",
            "and, or, for, nor, yet, but.",
            "They combine two similar things."
        );
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var VERB = new Hint(
            "Verbs are words that show action, being, or link subjects to predicates.",
            "swimming, played, is, seemed, thought.",
            "Find the action in the sentence (remember to look for 'be' verbs)."
        );
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var PRO = new Hint(
            "Pronouns are words that take the place of a noun.",
            "mine, his, ourselves, whom, somebody, all.",
            "There are 4 kinds of pronouns: personal (these refer to people - him), demonstrative (these point - that), interrogative (these ask questions - who), and indefinite (these are for uncertainty - anybody)."
        );
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var INT = new Hint(
            "Interjections are abrupt remarks that show strong feeling or reaction.",
            "Alas, Oh, Zoinks, Wahoo",
            "These usually expressions or filler words."
        );
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var SUB = new Hint(
            "Subjects are nouns or pronouns that perform the action verb or are subject to the linking verb",
            "<em>Mike</em> ran the race, <em>The dumplings</em> were delicious. ",
            "Find the verb and ask who did the verb? The subject is NEVER in a prepositional phrase!"
        );
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var MOD = new Hint(
            "Modifiers are words that change, clarify, qualify, limit, or modify other words.",
            "The <em>ugly</em> duckling is sad. We ran <em>quickly</em>.",
            "Adjectives, Articles, Adverbs, and Prepositional Phrases can all be Modifiers."
        );
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var OP = new Hint(
            "Objects of Prepositions are nouns or pronouns following the prepositions.",
            "toward the <em>house</em>, in the <em>box</em>, under the <em>table</em>.",
            "The noun in a prepositional phrase is the object of a preposition."
        );
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var DO = new Hint(
            "Direct Objects are nouns or pronouns that are recipients of the transitive verb action.",
            "The boy kicked <em>the ball</em>. She threw <em>the toy.</em>",
            "Say the subject, the verb, and then 'what'? (He kicked what? - the ball)."
        );  
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var IO = new Hint(
            "Indirect Objects are the nouns or pronouns that are affected by the action of a transitive verb (usually the recipient) but not the object.",
            "The boy kicked <em>his mother</em> the ball. She threw <em> him </em> the toy.",
            "If there is an Indirect Object, it always comes between the Verb and the Direct Object."
        );
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var PADJ = new Hint(
            "A Predicate Adjective is the adjective used after a linking verb to modify the subject.",
            "She seems <em>nice</em>. The tomato tastes <em>juicy</em>.",
            "Check for a linking verb. If there is one, and it is followed by an adjective, it is a Predicate Adjective."
        );
     /* variables with properties listed as "new Hint" to be called by the constructor */
        var PNOM = new Hint(
            "A Predicate Nominative is the nominative noun used after a linking verb to complement the subject.",
            "My brother is <em>an eighth grader</em>. Mrs. Jones is <em> an English teacher</em>.",
            "Check for a linking verb. If there is one, and it is followed by a noun, it is a Predicate Nominative." 
        );





