function log() {
    console.log(arguments.callee.name);
    console.log(arguments.callee.caller && arguments.callee.caller.name);
}
function hello() {
    log();
}
