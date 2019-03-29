# Customer Data Platform GraphQL API OASIS Standard
The new GraphQL API for the OASIS CXS Customer Data Platform specification, including sample test implementation
in Javascript.

This work is being done by the OASIS Context Server Technical Committee (see https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=cxs). The specification was renamed to the Customer Data Platform specification as this term has emerged recently as a standard denomination for the work started initially as the Context Server.

You can find work-in-progress snapshots of the current draft being work on at the following location:

    https://sergehuber.github.io/cdp/index.html


## Specification document generation

Simply launch the generation of the specification document into HTML and PDF by using the following command:

    ./gradlew asciidoctor

This will generate the HTML version of the ASCII Doctor specification in the following directory:

    build/docs

## Sample server implemented with NodeJS

NOTE: The sample server does not store or process any data. It only acts as a way to browse and play with the API

### Requirements

- NodeJS 6.9+
- NPM 4.1+

### Building and launching

To test the server simply launch

    cd server
    npm install
    npm start

You can then connect a browser to the following URL:

    http://localhost:4000
