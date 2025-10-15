/**
 * @file DSL for finite automatas
 * @author LookAsLukas <kolyabetmen231006@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "fap",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => seq($.alphabet_definition, repeat(seq($.automata_desc, $.semi_colon))),

    automata_desc: $ => seq(
      $.automata,
      $.automata_name,
      optional($.exec),
      $.statements,
    ),

    automata: $ => 'automata',

    name: $ => /[a-zA-Z][a-zA-Z0-9]*/,

    automata_name: $ => /[a-zA-Z][a-zA-Z0-9]*/,

    alphabet: $ => /\w+/,

    alphabet_definition: $ => /\w+/,

    exec: $ => 'exec',

    statements: $ => seq(
      $.statement,
      repeat(
        seq(
          $.comma,
          $.statement
        )
      ),
      optional($.comma)
    ),

    statement: $ => choice(
      seq($.name, optional(seq($.colon, $.state_spec))),
      seq($.name, $.dash, optional($.alphabet), $.dash, $.automata_name, $.dot, $.name),
      seq($.name, $.dash, optional($.alphabet), $.dash, $.name)
    ),

    state_spec: $ => choice(
      's',
      'f',
      'sf'
    ),

    dash: $ => '-',
    colon: $ => ':',
    semi_colon: $ => ';',
    dot: $ => '.',
    comma: $ => ','
  }
});
