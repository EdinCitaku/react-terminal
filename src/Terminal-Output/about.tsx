import ReactMarkdown from 'react-markdown'
import Ab from '../resources/root/about.md'
import React, {Component} from 'react'


export function About()
{
  return <ReactMarkdown source={Ab}   escapeHtml={false} />

}