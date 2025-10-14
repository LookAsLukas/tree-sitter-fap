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
    source_file: $ => seq(/\w+\n/, repeat($.automata_desc)),

    automata_desc: $ => seq(
      'automata',
      $.name,
      optional('exec'),
      $.statements,
      ';'
    ),

    name: $ => /[a-zA-Z][a-zA-Z0-9]*/,

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
      seq($.name, optional(choice(':s', ':f', ':sf'))),
      seq($.name, '-', /\w*/, '-', $.name, optional(seq('.', $.name)))
    )
  }
});
