module.exports = [
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "block_blue",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        191,
        354,
        62,
        64
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        64,
        64
      ],
      "rotated": 1,
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "blue_button08",
      "texture": "6eA/3l5QRImLLWpg0TjAEP",
      "rect": [
        0,
        0,
        49,
        45
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        49,
        45
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "hammer008",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        287,
        2,
        211,
        230
      ],
      "offset": [
        -19,
        -1
      ],
      "originalSize": [
        333,
        256
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "hammer010",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        140,
        418,
        113,
        120
      ],
      "offset": [
        24,
        39
      ],
      "originalSize": [
        333,
        256
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "LevelPrefab",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "LevelPrefab",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        {
          "__type__": "5c0b0KWY05MQIxdXOuvrjyk",
          "node": {
            "__id__": 1
          },
          "strLabel": {
            "__id__": 4
          },
          "lock": {
            "__id__": 5
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "20g9oJe3dHRKCT3Z5DYzKe"
        },
        "fileId": "3bd73xLQANOaJFvuOi37i74"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 600,
        "height": 100
      },
      "_position": {
        "__type__": "cc.Vec3",
        "y": -500
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "mainButton",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 3
        },
        {
          "__id__": 5
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 2
          },
          "_spriteFrame": {
            "__uuid__": "333xyd+WdEY4AEKltjUsJj"
          },
          "_type": 1,
          "_sizeMode": 0
        },
        {
          "__type__": "cc.Button",
          "node": {
            "__id__": 2
          },
          "clickEvents": [
            {
              "__type__": "cc.ClickEvent",
              "target": {
                "__id__": 1
              },
              "component": "LevelPrefab",
              "handler": "mainButtonClick"
            }
          ],
          "_N$normalColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$pressedColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "pressedColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$disabledColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$normalSprite": {
            "__uuid__": "333xyd+WdEY4AEKltjUsJj"
          },
          "_N$pressedSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "pressedSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "_N$hoverSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "hoverSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "_N$disabledSprite": {
            "__uuid__": "29FYIk+N1GYaeWH/q1NxQO"
          },
          "_N$target": {
            "__id__": 2
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "20g9oJe3dHRKCT3Z5DYzKe"
        },
        "fileId": "dc5dfZYMrhGXI96h461HjQm"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 600,
        "height": 100
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "Label",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__id__": 4
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "20g9oJe3dHRKCT3Z5DYzKe"
        },
        "fileId": "568e8Vag9BE767dAuiNlf1+"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 600,
        "height": 100
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 3
      },
      "_useOriginalSize": false,
      "_string": "第1关 5432分",
      "_N$string": "第1关 5432分",
      "_fontSize": 32,
      "_enableWrapText": false,
      "_N$horizontalAlign": 1,
      "_N$verticalAlign": 1,
      "_N$overflow": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "lock",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 5
          },
          "_spriteFrame": {
            "__uuid__": "a0xSVGVmJIqb11/KXj0yoU"
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "20g9oJe3dHRKCT3Z5DYzKe"
        },
        "fileId": "11d1cjA0utI7JAM9eUd0NJo"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 31,
        "height": 39
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": -241
      },
      "_scaleX": 1,
      "_scaleY": 1
    }
  ],
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "blue_button07",
      "texture": "521w+5ebdKYp0J7H641PYT",
      "rect": [
        0,
        0,
        49,
        49
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        49,
        49
      ],
      "capInsets": [
        10,
        10,
        10,
        10
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "default_btn_disabled",
      "texture": "71VhFCTINJM6/Ky3oX9nBT",
      "rect": [
        0,
        0,
        40,
        40
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        40,
        40
      ],
      "capInsets": [
        12,
        12,
        12,
        12
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "hammer004",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        257,
        370,
        99,
        136
      ],
      "offset": [
        99,
        57
      ],
      "originalSize": [
        333,
        256
      ],
      "rotated": 1,
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "hammer002",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        2,
        368,
        97,
        136
      ],
      "offset": [
        39,
        53
      ],
      "originalSize": [
        333,
        256
      ],
      "rotated": 1,
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "grey_button13",
      "texture": "b8nVxUsghPc4Z+0GJZZxIk",
      "rect": [
        0,
        0,
        49,
        45
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        49,
        45
      ],
      "capInsets": [
        10,
        10,
        10,
        10
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "blue_button10",
      "texture": "939HjuudBFJ5mDonVypJ+Z",
      "rect": [
        0,
        0,
        49,
        45
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        49,
        45
      ],
      "capInsets": [
        10,
        9,
        9,
        10
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "hammer007",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        2,
        224,
        187,
        142
      ],
      "offset": [
        -19,
        -16
      ],
      "originalSize": [
        333,
        256
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.SceneAsset",
      "_name": "GameScene",
      "scene": {
        "__id__": 1
      },
      "asyncLoadAssets": null
    },
    {
      "__type__": "cc.Scene",
      "_name": "New Node",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "autoReleaseAssets": false
    },
    {
      "__type__": "cc.Node",
      "_name": "Canvas",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 3
        },
        {
          "__id__": 4
        },
        {
          "__id__": 5
        },
        {
          "__id__": 6
        },
        {
          "__id__": 8
        },
        {
          "__id__": 10
        }
      ],
      "_components": [
        {
          "__type__": "cc.Canvas",
          "node": {
            "__id__": 2
          },
          "_designResolution": {
            "__type__": "cc.Size",
            "width": 750,
            "height": 1334
          },
          "_fitWidth": true,
          "_fitHeight": false
        },
        {
          "__type__": "e3996EcHbNIBo8DcXtt3l87",
          "node": {
            "__id__": 2
          },
          "starPrefab": {
            "__uuid__": "fbzD8HjltIabhtebE0rzhN"
          },
          "starGrid": {
            "__id__": 5
          },
          "scoreLabel": {
            "__id__": 7
          },
          "scorePreLabel": {
            "__id__": 9
          },
          "targetLabel": {
            "__id__": 11
          }
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 750,
        "height": 1334
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 375,
        "y": 667
      },
      "_scaleX": 1,
      "_scaleY": 1,
      "_id": "7e9a4QAutVNs6g6TCZYDs3x"
    },
    {
      "__type__": "cc.Node",
      "_name": "bg1Sprite",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 3
          },
          "_spriteFrame": {
            "__uuid__": "a2MjXRFdtLlYQ5ouAFv/+R"
          },
          "_sizeMode": 0
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 750,
        "height": 1334
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "bg2Sprite",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 4
          },
          "_spriteFrame": {
            "__uuid__": "a2MjXRFdtLlYQ5ouAFv/+R"
          },
          "_sizeMode": 0
        }
      ],
      "_color": {
        "__type__": "cc.Color",
        "r": 40,
        "g": 53,
        "b": 61
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 750,
        "height": 750
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "starGrid",
      "_parent": {
        "__id__": 2
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 750,
        "height": 750
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "scoreLabel",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__id__": 7
        }
      ],
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 35.59,
        "height": 64
      },
      "_position": {
        "__type__": "cc.Vec3",
        "y": 500
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 6
      },
      "_useOriginalSize": false,
      "_string": "0",
      "_N$string": "0",
      "_fontSize": 64,
      "_lineHeight": 64,
      "_N$horizontalAlign": 1,
      "_N$verticalAlign": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "scorePreLabel",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__id__": 9
        },
        {
          "__type__": "cc.LabelOutline",
          "node": {
            "__id__": 8
          },
          "_width": 3
        }
      ],
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 84.3,
        "height": 100
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": -569,
        "y": 419
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 8
      },
      "_useOriginalSize": false,
      "_string": "Label",
      "_N$string": "Label",
      "_fontSize": 32,
      "_lineHeight": 100,
      "_N$horizontalAlign": 1,
      "_N$verticalAlign": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "targetLabel",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__id__": 11
        },
        {
          "__type__": "cc.Button",
          "node": {
            "__id__": 10
          },
          "clickEvents": [
            {
              "__type__": "cc.ClickEvent",
              "target": {
                "__id__": 2
              },
              "component": "GameScene",
              "handler": "targetButtonClick"
            }
          ],
          "_N$target": {
            "__id__": 10
          }
        }
      ],
      "_color": {
        "__type__": "cc.Color",
        "g": 51,
        "b": 255
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 220.1,
        "height": 40
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2",
        "y": 0.5
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": -359,
        "y": 622
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 10
      },
      "_useOriginalSize": false,
      "_string": "小目标:1000",
      "_N$string": "小目标:1000",
      "_N$horizontalAlign": 1,
      "_N$verticalAlign": 1
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "hammer003",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        404,
        366,
        99,
        138
      ],
      "offset": [
        87,
        59
      ],
      "originalSize": [
        333,
        256
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "block_green",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        2,
        531,
        62,
        62
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        64,
        64
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "hammer001",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        140,
        418,
        113,
        120
      ],
      "offset": [
        24,
        39
      ],
      "originalSize": [
        333,
        256
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "TipPrefab",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Tip",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        {
          "__type__": "2fc39ba/flCCaXZ48+4ZaMH",
          "node": {
            "__id__": 1
          },
          "tipLabel": {
            "__id__": 4
          },
          "tipBg": {
            "__id__": 2
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "71Brmy7+tGN5aHqTJSMWGT"
        },
        "fileId": "edd7ceApoFD94FPAgunTtbY"
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "bgSprite",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 3
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 2
          },
          "_spriteFrame": {
            "__uuid__": "3fWQKrMyFCSYYqcCGjwCzY"
          },
          "_type": 1,
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "71Brmy7+tGN5aHqTJSMWGT"
        },
        "fileId": "ee2ded9W3ZAVa3vR1zNW7e2"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 600,
        "height": 50
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "tipLabel",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__id__": 4
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "71Brmy7+tGN5aHqTJSMWGT"
        },
        "fileId": "47ae7wGA6dOT7piTEWeudx/"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 97.87,
        "height": 40
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 3
      },
      "_useOriginalSize": false,
      "_string": "Label",
      "_N$string": "Label",
      "_N$horizontalAlign": 1,
      "_N$verticalAlign": 1
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "block_yellow",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        2,
        467,
        62,
        62
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        64,
        64
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "hammer009",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        2,
        2,
        283,
        220
      ],
      "offset": [
        -23,
        -18
      ],
      "originalSize": [
        333,
        256
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "block_purple",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        66,
        467,
        62,
        62
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        64,
        64
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "lock",
      "texture": "52K9LKnkpFWa1Xp1HEDwAh",
      "rect": [
        9,
        3,
        31,
        39
      ],
      "offset": [
        0.5,
        1.5
      ],
      "originalSize": [
        48,
        48
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "default_sprite_splash",
      "texture": "02delMVqdBD70a/HSD99FK",
      "rect": [
        0,
        0,
        2,
        2
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        2,
        2
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "block_select",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        191,
        224,
        64,
        64
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        64,
        64
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  {
    "__type__": "cc.SpriteAtlas",
    "_name": "blocks.plist",
    "_spriteFrames": {
      "block_blue": {
        "__uuid__": "01mwuuRahIQKNeZUc7BckU"
      },
      "block_green": {
        "__uuid__": "5eu2rPyQhLC5jF8fGDDuW1"
      },
      "block_purple": {
        "__uuid__": "9b3ZlbMsJKT6pBn9msCd5p"
      },
      "block_red": {
        "__uuid__": "f2OmWpmy5BnaY1cvGGCGcW"
      },
      "block_select": {
        "__uuid__": "b5tH9EfMJOHbZJrEsjurJP"
      },
      "block_yellow": {
        "__uuid__": "74PC+Gw11Go6rO3ZgGndN1"
      },
      "hammer001": {
        "__uuid__": "69AcPVZblLta2B18gHTGuV"
      },
      "hammer002": {
        "__uuid__": "2f2EhoYEVH6rhPzmR7G0yP"
      },
      "hammer003": {
        "__uuid__": "55ul9q2iRHvaKQYWTnPJkR"
      },
      "hammer004": {
        "__uuid__": "2bekX9Ah1ITZVlkqYUE4EX"
      },
      "hammer005": {
        "__uuid__": "f7hllLKihJ6KrRV7AzANSJ"
      },
      "hammer006": {
        "__uuid__": "e8ac1C5qBNWZWWozkxgQht"
      },
      "hammer007": {
        "__uuid__": "42InPsVNlNyIZPqlK40irD"
      },
      "hammer008": {
        "__uuid__": "14AlhDGMpH9LVCw74A7YYF"
      },
      "hammer009": {
        "__uuid__": "85Neb0t2xFBoU7gNxPTaNN"
      },
      "hammer010": {
        "__uuid__": "1eqPQ9xmNM0Ym+HLulcMKO"
      }
    }
  },
  [
    {
      "__type__": "cc.SceneAsset",
      "_name": "MainScene",
      "scene": {
        "__id__": 1
      },
      "asyncLoadAssets": null
    },
    {
      "__type__": "cc.Scene",
      "_name": "New Node",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 0.22788605697151426,
        "y": 0.22788605697151426,
        "z": 1
      },
      "autoReleaseAssets": false
    },
    {
      "__type__": "cc.Node",
      "_name": "Canvas",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 3
        },
        {
          "__id__": 4
        },
        {
          "__id__": 5
        },
        {
          "__id__": 7
        },
        {
          "__id__": 9
        }
      ],
      "_components": [
        {
          "__type__": "cc.Canvas",
          "node": {
            "__id__": 2
          },
          "_designResolution": {
            "__type__": "cc.Size",
            "width": 750,
            "height": 1334
          },
          "_fitWidth": true,
          "_fitHeight": false
        },
        {
          "__type__": "04fb30nHQBA7J6o6i9uMytG",
          "node": {
            "__id__": 2
          },
          "levelLayout": {
            "__id__": 11
          },
          "levelPrefab": {
            "__uuid__": "20g9oJe3dHRKCT3Z5DYzKe"
          },
          "levelCurPrefab": {
            "__uuid__": "c92ZuUvMNDZYXZHyVibDiX"
          },
          "totalScoreLabel": {
            "__id__": 6
          },
          "scrollView": {
            "__id__": 12
          }
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 750,
        "height": 1334
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 375,
        "y": 667
      },
      "_id": "01bbfLESd1LJ4dZswvz2+Q1"
    },
    {
      "__type__": "cc.Node",
      "_name": "Main Camera",
      "_parent": {
        "__id__": 2
      },
      "_level": 1,
      "_components": [
        {
          "__type__": "cc.Camera",
          "node": {
            "__id__": 3
          },
          "_clearFlags": 7,
          "_depth": -1
        }
      ]
    },
    {
      "__type__": "cc.Node",
      "_name": "bgSprite",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 4
          },
          "_spriteFrame": {
            "__uuid__": "a2MjXRFdtLlYQ5ouAFv/+R"
          },
          "_sizeMode": 0
        }
      ],
      "_color": {
        "__type__": "cc.Color",
        "r": 255,
        "g": 224
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 750,
        "height": 1334
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "totalScoreLabel",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__id__": 6
        }
      ],
      "_color": {
        "__type__": "cc.Color",
        "g": 184,
        "b": 255
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 55.62,
        "height": 100
      },
      "_position": {
        "__type__": "cc.Vec3",
        "y": 470
      }
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 5
      },
      "_useOriginalSize": false,
      "_string": "0",
      "_N$string": "0",
      "_fontSize": 100,
      "_lineHeight": 100,
      "_N$horizontalAlign": 1,
      "_N$verticalAlign": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "startButton",
      "_parent": {
        "__id__": 2
      },
      "_children": [
        {
          "__id__": 8
        }
      ],
      "_active": false,
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 7
          },
          "_spriteFrame": {
            "__uuid__": "288tLJsghKn6cUrez1bAvp"
          },
          "_type": 1,
          "_sizeMode": 0
        },
        {
          "__type__": "cc.Button",
          "node": {
            "__id__": 7
          },
          "clickEvents": [
            {
              "__type__": "cc.ClickEvent",
              "target": {
                "__id__": 2
              },
              "component": "MainScene",
              "handler": "startButtonClick"
            }
          ],
          "_N$transition": 3,
          "transition": 3,
          "_N$normalColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$pressedColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "pressedColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$disabledColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$normalSprite": {
            "__uuid__": "288tLJsghKn6cUrez1bAvp"
          },
          "_N$pressedSprite": {
            "__uuid__": "06lVoDd/dLe68ljo4iylyg"
          },
          "pressedSprite": {
            "__uuid__": "06lVoDd/dLe68ljo4iylyg"
          },
          "_N$hoverSprite": {
            "__uuid__": "06lVoDd/dLe68ljo4iylyg"
          },
          "hoverSprite": {
            "__uuid__": "06lVoDd/dLe68ljo4iylyg"
          },
          "_N$disabledSprite": {
            "__uuid__": "06lVoDd/dLe68ljo4iylyg"
          },
          "_N$target": {
            "__id__": 7
          }
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 300,
        "height": 80
      },
      "_position": {
        "__type__": "cc.Vec3",
        "y": -524
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Label",
      "_parent": {
        "__id__": 7
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 8
          },
          "_useOriginalSize": false,
          "_string": "快速开始",
          "_N$string": "快速开始",
          "_enableWrapText": false,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1,
          "_N$overflow": 1
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 165,
        "height": 50
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "levelScrollView",
      "_parent": {
        "__id__": 2
      },
      "_children": [
        {
          "__id__": 10
        }
      ],
      "_components": [
        {
          "__id__": 12
        }
      ],
      "_color": {
        "__type__": "cc.Color",
        "r": 184,
        "g": 184,
        "b": 184
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 750,
        "height": 800
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "view",
      "_parent": {
        "__id__": 9
      },
      "_children": [
        {
          "__id__": 11
        }
      ],
      "_components": [
        {
          "__type__": "cc.Mask",
          "node": {
            "__id__": 10
          },
          "_N$alphaThreshold": 1
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 750,
        "height": 800
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "content",
      "_parent": {
        "__id__": 10
      },
      "_components": [
        {
          "__type__": "cc.Layout",
          "node": {
            "__id__": 11
          },
          "_layoutSize": {
            "__type__": "cc.Size",
            "width": 600
          },
          "_resize": 1,
          "_N$layoutType": 2,
          "_N$spacingY": 10
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 600
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2",
        "x": 0.5,
        "y": 1
      },
      "_position": {
        "__type__": "cc.Vec3",
        "y": 500
      }
    },
    {
      "__type__": "cc.ScrollView",
      "node": {
        "__id__": 9
      },
      "horizontal": false,
      "brake": 0.75,
      "bounceDuration": 0.23,
      "_N$content": {
        "__id__": 11
      },
      "content": {
        "__id__": 11
      },
      "_N$horizontalScrollBar": null,
      "_N$verticalScrollBar": null
    }
  ],
  [
    {
      "__type__": "cc.Prefab",
      "_name": "LevelCurPrefab",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "LevelCurPrefab",
      "_children": [
        {
          "__id__": 2
        }
      ],
      "_components": [
        {
          "__type__": "046c9RjCshG748pEaUzb9At",
          "node": {
            "__id__": 1
          },
          "strLabel": {
            "__id__": 5
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "c92ZuUvMNDZYXZHyVibDiX"
        },
        "fileId": "11861DT2QNM+KGx9CwnKakP"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 600,
        "height": 150
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "mainButton",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 3
        },
        {
          "__id__": 4
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 2
          },
          "_spriteFrame": {
            "__uuid__": "288tLJsghKn6cUrez1bAvp"
          },
          "_type": 1,
          "_sizeMode": 0
        },
        {
          "__type__": "cc.Button",
          "node": {
            "__id__": 2
          },
          "zoomScale": 1.1,
          "clickEvents": [
            {
              "__type__": "cc.ClickEvent",
              "target": {
                "__id__": 1
              },
              "component": "LevelCurPrefab",
              "handler": "mainButtonClick"
            }
          ],
          "_N$transition": 3,
          "transition": 3,
          "_N$normalColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$pressedColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "pressedColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$disabledColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$normalSprite": {
            "__uuid__": "288tLJsghKn6cUrez1bAvp"
          },
          "_N$pressedSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "pressedSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "_N$hoverSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "hoverSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "_N$disabledSprite": {
            "__uuid__": "29FYIk+N1GYaeWH/q1NxQO"
          },
          "_N$target": {
            "__id__": 2
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "c92ZuUvMNDZYXZHyVibDiX"
        },
        "fileId": "8420a9tQyBEEIn8Xflz/BN1"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 600,
        "height": 150
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "label",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 3
          },
          "_useOriginalSize": false,
          "_string": "快速开始",
          "_N$string": "快速开始",
          "_fontSize": 64,
          "_lineHeight": 64,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "c92ZuUvMNDZYXZHyVibDiX"
        },
        "fileId": "6893dlPrrdOhbWOWx6GQlaV"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 256,
        "height": 64
      },
      "_position": {
        "__type__": "cc.Vec3",
        "y": 19
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "label2",
      "_parent": {
        "__id__": 2
      },
      "_components": [
        {
          "__id__": 5
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "c92ZuUvMNDZYXZHyVibDiX"
        },
        "fileId": "635f0P1je9IBLM8riRZrX/B"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 344.59,
        "height": 40
      },
      "_position": {
        "__type__": "cc.Vec3",
        "y": -37
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 4
      },
      "_useOriginalSize": false,
      "_string": "第32关 最高1321分",
      "_N$string": "第32关 最高1321分",
      "_N$horizontalAlign": 1,
      "_N$verticalAlign": 1
    }
  ],
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "grey_button11",
      "texture": "0fVz7TimZMDb1KGey7KkYK",
      "rect": [
        0,
        0,
        49,
        45
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        49,
        45
      ],
      "capInsets": [
        10,
        10,
        10,
        10
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "hammer006",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        257,
        234,
        145,
        134
      ],
      "offset": [
        2,
        1
      ],
      "originalSize": [
        333,
        256
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "default_btn_pressed",
      "texture": "b4P/PCArtIdIH38t6mlw8Y",
      "rect": [
        0,
        0,
        40,
        40
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        40,
        40
      ],
      "capInsets": [
        12,
        12,
        12,
        12
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "default_btn_normal",
      "texture": "e8Ueib+qJEhL6mXAHdnwbi",
      "rect": [
        0,
        0,
        40,
        40
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        40,
        40
      ],
      "capInsets": [
        12,
        12,
        12,
        12
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "block_red",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        191,
        290,
        62,
        64
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        64,
        64
      ],
      "rotated": 1,
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "hammer005",
      "texture": "48Hk2FFv1PlqOdqgx3vLeN",
      "rect": [
        404,
        234,
        105,
        130
      ],
      "offset": [
        112,
        53
      ],
      "originalSize": [
        333,
        256
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "StarPrefab",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "StarPrefab",
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "01mwuuRahIQKNeZUc7BckU"
          }
        },
        {
          "__type__": "22bb0VNWAxF/ZMJwZXVIaIx",
          "node": {
            "__id__": 1
          },
          "pic1": {
            "__uuid__": "01mwuuRahIQKNeZUc7BckU"
          },
          "pic2": {
            "__uuid__": "5eu2rPyQhLC5jF8fGDDuW1"
          },
          "pic3": {
            "__uuid__": "9b3ZlbMsJKT6pBn9msCd5p"
          },
          "pic4": {
            "__uuid__": "f2OmWpmy5BnaY1cvGGCGcW"
          },
          "pic5": {
            "__uuid__": "74PC+Gw11Go6rO3ZgGndN1"
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "fbzD8HjltIabhtebE0rzhN"
        },
        "fileId": "335878IBoBIcp8HOCB5uNq9"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 62,
        "height": 64
      },
      "_scaleX": 1,
      "_scaleY": 1
    }
  ],
  [
    {
      "__type__": "cc.Prefab",
      "_name": "ConfirmDialogPrefab",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "ConfirmDialog",
      "_children": [
        {
          "__id__": 2
        },
        {
          "__id__": 3
        },
        {
          "__id__": 4
        },
        {
          "__id__": 5
        },
        {
          "__id__": 6
        },
        {
          "__id__": 8
        },
        {
          "__id__": 10
        },
        {
          "__id__": 13
        }
      ],
      "_components": [
        {
          "__type__": "c7199ySzr1IhI7NQxciQpOR",
          "node": {
            "__id__": 1
          },
          "titleLabel": {
            "__id__": 7
          },
          "contentLabel": {
            "__id__": 9
          },
          "btn1Node": {
            "__id__": 10
          },
          "btn2Node": {
            "__id__": 13
          },
          "btn1Label": {
            "__id__": 12
          },
          "btn2Label": {
            "__id__": 15
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "fflLUOBa9Iv75NhX25Vkrt"
        },
        "fileId": "b4772F4zI1L/pHQErKg/nrX"
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 358,
        "y": 588
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "fullScreenBtn",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.Button",
          "node": {
            "__id__": 2
          },
          "clickEvents": [
            {
              "__type__": "cc.ClickEvent",
              "target": {
                "__id__": 1
              },
              "component": "ConfirmDialogPrefab",
              "handler": "fullScreenBtnClick"
            }
          ],
          "_N$normalColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$pressedColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "pressedColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$disabledColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$normalSprite": {
            "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
          },
          "_N$pressedSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "pressedSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "_N$hoverSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "hoverSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "_N$disabledSprite": {
            "__uuid__": "29FYIk+N1GYaeWH/q1NxQO"
          },
          "_N$target": {
            "__id__": 2
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "fflLUOBa9Iv75NhX25Vkrt"
        },
        "fileId": "bf241ObP+1Bm5kfx+FWNudl"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 750,
        "height": 1334
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "dialogBtn",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.Button",
          "node": {
            "__id__": 3
          },
          "clickEvents": [
            {
              "__type__": "cc.ClickEvent",
              "target": {
                "__id__": 1
              },
              "component": "ConfirmDialogPrefab",
              "handler": "dialogBtnClick"
            }
          ],
          "_N$normalColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$pressedColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "pressedColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$disabledColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$normalSprite": {
            "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
          },
          "_N$pressedSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "pressedSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "_N$hoverSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "hoverSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "_N$disabledSprite": {
            "__uuid__": "29FYIk+N1GYaeWH/q1NxQO"
          },
          "_N$target": {
            "__id__": 3
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "fflLUOBa9Iv75NhX25Vkrt"
        },
        "fileId": "df4bcs+EWhPjLJ9qRWRIWWi"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 500,
        "height": 500
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "blueBg",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 4
          },
          "_spriteFrame": {
            "__uuid__": "3fWQKrMyFCSYYqcCGjwCzY"
          },
          "_type": 1,
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "fflLUOBa9Iv75NhX25Vkrt"
        },
        "fileId": "51d54Az4MlJcIgAaOKnBrqJ"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 500,
        "height": 500
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "greyBg",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 5
          },
          "_spriteFrame": {
            "__uuid__": "ddg8ZIefZEoZQdWLtU1bWK"
          },
          "_type": 1,
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "fflLUOBa9Iv75NhX25Vkrt"
        },
        "fileId": "83e42AafgRJPqqcn8pC734w"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 490,
        "height": 400
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2",
        "x": 0.5
      },
      "_position": {
        "__type__": "cc.Vec3",
        "y": -245
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "titleLabel",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__id__": 7
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "fflLUOBa9Iv75NhX25Vkrt"
        },
        "fileId": "8befcLturRPQLWkv6VHKCQS"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 240,
        "height": 40
      },
      "_position": {
        "__type__": "cc.Vec3",
        "y": 198
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 6
      },
      "_useOriginalSize": false,
      "_string": "标题标题标题",
      "_N$string": "标题标题标题",
      "_N$horizontalAlign": 1,
      "_N$verticalAlign": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "contentLabel",
      "_parent": {
        "__id__": 1
      },
      "_components": [
        {
          "__id__": 9
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "fflLUOBa9Iv75NhX25Vkrt"
        },
        "fileId": "3e21b7MerhBz73/gjWsG6BT"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 418,
        "height": 245
      },
      "_position": {
        "__type__": "cc.Vec3",
        "y": 18
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 8
      },
      "_useOriginalSize": false,
      "_string": "这里放一些内容，比如什么呢，随便说点什么都可以。",
      "_N$string": "这里放一些内容，比如什么呢，随便说点什么都可以。",
      "_fontSize": 32,
      "_lineHeight": 32,
      "_N$horizontalAlign": 1,
      "_N$verticalAlign": 1,
      "_N$overflow": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "btn1",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 11
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 10
          },
          "_spriteFrame": {
            "__uuid__": "288tLJsghKn6cUrez1bAvp"
          },
          "_type": 1,
          "_sizeMode": 0
        },
        {
          "__type__": "cc.Button",
          "node": {
            "__id__": 10
          },
          "clickEvents": [
            {
              "__type__": "cc.ClickEvent",
              "target": {
                "__id__": 1
              },
              "component": "ConfirmDialogPrefab",
              "handler": "btn1Click"
            }
          ],
          "_N$transition": 3,
          "transition": 3,
          "_N$normalColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$pressedColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "pressedColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$disabledColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$normalSprite": {
            "__uuid__": "288tLJsghKn6cUrez1bAvp"
          },
          "_N$pressedSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "pressedSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "_N$hoverSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "hoverSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "_N$disabledSprite": {
            "__uuid__": "29FYIk+N1GYaeWH/q1NxQO"
          },
          "_N$target": {
            "__id__": 10
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "fflLUOBa9Iv75NhX25Vkrt"
        },
        "fileId": "c3b13OLbE1LY73DY8zPblQY"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 200,
        "height": 80
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": -113,
        "y": -179
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "Label",
      "_parent": {
        "__id__": 10
      },
      "_components": [
        {
          "__id__": 12
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "fflLUOBa9Iv75NhX25Vkrt"
        },
        "fileId": "17e4dr3GWhDUpG6e3VjwQm4"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 175,
        "height": 40
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 11
      },
      "_useOriginalSize": false,
      "_string": "button",
      "_N$string": "button",
      "_enableWrapText": false,
      "_N$horizontalAlign": 1,
      "_N$verticalAlign": 1,
      "_N$overflow": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "btn2",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 14
        }
      ],
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 13
          },
          "_spriteFrame": {
            "__uuid__": "288tLJsghKn6cUrez1bAvp"
          },
          "_type": 1,
          "_sizeMode": 0
        },
        {
          "__type__": "cc.Button",
          "node": {
            "__id__": 13
          },
          "clickEvents": [
            {
              "__type__": "cc.ClickEvent",
              "target": {
                "__id__": 1
              },
              "component": "ConfirmDialogPrefab",
              "handler": "btn2Click"
            }
          ],
          "_N$transition": 3,
          "transition": 3,
          "_N$normalColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$pressedColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "pressedColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$disabledColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255
          },
          "_N$normalSprite": {
            "__uuid__": "288tLJsghKn6cUrez1bAvp"
          },
          "_N$pressedSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "pressedSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "_N$hoverSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "hoverSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "_N$disabledSprite": {
            "__uuid__": "29FYIk+N1GYaeWH/q1NxQO"
          },
          "_N$target": {
            "__id__": 13
          }
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "fflLUOBa9Iv75NhX25Vkrt"
        },
        "fileId": "a5872mUbkJNkJbV26JgD6Ap"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 200,
        "height": 80
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 113,
        "y": -179
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Node",
      "_name": "Label",
      "_parent": {
        "__id__": 13
      },
      "_components": [
        {
          "__id__": 15
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "fflLUOBa9Iv75NhX25Vkrt"
        },
        "fileId": "74da2qeW2dMCKAO5BAI/rRP"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 175,
        "height": 40
      },
      "_scaleX": 1,
      "_scaleY": 1
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 14
      },
      "_useOriginalSize": false,
      "_string": "button",
      "_N$string": "button",
      "_enableWrapText": false,
      "_N$horizontalAlign": 1,
      "_N$verticalAlign": 1,
      "_N$overflow": 1
    }
  ]
];
