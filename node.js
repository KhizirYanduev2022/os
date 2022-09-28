import os from 'os'
const type = os.type()
const homedir = os.homedir()
const hostname = os.hostname()
const oversion = os.version()   
const ostype = os.type() 


console.log(type)
console.log(homedir)
console.log(hostname)
console.log(oversion)
console.log(ostype)

import {world} from './welcome.js'

world(type)