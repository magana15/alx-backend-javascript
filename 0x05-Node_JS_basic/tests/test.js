/**prompts the user to enter their name
 * reads it then prints it to stdout.
 * displays a message on exit.
 * 
 */
process.stdout.write('welcome to kenya!!!  what is your name?\n');
process.stdin.setEncoding('utf8');
process.stdin.on('data',(input) => {
const name = input.trim();

process.stdout.write(`your name is: ${name}\n`);
process.stdin.end();});

process.stdin.on('end',()=> {
process.stdout.write('This important software is now closing\n');});
