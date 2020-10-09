const litmuspapers = [
    "What if it happened to my _________ (close older relative)?",
    "Is this a turning point or a footnote?",
    "Do I have a strong opinion that could be controversial?",
    "Conjure your 8 year old self. Do they agree with you?",
    "Why am I having a strong emotional response to this?",
    "Jump forwards 50 years. Did this age well?",
    "How would I feel if this was the last thing I did in this job?",
    "Is this a zero-sum game?",
    "Is this something I'd want to be known for in future?",
    "Would I feel uncomfortable if _________ (someone I admire) saw this?",
    "What if this was put online?",
    "How can I get inside someone else's point of view?",
    "What's the worst that could happen?",
    "Make a strong argument for the opposition",
    "Does this represent me well?",
    "It's my last day at work. Happy to sign-off on this?",
    "Can I focus more on outcomes and less on causes?",
    "Would I spend _________ (cost of grocery shop) of my money for veto power?",
    "Is this important or urgent?",
    "Do I have enough context to make a decision?",
    "Without further discussion, will this play on my mind?",
    "Would my idea of what's fair clash with someone else's?",
    "What have we forgotten or ignored?",
    "Is this easy to misinterpret or miscommunicate?",
    "Can I feel about it more and rationalise about it less?",
    "What if _________ (colleague I respect) strongly opposed my position?",
    "Are we bike shedding or avoiding a bigger issue?",
    "How can we refine our intentions?",
    "What are my motives?",
    "What's the least bad option?",
    "Would I want _________ (close younger relative) to hear about this?",
    "Is this the person _________ (my dog, cat, etc.)  thinks I am?",
    "Does this make me feel more or less like myself?",
    "Are the incentives helping or harming?",
    "Does this feel like the future I want to work towards?",
    "Can I be more vulnerable?",
    "Is this principles-based or ad hoc?",
    "How can we assess the value of competing futures?",
    "How can I help _________ (colleague/manager) understand my concerns?",
    "Turn off your cynical inner voice. Now what?",
    "What's the most charitable interpretation?",
    "What are the limits of my imagination?",
    "Have we assessed the cost of failure?",
    "Am I relying on someone else's ignorance?",
    "What if it happened to me?",
    "Is this an accepted moral standard or a spec in proposal?",
    "What if this happened IRL instead of on a computer?",
    "Can I feel someone's pain and take action to help?",
    "Imagine your best self. What would they do?",
    "Have I personally met the people affected by this?",
    "Would my _________ (close older relative) think this is fair?",
    "Why am I feeling uncomfortable about this?",
    "What's one small change that would improve this scenario?",
    "If I had a dream about this, would it be a nightmare?",
    "Do I want to tell _________ (someone I love) all about this?",
    "Can I use story-telling to move from ambiguity to clarity?",
    "Can we do it? vs. Should we do it?",
    "What does my gut say?",
    "Would this make a good episode of Black Mirror?",
    "Are we keeping our promises?",
    "Do I benefit disproportionately from this?",
    "Would it be ok if this decision set a precedent?",
    "Am I reinforcing or challenging the status quo?",
    "What do we owe to each other?",
    "Consider short-term vs. long-term consequences",
    "Who has the most and least power in this scenario?"
]

const cards = [...new Set([...litmuspapers])];

const $button = document.getElementById('button');
const $card = document.getElementById('card');
const $strategy = document.getElementById('strategy');
const $flipper = document.getElementById('flipper');
const $front = document.getElementById('front');
const $back = document.getElementById('back');

const strategyCount = cards.length;

var flip = false;

function flipCard() {
    if (flip) {
        $flipper.classList.remove('flip');
        flip = false;
        console.log('if flip  ' + flip);
    } else {
        $flipper.classList.add('flip');
        flip = true;
        console.log('else ' + flip);
    }
}

function showCard(meta) {
    let strategy = cards[Math.floor(Math.random() * strategyCount)];
    if (flip) {
        $front.innerText = strategy;
    } else {
        $back.innerText = strategy;
    }
}

$button.addEventListener('click', function() {
    showCard(false);
    flipCard();
});

window.addEventListener('load', function () {
    showCard();
    flipCard();
});