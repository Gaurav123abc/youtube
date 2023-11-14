'use strict';
const { createHash } = require('crypto');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const dotenv = require('dotenv');



module.exports = env => {
  const hash = createHash('md5');
  hash.update(JSON.stringify(env));

  return hash.digest('hex');
  
  

  
};


