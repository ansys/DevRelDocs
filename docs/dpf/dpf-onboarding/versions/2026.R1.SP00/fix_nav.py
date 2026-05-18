import re
from pathlib import Path

root = Path(__file__).parent
for p in root.rglob("*.md"):
    t = p.read_text(encoding="utf-8")
    n = re.sub(r'\n*<div class="btn-footer">.*?</motion>\n*', "\n", t, flags=re.S)
    if n != t:
        p.write_text(n, encoding="utf-8", newline="\n")
        print(p.relative_to(root))
