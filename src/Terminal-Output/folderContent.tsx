import ReactMarkdown from 'react-markdown'
import {annnotebooks} from '../commands/commands.json'
import {about} from '../commands/commands.json'
import {reactterminal} from '../commands/commands.json'


import React from 'react'

export function About() {
    return <ReactMarkdown source={about} escapeHtml={true}/>

}

export function AnnNotebooks() {
    return <ReactMarkdown source={annnotebooks} escapeHtml={true}/>

}

export function ReactTerminal() {
    return <ReactMarkdown source={reactterminal} escapeHtml={true}/>

}


