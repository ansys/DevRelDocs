#!/usr/bin/env python3
"""
Convert DocFX toc.yml to Mintlify navigation groups JSON.

Usage:
  python toc_to_docs_json.py <package-dir> [--out <groups.json>]
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

try:
    import yaml
except ImportError:
    print("Install PyYAML: pip install pyyaml", file=sys.stderr)
    sys.exit(1)

REPO_ROOT = Path(__file__).resolve().parents[2]

COLLAPSED_GROUPS = {
    "Operator specifications",
    "averaging",
    "compression",
    "mapping",
    "mesh",
    "min_max",
    "result",
    "serialization",
    "utility",
}


def href_to_page(href: str, content_prefix: str) -> str:
    slug = href.removesuffix(".md").removesuffix(".mdx")
    return f"{content_prefix}/{slug}".replace("//", "/")


def should_collapse(name: str) -> bool:
    return name in COLLAPSED_GROUPS


def convert_node(item: dict, content_prefix: str):
    name = item.get("name", "")
    href = item.get("href")
    items = item.get("items")

    if items:
        group: dict = {"group": name, "pages": convert_items(items, content_prefix)}
        if href:
            group["root"] = href_to_page(href, content_prefix)
        if should_collapse(name):
            group["expanded"] = False
        return group

    if href:
        return href_to_page(href, content_prefix)

    return None


def convert_items(items: list, content_prefix: str) -> list:
    pages = []
    for item in items:
        node = convert_node(item, content_prefix)
        if node is not None:
            pages.append(node)
    return pages


def main() -> None:
    parser = argparse.ArgumentParser(description="Convert toc.yml to Mintlify groups JSON")
    parser.add_argument("package_dir", help="Path to package (contains toc.yml)")
    parser.add_argument("--out", help="Output JSON path (repo-relative or absolute)")
    args = parser.parse_args()

    package_dir = Path(args.package_dir)
    if not package_dir.is_absolute():
        package_dir = REPO_ROOT / package_dir

    toc_path = package_dir / "toc.yml"
    toc = yaml.safe_load(toc_path.read_text(encoding="utf-8"))

    content_prefix = package_dir.as_posix().replace(REPO_ROOT.as_posix() + "/", "")
    groups = convert_items(toc, content_prefix)

    if args.out:
        out_path = Path(args.out)
        if not out_path.is_absolute():
            out_path = REPO_ROOT / out_path
    else:
        out_path = package_dir / "mintlify-groups.json"

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(groups, indent=2) + "\n", encoding="utf-8")

    main_path = REPO_ROOT / "navigation" / "main.json"
    main_path.write_text(
        json.dumps(
            {
                "products": [
                    {
                        "product": "DPF Framework",
                        "description": "Data Processing Framework — installation, user guide, and operator reference.",
                        "icon": "layers",
                        "versions": [
                            {
                                "version": "2027 R1 SP01",
                                "default": True,
                                "tag": "Pilot",
                                "groups": groups,
                            }
                        ],
                    }
                ]
            },
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )

    intro = groups[0] if groups else None
    print(f"Wrote {len(groups)} top-level nav entries to {out_path}")
    print(f"Wrote navigation/main.json (groups inlined, no $ref)")
    print(f"Content prefix: {content_prefix}")
    if isinstance(intro, str):
        print(f"Intro page path: /{intro}")


if __name__ == "__main__":
    main()
