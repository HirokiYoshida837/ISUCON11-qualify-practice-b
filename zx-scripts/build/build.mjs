#!/usr/bin/env zx

console.log("--- --- --- build --- --- ---")

const APP_NAME = 'isucondition'

cd('/home/isucon/webapp/go')

// build-app
await $`go build -o ${APP_NAME} -v`;