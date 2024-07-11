let presets = [{
    "nodes": [
        {
            "id": "id-6d5l4jvgs-lxlyudr0",
            "shader_values": {},
            "module_name": "output",
            "x": 400,
            "y": 100,
        },
        {
            "id": "id-scaczq2i7-lxlyudr0",
            "shader_values": {
                "p": "134.67",
                "f": "32.92",
                "fm": "5.56",
                "s": "-0.39",
                "rot": "2.22",
                "amp": 1,
                "r": "0.35",
                "g": "0.69",
                "b": "0.95",
                "waveform": "0.2",
                "offset": "0.92",
                "scale_fract": "3.25",
                "n": "35.81"
            },
            "module_name": "polyShape",
            "x": 100,
            "y": 50,
        },
        {
            "id": "id-af85wm7kb-lxlyul1t",
            "shader_values": {
                "p": "0",
                "f": "0.001",
                "fm": 3,
                "s": 0,
                "r": "1",
                "amp": 1,
                "g": 1,
                "b": 1,
                "waveform": 0,
                "offset": 0,
                "scale_fract": 1
            },
            "module_name": "Oscillator",
            "x": 100,
            "y": 450,
        }
    ],
    "connections": [
        {
            "fromNode": "id-scaczq2i7-lxlyudr0",
            "toNode": "id-6d5l4jvgs-lxlyudr0",
            "id": "id-dmh9ng3h4-lxlyudr0"
        },
        {
            "fromNode": "id-scaczq2i7-lxlyudr0",
            "toNode": "id-af85wm7kb-lxlyul1t",
            "id": "id-at9ltdtlc-lxlyunrh"
        },
        {
            "fromNode": "id-af85wm7kb-lxlyul1t",
            "toNode": "id-6d5l4jvgs-lxlyudr0",
            "id": "id-trgzrhe96-lxlyupu0"
        },
        {
            "fromNode": "id-af85wm7kb-lxlyul1t",
            "toNode": "id-scaczq2i7-lxlyudr0",
            "id": "id-3gba49ooc-lxlyuudw"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-94eoc8o6i-lxm0muao",
            "shader_values": {},
            "module_name": "output",
            "x": 575.664,
            "y": 249
        },
        {
            "id": "id-qe2gw7pjm-lxm0muap",
            "shader_values": {
                "p": "437.71",
                "f": "11.881",
                "fm": "2.05",
                "s": "0.16",
                "rot": "2.69",
                "amp": 1,
                "r": "0.62",
                "g": "0.43",
                "b": "1",
                "waveform": "2.69",
                "offset": "0.51",
                "scale_fract": "0.51",
                "n": "50.73"
            },
            "module_name": "polyShape",
            "x": 39.25,
            "y": 70
        },
        {
            "id": "id-l8auowifp-lxm0nqch",
            "shader_values": {
                "p": 0,
                "f": "23.311",
                "fm": "3.01",
                "s": 0,
                "rot": 0,
                "amp": 1,
                "r": 1,
                "g": 1,
                "b": 1,
                "waveform": 0,
                "offset": 0,
                "scale_fract": 1
            },
            "module_name": "Oscillator",
            "x": 36,
            "y": 477
        }
    ],
    "connections": [
        {
            "fromNode": "id-qe2gw7pjm-lxm0muap",
            "toNode": "id-94eoc8o6i-lxm0muao",
            "id": "id-44cn11fji-lxm0muap"
        },
        {
            "fromNode": "id-qe2gw7pjm-lxm0muap",
            "toNode": "id-l8auowifp-lxm0nqch",
            "id": "id-vjzq0nwau-lxm0nsj0"
        },
        {
            "fromNode": "id-l8auowifp-lxm0nqch",
            "toNode": "id-qe2gw7pjm-lxm0muap",
            "id": "id-y0az9o97c-lxm0nusz"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-d8jw0t1zd-lxm18fwy",
            "shader_values": {},
            "module_name": "output",
            "x": 650.664,
            "y": 136
        },
        {
            "id": "id-f1qz7ntxa-lxm18fwz",
            "shader_values": {
                "p": "313.97",
                "f": "37.551",
                "fm": "10",
                "s": "0.17",
                "rot": "1.97",
                "amp": 1,
                "r": "0.95",
                "g": "0.33",
                "b": "0.69",
                "waveform": "3.22",
                "offset": "0.97",
                "scale_fract": "0.24",
                "n": "71.33"
            },
            "module_name": "polyShape",
            "x": 66.25,
            "y": 130
        },
        {
            "id": "id-a4n2g6aj3-lxm1a5et",
            "shader_values": {
                "p": "0",
                "f": "6.651",
                "fm": "6.48",
                "s": "0.18",
                "rot": "0",
                "amp": 1,
                "r": 1,
                "g": 1,
                "b": 1,
                "waveform": "1.93",
                "offset": "0.18",
                "scale_fract": 1,
                "n": 3
            },
            "module_name": "polyShape",
            "x": 718,
            "y": 242
        }
    ],
    "connections": [
        {
            "fromNode": "id-f1qz7ntxa-lxm18fwz",
            "toNode": "id-d8jw0t1zd-lxm18fwy",
            "id": "id-rec5jumvz-lxm18fwz"
        },
        {
            "fromNode": "id-f1qz7ntxa-lxm18fwz",
            "toNode": "id-a4n2g6aj3-lxm1a5et",
            "id": "id-xqc6l8yy2-lxm1a7qa"
        },
        {
            "fromNode": "id-a4n2g6aj3-lxm1a5et",
            "toNode": "id-f1qz7ntxa-lxm18fwz",
            "id": "id-4npyi9qc6-lxm1adv4"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-vxk2a6b9g-lxm2xu1k",
            "shader_values": {},
            "module_name": "output",
            "x": 423.664,
            "y": 457
        },
        {
            "id": "id-opduudxt6-lxm2xu1l",
            "shader_values": {
                "p": "230",
                "f": "9.77",
                "fm": "1.78",
                "s": "0.08",
                "rot": "1.38",
                "amp": 1,
                "r": 1,
                "g": "1",
                "b": "0.78",
                "waveform": "3.62",
                "offset": "0.17",
                "scale_fract": "0.37",
                "n": "49.18"
            },
            "module_name": "polyShape",
            "x": 19.25,
            "y": 138
        },
        {
            "id": "id-lev92gacv-lxm2zabj",
            "shader_values": {
                "nSides": "6.64",
                "xOff": 0,
                "yOff": 0
            },
            "module_name": "kaleidoscope",
            "x": 420,
            "y": 174
        }
    ],
    "connections": [
        {
            "fromNode": "id-lev92gacv-lxm2zabj",
            "toNode": "id-vxk2a6b9g-lxm2xu1k",
            "id": "id-1e427cic7-lxm2zfwi"
        },
        {
            "fromNode": "id-lev92gacv-lxm2zabj",
            "toNode": "id-opduudxt6-lxm2xu1l",
            "id": "id-5fl2khi6s-lxm2zm1s"
        },
        {
            "fromNode": "id-opduudxt6-lxm2xu1l",
            "toNode": "id-lev92gacv-lxm2zabj",
            "id": "id-xdqm7ah99-lxm30bnh"
        }
    ]
},
{
    "nodes": [
      {
        "id": "id-wgp391m91-lxn3yaoy",
        "shader_values": {},
        "module_name": "output",
        "x": 499.667,
        "y": 385
      },
      {
        "id": "id-uzwxugkpu-lxn3yaoy",
        "shader_values": {
          "p": 0,
          "f": "12.971",
          "fm": "4.59",
          "s": .08,
          "rot": 0.125,
          "amp": 1,
          "r": 1,
          "g": 1,
          "b": 1,
          "waveform": "4",
          "offset": 0,
          "scale_fract": "0.22",
          "n": 4
        },
        "module_name": "polyShape",
        "x": 53.25,
        "y": 149.5
      },
      {
        "id": "id-j41sanwdg-lxn3ydfz",
        "shader_values": {
          "scale_fract": "1.38"
        },
        "module_name": "scale_fract",
        "x": 344,
        "y": 172
      }
    ],
    "connections": [
      {
        "fromNode": "id-uzwxugkpu-lxn3yaoy",
        "toNode": "id-j41sanwdg-lxn3ydfz",
        "id": "id-r1yd0kro7-lxn3yf5t"
      },
      {
        "fromNode": "id-j41sanwdg-lxn3ydfz",
        "toNode": "id-uzwxugkpu-lxn3yaoy",
        "id": "id-73ryhdvub-lxn41028"
      },
      {
        "fromNode": "id-j41sanwdg-lxn3ydfz",
        "toNode": "id-wgp391m91-lxn3yaoy",
        "id": "id-y92p21xbo-lxn43lw1"
      }
    ]
  },
  {
    "nodes": [
        {
            "id": "id-a67zbd91p-lxnfdtct",
            "shader_values": {},
            "module_name": "output",
            "x": 456.664,
            "y": 325
        },
        {
            "id": "id-1hb4dyc1b-lxnfdtct",
            "shader_values": {
                "p": "668.8",
                "f": "21.95",
                "fm": "8.94",
                "s": "-0.3",
                "rot": "3.38",
                "amp": 1,
                "r": "0.76",
                "g": "0.3",
                "b": "0.28",
                "waveform": "1.47",
                "offset": "0.03",
                "scale_fract": "1",
                "n": "80.72"
            },
            "module_name": "polyShape",
            "x": 72.5,
            "y": 176.5
        }
    ],
    "connections": [
        {
            "fromNode": "id-1hb4dyc1b-lxnfdtct",
            "toNode": "id-a67zbd91p-lxnfdtct",
            "id": "id-lrle65dja-lxnfdtcu"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-9hcwezvl5-lxngkejh",
            "shader_values": {},
            "module_name": "output",
            "x": 480.664,
            "y": 404
        },
        {
            "id": "id-n5ztzkwyn-lxngkejh",
            "shader_values": {
                "p": 0,
                "f": 1,
                "fm": "5.88",
                "s": 0.04,
                "rot": "0",
                "amp": 1,
                "r": "0.88",
                "g": "0.75",
                "b": "1",
                "waveform": "4",
                "offset": "0",
                "scale_fract": "0.48",
                "n": "100.0"
            },
            "module_name": "polyShape",
            "x": 108.5,
            "y": 137.5
        },
        {
            "id": "id-2xr15zw3k-lxngl0md",
            "shader_values": {
                "scale_fract": 0.99
            },
            "module_name": "scale_fract",
            "x": 112,
            "y": 522
        },
        {
            "id": "id-b3ri1kjp3-lxngnu8n",
            "shader_values": {
                "r": "0.58",
                "g": "1",
                "b": "1",
                "amp": "1.9"
            },
            "module_name": "color",
            "x": 393,
            "y": 133
        }
    ],
    "connections": [
        {
            "fromNode": "id-n5ztzkwyn-lxngkejh",
            "toNode": "id-2xr15zw3k-lxngl0md",
            "id": "id-ijznisk7l-lxngl26a"
        },
        {
            "fromNode": "id-2xr15zw3k-lxngl0md",
            "toNode": "id-n5ztzkwyn-lxngkejh",
            "id": "id-winanbkyl-lxngl54d"
        },
        {
            "fromNode": "id-n5ztzkwyn-lxngkejh",
            "toNode": "id-b3ri1kjp3-lxngnu8n",
            "id": "id-ve2estx2x-lxngnyy3"
        },
        {
            "fromNode": "id-b3ri1kjp3-lxngnu8n",
            "toNode": "id-9hcwezvl5-lxngkejh",
            "id": "id-38q5ovjvv-lxngo0ed"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-n7mhi3z1l-lxnnvvqg",
            "shader_values": {},
            "module_name": "output",
            "x": 426.328,
            "y": 255
        },
        {
            "id": "id-y1bpyub5d-lxnnvvqg",
            "shader_values": {
                "p": "0.0",
                "f": "0.291",
                "fm": "6.05",
                "s": "-0.09",
                "rot": "2.75",
                "amp": "1",
                "r": "0.93",
                "g": "0.41",
                "b": "0.42",
                "waveform": "2.38",
                "offset": "0.2",
                "scale_fract": "0.61",
            },
            "module_name": "noise",
            "x": 71.75,
            "y": 100
        }
    ],
    "connections": [
        {
            "fromNode": "id-y1bpyub5d-lxnnvvqg",
            "toNode": "id-n7mhi3z1l-lxnnvvqg",
            "id": "id-foz7ah4kz-lxnnxwxr"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-a67zbd91p-lxnfdtct",
            "shader_values": {},
            "module_name": "output",
            "x": 410.656,
            "y": 532
        },
        {
            "id": "id-1hb4dyc1b-lxnfdtct",
            "shader_values": {
                "p": "668.8",
                "f": "21.95",
                "fm": "3.46",
                "s": "-0.3",
                "rot": "0",
                "amp": 1,
                "r": "0.76",
                "g": "0.3",
                "b": "0.28",
                "waveform": "1.47",
                "offset": "0.03",
                "scale_fract": "1",
                "n": "80.72"
            },
            "module_name": "polyShape",
            "x": 29.5,
            "y": 104.5
        },
        {
            "id": "id-p60yowjyh-lxno29ib",
            "shader_values": {
                "scale_fract": 0.9
            },
            "module_name": "scale_fract",
            "x": 344,
            "y": 148
        },
        {
            "id": "id-9d9zod8x0-lxno3pfr",
            "shader_values": {
                "scale_fract": "2.74"
            },
            "module_name": "scale_fract",
            "x": 342,
            "y": 303
        },
        {
            "id": "id-yfutoc5o0-lxno43vc",
            "shader_values": {
                "p": 0,
                "f": "7.061",
                "fm": "10",
                "s": "-0.07",
                "rot": "0",
                "amp": 1,
                "r": 1,
                "g": 1,
                "b": 1,
                "waveform": "4",
                "offset": 0,
                "scale_fract": "1.04",
            },
            "module_name": "noise",
            "x": 610,
            "y": 113
        }
    ],
    "connections": [
        {
            "fromNode": "id-1hb4dyc1b-lxnfdtct",
            "toNode": "id-a67zbd91p-lxnfdtct",
            "id": "id-lrle65dja-lxnfdtcu"
        },
        {
            "fromNode": "id-1hb4dyc1b-lxnfdtct",
            "toNode": "id-p60yowjyh-lxno29ib",
            "id": "id-uiz2b63ek-lxno2bc4"
        },
        {
            "fromNode": "id-p60yowjyh-lxno29ib",
            "toNode": "id-9d9zod8x0-lxno3pfr",
            "id": "id-z6imjxr6n-lxno3qpo"
        },
        {
            "fromNode": "id-9d9zod8x0-lxno3pfr",
            "toNode": "id-yfutoc5o0-lxno43vc",
            "id": "id-iw94cngpk-lxno46f0"
        },
        {
            "fromNode": "id-yfutoc5o0-lxno43vc",
            "toNode": "id-1hb4dyc1b-lxnfdtct",
            "id": "id-7mnqxpukc-lxno498s"
        },
        {
            "fromNode": "id-yfutoc5o0-lxno43vc",
            "toNode": "id-a67zbd91p-lxnfdtct",
            "id": "id-d6xqkjjuy-lxno4fq7"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-xu43sfx45-lxq0whlb",
            "shader_values": {},
            "module_name": "output",
            "x": 629.328,
            "y": 505
        },
        {
            "id": "id-pcbe5jbnx-lxq0whlb",
            "shader_values": {
                "p": 0,
                "f": 1,
                "fm": 3,
                "s": 0.1,
                "rot": 0,
                "amp": 1,
                "r": 1,
                "g": 1,
                "b": 1,
                "waveform": "0",
                "offset": "0.81",
                "scale_fract": 1,
                "n": 3
            },
            "module_name": "polyShape",
            "x": 177.75,
            "y": 152
        },
        {
            "id": "id-5y913l8bx-lxq0wjuy",
            "shader_values": {
                "p": "10",
                "f": "99.991",
                "fm": "6.94",
                "s": "0.42",
                "rot": "1.5",
                "amp": 1,
                "r": "0.84",
                "g": "0.29",
                "b": "0.47",
                "waveform": "3",
                "offset": "0",
                "scale_fract": "7.17"
            },
            "module_name": "noise",
            "x": 792,
            "y": 117
        }
    ],
    "connections": [
        {
            "fromNode": "id-pcbe5jbnx-lxq0whlb",
            "toNode": "id-xu43sfx45-lxq0whlb",
            "id": "id-yokf06n3u-lxq0whlb"
        },
        {
            "fromNode": "id-pcbe5jbnx-lxq0whlb",
            "toNode": "id-5y913l8bx-lxq0wjuy",
            "id": "id-0s35ntla2-lxq0wnlh"
        },
        {
            "fromNode": "id-5y913l8bx-lxq0wjuy",
            "toNode": "id-pcbe5jbnx-lxq0whlb",
            "id": "id-16vvlxgzu-lxq0wpi1"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-75a83fwma-lxt0fz51",
            "shader_values": {},
            "module_name": "output",
            "x": 960,
            "y": 397
        },
        {
            "id": "id-ph9wwm037-lxt0fz52",
            "shader_values": {
                "p": 0,
                "f": 6.8,
                "fm": "1.18",
                "s": 0.1,
                "rot": 0,
                "amp": "2",
                "r": "0.32",
                "g": "0.49",
                "b": "0.59",
                "waveform": "0",
                "offset": 0,
                "scale_fract": "0.94",
                "n": "100"
            },
            "module_name": "polyShape",
            "x": 187,
            "y": 154.5
        },
        {
            "id": "id-3h1swqer8-lxt0gnel",
            "shader_values": {
                "nSides": "10",
                "xOff": 0,
                "yOff": 0
            },
            "module_name": "kaleidoscope",
            "x": 472,
            "y": 473
        }
    ],
    "connections": [
        {
            "fromNode": "id-3h1swqer8-lxt0gnel",
            "toNode": "id-ph9wwm037-lxt0fz52",
            "id": "id-b9z9hw7gb-lxt0gup8"
        },
        {
            "fromNode": "id-ph9wwm037-lxt0fz52",
            "toNode": "id-3h1swqer8-lxt0gnel",
            "id": "id-8okt1wpmj-lxt0hy0i"
        },
        {
            "fromNode": "id-ph9wwm037-lxt0fz52",
            "toNode": "id-75a83fwma-lxt0fz51",
            "id": "id-16icn901x-lxt0i018"
        }
    ]
},
{
    "nodes": [
      {
        "id": "id-n7mhi3z1l-lxnnvvqg",
        "shader_values": {},
        "module_name": "output",
        "x": 449.333,
        "y": 418
      },
      {
        "id": "id-y1bpyub5d-lxnnvvqg",
        "shader_values": {
          "p": "0.0",
          "f": "0.001",
          "fm": "0.82",
          "s": "0.1",
          "rot": "3.6",
          "amp": "2",
          "r": "0.93",
          "g": "0.41",
          "b": "0.42",
          "waveform": "0",
          "offset": "0.31",
          "scale_fract": "1"
        },
        "module_name": "noise",
        "x": 71.75,
        "y": 100
      },
      {
        "id": "id-je9353p22-lxuizmhi",
        "shader_values": {
          "scale_fract": 0.9
        },
        "module_name": "scale_fract",
        "x": 401,
        "y": 170
      }
    ],
    "connections": [
      {
        "fromNode": "id-y1bpyub5d-lxnnvvqg",
        "toNode": "id-n7mhi3z1l-lxnnvvqg",
        "id": "id-foz7ah4kz-lxnnxwxr"
      },
      {
        "fromNode": "id-y1bpyub5d-lxnnvvqg",
        "toNode": "id-je9353p22-lxuizmhi",
        "id": "id-d69swcvud-lxuizpnz"
      },
      {
        "fromNode": "id-je9353p22-lxuizmhi",
        "toNode": "id-y1bpyub5d-lxnnvvqg",
        "id": "id-ajdh927p7-lxuizr8j"
      }
    ]
  },
  {
    "nodes": [
        {
            "id": "id-r5oclitt0-lxuwt4mw",
            "shader_values": {},
            "module_name": "output",
            "x": 951.333,
            "y": 354
        },
        {
            "id": "id-31he8itsv-lxuwt4mx",
            "shader_values": {
                "p": "0",
                "f": "8.501",
                "fm": "5.23",
                "s": "-0.1",
                "rot": "0.63",
                "amp": "1",
                "r": "1",
                "g": "0.49",
                "b": "1",
                "waveform": "0.42",
                "offset": "0.83",
                "scale_fract": "0.34",
                "n": "39.64"
            },
            "module_name": "polyShape",
            "x": 71.75,
            "y": 95
        },
        {
            "id": "id-caaxqywip-lxuwtosf",
            "shader_values": {
                "p": "0",
                "f": 1,
                "fm": "7.15",
                "s": 0.1,
                "rot": "1.58",
                "amp": 1,
                "r": 1,
                "g": 1,
                "b": "0.98",
                "waveform": 0,
                "offset": "0",
                "scale_fract": "0.42"
            },
            "module_name": "Oscillator",
            "x": 386,
            "y": 364
        }
    ],
    "connections": [
        {
            "fromNode": "id-31he8itsv-lxuwt4mx",
            "toNode": "id-r5oclitt0-lxuwt4mw",
            "id": "id-7wwiu46ky-lxuwt4mz"
        },
        {
            "fromNode": "id-31he8itsv-lxuwt4mx",
            "toNode": "id-caaxqywip-lxuwtosf",
            "id": "id-9al6k40vr-lxuwts1i"
        },
        {
            "fromNode": "id-caaxqywip-lxuwtosf",
            "toNode": "id-31he8itsv-lxuwt4mx",
            "id": "id-r52eaa8e4-lxuwtu5l"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-r5oclitt0-lxuwt4mw",
            "shader_values": {},
            "module_name": "output",
            "x": 951.333,
            "y": 354
        },
        {
            "id": "id-31he8itsv-lxuwt4mx",
            "shader_values": {
                "p": "0",
                "f": "8.501",
                "fm": "0.67",
                "s": "-0.1",
                "rot": "0.63",
                "amp": "1",
                "r": "0.99",
                "g": "0.58",
                "b": "0.89",
                "waveform": "0.42",
                "offset": "0.83",
                "scale_fract": "0.34",
                "n": "39.64"
            },
            "module_name": "polyShape",
            "x": 71.75,
            "y": 95
        },
        {
            "id": "id-caaxqywip-lxuwtosf",
            "shader_values": {
                "p": "0",
                "f": 1,
                "fm": "10",
                "s": 0.1,
                "rot": "1.58",
                "amp": "1",
                "r": "1",
                "g": 1,
                "b": "0.98",
                "waveform": 0,
                "offset": "0",
                "scale_fract": "0.42"
            },
            "module_name": "Oscillator",
            "x": 386,
            "y": 364
        }
    ],
    "connections": [
        {
            "fromNode": "id-31he8itsv-lxuwt4mx",
            "toNode": "id-r5oclitt0-lxuwt4mw",
            "id": "id-7wwiu46ky-lxuwt4mz"
        },
        {
            "fromNode": "id-31he8itsv-lxuwt4mx",
            "toNode": "id-caaxqywip-lxuwtosf",
            "id": "id-9al6k40vr-lxuwts1i"
        },
        {
            "fromNode": "id-caaxqywip-lxuwtosf",
            "toNode": "id-31he8itsv-lxuwt4mx",
            "id": "id-r52eaa8e4-lxuwtu5l"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-r5oclitt0-lxuwt4mw",
            "shader_values": {},
            "module_name": "output",
            "x": 447.328,
            "y": 226
        },
        {
            "id": "id-31he8itsv-lxuwt4mx",
            "shader_values": {
                "p": "0",
                "f": "10.311",
                "fm": "0.92",
                "s": "0.02",
                "rot": "0",
                "amp": "1",
                "r": "1",
                "g": "0.61",
                "b": "0.47",
                "waveform": "0.42",
                "offset": "0.83",
                "scale_fract": "0.34",
                "n": 2
            },
            "module_name": "polyShape",
            "x": 71.75,
            "y": 95
        },
        {
            "id": "id-caaxqywip-lxuwtosf",
            "shader_values": {
                "p": "0",
                "f": "3.811",
                "fm": "10",
                "s": 0.1,
                "rot": "0.55",
                "amp": "1",
                "r": "1",
                "g": 1,
                "b": "0.98",
                "waveform": 0,
                "offset": "0",
                "scale_fract": "0.42"
            },
            "module_name": "Oscillator",
            "x": 386,
            "y": 364
        }
    ],
    "connections": [
        {
            "fromNode": "id-31he8itsv-lxuwt4mx",
            "toNode": "id-r5oclitt0-lxuwt4mw",
            "id": "id-7wwiu46ky-lxuwt4mz"
        },
        {
            "fromNode": "id-31he8itsv-lxuwt4mx",
            "toNode": "id-caaxqywip-lxuwtosf",
            "id": "id-9al6k40vr-lxuwts1i"
        },
        {
            "fromNode": "id-caaxqywip-lxuwtosf",
            "toNode": "id-31he8itsv-lxuwt4mx",
            "id": "id-r52eaa8e4-lxuwtu5l"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-r5oclitt0-lxuwt4mw",
            "shader_values": {},
            "module_name": "output",
            "x": 447.328,
            "y": 226
        },
        {
            "id": "id-31he8itsv-lxuwt4mx",
            "shader_values": {
                "p": "0",
                "f": "10.311",
                "fm": "0.92",
                "s": "0.02",
                "rot": 0.25,
                "amp": "1",
                "r": "1",
                "g": "0.61",
                "b": "0.47",
                "waveform": "0.42",
                "offset": "0.83",
                "scale_fract": "0.34",
                "n": 2
            },
            "module_name": "polyShape",
            "x": 71.75,
            "y": 95
        },
        {
            "id": "id-caaxqywip-lxuwtosf",
            "shader_values": {
                "p": "0",
                "f": "3.811",
                "fm": "10",
                "s": 0.1,
                "rot": "0.55",
                "amp": "1",
                "r": "1",
                "g": 1,
                "b": "0.98",
                "waveform": 0,
                "offset": "0",
                "scale_fract": "0.42"
            },
            "module_name": "Oscillator",
            "x": 386,
            "y": 364
        }
    ],
    "connections": [
        {
            "fromNode": "id-31he8itsv-lxuwt4mx",
            "toNode": "id-r5oclitt0-lxuwt4mw",
            "id": "id-7wwiu46ky-lxuwt4mz"
        },
        {
            "fromNode": "id-31he8itsv-lxuwt4mx",
            "toNode": "id-caaxqywip-lxuwtosf",
            "id": "id-9al6k40vr-lxuwts1i"
        },
        {
            "fromNode": "id-caaxqywip-lxuwtosf",
            "toNode": "id-31he8itsv-lxuwt4mx",
            "id": "id-r52eaa8e4-lxuwtu5l"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-hdr8oi3d4-lxv0c9e1",
            "shader_values": {},
            "module_name": "output",
            "x": 477.328,
            "y": 155
        },
        {
            "id": "id-a99fmqmx7-lxv0c9e1",
            "shader_values": {
                "p": 0,
                "f": "0.411",
                "fm": "3.78",
                "s": 0.1,
                "rot": "0",
                "amp": 1,
                "r": 1,
                "g": 1,
                "b": 1,
                "waveform": 0,
                "offset": 0,
                "scale_fract": "1",
                "n": "3"
            },
            "module_name": "polyShape",
            "x": 78.25,
            "y": 102
        },
        {
            "id": "id-ngxp20cvl-lxv0cuem",
            "shader_values": {
                "p": 0,
                "f": "2.801",
                "fm": 3,
                "s": 0.01,
                "rot": "3.6",
                "amp": "1",
                "r": 1,
                "g": 1,
                "b": 1,
                "waveform": 0,
                "offset": 0,
                "scale_fract": "0.19"
            },
            "module_name": "Oscillator",
            "x": 387,
            "y": 295
        }
    ],
    "connections": [
        {
            "fromNode": "id-a99fmqmx7-lxv0c9e1",
            "toNode": "id-hdr8oi3d4-lxv0c9e1",
            "id": "id-98gtgsfxo-lxv0c9e1"
        },
        {
            "fromNode": "id-a99fmqmx7-lxv0c9e1",
            "toNode": "id-ngxp20cvl-lxv0cuem",
            "id": "id-07xt5u8pv-lxv0d0y9"
        },
        {
            "fromNode": "id-ngxp20cvl-lxv0cuem",
            "toNode": "id-a99fmqmx7-lxv0c9e1",
            "id": "id-mfctrlfmm-lxv0dfd8"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-y845reu19-lxvscr06",
            "shader_values": {},
            "module_name": "output",
            "x": 349.328,
            "y": 503
        },
        {
            "id": "id-yi3lae29h-lxvscr06",
            "shader_values": {
                "p": "741.86",
                "f": "14.481",
                "fm": "6.81",
                "s": "0.84",
                "rot": "0.88",
                "amp": 1,
                "r": "0.86",
                "g": "0.47",
                "b": "0.18",
                "waveform": "2.91",
                "offset": "0.32",
                "scale_fract": "0.08",
                "n": "83.35"
            },
            "module_name": "polyShape",
            "x": 23.25,
            "y": 90
        },
        {
            "id": "id-8xptou4tu-lxvsd38f",
            "shader_values": {
                "p": "177.01",
                "f": "46.961",
                "fm": "9.73",
                "s": "0.68",
                "rot": "0.8",
                "amp": 1,
                "r": "0.02",
                "g": "0.81",
                "b": "0.93",
                "waveform": "3.8",
                "offset": "0.99",
                "scale_fract": "4.85",
                "n": "98.08"
            },
            "module_name": "polyShape",
            "x": 296,
            "y": 92
        },
        {
            "id": "id-et987yrd4-lxvsdqff",
            "shader_values": {
                "p": "1",
                "f": "3",
                "fm": "8.46",
                "s": "0.1",
                "rot": "0",
                "amp": "1",
                "r": "1",
                "g": "1",
                "b": "1",
                "waveform": "0",
                "offset": "0",
                "scale_fract": "1"
            },
            "module_name": "noise",
            "x": 568,
            "y": 96
        }
    ],
    "connections": [
        {
            "fromNode": "id-8xptou4tu-lxvsd38f",
            "toNode": "id-yi3lae29h-lxvscr06",
            "id": "id-1rb37kmcp-lxvsdgp9"
        },
        {
            "fromNode": "id-et987yrd4-lxvsdqff",
            "toNode": "id-y845reu19-lxvscr06",
            "id": "id-qya61skpz-lxvsdvrv"
        },
        {
            "fromNode": "id-8xptou4tu-lxvsd38f",
            "toNode": "id-et987yrd4-lxvsdqff",
            "id": "id-6sgnk6cqp-lxvsghk6"
        },
        {
            "fromNode": "id-yi3lae29h-lxvscr06",
            "toNode": "id-8xptou4tu-lxvsd38f",
            "id": "id-244r1sh3b-lxvsh6uu"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-9hhgxkutq-lxx2wkcd",
            "shader_values": {},
            "module_name": "output",
            "x": 999,
            "y": 363
        },
        {
            "id": "id-ycueo52cg-lxx2wm3w",
            "shader_values": {
                "p": 0,
                "f": "3.931",
                "fm": "2.61",
                "s": "0.1",
                "rot": "1.2",
                "amp": "1",
                "r": "1",
                "g": "0.65",
                "b": "0.61",
                "waveform": "4",
                "offset": "0",
                "scale_fract": "0.85"
            },
            "module_name": "Oscillator",
            "x": 51,
            "y": 145
        },
        {
            "id": "id-jsgrzykr4-lxx2wrcm",
            "shader_values": {
                "p": 0,
                "f": "1",
                "fm": "0.79",
                "s": "0",
                "rot": "1.47",
                "amp": "1",
                "r": "0.34",
                "g": "1",
                "b": "0.48",
                "waveform": "4",
                "offset": "0.06",
                "scale_fract": "0.37"
            },
            "module_name": "Oscillator",
            "x": 336,
            "y": 398
        },
        {
            "id": "id-6nju3qr4z-lxx30117",
            "shader_values": {
                "scale_fract": "1.96"
            },
            "module_name": "scale_fract",
            "x": 493,
            "y": 165
        },
        {
            "id": "id-l3azzvvas-lxx31e12",
            "shader_values": {
                "nSides": "1.14",
                "xOff": "0",
                "yOff": "0"
            },
            "module_name": "kaleidoscope",
            "x": 615,
            "y": 353
        }
    ],
    "connections": [
        {
            "fromNode": "id-jsgrzykr4-lxx2wrcm",
            "toNode": "id-ycueo52cg-lxx2wm3w",
            "id": "id-0hcgiiw89-lxx2yqdl"
        },
        {
            "fromNode": "id-ycueo52cg-lxx2wm3w",
            "toNode": "id-6nju3qr4z-lxx30117",
            "id": "id-2174uslgm-lxx304tm"
        },
        {
            "fromNode": "id-6nju3qr4z-lxx30117",
            "toNode": "id-l3azzvvas-lxx31e12",
            "id": "id-4q73sz1se-lxx31gch"
        },
        {
            "fromNode": "id-l3azzvvas-lxx31e12",
            "toNode": "id-9hhgxkutq-lxx2wkcd",
            "id": "id-c4z7726nx-lxx35oi2"
        },
        {
            "fromNode": "id-l3azzvvas-lxx31e12",
            "toNode": "id-jsgrzykr4-lxx2wrcm",
            "id": "id-rffas2h7z-lxx35qjm"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-9hcwezvl5-lxngkejh",
            "shader_values": {},
            "module_name": "output",
            "x": 893.656,
            "y": 218
        },
        {
            "id": "id-n5ztzkwyn-lxngkejh",
            "shader_values": {
                "p": 0,
                "f": 1,
                "fm": "5.88",
                "s": 0.04,
                "rot": "0",
                "amp": "2",
                "r": "0.88",
                "g": "0.75",
                "b": "1",
                "waveform": "4",
                "offset": "0",
                "scale_fract": "0.48",
                "n": "2"
            },
            "module_name": "polyShape",
            "x": 28.5,
            "y": 84.5
        },
        {
            "id": "id-2xr15zw3k-lxngl0md",
            "shader_values": {
                "scale_fract": 1.1
            },
            "module_name": "scale_fract",
            "x": 40,
            "y": 533
        },
        {
            "id": "id-b3ri1kjp3-lxngnu8n",
            "shader_values": {
                "r": "0.37",
                "g": "0.92",
                "b": "0.52",
                "amp": "2"
            },
            "module_name": "color",
            "x": 393,
            "y": 133
        }
    ],
    "connections": [
        {
            "fromNode": "id-n5ztzkwyn-lxngkejh",
            "toNode": "id-2xr15zw3k-lxngl0md",
            "id": "id-ijznisk7l-lxngl26a"
        },
        {
            "fromNode": "id-2xr15zw3k-lxngl0md",
            "toNode": "id-n5ztzkwyn-lxngkejh",
            "id": "id-winanbkyl-lxngl54d"
        },
        {
            "fromNode": "id-n5ztzkwyn-lxngkejh",
            "toNode": "id-b3ri1kjp3-lxngnu8n",
            "id": "id-ve2estx2x-lxngnyy3"
        },
        {
            "fromNode": "id-b3ri1kjp3-lxngnu8n",
            "toNode": "id-9hcwezvl5-lxngkejh",
            "id": "id-38q5ovjvv-lxngo0ed"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-n7mhi3z1l-lxnnvvqg",
            "shader_values": {},
            "module_name": "output",
            "x": 449.333,
            "y": 418
        },
        {
            "id": "id-y1bpyub5d-lxnnvvqg",
            "shader_values": {
                "p": "0.0",
                "f": "0.001",
                "fm": "0.82",
                "s": "0.1",
                "rot": "2.35",
                "amp": "2",
                "r": "0.93",
                "g": "0.41",
                "b": "0.42",
                "waveform": "0",
                "offset": "0.31",
                "scale_fract": "1"
            },
            "module_name": "noise",
            "x": 71.75,
            "y": 100
        },
        {
            "id": "id-je9353p22-lxuizmhi",
            "shader_values": {
                "scale_fract": "1.96"
            },
            "module_name": "scale_fract",
            "x": 401,
            "y": 170
        }
    ],
    "connections": [
        {
            "fromNode": "id-y1bpyub5d-lxnnvvqg",
            "toNode": "id-n7mhi3z1l-lxnnvvqg",
            "id": "id-foz7ah4kz-lxnnxwxr"
        },
        {
            "fromNode": "id-y1bpyub5d-lxnnvvqg",
            "toNode": "id-je9353p22-lxuizmhi",
            "id": "id-d69swcvud-lxuizpnz"
        },
        {
            "fromNode": "id-je9353p22-lxuizmhi",
            "toNode": "id-y1bpyub5d-lxnnvvqg",
            "id": "id-ajdh927p7-lxuizr8j"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-75a83fwma-lxt0fz51",
            "shader_values": {},
            "module_name": "output",
            "x": 960,
            "y": 397
        },
        {
            "id": "id-ph9wwm037-lxt0fz52",
            "shader_values": {
                "p": "0",
                "f": "0.581",
                "fm": "2.72",
                "s": 0.1,
                "rot": "0",
                "amp": "2",
                "r": "0.74",
                "g": "0.42",
                "b": "0.65",
                "waveform": "0",
                "offset": 0,
                "scale_fract": "8.03",
                "n": "4"
            },
            "module_name": "polyShape",
            "x": 187,
            "y": 154.5
        },
        {
            "id": "id-3h1swqer8-lxt0gnel",
            "shader_values": {
                "nSides": 1,
                "xOff": 0,
                "yOff": 0
            },
            "module_name": "kaleidoscope",
            "x": 472,
            "y": 473
        }
    ],
    "connections": [
        {
            "fromNode": "id-3h1swqer8-lxt0gnel",
            "toNode": "id-ph9wwm037-lxt0fz52",
            "id": "id-b9z9hw7gb-lxt0gup8"
        },
        {
            "fromNode": "id-ph9wwm037-lxt0fz52",
            "toNode": "id-3h1swqer8-lxt0gnel",
            "id": "id-8okt1wpmj-lxt0hy0i"
        },
        {
            "fromNode": "id-ph9wwm037-lxt0fz52",
            "toNode": "id-75a83fwma-lxt0fz51",
            "id": "id-16icn901x-lxt0i018"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-75a83fwma-lxt0fz51",
            "shader_values": {},
            "module_name": "output",
            "x": 960,
            "y": 397
        },
        {
            "id": "id-ph9wwm037-lxt0fz52",
            "shader_values": {
                "p": "0",
                "f": "0.581",
                "fm": "1.6",
                "s": 0.1,
                "rot": 0.125,
                "amp": "2",
                "r": "1",
                "g": "0.26",
                "b": "0.65",
                "waveform": "0",
                "offset": "0.94",
                "scale_fract": 2,
                "n": "4"
            },
            "module_name": "polyShape",
            "x": 187,
            "y": 154.5
        },
        {
            "id": "id-3h1swqer8-lxt0gnel",
            "shader_values": {
                "nSides": 1,
                "xOff": 0,
                "yOff": 0
            },
            "module_name": "kaleidoscope",
            "x": 472,
            "y": 473
        }
    ],
    "connections": [
        {
            "fromNode": "id-3h1swqer8-lxt0gnel",
            "toNode": "id-ph9wwm037-lxt0fz52",
            "id": "id-b9z9hw7gb-lxt0gup8"
        },
        {
            "fromNode": "id-ph9wwm037-lxt0fz52",
            "toNode": "id-3h1swqer8-lxt0gnel",
            "id": "id-8okt1wpmj-lxt0hy0i"
        },
        {
            "fromNode": "id-ph9wwm037-lxt0fz52",
            "toNode": "id-75a83fwma-lxt0fz51",
            "id": "id-16icn901x-lxt0i018"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-n7mhi3z1l-lxnnvvqg",
            "shader_values": {},
            "module_name": "output",
            "x": 449.333,
            "y": 418
        },
        {
            "id": "id-y1bpyub5d-lxnnvvqg",
            "shader_values": {
                "p": "0.0",
                "f": "0.001",
                "fm": 10,
                "s": "0.1",
                "rot": 0.33,
                "amp": "2",
                "r": "0.93",
                "g": "0.41",
                "b": "0.42",
                "waveform": "0",
                "offset": 1,
                "scale_fract": 0.51
            },
            "module_name": "noise",
            "x": 71.75,
            "y": 100
        },
        {
            "id": "id-je9353p22-lxuizmhi",
            "shader_values": {
                "scale_fract": "1.96"
            },
            "module_name": "scale_fract",
            "x": 401,
            "y": 170
        }
    ],
    "connections": [
        {
            "fromNode": "id-y1bpyub5d-lxnnvvqg",
            "toNode": "id-n7mhi3z1l-lxnnvvqg",
            "id": "id-foz7ah4kz-lxnnxwxr"
        },
        {
            "fromNode": "id-y1bpyub5d-lxnnvvqg",
            "toNode": "id-je9353p22-lxuizmhi",
            "id": "id-d69swcvud-lxuizpnz"
        },
        {
            "fromNode": "id-je9353p22-lxuizmhi",
            "toNode": "id-y1bpyub5d-lxnnvvqg",
            "id": "id-ajdh927p7-lxuizr8j"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-75a83fwma-lxt0fz51",
            "shader_values": {},
            "module_name": "output",
            "x": 960,
            "y": 397
        },
        {
            "id": "id-ph9wwm037-lxt0fz52",
            "shader_values": {
                "p": 0,
                "f": "0.001",
                "fm": "1.25",
                "s": 0.1,
                "rot": 0,
                "amp": "2",
                "r": "0.32",
                "g": "0.49",
                "b": "0.59",
                "waveform": "4",
                "offset": "0",
                "scale_fract": "1.53",
                "n": "100"
            },
            "module_name": "polyShape",
            "x": 187,
            "y": 154.5
        },
        {
            "id": "id-3h1swqer8-lxt0gnel",
            "shader_values": {
                "nSides": 2,
                "xOff": 0,
                "yOff": 0
            },
            "module_name": "kaleidoscope",
            "x": 519,
            "y": 399
        }
    ],
    "connections": [
        {
            "fromNode": "id-3h1swqer8-lxt0gnel",
            "toNode": "id-ph9wwm037-lxt0fz52",
            "id": "id-b9z9hw7gb-lxt0gup8"
        },
        {
            "fromNode": "id-ph9wwm037-lxt0fz52",
            "toNode": "id-3h1swqer8-lxt0gnel",
            "id": "id-8okt1wpmj-lxt0hy0i"
        },
        {
            "fromNode": "id-ph9wwm037-lxt0fz52",
            "toNode": "id-75a83fwma-lxt0fz51",
            "id": "id-16icn901x-lxt0i018"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-75a83fwma-lxt0fz51",
            "shader_values": {},
            "module_name": "output",
            "x": 960,
            "y": 397
        },
        {
            "id": "id-ph9wwm037-lxt0fz52",
            "shader_values": {
                "p": 0,
                "f": "4.481",
                "fm": "1.25",
                "s": 0.1,
                "rot": 0,
                "amp": "2",
                "r": "0.32",
                "g": "0.49",
                "b": "0.59",
                "waveform": "4",
                "offset": "0",
                "scale_fract": "1.53",
                "n": "100"
            },
            "module_name": "polyShape",
            "x": 187,
            "y": 154.5
        },
        {
            "id": "id-3h1swqer8-lxt0gnel",
            "shader_values": {
                "nSides": 2,
                "xOff": 0,
                "yOff": 0
            },
            "module_name": "kaleidoscope",
            "x": 519,
            "y": 399
        }
    ],
    "connections": [
        {
            "fromNode": "id-3h1swqer8-lxt0gnel",
            "toNode": "id-ph9wwm037-lxt0fz52",
            "id": "id-b9z9hw7gb-lxt0gup8"
        },
        {
            "fromNode": "id-ph9wwm037-lxt0fz52",
            "toNode": "id-3h1swqer8-lxt0gnel",
            "id": "id-8okt1wpmj-lxt0hy0i"
        },
        {
            "fromNode": "id-ph9wwm037-lxt0fz52",
            "toNode": "id-75a83fwma-lxt0fz51",
            "id": "id-16icn901x-lxt0i018"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-a67zbd91p-lxnfdtct",
            "shader_values": {},
            "module_name": "output",
            "x": 460.656,
            "y": 264
        },
        {
            "id": "id-1hb4dyc1b-lxnfdtct",
            "shader_values": {
                "p": "676.41",
                "f": "42.561",
                "fm": "9.43",
                "s": "0.1",
                "rot": "1",
                "amp": "1",
                "r": "0.76",
                "g": "0.41",
                "b": "0.27",
                "waveform": "4",
                "offset": "0.19",
                "scale_fract": "1.02",
                "n": "78"
            },
            "module_name": "polyShape",
            "x": 72.5,
            "y": 176.5
        }
    ],
    "connections": [
        {
            "fromNode": "id-1hb4dyc1b-lxnfdtct",
            "toNode": "id-a67zbd91p-lxnfdtct",
            "id": "id-lrle65dja-lxnfdtcu"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-75a83fwma-lxt0fz51",
            "shader_values": {},
            "module_name": "output",
            "x": 960,
            "y": 397
        },
        {
            "id": "id-ph9wwm037-lxt0fz52",
            "shader_values": {
                "p": 0,
                "f": "0.001",
                "fm": "1.25",
                "s": 0.1,
                "rot": 0,
                "amp": "2",
                "r": "0.32",
                "g": "0.49",
                "b": "0.59",
                "waveform": "4",
                "offset": "0",
                "scale_fract": "1.53",
                "n": "100"
            },
            "module_name": "polyShape",
            "x": 187,
            "y": 154.5
        },
        {
            "id": "id-3h1swqer8-lxt0gnel",
            "shader_values": {
                "nSides": "1.01",
                "xOff": 0,
                "yOff": 0
            },
            "module_name": "kaleidoscope",
            "x": 519,
            "y": 399
        }
    ],
    "connections": [
        {
            "fromNode": "id-3h1swqer8-lxt0gnel",
            "toNode": "id-ph9wwm037-lxt0fz52",
            "id": "id-b9z9hw7gb-lxt0gup8"
        },
        {
            "fromNode": "id-ph9wwm037-lxt0fz52",
            "toNode": "id-3h1swqer8-lxt0gnel",
            "id": "id-8okt1wpmj-lxt0hy0i"
        },
        {
            "fromNode": "id-ph9wwm037-lxt0fz52",
            "toNode": "id-75a83fwma-lxt0fz51",
            "id": "id-16icn901x-lxt0i018"
        }
    ]
},
{
    "nodes": [
        {
            "id": "id-75a83fwma-lxt0fz51",
            "shader_values": {},
            "module_name": "output",
            "x": 960,
            "y": 397
        },
        {
            "id": "id-ph9wwm037-lxt0fz52",
            "shader_values": {
                "p": 0,
                "f": "3.021",
                "fm": "6.52",
                "s": "0.1",
                "rot": "0",
                "amp": "2",
                "r": "0.48",
                "g": "0.35",
                "b": "0.72",
                "waveform": "4",
                "offset": "0",
                "scale_fract": "0.77",
                "n": "8"
            },
            "module_name": "polyShape",
            "x": 187,
            "y": 154.5
        },
        {
            "id": "id-3h1swqer8-lxt0gnel",
            "shader_values": {
                "nSides": "0.16",
                "xOff": "0",
                "yOff": "0"
            },
            "module_name": "kaleidoscope",
            "x": 519,
            "y": 399
        }
    ],
    "connections": [
        {
            "fromNode": "id-3h1swqer8-lxt0gnel",
            "toNode": "id-ph9wwm037-lxt0fz52",
            "id": "id-b9z9hw7gb-lxt0gup8"
        },
        {
            "fromNode": "id-ph9wwm037-lxt0fz52",
            "toNode": "id-3h1swqer8-lxt0gnel",
            "id": "id-8okt1wpmj-lxt0hy0i"
        },
        {
            "fromNode": "id-ph9wwm037-lxt0fz52",
            "toNode": "id-75a83fwma-lxt0fz51",
            "id": "id-16icn901x-lxt0i018"
        }
    ]
},
]