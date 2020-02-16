import React from 'react'
import {folders, files} from './files'

export function resolvePath(currentFolder:string, path:string):[string,string]
{
    //Very minimal function because we never will have deeper file depth!
    //We can later make it more complicated if needed!
    const pathSplit = path.split("/")
    if(pathSplit.length==1) return [currentFolder,path]
    var stepFolder = currentFolder
    for(let step of pathSplit.slice(0,pathSplit.length-1))
    {
        if(step=="..")
        {
            if(stepFolder!="~") stepFolder="~"
            else throw new RangeError("Path is not valid")
        }
        else{
            if(stepFolder == "~" && (folders["~/"+step].length != 0 || files["~/"+step].length != 0))
            stepFolder= "~/"+step
            else throw new RangeError("Path is not valid")
        }

    }
    return [stepFolder,pathSplit[pathSplit.length-1]]
}