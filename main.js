function nameGenerator()
{

    var charset = "Driven thinker-maker-doer long shadow human-centered design disrupt entrepreneur actionable insight physical computing big data pitch deck intuitive sticky note sticky note pair programming. User story waterfall is so 2000 and late iterate driven ship it fund quantitative vs. qualitative quantitative vs. qualitative pitch deck. Physical computing waterfall is so 2000 and late driven ideate ideate innovate driven.Viral pivot engaging workflow big data hacker prototype driven intuitive ship it thought leader integrate sticky note. Grok intuitive sticky note pivot pitch deck grok thinker-maker-doer sticky note paradigm. Affordances thinker-maker-doer personas paradigm ship it affordances experiential co-working integrate food-truck.Thinker-maker-doer responsive responsive grok moleskine human-centered design pitch deck moleskine unicorn experiential 360 campaign ideate. Venture capital fund thought leader SpaceTeam 360 campaign food-truck ship it co-working. Fund earned media ideate integrate moleskine user centered design experiential minimum viable product. SpaceTeam actionable insight actionable insight prototype long shadow minimum viable product innovate actionable insight disrupt driven engaging human-centered design unicorn. Big data disrupt long shadow actionable insight integrate grok entrepreneur long shadow ideate pivot co-working paradigm parallax.Actionable insight thinker-maker-doer 360 campaign workflow viral earned media sticky note big data minimum viable product thought leader pitch deck. Piverate hacker affordances agile user story disrupt prototype physical computing fund intuitive venture capital latte. Thought leader co-working prototype affordances pair programming responsive prototype hacker. Thinker-maker-doer unicorn waterfall is so 2000 and late ship it co-working ship it sticky note thought leader venture capital waterfall is so 2000 and late co-working innovate.Pair programming hacker user centered design intuitive Steve Jobs hacker driven pitch deck bootstrapping prototype pair programming hacker. SpaceTeam thought leader hacker co-working personas 360 campaign integrate grok pivot. Sticky note disrupt affordances ideate user story co-working fund experiential. Steve Jobs innovate sticky note entrepreneur pitch deck entrepreneur grok human-centered design agile earned media quantitative vs. qualitative quantitative vs. qualitative earned media.Personas agile entrepreneur grok pivot big data ship it venture capital engaging paradigm user story bootstrapping big data. Disrupt venture capital integrate earned media parallax 360 campaign bootstrapping parallax convergence responsive ship it engaging. Viral disrupt long shadow user story Steve Jobs Steve Jobs latte latte minimum viable product entrepreneur. Personas pivot co-working engaging convergence co-working thought leader Steve Jobs pitch deck responsive pivot experiential.Sticky note sticky note ideate actionable insight paradigm Steve Jobs convergence. Integrate quantitative vs. qualitative fund experiential grok iterate co-working sticky note ideate affordances latte user centered design personas. Convergence driven quantitative vs. qualitative integrate 360 campaign intuitive earned media big data pair programming engaging disrupt intuitive. Long shadow affordances sticky note earned media co-working affordances cortado parallax agile quantitative vs. qualitative. Long shadow sticky note Steve Jobs physical computing user centered design ideate experiential. Unicorn grok bootstrapping driven parallax pitch deck pivot unicorn convergence parallax unicorn bootstrapping. Pivot paradigm bootstrapping experiential intuitive waterfall is so 2000 and late pivot cortado user centered design entrepreneur. Cortado 360 campaign waterfall is so 2000 and late entrepreneur experiential physical computing 360 campaign. Personas driven paradigm driven integrate moleskine latte innovate intuitive agile human-centered design innovate venture capital.";

    var names = charset.split(" ");

    for (var i = 0; i < names.length; i++){
	    if (names[i].charAt(names[i].length-1) === '.'){
	        names[i] = names[i].substring(0, names[i].length-1);
	    }
	    names[i] = names[i].charAt(0).toUpperCase() + names[i].substring(1);
    }
    
    return names[Math.floor(Math.random()*names.length)] + "ify";
}
console.log(nameGenerator());

// array of what type of app
var typeofapp = Array(
	"an iOS app",
	"a Chrome extension",
	"a website",
	"an Android app",
	"an Oculus Rift app",
	"a Windows app",
	"a search engine",
	"an iPad app",
	"a browser plugin",
	"a game",
	"a Leap Motion app"
	);
// array of buzzwords
var verb = Array(
	"optimizes",
	"helps with",
	"improves",
	"enables"
	);
// array of what the app does
var whatitdoes = Array(
	"dating",
	"music sharing",
	"eating food",
	"education",
	"school",
	"college life",
	"buying a house"
	);

// array of technologies to use
var techOne = Array(

	"machine learning",
	"neural networks",
	"artificial intelligence",
	"virtual reality"
	);

// array of other technologies to use
var techTwo = Array(
	"bitcoin",
	"Backbone.js",
	"Meteor.js",
	"Node.js",
	"React.js",
	"the Twitter API",
	"Haskell",
	"MongoDB",
	"CouchDB",
	"Django",
	"Flask",
	"Ruby on Rails",
	"Go",
	"JQuery"
	);

// start stuff
$(document).ready(function(){
	function generate(){     
		var randType = typeofapp[Math.floor(Math.random()*typeofapp.length)]; // pick something from 'typeofapp' array
        $('#typeofapp').html(randType); // display on page
        var randVerb = verb[Math.floor(Math.random()*verb.length)]; // repeat 
        $('#verb').html(randVerb);
        var randWhatItDoes = whatitdoes[Math.floor(Math.random()*whatitdoes.length)];
        $('#whatitdoes').html(randWhatItDoes);
        var randTechOne = techOne[Math.floor(Math.random()*techOne.length)];
        $('#techOne').html(randTechOne);
        var randTechTwo = techTwo[Math.floor(Math.random()*techTwo.length)];
        $('#techTwo').html(randTechTwo);
        $('#name').html(nameGenerator());
    } // close generate function
    generate(); // call the generate function when the document is loaded
    $('#new').click(function(){ // every time you click on the button
        generate(); // you generate a cool new awesome idea for your next hackathon!!!
    })
}); // close function