var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.6997707206737687,
        "pitch": -0.007372825648218395,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": -1.6197843672424916,
          "pitch": 0.24871032118363345,
          "rotation": 0,
          "target": "1-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ground-floor",
      "name": "Ground Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.501058669952222,
        "pitch": 0.3035307661424298,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": 1.4822832717099752,
          "pitch": 0.4255261737815168,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 2.553088169008019,
          "pitch": 0.6498054517241236,
          "rotation": 0,
          "target": "6-bedroom-1"
        },
        {
          "yaw": -1.7020570963416048,
          "pitch": 0.5858773484875162,
          "rotation": 0,
          "target": "2-living-room"
        },
        {
          "yaw": -2.45930454110618,
          "pitch": 0.8300674805008512,
          "rotation": 5.497787143782138,
          "target": "7-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.8226791196913705,
        "pitch": 0.27348907733560246,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": 2.205601738286541,
          "pitch": 0.5039022770747401,
          "rotation": 5.497787143782138,
          "target": "3-utility"
        },
        {
          "yaw": -0.79870336664532,
          "pitch": 0.5390149310880084,
          "rotation": 5.497787143782138,
          "target": "4-to-basement"
        },
        {
          "yaw": -2.393959027093885,
          "pitch": 0.524000738856552,
          "rotation": 0,
          "target": "1-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-utility",
      "name": "Utility",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.3650749929848036,
        "pitch": 0.5009078267391427,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": -0.03392447779545549,
          "pitch": 0.3773491705837859,
          "rotation": 0,
          "target": "2-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-to-basement",
      "name": "To Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.5123634865559747,
        "pitch": 0.614984042262865,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": 1.47843144102172,
          "pitch": 1.0207645933344072,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": -0.5109016894177039,
          "pitch": 0.914352606522197,
          "rotation": 0.7853981633974483,
          "target": "2-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.5403360512278148,
        "pitch": 0.10400263477353278,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": -2.2162064883856747,
          "pitch": 0.41585398632663484,
          "rotation": 1.5707963267948966,
          "target": "4-to-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.0546176335458952,
        "pitch": 0.26406029431004363,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": -0.7859996222725538,
          "pitch": 0.5599705061761355,
          "rotation": 0,
          "target": "1-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-i-floor",
      "name": "I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.9946620696798316,
        "pitch": 0.57897886636745,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": -1.335366666743976,
          "pitch": 0.8420443023777402,
          "rotation": 0.7853981633974483,
          "target": "8-bedroom-2"
        },
        {
          "yaw": -2.432710946239027,
          "pitch": 0.9326240481478578,
          "rotation": 6.283185307179586,
          "target": "1-ground-floor"
        },
        {
          "yaw": 2.2225075509052843,
          "pitch": 0.9020250425336283,
          "rotation": 11.780972450961727,
          "target": "9-bathroom-1"
        },
        {
          "yaw": -3.0005769737009125,
          "pitch": 0.46683485393826807,
          "rotation": 10.995574287564278,
          "target": "10-bathroom-2"
        },
        {
          "yaw": -2.8427298086397172,
          "pitch": 0.41684201130055953,
          "rotation": 7.0685834705770345,
          "target": "11-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.777620896159892,
        "pitch": 0.24258228032297957,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": 0.8678721620774841,
          "pitch": 0.6198974353377871,
          "rotation": 0.7853981633974483,
          "target": "7-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bathroom-1",
      "name": "Bathroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.8978771431616845,
        "pitch": 0.4901121215879254,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": 1.4211903739815188,
          "pitch": 0.8806859652635133,
          "rotation": 0,
          "target": "7-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bathroom-2",
      "name": "Bathroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.286193866456305,
        "pitch": 1.0150731823624675,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": 1.0375453994212727,
          "pitch": 0.7569766241072635,
          "rotation": 0,
          "target": "7-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-ii-floor",
      "name": "II Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.7689120512103393,
        "pitch": 0.8322007079462637,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": -2.6475784790346424,
          "pitch": 1.1939267746826534,
          "rotation": 1.5707963267948966,
          "target": "13-bedroom-3"
        },
        {
          "yaw": 1.470762527077846,
          "pitch": 0.9467255093110403,
          "rotation": 0,
          "target": "12-bedroom-4"
        },
        {
          "yaw": 2.685431111376621,
          "pitch": 0.9173415408396508,
          "rotation": 3.9269908169872414,
          "target": "7-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom-4",
      "name": "Bedroom 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.782805721203113,
        "pitch": 0.5021374621770534,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": -0.6018235686930424,
          "pitch": 0.8221759206859982,
          "rotation": 0,
          "target": "11-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.648612184770963,
        "pitch": 0.3426003055364806,
        "fov": 1.4022107415732976
      },
      "linkHotspots": [
        {
          "yaw": 1.1360812339707547,
          "pitch": 0.4673455535896487,
          "rotation": 0,
          "target": "11-ii-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "28 Manor Drive",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
