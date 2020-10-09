const litmuspapers = [
    "What if it happened to my _________ (close older relative)?",
    "Is this a turning point \n or a footnote?",
    "Do I have a strong opinion \n that could be controversial?",
    "Conjure your 8 year old self. \n Do they agree with you?",
    "Why am I having a strong \n emotional response to this?",
    "Jump forwards 50 years. \n Did this age well?",
    "How would I feel if this was the \n last thing I did in this job?",
    "Is this a zero-sum game?",
    "Is this something I'd want \n to be known for in future?",
    "Would I feel uncomfortable if _________ (someone I admire) saw this?",
    "What if this was put online?",
    "How can I get inside someone \n else's point of view?",
    "What's the worst \n that could happen?",
    "Make a strong argument \n for the opposition",
    "Does this represent me well?",
    "It's my last day at work. \n Happy to sign-off on this?",
    "Can I focus more on outcomes \n and less on causes?",
    "Would I spend _________ (cost of grocery shop) of my money for veto power?",
    "Is this important or urgent?",
    "Do I have enough context \n to make a decision?",
    "Without further discussion, \n will this play on my mind?",
    "Would my idea of what's fair \n clash with someone else's?",
    "What have we \n forgotten or ignored?",
    "Is this easy to misinterpret \n or miscommunicate?",
    "Can I feel about it more and \n rationalise about it less?",
    "What if _________ (colleague I respect) strongly opposed my position?",
    "Are we bike shedding or \n avoiding a bigger issue?",
    "How can we refine \n our intentions?",
    "What are my motives?",
    "What's the least bad option?",
    "Would I want _________ (close younger relative) to hear about this?",
    "Is this the person _________ (my dog, cat, etc.)  thinks I am?",
    "Does this make me feel \n more or less like myself?",
    "Are the incentives \n helping or harming?",
    "Does this feel like the future \n I want to work towards?",
    "Can I be more vulnerable?",
    "Is this principles-based \n or ad hoc?",
    "How can we assess the value of competing futures?",
    "How can I help _________ (colleague/manager) understand my concerns?",
    "Turn off your cynical inner voice. \n Now what?",
    "What's the most \n charitable interpretation?",
    "What are the limits \n of my imagination?",
    "Have we assessed the \n cost of failure?",
    "Am I relying on someone \n else's ignorance?",
    "What if it happened to me?",
    "Is this an accepted moral standard \n or a spec in proposal?",
    "What if this happened IRL \n instead of on a computer?",
    "Can I feel someone's pain \n and take action to help?",
    "Imagine your best self. \n What would they do?",
    "Have I personally met the \n people affected by this?",
    "Would my _________ (close older relative) think this is fair?",
    "Why am I feeling \n uncomfortable about this?",
    "What's one small change that \n would improve this scenario?",
    "If I had a dream about this, \n would it be a nightmare?",
    "Do I want to tell _________ (someone I love) all about this?",
    "Can I use story-telling to move \n from ambiguity to clarity?",
    "Can we do it? \n vs. \n Should we do it?",
    "What does my gut say?",
    "Would this make a good episode \n of Black Mirror?",
    "Are we keeping our promises?",
    "Do I benefit disproportionately \n from this?",
    "Would it be ok if this decision \n set a precedent?",
    "Am I reinforcing or challenging \n the status quo?",
    "What do we owe to each other?",
    "Consider short-term vs. \n long-term consequences",
    "Who has the most and least \n power in this scenario?"
]

const cards = [...new Set([...litmuspapers])];

const $button = document.getElementById('button');
const $card = document.getElementById('card');
const $strategy = document.getElementById('strategy');
const strategyCount = cards.length;

function annotate(text) {
    let $annotation = document.createElement('p');
    $annotation.setAttribute('id', 'annotation');
    $annotation.innerText = text;
    $card.insertAdjacentElement('afterend', $annotation);      
}

function showCard(meta) {
    let strategy = cards[Math.floor(Math.random() * strategyCount)];
    let annotation = document.getElementById('annotation');

    if (meta) {
    $strategy.classList.add('meta');
    $strategy.innerText = 'These cards evolved from our separate observations on the principles underlying what we were doing. Sometimes they were recognized in retrospect (intellect catching up with intuition), sometimes they were identified as they were happening, sometimes they were formulated. \n\n They can be used as a pack (a set of possibilities being continuously reviewed in the mind) or by drawing a single card from the shuffled pack when a dilemma occurs in a working situation. In this case,the card is trusted even if its appropriateness is quite unclear. They are not final, as new ideas will present themselves, and others will become self-evident.'
    } else {
    $strategy.classList.remove('meta');
    $strategy.innerText = strategy;
    }

    if (annotation) {
    annotation.remove();
    }

    switch (strategy) {
    case "[blank white card]":
        annotate('Each edition of Oblique Strategies included several blank white cards, to add new ideas over time.')
    break;
    default:
    break;
    }

}

document.getElementById('meta').addEventListener('click', function() {
    showCard(true)
});

$button.addEventListener('click', function() {
    showCard(false)
});

window.addEventListener('load', function (){
    showCard()
});