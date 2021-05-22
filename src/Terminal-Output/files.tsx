import React from 'react'
import {About, AnnNotebooks, ReactTerminal} from './folderContent'
import {Resume} from './resume'

//We implement the folder structure as a simple dictionary!
export var folders: { [id: string]: string[]; } = {
    "~": ["projects", "blog"],
    "~/projects": [],
    "~/blog": []
}

export var files: { [id: string]: string[]; } = {
    "~": ["about.txt", "resume.txt"],
    "~/projects": ["react-terminal.txt", "ann_notebooks.txt"],
    "~/blog": []
}
export var filecontent: { [id: string]: any } = {
    "about.txt": <About/>,
    "resume.txt": <Resume/>,
    "react-terminal.txt": <ReactTerminal/>,
    "ann_notebooks.txt": <AnnNotebooks/>
}
