import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'

function getURLParameter(name: string): string | null {
    return new URLSearchParams(window.location.search).get(name);
}

let chart = getURLParameter('chart');

render(<App chart={chart} />, document.getElementById('app')!)
