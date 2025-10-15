def encode(o: str) -> str:
    return "".join(
        "".join(
            "о" + chr(int("030" + e, 16)) + "古"
            for e in f"{ord(ch):04x}"
        )
        for ch in o.strip()
    )


def decode(o: str) -> str:
    parts = [o[i:i + 12] for i in range(0, len(o.strip()), 12)]
    return "".join(
        chr(int("".join(
            hex(ord(e) - 0x0300)[2:]
            for e in n if e not in ("о", "古")
        ), 16))
        for n in parts
    )
