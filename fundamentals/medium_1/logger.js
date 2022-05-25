function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// Read through the following code. Why will it log 'debugging'?


// On line 2, constant `status` is declared and initialized to `'debugging'`.
// `status` is within the scope of `logger`, defined on lines 3 through 5, since
// functions have access to variables declared in outer scopes due to JS's lexical scoping rules.
// It matters not from where `logger` is called, but rather where `logger` is declared;
