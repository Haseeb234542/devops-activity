js 
const express = require('express'); 
const app = express(); 
app.get('/', (req, res) => res.send('CI/CD Ready!')); 
app.listen(3000, () => console.log('App running on port 3000')); 
test.js (simple test) 
js 
console.log('Running tests...'); 
// Simulate test pass 
if (true) { 
console.log('     
process.exit(0); 
} else { 
console.error('    
process.exit(1); 
} 
