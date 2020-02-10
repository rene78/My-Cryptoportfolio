const coinlist = [
  {
    "Symbol": "BTC",
    "CoinName": "Bitcoin",
    "FullName": "Bitcoin (BTC)"
  },
  {
    "Symbol": "ETH",
    "CoinName": "Ethereum",
    "FullName": "Ethereum (ETH)"
  },
  {
    "Symbol": "XRP",
    "CoinName": "XRP",
    "FullName": "XRP (XRP)"
  },
  {
    "Symbol": "BCH",
    "CoinName": "Bitcoin Cash",
    "FullName": "Bitcoin Cash (BCH)"
  },
  {
    "Symbol": "BSV",
    "CoinName": "Bitcoin SV",
    "FullName": "Bitcoin SV (BSV)"
  },
  {
    "Symbol": "LTC",
    "CoinName": "Litecoin",
    "FullName": "Litecoin (LTC)"
  },
  {
    "Symbol": "EOS",
    "CoinName": "EOS",
    "FullName": "EOS (EOS)"
  },
  {
    "Symbol": "BNB",
    "CoinName": "Binance Coin",
    "FullName": "Binance Coin (BNB)"
  },
  {
    "Symbol": "XTZ",
    "CoinName": "Tezos",
    "FullName": "Tezos (XTZ)"
  },
  {
    "Symbol": "ADA",
    "CoinName": "Cardano",
    "FullName": "Cardano (ADA)"
  },
  {
    "Symbol": "XMR",
    "CoinName": "Monero",
    "FullName": "Monero (XMR)"
  },
  {
    "Symbol": "TRX",
    "CoinName": "TRON",
    "FullName": "TRON (TRX)"
  },
  {
    "Symbol": "XLM",
    "CoinName": "Stellar",
    "FullName": "Stellar (XLM)"
  },
  {
    "Symbol": "ETC",
    "CoinName": "Ethereum Classic",
    "FullName": "Ethereum Classic (ETC)"
  },
  {
    "Symbol": "LINK",
    "CoinName": "Chainlink",
    "FullName": "Chainlink (LINK)"
  },
  {
    "Symbol": "DASH",
    "CoinName": "Dash",
    "FullName": "Dash (DASH)"
  },
  {
    "Symbol": "ZEC",
    "CoinName": "ZCash",
    "FullName": "ZCash (ZEC)"
  },
  {
    "Symbol": "NEO",
    "CoinName": "NEO",
    "FullName": "NEO (NEO)"
  },
  {
    "Symbol": "XEM",
    "CoinName": "NEM",
    "FullName": "NEM (XEM)"
  },
  {
    "Symbol": "BTS",
    "CoinName": "Bitshares",
    "FullName": "Bitshares (BTS)"
  },
  {
    "Symbol": "STEEM",
    "CoinName": "Steem",
    "FullName": "Steem (STEEM)"
  },
  {
    "Symbol": "MIOTA",
    "CoinName": "IOTA",
    "FullName": "IOTA (MIOTA)"
  },
  {
    "Symbol": "42",
    "CoinName": "42 Coin",
    "FullName": "42 Coin (42)"
  },
  {
    "Symbol": "300",
    "CoinName": "300 token",
    "FullName": "300 token (300)"
  },
  {
    "Symbol": "365",
    "CoinName": "365Coin",
    "FullName": "365Coin (365)"
  },
  {
    "Symbol": "404",
    "CoinName": "404Coin",
    "FullName": "404Coin (404)"
  },
  {
    "Symbol": "433",
    "CoinName": "433 Token",
    "FullName": "433 Token (433)"
  },
  {
    "Symbol": "611",
    "CoinName": "SixEleven",
    "FullName": "SixEleven (611)"
  },
  {
    "Symbol": "808",
    "CoinName": "808",
    "FullName": "808 (808)"
  },
  {
    "Symbol": "888",
    "CoinName": "Octocoin",
    "FullName": "Octocoin (888)"
  },
  {
    "Symbol": "1337",
    "CoinName": "EliteCoin",
    "FullName": "EliteCoin (1337)"
  },
  {
    "Symbol": "2015",
    "CoinName": "2015 coin",
    "FullName": "2015 coin (2015)"
  },
  {
    "Symbol": "BTCD",
    "CoinName": "BitcoinDark",
    "FullName": "BitcoinDark (BTCD)"
  },
  {
    "Symbol": "CRAIG",
    "CoinName": "CraigsCoin",
    "FullName": "CraigsCoin (CRAIG)"
  },
  {
    "Symbol": "XBS",
    "CoinName": "Bitstake",
    "FullName": "Bitstake (XBS)"
  },
  {
    "Symbol": "XPY",
    "CoinName": "PayCoin",
    "FullName": "PayCoin (XPY)"
  },
  {
    "Symbol": "PRC",
    "CoinName": "ProsperCoin",
    "FullName": "ProsperCoin (PRC)"
  },
  {
    "Symbol": "YBC",
    "CoinName": "YbCoin",
    "FullName": "YbCoin (YBC)"
  },
  {
    "Symbol": "DANK",
    "CoinName": "DarkKush",
    "FullName": "DarkKush (DANK)"
  },
  {
    "Symbol": "GIVE",
    "CoinName": "GiveCoin",
    "FullName": "GiveCoin (GIVE)"
  },
  {
    "Symbol": "KOBO",
    "CoinName": "KoboCoin",
    "FullName": "KoboCoin (KOBO)"
  },
  {
    "Symbol": "DT",
    "CoinName": "DarkToken",
    "FullName": "DarkToken (DT)"
  },
  {
    "Symbol": "CETI",
    "CoinName": "CETUS Coin",
    "FullName": "CETUS Coin (CETI)"
  },
  {
    "Symbol": "SUP",
    "CoinName": "Supcoin",
    "FullName": "Supcoin (SUP)"
  },
  {
    "Symbol": "XPD",
    "CoinName": "PetroDollar",
    "FullName": "PetroDollar (XPD)"
  },
  {
    "Symbol": "GEO",
    "CoinName": "GeoCoin",
    "FullName": "GeoCoin (GEO)"
  },
  {
    "Symbol": "CHASH",
    "CoinName": "CleverHash",
    "FullName": "CleverHash (CHASH)"
  },
  {
    "Symbol": "NXTI",
    "CoinName": "NXTI",
    "FullName": "NXTI (NXTI)"
  },
  {
    "Symbol": "WOLF",
    "CoinName": "Insanity Coin",
    "FullName": "Insanity Coin (WOLF)"
  },
  {
    "Symbol": "AC",
    "CoinName": "Asia Coin",
    "FullName": "Asia Coin (AC)"
  },
  {
    "Symbol": "ACOIN",
    "CoinName": "ACoin",
    "FullName": "ACoin (ACOIN)"
  },
  {
    "Symbol": "AERO",
    "CoinName": "Aero Coin",
    "FullName": "Aero Coin (AERO)"
  },
  {
    "Symbol": "ALF",
    "CoinName": "AlphaCoin",
    "FullName": "AlphaCoin (ALF)"
  },
  {
    "Symbol": "AGS",
    "CoinName": "Aegis",
    "FullName": "Aegis (AGS)"
  },
  {
    "Symbol": "AMC",
    "CoinName": "AmericanCoin",
    "FullName": "AmericanCoin (AMC)"
  },
  {
    "Symbol": "ALIEN",
    "CoinName": "AlienCoin",
    "FullName": "AlienCoin (ALIEN)"
  },
  {
    "Symbol": "APEX",
    "CoinName": "ApexCoin",
    "FullName": "ApexCoin (APEX)"
  },
  {
    "Symbol": "ARCH",
    "CoinName": "ArchCoin",
    "FullName": "ArchCoin (ARCH)"
  },
  {
    "Symbol": "ARG",
    "CoinName": "Argentum",
    "FullName": "Argentum (ARG)"
  },
  {
    "Symbol": "ARI",
    "CoinName": "AriCoin",
    "FullName": "AriCoin (ARI)"
  },
  {
    "Symbol": "AUR",
    "CoinName": "Aurora Coin",
    "FullName": "Aurora Coin (AUR)"
  },
  {
    "Symbol": "AXR",
    "CoinName": "AXRON",
    "FullName": "AXRON (AXR)"
  },
  {
    "Symbol": "BET",
    "CoinName": "BetaCoin",
    "FullName": "BetaCoin (BET)"
  },
  {
    "Symbol": "BEAN",
    "CoinName": "BeanCash",
    "FullName": "BeanCash (BEAN)"
  },
  {
    "Symbol": "BLU",
    "CoinName": "BlueCoin",
    "FullName": "BlueCoin (BLU)"
  },
  {
    "Symbol": "BOST",
    "CoinName": "BoostCoin",
    "FullName": "BoostCoin (BOST)"
  },
  {
    "Symbol": "BQC",
    "CoinName": "BQCoin",
    "FullName": "BQCoin (BQC)"
  },
  {
    "Symbol": "XMY",
    "CoinName": "MyriadCoin",
    "FullName": "MyriadCoin (XMY)"
  },
  {
    "Symbol": "MOON",
    "CoinName": "MoonCoin",
    "FullName": "MoonCoin (MOON)"
  },
  {
    "Symbol": "ZET",
    "CoinName": "ZetaCoin",
    "FullName": "ZetaCoin (ZET)"
  },
  {
    "Symbol": "SXC",
    "CoinName": "SexCoin",
    "FullName": "SexCoin (SXC)"
  },
  {
    "Symbol": "QTL",
    "CoinName": "Quatloo",
    "FullName": "Quatloo (QTL)"
  },
  {
    "Symbol": "ENRG",
    "CoinName": "EnergyCoin",
    "FullName": "EnergyCoin (ENRG)"
  },
  {
    "Symbol": "QRK",
    "CoinName": "QuarkCoin",
    "FullName": "QuarkCoin (QRK)"
  },
  {
    "Symbol": "RIC",
    "CoinName": "Riecoin",
    "FullName": "Riecoin (RIC)"
  },
  {
    "Symbol": "DGC",
    "CoinName": "Digitalcoin ",
    "FullName": "Digitalcoin  (DGC)"
  },
  {
    "Symbol": "LIMX",
    "CoinName": "LimeCoinX",
    "FullName": "LimeCoinX (LIMX)"
  },
  {
    "Symbol": "BTB",
    "CoinName": "BitBar",
    "FullName": "BitBar (BTB)"
  },
  {
    "Symbol": "CAIX",
    "CoinName": "CAIx",
    "FullName": "CAIx (CAIx)"
  },
  {
    "Symbol": "BTMK",
    "CoinName": "BitMark",
    "FullName": "BitMark (BTMK)"
  },
  {
    "Symbol": "BUK",
    "CoinName": "CryptoBuk",
    "FullName": "CryptoBuk (BUK)"
  },
  {
    "Symbol": "CACH",
    "CoinName": "Cachecoin",
    "FullName": "Cachecoin (CACH)"
  },
  {
    "Symbol": "CANN",
    "CoinName": "CannabisCoin",
    "FullName": "CannabisCoin (CANN)"
  },
  {
    "Symbol": "CAP",
    "CoinName": "BottleCaps",
    "FullName": "BottleCaps (CAP)"
  },
  {
    "Symbol": "CASH",
    "CoinName": "CashCoin",
    "FullName": "CashCoin (CASH)"
  },
  {
    "Symbol": "CAT",
    "CoinName": "Catcoin",
    "FullName": "Catcoin (CAT)"
  },
  {
    "Symbol": "CBX",
    "CoinName": "CryptoBullion",
    "FullName": "CryptoBullion (CBX)"
  },
  {
    "Symbol": "CCN",
    "CoinName": "CannaCoin",
    "FullName": "CannaCoin (CCN)"
  },
  {
    "Symbol": "CIN",
    "CoinName": "CinderCoin",
    "FullName": "CinderCoin (CIN)"
  },
  {
    "Symbol": "CINNI",
    "CoinName": "CINNICOIN",
    "FullName": "CINNICOIN (CINNI)"
  },
  {
    "Symbol": "CXC",
    "CoinName": "CheckCoin",
    "FullName": "CheckCoin (CXC)"
  },
  {
    "Symbol": "CLAM",
    "CoinName": "CLAMS",
    "FullName": "CLAMS (CLAM)"
  },
  {
    "Symbol": "CLR",
    "CoinName": "CopperLark",
    "FullName": "CopperLark (CLR)"
  },
  {
    "Symbol": "CMC",
    "CoinName": "CosmosCoin",
    "FullName": "CosmosCoin (CMC)"
  },
  {
    "Symbol": "CNC",
    "CoinName": "ChinaCoin",
    "FullName": "ChinaCoin (CNC)"
  },
  {
    "Symbol": "CNL",
    "CoinName": "ConcealCoin",
    "FullName": "ConcealCoin (CNL)"
  },
  {
    "Symbol": "COMM",
    "CoinName": "Community Coin",
    "FullName": "Community Coin (COMM)"
  },
  {
    "Symbol": "COOL",
    "CoinName": "CoolCoin",
    "FullName": "CoolCoin (COOL)"
  },
  {
    "Symbol": "CRACK",
    "CoinName": "CrackCoin",
    "FullName": "CrackCoin (CRACK)"
  },
  {
    "Symbol": "CRYPT",
    "CoinName": "CryptCoin",
    "FullName": "CryptCoin (CRYPT)"
  },
  {
    "Symbol": "CSC",
    "CoinName": "CasinoCoin",
    "FullName": "CasinoCoin (CSC)"
  },
  {
    "Symbol": "DEM",
    "CoinName": "eMark",
    "FullName": "eMark (DEM)"
  },
  {
    "Symbol": "DMD",
    "CoinName": "Diamond",
    "FullName": "Diamond (DMD)"
  },
  {
    "Symbol": "DRKC",
    "CoinName": "DarkCash",
    "FullName": "DarkCash (DRKC)"
  },
  {
    "Symbol": "DSB",
    "CoinName": "DarkShibe",
    "FullName": "DarkShibe (DSB)"
  },
  {
    "Symbol": "DVC",
    "CoinName": "DevCoin",
    "FullName": "DevCoin (DVC)"
  },
  {
    "Symbol": "EAC",
    "CoinName": "EarthCoin",
    "FullName": "EarthCoin (EAC)"
  },
  {
    "Symbol": "EFL",
    "CoinName": "E-Gulden",
    "FullName": "E-Gulden (EFL)"
  },
  {
    "Symbol": "ELC",
    "CoinName": "Elacoin",
    "FullName": "Elacoin (ELC)"
  },
  {
    "Symbol": "EMD",
    "CoinName": "Emerald",
    "FullName": "Emerald (EMD)"
  },
  {
    "Symbol": "EXCL",
    "CoinName": "Exclusive Coin",
    "FullName": "Exclusive Coin (EXCL)"
  },
  {
    "Symbol": "EXE",
    "CoinName": "ExeCoin",
    "FullName": "ExeCoin (EXE)"
  },
  {
    "Symbol": "EZC",
    "CoinName": "EZCoin",
    "FullName": "EZCoin (EZC)"
  },
  {
    "Symbol": "FLAP",
    "CoinName": "Flappy Coin",
    "FullName": "Flappy Coin (FLAP)"
  },
  {
    "Symbol": "FC2",
    "CoinName": "Fuel2Coin",
    "FullName": "Fuel2Coin (FC2)"
  },
  {
    "Symbol": "FFC",
    "CoinName": "FireflyCoin",
    "FullName": "FireflyCoin (FFC)"
  },
  {
    "Symbol": "FIBRE",
    "CoinName": "FIBRE",
    "FullName": "FIBRE (FIBRE)"
  },
  {
    "Symbol": "FRC",
    "CoinName": "FireRoosterCoin",
    "FullName": "FireRoosterCoin (FRC)"
  },
  {
    "Symbol": "FLT",
    "CoinName": "FlutterCoin",
    "FullName": "FlutterCoin (FLT)"
  },
  {
    "Symbol": "FRK",
    "CoinName": "Franko",
    "FullName": "Franko (FRK)"
  },
  {
    "Symbol": "FRAC",
    "CoinName": "FractalCoin",
    "FullName": "FractalCoin (FRAC)"
  },
  {
    "Symbol": "FSTC",
    "CoinName": "FastCoin",
    "FullName": "FastCoin (FSTC)"
  },
  {
    "Symbol": "FTC",
    "CoinName": "FeatherCoin",
    "FullName": "FeatherCoin (FTC)"
  },
  {
    "Symbol": "GDC",
    "CoinName": "GrandCoin",
    "FullName": "GrandCoin (GDC)"
  },
  {
    "Symbol": "GLC",
    "CoinName": "GlobalCoin",
    "FullName": "GlobalCoin (GLC)"
  },
  {
    "Symbol": "GLD",
    "CoinName": "GoldCoin",
    "FullName": "GoldCoin (GLD)"
  },
  {
    "Symbol": "GLX",
    "CoinName": "GalaxyCoin",
    "FullName": "GalaxyCoin (GLX)"
  },
  {
    "Symbol": "GLYPH",
    "CoinName": "GlyphCoin",
    "FullName": "GlyphCoin (GLYPH)"
  },
  {
    "Symbol": "GML",
    "CoinName": "GameLeagueCoin",
    "FullName": "GameLeagueCoin (GML)"
  },
  {
    "Symbol": "GUE",
    "CoinName": "GuerillaCoin",
    "FullName": "GuerillaCoin (GUE)"
  },
  {
    "Symbol": "HAL",
    "CoinName": "Halcyon",
    "FullName": "Halcyon (HAL)"
  },
  {
    "Symbol": "HBN",
    "CoinName": "HoboNickels",
    "FullName": "HoboNickels (HBN)"
  },
  {
    "Symbol": "HUC",
    "CoinName": "HunterCoin",
    "FullName": "HunterCoin (HUC)"
  },
  {
    "Symbol": "HVC",
    "CoinName": "HeavyCoin",
    "FullName": "HeavyCoin (HVC)"
  },
  {
    "Symbol": "HYP",
    "CoinName": "HyperStake",
    "FullName": "HyperStake (HYP)"
  },
  {
    "Symbol": "ICB",
    "CoinName": "IceBergCoin",
    "FullName": "IceBergCoin (ICB)"
  },
  {
    "Symbol": "IFC",
    "CoinName": "Infinite Coin",
    "FullName": "Infinite Coin (IFC)"
  },
  {
    "Symbol": "IXC",
    "CoinName": "IXcoin",
    "FullName": "IXcoin (IXC)"
  },
  {
    "Symbol": "JBS",
    "CoinName": "JumBucks Coin",
    "FullName": "JumBucks Coin (JBS)"
  },
  {
    "Symbol": "JKC",
    "CoinName": "JunkCoin",
    "FullName": "JunkCoin (JKC)"
  },
  {
    "Symbol": "JUDGE",
    "CoinName": "JudgeCoin",
    "FullName": "JudgeCoin (JUDGE)"
  },
  {
    "Symbol": "KDC",
    "CoinName": "Klondike Coin",
    "FullName": "Klondike Coin (KDC)"
  },
  {
    "Symbol": "KEYC",
    "CoinName": "KeyCoin",
    "FullName": "KeyCoin (KEYC)"
  },
  {
    "Symbol": "KGC",
    "CoinName": "KrugerCoin",
    "FullName": "KrugerCoin (KGC)"
  },
  {
    "Symbol": "LK7",
    "CoinName": "Lucky7Coin",
    "FullName": "Lucky7Coin (LK7)"
  },
  {
    "Symbol": "LKY",
    "CoinName": "LuckyCoin",
    "FullName": "LuckyCoin (LKY)"
  },
  {
    "Symbol": "LSD",
    "CoinName": "LightSpeedCoin",
    "FullName": "LightSpeedCoin (LSD)"
  },
  {
    "Symbol": "LTB",
    "CoinName": "Litebar ",
    "FullName": "Litebar  (LTB)"
  },
  {
    "Symbol": "LTCD",
    "CoinName": "LitecoinDark",
    "FullName": "LitecoinDark (LTCD)"
  },
  {
    "Symbol": "LTCX",
    "CoinName": "LitecoinX",
    "FullName": "LitecoinX (LTCX)"
  },
  {
    "Symbol": "LXC",
    "CoinName": "LibrexCoin",
    "FullName": "LibrexCoin (LXC)"
  },
  {
    "Symbol": "LYC",
    "CoinName": "LycanCoin",
    "FullName": "LycanCoin (LYC)"
  },
  {
    "Symbol": "MAX",
    "CoinName": "MaxCoin",
    "FullName": "MaxCoin (MAX)"
  },
  {
    "Symbol": "MED",
    "CoinName": "MediterraneanCoin",
    "FullName": "MediterraneanCoin (MED)"
  },
  {
    "Symbol": "MINRL",
    "CoinName": "Minerals Coin",
    "FullName": "Minerals Coin (MINRL)"
  },
  {
    "Symbol": "MINT",
    "CoinName": "MintCoin",
    "FullName": "MintCoin (MINT)"
  },
  {
    "Symbol": "MN",
    "CoinName": "Cryptsy Mining Contract",
    "FullName": "Cryptsy Mining Contract (MN)"
  },
  {
    "Symbol": "MINC",
    "CoinName": "MinCoin",
    "FullName": "MinCoin (MINC)"
  },
  {
    "Symbol": "MRY",
    "CoinName": "MurrayCoin",
    "FullName": "MurrayCoin (MRY)"
  },
  {
    "Symbol": "MZC",
    "CoinName": "MazaCoin",
    "FullName": "MazaCoin (MZC)"
  },
  {
    "Symbol": "NAN",
    "CoinName": "NanoToken",
    "FullName": "NanoToken (NAN)"
  },
  {
    "Symbol": "NAUT",
    "CoinName": "Nautilus Coin",
    "FullName": "Nautilus Coin (NAUT)"
  },
  {
    "Symbol": "NBL",
    "CoinName": "Nybble",
    "FullName": "Nybble (NBL)"
  },
  {
    "Symbol": "NET",
    "CoinName": "NetCoin",
    "FullName": "NetCoin (NET)"
  },
  {
    "Symbol": "NMB",
    "CoinName": "Nimbus Coin",
    "FullName": "Nimbus Coin (NMB)"
  },
  {
    "Symbol": "NRB",
    "CoinName": "NoirBits",
    "FullName": "NoirBits (NRB)"
  },
  {
    "Symbol": "NOBL",
    "CoinName": "NobleCoin",
    "FullName": "NobleCoin (NOBL)"
  },
  {
    "Symbol": "NRS",
    "CoinName": "NoirShares",
    "FullName": "NoirShares (NRS)"
  },
  {
    "Symbol": "NVC",
    "CoinName": "NovaCoin",
    "FullName": "NovaCoin (NVC)"
  },
  {
    "Symbol": "NYAN",
    "CoinName": "NyanCoin",
    "FullName": "NyanCoin (NYAN)"
  },
  {
    "Symbol": "ORB",
    "CoinName": "Orbitcoin",
    "FullName": "Orbitcoin (ORB)"
  },
  {
    "Symbol": "OPSC",
    "CoinName": "OpenSourceCoin",
    "FullName": "OpenSourceCoin (OPSC)"
  },
  {
    "Symbol": "PHS",
    "CoinName": "PhilosophersStone",
    "FullName": "PhilosophersStone (PHS)"
  },
  {
    "Symbol": "POINTS",
    "CoinName": "Cryptsy Points",
    "FullName": "Cryptsy Points (POINTS)"
  },
  {
    "Symbol": "PSEUD",
    "CoinName": "PseudoCash",
    "FullName": "PseudoCash (PSEUD)"
  },
  {
    "Symbol": "PXC",
    "CoinName": "PhoenixCoin",
    "FullName": "PhoenixCoin (PXC)"
  },
  {
    "Symbol": "PYC",
    "CoinName": "PayCoin",
    "FullName": "PayCoin (PYC)"
  },
  {
    "Symbol": "RIPO",
    "CoinName": "RipOffCoin",
    "FullName": "RipOffCoin (RIPO)"
  },
  {
    "Symbol": "RPC",
    "CoinName": "RonPaulCoin",
    "FullName": "RonPaulCoin (RPC)"
  },
  {
    "Symbol": "RT2",
    "CoinName": "RotoCoin",
    "FullName": "RotoCoin (RT2)"
  },
  {
    "Symbol": "RYC",
    "CoinName": "RoyalCoin",
    "FullName": "RoyalCoin (RYC)"
  },
  {
    "Symbol": "RZR",
    "CoinName": "RazorCoin",
    "FullName": "RazorCoin (RZR)"
  },
  {
    "Symbol": "SAT2",
    "CoinName": "Saturn2Coin",
    "FullName": "Saturn2Coin (SAT2)"
  },
  {
    "Symbol": "SBC",
    "CoinName": "StableCoin",
    "FullName": "StableCoin (SBC)"
  },
  {
    "Symbol": "SDC",
    "CoinName": "ShadowCash",
    "FullName": "ShadowCash (SDC)"
  },
  {
    "Symbol": "SFR",
    "CoinName": "SaffronCoin",
    "FullName": "SaffronCoin (SFR)"
  },
  {
    "Symbol": "SHADE",
    "CoinName": "ShadeCoin",
    "FullName": "ShadeCoin (SHADE)"
  },
  {
    "Symbol": "SHLD",
    "CoinName": "ShieldCoin",
    "FullName": "ShieldCoin (SHLD)"
  },
  {
    "Symbol": "SILK",
    "CoinName": "SilkCoin",
    "FullName": "SilkCoin (SILK)"
  },
  {
    "Symbol": "SLG",
    "CoinName": "SterlingCoin",
    "FullName": "SterlingCoin (SLG)"
  },
  {
    "Symbol": "SMC",
    "CoinName": "SmartCoin",
    "FullName": "SmartCoin (SMC)"
  },
  {
    "Symbol": "SOLE",
    "CoinName": "SoleCoin",
    "FullName": "SoleCoin (SOLE)"
  },
  {
    "Symbol": "SPA",
    "CoinName": "SpainCoin",
    "FullName": "SpainCoin (SPA)"
  },
  {
    "Symbol": "SPOTS",
    "CoinName": "Spots",
    "FullName": "Spots (SPOTS)"
  },
  {
    "Symbol": "SRC",
    "CoinName": "SecureCoin",
    "FullName": "SecureCoin (SRC)"
  },
  {
    "Symbol": "SSV",
    "CoinName": "SSVCoin",
    "FullName": "SSVCoin (SSV)"
  },
  {
    "Symbol": "SUPER",
    "CoinName": "SuperCoin",
    "FullName": "SuperCoin (SUPER)"
  },
  {
    "Symbol": "SWIFT",
    "CoinName": "BitSwift",
    "FullName": "BitSwift (SWIFT)"
  },
  {
    "Symbol": "SYNC",
    "CoinName": "SyncCoin",
    "FullName": "SyncCoin (SYNC)"
  },
  {
    "Symbol": "TAG",
    "CoinName": "TagCoin",
    "FullName": "TagCoin (TAG)"
  },
  {
    "Symbol": "TAK",
    "CoinName": "TakCoin",
    "FullName": "TakCoin (TAK)"
  },
  {
    "Symbol": "TES",
    "CoinName": "TeslaCoin",
    "FullName": "TeslaCoin (TES)"
  },
  {
    "Symbol": "TGC",
    "CoinName": "TigerCoin",
    "FullName": "TigerCoin (TGC)"
  },
  {
    "Symbol": "TIT",
    "CoinName": "TittieCoin",
    "FullName": "TittieCoin (TIT)"
  },
  {
    "Symbol": "TOR",
    "CoinName": "TorCoin",
    "FullName": "TorCoin (TOR)"
  },
  {
    "Symbol": "TRC",
    "CoinName": "TerraCoin",
    "FullName": "TerraCoin (TRC)"
  },
  {
    "Symbol": "TITC",
    "CoinName": "TitCoin",
    "FullName": "TitCoin (TITC)"
  },
  {
    "Symbol": "ULTC",
    "CoinName": "Umbrella",
    "FullName": "Umbrella (ULTC)"
  },
  {
    "Symbol": "UNB",
    "CoinName": "UnbreakableCoin",
    "FullName": "UnbreakableCoin (UNB)"
  },
  {
    "Symbol": "UNO",
    "CoinName": "Unobtanium",
    "FullName": "Unobtanium (UNO)"
  },
  {
    "Symbol": "URO",
    "CoinName": "UroCoin",
    "FullName": "UroCoin (URO)"
  },
  {
    "Symbol": "USDE",
    "CoinName": "UnitaryStatus Dollar",
    "FullName": "UnitaryStatus Dollar (USDE)"
  },
  {
    "Symbol": "UTC",
    "CoinName": "UltraCoin",
    "FullName": "UltraCoin (UTC)"
  },
  {
    "Symbol": "UTIL",
    "CoinName": "Utility Coin",
    "FullName": "Utility Coin (UTIL)"
  },
  {
    "Symbol": "VDO",
    "CoinName": "VidioCoin",
    "FullName": "VidioCoin (VDO)"
  },
  {
    "Symbol": "VOOT",
    "CoinName": "VootCoin",
    "FullName": "VootCoin (VOOT)"
  },
  {
    "Symbol": "VRC",
    "CoinName": "VeriCoin",
    "FullName": "VeriCoin (VRC)"
  },
  {
    "Symbol": "WDC",
    "CoinName": "WorldCoin",
    "FullName": "WorldCoin (WDC)"
  },
  {
    "Symbol": "XAI",
    "CoinName": "SapienceCoin",
    "FullName": "SapienceCoin (XAI)"
  },
  {
    "Symbol": "XBOT",
    "CoinName": "SocialXbotCoin",
    "FullName": "SocialXbotCoin (XBOT)"
  },
  {
    "Symbol": "XC",
    "CoinName": "X11 Coin",
    "FullName": "X11 Coin (XC)"
  },
  {
    "Symbol": "XCSH",
    "CoinName": "Xcash",
    "FullName": "Xcash (XCSH)"
  },
  {
    "Symbol": "XCR",
    "CoinName": "Crypti",
    "FullName": "Crypti (XCR)"
  },
  {
    "Symbol": "XJO",
    "CoinName": "JouleCoin",
    "FullName": "JouleCoin (XJO)"
  },
  {
    "Symbol": "XLB",
    "CoinName": "LibertyCoin",
    "FullName": "LibertyCoin (XLB)"
  },
  {
    "Symbol": "XPM",
    "CoinName": "PrimeCoin",
    "FullName": "PrimeCoin (XPM)"
  },
  {
    "Symbol": "XST",
    "CoinName": "StealthCoin",
    "FullName": "StealthCoin (XST)"
  },
  {
    "Symbol": "XXX",
    "CoinName": "XXXCoin",
    "FullName": "XXXCoin (XXX)"
  },
  {
    "Symbol": "YAC",
    "CoinName": "YAcCoin",
    "FullName": "YAcCoin (YAC)"
  },
  {
    "Symbol": "ZCC",
    "CoinName": "ZCC Coin",
    "FullName": "ZCC Coin (ZCC)"
  },
  {
    "Symbol": "ZED",
    "CoinName": "ZedCoins",
    "FullName": "ZedCoins (ZED)"
  },
  {
    "Symbol": "EKN",
    "CoinName": "Elektron",
    "FullName": "Elektron (EKN)"
  },
  {
    "Symbol": "XAU",
    "CoinName": "XauCoin",
    "FullName": "XauCoin (XAU)"
  },
  {
    "Symbol": "TMC",
    "CoinName": "TimesCoin",
    "FullName": "TimesCoin (TMC)"
  },
  {
    "Symbol": "NBT",
    "CoinName": "NuBits",
    "FullName": "NuBits (NBT)"
  },
  {
    "Symbol": "SJCX",
    "CoinName": "StorjCoin",
    "FullName": "StorjCoin (SJCX)"
  },
  {
    "Symbol": "START",
    "CoinName": "StartCoin",
    "FullName": "StartCoin (START)"
  },
  {
    "Symbol": "HUGE",
    "CoinName": "BigCoin",
    "FullName": "BigCoin (HUGE)"
  },
  {
    "Symbol": "MAID",
    "CoinName": "MaidSafe Coin",
    "FullName": "MaidSafe Coin (MAID)"
  },
  {
    "Symbol": "007",
    "CoinName": "007 coin",
    "FullName": "007 coin (007)"
  },
  {
    "Symbol": "MONA",
    "CoinName": "MonaCoin",
    "FullName": "MonaCoin (MONA)"
  },
  {
    "Symbol": "CELL",
    "CoinName": "SolarFarm",
    "FullName": "SolarFarm (CELL)"
  },
  {
    "Symbol": "TEK",
    "CoinName": "TekCoin",
    "FullName": "TekCoin (TEK)"
  },
  {
    "Symbol": "BAY",
    "CoinName": "BitBay",
    "FullName": "BitBay (BAY)"
  },
  {
    "Symbol": "NTRN",
    "CoinName": "Neutron",
    "FullName": "Neutron (NTRN)"
  },
  {
    "Symbol": "SLING",
    "CoinName": "Sling Coin",
    "FullName": "Sling Coin (SLING)"
  },
  {
    "Symbol": "XVC",
    "CoinName": "Vcash",
    "FullName": "Vcash (XVC)"
  },
  {
    "Symbol": "CRAVE",
    "CoinName": "CraveCoin",
    "FullName": "CraveCoin (CRAVE)"
  },
  {
    "Symbol": "XSI",
    "CoinName": "Stability Shares",
    "FullName": "Stability Shares (XSI)"
  },
  {
    "Symbol": "BYC",
    "CoinName": "ByteCent",
    "FullName": "ByteCent (BYC)"
  },
  {
    "Symbol": "GRC",
    "CoinName": "GridCoin",
    "FullName": "GridCoin (GRC)"
  },
  {
    "Symbol": "GEMZ",
    "CoinName": "Gemz Social",
    "FullName": "Gemz Social (GEMZ)"
  },
  {
    "Symbol": "KTK",
    "CoinName": "KryptCoin",
    "FullName": "KryptCoin (KTK)"
  },
  {
    "Symbol": "HZ",
    "CoinName": "Horizon",
    "FullName": "Horizon (HZ)"
  },
  {
    "Symbol": "FAIR",
    "CoinName": "FairCoin",
    "FullName": "FairCoin (FAIR)"
  },
  {
    "Symbol": "QORA",
    "CoinName": "QoraCoin",
    "FullName": "QoraCoin (QORA)"
  },
  {
    "Symbol": "RBY",
    "CoinName": "RubyCoin",
    "FullName": "RubyCoin (RBY)"
  },
  {
    "Symbol": "PTC",
    "CoinName": "PesetaCoin",
    "FullName": "PesetaCoin (PTC)"
  },
  {
    "Symbol": "KORE",
    "CoinName": "Kore",
    "FullName": "Kore (KORE)"
  },
  {
    "Symbol": "WBB",
    "CoinName": "Wild Beast Coin",
    "FullName": "Wild Beast Coin (WBB)"
  },
  {
    "Symbol": "SSD",
    "CoinName": "Sonic Screw Driver Coin",
    "FullName": "Sonic Screw Driver Coin (SSD)"
  },
  {
    "Symbol": "XTC",
    "CoinName": "TileCoin",
    "FullName": "TileCoin (XTC)"
  },
  {
    "Symbol": "NOTE",
    "CoinName": "Dnotes",
    "FullName": "Dnotes (NOTE)"
  },
  {
    "Symbol": "FLO",
    "CoinName": "Flo",
    "FullName": "Flo (FLO)"
  },
  {
    "Symbol": "MMXIV",
    "CoinName": "MaieutiCoin",
    "FullName": "MaieutiCoin (MMXIV)"
  },
  {
    "Symbol": "8BIT",
    "CoinName": "8BIT Coin",
    "FullName": "8BIT Coin (8BIT)"
  },
  {
    "Symbol": "STV",
    "CoinName": "Sativa Coin",
    "FullName": "Sativa Coin (STV)"
  },
  {
    "Symbol": "EBS",
    "CoinName": "EbolaShare",
    "FullName": "EbolaShare (EBS)"
  },
  {
    "Symbol": "AM",
    "CoinName": "AeroMe",
    "FullName": "AeroMe (AM)"
  },
  {
    "Symbol": "XMG",
    "CoinName": "Coin Magi",
    "FullName": "Coin Magi (XMG)"
  },
  {
    "Symbol": "AMBER",
    "CoinName": "AmberCoin",
    "FullName": "AmberCoin (AMBER)"
  },
  {
    "Symbol": "NKT",
    "CoinName": "NakomotoDark",
    "FullName": "NakomotoDark (NKT)"
  },
  {
    "Symbol": "J",
    "CoinName": "JoinCoin",
    "FullName": "JoinCoin (J)"
  },
  {
    "Symbol": "GHC",
    "CoinName": "GhostCoin",
    "FullName": "GhostCoin (GHC)"
  },
  {
    "Symbol": "ABY",
    "CoinName": "ArtByte",
    "FullName": "ArtByte (ABY)"
  },
  {
    "Symbol": "LDOGE",
    "CoinName": "LiteDoge",
    "FullName": "LiteDoge (LDOGE)"
  },
  {
    "Symbol": "MTR",
    "CoinName": "MasterTraderCoin",
    "FullName": "MasterTraderCoin (MTR)"
  },
  {
    "Symbol": "TRI",
    "CoinName": "Triangles Coin",
    "FullName": "Triangles Coin (TRI)"
  },
  {
    "Symbol": "SWARM",
    "CoinName": "SwarmCoin",
    "FullName": "SwarmCoin (SWARM)"
  },
  {
    "Symbol": "BBR",
    "CoinName": "Boolberry",
    "FullName": "Boolberry (BBR)"
  },
  {
    "Symbol": "BTCRY",
    "CoinName": "BitCrystal",
    "FullName": "BitCrystal (BTCRY)"
  },
  {
    "Symbol": "BCR",
    "CoinName": "BitCredit",
    "FullName": "BitCredit (BCR)"
  },
  {
    "Symbol": "XPB",
    "CoinName": "Pebble Coin",
    "FullName": "Pebble Coin (XPB)"
  },
  {
    "Symbol": "XDQ",
    "CoinName": "Dirac Coin",
    "FullName": "Dirac Coin (XDQ)"
  },
  {
    "Symbol": "FLDC",
    "CoinName": "Folding Coin",
    "FullName": "Folding Coin (FLDC)"
  },
  {
    "Symbol": "SLR",
    "CoinName": "SolarCoin",
    "FullName": "SolarCoin (SLR)"
  },
  {
    "Symbol": "SMAC",
    "CoinName": "Social Media Coin",
    "FullName": "Social Media Coin (SMAC)"
  },
  {
    "Symbol": "TRK",
    "CoinName": "TruckCoin",
    "FullName": "TruckCoin (TRK)"
  },
  {
    "Symbol": "U",
    "CoinName": "Ucoin",
    "FullName": "Ucoin (U)"
  },
  {
    "Symbol": "UIS",
    "CoinName": "Unitus",
    "FullName": "Unitus (UIS)"
  },
  {
    "Symbol": "CYP",
    "CoinName": "CypherPunkCoin",
    "FullName": "CypherPunkCoin (CYP)"
  },
  {
    "Symbol": "UFO",
    "CoinName": "UFO Coin",
    "FullName": "UFO Coin (UFO)"
  },
  {
    "Symbol": "ASN",
    "CoinName": "Ascension Coin",
    "FullName": "Ascension Coin (ASN)"
  },
  {
    "Symbol": "OC",
    "CoinName": "OrangeCoin",
    "FullName": "OrangeCoin (OC)"
  },
  {
    "Symbol": "GSM",
    "CoinName": "GSM Coin",
    "FullName": "GSM Coin (GSM)"
  },
  {
    "Symbol": "FSC",
    "CoinName": "FriendshipCoin",
    "FullName": "FriendshipCoin (FSC)"
  },
  {
    "Symbol": "NXTTY",
    "CoinName": "NXTTY",
    "FullName": "NXTTY (NXTTY)"
  },
  {
    "Symbol": "QBK",
    "CoinName": "QuBuck Coin",
    "FullName": "QuBuck Coin (QBK)"
  },
  {
    "Symbol": "BLC",
    "CoinName": "BlakeCoin",
    "FullName": "BlakeCoin (BLC)"
  },
  {
    "Symbol": "MARYJ",
    "CoinName": "MaryJane Coin",
    "FullName": "MaryJane Coin (MARYJ)"
  },
  {
    "Symbol": "OMC",
    "CoinName": "OmniCron",
    "FullName": "OmniCron (OMC)"
  },
  {
    "Symbol": "GIG",
    "CoinName": "GigCoin",
    "FullName": "GigCoin (GIG)"
  },
  {
    "Symbol": "CC",
    "CoinName": "CyberCoin",
    "FullName": "CyberCoin (CC)"
  },
  {
    "Symbol": "BITS",
    "CoinName": "BitstarCoin",
    "FullName": "BitstarCoin (BITS)"
  },
  {
    "Symbol": "LTBC",
    "CoinName": "LTBCoin",
    "FullName": "LTBCoin (LTBC)"
  },
  {
    "Symbol": "NEOS",
    "CoinName": "NeosCoin",
    "FullName": "NeosCoin (NEOS)"
  },
  {
    "Symbol": "HYPER",
    "CoinName": "HyperCoin",
    "FullName": "HyperCoin (HYPER)"
  },
  {
    "Symbol": "VTR",
    "CoinName": "Vtorrent",
    "FullName": "Vtorrent (VTR)"
  },
  {
    "Symbol": "METAL",
    "CoinName": "MetalCoin",
    "FullName": "MetalCoin (METAL)"
  },
  {
    "Symbol": "PINK",
    "CoinName": "PinkCoin",
    "FullName": "PinkCoin (PINK)"
  },
  {
    "Symbol": "GRE",
    "CoinName": "GreenCoin",
    "FullName": "GreenCoin (GRE)"
  },
  {
    "Symbol": "XG",
    "CoinName": "XG Sports",
    "FullName": "XG Sports (XG)"
  },
  {
    "Symbol": "CHILD",
    "CoinName": "ChildCoin",
    "FullName": "ChildCoin (CHILD)"
  },
  {
    "Symbol": "MINE",
    "CoinName": "Instamine Nuggets",
    "FullName": "Instamine Nuggets (MINE)"
  },
  {
    "Symbol": "ROS",
    "CoinName": "ROS Coin",
    "FullName": "ROS Coin (ROS)"
  },
  {
    "Symbol": "UNAT",
    "CoinName": "Unattanium",
    "FullName": "Unattanium (UNAT)"
  },
  {
    "Symbol": "SLM",
    "CoinName": "SlimCoin",
    "FullName": "SlimCoin (SLM)"
  },
  {
    "Symbol": "GAIA",
    "CoinName": "GAIA Platform",
    "FullName": "GAIA Platform (GAIA)"
  },
  {
    "Symbol": "FCN",
    "CoinName": "FantomCoin ",
    "FullName": "FantomCoin  (FCN)"
  },
  {
    "Symbol": "XCN",
    "CoinName": "Cryptonite",
    "FullName": "Cryptonite (XCN)"
  },
  {
    "Symbol": "CURE",
    "CoinName": "Curecoin",
    "FullName": "Curecoin (CURE)"
  },
  {
    "Symbol": "GMC",
    "CoinName": "Gridmaster",
    "FullName": "Gridmaster (GMC)"
  },
  {
    "Symbol": "MMC",
    "CoinName": "MemoryCoin",
    "FullName": "MemoryCoin (MMC)"
  },
  {
    "Symbol": "XBC",
    "CoinName": "BitcoinPlus",
    "FullName": "BitcoinPlus (XBC)"
  },
  {
    "Symbol": "CYC",
    "CoinName": "ConSpiracy Coin ",
    "FullName": "ConSpiracy Coin  (CYC)"
  },
  {
    "Symbol": "OCTO",
    "CoinName": "OctoCoin",
    "FullName": "OctoCoin (OCTO)"
  },
  {
    "Symbol": "MSC",
    "CoinName": "MasterCoin",
    "FullName": "MasterCoin (MSC)"
  },
  {
    "Symbol": "C2",
    "CoinName": "Coin.2",
    "FullName": "Coin.2 (C2)"
  },
  {
    "Symbol": "GSX",
    "CoinName": "GlowShares",
    "FullName": "GlowShares (GSX)"
  },
  {
    "Symbol": "CAMC",
    "CoinName": "Camcoin",
    "FullName": "Camcoin (CAMC)"
  },
  {
    "Symbol": "RBR",
    "CoinName": "Ribbit Rewards",
    "FullName": "Ribbit Rewards (RBR)"
  },
  {
    "Symbol": "XQN",
    "CoinName": "Quotient",
    "FullName": "Quotient (XQN)"
  },
  {
    "Symbol": "ICASH",
    "CoinName": "ICASH",
    "FullName": "ICASH (ICASH)"
  },
  {
    "Symbol": "NODET",
    "CoinName": "Node",
    "FullName": "Node (NODET)"
  },
  {
    "Symbol": "SOON",
    "CoinName": "SoonCoin",
    "FullName": "SoonCoin (SOON)"
  },
  {
    "Symbol": "BTMI",
    "CoinName": "BitMiles",
    "FullName": "BitMiles (BTMI)"
  },
  {
    "Symbol": "EVENT",
    "CoinName": "Event Token",
    "FullName": "Event Token (EVENT)"
  },
  {
    "Symbol": "1CR",
    "CoinName": "1Credit",
    "FullName": "1Credit (1CR)"
  },
  {
    "Symbol": "VIOR",
    "CoinName": "ViorCoin",
    "FullName": "ViorCoin (VIOR)"
  },
  {
    "Symbol": "XCO",
    "CoinName": "XCoin",
    "FullName": "XCoin (XCO)"
  },
  {
    "Symbol": "VMC",
    "CoinName": "VirtualMining Coin",
    "FullName": "VirtualMining Coin (VMC)"
  },
  {
    "Symbol": "MARSC",
    "CoinName": "MarsCoin",
    "FullName": "MarsCoin (MARSC)"
  },
  {
    "Symbol": "VIRAL",
    "CoinName": "Viral Coin",
    "FullName": "Viral Coin (VIRAL)"
  },
  {
    "Symbol": "EQM",
    "CoinName": "Equilibrium Coin",
    "FullName": "Equilibrium Coin (EQM)"
  },
  {
    "Symbol": "ISL",
    "CoinName": "IslaCoin",
    "FullName": "IslaCoin (ISL)"
  },
  {
    "Symbol": "QSLV",
    "CoinName": "Quicksilver coin",
    "FullName": "Quicksilver coin (QSLV)"
  },
  {
    "Symbol": "XWT",
    "CoinName": "World Trade Funds",
    "FullName": "World Trade Funds (XWT)"
  },
  {
    "Symbol": "XNA",
    "CoinName": "DeOxyRibose",
    "FullName": "DeOxyRibose (XNA)"
  },
  {
    "Symbol": "RDN",
    "CoinName": "RadonPay",
    "FullName": "RadonPay (RDN)"
  },
  {
    "Symbol": "SKB",
    "CoinName": "SkullBuzz",
    "FullName": "SkullBuzz (SKB)"
  },
  {
    "Symbol": "BSTY",
    "CoinName": "GlobalBoost",
    "FullName": "GlobalBoost (BSTY)"
  },
  {
    "Symbol": "FCS",
    "CoinName": "CryptoFocus",
    "FullName": "CryptoFocus (FCS)"
  },
  {
    "Symbol": "GAM",
    "CoinName": "Gambit coin",
    "FullName": "Gambit coin (GAM)"
  },
  {
    "Symbol": "CESC",
    "CoinName": "Crypto Escudo",
    "FullName": "Crypto Escudo (CESC)"
  },
  {
    "Symbol": "TWLV",
    "CoinName": "Twelve Coin",
    "FullName": "Twelve Coin (TWLV)"
  },
  {
    "Symbol": "EAGS",
    "CoinName": "EagsCoin",
    "FullName": "EagsCoin (EAGS)"
  },
  {
    "Symbol": "MWC",
    "CoinName": "MultiWallet Coin",
    "FullName": "MultiWallet Coin (MWC)"
  },
  {
    "Symbol": "ADC",
    "CoinName": "AudioCoin",
    "FullName": "AudioCoin (ADC)"
  },
  {
    "Symbol": "MARS",
    "CoinName": "MarsCoin ",
    "FullName": "MarsCoin  (MARS)"
  },
  {
    "Symbol": "XMS",
    "CoinName": "Megastake",
    "FullName": "Megastake (XMS)"
  },
  {
    "Symbol": "SPHR",
    "CoinName": "Sphere Coin",
    "FullName": "Sphere Coin (SPHR)"
  },
  {
    "Symbol": "SIGU",
    "CoinName": "Singular",
    "FullName": "Singular (SIGU)"
  },
  {
    "Symbol": "M1",
    "CoinName": "SupplyShock",
    "FullName": "SupplyShock (M1)"
  },
  {
    "Symbol": "DB",
    "CoinName": "DarkBit",
    "FullName": "DarkBit (DB)"
  },
  {
    "Symbol": "CTO",
    "CoinName": "Crypto",
    "FullName": "Crypto (CTO)"
  },
  {
    "Symbol": "EDGE",
    "CoinName": "EdgeCoin",
    "FullName": "EdgeCoin (EDGE)"
  },
  {
    "Symbol": "BITL",
    "CoinName": "BitLux",
    "FullName": "BitLux (BITL)"
  },
  {
    "Symbol": "FUTC",
    "CoinName": "FutCoin",
    "FullName": "FutCoin (FUTC)"
  },
  {
    "Symbol": "GLOBE",
    "CoinName": "Global",
    "FullName": "Global (GLOBE)"
  },
  {
    "Symbol": "TAM",
    "CoinName": "TamaGucci",
    "FullName": "TamaGucci (TAM)"
  },
  {
    "Symbol": "MRP",
    "CoinName": "MorpheusCoin",
    "FullName": "MorpheusCoin (MRP)"
  },
  {
    "Symbol": "CREVA",
    "CoinName": "Creva Coin",
    "FullName": "Creva Coin (CREVA)"
  },
  {
    "Symbol": "XFRC",
    "CoinName": "Forever Coin",
    "FullName": "Forever Coin (XFRC)"
  },
  {
    "Symbol": "NANAS",
    "CoinName": "BananaBits",
    "FullName": "BananaBits (NANAS)"
  },
  {
    "Symbol": "LOG",
    "CoinName": "Wood Coin",
    "FullName": "Wood Coin (LOG)"
  },
  {
    "Symbol": "XCE",
    "CoinName": "Cerium",
    "FullName": "Cerium (XCE)"
  },
  {
    "Symbol": "ACP",
    "CoinName": "Anarchists Prime",
    "FullName": "Anarchists Prime (ACP)"
  },
  {
    "Symbol": "DRZ",
    "CoinName": "Droidz",
    "FullName": "Droidz (DRZ)"
  },
  {
    "Symbol": "BSC",
    "CoinName": "BowsCoin",
    "FullName": "BowsCoin (BSC)"
  },
  {
    "Symbol": "DRKT",
    "CoinName": "DarkTron",
    "FullName": "DarkTron (DRKT)"
  },
  {
    "Symbol": "CIRC",
    "CoinName": "CryptoCircuits",
    "FullName": "CryptoCircuits (CIRC)"
  },
  {
    "Symbol": "NKA",
    "CoinName": "IncaKoin",
    "FullName": "IncaKoin (NKA)"
  },
  {
    "Symbol": "VERSA",
    "CoinName": "Versa Token",
    "FullName": "Versa Token (VERSA)"
  },
  {
    "Symbol": "EPY",
    "CoinName": "Empyrean",
    "FullName": "Empyrean (EPY)"
  },
  {
    "Symbol": "SQL",
    "CoinName": "Squall Coin",
    "FullName": "Squall Coin (SQL)"
  },
  {
    "Symbol": "PIGGY",
    "CoinName": "Piggy Coin",
    "FullName": "Piggy Coin (PIGGY)"
  },
  {
    "Symbol": "CHA",
    "CoinName": "Charity Coin",
    "FullName": "Charity Coin (CHA)"
  },
  {
    "Symbol": "MIL",
    "CoinName": "Milllionaire Coin",
    "FullName": "Milllionaire Coin (MIL)"
  },
  {
    "Symbol": "XPH",
    "CoinName": "PharmaCoin",
    "FullName": "PharmaCoin (XPH)"
  },
  {
    "Symbol": "GRM",
    "CoinName": "GridMaster",
    "FullName": "GridMaster (GRM)"
  },
  {
    "Symbol": "QTZ",
    "CoinName": "Quartz",
    "FullName": "Quartz (QTZ)"
  },
  {
    "Symbol": "ARB",
    "CoinName": "Arbit Coin",
    "FullName": "Arbit Coin (ARB)"
  },
  {
    "Symbol": "LTS",
    "CoinName": "Litestar Coin",
    "FullName": "Litestar Coin (LTS)"
  },
  {
    "Symbol": "SPC",
    "CoinName": "SpinCoin",
    "FullName": "SpinCoin (SPC)"
  },
  {
    "Symbol": "GP",
    "CoinName": "GoldPieces",
    "FullName": "GoldPieces (GP)"
  },
  {
    "Symbol": "BITZ",
    "CoinName": "Bitz Coin",
    "FullName": "Bitz Coin (BITZ)"
  },
  {
    "Symbol": "DUB",
    "CoinName": "DubCoin",
    "FullName": "DubCoin (DUB)"
  },
  {
    "Symbol": "GRAV",
    "CoinName": "Graviton",
    "FullName": "Graviton (GRAV)"
  },
  {
    "Symbol": "BOB",
    "CoinName": "Bob's Repair",
    "FullName": "Bob's Repair (BOB)"
  },
  {
    "Symbol": "QCN",
    "CoinName": "Quazar Coin",
    "FullName": "Quazar Coin (QCN)"
  },
  {
    "Symbol": "HEDGE",
    "CoinName": "Hedgecoin",
    "FullName": "Hedgecoin (HEDGE)"
  },
  {
    "Symbol": "SONG",
    "CoinName": "Song Coin",
    "FullName": "Song Coin (SONG)"
  },
  {
    "Symbol": "XSEED",
    "CoinName": "BitSeeds",
    "FullName": "BitSeeds (XSEED)"
  },
  {
    "Symbol": "AXIOM",
    "CoinName": "Axiom Coin",
    "FullName": "Axiom Coin (AXIOM)"
  },
  {
    "Symbol": "SMLY",
    "CoinName": "SmileyCoin",
    "FullName": "SmileyCoin (SMLY)"
  },
  {
    "Symbol": "RBT",
    "CoinName": "Rimbit",
    "FullName": "Rimbit (RBT)"
  },
  {
    "Symbol": "CHIP",
    "CoinName": "Chip",
    "FullName": "Chip (CHIP)"
  },
  {
    "Symbol": "SPEC",
    "CoinName": "SpecCoin",
    "FullName": "SpecCoin (SPEC)"
  },
  {
    "Symbol": "UNC",
    "CoinName": "UnCoin",
    "FullName": "UnCoin (UNC)"
  },
  {
    "Symbol": "SPRTS",
    "CoinName": "Sprouts",
    "FullName": "Sprouts (SPRTS)"
  },
  {
    "Symbol": "ZNY",
    "CoinName": "BitZeny",
    "FullName": "BitZeny (ZNY)"
  },
  {
    "Symbol": "BTQ",
    "CoinName": "BitQuark",
    "FullName": "BitQuark (BTQ)"
  },
  {
    "Symbol": "PKB",
    "CoinName": "ParkByte",
    "FullName": "ParkByte (PKB)"
  },
  {
    "Symbol": "SNRG",
    "CoinName": "Synergy",
    "FullName": "Synergy (SNRG)"
  },
  {
    "Symbol": "GHOUL",
    "CoinName": "Ghoul Coin",
    "FullName": "Ghoul Coin (GHOUL)"
  },
  {
    "Symbol": "DIGS",
    "CoinName": "Diggits",
    "FullName": "Diggits (DIGS)"
  },
  {
    "Symbol": "EXP",
    "CoinName": "Expanse",
    "FullName": "Expanse (EXP)"
  },
  {
    "Symbol": "GCR",
    "CoinName": "Global Currency Reserve",
    "FullName": "Global Currency Reserve (GCR)"
  },
  {
    "Symbol": "MAPC",
    "CoinName": "MapCoin",
    "FullName": "MapCoin (MAPC)"
  },
  {
    "Symbol": "MI",
    "CoinName": "XiaoMiCoin",
    "FullName": "XiaoMiCoin (MI)"
  },
  {
    "Symbol": "CON",
    "CoinName": "Paycon",
    "FullName": "Paycon (PAYCON)"
  },
  {
    "Symbol": "TX",
    "CoinName": "Transfer",
    "FullName": "Transfer (TX)"
  },
  {
    "Symbol": "GRS",
    "CoinName": "Groestlcoin",
    "FullName": "Groestlcoin (GRS)"
  },
  {
    "Symbol": "CLV",
    "CoinName": "CleverCoin",
    "FullName": "CleverCoin (CLV)"
  },
  {
    "Symbol": "FCT",
    "CoinName": "Factom",
    "FullName": "Factom (FCT)"
  },
  {
    "Symbol": "LYB",
    "CoinName": "LyraBar",
    "FullName": "LyraBar (LYB)"
  },
  {
    "Symbol": "PXI",
    "CoinName": "Prime-X1",
    "FullName": "Prime-X1 (PXI)"
  },
  {
    "Symbol": "CPC",
    "CoinName": "CapriCoin",
    "FullName": "CapriCoin (CPC)"
  },
  {
    "Symbol": "AMS",
    "CoinName": "Amsterdam Coin",
    "FullName": "Amsterdam Coin (AMS)"
  },
  {
    "Symbol": "OBITS",
    "CoinName": "Obits Coin",
    "FullName": "Obits Coin (OBITS)"
  },
  {
    "Symbol": "CLUB",
    "CoinName": " ClubCoin",
    "FullName": " ClubCoin (CLUB)"
  },
  {
    "Symbol": "RADS",
    "CoinName": "Radium",
    "FullName": "Radium (RADS)"
  },
  {
    "Symbol": "EMC",
    "CoinName": "Emercoin",
    "FullName": "Emercoin (EMC)"
  },
  {
    "Symbol": "BLITZ",
    "CoinName": "BlitzCoin",
    "FullName": "BlitzCoin (BLITZ)"
  },
  {
    "Symbol": "BHIRE",
    "CoinName": "BitHIRE",
    "FullName": "BitHIRE (BHIRE)"
  },
  {
    "Symbol": "EGC",
    "CoinName": "EverGreenCoin",
    "FullName": "EverGreenCoin (EGC)"
  },
  {
    "Symbol": "MND",
    "CoinName": "MindCoin",
    "FullName": "MindCoin (MND)"
  },
  {
    "Symbol": "I0C",
    "CoinName": "I0coin",
    "FullName": "I0coin (I0C)"
  },
  {
    "Symbol": "DCR",
    "CoinName": "Decred",
    "FullName": "Decred (DCR)"
  },
  {
    "Symbol": "NAS2",
    "CoinName": "Nas2Coin",
    "FullName": "Nas2Coin (NAS2)"
  },
  {
    "Symbol": "PAK",
    "CoinName": "Pakcoin",
    "FullName": "Pakcoin (PAK)"
  },
  {
    "Symbol": "CRB",
    "CoinName": "Creditbit ",
    "FullName": "Creditbit  (CRB)"
  },
  {
    "Symbol": "DOGED",
    "CoinName": "DogeCoinDark",
    "FullName": "DogeCoinDark (DOGED)"
  },
  {
    "Symbol": "REP",
    "CoinName": "Augur",
    "FullName": "Augur (REP)"
  },
  {
    "Symbol": "OK",
    "CoinName": "OKCash",
    "FullName": "OKCash (OK)"
  },
  {
    "Symbol": "RVR",
    "CoinName": "Revolution VR",
    "FullName": "Revolution VR (RVR)"
  },
  {
    "Symbol": "AMP",
    "CoinName": "HyperSpace",
    "FullName": "HyperSpace (AMP)"
  },
  {
    "Symbol": "HODL",
    "CoinName": "HOdlcoin",
    "FullName": "HOdlcoin (HODL)"
  },
  {
    "Symbol": "DGD",
    "CoinName": "Digix DAO",
    "FullName": "Digix DAO (DGD)"
  },
  {
    "Symbol": "EDRC",
    "CoinName": "EDRCoin",
    "FullName": "EDRCoin (EDRC)"
  },
  {
    "Symbol": "HTC",
    "CoinName": "Hitcoin",
    "FullName": "Hitcoin (HTC)"
  },
  {
    "Symbol": "GAME",
    "CoinName": "Gamecredits",
    "FullName": "Gamecredits (GAME)"
  },
  {
    "Symbol": "DSH",
    "CoinName": "Dashcoin",
    "FullName": "Dashcoin (DSH)"
  },
  {
    "Symbol": "DBIC",
    "CoinName": "DubaiCoin",
    "FullName": "DubaiCoin (DBIC)"
  },
  {
    "Symbol": "XHI",
    "CoinName": "HiCoin",
    "FullName": "HiCoin (XHI)"
  },
  {
    "Symbol": "BIOS",
    "CoinName": "BiosCrypto",
    "FullName": "BiosCrypto (BIOS)"
  },
  {
    "Symbol": "CAB",
    "CoinName": "CabbageUnit",
    "FullName": "CabbageUnit (CAB)"
  },
  {
    "Symbol": "DIEM",
    "CoinName": "CarpeDiemCoin",
    "FullName": "CarpeDiemCoin (DIEM)"
  },
  {
    "Symbol": "GBT",
    "CoinName": "GameBetCoin",
    "FullName": "GameBetCoin (GBT)"
  },
  {
    "Symbol": "RCX",
    "CoinName": "RedCrowCoin",
    "FullName": "RedCrowCoin (RCX)"
  },
  {
    "Symbol": "PWR",
    "CoinName": "PWR Coin",
    "FullName": "PWR Coin (PWR)"
  },
  {
    "Symbol": "TRUMP",
    "CoinName": "TrumpCoin",
    "FullName": "TrumpCoin (TRUMP)"
  },
  {
    "Symbol": "PRM",
    "CoinName": "PrismChain",
    "FullName": "PrismChain (PRM)"
  },
  {
    "Symbol": "BCY",
    "CoinName": "BitCrystals",
    "FullName": "BitCrystals (BCY)"
  },
  {
    "Symbol": "RBIES",
    "CoinName": "Rubies",
    "FullName": "Rubies (RBIES)"
  },
  {
    "Symbol": "BLRY",
    "CoinName": "BillaryCoin",
    "FullName": "BillaryCoin (BLRY)"
  },
  {
    "Symbol": "DOT",
    "CoinName": "Dotcoin",
    "FullName": "Dotcoin (DOT)"
  },
  {
    "Symbol": "SCOT",
    "CoinName": "Scotcoin",
    "FullName": "Scotcoin (SCOT)"
  },
  {
    "Symbol": "CREED",
    "CoinName": "Thecreed",
    "FullName": "Thecreed (CREED)"
  },
  {
    "Symbol": "POST",
    "CoinName": "PostCoin",
    "FullName": "PostCoin (POST)"
  },
  {
    "Symbol": "INFX",
    "CoinName": "Influxcoin",
    "FullName": "Influxcoin (INFX)"
  },
  {
    "Symbol": "ETHS",
    "CoinName": "EthereumScrypt",
    "FullName": "EthereumScrypt (ETHS)"
  },
  {
    "Symbol": "PXL",
    "CoinName": "Phalanx",
    "FullName": "Phalanx (PXL)"
  },
  {
    "Symbol": "NUM",
    "CoinName": "NumbersCoin",
    "FullName": "NumbersCoin (NUM)"
  },
  {
    "Symbol": "SOUL",
    "CoinName": "SoulCoin",
    "FullName": "SoulCoin (SOUL)"
  },
  {
    "Symbol": "ION",
    "CoinName": "Ionomy",
    "FullName": "Ionomy (ION)"
  },
  {
    "Symbol": "GROW",
    "CoinName": "GrownCoin",
    "FullName": "GrownCoin (GROW)"
  },
  {
    "Symbol": "UNITY",
    "CoinName": "SuperNET",
    "FullName": "SuperNET (UNITY)"
  },
  {
    "Symbol": "OLDSF",
    "CoinName": "OldSafeCoin",
    "FullName": "OldSafeCoin (OLDSF)"
  },
  {
    "Symbol": "SSTC",
    "CoinName": "SunShotCoin",
    "FullName": "SunShotCoin (SSTC)"
  },
  {
    "Symbol": "NETC",
    "CoinName": "NetworkCoin",
    "FullName": "NetworkCoin (NETC)"
  },
  {
    "Symbol": "GPU",
    "CoinName": "GPU Coin",
    "FullName": "GPU Coin (GPU)"
  },
  {
    "Symbol": "TAGR",
    "CoinName": "Think And Get Rich Coin",
    "FullName": "Think And Get Rich Coin (TAGR)"
  },
  {
    "Symbol": "HMP",
    "CoinName": "HempCoin",
    "FullName": "HempCoin (HMP)"
  },
  {
    "Symbol": "ADZ",
    "CoinName": "Adzcoin",
    "FullName": "Adzcoin (ADZ)"
  },
  {
    "Symbol": "GAP",
    "CoinName": "Gapcoin",
    "FullName": "Gapcoin (GAP)"
  },
  {
    "Symbol": "MYC",
    "CoinName": "MayaCoin",
    "FullName": "MayaCoin (MYC)"
  },
  {
    "Symbol": "IVZ",
    "CoinName": "InvisibleCoin",
    "FullName": "InvisibleCoin (IVZ)"
  },
  {
    "Symbol": "VTA",
    "CoinName": "VirtaCoin",
    "FullName": "VirtaCoin (VTA)"
  },
  {
    "Symbol": "SLS",
    "CoinName": "SaluS",
    "FullName": "SaluS (SLS)"
  },
  {
    "Symbol": "SOIL",
    "CoinName": "SoilCoin",
    "FullName": "SoilCoin (SOIL)"
  },
  {
    "Symbol": "CUBE",
    "CoinName": "DigiCube",
    "FullName": "DigiCube (CUBE)"
  },
  {
    "Symbol": "YOC",
    "CoinName": "YoCoin",
    "FullName": "YoCoin (YOC)"
  },
  {
    "Symbol": "VPRC",
    "CoinName": "VapersCoin",
    "FullName": "VapersCoin (VPRC)"
  },
  {
    "Symbol": "STEPS",
    "CoinName": "Steps",
    "FullName": "Steps (STEPS)"
  },
  {
    "Symbol": "DBTC",
    "CoinName": "DebitCoin",
    "FullName": "DebitCoin (DBTC)"
  },
  {
    "Symbol": "UNIT",
    "CoinName": "Universal Currency",
    "FullName": "Universal Currency (UNIT)"
  },
  {
    "Symbol": "MOIN",
    "CoinName": "MoinCoin",
    "FullName": "MoinCoin (MOIN)"
  },
  {
    "Symbol": "ERC",
    "CoinName": "EuropeCoin",
    "FullName": "EuropeCoin (ERC)"
  },
  {
    "Symbol": "AIB",
    "CoinName": "AdvancedInternetBlock",
    "FullName": "AdvancedInternetBlock (AIB)"
  },
  {
    "Symbol": "PRIME",
    "CoinName": "PrimeChain",
    "FullName": "PrimeChain (PRIME)"
  },
  {
    "Symbol": "BIGUP",
    "CoinName": "BigUp",
    "FullName": "BigUp (BIGUP)"
  },
  {
    "Symbol": "XRE",
    "CoinName": "RevolverCoin",
    "FullName": "RevolverCoin (XRE)"
  },
  {
    "Symbol": "MEME",
    "CoinName": "Pepe",
    "FullName": "Pepe (MEME)"
  },
  {
    "Symbol": "XDB",
    "CoinName": "DragonSphere",
    "FullName": "DragonSphere (XDB)"
  },
  {
    "Symbol": "ANTI",
    "CoinName": "Anti Bitcoin",
    "FullName": "Anti Bitcoin (ANTI)"
  },
  {
    "Symbol": "COLX",
    "CoinName": "ColossusCoinXT",
    "FullName": "ColossusCoinXT (COLX)"
  },
  {
    "Symbol": "MNM",
    "CoinName": "Mineum",
    "FullName": "Mineum (MNM)"
  },
  {
    "Symbol": "ZEIT",
    "CoinName": "ZeitCoin",
    "FullName": "ZeitCoin (ZEIT)"
  },
  {
    "Symbol": "2GIVE",
    "CoinName": "2GiveCoin",
    "FullName": "2GiveCoin (2GIVE)"
  },
  {
    "Symbol": "CGA",
    "CoinName": "Cryptographic Anomaly",
    "FullName": "Cryptographic Anomaly (CGA)"
  },
  {
    "Symbol": "SWING",
    "CoinName": "SwingCoin",
    "FullName": "SwingCoin (SWING)"
  },
  {
    "Symbol": "NEBU",
    "CoinName": "Nebuchadnezzar",
    "FullName": "Nebuchadnezzar (NEBU)"
  },
  {
    "Symbol": "AEC",
    "CoinName": "AcesCoin",
    "FullName": "AcesCoin (AEC)"
  },
  {
    "Symbol": "FRN",
    "CoinName": "Francs",
    "FullName": "Francs (FRN)"
  },
  {
    "Symbol": "ADNT",
    "CoinName": "Aiden",
    "FullName": "Aiden (ADNT)"
  },
  {
    "Symbol": "PULSE",
    "CoinName": "Pulse",
    "FullName": "Pulse (PULSE)"
  },
  {
    "Symbol": "N7",
    "CoinName": "Number7",
    "FullName": "Number7 (N7)"
  },
  {
    "Symbol": "CYG",
    "CoinName": "Cygnus",
    "FullName": "Cygnus (CYG)"
  },
  {
    "Symbol": "LGBTQ",
    "CoinName": "LGBTQoin",
    "FullName": "LGBTQoin (LGBTQ)"
  },
  {
    "Symbol": "UTH",
    "CoinName": "Uther",
    "FullName": "Uther (UTH)"
  },
  {
    "Symbol": "MPRO",
    "CoinName": "MediumProject",
    "FullName": "MediumProject (MPRO)"
  },
  {
    "Symbol": "KATZ",
    "CoinName": "KATZcoin",
    "FullName": "KATZcoin (KATZ)"
  },
  {
    "Symbol": "SPM",
    "CoinName": "Supreme",
    "FullName": "Supreme (SPM)"
  },
  {
    "Symbol": "MOJO",
    "CoinName": "Mojocoin",
    "FullName": "Mojocoin (MOJO)"
  },
  {
    "Symbol": "BELA",
    "CoinName": "Bela",
    "FullName": "Bela (BELA)"
  },
  {
    "Symbol": "FLX",
    "CoinName": "Flash",
    "FullName": "Flash (FLX)"
  },
  {
    "Symbol": "BOLI",
    "CoinName": "BolivarCoin",
    "FullName": "BolivarCoin (BOLI)"
  },
  {
    "Symbol": "DIME",
    "CoinName": "DimeCoin",
    "FullName": "DimeCoin (DIME)"
  },
  {
    "Symbol": "HVCO",
    "CoinName": "High Voltage Coin",
    "FullName": "High Voltage Coin (HVCO)"
  },
  {
    "Symbol": "GIZ",
    "CoinName": "GIZMOcoin",
    "FullName": "GIZMOcoin (GIZ)"
  },
  {
    "Symbol": "GREXIT",
    "CoinName": "GrexitCoin",
    "FullName": "GrexitCoin (GREXIT)"
  },
  {
    "Symbol": "CARBON",
    "CoinName": "Carboncoin",
    "FullName": "Carboncoin (CARBON)"
  },
  {
    "Symbol": "TUR",
    "CoinName": "Turron",
    "FullName": "Turron (TUR)"
  },
  {
    "Symbol": "LEMON",
    "CoinName": "LemonCoin",
    "FullName": "LemonCoin (LEMON)"
  },
  {
    "Symbol": "DISK",
    "CoinName": "Dark Lisk",
    "FullName": "Dark Lisk (DISK)"
  },
  {
    "Symbol": "NEVA",
    "CoinName": "NevaCoin",
    "FullName": "NevaCoin (NEVA)"
  },
  {
    "Symbol": "CYT",
    "CoinName": "Cryptokenz",
    "FullName": "Cryptokenz (CYT)"
  },
  {
    "Symbol": "FUZZ",
    "CoinName": "Fuzzballs",
    "FullName": "Fuzzballs (FUZZ)"
  },
  {
    "Symbol": "NKC",
    "CoinName": "Nukecoinz",
    "FullName": "Nukecoinz (NKC)"
  },
  {
    "Symbol": "SCRT",
    "CoinName": "SecretCoin",
    "FullName": "SecretCoin (SCRT)"
  },
  {
    "Symbol": "XRA",
    "CoinName": "Ratecoin",
    "FullName": "Ratecoin (XRA)"
  },
  {
    "Symbol": "XNX",
    "CoinName": "XanaxCoin",
    "FullName": "XanaxCoin (XNX)"
  },
  {
    "Symbol": "STHR",
    "CoinName": "Stakerush",
    "FullName": "Stakerush (STHR)"
  },
  {
    "Symbol": "BONES",
    "CoinName": "BonesCoin",
    "FullName": "BonesCoin (BONES)"
  },
  {
    "Symbol": "WMC",
    "CoinName": "WMCoin",
    "FullName": "WMCoin (WMC)"
  },
  {
    "Symbol": "GOTX",
    "CoinName": "GothicCoin",
    "FullName": "GothicCoin (GOTX)"
  },
  {
    "Symbol": "SHREK",
    "CoinName": "ShrekCoin",
    "FullName": "ShrekCoin (SHREK)"
  },
  {
    "Symbol": "OBS",
    "CoinName": "Obscurebay",
    "FullName": "Obscurebay (OBS)"
  },
  {
    "Symbol": "EXIT",
    "CoinName": "ExitCoin",
    "FullName": "ExitCoin (EXIT)"
  },
  {
    "Symbol": "EDUC",
    "CoinName": "EducoinV",
    "FullName": "EducoinV (EDUC)"
  },
  {
    "Symbol": "CLINT",
    "CoinName": "Clinton",
    "FullName": "Clinton (CLINT)"
  },
  {
    "Symbol": "CKC",
    "CoinName": "Clockcoin",
    "FullName": "Clockcoin (CKC)"
  },
  {
    "Symbol": "NXE",
    "CoinName": "NXEcoin",
    "FullName": "NXEcoin (NXE)"
  },
  {
    "Symbol": "ZOOM",
    "CoinName": "ZoomCoin",
    "FullName": "ZoomCoin (ZOOM)"
  },
  {
    "Symbol": "DRACO",
    "CoinName": "DT Token",
    "FullName": "DT Token (DRACO)"
  },
  {
    "Symbol": "ORLY",
    "CoinName": "OrlyCoin",
    "FullName": "OrlyCoin (ORLY)"
  },
  {
    "Symbol": "KUBOS",
    "CoinName": "KubosCoin",
    "FullName": "KubosCoin (KUBOS)"
  },
  {
    "Symbol": "INCP",
    "CoinName": "InceptionCoin",
    "FullName": "InceptionCoin (INCP)"
  },
  {
    "Symbol": "SAK",
    "CoinName": "SharkCoin",
    "FullName": "SharkCoin (SAK)"
  },
  {
    "Symbol": "EVIL",
    "CoinName": "EvilCoin",
    "FullName": "EvilCoin (EVIL)"
  },
  {
    "Symbol": "OMA",
    "CoinName": "OmegaCoin",
    "FullName": "OmegaCoin (OMA)"
  },
  {
    "Symbol": "MUE",
    "CoinName": "MonetaryUnit",
    "FullName": "MonetaryUnit (MUE)"
  },
  {
    "Symbol": "COX",
    "CoinName": "CobraCoin",
    "FullName": "CobraCoin (COX)"
  },
  {
    "Symbol": "BNT",
    "CoinName": "Bancor Network Token",
    "FullName": "Bancor Network Token (BNT)"
  },
  {
    "Symbol": "BSD",
    "CoinName": "BitSend",
    "FullName": "BitSend (BSD)"
  },
  {
    "Symbol": "DES",
    "CoinName": "Destiny",
    "FullName": "Destiny (DES)"
  },
  {
    "Symbol": "BIT16",
    "CoinName": "16BitCoin",
    "FullName": "16BitCoin (BIT16)"
  },
  {
    "Symbol": "CHESS",
    "CoinName": "ChessCoin",
    "FullName": "ChessCoin (CHESS)"
  },
  {
    "Symbol": "SPACE",
    "CoinName": "SpaceCoin",
    "FullName": "SpaceCoin (SPACE)"
  },
  {
    "Symbol": "LQD",
    "CoinName": "Liquid",
    "FullName": "Liquid (LQD)"
  },
  {
    "Symbol": "MARV",
    "CoinName": "Marvelous",
    "FullName": "Marvelous (MARV)"
  },
  {
    "Symbol": "XDE2",
    "CoinName": "XDE II",
    "FullName": "XDE II (XDE2)"
  },
  {
    "Symbol": "VEC2",
    "CoinName": "VectorCoin 2.0 ",
    "FullName": "VectorCoin 2.0  (VEC2)"
  },
  {
    "Symbol": "GSY",
    "CoinName": "GenesysCoin",
    "FullName": "GenesysCoin (GSY)"
  },
  {
    "Symbol": "TRTK",
    "CoinName": "TrollTokens",
    "FullName": "TrollTokens (TRTK)"
  },
  {
    "Symbol": "LIR",
    "CoinName": "Let it Ride",
    "FullName": "Let it Ride (LIR)"
  },
  {
    "Symbol": "MMNXT",
    "CoinName": "MMNXT ",
    "FullName": "MMNXT  (MMNXT)"
  },
  {
    "Symbol": "SCRPT",
    "CoinName": "ScryptCoin",
    "FullName": "ScryptCoin (SCRPT)"
  },
  {
    "Symbol": "LBC",
    "CoinName": "LBRY Credits",
    "FullName": "LBRY Credits (LBC)"
  },
  {
    "Symbol": "SPCIE",
    "CoinName": "Specie",
    "FullName": "Specie (SPCIE)"
  },
  {
    "Symbol": "SBD",
    "CoinName": "Steem Backed Dollars",
    "FullName": "Steem Backed Dollars (SBD)"
  },
  {
    "Symbol": "CJ",
    "CoinName": "CryptoJacks",
    "FullName": "CryptoJacks (CJ)"
  },
  {
    "Symbol": "PUT",
    "CoinName": "PutinCoin",
    "FullName": "PutinCoin (PUT)"
  },
  {
    "Symbol": "KRAK",
    "CoinName": "Kraken",
    "FullName": "Kraken (KRAK)"
  },
  {
    "Symbol": "DLISK",
    "CoinName": "Dlisk",
    "FullName": "Dlisk (DLISK)"
  },
  {
    "Symbol": "IBANK",
    "CoinName": "iBankCoin",
    "FullName": "iBankCoin (IBANK)"
  },
  {
    "Symbol": "VOYA",
    "CoinName": "Voyacoin",
    "FullName": "Voyacoin (VOYA)"
  },
  {
    "Symbol": "ENTER",
    "CoinName": "EnterCoin",
    "FullName": "EnterCoin (ENTER)"
  },
  {
    "Symbol": "WRLGC",
    "CoinName": "World Gold Coin",
    "FullName": "World Gold Coin (WRLGC)"
  },
  {
    "Symbol": "BM",
    "CoinName": "BitMoon",
    "FullName": "BitMoon (BM)"
  },
  {
    "Symbol": "FRWC",
    "CoinName": "Frankywillcoin",
    "FullName": "Frankywillcoin (FRWC)"
  },
  {
    "Symbol": "PSY",
    "CoinName": "Psilocybin",
    "FullName": "Psilocybin (PSY)"
  },
  {
    "Symbol": "XT",
    "CoinName": "ExtremeCoin",
    "FullName": "ExtremeCoin (XT)"
  },
  {
    "Symbol": "RUST",
    "CoinName": "RustCoin",
    "FullName": "RustCoin (RUST)"
  },
  {
    "Symbol": "NZC",
    "CoinName": "NewZealandCoin",
    "FullName": "NewZealandCoin (NZC)"
  },
  {
    "Symbol": "SNGLS",
    "CoinName": "SingularDTV",
    "FullName": "SingularDTV (SNGLS)"
  },
  {
    "Symbol": "XAUR",
    "CoinName": "Xaurum",
    "FullName": "Xaurum (XAUR)"
  },
  {
    "Symbol": "BFX",
    "CoinName": "BitFinex Tokens",
    "FullName": "BitFinex Tokens (BFX)"
  },
  {
    "Symbol": "UNIQ",
    "CoinName": "Uniqredit",
    "FullName": "Uniqredit (UNIQ)"
  },
  {
    "Symbol": "CRX",
    "CoinName": "ChronosCoin",
    "FullName": "ChronosCoin (CRX)"
  },
  {
    "Symbol": "DCT",
    "CoinName": "Decent",
    "FullName": "Decent (DCT)"
  },
  {
    "Symbol": "XPOKE",
    "CoinName": "PokeChain",
    "FullName": "PokeChain (XPOKE)"
  },
  {
    "Symbol": "CNMT",
    "CoinName": "Coinomat",
    "FullName": "Coinomat (CNMT)"
  },
  {
    "Symbol": "LC",
    "CoinName": "Lutetium Coin",
    "FullName": "Lutetium Coin (LC)"
  },
  {
    "Symbol": "HEAT",
    "CoinName": "Heat Ledger",
    "FullName": "Heat Ledger (HEAT)"
  },
  {
    "Symbol": "ICN",
    "CoinName": "Iconomi",
    "FullName": "Iconomi (ICN)"
  },
  {
    "Symbol": "EXB",
    "CoinName": "ExaByte (EXB)",
    "FullName": "ExaByte (EXB) (EXB)"
  },
  {
    "Symbol": "WINGS",
    "CoinName": "Wings DAO",
    "FullName": "Wings DAO (WINGS)"
  },
  {
    "Symbol": "CDEX",
    "CoinName": "Cryptodex",
    "FullName": "Cryptodex (CDEX)"
  },
  {
    "Symbol": "RBIT",
    "CoinName": "ReturnBit",
    "FullName": "ReturnBit (RBIT)"
  },
  {
    "Symbol": "DCS.",
    "CoinName": "deCLOUDs",
    "FullName": "deCLOUDs (DCS)"
  },
  {
    "Symbol": "GB",
    "CoinName": "GoldBlocks",
    "FullName": "GoldBlocks (GB)"
  },
  {
    "Symbol": "ANC",
    "CoinName": "Anoncoin",
    "FullName": "Anoncoin (ANC)"
  },
  {
    "Symbol": "SYNX",
    "CoinName": "Syndicate",
    "FullName": "Syndicate (SYNX)"
  },
  {
    "Symbol": "MC",
    "CoinName": "Mass Coin",
    "FullName": "Mass Coin (MC)"
  },
  {
    "Symbol": "EDC",
    "CoinName": "EDC Blockchain",
    "FullName": "EDC Blockchain (EDC)"
  },
  {
    "Symbol": "WAY",
    "CoinName": "WayCoin",
    "FullName": "WayCoin (WAY)"
  },
  {
    "Symbol": "TAB",
    "CoinName": "MollyCoin",
    "FullName": "MollyCoin (TAB)"
  },
  {
    "Symbol": "TRIG",
    "CoinName": "Trigger",
    "FullName": "Trigger (TRIG)"
  },
  {
    "Symbol": "BITCNY",
    "CoinName": "bitCNY",
    "FullName": "bitCNY (BITCNY)"
  },
  {
    "Symbol": "BITUSD",
    "CoinName": "bitUSD",
    "FullName": "bitUSD (BITUSD)"
  },
  {
    "Symbol": "ATMC",
    "CoinName": "Autumncoin",
    "FullName": "Autumncoin (ATMC)"
  },
  {
    "Symbol": "STO",
    "CoinName": "Save The Ocean",
    "FullName": "Save The Ocean (STO)"
  },
  {
    "Symbol": "SNS",
    "CoinName": "Sense",
    "FullName": "Sense (SNS)"
  },
  {
    "Symbol": "CTC",
    "CoinName": "CarterCoin",
    "FullName": "CarterCoin (CTC)"
  },
  {
    "Symbol": "TOT",
    "CoinName": "TotCoin",
    "FullName": "TotCoin (TOT)"
  },
  {
    "Symbol": "BTD",
    "CoinName": "Bitcloud",
    "FullName": "Bitcloud (BTD)"
  },
  {
    "Symbol": "BOTS",
    "CoinName": "ArkDAO",
    "FullName": "ArkDAO (BOTS)"
  },
  {
    "Symbol": "MDC",
    "CoinName": "MedicCoin",
    "FullName": "MedicCoin (MDC)"
  },
  {
    "Symbol": "FTP",
    "CoinName": "FuturePoints",
    "FullName": "FuturePoints (FTP)"
  },
  {
    "Symbol": "ZET2",
    "CoinName": "Zeta2Coin",
    "FullName": "Zeta2Coin (ZET2)"
  },
  {
    "Symbol": "CVNC",
    "CoinName": "CovenCoin",
    "FullName": "CovenCoin (CVNC)"
  },
  {
    "Symbol": "KRB",
    "CoinName": "Karbo",
    "FullName": "Karbo (KRB)"
  },
  {
    "Symbol": "TELL",
    "CoinName": "Tellurion",
    "FullName": "Tellurion (TELL)"
  },
  {
    "Symbol": "ENE",
    "CoinName": "EneCoin",
    "FullName": "EneCoin (ENE)"
  },
  {
    "Symbol": "TDFB",
    "CoinName": "TDFB",
    "FullName": "TDFB (TDFB)"
  },
  {
    "Symbol": "BLOCKPAY",
    "CoinName": "BlockPay",
    "FullName": "BlockPay (BLOCKPAY)"
  },
  {
    "Symbol": "BXT",
    "CoinName": "BitTokens",
    "FullName": "BitTokens (BXT)"
  },
  {
    "Symbol": "ZYD",
    "CoinName": "ZayedCoin",
    "FullName": "ZayedCoin (ZYD)"
  },
  {
    "Symbol": "MST",
    "CoinName": "MustangCoin",
    "FullName": "MustangCoin (MST)"
  },
  {
    "Symbol": "GOON",
    "CoinName": "Goonies",
    "FullName": "Goonies (GOON)"
  },
  {
    "Symbol": "VLT",
    "CoinName": "Veltor",
    "FullName": "Veltor (VLT)"
  },
  {
    "Symbol": "ZNE",
    "CoinName": "ZoneCoin",
    "FullName": "ZoneCoin (ZNE)"
  },
  {
    "Symbol": "DCK",
    "CoinName": "DickCoin",
    "FullName": "DickCoin (DCK)"
  },
  {
    "Symbol": "COVAL",
    "CoinName": "Circuits of Value",
    "FullName": "Circuits of Value (COVAL)"
  },
  {
    "Symbol": "DGDC",
    "CoinName": "DarkGold",
    "FullName": "DarkGold (DGDC)"
  },
  {
    "Symbol": "TODAY",
    "CoinName": "TodayCoin",
    "FullName": "TodayCoin (TODAY)"
  },
  {
    "Symbol": "VRM",
    "CoinName": "Verium",
    "FullName": "Verium (VRM)"
  },
  {
    "Symbol": "ROOT",
    "CoinName": "RootCoin",
    "FullName": "RootCoin (ROOT)"
  },
  {
    "Symbol": "1ST",
    "CoinName": "FirstBlood",
    "FullName": "FirstBlood (1ST)"
  },
  {
    "Symbol": "GPL",
    "CoinName": "Gold Pressed Latinum",
    "FullName": "Gold Pressed Latinum (GPL)"
  },
  {
    "Symbol": "DOPE",
    "CoinName": "DopeCoin",
    "FullName": "DopeCoin (DOPE)"
  },
  {
    "Symbol": "B3",
    "CoinName": "B3 Coin",
    "FullName": "B3 Coin (B3)"
  },
  {
    "Symbol": "FX",
    "CoinName": "FCoin",
    "FullName": "FCoin (FX)"
  },
  {
    "Symbol": "PIO",
    "CoinName": "Pioneershares",
    "FullName": "Pioneershares (PIO)"
  },
  {
    "Symbol": "PROUD",
    "CoinName": "PROUD Money",
    "FullName": "PROUD Money (PROUD)"
  },
  {
    "Symbol": "SMSR",
    "CoinName": "Samsara Coin",
    "FullName": "Samsara Coin (SMSR)"
  },
  {
    "Symbol": "UBIQ",
    "CoinName": "Ubiqoin",
    "FullName": "Ubiqoin (UBIQ)"
  },
  {
    "Symbol": "ARM",
    "CoinName": "Armory Coin",
    "FullName": "Armory Coin (ARM)"
  },
  {
    "Symbol": "RING",
    "CoinName": "RingCoin",
    "FullName": "RingCoin (RING)"
  },
  {
    "Symbol": "ERB",
    "CoinName": "ERBCoin",
    "FullName": "ERBCoin (ERB)"
  },
  {
    "Symbol": "LAZ",
    "CoinName": "Lazarus",
    "FullName": "Lazarus (LAZ)"
  },
  {
    "Symbol": "FONZ",
    "CoinName": "FonzieCoin",
    "FullName": "FonzieCoin (FONZ)"
  },
  {
    "Symbol": "BTCR",
    "CoinName": "BitCurrency",
    "FullName": "BitCurrency (BTCR)"
  },
  {
    "Symbol": "FCTC",
    "CoinName": "FaucetCoin",
    "FullName": "FaucetCoin (FCTC)"
  },
  {
    "Symbol": "SANDG",
    "CoinName": "Save and Gain",
    "FullName": "Save and Gain (SANDG)"
  },
  {
    "Symbol": "PUNK",
    "CoinName": "SteamPunk",
    "FullName": "SteamPunk (PUNK)"
  },
  {
    "Symbol": "MOOND",
    "CoinName": "Dark Moon",
    "FullName": "Dark Moon (MOOND)"
  },
  {
    "Symbol": "DLC",
    "CoinName": "DollarCoin",
    "FullName": "DollarCoin (DLC)"
  },
  {
    "Symbol": "SEN",
    "CoinName": "Sentaro",
    "FullName": "Sentaro (SEN)"
  },
  {
    "Symbol": "SCN",
    "CoinName": "Swiscoin",
    "FullName": "Swiscoin (SCN)"
  },
  {
    "Symbol": "WEX",
    "CoinName": "Wexcoin",
    "FullName": "Wexcoin (WEX)"
  },
  {
    "Symbol": "LTH",
    "CoinName": "Lathaan",
    "FullName": "Lathaan (LTH)"
  },
  {
    "Symbol": "BRONZ",
    "CoinName": "BitBronze",
    "FullName": "BitBronze (BRONZ)"
  },
  {
    "Symbol": "SH",
    "CoinName": "Shilling",
    "FullName": "Shilling (SH)"
  },
  {
    "Symbol": "BUZZ",
    "CoinName": "BuzzCoin",
    "FullName": "BuzzCoin (BUZZ)"
  },
  {
    "Symbol": "MG",
    "CoinName": "Mind Gene",
    "FullName": "Mind Gene (MG)"
  },
  {
    "Symbol": "PSI",
    "CoinName": "PSIcoin",
    "FullName": "PSIcoin (PSI)"
  },
  {
    "Symbol": "XPO",
    "CoinName": "Opair",
    "FullName": "Opair (XPO)"
  },
  {
    "Symbol": "NLC",
    "CoinName": "NoLimitCoin",
    "FullName": "NoLimitCoin (NLC)"
  },
  {
    "Symbol": "PSB",
    "CoinName": "PesoBit",
    "FullName": "PesoBit (PSB)"
  },
  {
    "Symbol": "XBTS",
    "CoinName": "Beats",
    "FullName": "Beats (XBTS)"
  },
  {
    "Symbol": "FIT",
    "CoinName": "Fitcoin",
    "FullName": "Fitcoin (FIT)"
  },
  {
    "Symbol": "PINKX",
    "CoinName": "PantherCoin",
    "FullName": "PantherCoin (PINKX)"
  },
  {
    "Symbol": "FIRE",
    "CoinName": "FireCoin",
    "FullName": "FireCoin (FIRE)"
  },
  {
    "Symbol": "UNF",
    "CoinName": "Unfed Coin",
    "FullName": "Unfed Coin (UNF)"
  },
  {
    "Symbol": "SPORT",
    "CoinName": "SportsCoin",
    "FullName": "SportsCoin (SPORT)"
  },
  {
    "Symbol": "PPY",
    "CoinName": "Peerplays",
    "FullName": "Peerplays (PPY)"
  },
  {
    "Symbol": "NTC",
    "CoinName": "NineElevenTruthCoin",
    "FullName": "NineElevenTruthCoin (NTC)"
  },
  {
    "Symbol": "EGO",
    "CoinName": "EGOcoin",
    "FullName": "EGOcoin (EGO)"
  },
  {
    "Symbol": "RCOIN",
    "CoinName": "RCoin",
    "FullName": "RCoin (RCOIN)"
  },
  {
    "Symbol": "X2",
    "CoinName": "X2Coin",
    "FullName": "X2Coin (X2)"
  },
  {
    "Symbol": "MT",
    "CoinName": "Mycelium Token",
    "FullName": "Mycelium Token (MT)"
  },
  {
    "Symbol": "TIA",
    "CoinName": "Tianhe",
    "FullName": "Tianhe (TIA)"
  },
  {
    "Symbol": "GBRC",
    "CoinName": "GBR Coin",
    "FullName": "GBR Coin (GBRC)"
  },
  {
    "Symbol": "XUP",
    "CoinName": "UPcoin",
    "FullName": "UPcoin (XUP)"
  },
  {
    "Symbol": "HALLO",
    "CoinName": "Halloween Coin",
    "FullName": "Halloween Coin (HALLO)"
  },
  {
    "Symbol": "BBCC",
    "CoinName": "BaseballCardCoin",
    "FullName": "BaseballCardCoin (BBCC)"
  },
  {
    "Symbol": "EMIGR",
    "CoinName": "EmiratesGoldCoin",
    "FullName": "EmiratesGoldCoin (EMIGR)"
  },
  {
    "Symbol": "BHC",
    "CoinName": "BighanCoin",
    "FullName": "BighanCoin (BHC)"
  },
  {
    "Symbol": "CRAFT",
    "CoinName": "Craftcoin",
    "FullName": "Craftcoin (CRAFT)"
  },
  {
    "Symbol": "INV",
    "CoinName": "Invictus",
    "FullName": "Invictus (INV)"
  },
  {
    "Symbol": "OLYMP",
    "CoinName": "OlympCoin",
    "FullName": "OlympCoin (OLYMP)"
  },
  {
    "Symbol": "DPAY",
    "CoinName": "DelightPay",
    "FullName": "DelightPay (DPAY)"
  },
  {
    "Symbol": "HKG",
    "CoinName": "Hacker Gold",
    "FullName": "Hacker Gold (HKG)"
  },
  {
    "Symbol": "ANTC",
    "CoinName": "AntiLitecoin",
    "FullName": "AntiLitecoin (ANTC)"
  },
  {
    "Symbol": "JOBS",
    "CoinName": "JobsCoin",
    "FullName": "JobsCoin (JOBS)"
  },
  {
    "Symbol": "DGORE",
    "CoinName": "DogeGoreCoin",
    "FullName": "DogeGoreCoin (DGORE)"
  },
  {
    "Symbol": "THC",
    "CoinName": "The Hempcoin",
    "FullName": "The Hempcoin (THC)"
  },
  {
    "Symbol": "TRA",
    "CoinName": "Tetra",
    "FullName": "Tetra (TRA)"
  },
  {
    "Symbol": "RMS",
    "CoinName": "Resumeo Shares",
    "FullName": "Resumeo Shares (RMS)"
  },
  {
    "Symbol": "FJC",
    "CoinName": "FujiCoin",
    "FullName": "FujiCoin (FJC)"
  },
  {
    "Symbol": "VAPOR",
    "CoinName": "Vaporcoin",
    "FullName": "Vaporcoin (VAPOR)"
  },
  {
    "Symbol": "SDP",
    "CoinName": "SydPakCoin",
    "FullName": "SydPakCoin (SDP)"
  },
  {
    "Symbol": "RRT",
    "CoinName": "Recovery Right Tokens",
    "FullName": "Recovery Right Tokens (RRT)"
  },
  {
    "Symbol": "PRE",
    "CoinName": "Premium",
    "FullName": "Premium (PRE)"
  },
  {
    "Symbol": "CALC",
    "CoinName": "CaliphCoin",
    "FullName": "CaliphCoin (CALC)"
  },
  {
    "Symbol": "LEA",
    "CoinName": "LeaCoin",
    "FullName": "LeaCoin (LEA)"
  },
  {
    "Symbol": "CF",
    "CoinName": "Californium",
    "FullName": "Californium (CF)"
  },
  {
    "Symbol": "CRNK",
    "CoinName": "CrankCoin",
    "FullName": "CrankCoin (CRNK)"
  },
  {
    "Symbol": "CFC",
    "CoinName": "CoffeeCoin",
    "FullName": "CoffeeCoin (CFC)"
  },
  {
    "Symbol": "VTY",
    "CoinName": "Victoriouscoin",
    "FullName": "Victoriouscoin (VTY)"
  },
  {
    "Symbol": "BS",
    "CoinName": "BlackShadowCoin",
    "FullName": "BlackShadowCoin (BS)"
  },
  {
    "Symbol": "JIF",
    "CoinName": "JiffyCoin",
    "FullName": "JiffyCoin (JIF)"
  },
  {
    "Symbol": "CRAB",
    "CoinName": "CrabCoin",
    "FullName": "CrabCoin (CRAB)"
  },
  {
    "Symbol": "HILL",
    "CoinName": "President Clinton",
    "FullName": "President Clinton (HILL)"
  },
  {
    "Symbol": "MONETA",
    "CoinName": "Moneta",
    "FullName": "Moneta (MONETA)"
  },
  {
    "Symbol": "EC",
    "CoinName": "Eclipse",
    "FullName": "Eclipse (EC)"
  },
  {
    "Symbol": "RUBIT",
    "CoinName": "Rublebit",
    "FullName": "Rublebit (RUBIT)"
  },
  {
    "Symbol": "HCC",
    "CoinName": "HappyCreatorCoin ",
    "FullName": "HappyCreatorCoin  (HCC)"
  },
  {
    "Symbol": "BRAIN",
    "CoinName": "BrainCoin",
    "FullName": "BrainCoin (BRAIN)"
  },
  {
    "Symbol": "VTX",
    "CoinName": "Vertex",
    "FullName": "Vertex (VTX)"
  },
  {
    "Symbol": "KRC",
    "CoinName": "KRCoin",
    "FullName": "KRCoin (KRC)"
  },
  {
    "Symbol": "ROYAL",
    "CoinName": "RoyalCoin",
    "FullName": "RoyalCoin (ROYAL)"
  },
  {
    "Symbol": "LFC",
    "CoinName": "BigLifeCoin",
    "FullName": "BigLifeCoin (LFC)"
  },
  {
    "Symbol": "ZUR",
    "CoinName": "Zurcoin",
    "FullName": "Zurcoin (ZUR)"
  },
  {
    "Symbol": "NUBIS",
    "CoinName": "NubisCoin",
    "FullName": "NubisCoin (NUBIS)"
  },
  {
    "Symbol": "TENNET",
    "CoinName": "Tennet",
    "FullName": "Tennet (TENNET)"
  },
  {
    "Symbol": "PEC",
    "CoinName": "PeaceCoin",
    "FullName": "PeaceCoin (PEC)"
  },
  {
    "Symbol": "GMX",
    "CoinName": "Goldmaxcoin",
    "FullName": "Goldmaxcoin (GMX)"
  },
  {
    "Symbol": "32BIT",
    "CoinName": "32Bitcoin",
    "FullName": "32Bitcoin (32BIT)"
  },
  {
    "Symbol": "GNJ",
    "CoinName": "GanjaCoin V2",
    "FullName": "GanjaCoin V2 (GNJ)"
  },
  {
    "Symbol": "TEAM",
    "CoinName": "TeamUP",
    "FullName": "TeamUP (TEAM)"
  },
  {
    "Symbol": "SCT",
    "CoinName": "ScryptToken",
    "FullName": "ScryptToken (SCT)"
  },
  {
    "Symbol": "LANA",
    "CoinName": "LanaCoin",
    "FullName": "LanaCoin (LANA)"
  },
  {
    "Symbol": "ELE",
    "CoinName": "Elementrem",
    "FullName": "Elementrem (ELE)"
  },
  {
    "Symbol": "GCC",
    "CoinName": "GuccioneCoin",
    "FullName": "GuccioneCoin (GCC)"
  },
  {
    "Symbol": "AND",
    "CoinName": "AndromedaCoin",
    "FullName": "AndromedaCoin (AND)"
  },
  {
    "Symbol": "EQUAL",
    "CoinName": "EqualCoin",
    "FullName": "EqualCoin (EQUAL)"
  },
  {
    "Symbol": "SWEET",
    "CoinName": "SweetStake",
    "FullName": "SweetStake (SWEET)"
  },
  {
    "Symbol": "2BACCO",
    "CoinName": "2BACCO Coin",
    "FullName": "2BACCO Coin (2BACCO)"
  },
  {
    "Symbol": "DKC",
    "CoinName": "DarkKnightCoin",
    "FullName": "DarkKnightCoin (DKC)"
  },
  {
    "Symbol": "COC",
    "CoinName": "Community Coin",
    "FullName": "Community Coin (COC)"
  },
  {
    "Symbol": "CHOOF",
    "CoinName": "ChoofCoin",
    "FullName": "ChoofCoin (CHOOF)"
  },
  {
    "Symbol": "CSH",
    "CoinName": "CashOut",
    "FullName": "CashOut (CSH)"
  },
  {
    "Symbol": "ZCL",
    "CoinName": "ZClassic",
    "FullName": "ZClassic (ZCL)"
  },
  {
    "Symbol": "RYCN",
    "CoinName": "RoyalCoin 2.0",
    "FullName": "RoyalCoin 2.0 (RYCN)"
  },
  {
    "Symbol": "PCS",
    "CoinName": "Pabyosi Coin",
    "FullName": "Pabyosi Coin (PCS)"
  },
  {
    "Symbol": "NBIT",
    "CoinName": "NetBit",
    "FullName": "NetBit (NBIT)"
  },
  {
    "Symbol": "WINE",
    "CoinName": "WineCoin",
    "FullName": "WineCoin (WINE)"
  },
  {
    "Symbol": "DAR",
    "CoinName": "Darcrus",
    "FullName": "Darcrus (DAR)"
  },
  {
    "Symbol": "IFLT",
    "CoinName": "InflationCoin",
    "FullName": "InflationCoin (IFLT)"
  },
  {
    "Symbol": "ZECD",
    "CoinName": "ZCashDarkCoin",
    "FullName": "ZCashDarkCoin (ZECD)"
  },
  {
    "Symbol": "ZXT",
    "CoinName": "Zcrypt",
    "FullName": "Zcrypt (ZXT)"
  },
  {
    "Symbol": "WASH",
    "CoinName": "WashingtonCoin",
    "FullName": "WashingtonCoin (WASH)"
  },
  {
    "Symbol": "TESLA",
    "CoinName": "TeslaCoilCoin",
    "FullName": "TeslaCoilCoin (TESLA)"
  },
  {
    "Symbol": "LUCKY",
    "CoinName": "LuckyBlocks",
    "FullName": "LuckyBlocks (LUCKY)"
  },
  {
    "Symbol": "VSL",
    "CoinName": "vSlice",
    "FullName": "vSlice (VSL)"
  },
  {
    "Symbol": "TPG",
    "CoinName": "Troll Payment",
    "FullName": "Troll Payment (TPG)"
  },
  {
    "Symbol": "LEOC",
    "CoinName": "LEOcoin",
    "FullName": "LEOcoin (LEOC)"
  },
  {
    "Symbol": "MDT",
    "CoinName": "Midnight",
    "FullName": "Midnight (MDT)"
  },
  {
    "Symbol": "CBD",
    "CoinName": "CBD Crystals",
    "FullName": "CBD Crystals (CBD)"
  },
  {
    "Symbol": "PEX",
    "CoinName": "PosEx",
    "FullName": "PosEx (PEX)"
  },
  {
    "Symbol": "INSANE",
    "CoinName": "InsaneCoin",
    "FullName": "InsaneCoin (INSANE)"
  },
  {
    "Symbol": "GNT",
    "CoinName": "Golem Network Token",
    "FullName": "Golem Network Token (GNT)"
  },
  {
    "Symbol": "PENC",
    "CoinName": "PenCoin",
    "FullName": "PenCoin (PENC)"
  },
  {
    "Symbol": "BASH",
    "CoinName": "LuckChain",
    "FullName": "LuckChain (BASH)"
  },
  {
    "Symbol": "FAME",
    "CoinName": "FameCoin",
    "FullName": "FameCoin (FAME)"
  },
  {
    "Symbol": "LIV",
    "CoinName": "LiviaCoin",
    "FullName": "LiviaCoin (LIV)"
  },
  {
    "Symbol": "SP",
    "CoinName": "Sex Pistols",
    "FullName": "Sex Pistols (SP)"
  },
  {
    "Symbol": "MEGA",
    "CoinName": "MegaFlash",
    "FullName": "MegaFlash (MEGA)"
  },
  {
    "Symbol": "VRS",
    "CoinName": "Veros",
    "FullName": "Veros (VRS)"
  },
  {
    "Symbol": "ALC",
    "CoinName": "Arab League Coin",
    "FullName": "Arab League Coin (ALC)"
  },
  {
    "Symbol": "DOGETH",
    "CoinName": "EtherDoge",
    "FullName": "EtherDoge (DOGETH)"
  },
  {
    "Symbol": "KLC",
    "CoinName": "KiloCoin",
    "FullName": "KiloCoin (KLC)"
  },
  {
    "Symbol": "HUSH",
    "CoinName": "Hush",
    "FullName": "Hush (HUSH)"
  },
  {
    "Symbol": "BTLC",
    "CoinName": "BitLuckCoin",
    "FullName": "BitLuckCoin (BTLC)"
  },
  {
    "Symbol": "DRM8",
    "CoinName": "Dream8Coin",
    "FullName": "Dream8Coin (DRM8)"
  },
  {
    "Symbol": "FIST",
    "CoinName": "FistBump",
    "FullName": "FistBump (FIST)"
  },
  {
    "Symbol": "EBZ",
    "CoinName": "Ebitz",
    "FullName": "Ebitz (EBZ)"
  },
  {
    "Symbol": "DRS",
    "CoinName": "Digital Rupees",
    "FullName": "Digital Rupees (DRS)"
  },
  {
    "Symbol": "FGZ",
    "CoinName": "Free Game Zone",
    "FullName": "Free Game Zone (FGZ)"
  },
  {
    "Symbol": "BOSON",
    "CoinName": "BosonCoin",
    "FullName": "BosonCoin (BOSON)"
  },
  {
    "Symbol": "ATX",
    "CoinName": "ArtexCoin",
    "FullName": "ArtexCoin (ATX)"
  },
  {
    "Symbol": "PNC",
    "CoinName": "PlatiniumCoin",
    "FullName": "PlatiniumCoin (PNC)"
  },
  {
    "Symbol": "BRDD",
    "CoinName": "BeardDollars",
    "FullName": "BeardDollars (BRDD)"
  },
  {
    "Symbol": "TIME",
    "CoinName": "Time",
    "FullName": "Time (TIME)"
  },
  {
    "Symbol": "BIPC",
    "CoinName": "BipCoin",
    "FullName": "BipCoin (BIPC)"
  },
  {
    "Symbol": "XNC",
    "CoinName": "XenCoin",
    "FullName": "XenCoin (XNC)"
  },
  {
    "Symbol": "EMB",
    "CoinName": "EmberCoin",
    "FullName": "EmberCoin (EMB)"
  },
  {
    "Symbol": "BTTF",
    "CoinName": "Coin to the Future",
    "FullName": "Coin to the Future (BTTF)"
  },
  {
    "Symbol": "DLR",
    "CoinName": "DollarOnline",
    "FullName": "DollarOnline (DLR)"
  },
  {
    "Symbol": "CSMIC",
    "CoinName": "Cosmic",
    "FullName": "Cosmic (CSMIC)"
  },
  {
    "Symbol": "SCASH",
    "CoinName": "SpaceCash",
    "FullName": "SpaceCash (SCASH)"
  },
  {
    "Symbol": "XEN",
    "CoinName": "XenixCoin",
    "FullName": "XenixCoin (XEN)"
  },
  {
    "Symbol": "JIO",
    "CoinName": "JIO Token",
    "FullName": "JIO Token (JIO)"
  },
  {
    "Symbol": "IW",
    "CoinName": "iWallet",
    "FullName": "iWallet (IW)"
  },
  {
    "Symbol": "JNS",
    "CoinName": "Janus",
    "FullName": "Janus (JNS)"
  },
  {
    "Symbol": "TRICK",
    "CoinName": "TrickyCoin",
    "FullName": "TrickyCoin (TRICK)"
  },
  {
    "Symbol": "DCRE",
    "CoinName": "DeltaCredits",
    "FullName": "DeltaCredits (DCRE)"
  },
  {
    "Symbol": "FRE",
    "CoinName": "FreeCoin",
    "FullName": "FreeCoin (FRE)"
  },
  {
    "Symbol": "NPC",
    "CoinName": "NPCcoin",
    "FullName": "NPCcoin (NPC)"
  },
  {
    "Symbol": "PLNC",
    "CoinName": "PLNCoin",
    "FullName": "PLNCoin (PLNC)"
  },
  {
    "Symbol": "DGMS",
    "CoinName": "Digigems",
    "FullName": "Digigems (DGMS)"
  },
  {
    "Symbol": "ICOB",
    "CoinName": "Icobid",
    "FullName": "Icobid (ICOB)"
  },
  {
    "Symbol": "ARCO",
    "CoinName": "AquariusCoin",
    "FullName": "AquariusCoin (ARCO)"
  },
  {
    "Symbol": "KURT",
    "CoinName": "Kurrent",
    "FullName": "Kurrent (KURT)"
  },
  {
    "Symbol": "XCRE",
    "CoinName": "Creatio",
    "FullName": "Creatio (XCRE)"
  },
  {
    "Symbol": "ENT",
    "CoinName": "Eternity",
    "FullName": "Eternity (ENT)"
  },
  {
    "Symbol": "UR",
    "CoinName": "UR",
    "FullName": "UR (UR)"
  },
  {
    "Symbol": "MTLM3",
    "CoinName": "Metal Music v3",
    "FullName": "Metal Music v3 (MTLM3)"
  },
  {
    "Symbol": "ODNT",
    "CoinName": "Old Dogs New Tricks",
    "FullName": "Old Dogs New Tricks (ODNT)"
  },
  {
    "Symbol": "EUC",
    "CoinName": "Eurocoin",
    "FullName": "Eurocoin (EUC)"
  },
  {
    "Symbol": "CCX",
    "CoinName": "CoolDarkCoin",
    "FullName": "CoolDarkCoin (CCX)"
  },
  {
    "Symbol": "BCF",
    "CoinName": "BitcoinFast",
    "FullName": "BitcoinFast (BCF)"
  },
  {
    "Symbol": "SEEDS",
    "CoinName": "SeedShares",
    "FullName": "SeedShares (SEEDS)"
  },
  {
    "Symbol": "XSN",
    "CoinName": "Stakenet",
    "FullName": "Stakenet (XSN)"
  },
  {
    "Symbol": "TKS",
    "CoinName": "Tokes",
    "FullName": "Tokes (TKS)"
  },
  {
    "Symbol": "BCCOIN",
    "CoinName": "BitConnect Coin",
    "FullName": "BitConnect Coin (BCCOIN)"
  },
  {
    "Symbol": "SHORTY",
    "CoinName": "ShortyCoin",
    "FullName": "ShortyCoin (SHORTY)"
  },
  {
    "Symbol": "PCM",
    "CoinName": "Procom",
    "FullName": "Procom (PCM)"
  },
  {
    "Symbol": "KC",
    "CoinName": "Kernalcoin",
    "FullName": "Kernalcoin (KC)"
  },
  {
    "Symbol": "CORAL",
    "CoinName": "CoralPay",
    "FullName": "CoralPay (CORAL)"
  },
  {
    "Symbol": "BamitCoin",
    "CoinName": "BAM",
    "FullName": "BAM (BAM)"
  },
  {
    "Symbol": "NXC",
    "CoinName": "Nexium",
    "FullName": "Nexium (NXC)"
  },
  {
    "Symbol": "MONEY",
    "CoinName": "MoneyCoin",
    "FullName": "MoneyCoin (MONEY)"
  },
  {
    "Symbol": "BSTAR",
    "CoinName": "Blackstar",
    "FullName": "Blackstar (BSTAR)"
  },
  {
    "Symbol": "HSP",
    "CoinName": "Horse Power",
    "FullName": "Horse Power (HSP)"
  },
  {
    "Symbol": "HZT",
    "CoinName": "HazMatCoin",
    "FullName": "HazMatCoin (HZT)"
  },
  {
    "Symbol": "CRSP",
    "CoinName": "CryptoSpots",
    "FullName": "CryptoSpots (CRSP)"
  },
  {
    "Symbol": "XSP",
    "CoinName": "PoolStamp",
    "FullName": "PoolStamp (XSP)"
  },
  {
    "Symbol": "CCRB",
    "CoinName": "CryptoCarbon",
    "FullName": "CryptoCarbon (CCRB)"
  },
  {
    "Symbol": "BULLS",
    "CoinName": "BullshitCoin",
    "FullName": "BullshitCoin (BULLS)"
  },
  {
    "Symbol": "INCNT",
    "CoinName": "Incent",
    "FullName": "Incent (INCNT)"
  },
  {
    "Symbol": "ICON",
    "CoinName": "Iconic",
    "FullName": "Iconic (ICON)"
  },
  {
    "Symbol": "NIC",
    "CoinName": "NewInvestCoin",
    "FullName": "NewInvestCoin (NIC)"
  },
  {
    "Symbol": "ACN",
    "CoinName": "AvonCoin",
    "FullName": "AvonCoin (ACN)"
  },
  {
    "Symbol": "XNG",
    "CoinName": "Enigma",
    "FullName": "Enigma (XNG)"
  },
  {
    "Symbol": "XCI",
    "CoinName": "Cannabis Industry Coin",
    "FullName": "Cannabis Industry Coin (XCI)"
  },
  {
    "Symbol": "LOOK",
    "CoinName": "LookCoin",
    "FullName": "LookCoin (LOOK)"
  },
  {
    "Symbol": "LOC",
    "CoinName": "Loco",
    "FullName": "Loco (LOC)"
  },
  {
    "Symbol": "MMXVI",
    "CoinName": "MMXVI",
    "FullName": "MMXVI (MMXVI)"
  },
  {
    "Symbol": "TRST",
    "CoinName": "TrustCoin",
    "FullName": "TrustCoin (TRST)"
  },
  {
    "Symbol": "MIS",
    "CoinName": "MIScoin",
    "FullName": "MIScoin (MIS)"
  },
  {
    "Symbol": "WOP",
    "CoinName": "WorldPay",
    "FullName": "WorldPay (WOP)"
  },
  {
    "Symbol": "CQST",
    "CoinName": "ConquestCoin",
    "FullName": "ConquestCoin (CQST)"
  },
  {
    "Symbol": "IMPS",
    "CoinName": "Impulse Coin",
    "FullName": "Impulse Coin (IMPS)"
  },
  {
    "Symbol": "IN",
    "CoinName": "InCoin",
    "FullName": "InCoin (IN)"
  },
  {
    "Symbol": "CHIEF",
    "CoinName": "TheChiefCoin",
    "FullName": "TheChiefCoin (CHIEF)"
  },
  {
    "Symbol": "GOAT",
    "CoinName": "Goat",
    "FullName": "Goat (GOAT)"
  },
  {
    "Symbol": "ANAL",
    "CoinName": "AnalCoin",
    "FullName": "AnalCoin (ANAL)"
  },
  {
    "Symbol": "RC",
    "CoinName": "Russiacoin",
    "FullName": "Russiacoin (RC)"
  },
  {
    "Symbol": "PND",
    "CoinName": "PandaCoin",
    "FullName": "PandaCoin (PND)"
  },
  {
    "Symbol": "PX",
    "CoinName": "PXcoin",
    "FullName": "PXcoin (PX)"
  },
  {
    "Symbol": "ECAD",
    "CoinName": "Canada eCoin",
    "FullName": "Canada eCoin (ECAD)"
  },
  {
    "Symbol": "OPTION",
    "CoinName": "OptionCoin",
    "FullName": "OptionCoin (OPTION)"
  },
  {
    "Symbol": "AV",
    "CoinName": "Avatar Coin",
    "FullName": "Avatar Coin (AV)"
  },
  {
    "Symbol": "LTD",
    "CoinName": "Limited Coin",
    "FullName": "Limited Coin (LTD)"
  },
  {
    "Symbol": "UNITS",
    "CoinName": "GameUnits",
    "FullName": "GameUnits (UNITS)"
  },
  {
    "Symbol": "HEEL",
    "CoinName": "HeelCoin",
    "FullName": "HeelCoin (HEEL)"
  },
  {
    "Symbol": "GAKH",
    "CoinName": "GAKHcoin",
    "FullName": "GAKHcoin (GAKH)"
  },
  {
    "Symbol": "GAIN",
    "CoinName": "Gainfy",
    "FullName": "Gainfy (GAIN)"
  },
  {
    "Symbol": "S8C",
    "CoinName": "S88 Coin",
    "FullName": "S88 Coin (S8C)"
  },
  {
    "Symbol": "LVG",
    "CoinName": "Leverage Coin",
    "FullName": "Leverage Coin (LVG)"
  },
  {
    "Symbol": "DRA",
    "CoinName": "DraculaCoin",
    "FullName": "DraculaCoin (DRA)"
  },
  {
    "Symbol": "ASAFE2",
    "CoinName": "Allsafe",
    "FullName": "Allsafe (ASAFE2)"
  },
  {
    "Symbol": "LTCR",
    "CoinName": "LiteCreed",
    "FullName": "LiteCreed (LTCR)"
  },
  {
    "Symbol": "QBC",
    "CoinName": "Quebecoin",
    "FullName": "Quebecoin (QBC)"
  },
  {
    "Symbol": "XPRO",
    "CoinName": "ProCoin",
    "FullName": "ProCoin (XPRO)"
  },
  {
    "Symbol": "ASTR",
    "CoinName": "Astral",
    "FullName": "Astral (ASTR)"
  },
  {
    "Symbol": "GIFT",
    "CoinName": "GiftNet",
    "FullName": "GiftNet (GIFT)"
  },
  {
    "Symbol": "VIDZ",
    "CoinName": "PureVidz",
    "FullName": "PureVidz (VIDZ)"
  },
  {
    "Symbol": "INC",
    "CoinName": "Incrementum",
    "FullName": "Incrementum (INC)"
  },
  {
    "Symbol": "PTA",
    "CoinName": "PentaCoin",
    "FullName": "PentaCoin (PTA)"
  },
  {
    "Symbol": "ACID",
    "CoinName": "AcidCoin",
    "FullName": "AcidCoin (ACID)"
  },
  {
    "Symbol": "ZLQ",
    "CoinName": "ZLiteQubit",
    "FullName": "ZLiteQubit (ZLQ)"
  },
  {
    "Symbol": "RADI",
    "CoinName": "RadicalCoin",
    "FullName": "RadicalCoin (RADI)"
  },
  {
    "Symbol": "RNC",
    "CoinName": "ReturnCoin",
    "FullName": "ReturnCoin (RNC)"
  },
  {
    "Symbol": "GOLOS",
    "CoinName": "Golos",
    "FullName": "Golos (GOLOS)"
  },
  {
    "Symbol": "PASC",
    "CoinName": "Pascal Coin",
    "FullName": "Pascal Coin (PASC)"
  },
  {
    "Symbol": "TWIST",
    "CoinName": "TwisterCoin",
    "FullName": "TwisterCoin (TWIST)"
  },
  {
    "Symbol": "PAYP",
    "CoinName": "PayPeer",
    "FullName": "PayPeer (PAYP)"
  },
  {
    "Symbol": "DETH",
    "CoinName": "DarkEther",
    "FullName": "DarkEther (DETH)"
  },
  {
    "Symbol": "YAY",
    "CoinName": "YAYcoin",
    "FullName": "YAYcoin (YAY)"
  },
  {
    "Symbol": "YES",
    "CoinName": "YesCoin",
    "FullName": "YesCoin (YES)"
  },
  {
    "Symbol": "LENIN",
    "CoinName": "LeninCoin",
    "FullName": "LeninCoin (LENIN)"
  },
  {
    "Symbol": "MRSA",
    "CoinName": "MrsaCoin",
    "FullName": "MrsaCoin (MRSA)"
  },
  {
    "Symbol": "OS76",
    "CoinName": "OsmiumCoin",
    "FullName": "OsmiumCoin (OS76)"
  },
  {
    "Symbol": "BOSS",
    "CoinName": "BitBoss",
    "FullName": "BitBoss (BOSS)"
  },
  {
    "Symbol": "MKR",
    "CoinName": "Maker",
    "FullName": "Maker (MKR)"
  },
  {
    "Symbol": "BIC",
    "CoinName": "Bikercoins",
    "FullName": "Bikercoins (BIC)"
  },
  {
    "Symbol": "CRPS",
    "CoinName": "CryptoPennies",
    "FullName": "CryptoPennies (CRPS)"
  },
  {
    "Symbol": "MOTO",
    "CoinName": "Motocoin",
    "FullName": "Motocoin (MOTO)"
  },
  {
    "Symbol": "NTCC",
    "CoinName": "NeptuneClassic",
    "FullName": "NeptuneClassic (NTCC)"
  },
  {
    "Symbol": "HXX",
    "CoinName": "HexxCoin",
    "FullName": "HexxCoin (HXX)"
  },
  {
    "Symbol": "SPKTR",
    "CoinName": "Ghost Coin",
    "FullName": "Ghost Coin (SPKTR)"
  },
  {
    "Symbol": "MAC",
    "CoinName": "MachineCoin",
    "FullName": "MachineCoin (MAC)"
  },
  {
    "Symbol": "SEL",
    "CoinName": "SelenCoin",
    "FullName": "SelenCoin (SEL)"
  },
  {
    "Symbol": "NOO",
    "CoinName": "Noocoin",
    "FullName": "Noocoin (NOO)"
  },
  {
    "Symbol": "CHAO",
    "CoinName": "23 Skidoo",
    "FullName": "23 Skidoo (CHAO)"
  },
  {
    "Symbol": "XGB",
    "CoinName": "GoldenBird",
    "FullName": "GoldenBird (XGB)"
  },
  {
    "Symbol": "YMC",
    "CoinName": "YamahaCoin",
    "FullName": "YamahaCoin (YMC)"
  },
  {
    "Symbol": "JOK",
    "CoinName": "JokerCoin",
    "FullName": "JokerCoin (JOK)"
  },
  {
    "Symbol": "GBIT",
    "CoinName": "GravityBit",
    "FullName": "GravityBit (GBIT)"
  },
  {
    "Symbol": "TEC",
    "CoinName": "TeCoin",
    "FullName": "TeCoin (TEC)"
  },
  {
    "Symbol": "BOMBC",
    "CoinName": "BombCoin",
    "FullName": "BombCoin (BOMBC)"
  },
  {
    "Symbol": "RIDE",
    "CoinName": "Ride My Car",
    "FullName": "Ride My Car (RIDE)"
  },
  {
    "Symbol": "KED",
    "CoinName": "Klingon Empire Darsek",
    "FullName": "Klingon Empire Darsek (KED)"
  },
  {
    "Symbol": "CNO",
    "CoinName": "Coino",
    "FullName": "Coino (CNO)"
  },
  {
    "Symbol": "WEALTH",
    "CoinName": "WealthCoin",
    "FullName": "WealthCoin (WEALTH)"
  },
  {
    "Symbol": "IOP",
    "CoinName": "Internet of People",
    "FullName": "Internet of People (IOP)"
  },
  {
    "Symbol": "XSPEC",
    "CoinName": "Spectre",
    "FullName": "Spectre (XSPEC)"
  },
  {
    "Symbol": "PEPECASH",
    "CoinName": "Pepe Cash",
    "FullName": "Pepe Cash (PEPECASH)"
  },
  {
    "Symbol": "CLICK",
    "CoinName": "Clickcoin",
    "FullName": "Clickcoin (CLICK)"
  },
  {
    "Symbol": "ELS",
    "CoinName": "Elysium",
    "FullName": "Elysium (ELS)"
  },
  {
    "Symbol": "KUSH",
    "CoinName": "KushCoin",
    "FullName": "KushCoin (KUSH)"
  },
  {
    "Symbol": "ERY",
    "CoinName": "Eryllium",
    "FullName": "Eryllium (ERY)"
  },
  {
    "Symbol": "PLU",
    "CoinName": "Pluton",
    "FullName": "Pluton (PLU)"
  },
  {
    "Symbol": "PRES",
    "CoinName": "President Trump",
    "FullName": "President Trump (PRES)"
  },
  {
    "Symbol": "BTZ",
    "CoinName": "BitzCoin",
    "FullName": "BitzCoin (BTZ)"
  },
  {
    "Symbol": "OPES",
    "CoinName": "Opes",
    "FullName": "Opes (OPES)"
  },
  {
    "Symbol": "WCT",
    "CoinName": "Waves Community Token",
    "FullName": "Waves Community Token (WCT)"
  },
  {
    "Symbol": "RATIO",
    "CoinName": "Ratio",
    "FullName": "Ratio (RATIO)"
  },
  {
    "Symbol": "BAN",
    "CoinName": "Babes and Nerds",
    "FullName": "Babes and Nerds (BAN)"
  },
  {
    "Symbol": "NICE",
    "CoinName": "NiceCoin",
    "FullName": "NiceCoin (NICE)"
  },
  {
    "Symbol": "SMF",
    "CoinName": "SmurfCoin",
    "FullName": "SmurfCoin (SMF)"
  },
  {
    "Symbol": "CWXT",
    "CoinName": "CryptoWorldXToken",
    "FullName": "CryptoWorldXToken (CWXT)"
  },
  {
    "Symbol": "TECH",
    "CoinName": "TechCoin",
    "FullName": "TechCoin (TECH)"
  },
  {
    "Symbol": "CIR",
    "CoinName": "CircuitCoin",
    "FullName": "CircuitCoin (CIR)"
  },
  {
    "Symbol": "LEPEN",
    "CoinName": "LePenCoin",
    "FullName": "LePenCoin (LEPEN)"
  },
  {
    "Symbol": "ROUND",
    "CoinName": "RoundCoin",
    "FullName": "RoundCoin (ROUND)"
  },
  {
    "Symbol": "MARI",
    "CoinName": "MarijuanaCoin",
    "FullName": "MarijuanaCoin (MARI)"
  },
  {
    "Symbol": "MARX",
    "CoinName": "MarxCoin",
    "FullName": "MarxCoin (MARX)"
  },
  {
    "Symbol": "TAT",
    "CoinName": "Tatiana Coin",
    "FullName": "Tatiana Coin (TAT)"
  },
  {
    "Symbol": "HAZE",
    "CoinName": "HazeCoin",
    "FullName": "HazeCoin (HAZE)"
  },
  {
    "Symbol": "PRX",
    "CoinName": "Printerium",
    "FullName": "Printerium (PRX)"
  },
  {
    "Symbol": "NRC",
    "CoinName": "Neurocoin",
    "FullName": "Neurocoin (NRC)"
  },
  {
    "Symbol": "PAC",
    "CoinName": "PAC Global",
    "FullName": "PAC Global (PAC)"
  },
  {
    "Symbol": "IMPCH",
    "CoinName": "Impeach",
    "FullName": "Impeach (IMPCH)"
  },
  {
    "Symbol": "ERR",
    "CoinName": "ErrorCoin",
    "FullName": "ErrorCoin (ERR)"
  },
  {
    "Symbol": "TIC",
    "CoinName": "TrueInvestmentCoin",
    "FullName": "TrueInvestmentCoin (TIC)"
  },
  {
    "Symbol": "NUKE",
    "CoinName": "NukeCoin",
    "FullName": "NukeCoin (NUKE)"
  },
  {
    "Symbol": "EOC",
    "CoinName": "EveryonesCoin",
    "FullName": "EveryonesCoin (EOC)"
  },
  {
    "Symbol": "SFC",
    "CoinName": "Solarflarecoin",
    "FullName": "Solarflarecoin (SFC)"
  },
  {
    "Symbol": "JANE",
    "CoinName": "JaneCoin",
    "FullName": "JaneCoin (JANE)"
  },
  {
    "Symbol": "PARA",
    "CoinName": "ParanoiaCoin",
    "FullName": "ParanoiaCoin (PARA)"
  },
  {
    "Symbol": "MM",
    "CoinName": "MasterMint",
    "FullName": "MasterMint (MM)"
  },
  {
    "Symbol": "CTL",
    "CoinName": "Citadel",
    "FullName": "Citadel (CTL)"
  },
  {
    "Symbol": "NDOGE",
    "CoinName": "NinjaDoge",
    "FullName": "NinjaDoge (NDOGE)"
  },
  {
    "Symbol": "ZBC",
    "CoinName": "Zilbercoin",
    "FullName": "Zilbercoin (ZBC)"
  },
  {
    "Symbol": "MLN",
    "CoinName": "Melon",
    "FullName": "Melon (MLN)"
  },
  {
    "Symbol": "FRST",
    "CoinName": "FirstCoin",
    "FullName": "FirstCoin (FRST)"
  },
  {
    "Symbol": "PAY",
    "CoinName": "TenX",
    "FullName": "TenX (PAY)"
  },
  {
    "Symbol": "ORO",
    "CoinName": "OroCoin",
    "FullName": "OroCoin (ORO)"
  },
  {
    "Symbol": "ALEX",
    "CoinName": "Alexandrite",
    "FullName": "Alexandrite (ALEX)"
  },
  {
    "Symbol": "TBCX",
    "CoinName": "TrashBurn",
    "FullName": "TrashBurn (TBCX)"
  },
  {
    "Symbol": "MCAR",
    "CoinName": "MasterCar",
    "FullName": "MasterCar (MCAR)"
  },
  {
    "Symbol": "THS",
    "CoinName": "TechShares",
    "FullName": "TechShares (THS)"
  },
  {
    "Symbol": "ACES",
    "CoinName": "AcesCoin",
    "FullName": "AcesCoin (ACES)"
  },
  {
    "Symbol": "UAEC",
    "CoinName": "United Arab Emirates Coin",
    "FullName": "United Arab Emirates Coin (UAEC)"
  },
  {
    "Symbol": "EA",
    "CoinName": "EagleCoin",
    "FullName": "EagleCoin (EA)"
  },
  {
    "Symbol": "PIE",
    "CoinName": "Persistent Information Exchange",
    "FullName": "Persistent Information Exchange (PIE)"
  },
  {
    "Symbol": "CREA",
    "CoinName": "CreativeChain",
    "FullName": "CreativeChain (CREA)"
  },
  {
    "Symbol": "WISC",
    "CoinName": "WisdomCoin",
    "FullName": "WisdomCoin (WISC)"
  },
  {
    "Symbol": "BVC",
    "CoinName": "BeaverCoin",
    "FullName": "BeaverCoin (BVC)"
  },
  {
    "Symbol": "FIND",
    "CoinName": "FindCoin",
    "FullName": "FindCoin (FIND)"
  },
  {
    "Symbol": "MLITE",
    "CoinName": "MeLite",
    "FullName": "MeLite (MLITE)"
  },
  {
    "Symbol": "STALIN",
    "CoinName": "StalinCoin",
    "FullName": "StalinCoin (STALIN)"
  },
  {
    "Symbol": "TSE",
    "CoinName": "TattooCoin",
    "FullName": "TattooCoin (TSE)"
  },
  {
    "Symbol": "VLTC",
    "CoinName": "VaultCoin",
    "FullName": "VaultCoin (VLTC)"
  },
  {
    "Symbol": "BIOB",
    "CoinName": "BioBar",
    "FullName": "BioBar (BIOB)"
  },
  {
    "Symbol": "SWT",
    "CoinName": "Swarm City Token",
    "FullName": "Swarm City Token (SWT)"
  },
  {
    "Symbol": "PASL",
    "CoinName": "Pascal Lite",
    "FullName": "Pascal Lite (PASL)"
  },
  {
    "Symbol": "ZER",
    "CoinName": "Zero",
    "FullName": "Zero (ZER)"
  },
  {
    "Symbol": "CHAT",
    "CoinName": "OpenChat",
    "FullName": "OpenChat (CHAT)"
  },
  {
    "Symbol": "CDN",
    "CoinName": "Canada eCoin",
    "FullName": "Canada eCoin (CDN)"
  },
  {
    "Symbol": "NETKO",
    "CoinName": "Netko",
    "FullName": "Netko (NETKO)"
  },
  {
    "Symbol": "ZOI",
    "CoinName": "Zoin",
    "FullName": "Zoin (ZOI)"
  },
  {
    "Symbol": "HONEY",
    "CoinName": "Honey",
    "FullName": "Honey (HONEY)"
  },
  {
    "Symbol": "MXT",
    "CoinName": "MartexCoin",
    "FullName": "MartexCoin (MXT)"
  },
  {
    "Symbol": "MUSIC",
    "CoinName": "Musicoin",
    "FullName": "Musicoin (MUSIC)"
  },
  {
    "Symbol": "DTB",
    "CoinName": "Databits",
    "FullName": "Databits (DTB)"
  },
  {
    "Symbol": "VEG",
    "CoinName": "BitVegan",
    "FullName": "BitVegan (VEG)"
  },
  {
    "Symbol": "MBIT",
    "CoinName": "Mbitbooks",
    "FullName": "Mbitbooks (MBIT)"
  },
  {
    "Symbol": "VOLT",
    "CoinName": "BitVolt",
    "FullName": "BitVolt (VOLT)"
  },
  {
    "Symbol": "EDG",
    "CoinName": "Edgeless",
    "FullName": "Edgeless (EDG)"
  },
  {
    "Symbol": "B@",
    "CoinName": "BankCoin",
    "FullName": "BankCoin (B@)"
  },
  {
    "Symbol": "BESTC",
    "CoinName": "BestChain",
    "FullName": "BestChain (BESTC)"
  },
  {
    "Symbol": "CHC",
    "CoinName": "ChainCoin",
    "FullName": "ChainCoin (CHC)"
  },
  {
    "Symbol": "ZENI",
    "CoinName": "Zennies",
    "FullName": "Zennies (ZENI)"
  },
  {
    "Symbol": "PLANET",
    "CoinName": "PlanetCoin",
    "FullName": "PlanetCoin (PLANET)"
  },
  {
    "Symbol": "DUCK",
    "CoinName": "DuckDuckCoin",
    "FullName": "DuckDuckCoin (DUCK)"
  },
  {
    "Symbol": "BNX",
    "CoinName": "BnrtxCoin",
    "FullName": "BnrtxCoin (BNX)"
  },
  {
    "Symbol": "BSTK",
    "CoinName": "BattleStake",
    "FullName": "BattleStake (BSTK)"
  },
  {
    "Symbol": "RNS",
    "CoinName": "RenosCoin",
    "FullName": "RenosCoin (RNS)"
  },
  {
    "Symbol": "DBIX",
    "CoinName": "DubaiCoin",
    "FullName": "DubaiCoin (DBIX)"
  },
  {
    "Symbol": "AMIS",
    "CoinName": "AMIS",
    "FullName": "AMIS (AMIS)"
  },
  {
    "Symbol": "KAYI",
    "CoinName": "Kayı",
    "FullName": "Kayı (KAYI)"
  },
  {
    "Symbol": "XVP",
    "CoinName": "VirtacoinPlus",
    "FullName": "VirtacoinPlus (XVP)"
  },
  {
    "Symbol": "BOAT",
    "CoinName": "Doubloon",
    "FullName": "Doubloon (BOAT)"
  },
  {
    "Symbol": "TAJ",
    "CoinName": "TajCoin",
    "FullName": "TajCoin (TAJ)"
  },
  {
    "Symbol": "IMX",
    "CoinName": "Impact",
    "FullName": "Impact (IMX)"
  },
  {
    "Symbol": "CJC",
    "CoinName": "CryptoJournal",
    "FullName": "CryptoJournal (CJC)"
  },
  {
    "Symbol": "AMY",
    "CoinName": "Amygws",
    "FullName": "Amygws (AMY)"
  },
  {
    "Symbol": "QBT",
    "CoinName": "Cubits",
    "FullName": "Cubits (QBT)"
  },
  {
    "Symbol": "EB3",
    "CoinName": "EB3coin",
    "FullName": "EB3coin (EB3)"
  },
  {
    "Symbol": "XVE",
    "CoinName": "The Vegan Initiative",
    "FullName": "The Vegan Initiative (XVE)"
  },
  {
    "Symbol": "FAZZ",
    "CoinName": "FazzCoin",
    "FullName": "FazzCoin (FAZZ)"
  },
  {
    "Symbol": "APT",
    "CoinName": "Aptcoin",
    "FullName": "Aptcoin (APT)"
  },
  {
    "Symbol": "BLAZR",
    "CoinName": "BlazerCoin",
    "FullName": "BlazerCoin (BLAZR)"
  },
  {
    "Symbol": "ARPAC",
    "CoinName": "ArpaCoin",
    "FullName": "ArpaCoin (ARPAC)"
  },
  {
    "Symbol": "UNI",
    "CoinName": "Universe",
    "FullName": "Universe (UNI)"
  },
  {
    "Symbol": "ECOC",
    "CoinName": "ECOcoin",
    "FullName": "ECOcoin (ECOC)"
  },
  {
    "Symbol": "XLR",
    "CoinName": "Solaris",
    "FullName": "Solaris (XLR)"
  },
  {
    "Symbol": "DARK",
    "CoinName": "Dark",
    "FullName": "Dark (DARK)"
  },
  {
    "Symbol": "DON",
    "CoinName": "DonationCoin",
    "FullName": "DonationCoin (DON)"
  },
  {
    "Symbol": "MER",
    "CoinName": "Mercury",
    "FullName": "Mercury (MER)"
  },
  {
    "Symbol": "WGO",
    "CoinName": "WavesGO",
    "FullName": "WavesGO (WGO)"
  },
  {
    "Symbol": "RLC",
    "CoinName": "iEx.ec",
    "FullName": "iEx.ec (RLC)"
  },
  {
    "Symbol": "ATMOS",
    "CoinName": "Atmos",
    "FullName": "Atmos (ATMOS)"
  },
  {
    "Symbol": "ETT",
    "CoinName": "EncryptoTel",
    "FullName": "EncryptoTel (ETT)"
  },
  {
    "Symbol": "VISIO",
    "CoinName": "Visio",
    "FullName": "Visio (VISIO)"
  },
  {
    "Symbol": "HPC",
    "CoinName": "HappyCoin",
    "FullName": "HappyCoin (HPC)"
  },
  {
    "Symbol": "GIOT",
    "CoinName": "Giotto Coin",
    "FullName": "Giotto Coin (GIOT)"
  },
  {
    "Symbol": "CXT",
    "CoinName": "Coinonat",
    "FullName": "Coinonat (CXT)"
  },
  {
    "Symbol": "EMPC",
    "CoinName": "EmporiumCoin",
    "FullName": "EmporiumCoin (EMPC)"
  },
  {
    "Symbol": "GNO",
    "CoinName": "Gnosis",
    "FullName": "Gnosis (GNO)"
  },
  {
    "Symbol": "LGD",
    "CoinName": "Legends Cryptocurrency",
    "FullName": "Legends Cryptocurrency (LGD)"
  },
  {
    "Symbol": "TAAS",
    "CoinName": "Token as a Service",
    "FullName": "Token as a Service (TAAS)"
  },
  {
    "Symbol": "BUCKS",
    "CoinName": "SwagBucks",
    "FullName": "SwagBucks (BUCKS)"
  },
  {
    "Symbol": "GUP",
    "CoinName": "Guppy",
    "FullName": "Guppy (GUP)"
  },
  {
    "Symbol": "MCRN",
    "CoinName": "MacronCoin",
    "FullName": "MacronCoin (MCRN)"
  },
  {
    "Symbol": "LUN",
    "CoinName": "Lunyr",
    "FullName": "Lunyr (LUN)"
  },
  {
    "Symbol": "RAIN",
    "CoinName": "Condensate",
    "FullName": "Condensate (RAIN)"
  },
  {
    "Symbol": "WSX",
    "CoinName": "WeAreSatoshi",
    "FullName": "WeAreSatoshi (WSX)"
  },
  {
    "Symbol": "IEC",
    "CoinName": "IvugeoEvolutionCoin",
    "FullName": "IvugeoEvolutionCoin (IEC)"
  },
  {
    "Symbol": "IMS",
    "CoinName": "Independent Money System",
    "FullName": "Independent Money System (IMS)"
  },
  {
    "Symbol": "ARGUS",
    "CoinName": "ArgusCoin",
    "FullName": "ArgusCoin (ARGUS)"
  },
  {
    "Symbol": "CNT",
    "CoinName": "Centurion",
    "FullName": "Centurion (CNT)"
  },
  {
    "Symbol": "LMC",
    "CoinName": "LomoCoin",
    "FullName": "LomoCoin (LMC)"
  },
  {
    "Symbol": "TKN",
    "CoinName": "Monolith",
    "FullName": "Monolith (TKN)"
  },
  {
    "Symbol": "BTCS",
    "CoinName": "Bitcoin Scrypt",
    "FullName": "Bitcoin Scrypt (BTCS)"
  },
  {
    "Symbol": "PROC",
    "CoinName": "ProCurrency",
    "FullName": "ProCurrency (PROC)"
  },
  {
    "Symbol": "XGR",
    "CoinName": "GoldReserve",
    "FullName": "GoldReserve (XGR)"
  },
  {
    "Symbol": "BENJI",
    "CoinName": "BenjiRolls",
    "FullName": "BenjiRolls (BENJI)"
  },
  {
    "Symbol": "HMQ",
    "CoinName": "Humaniq",
    "FullName": "Humaniq (HMQ)"
  },
  {
    "Symbol": "BCAP",
    "CoinName": "Blockchain Capital",
    "FullName": "Blockchain Capital (BCAP)"
  },
  {
    "Symbol": "DUO",
    "CoinName": "ParallelCoin",
    "FullName": "ParallelCoin (DUO)"
  },
  {
    "Symbol": "RBX",
    "CoinName": "RiptoBuX",
    "FullName": "RiptoBuX (RBX)"
  },
  {
    "Symbol": "GRW",
    "CoinName": "GrowthCoin",
    "FullName": "GrowthCoin (GRW)"
  },
  {
    "Symbol": "APX",
    "CoinName": "Apx",
    "FullName": "Apx (APX)"
  },
  {
    "Symbol": "MILO",
    "CoinName": "MiloCoin",
    "FullName": "MiloCoin (MILO)"
  },
  {
    "Symbol": "OLV",
    "CoinName": "OldV",
    "FullName": "OldV (OLV)"
  },
  {
    "Symbol": "ILC",
    "CoinName": "ILCoin",
    "FullName": "ILCoin (ILC)"
  },
  {
    "Symbol": "MRT",
    "CoinName": "MinersReward",
    "FullName": "MinersReward (MRT)"
  },
  {
    "Symbol": "IOU",
    "CoinName": "IOU1",
    "FullName": "IOU1 (IOU)"
  },
  {
    "Symbol": "PZM",
    "CoinName": "Prizm",
    "FullName": "Prizm (PZM)"
  },
  {
    "Symbol": "PHR",
    "CoinName": "Phreak",
    "FullName": "Phreak (PHR)"
  },
  {
    "Symbol": "ANT",
    "CoinName": "Aragon",
    "FullName": "Aragon (ANT)"
  },
  {
    "Symbol": "PUPA",
    "CoinName": "PupaCoin",
    "FullName": "PupaCoin (PUPA)"
  },
  {
    "Symbol": "RICE",
    "CoinName": "RiceCoin",
    "FullName": "RiceCoin (RICE)"
  },
  {
    "Symbol": "XCT",
    "CoinName": "C-Bits",
    "FullName": "C-Bits (XCT)"
  },
  {
    "Symbol": "DEA",
    "CoinName": "Degas Coin",
    "FullName": "Degas Coin (DEA)"
  },
  {
    "Symbol": "REDCO",
    "CoinName": "Redcoin",
    "FullName": "Redcoin (REDCO)"
  },
  {
    "Symbol": "ZSE",
    "CoinName": "ZSEcoin",
    "FullName": "ZSEcoin (ZSE)"
  },
  {
    "Symbol": "CTIC",
    "CoinName": "Coinmatic",
    "FullName": "Coinmatic (CTIC)"
  },
  {
    "Symbol": "TAP",
    "CoinName": "TappingCoin",
    "FullName": "TappingCoin (TAP)"
  },
  {
    "Symbol": "BITOK",
    "CoinName": "BitOKX",
    "FullName": "BitOKX (BITOK)"
  },
  {
    "Symbol": "PBT",
    "CoinName": "Primalbase",
    "FullName": "Primalbase (PBT)"
  },
  {
    "Symbol": "MUU",
    "CoinName": "MilkCoin",
    "FullName": "MilkCoin (MUU)"
  },
  {
    "Symbol": "INF8",
    "CoinName": "Infinium-8",
    "FullName": "Infinium-8 (INF8)"
  },
  {
    "Symbol": "HTML5",
    "CoinName": "HTML5 Coin",
    "FullName": "HTML5 Coin (HTML5)"
  },
  {
    "Symbol": "MNE",
    "CoinName": "Minereum",
    "FullName": "Minereum (MNE)"
  },
  {
    "Symbol": "DICE",
    "CoinName": "Etheroll",
    "FullName": "Etheroll (DICE)"
  },
  {
    "Symbol": "SBSC",
    "CoinName": "Subscriptio",
    "FullName": "Subscriptio (SBSC)"
  },
  {
    "Symbol": "USC",
    "CoinName": "Ultimate Secure Cash",
    "FullName": "Ultimate Secure Cash (USC)"
  },
  {
    "Symbol": "DUX",
    "CoinName": "DuxCoin",
    "FullName": "DuxCoin (DUX)"
  },
  {
    "Symbol": "XPS",
    "CoinName": "PoisonIvyCoin",
    "FullName": "PoisonIvyCoin (XPS)"
  },
  {
    "Symbol": "EQT",
    "CoinName": "EquiTrader",
    "FullName": "EquiTrader (EQT)"
  },
  {
    "Symbol": "INSN",
    "CoinName": "Insane Coin",
    "FullName": "Insane Coin (INSN)"
  },
  {
    "Symbol": "BAT",
    "CoinName": "Basic Attention Token",
    "FullName": "Basic Attention Token (BAT)"
  },
  {
    "Symbol": "MNTC",
    "CoinName": "Manet Coin",
    "FullName": "Manet Coin (MNTC)"
  },
  {
    "Symbol": "F16",
    "CoinName": "F16Coin",
    "FullName": "F16Coin (F16)"
  },
  {
    "Symbol": "HAMS",
    "CoinName": "HamsterCoin",
    "FullName": "HamsterCoin (HAMS)"
  },
  {
    "Symbol": "NEF",
    "CoinName": "NefariousCoin",
    "FullName": "NefariousCoin (NEF)"
  },
  {
    "Symbol": "BOS",
    "CoinName": "BOScoin",
    "FullName": "BOScoin (BOS)"
  },
  {
    "Symbol": "QWARK",
    "CoinName": "Qwark",
    "FullName": "Qwark (QWARK)"
  },
  {
    "Symbol": "QRL",
    "CoinName": "Quantum Resistant Ledger",
    "FullName": "Quantum Resistant Ledger (QRL)"
  },
  {
    "Symbol": "ADL",
    "CoinName": "Adelphoi",
    "FullName": "Adelphoi (ADL)"
  },
  {
    "Symbol": "PTOY",
    "CoinName": "Patientory",
    "FullName": "Patientory (PTOY)"
  },
  {
    "Symbol": "ZRC",
    "CoinName": "ZrCoin",
    "FullName": "ZrCoin (ZRC)"
  },
  {
    "Symbol": "LKK",
    "CoinName": "Lykke",
    "FullName": "Lykke (LKK)"
  },
  {
    "Symbol": "ESP",
    "CoinName": "Espers",
    "FullName": "Espers (ESP)"
  },
  {
    "Symbol": "DYN",
    "CoinName": "Dynamic",
    "FullName": "Dynamic (DYN)"
  },
  {
    "Symbol": "SEQ",
    "CoinName": "Sequence",
    "FullName": "Sequence (SEQ)"
  },
  {
    "Symbol": "MCAP",
    "CoinName": "MCAP",
    "FullName": "MCAP (MCAP)"
  },
  {
    "Symbol": "MYST",
    "CoinName": "Mysterium",
    "FullName": "Mysterium (MYST)"
  },
  {
    "Symbol": "VERI",
    "CoinName": "Veritaseum",
    "FullName": "Veritaseum (VERI)"
  },
  {
    "Symbol": "SNM",
    "CoinName": "SONM",
    "FullName": "SONM (SNM)"
  },
  {
    "Symbol": "CFI",
    "CoinName": "Cofound.it",
    "FullName": "Cofound.it (CFI)"
  },
  {
    "Symbol": "SNT",
    "CoinName": "Status Network Token",
    "FullName": "Status Network Token (SNT)"
  },
  {
    "Symbol": "AVT",
    "CoinName": "AventCoin",
    "FullName": "AventCoin (AVT)"
  },
  {
    "Symbol": "CVC",
    "CoinName": "Civic",
    "FullName": "Civic (CVC)"
  },
  {
    "Symbol": "IXT",
    "CoinName": "iXledger",
    "FullName": "iXledger (IXT)"
  },
  {
    "Symbol": "DENT",
    "CoinName": "Dent",
    "FullName": "Dent (DENT)"
  },
  {
    "Symbol": "VGX",
    "CoinName": "Voyager Token",
    "FullName": "Voyager Token (VGX)"
  },
  {
    "Symbol": "STA",
    "CoinName": "Starta",
    "FullName": "Starta (STA)"
  },
  {
    "Symbol": "TFL",
    "CoinName": "True Flip Lottery",
    "FullName": "True Flip Lottery (TFL)"
  },
  {
    "Symbol": "EFYT",
    "CoinName": "Ergo",
    "FullName": "Ergo (EFYT)"
  },
  {
    "Symbol": "MCO",
    "CoinName": "Crypto.com",
    "FullName": "Crypto.com (MCO)"
  },
  {
    "Symbol": "NMR",
    "CoinName": "Numeraire",
    "FullName": "Numeraire (NMR)"
  },
  {
    "Symbol": "ADX",
    "CoinName": "AdEx",
    "FullName": "AdEx (ADX)"
  },
  {
    "Symbol": "QAU",
    "CoinName": "Quantum",
    "FullName": "Quantum (QAU)"
  },
  {
    "Symbol": "ECOB",
    "CoinName": "EcoBit",
    "FullName": "EcoBit (ECOB)"
  },
  {
    "Symbol": "PLBT",
    "CoinName": "Polybius",
    "FullName": "Polybius (PLBT)"
  },
  {
    "Symbol": "USDT",
    "CoinName": "Tether",
    "FullName": "Tether (USDT)"
  },
  {
    "Symbol": "AHT",
    "CoinName": "Ahoolee",
    "FullName": "Ahoolee (AHT)"
  },
  {
    "Symbol": "ATB",
    "CoinName": "ATB coin",
    "FullName": "ATB coin (ATB)"
  },
  {
    "Symbol": "TIX",
    "CoinName": "Blocktix",
    "FullName": "Blocktix (TIX)"
  },
  {
    "Symbol": "CHAN",
    "CoinName": "ChanCoin",
    "FullName": "ChanCoin (CHAN)"
  },
  {
    "Symbol": "CMP",
    "CoinName": "Compcoin",
    "FullName": "Compcoin (CMP)"
  },
  {
    "Symbol": "RVT",
    "CoinName": "Rivetz",
    "FullName": "Rivetz (RVT)"
  },
  {
    "Symbol": "HRB",
    "CoinName": "Harbour DAO",
    "FullName": "Harbour DAO (HRB)"
  },
  {
    "Symbol": "NIM",
    "CoinName": "Nimiq",
    "FullName": "Nimiq (NIM)"
  },
  {
    "Symbol": "8BT",
    "CoinName": "8 Circuit Studios",
    "FullName": "8 Circuit Studios (8BT)"
  },
  {
    "Symbol": "CDT",
    "CoinName": "Blox",
    "FullName": "Blox (CDT)"
  },
  {
    "Symbol": "DNT",
    "CoinName": "district0x",
    "FullName": "district0x (DNT)"
  },
  {
    "Symbol": "SUR",
    "CoinName": "Suretly",
    "FullName": "Suretly (SUR)"
  },
  {
    "Symbol": "PING",
    "CoinName": "CryptoPing",
    "FullName": "CryptoPing (PING)"
  },
  {
    "Symbol": "MIV",
    "CoinName": "MakeItViral",
    "FullName": "MakeItViral (MIV)"
  },
  {
    "Symbol": "DAOC",
    "CoinName": "DAOBet",
    "FullName": "DAOBet (DAOC)"
  },
  {
    "Symbol": "SAN",
    "CoinName": "Santiment",
    "FullName": "Santiment (SAN)"
  },
  {
    "Symbol": "KIN",
    "CoinName": "Kin",
    "FullName": "Kin (KIN)"
  },
  {
    "Symbol": "WGR",
    "CoinName": "Wagerr",
    "FullName": "Wagerr (WGR)"
  },
  {
    "Symbol": "XEL",
    "CoinName": "Elastic",
    "FullName": "Elastic (XEL)"
  },
  {
    "Symbol": "NVST",
    "CoinName": "NVO",
    "FullName": "NVO (NVST)"
  },
  {
    "Symbol": "FUN",
    "CoinName": "FunFair",
    "FullName": "FunFair (FUN)"
  },
  {
    "Symbol": "FUNC",
    "CoinName": "FunCoin",
    "FullName": "FunCoin (FUNC)"
  },
  {
    "Symbol": "PQT",
    "CoinName": "PAquarium",
    "FullName": "PAquarium (PQT)"
  },
  {
    "Symbol": "WTT",
    "CoinName": "Giga Watt",
    "FullName": "Giga Watt (WTT)"
  },
  {
    "Symbol": "MTL",
    "CoinName": "Metal",
    "FullName": "Metal (MTL)"
  },
  {
    "Symbol": "HVN",
    "CoinName": "Hiveterminal Token",
    "FullName": "Hiveterminal Token (HVN)"
  },
  {
    "Symbol": "MYB",
    "CoinName": "MyBit",
    "FullName": "MyBit (MYB)"
  },
  {
    "Symbol": "PPT",
    "CoinName": "Populous",
    "FullName": "Populous (PPT)"
  },
  {
    "Symbol": "SNC",
    "CoinName": "SunContract",
    "FullName": "SunContract (SNC)"
  },
  {
    "Symbol": "STAR",
    "CoinName": "Starbase",
    "FullName": "Starbase (STAR)"
  },
  {
    "Symbol": "COR",
    "CoinName": "Corion",
    "FullName": "Corion (COR)"
  },
  {
    "Symbol": "XRL",
    "CoinName": "Rialto.AI",
    "FullName": "Rialto.AI (XRL)"
  },
  {
    "Symbol": "OROC",
    "CoinName": "Orocrypt",
    "FullName": "Orocrypt (OROC)"
  },
  {
    "Symbol": "OAX",
    "CoinName": "OpenANX",
    "FullName": "OpenANX (OAX)"
  },
  {
    "Symbol": "MBI",
    "CoinName": "Monster Byte Inc",
    "FullName": "Monster Byte Inc (MBI)"
  },
  {
    "Symbol": "DDF",
    "CoinName": "Digital Developers Fund",
    "FullName": "Digital Developers Fund (DDF)"
  },
  {
    "Symbol": "DIM",
    "CoinName": "DIMCOIN",
    "FullName": "DIMCOIN (DIM)"
  },
  {
    "Symbol": "GGS",
    "CoinName": "Gilgam",
    "FullName": "Gilgam (GGS)"
  },
  {
    "Symbol": "DNA",
    "CoinName": "EncrypGen",
    "FullName": "EncrypGen (DNA)"
  },
  {
    "Symbol": "FYN",
    "CoinName": "FundYourselfNow",
    "FullName": "FundYourselfNow (FYN)"
  },
  {
    "Symbol": "FND",
    "CoinName": "FundRequest",
    "FullName": "FundRequest (FND)"
  },
  {
    "Symbol": "DCY",
    "CoinName": "Dinastycoin",
    "FullName": "Dinastycoin (DCY)"
  },
  {
    "Symbol": "CFT",
    "CoinName": "CryptoForecast",
    "FullName": "CryptoForecast (CFT)"
  },
  {
    "Symbol": "DNR",
    "CoinName": "Denarius",
    "FullName": "Denarius (DNR)"
  },
  {
    "Symbol": "DP",
    "CoinName": "DigitalPrice",
    "FullName": "DigitalPrice (DP)"
  },
  {
    "Symbol": "VUC",
    "CoinName": "Virta Unique Coin",
    "FullName": "Virta Unique Coin (VUC)"
  },
  {
    "Symbol": "BTPL",
    "CoinName": "Bitcoin Planet",
    "FullName": "Bitcoin Planet (BTPL)"
  },
  {
    "Symbol": "UNIFY",
    "CoinName": "Unify",
    "FullName": "Unify (UNIFY)"
  },
  {
    "Symbol": "BRIT",
    "CoinName": "BritCoin",
    "FullName": "BritCoin (BRIT)"
  },
  {
    "Symbol": "AMMO",
    "CoinName": "Ammo Rewards",
    "FullName": "Ammo Rewards (AMMO)"
  },
  {
    "Symbol": "SOCC",
    "CoinName": "SocialCoin",
    "FullName": "SocialCoin (SOCC)"
  },
  {
    "Symbol": "MASS",
    "CoinName": "Mass.Cloud",
    "FullName": "Mass.Cloud (MASS)"
  },
  {
    "Symbol": "LA",
    "CoinName": "LATOKEN",
    "FullName": "LATOKEN (LA)"
  },
  {
    "Symbol": "IML",
    "CoinName": "IMMLA",
    "FullName": "IMMLA (IML)"
  },
  {
    "Symbol": "XUC",
    "CoinName": "Exchange Union",
    "FullName": "Exchange Union (XUC)"
  },
  {
    "Symbol": "STU",
    "CoinName": "BitJob",
    "FullName": "BitJob (STU)"
  },
  {
    "Symbol": "PLR",
    "CoinName": "Pillar",
    "FullName": "Pillar (PLR)"
  },
  {
    "Symbol": "GUNS",
    "CoinName": "GeoFunders",
    "FullName": "GeoFunders (GUNS)"
  },
  {
    "Symbol": "IFT",
    "CoinName": "InvestFeed",
    "FullName": "InvestFeed (IFT)"
  },
  {
    "Symbol": "BCAT",
    "CoinName": "BitClave",
    "FullName": "BitClave (BCAT)"
  },
  {
    "Symbol": "PRO",
    "CoinName": "Propy",
    "FullName": "Propy (PRO)"
  },
  {
    "Symbol": "SYC",
    "CoinName": "SynchroCoin",
    "FullName": "SynchroCoin (SYC)"
  },
  {
    "Symbol": "IND",
    "CoinName": "Indorse",
    "FullName": "Indorse (IND)"
  },
  {
    "Symbol": "TRIBE",
    "CoinName": "TribeToken",
    "FullName": "TribeToken (TRIBE)"
  },
  {
    "Symbol": "ZRX",
    "CoinName": "0x",
    "FullName": "0x (ZRX)"
  },
  {
    "Symbol": "TNT",
    "CoinName": "Tierion",
    "FullName": "Tierion (TNT)"
  },
  {
    "Symbol": "SRCH",
    "CoinName": "Presearch",
    "FullName": "Presearch (SRCH)"
  },
  {
    "Symbol": "COS",
    "CoinName": "COS",
    "FullName": "COS (COS)"
  },
  {
    "Symbol": "STORM",
    "CoinName": "Storm",
    "FullName": "Storm (STORM)"
  },
  {
    "Symbol": "NPX",
    "CoinName": "Napoleon X",
    "FullName": "Napoleon X (NPX)"
  },
  {
    "Symbol": "STORJ",
    "CoinName": "Storj",
    "FullName": "Storj (STORJ)"
  },
  {
    "Symbol": "SCORE",
    "CoinName": "Scorecoin",
    "FullName": "Scorecoin (SCORE)"
  },
  {
    "Symbol": "OTX",
    "CoinName": "Octanox",
    "FullName": "Octanox (OTX)"
  },
  {
    "Symbol": "VOISE",
    "CoinName": "Voise",
    "FullName": "Voise (VOISE)"
  },
  {
    "Symbol": "ETBS",
    "CoinName": "EthBits",
    "FullName": "EthBits (ETBS)"
  },
  {
    "Symbol": "CVCOIN",
    "CoinName": "Crypviser",
    "FullName": "Crypviser (CVCOIN)"
  },
  {
    "Symbol": "DRP",
    "CoinName": "DCORP",
    "FullName": "DCORP (DRP)"
  },
  {
    "Symbol": "ARC",
    "CoinName": "ArcticCoin",
    "FullName": "ArcticCoin (ARC)"
  },
  {
    "Symbol": "BOG",
    "CoinName": "Bogcoin",
    "FullName": "Bogcoin (BOG)"
  },
  {
    "Symbol": "NDC",
    "CoinName": "NeverDie",
    "FullName": "NeverDie (NDC)"
  },
  {
    "Symbol": "POE",
    "CoinName": "Po.et",
    "FullName": "Po.et (POE)"
  },
  {
    "Symbol": "ADT",
    "CoinName": "AdToken",
    "FullName": "AdToken (ADT)"
  },
  {
    "Symbol": "UET",
    "CoinName": "Useless Ethereum Token",
    "FullName": "Useless Ethereum Token (UET)"
  },
  {
    "Symbol": "AGRS",
    "CoinName": "Agoras Token",
    "FullName": "Agoras Token (AGRS)"
  },
  {
    "Symbol": "SAND",
    "CoinName": "BeachCoin",
    "FullName": "BeachCoin (SAND)"
  },
  {
    "Symbol": "DMT",
    "CoinName": "DMarket",
    "FullName": "DMarket (DMT)"
  },
  {
    "Symbol": "DAS",
    "CoinName": "DAS",
    "FullName": "DAS (DAS)"
  },
  {
    "Symbol": "XCJ",
    "CoinName": "CoinJob",
    "FullName": "CoinJob (XCJ)"
  },
  {
    "Symbol": "RKC",
    "CoinName": "Royal Kingdom Coin",
    "FullName": "Royal Kingdom Coin (RKC)"
  },
  {
    "Symbol": "NLC2",
    "CoinName": "NoLimitCoin",
    "FullName": "NoLimitCoin (NLC2)"
  },
  {
    "Symbol": "LINDA",
    "CoinName": "Metrix",
    "FullName": "Metrix (LINDA)"
  },
  {
    "Symbol": "KING",
    "CoinName": "King93",
    "FullName": "King93 (KING)"
  },
  {
    "Symbol": "ANCP",
    "CoinName": "Anacrypt",
    "FullName": "Anacrypt (ANCP)"
  },
  {
    "Symbol": "RCC",
    "CoinName": "Reality Clash",
    "FullName": "Reality Clash (RCC)"
  },
  {
    "Symbol": "ROOTS",
    "CoinName": "RootProject",
    "FullName": "RootProject (ROOTS)"
  },
  {
    "Symbol": "SNK",
    "CoinName": "Sosnovkino",
    "FullName": "Sosnovkino (SNK)"
  },
  {
    "Symbol": "CABS",
    "CoinName": "CryptoABS",
    "FullName": "CryptoABS (CABS)"
  },
  {
    "Symbol": "OPT",
    "CoinName": "Opus",
    "FullName": "Opus (OPT)"
  },
  {
    "Symbol": "ZNT",
    "CoinName": "OpenZen",
    "FullName": "OpenZen (ZNT)"
  },
  {
    "Symbol": "BITSD",
    "CoinName": "Bits Digit",
    "FullName": "Bits Digit (BITSD)"
  },
  {
    "Symbol": "XLC",
    "CoinName": "LeviarCoin",
    "FullName": "LeviarCoin (XLC)"
  },
  {
    "Symbol": "SKIN",
    "CoinName": "Skincoin",
    "FullName": "Skincoin (SKIN)"
  },
  {
    "Symbol": "MSP",
    "CoinName": "Mothership",
    "FullName": "Mothership (MSP)"
  },
  {
    "Symbol": "HIRE",
    "CoinName": "HireMatch",
    "FullName": "HireMatch (HIRE)"
  },
  {
    "Symbol": "REAL",
    "CoinName": "REAL",
    "FullName": "REAL (REAL)"
  },
  {
    "Symbol": "DFBT",
    "CoinName": "DentalFix",
    "FullName": "DentalFix (DFBT)"
  },
  {
    "Symbol": "EQ",
    "CoinName": "EQUI",
    "FullName": "EQUI (EQ)"
  },
  {
    "Symbol": "WLK",
    "CoinName": "Wolk",
    "FullName": "Wolk (WLK)"
  },
  {
    "Symbol": "VIB",
    "CoinName": "Viberate",
    "FullName": "Viberate (VIB)"
  },
  {
    "Symbol": "ONION",
    "CoinName": "DeepOnion",
    "FullName": "DeepOnion (ONION)"
  },
  {
    "Symbol": "BTX",
    "CoinName": "Bitcore",
    "FullName": "Bitcore (BTX)"
  },
  {
    "Symbol": "ICE",
    "CoinName": "iDice",
    "FullName": "iDice (ICE)"
  },
  {
    "Symbol": "XID",
    "CoinName": "Sphre AIR",
    "FullName": "Sphre AIR (XID)"
  },
  {
    "Symbol": "GCN",
    "CoinName": "gCn Coin",
    "FullName": "gCn Coin (GCN)"
  },
  {
    "Symbol": "MANA",
    "CoinName": "Decentraland",
    "FullName": "Decentraland (MANA)"
  },
  {
    "Symbol": "ICOO",
    "CoinName": "ICO OpenLedger",
    "FullName": "ICO OpenLedger (ICOO)"
  },
  {
    "Symbol": "TME",
    "CoinName": "Timereum",
    "FullName": "Timereum (TME)"
  },
  {
    "Symbol": "SIGT",
    "CoinName": "Signatum",
    "FullName": "Signatum (SIGT)"
  },
  {
    "Symbol": "ONX",
    "CoinName": "Onix",
    "FullName": "Onix (ONX)"
  },
  {
    "Symbol": "COE",
    "CoinName": "CoEval",
    "FullName": "CoEval (COE)"
  },
  {
    "Symbol": "ARENA",
    "CoinName": "Arena",
    "FullName": "Arena (ARENA)"
  },
  {
    "Symbol": "WINK",
    "CoinName": "Wink",
    "FullName": "Wink (WINK)"
  },
  {
    "Symbol": "CRM",
    "CoinName": "Cream",
    "FullName": "Cream (CRM)"
  },
  {
    "Symbol": "DGPT",
    "CoinName": "DigiPulse",
    "FullName": "DigiPulse (DGPT)"
  },
  {
    "Symbol": "MOBI",
    "CoinName": "Mobius",
    "FullName": "Mobius (MOBI)"
  },
  {
    "Symbol": "CSNO",
    "CoinName": "BitDice",
    "FullName": "BitDice (CSNO)"
  },
  {
    "Symbol": "KICK",
    "CoinName": "KickToken",
    "FullName": "KickToken (KICK)"
  },
  {
    "Symbol": "SDAO",
    "CoinName": "Solar DAO",
    "FullName": "Solar DAO (SDAO)"
  },
  {
    "Symbol": "STX",
    "CoinName": "Stox",
    "FullName": "Stox (STX)"
  },
  {
    "Symbol": "CORE",
    "CoinName": "Core Group Asset",
    "FullName": "Core Group Asset (CORE)"
  },
  {
    "Symbol": "KEN",
    "CoinName": "Kencoin",
    "FullName": "Kencoin (KEN)"
  },
  {
    "Symbol": "QVT",
    "CoinName": "Qvolta",
    "FullName": "Qvolta (QVT)"
  },
  {
    "Symbol": "TIE",
    "CoinName": "Ties Network",
    "FullName": "Ties Network (TIE)"
  },
  {
    "Symbol": "AUT",
    "CoinName": "Autoria",
    "FullName": "Autoria (AUT)"
  },
  {
    "Symbol": "CTT",
    "CoinName": "CodeTract",
    "FullName": "CodeTract (CTT)"
  },
  {
    "Symbol": "GRWI",
    "CoinName": "Growers International",
    "FullName": "Growers International (GRWI)"
  },
  {
    "Symbol": "MNY",
    "CoinName": "Monkey",
    "FullName": "Monkey (MNY)"
  },
  {
    "Symbol": "MTH",
    "CoinName": "Monetha",
    "FullName": "Monetha (MTH)"
  },
  {
    "Symbol": "CCC",
    "CoinName": "CCCoin",
    "FullName": "CCCoin (CCC)"
  },
  {
    "Symbol": "UMC",
    "CoinName": "Umbrella Coin",
    "FullName": "Umbrella Coin (UMC)"
  },
  {
    "Symbol": "BMXT",
    "CoinName": "Bitmxittz",
    "FullName": "Bitmxittz (BMXT)"
  },
  {
    "Symbol": "GAS",
    "CoinName": "Gas",
    "FullName": "Gas (GAS)"
  },
  {
    "Symbol": "FIL",
    "CoinName": "FileCoin",
    "FullName": "FileCoin (FIL)"
  },
  {
    "Symbol": "OCL",
    "CoinName": "Oceanlab",
    "FullName": "Oceanlab (OCL)"
  },
  {
    "Symbol": "BNC",
    "CoinName": "Benjacoin",
    "FullName": "Benjacoin (BNC)"
  },
  {
    "Symbol": "TOM",
    "CoinName": "Tomahawkcoin",
    "FullName": "Tomahawkcoin (TOM)"
  },
  {
    "Symbol": "SMNX",
    "CoinName": "SMNX",
    "FullName": "SMNX (SMNX)"
  },
  {
    "Symbol": "DCN",
    "CoinName": "Dentacoin",
    "FullName": "Dentacoin (DCN)"
  },
  {
    "Symbol": "DLT",
    "CoinName": "Agrello Delta",
    "FullName": "Agrello Delta (DLT)"
  },
  {
    "Symbol": "MRV",
    "CoinName": "Macroverse",
    "FullName": "Macroverse (MRV)"
  },
  {
    "Symbol": "MBRS",
    "CoinName": "Embers",
    "FullName": "Embers (MBRS)"
  },
  {
    "Symbol": "SUB",
    "CoinName": "Substratum Network",
    "FullName": "Substratum Network (SUB)"
  },
  {
    "Symbol": "PGL",
    "CoinName": "Prospectors",
    "FullName": "Prospectors (PGL)"
  },
  {
    "Symbol": "XMCC",
    "CoinName": "Monoeci",
    "FullName": "Monoeci (XMCC)"
  },
  {
    "Symbol": "AUN",
    "CoinName": "Authoreon",
    "FullName": "Authoreon (AUN)"
  },
  {
    "Symbol": "CMPCO",
    "CoinName": "CampusCoin",
    "FullName": "CampusCoin (CMPCO)"
  },
  {
    "Symbol": "DTCT",
    "CoinName": "DetectorToken",
    "FullName": "DetectorToken (DTCT)"
  },
  {
    "Symbol": "CTR",
    "CoinName": "Centra",
    "FullName": "Centra (CTR)"
  },
  {
    "Symbol": "WNET",
    "CoinName": "Wavesnode.net",
    "FullName": "Wavesnode.net (WNET)"
  },
  {
    "Symbol": "PRG",
    "CoinName": "Paragon",
    "FullName": "Paragon (PRG)"
  },
  {
    "Symbol": "THNX",
    "CoinName": "ThankYou",
    "FullName": "ThankYou (THNX)"
  },
  {
    "Symbol": "WORM",
    "CoinName": "HealthyWorm",
    "FullName": "HealthyWorm (WORM)"
  },
  {
    "Symbol": "FUCK",
    "CoinName": "Fuck Token",
    "FullName": "Fuck Token (FUCK)"
  },
  {
    "Symbol": "VRD",
    "CoinName": "Veredictum",
    "FullName": "Veredictum (VRD)"
  },
  {
    "Symbol": "SIFT",
    "CoinName": "Smart Investment Fund Token",
    "FullName": "Smart Investment Fund Token (SIFT)"
  },
  {
    "Symbol": "IGNIS",
    "CoinName": "Ignis",
    "FullName": "Ignis (IGNIS)"
  },
  {
    "Symbol": "IWT",
    "CoinName": "IwToken",
    "FullName": "IwToken (IWT)"
  },
  {
    "Symbol": "JDC",
    "CoinName": "JustDatingSite",
    "FullName": "JustDatingSite (JDC)"
  },
  {
    "Symbol": "ITF",
    "CoinName": "Intelligent Trading",
    "FullName": "Intelligent Trading (ITF)"
  },
  {
    "Symbol": "AIX",
    "CoinName": "Aigang",
    "FullName": "Aigang (AIX)"
  },
  {
    "Symbol": "EVX",
    "CoinName": "Everex",
    "FullName": "Everex (EVX)"
  },
  {
    "Symbol": "XEC",
    "CoinName": "Eternal Coin",
    "FullName": "Eternal Coin (XEC)"
  },
  {
    "Symbol": "ENTRP",
    "CoinName": "Entropy Token",
    "FullName": "Entropy Token (ENTRP)"
  },
  {
    "Symbol": "ICOS",
    "CoinName": "ICOBox",
    "FullName": "ICOBox (ICOS)"
  },
  {
    "Symbol": "PIX",
    "CoinName": "Lampix",
    "FullName": "Lampix (PIX)"
  },
  {
    "Symbol": "MEDI",
    "CoinName": "MediBond",
    "FullName": "MediBond (MEDI)"
  },
  {
    "Symbol": "HGT",
    "CoinName": "Hello Gold",
    "FullName": "Hello Gold (HGT)"
  },
  {
    "Symbol": "LTA",
    "CoinName": "Litra",
    "FullName": "Litra (LTA)"
  },
  {
    "Symbol": "NIMFA",
    "CoinName": "Nimfamoney",
    "FullName": "Nimfamoney (NIMFA)"
  },
  {
    "Symbol": "SCOR",
    "CoinName": "Scorista",
    "FullName": "Scorista (SCOR)"
  },
  {
    "Symbol": "MLS",
    "CoinName": "CPROP",
    "FullName": "CPROP (MLS)"
  },
  {
    "Symbol": "KEX",
    "CoinName": "KexCoin",
    "FullName": "KexCoin (KEX)"
  },
  {
    "Symbol": "COB",
    "CoinName": "Cobinhood",
    "FullName": "Cobinhood (COB)"
  },
  {
    "Symbol": "BRO",
    "CoinName": "Bitradio",
    "FullName": "Bitradio (BRO)"
  },
  {
    "Symbol": "MINEX",
    "CoinName": "Minex",
    "FullName": "Minex (MINEX)"
  },
  {
    "Symbol": "ATL",
    "CoinName": "ATLANT",
    "FullName": "ATLANT (ATL)"
  },
  {
    "Symbol": "DFT",
    "CoinName": "Draftcoin",
    "FullName": "Draftcoin (DFT)"
  },
  {
    "Symbol": "UTK",
    "CoinName": "Utrust",
    "FullName": "Utrust (UTK)"
  },
  {
    "Symbol": "LAT",
    "CoinName": "Latium",
    "FullName": "Latium (LAT)"
  },
  {
    "Symbol": "SOJ",
    "CoinName": "Sojourn Coin",
    "FullName": "Sojourn Coin (SOJ)"
  },
  {
    "Symbol": "HDG",
    "CoinName": "Hedge Token",
    "FullName": "Hedge Token (HDG)"
  },
  {
    "Symbol": "SQP",
    "CoinName": "SqPay",
    "FullName": "SqPay (SQP)"
  },
  {
    "Symbol": "RIYA",
    "CoinName": "Etheriya",
    "FullName": "Etheriya (RIYA)"
  },
  {
    "Symbol": "LNK",
    "CoinName": "Ethereum.Link",
    "FullName": "Ethereum.Link (LNK)"
  },
  {
    "Symbol": "AMB",
    "CoinName": "Ambrosus",
    "FullName": "Ambrosus (AMB)"
  },
  {
    "Symbol": "MNTP",
    "CoinName": "GoldMint",
    "FullName": "GoldMint (MNTP)"
  },
  {
    "Symbol": "ALTOCAR",
    "CoinName": "AltoCar",
    "FullName": "AltoCar (ALTOCAR)"
  },
  {
    "Symbol": "BLX",
    "CoinName": "Blockchain Index",
    "FullName": "Blockchain Index (BLX)"
  },
  {
    "Symbol": "BKX",
    "CoinName": "BANKEX",
    "FullName": "BANKEX (BKX)"
  },
  {
    "Symbol": "BOU",
    "CoinName": "Boulle",
    "FullName": "Boulle (BOU)"
  },
  {
    "Symbol": "OXY",
    "CoinName": "Oxycoin",
    "FullName": "Oxycoin (OXY)"
  },
  {
    "Symbol": "TTT",
    "CoinName": "Tap Project",
    "FullName": "Tap Project (TTT)"
  },
  {
    "Symbol": "AMT",
    "CoinName": "Acumen",
    "FullName": "Acumen (AMT)"
  },
  {
    "Symbol": "GIM",
    "CoinName": "Gimli",
    "FullName": "Gimli (GIM)"
  },
  {
    "Symbol": "NYC",
    "CoinName": "NewYorkCoin",
    "FullName": "NewYorkCoin (NYC)"
  },
  {
    "Symbol": "LBTC",
    "CoinName": "LiteBitcoin",
    "FullName": "LiteBitcoin (LBTC)"
  },
  {
    "Symbol": "EMT",
    "CoinName": "EasyMine",
    "FullName": "EasyMine (EMT)"
  },
  {
    "Symbol": "GXC",
    "CoinName": "Gx Coin",
    "FullName": "Gx Coin (GXC)"
  },
  {
    "Symbol": "HBT",
    "CoinName": "Hubii Network",
    "FullName": "Hubii Network (HBT)"
  },
  {
    "Symbol": "KRONE",
    "CoinName": "Kronecoin",
    "FullName": "Kronecoin (KRONE)"
  },
  {
    "Symbol": "SRT",
    "CoinName": "Scrypto",
    "FullName": "Scrypto (SRT)"
  },
  {
    "Symbol": "AVA",
    "CoinName": "Avalon",
    "FullName": "Avalon (AVA)"
  },
  {
    "Symbol": "BT",
    "CoinName": "BuildTeam",
    "FullName": "BuildTeam (BT)"
  },
  {
    "Symbol": "ACC",
    "CoinName": "AdCoin",
    "FullName": "AdCoin (ACC)"
  },
  {
    "Symbol": "Z2",
    "CoinName": "Z2 Coin",
    "FullName": "Z2 Coin (Z2)"
  },
  {
    "Symbol": "BLAS",
    "CoinName": "BlakeStar",
    "FullName": "BlakeStar (BLAS)"
  },
  {
    "Symbol": "SCL",
    "CoinName": "Sociall",
    "FullName": "Sociall (SCL)"
  },
  {
    "Symbol": "TRVL",
    "CoinName": "Travel Coin",
    "FullName": "Travel Coin (TRVL)"
  },
  {
    "Symbol": "CRTM",
    "CoinName": "Cryptum",
    "FullName": "Cryptum (CRTM)"
  },
  {
    "Symbol": "EON",
    "CoinName": "Exscudo",
    "FullName": "Exscudo (EON)"
  },
  {
    "Symbol": "PST",
    "CoinName": "Primas",
    "FullName": "Primas (PST)"
  },
  {
    "Symbol": "MTX",
    "CoinName": "Matryx",
    "FullName": "Matryx (MTX)"
  },
  {
    "Symbol": "PRIX",
    "CoinName": "Privatix",
    "FullName": "Privatix (PRIX)"
  },
  {
    "Symbol": "CTX",
    "CoinName": "CarTaxi",
    "FullName": "CarTaxi (CTX)"
  },
  {
    "Symbol": "ENJ",
    "CoinName": "Enjin Coin",
    "FullName": "Enjin Coin (ENJ)"
  },
  {
    "Symbol": "CNX",
    "CoinName": "Cryptonex",
    "FullName": "Cryptonex (CNX)"
  },
  {
    "Symbol": "DRC",
    "CoinName": "Dropcoin",
    "FullName": "Dropcoin (DRC)"
  },
  {
    "Symbol": "FUEL",
    "CoinName": "Etherparty",
    "FullName": "Etherparty (FUEL)"
  },
  {
    "Symbol": "ACE",
    "CoinName": "TokenStars",
    "FullName": "TokenStars (ACE)"
  },
  {
    "Symbol": "WRC",
    "CoinName": "Worldcore",
    "FullName": "Worldcore (WRC)"
  },
  {
    "Symbol": "BRX",
    "CoinName": "Breakout Stake",
    "FullName": "Breakout Stake (BRX)"
  },
  {
    "Symbol": "UCASH",
    "CoinName": "U.CASH",
    "FullName": "U.CASH (UCASH)"
  },
  {
    "Symbol": "WRT",
    "CoinName": "WRTcoin",
    "FullName": "WRTcoin (WRT)"
  },
  {
    "Symbol": "ORME",
    "CoinName": "Ormeus Coin",
    "FullName": "Ormeus Coin (ORME)"
  },
  {
    "Symbol": "DEEPG",
    "CoinName": "Deep Gold",
    "FullName": "Deep Gold (DEEPG)"
  },
  {
    "Symbol": "CCT",
    "CoinName": "Crystal Clear Token ",
    "FullName": "Crystal Clear Token  (CCT)"
  },
  {
    "Symbol": "WSH",
    "CoinName": "Wish Finance",
    "FullName": "Wish Finance (WSH)"
  },
  {
    "Symbol": "ARNA",
    "CoinName": "ARNA Panacea",
    "FullName": "ARNA Panacea (ARNA)"
  },
  {
    "Symbol": "ABC",
    "CoinName": "AB-Chain",
    "FullName": "AB-Chain (ABC)"
  },
  {
    "Symbol": "PRP",
    "CoinName": "Papyrus",
    "FullName": "Papyrus (PRP)"
  },
  {
    "Symbol": "BMC",
    "CoinName": "Blackmoon Crypto",
    "FullName": "Blackmoon Crypto (BMC)"
  },
  {
    "Symbol": "SKRT",
    "CoinName": "Skrilla Token",
    "FullName": "Skrilla Token (SKRT)"
  },
  {
    "Symbol": "3DES",
    "CoinName": "3DES",
    "FullName": "3DES (3DES)"
  },
  {
    "Symbol": "KAPU",
    "CoinName": "Kapu",
    "FullName": "Kapu (KAPU)"
  },
  {
    "Symbol": "SENSE",
    "CoinName": "Sense Token",
    "FullName": "Sense Token (SENSE)"
  },
  {
    "Symbol": "CAPP",
    "CoinName": "Cappasity",
    "FullName": "Cappasity (CAPP)"
  },
  {
    "Symbol": "VEE",
    "CoinName": "BLOCKv",
    "FullName": "BLOCKv (VEE)"
  },
  {
    "Symbol": "FC",
    "CoinName": "Facecoin",
    "FullName": "Facecoin (FC)"
  },
  {
    "Symbol": "RCN",
    "CoinName": "Ripio",
    "FullName": "Ripio (RCN)"
  },
  {
    "Symbol": "NRN",
    "CoinName": "Doc.ai Neuron",
    "FullName": "Doc.ai Neuron (NRN)"
  },
  {
    "Symbol": "WIZ",
    "CoinName": "Crowdwiz",
    "FullName": "Crowdwiz (WIZ)"
  },
  {
    "Symbol": "EDO",
    "CoinName": "Eidoo",
    "FullName": "Eidoo (EDO)"
  },
  {
    "Symbol": "ATKN",
    "CoinName": "A-Token",
    "FullName": "A-Token (ATKN)"
  },
  {
    "Symbol": "KNC",
    "CoinName": "Kyber Network",
    "FullName": "Kyber Network (KNC)"
  },
  {
    "Symbol": "REX",
    "CoinName": "Imbrex",
    "FullName": "Imbrex (REX)"
  },
  {
    "Symbol": "ETHD",
    "CoinName": "Ethereum Dark",
    "FullName": "Ethereum Dark (ETHD)"
  },
  {
    "Symbol": "H2O",
    "CoinName": "Hydrominer",
    "FullName": "Hydrominer (H2O)"
  },
  {
    "Symbol": "TKT",
    "CoinName": "Crypto Tickets",
    "FullName": "Crypto Tickets (TKT)"
  },
  {
    "Symbol": "RHEA",
    "CoinName": "Rhea",
    "FullName": "Rhea (RHEA)"
  },
  {
    "Symbol": "ART",
    "CoinName": "Maecenas",
    "FullName": "Maecenas (ART)"
  },
  {
    "Symbol": "DRT",
    "CoinName": "DomRaider",
    "FullName": "DomRaider (DRT)"
  },
  {
    "Symbol": "SNOV",
    "CoinName": "Snovio",
    "FullName": "Snovio (SNOV)"
  },
  {
    "Symbol": "MTN",
    "CoinName": "TrackNetToken",
    "FullName": "TrackNetToken (MTN)"
  },
  {
    "Symbol": "STOCKBET",
    "CoinName": "StockBet",
    "FullName": "StockBet (STOCKBET)"
  },
  {
    "Symbol": "PLM",
    "CoinName": "Algo.Land",
    "FullName": "Algo.Land (PLM)"
  },
  {
    "Symbol": "SALT",
    "CoinName": "Salt Lending",
    "FullName": "Salt Lending (SALT)"
  },
  {
    "Symbol": "SND",
    "CoinName": "Sandcoin",
    "FullName": "Sandcoin (SND)"
  },
  {
    "Symbol": "XP",
    "CoinName": "Experience Points",
    "FullName": "Experience Points (XP)"
  },
  {
    "Symbol": "LRC",
    "CoinName": "Loopring",
    "FullName": "Loopring (LRC)"
  },
  {
    "Symbol": "GLA",
    "CoinName": "Gladius",
    "FullName": "Gladius (GLA)"
  },
  {
    "Symbol": "ZNA",
    "CoinName": "Zenome",
    "FullName": "Zenome (ZNA)"
  },
  {
    "Symbol": "EZM",
    "CoinName": "EZMarket",
    "FullName": "EZMarket (EZM)"
  },
  {
    "Symbol": "POLL",
    "CoinName": "ClearPoll",
    "FullName": "ClearPoll (POLL)"
  },
  {
    "Symbol": "MTK",
    "CoinName": "Moya Token",
    "FullName": "Moya Token (MTK)"
  },
  {
    "Symbol": "CAS",
    "CoinName": "Cashaa",
    "FullName": "Cashaa (CAS)"
  },
  {
    "Symbol": "MAT",
    "CoinName": "MiniApps",
    "FullName": "MiniApps (MAT)"
  },
  {
    "Symbol": "GJC",
    "CoinName": "Global Jobcoin",
    "FullName": "Global Jobcoin (GJC)"
  },
  {
    "Symbol": "WIC",
    "CoinName": "Wi Coin",
    "FullName": "Wi Coin (WIC)"
  },
  {
    "Symbol": "WEB",
    "CoinName": "Webcoin",
    "FullName": "Webcoin (WEB)"
  },
  {
    "Symbol": "WAND",
    "CoinName": "WandX",
    "FullName": "WandX (WAND)"
  },
  {
    "Symbol": "ELIX",
    "CoinName": "Elixir",
    "FullName": "Elixir (ELIX)"
  },
  {
    "Symbol": "EBTC",
    "CoinName": "eBitcoin",
    "FullName": "eBitcoin (EBTC)"
  },
  {
    "Symbol": "HAC",
    "CoinName": "Hackspace Capital",
    "FullName": "Hackspace Capital (HAC)"
  },
  {
    "Symbol": "YOYOW",
    "CoinName": "Yoyow",
    "FullName": "Yoyow (YOYOW)"
  },
  {
    "Symbol": "REC",
    "CoinName": "Regalcoin",
    "FullName": "Regalcoin (REC)"
  },
  {
    "Symbol": "BIS",
    "CoinName": "Bismuth",
    "FullName": "Bismuth (BIS)"
  },
  {
    "Symbol": "OPP",
    "CoinName": "Opporty",
    "FullName": "Opporty (OPP)"
  },
  {
    "Symbol": "ROCK2",
    "CoinName": "Ice Rock Mining",
    "FullName": "Ice Rock Mining (ROCK2)"
  },
  {
    "Symbol": "EARTH",
    "CoinName": "Earth Token",
    "FullName": "Earth Token (EARTH)"
  },
  {
    "Symbol": "VSX",
    "CoinName": "Vsync",
    "FullName": "Vsync (VSX)"
  },
  {
    "Symbol": "FLASH",
    "CoinName": "FLASH coin",
    "FullName": "FLASH coin (FLASH)"
  },
  {
    "Symbol": "GRFT",
    "CoinName": "Graft Blockchain",
    "FullName": "Graft Blockchain (GRFT)"
  },
  {
    "Symbol": "BTCZ",
    "CoinName": "BitcoinZ",
    "FullName": "BitcoinZ (BTCZ)"
  },
  {
    "Symbol": "CZC",
    "CoinName": "Crazy Coin",
    "FullName": "Crazy Coin (CZC)"
  },
  {
    "Symbol": "PPP",
    "CoinName": "PayPie",
    "FullName": "PayPie (PPP)"
  },
  {
    "Symbol": "GUESS",
    "CoinName": "Peerguess",
    "FullName": "Peerguess (GUESS)"
  },
  {
    "Symbol": "CAN",
    "CoinName": "CanYaCoin",
    "FullName": "CanYaCoin (CAN)"
  },
  {
    "Symbol": "ETP",
    "CoinName": "Metaverse",
    "FullName": "Metaverse (ETP)"
  },
  {
    "Symbol": "CIX",
    "CoinName": "Cryptonetix",
    "FullName": "Cryptonetix (CIX)"
  },
  {
    "Symbol": "ERT",
    "CoinName": "Esports.com",
    "FullName": "Esports.com (ERT)"
  },
  {
    "Symbol": "FLIK",
    "CoinName": "FLiK",
    "FullName": "FLiK (FLIK)"
  },
  {
    "Symbol": "TRIP",
    "CoinName": "Trippki",
    "FullName": "Trippki (TRIP)"
  },
  {
    "Symbol": "MBT",
    "CoinName": "Multibot",
    "FullName": "Multibot (MBT)"
  },
  {
    "Symbol": "JVY",
    "CoinName": "Javvy",
    "FullName": "Javvy (JVY)"
  },
  {
    "Symbol": "ALIS",
    "CoinName": "ALISmedia",
    "FullName": "ALISmedia (ALIS)"
  },
  {
    "Symbol": "LEV",
    "CoinName": "Leverj",
    "FullName": "Leverj (LEV)"
  },
  {
    "Symbol": "ARBI",
    "CoinName": "Arbi",
    "FullName": "Arbi (ARBI)"
  },
  {
    "Symbol": "REQ",
    "CoinName": "Request Network",
    "FullName": "Request Network (REQ)"
  },
  {
    "Symbol": "ARN",
    "CoinName": "Aeron",
    "FullName": "Aeron (ARN)"
  },
  {
    "Symbol": "DAT",
    "CoinName": "Datum",
    "FullName": "Datum (DAT)"
  },
  {
    "Symbol": "VIBE",
    "CoinName": "VIBEHub",
    "FullName": "VIBEHub (VIBE)"
  },
  {
    "Symbol": "ROK",
    "CoinName": "Rockchain",
    "FullName": "Rockchain (ROK)"
  },
  {
    "Symbol": "XRED",
    "CoinName": "X Real Estate Development",
    "FullName": "X Real Estate Development (XRED)"
  },
  {
    "Symbol": "DAY",
    "CoinName": "Chronologic",
    "FullName": "Chronologic (DAY)"
  },
  {
    "Symbol": "AST",
    "CoinName": "AirSwap",
    "FullName": "AirSwap (AST)"
  },
  {
    "Symbol": "FLP",
    "CoinName": "Gameflip",
    "FullName": "Gameflip (FLP)"
  },
  {
    "Symbol": "CND",
    "CoinName": "Cindicator",
    "FullName": "Cindicator (CND)"
  },
  {
    "Symbol": "VRP",
    "CoinName": "Prosense.tv",
    "FullName": "Prosense.tv (VRP)"
  },
  {
    "Symbol": "TZC",
    "CoinName": "TrezarCoin",
    "FullName": "TrezarCoin (TZC)"
  },
  {
    "Symbol": "MCI",
    "CoinName": "Musiconomi",
    "FullName": "Musiconomi (MCI)"
  },
  {
    "Symbol": "COV",
    "CoinName": "Covesting",
    "FullName": "Covesting (COV)"
  },
  {
    "Symbol": "AIR",
    "CoinName": "AirToken",
    "FullName": "AirToken (AIR)"
  },
  {
    "Symbol": "FUJIN",
    "CoinName": "Fujinto",
    "FullName": "Fujinto (FUJIN)"
  },
  {
    "Symbol": "KOLION",
    "CoinName": "Kolion",
    "FullName": "Kolion (KOLION)"
  },
  {
    "Symbol": "WILD",
    "CoinName": "Wild Crypto",
    "FullName": "Wild Crypto (WILD)"
  },
  {
    "Symbol": "ELTC2",
    "CoinName": "eLTC",
    "FullName": "eLTC (ELTC2)"
  },
  {
    "Symbol": "ILCT",
    "CoinName": "ILCoin Token",
    "FullName": "ILCoin Token (ILCT)"
  },
  {
    "Symbol": "POWR",
    "CoinName": "Power Ledger",
    "FullName": "Power Ledger (POWR)"
  },
  {
    "Symbol": "C20",
    "CoinName": "Crypto20",
    "FullName": "Crypto20 (C20)"
  },
  {
    "Symbol": "RYZ",
    "CoinName": "Anryze",
    "FullName": "Anryze (RYZ)"
  },
  {
    "Symbol": "ELM",
    "CoinName": "Elements",
    "FullName": "Elements (ELM)"
  },
  {
    "Symbol": "TER",
    "CoinName": "TerraNovaCoin",
    "FullName": "TerraNovaCoin (TER)"
  },
  {
    "Symbol": "BQ",
    "CoinName": "Bitqy",
    "FullName": "Bitqy (BQ)"
  },
  {
    "Symbol": "CLOUT",
    "CoinName": "Clout",
    "FullName": "Clout (CLOUT)"
  },
  {
    "Symbol": "EVR",
    "CoinName": "Everus",
    "FullName": "Everus (EVR)"
  },
  {
    "Symbol": "TOA",
    "CoinName": "TOA Coin",
    "FullName": "TOA Coin (TOA)"
  },
  {
    "Symbol": "MNZ",
    "CoinName": "Monaize",
    "FullName": "Monaize (MNZ)"
  },
  {
    "Symbol": "VIVO",
    "CoinName": "VIVO Coin",
    "FullName": "VIVO Coin (VIVO)"
  },
  {
    "Symbol": "MDA",
    "CoinName": "Moeda",
    "FullName": "Moeda (MDA)"
  },
  {
    "Symbol": "ZSC",
    "CoinName": "Zeusshield",
    "FullName": "Zeusshield (ZSC)"
  },
  {
    "Symbol": "AURS",
    "CoinName": "Aureus",
    "FullName": "Aureus (AURS)"
  },
  {
    "Symbol": "CAG",
    "CoinName": "Change",
    "FullName": "Change (CAG)"
  },
  {
    "Symbol": "PKT",
    "CoinName": "Playkey",
    "FullName": "Playkey (PKT)"
  },
  {
    "Symbol": "ECHT",
    "CoinName": "e-Chat",
    "FullName": "e-Chat (ECHT)"
  },
  {
    "Symbol": "INXT",
    "CoinName": "Internxt",
    "FullName": "Internxt (INXT)"
  },
  {
    "Symbol": "ATS",
    "CoinName": "Authorship",
    "FullName": "Authorship (ATS)"
  },
  {
    "Symbol": "RGC",
    "CoinName": "RG Coin",
    "FullName": "RG Coin (RGC)"
  },
  {
    "Symbol": "EBET",
    "CoinName": "EthBet",
    "FullName": "EthBet (EBET)"
  },
  {
    "Symbol": "R",
    "CoinName": "Revain",
    "FullName": "Revain (R)"
  },
  {
    "Symbol": "MOD",
    "CoinName": "Modum",
    "FullName": "Modum (MOD)"
  },
  {
    "Symbol": "BITCM",
    "CoinName": "Bitcomo",
    "FullName": "Bitcomo (BITCM)"
  },
  {
    "Symbol": "CPAY",
    "CoinName": "CryptoPay",
    "FullName": "CryptoPay (CPAY)"
  },
  {
    "Symbol": "RUP",
    "CoinName": "Rupee",
    "FullName": "Rupee (RUP)"
  },
  {
    "Symbol": "BON",
    "CoinName": "Bonpay",
    "FullName": "Bonpay (BON)"
  },
  {
    "Symbol": "APPC",
    "CoinName": "AppCoins",
    "FullName": "AppCoins (APPC)"
  },
  {
    "Symbol": "WHL",
    "CoinName": "WhaleCoin",
    "FullName": "WhaleCoin (WHL)"
  },
  {
    "Symbol": "UP",
    "CoinName": "UpToken",
    "FullName": "UpToken (UP)"
  },
  {
    "Symbol": "ETG",
    "CoinName": "Ethereum Gold",
    "FullName": "Ethereum Gold (ETG)"
  },
  {
    "Symbol": "RNDR",
    "CoinName": "Render Token",
    "FullName": "Render Token (RNDR)"
  },
  {
    "Symbol": "EDDIE",
    "CoinName": "Eddie coin",
    "FullName": "Eddie coin (EDDIE)"
  },
  {
    "Symbol": "SOMA",
    "CoinName": "Soma",
    "FullName": "Soma (SOMA)"
  },
  {
    "Symbol": "NAMO",
    "CoinName": "NamoCoin",
    "FullName": "NamoCoin (NAMO)"
  },
  {
    "Symbol": "KCS",
    "CoinName": "Kucoin",
    "FullName": "Kucoin (KCS)"
  },
  {
    "Symbol": "GAT",
    "CoinName": "GATCOIN",
    "FullName": "GATCOIN (GAT)"
  },
  {
    "Symbol": "BLUE",
    "CoinName": "Ethereum Blue",
    "FullName": "Ethereum Blue (BLUE)"
  },
  {
    "Symbol": "FLLW",
    "CoinName": "Follow Coin",
    "FullName": "Follow Coin (FLLW)"
  },
  {
    "Symbol": "WYR",
    "CoinName": "Wyrify",
    "FullName": "Wyrify (WYR)"
  },
  {
    "Symbol": "VZT",
    "CoinName": "Vezt",
    "FullName": "Vezt (VZT)"
  },
  {
    "Symbol": "INDI",
    "CoinName": "IndiCoin",
    "FullName": "IndiCoin (INDI)"
  },
  {
    "Symbol": "LUX",
    "CoinName": "LUXCoin",
    "FullName": "LUXCoin (LUX)"
  },
  {
    "Symbol": "BAR",
    "CoinName": "TBIS token",
    "FullName": "TBIS token (BAR)"
  },
  {
    "Symbol": "ECASH",
    "CoinName": "Ethereum Cash",
    "FullName": "Ethereum Cash (ECASH)"
  },
  {
    "Symbol": "WPR",
    "CoinName": "WePower",
    "FullName": "WePower (WPR)"
  },
  {
    "Symbol": "DRGN",
    "CoinName": "Dragonchain",
    "FullName": "Dragonchain (DRGN)"
  },
  {
    "Symbol": "ODMC",
    "CoinName": "ODMCoin",
    "FullName": "ODMCoin (ODMC)"
  },
  {
    "Symbol": "BRAT",
    "CoinName": "BROTHER",
    "FullName": "BROTHER (BRAT)"
  },
  {
    "Symbol": "DTR",
    "CoinName": "Dynamic Trading Rights",
    "FullName": "Dynamic Trading Rights (DTR)"
  },
  {
    "Symbol": "TKR",
    "CoinName": "CryptoInsight",
    "FullName": "CryptoInsight (TKR)"
  },
  {
    "Symbol": "KEY",
    "CoinName": "SelfKey",
    "FullName": "SelfKey (KEY)"
  },
  {
    "Symbol": "ELITE",
    "CoinName": "EthereumLite",
    "FullName": "EthereumLite (ELITE)"
  },
  {
    "Symbol": "DOV",
    "CoinName": "DOVU",
    "FullName": "DOVU (DOV)"
  },
  {
    "Symbol": "REA",
    "CoinName": "Realisto",
    "FullName": "Realisto (REA)"
  },
  {
    "Symbol": "AVE",
    "CoinName": "Avesta",
    "FullName": "Avesta (AVE)"
  },
  {
    "Symbol": "XNN",
    "CoinName": "Xenon",
    "FullName": "Xenon (XNN)"
  },
  {
    "Symbol": "BTDX",
    "CoinName": "Bitcloud 2.0",
    "FullName": "Bitcloud 2.0 (BTDX)"
  },
  {
    "Symbol": "LOAN",
    "CoinName": "Lendoit",
    "FullName": "Lendoit (LOAN)"
  },
  {
    "Symbol": "ZAB",
    "CoinName": "ZABERcoin",
    "FullName": "ZABERcoin (ZAB)"
  },
  {
    "Symbol": "BT1",
    "CoinName": "Bitfinex Bitcoin Future",
    "FullName": "Bitfinex Bitcoin Future (BT1)"
  },
  {
    "Symbol": "BT2",
    "CoinName": "Bitcoin SegWit2X",
    "FullName": "Bitcoin SegWit2X (BT2)"
  },
  {
    "Symbol": "SHP",
    "CoinName": "Sharpe Capital",
    "FullName": "Sharpe Capital (SHP)"
  },
  {
    "Symbol": "JCR",
    "CoinName": "Jincor",
    "FullName": "Jincor (JCR)"
  },
  {
    "Symbol": "XSB",
    "CoinName": "Extreme Sportsbook",
    "FullName": "Extreme Sportsbook (XSB)"
  },
  {
    "Symbol": "EBST",
    "CoinName": "eBoost",
    "FullName": "eBoost (EBST)"
  },
  {
    "Symbol": "AID",
    "CoinName": "AidCoin",
    "FullName": "AidCoin (AID)"
  },
  {
    "Symbol": "BLHC",
    "CoinName": "BlackholeCoin",
    "FullName": "BlackholeCoin (BLHC)"
  },
  {
    "Symbol": "OST",
    "CoinName": "Simple Token",
    "FullName": "Simple Token (OST)"
  },
  {
    "Symbol": "DATA",
    "CoinName": "Streamr DATAcoin",
    "FullName": "Streamr DATAcoin (DATA)"
  },
  {
    "Symbol": "UGC",
    "CoinName": "ugChain",
    "FullName": "ugChain (UGC)"
  },
  {
    "Symbol": "PLAY",
    "CoinName": "HEROcoin",
    "FullName": "HEROcoin (PLAY)"
  },
  {
    "Symbol": "PURE",
    "CoinName": "Pure",
    "FullName": "Pure (PURE)"
  },
  {
    "Symbol": "CLD",
    "CoinName": "Cloud",
    "FullName": "Cloud (CLD)"
  },
  {
    "Symbol": "OTN",
    "CoinName": "Open Trading Network",
    "FullName": "Open Trading Network (OTN)"
  },
  {
    "Symbol": "POS",
    "CoinName": "PoSToken",
    "FullName": "PoSToken (POS)"
  },
  {
    "Symbol": "REBL",
    "CoinName": "REBL",
    "FullName": "REBL (REBL)"
  },
  {
    "Symbol": "NEOG",
    "CoinName": "NEO Gold",
    "FullName": "NEO Gold (NEOG)"
  },
  {
    "Symbol": "EXN",
    "CoinName": "ExchangeN",
    "FullName": "ExchangeN (EXN)"
  },
  {
    "Symbol": "INS",
    "CoinName": "Insolar",
    "FullName": "Insolar (INS)"
  },
  {
    "Symbol": "TRCT",
    "CoinName": "Tracto",
    "FullName": "Tracto (TRCT)"
  },
  {
    "Symbol": "UKG",
    "CoinName": "UnikoinGold",
    "FullName": "UnikoinGold (UKG)"
  },
  {
    "Symbol": "BTCRED",
    "CoinName": "Bitcoin Red",
    "FullName": "Bitcoin Red (BTCRED)"
  },
  {
    "Symbol": "CPEX",
    "CoinName": "CoinPulseToken",
    "FullName": "CoinPulseToken (CPEX)"
  },
  {
    "Symbol": "JTX",
    "CoinName": "Project J",
    "FullName": "Project J (JTX)"
  },
  {
    "Symbol": "AXT",
    "CoinName": "AIX",
    "FullName": "AIX (AXT)"
  },
  {
    "Symbol": "RDNN",
    "CoinName": "Raiden Network",
    "FullName": "Raiden Network (RDNN)"
  },
  {
    "Symbol": "NEU",
    "CoinName": "Neumark",
    "FullName": "Neumark (NEU)"
  },
  {
    "Symbol": "RUPX",
    "CoinName": "Rupaya",
    "FullName": "Rupaya (RUPX)"
  },
  {
    "Symbol": "BDR",
    "CoinName": "BlueDragon",
    "FullName": "BlueDragon (BDR)"
  },
  {
    "Symbol": "TIOX",
    "CoinName": "TIOx",
    "FullName": "TIOx (TIOX)"
  },
  {
    "Symbol": "HNCN",
    "CoinName": "Huncoin",
    "FullName": "Huncoin (HNCN)"
  },
  {
    "Symbol": "MADC",
    "CoinName": "MadCoin",
    "FullName": "MadCoin (MADC)"
  },
  {
    "Symbol": "INN",
    "CoinName": "Innova",
    "FullName": "Innova (INN)"
  },
  {
    "Symbol": "HST",
    "CoinName": "Decision Token",
    "FullName": "Decision Token (HST)"
  },
  {
    "Symbol": "BCPT",
    "CoinName": "BlockMason Credit Protocol",
    "FullName": "BlockMason Credit Protocol (BCPT)"
  },
  {
    "Symbol": "BDL",
    "CoinName": "Bitdeal",
    "FullName": "Bitdeal (BDL)"
  },
  {
    "Symbol": "CMS",
    "CoinName": "COMSA",
    "FullName": "COMSA (CMS)"
  },
  {
    "Symbol": "XBL",
    "CoinName": "Billionaire Token",
    "FullName": "Billionaire Token (XBL)"
  },
  {
    "Symbol": "ZEPH",
    "CoinName": "Zeph",
    "FullName": "Zeph (ZEPH)"
  },
  {
    "Symbol": "ATFS",
    "CoinName": "ATFS Project",
    "FullName": "ATFS Project (ATFS)"
  },
  {
    "Symbol": "GES",
    "CoinName": "Galaxy eSolutions",
    "FullName": "Galaxy eSolutions (GES)"
  },
  {
    "Symbol": "PHORE",
    "CoinName": "Phore",
    "FullName": "Phore (PHORE)"
  },
  {
    "Symbol": "LCASH",
    "CoinName": "LitecoinCash",
    "FullName": "LitecoinCash (LCASH)"
  },
  {
    "Symbol": "CFD",
    "CoinName": "Confido",
    "FullName": "Confido (CFD)"
  },
  {
    "Symbol": "SPHTX",
    "CoinName": "SophiaTX",
    "FullName": "SophiaTX (SPHTX)"
  },
  {
    "Symbol": "PLC",
    "CoinName": "PlusCoin",
    "FullName": "PlusCoin (PLC)"
  },
  {
    "Symbol": "SRN",
    "CoinName": "SirinLabs",
    "FullName": "SirinLabs (SRN)"
  },
  {
    "Symbol": "WSC",
    "CoinName": "WiserCoin",
    "FullName": "WiserCoin (WSC)"
  },
  {
    "Symbol": "DBET",
    "CoinName": "Decent.bet",
    "FullName": "Decent.bet (DBET)"
  },
  {
    "Symbol": "XGOX",
    "CoinName": "Go!",
    "FullName": "Go! (xGOx)"
  },
  {
    "Symbol": "NEWB",
    "CoinName": "Newbium",
    "FullName": "Newbium (NEWB)"
  },
  {
    "Symbol": "LIFE",
    "CoinName": "LIFE",
    "FullName": "LIFE (LIFE)"
  },
  {
    "Symbol": "RMC",
    "CoinName": "Russian Mining Coin",
    "FullName": "Russian Mining Coin (RMC)"
  },
  {
    "Symbol": "CREDO",
    "CoinName": "Credo",
    "FullName": "Credo (CREDO)"
  },
  {
    "Symbol": "MSR",
    "CoinName": "Masari",
    "FullName": "Masari (MSR)"
  },
  {
    "Symbol": "CJT",
    "CoinName": "ConnectJob Token",
    "FullName": "ConnectJob Token (CJT)"
  },
  {
    "Symbol": "EVN",
    "CoinName": "Envion",
    "FullName": "Envion (EVN)"
  },
  {
    "Symbol": "BNK",
    "CoinName": "Bankera",
    "FullName": "Bankera (BNK)"
  },
  {
    "Symbol": "BPL",
    "CoinName": "BlockPool",
    "FullName": "BlockPool (BPL)"
  },
  {
    "Symbol": "COIN",
    "CoinName": "Coin",
    "FullName": "Coin (COIN)"
  },
  {
    "Symbol": "ROCK",
    "CoinName": "RocketCoin",
    "FullName": "RocketCoin (ROCK)"
  },
  {
    "Symbol": "DRXNE",
    "CoinName": "Droxne",
    "FullName": "Droxne (DRXNE)"
  },
  {
    "Symbol": "SKR",
    "CoinName": "Sakuracoin",
    "FullName": "Sakuracoin (SKR)"
  },
  {
    "Symbol": "GRID",
    "CoinName": "Grid+",
    "FullName": "Grid+ (GRID)"
  },
  {
    "Symbol": "XPTX",
    "CoinName": "PlatinumBAR",
    "FullName": "PlatinumBAR (XPTX)"
  },
  {
    "Symbol": "GVT",
    "CoinName": "Genesis Vision",
    "FullName": "Genesis Vision (GVT)"
  },
  {
    "Symbol": "ETK",
    "CoinName": "Energi Token",
    "FullName": "Energi Token (ETK)"
  },
  {
    "Symbol": "ASTRO",
    "CoinName": "Astronaut",
    "FullName": "Astronaut (ASTRO)"
  },
  {
    "Symbol": "GMT",
    "CoinName": "Mercury Protocol",
    "FullName": "Mercury Protocol (GMT)"
  },
  {
    "Symbol": "EMPH",
    "CoinName": "Emphy",
    "FullName": "Emphy (EMPH)"
  },
  {
    "Symbol": "SOAR",
    "CoinName": "Soarcoin",
    "FullName": "Soarcoin (SOAR)"
  },
  {
    "Symbol": "EXY",
    "CoinName": "Experty",
    "FullName": "Experty (EXY)"
  },
  {
    "Symbol": "ISH",
    "CoinName": "Interstellar Holdings",
    "FullName": "Interstellar Holdings (ISH)"
  },
  {
    "Symbol": "CRDS",
    "CoinName": "Credits",
    "FullName": "Credits (CRDS)"
  },
  {
    "Symbol": "VIU",
    "CoinName": "Viuly",
    "FullName": "Viuly (VIU)"
  },
  {
    "Symbol": "SCRM",
    "CoinName": "Scorum",
    "FullName": "Scorum (SCRM)"
  },
  {
    "Symbol": "DBR",
    "CoinName": "Düber",
    "FullName": "Düber (DBR)"
  },
  {
    "Symbol": "GFT",
    "CoinName": "Giftcoin",
    "FullName": "Giftcoin (GFT)"
  },
  {
    "Symbol": "STAC",
    "CoinName": "STAC",
    "FullName": "STAC (STAC)"
  },
  {
    "Symbol": "QSP",
    "CoinName": "Quantstamp",
    "FullName": "Quantstamp (QSP)"
  },
  {
    "Symbol": "RIPT",
    "CoinName": "RiptideCoin",
    "FullName": "RiptideCoin (RIPT)"
  },
  {
    "Symbol": "BBT",
    "CoinName": "BitBoost",
    "FullName": "BitBoost (BBT)"
  },
  {
    "Symbol": "GBX",
    "CoinName": "GoByte",
    "FullName": "GoByte (GBX)"
  },
  {
    "Symbol": "CSTL",
    "CoinName": "Castle",
    "FullName": "Castle (CSTL)"
  },
  {
    "Symbol": "ICC",
    "CoinName": "Insta Cash Coin",
    "FullName": "Insta Cash Coin (ICC)"
  },
  {
    "Symbol": "JNT",
    "CoinName": "Jibrel Network Token",
    "FullName": "Jibrel Network Token (JNT)"
  },
  {
    "Symbol": "QASH",
    "CoinName": "Quoine Liquid",
    "FullName": "Quoine Liquid (QASH)"
  },
  {
    "Symbol": "ALQO",
    "CoinName": "Alqo",
    "FullName": "Alqo (ALQO)"
  },
  {
    "Symbol": "KNGN",
    "CoinName": "KingN Coin",
    "FullName": "KingN Coin (KNGN)"
  },
  {
    "Symbol": "TRIA",
    "CoinName": "Triaconta",
    "FullName": "Triaconta (TRIA)"
  },
  {
    "Symbol": "PBL",
    "CoinName": "Pebbles",
    "FullName": "Pebbles (PBL)"
  },
  {
    "Symbol": "MAG",
    "CoinName": "Magnet",
    "FullName": "Magnet (MAG)"
  },
  {
    "Symbol": "STEX",
    "CoinName": "STEX",
    "FullName": "STEX (STEX)"
  },
  {
    "Symbol": "UFR",
    "CoinName": "Upfiring",
    "FullName": "Upfiring (UFR)"
  },
  {
    "Symbol": "LOCI",
    "CoinName": "LociCoin",
    "FullName": "LociCoin (LOCI)"
  },
  {
    "Symbol": "TAU",
    "CoinName": "Lamden Tau",
    "FullName": "Lamden Tau (TAU)"
  },
  {
    "Symbol": "LAB",
    "CoinName": "Labrys",
    "FullName": "Labrys (LAB)"
  },
  {
    "Symbol": "DEB",
    "CoinName": "Debitum Token",
    "FullName": "Debitum Token (DEB)"
  },
  {
    "Symbol": "FLIXX",
    "CoinName": "Flixxo",
    "FullName": "Flixxo (FLIXX)"
  },
  {
    "Symbol": "FRD",
    "CoinName": "Farad",
    "FullName": "Farad (FRD)"
  },
  {
    "Symbol": "PFR",
    "CoinName": "PayFair",
    "FullName": "PayFair (PFR)"
  },
  {
    "Symbol": "LDM",
    "CoinName": "Ludum token",
    "FullName": "Ludum token (LDM)"
  },
  {
    "Symbol": "LTG",
    "CoinName": "LiteCoin Gold",
    "FullName": "LiteCoin Gold (LTG)"
  },
  {
    "Symbol": "STP",
    "CoinName": "StashPay",
    "FullName": "StashPay (STP)"
  },
  {
    "Symbol": "SPANK",
    "CoinName": "SpankChain",
    "FullName": "SpankChain (SPANK)"
  },
  {
    "Symbol": "WISH",
    "CoinName": "MyWish",
    "FullName": "MyWish (WISH)"
  },
  {
    "Symbol": "AERM",
    "CoinName": "Aerium",
    "FullName": "Aerium (AERM)"
  },
  {
    "Symbol": "PLX",
    "CoinName": "PlexCoin",
    "FullName": "PlexCoin (PLX)"
  },
  {
    "Symbol": "NIO",
    "CoinName": "Autonio",
    "FullName": "Autonio (NIO)"
  },
  {
    "Symbol": "ETHB",
    "CoinName": "EtherBTC",
    "FullName": "EtherBTC (ETHB)"
  },
  {
    "Symbol": "CDX",
    "CoinName": "CDX Network ",
    "FullName": "CDX Network  (CDX)"
  },
  {
    "Symbol": "FOOD",
    "CoinName": "FoodCoin",
    "FullName": "FoodCoin (FOOD)"
  },
  {
    "Symbol": "DEC",
    "CoinName": "Darico",
    "FullName": "Darico (DEC)"
  },
  {
    "Symbol": "VOT",
    "CoinName": "Votecoin",
    "FullName": "Votecoin (VOT)"
  },
  {
    "Symbol": "UQC",
    "CoinName": "Uquid Coin",
    "FullName": "Uquid Coin (UQC)"
  },
  {
    "Symbol": "LEND",
    "CoinName": "EthLend",
    "FullName": "EthLend (LEND)"
  },
  {
    "Symbol": "SETH",
    "CoinName": "Sether",
    "FullName": "Sether (SETH)"
  },
  {
    "Symbol": "ABYSS",
    "CoinName": "The Abyss",
    "FullName": "The Abyss (ABYSS)"
  },
  {
    "Symbol": "XSH",
    "CoinName": "SHIELD",
    "FullName": "SHIELD (XSH)"
  },
  {
    "Symbol": "GEA",
    "CoinName": "Goldea",
    "FullName": "Goldea (GEA)"
  },
  {
    "Symbol": "BCO",
    "CoinName": "BridgeCoin",
    "FullName": "BridgeCoin (BCO)"
  },
  {
    "Symbol": "DSR",
    "CoinName": "Desire",
    "FullName": "Desire (DSR)"
  },
  {
    "Symbol": "BDG",
    "CoinName": "BitDegree",
    "FullName": "BitDegree (BDG)"
  },
  {
    "Symbol": "ONG",
    "CoinName": "SoMee.Social",
    "FullName": "SoMee.Social (ONG)"
  },
  {
    "Symbol": "PRL",
    "CoinName": "Oyster Pearl",
    "FullName": "Oyster Pearl (PRL)"
  },
  {
    "Symbol": "BTCM",
    "CoinName": "BTCMoon",
    "FullName": "BTCMoon (BTCM)"
  },
  {
    "Symbol": "ETBT",
    "CoinName": "Ethereum Black",
    "FullName": "Ethereum Black (ETBT)"
  },
  {
    "Symbol": "ZCG",
    "CoinName": "ZCashGOLD",
    "FullName": "ZCashGOLD (ZCG)"
  },
  {
    "Symbol": "MUT",
    "CoinName": "Mutual Coin",
    "FullName": "Mutual Coin (MUT)"
  },
  {
    "Symbol": "DIVX",
    "CoinName": "Divi Exchange Token",
    "FullName": "Divi Exchange Token (DIVX)"
  },
  {
    "Symbol": "CNBC",
    "CoinName": "Cash & Back Coin",
    "FullName": "Cash & Back Coin (CNBC)"
  },
  {
    "Symbol": "XUN",
    "CoinName": "UltraNote",
    "FullName": "UltraNote (XUN)"
  },
  {
    "Symbol": "RFL",
    "CoinName": "RAFL",
    "FullName": "RAFL (RFL)"
  },
  {
    "Symbol": "COFI",
    "CoinName": "CoinFi",
    "FullName": "CoinFi (COFI)"
  },
  {
    "Symbol": "ELTCOIN",
    "CoinName": "ELTCOIN",
    "FullName": "ELTCOIN (ELTCOIN)"
  },
  {
    "Symbol": "GRX",
    "CoinName": "Gold Reward Token",
    "FullName": "Gold Reward Token (GRX)"
  },
  {
    "Symbol": "NTK",
    "CoinName": "Neurotoken",
    "FullName": "Neurotoken (NTK)"
  },
  {
    "Symbol": "ERO",
    "CoinName": "Eroscoin",
    "FullName": "Eroscoin (ERO)"
  },
  {
    "Symbol": "CMT",
    "CoinName": "CyberMiles",
    "FullName": "CyberMiles (CMT)"
  },
  {
    "Symbol": "RLX",
    "CoinName": "Relex",
    "FullName": "Relex (RLX)"
  },
  {
    "Symbol": "CWV",
    "CoinName": "CryptoWave",
    "FullName": "CryptoWave (CWV)"
  },
  {
    "Symbol": "ACHN",
    "CoinName": "Achain",
    "FullName": "Achain (ACHN)"
  },
  {
    "Symbol": "NRO",
    "CoinName": "Neuro",
    "FullName": "Neuro (NRO)"
  },
  {
    "Symbol": "SEND",
    "CoinName": "Social Send",
    "FullName": "Social Send (SEND)"
  },
  {
    "Symbol": "GLT",
    "CoinName": "GlobalToken",
    "FullName": "GlobalToken (GLT)"
  },
  {
    "Symbol": "X8X",
    "CoinName": "X8Currency",
    "FullName": "X8Currency (X8X)"
  },
  {
    "Symbol": "COAL",
    "CoinName": "BitCoal",
    "FullName": "BitCoal (COAL)"
  },
  {
    "Symbol": "DAXX",
    "CoinName": "DaxxCoin",
    "FullName": "DaxxCoin (DAXX)"
  },
  {
    "Symbol": "BWK",
    "CoinName": "Bulwark",
    "FullName": "Bulwark (BWK)"
  },
  {
    "Symbol": "FNTB",
    "CoinName": "FinTab",
    "FullName": "FinTab (FNTB)"
  },
  {
    "Symbol": "XMRG",
    "CoinName": "Monero Gold",
    "FullName": "Monero Gold (XMRG)"
  },
  {
    "Symbol": "BTCE",
    "CoinName": "EthereumBitcoin",
    "FullName": "EthereumBitcoin (BTCE)"
  },
  {
    "Symbol": "FYP",
    "CoinName": "FlypMe",
    "FullName": "FlypMe (FYP)"
  },
  {
    "Symbol": "BOXY",
    "CoinName": "BoxyCoin",
    "FullName": "BoxyCoin (BOXY)"
  },
  {
    "Symbol": "NGC",
    "CoinName": "NagaCoin",
    "FullName": "NagaCoin (NGC)"
  },
  {
    "Symbol": "UTNP",
    "CoinName": "Universa",
    "FullName": "Universa (UTNP)"
  },
  {
    "Symbol": "EGAS",
    "CoinName": "ETHGAS",
    "FullName": "ETHGAS (EGAS)"
  },
  {
    "Symbol": "DPP",
    "CoinName": "Digital Assets Power Play",
    "FullName": "Digital Assets Power Play (DPP)"
  },
  {
    "Symbol": "ADB",
    "CoinName": "Adbank",
    "FullName": "Adbank (ADB)"
  },
  {
    "Symbol": "TGT",
    "CoinName": "TargetCoin",
    "FullName": "TargetCoin (TGT)"
  },
  {
    "Symbol": "BMT",
    "CoinName": "BMChain",
    "FullName": "BMChain (BMT)"
  },
  {
    "Symbol": "BIO",
    "CoinName": "Biocoin",
    "FullName": "Biocoin (BIO)"
  },
  {
    "Symbol": "MTRC",
    "CoinName": "ModulTrade",
    "FullName": "ModulTrade (MTRC)"
  },
  {
    "Symbol": "BTCL",
    "CoinName": "BTC Lite",
    "FullName": "BTC Lite (BTCL)"
  },
  {
    "Symbol": "PCN",
    "CoinName": "PeepCoin",
    "FullName": "PeepCoin (PCN)"
  },
  {
    "Symbol": "PYP",
    "CoinName": "PayPro",
    "FullName": "PayPro (PYP)"
  },
  {
    "Symbol": "CRED",
    "CoinName": "Verify",
    "FullName": "Verify (CRED)"
  },
  {
    "Symbol": "SBTC",
    "CoinName": "Super Bitcoin",
    "FullName": "Super Bitcoin (SBTC)"
  },
  {
    "Symbol": "KLKS",
    "CoinName": "Kalkulus",
    "FullName": "Kalkulus (KLKS)"
  },
  {
    "Symbol": "AC3",
    "CoinName": "AC3",
    "FullName": "AC3 (AC3)"
  },
  {
    "Symbol": "GTO",
    "CoinName": "GIFTO",
    "FullName": "GIFTO (GTO)"
  },
  {
    "Symbol": "TNB",
    "CoinName": "Time New Bank",
    "FullName": "Time New Bank (TNB)"
  },
  {
    "Symbol": "CHIPS",
    "CoinName": "CHIPS",
    "FullName": "CHIPS (CHIPS)"
  },
  {
    "Symbol": "HKN",
    "CoinName": "Hacken",
    "FullName": "Hacken (HKN)"
  },
  {
    "Symbol": "B2B",
    "CoinName": "B2BX",
    "FullName": "B2BX (B2B)"
  },
  {
    "Symbol": "LOCK",
    "CoinName": "LockTrip",
    "FullName": "LockTrip (LOCK)"
  },
  {
    "Symbol": "LTHN",
    "CoinName": "Lethean",
    "FullName": "Lethean (LTHN)"
  },
  {
    "Symbol": "SMT",
    "CoinName": "SmartMesh",
    "FullName": "SmartMesh (SMT)"
  },
  {
    "Symbol": "GER",
    "CoinName": "GermanCoin",
    "FullName": "GermanCoin (GER)"
  },
  {
    "Symbol": "LTCU",
    "CoinName": "LiteCoin Ultra",
    "FullName": "LiteCoin Ultra (LTCU)"
  },
  {
    "Symbol": "MGO",
    "CoinName": "MobileGo",
    "FullName": "MobileGo (MGO)"
  },
  {
    "Symbol": "BTCA",
    "CoinName": "Bitair",
    "FullName": "Bitair (BTCA)"
  },
  {
    "Symbol": "HQX",
    "CoinName": "HOQU",
    "FullName": "HOQU (HQX)"
  },
  {
    "Symbol": "ETF",
    "CoinName": "EthereumFog",
    "FullName": "EthereumFog (ETF)"
  },
  {
    "Symbol": "STAK",
    "CoinName": "Straks",
    "FullName": "Straks (STAK)"
  },
  {
    "Symbol": "BCOIN",
    "CoinName": "BannerCoin",
    "FullName": "BannerCoin (BCOIN)"
  },
  {
    "Symbol": "MEDIB",
    "CoinName": "MediBloc",
    "FullName": "MediBloc (MEDIB)"
  },
  {
    "Symbol": "CCOS",
    "CoinName": "CrowdCoinage",
    "FullName": "CrowdCoinage (CCOS)"
  },
  {
    "Symbol": "BNTY",
    "CoinName": "Bounty0x",
    "FullName": "Bounty0x (BNTY)"
  },
  {
    "Symbol": "BRD",
    "CoinName": "Bread token",
    "FullName": "Bread token (BRD)"
  },
  {
    "Symbol": "HAT",
    "CoinName": "Hawala.Exchange",
    "FullName": "Hawala.Exchange (HAT)"
  },
  {
    "Symbol": "ELF",
    "CoinName": "aelf",
    "FullName": "aelf (ELF)"
  },
  {
    "Symbol": "VLR",
    "CoinName": "Valorem",
    "FullName": "Valorem (VLR)"
  },
  {
    "Symbol": "CWX",
    "CoinName": "Crypto-X",
    "FullName": "Crypto-X (CWX)"
  },
  {
    "Symbol": "DBC",
    "CoinName": "DeepBrain Chain",
    "FullName": "DeepBrain Chain (DBC)"
  },
  {
    "Symbol": "ZP",
    "CoinName": "Zen Protocol",
    "FullName": "Zen Protocol (ZP)"
  },
  {
    "Symbol": "POP",
    "CoinName": "PopularCoin",
    "FullName": "PopularCoin (POP)"
  },
  {
    "Symbol": "CRC",
    "CoinName": "CrowdCoin",
    "FullName": "CrowdCoin (CRC)"
  },
  {
    "Symbol": "PNX",
    "CoinName": "PhantomX",
    "FullName": "PhantomX (PNX)"
  },
  {
    "Symbol": "BAS",
    "CoinName": "BitAsean",
    "FullName": "BitAsean (BAS)"
  },
  {
    "Symbol": "UTT",
    "CoinName": "United Traders Token",
    "FullName": "United Traders Token (UTT)"
  },
  {
    "Symbol": "HBC",
    "CoinName": "HomeBlockCoin",
    "FullName": "HomeBlockCoin (HBC)"
  },
  {
    "Symbol": "AMM",
    "CoinName": "MicroMoney",
    "FullName": "MicroMoney (AMM)"
  },
  {
    "Symbol": "XCPO",
    "CoinName": "Copico",
    "FullName": "Copico (XCPO)"
  },
  {
    "Symbol": "GET",
    "CoinName": "Guaranteed Entrance Token",
    "FullName": "Guaranteed Entrance Token (GET)"
  },
  {
    "Symbol": "ERC20",
    "CoinName": "Index ERC20",
    "FullName": "Index ERC20 (ERC20)"
  },
  {
    "Symbol": "ITC",
    "CoinName": "IoT Chain",
    "FullName": "IoT Chain (ITC)"
  },
  {
    "Symbol": "HTML",
    "CoinName": "HTML Coin",
    "FullName": "HTML Coin (HTML)"
  },
  {
    "Symbol": "GENE",
    "CoinName": "PARKGENE",
    "FullName": "PARKGENE (GENE)"
  },
  {
    "Symbol": "NMS",
    "CoinName": "Numus",
    "FullName": "Numus (NMS)"
  },
  {
    "Symbol": "PHO",
    "CoinName": "Photon",
    "FullName": "Photon (PHO)"
  },
  {
    "Symbol": "XTRA",
    "CoinName": "ExtraCredit",
    "FullName": "ExtraCredit (XTRA)"
  },
  {
    "Symbol": "NTWK",
    "CoinName": "Network Token",
    "FullName": "Network Token (NTWK)"
  },
  {
    "Symbol": "SUCR",
    "CoinName": "Sucre",
    "FullName": "Sucre (SUCR)"
  },
  {
    "Symbol": "GNX",
    "CoinName": "Genaro Network",
    "FullName": "Genaro Network (GNX)"
  },
  {
    "Symbol": "ACCO",
    "CoinName": "Accolade",
    "FullName": "Accolade (ACCO)"
  },
  {
    "Symbol": "BYTHER",
    "CoinName": "Bytether ",
    "FullName": "Bytether  (BYTHER)"
  },
  {
    "Symbol": "REM",
    "CoinName": "REMME",
    "FullName": "REMME (REM)"
  },
  {
    "Symbol": "TOK",
    "CoinName": "TokugawaCoin",
    "FullName": "TokugawaCoin (TOK)"
  },
  {
    "Symbol": "EREAL",
    "CoinName": "eREAL",
    "FullName": "eREAL (EREAL)"
  },
  {
    "Symbol": "CPN",
    "CoinName": "CompuCoin",
    "FullName": "CompuCoin (CPN)"
  },
  {
    "Symbol": "XFT",
    "CoinName": "Fantasy Cash",
    "FullName": "Fantasy Cash (XFT)"
  },
  {
    "Symbol": "QLC",
    "CoinName": "QLC Chain",
    "FullName": "QLC Chain (QLC)"
  },
  {
    "Symbol": "BTSE",
    "CoinName": "BitSerial",
    "FullName": "BitSerial (BTE*)"
  },
  {
    "Symbol": "OMGC",
    "CoinName": "OmiseGO Classic",
    "FullName": "OmiseGO Classic (OMGC)"
  },
  {
    "Symbol": "Q2C",
    "CoinName": "QubitCoin",
    "FullName": "QubitCoin (Q2C)"
  },
  {
    "Symbol": "BLT",
    "CoinName": "Bloom Token",
    "FullName": "Bloom Token (BLT)"
  },
  {
    "Symbol": "SPF",
    "CoinName": "SportyCo",
    "FullName": "SportyCo (SPF)"
  },
  {
    "Symbol": "TDS",
    "CoinName": "TokenDesk",
    "FullName": "TokenDesk (TDS)"
  },
  {
    "Symbol": "ORE",
    "CoinName": "Galactrum",
    "FullName": "Galactrum (ORE)"
  },
  {
    "Symbol": "SPK",
    "CoinName": "SparksPay",
    "FullName": "SparksPay (SPK)"
  },
  {
    "Symbol": "GOA",
    "CoinName": "GoaCoin",
    "FullName": "GoaCoin (GOA)"
  },
  {
    "Symbol": "FLS",
    "CoinName": "Fuloos Coin",
    "FullName": "Fuloos Coin (FLS)"
  },
  {
    "Symbol": "WAGE",
    "CoinName": "Digiwage",
    "FullName": "Digiwage (WAGE)"
  },
  {
    "Symbol": "GUN",
    "CoinName": "GunCoin",
    "FullName": "GunCoin (GUN)"
  },
  {
    "Symbol": "DFS",
    "CoinName": "Digital Fantasy Sports",
    "FullName": "Digital Fantasy Sports (DFS)"
  },
  {
    "Symbol": "POLIS",
    "CoinName": "PolisPay",
    "FullName": "PolisPay (POLIS)"
  },
  {
    "Symbol": "WELL",
    "CoinName": "Well",
    "FullName": "Well (WELL)"
  },
  {
    "Symbol": "FLOT",
    "CoinName": "FireLotto",
    "FullName": "FireLotto (FLOT)"
  },
  {
    "Symbol": "CL",
    "CoinName": "CoinLancer",
    "FullName": "CoinLancer (CL)"
  },
  {
    "Symbol": "SHND",
    "CoinName": "StrongHands",
    "FullName": "StrongHands (SHND)"
  },
  {
    "Symbol": "AUA",
    "CoinName": "ArubaCoin",
    "FullName": "ArubaCoin (AUA)"
  },
  {
    "Symbol": "DNN",
    "CoinName": "DNN Token",
    "FullName": "DNN Token (DNN)"
  },
  {
    "Symbol": "SAGA",
    "CoinName": "SagaCoin",
    "FullName": "SagaCoin (SAGA)"
  },
  {
    "Symbol": "TSL",
    "CoinName": "Energo",
    "FullName": "Energo (TSL)"
  },
  {
    "Symbol": "IRL",
    "CoinName": "IrishCoin",
    "FullName": "IrishCoin (IRL)"
  },
  {
    "Symbol": "BOT",
    "CoinName": "Bodhi",
    "FullName": "Bodhi (BOT)"
  },
  {
    "Symbol": "PMA",
    "CoinName": "PumaPay",
    "FullName": "PumaPay (PMA)"
  },
  {
    "Symbol": "TROLL",
    "CoinName": "Trollcoin",
    "FullName": "Trollcoin (TROLL)"
  },
  {
    "Symbol": "FORCEC",
    "CoinName": "Force Coin",
    "FullName": "Force Coin (FORCEC)"
  },
  {
    "Symbol": "SGR",
    "CoinName": "Sugar Exchange",
    "FullName": "Sugar Exchange (SGR)"
  },
  {
    "Symbol": "JET",
    "CoinName": "Jetcoin",
    "FullName": "Jetcoin (JET)"
  },
  {
    "Symbol": "MDS",
    "CoinName": "MediShares",
    "FullName": "MediShares (MDS)"
  },
  {
    "Symbol": "LCP",
    "CoinName": "Litecoin Plus",
    "FullName": "Litecoin Plus (LCP)"
  },
  {
    "Symbol": "GTC",
    "CoinName": "Game",
    "FullName": "Game (GTC)"
  },
  {
    "Symbol": "IETH",
    "CoinName": "iEthereum",
    "FullName": "iEthereum (IETH)"
  },
  {
    "Symbol": "TGCC",
    "CoinName": "TheGCCcoin",
    "FullName": "TheGCCcoin (TGCC)"
  },
  {
    "Symbol": "SDRN",
    "CoinName": "Senderon",
    "FullName": "Senderon (SDRN)"
  },
  {
    "Symbol": "INK",
    "CoinName": "Ink",
    "FullName": "Ink (INK)"
  },
  {
    "Symbol": "KBR",
    "CoinName": "Kubera Coin",
    "FullName": "Kubera Coin (KBR)"
  },
  {
    "Symbol": "MONK",
    "CoinName": "Monkey Project",
    "FullName": "Monkey Project (MONK)"
  },
  {
    "Symbol": "MGN",
    "CoinName": "MagnaCoin",
    "FullName": "MagnaCoin (MGN)"
  },
  {
    "Symbol": "KZC",
    "CoinName": "KZCash",
    "FullName": "KZCash (KZC)"
  },
  {
    "Symbol": "GNR",
    "CoinName": "Gainer",
    "FullName": "Gainer (GNR)"
  },
  {
    "Symbol": "LNC",
    "CoinName": "Blocklancer",
    "FullName": "Blocklancer (LNC)"
  },
  {
    "Symbol": "LWF",
    "CoinName": "Local World Forwarders",
    "FullName": "Local World Forwarders (LWF)"
  },
  {
    "Symbol": "BRIC",
    "CoinName": "BrightCoin",
    "FullName": "BrightCoin (BRIC)"
  },
  {
    "Symbol": "WCG",
    "CoinName": "World Crypto Gold",
    "FullName": "World Crypto Gold (WCG)"
  },
  {
    "Symbol": "HIVE",
    "CoinName": "Hive",
    "FullName": "Hive (HIVE)"
  },
  {
    "Symbol": "GX",
    "CoinName": "GameX",
    "FullName": "GameX (GX)"
  },
  {
    "Symbol": "LCK",
    "CoinName": "Luckbox",
    "FullName": "Luckbox (LCK)"
  },
  {
    "Symbol": "MFG",
    "CoinName": "SyncFab",
    "FullName": "SyncFab (MFG)"
  },
  {
    "Symbol": "ETL",
    "CoinName": "EtherLite",
    "FullName": "EtherLite (ETL)"
  },
  {
    "Symbol": "TEL",
    "CoinName": "Telcoin",
    "FullName": "Telcoin (TEL)"
  },
  {
    "Symbol": "DRG",
    "CoinName": "Dragon Coin",
    "FullName": "Dragon Coin (DRG)"
  },
  {
    "Symbol": "SPX",
    "CoinName": "Sp8de",
    "FullName": "Sp8de (SPX)"
  },
  {
    "Symbol": "ONL",
    "CoinName": "On.Live",
    "FullName": "On.Live (ONL)"
  },
  {
    "Symbol": "ZAP",
    "CoinName": "Zap",
    "FullName": "Zap (ZAP)"
  },
  {
    "Symbol": "AIDOC",
    "CoinName": "AI Doctor",
    "FullName": "AI Doctor (AIDOC)"
  },
  {
    "Symbol": "ECC",
    "CoinName": "ECC",
    "FullName": "ECC (ECC)"
  },
  {
    "Symbol": "ET4",
    "CoinName": "Eticket4",
    "FullName": "Eticket4 (ET4)"
  },
  {
    "Symbol": "LCT",
    "CoinName": "LendConnect",
    "FullName": "LendConnect (LCT)"
  },
  {
    "Symbol": "EBC",
    "CoinName": "EBCoin",
    "FullName": "EBCoin (EBC)"
  },
  {
    "Symbol": "VESTA",
    "CoinName": "Vestarin",
    "FullName": "Vestarin (VESTA)"
  },
  {
    "Symbol": "INT",
    "CoinName": "Internet Node Token",
    "FullName": "Internet Node Token (INT)"
  },
  {
    "Symbol": "CPY",
    "CoinName": "COPYTRACK",
    "FullName": "COPYTRACK (CPY)"
  },
  {
    "Symbol": "STN",
    "CoinName": "Steneum Coin",
    "FullName": "Steneum Coin (STN)"
  },
  {
    "Symbol": "SFU",
    "CoinName": "Saifu",
    "FullName": "Saifu (SFU)"
  },
  {
    "Symbol": "PCOIN",
    "CoinName": "Pioneer Coin",
    "FullName": "Pioneer Coin (PCOIN)"
  },
  {
    "Symbol": "BLNM",
    "CoinName": "Bolenum",
    "FullName": "Bolenum (BLNM)"
  },
  {
    "Symbol": "LUC",
    "CoinName": "Play 2 Live",
    "FullName": "Play 2 Live (LUC)"
  },
  {
    "Symbol": "EDT",
    "CoinName": "EtherDelta",
    "FullName": "EtherDelta (EDT)"
  },
  {
    "Symbol": "CYDER",
    "CoinName": "Cyder Coin",
    "FullName": "Cyder Coin (CYDER)"
  },
  {
    "Symbol": "SRNT",
    "CoinName": "Serenity",
    "FullName": "Serenity (SRNT)"
  },
  {
    "Symbol": "MLT",
    "CoinName": "MultiGames",
    "FullName": "MultiGames (MLT)"
  },
  {
    "Symbol": "EKO",
    "CoinName": "EchoLink",
    "FullName": "EchoLink (EKO)"
  },
  {
    "Symbol": "UBTC",
    "CoinName": "UnitedBitcoin",
    "FullName": "UnitedBitcoin (UBTC)"
  },
  {
    "Symbol": "BTO",
    "CoinName": "Bottos",
    "FullName": "Bottos (BTO)"
  },
  {
    "Symbol": "DOCC",
    "CoinName": "Doc Coin",
    "FullName": "Doc Coin (DOCC)"
  },
  {
    "Symbol": "ARCT",
    "CoinName": "ArbitrageCT",
    "FullName": "ArbitrageCT (ARCT)"
  },
  {
    "Symbol": "IMVR",
    "CoinName": "ImmVRse",
    "FullName": "ImmVRse (IMVR)"
  },
  {
    "Symbol": "IDEX",
    "CoinName": "IDEX",
    "FullName": "IDEX (IDEX)"
  },
  {
    "Symbol": "IDH",
    "CoinName": "IndaHash",
    "FullName": "IndaHash (IDH)"
  },
  {
    "Symbol": "CBT",
    "CoinName": "CommerceBlock Token",
    "FullName": "CommerceBlock Token (CBT)"
  },
  {
    "Symbol": "ITZ",
    "CoinName": "Interzone",
    "FullName": "Interzone (ITZ)"
  },
  {
    "Symbol": "XBP",
    "CoinName": "Black Pearl Coin",
    "FullName": "Black Pearl Coin (XBP)"
  },
  {
    "Symbol": "EXRN",
    "CoinName": "EXRNchain",
    "FullName": "EXRNchain (EXRN)"
  },
  {
    "Symbol": "AGI",
    "CoinName": "SingularityNET",
    "FullName": "SingularityNET (AGI)"
  },
  {
    "Symbol": "BFT",
    "CoinName": "BF Token",
    "FullName": "BF Token (BFT)"
  },
  {
    "Symbol": "LGO",
    "CoinName": "Legolas Exchange",
    "FullName": "Legolas Exchange (LGO)"
  },
  {
    "Symbol": "CRPT",
    "CoinName": "Crypterium",
    "FullName": "Crypterium (CRPT)"
  },
  {
    "Symbol": "SGL",
    "CoinName": "Sigil",
    "FullName": "Sigil (SGL)"
  },
  {
    "Symbol": "TNC",
    "CoinName": "Trinity Network Credit",
    "FullName": "Trinity Network Credit (TNC)"
  },
  {
    "Symbol": "FSBT",
    "CoinName": "Forty Seven Bank",
    "FullName": "Forty Seven Bank (FSBT)"
  },
  {
    "Symbol": "CFTY",
    "CoinName": "Crafty",
    "FullName": "Crafty (CFTY)"
  },
  {
    "Symbol": "DTA",
    "CoinName": "Data",
    "FullName": "Data (DTA)"
  },
  {
    "Symbol": "CV",
    "CoinName": "CarVertical",
    "FullName": "CarVertical (CV)"
  },
  {
    "Symbol": "DTX",
    "CoinName": "DataBroker DAO",
    "FullName": "DataBroker DAO (DTX)"
  },
  {
    "Symbol": "MCU",
    "CoinName": "MediChain",
    "FullName": "MediChain (MCU)"
  },
  {
    "Symbol": "OCN",
    "CoinName": "Odyssey",
    "FullName": "Odyssey (OCN)"
  },
  {
    "Symbol": "THETA",
    "CoinName": "Theta",
    "FullName": "Theta (THETA)"
  },
  {
    "Symbol": "MSDT",
    "CoinName": "Measurable Data Token ",
    "FullName": "Measurable Data Token  (MSDT)"
  },
  {
    "Symbol": "PRPS",
    "CoinName": "Purpose",
    "FullName": "Purpose (PRPS)"
  },
  {
    "Symbol": "DUBI",
    "CoinName": "Decentralized Universal Basic Income",
    "FullName": "Decentralized Universal Basic Income (DUBI)"
  },
  {
    "Symbol": "BPT",
    "CoinName": "Blockport",
    "FullName": "Blockport (BPT)"
  },
  {
    "Symbol": "SGN",
    "CoinName": "Signals Network",
    "FullName": "Signals Network (SGN)"
  },
  {
    "Symbol": "TCT",
    "CoinName": "TokenClub ",
    "FullName": "TokenClub  (TCT)"
  },
  {
    "Symbol": "TRAC",
    "CoinName": "OriginTrail",
    "FullName": "OriginTrail (TRAC)"
  },
  {
    "Symbol": "MOT",
    "CoinName": "Olympus Labs",
    "FullName": "Olympus Labs (MOT)"
  },
  {
    "Symbol": "HORSE",
    "CoinName": "Ethorse ",
    "FullName": "Ethorse  (HORSE)"
  },
  {
    "Symbol": "QUN",
    "CoinName": "QunQun",
    "FullName": "QunQun (QUN)"
  },
  {
    "Symbol": "QBAO",
    "CoinName": "Qbao",
    "FullName": "Qbao (QBAO)"
  },
  {
    "Symbol": "ACCN",
    "CoinName": "Accelerator Network",
    "FullName": "Accelerator Network (ACCN)"
  },
  {
    "Symbol": "SWFTC",
    "CoinName": "SwftCoin",
    "FullName": "SwftCoin (SWFTC)"
  },
  {
    "Symbol": "SENT",
    "CoinName": "Sentinel",
    "FullName": "Sentinel (SENT)"
  },
  {
    "Symbol": "IPL",
    "CoinName": "InsurePal",
    "FullName": "InsurePal (IPL)"
  },
  {
    "Symbol": "OPC",
    "CoinName": "OP Coin",
    "FullName": "OP Coin (OPC)"
  },
  {
    "Symbol": "SAF",
    "CoinName": "Safinus",
    "FullName": "Safinus (SAF)"
  },
  {
    "Symbol": "SHA",
    "CoinName": "Shacoin",
    "FullName": "Shacoin (SHA)"
  },
  {
    "Symbol": "PYLNT",
    "CoinName": "Pylon Network",
    "FullName": "Pylon Network (PYLNT)"
  },
  {
    "Symbol": "GRLC",
    "CoinName": "Garlicoin",
    "FullName": "Garlicoin (GRLC)"
  },
  {
    "Symbol": "EVE",
    "CoinName": "Devery",
    "FullName": "Devery (EVE)"
  },
  {
    "Symbol": "YEE",
    "CoinName": "Yee",
    "FullName": "Yee (YEE)"
  },
  {
    "Symbol": "REPUX",
    "CoinName": "Repux",
    "FullName": "Repux (REPUX)"
  },
  {
    "Symbol": "JOYT",
    "CoinName": "JoyToken",
    "FullName": "JoyToken (JOYT)"
  },
  {
    "Symbol": "XCD",
    "CoinName": "Capdax",
    "FullName": "Capdax (XCD)"
  },
  {
    "Symbol": "AXPR",
    "CoinName": "aXpire",
    "FullName": "aXpire (AXPR)"
  },
  {
    "Symbol": "CPCH",
    "CoinName": "CPChain",
    "FullName": "CPChain (CPCH)"
  },
  {
    "Symbol": "SPEND",
    "CoinName": "Spend",
    "FullName": "Spend (SPEND)"
  },
  {
    "Symbol": "NPXS",
    "CoinName": "Pundi X",
    "FullName": "Pundi X (NPXS)"
  },
  {
    "Symbol": "ZPT",
    "CoinName": "Zeepin",
    "FullName": "Zeepin (ZPT)"
  },
  {
    "Symbol": "CROAT",
    "CoinName": "Croat",
    "FullName": "Croat (CROAT)"
  },
  {
    "Symbol": "REF",
    "CoinName": "RefToken",
    "FullName": "RefToken (REF)"
  },
  {
    "Symbol": "FAIRG",
    "CoinName": "FairGame",
    "FullName": "FairGame (FAIRG)"
  },
  {
    "Symbol": "VAL",
    "CoinName": "Valorbit",
    "FullName": "Valorbit (VAL)"
  },
  {
    "Symbol": "MXAI",
    "CoinName": "Matrix AI Network",
    "FullName": "Matrix AI Network (MXAI)"
  },
  {
    "Symbol": "BCDN",
    "CoinName": "BlockCDN ",
    "FullName": "BlockCDN  (BCDN)"
  },
  {
    "Symbol": "STK",
    "CoinName": "STK Token",
    "FullName": "STK Token (STK)"
  },
  {
    "Symbol": "MZX",
    "CoinName": "Mosaic Network",
    "FullName": "Mosaic Network (MZX)"
  },
  {
    "Symbol": "CRYC",
    "CoinName": "CryCash",
    "FullName": "CryCash (CRYC)"
  },
  {
    "Symbol": "SPICE",
    "CoinName": "SPiCE Venture Capital ",
    "FullName": "SPiCE Venture Capital  (SPICE)"
  },
  {
    "Symbol": "Q1S",
    "CoinName": "Quantum1Net",
    "FullName": "Quantum1Net (Q1S)"
  },
  {
    "Symbol": "POLY",
    "CoinName": "Polymath Network",
    "FullName": "Polymath Network (POLY)"
  },
  {
    "Symbol": "XTO",
    "CoinName": "Tao",
    "FullName": "Tao (XTO)"
  },
  {
    "Symbol": "TPAY",
    "CoinName": "TokenPay",
    "FullName": "TokenPay (TPAY)"
  },
  {
    "Symbol": "CXO",
    "CoinName": "CargoX",
    "FullName": "CargoX (CXO)"
  },
  {
    "Symbol": "WT",
    "CoinName": "WeToken",
    "FullName": "WeToken (WT)"
  },
  {
    "Symbol": "HGS",
    "CoinName": "HashGains",
    "FullName": "HashGains (HGS)"
  },
  {
    "Symbol": "SISA",
    "CoinName": "Strategic Investments in Significant Areas",
    "FullName": "Strategic Investments in Significant Areas (SISA)"
  },
  {
    "Symbol": "EBIT",
    "CoinName": "eBit",
    "FullName": "eBit (EBIT)"
  },
  {
    "Symbol": "CUZ",
    "CoinName": "Cool Cousin",
    "FullName": "Cool Cousin (CUZ)"
  },
  {
    "Symbol": "HLC",
    "CoinName": "Qitmeer",
    "FullName": "Qitmeer (HLC)"
  },
  {
    "Symbol": "BETR",
    "CoinName": "BetterBetting",
    "FullName": "BetterBetting (BETR)"
  },
  {
    "Symbol": "GMR",
    "CoinName": "Gimmer",
    "FullName": "Gimmer (GMR)"
  },
  {
    "Symbol": "ING",
    "CoinName": "Iungo",
    "FullName": "Iungo (ING)"
  },
  {
    "Symbol": "BLZ",
    "CoinName": "Bluzelle",
    "FullName": "Bluzelle (BLZ)"
  },
  {
    "Symbol": "CVNG",
    "CoinName": "Crave-NG",
    "FullName": "Crave-NG (CVNG)"
  },
  {
    "Symbol": "CHSB",
    "CoinName": "SwissBorg",
    "FullName": "SwissBorg (CHSB)"
  },
  {
    "Symbol": "EQUI",
    "CoinName": "EQUI Token",
    "FullName": "EQUI Token (EQUI)"
  },
  {
    "Symbol": "MCT",
    "CoinName": "1717 Masonic Commemorative Token",
    "FullName": "1717 Masonic Commemorative Token (MCT)"
  },
  {
    "Symbol": "HHEM",
    "CoinName": "Healthureum",
    "FullName": "Healthureum (HHEM)"
  },
  {
    "Symbol": "CWIS",
    "CoinName": "Crypto Wisdom Coin",
    "FullName": "Crypto Wisdom Coin (CWIS)"
  },
  {
    "Symbol": "GRO",
    "CoinName": "Gron Digital",
    "FullName": "Gron Digital (GRO)"
  },
  {
    "Symbol": "SWM",
    "CoinName": "Swarm Fund",
    "FullName": "Swarm Fund (SWM)"
  },
  {
    "Symbol": "MDCL",
    "CoinName": "Medicalchain",
    "FullName": "Medicalchain (MDCL)"
  },
  {
    "Symbol": "WOBTC",
    "CoinName": "WorldBTC",
    "FullName": "WorldBTC (WOBTC)"
  },
  {
    "Symbol": "DNO",
    "CoinName": "Denaro",
    "FullName": "Denaro (DNO)"
  },
  {
    "Symbol": "eFIC",
    "CoinName": "FIC Network",
    "FullName": "FIC Network (eFIC)"
  },
  {
    "Symbol": "TKY",
    "CoinName": "THEKEY Token",
    "FullName": "THEKEY Token (TKY)"
  },
  {
    "Symbol": "BANCA",
    "CoinName": "BANCA",
    "FullName": "BANCA (BANCA)"
  },
  {
    "Symbol": "TRTL",
    "CoinName": "TurtleCoin",
    "FullName": "TurtleCoin (TRTL)"
  },
  {
    "Symbol": "BIX",
    "CoinName": "BiboxCoin",
    "FullName": "BiboxCoin (BIX)"
  },
  {
    "Symbol": "ABT",
    "CoinName": "ArcBlock",
    "FullName": "ArcBlock (ABT)"
  },
  {
    "Symbol": "HBZ",
    "CoinName": "HBZ Coin",
    "FullName": "HBZ Coin (HBZ)"
  },
  {
    "Symbol": "DRPU",
    "CoinName": "DRP Utility",
    "FullName": "DRP Utility (DRPU)"
  },
  {
    "Symbol": "DOR",
    "CoinName": "Dorado",
    "FullName": "Dorado (DOR)"
  },
  {
    "Symbol": "PRFT",
    "CoinName": "Proof Suite Token",
    "FullName": "Proof Suite Token (PRFT)"
  },
  {
    "Symbol": "PARETO",
    "CoinName": "Pareto Network Token",
    "FullName": "Pareto Network Token (PARETO)"
  },
  {
    "Symbol": "DTRC",
    "CoinName": "Datarius",
    "FullName": "Datarius (DTRC)"
  },
  {
    "Symbol": "IQB",
    "CoinName": "Intelligence Quotient Benefit",
    "FullName": "Intelligence Quotient Benefit (IQB)"
  },
  {
    "Symbol": "NDLC",
    "CoinName": "NeedleCoin",
    "FullName": "NeedleCoin (NDLC)"
  },
  {
    "Symbol": "BEE",
    "CoinName": "Bee Token",
    "FullName": "Bee Token (BEE)"
  },
  {
    "Symbol": "MUN",
    "CoinName": "MUNcoin",
    "FullName": "MUNcoin (MUN)"
  },
  {
    "Symbol": "TIG",
    "CoinName": "Tigereum",
    "FullName": "Tigereum (TIG)"
  },
  {
    "Symbol": "LYK",
    "CoinName": "Loyakk Vega",
    "FullName": "Loyakk Vega (LYK)"
  },
  {
    "Symbol": "NYX",
    "CoinName": "NYXCOIN",
    "FullName": "NYXCOIN (NYX)"
  },
  {
    "Symbol": "DXT",
    "CoinName": "DataWallet",
    "FullName": "DataWallet (DXT)"
  },
  {
    "Symbol": "SAT",
    "CoinName": "Satisfaction Token",
    "FullName": "Satisfaction Token (SAT)"
  },
  {
    "Symbol": "CRL",
    "CoinName": "Cryptelo Coin",
    "FullName": "Cryptelo Coin (CRL)"
  },
  {
    "Symbol": "ORI",
    "CoinName": "Origami",
    "FullName": "Origami (ORI)"
  },
  {
    "Symbol": "LYM",
    "CoinName": "Lympo",
    "FullName": "Lympo (LYM)"
  },
  {
    "Symbol": "LGR",
    "CoinName": "Logarithm",
    "FullName": "Logarithm (LGR)"
  },
  {
    "Symbol": "BCA",
    "CoinName": "Bitcoin Atom",
    "FullName": "Bitcoin Atom (BCA)"
  },
  {
    "Symbol": "B2X",
    "CoinName": "SegWit2x",
    "FullName": "SegWit2x (B2X)"
  },
  {
    "Symbol": "FSN",
    "CoinName": "Fusion",
    "FullName": "Fusion (FSN)"
  },
  {
    "Symbol": "UETL",
    "CoinName": "Useless Eth Token Lite",
    "FullName": "Useless Eth Token Lite (UETL)"
  },
  {
    "Symbol": "NBR",
    "CoinName": "Niobio Cash",
    "FullName": "Niobio Cash (NBR)"
  },
  {
    "Symbol": "ARY",
    "CoinName": "Block Array",
    "FullName": "Block Array (ARY)"
  },
  {
    "Symbol": "RAVE",
    "CoinName": "Ravelous",
    "FullName": "Ravelous (RAVE)"
  },
  {
    "Symbol": "ILT",
    "CoinName": "iOlite",
    "FullName": "iOlite (ILT)"
  },
  {
    "Symbol": "SCOOBY",
    "CoinName": "Scooby coin",
    "FullName": "Scooby coin (SCOOBY)"
  },
  {
    "Symbol": "SAI",
    "CoinName": "SAI",
    "FullName": "SAI (SAI)"
  },
  {
    "Symbol": "CEFS",
    "CoinName": "CryptopiaFeeShares",
    "FullName": "CryptopiaFeeShares (CEFS)"
  },
  {
    "Symbol": "BUN",
    "CoinName": "BunnyCoin",
    "FullName": "BunnyCoin (BUN)"
  },
  {
    "Symbol": "BSR",
    "CoinName": "BitSoar Coin",
    "FullName": "BitSoar Coin (BSR)"
  },
  {
    "Symbol": "SKULL",
    "CoinName": "Pirate Blocks",
    "FullName": "Pirate Blocks (SKULL)"
  },
  {
    "Symbol": "TRDT",
    "CoinName": "Trident",
    "FullName": "Trident (TRDT)"
  },
  {
    "Symbol": "XBTY",
    "CoinName": "Bounty",
    "FullName": "Bounty (XBTY)"
  },
  {
    "Symbol": "JC",
    "CoinName": "JesusCoin",
    "FullName": "JesusCoin (JC)"
  },
  {
    "Symbol": "SKC",
    "CoinName": "Skeincoin",
    "FullName": "Skeincoin (SKC)"
  },
  {
    "Symbol": "MWAT",
    "CoinName": "RED MegaWatt",
    "FullName": "RED MegaWatt (MWAT)"
  },
  {
    "Symbol": "JEW",
    "CoinName": "Shekel",
    "FullName": "Shekel (JEW)"
  },
  {
    "Symbol": "ERIS",
    "CoinName": "Eristica",
    "FullName": "Eristica (ERIS)"
  },
  {
    "Symbol": "KRM",
    "CoinName": "Karma",
    "FullName": "Karma (KRM)"
  },
  {
    "Symbol": "CDY",
    "CoinName": "Bitcoin Candy",
    "FullName": "Bitcoin Candy (CDY)"
  },
  {
    "Symbol": "SSS",
    "CoinName": "ShareChain",
    "FullName": "ShareChain (SSS)"
  },
  {
    "Symbol": "CRDNC",
    "CoinName": "Credence Coin",
    "FullName": "Credence Coin (CRDNC)"
  },
  {
    "Symbol": "BIFI",
    "CoinName": "BitcoinFile",
    "FullName": "BitcoinFile (BIFI)"
  },
  {
    "Symbol": "CADN",
    "CoinName": "Content and AD Network",
    "FullName": "Content and AD Network (CADN)"
  },
  {
    "Symbol": "BTF",
    "CoinName": "Blockchain Traded Fund",
    "FullName": "Blockchain Traded Fund (BTF)"
  },
  {
    "Symbol": "IPC",
    "CoinName": "IPChain",
    "FullName": "IPChain (IPC)"
  },
  {
    "Symbol": "SHOW",
    "CoinName": "ShowCoin",
    "FullName": "ShowCoin (SHOW)"
  },
  {
    "Symbol": "STC",
    "CoinName": "StarChain",
    "FullName": "StarChain (STC)"
  },
  {
    "Symbol": "NEC",
    "CoinName": "Ethfinex Nectar Token",
    "FullName": "Ethfinex Nectar Token (NEC)"
  },
  {
    "Symbol": "AIT",
    "CoinName": "AIChain Token",
    "FullName": "AIChain Token (AIT)"
  },
  {
    "Symbol": "STQ",
    "CoinName": "Storiqa Token",
    "FullName": "Storiqa Token (STQ)"
  },
  {
    "Symbol": "ALT",
    "CoinName": "ALTcoin",
    "FullName": "ALTcoin (ALT)"
  },
  {
    "Symbol": "CXP",
    "CoinName": "Caixa Pay",
    "FullName": "Caixa Pay (CXP)"
  },
  {
    "Symbol": "KB3",
    "CoinName": "B3Coin",
    "FullName": "B3Coin (KB3)"
  },
  {
    "Symbol": "FDX",
    "CoinName": "fidentiaX",
    "FullName": "fidentiaX (FDX)"
  },
  {
    "Symbol": "KREDS",
    "CoinName": "KREDS",
    "FullName": "KREDS (KREDS)"
  },
  {
    "Symbol": "EQL",
    "CoinName": "EQUAL",
    "FullName": "EQUAL (EQL)"
  },
  {
    "Symbol": "GAI",
    "CoinName": "GraphGrail AI",
    "FullName": "GraphGrail AI (GAI)"
  },
  {
    "Symbol": "VULC",
    "CoinName": "Vulcano",
    "FullName": "Vulcano (VULC)"
  },
  {
    "Symbol": "CRE",
    "CoinName": "Creditcoin",
    "FullName": "Creditcoin (CRE)"
  },
  {
    "Symbol": "DVTC",
    "CoinName": "DivotyCoin",
    "FullName": "DivotyCoin (DVTC)"
  },
  {
    "Symbol": "DADI",
    "CoinName": "Edge",
    "FullName": "Edge (DADI)"
  },
  {
    "Symbol": "MGGT",
    "CoinName": "Maggie Token",
    "FullName": "Maggie Token (MGGT)"
  },
  {
    "Symbol": "TOKC",
    "CoinName": "Tokyo Coin",
    "FullName": "Tokyo Coin (TOKC)"
  },
  {
    "Symbol": "UNRC",
    "CoinName": "UniversalRoyalCoin",
    "FullName": "UniversalRoyalCoin (UNRC)"
  },
  {
    "Symbol": "BBP",
    "CoinName": "BiblePay",
    "FullName": "BiblePay (BBP)"
  },
  {
    "Symbol": "NOX",
    "CoinName": "NITRO",
    "FullName": "NITRO (NOX)"
  },
  {
    "Symbol": "HYS",
    "CoinName": "Heiss Shares",
    "FullName": "Heiss Shares (HYS)"
  },
  {
    "Symbol": "LCWP",
    "CoinName": "LiteCoinW Plus",
    "FullName": "LiteCoinW Plus (LCWP)"
  },
  {
    "Symbol": "NAVI",
    "CoinName": "NaviAddress",
    "FullName": "NaviAddress (NAVI)"
  },
  {
    "Symbol": "ADI",
    "CoinName": "Aditus",
    "FullName": "Aditus (ADI)"
  },
  {
    "Symbol": "TEN",
    "CoinName": "Tokenomy",
    "FullName": "Tokenomy (TEN)"
  },
  {
    "Symbol": "VVI",
    "CoinName": "VV Coin",
    "FullName": "VV Coin (VVI)"
  },
  {
    "Symbol": "ANK",
    "CoinName": "Ankorus Token",
    "FullName": "Ankorus Token (ANK)"
  },
  {
    "Symbol": "IVC",
    "CoinName": "Investy Coin",
    "FullName": "Investy Coin (IVC)"
  },
  {
    "Symbol": "HLP",
    "CoinName": "Purpose Coin",
    "FullName": "Purpose Coin (HLP)"
  },
  {
    "Symbol": "VIN",
    "CoinName": "VinChain",
    "FullName": "VinChain (VIN)"
  },
  {
    "Symbol": "SHPING",
    "CoinName": "Shping Coin",
    "FullName": "Shping Coin (SHPING)"
  },
  {
    "Symbol": "PTR",
    "CoinName": "Petro",
    "FullName": "Petro (PTR)"
  },
  {
    "Symbol": "LCC",
    "CoinName": "LitecoinCash",
    "FullName": "LitecoinCash (LCC)"
  },
  {
    "Symbol": "VANY",
    "CoinName": "Vanywhere",
    "FullName": "Vanywhere (VANY)"
  },
  {
    "Symbol": "TFD",
    "CoinName": "TE-FOOD",
    "FullName": "TE-FOOD (TFD)"
  },
  {
    "Symbol": "NBX",
    "CoinName": "Noxbox",
    "FullName": "Noxbox (NBX)"
  },
  {
    "Symbol": "BAX",
    "CoinName": "BABB",
    "FullName": "BABB (BAX)"
  },
  {
    "Symbol": "BERRY",
    "CoinName": "Rentberry",
    "FullName": "Rentberry (BERRY)"
  },
  {
    "Symbol": "APCC",
    "CoinName": "SpaceChain",
    "FullName": "SpaceChain (APCC)"
  },
  {
    "Symbol": "FLIP",
    "CoinName": "BitFlip",
    "FullName": "BitFlip (FLIP)"
  },
  {
    "Symbol": "CLIN",
    "CoinName": "Clinicoin",
    "FullName": "Clinicoin (CLIN)"
  },
  {
    "Symbol": "DHT",
    "CoinName": "DeHedge Token",
    "FullName": "DeHedge Token (DHT)"
  },
  {
    "Symbol": "GOOD",
    "CoinName": "Goodomy",
    "FullName": "Goodomy (GOOD)"
  },
  {
    "Symbol": "ENK",
    "CoinName": "Enkidu",
    "FullName": "Enkidu (ENK)"
  },
  {
    "Symbol": "ALX",
    "CoinName": "ALAX",
    "FullName": "ALAX (ALX)"
  },
  {
    "Symbol": "REN",
    "CoinName": "REN",
    "FullName": "REN (REN)"
  },
  {
    "Symbol": "DTH",
    "CoinName": "Dether",
    "FullName": "Dether (DTH)"
  },
  {
    "Symbol": "SOC",
    "CoinName": "All Sports Coin",
    "FullName": "All Sports Coin (SOC)"
  },
  {
    "Symbol": "TDX",
    "CoinName": "Tidex Token",
    "FullName": "Tidex Token (TDX)"
  },
  {
    "Symbol": "LOT",
    "CoinName": "LottoCoin",
    "FullName": "LottoCoin (LOT)"
  },
  {
    "Symbol": "FUNK",
    "CoinName": "Cypherfunks Coin",
    "FullName": "Cypherfunks Coin (FUNK)"
  },
  {
    "Symbol": "LEAF",
    "CoinName": "LeafCoin",
    "FullName": "LeafCoin (LEAF)"
  },
  {
    "Symbol": "COMP",
    "CoinName": "Compound Coin",
    "FullName": "Compound Coin (COMP)"
  },
  {
    "Symbol": "BITCAR",
    "CoinName": "BitCar",
    "FullName": "BitCar (BITCAR)"
  },
  {
    "Symbol": "CLN",
    "CoinName": "Colu Local Network",
    "FullName": "Colu Local Network (CLN)"
  },
  {
    "Symbol": "ORYX",
    "CoinName": "OryxCoin",
    "FullName": "OryxCoin (ORYX)"
  },
  {
    "Symbol": "BASHC",
    "CoinName": "BashCoin",
    "FullName": "BashCoin (BASHC)"
  },
  {
    "Symbol": "DIGIF",
    "CoinName": "DigiFel",
    "FullName": "DigiFel (DIGIF)"
  },
  {
    "Symbol": "DGM",
    "CoinName": "DigiMoney",
    "FullName": "DigiMoney (DGM)"
  },
  {
    "Symbol": "CBS",
    "CoinName": "Cerberus",
    "FullName": "Cerberus (CBS)"
  },
  {
    "Symbol": "TERN",
    "CoinName": "Ternio",
    "FullName": "Ternio (TERN)"
  },
  {
    "Symbol": "PROOF",
    "CoinName": "PROVER",
    "FullName": "PROVER (PROOF)"
  },
  {
    "Symbol": "BTCH",
    "CoinName": "Bitcoin Hush",
    "FullName": "Bitcoin Hush (BTCH)"
  },
  {
    "Symbol": "redBUX",
    "CoinName": "redBUX",
    "FullName": "redBUX (redBUX)"
  },
  {
    "Symbol": "AUC",
    "CoinName": "Auctus",
    "FullName": "Auctus (AUC)"
  },
  {
    "Symbol": "LIZ",
    "CoinName": "Lizus Payment",
    "FullName": "Lizus Payment (LIZ)"
  },
  {
    "Symbol": "CIF",
    "CoinName": "Crypto Improvement Fund",
    "FullName": "Crypto Improvement Fund (CIF)"
  },
  {
    "Symbol": "NCASH",
    "CoinName": "Nucleus Vision",
    "FullName": "Nucleus Vision (NCASH)"
  },
  {
    "Symbol": "SPD",
    "CoinName": "Stipend",
    "FullName": "Stipend (SPD)"
  },
  {
    "Symbol": "RPUT",
    "CoinName": "Robin8 Profile Utility Token",
    "FullName": "Robin8 Profile Utility Token (RPUT)"
  },
  {
    "Symbol": "FILL",
    "CoinName": "Fillit",
    "FullName": "Fillit (FILL)"
  },
  {
    "Symbol": "XNK",
    "CoinName": "Ink Protocol",
    "FullName": "Ink Protocol (XNK)"
  },
  {
    "Symbol": "PROPS",
    "CoinName": "Props",
    "FullName": "Props (PROPS)"
  },
  {
    "Symbol": "FUNDP",
    "CoinName": "Fund Platform",
    "FullName": "Fund Platform (FUNDP)"
  },
  {
    "Symbol": "CEL",
    "CoinName": "Celsius Network",
    "FullName": "Celsius Network (CEL)"
  },
  {
    "Symbol": "PUSHI",
    "CoinName": "Pushi",
    "FullName": "Pushi (PUSHI)"
  },
  {
    "Symbol": "BINS",
    "CoinName": "Bitsense",
    "FullName": "Bitsense (BINS)"
  },
  {
    "Symbol": "POKER",
    "CoinName": "PokerCoin",
    "FullName": "PokerCoin (POKER)"
  },
  {
    "Symbol": "AXYS",
    "CoinName": "Axys",
    "FullName": "Axys (AXYS)"
  },
  {
    "Symbol": "EVENC",
    "CoinName": "EvenCoin",
    "FullName": "EvenCoin (EVENC)"
  },
  {
    "Symbol": "BOLD",
    "CoinName": "Bold",
    "FullName": "Bold (BOLD)"
  },
  {
    "Symbol": "EXTN",
    "CoinName": "Extensive Coin",
    "FullName": "Extensive Coin (EXTN)"
  },
  {
    "Symbol": "DIG",
    "CoinName": "Dignity",
    "FullName": "Dignity (DIG)"
  },
  {
    "Symbol": "ETS",
    "CoinName": "ETH Share",
    "FullName": "ETH Share (ETS)"
  },
  {
    "Symbol": "LIPC",
    "CoinName": "LIpcoin",
    "FullName": "LIpcoin (LIPC)"
  },
  {
    "Symbol": "GOFF",
    "CoinName": "Gift Off Token",
    "FullName": "Gift Off Token (GOFF)"
  },
  {
    "Symbol": "HELL",
    "CoinName": "HELL COIN",
    "FullName": "HELL COIN (HELL)"
  },
  {
    "Symbol": "ELP",
    "CoinName": "Ellerium",
    "FullName": "Ellerium (ELP)"
  },
  {
    "Symbol": "ACAT",
    "CoinName": "Alphacat",
    "FullName": "Alphacat (ACAT)"
  },
  {
    "Symbol": "RKT",
    "CoinName": "Rock Token",
    "FullName": "Rock Token (RKT)"
  },
  {
    "Symbol": "CO2",
    "CoinName": "CO2 Token",
    "FullName": "CO2 Token (CO2)"
  },
  {
    "Symbol": "INVOX",
    "CoinName": "Invox Finance",
    "FullName": "Invox Finance (INVOX)"
  },
  {
    "Symbol": "VLX",
    "CoinName": "Velox",
    "FullName": "Velox (VLX)"
  },
  {
    "Symbol": "ACTN",
    "CoinName": "Action Coin",
    "FullName": "Action Coin (ACTN)"
  },
  {
    "Symbol": "LTCH",
    "CoinName": "Litecoin Cash",
    "FullName": "Litecoin Cash (LTCH)"
  },
  {
    "Symbol": "ZUP",
    "CoinName": "Zupply Token",
    "FullName": "Zupply Token (ZUP)"
  },
  {
    "Symbol": "HMT",
    "CoinName": "Hamster Marketplace Token",
    "FullName": "Hamster Marketplace Token (HMT)"
  },
  {
    "Symbol": "USCOIN",
    "CoinName": "USCoin",
    "FullName": "USCoin (USCOIN)"
  },
  {
    "Symbol": "KIND",
    "CoinName": "Kind Ads",
    "FullName": "Kind Ads (KIND)"
  },
  {
    "Symbol": "BCHT",
    "CoinName": "Blockchain Terminal",
    "FullName": "Blockchain Terminal (BCHT)"
  },
  {
    "Symbol": "CLO",
    "CoinName": "Callisto Network",
    "FullName": "Callisto Network (CLO)"
  },
  {
    "Symbol": "ELIC",
    "CoinName": "Elicoin",
    "FullName": "Elicoin (ELIC)"
  },
  {
    "Symbol": "MOAT",
    "CoinName": "Mother Of All Tokens",
    "FullName": "Mother Of All Tokens (MOAT)"
  },
  {
    "Symbol": "BBI",
    "CoinName": "BelugaPay",
    "FullName": "BelugaPay (BBI)"
  },
  {
    "Symbol": "BEZ",
    "CoinName": "Bezop",
    "FullName": "Bezop (BEZ)"
  },
  {
    "Symbol": "ENTRC",
    "CoinName": "ENTER COIN",
    "FullName": "ENTER COIN (ENTRC)"
  },
  {
    "Symbol": "BTCGO",
    "CoinName": "BitcoinGo",
    "FullName": "BitcoinGo (BTCGO)"
  },
  {
    "Symbol": "XTROPTIONS",
    "CoinName": "TROPTIONS",
    "FullName": "TROPTIONS (XTROPTIONS)"
  },
  {
    "Symbol": "KNW",
    "CoinName": "Knowledge",
    "FullName": "Knowledge (KNW)"
  },
  {
    "Symbol": "PGC",
    "CoinName": "Pegascoin",
    "FullName": "Pegascoin (PGC)"
  },
  {
    "Symbol": "BIT",
    "CoinName": "BitRewards",
    "FullName": "BitRewards (BIT)"
  },
  {
    "Symbol": "DATX",
    "CoinName": "DATx",
    "FullName": "DATx (DATX)"
  },
  {
    "Symbol": "PKC",
    "CoinName": "Pikciochain",
    "FullName": "Pikciochain (PKC)"
  },
  {
    "Symbol": "SQOIN",
    "CoinName": "StasyQ",
    "FullName": "StasyQ (SQOIN)"
  },
  {
    "Symbol": "TBAR",
    "CoinName": "Titanium BAR",
    "FullName": "Titanium BAR (TBAR)"
  },
  {
    "Symbol": "TAN",
    "CoinName": "Taklimakan",
    "FullName": "Taklimakan (TAN)"
  },
  {
    "Symbol": "CPL",
    "CoinName": "CoinPlace Token",
    "FullName": "CoinPlace Token (CPL)"
  },
  {
    "Symbol": "TUBE",
    "CoinName": "BitTube",
    "FullName": "BitTube (TUBE)"
  },
  {
    "Symbol": "AUTO",
    "CoinName": "Cube",
    "FullName": "Cube (AUTO)"
  },
  {
    "Symbol": "OMX",
    "CoinName": "Project Shivom",
    "FullName": "Project Shivom (OMX)"
  },
  {
    "Symbol": "TRCK",
    "CoinName": "Truckcoin",
    "FullName": "Truckcoin (TRCK)"
  },
  {
    "Symbol": "SNX",
    "CoinName": "Synthetix",
    "FullName": "Synthetix (SNX)"
  },
  {
    "Symbol": "TOMO",
    "CoinName": "TomoChain",
    "FullName": "TomoChain (TOMO)"
  },
  {
    "Symbol": "CHI",
    "CoinName": "XAYA",
    "FullName": "XAYA (CHI)"
  },
  {
    "Symbol": "MBM",
    "CoinName": "MobileBridge Momentum",
    "FullName": "MobileBridge Momentum (MBM)"
  },
  {
    "Symbol": "INVC",
    "CoinName": "Invacio",
    "FullName": "Invacio (INVC)"
  },
  {
    "Symbol": "W3C",
    "CoinName": "W3Coin",
    "FullName": "W3Coin (W3C)"
  },
  {
    "Symbol": "DIN",
    "CoinName": "Dinero",
    "FullName": "Dinero (DIN)"
  },
  {
    "Symbol": "INSTAR",
    "CoinName": "Insights Network",
    "FullName": "Insights Network (INSTAR)"
  },
  {
    "Symbol": "CHP",
    "CoinName": "CoinPoker Token",
    "FullName": "CoinPoker Token (CHP)"
  },
  {
    "Symbol": "PSD",
    "CoinName": "Poseidon",
    "FullName": "Poseidon (PSD)"
  },
  {
    "Symbol": "J8T",
    "CoinName": "JET8",
    "FullName": "JET8 (J8T)"
  },
  {
    "Symbol": "LELE",
    "CoinName": "Lelecoin",
    "FullName": "Lelecoin (LELE)"
  },
  {
    "Symbol": "DROP",
    "CoinName": "Dropil",
    "FullName": "Dropil (DROP)"
  },
  {
    "Symbol": "VEGA",
    "CoinName": "VEGA",
    "FullName": "VEGA (VEGA)"
  },
  {
    "Symbol": "AKA",
    "CoinName": "Akroma",
    "FullName": "Akroma (AKA)"
  },
  {
    "Symbol": "SHIP",
    "CoinName": "ShipChain",
    "FullName": "ShipChain (SHIP)"
  },
  {
    "Symbol": "IHT",
    "CoinName": "I-House Token",
    "FullName": "I-House Token (IHT)"
  },
  {
    "Symbol": "LCS",
    "CoinName": "LocalCoinSwap",
    "FullName": "LocalCoinSwap (LCS)"
  },
  {
    "Symbol": "LALA",
    "CoinName": "LaLa World",
    "FullName": "LaLa World (LALA)"
  },
  {
    "Symbol": "LEDU",
    "CoinName": "Education Ecosystem",
    "FullName": "Education Ecosystem (LEDU)"
  },
  {
    "Symbol": "FOXT",
    "CoinName": "Fox Trading",
    "FullName": "Fox Trading (FOXT)"
  },
  {
    "Symbol": "ETKN",
    "CoinName": "EasyToken",
    "FullName": "EasyToken (ETKN)"
  },
  {
    "Symbol": "ROX",
    "CoinName": "Robotina",
    "FullName": "Robotina (ROX)"
  },
  {
    "Symbol": "ADM",
    "CoinName": "Adamant",
    "FullName": "Adamant (ADM)"
  },
  {
    "Symbol": "AMBT",
    "CoinName": "AMBT Token",
    "FullName": "AMBT Token (AMBT)"
  },
  {
    "Symbol": "MEE",
    "CoinName": "CoinMeet",
    "FullName": "CoinMeet (MEE)"
  },
  {
    "Symbol": "BTRM",
    "CoinName": "Betrium Token",
    "FullName": "Betrium Token (BTRM)"
  },
  {
    "Symbol": "MANNA",
    "CoinName": "Manna",
    "FullName": "Manna (MANNA)"
  },
  {
    "Symbol": "ePRX",
    "CoinName": "eProxy",
    "FullName": "eProxy (ePRX)"
  },
  {
    "Symbol": "HMC",
    "CoinName": "Hi Mutual Society",
    "FullName": "Hi Mutual Society (HMC)"
  },
  {
    "Symbol": "ZIX",
    "CoinName": "ZIX Token",
    "FullName": "ZIX Token (ZIX)"
  },
  {
    "Symbol": "ELEC",
    "CoinName": "Electrify.Asia",
    "FullName": "Electrify.Asia (ELEC)"
  },
  {
    "Symbol": "ORGT",
    "CoinName": "Organic Token",
    "FullName": "Organic Token (ORGT)"
  },
  {
    "Symbol": "LOOM",
    "CoinName": "Loom Network",
    "FullName": "Loom Network (LOOM)"
  },
  {
    "Symbol": "PAN",
    "CoinName": "Pantos",
    "FullName": "Pantos (PAN)"
  },
  {
    "Symbol": "BOTC",
    "CoinName": "BotChain",
    "FullName": "BotChain (BOTC)"
  },
  {
    "Symbol": "VIEW",
    "CoinName": "Viewly",
    "FullName": "Viewly (VIEW)"
  },
  {
    "Symbol": "OKOIN",
    "CoinName": "OKOIN",
    "FullName": "OKOIN (OKOIN)"
  },
  {
    "Symbol": "ADK",
    "CoinName": "Aidos Kuneen",
    "FullName": "Aidos Kuneen (ADK)"
  },
  {
    "Symbol": "ESS",
    "CoinName": "Essentia",
    "FullName": "Essentia (ESS)"
  },
  {
    "Symbol": "VIT",
    "CoinName": "Vision Industry Token",
    "FullName": "Vision Industry Token (VIT)"
  },
  {
    "Symbol": "SERA",
    "CoinName": "Seraph",
    "FullName": "Seraph (SERA)"
  },
  {
    "Symbol": "BLN",
    "CoinName": "Bulleon",
    "FullName": "Bulleon (BLN)"
  },
  {
    "Symbol": "AET",
    "CoinName": "AfterEther",
    "FullName": "AfterEther (AET)"
  },
  {
    "Symbol": "CMOS",
    "CoinName": "Cosmo",
    "FullName": "Cosmo (CMOS)"
  },
  {
    "Symbol": "PGN",
    "CoinName": "Pigeoncoin",
    "FullName": "Pigeoncoin (PGN)"
  },
  {
    "Symbol": "BMH",
    "CoinName": "BlockMesh",
    "FullName": "BlockMesh (BMH)"
  },
  {
    "Symbol": "REDN",
    "CoinName": "Reden",
    "FullName": "Reden (REDN)"
  },
  {
    "Symbol": "TLP",
    "CoinName": "TulipCoin",
    "FullName": "TulipCoin (TLP)"
  },
  {
    "Symbol": "GENS",
    "CoinName": "DAOstack",
    "FullName": "DAOstack (GENS)"
  },
  {
    "Symbol": "BSX",
    "CoinName": "Bitspace",
    "FullName": "Bitspace (BSX)"
  },
  {
    "Symbol": "BBN",
    "CoinName": "BBNCOIN",
    "FullName": "BBNCOIN (BBN)"
  },
  {
    "Symbol": "TUSD",
    "CoinName": "True USD",
    "FullName": "True USD (TUSD)"
  },
  {
    "Symbol": "BNN",
    "CoinName": "Banyan Network",
    "FullName": "Banyan Network (BNN)"
  },
  {
    "Symbol": "SPND",
    "CoinName": "Spindle",
    "FullName": "Spindle (SPND)"
  },
  {
    "Symbol": "FNO",
    "CoinName": "Fonero",
    "FullName": "Fonero (FNO)"
  },
  {
    "Symbol": "PAS",
    "CoinName": "Passive Coin",
    "FullName": "Passive Coin (PAS)"
  },
  {
    "Symbol": "XSG",
    "CoinName": "Snowgem",
    "FullName": "Snowgem (XSG)"
  },
  {
    "Symbol": "CVTC",
    "CoinName": "CavatCoin",
    "FullName": "CavatCoin (CVTC)"
  },
  {
    "Symbol": "FARM",
    "CoinName": "FARM Coin",
    "FullName": "FARM Coin (FARM)"
  },
  {
    "Symbol": "NEXT",
    "CoinName": "Next.exchange Token",
    "FullName": "Next.exchange Token (NEXT)"
  },
  {
    "Symbol": "XCLR",
    "CoinName": "ClearCoin",
    "FullName": "ClearCoin (XCLR)"
  },
  {
    "Symbol": "BPX",
    "CoinName": "BlitzPredict",
    "FullName": "BlitzPredict (BPX)"
  },
  {
    "Symbol": "SWTH",
    "CoinName": "Switcheo",
    "FullName": "Switcheo (SWTH)"
  },
  {
    "Symbol": "FDZ",
    "CoinName": "Friendz",
    "FullName": "Friendz (FDZ)"
  },
  {
    "Symbol": "VTN",
    "CoinName": "Voltroon",
    "FullName": "Voltroon (VTN)"
  },
  {
    "Symbol": "BRIA",
    "CoinName": "Briacoin",
    "FullName": "Briacoin (BRIA)"
  },
  {
    "Symbol": "IC",
    "CoinName": "Ignition",
    "FullName": "Ignition (IC)"
  },
  {
    "Symbol": "ROI",
    "CoinName": "ROIcoin",
    "FullName": "ROIcoin (ROI)"
  },
  {
    "Symbol": "ETHPR",
    "CoinName": "Ethereum Premium",
    "FullName": "Ethereum Premium (ETHPR)"
  },
  {
    "Symbol": "MNB",
    "CoinName": "MoneyBag",
    "FullName": "MoneyBag (MNB)"
  },
  {
    "Symbol": "ACH",
    "CoinName": "AchieveCoin",
    "FullName": "AchieveCoin (ACH)"
  },
  {
    "Symbol": "BTL",
    "CoinName": "Bitrolium",
    "FullName": "Bitrolium (BTL)"
  },
  {
    "Symbol": "GOAL",
    "CoinName": "Goal Bonanza",
    "FullName": "Goal Bonanza (GOAL)"
  },
  {
    "Symbol": "RAC",
    "CoinName": "RAcoin",
    "FullName": "RAcoin (RAC)"
  },
  {
    "Symbol": "BEX",
    "CoinName": "BEX token",
    "FullName": "BEX token (BEX)"
  },
  {
    "Symbol": "XCM",
    "CoinName": "CoinMetro",
    "FullName": "CoinMetro (XCM)"
  },
  {
    "Symbol": "CEEK",
    "CoinName": "CEEK Smart VR Token",
    "FullName": "CEEK Smart VR Token (CEEK)"
  },
  {
    "Symbol": "WIIX",
    "CoinName": "Wiix",
    "FullName": "Wiix (WIIX)"
  },
  {
    "Symbol": "EOSDAC",
    "CoinName": "eosDAC",
    "FullName": "eosDAC (EOSDAC)"
  },
  {
    "Symbol": "BCI",
    "CoinName": "Bitcoin Interest",
    "FullName": "Bitcoin Interest (BCI)"
  },
  {
    "Symbol": "MEDIC",
    "CoinName": "MedicCoin",
    "FullName": "MedicCoin (MEDIC)"
  },
  {
    "Symbol": "BBC",
    "CoinName": "TraDove B2BCoin",
    "FullName": "TraDove B2BCoin (BBC)"
  },
  {
    "Symbol": "KWH",
    "CoinName": "KWHCoin",
    "FullName": "KWHCoin (KWH)"
  },
  {
    "Symbol": "CTXC",
    "CoinName": "Cortex",
    "FullName": "Cortex (CTXC)"
  },
  {
    "Symbol": "FTX",
    "CoinName": "FintruX",
    "FullName": "FintruX (FTX)"
  },
  {
    "Symbol": "BDP",
    "CoinName": "Bidipass",
    "FullName": "Bidipass (BDP)"
  },
  {
    "Symbol": "FLM",
    "CoinName": "FOLM coin",
    "FullName": "FOLM coin (FLM)"
  },
  {
    "Symbol": "ALPS",
    "CoinName": "Alpenschillling",
    "FullName": "Alpenschillling (ALPS)"
  },
  {
    "Symbol": "GREEN",
    "CoinName": "GreenX",
    "FullName": "GreenX (GREEN)"
  },
  {
    "Symbol": "ABJ",
    "CoinName": "Abjcoin",
    "FullName": "Abjcoin (ABJ)"
  },
  {
    "Symbol": "RAP",
    "CoinName": "Rapture",
    "FullName": "Rapture (RAP)"
  },
  {
    "Symbol": "ANI",
    "CoinName": "Animecoin",
    "FullName": "Animecoin (ANI)"
  },
  {
    "Symbol": "NOKU",
    "CoinName": "NOKU Master token",
    "FullName": "NOKU Master token (NOKU)"
  },
  {
    "Symbol": "EURN",
    "CoinName": "NOKU EUR",
    "FullName": "NOKU EUR (EURN)"
  },
  {
    "Symbol": "ORS",
    "CoinName": "ORS Group",
    "FullName": "ORS Group (ORS)"
  },
  {
    "Symbol": "DARX",
    "CoinName": "Bitdaric",
    "FullName": "Bitdaric (DARX)"
  },
  {
    "Symbol": "UWC",
    "CoinName": "Uwezocoin",
    "FullName": "Uwezocoin (UWC)"
  },
  {
    "Symbol": "CPX",
    "CoinName": "Apex Token",
    "FullName": "Apex Token (CPX)"
  },
  {
    "Symbol": "DOCK",
    "CoinName": "Dock.io",
    "FullName": "Dock.io (DOCK)"
  },
  {
    "Symbol": "ZLA",
    "CoinName": "Zilla",
    "FullName": "Zilla (ZLA)"
  },
  {
    "Symbol": "LIF",
    "CoinName": "Winding Tree",
    "FullName": "Winding Tree (LIF)"
  },
  {
    "Symbol": "EFX",
    "CoinName": "The Effect.ai",
    "FullName": "The Effect.ai (EFX)"
  },
  {
    "Symbol": "LND",
    "CoinName": "Lendingblock",
    "FullName": "Lendingblock (LND)"
  },
  {
    "Symbol": "MNRB",
    "CoinName": "MoneyRebel",
    "FullName": "MoneyRebel (MNRB)"
  },
  {
    "Symbol": "FTO",
    "CoinName": "FuturoCoin",
    "FullName": "FuturoCoin (FTO)"
  },
  {
    "Symbol": "HPAY",
    "CoinName": "HadePay",
    "FullName": "HadePay (HPAY)"
  },
  {
    "Symbol": "SIG",
    "CoinName": "Signal",
    "FullName": "Signal (SIG)"
  },
  {
    "Symbol": "CARE",
    "CoinName": "Carebit",
    "FullName": "Carebit (CARE)"
  },
  {
    "Symbol": "NZL",
    "CoinName": "Zealium",
    "FullName": "Zealium (NZL)"
  },
  {
    "Symbol": "TBT",
    "CoinName": "T-BOT",
    "FullName": "T-BOT (TBT)"
  },
  {
    "Symbol": "XMC",
    "CoinName": "Monero Classic",
    "FullName": "Monero Classic (XMC)"
  },
  {
    "Symbol": "HOLO",
    "CoinName": "Holo",
    "FullName": "Holo (HOLO)"
  },
  {
    "Symbol": "OAK",
    "CoinName": "Acorn Collective",
    "FullName": "Acorn Collective (OAK)"
  },
  {
    "Symbol": "DML",
    "CoinName": "Decentralized Machine Learning",
    "FullName": "Decentralized Machine Learning (DML)"
  },
  {
    "Symbol": "GEM",
    "CoinName": "Gems",
    "FullName": "Gems (GEM)"
  },
  {
    "Symbol": "TIPS",
    "CoinName": "FedoraCoin",
    "FullName": "FedoraCoin (TIPS)"
  },
  {
    "Symbol": "MOS",
    "CoinName": "MOS Coin",
    "FullName": "MOS Coin (MOS)"
  },
  {
    "Symbol": "TBX",
    "CoinName": "Tokenbox",
    "FullName": "Tokenbox (TBX)"
  },
  {
    "Symbol": "PNT",
    "CoinName": "Penta",
    "FullName": "Penta (PNT)"
  },
  {
    "Symbol": "WCOIN",
    "CoinName": "WCoin",
    "FullName": "WCoin (WCOIN)"
  },
  {
    "Symbol": "CHARM",
    "CoinName": "Charm Coin",
    "FullName": "Charm Coin (CHARM)"
  },
  {
    "Symbol": "PROTON",
    "CoinName": "Proton",
    "FullName": "Proton (PROTON)"
  },
  {
    "Symbol": "DERO",
    "CoinName": "Dero",
    "FullName": "Dero (DERO)"
  },
  {
    "Symbol": "DEAL",
    "CoinName": "iDealCash",
    "FullName": "iDealCash (DEAL)"
  },
  {
    "Symbol": "JUMP",
    "CoinName": "Jumpcoin",
    "FullName": "Jumpcoin (JUMP)"
  },
  {
    "Symbol": "ZCO",
    "CoinName": "Zebi Coin",
    "FullName": "Zebi Coin (ZCO)"
  },
  {
    "Symbol": "KRL",
    "CoinName": "Kryll",
    "FullName": "Kryll (KRL)"
  },
  {
    "Symbol": "TMT",
    "CoinName": "Traxia Membership Token",
    "FullName": "Traxia Membership Token (TMT)"
  },
  {
    "Symbol": "NEXO",
    "CoinName": "NEXO",
    "FullName": "NEXO (NEXO)"
  },
  {
    "Symbol": "CHX",
    "CoinName": "Own",
    "FullName": "Own (CHX)"
  },
  {
    "Symbol": "SS",
    "CoinName": "Sharder",
    "FullName": "Sharder (SS)"
  },
  {
    "Symbol": "0XBTC",
    "CoinName": "0xBitcoin",
    "FullName": "0xBitcoin (0xBTC)"
  },
  {
    "Symbol": "XMO",
    "CoinName": "Monero Original",
    "FullName": "Monero Original (XMO)"
  },
  {
    "Symbol": "EDU",
    "CoinName": "EduCoin",
    "FullName": "EduCoin (EDU)"
  },
  {
    "Symbol": "PCL",
    "CoinName": "Peculium",
    "FullName": "Peculium (PCL)"
  },
  {
    "Symbol": "MITX",
    "CoinName": "Morpheus Infrastructure Token",
    "FullName": "Morpheus Infrastructure Token (MITX)"
  },
  {
    "Symbol": "APH",
    "CoinName": "Aphelion",
    "FullName": "Aphelion (APH)"
  },
  {
    "Symbol": "NBAI",
    "CoinName": "Nebula AI",
    "FullName": "Nebula AI (NBAI)"
  },
  {
    "Symbol": "CVT",
    "CoinName": "CyberVein",
    "FullName": "CyberVein (CVT)"
  },
  {
    "Symbol": "TUT",
    "CoinName": "Tutellus",
    "FullName": "Tutellus (TUT)"
  },
  {
    "Symbol": "BETT",
    "CoinName": "Bettium",
    "FullName": "Bettium (BETT)"
  },
  {
    "Symbol": "NOAH",
    "CoinName": "NOAHCOIN",
    "FullName": "NOAHCOIN (NOAH)"
  },
  {
    "Symbol": "PAL",
    "CoinName": "PolicyPal Network",
    "FullName": "PolicyPal Network (PAL)"
  },
  {
    "Symbol": "ENU",
    "CoinName": "Enumivo",
    "FullName": "Enumivo (ENU)"
  },
  {
    "Symbol": "BFDT",
    "CoinName": "Befund",
    "FullName": "Befund (BFDT)"
  },
  {
    "Symbol": "KEP",
    "CoinName": "Kepler",
    "FullName": "Kepler (KEP)"
  },
  {
    "Symbol": "RUBY",
    "CoinName": "Rubius",
    "FullName": "Rubius (RUBY)"
  },
  {
    "Symbol": "CTKN",
    "CoinName": "Curaizon",
    "FullName": "Curaizon (CTKN)"
  },
  {
    "Symbol": "YUM",
    "CoinName": "Yumerium",
    "FullName": "Yumerium (YUM)"
  },
  {
    "Symbol": "GSC",
    "CoinName": "Global Social Chain",
    "FullName": "Global Social Chain (GSC)"
  },
  {
    "Symbol": "DESI",
    "CoinName": "Desico",
    "FullName": "Desico (DESI)"
  },
  {
    "Symbol": "FNP",
    "CoinName": "FlipNpik",
    "FullName": "FlipNpik (FNP)"
  },
  {
    "Symbol": "VLUX",
    "CoinName": "VLUX",
    "FullName": "VLUX (VLUX)"
  },
  {
    "Symbol": "MTC",
    "CoinName": "DOCADEMIC",
    "FullName": "DOCADEMIC (MTC)"
  },
  {
    "Symbol": "MTKN",
    "CoinName": "MyToken",
    "FullName": "MyToken (MTKN)"
  },
  {
    "Symbol": "SSH",
    "CoinName": "StreamSpace",
    "FullName": "StreamSpace (SSH)"
  },
  {
    "Symbol": "XBI",
    "CoinName": "Bitcoin Incognito",
    "FullName": "Bitcoin Incognito (XBI)"
  },
  {
    "Symbol": "VRA",
    "CoinName": "Verasity",
    "FullName": "Verasity (VRA)"
  },
  {
    "Symbol": "MRK",
    "CoinName": "MARK.SPACE",
    "FullName": "MARK.SPACE (MRK)"
  },
  {
    "Symbol": "FRV",
    "CoinName": "Fitrova",
    "FullName": "Fitrova (FRV)"
  },
  {
    "Symbol": "WINS",
    "CoinName": "WinStars",
    "FullName": "WinStars (WINS)"
  },
  {
    "Symbol": "XES",
    "CoinName": "Proxeus",
    "FullName": "Proxeus (XES)"
  },
  {
    "Symbol": "RTB",
    "CoinName": "AB-CHAIN",
    "FullName": "AB-CHAIN (RTB)"
  },
  {
    "Symbol": "FXT",
    "CoinName": "FuzeX",
    "FullName": "FuzeX (FXT)"
  },
  {
    "Symbol": "DXC",
    "CoinName": "DixiCoin",
    "FullName": "DixiCoin (DXC)"
  },
  {
    "Symbol": "CHBR",
    "CoinName": "CryptoHub",
    "FullName": "CryptoHub (CHBR)"
  },
  {
    "Symbol": "OWD",
    "CoinName": "Owlstand",
    "FullName": "Owlstand (OWD)"
  },
  {
    "Symbol": "ELLI",
    "CoinName": "ElliotCoin",
    "FullName": "ElliotCoin (ELLI)"
  },
  {
    "Symbol": "DAN",
    "CoinName": "Daneel",
    "FullName": "Daneel (DAN)"
  },
  {
    "Symbol": "CSEN",
    "CoinName": "Consensus",
    "FullName": "Consensus (CSEN)"
  },
  {
    "Symbol": "UBT",
    "CoinName": "UniBright",
    "FullName": "UniBright (UBT)"
  },
  {
    "Symbol": "AMO",
    "CoinName": "AMO Coin",
    "FullName": "AMO Coin (AMO)"
  },
  {
    "Symbol": "LBA",
    "CoinName": "Cred",
    "FullName": "Cred (LBA)"
  },
  {
    "Symbol": "LIVE",
    "CoinName": "Live Stars",
    "FullName": "Live Stars (LIVE)"
  },
  {
    "Symbol": "GBG",
    "CoinName": "Golos Gold",
    "FullName": "Golos Gold (GBG)"
  },
  {
    "Symbol": "CNN",
    "CoinName": "Content Neutrality Network",
    "FullName": "Content Neutrality Network (CNN)"
  },
  {
    "Symbol": "SHL",
    "CoinName": "Oyster Shell",
    "FullName": "Oyster Shell (SHL)"
  },
  {
    "Symbol": "ETZ",
    "CoinName": "EtherZero",
    "FullName": "EtherZero (ETZ)"
  },
  {
    "Symbol": "SKM",
    "CoinName": "Skrumble Network",
    "FullName": "Skrumble Network (SKM)"
  },
  {
    "Symbol": "SHR",
    "CoinName": "ShareRing",
    "FullName": "ShareRing (SHR)"
  },
  {
    "Symbol": "UBEX",
    "CoinName": "Ubex",
    "FullName": "Ubex (UBEX)"
  },
  {
    "Symbol": "IVY",
    "CoinName": "IvyKoin",
    "FullName": "IvyKoin (IVY)"
  },
  {
    "Symbol": "KEC",
    "CoinName": "KEYCO",
    "FullName": "KEYCO (KEC)"
  },
  {
    "Symbol": "ODE",
    "CoinName": "ODEM ",
    "FullName": "ODEM  (ODE)"
  },
  {
    "Symbol": "AMN",
    "CoinName": "Amon",
    "FullName": "Amon (AMN)"
  },
  {
    "Symbol": "SABR",
    "CoinName": "SABR Coin",
    "FullName": "SABR Coin (SABR)"
  },
  {
    "Symbol": "HWC",
    "CoinName": "HollyWoodCoin",
    "FullName": "HollyWoodCoin (HWC)"
  },
  {
    "Symbol": "BITGOLD",
    "CoinName": "bitGold",
    "FullName": "bitGold (BITGOLD)"
  },
  {
    "Symbol": "BITSILVER",
    "CoinName": "bitSilver",
    "FullName": "bitSilver (BITSILVER)"
  },
  {
    "Symbol": "GIN",
    "CoinName": "GINcoin",
    "FullName": "GINcoin (GIN)"
  },
  {
    "Symbol": "OPEN",
    "CoinName": "Open Platform",
    "FullName": "Open Platform (OPEN)"
  },
  {
    "Symbol": "NLX",
    "CoinName": "Nullex",
    "FullName": "Nullex (NLX)"
  },
  {
    "Symbol": "LNKC",
    "CoinName": "Linker Coin",
    "FullName": "Linker Coin (LNKC)"
  },
  {
    "Symbol": "FACE",
    "CoinName": "Faceter ",
    "FullName": "Faceter  (FACE)"
  },
  {
    "Symbol": "MRPH",
    "CoinName": "Morpheus Network",
    "FullName": "Morpheus Network (MRPH)"
  },
  {
    "Symbol": "IOTX",
    "CoinName": "IoTeX Network",
    "FullName": "IoTeX Network (IOTX)"
  },
  {
    "Symbol": "STM",
    "CoinName": "Streamity",
    "FullName": "Streamity (STM)"
  },
  {
    "Symbol": "ITL",
    "CoinName": "Italian Lira",
    "FullName": "Italian Lira (ITL)"
  },
  {
    "Symbol": "AITT",
    "CoinName": "AITrading",
    "FullName": "AITrading (AITT)"
  },
  {
    "Symbol": "ITM",
    "CoinName": "intimate.io",
    "FullName": "intimate.io (ITM)"
  },
  {
    "Symbol": "VID",
    "CoinName": "VideoCoin",
    "FullName": "VideoCoin (VID)"
  },
  {
    "Symbol": "UCT",
    "CoinName": "UCOT",
    "FullName": "UCOT (UCT)"
  },
  {
    "Symbol": "SNTR",
    "CoinName": "Silent Notary",
    "FullName": "Silent Notary (SNTR)"
  },
  {
    "Symbol": "ZMR",
    "CoinName": "Monero 0",
    "FullName": "Monero 0 (ZMR)"
  },
  {
    "Symbol": "XMV",
    "CoinName": "MoneroV",
    "FullName": "MoneroV (XMV)"
  },
  {
    "Symbol": "NKN",
    "CoinName": "NKN",
    "FullName": "NKN (NKN)"
  },
  {
    "Symbol": "ELY",
    "CoinName": "Elysian",
    "FullName": "Elysian (ELY)"
  },
  {
    "Symbol": "HER",
    "CoinName": "Hero Node",
    "FullName": "Hero Node (HER)"
  },
  {
    "Symbol": "PAR",
    "CoinName": "Parlay",
    "FullName": "Parlay (PAR)"
  },
  {
    "Symbol": "SLX",
    "CoinName": "Slate",
    "FullName": "Slate (SLX)"
  },
  {
    "Symbol": "LTCC",
    "CoinName": "Listerclassic Coin",
    "FullName": "Listerclassic Coin (LTCC)"
  },
  {
    "Symbol": "RST",
    "CoinName": "REGA Risk Sharing Token",
    "FullName": "REGA Risk Sharing Token (RST)"
  },
  {
    "Symbol": "XBB",
    "CoinName": "BrickBlock",
    "FullName": "BrickBlock (XBB)"
  },
  {
    "Symbol": "AMX",
    "CoinName": "Amero",
    "FullName": "Amero (AMX)"
  },
  {
    "Symbol": "TFC",
    "CoinName": "The Freedom Coin",
    "FullName": "The Freedom Coin (TFC)"
  },
  {
    "Symbol": "REPO",
    "CoinName": "Repo Coin",
    "FullName": "Repo Coin (REPO)"
  },
  {
    "Symbol": "IRC",
    "CoinName": "IRONCOIN",
    "FullName": "IRONCOIN (IRC)"
  },
  {
    "Symbol": "PLTC",
    "CoinName": "PlatinCoin",
    "FullName": "PlatinCoin (PLTC)"
  },
  {
    "Symbol": "OIO",
    "CoinName": "Online",
    "FullName": "Online (OIO)"
  },
  {
    "Symbol": "ANGL",
    "CoinName": "Angel Token",
    "FullName": "Angel Token (ANGL)"
  },
  {
    "Symbol": "ANTS",
    "CoinName": "ANTS Reloaded",
    "FullName": "ANTS Reloaded (ANTS)"
  },
  {
    "Symbol": "KNG",
    "CoinName": "BetKings",
    "FullName": "BetKings (KNG)"
  },
  {
    "Symbol": "CMM",
    "CoinName": "Commercium ",
    "FullName": "Commercium  (CMM)"
  },
  {
    "Symbol": "STT",
    "CoinName": "Staramba",
    "FullName": "Staramba (STT)"
  },
  {
    "Symbol": "WYS",
    "CoinName": "Wysker",
    "FullName": "Wysker (WYS)"
  },
  {
    "Symbol": "COG",
    "CoinName": "Cognitio",
    "FullName": "Cognitio (COG)"
  },
  {
    "Symbol": "ZIPT",
    "CoinName": "Zippie",
    "FullName": "Zippie (ZIPT)"
  },
  {
    "Symbol": "OSA",
    "CoinName": "Optimal Shelf Availability Token",
    "FullName": "Optimal Shelf Availability Token (OSA)"
  },
  {
    "Symbol": "EXC",
    "CoinName": "Eximchain",
    "FullName": "Eximchain (EXC)"
  },
  {
    "Symbol": "BEN",
    "CoinName": "BitCOEN",
    "FullName": "BitCOEN (BEN)"
  },
  {
    "Symbol": "EPT",
    "CoinName": "Endor Protocol Token ",
    "FullName": "Endor Protocol Token  (EPT)"
  },
  {
    "Symbol": "BCIO",
    "CoinName": "Blockchain.io",
    "FullName": "Blockchain.io (BCIO)"
  },
  {
    "Symbol": "BMK",
    "CoinName": "Benchmark",
    "FullName": "Benchmark (BMK)"
  },
  {
    "Symbol": "ROC",
    "CoinName": "Rasputin Online Coin",
    "FullName": "Rasputin Online Coin (ROC)"
  },
  {
    "Symbol": "BZNT",
    "CoinName": "Bezant",
    "FullName": "Bezant (BZNT)"
  },
  {
    "Symbol": "LYL",
    "CoinName": "LoyalCoin",
    "FullName": "LoyalCoin (LYL)"
  },
  {
    "Symbol": "FT",
    "CoinName": "Fabric Token",
    "FullName": "Fabric Token (FT)"
  },
  {
    "Symbol": "BMX",
    "CoinName": "BitMart Coin",
    "FullName": "BitMart Coin (BMX)"
  },
  {
    "Symbol": "PHI",
    "CoinName": "PHI Token",
    "FullName": "PHI Token (PHI)"
  },
  {
    "Symbol": "PMNT",
    "CoinName": "Paymon",
    "FullName": "Paymon (PMNT)"
  },
  {
    "Symbol": "BNTN",
    "CoinName": "Blocnation",
    "FullName": "Blocnation (BNTN)"
  },
  {
    "Symbol": "HYT",
    "CoinName": "HoryouToken",
    "FullName": "HoryouToken (HYT)"
  },
  {
    "Symbol": "GOST",
    "CoinName": "Phantasma",
    "FullName": "Phantasma (GOST)"
  },
  {
    "Symbol": "GRMD",
    "CoinName": "GreenMed",
    "FullName": "GreenMed (GRMD)"
  },
  {
    "Symbol": "SSC",
    "CoinName": "SelfSell",
    "FullName": "SelfSell (SSC)"
  },
  {
    "Symbol": "LOKI",
    "CoinName": "Loki",
    "FullName": "Loki (LOKI)"
  },
  {
    "Symbol": "BKT",
    "CoinName": "Blocktrade token",
    "FullName": "Blocktrade token (BKT)"
  },
  {
    "Symbol": "NCP",
    "CoinName": "Newton Coin",
    "FullName": "Newton Coin (NCP)"
  },
  {
    "Symbol": "MPT",
    "CoinName": "Media Protocol Token",
    "FullName": "Media Protocol Token (MPT)"
  },
  {
    "Symbol": "STAX",
    "CoinName": "Staxcoin",
    "FullName": "Staxcoin (STAX)"
  },
  {
    "Symbol": "MRN",
    "CoinName": "Mercoin",
    "FullName": "Mercoin (MRN)"
  },
  {
    "Symbol": "FOPA",
    "CoinName": "Fopacoin",
    "FullName": "Fopacoin (FOPA)"
  },
  {
    "Symbol": "CBC",
    "CoinName": "CashBet Coin",
    "FullName": "CashBet Coin (CBC)"
  },
  {
    "Symbol": "OOT",
    "CoinName": "Utrum",
    "FullName": "Utrum (OOT)"
  },
  {
    "Symbol": "NBC",
    "CoinName": "Niobium",
    "FullName": "Niobium (NBC)"
  },
  {
    "Symbol": "SIC",
    "CoinName": "Swisscoin",
    "FullName": "Swisscoin (SIC)"
  },
  {
    "Symbol": "ALG",
    "CoinName": "Algory",
    "FullName": "Algory (ALG)"
  },
  {
    "Symbol": "PI",
    "CoinName": "PCHAIN",
    "FullName": "PCHAIN (PI)"
  },
  {
    "Symbol": "EXCC",
    "CoinName": "ExchangeCoin",
    "FullName": "ExchangeCoin (EXCC)"
  },
  {
    "Symbol": "REL",
    "CoinName": "Reliance",
    "FullName": "Reliance (REL)"
  },
  {
    "Symbol": "BTCN",
    "CoinName": "BitcoiNote",
    "FullName": "BitcoiNote (BTCN)"
  },
  {
    "Symbol": "HERO",
    "CoinName": "Hero",
    "FullName": "Hero (HERO)"
  },
  {
    "Symbol": "SEELE",
    "CoinName": "Seele",
    "FullName": "Seele (SEELE)"
  },
  {
    "Symbol": "EJAC",
    "CoinName": "EJA Coin",
    "FullName": "EJA Coin (EJAC)"
  },
  {
    "Symbol": "APIS",
    "CoinName": "APIS",
    "FullName": "APIS (APIS)"
  },
  {
    "Symbol": "UPP",
    "CoinName": "Sentinel Protocol",
    "FullName": "Sentinel Protocol (UPP)"
  },
  {
    "Symbol": "XT3",
    "CoinName": "Xt3ch",
    "FullName": "Xt3ch (XT3)"
  },
  {
    "Symbol": "MGD",
    "CoinName": "MassGrid",
    "FullName": "MassGrid (MGD)"
  },
  {
    "Symbol": "VIG",
    "CoinName": "TheVig",
    "FullName": "TheVig (VIG)"
  },
  {
    "Symbol": "PLURA",
    "CoinName": "PluraCoin",
    "FullName": "PluraCoin (PLURA)"
  },
  {
    "Symbol": "SWACH",
    "CoinName": "Swachhcoin",
    "FullName": "Swachhcoin (SWACH)"
  },
  {
    "Symbol": "NWCN",
    "CoinName": "NowCoin",
    "FullName": "NowCoin (NWCN)"
  },
  {
    "Symbol": "EMAR",
    "CoinName": "EmaratCoin",
    "FullName": "EmaratCoin (EMAR)"
  },
  {
    "Symbol": "ICST",
    "CoinName": "ICST",
    "FullName": "ICST (ICST)"
  },
  {
    "Symbol": "XTNC",
    "CoinName": "XtendCash",
    "FullName": "XtendCash (XTNC)"
  },
  {
    "Symbol": "ROE",
    "CoinName": "Rover Coin",
    "FullName": "Rover Coin (ROE)"
  },
  {
    "Symbol": "LTCP",
    "CoinName": "LitecoinPro",
    "FullName": "LitecoinPro (LTCP)"
  },
  {
    "Symbol": "DKD",
    "CoinName": "Dekado",
    "FullName": "Dekado (DKD)"
  },
  {
    "Symbol": "LYNX",
    "CoinName": "Lynx",
    "FullName": "Lynx (LYNX)"
  },
  {
    "Symbol": "POSQ",
    "CoinName": "Poseidon Quark",
    "FullName": "Poseidon Quark (POSQ)"
  },
  {
    "Symbol": "YCE",
    "CoinName": "MYCE",
    "FullName": "MYCE (YCE)"
  },
  {
    "Symbol": "OCX",
    "CoinName": "Original Crypto Coin",
    "FullName": "Original Crypto Coin (OCX)"
  },
  {
    "Symbol": "STOR",
    "CoinName": "Self Storage Coin",
    "FullName": "Self Storage Coin (STOR)"
  },
  {
    "Symbol": "ARO",
    "CoinName": "Arionum",
    "FullName": "Arionum (ARO)"
  },
  {
    "Symbol": "BWS",
    "CoinName": "BitcoinWSpectrum",
    "FullName": "BitcoinWSpectrum (BWS)"
  },
  {
    "Symbol": "BTCC",
    "CoinName": "Bitcoin Core",
    "FullName": "Bitcoin Core (BTCC)"
  },
  {
    "Symbol": "GOLF",
    "CoinName": "GolfCoin",
    "FullName": "GolfCoin (GOLF)"
  },
  {
    "Symbol": "MUSE",
    "CoinName": "Muse",
    "FullName": "Muse (MUSE)"
  },
  {
    "Symbol": "OCT",
    "CoinName": "OracleChain",
    "FullName": "OracleChain (OCT)"
  },
  {
    "Symbol": "XCEL",
    "CoinName": "XcelTrip",
    "FullName": "XcelTrip (XCEL)"
  },
  {
    "Symbol": "ECH",
    "CoinName": "EthereCash",
    "FullName": "EthereCash (ECH)"
  },
  {
    "Symbol": "XMN",
    "CoinName": "Motion",
    "FullName": "Motion (XMN)"
  },
  {
    "Symbol": "PLUS1",
    "CoinName": "PlusOneCoin",
    "FullName": "PlusOneCoin (PLUS1)"
  },
  {
    "Symbol": "COI",
    "CoinName": "Coinnec",
    "FullName": "Coinnec (COI)"
  },
  {
    "Symbol": "CANDY",
    "CoinName": "UnicornGo Candy",
    "FullName": "UnicornGo Candy (CANDY)"
  },
  {
    "Symbol": "AXE",
    "CoinName": "Axe",
    "FullName": "Axe (AXE)"
  },
  {
    "Symbol": "SHARD",
    "CoinName": "ShardCoin",
    "FullName": "ShardCoin (SHARD)"
  },
  {
    "Symbol": "GMCN",
    "CoinName": "GambleCoin",
    "FullName": "GambleCoin (GMCN)"
  },
  {
    "Symbol": "TRVC",
    "CoinName": "Trivechain",
    "FullName": "Trivechain (TRVC)"
  },
  {
    "Symbol": "KRX",
    "CoinName": "RAVN Korrax ",
    "FullName": "RAVN Korrax  (KRX)"
  },
  {
    "Symbol": "BITX",
    "CoinName": "BitScreener",
    "FullName": "BitScreener (BITX)"
  },
  {
    "Symbol": "SKRB",
    "CoinName": "Sakura Bloom",
    "FullName": "Sakura Bloom (SKRB)"
  },
  {
    "Symbol": "HFT",
    "CoinName": "Hirefreehands",
    "FullName": "Hirefreehands (HFT)"
  },
  {
    "Symbol": "OOW",
    "CoinName": "OPP Open WiFi",
    "FullName": "OPP Open WiFi (OOW)"
  },
  {
    "Symbol": "DTEM",
    "CoinName": "Dystem",
    "FullName": "Dystem (DTEM)"
  },
  {
    "Symbol": "TIP",
    "CoinName": "Tip Blockchain",
    "FullName": "Tip Blockchain (TIP)"
  },
  {
    "Symbol": "SOUND",
    "CoinName": "Inmusik",
    "FullName": "Inmusik (SOUND)"
  },
  {
    "Symbol": "HB",
    "CoinName": "HeartBout",
    "FullName": "HeartBout (HB)"
  },
  {
    "Symbol": "TRW",
    "CoinName": "Triwer",
    "FullName": "Triwer (TRW)"
  },
  {
    "Symbol": "IQN",
    "CoinName": "IQeon",
    "FullName": "IQeon (IQN)"
  },
  {
    "Symbol": "GIC",
    "CoinName": "Giant",
    "FullName": "Giant (GIC)"
  },
  {
    "Symbol": "BGL",
    "CoinName": "Buglab",
    "FullName": "Buglab (BGL)"
  },
  {
    "Symbol": "EPIK",
    "CoinName": "EPIK Token",
    "FullName": "EPIK Token (EPIK)"
  },
  {
    "Symbol": "ZMN",
    "CoinName": "ZMINE",
    "FullName": "ZMINE (ZMN)"
  },
  {
    "Symbol": "PNY",
    "CoinName": "Peony Coin",
    "FullName": "Peony Coin (PNY)"
  },
  {
    "Symbol": "SAFE",
    "CoinName": "SafeCoin",
    "FullName": "SafeCoin (SAFE)"
  },
  {
    "Symbol": "COU",
    "CoinName": "Couchain",
    "FullName": "Couchain (COU)"
  },
  {
    "Symbol": "BID",
    "CoinName": "BidCoin",
    "FullName": "BidCoin (BID)"
  },
  {
    "Symbol": "ATH",
    "CoinName": "Atheios",
    "FullName": "Atheios (ATH)"
  },
  {
    "Symbol": "ABS",
    "CoinName": "Absolute Coin",
    "FullName": "Absolute Coin (ABS)"
  },
  {
    "Symbol": "VITAE",
    "CoinName": "Vitae",
    "FullName": "Vitae (VITAE)"
  },
  {
    "Symbol": "XET",
    "CoinName": "Eternal Token",
    "FullName": "Eternal Token (XET)"
  },
  {
    "Symbol": "0xDIARY",
    "CoinName": "The 0xDiary Token",
    "FullName": "The 0xDiary Token (0xDIARY)"
  },
  {
    "Symbol": "BSPM",
    "CoinName": "Bitcoin Supreme",
    "FullName": "Bitcoin Supreme (BSPM)"
  },
  {
    "Symbol": "TDP",
    "CoinName": "TrueDeck",
    "FullName": "TrueDeck (TDP)"
  },
  {
    "Symbol": "XGS",
    "CoinName": "GenesisX",
    "FullName": "GenesisX (XGS)"
  },
  {
    "Symbol": "XUEZ",
    "CoinName": "XUEZ",
    "FullName": "XUEZ (XUEZ)"
  },
  {
    "Symbol": "BIM",
    "CoinName": "BitminerCoin",
    "FullName": "BitminerCoin (BIM)"
  },
  {
    "Symbol": "Dow",
    "CoinName": "DowCoin",
    "FullName": "DowCoin (Dow)"
  },
  {
    "Symbol": "EMN",
    "CoinName": "Eminent Token ",
    "FullName": "Eminent Token  (EMN)"
  },
  {
    "Symbol": "PYT",
    "CoinName": "Payther",
    "FullName": "Payther (PYT)"
  },
  {
    "Symbol": "DEI",
    "CoinName": "Deimos",
    "FullName": "Deimos (DEI)"
  },
  {
    "Symbol": "TPC",
    "CoinName": "TPCash",
    "FullName": "TPCash (TPC)"
  },
  {
    "Symbol": "OYS",
    "CoinName": "Oyster Platform",
    "FullName": "Oyster Platform (OYS)"
  },
  {
    "Symbol": "WEBC",
    "CoinName": "Webchain",
    "FullName": "Webchain (WEBC)"
  },
  {
    "Symbol": "VIDT",
    "CoinName": "V-ID",
    "FullName": "V-ID (VIDT)"
  },
  {
    "Symbol": "JEX",
    "CoinName": "JEX Token",
    "FullName": "JEX Token (JEX)"
  },
  {
    "Symbol": "ILK",
    "CoinName": "Inlock",
    "FullName": "Inlock (ILK)"
  },
  {
    "Symbol": "RYO",
    "CoinName": "Ryo",
    "FullName": "Ryo (RYO)"
  },
  {
    "Symbol": "MUSD",
    "CoinName": "MUSDcoin",
    "FullName": "MUSDcoin (MUSD)"
  },
  {
    "Symbol": "MIC",
    "CoinName": "Mindexcoin",
    "FullName": "Mindexcoin (MIC)"
  },
  {
    "Symbol": "URALS",
    "CoinName": "Urals Coin",
    "FullName": "Urals Coin (URALS)"
  },
  {
    "Symbol": "QWC",
    "CoinName": "Qwertycoin",
    "FullName": "Qwertycoin (QWC)"
  },
  {
    "Symbol": "WAB",
    "CoinName": "WABnetwork",
    "FullName": "WABnetwork (WAB)"
  },
  {
    "Symbol": "BITN",
    "CoinName": "Bitcoin Nova",
    "FullName": "Bitcoin Nova (BITN)"
  },
  {
    "Symbol": "ARE",
    "CoinName": "ARENON",
    "FullName": "ARENON (ARE)"
  },
  {
    "Symbol": "DACASH",
    "CoinName": "DACash",
    "FullName": "DACash (DACASH)"
  },
  {
    "Symbol": "EUNO",
    "CoinName": "EUNO",
    "FullName": "EUNO (EUNO)"
  },
  {
    "Symbol": "KAAS",
    "CoinName": "KAASY.AI",
    "FullName": "KAASY.AI (KAAS)"
  },
  {
    "Symbol": "MMO",
    "CoinName": "MMOCoin",
    "FullName": "MMOCoin (MMO)"
  },
  {
    "Symbol": "MVP",
    "CoinName": "Merculet",
    "FullName": "Merculet (MVP)"
  },
  {
    "Symbol": "DASC",
    "CoinName": "DasCoin",
    "FullName": "DasCoin (DASC)"
  },
  {
    "Symbol": "EGT",
    "CoinName": "Egretia",
    "FullName": "Egretia (EGT)"
  },
  {
    "Symbol": "MET",
    "CoinName": "Metronome",
    "FullName": "Metronome (MET)"
  },
  {
    "Symbol": "PGT",
    "CoinName": "Puregold token",
    "FullName": "Puregold token (PGT)"
  },
  {
    "Symbol": "MEDX",
    "CoinName": "Medibloc",
    "FullName": "Medibloc (MEDX)"
  },
  {
    "Symbol": "SLST",
    "CoinName": "SmartLands",
    "FullName": "SmartLands (SLST)"
  },
  {
    "Symbol": "TGAME",
    "CoinName": "TrueGame",
    "FullName": "TrueGame (TGAME)"
  },
  {
    "Symbol": "SPN",
    "CoinName": "Sapien Network",
    "FullName": "Sapien Network (SPN)"
  },
  {
    "Symbol": "ZINC",
    "CoinName": "ZINC",
    "FullName": "ZINC (ZINC)"
  },
  {
    "Symbol": "KETAN",
    "CoinName": "Ketan",
    "FullName": "Ketan (KETAN)"
  },
  {
    "Symbol": "KBC",
    "CoinName": "Karatgold coin",
    "FullName": "Karatgold coin (KBC)"
  },
  {
    "Symbol": "MFT",
    "CoinName": "Mainframe",
    "FullName": "Mainframe (MFT)"
  },
  {
    "Symbol": "INSUR",
    "CoinName": "InsurChain Coin",
    "FullName": "InsurChain Coin (INSUR)"
  },
  {
    "Symbol": "NIX",
    "CoinName": "NIX",
    "FullName": "NIX (NIX)"
  },
  {
    "Symbol": "ZCN",
    "CoinName": "0chain",
    "FullName": "0chain (ZCN)"
  },
  {
    "Symbol": "FIN",
    "CoinName": "Finom FIN Token",
    "FullName": "Finom FIN Token (FIN)"
  },
  {
    "Symbol": "RPM",
    "CoinName": "Render Payment",
    "FullName": "Render Payment (RPM)"
  },
  {
    "Symbol": "DGX",
    "CoinName": "Digix Gold token",
    "FullName": "Digix Gold token (DGX)"
  },
  {
    "Symbol": "ITA",
    "CoinName": "Italocoin",
    "FullName": "Italocoin (ITA)"
  },
  {
    "Symbol": "NOM",
    "CoinName": "Finom NOM Token",
    "FullName": "Finom NOM Token (NOM)"
  },
  {
    "Symbol": "XSTC",
    "CoinName": "Safe Trade Coin",
    "FullName": "Safe Trade Coin (XSTC)"
  },
  {
    "Symbol": "U42",
    "CoinName": "You42",
    "FullName": "You42 (U42)"
  },
  {
    "Symbol": "EGCC",
    "CoinName": "Engine",
    "FullName": "Engine (EGCC)"
  },
  {
    "Symbol": "FREC",
    "CoinName": "Freyrchain",
    "FullName": "Freyrchain (FREC)"
  },
  {
    "Symbol": "DCC",
    "CoinName": "Distributed Credit Chain",
    "FullName": "Distributed Credit Chain (DCC)"
  },
  {
    "Symbol": "AOA",
    "CoinName": "Aurora ",
    "FullName": "Aurora  (AOA)"
  },
  {
    "Symbol": "LET",
    "CoinName": "LinkEye",
    "FullName": "LinkEye (LET)"
  },
  {
    "Symbol": "MOTI",
    "CoinName": "Motion",
    "FullName": "Motion (MOTI)"
  },
  {
    "Symbol": "PPAI",
    "CoinName": "Project Pai",
    "FullName": "Project Pai (PPAI)"
  },
  {
    "Symbol": "MIXI",
    "CoinName": "Mixin",
    "FullName": "Mixin (MIXI)"
  },
  {
    "Symbol": "CBRT",
    "CoinName": "Cybereits Token ",
    "FullName": "Cybereits Token  (CBRT)"
  },
  {
    "Symbol": "MEET",
    "CoinName": "CoinMeet",
    "FullName": "CoinMeet (MEET)"
  },
  {
    "Symbol": "BOE",
    "CoinName": "Bodhi ",
    "FullName": "Bodhi  (BOE)"
  },
  {
    "Symbol": "RTE",
    "CoinName": "Rate3 ",
    "FullName": "Rate3  (RTE)"
  },
  {
    "Symbol": "CAR",
    "CoinName": "CarBlock ",
    "FullName": "CarBlock  (CAR)"
  },
  {
    "Symbol": "CPT",
    "CoinName": "Cryptaur",
    "FullName": "Cryptaur (CPT)"
  },
  {
    "Symbol": "PCO",
    "CoinName": "Pecunio",
    "FullName": "Pecunio (PCO)"
  },
  {
    "Symbol": "XPST",
    "CoinName": "PokerSports",
    "FullName": "PokerSports (XPST)"
  },
  {
    "Symbol": "HSC",
    "CoinName": "HashCoin ",
    "FullName": "HashCoin  (HSC)"
  },
  {
    "Symbol": "MCV",
    "CoinName": "MCV Token",
    "FullName": "MCV Token (MCV)"
  },
  {
    "Symbol": "SCRL",
    "CoinName": "Scroll",
    "FullName": "Scroll (SCRL)"
  },
  {
    "Symbol": "CONI",
    "CoinName": "CoinBene",
    "FullName": "CoinBene (CONI)"
  },
  {
    "Symbol": "XPAT",
    "CoinName": "Bitnation Pangea",
    "FullName": "Bitnation Pangea (XPAT)"
  },
  {
    "Symbol": "MBLC",
    "CoinName": "Mont Blanc",
    "FullName": "Mont Blanc (MBLC)"
  },
  {
    "Symbol": "DIW",
    "CoinName": "DIWtoken",
    "FullName": "DIWtoken (DIW)"
  },
  {
    "Symbol": "JOINT",
    "CoinName": "Joint Ventures",
    "FullName": "Joint Ventures (JOINT)"
  },
  {
    "Symbol": "IDXM",
    "CoinName": "IDEX Membership",
    "FullName": "IDEX Membership (IDXM)"
  },
  {
    "Symbol": "CCO",
    "CoinName": "Ccore",
    "FullName": "Ccore (CCO)"
  },
  {
    "Symbol": "ATMI",
    "CoinName": "Atonomi",
    "FullName": "Atonomi (ATMI)"
  },
  {
    "Symbol": "TKA",
    "CoinName": "Tokia",
    "FullName": "Tokia (TKA)"
  },
  {
    "Symbol": "RMT",
    "CoinName": "SureRemit",
    "FullName": "SureRemit (RMT)"
  },
  {
    "Symbol": "OLT",
    "CoinName": "OneLedger",
    "FullName": "OneLedger (OLT)"
  },
  {
    "Symbol": "GETX",
    "CoinName": "Guaranteed Ethurance Token Extra",
    "FullName": "Guaranteed Ethurance Token Extra (GETX)"
  },
  {
    "Symbol": "IQ",
    "CoinName": "Everipedia",
    "FullName": "Everipedia (IQ)"
  },
  {
    "Symbol": "BWT",
    "CoinName": "Bittwatt",
    "FullName": "Bittwatt (BWT)"
  },
  {
    "Symbol": "LST",
    "CoinName": "Lendroid Support Token",
    "FullName": "Lendroid Support Token (LST)"
  },
  {
    "Symbol": "EMV",
    "CoinName": "Ethereum Movie Venture",
    "FullName": "Ethereum Movie Venture (EMV)"
  },
  {
    "Symbol": "ESZ",
    "CoinName": "EtherSportz",
    "FullName": "EtherSportz (ESZ)"
  },
  {
    "Symbol": "TRAK",
    "CoinName": "TrakInvest",
    "FullName": "TrakInvest (TRAK)"
  },
  {
    "Symbol": "ZXC",
    "CoinName": "Oxcert",
    "FullName": "Oxcert (ZXC)"
  },
  {
    "Symbol": "BTRN",
    "CoinName": "Biotron",
    "FullName": "Biotron (BTRN)"
  },
  {
    "Symbol": "XMX",
    "CoinName": "XMax",
    "FullName": "XMax (XMX)"
  },
  {
    "Symbol": "VME",
    "CoinName": "VeriME",
    "FullName": "VeriME (VME)"
  },
  {
    "Symbol": "PERU",
    "CoinName": "PeruCoin",
    "FullName": "PeruCoin (PERU)"
  },
  {
    "Symbol": "VITE",
    "CoinName": "VITE",
    "FullName": "VITE (VITE)"
  },
  {
    "Symbol": "RNT",
    "CoinName": "OneRoot Network",
    "FullName": "OneRoot Network (RNT)"
  },
  {
    "Symbol": "BBO",
    "CoinName": "Bigbom",
    "FullName": "Bigbom (BBO)"
  },
  {
    "Symbol": "YUP",
    "CoinName": "Crowdholding",
    "FullName": "Crowdholding (YUP)"
  },
  {
    "Symbol": "SNIP",
    "CoinName": "SnipCoin",
    "FullName": "SnipCoin (SNIP)"
  },
  {
    "Symbol": "XDNA",
    "CoinName": "XDNA",
    "FullName": "XDNA (XDNA)"
  },
  {
    "Symbol": "SAL",
    "CoinName": "SalPay",
    "FullName": "SalPay (SAL)"
  },
  {
    "Symbol": "CARD",
    "CoinName": "Cardstack",
    "FullName": "Cardstack (CARD)"
  },
  {
    "Symbol": "LIKE",
    "CoinName": "LikeCoin",
    "FullName": "LikeCoin (LIKE)"
  },
  {
    "Symbol": "THRT",
    "CoinName": "ThriveToken",
    "FullName": "ThriveToken (THRT)"
  },
  {
    "Symbol": "GTK",
    "CoinName": "GoToken",
    "FullName": "GoToken (GTK)"
  },
  {
    "Symbol": "SKRP",
    "CoinName": "Skraps",
    "FullName": "Skraps (SKRP)"
  },
  {
    "Symbol": "AVH",
    "CoinName": "Animation Vision Cash",
    "FullName": "Animation Vision Cash (AVH)"
  },
  {
    "Symbol": "SCC",
    "CoinName": "StockChain Coin",
    "FullName": "StockChain Coin (SCC)"
  },
  {
    "Symbol": "HALO",
    "CoinName": "Halo Platform",
    "FullName": "Halo Platform (HALO)"
  },
  {
    "Symbol": "BSTN",
    "CoinName": "BitStation",
    "FullName": "BitStation (BSTN)"
  },
  {
    "Symbol": "PITCH",
    "CoinName": "PITCH",
    "FullName": "PITCH (PITCH)"
  },
  {
    "Symbol": "NANJ",
    "CoinName": "NANJCOIN",
    "FullName": "NANJCOIN (NANJ)"
  },
  {
    "Symbol": "PAXEX",
    "CoinName": "PAXEX",
    "FullName": "PAXEX (PAXEX)"
  },
  {
    "Symbol": "DIT",
    "CoinName": "Ditcoin",
    "FullName": "Ditcoin (DIT)"
  },
  {
    "Symbol": "AZART",
    "CoinName": "Azart",
    "FullName": "Azart (AZART)"
  },
  {
    "Symbol": "CENNZ",
    "CoinName": "Centrality Token",
    "FullName": "Centrality Token (CENNZ)"
  },
  {
    "Symbol": "RDC",
    "CoinName": "Ordocoin",
    "FullName": "Ordocoin (RDC)"
  },
  {
    "Symbol": "TTU",
    "CoinName": "TaTaTu",
    "FullName": "TaTaTu (TTU)"
  },
  {
    "Symbol": "FREE",
    "CoinName": "FREE coin",
    "FullName": "FREE coin (FREE)"
  },
  {
    "Symbol": "AOP",
    "CoinName": "Averopay",
    "FullName": "Averopay (AOP)"
  },
  {
    "Symbol": "XAP",
    "CoinName": "Apollon",
    "FullName": "Apollon (XAP)"
  },
  {
    "Symbol": "INTO",
    "CoinName": "Influ Token",
    "FullName": "Influ Token (INTO)"
  },
  {
    "Symbol": "RED",
    "CoinName": "Red Community Token",
    "FullName": "Red Community Token (RED)"
  },
  {
    "Symbol": "AIMS",
    "CoinName": "HighCastle Token",
    "FullName": "HighCastle Token (AIMS)"
  },
  {
    "Symbol": "TSC",
    "CoinName": "ThunderStake",
    "FullName": "ThunderStake (TSC)"
  },
  {
    "Symbol": "SEER",
    "CoinName": "SEER",
    "FullName": "SEER (SEER)"
  },
  {
    "Symbol": "SPLB",
    "CoinName": "SimpleBank",
    "FullName": "SimpleBank (SPLB)"
  },
  {
    "Symbol": "CMZ",
    "CoinName": "CRYPTOMAGZ",
    "FullName": "CRYPTOMAGZ (CMZ)"
  },
  {
    "Symbol": "NOBS",
    "CoinName": "No BS Crypto",
    "FullName": "No BS Crypto ($NOBS)"
  },
  {
    "Symbol": "HMN",
    "CoinName": "Harvest Masternode Coin",
    "FullName": "Harvest Masternode Coin (HMN)"
  },
  {
    "Symbol": "MHP",
    "CoinName": "MedicoHealth",
    "FullName": "MedicoHealth (MHP)"
  },
  {
    "Symbol": "HMD",
    "CoinName": "Homelend",
    "FullName": "Homelend (HMD)"
  },
  {
    "Symbol": "JSE",
    "CoinName": "JSEcoin",
    "FullName": "JSEcoin (JSE)"
  },
  {
    "Symbol": "IMGZ",
    "CoinName": "Imigize",
    "FullName": "Imigize (IMGZ)"
  },
  {
    "Symbol": "NYN",
    "CoinName": "NYNJA",
    "FullName": "NYNJA (NYN)"
  },
  {
    "Symbol": "IAM",
    "CoinName": "IAME Identity",
    "FullName": "IAME Identity (IAM)"
  },
  {
    "Symbol": "URB",
    "CoinName": "Urbit Data",
    "FullName": "Urbit Data (URB)"
  },
  {
    "Symbol": "CHART",
    "CoinName": "BetOnChart",
    "FullName": "BetOnChart (CHART)"
  },
  {
    "Symbol": "WHEN",
    "CoinName": "WhenHub",
    "FullName": "WhenHub (WHEN)"
  },
  {
    "Symbol": "SFT",
    "CoinName": "SportsFix",
    "FullName": "SportsFix (SFT)"
  },
  {
    "Symbol": "ORBIS",
    "CoinName": "Orbis",
    "FullName": "Orbis (ORBIS)"
  },
  {
    "Symbol": "BLKS",
    "CoinName": "Blockshipping",
    "FullName": "Blockshipping (BLKS)"
  },
  {
    "Symbol": "ETRNT",
    "CoinName": "Eternal Trusts",
    "FullName": "Eternal Trusts (ETRNT)"
  },
  {
    "Symbol": "ITR",
    "CoinName": "INTRO",
    "FullName": "INTRO (ITR)"
  },
  {
    "Symbol": "CHE",
    "CoinName": "Cache",
    "FullName": "Cache (CHE)"
  },
  {
    "Symbol": "ZEEW",
    "CoinName": "Zeew",
    "FullName": "Zeew (ZEEW)"
  },
  {
    "Symbol": "MEM",
    "CoinName": "Memority",
    "FullName": "Memority (MEM)"
  },
  {
    "Symbol": "QUA",
    "CoinName": "Quasa",
    "FullName": "Quasa (QUA)"
  },
  {
    "Symbol": "RSC",
    "CoinName": "Ronaldinho Soccer Coin",
    "FullName": "Ronaldinho Soccer Coin (RSC)"
  },
  {
    "Symbol": "ENTRY",
    "CoinName": "ENTRY",
    "FullName": "ENTRY (ENTRY)"
  },
  {
    "Symbol": "PHTC",
    "CoinName": "Photochain",
    "FullName": "Photochain (PHTC)"
  },
  {
    "Symbol": "WORK",
    "CoinName": "Aworker",
    "FullName": "Aworker (WORK)"
  },
  {
    "Symbol": "ORC",
    "CoinName": "Organicco",
    "FullName": "Organicco (ORC)"
  },
  {
    "Symbol": "ZAZA",
    "CoinName": "ZAZA",
    "FullName": "ZAZA (ZAZA)"
  },
  {
    "Symbol": "DNET",
    "CoinName": "DeNet",
    "FullName": "DeNet (DNET)"
  },
  {
    "Symbol": "IDAP",
    "CoinName": "IDAP",
    "FullName": "IDAP (IDAP)"
  },
  {
    "Symbol": "HEAL",
    "CoinName": "Etheal",
    "FullName": "Etheal (HEAL)"
  },
  {
    "Symbol": "OFCR",
    "CoinName": "OfficerCoin",
    "FullName": "OfficerCoin (OFCR)"
  },
  {
    "Symbol": "SHPT",
    "CoinName": "Shipit",
    "FullName": "Shipit (SHPT)"
  },
  {
    "Symbol": "LED",
    "CoinName": "Terawatt",
    "FullName": "Terawatt (LED)"
  },
  {
    "Symbol": "PRLPAY",
    "CoinName": "PearlPay",
    "FullName": "PearlPay (PRLPAY)"
  },
  {
    "Symbol": "RBDT",
    "CoinName": "RoBust Defense Token",
    "FullName": "RoBust Defense Token (RBDT)"
  },
  {
    "Symbol": "SKYFT",
    "CoinName": "SKYFchain",
    "FullName": "SKYFchain (SKYFT)"
  },
  {
    "Symbol": "TFLEX",
    "CoinName": "TrustedCars FLEX",
    "FullName": "TrustedCars FLEX (TFLEX)"
  },
  {
    "Symbol": "STRY",
    "CoinName": "STRYKZ",
    "FullName": "STRYKZ (STRY)"
  },
  {
    "Symbol": "FAN",
    "CoinName": "Fan360",
    "FullName": "Fan360 (FAN)"
  },
  {
    "Symbol": "GBTC",
    "CoinName": "GigTricks",
    "FullName": "GigTricks (GBTC)"
  },
  {
    "Symbol": "NBOX",
    "CoinName": "Unboxed",
    "FullName": "Unboxed (NBOX)"
  },
  {
    "Symbol": "BUD",
    "CoinName": "Buddy",
    "FullName": "Buddy (BUD)"
  },
  {
    "Symbol": "DBCCOIN",
    "CoinName": "Datablockchain",
    "FullName": "Datablockchain (DBCCOIN)"
  },
  {
    "Symbol": "K2G",
    "CoinName": "Kasko2go",
    "FullName": "Kasko2go (K2G)"
  },
  {
    "Symbol": "ARR",
    "CoinName": "ARROUND",
    "FullName": "ARROUND (ARR)"
  },
  {
    "Symbol": "GAMB",
    "CoinName": "GAMB",
    "FullName": "GAMB (GAMB)"
  },
  {
    "Symbol": "SPOT",
    "CoinName": "Spotcoin",
    "FullName": "Spotcoin (SPOT)"
  },
  {
    "Symbol": "VTUUR",
    "CoinName": "VTUUR",
    "FullName": "VTUUR (VTUUR)"
  },
  {
    "Symbol": "Pakka",
    "CoinName": "NextPakk",
    "FullName": "NextPakk (Pakka)"
  },
  {
    "Symbol": "ETI",
    "CoinName": "EtherInc",
    "FullName": "EtherInc (ETI)"
  },
  {
    "Symbol": "FRECNX",
    "CoinName": "FreldoCoinX",
    "FullName": "FreldoCoinX (FRECNX)"
  },
  {
    "Symbol": "NOIA",
    "CoinName": "NOIA Network",
    "FullName": "NOIA Network (NOIA)"
  },
  {
    "Symbol": "LAX",
    "CoinName": "LAPO",
    "FullName": "LAPO (LAX)"
  },
  {
    "Symbol": "BOO",
    "CoinName": "BOOSTO",
    "FullName": "BOOSTO (BOO)"
  },
  {
    "Symbol": "DREAM",
    "CoinName": "DREAM",
    "FullName": "DREAM (DREAM)"
  },
  {
    "Symbol": "PTI",
    "CoinName": "Paytomat",
    "FullName": "Paytomat (PTI)"
  },
  {
    "Symbol": "LPC",
    "CoinName": "Little Phil",
    "FullName": "Little Phil (LPC)"
  },
  {
    "Symbol": "DYNO",
    "CoinName": "DYNO",
    "FullName": "DYNO (DYNO)"
  },
  {
    "Symbol": "MFX",
    "CoinName": "MFChain",
    "FullName": "MFChain (MFX)"
  },
  {
    "Symbol": "NOIZ",
    "CoinName": "NOIZ",
    "FullName": "NOIZ (NOIZ)"
  },
  {
    "Symbol": "SPIKE",
    "CoinName": "Spiking",
    "FullName": "Spiking (SPIKE)"
  },
  {
    "Symbol": "SGO",
    "CoinName": "Selfie GO",
    "FullName": "Selfie GO (SGO)"
  },
  {
    "Symbol": "RAWG",
    "CoinName": "RAWG",
    "FullName": "RAWG (RAWG)"
  },
  {
    "Symbol": "BDB",
    "CoinName": "Big Data Block",
    "FullName": "Big Data Block (BDB)"
  },
  {
    "Symbol": "MNR",
    "CoinName": "Monoreto",
    "FullName": "Monoreto (MNR)"
  },
  {
    "Symbol": "ZNAQ",
    "CoinName": "ZNAQ",
    "FullName": "ZNAQ (ZNAQ)"
  },
  {
    "Symbol": "YBT",
    "CoinName": "YellowBetter",
    "FullName": "YellowBetter (YBT)"
  },
  {
    "Symbol": "OPET",
    "CoinName": "ÕpetFoundation",
    "FullName": "ÕpetFoundation (OPET)"
  },
  {
    "Symbol": "PSK",
    "CoinName": "Pool of Stake",
    "FullName": "Pool of Stake (PSK)"
  },
  {
    "Symbol": "KVT",
    "CoinName": "Kinesis Velocity Token ",
    "FullName": "Kinesis Velocity Token  (KVT)"
  },
  {
    "Symbol": "COT",
    "CoinName": "CoTrader",
    "FullName": "CoTrader (COT)"
  },
  {
    "Symbol": "WPT",
    "CoinName": "Worldopoly",
    "FullName": "Worldopoly (WPT)"
  },
  {
    "Symbol": "ABELE",
    "CoinName": "Abele",
    "FullName": "Abele (ABELE)"
  },
  {
    "Symbol": "XEP",
    "CoinName": "ephelants360",
    "FullName": "ephelants360 (XEP)"
  },
  {
    "Symbol": "ARBT",
    "CoinName": "ARBITRAGE",
    "FullName": "ARBITRAGE (ARBT)"
  },
  {
    "Symbol": "OMI",
    "CoinName": "ECOMI",
    "FullName": "ECOMI (OMI)"
  },
  {
    "Symbol": "BILL",
    "CoinName": "TillBilly",
    "FullName": "TillBilly (BILL)"
  },
  {
    "Symbol": "ST",
    "CoinName": "Scienceroot",
    "FullName": "Scienceroot (ST)"
  },
  {
    "Symbol": "WBBC",
    "CoinName": "World Bit Bank",
    "FullName": "World Bit Bank (WBBC)"
  },
  {
    "Symbol": "XDT",
    "CoinName": "Dataeum",
    "FullName": "Dataeum (XDT)"
  },
  {
    "Symbol": "WPP",
    "CoinName": "Green Energy Token",
    "FullName": "Green Energy Token (WPP)"
  },
  {
    "Symbol": "ASTO",
    "CoinName": "Aston",
    "FullName": "Aston (ASTO)"
  },
  {
    "Symbol": "SLT",
    "CoinName": "Social Lending Network",
    "FullName": "Social Lending Network (SLT)"
  },
  {
    "Symbol": "APL",
    "CoinName": "Apollo Currency",
    "FullName": "Apollo Currency (APL)"
  },
  {
    "Symbol": "MCB",
    "CoinName": "MyCryptoBank",
    "FullName": "MyCryptoBank (MCB)"
  },
  {
    "Symbol": "HDAC",
    "CoinName": "Hdac",
    "FullName": "Hdac (HDAC)"
  },
  {
    "Symbol": "CCCX",
    "CoinName": "Clipper Coin Capital",
    "FullName": "Clipper Coin Capital (CCCX)"
  },
  {
    "Symbol": "VRH",
    "CoinName": "Virtual Rehab",
    "FullName": "Virtual Rehab (VRH)"
  },
  {
    "Symbol": "AEN",
    "CoinName": "Aenco",
    "FullName": "Aenco (AEN)"
  },
  {
    "Symbol": "SOLID",
    "CoinName": "Solidified",
    "FullName": "Solidified (SOLID)"
  },
  {
    "Symbol": "VANIG",
    "CoinName": "VANIG",
    "FullName": "VANIG (VANIG)"
  },
  {
    "Symbol": "AIRE",
    "CoinName": "Tokenaire",
    "FullName": "Tokenaire (AIRE)"
  },
  {
    "Symbol": "GMA",
    "CoinName": "Goldchip Mining Asset",
    "FullName": "Goldchip Mining Asset (GMA)"
  },
  {
    "Symbol": "WMB",
    "CoinName": "WatermelonBlock",
    "FullName": "WatermelonBlock (WMB)"
  },
  {
    "Symbol": "MVU",
    "CoinName": "meVu",
    "FullName": "meVu (MVU)"
  },
  {
    "Symbol": "TLNT",
    "CoinName": "Talent Token",
    "FullName": "Talent Token (TLNT)"
  },
  {
    "Symbol": "GLDR",
    "CoinName": "Golder Coin",
    "FullName": "Golder Coin (GLDR)"
  },
  {
    "Symbol": "IMU",
    "CoinName": "imusify",
    "FullName": "imusify (IMU)"
  },
  {
    "Symbol": "TRT",
    "CoinName": "TuurnT",
    "FullName": "TuurnT (TRT)"
  },
  {
    "Symbol": "CRS",
    "CoinName": "CRYSTALS",
    "FullName": "CRYSTALS (CRS)"
  },
  {
    "Symbol": "OLM",
    "CoinName": "Olam",
    "FullName": "Olam (OLM)"
  },
  {
    "Symbol": "CST",
    "CoinName": "Casper API",
    "FullName": "Casper API (CST)"
  },
  {
    "Symbol": "YON",
    "CoinName": "YondoCoin",
    "FullName": "YondoCoin (YON)"
  },
  {
    "Symbol": "URT",
    "CoinName": "Universal Recognition Token",
    "FullName": "Universal Recognition Token (URT)"
  },
  {
    "Symbol": "QCX",
    "CoinName": "QuickX Protocol",
    "FullName": "QuickX Protocol (QCX)"
  },
  {
    "Symbol": "CRON",
    "CoinName": "Cryptocean",
    "FullName": "Cryptocean (CRON)"
  },
  {
    "Symbol": "DIP",
    "CoinName": "Etherisc",
    "FullName": "Etherisc (DIP)"
  },
  {
    "Symbol": "PROD",
    "CoinName": "Productivist",
    "FullName": "Productivist (PROD)"
  },
  {
    "Symbol": "REDC",
    "CoinName": "RedCab",
    "FullName": "RedCab (REDC)"
  },
  {
    "Symbol": "ZCHN",
    "CoinName": "Zichain",
    "FullName": "Zichain (ZCHN)"
  },
  {
    "Symbol": "TTV",
    "CoinName": "TV-TWO",
    "FullName": "TV-TWO (TTV)"
  },
  {
    "Symbol": "OICOIN",
    "CoinName": "Osmium Investment Coin",
    "FullName": "Osmium Investment Coin (OICOIN)"
  },
  {
    "Symbol": "ENQ",
    "CoinName": "Enecuum",
    "FullName": "Enecuum (ENQ)"
  },
  {
    "Symbol": "EXPR",
    "CoinName": "Expercoin",
    "FullName": "Expercoin (EXPR)"
  },
  {
    "Symbol": "DTN",
    "CoinName": "Datareum",
    "FullName": "Datareum (DTN)"
  },
  {
    "Symbol": "IDM",
    "CoinName": "IDM",
    "FullName": "IDM (IDM)"
  },
  {
    "Symbol": "SIDT",
    "CoinName": "SID Token",
    "FullName": "SID Token (SIDT)"
  },
  {
    "Symbol": "ISR",
    "CoinName": "Insureum",
    "FullName": "Insureum (ISR)"
  },
  {
    "Symbol": "CDPT",
    "CoinName": "Creditor Data Platform",
    "FullName": "Creditor Data Platform (CDPT)"
  },
  {
    "Symbol": "CRGO",
    "CoinName": "CargoCoin",
    "FullName": "CargoCoin (CRGO)"
  },
  {
    "Symbol": "AXIS",
    "CoinName": "LaneAxis",
    "FullName": "LaneAxis (AXIS)"
  },
  {
    "Symbol": "QRP",
    "CoinName": "Cryptics",
    "FullName": "Cryptics (QRP)"
  },
  {
    "Symbol": "TIIM",
    "CoinName": "TriipMiles",
    "FullName": "TriipMiles (TIIM)"
  },
  {
    "Symbol": "BNR",
    "CoinName": "BiNeuro",
    "FullName": "BiNeuro (BNR)"
  },
  {
    "Symbol": "VRT",
    "CoinName": "Virtual Reality Technology",
    "FullName": "Virtual Reality Technology (VRT)"
  },
  {
    "Symbol": "ZCC1",
    "CoinName": "ZeroCarbon",
    "FullName": "ZeroCarbon (ZCC1)"
  },
  {
    "Symbol": "KRP",
    "CoinName": "Kryptoin",
    "FullName": "Kryptoin (KRP)"
  },
  {
    "Symbol": "DAG",
    "CoinName": "Constellation ",
    "FullName": "Constellation  (DAG)"
  },
  {
    "Symbol": "OLE",
    "CoinName": "Olive",
    "FullName": "Olive (OLE)"
  },
  {
    "Symbol": "OKB",
    "CoinName": "Okex",
    "FullName": "Okex (OKB)"
  },
  {
    "Symbol": "AMLT",
    "CoinName": "AMLT",
    "FullName": "AMLT (AMLT)"
  },
  {
    "Symbol": "HGO",
    "CoinName": "HireGo",
    "FullName": "HireGo (HGO)"
  },
  {
    "Symbol": "TCOIN",
    "CoinName": "Talenthon",
    "FullName": "Talenthon (TCOIN)"
  },
  {
    "Symbol": "BZ",
    "CoinName": "Bit-Z",
    "FullName": "Bit-Z (BZ)"
  },
  {
    "Symbol": "PRA",
    "CoinName": "ProChain",
    "FullName": "ProChain (PRA)"
  },
  {
    "Symbol": "VLP",
    "CoinName": "Volpo",
    "FullName": "Volpo (VLP)"
  },
  {
    "Symbol": "ZIP",
    "CoinName": "Zipper",
    "FullName": "Zipper (ZIP)"
  },
  {
    "Symbol": "BTK",
    "CoinName": "Bostoken",
    "FullName": "Bostoken (BTK)"
  },
  {
    "Symbol": "KCASH",
    "CoinName": "Kcash",
    "FullName": "Kcash (KCASH)"
  },
  {
    "Symbol": "1WO",
    "CoinName": "1World",
    "FullName": "1World (1WO)"
  },
  {
    "Symbol": "ZB",
    "CoinName": "ZB",
    "FullName": "ZB (ZB)"
  },
  {
    "Symbol": "BOUTS",
    "CoinName": "BoutsPro",
    "FullName": "BoutsPro (BOUTS)"
  },
  {
    "Symbol": "OGSP",
    "CoinName": "OriginSport",
    "FullName": "OriginSport (OGSP)"
  },
  {
    "Symbol": "EST",
    "CoinName": "ESports Chain",
    "FullName": "ESports Chain (EST)"
  },
  {
    "Symbol": "MODEX",
    "CoinName": "MODEX Token",
    "FullName": "MODEX Token (MODEX)"
  },
  {
    "Symbol": "OGT",
    "CoinName": "One Game",
    "FullName": "One Game (OGT)"
  },
  {
    "Symbol": "PLA",
    "CoinName": "PlayChip",
    "FullName": "PlayChip (PLA)"
  },
  {
    "Symbol": "NPER",
    "CoinName": "NPER",
    "FullName": "NPER (NPER)"
  },
  {
    "Symbol": "ATON",
    "CoinName": "Further Network",
    "FullName": "Further Network (ATON)"
  },
  {
    "Symbol": "EURS",
    "CoinName": "STASIS EURS",
    "FullName": "STASIS EURS (EURS)"
  },
  {
    "Symbol": "XCG",
    "CoinName": "Xchange",
    "FullName": "Xchange (XCG)"
  },
  {
    "Symbol": "BOONS",
    "CoinName": "BOONSCoin",
    "FullName": "BOONSCoin (BOONS)"
  },
  {
    "Symbol": "PCH",
    "CoinName": "POPCHAIN",
    "FullName": "POPCHAIN (PCH)"
  },
  {
    "Symbol": "ECOM",
    "CoinName": "Omnitude",
    "FullName": "Omnitude (ECOM)"
  },
  {
    "Symbol": "WIT",
    "CoinName": "Witcoin",
    "FullName": "Witcoin (WIT)"
  },
  {
    "Symbol": "OPU",
    "CoinName": "Opu Coin",
    "FullName": "Opu Coin (OPU)"
  },
  {
    "Symbol": "MOF",
    "CoinName": "Molecular Future",
    "FullName": "Molecular Future (MOF)"
  },
  {
    "Symbol": "BOX",
    "CoinName": "ContentBox",
    "FullName": "ContentBox (BOX)"
  },
  {
    "Symbol": "COTI",
    "CoinName": "COTI",
    "FullName": "COTI (COTI)"
  },
  {
    "Symbol": "ETALON",
    "CoinName": "Etalon",
    "FullName": "Etalon (ETALON)"
  },
  {
    "Symbol": "TICS",
    "CoinName": "CargoConX",
    "FullName": "CargoConX (TICS)"
  },
  {
    "Symbol": "ZPR",
    "CoinName": "ZPER",
    "FullName": "ZPER (ZPR)"
  },
  {
    "Symbol": "AAC",
    "CoinName": "Acute Angle Cloud",
    "FullName": "Acute Angle Cloud (AAC)"
  },
  {
    "Symbol": "EXLT",
    "CoinName": "ExtraLovers",
    "FullName": "ExtraLovers (EXLT)"
  },
  {
    "Symbol": "ESTATE",
    "CoinName": "AgentMile",
    "FullName": "AgentMile (ESTATE)"
  },
  {
    "Symbol": "BLV",
    "CoinName": "Blockvest",
    "FullName": "Blockvest (BLV)"
  },
  {
    "Symbol": "RRC",
    "CoinName": "Recycling Regeneration Chain",
    "FullName": "Recycling Regeneration Chain (RRC)"
  },
  {
    "Symbol": "MPG",
    "CoinName": "Max Property Group",
    "FullName": "Max Property Group (MPG)"
  },
  {
    "Symbol": "QNTU",
    "CoinName": "Quanta",
    "FullName": "Quanta (QNTU)"
  },
  {
    "Symbol": "IG",
    "CoinName": "IG Token ",
    "FullName": "IG Token  (IG1)"
  },
  {
    "Symbol": "FML",
    "CoinName": "FormulA",
    "FullName": "FormulA (FML)"
  },
  {
    "Symbol": "TLU",
    "CoinName": "Irene Energy",
    "FullName": "Irene Energy (TLU)"
  },
  {
    "Symbol": "PSM",
    "CoinName": "Prasm",
    "FullName": "Prasm (PSM)"
  },
  {
    "Symbol": "MON",
    "CoinName": "MilionCoin",
    "FullName": "MilionCoin (MON)"
  },
  {
    "Symbol": "KAN",
    "CoinName": "Bitkan",
    "FullName": "Bitkan (KAN)"
  },
  {
    "Symbol": "AUDC",
    "CoinName": "Aussie Digital",
    "FullName": "Aussie Digital (AUDC)"
  },
  {
    "Symbol": "NMH",
    "CoinName": "Namahe",
    "FullName": "Namahe (NMH)"
  },
  {
    "Symbol": "KST",
    "CoinName": "StarKST",
    "FullName": "StarKST (KST)"
  },
  {
    "Symbol": "DEL",
    "CoinName": "DelChain",
    "FullName": "DelChain (DEL)"
  },
  {
    "Symbol": "HIT",
    "CoinName": "HitChain",
    "FullName": "HitChain (HIT)"
  },
  {
    "Symbol": "PBLK",
    "CoinName": "PayBlock",
    "FullName": "PayBlock (PBLK)"
  },
  {
    "Symbol": "KVNT",
    "CoinName": "Kvantor",
    "FullName": "Kvantor (KVNT)"
  },
  {
    "Symbol": "MDN",
    "CoinName": "MADANA",
    "FullName": "MADANA (MDN)"
  },
  {
    "Symbol": "TMTG",
    "CoinName": "Digital Gold Exchange",
    "FullName": "Digital Gold Exchange (TMTG)"
  },
  {
    "Symbol": "PRT",
    "CoinName": "Papusha",
    "FullName": "Papusha (PRT)"
  },
  {
    "Symbol": "COSM",
    "CoinName": "CosmoChain",
    "FullName": "CosmoChain (COSM)"
  },
  {
    "Symbol": "GPPT",
    "CoinName": "Pluto Project Coin",
    "FullName": "Pluto Project Coin (GPPT)"
  },
  {
    "Symbol": "LNL",
    "CoinName": "LunarLink",
    "FullName": "LunarLink (LNL)"
  },
  {
    "Symbol": "VRN",
    "CoinName": "Vernam",
    "FullName": "Vernam (VRN)"
  },
  {
    "Symbol": "NEX",
    "CoinName": "Nash Exchange",
    "FullName": "Nash Exchange (NEX)"
  },
  {
    "Symbol": "BRNX",
    "CoinName": "Bronix",
    "FullName": "Bronix (BRNX)"
  },
  {
    "Symbol": "SRCOIN",
    "CoinName": "SRCoin",
    "FullName": "SRCoin (SRCOIN)"
  },
  {
    "Symbol": "RFT",
    "CoinName": "RYFTS",
    "FullName": "RYFTS (RFT)"
  },
  {
    "Symbol": "ET",
    "CoinName": "ENDO ",
    "FullName": "ENDO  (ET)"
  },
  {
    "Symbol": "MMTM",
    "CoinName": "Momentum",
    "FullName": "Momentum (MMTM)"
  },
  {
    "Symbol": "XGH",
    "CoinName": "Golden Hash",
    "FullName": "Golden Hash (XGH)"
  },
  {
    "Symbol": "FXP",
    "CoinName": "FXPay",
    "FullName": "FXPay (FXP)"
  },
  {
    "Symbol": "DICEM",
    "CoinName": "DICE Money",
    "FullName": "DICE Money (DICEM)"
  },
  {
    "Symbol": "PASS",
    "CoinName": "Blockpass",
    "FullName": "Blockpass (PASS)"
  },
  {
    "Symbol": "HRO",
    "CoinName": "HEROIC.com",
    "FullName": "HEROIC.com (HRO)"
  },
  {
    "Symbol": "DGTX",
    "CoinName": "Digitex Futures",
    "FullName": "Digitex Futures (DGTX)"
  },
  {
    "Symbol": "BSCH",
    "CoinName": "BitSchool",
    "FullName": "BitSchool (BSCH)"
  },
  {
    "Symbol": "TRVR",
    "CoinName": "Trivver",
    "FullName": "Trivver (TRVR)"
  },
  {
    "Symbol": "PESA",
    "CoinName": "Credible",
    "FullName": "Credible (PESA)"
  },
  {
    "Symbol": "CLPX",
    "CoinName": "Chynge.net",
    "FullName": "Chynge.net (CLPX)"
  },
  {
    "Symbol": "DAOX",
    "CoinName": "Daox",
    "FullName": "Daox (DAOX)"
  },
  {
    "Symbol": "GLN",
    "CoinName": "Galion Token",
    "FullName": "Galion Token (GLN)"
  },
  {
    "Symbol": "AUK",
    "CoinName": "Aukcecoin",
    "FullName": "Aukcecoin (AUK)"
  },
  {
    "Symbol": "PCCM",
    "CoinName": "Poseidon Chain",
    "FullName": "Poseidon Chain (PCCM)"
  },
  {
    "Symbol": "TOPC",
    "CoinName": "Topchain",
    "FullName": "Topchain (TOPC)"
  },
  {
    "Symbol": "PLAN",
    "CoinName": "Plancoin",
    "FullName": "Plancoin (PLAN)"
  },
  {
    "Symbol": "EVER",
    "CoinName": "EverLife.AI",
    "FullName": "EverLife.AI (EVER)"
  },
  {
    "Symbol": "TRAID",
    "CoinName": "Traid",
    "FullName": "Traid (TRAID)"
  },
  {
    "Symbol": "TRIO",
    "CoinName": "Tripio",
    "FullName": "Tripio (TRIO)"
  },
  {
    "Symbol": "BNTE",
    "CoinName": "Bountie",
    "FullName": "Bountie (BNTE)"
  },
  {
    "Symbol": "DPY",
    "CoinName": "Delphy",
    "FullName": "Delphy (DPY)"
  },
  {
    "Symbol": "FUNDZ",
    "CoinName": "FundFantasy",
    "FullName": "FundFantasy (FUNDZ)"
  },
  {
    "Symbol": "MIB",
    "CoinName": "Mobile Integrated Blockchain",
    "FullName": "Mobile Integrated Blockchain (MIB)"
  },
  {
    "Symbol": "BAAS",
    "CoinName": "BaaSid",
    "FullName": "BaaSid (BAAS)"
  },
  {
    "Symbol": "LYNK",
    "CoinName": "Lynked.World",
    "FullName": "Lynked.World (LYNK)"
  },
  {
    "Symbol": "TBC",
    "CoinName": "Trecento Blockchain Capital",
    "FullName": "Trecento Blockchain Capital (TBC)"
  },
  {
    "Symbol": "GUSD",
    "CoinName": "Gemini Dollar",
    "FullName": "Gemini Dollar (GUSD)"
  },
  {
    "Symbol": "CCL",
    "CoinName": "CyClean",
    "FullName": "CyClean (CCL)"
  },
  {
    "Symbol": "HYC",
    "CoinName": "HYCON",
    "FullName": "HYCON (HYC)"
  },
  {
    "Symbol": "TCX",
    "CoinName": "T-Coin",
    "FullName": "T-Coin (TCX)"
  },
  {
    "Symbol": "HLD",
    "CoinName": "HyperLending",
    "FullName": "HyperLending (HLD)"
  },
  {
    "Symbol": "DACC",
    "CoinName": "Decentralized Accessible Content Chain ",
    "FullName": "Decentralized Accessible Content Chain  (DACC)"
  },
  {
    "Symbol": "NUSD",
    "CoinName": "Nomin USD",
    "FullName": "Nomin USD (NUSD)"
  },
  {
    "Symbol": "TCHB",
    "CoinName": "Teachers Blockchain",
    "FullName": "Teachers Blockchain (TCHB)"
  },
  {
    "Symbol": "DAX",
    "CoinName": "DAEX",
    "FullName": "DAEX (DAX)"
  },
  {
    "Symbol": "BEC",
    "CoinName": "Beauty Chain",
    "FullName": "Beauty Chain (BEC)"
  },
  {
    "Symbol": "VEEN",
    "CoinName": "LIVEEN",
    "FullName": "LIVEEN (VEEN)"
  },
  {
    "Symbol": "CIC",
    "CoinName": "CIChain",
    "FullName": "CIChain (CIC)"
  },
  {
    "Symbol": "MIODIO",
    "CoinName": "MIODIOCOIN",
    "FullName": "MIODIOCOIN (MIODIO)"
  },
  {
    "Symbol": "MOV",
    "CoinName": "MovieCoin",
    "FullName": "MovieCoin (MOV)"
  },
  {
    "Symbol": "IHF",
    "CoinName": "Invictus Hyperion Fund",
    "FullName": "Invictus Hyperion Fund (IHF)"
  },
  {
    "Symbol": "CNAB",
    "CoinName": "Cannabium",
    "FullName": "Cannabium (CNAB)"
  },
  {
    "Symbol": "SGP",
    "CoinName": "SGPay",
    "FullName": "SGPay (SGP)"
  },
  {
    "Symbol": "LTPC",
    "CoinName": "Lightpaycoin",
    "FullName": "Lightpaycoin (LTPC)"
  },
  {
    "Symbol": "HANA",
    "CoinName": "Hanacoin",
    "FullName": "Hanacoin (HANA)"
  },
  {
    "Symbol": "BTV",
    "CoinName": "Bitvote",
    "FullName": "Bitvote (BTV)"
  },
  {
    "Symbol": "URP",
    "CoinName": "Universal Reward Protocol",
    "FullName": "Universal Reward Protocol (URP)"
  },
  {
    "Symbol": "SHE",
    "CoinName": "Shine Chain",
    "FullName": "Shine Chain (SHE)"
  },
  {
    "Symbol": "IVN",
    "CoinName": "IVN Security",
    "FullName": "IVN Security (IVN)"
  },
  {
    "Symbol": "DAV",
    "CoinName": "DAV",
    "FullName": "DAV (DAV)"
  },
  {
    "Symbol": "ZAT",
    "CoinName": "ZatGo",
    "FullName": "ZatGo (ZAT)"
  },
  {
    "Symbol": "IMT",
    "CoinName": "MoneyToken",
    "FullName": "MoneyToken (IMT)"
  },
  {
    "Symbol": "MHC",
    "CoinName": "MetaHash",
    "FullName": "MetaHash (MHC)"
  },
  {
    "Symbol": "HELIOS",
    "CoinName": "HeliosCoin",
    "FullName": "HeliosCoin (HELIOS)"
  },
  {
    "Symbol": "ROBET",
    "CoinName": "RoBet",
    "FullName": "RoBet (ROBET)"
  },
  {
    "Symbol": "CRYP",
    "CoinName": "CrypticCoin",
    "FullName": "CrypticCoin (CRYP)"
  },
  {
    "Symbol": "BDT",
    "CoinName": "Blockonix",
    "FullName": "Blockonix (BDT)"
  },
  {
    "Symbol": "BTXC",
    "CoinName": "Bettex coin",
    "FullName": "Bettex coin (BTXC)"
  },
  {
    "Symbol": "DAPS",
    "CoinName": "DAPS Coin",
    "FullName": "DAPS Coin (DAPS)"
  },
  {
    "Symbol": "ETE",
    "CoinName": "EXTRADECOIN",
    "FullName": "EXTRADECOIN (ETE)"
  },
  {
    "Symbol": "NHCT",
    "CoinName": "Nano Healthcare Token",
    "FullName": "Nano Healthcare Token (NHCT)"
  },
  {
    "Symbol": "AZ",
    "CoinName": "Azbit",
    "FullName": "Azbit (AZ)"
  },
  {
    "Symbol": "SWA",
    "CoinName": "Swace",
    "FullName": "Swace (SWA)"
  },
  {
    "Symbol": "USDCT",
    "CoinName": "USDCT",
    "FullName": "USDCT (USDCT)"
  },
  {
    "Symbol": "IAG",
    "CoinName": "IAGON",
    "FullName": "IAGON (IAG)"
  },
  {
    "Symbol": "STRS",
    "CoinName": "STARS ",
    "FullName": "STARS  (STRS)"
  },
  {
    "Symbol": "MTCMN",
    "CoinName": "MTC Mesh",
    "FullName": "MTC Mesh (MTCMN)"
  },
  {
    "Symbol": "AAA",
    "CoinName": "AAA Reserve Currency",
    "FullName": "AAA Reserve Currency (AAA)"
  },
  {
    "Symbol": "ZEST",
    "CoinName": "ZestCoin",
    "FullName": "ZestCoin (ZEST)"
  },
  {
    "Symbol": "HLM",
    "CoinName": "Helium",
    "FullName": "Helium (HLM)"
  },
  {
    "Symbol": "CSP",
    "CoinName": "Caspian",
    "FullName": "Caspian (CSP)"
  },
  {
    "Symbol": "USDC",
    "CoinName": "USD Coin",
    "FullName": "USD Coin (USDC)"
  },
  {
    "Symbol": "ONGAS",
    "CoinName": "Ontology Gas",
    "FullName": "Ontology Gas (ONGAS)"
  },
  {
    "Symbol": "NRVE",
    "CoinName": "Narrative",
    "FullName": "Narrative (NRVE)"
  },
  {
    "Symbol": "BIP",
    "CoinName": "Minter",
    "FullName": "Minter (BIP)"
  },
  {
    "Symbol": "XCASH",
    "CoinName": "X-CASH",
    "FullName": "X-CASH (XCASH)"
  },
  {
    "Symbol": "RMESH",
    "CoinName": "RightMesh",
    "FullName": "RightMesh (RMESH)"
  },
  {
    "Symbol": "HAND",
    "CoinName": "ShowHand",
    "FullName": "ShowHand (HAND)"
  },
  {
    "Symbol": "GBXT",
    "CoinName": "Globitex Token",
    "FullName": "Globitex Token (GBXT)"
  },
  {
    "Symbol": "ABCC",
    "CoinName": "ABCC Token",
    "FullName": "ABCC Token (ABCC)"
  },
  {
    "Symbol": "BASIS",
    "CoinName": "Basis",
    "FullName": "Basis (BASIS)"
  },
  {
    "Symbol": "JIB",
    "CoinName": "Jibbit",
    "FullName": "Jibbit (JIB)"
  },
  {
    "Symbol": "PMTN",
    "CoinName": "Peer Mountain",
    "FullName": "Peer Mountain (PMTN)"
  },
  {
    "Symbol": "SGA",
    "CoinName": "SAGA",
    "FullName": "SAGA (SGA)"
  },
  {
    "Symbol": "PHM",
    "CoinName": "Phomeum",
    "FullName": "Phomeum (PHM)"
  },
  {
    "Symbol": "CUSD",
    "CoinName": "Carbon",
    "FullName": "Carbon (CUSD)"
  },
  {
    "Symbol": "QUANT",
    "CoinName": "Quantler",
    "FullName": "Quantler (QUANT)"
  },
  {
    "Symbol": "KUSD",
    "CoinName": "Kowala",
    "FullName": "Kowala (KUSD)"
  },
  {
    "Symbol": "VEOT",
    "CoinName": "Viewo",
    "FullName": "Viewo (VEOT)"
  },
  {
    "Symbol": "GGR",
    "CoinName": "GGRocket",
    "FullName": "GGRocket (GGR)"
  },
  {
    "Symbol": "VEST",
    "CoinName": "VestChain",
    "FullName": "VestChain (VEST)"
  },
  {
    "Symbol": "MCN",
    "CoinName": "mCoin",
    "FullName": "mCoin (MCN)"
  },
  {
    "Symbol": "TCH",
    "CoinName": "TigerCash",
    "FullName": "TigerCash (TCH)"
  },
  {
    "Symbol": "DEPO",
    "CoinName": "Depository Network",
    "FullName": "Depository Network (DEPO)"
  },
  {
    "Symbol": "MENLO",
    "CoinName": "Menlo One",
    "FullName": "Menlo One (MENLO)"
  },
  {
    "Symbol": "TVA",
    "CoinName": "Terra Virtua",
    "FullName": "Terra Virtua (TVA)"
  },
  {
    "Symbol": "METM",
    "CoinName": "MetaMorph",
    "FullName": "MetaMorph (METM)"
  },
  {
    "Symbol": "PAX",
    "CoinName": "Paxos Standard",
    "FullName": "Paxos Standard (PAX)"
  },
  {
    "Symbol": "ARAW",
    "CoinName": "Araw",
    "FullName": "Araw (ARAW)"
  },
  {
    "Symbol": "BRAZ",
    "CoinName": "Brazio",
    "FullName": "Brazio (BRAZ)"
  },
  {
    "Symbol": "TALAO",
    "CoinName": "Talao",
    "FullName": "Talao (TALAO)"
  },
  {
    "Symbol": "IZX",
    "CoinName": "IZX",
    "FullName": "IZX (IZX)"
  },
  {
    "Symbol": "DIVI",
    "CoinName": "Divi Project",
    "FullName": "Divi Project (DIVI)"
  },
  {
    "Symbol": "HQT",
    "CoinName": "HyperQuant",
    "FullName": "HyperQuant (HQT)"
  },
  {
    "Symbol": "W12",
    "CoinName": "W12 Protocol",
    "FullName": "W12 Protocol (W12)"
  },
  {
    "Symbol": "NBAR",
    "CoinName": "NOBAR",
    "FullName": "NOBAR (NBAR)"
  },
  {
    "Symbol": "KBX",
    "CoinName": "KuBitX",
    "FullName": "KuBitX (KBX)"
  },
  {
    "Symbol": "MYDFS",
    "CoinName": "MyDFS",
    "FullName": "MyDFS (MYDFS)"
  },
  {
    "Symbol": "VTHO",
    "CoinName": "VeChainThor ",
    "FullName": "VeChainThor  (VTHO)"
  },
  {
    "Symbol": "BHPC",
    "CoinName": "BHPCash",
    "FullName": "BHPCash (BHPC)"
  },
  {
    "Symbol": "VTOS",
    "CoinName": "VTOS",
    "FullName": "VTOS (VTOS)"
  },
  {
    "Symbol": "M2O",
    "CoinName": "M2O Token",
    "FullName": "M2O Token (M2O)"
  },
  {
    "Symbol": "SLY",
    "CoinName": "SELFLLERY",
    "FullName": "SELFLLERY (SLY)"
  },
  {
    "Symbol": "UEC",
    "CoinName": "United Emirates Coin",
    "FullName": "United Emirates Coin (UEC)"
  },
  {
    "Symbol": "BEAT",
    "CoinName": "BEAT Token",
    "FullName": "BEAT Token (BEAT)"
  },
  {
    "Symbol": "MOLK",
    "CoinName": "Mobilink Token",
    "FullName": "Mobilink Token (MOLK)"
  },
  {
    "Symbol": "MSD",
    "CoinName": "MSD",
    "FullName": "MSD (MSD)"
  },
  {
    "Symbol": "SEED",
    "CoinName": "Superbloom",
    "FullName": "Superbloom (SEED)"
  },
  {
    "Symbol": "SEAL",
    "CoinName": "Seal Network",
    "FullName": "Seal Network (SEAL)"
  },
  {
    "Symbol": "GBO",
    "CoinName": "Gabro.io",
    "FullName": "Gabro.io (GBO)"
  },
  {
    "Symbol": "ACM",
    "CoinName": "Actinium",
    "FullName": "Actinium (ACM)"
  },
  {
    "Symbol": "DFXT",
    "CoinName": "DigiFinexToken",
    "FullName": "DigiFinexToken (DFXT)"
  },
  {
    "Symbol": "BF",
    "CoinName": "BitForex Token",
    "FullName": "BitForex Token (BF)"
  },
  {
    "Symbol": "NWP",
    "CoinName": "NWPSolution",
    "FullName": "NWPSolution (NWP)"
  },
  {
    "Symbol": "BCDT",
    "CoinName": "Blockchain Certified Data Token",
    "FullName": "Blockchain Certified Data Token (BCDT)"
  },
  {
    "Symbol": "EVOS",
    "CoinName": "EVOS",
    "FullName": "EVOS (EVOS)"
  },
  {
    "Symbol": "DEEX",
    "CoinName": "DEEX",
    "FullName": "DEEX (DEEX)"
  },
  {
    "Symbol": "ANON",
    "CoinName": "ANON",
    "FullName": "ANON (ANON)"
  },
  {
    "Symbol": "LTZ",
    "CoinName": "Litecoinz",
    "FullName": "Litecoinz (LTZ)"
  },
  {
    "Symbol": "MTZ",
    "CoinName": "Monetizr",
    "FullName": "Monetizr (MTZ)"
  },
  {
    "Symbol": "TBL",
    "CoinName": "Tombola",
    "FullName": "Tombola (TBL)"
  },
  {
    "Symbol": "BXY",
    "CoinName": "Beaxy",
    "FullName": "Beaxy (BXY)"
  },
  {
    "Symbol": "KUE",
    "CoinName": "Kuende",
    "FullName": "Kuende (KUE)"
  },
  {
    "Symbol": "ESN",
    "CoinName": "Ethersocial",
    "FullName": "Ethersocial (ESN)"
  },
  {
    "Symbol": "H3O",
    "CoinName": "Hydrominer",
    "FullName": "Hydrominer (H3O)"
  },
  {
    "Symbol": "BETHER",
    "CoinName": "Bethereum",
    "FullName": "Bethereum (BETHER)"
  },
  {
    "Symbol": "ETHO",
    "CoinName": "ETHER-1",
    "FullName": "ETHER-1 (ETHO)"
  },
  {
    "Symbol": "WTL",
    "CoinName": "Welltrado",
    "FullName": "Welltrado (WTL)"
  },
  {
    "Symbol": "HIH",
    "CoinName": "HiHealth",
    "FullName": "HiHealth (HIH)"
  },
  {
    "Symbol": "ANGEL",
    "CoinName": "Crypto Angel",
    "FullName": "Crypto Angel (ANGEL)"
  },
  {
    "Symbol": "P2PS",
    "CoinName": "P2P Solutions Foundation",
    "FullName": "P2P Solutions Foundation (P2PS)"
  },
  {
    "Symbol": "GXT",
    "CoinName": "Game Protocol",
    "FullName": "Game Protocol (GXT)"
  },
  {
    "Symbol": "AIM",
    "CoinName": "Aimedis",
    "FullName": "Aimedis (AIM)"
  },
  {
    "Symbol": "TWISTR",
    "CoinName": "TWIST",
    "FullName": "TWIST (TWISTR)"
  },
  {
    "Symbol": "CXA",
    "CoinName": "CryptovationX",
    "FullName": "CryptovationX (CXA)"
  },
  {
    "Symbol": "BITTO",
    "CoinName": "BITTO",
    "FullName": "BITTO (BITTO)"
  },
  {
    "Symbol": "HNY",
    "CoinName": "BitFence",
    "FullName": "BitFence (HNY)"
  },
  {
    "Symbol": "QEY",
    "CoinName": "AQwire",
    "FullName": "AQwire (QEY)"
  },
  {
    "Symbol": "UMK",
    "CoinName": "UMKA",
    "FullName": "UMKA (UMK)"
  },
  {
    "Symbol": "VNX",
    "CoinName": "VisionX",
    "FullName": "VisionX (VNX)"
  },
  {
    "Symbol": "WMK",
    "CoinName": "Wemark",
    "FullName": "Wemark (WMK)"
  },
  {
    "Symbol": "MBTC",
    "CoinName": "MicroBitcoin",
    "FullName": "MicroBitcoin (MBTC)"
  },
  {
    "Symbol": "OJX",
    "CoinName": "Ojooo",
    "FullName": "Ojooo (OJX)"
  },
  {
    "Symbol": "CHW",
    "CoinName": "Chrysalis Coin",
    "FullName": "Chrysalis Coin (CHW)"
  },
  {
    "Symbol": "ABBC",
    "CoinName": "ABBC Coin",
    "FullName": "ABBC Coin (ABBC)"
  },
  {
    "Symbol": "CATT",
    "CoinName": "Catex",
    "FullName": "Catex (CATT)"
  },
  {
    "Symbol": "VEX",
    "CoinName": "Vexanium",
    "FullName": "Vexanium (VEX)"
  },
  {
    "Symbol": "LQDN",
    "CoinName": "Liquidity Network",
    "FullName": "Liquidity Network (LQDN)"
  },
  {
    "Symbol": "BIOC",
    "CoinName": "BioCrypt",
    "FullName": "BioCrypt (BIOC)"
  },
  {
    "Symbol": "FOREX",
    "CoinName": "FOREXCOIN",
    "FullName": "FOREXCOIN (FOREX)"
  },
  {
    "Symbol": "CPLO",
    "CoinName": "Cpollo",
    "FullName": "Cpollo (CPLO)"
  },
  {
    "Symbol": "XPX",
    "CoinName": "ProximaX",
    "FullName": "ProximaX (XPX)"
  },
  {
    "Symbol": "RIPAX",
    "CoinName": "RipaEx",
    "FullName": "RipaEx (RIPAX)"
  },
  {
    "Symbol": "HETA",
    "CoinName": "HetaChain",
    "FullName": "HetaChain (HETA)"
  },
  {
    "Symbol": "NOW",
    "CoinName": "NOW Token",
    "FullName": "NOW Token (NOW)"
  },
  {
    "Symbol": "ADAB",
    "CoinName": "Adab Solutions",
    "FullName": "Adab Solutions (ADAB)"
  },
  {
    "Symbol": "CIX100",
    "CoinName": "Cryptoindex",
    "FullName": "Cryptoindex (CIX100)"
  },
  {
    "Symbol": "FIH",
    "CoinName": "Fidelity House",
    "FullName": "Fidelity House (FIH)"
  },
  {
    "Symbol": "MINX",
    "CoinName": "InnovaMinex",
    "FullName": "InnovaMinex (MINX)"
  },
  {
    "Symbol": "MOBU",
    "CoinName": "MOBU",
    "FullName": "MOBU (MOBU)"
  },
  {
    "Symbol": "NVDX",
    "CoinName": "Nodvix",
    "FullName": "Nodvix (NVDX)"
  },
  {
    "Symbol": "COVEX",
    "CoinName": "CoVEX",
    "FullName": "CoVEX (COVEX)"
  },
  {
    "Symbol": "TAL",
    "CoinName": "Talentico",
    "FullName": "Talentico (TAL)"
  },
  {
    "Symbol": "ATT",
    "CoinName": "Aeternum",
    "FullName": "Aeternum (ATT)"
  },
  {
    "Symbol": "F2K",
    "CoinName": "Farm2Kitchen",
    "FullName": "Farm2Kitchen (F2K)"
  },
  {
    "Symbol": "GTX",
    "CoinName": "GALLACTIC",
    "FullName": "GALLACTIC (GTX)"
  },
  {
    "Symbol": "B21",
    "CoinName": "B21",
    "FullName": "B21 (B21)"
  },
  {
    "Symbol": "LK",
    "CoinName": "Liker",
    "FullName": "Liker (LK)"
  },
  {
    "Symbol": "QOBI",
    "CoinName": "Qobit",
    "FullName": "Qobit (QOBI)"
  },
  {
    "Symbol": "BVO",
    "CoinName": "BRAVO Pay",
    "FullName": "BRAVO Pay (BVO)"
  },
  {
    "Symbol": "VENA",
    "CoinName": "Vena Network",
    "FullName": "Vena Network (VENA)"
  },
  {
    "Symbol": "CDRX",
    "CoinName": "CDRX",
    "FullName": "CDRX (CDRX)"
  },
  {
    "Symbol": "CRF",
    "CoinName": "CrowdForce ",
    "FullName": "CrowdForce  (CRF)"
  },
  {
    "Symbol": "ELES",
    "CoinName": "Elements Estates",
    "FullName": "Elements Estates (ELES)"
  },
  {
    "Symbol": "GEON",
    "CoinName": "Geon",
    "FullName": "Geon (GEON)"
  },
  {
    "Symbol": "TZO",
    "CoinName": "TANZŌ",
    "FullName": "TANZŌ (TZO)"
  },
  {
    "Symbol": "WLME",
    "CoinName": "Wellmee",
    "FullName": "Wellmee (WLME)"
  },
  {
    "Symbol": "INVX",
    "CoinName": "Investx",
    "FullName": "Investx (INVX)"
  },
  {
    "Symbol": "AWT",
    "CoinName": "WhatsOnPic",
    "FullName": "WhatsOnPic (AWT)"
  },
  {
    "Symbol": "ABXC",
    "CoinName": "AutoBay",
    "FullName": "AutoBay (ABXC)"
  },
  {
    "Symbol": "LINKC",
    "CoinName": "LINKCHAIN",
    "FullName": "LINKCHAIN (LINKC)"
  },
  {
    "Symbol": "BFC",
    "CoinName": "Betform",
    "FullName": "Betform (BFC)"
  },
  {
    "Symbol": "IMPCN",
    "CoinName": "Brain Space",
    "FullName": "Brain Space (IMPCN)"
  },
  {
    "Symbol": "XPT",
    "CoinName": "Plata",
    "FullName": "Plata (XPT)"
  },
  {
    "Symbol": "FORK",
    "CoinName": "Gastro Advisor Token",
    "FullName": "Gastro Advisor Token (FORK)"
  },
  {
    "Symbol": "NMK",
    "CoinName": "Namek",
    "FullName": "Namek (NMK)"
  },
  {
    "Symbol": "OUT",
    "CoinName": "Netscouters",
    "FullName": "Netscouters (OUT)"
  },
  {
    "Symbol": "LPT",
    "CoinName": "Livepeer",
    "FullName": "Livepeer (LPT)"
  },
  {
    "Symbol": "RAINC ",
    "CoinName": "RainCheck",
    "FullName": "RainCheck (RAINC)"
  },
  {
    "Symbol": "IOV",
    "CoinName": "IOV",
    "FullName": "IOV (IOV)"
  },
  {
    "Symbol": "MYO",
    "CoinName": "Mycro",
    "FullName": "Mycro (MYO)"
  },
  {
    "Symbol": "ORET",
    "CoinName": "ORET Token",
    "FullName": "ORET Token (ORET)"
  },
  {
    "Symbol": "SEC",
    "CoinName": "SecureCryptoPayments",
    "FullName": "SecureCryptoPayments (SEC)"
  },
  {
    "Symbol": "QUIZ",
    "CoinName": "Quizando",
    "FullName": "Quizando (QUIZ)"
  },
  {
    "Symbol": "CYRS",
    "CoinName": "Cyrus Token",
    "FullName": "Cyrus Token (CYRS)"
  },
  {
    "Symbol": "UTL",
    "CoinName": "Utile Network",
    "FullName": "Utile Network (UTL)"
  },
  {
    "Symbol": "JOYS",
    "CoinName": "JOYS",
    "FullName": "JOYS (JOYS)"
  },
  {
    "Symbol": "DACH",
    "CoinName": "DACH Coin",
    "FullName": "DACH Coin (DACH)"
  },
  {
    "Symbol": "MNVM",
    "CoinName": "Novam",
    "FullName": "Novam (MNVM)"
  },
  {
    "Symbol": "PLTX",
    "CoinName": "PlutusX",
    "FullName": "PlutusX (PLTX)"
  },
  {
    "Symbol": "BTMG",
    "CoinName": "Bitcademy Football",
    "FullName": "Bitcademy Football (BTMG)"
  },
  {
    "Symbol": "BRIK",
    "CoinName": "BrikBit",
    "FullName": "BrikBit (BRIK)"
  },
  {
    "Symbol": "XTN",
    "CoinName": "XEND token",
    "FullName": "XEND token (XTN)"
  },
  {
    "Symbol": "LUMA",
    "CoinName": "LUMA Token",
    "FullName": "LUMA Token (LUMA)"
  },
  {
    "Symbol": "BTZN",
    "CoinName": "Bitzon",
    "FullName": "Bitzon (BTZN)"
  },
  {
    "Symbol": "CLRTY",
    "CoinName": "Clarity",
    "FullName": "Clarity (CLRTY)"
  },
  {
    "Symbol": "CGT",
    "CoinName": "Coingrid",
    "FullName": "Coingrid (CGT)"
  },
  {
    "Symbol": "NAVIB",
    "CoinName": "Navibration",
    "FullName": "Navibration (NAVIB)"
  },
  {
    "Symbol": "ARTP",
    "CoinName": "ArtPro",
    "FullName": "ArtPro (ARTP)"
  },
  {
    "Symbol": "PLEO",
    "CoinName": "Empleos",
    "FullName": "Empleos (PLEO)"
  },
  {
    "Symbol": "GDX",
    "CoinName": "Gamedex",
    "FullName": "Gamedex (GDX)"
  },
  {
    "Symbol": "EGDC",
    "CoinName": "EasyGuide",
    "FullName": "EasyGuide (EGDC)"
  },
  {
    "Symbol": "ENTT",
    "CoinName": "Presale Ventures",
    "FullName": "Presale Ventures (ENTT)"
  },
  {
    "Symbol": "RWD",
    "CoinName": "Reward Vision",
    "FullName": "Reward Vision (RWD)"
  },
  {
    "Symbol": "AURUM",
    "CoinName": "Aurum",
    "FullName": "Aurum (AURUM)"
  },
  {
    "Symbol": "WRL",
    "CoinName": "WHIRL",
    "FullName": "WHIRL (WRL)"
  },
  {
    "Symbol": "CRWD",
    "CoinName": "CRWD Network",
    "FullName": "CRWD Network (CRWD)"
  },
  {
    "Symbol": "TAURI",
    "CoinName": "Extauri",
    "FullName": "Extauri (TAURI)"
  },
  {
    "Symbol": "EYE",
    "CoinName": "EYE Token",
    "FullName": "EYE Token (EYE)"
  },
  {
    "Symbol": "GTR",
    "CoinName": "Gturbo",
    "FullName": "Gturbo (GTR)"
  },
  {
    "Symbol": "HXC",
    "CoinName": "HexanCoin",
    "FullName": "HexanCoin (HXC)"
  },
  {
    "Symbol": "OPEX",
    "CoinName": "Optherium Token",
    "FullName": "Optherium Token (OPEX)"
  },
  {
    "Symbol": "SKYM",
    "CoinName": "SkyMap",
    "FullName": "SkyMap (SKYM)"
  },
  {
    "Symbol": "SCIA",
    "CoinName": "Stem Cell",
    "FullName": "Stem Cell (SCIA)"
  },
  {
    "Symbol": "TXP",
    "CoinName": "Trade Pharma Network",
    "FullName": "Trade Pharma Network (TXP)"
  },
  {
    "Symbol": "GPS",
    "CoinName": "Triffic",
    "FullName": "Triffic (GPS)"
  },
  {
    "Symbol": "WTXH",
    "CoinName": "WTX HUB",
    "FullName": "WTX HUB (WTXH)"
  },
  {
    "Symbol": "BBG",
    "CoinName": "BigBang",
    "FullName": "BigBang (BBG)"
  },
  {
    "Symbol": "NZE",
    "CoinName": "Nagezeni",
    "FullName": "Nagezeni (NZE)"
  },
  {
    "Symbol": "SHKG",
    "CoinName": "SharkGate",
    "FullName": "SharkGate (SHKG)"
  },
  {
    "Symbol": "TENZ",
    "CoinName": "Tenzorum",
    "FullName": "Tenzorum (TENZ)"
  },
  {
    "Symbol": "TWC",
    "CoinName": "Twilight",
    "FullName": "Twilight (TWC)"
  },
  {
    "Symbol": "WUG",
    "CoinName": "WatchUGot",
    "FullName": "WatchUGot (WUG)"
  },
  {
    "Symbol": "CAND",
    "CoinName": "Canlead",
    "FullName": "Canlead (CAND)"
  },
  {
    "Symbol": "CTW",
    "CoinName": "Citowise",
    "FullName": "Citowise (CTW)"
  },
  {
    "Symbol": "CRV",
    "CoinName": "Cravy",
    "FullName": "Cravy (CRV)"
  },
  {
    "Symbol": "XIM",
    "CoinName": "Impresso",
    "FullName": "Impresso (XIM)"
  },
  {
    "Symbol": "NAM",
    "CoinName": "Namacoin",
    "FullName": "Namacoin (NAM)"
  },
  {
    "Symbol": "UFT",
    "CoinName": "ufoodo",
    "FullName": "ufoodo (UFT)"
  },
  {
    "Symbol": "2TF",
    "CoinName": "2TF",
    "FullName": "2TF (2TF)"
  },
  {
    "Symbol": "BZKY",
    "CoinName": "Bizkey",
    "FullName": "Bizkey (BZKY)"
  },
  {
    "Symbol": "CARAT",
    "CoinName": "Carats Token",
    "FullName": "Carats Token (CARAT)"
  },
  {
    "Symbol": "ZILLA",
    "CoinName": "ChainZilla",
    "FullName": "ChainZilla (ZILLA)"
  },
  {
    "Symbol": "TCJ",
    "CoinName": "Coinshare",
    "FullName": "Coinshare (TCJ)"
  },
  {
    "Symbol": "MAEP",
    "CoinName": "Maester Protocol",
    "FullName": "Maester Protocol (MAEP)"
  },
  {
    "Symbol": "DN8",
    "CoinName": "Pldgr",
    "FullName": "Pldgr (DN8)"
  },
  {
    "Symbol": "XNT",
    "CoinName": "Exenium",
    "FullName": "Exenium (XNT)"
  },
  {
    "Symbol": "PPOVR",
    "CoinName": "POVR",
    "FullName": "POVR (PPOVR)"
  },
  {
    "Symbol": "LX",
    "CoinName": "Moonlight",
    "FullName": "Moonlight (LX)"
  },
  {
    "Symbol": "AWAX",
    "CoinName": "AWAX",
    "FullName": "AWAX (AWAX)"
  },
  {
    "Symbol": "VAR",
    "CoinName": "VARcrypt",
    "FullName": "VARcrypt (VAR)"
  },
  {
    "Symbol": "TKD",
    "CoinName": "Tokedo",
    "FullName": "Tokedo (TKD)"
  },
  {
    "Symbol": "VTAG",
    "CoinName": "veriTAG Token",
    "FullName": "veriTAG Token (VTAG)"
  },
  {
    "Symbol": "WBY",
    "CoinName": "WeBuy",
    "FullName": "WeBuy (WBY)"
  },
  {
    "Symbol": "BBOS",
    "CoinName": "Blackbox Foundation",
    "FullName": "Blackbox Foundation (BBOS)"
  },
  {
    "Symbol": "BFEX",
    "CoinName": "BFEX",
    "FullName": "BFEX (BFEX)"
  },
  {
    "Symbol": "HUS",
    "CoinName": "HUSSY",
    "FullName": "HUSSY (HUS)"
  },
  {
    "Symbol": "MENU",
    "CoinName": "MenuBuzz",
    "FullName": "MenuBuzz (MENU)"
  },
  {
    "Symbol": "APXT",
    "CoinName": "ApolloX",
    "FullName": "ApolloX (APXT)"
  },
  {
    "Symbol": "IDORU",
    "CoinName": "Vip2Fan",
    "FullName": "Vip2Fan (IDORU)"
  },
  {
    "Symbol": "WOM",
    "CoinName": "WOM",
    "FullName": "WOM (WOM)"
  },
  {
    "Symbol": "BONA",
    "CoinName": "Bonafi",
    "FullName": "Bonafi (BONA)"
  },
  {
    "Symbol": "HLDY",
    "CoinName": "HOLIDAY",
    "FullName": "HOLIDAY (HLDY)"
  },
  {
    "Symbol": "CONT",
    "CoinName": "Contentos",
    "FullName": "Contentos (CONT)"
  },
  {
    "Symbol": "BLACK",
    "CoinName": "eosBLACK",
    "FullName": "eosBLACK (BLACK)"
  },
  {
    "Symbol": "HORUS",
    "CoinName": "HorusPay",
    "FullName": "HorusPay (HORUS)"
  },
  {
    "Symbol": "MEETONE",
    "CoinName": "MEET.ONE",
    "FullName": "MEET.ONE (MEETONE)"
  },
  {
    "Symbol": "IOTW",
    "CoinName": "IOTW",
    "FullName": "IOTW (IOTW)"
  },
  {
    "Symbol": "EMPR",
    "CoinName": "empowr",
    "FullName": "empowr (EMPR)"
  },
  {
    "Symbol": "MPAY",
    "CoinName": "Menapay",
    "FullName": "Menapay (MPAY)"
  },
  {
    "Symbol": "AGM",
    "CoinName": "Argoneum",
    "FullName": "Argoneum (AGM)"
  },
  {
    "Symbol": "PTO",
    "CoinName": "Patentico",
    "FullName": "Patentico (PTO)"
  },
  {
    "Symbol": "AS",
    "CoinName": "AmaStar",
    "FullName": "AmaStar (AS)"
  },
  {
    "Symbol": "OSF",
    "CoinName": "One Solution",
    "FullName": "One Solution (OSF)"
  },
  {
    "Symbol": "DLPT",
    "CoinName": "Deliverers Power Token",
    "FullName": "Deliverers Power Token (DLPT)"
  },
  {
    "Symbol": "GREENT",
    "CoinName": "Greentoken",
    "FullName": "Greentoken (GREENT)"
  },
  {
    "Symbol": "VIDI",
    "CoinName": "Vidion",
    "FullName": "Vidion (VIDI)"
  },
  {
    "Symbol": "SIN",
    "CoinName": "SINOVATE",
    "FullName": "SINOVATE (SIN)"
  },
  {
    "Symbol": "OPQ",
    "CoinName": "Opacity",
    "FullName": "Opacity (OPQ)"
  },
  {
    "Symbol": "ZYM",
    "CoinName": "Enzym",
    "FullName": "Enzym (ZYM)"
  },
  {
    "Symbol": "RPB",
    "CoinName": "Republia",
    "FullName": "Republia (RPB)"
  },
  {
    "Symbol": "DYNCOIN",
    "CoinName": "Dyncoin",
    "FullName": "Dyncoin (DYNCOIN)"
  },
  {
    "Symbol": "MIT",
    "CoinName": "MiMiner",
    "FullName": "MiMiner (MIT)"
  },
  {
    "Symbol": "VANM",
    "CoinName": "VANM",
    "FullName": "VANM (VANM)"
  },
  {
    "Symbol": "PSF",
    "CoinName": "Prime Shipping Foundation",
    "FullName": "Prime Shipping Foundation (PSF)"
  },
  {
    "Symbol": "LITION",
    "CoinName": "Lition",
    "FullName": "Lition (LITION)"
  },
  {
    "Symbol": "NEW",
    "CoinName": "Newton",
    "FullName": "Newton (NEW)"
  },
  {
    "Symbol": "TITAN",
    "CoinName": "Titan",
    "FullName": "Titan (TITAN)"
  },
  {
    "Symbol": "MZG",
    "CoinName": "Moozicore",
    "FullName": "Moozicore (MZG)"
  },
  {
    "Symbol": "VIAZ",
    "CoinName": "Viaz",
    "FullName": "Viaz (VIAZ)"
  },
  {
    "Symbol": "BTZC",
    "CoinName": "BeatzCoin",
    "FullName": "BeatzCoin (BTZC)"
  },
  {
    "Symbol": "ECR",
    "CoinName": "EcoVerse",
    "FullName": "EcoVerse (ECR)"
  },
  {
    "Symbol": "RF",
    "CoinName": "Raido Financial",
    "FullName": "Raido Financial (RF)"
  },
  {
    "Symbol": "ARMS",
    "CoinName": "2Acoin",
    "FullName": "2Acoin (ARMS)"
  },
  {
    "Symbol": "MPXT",
    "CoinName": "Myplacex",
    "FullName": "Myplacex (MPXT)"
  },
  {
    "Symbol": "XELS",
    "CoinName": "XELS Coin",
    "FullName": "XELS Coin (XELS)"
  },
  {
    "Symbol": "PGF7T",
    "CoinName": "PGF500",
    "FullName": "PGF500 (PGF7T)"
  },
  {
    "Symbol": "IDAC ",
    "CoinName": "IDAC",
    "FullName": "IDAC (IDAC)"
  },
  {
    "Symbol": "UCOINT",
    "CoinName": "UCOIN",
    "FullName": "UCOIN (UCOINT)"
  },
  {
    "Symbol": "YDY",
    "CoinName": "Ydentity",
    "FullName": "Ydentity (YDY)"
  },
  {
    "Symbol": "FTUM",
    "CoinName": "Fatum",
    "FullName": "Fatum (FTUM)"
  },
  {
    "Symbol": "SPON",
    "CoinName": "Instant Sponsor Token",
    "FullName": "Instant Sponsor Token (SPON)"
  },
  {
    "Symbol": "DLXV",
    "CoinName": "Delta-X",
    "FullName": "Delta-X (DLXV)"
  },
  {
    "Symbol": "OCEANT",
    "CoinName": "Poseidon Foundation",
    "FullName": "Poseidon Foundation (OCEANT)"
  },
  {
    "Symbol": "TECO",
    "CoinName": "TerraEcoCoin",
    "FullName": "TerraEcoCoin (TECO)"
  },
  {
    "Symbol": "GOALS",
    "CoinName": "UnitedFans",
    "FullName": "UnitedFans (GOALS)"
  },
  {
    "Symbol": "ETHIX",
    "CoinName": "EthicHub",
    "FullName": "EthicHub (ETHIX)"
  },
  {
    "Symbol": "CDP",
    "CoinName": "CrowdPrecision",
    "FullName": "CrowdPrecision (CDP)"
  },
  {
    "Symbol": "TTB",
    "CoinName": "TrustaBit",
    "FullName": "TrustaBit (TTB)"
  },
  {
    "Symbol": "CHK",
    "CoinName": "Chek",
    "FullName": "Chek (CHK)"
  },
  {
    "Symbol": "VLTX",
    "CoinName": "Volentix",
    "FullName": "Volentix (VLTX)"
  },
  {
    "Symbol": "PRPT",
    "CoinName": "Purple Token",
    "FullName": "Purple Token (PRPT)"
  },
  {
    "Symbol": "OASC",
    "CoinName": "Oasis City",
    "FullName": "Oasis City (OASC)"
  },
  {
    "Symbol": "TREE",
    "CoinName": "HyperionX",
    "FullName": "HyperionX (TREE)"
  },
  {
    "Symbol": "GDL",
    "CoinName": "GodlyCoin",
    "FullName": "GodlyCoin (GDL)"
  },
  {
    "Symbol": "LNT",
    "CoinName": "Litenett",
    "FullName": "Litenett (LNT)"
  },
  {
    "Symbol": "FTRC",
    "CoinName": "FutureCoin",
    "FullName": "FutureCoin (FTRC)"
  },
  {
    "Symbol": "HBX",
    "CoinName": "Hyperbridge",
    "FullName": "Hyperbridge (HBX)"
  },
  {
    "Symbol": "LAO",
    "CoinName": "LC Token",
    "FullName": "LC Token (LAO)"
  },
  {
    "Symbol": "GOVT",
    "CoinName": "The Government Network",
    "FullName": "The Government Network (GOVT)"
  },
  {
    "Symbol": "TBRS",
    "CoinName": "Tiberius",
    "FullName": "Tiberius (TBRS)"
  },
  {
    "Symbol": "COGEN",
    "CoinName": "Cogenero",
    "FullName": "Cogenero (COGEN)"
  },
  {
    "Symbol": "DAILY",
    "CoinName": "Coindaily",
    "FullName": "Coindaily (DAILY)"
  },
  {
    "Symbol": "SREUR",
    "CoinName": "SocialRemit",
    "FullName": "SocialRemit (SREUR)"
  },
  {
    "Symbol": "MAZC",
    "CoinName": "MyMazzu",
    "FullName": "MyMazzu (MAZC)"
  },
  {
    "Symbol": "TGTC",
    "CoinName": "Tokensgate",
    "FullName": "Tokensgate (TGTC)"
  },
  {
    "Symbol": "NRG",
    "CoinName": "Energi",
    "FullName": "Energi (NRG)"
  },
  {
    "Symbol": "PLNX",
    "CoinName": "Planumex",
    "FullName": "Planumex (PLNX)"
  },
  {
    "Symbol": "IPT",
    "CoinName": "Crypt-ON",
    "FullName": "Crypt-ON (IPT)"
  },
  {
    "Symbol": "IGTT",
    "CoinName": "IGT",
    "FullName": "IGT (IGTT)"
  },
  {
    "Symbol": "SRXIO",
    "CoinName": "Securix",
    "FullName": "Securix (SRXIO)"
  },
  {
    "Symbol": "GZB",
    "CoinName": "Gigzi",
    "FullName": "Gigzi (GZB)"
  },
  {
    "Symbol": "FNX",
    "CoinName": "FinanceX",
    "FullName": "FinanceX (FNX)"
  },
  {
    "Symbol": "GGP",
    "CoinName": "GGPro",
    "FullName": "GGPro (GGP)"
  },
  {
    "Symbol": "IFUM",
    "CoinName": "Infleum",
    "FullName": "Infleum (IFUM)"
  },
  {
    "Symbol": "ATC",
    "CoinName": "AutoBlock",
    "FullName": "AutoBlock (ATC)"
  },
  {
    "Symbol": "DOOH",
    "CoinName": "Bidooh",
    "FullName": "Bidooh (DOOH)"
  },
  {
    "Symbol": "IOUX",
    "CoinName": "IOU",
    "FullName": "IOU (IOUX)"
  },
  {
    "Symbol": "BQTX",
    "CoinName": "BQT",
    "FullName": "BQT (BQTX)"
  },
  {
    "Symbol": "NVOY",
    "CoinName": "Envoy",
    "FullName": "Envoy (NVOY)"
  },
  {
    "Symbol": "CYBR",
    "CoinName": "CYBR",
    "FullName": "CYBR (CYBR)"
  },
  {
    "Symbol": "LLG",
    "CoinName": "Loligo",
    "FullName": "Loligo (LLG)"
  },
  {
    "Symbol": "LCR",
    "CoinName": "Lucre",
    "FullName": "Lucre (LCR)"
  },
  {
    "Symbol": "SNPC",
    "CoinName": "SnapCoin",
    "FullName": "SnapCoin (SNPC)"
  },
  {
    "Symbol": "VTM",
    "CoinName": "Victorieum",
    "FullName": "Victorieum (VTM)"
  },
  {
    "Symbol": "NRX",
    "CoinName": "Neironix",
    "FullName": "Neironix (NRX)"
  },
  {
    "Symbol": "BCNA",
    "CoinName": "BitCanna",
    "FullName": "BitCanna (BCNA)"
  },
  {
    "Symbol": "BTSG",
    "CoinName": "BitSong",
    "FullName": "BitSong (BTSG)"
  },
  {
    "Symbol": "BXM",
    "CoinName": "Bixtrim",
    "FullName": "Bixtrim (BXM)"
  },
  {
    "Symbol": "CINX",
    "CoinName": "CINDX",
    "FullName": "CINDX (CINX)"
  },
  {
    "Symbol": "CCIN",
    "CoinName": "Cryptocoin Insurance",
    "FullName": "Cryptocoin Insurance (CCIN)"
  },
  {
    "Symbol": "CCI",
    "CoinName": "Cyber Capital Invest",
    "FullName": "Cyber Capital Invest (CCI)"
  },
  {
    "Symbol": "RDS",
    "CoinName": "Reger Diamond",
    "FullName": "Reger Diamond (RDS)"
  },
  {
    "Symbol": "GMS",
    "CoinName": "Gemstra",
    "FullName": "Gemstra (GMS)"
  },
  {
    "Symbol": "SGAT",
    "CoinName": "SGAT",
    "FullName": "SGAT (SGAT)"
  },
  {
    "Symbol": "SILKT",
    "CoinName": "SilkChain",
    "FullName": "SilkChain (SILKT)"
  },
  {
    "Symbol": "BITM",
    "CoinName": "BitMoney",
    "FullName": "BitMoney (BITM)"
  },
  {
    "Symbol": "TCHN",
    "CoinName": "Tachain",
    "FullName": "Tachain (TCHN)"
  },
  {
    "Symbol": "FIII",
    "CoinName": "Fiii",
    "FullName": "Fiii (FIII)"
  },
  {
    "Symbol": "ICHN",
    "CoinName": "i-chain",
    "FullName": "i-chain (ICHN)"
  },
  {
    "Symbol": "LVX",
    "CoinName": "Level01",
    "FullName": "Level01 (LVX)"
  },
  {
    "Symbol": "AENT",
    "CoinName": "AEN",
    "FullName": "AEN (AENT)"
  },
  {
    "Symbol": "MBN",
    "CoinName": "Membrana",
    "FullName": "Membrana (MBN)"
  },
  {
    "Symbol": "LYFE",
    "CoinName": "Lyfe",
    "FullName": "Lyfe (LYFE)"
  },
  {
    "Symbol": "REMCO",
    "CoinName": "Remco",
    "FullName": "Remco (REMCO)"
  },
  {
    "Symbol": "SaTT",
    "CoinName": "SaTT",
    "FullName": "SaTT (SaTT)"
  },
  {
    "Symbol": "GEMA",
    "CoinName": "Gemera",
    "FullName": "Gemera (GEMA)"
  },
  {
    "Symbol": "SCH",
    "CoinName": "Sia Cash Coin",
    "FullName": "Sia Cash Coin (SCH)"
  },
  {
    "Symbol": "VTEX",
    "CoinName": "Vertex",
    "FullName": "Vertex (VTEX)"
  },
  {
    "Symbol": "SRV",
    "CoinName": "ServAdvisor",
    "FullName": "ServAdvisor (SRV)"
  },
  {
    "Symbol": "DSLA",
    "CoinName": "Stacktical",
    "FullName": "Stacktical (DSLA)"
  },
  {
    "Symbol": "SYLO",
    "CoinName": "Sylo",
    "FullName": "Sylo (SYLO)"
  },
  {
    "Symbol": "YMZ",
    "CoinName": "Yamzu",
    "FullName": "Yamzu (YMZ)"
  },
  {
    "Symbol": "AER",
    "CoinName": "Aeryus",
    "FullName": "Aeryus (AER)"
  },
  {
    "Symbol": "AIBB",
    "CoinName": "AiBB ",
    "FullName": "AiBB  (AIBB)"
  },
  {
    "Symbol": "META",
    "CoinName": "Metadium",
    "FullName": "Metadium (META)"
  },
  {
    "Symbol": "ASQT",
    "CoinName": "ASQ Protocol",
    "FullName": "ASQ Protocol (ASQT)"
  },
  {
    "Symbol": "AXC",
    "CoinName": "autoXchange",
    "FullName": "autoXchange (AXC)"
  },
  {
    "Symbol": "BLKD",
    "CoinName": "Blinked",
    "FullName": "Blinked (BLKD)"
  },
  {
    "Symbol": "CYS",
    "CoinName": "BlooCYS",
    "FullName": "BlooCYS (CYS)"
  },
  {
    "Symbol": "ATTR",
    "CoinName": "Attrace",
    "FullName": "Attrace (ATTR)"
  },
  {
    "Symbol": "CTY",
    "CoinName": "Connecty",
    "FullName": "Connecty (CTY)"
  },
  {
    "Symbol": "BC",
    "CoinName": "Beverage.cash",
    "FullName": "Beverage.cash (BC)"
  },
  {
    "Symbol": "DDL",
    "CoinName": "Donocle",
    "FullName": "Donocle (DDL)"
  },
  {
    "Symbol": "EZX",
    "CoinName": "EZ Exchange",
    "FullName": "EZ Exchange (EZX)"
  },
  {
    "Symbol": "COY",
    "CoinName": "Coin Analyst",
    "FullName": "Coin Analyst (COY)"
  },
  {
    "Symbol": "FNL",
    "CoinName": "Finlocale",
    "FullName": "Finlocale (FNL)"
  },
  {
    "Symbol": "B2G",
    "CoinName": "Bitcoiin2Gen",
    "FullName": "Bitcoiin2Gen (B2G)"
  },
  {
    "Symbol": "CSQ",
    "CoinName": "cosquare",
    "FullName": "cosquare (CSQ)"
  },
  {
    "Symbol": "HBE",
    "CoinName": "healthbank",
    "FullName": "healthbank (HBE)"
  },
  {
    "Symbol": "HV",
    "CoinName": "HighVibe.Network",
    "FullName": "HighVibe.Network (HV)"
  },
  {
    "Symbol": "ICT",
    "CoinName": "Intrachain",
    "FullName": "Intrachain (ICT)"
  },
  {
    "Symbol": "TOS",
    "CoinName": "KRATOS",
    "FullName": "KRATOS (TOS)"
  },
  {
    "Symbol": "CPROP",
    "CoinName": "CPROP",
    "FullName": "CPROP (CPROP)"
  },
  {
    "Symbol": "MOOLYA",
    "CoinName": "moolyacoin",
    "FullName": "moolyacoin (MOOLYA)"
  },
  {
    "Symbol": "PON",
    "CoinName": "Ponder",
    "FullName": "Ponder (PON)"
  },
  {
    "Symbol": "CREV",
    "CoinName": "CryptoRevolution",
    "FullName": "CryptoRevolution (CREV)"
  },
  {
    "Symbol": "VAD",
    "CoinName": "Varanida",
    "FullName": "Varanida (VAD)"
  },
  {
    "Symbol": "IDC",
    "CoinName": "IdealCoin",
    "FullName": "IdealCoin (IDC)"
  },
  {
    "Symbol": "LBR",
    "CoinName": "LaborCrypto",
    "FullName": "LaborCrypto (LBR)"
  },
  {
    "Symbol": "EMX",
    "CoinName": "EMX",
    "FullName": "EMX (EMX)"
  },
  {
    "Symbol": "XBASE",
    "CoinName": "ETERBASE",
    "FullName": "ETERBASE (XBASE)"
  },
  {
    "Symbol": "LEN",
    "CoinName": "Liqnet",
    "FullName": "Liqnet (LEN)"
  },
  {
    "Symbol": "KUBO",
    "CoinName": "KUBO",
    "FullName": "KUBO (KUBO)"
  },
  {
    "Symbol": "FABA",
    "CoinName": "Faba Invest",
    "FullName": "Faba Invest (FABA)"
  },
  {
    "Symbol": "LQ8",
    "CoinName": "Liquid8",
    "FullName": "Liquid8 (LQ8)"
  },
  {
    "Symbol": "GC",
    "CoinName": "Gric Coin",
    "FullName": "Gric Coin (GC)"
  },
  {
    "Symbol": "INFLR",
    "CoinName": "Inflr",
    "FullName": "Inflr (INFLR)"
  },
  {
    "Symbol": "LIB",
    "CoinName": "Libellum",
    "FullName": "Libellum (LIB)"
  },
  {
    "Symbol": "XPR",
    "CoinName": "Permian",
    "FullName": "Permian (XPR)"
  },
  {
    "Symbol": "PETL",
    "CoinName": "Petlife",
    "FullName": "Petlife (PETL)"
  },
  {
    "Symbol": "XDMC",
    "CoinName": "MPCX",
    "FullName": "MPCX (XDMC)"
  },
  {
    "Symbol": "PPS",
    "CoinName": "PopulStay",
    "FullName": "PopulStay (PPS)"
  },
  {
    "Symbol": "SMILO",
    "CoinName": "Smilo",
    "FullName": "Smilo (SMILO)"
  },
  {
    "Symbol": "BCVB",
    "CoinName": "BCV Blue Chip",
    "FullName": "BCV Blue Chip (BCVB)"
  },
  {
    "Symbol": "TREX",
    "CoinName": "TreeBlock",
    "FullName": "TreeBlock (TREX)"
  },
  {
    "Symbol": "VNS",
    "CoinName": "Venus",
    "FullName": "Venus (VNS)"
  },
  {
    "Symbol": "VRF",
    "CoinName": "Verifier",
    "FullName": "Verifier (VRF)"
  },
  {
    "Symbol": "AUX",
    "CoinName": "Auxilium",
    "FullName": "Auxilium (Auxilium)"
  },
  {
    "Symbol": "LYQD",
    "CoinName": "eLYQD",
    "FullName": "eLYQD (LYQD)"
  },
  {
    "Symbol": "CBP",
    "CoinName": "ComBox",
    "FullName": "ComBox (CBP)"
  },
  {
    "Symbol": "SMOKE",
    "CoinName": "Smoke",
    "FullName": "Smoke (SMOKE)"
  },
  {
    "Symbol": "EDN",
    "CoinName": "EdenChain",
    "FullName": "EdenChain (EDN)"
  },
  {
    "Symbol": "AVALA",
    "CoinName": "Travala",
    "FullName": "Travala (AVALA)"
  },
  {
    "Symbol": "NOS",
    "CoinName": "nOS",
    "FullName": "nOS (NOS)"
  },
  {
    "Symbol": "DT1",
    "CoinName": "Dollar Token 1",
    "FullName": "Dollar Token 1 (DT1)"
  },
  {
    "Symbol": "FTT",
    "CoinName": "FarmaTrust",
    "FullName": "FarmaTrust (FTT)"
  },
  {
    "Symbol": "STACS",
    "CoinName": "STACS Token",
    "FullName": "STACS Token (STACS)"
  },
  {
    "Symbol": "JMC",
    "CoinName": "Junson Ming Chan Coin",
    "FullName": "Junson Ming Chan Coin (JMC)"
  },
  {
    "Symbol": "FOAM",
    "CoinName": "Foam",
    "FullName": "Foam (FOAM)"
  },
  {
    "Symbol": "FRED",
    "CoinName": "FREDEnergy",
    "FullName": "FREDEnergy (FRED)"
  },
  {
    "Symbol": "CNCT",
    "CoinName": "CONNECT",
    "FullName": "CONNECT (CNCT)"
  },
  {
    "Symbol": "ENGT",
    "CoinName": "Engagement Token",
    "FullName": "Engagement Token (ENGT)"
  },
  {
    "Symbol": "VRTY",
    "CoinName": "Verity",
    "FullName": "Verity (VRTY)"
  },
  {
    "Symbol": "TEAMT",
    "CoinName": "TokenStars TEAM Token",
    "FullName": "TokenStars TEAM Token (TEAMT)"
  },
  {
    "Symbol": "ZND",
    "CoinName": "Zenad",
    "FullName": "Zenad (ZND)"
  },
  {
    "Symbol": "3XD",
    "CoinName": "3DChain",
    "FullName": "3DChain (3XD)"
  },
  {
    "Symbol": "FPC",
    "CoinName": "Futurepia",
    "FullName": "Futurepia (FPC)"
  },
  {
    "Symbol": "SYNCO",
    "CoinName": "Synco",
    "FullName": "Synco (SYNCO)"
  },
  {
    "Symbol": "SPY",
    "CoinName": "Verifier",
    "FullName": "Verifier (SPY)"
  },
  {
    "Symbol": "77G",
    "CoinName": "GraphenTech",
    "FullName": "GraphenTech (77G)"
  },
  {
    "Symbol": "HIDU",
    "CoinName": "H-Education World",
    "FullName": "H-Education World (HIDU)"
  },
  {
    "Symbol": "USE",
    "CoinName": "Usechain Token",
    "FullName": "Usechain Token (USE)"
  },
  {
    "Symbol": "NGIN",
    "CoinName": "Ngin",
    "FullName": "Ngin (NGIN)"
  },
  {
    "Symbol": "KOTO",
    "CoinName": "Koto",
    "FullName": "Koto (KOTO)"
  },
  {
    "Symbol": "SUSD",
    "CoinName": "sUSD",
    "FullName": "sUSD (SUSD)"
  },
  {
    "Symbol": "GENX",
    "CoinName": "Genesis Network",
    "FullName": "Genesis Network (GENX)"
  },
  {
    "Symbol": "XSC",
    "CoinName": "Hyperspace",
    "FullName": "Hyperspace (XSC)"
  },
  {
    "Symbol": "VTL",
    "CoinName": "Vertical",
    "FullName": "Vertical (VTL)"
  },
  {
    "Symbol": "SECI",
    "CoinName": "Seci",
    "FullName": "Seci (SECI)"
  },
  {
    "Symbol": "SPRTZ",
    "CoinName": "SpritzCoin",
    "FullName": "SpritzCoin (SPRTZ)"
  },
  {
    "Symbol": "C25",
    "CoinName": "C25 Coin",
    "FullName": "C25 Coin (C25)"
  },
  {
    "Symbol": "MVL",
    "CoinName": "MVL",
    "FullName": "MVL (MVL)"
  },
  {
    "Symbol": "LYN",
    "CoinName": "LYNCHPIN Token",
    "FullName": "LYNCHPIN Token (LYN)"
  },
  {
    "Symbol": "STASH",
    "CoinName": "BitStash",
    "FullName": "BitStash (STASH)"
  },
  {
    "Symbol": "HERB",
    "CoinName": "HerbCoin",
    "FullName": "HerbCoin (HERB)"
  },
  {
    "Symbol": "AQUA",
    "CoinName": "Aquachain",
    "FullName": "Aquachain (AQUA)"
  },
  {
    "Symbol": "XQR",
    "CoinName": "Qredit",
    "FullName": "Qredit (XQR)"
  },
  {
    "Symbol": "URX",
    "CoinName": "URANIUMX",
    "FullName": "URANIUMX (URX)"
  },
  {
    "Symbol": "HASH",
    "CoinName": "Hashbon",
    "FullName": "Hashbon (HASH)"
  },
  {
    "Symbol": "KSYS",
    "CoinName": "K-Systems",
    "FullName": "K-Systems (KSYS)"
  },
  {
    "Symbol": "MTEL",
    "CoinName": "MEDoctor",
    "FullName": "MEDoctor (MTEL)"
  },
  {
    "Symbol": "MTT",
    "CoinName": "MulTra",
    "FullName": "MulTra (MTT)"
  },
  {
    "Symbol": "MITC",
    "CoinName": "MusicLife",
    "FullName": "MusicLife (MITC)"
  },
  {
    "Symbol": "BBTC",
    "CoinName": "BlakeBitcoin",
    "FullName": "BlakeBitcoin (BBTC)"
  },
  {
    "Symbol": "UMO",
    "CoinName": "Universal Molecule",
    "FullName": "Universal Molecule (UMO)"
  },
  {
    "Symbol": "LIT",
    "CoinName": "Lithium",
    "FullName": "Lithium (LIT)"
  },
  {
    "Symbol": "MUST",
    "CoinName": "MUST Protocol",
    "FullName": "MUST Protocol (MUST)"
  },
  {
    "Symbol": "ELT",
    "CoinName": "Electron",
    "FullName": "Electron (ELT)"
  },
  {
    "Symbol": "XNB",
    "CoinName": "Xeonbit",
    "FullName": "Xeonbit (XNB)"
  },
  {
    "Symbol": "RBTC",
    "CoinName": "Smart Bitcoin",
    "FullName": "Smart Bitcoin (RBTC)"
  },
  {
    "Symbol": "BXC",
    "CoinName": "BtcEX",
    "FullName": "BtcEX (BXC)"
  },
  {
    "Symbol": "PIRATE",
    "CoinName": "PirateCash",
    "FullName": "PirateCash (PIRATE)"
  },
  {
    "Symbol": "EXO",
    "CoinName": "Exosis",
    "FullName": "Exosis (EXO)"
  },
  {
    "Symbol": "ONAM",
    "CoinName": "ONAM",
    "FullName": "ONAM (ONAM)"
  },
  {
    "Symbol": "BIH",
    "CoinName": "BitHostCoin",
    "FullName": "BitHostCoin (BIH)"
  },
  {
    "Symbol": "KARMA",
    "CoinName": "Karma",
    "FullName": "Karma (KARMA)"
  },
  {
    "Symbol": "CJR",
    "CoinName": "Conjure",
    "FullName": "Conjure (CJR)"
  },
  {
    "Symbol": "BLTG",
    "CoinName": "Block-Logic",
    "FullName": "Block-Logic (BLTG)"
  },
  {
    "Symbol": "AGVC",
    "CoinName": "AgaveCoin",
    "FullName": "AgaveCoin (AGVC)"
  },
  {
    "Symbol": "ASGC",
    "CoinName": "ASG",
    "FullName": "ASG (ASGC)"
  },
  {
    "Symbol": "MIMI",
    "CoinName": "MIMI Money",
    "FullName": "MIMI Money (MIMI)"
  },
  {
    "Symbol": "PXG",
    "CoinName": "PlayGame",
    "FullName": "PlayGame (PXG)"
  },
  {
    "Symbol": "ORM",
    "CoinName": "ORIUM",
    "FullName": "ORIUM (ORM)"
  },
  {
    "Symbol": "TRET",
    "CoinName": "Tourist Review",
    "FullName": "Tourist Review (TRET)"
  },
  {
    "Symbol": "SET",
    "CoinName": "Securosys",
    "FullName": "Securosys (SET)"
  },
  {
    "Symbol": "BEER",
    "CoinName": "BEER Coin",
    "FullName": "BEER Coin (BEER)"
  },
  {
    "Symbol": "AERGO",
    "CoinName": "AERGO ",
    "FullName": "AERGO  (AERGO)"
  },
  {
    "Symbol": "TIMI",
    "CoinName": "Timicoin",
    "FullName": "Timicoin (TIMI)"
  },
  {
    "Symbol": "NRP",
    "CoinName": "Neural Protocol",
    "FullName": "Neural Protocol (NRP)"
  },
  {
    "Symbol": "SNTVT",
    "CoinName": "Sentivate",
    "FullName": "Sentivate (SNTVT)"
  },
  {
    "Symbol": "CEN",
    "CoinName": "Coinsuper Ecosystem Network",
    "FullName": "Coinsuper Ecosystem Network (CEN)"
  },
  {
    "Symbol": "GARD",
    "CoinName": "Hashgard",
    "FullName": "Hashgard (GARD)"
  },
  {
    "Symbol": "UNX",
    "CoinName": "UNEOX",
    "FullName": "UNEOX (UNX)"
  },
  {
    "Symbol": "OWC",
    "CoinName": "Oduwa",
    "FullName": "Oduwa (OWC)"
  },
  {
    "Symbol": "WOWX",
    "CoinName": "WOWX",
    "FullName": "WOWX (WOWX)"
  },
  {
    "Symbol": "SRX",
    "CoinName": "Solarex",
    "FullName": "Solarex (SRX)"
  },
  {
    "Symbol": "THO",
    "CoinName": "Athero",
    "FullName": "Athero (THO)"
  },
  {
    "Symbol": "TOSS",
    "CoinName": "PROOF OF TOSS",
    "FullName": "PROOF OF TOSS (TOSS)"
  },
  {
    "Symbol": "KMX",
    "CoinName": "KiMex",
    "FullName": "KiMex (KMX)"
  },
  {
    "Symbol": "SKI",
    "CoinName": "Skillchain",
    "FullName": "Skillchain (SKI)"
  },
  {
    "Symbol": "SG",
    "CoinName": "SocialGood",
    "FullName": "SocialGood (SG)"
  },
  {
    "Symbol": "SUNEX",
    "CoinName": "The Sun Exchange",
    "FullName": "The Sun Exchange (SUNEX)"
  },
  {
    "Symbol": "VIDY",
    "CoinName": "Vidy",
    "FullName": "Vidy (VIDY)"
  },
  {
    "Symbol": "XRBT",
    "CoinName": "Xtribe",
    "FullName": "Xtribe (XRBT)"
  },
  {
    "Symbol": "ALUX",
    "CoinName": "Alux Bank",
    "FullName": "Alux Bank (ALUX)"
  },
  {
    "Symbol": "XBOND",
    "CoinName": "Bitacium",
    "FullName": "Bitacium (XBOND)"
  },
  {
    "Symbol": "BOSE",
    "CoinName": "Bitbose",
    "FullName": "Bitbose (BOSE)"
  },
  {
    "Symbol": "JOY",
    "CoinName": "Joycoin",
    "FullName": "Joycoin (JOY)"
  },
  {
    "Symbol": "WETH",
    "CoinName": "WETH",
    "FullName": "WETH (WETH)"
  },
  {
    "Symbol": "GBE",
    "CoinName": "Godbex",
    "FullName": "Godbex (GBE)"
  },
  {
    "Symbol": "HRBE",
    "CoinName": "Harambee Token",
    "FullName": "Harambee Token (HRBE)"
  },
  {
    "Symbol": "BEAM",
    "CoinName": "Beam",
    "FullName": "Beam (BEAM)"
  },
  {
    "Symbol": "RIF",
    "CoinName": "RIF Token",
    "FullName": "RIF Token (RIF)"
  },
  {
    "Symbol": "MILC",
    "CoinName": "MIcro Licensing Coin",
    "FullName": "MIcro Licensing Coin (MILC)"
  },
  {
    "Symbol": "PINMO",
    "CoinName": "Pinmo",
    "FullName": "Pinmo (PINMO)"
  },
  {
    "Symbol": "POPC",
    "CoinName": "PopChest",
    "FullName": "PopChest (POPC)"
  },
  {
    "Symbol": "RGT",
    "CoinName": "Retail.Global",
    "FullName": "Retail.Global (RGT)"
  },
  {
    "Symbol": "SCOP",
    "CoinName": "Scopuly",
    "FullName": "Scopuly (SCOP)"
  },
  {
    "Symbol": "BMG",
    "CoinName": "Borneo",
    "FullName": "Borneo (BMG)"
  },
  {
    "Symbol": "OXY2",
    "CoinName": "Cryptoxygen",
    "FullName": "Cryptoxygen (OXY2)"
  },
  {
    "Symbol": "VC",
    "CoinName": "Vecap",
    "FullName": "Vecap (VC)"
  },
  {
    "Symbol": "FAIRC",
    "CoinName": "Faireum Token",
    "FullName": "Faireum Token (FAIRC)"
  },
  {
    "Symbol": "BPN",
    "CoinName": "beepnow",
    "FullName": "beepnow (BPN)"
  },
  {
    "Symbol": "DYC",
    "CoinName": "Dycoin",
    "FullName": "Dycoin (DYC)"
  },
  {
    "Symbol": "DUSK",
    "CoinName": "Dusk Network",
    "FullName": "Dusk Network (DUSK)"
  },
  {
    "Symbol": "LN",
    "CoinName": "LINK",
    "FullName": "LINK (LN)"
  },
  {
    "Symbol": "FTR",
    "CoinName": "FactR",
    "FullName": "FactR (FTR)"
  },
  {
    "Symbol": "RWE",
    "CoinName": "Real-World Evidence",
    "FullName": "Real-World Evidence (RWE)"
  },
  {
    "Symbol": "YSH",
    "CoinName": "Yoshi",
    "FullName": "Yoshi (YSH)"
  },
  {
    "Symbol": "TASH",
    "CoinName": "Smart Trip Platform",
    "FullName": "Smart Trip Platform (TASH)"
  },
  {
    "Symbol": "TXM",
    "CoinName": "TMONEY",
    "FullName": "TMONEY (TXM)"
  },
  {
    "Symbol": "TRAVEL",
    "CoinName": "Travelvee",
    "FullName": "Travelvee (TRAVEL)"
  },
  {
    "Symbol": "ACA",
    "CoinName": "ACA Token",
    "FullName": "ACA Token (ACA)"
  },
  {
    "Symbol": "AUPC",
    "CoinName": "Authpaper",
    "FullName": "Authpaper (AUPC)"
  },
  {
    "Symbol": "COSX",
    "CoinName": "Cosmecoin",
    "FullName": "Cosmecoin (COSX)"
  },
  {
    "Symbol": "DNTX",
    "CoinName": "DNAtix",
    "FullName": "DNAtix (DNTX)"
  },
  {
    "Symbol": "HART",
    "CoinName": "HARA",
    "FullName": "HARA (HART)"
  },
  {
    "Symbol": "KSS",
    "CoinName": "Krosscoin",
    "FullName": "Krosscoin (KSS)"
  },
  {
    "Symbol": "LIPS",
    "CoinName": "LipChain",
    "FullName": "LipChain (LIPS)"
  },
  {
    "Symbol": "MIBO",
    "CoinName": "miBoodle",
    "FullName": "miBoodle (MIBO)"
  },
  {
    "Symbol": "BRIX",
    "CoinName": "OpenBrix",
    "FullName": "OpenBrix (BRIX)"
  },
  {
    "Symbol": "NZO",
    "CoinName": "NonZero",
    "FullName": "NonZero (NZO)"
  },
  {
    "Symbol": "PTT",
    "CoinName": "Pink Taxi Token",
    "FullName": "Pink Taxi Token (PTT)"
  },
  {
    "Symbol": "XRK",
    "CoinName": "RecordsKeeper",
    "FullName": "RecordsKeeper (XRK)"
  },
  {
    "Symbol": "RMOB",
    "CoinName": "RewardMob",
    "FullName": "RewardMob (RMOB)"
  },
  {
    "Symbol": "XRF",
    "CoinName": "Sarf",
    "FullName": "Sarf (XRF)"
  },
  {
    "Symbol": "POD",
    "CoinName": "Smart League",
    "FullName": "Smart League (POD)"
  },
  {
    "Symbol": "SUT",
    "CoinName": "Suapp",
    "FullName": "Suapp (SUT)"
  },
  {
    "Symbol": "WHO",
    "CoinName": "Truwho",
    "FullName": "Truwho (WHO)"
  },
  {
    "Symbol": "ID",
    "CoinName": "TrigID",
    "FullName": "TrigID (ID)"
  },
  {
    "Symbol": "VRX Token",
    "CoinName": "VIARIUM",
    "FullName": "VIARIUM (VRX Token)"
  },
  {
    "Symbol": "WDX",
    "CoinName": "WeiDex",
    "FullName": "WeiDex (WDX)"
  },
  {
    "Symbol": "AIOT",
    "CoinName": "AIOT Token",
    "FullName": "AIOT Token (AIOT)"
  },
  {
    "Symbol": "AMOS",
    "CoinName": "Amos",
    "FullName": "Amos (AMOS)"
  },
  {
    "Symbol": "ESW",
    "CoinName": "eSwitch®",
    "FullName": "eSwitch® (ESW)"
  },
  {
    "Symbol": "XBANK",
    "CoinName": "Bancryp",
    "FullName": "Bancryp (XBANK)"
  },
  {
    "Symbol": "OX",
    "CoinName": "betbox",
    "FullName": "betbox (OX)"
  },
  {
    "Symbol": "KRO",
    "CoinName": "Betoken",
    "FullName": "Betoken (KRO)"
  },
  {
    "Symbol": "CAID",
    "CoinName": "ClearAid",
    "FullName": "ClearAid (CAID)"
  },
  {
    "Symbol": "GUAR",
    "CoinName": "Guarium",
    "FullName": "Guarium (GUAR)"
  },
  {
    "Symbol": "LTE",
    "CoinName": "Local Token Exchange",
    "FullName": "Local Token Exchange (LTE)"
  },
  {
    "Symbol": "HLX",
    "CoinName": "Helix3",
    "FullName": "Helix3 (HLX)"
  },
  {
    "Symbol": "MEL",
    "CoinName": "Melior AI",
    "FullName": "Melior AI (MEL)"
  },
  {
    "Symbol": "NEXXO",
    "CoinName": "Nexxo",
    "FullName": "Nexxo (NEXXO)"
  },
  {
    "Symbol": "QNTR",
    "CoinName": "Quantor",
    "FullName": "Quantor (QNTR)"
  },
  {
    "Symbol": "BTCUS",
    "CoinName": "Bitcoinus",
    "FullName": "Bitcoinus (BTCUS)"
  },
  {
    "Symbol": "RAYS",
    "CoinName": "Rays Network",
    "FullName": "Rays Network (RAYS)"
  },
  {
    "Symbol": "MOL",
    "CoinName": "Molecule",
    "FullName": "Molecule (MOL)"
  },
  {
    "Symbol": "REME",
    "CoinName": "REME-Coin",
    "FullName": "REME-Coin (REME)"
  },
  {
    "Symbol": "RENC",
    "CoinName": "RENC",
    "FullName": "RENC (RENC)"
  },
  {
    "Symbol": "TLT",
    "CoinName": "Travelertoken",
    "FullName": "Travelertoken (TLT)"
  },
  {
    "Symbol": "EMOT",
    "CoinName": "Sentigraph.io",
    "FullName": "Sentigraph.io (EMOT)"
  },
  {
    "Symbol": "USAT",
    "CoinName": "USAT",
    "FullName": "USAT (USAT)"
  },
  {
    "Symbol": "VOLAIR",
    "CoinName": "VolAir",
    "FullName": "VolAir (VOLAIR)"
  },
  {
    "Symbol": "AIRT",
    "CoinName": "Aircraft",
    "FullName": "Aircraft (AIRT)"
  },
  {
    "Symbol": "VTRD",
    "CoinName": "VTradeExchange",
    "FullName": "VTradeExchange (VTRD)"
  },
  {
    "Symbol": "BTT",
    "CoinName": "BitTorrent",
    "FullName": "BitTorrent (BTT)"
  },
  {
    "Symbol": "GALI",
    "CoinName": "Galilel",
    "FullName": "Galilel (GALI)"
  },
  {
    "Symbol": "PLAI",
    "CoinName": "Plair",
    "FullName": "Plair (PLAI)"
  },
  {
    "Symbol": "BGG",
    "CoinName": "Bgogo Token",
    "FullName": "Bgogo Token (BGG)"
  },
  {
    "Symbol": "HEDG",
    "CoinName": "HedgeTrade",
    "FullName": "HedgeTrade (HEDG)"
  },
  {
    "Symbol": "ERE",
    "CoinName": "Erecoin",
    "FullName": "Erecoin (ERE)"
  },
  {
    "Symbol": "BTU",
    "CoinName": "BTU Protocol",
    "FullName": "BTU Protocol (BTU)"
  },
  {
    "Symbol": "APS",
    "CoinName": "APRES",
    "FullName": "APRES (APS)"
  },
  {
    "Symbol": "XBX",
    "CoinName": "BiteX",
    "FullName": "BiteX (XBX)"
  },
  {
    "Symbol": "QNT",
    "CoinName": "Quant",
    "FullName": "Quant (QNT)"
  },
  {
    "Symbol": "FFUEL",
    "CoinName": "getFIFO",
    "FullName": "getFIFO (FFUEL)"
  },
  {
    "Symbol": "NSP",
    "CoinName": "NOMAD.space",
    "FullName": "NOMAD.space (NSP)"
  },
  {
    "Symbol": "PTNX",
    "CoinName": "Platin",
    "FullName": "Platin (PTNX)"
  },
  {
    "Symbol": "SNcoin",
    "CoinName": "ScientificCoin",
    "FullName": "ScientificCoin (SNcoin)"
  },
  {
    "Symbol": "TTNT",
    "CoinName": "TITA Project",
    "FullName": "TITA Project (TTNT)"
  },
  {
    "Symbol": "FLC",
    "CoinName": "Fieldcoin",
    "FullName": "Fieldcoin (FLC (1))"
  },
  {
    "Symbol": "BWT2",
    "CoinName": "Bitwin 2.0",
    "FullName": "Bitwin 2.0 (BWT2)"
  },
  {
    "Symbol": "OATH",
    "CoinName": "OATH Protocol",
    "FullName": "OATH Protocol (OATH)"
  },
  {
    "Symbol": "SBA",
    "CoinName": "simplyBrand",
    "FullName": "simplyBrand (SBA)"
  },
  {
    "Symbol": "DXG",
    "CoinName": "DexAge",
    "FullName": "DexAge (DXG)"
  },
  {
    "Symbol": "EXTP",
    "CoinName": "TradePlace",
    "FullName": "TradePlace (EXTP)"
  },
  {
    "Symbol": "ZEX",
    "CoinName": "Zaddex",
    "FullName": "Zaddex (ZEX)"
  },
  {
    "Symbol": "XCZ",
    "CoinName": "XCOYNZ",
    "FullName": "XCOYNZ (XCZ)"
  },
  {
    "Symbol": "CBUK",
    "CoinName": "CurveBlock",
    "FullName": "CurveBlock (CBUK)"
  },
  {
    "Symbol": "HIX",
    "CoinName": "HELIX Orange",
    "FullName": "HELIX Orange (HIX)"
  },
  {
    "Symbol": "TGN",
    "CoinName": "TerraGreen",
    "FullName": "TerraGreen (TGN)"
  },
  {
    "Symbol": "COGS",
    "CoinName": "Cogmento",
    "FullName": "Cogmento (COGS)"
  },
  {
    "Symbol": "XRM",
    "CoinName": "Aerum",
    "FullName": "Aerum (XRM)"
  },
  {
    "Symbol": "CCOIN",
    "CoinName": "Creditcoin",
    "FullName": "Creditcoin (CCOIN)"
  },
  {
    "Symbol": "APZ",
    "CoinName": "Alprockz",
    "FullName": "Alprockz (APZ)"
  },
  {
    "Symbol": "ICHX",
    "CoinName": "IceChain",
    "FullName": "IceChain (ICHX)"
  },
  {
    "Symbol": "IMP",
    "CoinName": "CoinIMP",
    "FullName": "CoinIMP (IMP)"
  },
  {
    "Symbol": "FORCE",
    "CoinName": "TriForce Tokens",
    "FullName": "TriForce Tokens (FORCE)"
  },
  {
    "Symbol": "BTMX",
    "CoinName": "BitMax Token",
    "FullName": "BitMax Token (BTMX)"
  },
  {
    "Symbol": "LTO",
    "CoinName": "LTO Network",
    "FullName": "LTO Network (LTO)"
  },
  {
    "Symbol": "QUSD",
    "CoinName": "QUSD",
    "FullName": "QUSD (QUSD)"
  },
  {
    "Symbol": "BTH",
    "CoinName": "Bithereum",
    "FullName": "Bithereum (BTH)"
  },
  {
    "Symbol": "PLG",
    "CoinName": "Pledgecamp",
    "FullName": "Pledgecamp (PLG)"
  },
  {
    "Symbol": "PVP",
    "CoinName": "PVPChain",
    "FullName": "PVPChain (PVP)"
  },
  {
    "Symbol": "EMANATE",
    "CoinName": "EMANATE",
    "FullName": "EMANATE (EMANATE)"
  },
  {
    "Symbol": "RAIZER",
    "CoinName": "RAIZER",
    "FullName": "RAIZER (RAIZER)"
  },
  {
    "Symbol": "CP",
    "CoinName": "CryptoProfile",
    "FullName": "CryptoProfile (CP)"
  },
  {
    "Symbol": "DAYTA",
    "CoinName": "Dayta",
    "FullName": "Dayta (DAYTA)"
  },
  {
    "Symbol": "ORV",
    "CoinName": "Orvium",
    "FullName": "Orvium (ORV)"
  },
  {
    "Symbol": "CWT",
    "CoinName": "Coinware",
    "FullName": "Coinware (CWT)"
  },
  {
    "Symbol": "AQU",
    "CoinName": "aQuest",
    "FullName": "aQuest (AQU)"
  },
  {
    "Symbol": "CXG",
    "CoinName": "Coinxes",
    "FullName": "Coinxes (CXG)"
  },
  {
    "Symbol": "CHFT",
    "CoinName": "Crypto Holding",
    "FullName": "Crypto Holding (CHFT)"
  },
  {
    "Symbol": "VNTY",
    "CoinName": "VENOTY",
    "FullName": "VENOTY (VNTY)"
  },
  {
    "Symbol": "MAI",
    "CoinName": "Mindsync",
    "FullName": "Mindsync (MAI)"
  },
  {
    "Symbol": "BTR",
    "CoinName": "Bither",
    "FullName": "Bither (BTR)"
  },
  {
    "Symbol": "SSX",
    "CoinName": "SOMESING",
    "FullName": "SOMESING (SSX)"
  },
  {
    "Symbol": "KLK",
    "CoinName": "Klickzie",
    "FullName": "Klickzie (KLK)"
  },
  {
    "Symbol": "LVN",
    "CoinName": "LivenPay",
    "FullName": "LivenPay (LVN)"
  },
  {
    "Symbol": "FFCT",
    "CoinName": "FortFC",
    "FullName": "FortFC (FFCT)"
  },
  {
    "Symbol": "AZU",
    "CoinName": "Azultec",
    "FullName": "Azultec (AZU)"
  },
  {
    "Symbol": "ARQ",
    "CoinName": "ArQmA",
    "FullName": "ArQmA (ARQ)"
  },
  {
    "Symbol": "WU",
    "CoinName": "WULET",
    "FullName": "WULET (WU)"
  },
  {
    "Symbol": "ZUC",
    "CoinName": "Zeux",
    "FullName": "Zeux (ZUC)"
  },
  {
    "Symbol": "FFM",
    "CoinName": "Files.fm Library",
    "FullName": "Files.fm Library (FFM)"
  },
  {
    "Symbol": "DRF",
    "CoinName": "Drife",
    "FullName": "Drife (DRF)"
  },
  {
    "Symbol": "GTIB",
    "CoinName": "Global Trust Coin",
    "FullName": "Global Trust Coin (GTIB)"
  },
  {
    "Symbol": "VEO",
    "CoinName": "Amoveo",
    "FullName": "Amoveo (VEO)"
  },
  {
    "Symbol": "DLA",
    "CoinName": "Dolla",
    "FullName": "Dolla (DLA)"
  },
  {
    "Symbol": "AFO",
    "CoinName": "AllForOneBusiness",
    "FullName": "AllForOneBusiness (AFO)"
  },
  {
    "Symbol": "BB1",
    "CoinName": "Bitbond",
    "FullName": "Bitbond (BB1)"
  },
  {
    "Symbol": "FET",
    "CoinName": "Fetch.AI",
    "FullName": "Fetch.AI (FET)"
  },
  {
    "Symbol": "DAGT",
    "CoinName": "Digital Asset Guarantee Token",
    "FullName": "Digital Asset Guarantee Token (DAGT)"
  },
  {
    "Symbol": "GVE",
    "CoinName": "Globalvillage Ecosystem",
    "FullName": "Globalvillage Ecosystem (GVE)"
  },
  {
    "Symbol": "IDT",
    "CoinName": "InvestDigital",
    "FullName": "InvestDigital (IDT)"
  },
  {
    "Symbol": "KUV",
    "CoinName": "Kuverit",
    "FullName": "Kuverit (KUV)"
  },
  {
    "Symbol": "ARCX",
    "CoinName": "ArcadierX",
    "FullName": "ArcadierX (ARCX)"
  },
  {
    "Symbol": "BOLTT",
    "CoinName": "BolttCoin",
    "FullName": "BolttCoin (BOLTT)"
  },
  {
    "Symbol": "ENCX",
    "CoinName": "Encrybit",
    "FullName": "Encrybit (ENCX)"
  },
  {
    "Symbol": "VALID",
    "CoinName": "Validator Token",
    "FullName": "Validator Token (VALID)"
  },
  {
    "Symbol": "TYM",
    "CoinName": "Tryvium",
    "FullName": "Tryvium (TYM)"
  },
  {
    "Symbol": "VENUS",
    "CoinName": "VenusEnergy",
    "FullName": "VenusEnergy (VENUS)"
  },
  {
    "Symbol": "HYGH",
    "CoinName": "HYGH",
    "FullName": "HYGH (HYGH)"
  },
  {
    "Symbol": "ALCE",
    "CoinName": "Alcedo",
    "FullName": "Alcedo (ALCE)"
  },
  {
    "Symbol": "NODIS",
    "CoinName": "Nodis",
    "FullName": "Nodis (NODIS)"
  },
  {
    "Symbol": "MNC",
    "CoinName": "MainCoin",
    "FullName": "MainCoin (MNC)"
  },
  {
    "Symbol": "USDS",
    "CoinName": "StableUSD",
    "FullName": "StableUSD (USDS)"
  },
  {
    "Symbol": "HVE",
    "CoinName": "UHIVE",
    "FullName": "UHIVE (HVE)"
  },
  {
    "Symbol": "XR",
    "CoinName": "Gofind XR",
    "FullName": "Gofind XR (XR)"
  },
  {
    "Symbol": "ALP",
    "CoinName": "Alphacon",
    "FullName": "Alphacon (ALP)"
  },
  {
    "Symbol": "EMU",
    "CoinName": "eMusic",
    "FullName": "eMusic (EMU)"
  },
  {
    "Symbol": "GST",
    "CoinName": "GameStars",
    "FullName": "GameStars (GST)"
  },
  {
    "Symbol": "ARS",
    "CoinName": "Artcoin",
    "FullName": "Artcoin (ARS)"
  },
  {
    "Symbol": "NRM",
    "CoinName": "Neuromachine",
    "FullName": "Neuromachine (NRM)"
  },
  {
    "Symbol": "APOD",
    "CoinName": "AirPod",
    "FullName": "AirPod (APOD)"
  },
  {
    "Symbol": "AX",
    "CoinName": "AlphaX",
    "FullName": "AlphaX (AX)"
  },
  {
    "Symbol": "CWEX",
    "CoinName": "Crypto Wine Exchange",
    "FullName": "Crypto Wine Exchange (CWEX)"
  },
  {
    "Symbol": "CLDX",
    "CoinName": "Cloverdex",
    "FullName": "Cloverdex (CLDX)"
  },
  {
    "Symbol": "ECTE",
    "CoinName": "EurocoinToken",
    "FullName": "EurocoinToken (ECTE)"
  },
  {
    "Symbol": "LABX",
    "CoinName": "Stakinglab",
    "FullName": "Stakinglab (LABX)"
  },
  {
    "Symbol": "GGC",
    "CoinName": "Gingr",
    "FullName": "Gingr (GGC)"
  },
  {
    "Symbol": "AGT",
    "CoinName": "AGATE",
    "FullName": "AGATE (AGT)"
  },
  {
    "Symbol": "ENV",
    "CoinName": "Envienta",
    "FullName": "Envienta (ENV)"
  },
  {
    "Symbol": "ANKR",
    "CoinName": "Ankr Network",
    "FullName": "Ankr Network (ANKR)"
  },
  {
    "Symbol": "GEP",
    "CoinName": "Gaia",
    "FullName": "Gaia (GEP)"
  },
  {
    "Symbol": "IZA",
    "CoinName": "Inzura",
    "FullName": "Inzura (IZA)"
  },
  {
    "Symbol": "GBA",
    "CoinName": "Geeba",
    "FullName": "Geeba (GBA)"
  },
  {
    "Symbol": "ITU",
    "CoinName": "iTrue",
    "FullName": "iTrue (ITU)"
  },
  {
    "Symbol": "FANZ",
    "CoinName": "FanChain",
    "FullName": "FanChain (FANZ)"
  },
  {
    "Symbol": "CSPN",
    "CoinName": "Crypto Sports",
    "FullName": "Crypto Sports (CSPN)"
  },
  {
    "Symbol": "CCH",
    "CoinName": "Coinchase",
    "FullName": "Coinchase (CCH)"
  },
  {
    "Symbol": "HAVEN",
    "CoinName": "Safe Haven",
    "FullName": "Safe Haven (HAVEN)"
  },
  {
    "Symbol": "XOV",
    "CoinName": "XOVBank",
    "FullName": "XOVBank (XOV)"
  },
  {
    "Symbol": "eQUAD",
    "CoinName": "Quadrant Protocol",
    "FullName": "Quadrant Protocol (eQUAD)"
  },
  {
    "Symbol": "CUR",
    "CoinName": "Cura Network",
    "FullName": "Cura Network (CUR)"
  },
  {
    "Symbol": "CREDIT",
    "CoinName": "Credit",
    "FullName": "Credit (CREDIT)"
  },
  {
    "Symbol": "ERA",
    "CoinName": "ETHA",
    "FullName": "ETHA (ERA)"
  },
  {
    "Symbol": "MAKE",
    "CoinName": "MAKE",
    "FullName": "MAKE (MAKE)"
  },
  {
    "Symbol": "KIBIS",
    "CoinName": "KIBIS",
    "FullName": "KIBIS (KIBIS)"
  },
  {
    "Symbol": "SPKZ",
    "CoinName": "Spokkz",
    "FullName": "Spokkz (SPKZ)"
  },
  {
    "Symbol": "VOGOV",
    "CoinName": "VogoV",
    "FullName": "VogoV (VOGOV)"
  },
  {
    "Symbol": "AWC",
    "CoinName": "Atomic Wallet Coin",
    "FullName": "Atomic Wallet Coin (AWC)"
  },
  {
    "Symbol": "DIS",
    "CoinName": "DiscoveryIoT",
    "FullName": "DiscoveryIoT (DIS)"
  },
  {
    "Symbol": "SCRIBE",
    "CoinName": "Scribe Network",
    "FullName": "Scribe Network (SCRIBE)"
  },
  {
    "Symbol": "INX",
    "CoinName": "InMax",
    "FullName": "InMax (INX)"
  },
  {
    "Symbol": "SQR",
    "CoinName": "Squeezer",
    "FullName": "Squeezer (SQR)"
  },
  {
    "Symbol": "GNC",
    "CoinName": "Greencoin",
    "FullName": "Greencoin (GNC)"
  },
  {
    "Symbol": "WVR",
    "CoinName": "Weave",
    "FullName": "Weave (WVR)"
  },
  {
    "Symbol": "PHT",
    "CoinName": "Photon Token",
    "FullName": "Photon Token (PHT)"
  },
  {
    "Symbol": "WHN",
    "CoinName": "Windhan Energy",
    "FullName": "Windhan Energy (WHN)"
  },
  {
    "Symbol": "CRO",
    "CoinName": "Crypto.com Chain Token",
    "FullName": "Crypto.com Chain Token (CRO)"
  },
  {
    "Symbol": "LYTX",
    "CoinName": "LYTIX",
    "FullName": "LYTIX (LYTX)"
  },
  {
    "Symbol": "TJA",
    "CoinName": "TapJets",
    "FullName": "TapJets (TJA)"
  },
  {
    "Symbol": "InBit",
    "CoinName": "PrepayWay",
    "FullName": "PrepayWay (InBit)"
  },
  {
    "Symbol": "DIO",
    "CoinName": "Decimated",
    "FullName": "Decimated (DIO)"
  },
  {
    "Symbol": "LIC",
    "CoinName": "Ligercoin",
    "FullName": "Ligercoin (LIC)"
  },
  {
    "Symbol": "SCA",
    "CoinName": "SiaClassic",
    "FullName": "SiaClassic (SCA)"
  },
  {
    "Symbol": "XOS",
    "CoinName": "Excalibur OS",
    "FullName": "Excalibur OS (XOS)"
  },
  {
    "Symbol": "VSYS",
    "CoinName": "V Systems",
    "FullName": "V Systems (VSYS)"
  },
  {
    "Symbol": "LAC",
    "CoinName": "LOVE Air Coffee",
    "FullName": "LOVE Air Coffee (LAC)"
  },
  {
    "Symbol": "QCP",
    "CoinName": "Crypto Potential",
    "FullName": "Crypto Potential (QCP)"
  },
  {
    "Symbol": "UGT",
    "CoinName": "Universal Games Token",
    "FullName": "Universal Games Token (UGT)"
  },
  {
    "Symbol": "BWL",
    "CoinName": "Bitwala Token",
    "FullName": "Bitwala Token (BWL)"
  },
  {
    "Symbol": "ZEON",
    "CoinName": "Zeon Network",
    "FullName": "Zeon Network (ZEON)"
  },
  {
    "Symbol": "WATT",
    "CoinName": "WorkChain.io",
    "FullName": "WorkChain.io (WATT)"
  },
  {
    "Symbol": "XRX",
    "CoinName": "Global Property Register",
    "FullName": "Global Property Register (XRX)"
  },
  {
    "Symbol": "PARQ",
    "CoinName": "PARQ",
    "FullName": "PARQ (PARQ)"
  },
  {
    "Symbol": "T4M",
    "CoinName": "Tap4.Menu",
    "FullName": "Tap4.Menu (T4M)"
  },
  {
    "Symbol": "TFF",
    "CoinName": "TheFaustFlick",
    "FullName": "TheFaustFlick (TFF)"
  },
  {
    "Symbol": "ANY",
    "CoinName": "Anything App",
    "FullName": "Anything App (ANY)"
  },
  {
    "Symbol": "ELOC",
    "CoinName": "eLocations",
    "FullName": "eLocations (ELOC)"
  },
  {
    "Symbol": "IZZY",
    "CoinName": "Izzy",
    "FullName": "Izzy (IZZY)"
  },
  {
    "Symbol": "SONT",
    "CoinName": "Sonata.ai",
    "FullName": "Sonata.ai (SONT)"
  },
  {
    "Symbol": "SWI",
    "CoinName": "Swinca",
    "FullName": "Swinca (SWI)"
  },
  {
    "Symbol": "LUNES",
    "CoinName": "Lunes",
    "FullName": "Lunes (LUNES)"
  },
  {
    "Symbol": "EDEXA",
    "CoinName": "edeXa Security Token",
    "FullName": "edeXa Security Token (EDEXA)"
  },
  {
    "Symbol": "CELR",
    "CoinName": "Celer Network",
    "FullName": "Celer Network (CELR)"
  },
  {
    "Symbol": "PPI",
    "CoinName": "Primpy",
    "FullName": "Primpy (PPI)"
  },
  {
    "Symbol": "ANTE",
    "CoinName": "ANTE",
    "FullName": "ANTE (ANTE)"
  },
  {
    "Symbol": "TRXDICE",
    "CoinName": "TRONdice",
    "FullName": "TRONdice (TRXDICE)"
  },
  {
    "Symbol": "AFTT",
    "CoinName": "Africa Trading Chain",
    "FullName": "Africa Trading Chain (AFTT)"
  },
  {
    "Symbol": "TRXWIN",
    "CoinName": "TronWin",
    "FullName": "TronWin (TRXWIN)"
  },
  {
    "Symbol": "IGG",
    "CoinName": "IG Gold",
    "FullName": "IG Gold (IGG)"
  },
  {
    "Symbol": "MIG",
    "CoinName": "Migranet",
    "FullName": "Migranet (MIG)"
  },
  {
    "Symbol": "BWN",
    "CoinName": "BitWings",
    "FullName": "BitWings (BWN)"
  },
  {
    "Symbol": "IPUX",
    "CoinName": "IPUX",
    "FullName": "IPUX (IPUX)"
  },
  {
    "Symbol": "PCC",
    "CoinName": "PCORE",
    "FullName": "PCORE (PCC)"
  },
  {
    "Symbol": "DARB",
    "CoinName": "Darb Token",
    "FullName": "Darb Token (DARB)"
  },
  {
    "Symbol": "MBTX",
    "CoinName": "MinedBlock",
    "FullName": "MinedBlock (MBTX)"
  },
  {
    "Symbol": "CFun",
    "CoinName": "CFun",
    "FullName": "CFun (CFun)"
  },
  {
    "Symbol": "SLC",
    "CoinName": "SLICE",
    "FullName": "SLICE (SLC)"
  },
  {
    "Symbol": "AAS",
    "CoinName": "aassio",
    "FullName": "aassio (AAS)"
  },
  {
    "Symbol": "2GT",
    "CoinName": "2GETHER",
    "FullName": "2GETHER (2GT)"
  },
  {
    "Symbol": "VOLLAR",
    "CoinName": "Vollar",
    "FullName": "Vollar (VOLLAR)"
  },
  {
    "Symbol": "DXN",
    "CoinName": "DEXON",
    "FullName": "DEXON (DXN)"
  },
  {
    "Symbol": "LWA",
    "CoinName": "Leap With Alice",
    "FullName": "Leap With Alice (LWA)"
  },
  {
    "Symbol": "AFCT",
    "CoinName": "Allforcrypto",
    "FullName": "Allforcrypto (AFCT)"
  },
  {
    "Symbol": "INET",
    "CoinName": "Insure Network",
    "FullName": "Insure Network (INET)"
  },
  {
    "Symbol": "WHY",
    "CoinName": "Whisky Token",
    "FullName": "Whisky Token (WHY)"
  },
  {
    "Symbol": "URIS",
    "CoinName": "Uris",
    "FullName": "Uris (URIS)"
  },
  {
    "Symbol": "ADUX",
    "CoinName": "Adult X Token",
    "FullName": "Adult X Token (ADUX)"
  },
  {
    "Symbol": "HRD",
    "CoinName": "Hoard",
    "FullName": "Hoard (HRD)"
  },
  {
    "Symbol": "BINC",
    "CoinName": "BINCOIN",
    "FullName": "BINCOIN (BINC)"
  },
  {
    "Symbol": "QCO",
    "CoinName": "Qravity",
    "FullName": "Qravity (QCO)"
  },
  {
    "Symbol": "SHER",
    "CoinName": "Shercoin",
    "FullName": "Shercoin (SHER)"
  },
  {
    "Symbol": "ZEROB",
    "CoinName": "ZeroBank",
    "FullName": "ZeroBank (ZEROB)"
  },
  {
    "Symbol": "ISG",
    "CoinName": "ISG",
    "FullName": "ISG (ISG)"
  },
  {
    "Symbol": "TAGZ",
    "CoinName": "TAGZ",
    "FullName": "TAGZ (TAGZ)"
  },
  {
    "Symbol": "SKP",
    "CoinName": "Skelpy",
    "FullName": "Skelpy (SKP)"
  },
  {
    "Symbol": "MCRC",
    "CoinName": "MyCreditChain",
    "FullName": "MyCreditChain (MCRC)"
  },
  {
    "Symbol": "XGN",
    "CoinName": "Golden Currency",
    "FullName": "Golden Currency (XGN)"
  },
  {
    "Symbol": "YPTO",
    "CoinName": "YPTOspace",
    "FullName": "YPTOspace (YPTO)"
  },
  {
    "Symbol": "UBE",
    "CoinName": "Ubecoin",
    "FullName": "Ubecoin (UBE)"
  },
  {
    "Symbol": "ETGP",
    "CoinName": "Ethereum Gold Project",
    "FullName": "Ethereum Gold Project (ETGP)"
  },
  {
    "Symbol": "GFCS",
    "CoinName": "Global Funeral Care",
    "FullName": "Global Funeral Care (GFCS)"
  },
  {
    "Symbol": "RDT",
    "CoinName": "Reindeer",
    "FullName": "Reindeer (RDT)"
  },
  {
    "Symbol": "IX",
    "CoinName": "X-Block",
    "FullName": "X-Block (IX)"
  },
  {
    "Symbol": "ALIC",
    "CoinName": "AliCoin",
    "FullName": "AliCoin (ALIC)"
  },
  {
    "Symbol": "HCXP",
    "CoinName": "HCX PAY",
    "FullName": "HCX PAY (HCXP)"
  },
  {
    "Symbol": "AGRO",
    "CoinName": "Bit Agro",
    "FullName": "Bit Agro (AGRO)"
  },
  {
    "Symbol": "TFUEL",
    "CoinName": "Theta Fuel",
    "FullName": "Theta Fuel (TFUEL)"
  },
  {
    "Symbol": "BYTS",
    "CoinName": "Bytus",
    "FullName": "Bytus (BYTS)"
  },
  {
    "Symbol": "GRT",
    "CoinName": "GoRecruit",
    "FullName": "GoRecruit (GRT)"
  },
  {
    "Symbol": "EUCX",
    "CoinName": "EUCX",
    "FullName": "EUCX (EUCX)"
  },
  {
    "Symbol": "MYTV",
    "CoinName": "MyTVchain",
    "FullName": "MyTVchain (MYTV)"
  },
  {
    "Symbol": "AML",
    "CoinName": "AMANPURI",
    "FullName": "AMANPURI (AML)"
  },
  {
    "Symbol": "B66",
    "CoinName": "Block66",
    "FullName": "Block66 (B66)"
  },
  {
    "Symbol": "LEVL",
    "CoinName": "Levolution",
    "FullName": "Levolution (LEVL)"
  },
  {
    "Symbol": "DHC",
    "CoinName": "dClinic",
    "FullName": "dClinic (DHC)"
  },
  {
    "Symbol": "UGAS",
    "CoinName": "Ultrain",
    "FullName": "Ultrain (UGAS)"
  },
  {
    "Symbol": "PNP",
    "CoinName": "LogisticsX",
    "FullName": "LogisticsX (PNP)"
  },
  {
    "Symbol": "PRY",
    "CoinName": "PRIMARY",
    "FullName": "PRIMARY (PRY)"
  },
  {
    "Symbol": "MXM",
    "CoinName": "Maximine",
    "FullName": "Maximine (MXM)"
  },
  {
    "Symbol": "TTC",
    "CoinName": "TTC PROTOCOL",
    "FullName": "TTC PROTOCOL (TTC)"
  },
  {
    "Symbol": "BCNX",
    "CoinName": "BCNEX",
    "FullName": "BCNEX (BCNX)"
  },
  {
    "Symbol": "SWG",
    "CoinName": "Swing",
    "FullName": "Swing (SWG)"
  },
  {
    "Symbol": "EVED",
    "CoinName": "Evedo",
    "FullName": "Evedo (EVED)"
  },
  {
    "Symbol": "HTER",
    "CoinName": "Biogen",
    "FullName": "Biogen (HTER)"
  },
  {
    "Symbol": "GESE",
    "CoinName": "Gese",
    "FullName": "Gese (GESE)"
  },
  {
    "Symbol": "BZRX",
    "CoinName": "bZx",
    "FullName": "bZx (BZRX)"
  },
  {
    "Symbol": "YBK",
    "CoinName": "YourBlock",
    "FullName": "YourBlock (YBK)"
  },
  {
    "Symbol": "GIF",
    "CoinName": "Gift Token",
    "FullName": "Gift Token (GIF)"
  },
  {
    "Symbol": "2KEY",
    "CoinName": "2Key",
    "FullName": "2Key (2KEY)"
  },
  {
    "Symbol": "STG",
    "CoinName": "STAYGE",
    "FullName": "STAYGE (STG)"
  },
  {
    "Symbol": "DEVX",
    "CoinName": "Developeo",
    "FullName": "Developeo (DEVX)"
  },
  {
    "Symbol": "TMB",
    "CoinName": "Teambrella",
    "FullName": "Teambrella (TMB)"
  },
  {
    "Symbol": "HBRS",
    "CoinName": "HubrisOne",
    "FullName": "HubrisOne (HBRS)"
  },
  {
    "Symbol": "XPL",
    "CoinName": "Exclusive Platform",
    "FullName": "Exclusive Platform (XPL)"
  },
  {
    "Symbol": "MTSH",
    "CoinName": "Mitoshi",
    "FullName": "Mitoshi (MTSH)"
  },
  {
    "Symbol": "DAGO",
    "CoinName": "Dago Mining",
    "FullName": "Dago Mining (DAGO)"
  },
  {
    "Symbol": "EMI",
    "CoinName": "EIPlatform",
    "FullName": "EIPlatform (EMI)"
  },
  {
    "Symbol": "TEMPO",
    "CoinName": "Tempo",
    "FullName": "Tempo (TEMPO)"
  },
  {
    "Symbol": "PPR",
    "CoinName": "Papyrus",
    "FullName": "Papyrus (PPR)"
  },
  {
    "Symbol": "REW",
    "CoinName": "Review.Network",
    "FullName": "Review.Network (REW)"
  },
  {
    "Symbol": "ORBS",
    "CoinName": "Orbs",
    "FullName": "Orbs (ORBS)"
  },
  {
    "Symbol": "STE",
    "CoinName": "Streamex",
    "FullName": "Streamex (STE)"
  },
  {
    "Symbol": "TPLAY",
    "CoinName": "TruePlay",
    "FullName": "TruePlay (TPLAY)"
  },
  {
    "Symbol": "TELE",
    "CoinName": "Miracle Tele",
    "FullName": "Miracle Tele (TELE)"
  },
  {
    "Symbol": "GYM",
    "CoinName": "Gym Rewards",
    "FullName": "Gym Rewards (GYM)"
  },
  {
    "Symbol": "UDOO",
    "CoinName": "Howdoo",
    "FullName": "Howdoo (UDOO)"
  },
  {
    "Symbol": "FAT",
    "CoinName": "Fatcoin",
    "FullName": "Fatcoin (FAT)"
  },
  {
    "Symbol": "KICKS",
    "CoinName": "SESSIA",
    "FullName": "SESSIA (KICKS)"
  },
  {
    "Symbol": "SPORTG",
    "CoinName": "SportGift",
    "FullName": "SportGift (SPORTG)"
  },
  {
    "Symbol": "CRES",
    "CoinName": "Cresio",
    "FullName": "Cresio (CRES)"
  },
  {
    "Symbol": "AES",
    "CoinName": "Artis Aes Evolution",
    "FullName": "Artis Aes Evolution (AES)"
  },
  {
    "Symbol": "AIBK",
    "CoinName": "AIB Utility Token",
    "FullName": "AIB Utility Token (AIBK)"
  },
  {
    "Symbol": "NCC",
    "CoinName": "NeuroChain",
    "FullName": "NeuroChain (NCC)"
  },
  {
    "Symbol": "STONE",
    "CoinName": "DataBloc",
    "FullName": "DataBloc (STONE)"
  },
  {
    "Symbol": "OILD",
    "CoinName": "OilWellCoin",
    "FullName": "OilWellCoin (OILD)"
  },
  {
    "Symbol": "VLM",
    "CoinName": "Volum",
    "FullName": "Volum (VLM)"
  },
  {
    "Symbol": "LOLC",
    "CoinName": "LOL Coin",
    "FullName": "LOL Coin (LOLC)"
  },
  {
    "Symbol": "RFOX",
    "CoinName": "RedFOX Labs",
    "FullName": "RedFOX Labs (RFOX)"
  },
  {
    "Symbol": "CTLX",
    "CoinName": "Cash Telex",
    "FullName": "Cash Telex (CTLX)"
  },
  {
    "Symbol": "CSM",
    "CoinName": "Consentium",
    "FullName": "Consentium (CSM)"
  },
  {
    "Symbol": "BTNY",
    "CoinName": "Bitney",
    "FullName": "Bitney (BTNY)"
  },
  {
    "Symbol": "LOTES",
    "CoinName": "Loteo",
    "FullName": "Loteo (LOTES)"
  },
  {
    "Symbol": "LOTEU",
    "CoinName": "Loteo",
    "FullName": "Loteo (LOTEU)"
  },
  {
    "Symbol": "RVO",
    "CoinName": "AhrvoDEEX",
    "FullName": "AhrvoDEEX (RVO)"
  },
  {
    "Symbol": "GTH",
    "CoinName": "Gath3r",
    "FullName": "Gath3r (GTH)"
  },
  {
    "Symbol": "IRYO",
    "CoinName": "Iryo",
    "FullName": "Iryo (IRYO)"
  },
  {
    "Symbol": "KBT",
    "CoinName": "Kartblock",
    "FullName": "Kartblock (KBT)"
  },
  {
    "Symbol": "USDX",
    "CoinName": "USDX Stablecoin",
    "FullName": "USDX Stablecoin (USDX)"
  },
  {
    "Symbol": "LHT",
    "CoinName": "LHT Coin",
    "FullName": "LHT Coin (LHT)"
  },
  {
    "Symbol": "PLAT",
    "CoinName": "Platinum",
    "FullName": "Platinum (PLAT)"
  },
  {
    "Symbol": "NYCREC",
    "CoinName": "NYCREC",
    "FullName": "NYCREC (NYCREC)"
  },
  {
    "Symbol": "HPT",
    "CoinName": "Huobi Pool Token",
    "FullName": "Huobi Pool Token (HPT)"
  },
  {
    "Symbol": "NSD",
    "CoinName": "Nasdacoin",
    "FullName": "Nasdacoin (NSD)"
  },
  {
    "Symbol": "SOLVE",
    "CoinName": "SOLVE",
    "FullName": "SOLVE (SOLVE)"
  },
  {
    "Symbol": "BOLT",
    "CoinName": "Bolt",
    "FullName": "Bolt (BOLT)"
  },
  {
    "Symbol": "BLOC",
    "CoinName": "Blockcloud",
    "FullName": "Blockcloud (BLOC)"
  },
  {
    "Symbol": "SPT",
    "CoinName": "SPECTRUM",
    "FullName": "SPECTRUM (SPT)"
  },
  {
    "Symbol": "FBB",
    "CoinName": "FilmBusinessBuster",
    "FullName": "FilmBusinessBuster (FBB)"
  },
  {
    "Symbol": "BSAFE",
    "CoinName": "BlockSafe",
    "FullName": "BlockSafe (BSAFE)"
  },
  {
    "Symbol": "DBTN",
    "CoinName": "Universa Native token",
    "FullName": "Universa Native token (DBTN)"
  },
  {
    "Symbol": "WBX",
    "CoinName": "WINBIX",
    "FullName": "WINBIX (WBX)"
  },
  {
    "Symbol": "HET",
    "CoinName": "HavEther",
    "FullName": "HavEther (HET)"
  },
  {
    "Symbol": "DARC",
    "CoinName": "Konstellation",
    "FullName": "Konstellation (DARC)"
  },
  {
    "Symbol": "CMA",
    "CoinName": "Crypto Market Ads",
    "FullName": "Crypto Market Ads (CMA)"
  },
  {
    "Symbol": "MAPR",
    "CoinName": "Maya Preferred 223",
    "FullName": "Maya Preferred 223 (MAPR)"
  },
  {
    "Symbol": "THR",
    "CoinName": "Thorecoin",
    "FullName": "Thorecoin (THR)"
  },
  {
    "Symbol": "MATIC",
    "CoinName": "Matic Network",
    "FullName": "Matic Network (MATIC)"
  },
  {
    "Symbol": "PBET",
    "CoinName": "PBET",
    "FullName": "PBET (PBET)"
  },
  {
    "Symbol": "SST",
    "CoinName": "AllSesame",
    "FullName": "AllSesame (SST)"
  },
  {
    "Symbol": "PUX",
    "CoinName": "pukkamex",
    "FullName": "pukkamex (PUX)"
  },
  {
    "Symbol": "YANU",
    "CoinName": "Yanu",
    "FullName": "Yanu (YANU)"
  },
  {
    "Symbol": "XCB",
    "CoinName": "Crypto Birds",
    "FullName": "Crypto Birds (XCB)"
  },
  {
    "Symbol": "RSF",
    "CoinName": "Royal Sting",
    "FullName": "Royal Sting (RSF)"
  },
  {
    "Symbol": "WMD",
    "CoinName": "WindMine",
    "FullName": "WindMine (WMD)"
  },
  {
    "Symbol": "TT",
    "CoinName": "Thunder Token",
    "FullName": "Thunder Token (TT)"
  },
  {
    "Symbol": "TOYKEN",
    "CoinName": "Toyken",
    "FullName": "Toyken (TOYKEN)"
  },
  {
    "Symbol": "XAL",
    "CoinName": "AuxChips",
    "FullName": "AuxChips (XAL)"
  },
  {
    "Symbol": "TAS",
    "CoinName": "TARUSH",
    "FullName": "TARUSH (TAS)"
  },
  {
    "Symbol": "COVA",
    "CoinName": "COVA",
    "FullName": "COVA (COVA)"
  },
  {
    "Symbol": "LAMB",
    "CoinName": "Lambda",
    "FullName": "Lambda (LAMB)"
  },
  {
    "Symbol": "FXC",
    "CoinName": "Flexacoin",
    "FullName": "Flexacoin (FXC)"
  },
  {
    "Symbol": "GEX",
    "CoinName": "Gexan",
    "FullName": "Gexan (GEX)"
  },
  {
    "Symbol": "DREP",
    "CoinName": "DREP",
    "FullName": "DREP (DREP)"
  },
  {
    "Symbol": "VDL",
    "CoinName": "Vidulum",
    "FullName": "Vidulum (VDL)"
  },
  {
    "Symbol": "TMN",
    "CoinName": "TranslateMe",
    "FullName": "TranslateMe (TMN)"
  },
  {
    "Symbol": "TCR",
    "CoinName": "TecraCoin",
    "FullName": "TecraCoin (TCR)"
  },
  {
    "Symbol": "FUNX",
    "CoinName": "Function X",
    "FullName": "Function X (FUNX)"
  },
  {
    "Symbol": "ASST",
    "CoinName": "AssetStream",
    "FullName": "AssetStream (ASST)"
  },
  {
    "Symbol": "BEET",
    "CoinName": "Beetle Coin",
    "FullName": "Beetle Coin (BEET)"
  },
  {
    "Symbol": "IFX",
    "CoinName": "IdeaFeX",
    "FullName": "IdeaFeX (IFX)"
  },
  {
    "Symbol": "MART",
    "CoinName": "Monart",
    "FullName": "Monart (MART)"
  },
  {
    "Symbol": "TC",
    "CoinName": "Titan Coin",
    "FullName": "Titan Coin (TC)"
  },
  {
    "Symbol": "DAPPT",
    "CoinName": "Dapp Token",
    "FullName": "Dapp Token (DAPPT)"
  },
  {
    "Symbol": "TTN",
    "CoinName": "Titan Coin",
    "FullName": "Titan Coin (TTN)"
  },
  {
    "Symbol": "GNTO",
    "CoinName": "GoldeNugget Token",
    "FullName": "GoldeNugget Token (GNTO)"
  },
  {
    "Symbol": "OCEAN",
    "CoinName": "Ocean Protocol",
    "FullName": "Ocean Protocol (OCEAN)"
  },
  {
    "Symbol": "LMXC",
    "CoinName": "LimonX",
    "FullName": "LimonX (LMXC)"
  },
  {
    "Symbol": "UTPL",
    "CoinName": "Utopialand",
    "FullName": "Utopialand (UTPL)"
  },
  {
    "Symbol": "GDR",
    "CoinName": "Guider.Travel",
    "FullName": "Guider.Travel (GDR)"
  },
  {
    "Symbol": "LNX",
    "CoinName": "Lunox Token",
    "FullName": "Lunox Token (LNX)"
  },
  {
    "Symbol": "ORIGIN",
    "CoinName": "Origin Foundation",
    "FullName": "Origin Foundation (ORIGIN)"
  },
  {
    "Symbol": "NTO",
    "CoinName": "Neutro Protocol",
    "FullName": "Neutro Protocol (NTO)"
  },
  {
    "Symbol": "TXT",
    "CoinName": "TuneTrade",
    "FullName": "TuneTrade (TXT)"
  },
  {
    "Symbol": "ARRR",
    "CoinName": "Pirate Chain",
    "FullName": "Pirate Chain (ARRR)"
  },
  {
    "Symbol": "SCONE",
    "CoinName": "Sportcash One",
    "FullName": "Sportcash One (SCONE)"
  },
  {
    "Symbol": "MAR",
    "CoinName": "Martian Network",
    "FullName": "Martian Network (MAR)"
  },
  {
    "Symbol": "OWN",
    "CoinName": "OWNDATA",
    "FullName": "OWNDATA (OWN)"
  },
  {
    "Symbol": "VLS",
    "CoinName": "Veles",
    "FullName": "Veles (VLS)"
  },
  {
    "Symbol": "AWR",
    "CoinName": "Award",
    "FullName": "Award (AWR)"
  },
  {
    "Symbol": "QQQ",
    "CoinName": "Poseidon Network",
    "FullName": "Poseidon Network (QQQ)"
  },
  {
    "Symbol": "UVU",
    "CoinName": "CCUniverse",
    "FullName": "CCUniverse (UVU)"
  },
  {
    "Symbol": "KOZ",
    "CoinName": "Kozjin",
    "FullName": "Kozjin (KOZ)"
  },
  {
    "Symbol": "SMAT",
    "CoinName": "Smathium",
    "FullName": "Smathium (SMAT)"
  },
  {
    "Symbol": "IOWN",
    "CoinName": "iOWN Token",
    "FullName": "iOWN Token (IOWN)"
  },
  {
    "Symbol": "QBIT",
    "CoinName": "Qubitica",
    "FullName": "Qubitica (QBIT)"
  },
  {
    "Symbol": "BCX",
    "CoinName": "BitcoinX",
    "FullName": "BitcoinX (BCX)"
  },
  {
    "Symbol": "LEO",
    "CoinName": "LEO Token",
    "FullName": "LEO Token (LEO)"
  },
  {
    "Symbol": "BST",
    "CoinName": "BlockStamp",
    "FullName": "BlockStamp (BST)"
  },
  {
    "Symbol": "AYA",
    "CoinName": "Aryacoin",
    "FullName": "Aryacoin (AYA)"
  },
  {
    "Symbol": "BUSDC",
    "CoinName": "BUSD",
    "FullName": "BUSD (BUSDC)"
  },
  {
    "Symbol": "VCN",
    "CoinName": "VeganNation",
    "FullName": "VeganNation (VCN)"
  },
  {
    "Symbol": "BAC",
    "CoinName": "BACoin",
    "FullName": "BACoin (BAC)"
  },
  {
    "Symbol": "BLAST",
    "CoinName": "BLAST",
    "FullName": "BLAST (BLAST)"
  },
  {
    "Symbol": "PRDX",
    "CoinName": "ParamountDax",
    "FullName": "ParamountDax (PRDX)"
  },
  {
    "Symbol": "ZOPT",
    "CoinName": "Zoptax",
    "FullName": "Zoptax (ZOPT)"
  },
  {
    "Symbol": "FILM",
    "CoinName": "Filmpass",
    "FullName": "Filmpass (FILM)"
  },
  {
    "Symbol": "VDX",
    "CoinName": "Vodi X",
    "FullName": "Vodi X (VDX)"
  },
  {
    "Symbol": "PHB",
    "CoinName": "Red Pulse Phoenix Binance",
    "FullName": "Red Pulse Phoenix Binance (PHB)"
  },
  {
    "Symbol": "RSR",
    "CoinName": "Reserve Rights",
    "FullName": "Reserve Rights (RSR)"
  },
  {
    "Symbol": "ONE",
    "CoinName": "Harmony",
    "FullName": "Harmony (ONE)"
  },
  {
    "Symbol": "CKUSD",
    "CoinName": "CKUSD",
    "FullName": "CKUSD (CKUSD)"
  },
  {
    "Symbol": "CTPT",
    "CoinName": "Contents Protocol",
    "FullName": "Contents Protocol (CTPT)"
  },
  {
    "Symbol": "ESBC",
    "CoinName": "ESBC",
    "FullName": "ESBC (ESBC)"
  },
  {
    "Symbol": "GRAYLL",
    "CoinName": "GRAYLL",
    "FullName": "GRAYLL (GRAYLL)"
  },
  {
    "Symbol": "BRC",
    "CoinName": "Baer Chain",
    "FullName": "Baer Chain (BRC)"
  },
  {
    "Symbol": "MOC",
    "CoinName": "Mossland",
    "FullName": "Mossland (MOC)"
  },
  {
    "Symbol": "SERV",
    "CoinName": "Serve",
    "FullName": "Serve (SERV)"
  },
  {
    "Symbol": "PTON",
    "CoinName": "Foresting",
    "FullName": "Foresting (PTON)"
  },
  {
    "Symbol": "DPN",
    "CoinName": "DIPNET",
    "FullName": "DIPNET (DPN)"
  },
  {
    "Symbol": "VBK",
    "CoinName": "VeriBlock",
    "FullName": "VeriBlock (VBK)"
  },
  {
    "Symbol": "THEMIS",
    "CoinName": "Themis",
    "FullName": "Themis (THEMIS)"
  },
  {
    "Symbol": "YCC",
    "CoinName": "Yuan Chain Coin",
    "FullName": "Yuan Chain Coin (YCC)"
  },
  {
    "Symbol": "USDK",
    "CoinName": "USDK",
    "FullName": "USDK (USDK)"
  },
  {
    "Symbol": "MIX",
    "CoinName": "MIXMARVEL",
    "FullName": "MIXMARVEL (MIX)"
  },
  {
    "Symbol": "PLY",
    "CoinName": "PlayCoin",
    "FullName": "PlayCoin (PLY)"
  },
  {
    "Symbol": "CHR",
    "CoinName": "Chromia",
    "FullName": "Chromia (CHR)"
  },
  {
    "Symbol": "BWX",
    "CoinName": "Blue Whale",
    "FullName": "Blue Whale (BWX)"
  },
  {
    "Symbol": "VST",
    "CoinName": "Vostok",
    "FullName": "Vostok (VST)"
  },
  {
    "Symbol": "BORA",
    "CoinName": "BORA",
    "FullName": "BORA (BORA)"
  },
  {
    "Symbol": "WIB",
    "CoinName": "Wibson",
    "FullName": "Wibson (WIB)"
  },
  {
    "Symbol": "BOXX",
    "CoinName": "Blockparty",
    "FullName": "Blockparty (BOXX)"
  },
  {
    "Symbol": "UT",
    "CoinName": "Ulord",
    "FullName": "Ulord (UT)"
  },
  {
    "Symbol": "BU",
    "CoinName": "BUMO",
    "FullName": "BUMO (BU)"
  },
  {
    "Symbol": "DX",
    "CoinName": "DxChain Token",
    "FullName": "DxChain Token (DX)"
  },
  {
    "Symbol": "MTV",
    "CoinName": "MultiVAC",
    "FullName": "MultiVAC (MTV)"
  },
  {
    "Symbol": "TRIAS",
    "CoinName": "Trias",
    "FullName": "Trias (TRIAS)"
  },
  {
    "Symbol": "WINT",
    "CoinName": "WinToken",
    "FullName": "WinToken (WINT)"
  },
  {
    "Symbol": "VNT",
    "CoinName": "VNT Chain",
    "FullName": "VNT Chain (VNT)"
  },
  {
    "Symbol": "OGO",
    "CoinName": "Origo",
    "FullName": "Origo (OGO)"
  },
  {
    "Symbol": "DVT",
    "CoinName": "DeVault",
    "FullName": "DeVault (DVT)"
  },
  {
    "Symbol": "BOMB",
    "CoinName": "BOMB",
    "FullName": "BOMB (BOMB)"
  },
  {
    "Symbol": "CARRY",
    "CoinName": "Carry",
    "FullName": "Carry (CARRY)"
  },
  {
    "Symbol": "BRYLL",
    "CoinName": "Bryllite",
    "FullName": "Bryllite (BRYLL)"
  },
  {
    "Symbol": "WXT",
    "CoinName": "Wirex Token",
    "FullName": "Wirex Token (WXT)"
  },
  {
    "Symbol": "BOXT",
    "CoinName": "BOX Token",
    "FullName": "BOX Token (BOXT)"
  },
  {
    "Symbol": "KAT",
    "CoinName": "Kambria",
    "FullName": "Kambria (KAT)"
  },
  {
    "Symbol": "SPENDC",
    "CoinName": "SpendCoin",
    "FullName": "SpendCoin (SPENDC)"
  },
  {
    "Symbol": "BEST",
    "CoinName": "BEST",
    "FullName": "BEST (BEST)"
  },
  {
    "Symbol": "CAM",
    "CoinName": "Consumption Avatar Matrix",
    "FullName": "Consumption Avatar Matrix (CAM)"
  },
  {
    "Symbol": "HYDRO",
    "CoinName": "Hydro",
    "FullName": "Hydro (HYDRO)"
  },
  {
    "Symbol": "BTN",
    "CoinName": "BitNewChain",
    "FullName": "BitNewChain (BTN)"
  },
  {
    "Symbol": "ATP",
    "CoinName": "Atlas Protocol",
    "FullName": "Atlas Protocol (ATP)"
  },
  {
    "Symbol": "BCV",
    "CoinName": "BitCapitalVendor",
    "FullName": "BitCapitalVendor (BCV)"
  },
  {
    "Symbol": "BKN",
    "CoinName": "BlockState",
    "FullName": "BlockState (BKN)"
  },
  {
    "Symbol": "INB",
    "CoinName": "Insight Chain",
    "FullName": "Insight Chain (INB)"
  },
  {
    "Symbol": "WICC",
    "CoinName": "WaykiChain",
    "FullName": "WaykiChain (WICC)"
  },
  {
    "Symbol": "EKT",
    "CoinName": "EDUCare",
    "FullName": "EDUCare (EKT)"
  },
  {
    "Symbol": "BIHU",
    "CoinName": "Key",
    "FullName": "Key (BIHU)"
  },
  {
    "Symbol": "1SG",
    "CoinName": "1SG",
    "FullName": "1SG (1SG)"
  },
  {
    "Symbol": "TOP",
    "CoinName": "TOP Network",
    "FullName": "TOP Network (TOP)"
  },
  {
    "Symbol": "KT",
    "CoinName": "Kuai Token",
    "FullName": "Kuai Token (KT)"
  },
  {
    "Symbol": "INE",
    "CoinName": "IntelliShare",
    "FullName": "IntelliShare (INE)"
  },
  {
    "Symbol": "STPT",
    "CoinName": "STP Network",
    "FullName": "STP Network (STPT)"
  },
  {
    "Symbol": "ARTF",
    "CoinName": "Artfinity Token",
    "FullName": "Artfinity Token (ARTF)"
  },
  {
    "Symbol": "AT",
    "CoinName": "AWARE",
    "FullName": "AWARE (AT)"
  },
  {
    "Symbol": "CVNT",
    "CoinName": "Content Value Network",
    "FullName": "Content Value Network (CVNT)"
  },
  {
    "Symbol": "DEX",
    "CoinName": "DEX",
    "FullName": "DEX (DEX)"
  },
  {
    "Symbol": "ELD",
    "CoinName": "Electrum Dark",
    "FullName": "Electrum Dark (ELD)"
  },
  {
    "Symbol": "UOS",
    "CoinName": "UOS",
    "FullName": "UOS (UOS)"
  },
  {
    "Symbol": "UND",
    "CoinName": "United Network Distribution",
    "FullName": "United Network Distribution (UND)"
  },
  {
    "Symbol": "PEOS",
    "CoinName": "pEOS",
    "FullName": "pEOS (PEOS)"
  },
  {
    "Symbol": "BHD",
    "CoinName": "Bitcoin HD",
    "FullName": "Bitcoin HD (BHD)"
  },
  {
    "Symbol": "GTN",
    "CoinName": "GlitzKoin",
    "FullName": "GlitzKoin (GTN)"
  },
  {
    "Symbol": "VIPS",
    "CoinName": "Vipstar Coin",
    "FullName": "Vipstar Coin (VIPS)"
  },
  {
    "Symbol": "BBGC",
    "CoinName": "BigBang Game",
    "FullName": "BigBang Game (BBGC)"
  },
  {
    "Symbol": "LINA",
    "CoinName": "Lina",
    "FullName": "Lina (LINA)"
  },
  {
    "Symbol": "INFC",
    "CoinName": "Influence Chain",
    "FullName": "Influence Chain (INFC)"
  },
  {
    "Symbol": "BTNT",
    "CoinName": "BitNautic",
    "FullName": "BitNautic (BTNT)"
  },
  {
    "Symbol": "WGP",
    "CoinName": "W Green Pay",
    "FullName": "W Green Pay (WGP)"
  },
  {
    "Symbol": "NPXSXEM",
    "CoinName": "Pundi X NEM",
    "FullName": "Pundi X NEM (NPXSXEM)"
  },
  {
    "Symbol": "YOU",
    "CoinName": "YOU Chain",
    "FullName": "YOU Chain (YOU)"
  },
  {
    "Symbol": "USCC",
    "CoinName": "USC",
    "FullName": "USC (USCC)"
  },
  {
    "Symbol": "ANDC",
    "CoinName": "Android chain",
    "FullName": "Android chain (ANDC)"
  },
  {
    "Symbol": "WGC",
    "CoinName": "WeGen Platform",
    "FullName": "WeGen Platform (WGC)"
  },
  {
    "Symbol": "GMB",
    "CoinName": "GMB",
    "FullName": "GMB (GMB)"
  },
  {
    "Symbol": "MRS",
    "CoinName": "Marginless",
    "FullName": "Marginless (MRS)"
  },
  {
    "Symbol": "FUND",
    "CoinName": "FUNDChains",
    "FullName": "FUNDChains (FUND)"
  },
  {
    "Symbol": "OCC",
    "CoinName": "Octoin Coin",
    "FullName": "Octoin Coin (OCC)"
  },
  {
    "Symbol": "NNB",
    "CoinName": "NNB Token",
    "FullName": "NNB Token (NNB)"
  },
  {
    "Symbol": "USDQ",
    "CoinName": "USDQ",
    "FullName": "USDQ (USDQ)"
  },
  {
    "Symbol": "ULT",
    "CoinName": "Ultiledger",
    "FullName": "Ultiledger (ULT)"
  },
  {
    "Symbol": "WWB",
    "CoinName": "Wowbit",
    "FullName": "Wowbit (WWB)"
  },
  {
    "Symbol": "VANT",
    "CoinName": "Vanta Network",
    "FullName": "Vanta Network (VANT)"
  },
  {
    "Symbol": "SNET",
    "CoinName": "Snetwork",
    "FullName": "Snetwork (SNET)"
  },
  {
    "Symbol": "IRIS",
    "CoinName": "IRIS Network",
    "FullName": "IRIS Network (IRIS)"
  },
  {
    "Symbol": "BTCB",
    "CoinName": "Bitcoin BEP2",
    "FullName": "Bitcoin BEP2 (BTCB)"
  },
  {
    "Symbol": "IONC",
    "CoinName": "IONChain",
    "FullName": "IONChain (IONC)"
  },
  {
    "Symbol": "SSP",
    "CoinName": "Smartshare",
    "FullName": "Smartshare (SSP)"
  },
  {
    "Symbol": "CNUS",
    "CoinName": "CoinUs",
    "FullName": "CoinUs (CNUS)"
  },
  {
    "Symbol": "ABL",
    "CoinName": "Airbloc",
    "FullName": "Airbloc (ABL)"
  },
  {
    "Symbol": "SDA",
    "CoinName": "SDChain",
    "FullName": "SDChain (SDA)"
  },
  {
    "Symbol": "SMARTUP",
    "CoinName": "Smartup",
    "FullName": "Smartup (SMARTUP)"
  },
  {
    "Symbol": "HYN",
    "CoinName": "Hyperion",
    "FullName": "Hyperion (HYN)"
  },
  {
    "Symbol": "UIP",
    "CoinName": "UnlimitedIP",
    "FullName": "UnlimitedIP (UIP)"
  },
  {
    "Symbol": "MIR",
    "CoinName": "MIR COIN",
    "FullName": "MIR COIN (MIR)"
  },
  {
    "Symbol": "JCT",
    "CoinName": "Japan Content Token",
    "FullName": "Japan Content Token (JCT)"
  },
  {
    "Symbol": "FTI",
    "CoinName": "FansTime",
    "FullName": "FansTime (FTI)"
  },
  {
    "Symbol": "DOS",
    "CoinName": "DOS Network",
    "FullName": "DOS Network (DOS)"
  },
  {
    "Symbol": "LIBRA",
    "CoinName": "Facebook Libra",
    "FullName": "Facebook Libra (LIBRA)"
  },
  {
    "Symbol": "DLO",
    "CoinName": "Delio",
    "FullName": "Delio (DLO)"
  },
  {
    "Symbol": "DUOT",
    "CoinName": "DUO Network",
    "FullName": "DUO Network (DUOT)"
  },
  {
    "Symbol": "OCE",
    "CoinName": "OceanEX Token",
    "FullName": "OceanEX Token (OCE)"
  },
  {
    "Symbol": "ALGO",
    "CoinName": "Algorand",
    "FullName": "Algorand (ALGO)"
  },
  {
    "Symbol": "AIRX",
    "CoinName": "Aircoins",
    "FullName": "Aircoins (AIRX)"
  },
  {
    "Symbol": "RAVEN",
    "CoinName": "Raven Protocol",
    "FullName": "Raven Protocol (RAVEN)"
  },
  {
    "Symbol": "MIN",
    "CoinName": "MINDOL",
    "FullName": "MINDOL (MIN)"
  },
  {
    "Symbol": "MBL",
    "CoinName": "MovieBloc",
    "FullName": "MovieBloc (MBL)"
  },
  {
    "Symbol": "B91",
    "CoinName": "B91",
    "FullName": "B91 (B91)"
  },
  {
    "Symbol": "AIDT",
    "CoinName": "AIDUS TOKEN",
    "FullName": "AIDUS TOKEN (AIDT)"
  },
  {
    "Symbol": "ALI",
    "CoinName": "AiLink Token",
    "FullName": "AiLink Token (ALI)"
  },
  {
    "Symbol": "CLB",
    "CoinName": "Cloudbric",
    "FullName": "Cloudbric (CLB)"
  },
  {
    "Symbol": "CZR",
    "CoinName": "CanonChain",
    "FullName": "CanonChain (CZR)"
  },
  {
    "Symbol": "DELTA",
    "CoinName": "DeltaChain",
    "FullName": "DeltaChain (DELTA)"
  },
  {
    "Symbol": "GSE",
    "CoinName": "GSENetwork",
    "FullName": "GSENetwork (GSE)"
  },
  {
    "Symbol": "KNT",
    "CoinName": "Knekted",
    "FullName": "Knekted (KNT)"
  },
  {
    "Symbol": "KWATT",
    "CoinName": "4New",
    "FullName": "4New (KWATT)"
  },
  {
    "Symbol": "MAS",
    "CoinName": "Midas Protocol",
    "FullName": "Midas Protocol (MAS)"
  },
  {
    "Symbol": "UCH",
    "CoinName": "UChain",
    "FullName": "UChain (UCH)"
  },
  {
    "Symbol": "VDG",
    "CoinName": "VeriDocGlobal",
    "FullName": "VeriDocGlobal (VDG)"
  },
  {
    "Symbol": "YEED",
    "CoinName": "Yggdrash",
    "FullName": "Yggdrash (YEED)"
  },
  {
    "Symbol": "PRS",
    "CoinName": "PressOne",
    "FullName": "PressOne (PRS)"
  },
  {
    "Symbol": "EHRT",
    "CoinName": "Eight Hours Token",
    "FullName": "Eight Hours Token (EHRT)"
  },
  {
    "Symbol": "XRC",
    "CoinName": "Bitcoin Rhodium",
    "FullName": "Bitcoin Rhodium (XRC)"
  },
  {
    "Symbol": "TERA",
    "CoinName": "TERA",
    "FullName": "TERA (TERA)"
  },
  {
    "Symbol": "MXC",
    "CoinName": "Machine Xchange Coin",
    "FullName": "Machine Xchange Coin (MXC)"
  },
  {
    "Symbol": "JAR",
    "CoinName": "Jarvis+",
    "FullName": "Jarvis+ (JAR)"
  },
  {
    "Symbol": "VOCO",
    "CoinName": "Provoco",
    "FullName": "Provoco (VOCO)"
  },
  {
    "Symbol": "EOSDT",
    "CoinName": "EOSDT",
    "FullName": "EOSDT (EOSDT)"
  },
  {
    "Symbol": "TNS",
    "CoinName": "Transcodium",
    "FullName": "Transcodium (TNS)"
  },
  {
    "Symbol": "NBOT",
    "CoinName": "Naka Bodhi Token",
    "FullName": "Naka Bodhi Token (NBOT)"
  },
  {
    "Symbol": "RATING",
    "CoinName": "DPRating",
    "FullName": "DPRating (RATING)"
  },
  {
    "Symbol": "CNNS",
    "CoinName": "CNNS",
    "FullName": "CNNS (CNNS)"
  },
  {
    "Symbol": "AMPL",
    "CoinName": "Ampleforth",
    "FullName": "Ampleforth (AMPL)"
  },
  {
    "Symbol": "SOP",
    "CoinName": "SoPay",
    "FullName": "SoPay (SOP)"
  },
  {
    "Symbol": "LEMO",
    "CoinName": "LemoChain",
    "FullName": "LemoChain (LEMO)"
  },
  {
    "Symbol": "TYPE",
    "CoinName": "Typerium",
    "FullName": "Typerium (TYPE)"
  },
  {
    "Symbol": "CYL",
    "CoinName": "Crystal Token",
    "FullName": "Crystal Token (CYL)"
  },
  {
    "Symbol": "HLT",
    "CoinName": "HyperLoot",
    "FullName": "HyperLoot (HLT)"
  },
  {
    "Symbol": "E2C",
    "CoinName": "Electronic Energy Coin",
    "FullName": "Electronic Energy Coin (E2C)"
  },
  {
    "Symbol": "TAC",
    "CoinName": "Traceability Chain",
    "FullName": "Traceability Chain (TAC)"
  },
  {
    "Symbol": "TENX",
    "CoinName": "TenX Token",
    "FullName": "TenX Token (TENX)"
  },
  {
    "Symbol": "EKG",
    "CoinName": "Ekon Gold",
    "FullName": "Ekon Gold (EKG)"
  },
  {
    "Symbol": "SLV",
    "CoinName": "Silverway",
    "FullName": "Silverway (SLV)"
  },
  {
    "Symbol": "ERD",
    "CoinName": "Elrond",
    "FullName": "Elrond (ERD)"
  },
  {
    "Symbol": "PHV",
    "CoinName": "PATHHIVE",
    "FullName": "PATHHIVE (PHV)"
  },
  {
    "Symbol": "ONOT",
    "CoinName": "ONO",
    "FullName": "ONO (ONOT)"
  },
  {
    "Symbol": "IMPT",
    "CoinName": "Ether Kingdoms Token",
    "FullName": "Ether Kingdoms Token (IMPT)"
  },
  {
    "Symbol": "BITRUE",
    "CoinName": "Bitrue Coin",
    "FullName": "Bitrue Coin (BITRUE)"
  },
  {
    "Symbol": "SWAPS",
    "CoinName": "SWAPS Network",
    "FullName": "SWAPS Network (SWAPS)"
  },
  {
    "Symbol": "CONUN",
    "CoinName": "CONUN",
    "FullName": "CONUN (CONUN)"
  },
  {
    "Symbol": "FNB",
    "CoinName": "FNB protocol",
    "FullName": "FNB protocol (FNB)"
  },
  {
    "Symbol": "GNY",
    "CoinName": "GNY",
    "FullName": "GNY (GNY)"
  },
  {
    "Symbol": "SRK",
    "CoinName": "SparkPoint",
    "FullName": "SparkPoint (SRK)"
  },
  {
    "Symbol": "ACDC",
    "CoinName": "Volt",
    "FullName": "Volt (ACDC)"
  },
  {
    "Symbol": "YEC",
    "CoinName": "Ycash",
    "FullName": "Ycash (YEC)"
  },
  {
    "Symbol": "TOKO",
    "CoinName": "ToKoin",
    "FullName": "ToKoin (TOKO)"
  },
  {
    "Symbol": "ECO",
    "CoinName": "Ormeus Ecosystem",
    "FullName": "Ormeus Ecosystem (ECO)"
  },
  {
    "Symbol": "ADN",
    "CoinName": "Aladdin",
    "FullName": "Aladdin (ADN)"
  },
  {
    "Symbol": "FTN",
    "CoinName": "Fountain",
    "FullName": "Fountain (FTN)"
  },
  {
    "Symbol": "GRN",
    "CoinName": "GreenPower",
    "FullName": "GreenPower (GRN)"
  },
  {
    "Symbol": "NTY",
    "CoinName": "Nexty",
    "FullName": "Nexty (NTY)"
  },
  {
    "Symbol": "TEMCO",
    "CoinName": "TEMCO",
    "FullName": "TEMCO (TEMCO)"
  },
  {
    "Symbol": "ADRX",
    "CoinName": "Adrenaline Chain",
    "FullName": "Adrenaline Chain (ADRX)"
  },
  {
    "Symbol": "DAC",
    "CoinName": "Davinci Coin",
    "FullName": "Davinci Coin (DAC)"
  },
  {
    "Symbol": "MESG",
    "CoinName": "MESG",
    "FullName": "MESG (MESG)"
  },
  {
    "Symbol": "SHX",
    "CoinName": "Stronghold Token",
    "FullName": "Stronghold Token (SHX)"
  },
  {
    "Symbol": "UPX",
    "CoinName": "uPlexa",
    "FullName": "uPlexa (UPX)"
  },
  {
    "Symbol": "FST",
    "CoinName": "1irstcoin",
    "FullName": "1irstcoin (FST)"
  },
  {
    "Symbol": "BCT",
    "CoinName": "Bitcratic Token",
    "FullName": "Bitcratic Token (BCT)"
  },
  {
    "Symbol": "TRTT",
    "CoinName": "Trittium",
    "FullName": "Trittium (TRTT)"
  },
  {
    "Symbol": "ARPA",
    "CoinName": "ARPA Chain",
    "FullName": "ARPA Chain (ARPA)"
  },
  {
    "Symbol": "THCH",
    "CoinName": "Thorecash",
    "FullName": "Thorecash (THCH)"
  },
  {
    "Symbol": "ABX",
    "CoinName": "Arbidex",
    "FullName": "Arbidex (ABX)"
  },
  {
    "Symbol": "HXRO",
    "CoinName": "Hxro",
    "FullName": "Hxro (HXRO)"
  },
  {
    "Symbol": "MONT",
    "CoinName": "Monarch Token",
    "FullName": "Monarch Token (MONT)"
  },
  {
    "Symbol": "WIN",
    "CoinName": "WINk",
    "FullName": "WINk (WIN)"
  },
  {
    "Symbol": "NUT",
    "CoinName": "Native Utility Token",
    "FullName": "Native Utility Token (NUT)"
  },
  {
    "Symbol": "TN",
    "CoinName": "TurtleNetwork",
    "FullName": "TurtleNetwork (TN)"
  },
  {
    "Symbol": "PBQ",
    "CoinName": "PUBLIQ",
    "FullName": "PUBLIQ (PBQ)"
  },
  {
    "Symbol": "ZDR",
    "CoinName": "Zloadr",
    "FullName": "Zloadr (ZDR)"
  },
  {
    "Symbol": "DOCT",
    "CoinName": "DocTailor",
    "FullName": "DocTailor (DOCT)"
  },
  {
    "Symbol": "DTEP",
    "CoinName": "DECOIN",
    "FullName": "DECOIN (DTEP)"
  },
  {
    "Symbol": "TCHAIN",
    "CoinName": "Tchain",
    "FullName": "Tchain (TCHAIN)"
  },
  {
    "Symbol": "XRTC",
    "CoinName": "Retailcoin",
    "FullName": "Retailcoin (XRTC)"
  },
  {
    "Symbol": "VRSC",
    "CoinName": "Verus Coin",
    "FullName": "Verus Coin (VRSC)"
  },
  {
    "Symbol": "LUNA",
    "CoinName": "Terra",
    "FullName": "Terra (LUNA)"
  },
  {
    "Symbol": "VOL",
    "CoinName": "Volume Network",
    "FullName": "Volume Network (VOL)"
  },
  {
    "Symbol": "PIXL",
    "CoinName": "Piction Network",
    "FullName": "Piction Network (PIXL)"
  },
  {
    "Symbol": "FTXT",
    "CoinName": "FTX Token",
    "FullName": "FTX Token (FTXT)"
  },
  {
    "Symbol": "NAT",
    "CoinName": "Natmin",
    "FullName": "Natmin (NAT)"
  },
  {
    "Symbol": "TRV",
    "CoinName": "TrustVerse",
    "FullName": "TrustVerse (TRV)"
  },
  {
    "Symbol": "RET",
    "CoinName": "RealTract",
    "FullName": "RealTract (RET)"
  },
  {
    "Symbol": "GMAT",
    "CoinName": "GoWithMi",
    "FullName": "GoWithMi (GMAT)"
  },
  {
    "Symbol": "HUM",
    "CoinName": "Humanscape",
    "FullName": "Humanscape (HUM)"
  },
  {
    "Symbol": "PERL",
    "CoinName": "Perlin",
    "FullName": "Perlin (PERL)"
  },
  {
    "Symbol": "LOL",
    "CoinName": "EMOGI Network",
    "FullName": "EMOGI Network (LOL)"
  },
  {
    "Symbol": "BCAC",
    "CoinName": "Business Credit Alliance Chain",
    "FullName": "Business Credit Alliance Chain (BCAC)"
  },
  {
    "Symbol": "XD",
    "CoinName": "Data Transaction Token",
    "FullName": "Data Transaction Token (XD)"
  },
  {
    "Symbol": "OTO",
    "CoinName": "OTOCASH",
    "FullName": "OTOCASH (OTO)"
  },
  {
    "Symbol": "BQQQ",
    "CoinName": "Bitsdaq Token",
    "FullName": "Bitsdaq Token (BQQQ)"
  },
  {
    "Symbol": "SIX",
    "CoinName": "SIX Network",
    "FullName": "SIX Network (SIX)"
  },
  {
    "Symbol": "LOCUS",
    "CoinName": "Locus Chain",
    "FullName": "Locus Chain (LOCUS)"
  },
  {
    "Symbol": "PVT",
    "CoinName": "Pivot Token",
    "FullName": "Pivot Token (PVT)"
  },
  {
    "Symbol": "COZP",
    "CoinName": "COZPlus",
    "FullName": "COZPlus (COZP)"
  },
  {
    "Symbol": "OGOD",
    "CoinName": "GOTOGOD",
    "FullName": "GOTOGOD (OGOD)"
  },
  {
    "Symbol": "SERO",
    "CoinName": "Super Zero",
    "FullName": "Super Zero (SERO)"
  },
  {
    "Symbol": "EM",
    "CoinName": "Eminer",
    "FullName": "Eminer (EM)"
  },
  {
    "Symbol": "FOIN",
    "CoinName": "Foin",
    "FullName": "Foin (FOIN)"
  },
  {
    "Symbol": "FKX",
    "CoinName": "FortKnoxster",
    "FullName": "FortKnoxster (FKX)"
  },
  {
    "Symbol": "YTA",
    "CoinName": "YottaChain",
    "FullName": "YottaChain (YTA)"
  },
  {
    "Symbol": "LXT",
    "CoinName": "LITEX",
    "FullName": "LITEX (LXT)"
  },
  {
    "Symbol": "IMG",
    "CoinName": "ImageCoin",
    "FullName": "ImageCoin (IMG)"
  },
  {
    "Symbol": "TSHP",
    "CoinName": "12Ships",
    "FullName": "12Ships (TSHP)"
  },
  {
    "Symbol": "SXP",
    "CoinName": "Swipe",
    "FullName": "Swipe (SXP)"
  },
  {
    "Symbol": "FRM",
    "CoinName": "Ferrum Network",
    "FullName": "Ferrum Network (FRM)"
  },
  {
    "Symbol": "BOTX",
    "CoinName": "BOTXCOIN",
    "FullName": "BOTXCOIN (BOTX)"
  },
  {
    "Symbol": "DPT",
    "CoinName": "Diamond Platform Token",
    "FullName": "Diamond Platform Token (DPT)"
  },
  {
    "Symbol": "GT",
    "CoinName": "Gatechain Token",
    "FullName": "Gatechain Token (GT)"
  },
  {
    "Symbol": "TRAT",
    "CoinName": "Tratok",
    "FullName": "Tratok (TRAT)"
  },
  {
    "Symbol": "CHZ",
    "CoinName": "Chiliz",
    "FullName": "Chiliz (CHZ)"
  },
  {
    "Symbol": "OPNN",
    "CoinName": "Opennity",
    "FullName": "Opennity (OPNN)"
  },
  {
    "Symbol": "SINS",
    "CoinName": "SafeInsure",
    "FullName": "SafeInsure (SINS)"
  },
  {
    "Symbol": "BHT",
    "CoinName": "BHEX Token",
    "FullName": "BHEX Token (BHT)"
  },
  {
    "Symbol": "BDX",
    "CoinName": "Beldex",
    "FullName": "Beldex (BDX)"
  },
  {
    "Symbol": "DXR",
    "CoinName": "DEXTER",
    "FullName": "DEXTER (DXR)"
  },
  {
    "Symbol": "PC",
    "CoinName": "Promotion Coin",
    "FullName": "Promotion Coin (PC)"
  },
  {
    "Symbol": "BUT",
    "CoinName": "BitUP Token",
    "FullName": "BitUP Token (BUT)"
  },
  {
    "Symbol": "GOS",
    "CoinName": "Gosama",
    "FullName": "Gosama (GOS)"
  },
  {
    "Symbol": "DEFI",
    "CoinName": "Defi",
    "FullName": "Defi (DEFI)"
  },
  {
    "Symbol": "BXK",
    "CoinName": "Bitbook Gambling",
    "FullName": "Bitbook Gambling (BXK)"
  },
  {
    "Symbol": "KNOW",
    "CoinName": "KNOW",
    "FullName": "KNOW (KNOW)"
  },
  {
    "Symbol": "WFX",
    "CoinName": "WebFlix",
    "FullName": "WebFlix (WFX)"
  },
  {
    "Symbol": "XPC",
    "CoinName": "eXPerience Chain",
    "FullName": "eXPerience Chain (XPC)"
  },
  {
    "Symbol": "COCOS",
    "CoinName": "COCOS BCX",
    "FullName": "COCOS BCX (COCOS)"
  },
  {
    "Symbol": "ACD",
    "CoinName": "Alliance Cargo Direct",
    "FullName": "Alliance Cargo Direct (ACD)"
  },
  {
    "Symbol": "AKRO",
    "CoinName": "Akropolis",
    "FullName": "Akropolis (AKRO)"
  },
  {
    "Symbol": "AMON",
    "CoinName": "AmonD",
    "FullName": "AmonD (AMON)"
  },
  {
    "Symbol": "BENZI",
    "CoinName": "Ben Zi Token",
    "FullName": "Ben Zi Token (BENZI)"
  },
  {
    "Symbol": "BGBP",
    "CoinName": "Binance GBP Stable Coin",
    "FullName": "Binance GBP Stable Coin (BGBP)"
  },
  {
    "Symbol": "BHP",
    "CoinName": "Blockchain of Hash Power",
    "FullName": "Blockchain of Hash Power (BHP)"
  },
  {
    "Symbol": "XCHF",
    "CoinName": "CryptoFranc",
    "FullName": "CryptoFranc (XCHF)"
  },
  {
    "Symbol": "BXA",
    "CoinName": "Blockchain Exchange Alliance",
    "FullName": "Blockchain Exchange Alliance (BXA)"
  },
  {
    "Symbol": "CBNT",
    "CoinName": "Create Breaking News Together",
    "FullName": "Create Breaking News Together (CBNT)"
  },
  {
    "Symbol": "DEEP",
    "CoinName": "DeepCloud AI",
    "FullName": "DeepCloud AI (DEEP)"
  },
  {
    "Symbol": "DOC",
    "CoinName": "Dochain",
    "FullName": "Dochain (DOC)"
  },
  {
    "Symbol": "DTC",
    "CoinName": "Data Transaction",
    "FullName": "Data Transaction (DTC)"
  },
  {
    "Symbol": "DVP",
    "CoinName": "Decentralized Vulnerability Platform",
    "FullName": "Decentralized Vulnerability Platform (DVP)"
  },
  {
    "Symbol": "DWC",
    "CoinName": "Digital Wallet",
    "FullName": "Digital Wallet (DWC)"
  },
  {
    "Symbol": "ELAC",
    "CoinName": "ELA Coin",
    "FullName": "ELA Coin (ELAC)"
  },
  {
    "Symbol": "ETSC",
    "CoinName": "​Ether star blockchain",
    "FullName": "​Ether star blockchain (ETSC)"
  },
  {
    "Symbol": "FMEX",
    "CoinName": "FMex",
    "FullName": "FMex (FMEX)"
  },
  {
    "Symbol": "FOR",
    "CoinName": "Force Protocol",
    "FullName": "Force Protocol (FOR)"
  },
  {
    "Symbol": "FTK",
    "CoinName": "FToken",
    "FullName": "FToken (FTK)"
  },
  {
    "Symbol": "FLEX",
    "CoinName": "FLEX Coin",
    "FullName": "FLEX Coin (FLEX)"
  },
  {
    "Symbol": "GE",
    "CoinName": "GEchain",
    "FullName": "GEchain (GE)"
  },
  {
    "Symbol": "GOT",
    "CoinName": "ParkinGo",
    "FullName": "ParkinGo (GOT)"
  },
  {
    "Symbol": "INFT",
    "CoinName": "Infinito",
    "FullName": "Infinito (INFT)"
  },
  {
    "Symbol": "ITOC",
    "CoinName": "ITOChain",
    "FullName": "ITOChain (ITOC)"
  },
  {
    "Symbol": "JCB",
    "CoinName": "Wine Chain",
    "FullName": "Wine Chain (JCB)"
  },
  {
    "Symbol": "KSC",
    "CoinName": "KStarCoin",
    "FullName": "KStarCoin (KSC)"
  },
  {
    "Symbol": "LHD",
    "CoinName": "LitecoinHD",
    "FullName": "LitecoinHD (LHD)"
  },
  {
    "Symbol": "LKN",
    "CoinName": "LinkCoin Token",
    "FullName": "LinkCoin Token (LKN)"
  },
  {
    "Symbol": "LPK",
    "CoinName": "Kripton",
    "FullName": "Kripton (LPK)"
  },
  {
    "Symbol": "MMT",
    "CoinName": "Master MIX Token",
    "FullName": "Master MIX Token (MMT)"
  },
  {
    "Symbol": "OSC",
    "CoinName": "iOscar",
    "FullName": "iOscar (OSC)"
  },
  {
    "Symbol": "PIB",
    "CoinName": "Pibble",
    "FullName": "Pibble (PIB)"
  },
  {
    "Symbol": "PNK",
    "CoinName": "Kleros",
    "FullName": "Kleros (PNK)"
  },
  {
    "Symbol": "PROM",
    "CoinName": "Prometeus",
    "FullName": "Prometeus (PROM)"
  },
  {
    "Symbol": "PROT",
    "CoinName": "PROT",
    "FullName": "PROT (PROT)"
  },
  {
    "Symbol": "QQBC",
    "CoinName": "QQBC IPFS BLOCKCHAIN",
    "FullName": "QQBC IPFS BLOCKCHAIN (QQBC)"
  },
  {
    "Symbol": "SPIN",
    "CoinName": "SPIN Protocol",
    "FullName": "SPIN Protocol (SPIN)"
  },
  {
    "Symbol": "TCNX",
    "CoinName": "Tercet Network",
    "FullName": "Tercet Network (TCNX)"
  },
  {
    "Symbol": "THX",
    "CoinName": "Thorenext",
    "FullName": "Thorenext (THX)"
  },
  {
    "Symbol": "THEX",
    "CoinName": "Thore Exchange",
    "FullName": "Thore Exchange (THEX)"
  },
  {
    "Symbol": "TCHTRX",
    "CoinName": "ThoreCashTRX",
    "FullName": "ThoreCashTRX (TCHTRX)"
  },
  {
    "Symbol": "UAT",
    "CoinName": "UltrAlpha",
    "FullName": "UltrAlpha (UAT)"
  },
  {
    "Symbol": "UENC",
    "CoinName": "UniversalEnergyChain",
    "FullName": "UniversalEnergyChain (UENC)"
  },
  {
    "Symbol": "ULTRA",
    "CoinName": "Ultra",
    "FullName": "Ultra (ULTRA)"
  },
  {
    "Symbol": "URAC",
    "CoinName": "Uranus",
    "FullName": "Uranus (URAC)"
  },
  {
    "Symbol": "USDSB",
    "CoinName": "USDSB",
    "FullName": "USDSB (USDSB)"
  },
  {
    "Symbol": "VINCI",
    "CoinName": "VINCI",
    "FullName": "VINCI (VINCI)"
  },
  {
    "Symbol": "WLO",
    "CoinName": "WOLLO",
    "FullName": "WOLLO (WLO)"
  },
  {
    "Symbol": "XENO",
    "CoinName": "Xenoverse",
    "FullName": "Xenoverse (XENO)"
  },
  {
    "Symbol": "XND",
    "CoinName": "ndau",
    "FullName": "ndau (XND)"
  },
  {
    "Symbol": "XSR",
    "CoinName": "Xensor",
    "FullName": "Xensor (XSR)"
  },
  {
    "Symbol": "ZAIF",
    "CoinName": "Zaif Token",
    "FullName": "Zaif Token (ZAIF)"
  },
  {
    "Symbol": "ETM",
    "CoinName": "En-Tan-Mo",
    "FullName": "En-Tan-Mo (ETM)"
  },
  {
    "Symbol": "AMIO",
    "CoinName": "Amino Network",
    "FullName": "Amino Network (AMIO)"
  },
  {
    "Symbol": "FAB",
    "CoinName": "FABRK Token",
    "FullName": "FABRK Token (FAB)"
  },
  {
    "Symbol": "VD",
    "CoinName": "VinDax Coin",
    "FullName": "VinDax Coin (VD)"
  },
  {
    "Symbol": "NYE",
    "CoinName": "NewYork Exchange",
    "FullName": "NewYork Exchange (NYE)"
  },
  {
    "Symbol": "LTK",
    "CoinName": "LinkToken",
    "FullName": "LinkToken (LTK)"
  },
  {
    "Symbol": "STREAM",
    "CoinName": "STREAMIT COIN",
    "FullName": "STREAMIT COIN (STREAM)"
  },
  {
    "Symbol": "BPRO",
    "CoinName": "BitCloud Pro",
    "FullName": "BitCloud Pro (BPRO)"
  },
  {
    "Symbol": "TOL",
    "CoinName": "Tolar",
    "FullName": "Tolar (TOL)"
  },
  {
    "Symbol": "CVCC",
    "CoinName": "CryptoVerificationCoin",
    "FullName": "CryptoVerificationCoin (CVCC)"
  },
  {
    "Symbol": "EVT",
    "CoinName": "EveriToken",
    "FullName": "EveriToken (EVT)"
  },
  {
    "Symbol": "NTBC",
    "CoinName": "Note Blockchain",
    "FullName": "Note Blockchain (NTBC)"
  },
  {
    "Symbol": "MEX",
    "CoinName": "MEX",
    "FullName": "MEX (MEX)"
  },
  {
    "Symbol": "ATN",
    "CoinName": "ATN",
    "FullName": "ATN (ATN)"
  },
  {
    "Symbol": "NASH",
    "CoinName": "NeoWorld Cash",
    "FullName": "NeoWorld Cash (NASH)"
  },
  {
    "Symbol": "CUST",
    "CoinName": "Custody Token",
    "FullName": "Custody Token (CUST)"
  },
  {
    "Symbol": "QCH",
    "CoinName": "QChi",
    "FullName": "QChi (QCH)"
  },
  {
    "Symbol": "FO",
    "CoinName": "FIBOS",
    "FullName": "FIBOS (FO)"
  },
  {
    "Symbol": "SON",
    "CoinName": "Simone",
    "FullName": "Simone (SON)"
  },
  {
    "Symbol": "BKBT",
    "CoinName": "BeeKan",
    "FullName": "BeeKan (BKBT)"
  },
  {
    "Symbol": "BQT",
    "CoinName": "Blockchain Quotations Index Token",
    "FullName": "Blockchain Quotations Index Token (BQT)"
  },
  {
    "Symbol": "BLOCM",
    "CoinName": "BLOC.MONEY",
    "FullName": "BLOC.MONEY (BLOCM)"
  },
  {
    "Symbol": "WSD",
    "CoinName": "White Standard",
    "FullName": "White Standard (WSD)"
  },
  {
    "Symbol": "SDS",
    "CoinName": "Alchemint Standards",
    "FullName": "Alchemint Standards (SDS)"
  },
  {
    "Symbol": "ZT",
    "CoinName": "ZTCoin",
    "FullName": "ZTCoin (ZT)"
  },
  {
    "Symbol": "GOM",
    "CoinName": "Gomics",
    "FullName": "Gomics (GOM)"
  },
  {
    "Symbol": "BAND",
    "CoinName": "Band Protocol",
    "FullName": "Band Protocol (BAND)"
  },
  {
    "Symbol": "OF",
    "CoinName": "OFCOIN",
    "FullName": "OFCOIN (OF)"
  },
  {
    "Symbol": "FLETA",
    "CoinName": "FLETA",
    "FullName": "FLETA (FLETA)"
  },
  {
    "Symbol": "CBM",
    "CoinName": "CryptoBonusMiles",
    "FullName": "CryptoBonusMiles (CBM)"
  },
  {
    "Symbol": "EMRX",
    "CoinName": "Emirex Token",
    "FullName": "Emirex Token (EMRX)"
  },
  {
    "Symbol": "HBAR",
    "CoinName": "Hedera Hashgraph",
    "FullName": "Hedera Hashgraph (HBAR)"
  },
  {
    "Symbol": "IZI",
    "CoinName": "IZIChain",
    "FullName": "IZIChain (IZI)"
  },
  {
    "Symbol": "UC",
    "CoinName": "YouLive Coin",
    "FullName": "YouLive Coin (UC)"
  },
  {
    "Symbol": "TOSC",
    "CoinName": "T.OS",
    "FullName": "T.OS (TOSC)"
  },
  {
    "Symbol": "OVC",
    "CoinName": "OVCODE",
    "FullName": "OVCODE (OVC)"
  },
  {
    "Symbol": "BUSD",
    "CoinName": "BUSD",
    "FullName": "BUSD (BUSD)"
  },
  {
    "Symbol": "WIKEN",
    "CoinName": "WITH",
    "FullName": "WITH (WIKEN)"
  },
  {
    "Symbol": "MCC",
    "CoinName": "Magic Cube Coin",
    "FullName": "Magic Cube Coin (MCC)"
  },
  {
    "Symbol": "HVNT",
    "CoinName": "HiveNet Token",
    "FullName": "HiveNet Token (HVNT)"
  },
  {
    "Symbol": "PAXG",
    "CoinName": "PAX Gold",
    "FullName": "PAX Gold (PAXG)"
  },
  {
    "Symbol": "MEXC",
    "CoinName": "MEXC Token",
    "FullName": "MEXC Token (MEXC)"
  },
  {
    "Symbol": "NSS",
    "CoinName": "NSS Coin",
    "FullName": "NSS Coin (NSS)"
  },
  {
    "Symbol": "TRP",
    "CoinName": "Tronipay",
    "FullName": "Tronipay (TRP)"
  },
  {
    "Symbol": "MB",
    "CoinName": "MineBee",
    "FullName": "MineBee (MB)"
  },
  {
    "Symbol": "CENT",
    "CoinName": "CENTERCOIN",
    "FullName": "CENTERCOIN (CENT)"
  },
  {
    "Symbol": "MB8",
    "CoinName": "MB8 Coin",
    "FullName": "MB8 Coin (MB8)"
  },
  {
    "Symbol": "HSN",
    "CoinName": "Hyper Speed Network",
    "FullName": "Hyper Speed Network (HSN)"
  },
  {
    "Symbol": "ZUM",
    "CoinName": "ZumCoin",
    "FullName": "ZumCoin (ZUM)"
  },
  {
    "Symbol": "PIPL",
    "CoinName": "PiplCoin",
    "FullName": "PiplCoin (PIPL)"
  },
  {
    "Symbol": "BNANA",
    "CoinName": "Chimpion",
    "FullName": "Chimpion (BNANA)"
  },
  {
    "Symbol": "VNDC",
    "CoinName": "VNDC",
    "FullName": "VNDC (VNDC)"
  },
  {
    "Symbol": "MX",
    "CoinName": "MX Token",
    "FullName": "MX Token (MX)"
  },
  {
    "Symbol": "GAPS",
    "CoinName": "Gaps Chain",
    "FullName": "Gaps Chain (GAPS)"
  },
  {
    "Symbol": "DDAM",
    "CoinName": "DDAM",
    "FullName": "DDAM (DDAM)"
  },
  {
    "Symbol": "PLAC",
    "CoinName": "PLANET",
    "FullName": "PLANET (PLAC)"
  },
  {
    "Symbol": "MOGU",
    "CoinName": "Mogu",
    "FullName": "Mogu (MOGU)"
  },
  {
    "Symbol": "CXCELL",
    "CoinName": "CAPITAL X CELL",
    "FullName": "CAPITAL X CELL (CXCELL)"
  },
  {
    "Symbol": "BGONE",
    "CoinName": "BigONE Token",
    "FullName": "BigONE Token (BGONE)"
  },
  {
    "Symbol": "DEQ",
    "CoinName": "Dequant",
    "FullName": "Dequant (DEQ)"
  },
  {
    "Symbol": "BCB",
    "CoinName": "BCB Blockchain",
    "FullName": "BCB Blockchain (BCB)"
  },
  {
    "Symbol": "LBK",
    "CoinName": "LBK",
    "FullName": "LBK (LBK)"
  },
  {
    "Symbol": "GSTT",
    "CoinName": "GSTT",
    "FullName": "GSTT (GSTT)"
  },
  {
    "Symbol": "ME",
    "CoinName": "All.me",
    "FullName": "All.me (ME)"
  },
  {
    "Symbol": "DMS",
    "CoinName": "Documentchain",
    "FullName": "Documentchain (DMS)"
  },
  {
    "Symbol": "SCTK",
    "CoinName": "SharesChain",
    "FullName": "SharesChain (SCTK)"
  },
  {
    "Symbol": "RON",
    "CoinName": "RON",
    "FullName": "RON (RON)"
  },
  {
    "Symbol": "SINX",
    "CoinName": "SINX Token",
    "FullName": "SINX Token (SINX)"
  },
  {
    "Symbol": "HAZ",
    "CoinName": "Hazza",
    "FullName": "Hazza (HAZ)"
  },
  {
    "Symbol": "AIPE",
    "CoinName": "AI Prediction Ecosystem",
    "FullName": "AI Prediction Ecosystem (AIPE)"
  },
  {
    "Symbol": "MISS",
    "CoinName": "MISS",
    "FullName": "MISS (MISS)"
  },
  {
    "Symbol": "DKKT",
    "CoinName": "DKK Token",
    "FullName": "DKK Token (DKKT)"
  },
  {
    "Symbol": "BTY",
    "CoinName": "Bityuan",
    "FullName": "Bityuan (BTY)"
  },
  {
    "Symbol": "CSAC",
    "CoinName": "Credit Safe Application Chain",
    "FullName": "Credit Safe Application Chain (CSAC)"
  },
  {
    "Symbol": "TEM",
    "CoinName": "Temtum",
    "FullName": "Temtum (TEM)"
  },
  {
    "Symbol": "BSTX",
    "CoinName": "Blockstack",
    "FullName": "Blockstack (BSTX)"
  },
  {
    "Symbol": "KAVA",
    "CoinName": "Kava",
    "FullName": "Kava (KAVA)"
  },
  {
    "Symbol": "DMC",
    "CoinName": "Dream21",
    "FullName": "Dream21 (DMC)"
  },
  {
    "Symbol": "CKB",
    "CoinName": "Nervos Network",
    "FullName": "Nervos Network (CKB)"
  },
  {
    "Symbol": "KISC",
    "CoinName": "Kaiser",
    "FullName": "Kaiser (KISC)"
  },
  {
    "Symbol": "VBT",
    "CoinName": "VB Token",
    "FullName": "VB Token (VBT)"
  },
  {
    "Symbol": "G50",
    "CoinName": "G50",
    "FullName": "G50 (G50)"
  },
  {
    "Symbol": "SEOS",
    "CoinName": "Smart Eye Operating System",
    "FullName": "Smart Eye Operating System (SEOS)"
  },
  {
    "Symbol": "ODC",
    "CoinName": "Overseas Direct Certification",
    "FullName": "Overseas Direct Certification (ODC)"
  },
  {
    "Symbol": "GALT",
    "CoinName": "Galtcoin",
    "FullName": "Galtcoin (GALT)"
  },
  {
    "Symbol": "LTBTC",
    "CoinName": "Lightning Bitcoin",
    "FullName": "Lightning Bitcoin (LTBTC)"
  },
  {
    "Symbol": "TENA",
    "CoinName": "Tena",
    "FullName": "Tena (TENA)"
  },
  {
    "Symbol": "XDGB",
    "CoinName": "DigitalBits",
    "FullName": "DigitalBits (XDGB)"
  },
  {
    "Symbol": "SPLA",
    "CoinName": "SmartPlay",
    "FullName": "SmartPlay (SPLA)"
  },
  {
    "Symbol": "UNICORN",
    "CoinName": "UNICORN Token",
    "FullName": "UNICORN Token (UNICORN)"
  },
  {
    "Symbol": "EONC",
    "CoinName": "Dimension",
    "FullName": "Dimension (EONC)"
  },
  {
    "Symbol": "PRCM",
    "CoinName": "Precium",
    "FullName": "Precium (PRCM)"
  },
  {
    "Symbol": "BFCH",
    "CoinName": "Big Fun Chain",
    "FullName": "Big Fun Chain (BFCH)"
  },
  {
    "Symbol": "LIGHT",
    "CoinName": "LightChain",
    "FullName": "LightChain (LIGHT)"
  },
  {
    "Symbol": "TRDS",
    "CoinName": "Traders Token",
    "FullName": "Traders Token (TRDS)"
  },
  {
    "Symbol": "ETHPLO",
    "CoinName": "ETHplode",
    "FullName": "ETHplode (ETHPLO)"
  },
  {
    "Symbol": "YAP",
    "CoinName": "Yap Stone",
    "FullName": "Yap Stone (YAP)"
  },
  {
    "Symbol": "LKU",
    "CoinName": "Lukiu",
    "FullName": "Lukiu (LKU)"
  },
  {
    "Symbol": "SUTER",
    "CoinName": "Suterusu",
    "FullName": "Suterusu (SUTER)"
  },
  {
    "Symbol": "FMCT",
    "CoinName": "FirmaChain",
    "FullName": "FirmaChain (FMCT)"
  },
  {
    "Symbol": "NODE",
    "CoinName": "Whole Network",
    "FullName": "Whole Network (NODE)"
  },
  {
    "Symbol": "LINKA",
    "CoinName": "LINKA",
    "FullName": "LINKA (LINKA)"
  },
  {
    "Symbol": "ZVC",
    "CoinName": "ZVCHAIN",
    "FullName": "ZVCHAIN (ZVC)"
  },
  {
    "Symbol": "OROX",
    "CoinName": "Cointorox",
    "FullName": "Cointorox (OROX)"
  },
  {
    "Symbol": "ACU",
    "CoinName": "Aitheon",
    "FullName": "Aitheon (ACU)"
  },
  {
    "Symbol": "OLXA",
    "CoinName": "OLXA",
    "FullName": "OLXA (OLXA)"
  },
  {
    "Symbol": "WIX",
    "CoinName": "Wixlar",
    "FullName": "Wixlar (WIX)"
  },
  {
    "Symbol": "YO",
    "CoinName": "Yobit Token",
    "FullName": "Yobit Token (YO)"
  },
  {
    "Symbol": "BRZE",
    "CoinName": "Breezecoin",
    "FullName": "Breezecoin (BRZE)"
  },
  {
    "Symbol": "BCZERO",
    "CoinName": "Buggyra Coin Zero",
    "FullName": "Buggyra Coin Zero (BCZERO)"
  },
  {
    "Symbol": "ECOREAL",
    "CoinName": "Ecoreal Estate",
    "FullName": "Ecoreal Estate (ECOREAL)"
  },
  {
    "Symbol": "S4F",
    "CoinName": "S4FE",
    "FullName": "S4FE (S4F)"
  },
  {
    "Symbol": "BIPX",
    "CoinName": "Bispex",
    "FullName": "Bispex (BIPX)"
  },
  {
    "Symbol": "VELAS",
    "CoinName": "Velas",
    "FullName": "Velas (VELAS)"
  },
  {
    "Symbol": "BOK",
    "CoinName": "Blockium",
    "FullName": "Blockium (BOK)"
  },
  {
    "Symbol": "TEP",
    "CoinName": "Tepleton",
    "FullName": "Tepleton (TEP)"
  },
  {
    "Symbol": "TSR",
    "CoinName": "Tesra",
    "FullName": "Tesra (TSR)"
  },
  {
    "Symbol": "RUNE",
    "CoinName": "Thorchain",
    "FullName": "Thorchain (RUNE)"
  },
  {
    "Symbol": "HNB",
    "CoinName": "HashNet BitEco",
    "FullName": "HashNet BitEco (HNB)"
  },
  {
    "Symbol": "DILI",
    "CoinName": "D Community",
    "FullName": "D Community (DILI)"
  },
  {
    "Symbol": "CAI",
    "CoinName": "Cai Token",
    "FullName": "Cai Token (CAI)"
  },
  {
    "Symbol": "FLG",
    "CoinName": "Folgory Coin",
    "FullName": "Folgory Coin (FLG)"
  },
  {
    "Symbol": "MCH",
    "CoinName": "Meconcash",
    "FullName": "Meconcash (MCH)"
  },
  {
    "Symbol": "7E",
    "CoinName": "7ELEVEN",
    "FullName": "7ELEVEN (7E)"
  },
  {
    "Symbol": "XTX",
    "CoinName": "Xtock",
    "FullName": "Xtock (XTX)"
  },
  {
    "Symbol": "LOBS",
    "CoinName": "Lobstex",
    "FullName": "Lobstex (LOBS)"
  },
  {
    "Symbol": "BUX",
    "CoinName": "Buxcoin",
    "FullName": "Buxcoin (BUX)"
  },
  {
    "Symbol": "MGX",
    "CoinName": "MargiX",
    "FullName": "MargiX (MGX)"
  },
  {
    "Symbol": "DAD",
    "CoinName": "DAD",
    "FullName": "DAD (DAD)"
  },
  {
    "Symbol": "EUM",
    "CoinName": "Elitium",
    "FullName": "Elitium (EUM)"
  },
  {
    "Symbol": "SOVE",
    "CoinName": "Soverain",
    "FullName": "Soverain (SOVE)"
  },
  {
    "Symbol": "BCS",
    "CoinName": "Business Credit Substitute",
    "FullName": "Business Credit Substitute (BCS)"
  },
  {
    "Symbol": "THP",
    "CoinName": "TurboHigh Performance",
    "FullName": "TurboHigh Performance (THP)"
  },
  {
    "Symbol": "TKC",
    "CoinName": "TurkeyChain",
    "FullName": "TurkeyChain (TKC)"
  },
  {
    "Symbol": "LT",
    "CoinName": "Loctite Assets Token",
    "FullName": "Loctite Assets Token (LT)"
  },
  {
    "Symbol": "MSN",
    "CoinName": "Manson Coin",
    "FullName": "Manson Coin (MSN)"
  },
  {
    "Symbol": "W1",
    "CoinName": "W1",
    "FullName": "W1 (W1)"
  },
  {
    "Symbol": "OFBC",
    "CoinName": "OneFinBank Coin",
    "FullName": "OneFinBank Coin (OFBC)"
  },
  {
    "Symbol": "CB",
    "CoinName": "COINBIG",
    "FullName": "COINBIG (CB)"
  },
  {
    "Symbol": "TD",
    "CoinName": "Trade Chain",
    "FullName": "Trade Chain (TD)"
  },
  {
    "Symbol": "DRINK",
    "CoinName": "DrinkChain",
    "FullName": "DrinkChain (DRINK)"
  },
  {
    "Symbol": "SNL",
    "CoinName": "Sport and Leisure",
    "FullName": "Sport and Leisure (SNL)"
  },
  {
    "Symbol": "EOSC",
    "CoinName": "EOSForce",
    "FullName": "EOSForce (EOSC)"
  },
  {
    "Symbol": "GLOS",
    "CoinName": "GLOS",
    "FullName": "GLOS (GLOS)"
  },
  {
    "Symbol": "SEA",
    "CoinName": "Second Exchange Alliance",
    "FullName": "Second Exchange Alliance (SEA)"
  },
  {
    "Symbol": "CBE",
    "CoinName": "The Chain of Business Entertainment",
    "FullName": "The Chain of Business Entertainment (CBE)"
  },
  {
    "Symbol": "KLAY",
    "CoinName": "Klaytn",
    "FullName": "Klaytn (KLAY)"
  },
  {
    "Symbol": "DZCC",
    "CoinName": "DZCC",
    "FullName": "DZCC (DZCC)"
  },
  {
    "Symbol": "TRCB",
    "CoinName": "TRCB Chain",
    "FullName": "TRCB Chain (TRCB)"
  },
  {
    "Symbol": "TROY",
    "CoinName": "Troy",
    "FullName": "Troy (TROY)"
  },
  {
    "Symbol": "MPL",
    "CoinName": "M+Plus",
    "FullName": "M+Plus (MPL)"
  },
  {
    "Symbol": "UIN",
    "CoinName": "Alliance Chain",
    "FullName": "Alliance Chain (UIN)"
  },
  {
    "Symbol": "XFC",
    "CoinName": "Football Coin",
    "FullName": "Football Coin (XFC)"
  },
  {
    "Symbol": "WOW",
    "CoinName": "Wownero",
    "FullName": "Wownero (WOW)"
  },
  {
    "Symbol": "USD-N",
    "CoinName": "Neutrino",
    "FullName": "Neutrino (USD-N)"
  },
  {
    "Symbol": "ROAD",
    "CoinName": "ROAD",
    "FullName": "ROAD (ROAD)"
  },
  {
    "Symbol": "BRZ",
    "CoinName": "Brazilian Digital Token",
    "FullName": "Brazilian Digital Token (BRZ)"
  },
  {
    "Symbol": "GKI",
    "CoinName": "GKi",
    "FullName": "GKi (GKI)"
  },
  {
    "Symbol": "FBN",
    "CoinName": "Five balance",
    "FullName": "Five balance (FBN)"
  },
  {
    "Symbol": "EVY",
    "CoinName": "EveryCoin",
    "FullName": "EveryCoin (EVY)"
  },
  {
    "Symbol": "PTN",
    "CoinName": "PalletOneToken",
    "FullName": "PalletOneToken (PTN)"
  },
  {
    "Symbol": "KSM",
    "CoinName": "Kusama",
    "FullName": "Kusama (KSM)"
  },
  {
    "Symbol": "TDE",
    "CoinName": "Trade Ecology Token",
    "FullName": "Trade Ecology Token (TDE)"
  },
  {
    "Symbol": "ECP",
    "CoinName": "ECP+ Technology",
    "FullName": "ECP+ Technology (ECP)"
  },
  {
    "Symbol": "XBG",
    "CoinName": "BitGrin",
    "FullName": "BitGrin (XBG)"
  },
  {
    "Symbol": "PP",
    "CoinName": "ProducePay Chain",
    "FullName": "ProducePay Chain (PP)"
  },
  {
    "Symbol": "CNTM",
    "CoinName": "Connectome",
    "FullName": "Connectome (CNTM)"
  },
  {
    "Symbol": "MINTME",
    "CoinName": "MintMe.com Coin",
    "FullName": "MintMe.com Coin (MINTME)"
  },
  {
    "Symbol": "SCAP",
    "CoinName": "SafeCapital",
    "FullName": "SafeCapital (SCAP)"
  },
  {
    "Symbol": "FN",
    "CoinName": "Filenet",
    "FullName": "Filenet (FN)"
  },
  {
    "Symbol": "DYNMT",
    "CoinName": "Dynamite",
    "FullName": "Dynamite (DYNMT)"
  },
  {
    "Symbol": "MDM",
    "CoinName": "Medium",
    "FullName": "Medium (MDM)"
  },
  {
    "Symbol": "CCA",
    "CoinName": "Counos Coin",
    "FullName": "Counos Coin (CCA)"
  },
  {
    "Symbol": "DFP",
    "CoinName": "Digital Fund Coin",
    "FullName": "Digital Fund Coin (DFP)"
  },
  {
    "Symbol": "QTCON",
    "CoinName": "Quiztok",
    "FullName": "Quiztok (QTCON)"
  },
  {
    "Symbol": "GTSE",
    "CoinName": "Global Tourism Sharing Ecology",
    "FullName": "Global Tourism Sharing Ecology (GTSE)"
  },
  {
    "Symbol": "API",
    "CoinName": "Application Programming Interface",
    "FullName": "Application Programming Interface (API)"
  },
  {
    "Symbol": "RES",
    "CoinName": "Resistance",
    "FullName": "Resistance (RES)"
  },
  {
    "Symbol": "AMAL",
    "CoinName": "AMAL",
    "FullName": "AMAL (AMAL)"
  },
  {
    "Symbol": "BIUT",
    "CoinName": "Bit Trust System",
    "FullName": "Bit Trust System (BIUT)"
  },
  {
    "Symbol": "MLGC",
    "CoinName": "Marshal Lion Group Coin",
    "FullName": "Marshal Lion Group Coin (MLGC)"
  },
  {
    "Symbol": "PSC",
    "CoinName": "PSC Token",
    "FullName": "PSC Token (PSC)"
  },
  {
    "Symbol": "XDC",
    "CoinName": "Xinfin Network",
    "FullName": "Xinfin Network (XDC)"
  },
  {
    "Symbol": "ALN",
    "CoinName": "Aluna",
    "FullName": "Aluna (ALN)"
  },
  {
    "Symbol": "DMTC",
    "CoinName": "Demeter Chain",
    "FullName": "Demeter Chain (DMTC)"
  },
  {
    "Symbol": "TFB",
    "CoinName": "Truefeedback Token",
    "FullName": "Truefeedback Token (TFB)"
  },
  {
    "Symbol": "DAMO",
    "CoinName": "Coinzen",
    "FullName": "Coinzen (DAMO)"
  },
  {
    "Symbol": "XSPC",
    "CoinName": "SpectreSecurityCoin",
    "FullName": "SpectreSecurityCoin (XSPC)"
  },
  {
    "Symbol": "OXT",
    "CoinName": "Orchid Protocol",
    "FullName": "Orchid Protocol (OXT)"
  },
  {
    "Symbol": "USDG",
    "CoinName": "USDG",
    "FullName": "USDG (USDG)"
  },
  {
    "Symbol": "MAP",
    "CoinName": "Marcopolo",
    "FullName": "Marcopolo (MAP)"
  },
  {
    "Symbol": "LVIP",
    "CoinName": "Limitless VIP",
    "FullName": "Limitless VIP (LVIP)"
  },
  {
    "Symbol": "BOA",
    "CoinName": "BOSAGORA",
    "FullName": "BOSAGORA (BOA)"
  },
  {
    "Symbol": "PLF",
    "CoinName": "PlayFuel",
    "FullName": "PlayFuel (PLF)"
  },
  {
    "Symbol": "CHARS",
    "CoinName": "CHARS",
    "FullName": "CHARS (CHARS)"
  },
  {
    "Symbol": "TYT",
    "CoinName": "Tianya Token",
    "FullName": "Tianya Token (TYT)"
  },
  {
    "Symbol": "NVL",
    "CoinName": "Nevula",
    "FullName": "Nevula (NVL)"
  },
  {
    "Symbol": "DAI",
    "CoinName": "Multi Collateral Dai",
    "FullName": "Multi Collateral Dai (DAI)"
  },
  {
    "Symbol": "WBTC",
    "CoinName": "Wrapped Bitcoin",
    "FullName": "Wrapped Bitcoin (WBTC)"
  },
  {
    "Symbol": "FCQ",
    "CoinName": "Fortem Capital",
    "FullName": "Fortem Capital (FCQ)"
  },
  {
    "Symbol": "BTCK",
    "CoinName": "Bitcoin Turbo Koin",
    "FullName": "Bitcoin Turbo Koin (BTCK)"
  },
  {
    "Symbol": "DAVP",
    "CoinName": "Davion",
    "FullName": "Davion (DAVP)"
  },
  {
    "Symbol": "XTPL",
    "CoinName": "TrustPlus",
    "FullName": "TrustPlus (XTPL)"
  },
  {
    "Symbol": "WABI",
    "CoinName": "Tael",
    "FullName": "Tael (WABI)"
  },
  {
    "Symbol": "ZYN",
    "CoinName": "Zynecoin",
    "FullName": "Zynecoin (ZYN)"
  },
  {
    "Symbol": "CUSDC",
    "CoinName": "Compound USD Coin",
    "FullName": "Compound USD Coin (CUSDC)"
  },
  {
    "Symbol": "CSAI",
    "CoinName": "Compound SAI",
    "FullName": "Compound SAI (CSAI)"
  },
  {
    "Symbol": "CWBTC",
    "CoinName": "Compound Wrapped BTC",
    "FullName": "Compound Wrapped BTC (CWBTC)"
  },
  {
    "Symbol": "OGN",
    "CoinName": "Origin Protocol",
    "FullName": "Origin Protocol (OGN)"
  },
  {
    "Symbol": "TLOS",
    "CoinName": "Telos",
    "FullName": "Telos (TLOS)"
  },
  {
    "Symbol": "HNC",
    "CoinName": "Hellenic Coin",
    "FullName": "Hellenic Coin (HNC)"
  },
  {
    "Symbol": "BEPRO",
    "CoinName": "BetProtocol",
    "FullName": "BetProtocol (BEPRO)"
  },
  {
    "Symbol": "BTW",
    "CoinName": "BitWhite",
    "FullName": "BitWhite (BTW)"
  },
  {
    "Symbol": "FOTA",
    "CoinName": "Fortuna",
    "FullName": "Fortuna (FOTA)"
  },
  {
    "Symbol": "DDD",
    "CoinName": "Scry.info",
    "FullName": "Scry.info (DDD)"
  },
  {
    "Symbol": "CRDTS",
    "CoinName": "Credits",
    "FullName": "Credits (CRDTS)"
  },
  {
    "Symbol": "MOAC",
    "CoinName": "MOAC",
    "FullName": "MOAC (MOAC)"
  },
  {
    "Symbol": "CETH",
    "CoinName": "Compound Ethereum",
    "FullName": "Compound Ethereum (CETH)"
  },
  {
    "Symbol": "CZRX",
    "CoinName": "Compound 0x",
    "FullName": "Compound 0x (CZRX)"
  },
  {
    "Symbol": "CBAT",
    "CoinName": "Compound Basic Attention Token",
    "FullName": "Compound Basic Attention Token (CBAT)"
  },
  {
    "Symbol": "CDAI",
    "CoinName": "Compound Dai",
    "FullName": "Compound Dai (CDAI)"
  },
  {
    "Symbol": "CREP",
    "CoinName": "Compound Augur",
    "FullName": "Compound Augur (CREP)"
  },
  {
    "Symbol": "EXMR",
    "CoinName": "EXMR FDN",
    "FullName": "EXMR FDN (EXMR)"
  },
  {
    "Symbol": "SXDT",
    "CoinName": "SPECTRE Dividend Token",
    "FullName": "SPECTRE Dividend Token (SXDT)"
  },
  {
    "Symbol": "SXUT",
    "CoinName": "SPECTRE Utility Token",
    "FullName": "SPECTRE Utility Token (SXUT)"
  },
  {
    "Symbol": "LDC",
    "CoinName": "LeadCoin",
    "FullName": "LeadCoin (LDC)"
  },
  {
    "Symbol": "NSR",
    "CoinName": "NuShares",
    "FullName": "NuShares (NSR)"
  },
  {
    "Symbol": "RUFF",
    "CoinName": "Ruff",
    "FullName": "Ruff (RUFF)"
  },
  {
    "Symbol": "RCT",
    "CoinName": "RealChain",
    "FullName": "RealChain (RCT)"
  },
  {
    "Symbol": "XTP",
    "CoinName": "Tap",
    "FullName": "Tap (XTP)"
  },
  {
    "Symbol": "TRB",
    "CoinName": "Tellor",
    "FullName": "Tellor (TRB)"
  },
  {
    "Symbol": "LHC",
    "CoinName": "LHCoin",
    "FullName": "LHCoin (LHC)"
  },
  {
    "Symbol": "XDP",
    "CoinName": "DogeParty",
    "FullName": "DogeParty (XDP)"
  },
  {
    "Symbol": "USX",
    "CoinName": "Unified Society USDEX",
    "FullName": "Unified Society USDEX (USX)"
  },
  {
    "Symbol": "EVC",
    "CoinName": "Eventchain",
    "FullName": "Eventchain (EVC)"
  },
  {
    "Symbol": "HT",
    "CoinName": "Huobi Token",
    "FullName": "Huobi Token (HT)"
  },
  {
    "Symbol": "CRW",
    "CoinName": "Crown Coin",
    "FullName": "Crown Coin (CRW)"
  },
  {
    "Symbol": "GEN",
    "CoinName": "Genstake",
    "FullName": "Genstake (GEN)"
  },
  {
    "Symbol": "MNV",
    "CoinName": "MonetaVerde",
    "FullName": "MonetaVerde (MNV)"
  },
  {
    "Symbol": "BTA",
    "CoinName": "Bata",
    "FullName": "Bata (BTA)"
  },
  {
    "Symbol": "EXM",
    "CoinName": "EXMO Coin",
    "FullName": "EXMO Coin (EXM)"
  },
  {
    "Symbol": "BUY",
    "CoinName": "Buying.com",
    "FullName": "Buying.com (BUY)"
  },
  {
    "Symbol": "YACHTCO",
    "CoinName": "Yachtco",
    "FullName": "Yachtco (YACHTCO)"
  },
  {
    "Symbol": "CRU",
    "CoinName": "Curium",
    "FullName": "Curium (CRU)"
  },
  {
    "Symbol": "QKC",
    "CoinName": "QuarkChain",
    "FullName": "QuarkChain (QKC)"
  },
  {
    "Symbol": "UBQ",
    "CoinName": "Ubiq",
    "FullName": "Ubiq (UBQ)"
  },
  {
    "Symbol": "XCP",
    "CoinName": "CounterParty",
    "FullName": "CounterParty (XCP)"
  },
  {
    "Symbol": "MAN",
    "CoinName": "People",
    "FullName": "People (MAN)"
  },
  {
    "Symbol": "ELA",
    "CoinName": "Elastos",
    "FullName": "Elastos (ELA)"
  },
  {
    "Symbol": "SHIFT",
    "CoinName": "Shift",
    "FullName": "Shift (SHIFT)"
  },
  {
    "Symbol": "DGB",
    "CoinName": "DigiByte",
    "FullName": "DigiByte (DGB)"
  },
  {
    "Symbol": "VET",
    "CoinName": "VeChain",
    "FullName": "VeChain (VET)"
  },
  {
    "Symbol": "SVD",
    "CoinName": "savedroid",
    "FullName": "savedroid (SVD)"
  },
  {
    "Symbol": "VEN",
    "CoinName": "VeChain Old",
    "FullName": "VeChain Old (VEN)"
  },
  {
    "Symbol": "RFR",
    "CoinName": "Refereum",
    "FullName": "Refereum (RFR)"
  },
  {
    "Symbol": "XYO",
    "CoinName": "XY Oracle",
    "FullName": "XY Oracle (XYO)"
  },
  {
    "Symbol": "CEDEX",
    "CoinName": "CEDEX Coin",
    "FullName": "CEDEX Coin (CEDEX)"
  },
  {
    "Symbol": "CUT",
    "CoinName": "CUTcoin",
    "FullName": "CUTcoin (CUT)"
  },
  {
    "Symbol": "PYN",
    "CoinName": "Paycent",
    "FullName": "Paycent (PYN)"
  },
  {
    "Symbol": "BSOV",
    "CoinName": "BitcoinSoV",
    "FullName": "BitcoinSoV (BSOV)"
  },
  {
    "Symbol": "DGLD",
    "CoinName": "Digital Gold",
    "FullName": "Digital Gold (DGLD)"
  },
  {
    "Symbol": "PIZZA",
    "CoinName": "PizzaCoin",
    "FullName": "PizzaCoin (PIZZA)"
  },
  {
    "Symbol": "WARP",
    "CoinName": "WarpCoin",
    "FullName": "WarpCoin (WARP)"
  },
  {
    "Symbol": "MUDRA",
    "CoinName": "MudraCoin",
    "FullName": "MudraCoin (MUDRA)"
  },
  {
    "Symbol": "STCN",
    "CoinName": "Stakecoin",
    "FullName": "Stakecoin (STCN)"
  },
  {
    "Symbol": "ELI",
    "CoinName": "GoCrypto",
    "FullName": "GoCrypto (ELI)"
  },
  {
    "Symbol": "FRAZ",
    "CoinName": "FrazCoin",
    "FullName": "FrazCoin (FRAZ)"
  },
  {
    "Symbol": "LINX",
    "CoinName": "Linx",
    "FullName": "Linx (LINX)"
  },
  {
    "Symbol": "XCXT",
    "CoinName": "CoinonatX",
    "FullName": "CoinonatX (XCXT)"
  },
  {
    "Symbol": "BRK",
    "CoinName": "BreakoutCoin",
    "FullName": "BreakoutCoin (BRK)"
  },
  {
    "Symbol": "RUSTBITS",
    "CoinName": "Rustbits",
    "FullName": "Rustbits (RUSTBITS)"
  },
  {
    "Symbol": "SUMO",
    "CoinName": "Sumokoin",
    "FullName": "Sumokoin (SUMO)"
  },
  {
    "Symbol": "OMNI",
    "CoinName": "Omni",
    "FullName": "Omni (OMNI)"
  },
  {
    "Symbol": "ADS",
    "CoinName": "Adshares",
    "FullName": "Adshares (ADS)"
  },
  {
    "Symbol": "CBFT",
    "CoinName": "CoinBene Future Token",
    "FullName": "CoinBene Future Token (CBFT)"
  },
  {
    "Symbol": "GRIN",
    "CoinName": "Grin",
    "FullName": "Grin (GRIN)"
  },
  {
    "Symbol": "RISE",
    "CoinName": "Rise",
    "FullName": "Rise (RISE)"
  },
  {
    "Symbol": "XWC",
    "CoinName": "WhiteCoin",
    "FullName": "WhiteCoin (XWC)"
  },
  {
    "Symbol": "ACT",
    "CoinName": "ACT",
    "FullName": "ACT (ACT)"
  },
  {
    "Symbol": "BCN",
    "CoinName": "ByteCoin",
    "FullName": "ByteCoin (BCN)"
  },
  {
    "Symbol": "SC",
    "CoinName": "Siacoin",
    "FullName": "Siacoin (SC)"
  },
  {
    "Symbol": "XBY",
    "CoinName": "XTRABYTES",
    "FullName": "XTRABYTES (XBY)"
  },
  {
    "Symbol": "ZIL",
    "CoinName": "Zilliqa",
    "FullName": "Zilliqa (ZIL)"
  },
  {
    "Symbol": "OMG",
    "CoinName": "OmiseGo",
    "FullName": "OmiseGo (OMG)"
  },
  {
    "Symbol": "HOT",
    "CoinName": "Hydro Protocol",
    "FullName": "Hydro Protocol (HOT)"
  },
  {
    "Symbol": "CLUD",
    "CoinName": "CludCoin",
    "FullName": "CludCoin (CLUD)"
  },
  {
    "Symbol": "ODN",
    "CoinName": "Obsidian",
    "FullName": "Obsidian (ODN)"
  },
  {
    "Symbol": "HXT",
    "CoinName": "HextraCoin",
    "FullName": "HextraCoin (HXT)"
  },
  {
    "Symbol": "NTM",
    "CoinName": "NetM",
    "FullName": "NetM (NTM)"
  },
  {
    "Symbol": "ATCC",
    "CoinName": "ATC Coin",
    "FullName": "ATC Coin (ATCC)"
  },
  {
    "Symbol": "MITH",
    "CoinName": "Mithril",
    "FullName": "Mithril (MITH)"
  },
  {
    "Symbol": "XCS",
    "CoinName": "CybCSec Coin",
    "FullName": "CybCSec Coin (XCS)"
  },
  {
    "Symbol": "PHX",
    "CoinName": "Red Pulse Phoenix",
    "FullName": "Red Pulse Phoenix (PHX)"
  },
  {
    "Symbol": "PLMT",
    "CoinName": "Pallium",
    "FullName": "Pallium (PLMT)"
  },
  {
    "Symbol": "RNTB",
    "CoinName": "BitRent",
    "FullName": "BitRent (RNTB)"
  },
  {
    "Symbol": "TDZ",
    "CoinName": "Tradelize",
    "FullName": "Tradelize (TDZ)"
  },
  {
    "Symbol": "PAVO",
    "CoinName": "Pavocoin",
    "FullName": "Pavocoin (PAVO)"
  },
  {
    "Symbol": "LDN",
    "CoinName": "Lydiancoin",
    "FullName": "Lydiancoin (LDN)"
  },
  {
    "Symbol": "BUBO",
    "CoinName": "Budbo",
    "FullName": "Budbo (BUBO)"
  },
  {
    "Symbol": "USOAMIC",
    "CoinName": "USOAMIC",
    "FullName": "USOAMIC (USOAMIC)"
  },
  {
    "Symbol": "FLUZ",
    "CoinName": "FluzFluz",
    "FullName": "FluzFluz (FLUZ)"
  },
  {
    "Symbol": "IPSX",
    "CoinName": "IP Exchange",
    "FullName": "IP Exchange (IPSX)"
  },
  {
    "Symbol": "MIO",
    "CoinName": "Miner One token",
    "FullName": "Miner One token (MIO)"
  },
  {
    "Symbol": "AIC",
    "CoinName": "AI Crypto",
    "FullName": "AI Crypto (AIC)"
  },
  {
    "Symbol": "WAXP",
    "CoinName": "Worldwide Asset eXchange",
    "FullName": "Worldwide Asset eXchange (WAXP)"
  },
  {
    "Symbol": "TRUE",
    "CoinName": "True Chain",
    "FullName": "True Chain (TRUE)"
  },
  {
    "Symbol": "REE",
    "CoinName": "ReeCoin",
    "FullName": "ReeCoin (REE)"
  },
  {
    "Symbol": "WOMEN",
    "CoinName": "WomenCoin",
    "FullName": "WomenCoin (WOMEN)"
  },
  {
    "Symbol": "LION",
    "CoinName": "CoinLion",
    "FullName": "CoinLion (LION)"
  },
  {
    "Symbol": "MAY",
    "CoinName": "Theresa May Coin",
    "FullName": "Theresa May Coin (MAY)"
  },
  {
    "Symbol": "MASP",
    "CoinName": "Market.space",
    "FullName": "Market.space (MASP)"
  },
  {
    "Symbol": "XTL",
    "CoinName": "Stellite",
    "FullName": "Stellite (XTL)"
  },
  {
    "Symbol": "PIRL",
    "CoinName": "Pirl",
    "FullName": "Pirl (PIRL)"
  },
  {
    "Symbol": "UCN",
    "CoinName": "UC Coin",
    "FullName": "UC Coin (UCN)"
  },
  {
    "Symbol": "XIOS",
    "CoinName": "Xios",
    "FullName": "Xios (XIOS)"
  },
  {
    "Symbol": "HUR",
    "CoinName": "Hurify",
    "FullName": "Hurify (HUR)"
  },
  {
    "Symbol": "CMCT",
    "CoinName": "Crowd Machine",
    "FullName": "Crowd Machine (CMCT)"
  },
  {
    "Symbol": "CMTC",
    "CoinName": "CometCoin",
    "FullName": "CometCoin (CMTC)"
  },
  {
    "Symbol": "LATX",
    "CoinName": "LatiumX",
    "FullName": "LatiumX (LATX)"
  },
  {
    "Symbol": "PDC",
    "CoinName": "Project Decorum",
    "FullName": "Project Decorum (PDC)"
  },
  {
    "Symbol": "HOLD",
    "CoinName": "HOLD",
    "FullName": "HOLD (HOLD)"
  },
  {
    "Symbol": "EZT",
    "CoinName": "EZToken",
    "FullName": "EZToken (EZT)"
  },
  {
    "Symbol": "LTBX",
    "CoinName": "Litbinex Coin",
    "FullName": "Litbinex Coin (LTBX)"
  },
  {
    "Symbol": "SOL",
    "CoinName": "Sola",
    "FullName": "Sola (SOL)"
  },
  {
    "Symbol": "VIC",
    "CoinName": "Victorium",
    "FullName": "Victorium (VIC)"
  },
  {
    "Symbol": "NFN",
    "CoinName": "Nafen",
    "FullName": "Nafen (NFN)"
  },
  {
    "Symbol": "VLD",
    "CoinName": "Valid",
    "FullName": "Valid (VLD)"
  },
  {
    "Symbol": "GSI",
    "CoinName": "Globex SCI",
    "FullName": "Globex SCI (GSI)"
  },
  {
    "Symbol": "YOVI",
    "CoinName": "YobitVirtualCoin",
    "FullName": "YobitVirtualCoin (YOVI)"
  },
  {
    "Symbol": "VIP",
    "CoinName": "VIP Tokens",
    "FullName": "VIP Tokens (VIP)"
  },
  {
    "Symbol": "PBC",
    "CoinName": "PabyosiCoin",
    "FullName": "PabyosiCoin (PBC)"
  },
  {
    "Symbol": "KEK",
    "CoinName": "KekCoin",
    "FullName": "KekCoin (KEK)"
  },
  {
    "Symbol": "REV",
    "CoinName": "Revenu",
    "FullName": "Revenu (REV)"
  },
  {
    "Symbol": "FLVR",
    "CoinName": "FlavorCoin",
    "FullName": "FlavorCoin (FLVR)"
  },
  {
    "Symbol": "ALTCOM",
    "CoinName": "AltCommunity Coin",
    "FullName": "AltCommunity Coin (ALTCOM)"
  },
  {
    "Symbol": "DEUR",
    "CoinName": "DigiEuro",
    "FullName": "DigiEuro (DEUR)"
  },
  {
    "Symbol": "PURA",
    "CoinName": "Pura",
    "FullName": "Pura (PURA)"
  },
  {
    "Symbol": "ELLA",
    "CoinName": "Ellaism",
    "FullName": "Ellaism (ELLA)"
  },
  {
    "Symbol": "FLY",
    "CoinName": "FlyCoin",
    "FullName": "FlyCoin (FLY)"
  },
  {
    "Symbol": "SAFEX",
    "CoinName": "SafeExchangeCoin",
    "FullName": "SafeExchangeCoin (SAFEX)"
  },
  {
    "Symbol": "REDI",
    "CoinName": "REDi",
    "FullName": "REDi (REDi)"
  },
  {
    "Symbol": "MNX",
    "CoinName": "MinexCoin",
    "FullName": "MinexCoin (MNX)"
  },
  {
    "Symbol": "BEAR",
    "CoinName": "3X Short Bitcoin",
    "FullName": "3X Short Bitcoin (BEAR)"
  },
  {
    "Symbol": "ZEL",
    "CoinName": "Zelcash",
    "FullName": "Zelcash (ZEL)"
  },
  {
    "Symbol": "BKC",
    "CoinName": "Balkancoin",
    "FullName": "Balkancoin (BKC)"
  },
  {
    "Symbol": "BITG",
    "CoinName": "Bitcoin Green",
    "FullName": "Bitcoin Green (BITG)"
  },
  {
    "Symbol": "DEV",
    "CoinName": "Deviant Coin",
    "FullName": "Deviant Coin (DEV)"
  },
  {
    "Symbol": "CHT",
    "CoinName": "Countinghouse Fund",
    "FullName": "Countinghouse Fund (CHT)"
  },
  {
    "Symbol": "FTW",
    "CoinName": "FutureWorks",
    "FullName": "FutureWorks (FTW)"
  },
  {
    "Symbol": "ARTE",
    "CoinName": "Artemine",
    "FullName": "Artemine (ARTE)"
  },
  {
    "Symbol": "PHC",
    "CoinName": "Profit Hunters Coin",
    "FullName": "Profit Hunters Coin (PHC)"
  },
  {
    "Symbol": "ETHM",
    "CoinName": "Ethereum Meta",
    "FullName": "Ethereum Meta (ETHM)"
  },
  {
    "Symbol": "UBC",
    "CoinName": "Ubcoin",
    "FullName": "Ubcoin (UBC)"
  },
  {
    "Symbol": "SENC",
    "CoinName": "Sentinel Chain",
    "FullName": "Sentinel Chain (SENC)"
  },
  {
    "Symbol": "PAT",
    "CoinName": "PATRON",
    "FullName": "PATRON (PAT)"
  },
  {
    "Symbol": "LIGER",
    "CoinName": "Ligercoin",
    "FullName": "Ligercoin (LIGER)"
  },
  {
    "Symbol": "CHFN",
    "CoinName": "NOKU CHF",
    "FullName": "NOKU CHF (CHFN)"
  },
  {
    "Symbol": "LEU",
    "CoinName": "CryptoLEU",
    "FullName": "CryptoLEU (LEU)"
  },
  {
    "Symbol": "SWC",
    "CoinName": "Scanetchain Token",
    "FullName": "Scanetchain Token (SWC)"
  },
  {
    "Symbol": "SEM",
    "CoinName": "Semux",
    "FullName": "Semux (SEM)"
  },
  {
    "Symbol": "ROOBEE",
    "CoinName": "ROOBEE",
    "FullName": "ROOBEE (ROOBEE)"
  },
  {
    "Symbol": "BBK",
    "CoinName": "BitBlocks",
    "FullName": "BitBlocks (BBK)"
  },
  {
    "Symbol": "NCT",
    "CoinName": "PolySwarm",
    "FullName": "PolySwarm (NCT)"
  },
  {
    "Symbol": "UUU",
    "CoinName": "U Network",
    "FullName": "U Network (UUU)"
  },
  {
    "Symbol": "XHV",
    "CoinName": "Haven Protocol",
    "FullName": "Haven Protocol (XHV)"
  },
  {
    "Symbol": "EQC",
    "CoinName": "Ethereum Qchain Token",
    "FullName": "Ethereum Qchain Token (EQC)"
  },
  {
    "Symbol": "ADH",
    "CoinName": "Adhive",
    "FullName": "Adhive (ADH)"
  },
  {
    "Symbol": "XIN",
    "CoinName": "Infinity Economics",
    "FullName": "Infinity Economics (XIN)"
  },
  {
    "Symbol": "NLG",
    "CoinName": "Gulden",
    "FullName": "Gulden (NLG)"
  },
  {
    "Symbol": "BTCP",
    "CoinName": "Bitcoin Private",
    "FullName": "Bitcoin Private (BTCP)"
  },
  {
    "Symbol": "EMC2",
    "CoinName": "Einsteinium",
    "FullName": "Einsteinium (EMC2)"
  },
  {
    "Symbol": "BTG",
    "CoinName": "Bitcoin Gold",
    "FullName": "Bitcoin Gold (BTG)"
  },
  {
    "Symbol": "XDN",
    "CoinName": "DigitalNote ",
    "FullName": "DigitalNote  (XDN)"
  },
  {
    "Symbol": "VIA",
    "CoinName": "ViaCoin",
    "FullName": "ViaCoin (VIA)"
  },
  {
    "Symbol": "NXS",
    "CoinName": "Nexus",
    "FullName": "Nexus (NXS)"
  },
  {
    "Symbol": "AEON",
    "CoinName": "AEON",
    "FullName": "AEON (AEON)"
  },
  {
    "Symbol": "AION",
    "CoinName": "Aion",
    "FullName": "Aion (AION)"
  },
  {
    "Symbol": "BTM",
    "CoinName": "Bytom",
    "FullName": "Bytom (BTM)"
  },
  {
    "Symbol": "STRAT",
    "CoinName": "Stratis",
    "FullName": "Stratis (STRAT)"
  },
  {
    "Symbol": "BLOCK",
    "CoinName": "BlockNet",
    "FullName": "BlockNet (BLOCK)"
  },
  {
    "Symbol": "NEBL",
    "CoinName": "Neblio",
    "FullName": "Neblio (NEBL)"
  },
  {
    "Symbol": "ZEN",
    "CoinName": "Horizen",
    "FullName": "Horizen (ZEN)"
  },
  {
    "Symbol": "GO",
    "CoinName": "GoChain",
    "FullName": "GoChain (GO)"
  },
  {
    "Symbol": "HEXC",
    "CoinName": "HexCoin",
    "FullName": "HexCoin (HEXC)"
  },
  {
    "Symbol": "HEX",
    "CoinName": "HEX",
    "FullName": "HEX (HEX)"
  },
  {
    "Symbol": "CYBER",
    "CoinName": "CyberWay",
    "FullName": "CyberWay (CYBER)"
  },
  {
    "Symbol": "NRV",
    "CoinName": "NERVE",
    "FullName": "NERVE (NRV)"
  },
  {
    "Symbol": "RKN",
    "CoinName": "RAKON",
    "FullName": "RAKON (RKN)"
  },
  {
    "Symbol": "KOK",
    "CoinName": "KOK Coin",
    "FullName": "KOK Coin (KOK)"
  },
  {
    "Symbol": "KSH",
    "CoinName": "Kahsh",
    "FullName": "Kahsh (KSH)"
  },
  {
    "Symbol": "HTDF",
    "CoinName": "Orient Walt",
    "FullName": "Orient Walt (HTDF)"
  },
  {
    "Symbol": "EGGC",
    "CoinName": "EggCoin",
    "FullName": "EggCoin (EGGC)"
  },
  {
    "Symbol": "EGG",
    "CoinName": "Nestree",
    "FullName": "Nestree (EGG)"
  },
  {
    "Symbol": "KRT",
    "CoinName": "TerraKRW",
    "FullName": "TerraKRW (KRT)"
  },
  {
    "Symbol": "N8V",
    "CoinName": "NativeCoin",
    "FullName": "NativeCoin (N8V)"
  },
  {
    "Symbol": "EBK",
    "CoinName": "Ebakus",
    "FullName": "Ebakus (EBK)"
  },
  {
    "Symbol": "PEG",
    "CoinName": "PegNet",
    "FullName": "PegNet (PEG)"
  },
  {
    "Symbol": "ERK",
    "CoinName": "Eureka Coin",
    "FullName": "Eureka Coin (ERK)"
  },
  {
    "Symbol": "JWL",
    "CoinName": "Jewels",
    "FullName": "Jewels (JWL)"
  },
  {
    "Symbol": "ICX",
    "CoinName": "ICON Project",
    "FullName": "ICON Project (ICX)"
  },
  {
    "Symbol": "BNP",
    "CoinName": "BenePit",
    "FullName": "BenePit (BNP)"
  },
  {
    "Symbol": "TUDA",
    "CoinName": "Tutor's Diary",
    "FullName": "Tutor's Diary (TUDA)"
  },
  {
    "Symbol": "FLAS",
    "CoinName": "Flas Exchange Token",
    "FullName": "Flas Exchange Token (FLAS)"
  },
  {
    "Symbol": "FIELD",
    "CoinName": "Fieldcoin",
    "FullName": "Fieldcoin (FIELD)"
  },
  {
    "Symbol": "UNTD",
    "CoinName": "YOUnited",
    "FullName": "YOUnited (UNTD)"
  },
  {
    "Symbol": "TCST",
    "CoinName": "TCST Coin",
    "FullName": "TCST Coin (TCST)"
  },
  {
    "Symbol": "TREEC",
    "CoinName": "TreeCoin",
    "FullName": "TreeCoin (TREEC)"
  },
  {
    "Symbol": "GEC",
    "CoinName": "Geco.one",
    "FullName": "Geco.one (GEC)"
  },
  {
    "Symbol": "ENCN",
    "CoinName": "EndChain",
    "FullName": "EndChain (ENCN)"
  },
  {
    "Symbol": "LUT",
    "CoinName": "Cinemadrom",
    "FullName": "Cinemadrom (LUT)"
  },
  {
    "Symbol": "APM",
    "CoinName": "apM Coin",
    "FullName": "apM Coin (APM)"
  },
  {
    "Symbol": "IDRT",
    "CoinName": "Rupiah Token",
    "FullName": "Rupiah Token (IDRT)"
  },
  {
    "Symbol": "BLTV",
    "CoinName": "BLTV Token",
    "FullName": "BLTV Token (BLTV)"
  },
  {
    "Symbol": "APIX",
    "CoinName": "APIX",
    "FullName": "APIX (APIX)"
  },
  {
    "Symbol": "RRB",
    "CoinName": "Renrenbit",
    "FullName": "Renrenbit (RRB)"
  },
  {
    "Symbol": "MESH",
    "CoinName": "MeshBox",
    "FullName": "MeshBox (MESH)"
  },
  {
    "Symbol": "MTCN",
    "CoinName": "Multiven",
    "FullName": "Multiven (MTCN)"
  },
  {
    "Symbol": "ZUUM",
    "CoinName": "Zuum",
    "FullName": "Zuum (ZUUM)"
  },
  {
    "Symbol": "CR",
    "CoinName": "CryptoRiyal",
    "FullName": "CryptoRiyal (CR)"
  },
  {
    "Symbol": "ULED",
    "CoinName": "Ledder",
    "FullName": "Ledder (ULED)"
  },
  {
    "Symbol": "BDLR",
    "CoinName": "GOVEARN",
    "FullName": "GOVEARN (BDLR)"
  },
  {
    "Symbol": "ECA",
    "CoinName": "Electra",
    "FullName": "Electra (ECA)"
  },
  {
    "Symbol": "KR",
    "CoinName": "Krypton",
    "FullName": "Krypton (KR)"
  },
  {
    "Symbol": "BERN",
    "CoinName": "BERNcash",
    "FullName": "BERNcash (BERN)"
  },
  {
    "Symbol": "SIB",
    "CoinName": "SibCoin",
    "FullName": "SibCoin (SIB)"
  },
  {
    "Symbol": "BTC2",
    "CoinName": "Bitcoin 2",
    "FullName": "Bitcoin 2 (BTC2)"
  },
  {
    "Symbol": "VALOR",
    "CoinName": "Smart Valor",
    "FullName": "Smart Valor (VALOR)"
  },
  {
    "Symbol": "WIKI",
    "CoinName": "Wiki Token",
    "FullName": "Wiki Token (WIKI)"
  },
  {
    "Symbol": "HINT",
    "CoinName": "Hintchain",
    "FullName": "Hintchain (HINT)"
  },
  {
    "Symbol": "PCI",
    "CoinName": "PayProtocol Paycoin",
    "FullName": "PayProtocol Paycoin (PCI)"
  },
  {
    "Symbol": "BNA",
    "CoinName": "BananaTok",
    "FullName": "BananaTok (BNA)"
  },
  {
    "Symbol": "AXL",
    "CoinName": "AXiaL",
    "FullName": "AXiaL (AXL)"
  },
  {
    "Symbol": "GOD",
    "CoinName": "Bitcoin God",
    "FullName": "Bitcoin God (GOD)"
  },
  {
    "Symbol": "ALY",
    "CoinName": "Ally",
    "FullName": "Ally (ALY)"
  },
  {
    "Symbol": "CODY",
    "CoinName": "Coindy",
    "FullName": "Coindy (CODY)"
  },
  {
    "Symbol": "SPOK",
    "CoinName": "Spock",
    "FullName": "Spock (SPOK)"
  },
  {
    "Symbol": "USDH",
    "CoinName": "HonestCoin",
    "FullName": "HonestCoin (USDH)"
  },
  {
    "Symbol": "KDA",
    "CoinName": "Kadena",
    "FullName": "Kadena (KDA)"
  },
  {
    "Symbol": "BKK",
    "CoinName": "BKEX Token",
    "FullName": "BKEX Token (BKK)"
  },
  {
    "Symbol": "CET",
    "CoinName": "CoinEx token",
    "FullName": "CoinEx token (CET)"
  },
  {
    "Symbol": "GARK",
    "CoinName": "Game Ark",
    "FullName": "Game Ark (GARK)"
  },
  {
    "Symbol": "IDHUB",
    "CoinName": "IDHUB",
    "FullName": "IDHUB (IDHUB)"
  },
  {
    "Symbol": "LM",
    "CoinName": "LM Token",
    "FullName": "LM Token (LM)"
  },
  {
    "Symbol": "BIKI",
    "CoinName": "BIKI",
    "FullName": "BIKI (BIKI)"
  },
  {
    "Symbol": "DLX",
    "CoinName": "DAppLinks",
    "FullName": "DAppLinks (DLX)"
  },
  {
    "Symbol": "DALI",
    "CoinName": "Dalichain",
    "FullName": "Dalichain (DALI)"
  },
  {
    "Symbol": "FLDT",
    "CoinName": "FairyLand",
    "FullName": "FairyLand (FLDT)"
  },
  {
    "Symbol": "HUSD",
    "CoinName": "HUSD",
    "FullName": "HUSD (HUSD)"
  },
  {
    "Symbol": "IOEX",
    "CoinName": "ioeX",
    "FullName": "ioeX (IOEX)"
  },
  {
    "Symbol": "APC",
    "CoinName": "AlpaCoin",
    "FullName": "AlpaCoin (APC)"
  },
  {
    "Symbol": "IPX",
    "CoinName": "Tachyon Protocol",
    "FullName": "Tachyon Protocol (IPX)"
  },
  {
    "Symbol": "XDCE",
    "CoinName": "XinFin Coin",
    "FullName": "XinFin Coin (XDCE)"
  },
  {
    "Symbol": "PART",
    "CoinName": "Particl",
    "FullName": "Particl (PART)"
  },
  {
    "Symbol": "TCO",
    "CoinName": "ThinkCoin",
    "FullName": "ThinkCoin (TCO)"
  },
  {
    "Symbol": "ETY",
    "CoinName": "Ethereum Cloud",
    "FullName": "Ethereum Cloud (ETY)"
  },
  {
    "Symbol": "LBXC",
    "CoinName": "LUX BIO EXCHANGE COIN",
    "FullName": "LUX BIO EXCHANGE COIN (LBXC)"
  },
  {
    "Symbol": "JOB",
    "CoinName": "Jobchain",
    "FullName": "Jobchain (JOB)"
  },
  {
    "Symbol": "VEIL",
    "CoinName": "VEIL",
    "FullName": "VEIL (VEIL)"
  },
  {
    "Symbol": "BTBL",
    "CoinName": "Bitball",
    "FullName": "Bitball (BTBL)"
  },
  {
    "Symbol": "FTM",
    "CoinName": "Fantom",
    "FullName": "Fantom (FTM)"
  },
  {
    "Symbol": "ATOM",
    "CoinName": "Cosmos",
    "FullName": "Cosmos (ATOM)"
  },
  {
    "Symbol": "MEC",
    "CoinName": "MegaCoin",
    "FullName": "MegaCoin (MEC)"
  },
  {
    "Symbol": "ETN",
    "CoinName": "Electroneum",
    "FullName": "Electroneum (ETN)"
  },
  {
    "Symbol": "POT",
    "CoinName": "PotCoin",
    "FullName": "PotCoin (POT)"
  },
  {
    "Symbol": "ATM",
    "CoinName": "ATMChain",
    "FullName": "ATMChain (ATM)"
  },
  {
    "Symbol": "BCD",
    "CoinName": "Bitcoin Diamond",
    "FullName": "Bitcoin Diamond (BCD)"
  },
  {
    "Symbol": "NMC",
    "CoinName": "Namecoin",
    "FullName": "Namecoin (NMC)"
  },
  {
    "Symbol": "RDD",
    "CoinName": "Reddcoin",
    "FullName": "Reddcoin (RDD)"
  },
  {
    "Symbol": "SYS",
    "CoinName": "SysCoin",
    "FullName": "SysCoin (SYS)"
  },
  {
    "Symbol": "IOC",
    "CoinName": "IOCoin",
    "FullName": "IOCoin (IOC)"
  },
  {
    "Symbol": "SMART",
    "CoinName": "SmartCash",
    "FullName": "SmartCash (SMART)"
  },
  {
    "Symbol": "XZC",
    "CoinName": "ZCoin",
    "FullName": "ZCoin (XZC)"
  },
  {
    "Symbol": "CLOAK",
    "CoinName": "CloakCoin",
    "FullName": "CloakCoin (CLOAK)"
  },
  {
    "Symbol": "RVN",
    "CoinName": "Ravencoin",
    "FullName": "Ravencoin (RVN)"
  },
  {
    "Symbol": "WAVES",
    "CoinName": "Waves",
    "FullName": "Waves (WAVES)"
  },
  {
    "Symbol": "DOGE",
    "CoinName": "Dogecoin",
    "FullName": "Dogecoin (DOGE)"
  },
  {
    "Symbol": "XVG",
    "CoinName": "Verge",
    "FullName": "Verge (XVG)"
  },
  {
    "Symbol": "SKY",
    "CoinName": "Skycoin",
    "FullName": "Skycoin (SKY)"
  },
  {
    "Symbol": "HPB",
    "CoinName": "High Performance Blockchain",
    "FullName": "High Performance Blockchain (HPB)"
  },
  {
    "Symbol": "PPC",
    "CoinName": "PeerCoin",
    "FullName": "PeerCoin (PPC)"
  },
  {
    "Symbol": "BURST",
    "CoinName": "BurstCoin",
    "FullName": "BurstCoin (BURST)"
  },
  {
    "Symbol": "POA",
    "CoinName": "Poa Network",
    "FullName": "Poa Network (POA)"
  },
  {
    "Symbol": "AE",
    "CoinName": "Aeternity",
    "FullName": "Aeternity (AE)"
  },
  {
    "Symbol": "GBYTE",
    "CoinName": "Obyte",
    "FullName": "Obyte (GBYTE)"
  },
  {
    "Symbol": "BLK",
    "CoinName": "BlackCoin",
    "FullName": "BlackCoin (BLK)"
  },
  {
    "Symbol": "NAS",
    "CoinName": "Nebulas",
    "FullName": "Nebulas (NAS)"
  },
  {
    "Symbol": "HC",
    "CoinName": "HyperCash",
    "FullName": "HyperCash (HC)"
  },
  {
    "Symbol": "IOST",
    "CoinName": "IOS token",
    "FullName": "IOS token (IOST)"
  },
  {
    "Symbol": "GXS",
    "CoinName": "GXChain",
    "FullName": "GXChain (GXS)"
  },
  {
    "Symbol": "KMD",
    "CoinName": "Komodo",
    "FullName": "Komodo (KMD)"
  },
  {
    "Symbol": "WTC",
    "CoinName": "Waltonchain",
    "FullName": "Waltonchain (WTC)"
  },
  {
    "Symbol": "NXT",
    "CoinName": "Nxt",
    "FullName": "Nxt (NXT)"
  },
  {
    "Symbol": "XAS",
    "CoinName": "Asch",
    "FullName": "Asch (XAS)"
  },
  {
    "Symbol": "RHOC",
    "CoinName": "RChain",
    "FullName": "RChain (RHOC)"
  },
  {
    "Symbol": "WAN",
    "CoinName": "Wanchain",
    "FullName": "Wanchain (WAN)"
  },
  {
    "Symbol": "ARK",
    "CoinName": "ARK",
    "FullName": "ARK (ARK)"
  },
  {
    "Symbol": "NAV",
    "CoinName": "NavCoin",
    "FullName": "NavCoin (NAV)"
  },
  {
    "Symbol": "ENG",
    "CoinName": "Enigma",
    "FullName": "Enigma (ENG)"
  },
  {
    "Symbol": "NULS",
    "CoinName": "Nuls",
    "FullName": "Nuls (NULS)"
  },
  {
    "Symbol": "QTUM",
    "CoinName": "QTUM",
    "FullName": "QTUM (QTUM)"
  },
  {
    "Symbol": "ARDR",
    "CoinName": "Ardor",
    "FullName": "Ardor (ARDR)"
  },
  {
    "Symbol": "PIVX",
    "CoinName": "Private Instant Verified Transaction",
    "FullName": "Private Instant Verified Transaction (PIVX)"
  },
  {
    "Symbol": "LSK",
    "CoinName": "Lisk",
    "FullName": "Lisk (LSK)"
  },
  {
    "Symbol": "VTC",
    "CoinName": "Vertcoin",
    "FullName": "Vertcoin (VTC)"
  },
  {
    "Symbol": "NANO",
    "CoinName": "Nano",
    "FullName": "Nano (NANO)"
  },
  {
    "Symbol": "ONT",
    "CoinName": "Ontology",
    "FullName": "Ontology (ONT)"
  },
  {
    "Symbol": "MKEY",
    "CoinName": "MEDIKEY",
    "FullName": "MEDIKEY (MKEY)"
  },
  {
    "Symbol": "TAUC",
    "CoinName": "Taurus Coin",
    "FullName": "Taurus Coin (TAUC)"
  },
  {
    "Symbol": "GIB",
    "CoinName": "Bible Coin",
    "FullName": "Bible Coin (GIB)"
  },
  {
    "Symbol": "ZANO",
    "CoinName": "Zano",
    "FullName": "Zano (ZANO)"
  },
  {
    "Symbol": "SCDS",
    "CoinName": "Shrine Cloud Storage Network",
    "FullName": "Shrine Cloud Storage Network (SCDS)"
  }
];