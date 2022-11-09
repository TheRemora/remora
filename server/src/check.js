fs = require('fs');
path = require('path');
solc = require('solc');

function compile() {
  const contractPath = path.resolve(__dirname, 'contracts', 'Test.sol'); //current working directory
  const source = fs.readFileSync(contractPath, 'utf8'); //read raw source file

  const input = {
    language: 'Solidity',
    sources: {
      'Test.sol': {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  return output;
}

_result = compile();
console.log(_result);
