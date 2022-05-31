import { h, Component, render } from 'https://unpkg.com/preact?module';
import htm from 'https://unpkg.com/htm?module';

const debug = (window.location.hash == '#debug');

// Initialize htm with Preact
const html = htm.bind(h);

function splitFirstLine(text) {
    const i = text.indexOf('\n');

    if (i < 0) {
        return [text, ''];
    } else {
        return [text.slice(0, i), text.slice(i)];
    }
}

function parseRange(text) {
    const [a, b] = text.split('-');
    return [parseInt(a), parseInt(b)];
}

// compute the maximum number of questions remaining,
// for every question we use dynamic programming
// to make this efficient
function maxQuestionsRemaining(fuel, cache, questions, id) {
    if (fuel <= 0) return 0;                 // abort when we have looked too deep, maybe there are cycles in the data?
    if (!id) return 0;                       // base case: zero questions remain if id is blank
    if (cache.has(id)) return cache.get(id); // if answer is cached return that

    const question = questions.get(id);
    let n_max = 0;

    // calculate the max remaining questions for each answer
    for (const answer of Object.values(question.answers)) {
        const n = maxQuestionsRemaining(fuel - 1, cache, questions, answer.nextq);
        if (n > n_max) {
            n_max = n;
        }
    }

    cache.set(id, n_max + 1);
    return n_max + 1;
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            questions: [],
            results: null,
            currentQuestion: 'Q1',
            quizFinished: false,
            multiplier: 1.0,
            score: 0.0,
            recommendations: []
        };

        this.maxQuestions = 0;
        this.questionsRemaining = new Map();
    }

    async componentDidMount() {
        // TODO: handle fetch errors
        const response = await fetch('questions.json');
        const json = await response.json();
        const questions = new Map(json.map(q => [q.id, q]));
        const results = questions.get('Results').results;

        this.setState({
            isLoading: false,
            questions: questions,
            results: results
        })

        this.maxQuestions = maxQuestionsRemaining(50, this.questionsRemaining, questions, this.state.currentQuestion);

        const stateString = window.sessionStorage.getItem('quizState');
        const state = JSON.parse(stateString);

        this.loadSavedState(state);

        window.addEventListener('popstate', this.onPopState);
    }

    componentWillUnmount() {
        window.removeEventListener(this.onPopState);
    }

    onPopState = (event) => {
        this.loadSavedState(event.state);
    }

    saveState(state) {
        window.history.pushState(state, '');
        window.sessionStorage.setItem('quizState', JSON.stringify(state));
    }

    loadSavedState(state) {
        this.setState({
            currentQuestion: state.currentQuestion,
            quizFinished: state.quizFinished,
            multiplier: state.multiplier,
            score: state.score,
            recommendations: state.recommendations
        });
    }

    onStartOver = (e) => {
        e.preventDefault();
        this.setState({
            currentQuestion: 'Q1',
            quizFinished: false,
            multiplier: 1.0,
            score: 0.0,
            recommendations: []
        });
    }

    onJumpToEnd = (e) => {
        e.preventDefault();
        const state = {
            currentQuestion: undefined,
            quizFinished: true,
            multiplier: 0.5,
            score: 50,
            recommendations: [
                "Graceful degredation.\nAdd a feature flag or other automation process that allows you to turn it off in production, if issues arise. Consider, for example, building a simple business logic version as a fall-back, to keep the system running.",
                "System auditability.\nFor system decisions or classifications, especially high stakes ones, provide a record of the system decison (email, PDF, text message, etc), including a unique ID that can be traced in your system log.",
            ]
        }

        this.setState(state);
        this.saveState(state);
    }

    render(props, state) {
        if (state.isLoading) {
            return this.renderLoading();
        }

        let body;

        if (state.quizFinished) {
            body = this.renderQuizFinished(state);
        } else {
            body = this.renderCurrentQuestion(state);
        }

        let footer = html`<a href="#" class="restart" onClick=${this.onStartOver}>☜ Start Over</a>`;

        if (debug) {
            footer = html`
            ${footer}<br/>
            <a href="#" onClick=${this.onJumpToEnd}>Jump to End (Debug)</a>
            `
        }

        return html`
        <main key="body">${body}</main>
        <footer key="footer">${footer}</footer>
        `
    }

    renderLoading() {
        return html`<p>Loading...</p>`;
    }

    renderRecommendation(text) {
        const [titleText, bodyText] = splitFirstLine(text);

        return html`
        <h4>${titleText}</h4>
        <p>${bodyText}</p>
        `
    }

    getResultForScore(state, score) {
        return Object.entries(state.results).find(([key, res]) => {
            let [a, b] = parseRange(res.range);
            return a <= score && score <= b;
        })
    }

    renderQuizFinished(state) {
        const finalScore = 99 - (state.multiplier * state.score);
        const [key, result] = this.getResultForScore(state, finalScore);

        return html`
        <h2>${key}: ${result.title}</h2>
        <p>Final Score: ${Math.round(finalScore)}</p>
        <p>${result.text}</p>
        <h3>Recommendations:</h3>
        <ul>
            ${state.recommendations.map(text => html`
                <li>${this.renderRecommendation(text)}</li>
            `)}
        </ul>
        `;
    }

    renderCurrentQuestion(state) {
        const onAnswer = (e, answer) => {
            e.preventDefault();

            const nextState = {
                currentQuestion: answer.nextq,
                quizFinished: !answer.nextq,
                multiplier: answer.multiplier || state.multiplier,
                score: state.score + (answer.score || 0),
                recommendations: answer.recommendation ?
                    [...state.recommendations, answer.recommendation] : state.recommendations
            }

            this.setState(nextState);
            this.saveState(nextState);
        }

        const question = state.questions.get(state.currentQuestion);
        const remaining = this.questionsRemaining.get(state.currentQuestion);
        const percentage = Math.round(100*(1 - (remaining / this.maxQuestions)));

        return html`
        <${Question} question=${question} onAnswer=${onAnswer} />
        <p>
            current score: ${state.score}
            <br/>
            current multiplier: ${state.multiplier}
            <br/>
            max remaining: ${remaining}
            <br/>
            complete percentage: ${percentage}%
        </p>
        `;
    }
}

function Question(props) {
    const question = props.question;
    const [titleText, bodyText] = splitFirstLine(question.text);

    return html`
    <h4>${titleText}</h4>
    <p>${bodyText}</p>
    <ul>
        ${Object.entries(question.answers).map(([key, answer]) => html`
            <li><a href="#" onClick=${e => props.onAnswer(e, answer)}>${key}: ${answer.text}</a></li>
        `)}
    </ul>
    `
}

render(html`<${App} />`, document.body);
