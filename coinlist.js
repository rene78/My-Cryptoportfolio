const coinlist = [
  {
    "Symbol": "BTC",
    "CoinName": "Bitcoin",
    "FullName": "Bitcoin (BTC)"
  },
  {
    "Symbol": "XRP",
    "CoinName": "XRP",
    "FullName": "XRP (XRP)"
  },
  {
    "Symbol": "ETH",
    "CoinName": "Ethereum",
    "FullName": "Ethereum (ETH)"
  },
  {
    "Symbol": "EOS",
    "CoinName": "EOS",
    "FullName": "EOS (EOS)"
  },
  {
    "Symbol": "BCH",
    "CoinName": "Bitcoin Cash",
    "FullName": "Bitcoin Cash (BCH)"
  },
  {
    "Symbol": "LTC",
    "CoinName": "Litecoin",
    "FullName": "Litecoin (LTC)"
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
    "Symbol": "ADA",
    "CoinName": "Cardano",
    "FullName": "Cardano (ADA)"
  },
  {
    "Symbol": "BNB",
    "CoinName": "Binance Coin",
    "FullName": "Binance Coin (BNB)"
  },
  {
    "Symbol": "XMR",
    "CoinName": "Monero",
    "FullName": "Monero (XMR)"
  },
  {
    "Symbol": "IOT",
    "CoinName": "IOTA",
    "FullName": "IOTA (IOT)"
  },
  {
    "Symbol": "DASH",
    "CoinName": "Dash",
    "FullName": "Dash (DASH)"
  },
  {
    "Symbol": "NEO",
    "CoinName": "NEO",
    "FullName": "NEO (NEO)"
  },
  {
    "Symbol": "ZEC",
    "CoinName": "ZCash",
    "FullName": "ZCash (ZEC)"
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
    "CoinName": "1337",
    "FullName": "1337 (1337)"
  },
  {
    "Symbol": "2015",
    "CoinName": "2015 coin",
    "FullName": "2015 coin (2015)"
  },
  {
    "Symbol": "NXT",
    "CoinName": "Nxt",
    "FullName": "Nxt (NXT)"
  },
  {
    "Symbol": "BTCD",
    "CoinName": "BitcoinDark",
    "FullName": "BitcoinDark (BTCD)"
  },
  {
    "Symbol": "PPC",
    "CoinName": "PeerCoin",
    "FullName": "PeerCoin (PPC)"
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
    "Symbol": "CHASH",
    "CoinName": "CleverHash",
    "FullName": "CleverHash (CHASH)"
  },
  {
    "Symbol": "SPR",
    "CoinName": "Spreadcoin",
    "FullName": "Spreadcoin (SPR)"
  },
  {
    "Symbol": "WOLF",
    "CoinName": "Insanity Coin",
    "FullName": "Insanity Coin (WOLF)"
  },
  {
    "Symbol": "XDP",
    "CoinName": "DogeParty",
    "FullName": "DogeParty (XDP)"
  },
  {
    "Symbol": "AC",
    "CoinName": "Asia Coin",
    "FullName": "Asia Coin (AC)"
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
    "Symbol": "ARI",
    "CoinName": "AriCoin",
    "FullName": "AriCoin (ARI)"
  },
  {
    "Symbol": "BCX",
    "CoinName": "BattleCoin",
    "FullName": "BattleCoin (BCX)"
  },
  {
    "Symbol": "BET",
    "CoinName": "BetaCoin",
    "FullName": "BetaCoin (BET)"
  },
  {
    "Symbol": "BLU",
    "CoinName": "BlueCoin",
    "FullName": "BlueCoin (BLU)"
  },
  {
    "Symbol": "BLK",
    "CoinName": "BlackCoin",
    "FullName": "BlackCoin (BLK)"
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
    "CoinName": "DigiCoin",
    "FullName": "DigiCoin (DGC)"
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
    "Symbol": "BTE",
    "CoinName": "ByteCoin",
    "FullName": "ByteCoin (BTE)"
  },
  {
    "Symbol": "BTM",
    "CoinName": "BitMark",
    "FullName": "BitMark (BTM)"
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
    "Symbol": "CAT1",
    "CoinName": "Catcoin",
    "FullName": "Catcoin (CAT1)"
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
    "Symbol": "CLOAK",
    "CoinName": "CloakCoin",
    "FullName": "CloakCoin (CLOAK)"
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
    "Symbol": "EMC2",
    "CoinName": "Einsteinium",
    "FullName": "Einsteinium (EMC2)"
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
    "Symbol": "FST",
    "CoinName": "FastCoin",
    "FullName": "FastCoin (FST)"
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
    "CoinName": "Hyperstake",
    "FullName": "Hyperstake (HYP)"
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
    "Symbol": "IOC",
    "CoinName": "IOCoin",
    "FullName": "IOCoin (IOC)"
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
    "Symbol": "KEY*",
    "CoinName": "KeyCoin",
    "FullName": "KeyCoin (KEY*)"
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
    "Symbol": "MEC",
    "CoinName": "MegaCoin",
    "FullName": "MegaCoin (MEC)"
  },
  {
    "Symbol": "MED",
    "CoinName": "MediterraneanCoin",
    "FullName": "MediterraneanCoin (MED)"
  },
  {
    "Symbol": "MIN",
    "CoinName": "Minerals Coin",
    "FullName": "Minerals Coin (MIN)"
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
    "Symbol": "MNC",
    "CoinName": "MinCoin",
    "FullName": "MinCoin (MNC)"
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
    "Symbol": "NAV",
    "CoinName": "NavCoin",
    "FullName": "NavCoin (NAV)"
  },
  {
    "Symbol": "NBL",
    "CoinName": "Nybble",
    "FullName": "Nybble (NBL)"
  },
  {
    "Symbol": "NEC",
    "CoinName": "NeoCoin",
    "FullName": "NeoCoin (NEC)"
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
    "Symbol": "NMC",
    "CoinName": "Namecoin",
    "FullName": "Namecoin (NMC)"
  },
  {
    "Symbol": "NYAN",
    "CoinName": "NyanCoin",
    "FullName": "NyanCoin (NYAN)"
  },
  {
    "Symbol": "OPAL",
    "CoinName": "OpalCoin",
    "FullName": "OpalCoin (OPAL)"
  },
  {
    "Symbol": "ORB",
    "CoinName": "Orbitcoin",
    "FullName": "Orbitcoin (ORB)"
  },
  {
    "Symbol": "OSC",
    "CoinName": "OpenSourceCoin",
    "FullName": "OpenSourceCoin (OSC)"
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
    "Symbol": "POT",
    "CoinName": "PotCoin",
    "FullName": "PotCoin (POT)"
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
    "Symbol": "RDD",
    "CoinName": "Reddcoin",
    "FullName": "Reddcoin (RDD)"
  },
  {
    "Symbol": "RIPO",
    "CoinName": "RipOffCoin",
    "FullName": "RipOffCoin (RIPO)"
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
    "Symbol": "SPT",
    "CoinName": "Spots",
    "FullName": "Spots (SPT)"
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
    "Symbol": "SYS",
    "CoinName": "SysCoin",
    "FullName": "SysCoin (SYS)"
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
    "Symbol": "VIA",
    "CoinName": "ViaCoin",
    "FullName": "ViaCoin (VIA)"
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
    "Symbol": "WC",
    "CoinName": "WhiteCoin",
    "FullName": "WhiteCoin (WC)"
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
    "Symbol": "BCN",
    "CoinName": "ByteCoin",
    "FullName": "ByteCoin (BCN)"
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
    "Symbol": "BURST",
    "CoinName": "BurstCoin",
    "FullName": "BurstCoin (BURST)"
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
    "Symbol": "XCP",
    "CoinName": "CounterParty",
    "FullName": "CounterParty (XCP)"
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
    "Symbol": "NSR",
    "CoinName": "NuShares",
    "FullName": "NuShares (NSR)"
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
    "Symbol": "BLOCK",
    "CoinName": "BlockNet",
    "FullName": "BlockNet (BLOCK)"
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
    "Symbol": "NLG",
    "CoinName": "Gulden",
    "FullName": "Gulden (NLG)"
  },
  {
    "Symbol": "RBY",
    "CoinName": "RubyCoin",
    "FullName": "RubyCoin (RBY)"
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
    "Symbol": "DTC*",
    "CoinName": "DayTrader Coin",
    "FullName": "DayTrader Coin (DTC)"
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
    "Symbol": "TRUST",
    "CoinName": "TrustPlus",
    "FullName": "TrustPlus (TRUST)"
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
    "Symbol": "EGG",
    "CoinName": "EggCoin",
    "FullName": "EggCoin (EGG)"
  },
  {
    "Symbol": "GSX",
    "CoinName": "GlowShares",
    "FullName": "GlowShares (GSX)"
  },
  {
    "Symbol": "CAM",
    "CoinName": "Camcoin",
    "FullName": "Camcoin (CAM)"
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
    "Symbol": "NODE",
    "CoinName": "Node",
    "FullName": "Node (NODE)"
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
    "Symbol": "MRS",
    "CoinName": "MarsCoin",
    "FullName": "MarsCoin (MRS)"
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
    "Symbol": "NXS",
    "CoinName": "Nexus",
    "FullName": "Nexus (NXS)"
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
    "Symbol": "DCC",
    "CoinName": "DarkCrave",
    "FullName": "DarkCrave (DCC)"
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
    "Symbol": "LUX*",
    "CoinName": "BitLux",
    "FullName": "BitLux (LUX*)"
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
    "Symbol": "XFC",
    "CoinName": "Forever Coin",
    "FullName": "Forever Coin (XFC)"
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
    "Symbol": "BUCKS*",
    "CoinName": "GorillaBucks",
    "FullName": "GorillaBucks (BUCKS*)"
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
    "Symbol": "CRW",
    "CoinName": "Crown Coin",
    "FullName": "Crown Coin (CRW)"
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
    "Symbol": "QCN",
    "CoinName": "Quazar Coin",
    "FullName": "Quazar Coin (QCN)"
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
    "Symbol": "CRE",
    "CoinName": "Credits",
    "FullName": "Credits (CRE)"
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
    "Symbol": "STR*",
    "CoinName": "StarCoin",
    "FullName": "StarCoin (STR*)"
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
    "Symbol": "HNC",
    "CoinName": "Hellenic Coin",
    "FullName": "Hellenic Coin (HNC)"
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
    "FullName": "Paycon (CON_)"
  },
  {
    "Symbol": "NEU*",
    "CoinName": "NeuCoin",
    "FullName": "NeuCoin (NEU*)"
  },
  {
    "Symbol": "TX",
    "CoinName": "Transfer",
    "FullName": "Transfer (TX)"
  },
  {
    "Symbol": "GRS",
    "CoinName": "Groestlcoin ",
    "FullName": "Groestlcoin  (GRS)"
  },
  {
    "Symbol": "CLV",
    "CoinName": "CleverCoin",
    "FullName": "CleverCoin (CLV)"
  },
  {
    "Symbol": "FCT",
    "CoinName": "Factoids",
    "FullName": "Factoids (FCT)"
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
    "Symbol": "BLITZ",
    "CoinName": "BlitzCoin",
    "FullName": "BlitzCoin (BLITZ)"
  },
  {
    "Symbol": "HIRE*",
    "CoinName": "BitHIRE",
    "FullName": "BitHIRE (HIRE*)"
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
    "Symbol": "BTA",
    "CoinName": "Bata",
    "FullName": "Bata (BTA)"
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
    "CoinName": "Synereo",
    "FullName": "Synereo (AMP)"
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
    "Symbol": "SPOTS",
    "CoinName": "Spots",
    "FullName": "Spots (SPOTS)"
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
    "Symbol": "SAR*",
    "CoinName": "SARCoin",
    "FullName": "SARCoin (SAR*)"
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
    "Symbol": "STEEM",
    "CoinName": "Steem",
    "FullName": "Steem (STEEM)"
  },
  {
    "Symbol": "BLRY",
    "CoinName": "BillaryCoin",
    "FullName": "BillaryCoin (BLRY)"
  },
  {
    "Symbol": "XWC",
    "CoinName": "WhiteCoin",
    "FullName": "WhiteCoin (XWC)"
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
    "Symbol": "DNET",
    "CoinName": "Darknet",
    "FullName": "Darknet (DNET)"
  },
  {
    "Symbol": "BAC",
    "CoinName": "BitalphaCoin",
    "FullName": "BitalphaCoin (BAC)"
  },
  {
    "Symbol": "XID*",
    "CoinName": "International Diamond Coin",
    "FullName": "International Diamond Coin (XID*)"
  },
  {
    "Symbol": "TCR",
    "CoinName": "Thecreed",
    "FullName": "Thecreed (TCR)"
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
    "Symbol": "COIN*",
    "CoinName": "Coin",
    "FullName": "Coin (COIN*)"
  },
  {
    "Symbol": "VPRC",
    "CoinName": "VapersCoin",
    "FullName": "VapersCoin (VPRC)"
  },
  {
    "Symbol": "APC",
    "CoinName": "AlpaCoin",
    "FullName": "AlpaCoin (APC)"
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
    "Symbol": "AEON",
    "CoinName": "AEON",
    "FullName": "AEON (AEON)"
  },
  {
    "Symbol": "MOIN",
    "CoinName": "MoinCoin",
    "FullName": "MoinCoin (MOIN)"
  },
  {
    "Symbol": "SIB",
    "CoinName": "SibCoin",
    "FullName": "SibCoin (SIB)"
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
    "Symbol": "BERN",
    "CoinName": "BERNcash",
    "FullName": "BERNcash (BERN)"
  },
  {
    "Symbol": "BIGUP",
    "CoinName": "BigUp",
    "FullName": "BigUp (BIGUP)"
  },
  {
    "Symbol": "KR",
    "CoinName": "Krypton",
    "FullName": "Krypton (KR)"
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
    "Symbol": "BRK",
    "CoinName": "BreakoutCoin",
    "FullName": "BreakoutCoin (BRK)"
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
    "Symbol": "ADCN",
    "CoinName": "Asiadigicoin",
    "FullName": "Asiadigicoin (ADCN)"
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
    "Symbol": "SAFEX",
    "CoinName": "SafeExchangeCoin",
    "FullName": "SafeExchangeCoin (SAFEX)"
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
    "Symbol": "ADN",
    "CoinName": "Aiden",
    "FullName": "Aiden (ADN)"
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
    "Symbol": "KAT",
    "CoinName": "KATZcoin",
    "FullName": "KATZcoin (KAT)"
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
    "Symbol": "CLUD",
    "CoinName": "CludCoin",
    "FullName": "CludCoin (CLUD)"
  },
  {
    "Symbol": "DIME",
    "CoinName": "DimeCoin",
    "FullName": "DimeCoin (DIME)"
  },
  {
    "Symbol": "FLY",
    "CoinName": "FlyCoin",
    "FullName": "FlyCoin (FLY)"
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
    "Symbol": "DEUR",
    "CoinName": "DigiEuro",
    "FullName": "DigiEuro (DEUR)"
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
    "Symbol": "STS",
    "CoinName": "STRESScoin",
    "FullName": "STRESScoin (STS)"
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
    "Symbol": "STAR*",
    "CoinName": "StarCoin",
    "FullName": "StarCoin (STAR*)"
  },
  {
    "Symbol": "STHR",
    "CoinName": "Stakerush",
    "FullName": "Stakerush (STHR)"
  },
  {
    "Symbol": "DBG",
    "CoinName": "Digital Bullion Gold",
    "FullName": "Digital Bullion Gold (DBG)"
  },
  {
    "Symbol": "BON",
    "CoinName": "BonesCoin",
    "FullName": "BonesCoin (BON*)"
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
    "Symbol": "FLVR",
    "CoinName": "FlavorCoin",
    "FullName": "FlavorCoin (FLVR)"
  },
  {
    "Symbol": "SHREK",
    "CoinName": "ShrekCoin",
    "FullName": "ShrekCoin (SHREK)"
  },
  {
    "Symbol": "STA*",
    "CoinName": "Stakers",
    "FullName": "Stakers (STA*)"
  },
  {
    "Symbol": "RISE",
    "CoinName": "Rise",
    "FullName": "Rise (RISE)"
  },
  {
    "Symbol": "REV",
    "CoinName": "Revenu",
    "FullName": "Revenu (REV)"
  },
  {
    "Symbol": "PBC",
    "CoinName": "PabyosiCoin",
    "FullName": "PabyosiCoin (PBC)"
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
    "Symbol": "EDC",
    "CoinName": "EducoinV",
    "FullName": "EducoinV (EDC)"
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
    "Symbol": "VIP",
    "CoinName": "VIP Tokens",
    "FullName": "VIP Tokens (VIP)"
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
    "Symbol": "YOVI",
    "CoinName": "YobitVirtualCoin",
    "FullName": "YobitVirtualCoin (YOVI)"
  },
  {
    "Symbol": "ORLY",
    "CoinName": "OrlyCoin",
    "FullName": "OrlyCoin (ORLY)"
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
    "Symbol": "PDC",
    "CoinName": "Project Decorum",
    "FullName": "Project Decorum (PDC)"
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
    "Symbol": "REE",
    "CoinName": "ReeCoin",
    "FullName": "ReeCoin (REE)"
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
    "Symbol": "OMNI",
    "CoinName": "Omni",
    "FullName": "Omni (OMNI)"
  },
  {
    "Symbol": "GSY",
    "CoinName": "GenesysCoin",
    "FullName": "GenesysCoin (GSY)"
  },
  {
    "Symbol": "TKN*",
    "CoinName": "TrollTokens",
    "FullName": "TrollTokens (TKN*)"
  },
  {
    "Symbol": "LIR",
    "CoinName": "Let it Ride",
    "FullName": "Let it Ride (LIR)"
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
    "Symbol": "SPX",
    "CoinName": "Specie",
    "FullName": "Specie (SPX*)"
  },
  {
    "Symbol": "SBD*",
    "CoinName": "Steem Backed Dollars",
    "FullName": "Steem Backed Dollars (SBD*)"
  },
  {
    "Symbol": "KRAK",
    "CoinName": "Kraken",
    "FullName": "Kraken (KRAK)"
  },
  {
    "Symbol": "IBANK",
    "CoinName": "iBankCoin",
    "FullName": "iBankCoin (IBANK)"
  },
  {
    "Symbol": "STRAT",
    "CoinName": "Stratis",
    "FullName": "Stratis (STRAT)"
  },
  {
    "Symbol": "VOYA",
    "CoinName": "Voyacoin",
    "FullName": "Voyacoin (VOYA)"
  },
  {
    "Symbol": "ENTER",
    "CoinName": "EnterCoin (ENTER)",
    "FullName": "EnterCoin (ENTER) (ENTER)"
  },
  {
    "Symbol": "WGC",
    "CoinName": "World Gold Coin",
    "FullName": "World Gold Coin (WGC)"
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
    "Symbol": "MUDRA",
    "CoinName": "MudraCoin",
    "FullName": "MudraCoin (MUDRA)"
  },
  {
    "Symbol": "WARP",
    "CoinName": "WarpCoin",
    "FullName": "WarpCoin (WARP)"
  },
  {
    "Symbol": "PIZZA",
    "CoinName": "PizzaCoin",
    "FullName": "PizzaCoin (PIZZA)"
  },
  {
    "Symbol": "ICN",
    "CoinName": "Iconomi",
    "FullName": "Iconomi (ICN)"
  },
  {
    "Symbol": "WINGS",
    "CoinName": "Wings DAO",
    "FullName": "Wings DAO (WINGS)"
  },
  {
    "Symbol": "CDX*",
    "CoinName": "Cryptodex",
    "FullName": "Cryptodex (CDX*)"
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
    "Symbol": "JWL",
    "CoinName": "Jewels",
    "FullName": "Jewels (JWL)"
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
    "Symbol": "STO",
    "CoinName": "Save The Ocean",
    "FullName": "Save The Ocean (STO)"
  },
  {
    "Symbol": "CTC",
    "CoinName": "CarterCoin",
    "FullName": "CarterCoin (CTC)"
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
    "Symbol": "ERB",
    "CoinName": "ERBCoin",
    "FullName": "ERBCoin (ERB)"
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
    "Symbol": "DROP*",
    "CoinName": "FaucetCoin",
    "FullName": "FaucetCoin (DROP*)"
  },
  {
    "Symbol": "SANDG",
    "CoinName": "Save and Gain",
    "FullName": "Save and Gain (SANDG)"
  },
  {
    "Symbol": "PNK",
    "CoinName": "SteamPunk",
    "FullName": "SteamPunk (PNK)"
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
    "Symbol": "EGO",
    "CoinName": "EGOcoin",
    "FullName": "EGOcoin (EGO)"
  },
  {
    "Symbol": "RCN*",
    "CoinName": "RCoin",
    "FullName": "RCoin (RCN*)"
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
    "Symbol": "ATOM",
    "CoinName": "Atomic Coin",
    "FullName": "Atomic Coin (ATOM)"
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
    "Symbol": "CRNK",
    "CoinName": "CrankCoin",
    "FullName": "CrankCoin (CRNK)"
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
    "Symbol": "RUBIT",
    "CoinName": "Rublebit",
    "FullName": "Rublebit (RUBIT)"
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
    "Symbol": "GBYTE",
    "CoinName": "OByte",
    "FullName": "OByte (GBYTE)"
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
    "Symbol": "PCS",
    "CoinName": "Pabyosi Coin",
    "FullName": "Pabyosi Coin (PCS)"
  },
  {
    "Symbol": "WINE",
    "CoinName": "WineCoin",
    "FullName": "WineCoin (WINE)"
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
    "Symbol": "VSL",
    "CoinName": "vSlice",
    "FullName": "vSlice (VSL)"
  },
  {
    "Symbol": "LEO",
    "CoinName": "LEOcoin",
    "FullName": "LEOcoin (LEO)"
  },
  {
    "Symbol": "MDT",
    "CoinName": "Midnight",
    "FullName": "Midnight (MDT)"
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
    "Symbol": "XNC",
    "CoinName": "XenCoin",
    "FullName": "XenCoin (XNC)"
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
    "Symbol": "FIRST",
    "CoinName": "FirstCoin",
    "FullName": "FirstCoin (FIRST)"
  },
  {
    "Symbol": "SCASH",
    "CoinName": "SpaceCash",
    "FullName": "SpaceCash (SCASH)"
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
    "Symbol": "SEEDS",
    "CoinName": "SeedShares",
    "FullName": "SeedShares (SEEDS)"
  },
  {
    "Symbol": "BCCOIN",
    "CoinName": "BitConnect Coin",
    "FullName": "BitConnect Coin (BCCOIN)"
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
    "Symbol": "CS",
    "CoinName": "CryptoSpots",
    "FullName": "CryptoSpots (CS)"
  },
  {
    "Symbol": "XSP",
    "CoinName": "PoolStamp",
    "FullName": "PoolStamp (XSP)"
  },
  {
    "Symbol": "BULLS",
    "CoinName": "BullshitCoin",
    "FullName": "BullshitCoin (BULLS)"
  },
  {
    "Symbol": "NIC",
    "CoinName": "NewInvestCoin",
    "FullName": "NewInvestCoin (NIC)"
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
    "Symbol": "CND*",
    "CoinName": "Canada eCoin",
    "FullName": "Canada eCoin (CND*)"
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
    "Symbol": "SHIFT",
    "CoinName": "Shift",
    "FullName": "Shift (SHIFT)"
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
    "Symbol": "AST*",
    "CoinName": "Astral",
    "FullName": "Astral (AST*)"
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
    "Symbol": "XNC*",
    "CoinName": "Numismatic Collections",
    "FullName": "Numismatic Collections (XNC*)"
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
    "Symbol": "BOMB",
    "CoinName": "BombCoin",
    "FullName": "BombCoin (BOMB)"
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
    "Symbol": "UBQ",
    "CoinName": "Ubiq",
    "FullName": "Ubiq (UBQ)"
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
    "Symbol": "MAR",
    "CoinName": "MarijuanaCoin",
    "FullName": "MarijuanaCoin (MAR)"
  },
  {
    "Symbol": "MARX",
    "CoinName": "MarxCoin",
    "FullName": "MarxCoin (MARX)"
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
    "CoinName": "PacCoin",
    "FullName": "PacCoin (PAC)"
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
    "Symbol": "NDOGE",
    "CoinName": "NinjaDoge",
    "FullName": "NinjaDoge (NDOGE)"
  },
  {
    "Symbol": "MLN",
    "CoinName": "Melon",
    "FullName": "Melon (MLN)"
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
    "Symbol": "BEST",
    "CoinName": "BestChain",
    "FullName": "BestChain (BEST)"
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
    "Symbol": "QBT",
    "CoinName": "Cubits",
    "FullName": "Cubits (QBT)"
  },
  {
    "Symbol": "SRC*",
    "CoinName": "StarCredits",
    "FullName": "StarCredits (SRC*)"
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
    "Symbol": "ARPA",
    "CoinName": "ArpaCoin",
    "FullName": "ArpaCoin (ARPA)"
  },
  {
    "Symbol": "BNB*",
    "CoinName": "Boats and Bitches",
    "FullName": "Boats and Bitches (BNB*)"
  },
  {
    "Symbol": "UNI",
    "CoinName": "Universe",
    "FullName": "Universe (UNI)"
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
    "Symbol": "ATMOS",
    "CoinName": "Atmos",
    "FullName": "Atmos (ATMOS)"
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
    "Symbol": "GOT",
    "CoinName": "Giotto Coin",
    "FullName": "Giotto Coin (GOT)"
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
    "CoinName": "TokenCard  ",
    "FullName": "TokenCard   (TKN)"
  },
  {
    "Symbol": "BTCS",
    "CoinName": "Bitcoin Scrypt",
    "FullName": "Bitcoin Scrypt (BTCS)"
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
    "Symbol": "RBX",
    "CoinName": "RiptoBuX",
    "FullName": "RiptoBuX (RBX)"
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
    "Symbol": "MRT",
    "CoinName": "MinersReward",
    "FullName": "MinersReward (MRT)"
  },
  {
    "Symbol": "PZM",
    "CoinName": "Prizm",
    "FullName": "Prizm (PZM)"
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
    "Symbol": "RED",
    "CoinName": "Redcoin",
    "FullName": "Redcoin (RED)"
  },
  {
    "Symbol": "ZSE",
    "CoinName": "ZSEcoin",
    "FullName": "ZSEcoin (ZSE)"
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
    "Symbol": "DICE",
    "CoinName": "Etheroll",
    "FullName": "Etheroll (DICE)"
  },
  {
    "Symbol": "SUB*",
    "CoinName": "Subscriptio",
    "FullName": "Subscriptio (SUB*)"
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
    "Symbol": "ADL",
    "CoinName": "Adelphoi",
    "FullName": "Adelphoi (ADL)"
  },
  {
    "Symbol": "ECC*",
    "CoinName": "E-CurrencyCoin",
    "FullName": "E-CurrencyCoin (ECC*)"
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
    "Symbol": "MAD*",
    "CoinName": "SatoshiMadness",
    "FullName": "SatoshiMadness (MAD*)"
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
    "Symbol": "SKY",
    "CoinName": "Skycoin",
    "FullName": "Skycoin (SKY)"
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
    "Symbol": "XTZ",
    "CoinName": "Tezos",
    "FullName": "Tezos (XTZ)"
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
    "CoinName": "Nimiq ",
    "FullName": "Nimiq  (NIM)"
  },
  {
    "Symbol": "CDT",
    "CoinName": "Blox",
    "FullName": "Blox (CDT)"
  },
  {
    "Symbol": "ACT",
    "CoinName": "ACT",
    "FullName": "ACT (ACT)"
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
    "Symbol": "BET*",
    "CoinName": "DAO.casino",
    "FullName": "DAO.casino (BET*)"
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
    "Symbol": "PQT",
    "CoinName": "PAquarium",
    "FullName": "PAquarium (PQT)"
  },
  {
    "Symbol": "MTL",
    "CoinName": "Metal",
    "FullName": "Metal (MTL)"
  },
  {
    "Symbol": "PPT",
    "CoinName": "Populous",
    "FullName": "Populous (PPT)"
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
    "Symbol": "IPC",
    "CoinName": "ImperialCoin",
    "FullName": "ImperialCoin (IPC)"
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
    "Symbol": "CAT*",
    "CoinName": "BitClave",
    "FullName": "BitClave (CAT)"
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
    "Symbol": "AHT*",
    "CoinName": "Bowhead Health",
    "FullName": "Bowhead Health (AHT*)"
  },
  {
    "Symbol": "TRIBE",
    "CoinName": "TribeToken",
    "FullName": "TribeToken (TRIBE)"
  },
  {
    "Symbol": "TNT",
    "CoinName": "Tierion",
    "FullName": "Tierion (TNT)"
  },
  {
    "Symbol": "PRE*",
    "CoinName": "Presearch",
    "FullName": "Presearch (PRE*)"
  },
  {
    "Symbol": "COSS",
    "CoinName": "COSS",
    "FullName": "COSS (COSS)"
  },
  {
    "Symbol": "STORM",
    "CoinName": "Storm",
    "FullName": "Storm (STORM)"
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
    "Symbol": "EQB",
    "CoinName": "Equibit",
    "FullName": "Equibit (EQB)"
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
    "Symbol": "PART",
    "CoinName": "Particl",
    "FullName": "Particl (PART)"
  },
  {
    "Symbol": "AGRS",
    "CoinName": "Agoras Token",
    "FullName": "Agoras Token (AGRS)"
  },
  {
    "Symbol": "XAI*",
    "CoinName": "AICoin",
    "FullName": "AICoin (XAI*)"
  },
  {
    "Symbol": "DAS",
    "CoinName": "DAS",
    "FullName": "DAS (DAS)"
  },
  {
    "Symbol": "ADST",
    "CoinName": "Adshares",
    "FullName": "Adshares (ADST)"
  },
  {
    "Symbol": "CAT",
    "CoinName": "BlockCAT",
    "FullName": "BlockCAT (CAT*)"
  },
  {
    "Symbol": "NLC2",
    "CoinName": "NoLimitCoin",
    "FullName": "NoLimitCoin (NLC2)"
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
    "Symbol": "EQ",
    "CoinName": "EQUI",
    "FullName": "EQUI (EQ)"
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
    "Symbol": "WINK",
    "CoinName": "Wink",
    "FullName": "Wink (WINK)"
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
    "Symbol": "KICK",
    "CoinName": "KickCoin",
    "FullName": "KickCoin (KICK)"
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
    "Symbol": "CTT",
    "CoinName": "CodeTract",
    "FullName": "CodeTract (CTT)"
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
    "Symbol": "MET",
    "CoinName": "Memessenger",
    "FullName": "Memessenger (MET)"
  },
  {
    "Symbol": "NEBL",
    "CoinName": "Neblio",
    "FullName": "Neblio (NEBL)"
  },
  {
    "Symbol": "XMCC",
    "CoinName": "Monoeci",
    "FullName": "Monoeci (XMCC)"
  },
  {
    "Symbol": "CASH*",
    "CoinName": "Cash Poker Pro",
    "FullName": "Cash Poker Pro (CASH*)"
  },
  {
    "Symbol": "CMPCO",
    "CoinName": "CampusCoin",
    "FullName": "CampusCoin (CMPCO)"
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
    "Symbol": "FUCK",
    "CoinName": "Fuck Token",
    "FullName": "Fuck Token (FUCK)"
  },
  {
    "Symbol": "VNT",
    "CoinName": "Veredictum",
    "FullName": "Veredictum (VNT)"
  },
  {
    "Symbol": "SIFT",
    "CoinName": "Smart Investment Fund Token",
    "FullName": "Smart Investment Fund Token (SIFT)"
  },
  {
    "Symbol": "ITT",
    "CoinName": "Intelligent Trading",
    "FullName": "Intelligent Trading (ITT)"
  },
  {
    "Symbol": "LNC",
    "CoinName": "BlockLancer",
    "FullName": "BlockLancer (LNC)"
  },
  {
    "Symbol": "AIX",
    "CoinName": "Aigang",
    "FullName": "Aigang (AIX)"
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
    "Symbol": "MAG*",
    "CoinName": "Magos",
    "FullName": "Magos (MAG*)"
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
    "Symbol": "STCN",
    "CoinName": "Stakecoin",
    "FullName": "Stakecoin (STCN)"
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
    "Symbol": "CFT*",
    "CoinName": "Credo",
    "FullName": "Credo (CFT*)"
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
    "Symbol": "FRAZ",
    "CoinName": "FrazCoin",
    "FullName": "FrazCoin (FRAZ)"
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
    "Symbol": "AR*",
    "CoinName": "Ar.cash",
    "FullName": "Ar.cash (AR*)"
  },
  {
    "Symbol": "Z2",
    "CoinName": "Z2 Coin",
    "FullName": "Z2 Coin (Z2)"
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
    "Symbol": "BLAS",
    "CoinName": "BlakeStar",
    "FullName": "BlakeStar (BLAS)"
  },
  {
    "Symbol": "GOOD",
    "CoinName": "GoodCoin",
    "FullName": "GoodCoin (GOOD)"
  },
  {
    "Symbol": "SCL",
    "CoinName": "Sociall",
    "FullName": "Sociall (SCL)"
  },
  {
    "Symbol": "TRV",
    "CoinName": "Travel Coin",
    "FullName": "Travel Coin (TRV)"
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
    "Symbol": "DEEP",
    "CoinName": "Deep Gold",
    "FullName": "Deep Gold (DEEP)"
  },
  {
    "Symbol": "TMT*",
    "CoinName": "ToTheMoon",
    "FullName": "ToTheMoon (TMT*)"
  },
  {
    "Symbol": "WSH",
    "CoinName": "Wish Finance",
    "FullName": "Wish Finance (WSH)"
  },
  {
    "Symbol": "ARNA*",
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
    "Symbol": "SKR*",
    "CoinName": "Skrilla Token",
    "FullName": "Skrilla Token (SKR*)"
  },
  {
    "Symbol": "3DES",
    "CoinName": "3DES",
    "FullName": "3DES (3DES)"
  },
  {
    "Symbol": "PYN",
    "CoinName": "Paycentos",
    "FullName": "Paycentos (PYN)"
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
    "Symbol": "EVC",
    "CoinName": "Eventchain",
    "FullName": "Eventchain (EVC)"
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
    "Symbol": "RUSTBITS",
    "CoinName": "Rustbits",
    "FullName": "Rustbits (RUSTBITS)"
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
    "Symbol": "SUMO",
    "CoinName": "Sumokoin",
    "FullName": "Sumokoin (SUMO)"
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
    "Symbol": "EZM",
    "CoinName": "EZMarket",
    "FullName": "EZMarket (EZM)"
  },
  {
    "Symbol": "ODN",
    "CoinName": "Obsidian",
    "FullName": "Obsidian (ODN)"
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
    "Symbol": "ERT",
    "CoinName": "Esports.com",
    "FullName": "Esports.com (ERT)"
  },
  {
    "Symbol": "BAC*",
    "CoinName": "LakeBanker",
    "FullName": "LakeBanker (BAC*)"
  },
  {
    "Symbol": "FLIK",
    "CoinName": "FLiK",
    "FullName": "FLiK (FLIK)"
  },
  {
    "Symbol": "MBT",
    "CoinName": "Multibot",
    "FullName": "Multibot (MBT)"
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
    "Symbol": "HXT",
    "CoinName": "HextraCoin",
    "FullName": "HextraCoin (HXT)"
  },
  {
    "Symbol": "CND",
    "CoinName": "Cindicator",
    "FullName": "Cindicator (CND)"
  },
  {
    "Symbol": "VRP*",
    "CoinName": "Prosense.tv",
    "FullName": "Prosense.tv (VRP)"
  },
  {
    "Symbol": "NTM",
    "CoinName": "NetM",
    "FullName": "NetM (NTM)"
  },
  {
    "Symbol": "TZC",
    "CoinName": "TrezarCoin",
    "FullName": "TrezarCoin (TZC)"
  },
  {
    "Symbol": "ENG",
    "CoinName": "Enigma",
    "FullName": "Enigma (ENG)"
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
    "Symbol": "WAX",
    "CoinName": "Worldwide Asset eXchange",
    "FullName": "Worldwide Asset eXchange (WAX)"
  },
  {
    "Symbol": "AIR",
    "CoinName": "AirToken",
    "FullName": "AirToken (AIR)"
  },
  {
    "Symbol": "NTO",
    "CoinName": "Fujinto",
    "FullName": "Fujinto (NTO)"
  },
  {
    "Symbol": "ATCC",
    "CoinName": "ATC Coin",
    "FullName": "ATC Coin (ATCC)"
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
    "Symbol": "GXC*",
    "CoinName": "GenXCoin",
    "FullName": "GenXCoin (GXC*)"
  },
  {
    "Symbol": "BQ",
    "CoinName": "Bitqy",
    "FullName": "Bitqy (BQ)"
  },
  {
    "Symbol": "CAV",
    "CoinName": "Caviar",
    "FullName": "Caviar (CAV)"
  },
  {
    "Symbol": "CLOUT",
    "CoinName": "Clout",
    "FullName": "Clout (CLOUT)"
  },
  {
    "Symbol": "PTC*",
    "CoinName": "Propthereum",
    "FullName": "Propthereum (PTC*)"
  },
  {
    "Symbol": "WABI",
    "CoinName": "WaBi",
    "FullName": "WaBi (WABI)"
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
    "Symbol": "PHX",
    "CoinName": "Red Pulse Phoenix",
    "FullName": "Red Pulse Phoenix (PHX)"
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
    "Symbol": "SMT**",
    "CoinName": "Social Media Market",
    "FullName": "Social Media Market (SMT)"
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
    "Symbol": "BM*",
    "CoinName": "Bitcomo",
    "FullName": "Bitcomo (BM*)"
  },
  {
    "Symbol": "CPAY",
    "CoinName": "CryptoPay",
    "FullName": "CryptoPay (CPAY)"
  },
  {
    "Symbol": "BON*",
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
    "Symbol": "WOMEN",
    "CoinName": "WomenCoin",
    "FullName": "WomenCoin (WOMEN)"
  },
  {
    "Symbol": "MAY",
    "CoinName": "Theresa May Coin",
    "FullName": "Theresa May Coin (MAY)"
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
    "Symbol": "SCT*",
    "CoinName": "Soma",
    "FullName": "Soma (SCT*)"
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
    "Symbol": "PIRL",
    "CoinName": "Pirl",
    "FullName": "Pirl (PIRL)"
  },
  {
    "Symbol": "ECASH",
    "CoinName": "Ethereum Cash",
    "FullName": "Ethereum Cash (ECASH)"
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
    "Symbol": "CABS*",
    "CoinName": "CyberTrust",
    "FullName": "CyberTrust (CABS*)"
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
    "Symbol": "XIOS",
    "CoinName": "Xios",
    "FullName": "Xios (XIOS)"
  },
  {
    "Symbol": "DOV",
    "CoinName": "DOVU",
    "FullName": "DOVU (DOV)"
  },
  {
    "Symbol": "ETN",
    "CoinName": "Electroneum",
    "FullName": "Electroneum (ETN)"
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
    "Symbol": "LOAN*",
    "CoinName": "Lendoit",
    "FullName": "Lendoit (LOAN)"
  },
  {
    "Symbol": "DTT*",
    "CoinName": "Data Trading",
    "FullName": "Data Trading (DTT*)"
  },
  {
    "Symbol": "MDL*",
    "CoinName": "Modulum",
    "FullName": "Modulum (MDL*)"
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
    "Symbol": "SHP*",
    "CoinName": "Sharpe Capital",
    "FullName": "Sharpe Capital (SHP*)"
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
    "Symbol": "ATM",
    "CoinName": "ATMChain",
    "FullName": "ATMChain (ATM)"
  },
  {
    "Symbol": "EBST",
    "CoinName": "eBoost",
    "FullName": "eBoost (EBST)"
  },
  {
    "Symbol": "KEK",
    "CoinName": "KekCoin",
    "FullName": "KekCoin (KEK)"
  },
  {
    "Symbol": "AID",
    "CoinName": "AidCoin",
    "FullName": "AidCoin (AID)"
  },
  {
    "Symbol": "BHC*",
    "CoinName": "BlackholeCoin",
    "FullName": "BlackholeCoin (BHC*)"
  },
  {
    "Symbol": "ALTCOM",
    "CoinName": "AltCommunity Coin",
    "FullName": "AltCommunity Coin (ALTCOM)"
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
    "Symbol": "DTC",
    "CoinName": "Datacoin",
    "FullName": "Datacoin (DTC*)"
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
    "Symbol": "NEU",
    "CoinName": "Neumark",
    "FullName": "Neumark (NEU)"
  },
  {
    "Symbol": "BDR",
    "CoinName": "BlueDragon",
    "FullName": "BlueDragon (BDR)"
  },
  {
    "Symbol": "DUTCH",
    "CoinName": "Dutch Coin",
    "FullName": "Dutch Coin (DUTCH)"
  },
  {
    "Symbol": "TIO",
    "CoinName": "Trade.io",
    "FullName": "Trade.io (TIO)"
  },
  {
    "Symbol": "HNC*",
    "CoinName": "Huncoin",
    "FullName": "Huncoin (HNC*)"
  },
  {
    "Symbol": "PURA",
    "CoinName": "Pura",
    "FullName": "Pura (PURA)"
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
    "Symbol": "NULS",
    "CoinName": "Nuls",
    "FullName": "Nuls (NULS)"
  },
  {
    "Symbol": "PHR*",
    "CoinName": "Phore",
    "FullName": "Phore (PHR*)"
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
    "Symbol": "ESC*",
    "CoinName": "Ethersportcoin",
    "FullName": "Ethersportcoin (ESC)"
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
    "Symbol": "ELLA",
    "CoinName": "Ellaism",
    "FullName": "Ellaism (ELLA)"
  },
  {
    "Symbol": "BPL",
    "CoinName": "BlockPool",
    "FullName": "BlockPool (BPL)"
  },
  {
    "Symbol": "ROCK*",
    "CoinName": "RocketCoin ",
    "FullName": "RocketCoin  (ROCK*)"
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
    "Symbol": "EPY*",
    "CoinName": "Emphy",
    "FullName": "Emphy (EPY*)"
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
    "Symbol": "MNX",
    "CoinName": "MinexCoin",
    "FullName": "MinexCoin (MNX)"
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
    "Symbol": "SCR*",
    "CoinName": "Scorum",
    "FullName": "Scorum (SCR*)"
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
    "Symbol": "ALQO",
    "CoinName": "Alqo",
    "FullName": "Alqo (ALQO)"
  },
  {
    "Symbol": "KNC**",
    "CoinName": "KingN Coin",
    "FullName": "KingN Coin (KNC**)"
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
    "Symbol": "ECA",
    "CoinName": "Electra",
    "FullName": "Electra (ECA)"
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
    "Symbol": "NIO*",
    "CoinName": "Autonio",
    "FullName": "Autonio (NIO*)"
  },
  {
    "Symbol": "ETHB",
    "CoinName": "EtherBTC",
    "FullName": "EtherBTC (ETHB)"
  },
  {
    "Symbol": "CDX",
    "CoinName": "Commodity Ad Network",
    "FullName": "Commodity Ad Network (CDX)"
  },
  {
    "Symbol": "FOOD",
    "CoinName": "FoodCoin",
    "FullName": "FoodCoin (FOOD)"
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
    "Symbol": "TIO*",
    "CoinName": "Tio Tour Guides",
    "FullName": "Tio Tour Guides (TIO*)"
  },
  {
    "Symbol": "BCD*",
    "CoinName": "BitCAD",
    "FullName": "BitCAD (BCD*)"
  },
  {
    "Symbol": "GEA",
    "CoinName": "Goldea",
    "FullName": "Goldea (GEA)"
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
    "Symbol": "MEOW",
    "CoinName": "Kittehcoin",
    "FullName": "Kittehcoin (MEOW)"
  },
  {
    "Symbol": "CNBC",
    "CoinName": "Cash & Back Coin",
    "FullName": "Cash & Back Coin (CNBC)"
  },
  {
    "Symbol": "RHOC",
    "CoinName": "RChain",
    "FullName": "RChain (RHOC)"
  },
  {
    "Symbol": "ARC*",
    "CoinName": " Arcade City",
    "FullName": " Arcade City (ARC*)"
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
    "Symbol": "RLX",
    "CoinName": "Relex",
    "FullName": "Relex (RLX)"
  },
  {
    "Symbol": "MAN",
    "CoinName": "People",
    "FullName": "People (MAN)"
  },
  {
    "Symbol": "CWV",
    "CoinName": "CryptoWave",
    "FullName": "CryptoWave (CWV)"
  },
  {
    "Symbol": "ACT*",
    "CoinName": "Achain",
    "FullName": "Achain (ACT*)"
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
    "Symbol": "FYP",
    "CoinName": "FlypMe",
    "FullName": "FlypMe (FYP)"
  },
  {
    "Symbol": "NGC",
    "CoinName": "NagaCoin",
    "FullName": "NagaCoin (NGC)"
  },
  {
    "Symbol": "EGAS",
    "CoinName": "ETHGAS",
    "FullName": "ETHGAS (EGAS)"
  },
  {
    "Symbol": "ADB",
    "CoinName": "Adbank",
    "FullName": "Adbank (ADB)"
  },
  {
    "Symbol": "XDCE",
    "CoinName": "XinFin Coin",
    "FullName": "XinFin Coin (XDCE)"
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
    "Symbol": "PCN",
    "CoinName": "PeepCoin",
    "FullName": "PeepCoin (PCN)"
  },
  {
    "Symbol": "CRED",
    "CoinName": "Verify",
    "FullName": "Verify (CRED)"
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
    "Symbol": "TNB",
    "CoinName": "Time New Bank",
    "FullName": "Time New Bank (TNB)"
  },
  {
    "Symbol": "CHIPS*",
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
    "Symbol": "LOC*",
    "CoinName": "LockTrip",
    "FullName": "LockTrip (LOC*)"
  },
  {
    "Symbol": "SMT*",
    "CoinName": "SmartMesh",
    "FullName": "SmartMesh (SMT*)"
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
    "Symbol": "MED*",
    "CoinName": "MediBloc",
    "FullName": "MediBloc (MED*)"
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
    "Symbol": "POP",
    "CoinName": "PopularCoin",
    "FullName": "PopularCoin (POP)"
  },
  {
    "Symbol": "CRC***",
    "CoinName": "CrowdCoin",
    "FullName": "CrowdCoin (CRC***)"
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
    "Symbol": "DAV",
    "CoinName": "DavorCoin",
    "FullName": "DavorCoin (DAV)"
  },
  {
    "Symbol": "GET",
    "CoinName": "Guaranteed Entrance Token",
    "FullName": "Guaranteed Entrance Token (GET)"
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
    "Symbol": "SMART*",
    "CoinName": "SmartBillions",
    "FullName": "SmartBillions (SMART*)"
  },
  {
    "Symbol": "GNX",
    "CoinName": "Genaro Network",
    "FullName": "Genaro Network (GNX)"
  },
  {
    "Symbol": "BTH",
    "CoinName": "Bytether ",
    "FullName": "Bytether  (BTH)"
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
    "CoinName": "Sparks",
    "FullName": "Sparks (SPK)"
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
    "Symbol": "POLIS",
    "CoinName": "PolisPay",
    "FullName": "PolisPay (POLIS)"
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
    "Symbol": "FOR",
    "CoinName": "Force Coin",
    "FullName": "Force Coin (FOR)"
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
    "Symbol": "GCC*",
    "CoinName": "TheGCCcoin",
    "FullName": "TheGCCcoin (GCC*)"
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
    "Symbol": "HPB",
    "CoinName": "High Performance Blockchain",
    "FullName": "High Performance Blockchain (HPB)"
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
    "Symbol": "LWF",
    "CoinName": "Local World Forwarders",
    "FullName": "Local World Forwarders (LWF)"
  },
  {
    "Symbol": "BRC",
    "CoinName": "BrightCoin",
    "FullName": "BrightCoin (BRC)"
  },
  {
    "Symbol": "WCG",
    "CoinName": "World Crypto Gold",
    "FullName": "World Crypto Gold (WCG)"
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
    "Symbol": "BRC*",
    "CoinName": "BinaryCoin",
    "FullName": "BinaryCoin (BRC*)"
  },
  {
    "Symbol": "SPX*",
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
    "Symbol": "LCT",
    "CoinName": "LendConnect",
    "FullName": "LendConnect (LCT)"
  },
  {
    "Symbol": "VST",
    "CoinName": "Vestarin",
    "FullName": "Vestarin (VST)"
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
    "Symbol": "BLN*",
    "CoinName": "Bolenum",
    "FullName": "Bolenum (BLN*)"
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
    "Symbol": "BTO",
    "CoinName": "Bottos",
    "FullName": "Bottos (BTO)"
  },
  {
    "Symbol": "DOC",
    "CoinName": "Doc Coin",
    "FullName": "Doc Coin (DOC)"
  },
  {
    "Symbol": "ARCT",
    "CoinName": "ArbitrageCT",
    "FullName": "ArbitrageCT (ARCT)"
  },
  {
    "Symbol": "AURA",
    "CoinName": "Aurora",
    "FullName": "Aurora (AURA)"
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
    "Symbol": "THETA",
    "CoinName": "Theta",
    "FullName": "Theta (THETA)"
  },
  {
    "Symbol": "MDT*",
    "CoinName": "Measurable Data Token ",
    "FullName": "Measurable Data Token  (MDT*)"
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
    "Symbol": "QBT*",
    "CoinName": "Qbao",
    "FullName": "Qbao (QBT*)"
  },
  {
    "Symbol": "ACC*",
    "CoinName": "Accelerator Network",
    "FullName": "Accelerator Network (ACC*)"
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
    "Symbol": "BTW",
    "CoinName": "BitWhite",
    "FullName": "BitWhite (BTW)"
  },
  {
    "Symbol": "AXPR",
    "CoinName": "aXpire",
    "FullName": "aXpire (AXPR)"
  },
  {
    "Symbol": "FOTA",
    "CoinName": "Fortuna",
    "FullName": "Fortuna (FOTA)"
  },
  {
    "Symbol": "CPC*",
    "CoinName": "CPChain",
    "FullName": "CPChain (CPC*)"
  },
  {
    "Symbol": "SPEND",
    "CoinName": "Spend",
    "FullName": "Spend (SPEND)"
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
    "Symbol": "FAIR*",
    "CoinName": "FairGame",
    "FullName": "FairGame (FAIR*)"
  },
  {
    "Symbol": "MAN*",
    "CoinName": "Matrix AI Network",
    "FullName": "Matrix AI Network (MAN*)"
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
    "Symbol": "CRC**",
    "CoinName": "CryCash",
    "FullName": "CryCash (CRC**)"
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
    "Symbol": "XTO",
    "CoinName": "Tao",
    "FullName": "Tao (XTO)"
  },
  {
    "Symbol": "RUFF",
    "CoinName": "Ruff",
    "FullName": "Ruff (RUFF)"
  },
  {
    "Symbol": "TPAY*",
    "CoinName": "TokenPay",
    "FullName": "TokenPay (TPAY*)"
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
    "Symbol": "RCT",
    "CoinName": "RealChain",
    "FullName": "RealChain (RCT)"
  },
  {
    "Symbol": "HLC",
    "CoinName": "Halal-Chain",
    "FullName": "Halal-Chain (HLC)"
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
    "Symbol": "LHC",
    "CoinName": "LHCoin",
    "FullName": "LHCoin (LHC)"
  },
  {
    "Symbol": "BLZ",
    "CoinName": "Bluzelle",
    "FullName": "Bluzelle (BLZ)"
  },
  {
    "Symbol": "HALAL",
    "CoinName": "Halal",
    "FullName": "Halal (HALAL)"
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
    "Symbol": "CWIS",
    "CoinName": "Crypto Wisdom Coin",
    "FullName": "Crypto Wisdom Coin (CWIS)"
  },
  {
    "Symbol": "MBC",
    "CoinName": "My Big Coin",
    "FullName": "My Big Coin (MBC)"
  },
  {
    "Symbol": "SWM",
    "CoinName": "Swarm Fund",
    "FullName": "Swarm Fund (SWM)"
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
    "Symbol": "TRTL",
    "CoinName": "TurtleCoin",
    "FullName": "TurtleCoin (TRTL)"
  },
  {
    "Symbol": "CARE*",
    "CoinName": "Care Token",
    "FullName": "Care Token (CARE*)"
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
    "Symbol": "NDC*",
    "CoinName": "NeedleCoin",
    "FullName": "NeedleCoin (NDC*)"
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
    "Symbol": "ORI",
    "CoinName": "Origami",
    "FullName": "Origami (ORI)"
  },
  {
    "Symbol": "USX",
    "CoinName": "Unified Society USDEX",
    "FullName": "Unified Society USDEX (USX)"
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
    "Symbol": "SCOOBY",
    "CoinName": "Scooby coin",
    "FullName": "Scooby coin (SCOOBY)"
  },
  {
    "Symbol": "DAI",
    "CoinName": "Dai",
    "FullName": "Dai (DAI)"
  },
  {
    "Symbol": "CEFS",
    "CoinName": "CryptopiaFeeShares",
    "FullName": "CryptopiaFeeShares (CEFS)"
  },
  {
    "Symbol": "MINT*",
    "CoinName": "Mineable Token",
    "FullName": "Mineable Token (MINT*)"
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
    "Symbol": "BTCP",
    "CoinName": "Bitcoin Private",
    "FullName": "Bitcoin Private (BTCP)"
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
    "Symbol": "ERT*",
    "CoinName": "Eristica",
    "FullName": "Eristica (ERT*)"
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
    "Symbol": "BTF",
    "CoinName": "Blockchain Traded Fund",
    "FullName": "Blockchain Traded Fund (BTF)"
  },
  {
    "Symbol": "SHOW",
    "CoinName": "ShowCoin",
    "FullName": "ShowCoin (SHOW)"
  },
  {
    "Symbol": "NEC*",
    "CoinName": "Ethfinex Nectar Token",
    "FullName": "Ethfinex Nectar Token (NEC*)"
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
    "Symbol": "CRE*",
    "CoinName": "Creditcoin",
    "FullName": "Creditcoin (CRE*)"
  },
  {
    "Symbol": "DTC**",
    "CoinName": "DivotyCoin",
    "FullName": "DivotyCoin (DTC**)"
  },
  {
    "Symbol": "DADI",
    "CoinName": "DADI",
    "FullName": "DADI (DADI)"
  },
  {
    "Symbol": "TOKC",
    "CoinName": "Tokyo Coin",
    "FullName": "Tokyo Coin (TOKC)"
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
    "Symbol": "FLX*",
    "CoinName": "BitFlux",
    "FullName": "BitFlux (FLX*)"
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
    "Symbol": "BCR*",
    "CoinName": "Bitcoin Royal",
    "FullName": "Bitcoin Royal (BCR*)"
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
    "Symbol": "GOOD*",
    "CoinName": "Goodomy",
    "FullName": "Goodomy (GOOD*)"
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
    "CoinName": "Republic Token",
    "FullName": "Republic Token (REN)"
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
    "Symbol": "CLN",
    "CoinName": "Colu Local Network",
    "FullName": "Colu Local Network (CLN)"
  },
  {
    "Symbol": "NIHL",
    "CoinName": "Nihilo Coin",
    "FullName": "Nihilo Coin (NIHL)"
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
    "Symbol": "CMCT",
    "CoinName": "Crowd Machine",
    "FullName": "Crowd Machine (CMCT)"
  },
  {
    "Symbol": "PUT*",
    "CoinName": "Robin8 Profile Utility Token",
    "FullName": "Robin8 Profile Utility Token (PUT*)"
  },
  {
    "Symbol": "FILL",
    "CoinName": "Fillit",
    "FullName": "Fillit (FILL)"
  },
  {
    "Symbol": "XYO",
    "CoinName": "XY Oracle",
    "FullName": "XY Oracle (XYO)"
  },
  {
    "Symbol": "RFR",
    "CoinName": "Refereum",
    "FullName": "Refereum (RFR)"
  },
  {
    "Symbol": "FUND",
    "CoinName": "Fund Platform",
    "FullName": "Fund Platform (FUND)"
  },
  {
    "Symbol": "CEL",
    "CoinName": "Celsius Network",
    "FullName": "Celsius Network (CEL)"
  },
  {
    "Symbol": "CS*",
    "CoinName": "Credits",
    "FullName": "Credits (CS*)"
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
    "Symbol": "EVN*",
    "CoinName": "EvenCoin",
    "FullName": "EvenCoin (EVN*)"
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
    "Symbol": "LIPC",
    "CoinName": "LIpcoin",
    "FullName": "LIpcoin (LIPC)"
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
    "Symbol": "ELI",
    "CoinName": "Eligma",
    "FullName": "Eligma (ELI)"
  },
  {
    "Symbol": "CO2",
    "CoinName": "CO2 Token",
    "FullName": "CO2 Token (CO2)"
  },
  {
    "Symbol": "VLX",
    "CoinName": "Velox",
    "FullName": "Velox (VLX)"
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
    "Symbol": "MDX",
    "CoinName": "Midex",
    "FullName": "Midex (MDX)"
  },
  {
    "Symbol": "KIND",
    "CoinName": "Kind Ads",
    "FullName": "Kind Ads (KIND)"
  },
  {
    "Symbol": "BCT",
    "CoinName": "Blockchain Terminal",
    "FullName": "Blockchain Terminal (BCT)"
  },
  {
    "Symbol": "CLO",
    "CoinName": "Callisto Network",
    "FullName": "Callisto Network (CLO)"
  },
  {
    "Symbol": "CRU",
    "CoinName": "Curium",
    "FullName": "Curium (CRU)"
  },
  {
    "Symbol": "ELI*",
    "CoinName": "Elicoin",
    "FullName": "Elicoin (ELI*)"
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
    "CoinName": "Knowledge ",
    "FullName": "Knowledge  (KNW)"
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
    "Symbol": "TKLN",
    "CoinName": "Taklimakan",
    "FullName": "Taklimakan (TKLN)"
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
    "Symbol": "TRCK",
    "CoinName": "Truckcoin",
    "FullName": "Truckcoin (TRCK)"
  },
  {
    "Symbol": "HAV",
    "CoinName": "Havven",
    "FullName": "Havven (HAV)"
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
    "Symbol": "INV*",
    "CoinName": "Invacio",
    "FullName": "Invacio (INV*)"
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
    "Symbol": "VEGA*",
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
    "Symbol": "PROD",
    "CoinName": "Darenta",
    "FullName": "Darenta (PROD)"
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
    "Symbol": "ADK",
    "CoinName": "Aidos Kuneen",
    "FullName": "Aidos Kuneen (ADK)"
  },
  {
    "Symbol": "VIT",
    "CoinName": "Vice Industry Token",
    "FullName": "Vice Industry Token (VIT)"
  },
  {
    "Symbol": "SERA",
    "CoinName": "Seraph",
    "FullName": "Seraph (SERA)"
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
    "Symbol": "TT",
    "CoinName": "TravelChain",
    "FullName": "TravelChain (TT)"
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
    "Symbol": "BSX",
    "CoinName": "Bitspace",
    "FullName": "Bitspace (BSX)"
  },
  {
    "Symbol": "BTCE*",
    "CoinName": "BitcoinEX",
    "FullName": "BitcoinEX (BTCE*)"
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
    "Symbol": "ZSC*",
    "CoinName": "ZeroState",
    "FullName": "ZeroState (ZSC*)"
  },
  {
    "Symbol": "AIC",
    "CoinName": "AI Crypto",
    "FullName": "AI Crypto (AIC)"
  },
  {
    "Symbol": "BBN*",
    "CoinName": "Banyan Network",
    "FullName": "Banyan Network (BBN*)"
  },
  {
    "Symbol": "SPD*",
    "CoinName": "Spindle",
    "FullName": "Spindle (SPD*)"
  },
  {
    "Symbol": "FNO",
    "CoinName": "Fonero",
    "FullName": "Fonero (FNO)"
  },
  {
    "Symbol": "GST",
    "CoinName": "Gostcoin",
    "FullName": "Gostcoin (GST)"
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
    "Symbol": "RNTB",
    "CoinName": "BitRent",
    "FullName": "BitRent (RNTB)"
  },
  {
    "Symbol": "XCLR",
    "CoinName": "ClearCoin",
    "FullName": "ClearCoin (XCLR)"
  },
  {
    "Symbol": "XBP*",
    "CoinName": "BlitzPredict",
    "FullName": "BlitzPredict (XBP*)"
  },
  {
    "Symbol": "DBC*",
    "CoinName": "Debit Coin",
    "FullName": "Debit Coin (DBC*)"
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
    "Symbol": "LION",
    "CoinName": "CoinLion",
    "FullName": "CoinLion (LION)"
  },
  {
    "Symbol": "XTL",
    "CoinName": "Stellite",
    "FullName": "Stellite (XTL)"
  },
  {
    "Symbol": "UCN",
    "CoinName": "UC Coin",
    "FullName": "UC Coin (UCN)"
  },
  {
    "Symbol": "HUR",
    "CoinName": "Hurify",
    "FullName": "Hurify (HUR)"
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
    "Symbol": "LATX",
    "CoinName": "LatiumX",
    "FullName": "LatiumX (LATX)"
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
    "Symbol": "EZT",
    "CoinName": "EZToken",
    "FullName": "EZToken (EZT)"
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
    "Symbol": "XCM",
    "CoinName": "CoinMetro",
    "FullName": "CoinMetro (XCM)"
  },
  {
    "Symbol": "NFN",
    "CoinName": "Nafen",
    "FullName": "Nafen (NFN)"
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
    "Symbol": "MEDIC",
    "CoinName": "MedicCoin",
    "FullName": "MedicCoin (MEDIC)"
  },
  {
    "Symbol": "BBC",
    "CoinName": "TraDove",
    "FullName": "TraDove (BBC)"
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
    "Symbol": "VLD",
    "CoinName": "Valid",
    "FullName": "Valid (VLD)"
  },
  {
    "Symbol": "FTX",
    "CoinName": "FintruX",
    "FullName": "FintruX (FTX)"
  },
  {
    "Symbol": "GSI",
    "CoinName": "Globex SCI",
    "FullName": "Globex SCI (GSI)"
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
    "Symbol": "GEX",
    "CoinName": "GreenX",
    "FullName": "GreenX (GEX)"
  },
  {
    "Symbol": "ABJ",
    "CoinName": "Abjcoin",
    "FullName": "Abjcoin (ABJ)"
  },
  {
    "Symbol": "FTW",
    "CoinName": "FutureWorks",
    "FullName": "FutureWorks (FTW)"
  },
  {
    "Symbol": "RAP",
    "CoinName": "Rapture",
    "FullName": "Rapture (RAP)"
  },
  {
    "Symbol": "ARTE",
    "CoinName": "Artemine",
    "FullName": "Artemine (ARTE)"
  },
  {
    "Symbol": "ANI",
    "CoinName": "Animecoin",
    "FullName": "Animecoin (ANI)"
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
    "Symbol": "RAC*",
    "CoinName": "RoboAdvisorCoin",
    "FullName": "RoboAdvisorCoin (RAC*)"
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
    "Symbol": "DARX",
    "CoinName": "Bitdaric",
    "FullName": "Bitdaric (DARX)"
  },
  {
    "Symbol": "RAC**",
    "CoinName": "RoBET",
    "FullName": "RoBET (RAC**)"
  },
  {
    "Symbol": "NCT",
    "CoinName": "PolySwarm",
    "FullName": "PolySwarm (NCT)"
  },
  {
    "Symbol": "UWC",
    "CoinName": "Uwezocoin",
    "FullName": "Uwezocoin (UWC)"
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
    "Symbol": "ADH",
    "CoinName": "Adhive",
    "FullName": "Adhive (ADH)"
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
    "CoinName": "The EFFECT Network",
    "FullName": "The EFFECT Network (EFX)"
  },
  {
    "Symbol": "LND",
    "CoinName": "Lendingblock",
    "FullName": "Lendingblock (LND)"
  },
  {
    "Symbol": "MRP*",
    "CoinName": "MoneyRebel",
    "FullName": "MoneyRebel (MRP*)"
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
    "Symbol": "WIN",
    "CoinName": "WCoin",
    "FullName": "WCoin (WIN)"
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
    "Symbol": "CRS",
    "CoinName": "Cryptoreal",
    "FullName": "Cryptoreal (CRS)"
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
    "Symbol": "SRC**",
    "CoinName": "SwissRealCoin",
    "FullName": "SwissRealCoin (SRC**)"
  },
  {
    "Symbol": "IFX",
    "CoinName": "Infinex",
    "FullName": "Infinex (IFX)"
  },
  {
    "Symbol": "0XBTC",
    "CoinName": "0xBitcoin",
    "FullName": "0xBitcoin (0xBTC)"
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
    "Symbol": "GSC",
    "CoinName": "Global Social Chain",
    "FullName": "Global Social Chain (GSC)"
  },
  {
    "Symbol": "VLUX",
    "CoinName": "VLUX",
    "FullName": "VLUX (VLUX)"
  },
  {
    "Symbol": "MT*",
    "CoinName": "MyToken",
    "FullName": "MyToken (MT*)"
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
    "Symbol": "TRUE",
    "CoinName": "True Chain",
    "FullName": "True Chain (TRUE)"
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
    "Symbol": "HYDRO",
    "CoinName": "Hydrogen",
    "FullName": "Hydrogen (HYDRO)"
  },
  {
    "Symbol": "DXC",
    "CoinName": "DixiCoin",
    "FullName": "DixiCoin (DXC)"
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
    "Symbol": "AXS",
    "CoinName": "AXS",
    "FullName": "AXS (AXS)"
  },
  {
    "Symbol": "LBA",
    "CoinName": "Libra Credit",
    "FullName": "Libra Credit (LBA)"
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
    "Symbol": "HOT",
    "CoinName": "Hydro Protocol",
    "FullName": "Hydro Protocol (HOT)"
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
    "Symbol": "LNC*",
    "CoinName": "Linker Coin",
    "FullName": "Linker Coin (LNC*)"
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
    "Symbol": "MSC*",
    "CoinName": "MaisCoin",
    "FullName": "MaisCoin (MSC*)"
  },
  {
    "Symbol": "REPO",
    "CoinName": "Repo Coin",
    "FullName": "Repo Coin (REPO)"
  },
  {
    "Symbol": "PLC*",
    "CoinName": "PlatinCoin",
    "FullName": "PlatinCoin (PLC*)"
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
    "Symbol": "AUC*",
    "CoinName": "AU-Coin",
    "FullName": "AU-Coin (AUC*)"
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
    "Symbol": "EDR*",
    "CoinName": "Endor Protocol Token ",
    "FullName": "Endor Protocol Token  (EDR*)"
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
    "Symbol": "SOUL*",
    "CoinName": "Phantasma",
    "FullName": "Phantasma (SOUL*)"
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
    "Symbol": "ALG",
    "CoinName": "Algory",
    "FullName": "Algory (ALG)"
  },
  {
    "Symbol": "PAI",
    "CoinName": "PCHAIN",
    "FullName": "PCHAIN (PAI)"
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
    "Symbol": "EJAC",
    "CoinName": "EJA Coin",
    "FullName": "EJA Coin (EJAC)"
  },
  {
    "Symbol": "UPP",
    "CoinName": "Sentinel Protocol",
    "FullName": "Sentinel Protocol (UPP)"
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
    "Symbol": "SCX",
    "CoinName": "Swachhcoin",
    "FullName": "Swachhcoin (SCX)"
  },
  {
    "Symbol": "NWCN",
    "CoinName": "NowCoin",
    "FullName": "NowCoin (NWCN)"
  },
  {
    "Symbol": "AEC*",
    "CoinName": "EmaratCoin",
    "FullName": "EmaratCoin (AEC*)"
  },
  {
    "Symbol": "BTF*",
    "CoinName": "BitcoinFor",
    "FullName": "BitcoinFor (BTF*)"
  },
  {
    "Symbol": "GMC*",
    "CoinName": "GMC Coin",
    "FullName": "GMC Coin (GMC*)"
  },
  {
    "Symbol": "PURK",
    "CoinName": "Purk",
    "FullName": "Purk (PURK)"
  },
  {
    "Symbol": "ROE",
    "CoinName": "Rover Coin",
    "FullName": "Rover Coin (ROE)"
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
    "Symbol": "OCC",
    "CoinName": "Original Crypto Coin",
    "FullName": "Original Crypto Coin (OCC)"
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
    "Symbol": "GMCN",
    "CoinName": "GambleCoin",
    "FullName": "GambleCoin (GMCN)"
  },
  {
    "Symbol": "TRVC",
    "CoinName": "Trivecoin",
    "FullName": "Trivecoin (TRVC)"
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
    "Symbol": "SKB*",
    "CoinName": "Sakura Bloom",
    "FullName": "Sakura Bloom (SKB*)"
  },
  {
    "Symbol": "HFT",
    "CoinName": "Hirefreehands",
    "FullName": "Hirefreehands (HFT)"
  },
  {
    "Symbol": "OPP*",
    "CoinName": "OPP Open WiFi",
    "FullName": "OPP Open WiFi (OPP*)"
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
    "Symbol": "JOY*",
    "CoinName": "JOYSO",
    "FullName": "JOYSO (JOY*)"
  },
  {
    "Symbol": "VITAE",
    "CoinName": "Vitae",
    "FullName": "Vitae (VITAE)"
  },
  {
    "Symbol": "0xDIARY",
    "CoinName": "The 0xDiary Token",
    "FullName": "The 0xDiary Token (0xDIARY)"
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
    "Symbol": "WEB*",
    "CoinName": "Webchain",
    "FullName": "Webchain (WEB*)"
  },
  {
    "Symbol": "JEX",
    "CoinName": "JEX Token",
    "FullName": "JEX Token (JEX)"
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
    "Symbol": "BTN",
    "CoinName": "Bitcoin Nova",
    "FullName": "Bitcoin Nova (BTN)"
  },
  {
    "Symbol": "ARE",
    "CoinName": "ARENON",
    "FullName": "ARENON (ARE)"
  },
  {
    "Symbol": "DAC",
    "CoinName": "DACash",
    "FullName": "DACash (DAC)"
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
    "Symbol": "EGT",
    "CoinName": "Egretia",
    "FullName": "Egretia (EGT)"
  },
  {
    "Symbol": "MET*",
    "CoinName": "Metronome",
    "FullName": "Metronome (MET*)"
  },
  {
    "Symbol": "PGT",
    "CoinName": "Puregold token",
    "FullName": "Puregold token (PGT)"
  },
  {
    "Symbol": "MEDX",
    "CoinName": "Mediblock",
    "FullName": "Mediblock (MEDX)"
  },
  {
    "Symbol": "TGAME",
    "CoinName": "TrueGame",
    "FullName": "TrueGame (TGAME)"
  },
  {
    "Symbol": "SPN*",
    "CoinName": "Sapien Network",
    "FullName": "Sapien Network (SPN*)"
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
    "Symbol": "DCC*",
    "CoinName": "Distributed Credit Chain",
    "FullName": "Distributed Credit Chain (DCC*)"
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
    "Symbol": "MTN**",
    "CoinName": "Motion",
    "FullName": "Motion (MTN**)"
  },
  {
    "Symbol": "XIN*",
    "CoinName": "Mixin",
    "FullName": "Mixin (XIN*)"
  },
  {
    "Symbol": "CRE**",
    "CoinName": "Cybereits Token ",
    "FullName": "Cybereits Token  (CRE**)"
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
    "Symbol": "BWT",
    "CoinName": "Bittwatt",
    "FullName": "Bittwatt (BWT)"
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
    "Symbol": "GOT*",
    "CoinName": "GoToken",
    "FullName": "GoToken (GOT*)"
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
    "Symbol": "RDC",
    "CoinName": "Ordocoin",
    "FullName": "Ordocoin (RDC)"
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
    "Symbol": "HMD",
    "CoinName": "Homelend",
    "FullName": "Homelend (HMD)"
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
    "Symbol": "EMT*",
    "CoinName": "Memority",
    "FullName": "Memority (EMT*)"
  },
  {
    "Symbol": "QUA",
    "CoinName": "Quasa",
    "FullName": "Quasa (QUA)"
  },
  {
    "Symbol": "ENTRY",
    "CoinName": "ENTRY",
    "FullName": "ENTRY (ENTRY)"
  },
  {
    "Symbol": "PHT",
    "CoinName": "Photochain",
    "FullName": "Photochain (PHT)"
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
    "Symbol": "DNET*",
    "CoinName": "DeNet",
    "FullName": "DeNet (DNET*)"
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
    "Symbol": "PRLPAY",
    "CoinName": "PearlPay",
    "FullName": "PearlPay (PRLPAY)"
  },
  {
    "Symbol": "SKYFT",
    "CoinName": "SKYFchain",
    "FullName": "SKYFchain (SKYFT)"
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
    "Symbol": "BUD",
    "CoinName": "Buddy",
    "FullName": "Buddy (BUD)"
  },
  {
    "Symbol": "GMB",
    "CoinName": "GAMB",
    "FullName": "GAMB (GMB)"
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
    "Symbol": "NOIA",
    "CoinName": "NOIA Network",
    "FullName": "NOIA Network (NOIA)"
  },
  {
    "Symbol": "BST*",
    "CoinName": "BOOSTO",
    "FullName": "BOOSTO (BST*)"
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
    "Symbol": "WPT",
    "CoinName": "Worldopoly",
    "FullName": "Worldopoly (WPT)"
  },
  {
    "Symbol": "XEP",
    "CoinName": "ephelants360",
    "FullName": "ephelants360 (XEP)"
  },
  {
    "Symbol": "ARB*",
    "CoinName": "ARBITRAGE",
    "FullName": "ARBITRAGE (ARB*)"
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
    "Symbol": "XDT",
    "CoinName": "Dataeum",
    "FullName": "Dataeum (XDT)"
  },
  {
    "Symbol": "ATX*",
    "CoinName": "Aston",
    "FullName": "Aston (ATX*)"
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
    "Symbol": "AIRE",
    "CoinName": "Tokenaire",
    "FullName": "Tokenaire (AIRE)"
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
    "Symbol": "TRT",
    "CoinName": "TuurnT",
    "FullName": "TuurnT (TRT)"
  },
  {
    "Symbol": "CRS*",
    "CoinName": "CRYSTALS",
    "FullName": "CRYSTALS (CRS*)"
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
    "Symbol": "ZCN*",
    "CoinName": "Zichain",
    "FullName": "Zichain (ZCN*)"
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
    "Symbol": "CRGO",
    "CoinName": "CargoCoin",
    "FullName": "CargoCoin (CRGO)"
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
    "Symbol": "VLP",
    "CoinName": "Volpo",
    "FullName": "Volpo (VLP)"
  },
  {
    "Symbol": "PGC*",
    "CoinName": "Paygine",
    "FullName": "Paygine (PGC*)"
  },
  {
    "Symbol": "ZIP",
    "CoinName": "Zipper",
    "FullName": "Zipper (ZIP)"
  },
  {
    "Symbol": "BOS*",
    "CoinName": "Bostoken",
    "FullName": "Bostoken (BOS*)"
  },
  {
    "Symbol": "1WO",
    "CoinName": "1World",
    "FullName": "1World (1WO)"
  },
  {
    "Symbol": "BOUTS",
    "CoinName": "BoutsPro",
    "FullName": "BoutsPro (BOUTS)"
  },
  {
    "Symbol": "ORS*",
    "CoinName": "OriginSport",
    "FullName": "OriginSport (ORS*)"
  },
  {
    "Symbol": "OGT",
    "CoinName": "One Game",
    "FullName": "One Game (OGT)"
  },
  {
    "Symbol": "NPER",
    "CoinName": "NPER",
    "FullName": "NPER (NPER)"
  },
  {
    "Symbol": "XCG",
    "CoinName": "Xchange",
    "FullName": "Xchange (XCG)"
  },
  {
    "Symbol": "BSC*",
    "CoinName": "BOONSCoin",
    "FullName": "BOONSCoin (BSC*)"
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
    "Symbol": "EXT*",
    "CoinName": "Experience Token",
    "FullName": "Experience Token (EXT*)"
  },
  {
    "Symbol": "EOT*",
    "CoinName": "EON",
    "FullName": "EON (EOT*)"
  },
  {
    "Symbol": "ELT*",
    "CoinName": "ExtraLovers",
    "FullName": "ExtraLovers (ELT*)"
  },
  {
    "Symbol": "BLV",
    "CoinName": "Blockvest",
    "FullName": "Blockvest (BLV)"
  },
  {
    "Symbol": "IG",
    "CoinName": "IG Token ",
    "FullName": "IG Token  (IG)"
  },
  {
    "Symbol": "TLU",
    "CoinName": "Irene Energy",
    "FullName": "Irene Energy (TLU)"
  },
  {
    "Symbol": "KAN",
    "CoinName": "Bitkan",
    "FullName": "Bitkan (KAN)"
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
    "Symbol": "SGC",
    "CoinName": "Sudan Gold Coin",
    "FullName": "Sudan Gold Coin (SGC)"
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
    "Symbol": "BRNX",
    "CoinName": "Bronix",
    "FullName": "Bronix (BRNX)"
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
    "Symbol": "PASS",
    "CoinName": "Blockpass",
    "FullName": "Blockpass (PASS)"
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
    "Symbol": "PESA",
    "CoinName": "Credible",
    "FullName": "Credible (PESA)"
  },
  {
    "Symbol": "GLN",
    "CoinName": "Galion Token",
    "FullName": "Galion Token (GLN)"
  },
  {
    "Symbol": "NOBS",
    "CoinName": "No BS Crypto",
    "FullName": "No BS Crypto ($NOBS)"
  },
  {
    "Symbol": "CPEX",
    "CoinName": "CoinPulseToken",
    "FullName": "CoinPulseToken (CPEX)"
  },
  {
    "Symbol": "MON",
    "CoinName": "MilionCoin",
    "FullName": "MilionCoin (MON)"
  },
  {
    "Symbol": "XMC",
    "CoinName": "Monero Classic",
    "FullName": "Monero Classic (XMC)"
  },
  {
    "Symbol": "XMO",
    "CoinName": "Monero Original",
    "FullName": "Monero Original (XMO)"
  },
  {
    "Symbol": "HDAC",
    "CoinName": "Hdac",
    "FullName": "Hdac (HDAC)"
  },
  {
    "Symbol": "ISR",
    "CoinName": "Insureum",
    "FullName": "Insureum (ISR)"
  },
  {
    "Symbol": "RDN*",
    "CoinName": "Raiden Network",
    "FullName": "Raiden Network (RDN*)"
  },
  {
    "Symbol": "EURN",
    "CoinName": "NOKU EUR",
    "FullName": "NOKU EUR (EURN)"
  },
  {
    "Symbol": "NOKU",
    "CoinName": "NOKU Master token",
    "FullName": "NOKU Master token (NOKU)"
  },
  {
    "Symbol": "PCCM",
    "CoinName": "Poseidon Chain",
    "FullName": "Poseidon Chain (PCCM)"
  },
  {
    "Symbol": "XMY",
    "CoinName": "MyriadCoin",
    "FullName": "MyriadCoin (XMY)"
  },
  {
    "Symbol": "LCC",
    "CoinName": "LitecoinCash",
    "FullName": "LitecoinCash (LCC)"
  },
  {
    "Symbol": "BSD",
    "CoinName": "BitSend",
    "FullName": "BitSend (BSD)"
  },
  {
    "Symbol": "MIB",
    "CoinName": "Mobile Integrated Blockchain",
    "FullName": "Mobile Integrated Blockchain (MIB)"
  },
  {
    "Symbol": "PUT",
    "CoinName": "PutinCoin",
    "FullName": "PutinCoin (PUT)"
  },
  {
    "Symbol": "BAAS",
    "CoinName": "BaaSid",
    "FullName": "BaaSid (BAAS)"
  },
  {
    "Symbol": "DPY",
    "CoinName": "Delphy",
    "FullName": "Delphy (DPY)"
  },
  {
    "Symbol": "BNTE",
    "CoinName": "Bountie",
    "FullName": "Bountie (BNTE)"
  },
  {
    "Symbol": "TRIO",
    "CoinName": "Tripio",
    "FullName": "Tripio (TRIO)"
  },
  {
    "Symbol": "EVER",
    "CoinName": "EverLife.AI",
    "FullName": "EverLife.AI (EVER)"
  },
  {
    "Symbol": "CLPX",
    "CoinName": "Chynge.net",
    "FullName": "Chynge.net (CLPX)"
  },
  {
    "Symbol": "ZNAQ",
    "CoinName": "ZNAQ",
    "FullName": "ZNAQ (ZNAQ)"
  },
  {
    "Symbol": "NEX",
    "CoinName": "Neonexchange ",
    "FullName": "Neonexchange  (NEX)"
  },
  {
    "Symbol": "SRCOIN",
    "CoinName": "SRCoin",
    "FullName": "SRCoin (SRCOIN)"
  },
  {
    "Symbol": "VIDT",
    "CoinName": "V-ID",
    "FullName": "V-ID (VIDT)"
  },
  {
    "Symbol": "TRVR",
    "CoinName": "Trivver",
    "FullName": "Trivver (TRVR)"
  },
  {
    "Symbol": "GIC",
    "CoinName": "Giant",
    "FullName": "Giant (GIC)"
  },
  {
    "Symbol": "XSN",
    "CoinName": "Stakenet",
    "FullName": "Stakenet (XSN)"
  },
  {
    "Symbol": "PCH",
    "CoinName": "POPCHAIN",
    "FullName": "POPCHAIN (PCH)"
  },
  {
    "Symbol": "TMTG",
    "CoinName": "Digital Gold Exchange",
    "FullName": "Digital Gold Exchange (TMTG)"
  },
  {
    "Symbol": "CET*",
    "CoinName": "DICE Money",
    "FullName": "DICE Money (CET*)"
  },
  {
    "Symbol": "GUSD",
    "CoinName": "Gemini Dollar",
    "FullName": "Gemini Dollar (GUSD)"
  },
  {
    "Symbol": "HRO",
    "CoinName": "HEROIC.com",
    "FullName": "HEROIC.com (HRO)"
  },
  {
    "Symbol": "BLX",
    "CoinName": "Blockchain Index",
    "FullName": "Blockchain Index (BLX)"
  },
  {
    "Symbol": "WPP",
    "CoinName": "Green Energy Token",
    "FullName": "Green Energy Token (WPP)"
  },
  {
    "Symbol": "AAC",
    "CoinName": "Acute Angle Cloud",
    "FullName": "Acute Angle Cloud (AAC)"
  },
  {
    "Symbol": "ZP",
    "CoinName": "Zen Protocol",
    "FullName": "Zen Protocol (ZP)"
  },
  {
    "Symbol": "WELL",
    "CoinName": "Well",
    "FullName": "Well (WELL)"
  },
  {
    "Symbol": "AUR",
    "CoinName": "Aurora Coin",
    "FullName": "Aurora Coin (AUR)"
  },
  {
    "Symbol": "CTKN",
    "CoinName": "Curaizon",
    "FullName": "Curaizon (CTKN)"
  },
  {
    "Symbol": "SPOT",
    "CoinName": "Spotcoin",
    "FullName": "Spotcoin (SPOT)"
  },
  {
    "Symbol": "TRAID",
    "CoinName": "Traid",
    "FullName": "Traid (TRAID)"
  },
  {
    "Symbol": "CEDEX",
    "CoinName": "CEDEX Coin",
    "FullName": "CEDEX Coin (CEDEX)"
  },
  {
    "Symbol": "LYM",
    "CoinName": "Lympo",
    "FullName": "Lympo (LYM)"
  },
  {
    "Symbol": "OPU",
    "CoinName": "Opu Coin",
    "FullName": "Opu Coin (OPU)"
  },
  {
    "Symbol": "PROD*",
    "CoinName": "Productivist",
    "FullName": "Productivist (PROD*)"
  },
  {
    "Symbol": "REDC",
    "CoinName": "RedCab",
    "FullName": "RedCab (REDC)"
  },
  {
    "Symbol": "DXC*",
    "CoinName": "Daox",
    "FullName": "Daox (DXC*)"
  },
  {
    "Symbol": "HANA",
    "CoinName": "Hanacoin",
    "FullName": "Hanacoin (HANA)"
  },
  {
    "Symbol": "CRL",
    "CoinName": "Cryptelo Coin",
    "FullName": "Cryptelo Coin (CRL)"
  },
  {
    "Symbol": "INVOX",
    "CoinName": "Invox Finance",
    "FullName": "Invox Finance (INVOX)"
  },
  {
    "Symbol": "MNTS",
    "CoinName": "Mint",
    "FullName": "Mint (MNTS)"
  },
  {
    "Symbol": "CBC*",
    "CoinName": "CashBagCoin",
    "FullName": "CashBagCoin (CBC*)"
  },
  {
    "Symbol": "ILT",
    "CoinName": "iOlite",
    "FullName": "iOlite (ILT)"
  },
  {
    "Symbol": "ZYD",
    "CoinName": "ZayedCoin",
    "FullName": "ZayedCoin (ZYD)"
  },
  {
    "Symbol": "GRO",
    "CoinName": "Gron Digital",
    "FullName": "Gron Digital (GRO)"
  },
  {
    "Symbol": "ABYSS",
    "CoinName": "The Abyss",
    "FullName": "The Abyss (ABYSS)"
  },
  {
    "Symbol": "MNE",
    "CoinName": "Minereum",
    "FullName": "Minereum (MNE)"
  },
  {
    "Symbol": "YUM",
    "CoinName": "Yumerium",
    "FullName": "Yumerium (YUM)"
  },
  {
    "Symbol": "ADX",
    "CoinName": "AdEx",
    "FullName": "AdEx (ADX)"
  },
  {
    "Symbol": "RKC",
    "CoinName": "Royal Kingdom Coin",
    "FullName": "Royal Kingdom Coin (RKC)"
  },
  {
    "Symbol": "ETHOS",
    "CoinName": "Ethos",
    "FullName": "Ethos (ETHOS)"
  },
  {
    "Symbol": "OKOIN",
    "CoinName": "OKOIN",
    "FullName": "OKOIN (OKOIN)"
  },
  {
    "Symbol": "TDP",
    "CoinName": "TrueDeck",
    "FullName": "TrueDeck (TDP)"
  },
  {
    "Symbol": "CIX",
    "CoinName": "Cryptonetix",
    "FullName": "Cryptonetix (CIX)"
  },
  {
    "Symbol": "UBT",
    "CoinName": "UniBright",
    "FullName": "UniBright (UBT)"
  },
  {
    "Symbol": "DIP",
    "CoinName": "Etherisc",
    "FullName": "Etherisc (DIP)"
  },
  {
    "Symbol": "CHF*",
    "CoinName": "MobileBridge Momentum",
    "FullName": "MobileBridge Momentum (CHF*)"
  },
  {
    "Symbol": "VRA",
    "CoinName": "Verasity",
    "FullName": "Verasity (VRA)"
  },
  {
    "Symbol": "DROP",
    "CoinName": "Dropil",
    "FullName": "Dropil (DROP)"
  },
  {
    "Symbol": "COIN",
    "CoinName": "Coinvest",
    "FullName": "Coinvest (COIN)"
  },
  {
    "Symbol": "ETT",
    "CoinName": "EncryptoTel",
    "FullName": "EncryptoTel (ETT)"
  },
  {
    "Symbol": "TMT**",
    "CoinName": "Traxia Membership Token",
    "FullName": "Traxia Membership Token (TMT**)"
  },
  {
    "Symbol": "HLD",
    "CoinName": "HyperLending",
    "FullName": "HyperLending (HLD)"
  },
  {
    "Symbol": "HYC",
    "CoinName": "HYCON",
    "FullName": "HYCON (HYC)"
  },
  {
    "Symbol": "DACC",
    "CoinName": "Decentralized Accessible Content Chain ",
    "FullName": "Decentralized Accessible Content Chain  (DACC)"
  },
  {
    "Symbol": "ICST",
    "CoinName": "ICST",
    "FullName": "ICST (ICST)"
  },
  {
    "Symbol": "BEC",
    "CoinName": "Beauty Chain",
    "FullName": "Beauty Chain (BEC)"
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
    "Symbol": "LPC*",
    "CoinName": "Lightpaycoin",
    "FullName": "Lightpaycoin (LPC*)"
  },
  {
    "Symbol": "BTV",
    "CoinName": "Bitvote",
    "FullName": "Bitvote (BTV)"
  },
  {
    "Symbol": "SHE",
    "CoinName": "Shine Chain",
    "FullName": "Shine Chain (SHE)"
  },
  {
    "Symbol": "CCT",
    "CoinName": "Crystal Clear Token ",
    "FullName": "Crystal Clear Token  (CCT)"
  },
  {
    "Symbol": "ARENA",
    "CoinName": "Arena",
    "FullName": "Arena (ARENA)"
  },
  {
    "Symbol": "SGR",
    "CoinName": "Sugar Exchange",
    "FullName": "Sugar Exchange (SGR)"
  },
  {
    "Symbol": "AUN",
    "CoinName": "Authoreon",
    "FullName": "Authoreon (AUN)"
  },
  {
    "Symbol": "DAN",
    "CoinName": "Daneel",
    "FullName": "Daneel (DAN)"
  },
  {
    "Symbol": "HHEM",
    "CoinName": "Healthureum",
    "FullName": "Healthureum (HHEM)"
  },
  {
    "Symbol": "XNK",
    "CoinName": "Ink Protocol",
    "FullName": "Ink Protocol (XNK)"
  },
  {
    "Symbol": "DDD",
    "CoinName": "Scry.info",
    "FullName": "Scry.info (DDD)"
  },
  {
    "Symbol": "PROOF",
    "CoinName": "PROVER",
    "FullName": "PROVER (PROOF)"
  },
  {
    "Symbol": "STM",
    "CoinName": "Streamity",
    "FullName": "Streamity (STM)"
  },
  {
    "Symbol": "BST",
    "CoinName": "BitStone",
    "FullName": "BitStone (BST)"
  },
  {
    "Symbol": "KVT*",
    "CoinName": "Kvantor",
    "FullName": "Kvantor (KVT*)"
  },
  {
    "Symbol": "IHF",
    "CoinName": "Invictus Hyperion Fund",
    "FullName": "Invictus Hyperion Fund (IHF)"
  },
  {
    "Symbol": "8BT",
    "CoinName": "8 Circuit Studios",
    "FullName": "8 Circuit Studios (8BT)"
  },
  {
    "Symbol": "IMT",
    "CoinName": "MoneyToken",
    "FullName": "MoneyToken (IMT)"
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
    "Symbol": "OMI",
    "CoinName": "ECOMI",
    "FullName": "ECOMI (OMI)"
  },
  {
    "Symbol": "ROBET",
    "CoinName": "RoBet",
    "FullName": "RoBet (ROBET)"
  },
  {
    "Symbol": "UBEX",
    "CoinName": "Ubex",
    "FullName": "Ubex (UBEX)"
  },
  {
    "Symbol": "PSK",
    "CoinName": "Pool of Stake",
    "FullName": "Pool of Stake (PSK)"
  },
  {
    "Symbol": "GBTC",
    "CoinName": "GigTricks",
    "FullName": "GigTricks (GBTC)"
  },
  {
    "Symbol": "AUK",
    "CoinName": "Aukcecoin",
    "FullName": "Aukcecoin (AUK)"
  },
  {
    "Symbol": "URP",
    "CoinName": "Universal Reward Protocol",
    "FullName": "Universal Reward Protocol (URP)"
  },
  {
    "Symbol": "IVN",
    "CoinName": "IVN Security",
    "FullName": "IVN Security (IVN)"
  },
  {
    "Symbol": "ZEN",
    "CoinName": "Horizen",
    "FullName": "Horizen (ZEN)"
  },
  {
    "Symbol": "ETT*",
    "CoinName": "Eternal Trusts",
    "FullName": "Eternal Trusts (ETT*)"
  },
  {
    "Symbol": "PAVO",
    "CoinName": "Pavocoin",
    "FullName": "Pavocoin (PAVO)"
  },
  {
    "Symbol": "USCOIN",
    "CoinName": "USCoin",
    "FullName": "USCoin (USCOIN)"
  },
  {
    "Symbol": "TRIP",
    "CoinName": "Trippki",
    "FullName": "Trippki (TRIP)"
  },
  {
    "Symbol": "BCIO",
    "CoinName": "Blockchain.io",
    "FullName": "Blockchain.io (BCIO)"
  },
  {
    "Symbol": "XDN",
    "CoinName": "DigitalNote ",
    "FullName": "DigitalNote  (XDN)"
  },
  {
    "Symbol": "MTC",
    "CoinName": "DOCADEMIC",
    "FullName": "DOCADEMIC (MTC)"
  },
  {
    "Symbol": "MODEX",
    "CoinName": "MODEX Token",
    "FullName": "MODEX Token (MODEX)"
  },
  {
    "Symbol": "BNR",
    "CoinName": "BiNeuro",
    "FullName": "BiNeuro (BNR)"
  },
  {
    "Symbol": "SEN*",
    "CoinName": "Consensus",
    "FullName": "Consensus (SEN*)"
  },
  {
    "Symbol": "ETE",
    "CoinName": "EXTRADECOIN",
    "FullName": "EXTRADECOIN (ETE)"
  },
  {
    "Symbol": "SWA",
    "CoinName": "Swace",
    "FullName": "Swace (SWA)"
  },
  {
    "Symbol": "TDZ",
    "CoinName": "Tradelize",
    "FullName": "Tradelize (TDZ)"
  },
  {
    "Symbol": "BOB",
    "CoinName": "Bob's Repair",
    "FullName": "Bob's Repair (BOB)"
  },
  {
    "Symbol": "ZAT",
    "CoinName": "ZatGo",
    "FullName": "ZatGo (ZAT)"
  },
  {
    "Symbol": "DAV*",
    "CoinName": "DAV",
    "FullName": "DAV (DAV*)"
  },
  {
    "Symbol": "NHCT",
    "CoinName": "Nano Healthcare Token",
    "FullName": "Nano Healthcare Token (NHCT)"
  },
  {
    "Symbol": "MTCMN",
    "CoinName": "MTC Mesh",
    "FullName": "MTC Mesh (MTCMN)"
  },
  {
    "Symbol": "DAPS",
    "CoinName": "DAPS Token",
    "FullName": "DAPS Token (DAPS)"
  },
  {
    "Symbol": "ATON",
    "CoinName": "Further Network",
    "FullName": "Further Network (ATON)"
  },
  {
    "Symbol": "ZEST",
    "CoinName": "ZestCoin",
    "FullName": "ZestCoin (ZEST)"
  },
  {
    "Symbol": "EVX",
    "CoinName": "Everex",
    "FullName": "Everex (EVX)"
  },
  {
    "Symbol": "HLM",
    "CoinName": "Helium",
    "FullName": "Helium (HLM)"
  },
  {
    "Symbol": "MOAC",
    "CoinName": "MOAC",
    "FullName": "MOAC (MOAC)"
  },
  {
    "Symbol": "ONGAS",
    "CoinName": "Ontology Gas",
    "FullName": "Ontology Gas (ONGAS)"
  },
  {
    "Symbol": "BIPC",
    "CoinName": "BipCoin",
    "FullName": "BipCoin (BIPC)"
  },
  {
    "Symbol": "XCSH",
    "CoinName": "Xcash",
    "FullName": "Xcash (XCSH)"
  },
  {
    "Symbol": "AT",
    "CoinName": "ABCC Token",
    "FullName": "ABCC Token (AT)"
  },
  {
    "Symbol": "JIB",
    "CoinName": "Jibbit",
    "FullName": "Jibbit (JIB)"
  },
  {
    "Symbol": "PHM",
    "CoinName": "Phomeum",
    "FullName": "Phomeum (PHM)"
  },
  {
    "Symbol": "TCX",
    "CoinName": "T-Coin",
    "FullName": "T-Coin (TCX)"
  },
  {
    "Symbol": "QUANT",
    "CoinName": "Quantler",
    "FullName": "Quantler (QUANT)"
  },
  {
    "Symbol": "XCASH",
    "CoinName": "X-CASH",
    "FullName": "X-CASH (XCASH)"
  },
  {
    "Symbol": "BIP",
    "CoinName": "Minter",
    "FullName": "Minter (BIP)"
  },
  {
    "Symbol": "GGR",
    "CoinName": "GGRocket",
    "FullName": "GGRocket (GGR)"
  },
  {
    "Symbol": "MNV",
    "CoinName": "MonetaVerde",
    "FullName": "MonetaVerde (MNV)"
  },
  {
    "Symbol": "MCN",
    "CoinName": "mCoin",
    "FullName": "mCoin (MCN)"
  },
  {
    "Symbol": "PERU",
    "CoinName": "PeruCoin",
    "FullName": "PeruCoin (PERU)"
  },
  {
    "Symbol": "CSP",
    "CoinName": "Caspian",
    "FullName": "Caspian (CSP)"
  },
  {
    "Symbol": "DEPO",
    "CoinName": "Depository Network",
    "FullName": "Depository Network (DEPO)"
  },
  {
    "Symbol": "MDN",
    "CoinName": "MADANA",
    "FullName": "MADANA (MDN)"
  },
  {
    "Symbol": "PMTN",
    "CoinName": "Peer Mountain",
    "FullName": "Peer Mountain (PMTN)"
  },
  {
    "Symbol": "GMA",
    "CoinName": "Goldchip Mining Asset",
    "FullName": "Goldchip Mining Asset (GMA)"
  },
  {
    "Symbol": "RUPX",
    "CoinName": "Rupaya",
    "FullName": "Rupaya (RUPX)"
  },
  {
    "Symbol": "GBXT",
    "CoinName": "Globitex Token",
    "FullName": "Globitex Token (GBXT)"
  },
  {
    "Symbol": "BRAZ",
    "CoinName": "Brazio",
    "FullName": "Brazio (BRAZ)"
  },
  {
    "Symbol": "FLEX",
    "CoinName": "TrustedCars FLEX",
    "FullName": "TrustedCars FLEX (FLEX)"
  },
  {
    "Symbol": "DIVX",
    "CoinName": "Divi Exchange Token",
    "FullName": "Divi Exchange Token (DIVX)"
  },
  {
    "Symbol": "DIVI",
    "CoinName": "Divi Project",
    "FullName": "Divi Project (DIVI)"
  },
  {
    "Symbol": "NBAR",
    "CoinName": "NOBAR",
    "FullName": "NOBAR (NBAR)"
  },
  {
    "Symbol": "SFT",
    "CoinName": "SportsFix",
    "FullName": "SportsFix (SFT)"
  },
  {
    "Symbol": "ITR",
    "CoinName": "INTRO",
    "FullName": "INTRO (ITR)"
  },
  {
    "Symbol": "KBX",
    "CoinName": "KuBitX",
    "FullName": "KuBitX (KBX)"
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
    "Symbol": "HC",
    "CoinName": "HyperCash",
    "FullName": "HyperCash (HC)"
  },
  {
    "Symbol": "TOT*",
    "CoinName": "Trecento Blockchain Capital",
    "FullName": "Trecento Blockchain Capital (TOT*)"
  },
  {
    "Symbol": "HMN",
    "CoinName": "Harvest Masternode Coin",
    "FullName": "Harvest Masternode Coin (HMN)"
  },
  {
    "Symbol": "UEC",
    "CoinName": "United Emirates Coin",
    "FullName": "United Emirates Coin (UEC)"
  },
  {
    "Symbol": "UAEC",
    "CoinName": "United Arab Emirates Coin",
    "FullName": "United Arab Emirates Coin (UAEC)"
  },
  {
    "Symbol": "BTCL",
    "CoinName": "BTC Lite",
    "FullName": "BTC Lite (BTCL)"
  },
  {
    "Symbol": "BEAT",
    "CoinName": "BEAT Token",
    "FullName": "BEAT Token (BEAT)"
  },
  {
    "Symbol": "UBC",
    "CoinName": "Ubcoin",
    "FullName": "Ubcoin (UBC)"
  },
  {
    "Symbol": "ESTATE",
    "CoinName": "AgentMile",
    "FullName": "AgentMile (ESTATE)"
  },
  {
    "Symbol": "TAGR",
    "CoinName": "Think And Get Rich Coin",
    "FullName": "Think And Get Rich Coin (TAGR)"
  },
  {
    "Symbol": "DEC",
    "CoinName": "Darico",
    "FullName": "Darico (DEC)"
  },
  {
    "Symbol": "VTC",
    "CoinName": "Vertcoin",
    "FullName": "Vertcoin (VTC)"
  },
  {
    "Symbol": "ISH",
    "CoinName": "Interstellar Holdings",
    "FullName": "Interstellar Holdings (ISH)"
  },
  {
    "Symbol": "SEED",
    "CoinName": "Superbloom",
    "FullName": "Superbloom (SEED)"
  },
  {
    "Symbol": "AUD",
    "CoinName": "Aussie Digital",
    "FullName": "Aussie Digital (AUD)"
  },
  {
    "Symbol": "MSD",
    "CoinName": "MSD",
    "FullName": "MSD (MSD)"
  },
  {
    "Symbol": "AZ",
    "CoinName": "Azbit",
    "FullName": "Azbit (AZ)"
  },
  {
    "Symbol": "USDCT",
    "CoinName": "USDCT",
    "FullName": "USDCT (USDCT)"
  },
  {
    "Symbol": "DBIX",
    "CoinName": "DubaiCoin",
    "FullName": "DubaiCoin (DBIX)"
  },
  {
    "Symbol": "PRC",
    "CoinName": "ProsperCoin",
    "FullName": "ProsperCoin (PRC)"
  },
  {
    "Symbol": "SEAL",
    "CoinName": "Seal Network",
    "FullName": "Seal Network (SEAL)"
  },
  {
    "Symbol": "APH",
    "CoinName": "Aphelion",
    "FullName": "Aphelion (APH)"
  },
  {
    "Symbol": "SOLID",
    "CoinName": "Solidified",
    "FullName": "Solidified (SOLID)"
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
    "Symbol": "CMTC",
    "CoinName": "CometCoin",
    "FullName": "CometCoin (CMTC)"
  },
  {
    "Symbol": "NWP",
    "CoinName": "NWPSolution",
    "FullName": "NWPSolution (NWP)"
  },
  {
    "Symbol": "MOV",
    "CoinName": "MovieCoin",
    "FullName": "MovieCoin (MOV)"
  },
  {
    "Symbol": "HVN",
    "CoinName": "Hiveterminal Token",
    "FullName": "Hiveterminal Token (HVN)"
  },
  {
    "Symbol": "PASC",
    "CoinName": "Pascal Coin",
    "FullName": "Pascal Coin (PASC)"
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
    "Symbol": "RUP",
    "CoinName": "Rupee",
    "FullName": "Rupee (RUP)"
  },
  {
    "Symbol": "NEXO",
    "CoinName": "NEXO",
    "FullName": "NEXO (NEXO)"
  },
  {
    "Symbol": "CRON",
    "CoinName": "Cryptocean",
    "FullName": "Cryptocean (CRON)"
  },
  {
    "Symbol": "ZCC1",
    "CoinName": "ZeroCarbon",
    "FullName": "ZeroCarbon (ZCC1)"
  },
  {
    "Symbol": "SHARD",
    "CoinName": "ShardCoin",
    "FullName": "ShardCoin (SHARD)"
  },
  {
    "Symbol": "EVOS",
    "CoinName": "EVOS",
    "FullName": "EVOS (EVOS)"
  },
  {
    "Symbol": "BCDT",
    "CoinName": "Blockchain Certified Data Token",
    "FullName": "Blockchain Certified Data Token (BCDT)"
  },
  {
    "Symbol": "ESN",
    "CoinName": "Ethersocial",
    "FullName": "Ethersocial (ESN)"
  },
  {
    "Symbol": "CHX",
    "CoinName": "Chainium",
    "FullName": "Chainium (CHX)"
  },
  {
    "Symbol": "USDC",
    "CoinName": "USD Coin",
    "FullName": "USD Coin (USDC)"
  },
  {
    "Symbol": "PLMT",
    "CoinName": "Pallium",
    "FullName": "Pallium (PLMT)"
  },
  {
    "Symbol": "ORBS",
    "CoinName": "Orbis",
    "FullName": "Orbis (ORBS)"
  },
  {
    "Symbol": "LED",
    "CoinName": "Terawatt",
    "FullName": "Terawatt (LED)"
  },
  {
    "Symbol": "NPXS",
    "CoinName": "Pundi X",
    "FullName": "Pundi X (NPXS)"
  },
  {
    "Symbol": "HIH",
    "CoinName": "HiHealth",
    "FullName": "HiHealth (HIH)"
  },
  {
    "Symbol": "AIM",
    "CoinName": "Aimedis",
    "FullName": "Aimedis (AIM)"
  },
  {
    "Symbol": "ACM",
    "CoinName": "Actinium",
    "FullName": "Actinium (ACM)"
  },
  {
    "Symbol": "BITTO",
    "CoinName": "BITTO",
    "FullName": "BITTO (BITTO)"
  },
  {
    "Symbol": "QEY",
    "CoinName": "AQwire",
    "FullName": "AQwire (QEY)"
  },
  {
    "Symbol": "COT",
    "CoinName": "CoTrader",
    "FullName": "CoTrader (COT)"
  },
  {
    "Symbol": "FNP",
    "CoinName": "FlipNpik",
    "FullName": "FlipNpik (FNP)"
  },
  {
    "Symbol": "DBCCOIN",
    "CoinName": "Datablockchain",
    "FullName": "Datablockchain (DBCCOIN)"
  },
  {
    "Symbol": "UMK",
    "CoinName": "UMKA",
    "FullName": "UMKA (UMK)"
  },
  {
    "Symbol": "M2O",
    "CoinName": "M2O Token",
    "FullName": "M2O Token (M2O)"
  },
  {
    "Symbol": "WMK",
    "CoinName": "Wemark",
    "FullName": "Wemark (WMK)"
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
    "Symbol": "CATT",
    "CoinName": "Catex",
    "FullName": "Catex (CATT)"
  },
  {
    "Symbol": "LQDN",
    "CoinName": "Liquidity Network",
    "FullName": "Liquidity Network (LQDN)"
  },
  {
    "Symbol": "YBC",
    "CoinName": "YbCoin",
    "FullName": "YbCoin (YBC)"
  },
  {
    "Symbol": "ACOIN",
    "CoinName": "ACoin",
    "FullName": "ACoin (ACOIN)"
  },
  {
    "Symbol": "ALN",
    "CoinName": "AlienCoin",
    "FullName": "AlienCoin (ALN)"
  },
  {
    "Symbol": "AXR",
    "CoinName": "AXRON",
    "FullName": "AXRON (AXR)"
  },
  {
    "Symbol": "RBT",
    "CoinName": "Rimbit",
    "FullName": "Rimbit (RBT)"
  },
  {
    "Symbol": "MMNXT",
    "CoinName": "MMNXT ",
    "FullName": "MMNXT  (MMNXT)"
  },
  {
    "Symbol": "CJ",
    "CoinName": "CryptoJacks",
    "FullName": "CryptoJacks (CJ)"
  },
  {
    "Symbol": "DLISK",
    "CoinName": "Dlisk",
    "FullName": "Dlisk (DLISK)"
  },
  {
    "Symbol": "XT",
    "CoinName": "ExtremeCoin",
    "FullName": "ExtremeCoin (XT)"
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
    "Symbol": "EXB",
    "CoinName": "ExaByte (EXB)",
    "FullName": "ExaByte (EXB) (EXB)"
  },
  {
    "Symbol": "ANC",
    "CoinName": "Anoncoin",
    "FullName": "Anoncoin (ANC)"
  },
  {
    "Symbol": "EDR",
    "CoinName": "E-Dinar Coin",
    "FullName": "E-Dinar Coin (EDR)"
  },
  {
    "Symbol": "TRIG",
    "CoinName": "Trigger",
    "FullName": "Trigger (TRIG)"
  },
  {
    "Symbol": "ATM*",
    "CoinName": "Autumncoin",
    "FullName": "Autumncoin (ATM*)"
  },
  {
    "Symbol": "SNS",
    "CoinName": "Sense",
    "FullName": "Sense (SNS)"
  },
  {
    "Symbol": "FSN*",
    "CoinName": "Fusion",
    "FullName": "Fusion (FSN*)"
  },
  {
    "Symbol": "ZET2",
    "CoinName": "Zeta2Coin",
    "FullName": "Zeta2Coin (ZET2)"
  },
  {
    "Symbol": "COV*",
    "CoinName": "CovenCoin",
    "FullName": "CovenCoin (COV*)"
  },
  {
    "Symbol": "TDFB",
    "CoinName": "TDFB",
    "FullName": "TDFB (TDFB)"
  },
  {
    "Symbol": "PIO",
    "CoinName": "Pioneershares",
    "FullName": "Pioneershares (PIO)"
  },
  {
    "Symbol": "RING",
    "CoinName": "RingCoin",
    "FullName": "RingCoin (RING)"
  },
  {
    "Symbol": "LAZ",
    "CoinName": "Lazarus",
    "FullName": "Lazarus (LAZ)"
  },
  {
    "Symbol": "MOOND",
    "CoinName": "Dark Moon",
    "FullName": "Dark Moon (MOOND)"
  },
  {
    "Symbol": "LTH",
    "CoinName": "Lathaan",
    "FullName": "Lathaan (LTH)"
  },
  {
    "Symbol": "NTC",
    "CoinName": "NineElevenTruthCoin",
    "FullName": "NineElevenTruthCoin (NTC)"
  },
  {
    "Symbol": "BTCL*",
    "CoinName": "BitluckCoin",
    "FullName": "BitluckCoin (BTCL*)"
  },
  {
    "Symbol": "X2",
    "CoinName": "X2Coin",
    "FullName": "X2Coin (X2)"
  },
  {
    "Symbol": "BBCC",
    "CoinName": "BaseballCardCoin",
    "FullName": "BaseballCardCoin (BBCC)"
  },
  {
    "Symbol": "CPLO",
    "CoinName": "Cpollo",
    "FullName": "Cpollo (CPLO)"
  },
  {
    "Symbol": "XZC",
    "CoinName": "ZCoin",
    "FullName": "ZCoin (XZC)"
  },
  {
    "Symbol": "CF",
    "CoinName": "Californium",
    "FullName": "Californium (CF)"
  },
  {
    "Symbol": "CFC",
    "CoinName": "CoffeeCoin",
    "FullName": "CoffeeCoin (CFC)"
  },
  {
    "Symbol": "HCC",
    "CoinName": "HappyCreatorCoin ",
    "FullName": "HappyCreatorCoin  (HCC)"
  },
  {
    "Symbol": "PEC",
    "CoinName": "PeaceCoin",
    "FullName": "PeaceCoin (PEC)"
  },
  {
    "Symbol": "NXTI",
    "CoinName": "NXTI",
    "FullName": "NXTI (NXTI)"
  },
  {
    "Symbol": "GMX",
    "CoinName": "Goldmaxcoin",
    "FullName": "Goldmaxcoin (GMX)"
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
    "Symbol": "DKC",
    "CoinName": "DarkKnightCoin",
    "FullName": "DarkKnightCoin (DKC)"
  },
  {
    "Symbol": "RYCN",
    "CoinName": "RoyalCoin 2.0",
    "FullName": "RoyalCoin 2.0 (RYCN)"
  },
  {
    "Symbol": "NBIT",
    "CoinName": "NetBit",
    "FullName": "NetBit (NBIT)"
  },
  {
    "Symbol": "ARK",
    "CoinName": "ARK",
    "FullName": "ARK (ARK)"
  },
  {
    "Symbol": "ZXT",
    "CoinName": "Zcrypt",
    "FullName": "Zcrypt (ZXT)"
  },
  {
    "Symbol": "LUCKY",
    "CoinName": "LuckyBlocks",
    "FullName": "LuckyBlocks (LUCKY)"
  },
  {
    "Symbol": "TPG",
    "CoinName": "Troll Payment",
    "FullName": "Troll Payment (TPG)"
  },
  {
    "Symbol": "CBD",
    "CoinName": "CBD Crystals",
    "FullName": "CBD Crystals (CBD)"
  },
  {
    "Symbol": "PEN*",
    "CoinName": "PenCoin",
    "FullName": "PenCoin (PEN*)"
  },
  {
    "Symbol": "BASH",
    "CoinName": "LuckChain",
    "FullName": "LuckChain (BASH)"
  },
  {
    "Symbol": "MEGA",
    "CoinName": "MegaFlash",
    "FullName": "MegaFlash (MEGA)"
  },
  {
    "Symbol": "DRS",
    "CoinName": "Digital Rupees",
    "FullName": "Digital Rupees (DRS)"
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
    "Symbol": "TRICK",
    "CoinName": "TrickyCoin",
    "FullName": "TrickyCoin (TRICK)"
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
    "Symbol": "ENT",
    "CoinName": "Eternity",
    "FullName": "Eternity (ENT)"
  },
  {
    "Symbol": "BCF",
    "CoinName": "BitcoinFast",
    "FullName": "BitcoinFast (BCF)"
  },
  {
    "Symbol": "SHORTY",
    "CoinName": "ShortyCoin",
    "FullName": "ShortyCoin (SHORTY)"
  },
  {
    "Symbol": "XPX",
    "CoinName": "ProximaX",
    "FullName": "ProximaX (XPX)"
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
    "Symbol": "CCRB",
    "CoinName": "CryptoCarbon",
    "FullName": "CryptoCarbon (CCRB)"
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
    "Symbol": "ACN",
    "CoinName": "AvonCoin",
    "FullName": "AvonCoin (ACN)"
  },
  {
    "Symbol": "LOOK",
    "CoinName": "LookCoin",
    "FullName": "LookCoin (LOOK)"
  },
  {
    "Symbol": "DRA",
    "CoinName": "DraculaCoin",
    "FullName": "DraculaCoin (DRA)"
  },
  {
    "Symbol": "TWIST",
    "CoinName": "TwisterCoin",
    "FullName": "TwisterCoin (TWIST)"
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
    "Symbol": "EXMR",
    "CoinName": "EXMR",
    "FullName": "EXMR (EXMR)"
  },
  {
    "Symbol": "YMC",
    "CoinName": "YamahaCoin",
    "FullName": "YamahaCoin (YMC)"
  },
  {
    "Symbol": "TEC",
    "CoinName": "TeCoin",
    "FullName": "TeCoin (TEC)"
  },
  {
    "Symbol": "WEALTH",
    "CoinName": "WealthCoin",
    "FullName": "WealthCoin (WEALTH)"
  },
  {
    "Symbol": "KUSH",
    "CoinName": "KushCoin",
    "FullName": "KushCoin (KUSH)"
  },
  {
    "Symbol": "TAT",
    "CoinName": "Tatiana Coin",
    "FullName": "Tatiana Coin (TAT)"
  },
  {
    "Symbol": "TIC",
    "CoinName": "TrueInvestmentCoin",
    "FullName": "TrueInvestmentCoin (TIC)"
  },
  {
    "Symbol": "MM",
    "CoinName": "MasterMint",
    "FullName": "MasterMint (MM)"
  },
  {
    "Symbol": "NOW",
    "CoinName": "NOW Token",
    "FullName": "NOW Token (NOW)"
  },
  {
    "Symbol": "FRST",
    "CoinName": "FirstCoin",
    "FullName": "FirstCoin (FRST)"
  },
  {
    "Symbol": "ACES",
    "CoinName": "AcesCoin",
    "FullName": "AcesCoin (ACES)"
  },
  {
    "Symbol": "WISC",
    "CoinName": "WisdomCoin",
    "FullName": "WisdomCoin (WISC)"
  },
  {
    "Symbol": "GRW",
    "CoinName": "GrowthCoin",
    "FullName": "GrowthCoin (GRW)"
  },
  {
    "Symbol": "STALIN",
    "CoinName": "StalinCoin",
    "FullName": "StalinCoin (STALIN)"
  },
  {
    "Symbol": "MXT",
    "CoinName": "MartexCoin",
    "FullName": "MartexCoin (MXT)"
  },
  {
    "Symbol": "AMY",
    "CoinName": "Amygws",
    "FullName": "Amygws (AMY)"
  },
  {
    "Symbol": "GXT",
    "CoinName": "Game Protocol",
    "FullName": "Game Protocol (GXT)"
  },
  {
    "Symbol": "ECO",
    "CoinName": "ECOcoin",
    "FullName": "ECOcoin (ECO)"
  },
  {
    "Symbol": "MOLK",
    "CoinName": "Mobilink Token",
    "FullName": "Mobilink Token (MOLK)"
  },
  {
    "Symbol": "CIC",
    "CoinName": "CIChain",
    "FullName": "CIChain (CIC)"
  },
  {
    "Symbol": "VEEN",
    "CoinName": "LIVEEN",
    "FullName": "LIVEEN (VEEN)"
  },
  {
    "Symbol": "WBTC*",
    "CoinName": "wBTC",
    "FullName": "wBTC (WBTC*)"
  },
  {
    "Symbol": "PLAN",
    "CoinName": "Plancoin",
    "FullName": "Plancoin (PLAN)"
  },
  {
    "Symbol": "TOPC",
    "CoinName": "Topchain",
    "FullName": "Topchain (TOPC)"
  },
  {
    "Symbol": "PSM",
    "CoinName": "Prasm",
    "FullName": "Prasm (PSM)"
  },
  {
    "Symbol": "FML",
    "CoinName": "FormulA",
    "FullName": "FormulA (FML)"
  },
  {
    "Symbol": "QNTU",
    "CoinName": "Quanta",
    "FullName": "Quanta (QNTU)"
  },
  {
    "Symbol": "PROC",
    "CoinName": "ProCurrency",
    "FullName": "ProCurrency (PROC)"
  },
  {
    "Symbol": "RRC",
    "CoinName": "Recycling Regeneration Chain",
    "FullName": "Recycling Regeneration Chain (RRC)"
  },
  {
    "Symbol": "WRC*",
    "CoinName": "WarCoin",
    "FullName": "WarCoin (WRC*)"
  },
  {
    "Symbol": "ZPR",
    "CoinName": "ZPER",
    "FullName": "ZPER (ZPR)"
  },
  {
    "Symbol": "MOF",
    "CoinName": "Molecular Future",
    "FullName": "Molecular Future (MOF)"
  },
  {
    "Symbol": "IOU",
    "CoinName": "IOU1",
    "FullName": "IOU1 (IOU)"
  },
  {
    "Symbol": "PHR",
    "CoinName": "Phreak",
    "FullName": "Phreak (PHR)"
  },
  {
    "Symbol": "EST",
    "CoinName": "ESports Chain",
    "FullName": "ESports Chain (EST)"
  },
  {
    "Symbol": "CTIC",
    "CoinName": "Coinmatic",
    "FullName": "Coinmatic (CTIC)"
  },
  {
    "Symbol": "KCASH",
    "CoinName": "Kcash",
    "FullName": "Kcash (KCASH)"
  },
  {
    "Symbol": "MAT*",
    "CoinName": "Manet Coin",
    "FullName": "Manet Coin (MAT*)"
  },
  {
    "Symbol": "BZ",
    "CoinName": "Bit-Z",
    "FullName": "Bit-Z (BZ)"
  },
  {
    "Symbol": "VRT",
    "CoinName": "Virtual Reality Technology",
    "FullName": "Virtual Reality Technology (VRT)"
  },
  {
    "Symbol": "CDPT",
    "CoinName": "Creditor Data Platform",
    "FullName": "Creditor Data Platform (CDPT)"
  },
  {
    "Symbol": "QCX",
    "CoinName": "QuickX Protocol",
    "FullName": "QuickX Protocol (QCX)"
  },
  {
    "Symbol": "IMU",
    "CoinName": "imusify",
    "FullName": "imusify (IMU)"
  },
  {
    "Symbol": "VANIG",
    "CoinName": "VANIG",
    "FullName": "VANIG (VANIG)"
  },
  {
    "Symbol": "DREAM*",
    "CoinName": "DREAM",
    "FullName": "DREAM (DREAM*)"
  },
  {
    "Symbol": "FOREX",
    "CoinName": "FOREXCOIN",
    "FullName": "FOREXCOIN (FOREX)"
  },
  {
    "Symbol": "QWARK",
    "CoinName": "Qwark",
    "FullName": "Qwark (QWARK)"
  },
  {
    "Symbol": "FRECN",
    "CoinName": "Freldo",
    "FullName": "Freldo (FRECN)"
  },
  {
    "Symbol": "K2G",
    "CoinName": "Kasko2go",
    "FullName": "Kasko2go (K2G)"
  },
  {
    "Symbol": "IDAP",
    "CoinName": "IDAP",
    "FullName": "IDAP (IDAP)"
  },
  {
    "Symbol": "RSC",
    "CoinName": "Ronaldinho Soccer Coin",
    "FullName": "Ronaldinho Soccer Coin (RSC)"
  },
  {
    "Symbol": "DNT",
    "CoinName": "district0x",
    "FullName": "district0x (DNT)"
  },
  {
    "Symbol": "WGR",
    "CoinName": "Wagerr",
    "FullName": "Wagerr (WGR)"
  },
  {
    "Symbol": "CCC*",
    "CoinName": "Blockshipping",
    "FullName": "Blockshipping (CCC*)"
  },
  {
    "Symbol": "FUNC",
    "CoinName": "FunCoin",
    "FullName": "FunCoin (FUNC)"
  },
  {
    "Symbol": "SNC",
    "CoinName": "SunContract",
    "FullName": "SunContract (SNC)"
  },
  {
    "Symbol": "IMGZ",
    "CoinName": "Imigize",
    "FullName": "Imigize (IMGZ)"
  },
  {
    "Symbol": "XRL",
    "CoinName": "Rialto.AI",
    "FullName": "Rialto.AI (XRL)"
  },
  {
    "Symbol": "JSE",
    "CoinName": "JSEcoin",
    "FullName": "JSEcoin (JSE)"
  },
  {
    "Symbol": "MCV",
    "CoinName": "MCV Token",
    "FullName": "MCV Token (MCV)"
  },
  {
    "Symbol": "SAND",
    "CoinName": "BeachCoin",
    "FullName": "BeachCoin (SAND)"
  },
  {
    "Symbol": "XCJ",
    "CoinName": "CoinJob",
    "FullName": "CoinJob (XCJ)"
  },
  {
    "Symbol": "BITS*",
    "CoinName": "Bitswift",
    "FullName": "Bitswift (BITS*)"
  },
  {
    "Symbol": "SNK",
    "CoinName": "Sosnovkino",
    "FullName": "Sosnovkino (SNK)"
  },
  {
    "Symbol": "DASC",
    "CoinName": "DasCoin",
    "FullName": "DasCoin (DASC)"
  },
  {
    "Symbol": "DFBT",
    "CoinName": "DentalFix",
    "FullName": "DentalFix (DFBT)"
  },
  {
    "Symbol": "WLK",
    "CoinName": "Wolk",
    "FullName": "Wolk (WLK)"
  },
  {
    "Symbol": "ATOM*",
    "CoinName": "Cosmos",
    "FullName": "Cosmos (ATOM*)"
  },
  {
    "Symbol": "ICOO",
    "CoinName": "ICO OpenLedger",
    "FullName": "ICO OpenLedger (ICOO)"
  },
  {
    "Symbol": "AUT",
    "CoinName": "Autoria",
    "FullName": "Autoria (AUT)"
  },
  {
    "Symbol": "GRWI",
    "CoinName": "Growers International",
    "FullName": "Growers International (GRWI)"
  },
  {
    "Symbol": "SOUND",
    "CoinName": "Inmusik",
    "FullName": "Inmusik (SOUND)"
  },
  {
    "Symbol": "GAS",
    "CoinName": "Gas",
    "FullName": "Gas (GAS)"
  },
  {
    "Symbol": "SIC",
    "CoinName": "Swisscoin",
    "FullName": "Swisscoin (SIC)"
  },
  {
    "Symbol": "FIL",
    "CoinName": "FileCoin",
    "FullName": "FileCoin (FIL)"
  },
  {
    "Symbol": "XAS",
    "CoinName": "Asch",
    "FullName": "Asch (XAS)"
  },
  {
    "Symbol": "PGL",
    "CoinName": "Prospectors",
    "FullName": "Prospectors (PGL)"
  },
  {
    "Symbol": "DTCT",
    "CoinName": "DetectorToken",
    "FullName": "DetectorToken (DTCT)"
  },
  {
    "Symbol": "TUT",
    "CoinName": "Tutellus",
    "FullName": "Tutellus (TUT)"
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
    "Symbol": "PIX",
    "CoinName": "Lampix",
    "FullName": "Lampix (PIX)"
  },
  {
    "Symbol": "SS",
    "CoinName": "Sharder",
    "FullName": "Sharder (SS)"
  },
  {
    "Symbol": "ORS",
    "CoinName": "ORS Group",
    "FullName": "ORS Group (ORS)"
  },
  {
    "Symbol": "HOLD",
    "CoinName": "HOLD",
    "FullName": "HOLD (HOLD)"
  },
  {
    "Symbol": "MASP",
    "CoinName": "Market.space",
    "FullName": "Market.space (MASP)"
  },
  {
    "Symbol": "BBN",
    "CoinName": "BBNCOIN",
    "FullName": "BBNCOIN (BBN)"
  },
  {
    "Symbol": "ESS",
    "CoinName": "Essentia",
    "FullName": "Essentia (ESS)"
  },
  {
    "Symbol": "LVL*",
    "CoinName": "LevelNet Token",
    "FullName": "LevelNet Token (LVL*)"
  },
  {
    "Symbol": "PKC",
    "CoinName": "Pikciochain",
    "FullName": "Pikciochain (PKC)"
  },
  {
    "Symbol": "PTC**",
    "CoinName": "Plutocoin",
    "FullName": "Plutocoin (PTC**)"
  },
  {
    "Symbol": "ENTRC",
    "CoinName": "ENTER COIN",
    "FullName": "ENTER COIN (ENTRC)"
  },
  {
    "Symbol": "ETS",
    "CoinName": "ETH Share",
    "FullName": "ETH Share (ETS)"
  },
  {
    "Symbol": "PROPS",
    "CoinName": "Props",
    "FullName": "Props (PROPS)"
  },
  {
    "Symbol": "MAG**",
    "CoinName": "Maggie Token",
    "FullName": "Maggie Token (MAG**)"
  },
  {
    "Symbol": "STC",
    "CoinName": "StarChain",
    "FullName": "StarChain (STC)"
  },
  {
    "Symbol": "GRAM",
    "CoinName": "Telegram Open Network",
    "FullName": "Telegram Open Network (GRAM)"
  },
  {
    "Symbol": "SPC*",
    "CoinName": "SpaceChain",
    "FullName": "SpaceChain (SPC*)"
  },
  {
    "Symbol": "IPC*",
    "CoinName": "IPChain",
    "FullName": "IPChain (IPC*)"
  },
  {
    "Symbol": "NYX",
    "CoinName": "NYXCOIN",
    "FullName": "NYXCOIN (NYX)"
  },
  {
    "Symbol": "CUZ",
    "CoinName": "Cool Cousin",
    "FullName": "Cool Cousin (CUZ)"
  },
  {
    "Symbol": "GTC*",
    "CoinName": "Global Tour Coin",
    "FullName": "Global Tour Coin (GTC*)"
  },
  {
    "Symbol": "SAF",
    "CoinName": "Safinus",
    "FullName": "Safinus (SAF)"
  },
  {
    "Symbol": "DUBI",
    "CoinName": "Decentralized Universal Basic Income",
    "FullName": "Decentralized Universal Basic Income (DUBI)"
  },
  {
    "Symbol": "PRPS",
    "CoinName": "Purpose",
    "FullName": "Purpose (PRPS)"
  },
  {
    "Symbol": "XBP",
    "CoinName": "Black Pearl Coin",
    "FullName": "Black Pearl Coin (XBP)"
  },
  {
    "Symbol": "BRO",
    "CoinName": "Bitradio",
    "FullName": "Bitradio (BRO)"
  },
  {
    "Symbol": "CYDER",
    "CoinName": "Cyder Coin",
    "FullName": "Cyder Coin (CYDER)"
  },
  {
    "Symbol": "ET4",
    "CoinName": "Eticket4",
    "FullName": "Eticket4 (ET4)"
  },
  {
    "Symbol": "TTT",
    "CoinName": "Tap Project",
    "FullName": "Tap Project (TTT)"
  },
  {
    "Symbol": "HIVE",
    "CoinName": "Hive",
    "FullName": "Hive (HIVE)"
  },
  {
    "Symbol": "GNR",
    "CoinName": "Gainer",
    "FullName": "Gainer (GNR)"
  },
  {
    "Symbol": "WISH*",
    "CoinName": "WishFinance",
    "FullName": "WishFinance (WISH*)"
  },
  {
    "Symbol": "FLASH",
    "CoinName": "FLASH coin",
    "FullName": "FLASH coin (FLASH)"
  },
  {
    "Symbol": "JINN",
    "CoinName": "Jinn",
    "FullName": "Jinn (JINN)"
  },
  {
    "Symbol": "XCS",
    "CoinName": "CybCSec Coin",
    "FullName": "CybCSec Coin (XCS)"
  },
  {
    "Symbol": "WPR",
    "CoinName": "WePower",
    "FullName": "WePower (WPR)"
  },
  {
    "Symbol": "KBR",
    "CoinName": "Kubera Coin",
    "FullName": "Kubera Coin (KBR)"
  },
  {
    "Symbol": "ZAB",
    "CoinName": "ZABERcoin",
    "FullName": "ZABERcoin (ZAB)"
  },
  {
    "Symbol": "RMC",
    "CoinName": "Russian Mining Coin",
    "FullName": "Russian Mining Coin (RMC)"
  },
  {
    "Symbol": "AUA",
    "CoinName": "ArubaCoin",
    "FullName": "ArubaCoin (AUA)"
  },
  {
    "Symbol": "TGT",
    "CoinName": "TargetCoin",
    "FullName": "TargetCoin (TGT)"
  },
  {
    "Symbol": "PYP",
    "CoinName": "PayPro",
    "FullName": "PayPro (PYP)"
  },
  {
    "Symbol": "MNT*",
    "CoinName": "Media Network Coin",
    "FullName": "Media Network Coin (MNT*)"
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
    "Symbol": "BCX*",
    "CoinName": "BitcoinX",
    "FullName": "BitcoinX (BCX*)"
  },
  {
    "Symbol": "SHND",
    "CoinName": "StrongHands",
    "FullName": "StrongHands (SHND)"
  },
  {
    "Symbol": "BTCE",
    "CoinName": "EthereumBitcoin",
    "FullName": "EthereumBitcoin (BTCE)"
  },
  {
    "Symbol": "XCD",
    "CoinName": "Capdax",
    "FullName": "Capdax (XCD)"
  },
  {
    "Symbol": "BETHER",
    "CoinName": "Bethereum",
    "FullName": "Bethereum (BETHER)"
  },
  {
    "Symbol": "ADAB",
    "CoinName": "Adab Solutions",
    "FullName": "Adab Solutions (ADAB)"
  },
  {
    "Symbol": "TAL",
    "CoinName": "Talentico",
    "FullName": "Talentico (TAL)"
  },
  {
    "Symbol": "B21",
    "CoinName": "B21",
    "FullName": "B21 (B21)"
  },
  {
    "Symbol": "BVO",
    "CoinName": "BRAVO Pay",
    "FullName": "BRAVO Pay (BVO)"
  },
  {
    "Symbol": "CDRX",
    "CoinName": "CDRX",
    "FullName": "CDRX (CDRX)"
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
    "Symbol": "AWT",
    "CoinName": "WhatsOnPic",
    "FullName": "WhatsOnPic (AWT)"
  },
  {
    "Symbol": "ABX",
    "CoinName": "AutoBay",
    "FullName": "AutoBay (ABX)"
  },
  {
    "Symbol": "XPT",
    "CoinName": "Plata",
    "FullName": "Plata (XPT)"
  },
  {
    "Symbol": "ARR",
    "CoinName": "ARROUND",
    "FullName": "ARROUND (ARR)"
  },
  {
    "Symbol": "LPT",
    "CoinName": "Livepeer",
    "FullName": "Livepeer (LPT)"
  },
  {
    "Symbol": "IOV",
    "CoinName": "IOV",
    "FullName": "IOV (IOV)"
  },
  {
    "Symbol": "ORET",
    "CoinName": "ORET Token",
    "FullName": "ORET Token (ORET)"
  },
  {
    "Symbol": "QUIZ",
    "CoinName": "Quizando",
    "FullName": "Quizando (QUIZ)"
  },
  {
    "Symbol": "TVA",
    "CoinName": "Terra Virtua",
    "FullName": "Terra Virtua (TVA)"
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
    "Symbol": "XTN",
    "CoinName": "XEND token",
    "FullName": "XEND token (XTN)"
  },
  {
    "Symbol": "BTZN",
    "CoinName": "Bitzon",
    "FullName": "Bitzon (BTZN)"
  },
  {
    "Symbol": "DACH",
    "CoinName": "DACH Coin",
    "FullName": "DACH Coin (DACH)"
  },
  {
    "Symbol": "NAVIB",
    "CoinName": "Navibration",
    "FullName": "Navibration (NAVIB)"
  },
  {
    "Symbol": "ATHK",
    "CoinName": "AntiHACK.me",
    "FullName": "AntiHACK.me (ATHK)"
  },
  {
    "Symbol": "ATP",
    "CoinName": "ArtPro",
    "FullName": "ArtPro (ATP)"
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
    "Symbol": "ENTT",
    "CoinName": "Presale Ventures",
    "FullName": "Presale Ventures (ENTT)"
  },
  {
    "Symbol": "AURUM",
    "CoinName": "Aurum",
    "FullName": "Aurum (AURUM)"
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
    "Symbol": "UTNP",
    "CoinName": "Universa",
    "FullName": "Universa (UTNP)"
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
    "Symbol": "BBG",
    "CoinName": "BigBang",
    "FullName": "BigBang (BBG)"
  },
  {
    "Symbol": "SHKG",
    "CoinName": "SharkGate",
    "FullName": "SharkGate (SHKG)"
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
    "CoinName": "Namacoin ",
    "FullName": "Namacoin  (NAM)"
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
    "Symbol": "DN8",
    "CoinName": "Pldgr",
    "FullName": "Pldgr (DN8)"
  },
  {
    "Symbol": "PPOVR",
    "CoinName": "POVR",
    "FullName": "POVR (PPOVR)"
  },
  {
    "Symbol": "RIPAX",
    "CoinName": "RipaEx",
    "FullName": "RipaEx (RIPAX)"
  },
  {
    "Symbol": "AWAX",
    "CoinName": "AWAX",
    "FullName": "AWAX (AWAX)"
  },
  {
    "Symbol": "WBY",
    "CoinName": "WeBuy",
    "FullName": "WeBuy (WBY)"
  },
  {
    "Symbol": "MENU",
    "CoinName": "MenuBuzz",
    "FullName": "MenuBuzz (MENU)"
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
    "Symbol": "ZUR",
    "CoinName": "Zurcoin",
    "FullName": "Zurcoin (ZUR)"
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
    "Symbol": "EMPR",
    "CoinName": "empowr",
    "FullName": "empowr (EMPR)"
  },
  {
    "Symbol": "ORGT",
    "CoinName": "Organic Token",
    "FullName": "Organic Token (ORGT)"
  },
  {
    "Symbol": "ZBC",
    "CoinName": "Zilbercoin",
    "FullName": "Zilbercoin (ZBC)"
  },
  {
    "Symbol": "PTO",
    "CoinName": "Patentico",
    "FullName": "Patentico (PTO)"
  },
  {
    "Symbol": "BSC",
    "CoinName": "BowsCoin",
    "FullName": "BowsCoin (BSC)"
  },
  {
    "Symbol": "VEST",
    "CoinName": "VestChain",
    "FullName": "VestChain (VEST)"
  },
  {
    "Symbol": "AS",
    "CoinName": "AmaStar",
    "FullName": "AmaStar (AS)"
  },
  {
    "Symbol": "GTN",
    "CoinName": "Greentoken",
    "FullName": "Greentoken (GTN)"
  },
  {
    "Symbol": "VIDI",
    "CoinName": "Vidion",
    "FullName": "Vidion (VIDI)"
  },
  {
    "Symbol": "SUQA",
    "CoinName": "SUQA",
    "FullName": "SUQA (SUQA)"
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
    "Symbol": "PSF",
    "CoinName": "Prime Shipping Foundation",
    "FullName": "Prime Shipping Foundation (PSF)"
  },
  {
    "Symbol": "TITAN",
    "CoinName": "Titan",
    "FullName": "Titan (TITAN)"
  },
  {
    "Symbol": "VIAZ",
    "CoinName": "Viaz",
    "FullName": "Viaz (VIAZ)"
  },
  {
    "Symbol": "ECR",
    "CoinName": "EcoVerse",
    "FullName": "EcoVerse (ECR)"
  },
  {
    "Symbol": "ARMS",
    "CoinName": "2Acoin",
    "FullName": "2Acoin (ARMS)"
  },
  {
    "Symbol": "ARG",
    "CoinName": "Argentum",
    "FullName": "Argentum (ARG)"
  },
  {
    "Symbol": "NUSD",
    "CoinName": "Nomin USD",
    "FullName": "Nomin USD (NUSD)"
  },
  {
    "Symbol": "BWK",
    "CoinName": "Bulwark",
    "FullName": "Bulwark (BWK)"
  },
  {
    "Symbol": "PLA",
    "CoinName": "PlayChip",
    "FullName": "PlayChip (PLA)"
  },
  {
    "Symbol": "MPXT",
    "CoinName": "Myplacex",
    "FullName": "Myplacex (MPXT)"
  },
  {
    "Symbol": "IDAC ",
    "CoinName": "IDAC ",
    "FullName": "IDAC  (IDAC)"
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
    "Symbol": "MONK",
    "CoinName": "Monkey Project",
    "FullName": "Monkey Project (MONK)"
  },
  {
    "Symbol": "SPON",
    "CoinName": "Instant Sponsor Token",
    "FullName": "Instant Sponsor Token (SPON)"
  },
  {
    "Symbol": "IQ",
    "CoinName": "Everipedia",
    "FullName": "Everipedia (IQ)"
  },
  {
    "Symbol": "VTUUR",
    "CoinName": "VTUUR",
    "FullName": "VTUUR (VTUUR)"
  },
  {
    "Symbol": "MHP",
    "CoinName": "MedicoHealth",
    "FullName": "MedicoHealth (MHP)"
  },
  {
    "Symbol": "ILK",
    "CoinName": "Inlock",
    "FullName": "Inlock (ILK)"
  },
  {
    "Symbol": "TLNT",
    "CoinName": "Talent Token",
    "FullName": "Talent Token (TLNT)"
  },
  {
    "Symbol": "CP",
    "CoinName": "CrowdPrecision",
    "FullName": "CrowdPrecision (CP)"
  },
  {
    "Symbol": "ZNA",
    "CoinName": "Zenome",
    "FullName": "Zenome (ZNA)"
  },
  {
    "Symbol": "TTB",
    "CoinName": "TrustaBit",
    "FullName": "TrustaBit (TTB)"
  },
  {
    "Symbol": "VLTX",
    "CoinName": "Volentix",
    "FullName": "Volentix (VLTX)"
  },
  {
    "Symbol": "OASC",
    "CoinName": "Oasis City",
    "FullName": "Oasis City (OASC)"
  },
  {
    "Symbol": "NZE",
    "CoinName": "Nagezeni",
    "FullName": "Nagezeni (NZE)"
  },
  {
    "Symbol": "GDL",
    "CoinName": "GodlyCoin",
    "FullName": "GodlyCoin (GDL)"
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
    "Symbol": "CAPP",
    "CoinName": "Cappasity",
    "FullName": "Cappasity (CAPP)"
  },
  {
    "Symbol": "STEX",
    "CoinName": "STEX",
    "FullName": "STEX (STEX)"
  },
  {
    "Symbol": "IOUX",
    "CoinName": "IOU",
    "FullName": "IOU (IOUX)"
  },
  {
    "Symbol": "NVOY",
    "CoinName": "Envoy",
    "FullName": "Envoy (NVOY)"
  },
  {
    "Symbol": "SNPC",
    "CoinName": "SnapCoin",
    "FullName": "SnapCoin (SNPC)"
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
    "Symbol": "GMS",
    "CoinName": "Gemstra",
    "FullName": "Gemstra (GMS)"
  },
  {
    "Symbol": "LVX",
    "CoinName": "LVX",
    "FullName": "LVX (LVX)"
  },
  {
    "Symbol": "PLNX",
    "CoinName": "Planumex",
    "FullName": "Planumex (PLNX)"
  },
  {
    "Symbol": "OIO",
    "CoinName": "Online",
    "FullName": "Online (OIO)"
  },
  {
    "Symbol": "EQY",
    "CoinName": "Eqwity",
    "FullName": "Eqwity (EQY)"
  },
  {
    "Symbol": "BITM",
    "CoinName": "BitMoney",
    "FullName": "BitMoney (BITM)"
  },
  {
    "Symbol": "SCH",
    "CoinName": "Sia Cash Coin",
    "FullName": "Sia Cash Coin (SCH)"
  },
  {
    "Symbol": "CAN*",
    "CoinName": "Content and AD Network",
    "FullName": "Content and AD Network (CAN*)"
  },
  {
    "Symbol": "TOT",
    "CoinName": "TotCoin",
    "FullName": "TotCoin (TOT)"
  },
  {
    "Symbol": "SRV",
    "CoinName": "ServAdvisor",
    "FullName": "ServAdvisor (SRV)"
  },
  {
    "Symbol": "SYLO",
    "CoinName": "Sylo",
    "FullName": "Sylo (SYLO)"
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
    "Symbol": "TCHB",
    "CoinName": "Teachers Blockchain",
    "FullName": "Teachers Blockchain (TCHB)"
  },
  {
    "Symbol": "CTY",
    "CoinName": "Connecty",
    "FullName": "Connecty (CTY)"
  },
  {
    "Symbol": "EZX",
    "CoinName": "EZ Exchange",
    "FullName": "EZ Exchange (EZX)"
  },
  {
    "Symbol": "FNL",
    "CoinName": "Finlocale",
    "FullName": "Finlocale (FNL)"
  },
  {
    "Symbol": "HBE",
    "CoinName": "healthbank ",
    "FullName": "healthbank  (HBE)"
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
    "Symbol": "LEN",
    "CoinName": "Liqnet",
    "FullName": "Liqnet (LEN)"
  },
  {
    "Symbol": "LQ8",
    "CoinName": "Liquid8",
    "FullName": "Liquid8 (LQ8)"
  },
  {
    "Symbol": "DPP",
    "CoinName": "Digital Assets Power Play",
    "FullName": "Digital Assets Power Play (DPP)"
  },
  {
    "Symbol": "BIOC",
    "CoinName": "BioCrypt",
    "FullName": "BioCrypt (BIOC)"
  },
  {
    "Symbol": "ZER",
    "CoinName": "Zero",
    "FullName": "Zero (ZER)"
  },
  {
    "Symbol": "XPR",
    "CoinName": "Permian",
    "FullName": "Permian (XPR)"
  },
  {
    "Symbol": "B2G",
    "CoinName": "Bitcoiin2Gen",
    "FullName": "Bitcoiin2Gen (B2G)"
  },
  {
    "Symbol": "IMVR",
    "CoinName": "ImmVRse",
    "FullName": "ImmVRse (IMVR)"
  },
  {
    "Symbol": "PETL",
    "CoinName": "Petlife ",
    "FullName": "Petlife  (PETL)"
  },
  {
    "Symbol": "BITCAR",
    "CoinName": "BitCar",
    "FullName": "BitCar (BITCAR)"
  },
  {
    "Symbol": "PPS",
    "CoinName": "PopulStay",
    "FullName": "PopulStay (PPS)"
  },
  {
    "Symbol": "SEELE",
    "CoinName": "Seele",
    "FullName": "Seele (SEELE)"
  },
  {
    "Symbol": "ZT",
    "CoinName": "ZB Global",
    "FullName": "ZB Global (ZT)"
  },
  {
    "Symbol": "REP",
    "CoinName": "Augur",
    "FullName": "Augur (REP)"
  },
  {
    "Symbol": "SMILO",
    "CoinName": "Smilo",
    "FullName": "Smilo (SMILO)"
  },
  {
    "Symbol": "CENNZ",
    "CoinName": "Centrality Token",
    "FullName": "Centrality Token (CENNZ)"
  },
  {
    "Symbol": "TTU",
    "CoinName": "TaTaTu",
    "FullName": "TaTaTu (TTU)"
  },
  {
    "Symbol": "TTC",
    "CoinName": "TitCoin",
    "FullName": "TitCoin (TTC)"
  },
  {
    "Symbol": "GEO",
    "CoinName": "GeoCoin",
    "FullName": "GeoCoin (GEO)"
  },
  {
    "Symbol": "GOVT",
    "CoinName": "The Government Network",
    "FullName": "The Government Network (GOVT)"
  },
  {
    "Symbol": "TRN",
    "CoinName": "Ternion",
    "FullName": "Ternion (TRN)"
  },
  {
    "Symbol": "TCJ",
    "CoinName": "Coinshare",
    "FullName": "Coinshare (TCJ)"
  },
  {
    "Symbol": "CSNO",
    "CoinName": "BitDice",
    "FullName": "BitDice (CSNO)"
  },
  {
    "Symbol": "KUBOS",
    "CoinName": "KubosCoin",
    "FullName": "KubosCoin (KUBOS)"
  },
  {
    "Symbol": "KUBO",
    "CoinName": "KUBO",
    "FullName": "KUBO (KUBO)"
  },
  {
    "Symbol": "VRF",
    "CoinName": "Verifier",
    "FullName": "Verifier (VRF)"
  },
  {
    "Symbol": "WBBC",
    "CoinName": "World Bit Bank",
    "FullName": "World Bit Bank (WBBC)"
  },
  {
    "Symbol": "AXIS",
    "CoinName": "LaneAxis",
    "FullName": "LaneAxis (AXIS)"
  },
  {
    "Symbol": "FTRC",
    "CoinName": "FutureCoin",
    "FullName": "FutureCoin (FTRC)"
  },
  {
    "Symbol": "CRYP",
    "CoinName": "CrypticCoin",
    "FullName": "CrypticCoin (CRYP)"
  },
  {
    "Symbol": "IVC",
    "CoinName": "Investy Coin",
    "FullName": "Investy Coin (IVC)"
  },
  {
    "Symbol": "MIODIO",
    "CoinName": "MIODIOCOIN",
    "FullName": "MIODIOCOIN (MIODIO)"
  },
  {
    "Symbol": "ARDR",
    "CoinName": "Ardor",
    "FullName": "Ardor (ARDR)"
  },
  {
    "Symbol": "IGNIS",
    "CoinName": "Ignis",
    "FullName": "Ignis (IGNIS)"
  },
  {
    "Symbol": "VRS",
    "CoinName": "Veros",
    "FullName": "Veros (VRS)"
  },
  {
    "Symbol": "DFS",
    "CoinName": "Digital Fantasy Sports",
    "FullName": "Digital Fantasy Sports (DFS)"
  },
  {
    "Symbol": "ELES",
    "CoinName": "Elements Estates",
    "FullName": "Elements Estates (ELES)"
  },
  {
    "Symbol": "BKX",
    "CoinName": "BANKEX",
    "FullName": "BANKEX (BKX)"
  },
  {
    "Symbol": "SMOKE",
    "CoinName": "Smoke",
    "FullName": "Smoke (SMOKE)"
  },
  {
    "Symbol": "BCO*",
    "CoinName": "BridgeCoin",
    "FullName": "BridgeCoin (BCO)"
  },
  {
    "Symbol": "FLC",
    "CoinName": "Fieldcoin",
    "FullName": "Fieldcoin (FLC)"
  },
  {
    "Symbol": "CSTL",
    "CoinName": "Castle",
    "FullName": "Castle (CSTL)"
  },
  {
    "Symbol": "XBY",
    "CoinName": "XTRABYTES",
    "FullName": "XTRABYTES (XBY)"
  },
  {
    "Symbol": "LTCP",
    "CoinName": "LitecoinPro",
    "FullName": "LitecoinPro (LTCP)"
  },
  {
    "Symbol": "IQN",
    "CoinName": "IQeon",
    "FullName": "IQeon (IQN)"
  },
  {
    "Symbol": "ONE",
    "CoinName": "Menlo One",
    "FullName": "Menlo One (ONE)"
  },
  {
    "Symbol": "ITL",
    "CoinName": "Italian Lira",
    "FullName": "Italian Lira (ITL)"
  },
  {
    "Symbol": "OMX",
    "CoinName": "Project Shivom",
    "FullName": "Project Shivom (OMX)"
  },
  {
    "Symbol": "GBX",
    "CoinName": "GoByte",
    "FullName": "GoByte (GBX)"
  },
  {
    "Symbol": "SMART",
    "CoinName": "SmartCash",
    "FullName": "SmartCash (SMART)"
  },
  {
    "Symbol": "MYB",
    "CoinName": "MyBit",
    "FullName": "MyBit (MYB)"
  },
  {
    "Symbol": "SLY",
    "CoinName": "SELFLLERY",
    "FullName": "SELFLLERY (SLY)"
  },
  {
    "Symbol": "FUNDZ",
    "CoinName": "FundFantasy",
    "FullName": "FundFantasy (FUNDZ)"
  },
  {
    "Symbol": "DAX",
    "CoinName": "DAEX",
    "FullName": "DAEX (DAX)"
  },
  {
    "Symbol": "IAG",
    "CoinName": "IAGON",
    "FullName": "IAGON (IAG)"
  },
  {
    "Symbol": "AAA",
    "CoinName": "AAA Reserve Currency",
    "FullName": "AAA Reserve Currency (AAA)"
  },
  {
    "Symbol": "NRVE",
    "CoinName": "Narrative",
    "FullName": "Narrative (NRVE)"
  },
  {
    "Symbol": "HAND",
    "CoinName": "ShowHand",
    "FullName": "ShowHand (HAND)"
  },
  {
    "Symbol": "RMESH",
    "CoinName": "RightMesh",
    "FullName": "RightMesh (RMESH)"
  },
  {
    "Symbol": "BASIS",
    "CoinName": "Basis",
    "FullName": "Basis (BASIS)"
  },
  {
    "Symbol": "SGA",
    "CoinName": "SAGA",
    "FullName": "SAGA (SGA)"
  },
  {
    "Symbol": "CUSD",
    "CoinName": "Carbon",
    "FullName": "Carbon (CUSD)"
  },
  {
    "Symbol": "KUSD",
    "CoinName": "Kowala",
    "FullName": "Kowala (KUSD)"
  },
  {
    "Symbol": "ARAW",
    "CoinName": "Araw",
    "FullName": "Araw (ARAW)"
  },
  {
    "Symbol": "METM",
    "CoinName": "MetaMorph",
    "FullName": "MetaMorph (METM)"
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
    "Symbol": "MYDFS",
    "CoinName": "MyDFS",
    "FullName": "MyDFS (MYDFS)"
  },
  {
    "Symbol": "VTOS",
    "CoinName": "VTOS",
    "FullName": "VTOS (VTOS)"
  },
  {
    "Symbol": "GBO",
    "CoinName": "Gabro.io",
    "FullName": "Gabro.io (GBO)"
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
    "Symbol": "H3O",
    "CoinName": "Hydrominer",
    "FullName": "Hydrominer (H3O)"
  },
  {
    "Symbol": "ANGEL",
    "CoinName": "Crypto Angel",
    "FullName": "Crypto Angel (ANGEL)"
  },
  {
    "Symbol": "VNX",
    "CoinName": "VisionX",
    "FullName": "VisionX (VNX)"
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
    "Symbol": "P2PS",
    "CoinName": "P2P Solutions Foundation",
    "FullName": "P2P Solutions Foundation (P2PS)"
  },
  {
    "Symbol": "ABBC",
    "CoinName": "Alibabacoin",
    "FullName": "Alibabacoin (ABBC)"
  },
  {
    "Symbol": "VEX",
    "CoinName": "Vexanium",
    "FullName": "Vexanium (VEX)"
  },
  {
    "Symbol": "COVEX",
    "CoinName": "CoVEX",
    "FullName": "CoVEX (COVEX)"
  },
  {
    "Symbol": "LK",
    "CoinName": "Liker",
    "FullName": "Liker (LK)"
  },
  {
    "Symbol": "VENA",
    "CoinName": "Vena Network",
    "FullName": "Vena Network (VENA)"
  },
  {
    "Symbol": "NMK",
    "CoinName": "Namek",
    "FullName": "Namek (NMK)"
  },
  {
    "Symbol": "RAINC ",
    "CoinName": "RainCheck",
    "FullName": "RainCheck (RAINC)"
  },
  {
    "Symbol": "TKD",
    "CoinName": "Tokedo",
    "FullName": "Tokedo (TKD)"
  },
  {
    "Symbol": "BBOS",
    "CoinName": "Blackbox Foundation",
    "FullName": "Blackbox Foundation (BBOS)"
  },
  {
    "Symbol": "APXT",
    "CoinName": "ApolloX",
    "FullName": "ApolloX (APXT)"
  },
  {
    "Symbol": "BONA",
    "CoinName": "Bonafi",
    "FullName": "Bonafi (BONA)"
  },
  {
    "Symbol": "COS",
    "CoinName": "Contentos",
    "FullName": "Contentos (COS)"
  },
  {
    "Symbol": "IOTW",
    "CoinName": "IOTW",
    "FullName": "IOTW (IOTW)"
  },
  {
    "Symbol": "MPAY",
    "CoinName": "Menapay",
    "FullName": "Menapay (MPAY)"
  },
  {
    "Symbol": "MTCN",
    "CoinName": "Multiven",
    "FullName": "Multiven (MTCN)"
  },
  {
    "Symbol": "RPB",
    "CoinName": "Republia",
    "FullName": "Republia (RPB)"
  },
  {
    "Symbol": "LITION",
    "CoinName": "Lition",
    "FullName": "Lition (LITION)"
  },
  {
    "Symbol": "RF",
    "CoinName": "Raido Financial",
    "FullName": "Raido Financial (RF)"
  },
  {
    "Symbol": "NBOX",
    "CoinName": "Unboxed",
    "FullName": "Unboxed (NBOX)"
  },
  {
    "Symbol": "PGF7T",
    "CoinName": "PGF500",
    "FullName": "PGF500 (PGF7T)"
  },
  {
    "Symbol": "OCEAN",
    "CoinName": "Poseidon Foundation",
    "FullName": "Poseidon Foundation (OCEAN)"
  },
  {
    "Symbol": "ETHIX",
    "CoinName": "EthicHub",
    "FullName": "EthicHub (ETHIX)"
  },
  {
    "Symbol": "CHK",
    "CoinName": "Chek",
    "FullName": "Chek (CHK)"
  },
  {
    "Symbol": "TREE",
    "CoinName": "HyperionX",
    "FullName": "HyperionX (TREE)"
  },
  {
    "Symbol": "HBX",
    "CoinName": "Hyperbridge",
    "FullName": "Hyperbridge (HBX)"
  },
  {
    "Symbol": "SREUR",
    "CoinName": "SocialRemit",
    "FullName": "SocialRemit (SREUR)"
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
    "Symbol": "NRX",
    "CoinName": "Neironix",
    "FullName": "Neironix (NRX)"
  },
  {
    "Symbol": "RDS",
    "CoinName": "Reger Diamond",
    "FullName": "Reger Diamond (RDS)"
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
    "Symbol": "TCHN",
    "CoinName": "Tachain",
    "FullName": "Tachain (TCHN)"
  },
  {
    "Symbol": "LYFE",
    "CoinName": "Lyfe",
    "FullName": "Lyfe (LYFE)"
  },
  {
    "Symbol": "GEMA",
    "CoinName": "Gemera",
    "FullName": "Gemera (GEMA)"
  },
  {
    "Symbol": "VTEX",
    "CoinName": "Vertex",
    "FullName": "Vertex (VTEX)"
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
    "Symbol": "ATTR",
    "CoinName": "Attrace",
    "FullName": "Attrace (ATTR)"
  },
  {
    "Symbol": "BC",
    "CoinName": "Beverage.cash",
    "FullName": "Beverage.cash (BC)"
  },
  {
    "Symbol": "BOLTT",
    "CoinName": "BolttCoin",
    "FullName": "BolttCoin (BOLTT)"
  },
  {
    "Symbol": "COY",
    "CoinName": "Coin Analyst",
    "FullName": "Coin Analyst (COY)"
  },
  {
    "Symbol": "CPROP",
    "CoinName": "CPROP",
    "FullName": "CPROP (CPROP)"
  },
  {
    "Symbol": "CREV",
    "CoinName": "CryptoRevolution",
    "FullName": "CryptoRevolution (CREV)"
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
    "Symbol": "LIB",
    "CoinName": "Libellum",
    "FullName": "Libellum (LIB)"
  },
  {
    "Symbol": "XDMC",
    "CoinName": "MPCX",
    "FullName": "MPCX (XDMC)"
  },
  {
    "Symbol": "LYQD",
    "CoinName": "eLYQD",
    "FullName": "eLYQD (LYQD)"
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
    "Symbol": "MYO",
    "CoinName": "Mycro",
    "FullName": "Mycro (MYO)"
  },
  {
    "Symbol": "FTT",
    "CoinName": "FarmaTrust",
    "FullName": "FarmaTrust (FTT)"
  },
  {
    "Symbol": "WTL",
    "CoinName": "Welltrado",
    "FullName": "Welltrado (WTL)"
  },
  {
    "Symbol": "JMC",
    "CoinName": "Junson Ming Chan Coin",
    "FullName": "Junson Ming Chan Coin (JMC)"
  },
  {
    "Symbol": "STACS",
    "CoinName": "STACS Token",
    "FullName": "STACS Token (STACS)"
  },
  {
    "Symbol": "FOAM",
    "CoinName": "Foam",
    "FullName": "Foam (FOAM)"
  },
  {
    "Symbol": "TKS",
    "CoinName": "Tokes",
    "FullName": "Tokes (TKS)"
  },
  {
    "Symbol": "CNCT",
    "CoinName": "CONNECT",
    "FullName": "CONNECT (CNCT)"
  },
  {
    "Symbol": "FRED",
    "CoinName": "FREDEnergy",
    "FullName": "FREDEnergy (FRED)"
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
    "Symbol": "ENGT",
    "CoinName": "Engagement Token",
    "FullName": "Engagement Token (ENGT)"
  },
  {
    "Symbol": "SGO",
    "CoinName": "Selfie GO",
    "FullName": "Selfie GO (SGO)"
  },
  {
    "Symbol": "VULC",
    "CoinName": "Vulcano",
    "FullName": "Vulcano (VULC)"
  },
  {
    "Symbol": "ZND",
    "CoinName": "Zenad",
    "FullName": "Zenad (ZND)"
  },
  {
    "Symbol": "FPC",
    "CoinName": "Futurepia",
    "FullName": "Futurepia (FPC)"
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
    "Symbol": "MRN",
    "CoinName": "Mercoin",
    "FullName": "Mercoin (MRN)"
  },
  {
    "Symbol": "OCTO*",
    "CoinName": "OctoBit Coin",
    "FullName": "OctoBit Coin (OCTO*)"
  },
  {
    "Symbol": "COG",
    "CoinName": "Cognitio",
    "FullName": "Cognitio (COG)"
  },
  {
    "Symbol": "FLIP",
    "CoinName": "BitFlip",
    "FullName": "BitFlip (FLIP)"
  },
  {
    "Symbol": "LX",
    "CoinName": "Moonlight",
    "FullName": "Moonlight (LX)"
  },
  {
    "Symbol": "EDN",
    "CoinName": "EdenChain",
    "FullName": "EdenChain (EDN)"
  },
  {
    "Symbol": "AUX",
    "CoinName": "Auxilium",
    "FullName": "Auxilium (Auxilium)"
  },
  {
    "Symbol": "SYNCO",
    "CoinName": "Synco",
    "FullName": "Synco (SYNCO)"
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
    "Symbol": "IRC",
    "CoinName": "IRONCOIN",
    "FullName": "IRONCOIN (IRC)"
  },
  {
    "Symbol": "SUSD",
    "CoinName": "sUSD",
    "FullName": "sUSD (SUSD)"
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
    "Symbol": "HPSP",
    "CoinName": "Hyperspace",
    "FullName": "Hyperspace (HPSP)"
  },
  {
    "Symbol": "GLDR",
    "CoinName": "Golder Coin",
    "FullName": "Golder Coin (GLDR)"
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
    "Symbol": "ZEPH",
    "CoinName": "ZEPHYR",
    "FullName": "ZEPHYR (ZEPH)"
  },
  {
    "Symbol": "USE",
    "CoinName": "Usechain Token",
    "FullName": "Usechain Token (USE)"
  },
  {
    "Symbol": "GENX",
    "CoinName": "Genesis Network",
    "FullName": "Genesis Network (GENX)"
  },
  {
    "Symbol": "INX",
    "CoinName": "InnovaMinex",
    "FullName": "InnovaMinex (INX)"
  },
  {
    "Symbol": "EQC",
    "CoinName": "Ethereum Qchain Token",
    "FullName": "Ethereum Qchain Token (EQC)"
  },
  {
    "Symbol": "STOR",
    "CoinName": "Self Storage Coin",
    "FullName": "Self Storage Coin (STOR)"
  },
  {
    "Symbol": "FTUM",
    "CoinName": "Fatum ",
    "FullName": "Fatum  (FTUM)"
  },
  {
    "Symbol": "FTM",
    "CoinName": "Fantom",
    "FullName": "Fantom (FTM)"
  },
  {
    "Symbol": "URX",
    "CoinName": "URANIUMX",
    "FullName": "URANIUMX (URX)"
  },
  {
    "Symbol": "HERB",
    "CoinName": "HerbCoin",
    "FullName": "HerbCoin (HERB)"
  },
  {
    "Symbol": "TCH",
    "CoinName": "TigerCash",
    "FullName": "TigerCash (TCH)"
  },
  {
    "Symbol": "HASH",
    "CoinName": "Hashbon",
    "FullName": "Hashbon (HASH)"
  },
  {
    "Symbol": "ABELE",
    "CoinName": "Abele",
    "FullName": "Abele (ABELE)"
  },
  {
    "Symbol": "RBDT",
    "CoinName": "RoBust Defense Token",
    "FullName": "RoBust Defense Token (RBDT)"
  },
  {
    "Symbol": "CBP",
    "CoinName": "ComBox",
    "FullName": "ComBox (CBP)"
  },
  {
    "Symbol": "MNZ",
    "CoinName": "Monaize",
    "FullName": "Monaize (MNZ)"
  },
  {
    "Symbol": "KSYS",
    "CoinName": "K-Systems",
    "FullName": "K-Systems (KSYS)"
  },
  {
    "Symbol": "MUSIC",
    "CoinName": "Musicoin",
    "FullName": "Musicoin (MUSIC)"
  },
  {
    "Symbol": "ZUUM",
    "CoinName": "Zuum",
    "FullName": "Zuum (ZUUM)"
  },
  {
    "Symbol": "SEC",
    "CoinName": "SecureCryptoPayments",
    "FullName": "SecureCryptoPayments (SEC)"
  },
  {
    "Symbol": "TREX",
    "CoinName": "TreeBlock",
    "FullName": "TreeBlock (TREX)"
  },
  {
    "Symbol": "DPT",
    "CoinName": "Deliverers Power Token",
    "FullName": "Deliverers Power Token (DPT)"
  },
  {
    "Symbol": "PRPL",
    "CoinName": "Purple Token",
    "FullName": "Purple Token (PRPL)"
  },
  {
    "Symbol": "BTZC",
    "CoinName": "BeatzCoin",
    "FullName": "BeatzCoin (BTZC)"
  },
  {
    "Symbol": "MNVM",
    "CoinName": "Novam",
    "FullName": "Novam (MNVM)"
  },
  {
    "Symbol": "BCNA",
    "CoinName": "BitCanna",
    "FullName": "BitCanna (BCNA)"
  },
  {
    "Symbol": "DLXV",
    "CoinName": "Delta-X",
    "FullName": "Delta-X (DLXV)"
  },
  {
    "Symbol": "CLRTY",
    "CoinName": "Clarity",
    "FullName": "Clarity (CLRTY)"
  },
  {
    "Symbol": "VEO",
    "CoinName": "Viewo",
    "FullName": "Viewo (VEO)"
  },
  {
    "Symbol": "LNKC",
    "CoinName": "LINKCHAIN",
    "FullName": "LINKCHAIN (LNKC)"
  },
  {
    "Symbol": "CSQ",
    "CoinName": "cosquare",
    "FullName": "cosquare (CSQ)"
  },
  {
    "Symbol": "RWD",
    "CoinName": "Reward Vision",
    "FullName": "Reward Vision (RWD)"
  },
  {
    "Symbol": "ATT",
    "CoinName": "Aeternum",
    "FullName": "Aeternum (ATT)"
  },
  {
    "Symbol": "ICHN",
    "CoinName": "i-chain",
    "FullName": "i-chain (ICHN)"
  },
  {
    "Symbol": "3XD",
    "CoinName": "3DChain",
    "FullName": "3DChain (3XD)"
  },
  {
    "Symbol": "PON",
    "CoinName": "Ponder",
    "FullName": "Ponder (PON)"
  },
  {
    "Symbol": "ZILLA",
    "CoinName": "ChainZilla",
    "FullName": "ChainZilla (ZILLA)"
  },
  {
    "Symbol": "PLTX",
    "CoinName": "PlutusX",
    "FullName": "PlutusX (PLTX)"
  },
  {
    "Symbol": "LBR",
    "CoinName": "LaborCrypto",
    "FullName": "LaborCrypto (LBR)"
  },
  {
    "Symbol": "VAR",
    "CoinName": "VARcrypt",
    "FullName": "VARcrypt (VAR)"
  },
  {
    "Symbol": "VAD",
    "CoinName": "Varanida",
    "FullName": "Varanida (VAD)"
  },
  {
    "Symbol": "LAO",
    "CoinName": "LC Token",
    "FullName": "LC Token (LAO)"
  },
  {
    "Symbol": "LUMA",
    "CoinName": "LUMA Token",
    "FullName": "LUMA Token (LUMA)"
  },
  {
    "Symbol": "INVX",
    "CoinName": "Investx",
    "FullName": "Investx (INVX)"
  },
  {
    "Symbol": "BFEX",
    "CoinName": "BFEX",
    "FullName": "BFEX (BFEX)"
  },
  {
    "Symbol": "EGDC",
    "CoinName": "EasyGuide",
    "FullName": "EasyGuide (EGDC)"
  },
  {
    "Symbol": "INFLR",
    "CoinName": "Inflr",
    "FullName": "Inflr (INFLR)"
  },
  {
    "Symbol": "XNT",
    "CoinName": "Exenium",
    "FullName": "Exenium (XNT)"
  },
  {
    "Symbol": "HLDY",
    "CoinName": "HOLIDAY",
    "FullName": "HOLIDAY (HLDY)"
  },
  {
    "Symbol": "F2K",
    "CoinName": "Farm2Kitchen",
    "FullName": "Farm2Kitchen (F2K)"
  },
  {
    "Symbol": "BCV",
    "CoinName": "BCV Blue Chip",
    "FullName": "BCV Blue Chip (BCV)"
  },
  {
    "Symbol": "QOBI",
    "CoinName": "Qobit",
    "FullName": "Qobit (QOBI)"
  },
  {
    "Symbol": "HUS",
    "CoinName": "HUSSY",
    "FullName": "HUSSY (HUS)"
  },
  {
    "Symbol": "GOALS",
    "CoinName": "UnitedFans",
    "FullName": "UnitedFans (GOALS)"
  },
  {
    "Symbol": "OSF",
    "CoinName": "One Solution",
    "FullName": "One Solution (OSF)"
  },
  {
    "Symbol": "BTMG",
    "CoinName": "Bitcademy Football",
    "FullName": "Bitcademy Football (BTMG)"
  },
  {
    "Symbol": "MBN",
    "CoinName": "Membrana",
    "FullName": "Membrana (MBN)"
  },
  {
    "Symbol": "GTX",
    "CoinName": "GALLACTIC",
    "FullName": "GALLACTIC (GTX)"
  },
  {
    "Symbol": "FORK",
    "CoinName": "Gastro Advisor Token",
    "FullName": "Gastro Advisor Token (FORK)"
  },
  {
    "Symbol": "CRF",
    "CoinName": "CrowdForce ",
    "FullName": "CrowdForce  (CRF)"
  },
  {
    "Symbol": "TECO",
    "CoinName": "TerraEcoCoin",
    "FullName": "TerraEcoCoin (TECO)"
  },
  {
    "Symbol": "MAP",
    "CoinName": "Maester Protocol",
    "FullName": "Maester Protocol (MAP)"
  },
  {
    "Symbol": "SCIA",
    "CoinName": "Stem Cell",
    "FullName": "Stem Cell (SCIA)"
  },
  {
    "Symbol": "STIPS",
    "CoinName": "Stips",
    "FullName": "Stips (STIPS)"
  },
  {
    "Symbol": "IDC",
    "CoinName": "IdealCoin",
    "FullName": "IdealCoin (IDC)"
  },
  {
    "Symbol": "DESI",
    "CoinName": "Desico",
    "FullName": "Desico (DESI)"
  },
  {
    "Symbol": "TENZ",
    "CoinName": "Tenzorum",
    "FullName": "Tenzorum (TENZ)"
  },
  {
    "Symbol": "ENCN",
    "CoinName": "EndChain",
    "FullName": "EndChain (ENCN)"
  },
  {
    "Symbol": "VTAG",
    "CoinName": "veriTAG Token",
    "FullName": "veriTAG Token (VTAG)"
  },
  {
    "Symbol": "MOOLYA",
    "CoinName": "moolyacoin",
    "FullName": "moolyacoin (MOOLYA)"
  },
  {
    "Symbol": "AEN",
    "CoinName": "Aenco",
    "FullName": "Aenco (AEN)"
  },
  {
    "Symbol": "LAX",
    "CoinName": "LAPO",
    "FullName": "LAPO (LAX)"
  },
  {
    "Symbol": "KRP",
    "CoinName": "Kryptoin",
    "FullName": "Kryptoin (KRP)"
  },
  {
    "Symbol": "JVY",
    "CoinName": "Javvy",
    "FullName": "Javvy (JVY)"
  },
  {
    "Symbol": "CTW",
    "CoinName": "Citowise",
    "FullName": "Citowise (CTW)"
  },
  {
    "Symbol": "LNT",
    "CoinName": "Litenett",
    "FullName": "Litenett (LNT)"
  },
  {
    "Symbol": "VANM",
    "CoinName": "VANM",
    "FullName": "VANM (VANM)"
  },
  {
    "Symbol": "HETA",
    "CoinName": "HetaChain",
    "FullName": "HetaChain (HETA)"
  },
  {
    "Symbol": "SLST",
    "CoinName": "SmartLands",
    "FullName": "SmartLands (SLST)"
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
    "Symbol": "GEN*",
    "CoinName": "DAOstack",
    "FullName": "DAOstack (GEN*)"
  },
  {
    "Symbol": "GEN",
    "CoinName": "Genstake",
    "FullName": "Genstake (GEN)"
  },
  {
    "Symbol": "MITC",
    "CoinName": "MusicLife",
    "FullName": "MusicLife (MITC)"
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
    "Symbol": "ELT",
    "CoinName": "Electron",
    "FullName": "Electron (ELT)"
  },
  {
    "Symbol": "TIOX",
    "CoinName": "Trade Token X",
    "FullName": "Trade Token X (TIOX)"
  },
  {
    "Symbol": "LST",
    "CoinName": "Lendroid Support Token",
    "FullName": "Lendroid Support Token (LST)"
  },
  {
    "Symbol": "BLC",
    "CoinName": "BlakeCoin",
    "FullName": "BlakeCoin (BLC)"
  },
  {
    "Symbol": "PHO",
    "CoinName": "Photon",
    "FullName": "Photon (PHO)"
  },
  {
    "Symbol": "BBTC",
    "CoinName": "BlakeBitcoin",
    "FullName": "BlakeBitcoin (BBTC)"
  },
  {
    "Symbol": "XEC",
    "CoinName": "Eternal Coin",
    "FullName": "Eternal Coin (XEC)"
  },
  {
    "Symbol": "SVD",
    "CoinName": "savedroid",
    "FullName": "savedroid (SVD)"
  },
  {
    "Symbol": "XNB",
    "CoinName": "Xeonbit",
    "FullName": "Xeonbit (XNB)"
  },
  {
    "Symbol": "LPC",
    "CoinName": "Little Phil",
    "FullName": "Little Phil (LPC)"
  },
  {
    "Symbol": "XRN",
    "CoinName": "Saronite",
    "FullName": "Saronite (XRN)"
  },
  {
    "Symbol": "RBTC",
    "CoinName": "Smart Bitcoin",
    "FullName": "Smart Bitcoin (RBTC)"
  },
  {
    "Symbol": "MHC",
    "CoinName": "MetaHash",
    "FullName": "MetaHash (MHC)"
  },
  {
    "Symbol": "TRK",
    "CoinName": "TruckCoin",
    "FullName": "TruckCoin (TRK)"
  },
  {
    "Symbol": "PIRATE",
    "CoinName": "PirateCash",
    "FullName": "PirateCash (PIRATE)"
  },
  {
    "Symbol": "CHAT",
    "CoinName": "OpenChat",
    "FullName": "OpenChat (CHAT)"
  },
  {
    "Symbol": "ONAM",
    "CoinName": "ONAM",
    "FullName": "ONAM (ONAM)"
  },
  {
    "Symbol": "XET",
    "CoinName": "Eternal Token",
    "FullName": "Eternal Token (XET)"
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
    "Symbol": "NPX",
    "CoinName": "Napoleon X",
    "FullName": "Napoleon X (NPX)"
  },
  {
    "Symbol": "BLTG",
    "CoinName": "Block-Logic",
    "FullName": "Block-Logic (BLTG)"
  },
  {
    "Symbol": "VTM",
    "CoinName": "Victorieum",
    "FullName": "Victorieum (VTM)"
  },
  {
    "Symbol": "MZG",
    "CoinName": "Moozicore",
    "FullName": "Moozicore (MZG)"
  },
  {
    "Symbol": "XELS",
    "CoinName": "XELS Coin",
    "FullName": "XELS Coin (XELS)"
  },
  {
    "Symbol": "TWC",
    "CoinName": "Twilight",
    "FullName": "Twilight (TWC)"
  },
  {
    "Symbol": "MOBU",
    "CoinName": "MOBU",
    "FullName": "MOBU (MOBU)"
  },
  {
    "Symbol": "GZB",
    "CoinName": "Gigzi",
    "FullName": "Gigzi (GZB)"
  },
  {
    "Symbol": "BRIK",
    "CoinName": "BrikBit",
    "FullName": "BrikBit (BRIK)"
  },
  {
    "Symbol": "BFC",
    "CoinName": "Betform",
    "FullName": "Betform (BFC)"
  },
  {
    "Symbol": "BQTX",
    "CoinName": "BQT",
    "FullName": "BQT (BQTX)"
  },
  {
    "Symbol": "AENT",
    "CoinName": "AEN",
    "FullName": "AEN (AENT)"
  },
  {
    "Symbol": "WTXH",
    "CoinName": "WTX HUB",
    "FullName": "WTX HUB (WTXH)"
  },
  {
    "Symbol": "SaTT",
    "CoinName": "SaTT",
    "FullName": "SaTT (SaTT)"
  },
  {
    "Symbol": "DREAM",
    "CoinName": "DreamTeam Token",
    "FullName": "DreamTeam Token (DREAM)"
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
    "Symbol": "FLO",
    "CoinName": "Flo",
    "FullName": "Flo (FLO)"
  },
  {
    "Symbol": "MIMI",
    "CoinName": "MIMI Money",
    "FullName": "MIMI Money (MIMI)"
  },
  {
    "Symbol": "FIII",
    "CoinName": "Fiii",
    "FullName": "Fiii (FIII)"
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
    "Symbol": "AMO",
    "CoinName": "AMO Coin",
    "FullName": "AMO Coin (AMO)"
  },
  {
    "Symbol": "SNTVT",
    "CoinName": "Sentivate",
    "FullName": "Sentivate (SNTVT)"
  },
  {
    "Symbol": "TIT",
    "CoinName": "TittieCoin",
    "FullName": "TittieCoin (TIT)"
  },
  {
    "Symbol": "TERN",
    "CoinName": "Ternio",
    "FullName": "Ternio (TERN)"
  },
  {
    "Symbol": "ERC20",
    "CoinName": "Index ERC20",
    "FullName": "Index ERC20 (ERC20)"
  },
  {
    "Symbol": "BEER",
    "CoinName": "BEER Coin",
    "FullName": "BEER Coin (BEER)"
  },
  {
    "Symbol": "NRP",
    "CoinName": "Neural Protocol",
    "FullName": "Neural Protocol (NRP)"
  },
  {
    "Symbol": "TIMI",
    "CoinName": "Timicoin",
    "FullName": "Timicoin (TIMI)"
  },
  {
    "Symbol": "AERGO",
    "CoinName": "AERGO ",
    "FullName": "AERGO  (AERGO)"
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
    "Symbol": "BSV",
    "CoinName": "Bitcoin SV",
    "FullName": "Bitcoin SV (BSV)"
  },
  {
    "Symbol": "WOWX",
    "CoinName": "WOWX",
    "FullName": "WOWX (WOWX)"
  },
  {
    "Symbol": "HBZ",
    "CoinName": "HBZ Coin",
    "FullName": "HBZ Coin (HBZ)"
  },
  {
    "Symbol": "AGM",
    "CoinName": "Argoneum",
    "FullName": "Argoneum (AGM)"
  },
  {
    "Symbol": "OWC",
    "CoinName": "Oduwa",
    "FullName": "Oduwa (OWC)"
  },
  {
    "Symbol": "CRM",
    "CoinName": "Cream",
    "FullName": "Cream (CRM)"
  },
  {
    "Symbol": "LTHN",
    "CoinName": "Lethean",
    "FullName": "Lethean (LTHN)"
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
    "Symbol": "BIS",
    "CoinName": "Bismuth",
    "FullName": "Bismuth (BIS)"
  },
  {
    "Symbol": "THO",
    "CoinName": "Athero",
    "FullName": "Athero (THO)"
  },
  {
    "Symbol": "IPT",
    "CoinName": "Crypt-ON",
    "FullName": "Crypt-ON (IPT)"
  },
  {
    "Symbol": "MUST",
    "CoinName": "MUST Protocol",
    "FullName": "MUST Protocol (MUST)"
  },
  {
    "Symbol": "REMCO",
    "CoinName": "Remco",
    "FullName": "Remco (REMCO)"
  },
  {
    "Symbol": "GRIN",
    "CoinName": "Grin",
    "FullName": "Grin (GRIN)"
  },
  {
    "Symbol": "JOYT",
    "CoinName": "JoyToken",
    "FullName": "JoyToken (JOYT)"
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
    "Symbol": "BEAM",
    "CoinName": "Beam",
    "FullName": "Beam (BEAM)"
  },
  {
    "Symbol": "MILC",
    "CoinName": "MIcro Licensing Coin",
    "FullName": "MIcro Licensing Coin (MILC)"
  },
  {
    "Symbol": "WRC",
    "CoinName": "Worldcore",
    "FullName": "Worldcore (WRC)"
  },
  {
    "Symbol": "RGT",
    "CoinName": "Retail.Global",
    "FullName": "Retail.Global (RGT)"
  },
  {
    "Symbol": "CGT",
    "CoinName": "Coingrid",
    "FullName": "Coingrid (CGT)"
  },
  {
    "Symbol": "BMG",
    "CoinName": "Borneo",
    "FullName": "Borneo (BMG)"
  },
  {
    "Symbol": "VNS",
    "CoinName": "Venus",
    "FullName": "Venus (VNS)"
  },
  {
    "Symbol": "LYN",
    "CoinName": "LYNCHPIN Token",
    "FullName": "LYNCHPIN Token (LYN)"
  },
  {
    "Symbol": "HRBE",
    "CoinName": "Harambee Token",
    "FullName": "Harambee Token (HRBE)"
  },
  {
    "Symbol": "DSLA",
    "CoinName": "Stacktical",
    "FullName": "Stacktical (DSLA)"
  },
  {
    "Symbol": "OUT",
    "CoinName": "Netscouters",
    "FullName": "Netscouters (OUT)"
  },
  {
    "Symbol": "UNX",
    "CoinName": "UNEOX",
    "FullName": "UNEOX (UNX)"
  },
  {
    "Symbol": "RIF",
    "CoinName": "RIF Token",
    "FullName": "RIF Token (RIF)"
  },
  {
    "Symbol": "MPG",
    "CoinName": "Max Property Group",
    "FullName": "Max Property Group (MPG)"
  },
  {
    "Symbol": "FAIRC",
    "CoinName": "Faireum Token",
    "FullName": "Faireum Token (FAIRC)"
  },
  {
    "Symbol": "MBTC",
    "CoinName": "MicroBitcoin",
    "FullName": "MicroBitcoin (MBTC)"
  },
  {
    "Symbol": "VC",
    "CoinName": "Vecap",
    "FullName": "Vecap (VC)"
  },
  {
    "Symbol": "BPN",
    "CoinName": "beepnow",
    "FullName": "beepnow (BPN)"
  },
  {
    "Symbol": "DUSK",
    "CoinName": "Dusk Network",
    "FullName": "Dusk Network (DUSK)"
  },
  {
    "Symbol": "DYC",
    "CoinName": "Dycoin",
    "FullName": "Dycoin (DYC)"
  },
  {
    "Symbol": "BANCA",
    "CoinName": "BANCA",
    "FullName": "BANCA (BANCA)"
  },
  {
    "Symbol": "LN",
    "CoinName": "LINK",
    "FullName": "LINK (LN)"
  },
  {
    "Symbol": "RWE",
    "CoinName": "Real-World Evidence",
    "FullName": "Real-World Evidence (RWE)"
  },
  {
    "Symbol": "FTR",
    "CoinName": "FactR",
    "FullName": "FactR (FTR)"
  },
  {
    "Symbol": "YSH",
    "CoinName": "Yoshi",
    "FullName": "Yoshi (YSH)"
  },
  {
    "Symbol": "TXM",
    "CoinName": "TMONEY",
    "FullName": "TMONEY (TXM)"
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
    "Symbol": "NEW",
    "CoinName": "Newton",
    "FullName": "Newton (NEW)"
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
    "Symbol": "AVALA",
    "CoinName": "Travala",
    "FullName": "Travala (AVALA)"
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
    "Symbol": "BXC",
    "CoinName": "BtcEX",
    "FullName": "BtcEX (BXC)"
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
    "Symbol": "XBANK",
    "CoinName": "Bancryp",
    "FullName": "Bancryp (XBANK)"
  },
  {
    "Symbol": "USDT",
    "CoinName": "Tether",
    "FullName": "Tether (USDT)"
  },
  {
    "Symbol": "ETC",
    "CoinName": "Ethereum Classic",
    "FullName": "Ethereum Classic (ETC)"
  },
  {
    "Symbol": "ZRX",
    "CoinName": "0x",
    "FullName": "0x (ZRX)"
  },
  {
    "Symbol": "XEM",
    "CoinName": "NEM",
    "FullName": "NEM (XEM)"
  },
  {
    "Symbol": "HT",
    "CoinName": "Huobi Token",
    "FullName": "Huobi Token (HT)"
  },
  {
    "Symbol": "QKC",
    "CoinName": "QuarkChain",
    "FullName": "QuarkChain (QKC)"
  },
  {
    "Symbol": "DOGE",
    "CoinName": "Dogecoin",
    "FullName": "Dogecoin (DOGE)"
  },
  {
    "Symbol": "OMG",
    "CoinName": "OmiseGo",
    "FullName": "OmiseGo (OMG)"
  },
  {
    "Symbol": "BTG",
    "CoinName": "Bitcoin Gold",
    "FullName": "Bitcoin Gold (BTG)"
  },
  {
    "Symbol": "ZIL",
    "CoinName": "Zilliqa",
    "FullName": "Zilliqa (ZIL)"
  },
  {
    "Symbol": "QTUM",
    "CoinName": "QTUM",
    "FullName": "QTUM (QTUM)"
  },
  {
    "Symbol": "LINK",
    "CoinName": "ChainLink",
    "FullName": "ChainLink (LINK)"
  },
  {
    "Symbol": "PAI*",
    "CoinName": "Project Pai",
    "FullName": "Project Pai (PAI*)"
  },
  {
    "Symbol": "LSK",
    "CoinName": "Lisk",
    "FullName": "Lisk (LSK)"
  },
  {
    "Symbol": "BAT",
    "CoinName": "Basic Attention Token",
    "FullName": "Basic Attention Token (BAT)"
  },
  {
    "Symbol": "ICX",
    "CoinName": "ICON Project",
    "FullName": "ICON Project (ICX)"
  },
  {
    "Symbol": "NANO",
    "CoinName": "Nano",
    "FullName": "Nano (NANO)"
  },
  {
    "Symbol": "DGB",
    "CoinName": "DigiByte",
    "FullName": "DigiByte (DGB)"
  },
  {
    "Symbol": "BCD",
    "CoinName": "Bitcoin Diamond",
    "FullName": "Bitcoin Diamond (BCD)"
  },
  {
    "Symbol": "MITH",
    "CoinName": "Mithril",
    "FullName": "Mithril (MITH)"
  },
  {
    "Symbol": "BTS",
    "CoinName": "Bitshares",
    "FullName": "Bitshares (BTS)"
  },
  {
    "Symbol": "BTM*",
    "CoinName": "Bytom",
    "FullName": "Bytom (BTM*)"
  },
  {
    "Symbol": "IOST",
    "CoinName": "IOS token",
    "FullName": "IOS token (IOST)"
  },
  {
    "Symbol": "POLY*",
    "CoinName": "Polymath Network",
    "FullName": "Polymath Network (POLY*)"
  },
  {
    "Symbol": "XVG",
    "CoinName": "Verge",
    "FullName": "Verge (XVG)"
  },
  {
    "Symbol": "SC",
    "CoinName": "Siacoin",
    "FullName": "Siacoin (SC)"
  },
  {
    "Symbol": "WTC",
    "CoinName": "Waltonchain",
    "FullName": "Waltonchain (WTC)"
  },
  {
    "Symbol": "WAVES",
    "CoinName": "Waves",
    "FullName": "Waves (WAVES)"
  },
  {
    "Symbol": "QASH",
    "CoinName": "Quoine Liquid",
    "FullName": "Quoine Liquid (QASH)"
  },
  {
    "Symbol": "HOT*",
    "CoinName": "Holo",
    "FullName": "Holo (HOT*)"
  },
  {
    "Symbol": "POWR",
    "CoinName": "Power Ledger",
    "FullName": "Power Ledger (POWR)"
  },
  {
    "Symbol": "FUN",
    "CoinName": "FunFair",
    "FullName": "FunFair (FUN)"
  },
  {
    "Symbol": "GNT",
    "CoinName": "Golem Network Token",
    "FullName": "Golem Network Token (GNT)"
  },
  {
    "Symbol": "NAS",
    "CoinName": "Nebulas",
    "FullName": "Nebulas (NAS)"
  },
  {
    "Symbol": "TUSD",
    "CoinName": "True USD",
    "FullName": "True USD (TUSD)"
  },
  {
    "Symbol": "MCO",
    "CoinName": "Crypto.com",
    "FullName": "Crypto.com (MCO)"
  },
  {
    "Symbol": "KMD",
    "CoinName": "Komodo",
    "FullName": "Komodo (KMD)"
  },
  {
    "Symbol": "OCN",
    "CoinName": "Odyssey",
    "FullName": "Odyssey (OCN)"
  },
  {
    "Symbol": "CVC",
    "CoinName": "Civic",
    "FullName": "Civic (CVC)"
  },
  {
    "Symbol": "CMT",
    "CoinName": "CyberMiles",
    "FullName": "CyberMiles (CMT)"
  },
  {
    "Symbol": "BNT",
    "CoinName": "Bancor Network Token",
    "FullName": "Bancor Network Token (BNT)"
  },
  {
    "Symbol": "ELF",
    "CoinName": "aelf",
    "FullName": "aelf (ELF)"
  },
  {
    "Symbol": "BIX",
    "CoinName": "BiboxCoin",
    "FullName": "BiboxCoin (BIX)"
  },
  {
    "Symbol": "KNC",
    "CoinName": "Kyber Network",
    "FullName": "Kyber Network (KNC)"
  },
  {
    "Symbol": "GXS",
    "CoinName": "GXChain",
    "FullName": "GXChain (GXS)"
  },
  {
    "Symbol": "HSR",
    "CoinName": "Hshare",
    "FullName": "Hshare (HSR)"
  },
  {
    "Symbol": "PIVX",
    "CoinName": "Private Instant Verified Transaction",
    "FullName": "Private Instant Verified Transaction (PIVX)"
  },
  {
    "Symbol": "MFT",
    "CoinName": "Mainframe",
    "FullName": "Mainframe (MFT)"
  },
  {
    "Symbol": "GTO",
    "CoinName": "GIFTO",
    "FullName": "GIFTO (GTO)"
  },
  {
    "Symbol": "GVT",
    "CoinName": "Genesis Vision",
    "FullName": "Genesis Vision (GVT)"
  },
  {
    "Symbol": "MGO",
    "CoinName": "MobileGo",
    "FullName": "MobileGo (MGO)"
  },
  {
    "Symbol": "UBTC",
    "CoinName": "UnitedBitcoin",
    "FullName": "UnitedBitcoin (UBTC)"
  },
  {
    "Symbol": "SRN",
    "CoinName": "SirinLabs",
    "FullName": "SirinLabs (SRN)"
  },
  {
    "Symbol": "POE",
    "CoinName": "Po.et",
    "FullName": "Po.et (POE)"
  },
  {
    "Symbol": "XBB",
    "CoinName": "BrickBlock",
    "FullName": "BrickBlock (XBB)"
  },
  {
    "Symbol": "MDA",
    "CoinName": "Moeda",
    "FullName": "Moeda (MDA)"
  },
  {
    "Symbol": "XIN",
    "CoinName": "Infinity Economics",
    "FullName": "Infinity Economics (XIN)"
  },
  {
    "Symbol": "APIS",
    "CoinName": "APIS",
    "FullName": "APIS (APIS)"
  },
  {
    "Symbol": "BMX",
    "CoinName": "BitMart Coin",
    "FullName": "BitMart Coin (BMX)"
  },
  {
    "Symbol": "PST",
    "CoinName": "Primas",
    "FullName": "Primas (PST)"
  },
  {
    "Symbol": "CCL",
    "CoinName": "CyClean",
    "FullName": "CyClean (CCL)"
  },
  {
    "Symbol": "RVN",
    "CoinName": "Ravencoin",
    "FullName": "Ravencoin (RVN)"
  },
  {
    "Symbol": "POA",
    "CoinName": "Poa Network",
    "FullName": "Poa Network (POA)"
  },
  {
    "Symbol": "MOD",
    "CoinName": "Modum",
    "FullName": "Modum (MOD)"
  },
  {
    "Symbol": "INS",
    "CoinName": "Insolar",
    "FullName": "Insolar (INS)"
  },
  {
    "Symbol": "ARN",
    "CoinName": "Aeron",
    "FullName": "Aeron (ARN)"
  },
  {
    "Symbol": "BCPT",
    "CoinName": "BlockMason Credit Protocol",
    "FullName": "BlockMason Credit Protocol (BCPT)"
  },
  {
    "Symbol": "LUN",
    "CoinName": "Lunyr",
    "FullName": "Lunyr (LUN)"
  },
  {
    "Symbol": "MTN*",
    "CoinName": "Medicalchain",
    "FullName": "Medicalchain (MTN*)"
  },
  {
    "Symbol": "VIB",
    "CoinName": "Viberate",
    "FullName": "Viberate (VIB)"
  },
  {
    "Symbol": "OKB",
    "CoinName": "Okex",
    "FullName": "Okex (OKB)"
  },
  {
    "Symbol": "ELA",
    "CoinName": "Elastos",
    "FullName": "Elastos (ELA)"
  },
  {
    "Symbol": "MEET",
    "CoinName": "CoinMeet",
    "FullName": "CoinMeet (MEET)"
  },
  {
    "Symbol": "PAX",
    "CoinName": "Paxos Standard",
    "FullName": "Paxos Standard (PAX)"
  },
  {
    "Symbol": "POLY",
    "CoinName": "PolyBit",
    "FullName": "PolyBit (POLY)"
  },
  {
    "Symbol": "ABT",
    "CoinName": "ArcBlock",
    "FullName": "ArcBlock (ABT)"
  },
  {
    "Symbol": "ETF",
    "CoinName": "EthereumFog",
    "FullName": "EthereumFog (ETF)"
  },
  {
    "Symbol": "ONT",
    "CoinName": "Ontology",
    "FullName": "Ontology (ONT)"
  },
  {
    "Symbol": "WAN",
    "CoinName": "Wanchain",
    "FullName": "Wanchain (WAN)"
  },
  {
    "Symbol": "AION",
    "CoinName": "Aion",
    "FullName": "Aion (AION)"
  },
  {
    "Symbol": "RLC",
    "CoinName": "iEx.ec",
    "FullName": "iEx.ec (RLC)"
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
    "Symbol": "STRS",
    "CoinName": "STARS ",
    "FullName": "STARS  (STRS)"
  },
  {
    "Symbol": "HLX",
    "CoinName": "Helix3",
    "FullName": "Helix3 (HLX)"
  },
  {
    "Symbol": "LTE",
    "CoinName": "Local Token Exchange",
    "FullName": "Local Token Exchange (LTE)"
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
    "Symbol": "QNT",
    "CoinName": "Quantor",
    "FullName": "Quantor (QNT)"
  },
  {
    "Symbol": "XUC",
    "CoinName": "Exchange Union",
    "FullName": "Exchange Union (XUC)"
  },
  {
    "Symbol": "BITS",
    "CoinName": "BitstarCoin",
    "FullName": "BitstarCoin (BITS)"
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
    "Symbol": "STASH",
    "CoinName": "BitStash",
    "FullName": "BitStash (STASH)"
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
    "Symbol": "SRX",
    "CoinName": "Solarex",
    "FullName": "Solarex (SRX)"
  },
  {
    "Symbol": "EMOT",
    "CoinName": "Sentigraph.io",
    "FullName": "Sentigraph.io (EMOT)"
  },
  {
    "Symbol": "AIRT",
    "CoinName": "Aircraft",
    "FullName": "Aircraft (AIRT)"
  },
  {
    "Symbol": "VOL",
    "CoinName": "VolAir",
    "FullName": "VolAir (VOL)"
  },
  {
    "Symbol": "LUX**",
    "CoinName": "Luxmi Coin",
    "FullName": "Luxmi Coin (LUX**)"
  },
  {
    "Symbol": "XMG",
    "CoinName": "Coin Magi",
    "FullName": "Coin Magi (XMG)"
  },
  {
    "Symbol": "THC",
    "CoinName": "The Hempcoin",
    "FullName": "The Hempcoin (THC)"
  },
  {
    "Symbol": "RPC",
    "CoinName": "RonPaulCoin",
    "FullName": "RonPaulCoin (RPC)"
  },
  {
    "Symbol": "TASH",
    "CoinName": "Smart Trip Platform",
    "FullName": "Smart Trip Platform (TASH)"
  },
  {
    "Symbol": "NVDX",
    "CoinName": "Nodvix",
    "FullName": "Nodvix (NVDX)"
  },
  {
    "Symbol": "TRAVEL",
    "CoinName": "Travelvee",
    "FullName": "Travelvee (TRAVEL)"
  },
  {
    "Symbol": "LCR",
    "CoinName": "Lucre",
    "FullName": "Lucre (LCR)"
  },
  {
    "Symbol": "IMP",
    "CoinName": "Brain Space",
    "FullName": "Brain Space (IMP)"
  },
  {
    "Symbol": "KVT",
    "CoinName": "Kinesis Velocity Token ",
    "FullName": "Kinesis Velocity Token  (KVT)"
  },
  {
    "Symbol": "REME",
    "CoinName": "REME-Coin",
    "FullName": "REME-Coin (REME)"
  },
  {
    "Symbol": "OXY2",
    "CoinName": "Cryptoxygen",
    "FullName": "Cryptoxygen (OXY2)"
  },
  {
    "Symbol": "eSwitch",
    "CoinName": "ShareMeAll",
    "FullName": "ShareMeAll (eSwitch)"
  },
  {
    "Symbol": "JOY",
    "CoinName": "Joycoin",
    "FullName": "Joycoin (JOY)"
  },
  {
    "Symbol": "DYN",
    "CoinName": "Dynamic",
    "FullName": "Dynamic (DYN)"
  },
  {
    "Symbol": "BKT",
    "CoinName": "Blocktrade token",
    "FullName": "Blocktrade token (BKT)"
  },
  {
    "Symbol": "GALI",
    "CoinName": "Galilel",
    "FullName": "Galilel (GALI)"
  },
  {
    "Symbol": "EXO",
    "CoinName": "Exosis",
    "FullName": "Exosis (EXO)"
  },
  {
    "Symbol": "AE",
    "CoinName": "Aeternity",
    "FullName": "Aeternity (AE)"
  },
  {
    "Symbol": "XQR",
    "CoinName": "Qredit",
    "FullName": "Qredit (XQR)"
  },
  {
    "Symbol": "QRL",
    "CoinName": "Quantum Resistant Ledger",
    "FullName": "Quantum Resistant Ledger (QRL)"
  },
  {
    "Symbol": "ILC",
    "CoinName": "ILCoin",
    "FullName": "ILCoin (ILC)"
  },
  {
    "Symbol": "ETHO",
    "CoinName": "ETHER-1",
    "FullName": "ETHER-1 (ETHO)"
  },
  {
    "Symbol": "XSH",
    "CoinName": "SHIELD",
    "FullName": "SHIELD (XSH)"
  },
  {
    "Symbol": "BOXY",
    "CoinName": "BoxyCoin",
    "FullName": "BoxyCoin (BOXY)"
  },
  {
    "Symbol": "GOLF",
    "CoinName": "GolfCoin",
    "FullName": "GolfCoin (GOLF)"
  },
  {
    "Symbol": "XPY",
    "CoinName": "PayCoin",
    "FullName": "PayCoin (XPY)"
  },
  {
    "Symbol": "FRN",
    "CoinName": "Francs",
    "FullName": "Francs (FRN)"
  },
  {
    "Symbol": "VAL",
    "CoinName": "Valorbit",
    "FullName": "Valorbit (VAL)"
  },
  {
    "Symbol": "COMP",
    "CoinName": "Compound Coin",
    "FullName": "Compound Coin (COMP)"
  },
  {
    "Symbol": "CTL",
    "CoinName": "Citadel",
    "FullName": "Citadel (CTL)"
  },
  {
    "Symbol": "CXT",
    "CoinName": "Coinonat",
    "FullName": "Coinonat (CXT)"
  },
  {
    "Symbol": "NKC",
    "CoinName": "Nukecoinz",
    "FullName": "Nukecoinz (NKC)"
  },
  {
    "Symbol": "CRAVE*",
    "CoinName": "Crave-NG",
    "FullName": "Crave-NG (CRAVE*)"
  },
  {
    "Symbol": "TRF",
    "CoinName": "Travelflex",
    "FullName": "Travelflex (TRF)"
  },
  {
    "Symbol": "TER",
    "CoinName": "TerraNovaCoin",
    "FullName": "TerraNovaCoin (TER)"
  },
  {
    "Symbol": "BTCS*",
    "CoinName": "Bitcoin Supreme",
    "FullName": "Bitcoin Supreme (BTCS*)"
  },
  {
    "Symbol": "EC",
    "CoinName": "Eclipse",
    "FullName": "Eclipse (EC)"
  },
  {
    "Symbol": "PTC",
    "CoinName": "PesetaCoin",
    "FullName": "PesetaCoin (PTC)"
  },
  {
    "Symbol": "CHBR",
    "CoinName": "CryptoHub",
    "FullName": "CryptoHub (CHBR)"
  },
  {
    "Symbol": "LINDA",
    "CoinName": "Linda",
    "FullName": "Linda (LINDA)"
  },
  {
    "Symbol": "ACCO",
    "CoinName": "Accolade",
    "FullName": "Accolade (ACCO)"
  },
  {
    "Symbol": "XCPO",
    "CoinName": "Copico",
    "FullName": "Copico (XCPO)"
  },
  {
    "Symbol": "SGL",
    "CoinName": "Sigil",
    "FullName": "Sigil (SGL)"
  },
  {
    "Symbol": "MDC*",
    "CoinName": "MadCoin",
    "FullName": "MadCoin (MDC*)"
  },
  {
    "Symbol": "SUNEX",
    "CoinName": "The Sun Exchange",
    "FullName": "The Sun Exchange (SUNEX)"
  },
  {
    "Symbol": "VIVO",
    "CoinName": "VIVO Coin",
    "FullName": "VIVO Coin (VIVO)"
  },
  {
    "Symbol": "CBS",
    "CoinName": "Cerberus",
    "FullName": "Cerberus (CBS)"
  },
  {
    "Symbol": "XP",
    "CoinName": "Experience Points",
    "FullName": "Experience Points (XP)"
  },
  {
    "Symbol": "PINMO",
    "CoinName": "Pinmo",
    "FullName": "Pinmo (PINMO)"
  },
  {
    "Symbol": "UNRC",
    "CoinName": "UniversalRoyalCoin",
    "FullName": "UniversalRoyalCoin (UNRC)"
  },
  {
    "Symbol": "XT3",
    "CoinName": "Xt3ch",
    "FullName": "Xt3ch (XT3)"
  },
  {
    "Symbol": "EMC",
    "CoinName": "Emercoin",
    "FullName": "Emercoin (EMC)"
  },
  {
    "Symbol": "C2",
    "CoinName": "Coin.2",
    "FullName": "Coin.2 (C2)"
  },
  {
    "Symbol": "OMGC",
    "CoinName": "OmiseGO Classic",
    "FullName": "OmiseGO Classic (OMGC)"
  },
  {
    "Symbol": "ELM",
    "CoinName": "Elements",
    "FullName": "Elements (ELM)"
  },
  {
    "Symbol": "BCI",
    "CoinName": "Bitcoin Interest",
    "FullName": "Bitcoin Interest (BCI)"
  },
  {
    "Symbol": "ACTN",
    "CoinName": "Action Coin",
    "FullName": "Action Coin (ACTN)"
  },
  {
    "Symbol": "AQUA",
    "CoinName": "Aquachain",
    "FullName": "Aquachain (AQUA)"
  },
  {
    "Symbol": "GO",
    "CoinName": "GoChain",
    "FullName": "GoChain (GO)"
  },
  {
    "Symbol": "SBTC",
    "CoinName": "Super Bitcoin",
    "FullName": "Super Bitcoin (SBTC)"
  },
  {
    "Symbol": "DUO",
    "CoinName": "ParallelCoin",
    "FullName": "ParallelCoin (DUO)"
  },
  {
    "Symbol": "FABA",
    "CoinName": "Faba Invest",
    "FullName": "Faba Invest (FABA)"
  },
  {
    "Symbol": "BITB",
    "CoinName": "BitBean",
    "FullName": "BitBean (BITB)"
  },
  {
    "Symbol": "HNY",
    "CoinName": "BitFence",
    "FullName": "BitFence (HNY)"
  },
  {
    "Symbol": "GRE",
    "CoinName": "GreenCoin",
    "FullName": "GreenCoin (GRE)"
  },
  {
    "Symbol": "EURS",
    "CoinName": "STASIS EURS",
    "FullName": "STASIS EURS (EURS)"
  },
  {
    "Symbol": "LYNK",
    "CoinName": "Lynked.World",
    "FullName": "Lynked.World (LYNK)"
  },
  {
    "Symbol": "PRA",
    "CoinName": "ProChain",
    "FullName": "ProChain (PRA)"
  },
  {
    "Symbol": "BTCC",
    "CoinName": "Bitcoin Core",
    "FullName": "Bitcoin Core (BTCC)"
  },
  {
    "Symbol": "NMR",
    "CoinName": "Numeraire",
    "FullName": "Numeraire (NMR)"
  },
  {
    "Symbol": "CET",
    "CoinName": "CoinEx token",
    "FullName": "CoinEx token (CET)"
  },
  {
    "Symbol": "OC",
    "CoinName": "OrangeCoin",
    "FullName": "OrangeCoin (OC)"
  },
  {
    "Symbol": "HEX",
    "CoinName": "HexCoin",
    "FullName": "HexCoin (HEX)"
  },
  {
    "Symbol": "BBK",
    "CoinName": "BitBlocks",
    "FullName": "BitBlocks (BBK)"
  },
  {
    "Symbol": "DAR",
    "CoinName": "Darcrus",
    "FullName": "Darcrus (DAR)"
  },
  {
    "Symbol": "JC",
    "CoinName": "JesusCoin",
    "FullName": "JesusCoin (JC)"
  },
  {
    "Symbol": "VTN",
    "CoinName": "Voltroon",
    "FullName": "Voltroon (VTN)"
  },
  {
    "Symbol": "WORM",
    "CoinName": "HealthyWorm",
    "FullName": "HealthyWorm (WORM)"
  },
  {
    "Symbol": "WTT",
    "CoinName": "Giga Watt",
    "FullName": "Giga Watt (WTT)"
  },
  {
    "Symbol": "EBC",
    "CoinName": "EBCoin",
    "FullName": "EBCoin (EBC)"
  },
  {
    "Symbol": "BGG",
    "CoinName": "Bgogo Token",
    "FullName": "Bgogo Token (BGG)"
  },
  {
    "Symbol": "DMT",
    "CoinName": "DMarket",
    "FullName": "DMarket (DMT)"
  },
  {
    "Symbol": "EMD",
    "CoinName": "Emerald",
    "FullName": "Emerald (EMD)"
  },
  {
    "Symbol": "WOBTC",
    "CoinName": "WorldBTC",
    "FullName": "WorldBTC (WOBTC)"
  },
  {
    "Symbol": "VTRD",
    "CoinName": "VTradeExchange",
    "FullName": "VTradeExchange (VTRD)"
  },
  {
    "Symbol": "HEDGE",
    "CoinName": "Hedgecoin",
    "FullName": "Hedgecoin (HEDGE)"
  },
  {
    "Symbol": "HEDG",
    "CoinName": "HedgeTrade",
    "FullName": "HedgeTrade (HEDG)"
  },
  {
    "Symbol": "WBTC",
    "CoinName": "Wrapped Bitcoin",
    "FullName": "Wrapped Bitcoin (WBTC)"
  },
  {
    "Symbol": "ERE",
    "CoinName": "Erecoin",
    "FullName": "Erecoin (ERE)"
  },
  {
    "Symbol": "PLAI",
    "CoinName": "Plair",
    "FullName": "Plair (PLAI)"
  },
  {
    "Symbol": "VET",
    "CoinName": "Vechain",
    "FullName": "Vechain (VET)"
  },
  {
    "Symbol": "MONA",
    "CoinName": "MonaCoin",
    "FullName": "MonaCoin (MONA)"
  },
  {
    "Symbol": "BTT",
    "CoinName": "BitTorrent",
    "FullName": "BitTorrent (BTT)"
  },
  {
    "Symbol": "WRL",
    "CoinName": "WHIRL",
    "FullName": "WHIRL (WRL)"
  },
  {
    "Symbol": "GC",
    "CoinName": "Gric Coin",
    "FullName": "Gric Coin (GC)"
  },
  {
    "Symbol": "DDL",
    "CoinName": "Donocle",
    "FullName": "Donocle (DDL)"
  },
  {
    "Symbol": "CIX100",
    "CoinName": "Cryptoindex",
    "FullName": "Cryptoindex (CIX100)"
  },
  {
    "Symbol": "TOSS",
    "CoinName": "PROOF OF TOSS",
    "FullName": "PROOF OF TOSS (TOSS)"
  },
  {
    "Symbol": "FIH",
    "CoinName": "Fidelity House",
    "FullName": "Fidelity House (FIH)"
  },
  {
    "Symbol": "GUAR",
    "CoinName": "Guarium",
    "FullName": "Guarium (GUAR)"
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
  }
]