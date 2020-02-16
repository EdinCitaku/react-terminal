import React from 'react'
import {folders, files} from './files'

export function autoComplete(value: string, currentFolder:string) : string
{
    const valuesplit = value.split(" ");
    if(valuesplit.length!=2) return value
    var iterator
    if(valuesplit[0]=="cat") iterator = files[currentFolder]
    else if (valuesplit[0]=="cd") iterator = folders[currentFolder]
    else return value
    var matches = []
    for(let file of iterator )
    {
        if(file.startsWith(valuesplit[1])) matches.push(file)
    }

    if(matches.length==0) return value

    if(matches.length==1) return valuesplit[0] +" " +  matches[0]
    
    // We have multible matches and will find the longest common substring
    return valuesplit[0] + " "  + longestCommonSubstring(matches)
}
function longestCommonSubstring(matches: string[]) : string
{
    //We simply bruteforce here, mainly because in our case efficiency is not important!!!
    var longest = matches[0]
    for(let match of matches.slice(1))
    {
        var newlongest = ""
        for(let idx = 0; idx< match.length;idx++)
        {
            if(idx>longest.length)continue
            if(longest.charAt(idx) == match.charAt(idx)) newlongest+=longest.charAt(idx)
            else continue
        }
        longest = newlongest
    }
    return longest
}
