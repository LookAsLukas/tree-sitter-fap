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
    source_file: $ => seq($.alphabet, repeat($.automata_desc)),

    automata_desc: $ => seq(
      $.automata,
      $.name,
      optional($.exec),
      $.statements,
      ';'
    ),

    automata: $ => 'automata',

    name: $ => /[a-zA-Z][a-zA-Z0-9]*/,

    alphabet: $ => /\w+/,

    exec: $ => 'exec',

    statements: $ => seq(
      $.statement,
      repeat(
        seq(
          ',',
          $.statement
        )
      ),
      optional(',')
    ),

    statement: $ => choice(
      seq($.name, optional($.state_spec)),
      seq($.name, '-', optional($.alphabet), '-', $.name, optional(seq('.', $.name)))
    ),

    state_spec: $ => choice(
      ':s',
      ':f',
      ':sf'
    )
  }
});
