local M = {}

function M.setup()
  local parser_config = require "nvim-treesitter.parsers".get_parser_configs()
  
  parser_config.your_language = {
    install_info = {
      url = "https://github.com/yourusername/tree-sitter-fap",
      files = { "grammar.js" },
      branch = "main", -- or whatever branch
    },
    filetype = "fap",
    maintainers = { "LookAsLukas" },
  }
  
  -- Optional: auto-install the parser
  local ts_config = require("nvim-treesitter.configs")
  ts_config.setup({
    ensure_installed = { "fap" },
    highlight = { enable = true },
    indent = { enable = true },
  })
end

return M
