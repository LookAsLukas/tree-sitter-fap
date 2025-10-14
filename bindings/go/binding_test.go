package tree_sitter_fap_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_fap "github.com/lookaslukas/tree-sitter-fap/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_fap.Language())
	if language == nil {
		t.Errorf("Error loading finite-automata-programmer grammar")
	}
}
