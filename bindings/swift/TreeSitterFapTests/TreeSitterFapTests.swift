import XCTest
import SwiftTreeSitter
import TreeSitterFap

final class TreeSitterFapTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_fap())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading finite-automata-programmer grammar")
    }
}
