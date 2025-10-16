#!/bin/bash

echo "$#"
if [[ "$#" != "1" ]]; then
    echo "Please, provide a path for queries to be copied to (example: ~/.config/nvim/after)"
    exit
fi

if [ -d "$1" ]; then
    mkdir -p $1/queries/fap
    echo -e "(automata) @keyword\n\
(alphabet) @string\n\
(alphabet_definition) @markup.italic\n\
(automata_name) @attribute\n\
(name) @type\n\
(exec) @property\n\
(state_spec) @lsp.type.interface\n\
(dash) @punctuation\n\
(colon) @punctuation\n\
(semi_colon) @punctuation\n\
(dot) @punctuation\n\
(comma) @punctuation" > $1/queries/fap/highlights.scm
    echo "(automata_desc) @indent.begin" > $1/queries/fap/indents.scm
else
    printf "No such directory: %s" $1
fi
