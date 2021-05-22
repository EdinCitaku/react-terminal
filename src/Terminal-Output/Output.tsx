import '../App.css';
import React from 'react';
import {folders, files, filecontent} from './files'
import {resolvePath} from './resolvePath'

const help = <div>
    <li>Portfolio site of Edin Citaku, navigate with these commands:</li>
    <li className="help"> ls : displays the files in the current directory</li>
    <li className="help"> cd [FOLDERNAME] : moves the current directory to the folder specified</li>
    <li className="help"> cat [FILENAME] : outputs the content of the specified file</li>
    <li className="help"> click TAB for autocomplete</li>
</div>
const welcome = <div>
    <li> Welcome to the Portfolio site of Edin Citaku, navigate with these commands:</li>
    <li className="help"> ls : displays the files in the current directory</li>
    <li className="help"> cd [FOLDERNAME] : moves the current directory to the folder specified</li>
    <li className="help"> cat [FILENAME] : outputs the content of the specified file</li>
    <li className="help"> click TAB for autocomplete</li>

</div>


function executeSingleCommand(input: string, currentFolder: string): [any, string] {
    //Depending on our currentFolder and our input we do our command
    const inputSplit = input.split(" ");
    if (inputSplit[0] === "ls" || (inputSplit[0] === "ll")) {

        const folderlist = folders[currentFolder].map(item => {
            return <div className="folderview">{item}</div>
        })

        const filelist = files[currentFolder].map(item => {
            return <div className="fileview">{item}</div>
        })

        return [<div>{folderlist}{filelist}</div>, currentFolder]

    }

    if (inputSplit[0] === "help") {
        if (inputSplit.length > 1) return [<div>Help does not take any arguments!</div>, ""]
        return [help, currentFolder]
    }
    if (inputSplit[0] === "cd") {
        if (inputSplit.length === 1) {
            return [<div>Need to specify an foldername!</div>, currentFolder]
        }
        if (inputSplit.length > 2) {
            return [<div>Too many arguments!</div>, currentFolder]
        }
        //We check if the input argument exists as a directory in our current position
        var [lastFolder, toResolve] = resolvePath(currentFolder, inputSplit[1])
        if (folders[lastFolder].indexOf(toResolve) >= 0) {
            return [<div></div>, lastFolder + "/" + toResolve]
        }
        if (toResolve === ".." && lastFolder !== '~') {
            return [<div></div>, "~"]
        }
        return [<div>Could not find folder {inputSplit[1]} </div>, currentFolder]

    }
    if (inputSplit[0] === "cat") {
        if (inputSplit.length === 1) {
            return [<div>Need to specify an filename!</div>, currentFolder]
        }
        if (inputSplit.length > 2) {
            return [<div>Too many arguments!</div>, currentFolder]
        }

        var [lastFolder, toResolve] = resolvePath(currentFolder, inputSplit[1])
        if (files[lastFolder].indexOf(toResolve) >= 0) {
            return [filecontent[toResolve], currentFolder]
        }
        return [<div>Could not find file {inputSplit[1]}</div>, currentFolder]

    }

    return [<div>DO NOT KNOW THAT COMMAND YET!</div>, currentFolder]
}

function executeCommandList(inputList: string[]): [any, string] {
    const output = []
    var currentFolder = "~";
    // Here we add our welcome message
    output.push(welcome)
    for (let input of inputList) {
        const temp = executeSingleCommand(input, currentFolder)
        currentFolder = temp[1];
        const newelement = <li><span className="user">user@Portfolio:{currentFolder}$ </span>{input} <span
            className="input">{temp[0]}</span></li>
        output.push(newelement);

    }
    return [output, currentFolder];
}

export function getCurrentFolder(inputList: string[]): string {
    return executeCommandList(inputList)[1]
}

export function OutputTerminal(inputList: string[]) {
    return executeCommandList(inputList)[0]
}

