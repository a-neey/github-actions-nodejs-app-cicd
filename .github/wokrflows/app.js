on:
  push:
    branches: [ "master" ]

jobs:
  build:
    runs-on: self-hosted
    strategy:
      matrix:
        node-version: [22.x]
    steps:
    - uses: actions/checkout@v4.2.2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4.1.0
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm test
