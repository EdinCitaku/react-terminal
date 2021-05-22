import {folders, files} from './files'
import {resolvePath} from './resolvePath'

export function autoComplete(value: string, currentFolder: string): string {
    const valuesplit = value.split(" ");
    if (valuesplit.length !== 2) return value
    const command = valuesplit[0]
    if (command !== "cd" && command !== "cat") return value
    var searchedFolder
    var searchedFile
    var path

    try {
        [searchedFolder, searchedFile] = resolvePath(currentFolder, valuesplit[1])

    } catch (error) {
        return value
    }
    var matches = []
    var iterator
    if (command === "cat") iterator = files[searchedFolder].concat(folders[searchedFolder])
    else iterator = folders[searchedFolder]

    for (let file of iterator) {
        if (file.startsWith(searchedFile)) matches.push(file)
    }

    if (matches.length === 0) return value

    //So our autocompletion does not delete the prefix of our search! 
    const prefix = valuesplit[1].split("/")
    var prefixString = ""
    if (prefix.length > 1) prefixString = prefix.slice(0, prefix.length - 1).join("/") + "/"

    if (matches.length === 1) return command + " " + prefixString + matches[0]

    // We have multible matches and will find the longest common substring
    return command + " " + path + "/" + longestCommonSubstring(matches)
}


function longestCommonSubstring(matches: string[]): string {
    //We simply bruteforce here, mainly because in our case efficiency is not important!!!
    var longest = matches[0]
    for (let match of matches.slice(1)) {
        var newlongest = ""
        for (let idx = 0; idx < match.length; idx++) {
            if (idx > longest.length) continue
            if (longest.charAt(idx) === match.charAt(idx)) newlongest += longest.charAt(idx)
            else continue
        }
        longest = newlongest
    }
    return longest
}
