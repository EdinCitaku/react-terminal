import '../App.css';
import React, { Component } from 'react';
import {About} from './about'
import { render } from '@testing-library/react';

export function Output(l: string[]){
    const items = l.map(item => <li><span className="user">user@Portfolio: </span><span className="input">{item}</span></li>)
    return <div className="output"> {items}
    </div>;
}


//We implement the folder structure as a simple dictionary!
var folders :{[id:string]: string[];} = {
    "~": ["projects","blog"],
    "~/projects":[],
    "~/blog":[]
}
var files :{[id:string]: string[];} = {
    "~": ["about.txt","resume.txt"],
    "~/projects":["exampleproject.txt"],
    "~/blog":["exampleblog.txt"]
}
var filecontent :{[id:string]:any}={
    "about.txt": About
}
const help = <div>
    <li>Portfolio site of Edin Citaku, navigate with these commands:</li>
    <li className="help">    ls : displays the files in the current directory </li>
    <li className="help">     cd [FOLDERNAME] : moves the current directory to the folder specified</li>
    <li className="help">    cat [FILENAME] : outputs the content of the specified file </li>
</div>

function executeSingleCommand(input:string, currentFolder:string):[any,string]{
    //Depending on our currentFolder and our input we do our command
    const inputSplit = input.split(" ");
    if(inputSplit[0] == "ls"){
        
        const folderlist = folders[currentFolder].map(item => {
            return <div className="folderview">{item}</div> 
    })
    const filelist = files[currentFolder].map(item => {
        return <div className="fileview">{item}</div>
    })

        return [<div>{folderlist}{filelist}</div>, currentFolder]
        
    }
    if(inputSplit[0] == "help")
    {
        if(inputSplit.length>1) return [<div>Help does not take any arguments!</div>,""]
        return [help,currentFolder]
    }
    if(inputSplit[0] == "cd")
    {
        if(inputSplit.length == 1)
        {
            return [<div>Need to specify an foldername!</div>, currentFolder]
        }
        if(inputSplit.length >2)
        {
            return [<div>Too many arguments!</div>, currentFolder]
        }
        //We check if the input argument exists as a directory in our current position
        if(folders[currentFolder].indexOf(inputSplit[1])>=0)
        {
            return [<div></div>,currentFolder+"/"+inputSplit[1]]
        }
        if(inputSplit[1]=="..")
        {
            return [<div></div>,"~"]
        }
        return [<div>Could not find folder {inputSplit[1]} </div>,currentFolder]

    }
    if(inputSplit[0]== "cat")
    {
        if(inputSplit.length == 1)
        {
            return [<div>Need to specify an filename!</div>, currentFolder]
        }
        if(inputSplit.length >2)
        {
            return [<div>Too many arguments!</div>, currentFolder]
        }
        if(folders[currentFolder].indexOf(inputSplit[1])>=0)
        {
            return [filecontent[inputSplit[1]],inputSplit[1]]
        }



    }

        return [<div>DO NOT KNOW THAT COMMAND YET!</div>,currentFolder]
}
function executeCommandList(inputList:string[])
{
    const output = []
    var currentFolder = "~";
    for(let input of inputList)
    {
        const temp = executeSingleCommand(input,currentFolder)
        currentFolder = temp[1];
        const newelement = <li><span className="user">user@Portfolio:{currentFolder}$ </span>{input} <span className="input">{temp[0]}</span></li>
        output.push(newelement);

    }
    return output;
}

export function OutputTerminal(inputList:string[])
{
    return executeCommandList(inputList)
    }   
