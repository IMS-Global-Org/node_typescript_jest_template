#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const Names = require('./lib/Names')
var Names_1 = __importDefault(require("./lib/Names"));
var names = new Names_1.default({ first: 'Brennick', last: 'Langston' });
console.log("Hello " + names.fullName());
