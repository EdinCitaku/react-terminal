import React from 'react'
import {About} from './about'
import {Resume} from './resume'

//We implement the folder structure as a simple dictionary!
export var folders :{[id:string]: string[];} = {
    "~": ["projects","blog"],
    "~/projects":[],
    "~/blog":[]
}
export var files :{[id:string]: string[];} = {
    "~": ["about.txt","resume.txt"],
    "~/projects":["exampleproject.txt"],
    "~/blog":["exampleblog.txt"]
}
export var filecontent :{[id:string]:any}={
    "about.txt": <About/>,
    "resume.txt":<Resume/>
}
