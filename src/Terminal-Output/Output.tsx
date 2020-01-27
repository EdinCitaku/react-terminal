import '../App.css';
import React, { Component } from 'react';

export function Output(l: string[]){
    const items = l.map(item => <li><span className="user">user@Portfolio: </span><span className="input">{item}</span></li>)
    return <div className="output"> {items}
    </div>;
}


//We implement the folder structure as a simple dictionary!
var folders :{[id:string]: string[];} = {
    "": ["projects","blog","about.txt", "resume.txt"],
    "projects":[],
    "blog":[]
}

const help = <div>
    <li>Portfolio site of Edin Citaku, navigate with these commands:</li>
    <li className="help">    ls : displays the files in the current directory </li>
    <li className="help">     cd [FOLDERNAME] : moves the current directory to the folder specified</li>
    <li className="help">    cat [FILENAME] : outputs the content of the specified file </li>
</div>

export function executeCommand(input:string, currentFolder:string){
        //Depending on our currentFolder and our input we 
        if(input == "ls"){
            
            const folderlist = folders[currentFolder].map(item => {
            
                if(item.substr(item.length-3)=="txt"){
                    return <div>{item}</div>
                }
                return <div className="folderview">{item}</div> 
        })
        return <div>{folderlist}</div>
        
    }
    if(input == "help")
    {
        return help
    }


        return <div>DO NOT KNOW THAT COMMAND YET!</div>
    }
    
    export function OutputTerminal(inputList:string[]){

    const items = inputList.map(item => {
        return <div>
    <li><span className="user">user@Portfolio: </span><span className="input">{item}</span></li>
    <li>{executeCommand(item,"")}</li>
    </div>
})
        return <div>{items}</div>

    }

