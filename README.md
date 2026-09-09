# Universal Radix Converter (2–62)

A fast and lightweight web-based radix (base) converter that supports **bases 2 to 62** using the character set:

`0–9`, `A–Z`, `a–z`

## Features

- Supports **Base 2 → Base 62**
- Converts between **any two bases** from 2 to 62
- Uses 62 unique symbols:
  - `0–9` → values 0–9
  - `A–Z` → values 10–35
  - `a–z` → values 36–61
- Instant conversion in the browser
- No FPGA, server, or internet connection required

## Character Mapping

| Values | Characters |
|---------|------------|
| 0–9 | 0 1 2 3 4 5 6 7 8 9 |
| 10–35 | A B C ... Z |
| 36–61 | a b c ... z |

## Example Conversions

| From | To | Result |
|------|----|--------|
| Base 16 | Base 10 | `00FF → 255` |
| Base 2 | Base 16 | `11111111 → FF` |
| Base 36 | Base 10 | `ZZ → 1295` |
| Base 10 | Base 62 | `9999 → 2bH` |
| Base 62 | Base 10 | `zz → 3843` |

## Project Structure

```text
Universal-Radix-Converter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Download or clone this repository.
2. Open **index.html** in any modern web browser.
3. Select the source and target bases.
4. Enter a valid number and click **Convert**.
