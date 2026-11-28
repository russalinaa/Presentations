window.OMB = {
 "phases": [
  {
   "id": "epu",
   "title": "Electrical Power Up – F/O",
   "section": "2.2.9",
   "pages": {
    "ch": "21–23",
    "pdf": "89–91"
   },
   "trigger": [
    "2.2.8 Amplified procedures: Before each flight the captain, first officer or maintenance crew must verify that airplane is satisfactory for flight. The F/O will complete the Electrical Power UP procedure and Preliminary Preflight Procedure if it was not otherwise stated by Captain."
   ],
   "intro": [
    "Power up procedure is extracted from SP.6.1 and inserted for the logical sequence of the flight preparation.",
    "The following procedure is accomplished to permit safe application of electrical power."
   ],
   "who": "F/O",
   "callouts": [],
   "rows": [
    {
     "who": "FO",
     "panel": "Electrical panel",
     "mock": {
      "img": "ovh",
      "x": 0.2255,
      "y": 0.5142
     },
     "mockNG": {
      "img": "ngovh",
      "x": 0.4088,
      "y": 0.2426
     },
     "page": {
      "ch": "21",
      "pdf": "89"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "BATTERY switch",
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 395,
         "y": 1157
        },
        "NG": {
         "img": "ngovh",
         "x": 632,
         "y": 625
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Electrical panel",
     "mock": {
      "img": "ovh",
      "x": 0.2683,
      "y": 0.5764
     },
     "mockNG": {
      "img": "ngovh",
      "x": 0.4301,
      "y": 0.2698
     },
     "page": {
      "ch": "21",
      "pdf": "89"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "STANDBY POWER switch",
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 470,
         "y": 1297
        },
        "NG": {
         "img": "ngovh",
         "x": 665,
         "y": 695
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Flight control panel",
     "mock": {
      "img": "ovh",
      "x": 0.1142,
      "y": 0.4942
     },
     "mockNG": {
      "img": "ngovh",
      "x": 0.3545,
      "y": 0.2026
     },
     "page": {
      "ch": "21",
      "pdf": "89"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "ALTERNATE FLAPS master switch",
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 200,
         "y": 1112
        },
        "NG": {
         "img": "ngovh",
         "x": 548,
         "y": 522
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Windshield wiper",
     "mock": {
      "img": "ovh",
      "x": 0.3938,
      "y": 0.8689
     },
     "mockNG": {
      "img": "ngovh",
      "x": 0.4495,
      "y": 0.3591
     },
     "page": {
      "ch": "21",
      "pdf": "89"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Windshield WIPER selector",
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 690,
         "y": 1955
        },
        "NG": {
         "img": "ngovh",
         "x": 695,
         "y": 955,
         "check": "На NG-макете два селектора: L WIPER и R WIPER. В OM-B для Electrical Power Up сказано «Windshield WIPER selector» (ед. ч.). Метка стоит на L WIPER. ⚠ проверить"
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Hydraulic panel",
     "mock": {
      "img": "ovh",
      "x": 0.5565,
      "y": 0.64
     },
     "mockNG": {
      "img": "ngovh",
      "x": 0.5602,
      "y": 0.2776
     },
     "page": {
      "ch": "21",
      "pdf": "89"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "ELECTRIC HYDRAULIC PUMPS switches",
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 912,
         "y": 1430
        },
        "NG": {
         "img": "ngovh",
         "x": 867,
         "y": 715
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Landing gear panel",
     "mock": {
      "img": "ip",
      "x": 0.6291,
      "y": 0.3985
     },
     "mockNG": {
      "img": "ngip",
      "x": 0.5886,
      "y": 0.5551
     },
     "page": {
      "ch": "21",
      "pdf": "89"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "LANDING GEAR lever",
       "val": "DN",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1262,
         "y": 450
        },
        "NG": {
         "img": "ngip",
         "x": 910,
         "y": 1430
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the green landing gear indicator lights are illuminated."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the red landing gear indicator lights are extinguished."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Weather radar",
     "mock": {
      "img": "ip",
      "x": 0.4965,
      "y": 0.6309
     },
     "mockNG": {
      "img": "ngped",
      "x": 0.4916,
      "y": 0.8599
     },
     "page": {
      "ch": "21",
      "pdf": "89"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "WEATHER RADAR",
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 665
        },
        "NG": {
         "img": "ngped",
         "x": 760,
         "y": 2215
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Electrical panel",
     "mock": {
      "img": "ovh",
      "x": 0.2626,
      "y": 0.7244
     },
     "mockNG": {
      "img": "ngovh",
      "x": 0.4301,
      "y": 0.3125
     },
     "page": {
      "ch": "22",
      "pdf": "90"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "If external power is needed:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the GRD POWER AVAILABLE light is illuminated."
      },
      {
       "k": "A",
       "tag": "",
       "item": "GRD POWER switch",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 460,
         "y": 1635
        },
        "NG": {
         "img": "ngovh",
         "x": 665,
         "y": 805
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the BUS OFF lights are extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the TRANSFER BUS OFF lights are extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the STANDBY PWR OFF light is extinguished."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Overheat and fire protection panel",
     "mock": {
      "img": "aft",
      "x": 0.452,
      "y": 0.4108
     },
     "mockNG": {
      "img": "ngped",
      "x": 0.4916,
      "y": 0.8133
     },
     "page": {
      "ch": "22",
      "pdf": "90"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Overheat and fire protection panel",
       "val": "Check",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 557,
         "y": 760
        },
        "NG": {
         "img": "ngped",
         "x": 760,
         "y": 2095
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the engine No. 1, APU and the engine No. 2 fire switches are in."
      },
      {
       "k": "A",
       "tag": "",
       "item": "OVERHEAT DETECTOR switches",
       "val": "NORMAL",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 327,
         "y": 722
        },
        "NG": {
         "img": "ngped",
         "x": 669,
         "y": 2070
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "TEST switch",
       "val": "Hold to FAULT/INOP",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 340,
         "y": 805
        },
        "NG": {
         "img": "ngped",
         "x": 667,
         "y": 2112
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the MASTER CAUTION lights are illuminated."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the OVHT/DET annunciator is illuminated."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the FAULT light is illuminated."
      },
      {
       "k": "V",
       "tag": "",
       "text": "If the FAULT light fails to illuminate, the fault monitoring system is inoperative."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the APU DET INOP light is illuminated."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Do not operate the APU if the APU DET INOP light fails to illuminate."
      },
      {
       "k": "N",
       "tag": "",
       "text": "The fire warning light flashes and the horn sounds on the APU ground control panel when this test is done with the APU running. This can be mistaken by the ground crew as an APU fire."
      },
      {
       "k": "A",
       "tag": "",
       "item": "TEST switch",
       "val": "Hold to OVHT/FIRE",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 340,
         "y": 805
        },
        "NG": {
         "img": "ngped",
         "x": 667,
         "y": 2112
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the fire warning bell sounds."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the master FIRE WARN lights are illuminated."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the MASTER CAUTION lights are illuminated."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the OVHT/DET annunciator is illuminated."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Master FIRE WARN light",
       "val": "Push",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1452,
         "y": 72
        },
        "NG": {
         "img": "ngip",
         "x": 1124,
         "y": 1172
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the master FIRE WARN lights are extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the fire warning bell cancels."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the engine No. 1, APU and the engine No. 2 fire switches stay illuminated."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the ENG 1 OVERHEAT and ENG 2 OVERHEAT lights stay illuminated"
      },
      {
       "k": "A",
       "tag": "",
       "item": "EXTINGUISHER TEST switch",
       "val": "Check",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 795,
         "y": 760
        },
        "NG": {
         "img": "ngped",
         "x": 866,
         "y": 2087
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "TEST Switch",
       "val": "Position to 1 and hold",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 795,
         "y": 760
        },
        "NG": {
         "img": "ngped",
         "x": 866,
         "y": 2087
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the three green extinguisher test lights are illuminated."
      },
      {
       "k": "A",
       "tag": "",
       "item": "TEST Switch",
       "val": "Release",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 795,
         "y": 760
        },
        "NG": {
         "img": "ngped",
         "x": 866,
         "y": 2087
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the three green extinguisher test lights are extinguished."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Repeat for test position 2."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "APU",
     "mock": {
      "img": "ovh",
      "x": 0.3025,
      "y": 0.9333
     },
     "mockNG": {
      "img": "ngovh",
      "x": 0.4541,
      "y": 0.3901
     },
     "page": {
      "ch": "23",
      "pdf": "91"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "APU switch (as needed)",
       "val": "START",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 530,
         "y": 2095
        },
        "NG": {
         "img": "ngovh",
         "x": 702,
         "y": 1005
        }
       }
      },
      {
       "k": "N",
       "tag": "",
       "text": "If extended APU operation is required on the ground and fuel is loaded in the centre tank, place the left centre tank fuel pump switch ON to prevent a fuel imbalance before takeoff."
      },
      {
       "k": "C",
       "tag": "",
       "text": "Center tank fuel pump switches should be positioned ON only if the fuel quantity in the centre tank exceeds 453 kgs/1000 lbs."
      },
      {
       "k": "C",
       "tag": "",
       "text": "Do not operate the center tank fuel pumps with the flight deck unattended."
      },
      {
       "k": "N",
       "tag": "",
       "text": "Whenever the APU is operating and AC electrical power is on the airplane busses, extended service life of the APU fuel control unit can be realized by operating at least one fuel boost pump to supply fuel under pressure to the APU."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Electrical panel (APU GEN)",
     "mock": {
      "img": "ovh",
      "x": 0.2654,
      "y": 0.8067
     },
     "mockNG": {
      "img": "ngovh",
      "x": 0.4282,
      "y": 0.3494
     },
     "page": {
      "ch": "23",
      "pdf": "91"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "When the APU GEN OFF BUS light is illuminated:"
      },
      {
       "k": "A",
       "tag": "",
       "item": "APU GENERATOR bus switches",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 460,
         "y": 1815
        },
        "NG": {
         "img": "ngovh",
         "x": 662,
         "y": 900
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the BUS OFF lights are extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the TRANSFER BUS OFF lights are extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the STANDBY PWR OFF light is extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the APU MAINT light is extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the APU LOW OIL PRESSURE light is extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the APU FAULT light is extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the APU OVERSPEED light is extinguished"
      },
      {
       "k": "N",
       "tag": "",
       "text": "Run the APU for two full minutes (NG) one full minute (CL) before using it as a bleed air source."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Overheat and fire protection panel",
     "mock": {
      "img": "aft",
      "x": 0.2769,
      "y": 0.4351
     },
     "mockNG": {
      "img": "ngped",
      "x": 0.4314,
      "y": 0.8199
     },
     "page": {
      "ch": "23",
      "pdf": "91"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Wheel well fire warning system",
       "val": "Test",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 340,
         "y": 805
        },
        "NG": {
         "img": "ngped",
         "x": 667,
         "y": 2112
        }
       }
      },
      {
       "k": "N",
       "tag": "",
       "text": "If external power is available and ON, Wheel well fire warning system test may be performed as part of Overheat and fire protection panel test"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Test switch",
       "val": "Hold to OVHT/FIRE",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 340,
         "y": 805
        },
        "NG": {
         "img": "ngped",
         "x": 667,
         "y": 2112
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify fire warning bell sounds, master FIRE WARN lights, MASTER CAUTION lights and OVHT/DET annunciator illuminate."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Fire warning BELL CUTOUT switch",
       "val": "Push",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 570,
         "y": 715
        },
        "NG": {
         "img": "ngped",
         "x": 760,
         "y": 2062,
         "check": "Кнопка BELL CUTOUT на NG-макете частично закрыта рукоятками; метка поставлена у надписи BELL CUTOUT. ⚠ проверить"
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the master FIRE WARN lights extinguish."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the fire warning bell cancels."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the WHEEL WELL fire warning light is illuminated."
      }
     ]
    }
   ]
  },
  {
   "id": "prelim",
   "title": "Preliminary Preflight Procedure – F/O",
   "section": "2.2.10",
   "pages": {
    "ch": "23–28",
    "pdf": "91–96"
   },
   "trigger": [
    "The Preliminary Preflight Procedure assumes that the Electrical Power Up supplementary procedure is complete."
   ],
   "intro": [
    "A full IRS alignment is recommended before each flight. If time does not allow a full alignment, do the Fast Realignment supplementary procedure."
   ],
   "who": "F/O (2.2.8: if it was not otherwise stated by Captain)",
   "callouts": [],
   "rows": [
    {
     "who": "FO",
     "panel": "IRS mode selectors (Aft overhead)",
     "mock": {
      "img": "ovh",
      "x": 0.2637,
      "y": 0.26
     },
     "mockNG": null,
     "page": {
      "ch": "23",
      "pdf": "91"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "IRS mode selectors",
       "val": "OFF, then NAV"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the ON DC lights illuminate then extinguish."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the ALIGN lights are illuminated."
      },
      {
       "k": "V",
       "tag": "X:3722,3723,3724",
       "text": "(Except UP-B3722, UP-B3723, UP-B3724) The UNABLE REQD NAV PERF-RNP message can show until IRS alignment is complete."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Voice recorder",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "24",
      "pdf": "92"
     },
     "tag": "NG",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(NG only) VOICE RECORDER switch",
       "val": "As needed"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Systems quantities",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "24",
      "pdf": "92"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Verify that the following are sufficient for flight:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "oxygen pressure"
      },
      {
       "k": "V",
       "tag": "",
       "text": "engine oil quantity"
      },
      {
       "k": "N",
       "tag": "",
       "text": "The most accurate information about the amount of oil is available not less than 5 minutes and no greater than 30 minutes after engine shutdown."
      },
      {
       "k": "V",
       "tag": "",
       "text": "hydraulic quantity"
      },
      {
       "k": "N",
       "tag": "",
       "text": "Valid only when airplane is on ground with both engines shutdown or after landing with flaps up during taxi–in."
      },
      {
       "k": "V",
       "tag": "",
       "text": "fuel quantity, if refuelling is completed"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Check oil temperature. If the oil temperature is below -20 degrees Celsius, pilot must call maintenance personnel to heat up oil. Engine start with cold oil can lead to damage of starter mechanism."
      },
      {
       "k": "X",
       "tag": "",
       "text": "It is necessary to move ENGINE START SWICH to CONT mode for oil temperature check on the ground."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Do the remaining actions after a crew change or maintenance action."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Crew oxygen (mask panel)",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "24",
      "pdf": "92"
     },
     "tag": "",
     "lines": [
      {
       "k": "N",
       "tag": "",
       "text": "The following oxygen pressure drop test only needs to be performed at one crewmember station."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Oxygen pressure drop",
       "val": "Test"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Note the crew oxygen pressure."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Oxygen mask",
       "val": "Stowed and doors closed"
      },
      {
       "k": "H",
       "tag": "CL+T:3725",
       "text": "UP-B3721, UP-B3722, UP-B3723, UP-B3724, UP-B3725, UP-B3729:"
      },
      {
       "k": "A",
       "tag": "CL+T:3725",
       "item": "RESET/TEST switch",
       "val": "Slide down and hold"
      },
      {
       "k": "V",
       "tag": "CL+T:3725",
       "text": "Verify that the yellow cross shows momentarily in the flow indicator."
      },
      {
       "k": "A",
       "tag": "CL+T:3725",
       "item": "EMERGENCY/TEST selector",
       "val": "Push and hold"
      },
      {
       "k": "X",
       "tag": "CL+T:3725",
       "text": "Continue to hold the RESET/TEST switch down and push the EMERGENCY/TEST selector for 5 seconds. Verify that the yellow cross shows continuously in the flow indicator."
      },
      {
       "k": "V",
       "tag": "CL+T:3725",
       "text": "Verify that the crew oxygen pressure does not decrease more than 100 psig."
      },
      {
       "k": "A",
       "tag": "CL+T:3725",
       "item": "Normal/100% selector",
       "val": "100%"
      },
      {
       "k": "A",
       "tag": "CL+T:3725",
       "item": "Crew oxygen pressure",
       "val": "Check"
      },
      {
       "k": "V",
       "tag": "CL+T:3725",
       "text": "Verify that the pressure is sufficient for dispatch."
      },
      {
       "k": "H",
       "tag": "T:3733,3734,3735,3736",
       "text": "UP-B3733, UP-B3734, UP-B3735, UP-B3736:"
      },
      {
       "k": "A",
       "tag": "T:3733,3734,3735,3736",
       "item": "Oxygen pressure drop",
       "val": "Test"
      },
      {
       "k": "X",
       "tag": "T:3733,3734,3735,3736",
       "text": "Note the crew oxygen pressure."
      },
      {
       "k": "A",
       "tag": "T:3733,3734,3735,3736",
       "item": "Oxygen mask",
       "val": "Stowed and doors closed"
      },
      {
       "k": "A",
       "tag": "T:3733,3734,3735,3736",
       "item": "TEST/RESET switch",
       "val": "Push and hold"
      },
      {
       "k": "V",
       "tag": "T:3733,3734,3735,3736",
       "text": "Verify that the yellow cross shows momentarily in the flow indicator."
      },
      {
       "k": "A",
       "tag": "T:3733,3734,3735,3736",
       "item": "Regulator selector",
       "val": "Rotate to EMER"
      },
      {
       "k": "X",
       "tag": "T:3733,3734,3735,3736",
       "text": "Continue to hold the TEST/RESET switch down with the regulator selector in the EMER position for 5 seconds. Verify that the yellow cross shows continuously in the flow indicator."
      },
      {
       "k": "V",
       "tag": "T:3733,3734,3735,3736",
       "text": "Verify that the crew oxygen pressure does not decrease more than 100 psig."
      },
      {
       "k": "V",
       "tag": "T:3733,3734,3735,3736",
       "text": "If the oxygen cylinder valve is not in the full open position, pressure can: decrease rapidly, or decrease more than 100 psig, or increase slowly back to normal."
      },
      {
       "k": "X",
       "tag": "T:3733,3734,3735,3736",
       "text": "Release the TEST/RESET switch and rotate the regulator selector to 100%. Verify that the yellow cross does not show in the flow indicator."
      },
      {
       "k": "A",
       "tag": "T:3733,3734,3735,3736",
       "item": "Crew oxygen pressure",
       "val": "Check"
      },
      {
       "k": "V",
       "tag": "T:3733,3734,3735,3736",
       "text": "Verify that the pressure is sufficient for dispatch."
      },
      {
       "k": "H",
       "tag": "T:3730,3731,3732,3741",
       "text": "UP-B3730, UP-B3731 ,UP-B3732, UP-B3741:"
      },
      {
       "k": "A",
       "tag": "T:3730,3731,3732,3741",
       "item": "Oxygen pressure drop",
       "val": "Test"
      },
      {
       "k": "X",
       "tag": "T:3730,3731,3732,3741",
       "text": "Note the crew oxygen pressure."
      },
      {
       "k": "A",
       "tag": "T:3730,3731,3732,3741",
       "item": "Oxygen mask",
       "val": "Stowed and doors closed"
      },
      {
       "k": "A",
       "tag": "T:3730,3731,3732,3741",
       "item": "TEST/RESET switch",
       "val": "Push and hold"
      },
      {
       "k": "V",
       "tag": "T:3730,3731,3732,3741",
       "text": "Verify that the yellow cross shows momentarily in the flow indicator."
      },
      {
       "k": "A",
       "tag": "T:3730,3731,3732,3741",
       "item": "EMERGENCY/Test selector",
       "val": "Push and hold"
      },
      {
       "k": "X",
       "tag": "T:3730,3731,3732,3741",
       "text": "Continue to hold the TEST/RESET switch down and push the EMERGENCY/Test selector for 5 seconds. Verify that the yellow cross shows continuously in the flow indicator."
      },
      {
       "k": "V",
       "tag": "T:3730,3731,3732,3741",
       "text": "Verify that the crew oxygen pressure does not decrease more than 100 psig."
      },
      {
       "k": "V",
       "tag": "T:3730,3731,3732,3741",
       "text": "If the oxygen cylinder valve is not in the full open position, pressure can: decrease rapidly, or decrease more than 100 psig, or increase slowly back to normal."
      },
      {
       "k": "X",
       "tag": "T:3730,3731,3732,3741",
       "text": "Release the TEST/RESET switch and the EMERGENCY/Test selector. Verify that the yellow cross does not show in the flow indicator."
      },
      {
       "k": "A",
       "tag": "T:3730,3731,3732,3741",
       "item": "Normal/100% switch",
       "val": "100%"
      },
      {
       "k": "A",
       "tag": "T:3730,3731,3732,3741",
       "item": "Crew oxygen pressure",
       "val": "Check"
      },
      {
       "k": "V",
       "tag": "T:3730,3731,3732,3741",
       "text": "Verify that the pressure is sufficient for dispatch."
      }
     ]
    },
    {
     "who": "B",
     "panel": "Maintenance documents",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "25",
      "pdf": "93"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Maintenance documents",
       "val": "Check"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that maintenance status is acceptable for flight and ensure MEL/CDL items are in agreement with authorized dispatch deviations, if required."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Both the Commander and the First Officer must check the aircraft serviceability through the Aircraft Technical Log Book (ATLB), in particular the Maintenance Service Check (MSC) expiration (CL 24hr, NG 48hrs)."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Inform other crew member(s) about deferred maintenance items or other technical issues from maintenance records."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Flight deck door",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "26",
      "pdf": "94"
     },
     "tag": "",
     "lines": [
      {
       "k": "N",
       "tag": "",
       "text": "Perform the entire cockpit security check together with the steps of Preliminary Preflight Procedure (for details OM-A Chapter 10, if needed)"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Flight Deck Door Access procedure",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "FLIGHT DECK ACCESS SYSTEM switch",
       "val": "Guard closed"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Observer’s Workplace",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "26",
      "pdf": "94"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "At Observer’s Workplace:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Open and check seat for functionality"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Check that microphone (and headphones, if installed) is connected"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Check oxygen mask, smoke goggles and other emergency equipment"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Gear Manual Release Door",
       "val": "Open and Check"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "FIRST OFFICER’S side",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "26",
      "pdf": "94"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "At FIRST OFFICER’S side:"
      },
      {
       "k": "A",
       "tag": "",
       "item": "QRH Storage",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Area behind the pedals",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Sunvisors Storage",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Emergency equipment (RHS)",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Fire extinguisher",
       "val": "Checked and stowed"
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) Crew oxygen valve",
       "val": "Open"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Circuit breakers (P6 panel)",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "CCTV (if installed)",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Escape rope (RHS)",
       "val": "Stowed"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Aft Overhead Panel: Flight recorder",
     "mock": {
      "img": "ovh",
      "x": 0.6478,
      "y": 0.1844
     },
     "mockNG": null,
     "page": {
      "ch": "26",
      "pdf": "94"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Aft Overhead Panel"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Flight recorder switch",
       "val": "Guard closed"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the OFF light is illuminated"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Aft Overhead Panel: MACH AIRSPEED WARNING TEST",
     "mock": {
      "img": "ovh",
      "x": 0.7363,
      "y": 0.1844
     },
     "mockNG": null,
     "page": {
      "ch": "26",
      "pdf": "94"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "MACH AIRSPEED WARNING TEST switches",
       "val": "Push, one at a time"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify the clacker sounds."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Aft Overhead Panel: STALL WARNING TEST",
     "mock": {
      "img": "ovh",
      "x": 0.6906,
      "y": 0.2302
     },
     "mockNG": null,
     "page": {
      "ch": "26",
      "pdf": "94"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "STALL WARNING TEST switches",
       "val": "Push and hold, one at a time"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that each control column vibrates when the respective switch is pushed."
      },
      {
       "k": "N",
       "tag": "",
       "text": "The stall warning test requires that AC transfer busses are powered for up to 4 minutes."
      },
      {
       "k": "N",
       "tag": "",
       "text": "With hydraulic power off, the leading edge flaps may droop enough to cause an asymmetry signal, resulting in a failure of the stall warning system test. Should this occur, obtain a clearance to pressurize the hydraulic system, place the “B” system electric pump ON and retract the flaps. When flaps are retracted repeat the test. At the completion of the test, turn the “B” system electric pump “OFF”."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Emergency EVACUATION",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "26",
      "pdf": "94"
     },
     "tag": "T:3724",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(UP-B3724) Emergency EVACUATION activation switch",
       "val": "Guard closed"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the EVAC light is extinguished"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "ENGINE panel (Aft overhead)",
     "mock": {
      "img": "ovh",
      "x": 0.524,
      "y": 0.1822
     },
     "mockNG": null,
     "page": {
      "ch": "26–27",
      "pdf": "94–95"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "ENGINE panel",
       "val": "Set"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the REVERSER lights are extinguished."
      },
      {
       "k": "V",
       "tag": "NG",
       "text": "(NG) Verify that the ENGINE CONTROL lights are extinguished."
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) EEC switches",
       "val": "ON"
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) PMC switches",
       "val": "ON"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the INOP lights are extinguished."
      },
      {
       "k": "V",
       "tag": "CL",
       "text": "(CL) Verify that the LOW IDLE light is extinguished."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Oxygen panel (Aft overhead)",
     "mock": {
      "img": "ovh",
      "x": 0.5765,
      "y": 0.2467
     },
     "mockNG": null,
     "page": {
      "ch": "27",
      "pdf": "95"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Oxygen panel",
       "val": "Set"
      },
      {
       "k": "N",
       "tag": "",
       "text": "PASSENGER OXYGEN switch activation causes deployment of the passenger oxygen masks."
      },
      {
       "k": "A",
       "tag": "",
       "item": "PASSENGER OXYGEN switch",
       "val": "Guard closed"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the PASS OXY ON light is extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify pressure meets dispatch requirements."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Landing gear indicator lights",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "27",
      "pdf": "95"
     },
     "tag": "NG",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(NG) Landing gear indicator lights",
       "val": "Verify illuminated"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Secondary Landing gear indicator lights",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "27",
      "pdf": "95"
     },
     "tag": "T:3724",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(UP-B3724) Secondary Landing gear indicator lights",
       "val": "Verify illuminated"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "SERVICE INTERPHONE (Aft overhead)",
     "mock": {
      "img": "ovh",
      "x": 0.3938,
      "y": 0.2044
     },
     "mockNG": null,
     "page": {
      "ch": "27",
      "pdf": "95"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "SERVICE INTERPHONE switch",
       "val": "OFF"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "ELT",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "27",
      "pdf": "95"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) ELT switch (as installed)",
       "val": "ARM / AUTO"
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) ELT switch",
       "val": "Guard closed"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the ELT light is extinguished."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "PSEU light",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "27",
      "pdf": "95"
     },
     "tag": "NG",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(NG) PSEU light",
       "val": "Verify extinguished"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "GPS light",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "27",
      "pdf": "95"
     },
     "tag": "NG+T:3721,3729",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(NG and UP-B3721, UP-B3729) GPS light",
       "val": "Verify extinguished"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "ILS / GLS lights",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "27",
      "pdf": "95"
     },
     "tag": "T:3741",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(UP-B3741) ILS light",
       "val": "Verify extinguished"
      },
      {
       "k": "A",
       "tag": "",
       "item": "(UP-B3741) GLS light",
       "val": "Verify extinguished"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Captain’s side",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "27",
      "pdf": "95"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "At Captain’s side:"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Escape rope (LHS)",
       "val": "Stowed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Circuit breakers (control stand, P18 panel)",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Emergency equipment (LHS)",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Sunvisors Storage",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Area behind the pedals",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "QRH Storage",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "PBE",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Landing gear pins",
       "val": "3 Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Pitot covers",
       "val": "4 Check"
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) Nose wheel viewer",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Crash axe",
       "val": "Stowed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Coat Storage",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Documents (in accordance with SCAT E-library, PDF file “E-Lib LOG”)",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Other needed equipment",
       "val": "Checked and stowed"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Parking brake",
     "mock": {
      "img": "aft",
      "x": 0.3135,
      "y": 0.3297
     },
     "mockNG": null,
     "page": {
      "ch": "27",
      "pdf": "95"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Parking brake",
       "val": "As needed"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Set the parking brake if brake wear indicators will be checked during the exterior inspection"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Flight deck entry video panel/display",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "28",
      "pdf": "96"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Flight deck entry video panel/display",
       "val": "Check/ON"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Switch on the system and verify correct operation and orientation of the three cameras."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Leave the system ON until before taxi."
      }
     ]
    },
    {
     "who": "CFO",
     "panel": "PA and Interphone",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "28",
      "pdf": "96"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "PA and Interphone",
       "val": "Check"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Captain or F/O makes a call via PA system and verify proper operation."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Ask flight attendants to call flight deck from each single flight attendant station; verify chime sounds and the blue CALL light on the fwd overhead panel illuminates than establish two way communications via interphone from flight deck to any single flight attendant station."
      }
     ]
    },
    {
     "who": "B",
     "panel": "EFB",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "28",
      "pdf": "96"
     },
     "tag": "",
     "lines": [
      {
       "k": "N",
       "tag": "",
       "text": "Each pilot complete EFB Pre-Flight Checklist."
      }
     ]
    }
   ]
  },
  {
   "id": "refuel",
   "title": "Refueling (2.2.10.1)",
   "section": "2.2.10.1",
   "pages": {
    "ch": "28–30",
    "pdf": "96–98"
   },
   "trigger": [
    "Refueling procedure is extracted from SP.12.2 and inserted for the logical sequence of the flight preparation."
   ],
   "intro": [
    "Fuel quantity calculation is performing using remain fuel in ATLB, corrected total fuel in OFP and fuel density.",
    "If fuel is available upon arrival of crew, start the refueling process as soon as possible to decrease the possibility of delay."
   ],
   "who": "Не указано в документе",
   "callouts": [],
   "rows": [
    {
     "who": "-",
     "panel": "Refueling",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "28",
      "pdf": "96"
     },
     "tag": "",
     "lines": [
      {
       "k": "N",
       "tag": "",
       "text": "Remain fuel in ATLB should be equal with remain fuel on board"
      }
     ]
    },
    {
     "who": "-",
     "panel": "Fuel Load Distribution",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "28",
      "pdf": "96"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Main tanks No. 1 and No. 2 should normally be serviced equally until full. Additional fuel is loaded into the center tank until the desired fuel load is reached."
      },
      {
       "k": "N",
       "tag": "NG",
       "text": "for NG only: If required amount of fuel for flight is less than 19500 kg, fuel filling to each wing tanks 3700 kg is a good practice (please take into account fuel density and ambient temperature).This note protect crew from fuel spilling."
      },
      {
       "k": "H",
       "tag": "T:3721,3722,3723",
       "text": "UP-B3721, UP-B3722, UP-B3723"
      },
      {
       "k": "N",
       "tag": "T:3721,3722,3723",
       "text": "Main tanks No. 1 and No. 2 must be scheduled to be full if the center tank contains more than 1000 pounds of fuel. With less than 1000 pounds of center tank fuel, partial main tank fuel may be loaded provided the effects of balance have been considered."
      },
      {
       "k": "H",
       "tag": "T:3724,3729",
       "text": "UP-B3724, UP-B3729"
      },
      {
       "k": "N",
       "tag": "T:3724,3729",
       "text": "Main tanks No. 1 and No. 2 must be scheduled to be full if the center tank contains more than 453 kilograms of fuel. With less than 453 kilograms of center tank fuel, partial main tank fuel may be loaded provided the effects of balance have been considered."
      }
     ]
    },
    {
     "who": "-",
     "panel": "Fuel Pressure",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "28",
      "pdf": "96"
     },
     "tag": "",
     "lines": [
      {
       "k": "H",
       "tag": "T:3721,3722,3723",
       "text": "UP-B3721, UP-B3722, UP-B3723"
      },
      {
       "k": "X",
       "tag": "T:3721,3722,3723",
       "text": "Apply from a truck or fuel pit. A nozzle pressure of 50 psi provides approximately 300 U.S. gallons per minute."
      },
      {
       "k": "H",
       "tag": "T:3724,3729",
       "text": "UP-B3724, UP-B3729"
      },
      {
       "k": "X",
       "tag": "T:3724,3729",
       "text": "Apply from a truck or fuel pit. A nozzle pressure of 50 psi provides approximately 1136 liters per minute."
      }
     ]
    },
    {
     "who": "-",
     "panel": "Normal Refueling",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "29",
      "pdf": "97"
     },
     "tag": "",
     "lines": [
      {
       "k": "H",
       "tag": "CL",
       "text": "For CL only"
      },
      {
       "k": "X",
       "tag": "CL",
       "text": "When a full fuel load is required, the fuel shutoff system closes the fuelling valves automatically when the tanks are full. When a partial fuel load is required, the fuel quantity indicators are monitored and the fuelling valves are closed by manually positioning the fuelling valve switches to CLOSED when the desired fuel quantity is aboard the airplane."
      },
      {
       "k": "H",
       "tag": "NG",
       "text": "For NG only"
      },
      {
       "k": "X",
       "tag": "NG",
       "text": "The RH tank fuels slightly faster than the left-hand (LH) tank."
      },
      {
       "k": "X",
       "tag": "NG",
       "text": "Fuel the RH tank part way, approximately 80%, and then wait approximately 6 to 7 minutes to let the cold and warm fuel mix enough for the indication to be more representative of the actual fuel quantity in the tank. During this time, the LH tank may be fueled while waiting for the fuel to mix in the RH tank. The same procedure is needed for LH tank to let the cold and warm fuel mix enough."
      },
      {
       "k": "X",
       "tag": "NG",
       "text": "To prevent fuel spilling follow next steps:"
      },
      {
       "k": "X",
       "tag": "NG",
       "text": "1. Do not use the Manual Override button unless there is a known FQIS issue, and fuel quantity is detected using other means (fuel measuring sticks). a. There is a possibility of the button sticking."
      },
      {
       "k": "X",
       "tag": "NG",
       "text": "2. If a refuel gauge starts to flash, urgently ask to release the \"deadman\" switch immediately to prevent a fuel spill. a. The flashing gauge indicates a tank which is volumetrically full as calculated by the computer. b. The refuel valve can fail to close or the float switch can fail to open resulting in over filling the tank and eventually a fuel spill."
      },
      {
       "k": "X",
       "tag": "NG",
       "text": "3. Make sure that refuel pressure is between 35 psi and 55 psi."
      },
      {
       "k": "N",
       "tag": "NG",
       "text": "If there is fuel temperature stratification (cold fuel at the compensator and warm fuel added on top) it is possible that the gauge will not flash before a fuel spill occurs."
      },
      {
       "k": "N",
       "tag": "NG",
       "text": "If required amount of fuel for flight is less than 19500 kg, fuel filling to each wing tanks 3700 kg is a good practice (please take into account fuel density and ambient temperature).This note protect crew from fuel spilling."
      }
     ]
    },
    {
     "who": "-",
     "panel": "Refuelling with Battery Only",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "29",
      "pdf": "97"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "When the APU is inoperative and no external power source is available, refuelling can be accomplished as follows:"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Battery switch",
       "val": "ON"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Standby power switch",
       "val": "BAT"
      },
      {
       "k": "X",
       "tag": "",
       "text": "The battery operates the entire fuelling system normally, including the gages and fuel shutoff system. The only limitation during this type of operation is the battery life."
      }
     ]
    },
    {
     "who": "-",
     "panel": "Refuelling with No AC or DC Power Source Available",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "29–30",
      "pdf": "97–98"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "When it becomes necessary to refuel with the APU inoperative, the aircraft battery depleted, and no external power source available, refuelling can still be accomplished:"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Fuelling hose nozzle",
       "val": "Attached to the refuelling receptacle"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Fuelling valves",
       "val": "Open for the tanks to be refuelled"
      },
      {
       "k": "N",
       "tag": "",
       "text": "Main tanks No. 1 and No. 2, and the center tank refuelling valves each have a red override button that must be pressed and held while fuel is being pumped into the tank. Releasing the override button allows the spring in the valve to close the valve."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Caution must be observed not to overfill a tank, since there is no automatic fuel shutoff during manual operation. When the desired amount of fuel has been pumped into the tanks, the refuelling valves for the respective tanks can be released. Main tanks No. 1 and No. 2 may also be refueled through filler ports over the wing. It is not possible to refuel the center tank externally."
      },
      {
       "k": "N",
       "tag": "",
       "text": "If Ground Transfer of Fuel need use FCOM SP.12.3"
      }
     ]
    }
   ]
  },
  {
   "id": "pfo",
   "title": "Preflight Procedure – First Officer",
   "section": "2.2.13",
   "pages": {
    "ch": "36–49",
    "pdf": "104–117"
   },
   "trigger": [
    "Initiate procedure after Captain Call “PREFLIGHT Procedure”"
   ],
   "intro": [
    "The first officer normally does this procedure. The captain shall do this procedure if required."
   ],
   "who": "First Officer (Captain if required)",
   "callouts": [
    {
     "who": "C",
     "text": "PREFLIGHT Procedure"
    }
   ],
   "rows": [
    {
     "who": "FO",
     "panel": "Flight control panel",
     "mock": {
      "img": "ovh",
      "x": 0.0571,
      "y": 0.4542
     },
     "mockNG": null,
     "page": {
      "ch": "36",
      "pdf": "104"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Flight control panel",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "FLIGHT CONTROL switches",
       "val": "Guards closed"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the flight control LOW PRESSURE lights are illuminated."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Flight SPOILER switches",
       "val": "Guards closed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "YAW DAMPER switch",
       "val": "ON"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the YAW DAMPER light is extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the standby hydraulic LOW QUANTITY light is extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the standby hydraulic LOW PRESSURE light is extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "For those airplanes with Rudder System Enhancement Program (RSEP) modification, verify that the STBY RUD ON light is extinguished."
      },
      {
       "k": "A",
       "tag": "",
       "item": "ALTERNATE FLAPS master switch",
       "val": "Guard closed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "ALTERNATE FLAPS position switch",
       "val": "OFF"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the FEEL DIFF PRESS light is extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the SPEED TRIM FAIL light is extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the MACH TRIM FAIL light is extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the AUTO SLAT FAIL light is extinguished."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Instrument and NAV transfer switches",
     "mock": {
      "img": "ovh",
      "x": 0.0913,
      "y": 0.6347
     },
     "mockNG": null,
     "page": {
      "ch": "36–37",
      "pdf": "104–105"
     },
     "tag": "CL",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(CL) Instrument and NAV transfer switches",
       "val": "Set"
      },
      {
       "k": "H",
       "tag": "T:3721,3724,3729",
       "text": "UP-B3721, UP-B3724, UP-B3729"
      },
      {
       "k": "A",
       "tag": "T:3721,3724,3729",
       "item": "VHF NAV transfer switch",
       "val": "NORMAL"
      },
      {
       "k": "H",
       "tag": "T:3721",
       "text": "UP-B3721"
      },
      {
       "k": "A",
       "tag": "T:3721",
       "item": "Compass transfer switch",
       "val": "NORMAL"
      },
      {
       "k": "A",
       "tag": "",
       "item": "IRS transfer switch",
       "val": "NORMAL"
      },
      {
       "k": "A",
       "tag": "",
       "item": "EFI transfer switch",
       "val": "NORMAL"
      },
      {
       "k": "H",
       "tag": "T:3721",
       "text": "UP-B3721"
      },
      {
       "k": "A",
       "tag": "T:3721",
       "item": "FMC source selector switch",
       "val": "NORMAL"
      },
      {
       "k": "Q",
       "tag": "",
       "text": "Заголовки бортов «UP-B3721, UP-B3724, UP-B3729» и «UP-B3721» стоят над отдельными строками; из документа неясно, относятся ли IRS transfer switch и EFI transfer switch ко всем бортам Classic или только к UP-B3721. Показано без ограничения по бортам."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "NAVIGATION panel",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "37",
      "pdf": "105"
     },
     "tag": "NG",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(NG) NAVIGATION panel",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "",
       "item": "VHF NAV transfer switch",
       "val": "NORMAL"
      },
      {
       "k": "A",
       "tag": "",
       "item": "IRS transfer switch",
       "val": "NORMAL"
      },
      {
       "k": "A",
       "tag": "",
       "item": "FMC transfer switch",
       "val": "NORMAL"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "DISPLAYS panel",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "37",
      "pdf": "105"
     },
     "tag": "NG",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(NG) DISPLAYS panel",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "",
       "item": "SOURCE selector",
       "val": "AUTO"
      },
      {
       "k": "A",
       "tag": "",
       "item": "CONTROL PANEL select switch",
       "val": "NORMAL"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Fuel panel",
     "mock": {
      "img": "ovh",
      "x": 0.0942,
      "y": 0.7822
     },
     "mockNG": null,
     "page": {
      "ch": "37",
      "pdf": "105"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Fuel panel",
       "val": "Set"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the FUEL VALVE CLOSED lights are illuminated dim."
      },
      {
       "k": "V",
       "tag": "NG",
       "text": "(NG) Verify that the SPAR VALVE CLOSED lights are illuminated dim."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the FILTER BYPASS lights are extinguished."
      },
      {
       "k": "A",
       "tag": "",
       "item": "CROSSFEED selector",
       "val": "Closed"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the VALVE OPEN light is extinguished."
      },
      {
       "k": "A",
       "tag": "",
       "item": "FUEL PUMP witches",
       "val": "OFF (or as needed for APU operation)"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the centre tank fuel pump LOW PRESSURE lights are extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the main tank fuel pump LOW PRESSURE lights are illuminated."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Electrical panel",
     "mock": {
      "img": "ovh",
      "x": 0.2454,
      "y": 0.52
     },
     "mockNG": null,
     "page": {
      "ch": "37–38",
      "pdf": "105–106"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Electrical panel",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "",
       "item": "BATTERY switch",
       "val": "Guard closed"
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) GALLEY power switch",
       "val": "ON"
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) CAB/UTIL power switch",
       "val": "ON"
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) IFE/PASS SEAT power switch",
       "val": "ON"
      },
      {
       "k": "A",
       "tag": "",
       "item": "STANDBY POWER switch",
       "val": "Guard closed"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the STANDBY PWR OFF light is extinguished."
      },
      {
       "k": "V",
       "tag": "NG",
       "text": "(NG) Verify that the BAT DISCHARGE light is extinguished."
      },
      {
       "k": "V",
       "tag": "NG",
       "text": "(NG) Verify that the TR UNIT light is extinguished."
      },
      {
       "k": "V",
       "tag": "NG",
       "text": "(NG) Verify that the ELEC light is extinguished"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Generator drive DISCONNECT switches",
       "val": "Guards closed"
      },
      {
       "k": "V",
       "tag": "CL",
       "text": "(CL) Verify that the LOW OIL PRESSURE lights are illuminated."
      },
      {
       "k": "V",
       "tag": "CL",
       "text": "(CL) Verify that the HIGH OIL TEMP lights are extinguished."
      },
      {
       "k": "V",
       "tag": "NG",
       "text": "(NG) Verify that the DRIVE lights are illuminated."
      },
      {
       "k": "A",
       "tag": "",
       "item": "BUS TRANSFER switch",
       "val": "Guard closed"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the TRANSFER BUS OFF lights are extinguished."
      },
      {
       "k": "V",
       "tag": "CL",
       "text": "(CL) Verify that the BUS OFF lights are extinguished."
      },
      {
       "k": "V",
       "tag": "NG",
       "text": "(NG) Verify that the SOURCE OFF lights are extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the GEN OFF BUS lights are illuminated."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Overheat and fire protection panel",
     "mock": {
      "img": "aft",
      "x": 0.452,
      "y": 0.4108
     },
     "mockNG": {
      "img": "ngped",
      "x": 0.4916,
      "y": 0.8133
     },
     "page": {
      "ch": "38",
      "pdf": "106"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Overheat and fire protection panel",
       "val": "Check"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Do this check if the flight crew did not do the Electrical Power Up supplementary procedure. This check is needed once per a flight day."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "APU",
     "mock": {
      "img": "ovh",
      "x": 0.3025,
      "y": 0.9333
     },
     "mockNG": {
      "img": "ngovh",
      "x": 0.4541,
      "y": 0.3901
     },
     "page": {
      "ch": "38",
      "pdf": "106"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "APU switch (as needed)",
       "val": "START"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Do APU start as provided in the Electrical Power Up procedure"
      },
      {
       "k": "N",
       "tag": "",
       "text": "If extended APU operation is needed on the ground and the airplane buses are powered by AC electrical power, position an AC powered fuel pump ON. This extends the service life of the APU fuel control unit."
      },
      {
       "k": "N",
       "tag": "",
       "text": "If fuel is loaded in the center tank, position the left center tank fuel pump switch ON to prevent a fuel imbalance before takeoff."
      },
      {
       "k": "H",
       "tag": "T:3721,3722,3723",
       "text": "UP-B3721, UP-B3722, UP-B3723"
      },
      {
       "k": "C",
       "tag": "T:3721,3722,3723",
       "text": "Position the center tank fuel pump switches ON only if the fuel quantity in the center tank exceeds 1000 lbs."
      },
      {
       "k": "C",
       "tag": "",
       "text": "Position the center tank fuel pump switches ON only if the fuel quantity in the center tank exceeds 453 kgs."
      },
      {
       "k": "C",
       "tag": "",
       "text": "Do not operate the center tank fuel pumps with the flight deck unattended."
      },
      {
       "k": "Q",
       "tag": "",
       "text": "CAUTION «exceeds 453 kgs» стоит без заголовка бортов сразу после блока «UP-B3721, UP-B3722, UP-B3723 … 1000 lbs». Из документа неясно, к каким бортам он относится. Показано для всех."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Lavatory SMOKE light",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "38",
      "pdf": "106"
     },
     "tag": "",
     "lines": [
      {
       "k": "H",
       "tag": "",
       "text": "UP-B3729"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Lavatory SMOKE light",
       "val": "Verify extinguished"
      },
      {
       "k": "Q",
       "tag": "",
       "text": "Заголовок «UP-B3729» стоит отдельной строкой между CAUTION и «Lavatory SMOKE light». Неясно, относится ли он к Lavatory SMOKE light или к предыдущему CAUTION. Показано в обеих частях с заголовком как в документе."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "EQUIPMENT COOLING",
     "mock": {
      "img": "ovh",
      "x": 0.3739,
      "y": 0.6098
     },
     "mockNG": null,
     "page": {
      "ch": "38",
      "pdf": "106"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "EQUIPMENT COOLING switches",
       "val": "NORM"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the OFF lights are extinguished."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "EMERGENCY EXIT LIGHTS",
     "mock": {
      "img": "ovh",
      "x": 0.3978,
      "y": 0.6822
     },
     "mockNG": null,
     "page": {
      "ch": "38",
      "pdf": "106"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "EMERGENCY EXIT LIGHTS switch",
       "val": "Guard closed"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the NOT ARMED light is extinguished."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Passenger signs",
     "mock": {
      "img": "ovh",
      "x": 0.3921,
      "y": 0.7311
     },
     "mockNG": null,
     "page": {
      "ch": "38",
      "pdf": "106"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Passenger signs",
       "val": "NO SMOKING switch - ON"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Passenger signs",
       "val": "FASTEN BELTS switch – ON (during refuelling OFF)"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Windshield wiper",
     "mock": {
      "img": "ovh",
      "x": 0.3938,
      "y": 0.8689
     },
     "mockNG": {
      "img": "ngovh",
      "x": 0.4495,
      "y": 0.3591
     },
     "page": {
      "ch": "38",
      "pdf": "106"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) Windshield WIPER selector",
       "val": "OFF"
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) Windshield WIPER selectors",
       "val": "PARK"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the windshield wipers are stowed."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "WINDOW HEAT",
     "mock": {
      "img": "ovh",
      "x": 0.5137,
      "y": 0.4187
     },
     "mockNG": null,
     "page": {
      "ch": "38",
      "pdf": "106"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "WINDOW HEAT switches",
       "val": "ON"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Position switches ON at least 10 minutes before takeoff."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the OVERHEAT lights are extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the ON lights are illuminated (except at high ambient temperatures.)"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "PITOT STATIC / PROBE HEAT",
     "mock": {
      "img": "ovh",
      "x": 0.5023,
      "y": 0.4498
     },
     "mockNG": null,
     "page": {
      "ch": "38–39",
      "pdf": "106–107"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) PITOT STATIC switches",
       "val": "OFF"
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) PROBE HEAT switches",
       "val": "OFF"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that all lights are illuminated."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "WING ANTI-ICE",
     "mock": {
      "img": "ovh",
      "x": 0.4852,
      "y": 0.552
     },
     "mockNG": null,
     "page": {
      "ch": "39",
      "pdf": "107"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "WING ANTI-ICE switch",
       "val": "OFF"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the VALVE OPEN lights are extinguished."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "ENGINE ANTI-ICE",
     "mock": {
      "img": "ovh",
      "x": 0.5571,
      "y": 0.5564
     },
     "mockNG": null,
     "page": {
      "ch": "39",
      "pdf": "107"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "ENGINE ANTI-ICE switches",
       "val": "OFF"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the COWL ANTI-ICE lights are extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the COWL VALVE OPEN lights are extinguished."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Hydraulic panel",
     "mock": {
      "img": "ovh",
      "x": 0.5205,
      "y": 0.64
     },
     "mockNG": null,
     "page": {
      "ch": "39",
      "pdf": "107"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Hydraulic panel",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "",
       "item": "ENGINE HYDRAULIC PUMPS switches",
       "val": "ON"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the LOW PRESSURE lights are illuminated."
      },
      {
       "k": "A",
       "tag": "",
       "item": "ELECTRIC HYDRAULIC PUMPS switches",
       "val": "OFF"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the OVERHEAT lights are extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the LOW PRESSURE lights are illuminated."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Air Conditioning Pneumatics panel",
     "mock": {
      "img": "ovh",
      "x": 0.6884,
      "y": 0.4476
     },
     "mockNG": null,
     "page": {
      "ch": "39–40",
      "pdf": "107–108"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Air Conditioning Pneumatics panel",
       "val": "Set"
      },
      {
       "k": "H",
       "tag": "T:3730,3731,3732,3733,3734,3735,3736,3741",
       "text": "UP-B3730, UP-B3731, UP-B3732, UP-B3733, UP-B3734, UP-B3735, UP-B3736, UP-B3741"
      },
      {
       "k": "A",
       "tag": "T:3730,3731,3732,3733,3734,3735,3736,3741",
       "item": "TRIM AIR switch",
       "val": "ON"
      },
      {
       "k": "A",
       "tag": "",
       "item": "AIR TEMPERATURE source selector",
       "val": "As needed"
      },
      {
       "k": "H",
       "tag": "CL+T:3725",
       "text": "CL and UP-B3725"
      },
      {
       "k": "V",
       "tag": "CL+T:3725",
       "text": "Verify that the DUCT OVERHEAT lights are extinguished"
      },
      {
       "k": "H",
       "tag": "T:3730,3731,3732,3733,3734,3735,3736,3741",
       "text": "UP-B3730, UP-B3731, UP-B3732, UP-B3733, UP-B3734, UP-B3735, UP-B3736, UP-B3741"
      },
      {
       "k": "V",
       "tag": "T:3730,3731,3732,3733,3734,3735,3736,3741",
       "text": "Verify that the ZONE TEMP lights are extinguished"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Temperature selector",
       "val": "As needed"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the RAM DOOR FULL OPEN lights are illuminated."
      },
      {
       "k": "H",
       "tag": "CL+T:3725",
       "text": "CL and UP-B3725"
      },
      {
       "k": "A",
       "tag": "CL+T:3725",
       "item": "RECIRCULATION FAN switch",
       "val": "AUTO"
      },
      {
       "k": "H",
       "tag": "T:3730,3731,3732,3733,3734,3735,3736,3741",
       "text": "UP-B3730, UP-B3731, UP-B3732, UP-B3733, UP-B3734, UP-B3735, UP-B3736, UP-B3741"
      },
      {
       "k": "A",
       "tag": "T:3730,3731,3732,3733,3734,3735,3736,3741",
       "item": "RECIRCULATION FAN switches",
       "val": "AUTO"
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) Air conditioning PACK switches",
       "val": "One switch AUTO or HIGH, one switch OFF"
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) Air conditioning PACK switches",
       "val": "AUTO or HIGH"
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) ISOLATION VALVE switch",
       "val": "AUTO"
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) ISOLATION VALVE switch",
       "val": "OPEN"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Engine BLEED air switches",
       "val": "ON"
      },
      {
       "k": "A",
       "tag": "",
       "item": "APU BLEED air switch",
       "val": "ON"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the DUAL BLEED light is illuminated."
      },
      {
       "k": "H",
       "tag": "CL+T:3725",
       "text": "CL and UP-B3725"
      },
      {
       "k": "V",
       "tag": "CL+T:3725",
       "text": "Verify that the PACK TRIP OFF lights are extinguished."
      },
      {
       "k": "H",
       "tag": "T:3730,3731,3732,3733,3734,3735,3736,3741",
       "text": "UP-B3730, UP-B3731, UP-B3732, UP-B3733, UP-B3734, UP-B3735, UP-B3736, UP-B3741"
      },
      {
       "k": "V",
       "tag": "T:3730,3731,3732,3733,3734,3735,3736,3741",
       "text": "Verify that the PACK lights are extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the WING-BODY OVERHEAT lights are extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the BLEED TRIP OFF lights are extinguished."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Cabin pressurization panel",
     "mock": {
      "img": "ovh",
      "x": 0.6906,
      "y": 0.82
     },
     "mockNG": null,
     "page": {
      "ch": "40",
      "pdf": "108"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Cabin pressurization panel",
       "val": "Set"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the AUTO FAIL light is extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the OFF SCHED DESCENT light is extinguished."
      },
      {
       "k": "A",
       "tag": "",
       "item": "FLIGHT ALTITUDE indicator",
       "val": "Cruise altitude"
      },
      {
       "k": "A",
       "tag": "",
       "item": "LANDING ALTITUDE indicator",
       "val": "Destination field elevation"
      },
      {
       "k": "A",
       "tag": "",
       "item": "CABIN Rate selector (as installed)",
       "val": "Index"
      },
      {
       "k": "A",
       "tag": "",
       "item": "CABIN ALTITUDE (as installed) indicator",
       "val": "200 feet below destination field elevation"
      },
      {
       "k": "A",
       "tag": "",
       "item": "FLT/GRD switch (as installed)",
       "val": "GRD"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Pressurization mode selector",
       "val": "AUTO"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the STANDBY light (as installed) is extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the ALTN light (as installed) is extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the MANUAL light is extinguished."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Lighting panel",
     "mock": {
      "img": "ovh",
      "x": 0.1427,
      "y": 0.9178
     },
     "mockNG": null,
     "page": {
      "ch": "40",
      "pdf": "108"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Lighting panel",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "",
       "item": "LANDING light switches",
       "val": "RETRACT and OFF"
      },
      {
       "k": "A",
       "tag": "",
       "item": "RUNWAY TURNOFF light switches",
       "val": "OFF"
      },
      {
       "k": "A",
       "tag": "",
       "item": "TAXI light switch",
       "val": "OFF"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Ignition select switch",
     "mock": {
      "img": "ovh",
      "x": 0.4195,
      "y": 0.9178
     },
     "mockNG": null,
     "page": {
      "ch": "40",
      "pdf": "108"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Ignition select switch",
       "val": "IGN L or R"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Alternate the ignition select switch position on subsequent starts. At the base where maintenance support is available or the first leg select R"
      },
      {
       "k": "N",
       "tag": "NG",
       "text": "(for NG only): For the first flight of the day, at airport elevation at or above 2000 feet MSL, if the temperature below 5° C, consider placing the Ignitor select switch to BOTH before starting the engines. This may increase the likelihood of a successful engine start on the first attempt."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "ENGINE START switches",
     "mock": {
      "img": "ovh",
      "x": 0.3624,
      "y": 0.9244
     },
     "mockNG": null,
     "page": {
      "ch": "40",
      "pdf": "108"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "ENGINE START switches",
       "val": "OFF"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Lighting panel",
     "mock": {
      "img": "ovh",
      "x": 0.6393,
      "y": 0.9178
     },
     "mockNG": null,
     "page": {
      "ch": "40",
      "pdf": "108"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Lighting panel",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "",
       "item": "LOGO light switch",
       "val": "As needed (as installed)"
      },
      {
       "k": "A",
       "tag": "",
       "item": "STROBE light switch (as installed)",
       "val": "OFF"
      },
      {
       "k": "A",
       "tag": "",
       "item": "POSITION light switch (as installed)",
       "val": "ON or STEADY"
      },
      {
       "k": "A",
       "tag": "",
       "item": "ANTI-COLLISION light switch",
       "val": "OFF"
      },
      {
       "k": "A",
       "tag": "",
       "item": "WING illumination switch",
       "val": "As needed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "WHEEL WELL light switch",
       "val": "As needed"
      },
      {
       "k": "N",
       "tag": "",
       "text": "Switch OFF after exterior inspection is complete."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "HSI Switch",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "40",
      "pdf": "108"
     },
     "tag": "T:3721",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(UP-B3721) HSI Switch",
       "val": "NAV or as needed"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "NAV MODE selector",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "40",
      "pdf": "108"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "NAV MODE selector",
       "val": "As needed"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Mode control panel",
     "mock": {
      "img": "ip",
      "x": 0.4965,
      "y": 0.0569
     },
     "mockNG": null,
     "page": {
      "ch": "40–41",
      "pdf": "108–109"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Mode control panel",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "",
       "item": "COURSE(S)",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "",
       "item": "FLIGHT DIRECTOR switch(-es)",
       "val": "ON"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Move the switch for the pilot flying to ON first."
      },
      {
       "k": "N",
       "tag": "",
       "text": "If F/O move the switch F/D at Captain Side, it can count as good judgement."
      },
      {
       "k": "A",
       "tag": "",
       "item": "BANK ANGLE",
       "val": "CHECK"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "EFIS control panel",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "41",
      "pdf": "109"
     },
     "tag": "NG",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(NG) EFIS control panel",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "",
       "item": "MINIMUMS reference selector",
       "val": "RADIO or BARO"
      },
      {
       "k": "A",
       "tag": "",
       "item": "MINIMUMS selector",
       "val": "Set Engine Failure Flaps Retraction Altitude"
      },
      {
       "k": "A",
       "tag": "",
       "item": "FLIGHT PATH VECTOR switch",
       "val": "As needed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "METERS switch",
       "val": "As needed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "BAROMETRIC reference selector",
       "val": "IN or HPA"
      },
      {
       "k": "A",
       "tag": "",
       "item": "BAROMETRIC selector",
       "val": "Set local altimeter setting"
      },
      {
       "k": "A",
       "tag": "",
       "item": "VOR/ADF switches",
       "val": "As needed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Mode selector",
       "val": "MAP"
      },
      {
       "k": "A",
       "tag": "",
       "item": "CENTRE switch",
       "val": "As needed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Range selector",
       "val": "As needed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "TRAFFIC switch",
       "val": "As needed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "WEATHER RADAR",
       "val": "Off"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the weather radar indications are not shown on the MAP."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Map switches",
       "val": "As needed"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Oxygen (crew mask)",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "41–43",
      "pdf": "109–111"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Oxygen",
       "val": "Test and set"
      },
      {
       "k": "H",
       "tag": "CL",
       "text": "CL"
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "Oxygen",
       "val": "Test and set"
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "Oxygen mask",
       "val": "Stowed and doors closed"
      },
      {
       "k": "H",
       "tag": "CL",
       "text": "UP-B3721, UP-B3722, UP-B3723, UP-B3724, UP-B3729"
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "RESET/TEST switch",
       "val": "Slide down and hold"
      },
      {
       "k": "V",
       "tag": "CL",
       "text": "Verify that the yellow cross shows momentarily in the flow indicator."
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "RESET/TEST switch",
       "val": "Release"
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "Normal/100% selector",
       "val": "100%"
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "EMERGENCY/TEST selector",
       "val": "Normal (non-emergency)"
      },
      {
       "k": "H",
       "tag": "NG",
       "text": "NG"
      },
      {
       "k": "H",
       "tag": "T:3725",
       "text": "UP-B3725"
      },
      {
       "k": "A",
       "tag": "T:3725",
       "item": "Oxygen pressure drop",
       "val": "Test"
      },
      {
       "k": "X",
       "tag": "T:3725",
       "text": "Note the crew oxygen pressure."
      },
      {
       "k": "A",
       "tag": "T:3725",
       "item": "Oxygen mask",
       "val": "Stowed and doors closed"
      },
      {
       "k": "A",
       "tag": "T:3725",
       "item": "RESET/TEST switch",
       "val": "Push and hold"
      },
      {
       "k": "V",
       "tag": "T:3725",
       "text": "Verify that the yellow cross shows momentarily in the flow indicator."
      },
      {
       "k": "A",
       "tag": "T:3725",
       "item": "EMERGENCY/Test selector",
       "val": "Push and hold"
      },
      {
       "k": "X",
       "tag": "T:3725",
       "text": "Continue to hold the RESET/TEST switch down and push the EMERGENCY/Test selector for 5 seconds. Verify that the yellow cross shows continuously in the flow indicator."
      },
      {
       "k": "V",
       "tag": "T:3725",
       "text": "Verify that the crew oxygen pressure does not decrease more than 100 psig."
      },
      {
       "k": "V",
       "tag": "T:3725",
       "text": "If the oxygen cylinder valve is not in the full open position, pressure can: decrease rapidly, or decrease more than 100 psig, or increase slowly back to normal."
      },
      {
       "k": "X",
       "tag": "T:3725",
       "text": "Release the RESET/TEST switch and the EMERGENCY/Test selector."
      },
      {
       "k": "V",
       "tag": "T:3725",
       "text": "Verify that the yellow cross does not show in the flow indicator."
      },
      {
       "k": "A",
       "tag": "T:3725",
       "item": "Normal/100% switch",
       "val": "100%"
      },
      {
       "k": "A",
       "tag": "T:3725",
       "item": "Crew oxygen pressure",
       "val": "Check"
      },
      {
       "k": "V",
       "tag": "T:3725",
       "text": "Verify that the pressure is sufficient for dispatch."
      },
      {
       "k": "H",
       "tag": "T:3730,3731,3732,3741",
       "text": "UP-B3730, UP-B3731, UP-B3732, UP-B3741"
      },
      {
       "k": "A",
       "tag": "T:3730,3731,3732,3741",
       "item": "Oxygen pressure drop",
       "val": "Test"
      },
      {
       "k": "X",
       "tag": "T:3730,3731,3732,3741",
       "text": "Note the crew oxygen pressure."
      },
      {
       "k": "A",
       "tag": "T:3730,3731,3732,3741",
       "item": "Oxygen mask",
       "val": "Stowed and doors closed"
      },
      {
       "k": "A",
       "tag": "T:3730,3731,3732,3741",
       "item": "TEST/RESET switch",
       "val": "Push and hold"
      },
      {
       "k": "V",
       "tag": "T:3730,3731,3732,3741",
       "text": "Verify that the yellow cross shows momentarily in the flow indicator."
      },
      {
       "k": "A",
       "tag": "T:3730,3731,3732,3741",
       "item": "EMERGENCY/Test selector",
       "val": "Push and hold"
      },
      {
       "k": "X",
       "tag": "T:3730,3731,3732,3741",
       "text": "Continue to hold the TEST/RESET switch down and push the EMERGENCY/Test selector for 5 seconds. Verify that the yellow cross shows continuously in the flow indicator."
      },
      {
       "k": "V",
       "tag": "T:3730,3731,3732,3741",
       "text": "Verify that the crew oxygen pressure does not decrease more than 100 psig."
      },
      {
       "k": "V",
       "tag": "T:3730,3731,3732,3741",
       "text": "If the oxygen cylinder valve is not in the full open position, pressure can: decrease rapidly, or decrease more than 100 psig, or increase slowly back to normal."
      },
      {
       "k": "X",
       "tag": "T:3730,3731,3732,3741",
       "text": "Release the TEST/RESET switch and the EMERGENCY/Test selector. Verify that the yellow cross does not show in the flow indicator."
      },
      {
       "k": "A",
       "tag": "T:3730,3731,3732,3741",
       "item": "Normal/100% switch",
       "val": "100%"
      },
      {
       "k": "A",
       "tag": "T:3730,3731,3732,3741",
       "item": "Crew oxygen pressure",
       "val": "Check"
      },
      {
       "k": "V",
       "tag": "T:3730,3731,3732,3741",
       "text": "Verify that the pressure is sufficient for dispatch."
      },
      {
       "k": "H",
       "tag": "T:3733,3734,3735,3736",
       "text": "UP-B3733, UP-B3734, UP-B3735, UP-B3736"
      },
      {
       "k": "A",
       "tag": "T:3733,3734,3735,3736",
       "item": "Oxygen pressure drop",
       "val": "Test"
      },
      {
       "k": "X",
       "tag": "T:3733,3734,3735,3736",
       "text": "Note the crew oxygen pressure."
      },
      {
       "k": "A",
       "tag": "T:3733,3734,3735,3736",
       "item": "Oxygen mask",
       "val": "Stowed and doors closed"
      },
      {
       "k": "A",
       "tag": "T:3733,3734,3735,3736",
       "item": "TEST/RESET switch",
       "val": "Push and hold"
      },
      {
       "k": "V",
       "tag": "T:3733,3734,3735,3736",
       "text": "Verify that the yellow cross shows momentarily in the flow indicator."
      },
      {
       "k": "A",
       "tag": "T:3733,3734,3735,3736",
       "item": "Regulator selector",
       "val": "Rotate to EMER"
      },
      {
       "k": "X",
       "tag": "T:3733,3734,3735,3736",
       "text": "Continue to hold the TEST/RESET switch down with the regulator selector in the EMER position for 5 seconds. Verify that the yellow cross shows continuously in the flow indicator."
      },
      {
       "k": "V",
       "tag": "T:3733,3734,3735,3736",
       "text": "Verify that the crew oxygen pressure does not decrease more than 100 psig."
      },
      {
       "k": "V",
       "tag": "T:3733,3734,3735,3736",
       "text": "If the oxygen cylinder valve is not in the full open position, pressure can: decrease rapidly, or decrease more than 100 psig, or increase slowly back to normal."
      },
      {
       "k": "X",
       "tag": "T:3733,3734,3735,3736",
       "text": "Release the TEST/RESET switch and rotate the regulator selector to 100%. Verify that the yellow cross does not show in the flow indicator."
      },
      {
       "k": "A",
       "tag": "T:3733,3734,3735,3736",
       "item": "Crew oxygen pressure",
       "val": "Check"
      },
      {
       "k": "V",
       "tag": "T:3733,3734,3735,3736",
       "text": "Verify that the pressure is sufficient for dispatch."
      },
      {
       "k": "Q",
       "tag": "CL",
       "text": "«Oxygen …… Test and set» в документе повторяется дважды подряд (до и после заголовка «CL»). Перенесено как в документе."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Marker beacon lights",
     "mock": {
      "img": "ip",
      "x": 0.9791,
      "y": 0.3653
     },
     "mockNG": null,
     "page": {
      "ch": "43",
      "pdf": "111"
     },
     "tag": "CL",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(CL) Marker beacon lights",
       "val": "Test"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Clock",
     "mock": {
      "img": "ip",
      "x": 0.9469,
      "y": 0.4649
     },
     "mockNG": null,
     "page": {
      "ch": "43",
      "pdf": "111"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Clock",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) TIME/DATE pushbutton",
       "val": "UTC time"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify the date and time are correct."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Display select panel",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "43",
      "pdf": "111"
     },
     "tag": "NG",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(NG) Display select panel",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "",
       "item": "MAIN PANEL DISPLAY UNITS selector",
       "val": "NORM"
      },
      {
       "k": "A",
       "tag": "",
       "item": "LOWER DISPLAY UNIT selector",
       "val": "NORM"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "TAKEOFF CONFIG / CABIN ALTITUDE lights",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "43",
      "pdf": "111"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "TAKEOFF CONFIG light (if installed and operative)",
       "val": "Verify extinguished"
      },
      {
       "k": "A",
       "tag": "",
       "item": "CABIN ALTITUDE light (if installed and operative)",
       "val": "Verify extinguished"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "CDU",
     "mock": {
      "img": "ip",
      "x": 0.5993,
      "y": 0.74
     },
     "mockNG": null,
     "page": {
      "ch": "43",
      "pdf": "111"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Do the Initial Data and Navigation Data steps from the CDU Preflight Procedure and verify that the IRS alignment is complete before checking the flight instruments."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Flight instruments",
     "mock": {
      "img": "ip",
      "x": 0.7249,
      "y": 0.3605
     },
     "mockNG": null,
     "page": {
      "ch": "43–44",
      "pdf": "111–112"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Flight instruments",
       "val": "Check"
      },
      {
       "k": "X",
       "tag": "CL",
       "text": "(CL) Set the altimeter."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the flight instrument indications are correct."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify speed tape indicates 45."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Airspeed Reference Bugs will be set as shown below: One White Bug at 80 knots. One White Bug at V1 speed. One White Bug at VR speed. One White Bug at V2+15 speed. One White Bug at Flaps UP maneuvering speed."
      },
      {
       "k": "X",
       "tag": "",
       "text": "See Ch. 2.2.27.1 Airspeed Reference Bugs Settings and Altimeters Bug Setting"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that only these flags are shown: TCAS OFF (as installed)"
      },
      {
       "k": "V",
       "tag": "NG",
       "text": "(NG) NO VSPD until V–speeds are selected"
      },
      {
       "k": "V",
       "tag": "",
       "text": "expected RDMI flags"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the flight mode annunciations are correct:"
      },
      {
       "k": "N",
       "tag": "",
       "text": "Autothrottle mode and AFDS status are blank until the MCP is set in the Before Start procedure."
      },
      {
       "k": "V",
       "tag": "",
       "text": "autothrottle mode is blank"
      },
      {
       "k": "V",
       "tag": "",
       "text": "pitch mode is blank"
      },
      {
       "k": "V",
       "tag": "",
       "text": "roll mode is blank"
      },
      {
       "k": "V",
       "tag": "",
       "text": "AFDS status is FD"
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) Airspeed cursor control",
       "val": "Push"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Disengage light TEST switch",
     "mock": {
      "img": "ip",
      "x": 0.7234,
      "y": 0.2419
     },
     "mockNG": null,
     "page": {
      "ch": "44",
      "pdf": "112"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Disengage light TEST switch",
       "val": "Hold to 1"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the A/P light is illuminated steady amber."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the A/T light is illuminated steady amber."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the FMC light is illuminated steady amber."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Disengage light TEST switch",
       "val": "Hold to 2"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the A/P light is illuminated steady red."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the A/T light is illuminated steady red."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the FMC light is illuminated steady amber"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "HYDRAULIC QUANTITY indicators",
     "mock": {
      "img": "ip",
      "x": 0.5248,
      "y": 0.4459
     },
     "mockNG": null,
     "page": {
      "ch": "44",
      "pdf": "112"
     },
     "tag": "CL",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(CL) HYDRAULIC QUANTITY indicators (as installed)",
       "val": "Above RFL"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "GROUND PROXIMITY panel",
     "mock": {
      "img": "ip",
      "x": 0.6951,
      "y": 0.6926
     },
     "mockNG": null,
     "page": {
      "ch": "44",
      "pdf": "112"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "GROUND PROXIMITY panel GPWS SYS TEST (verify IRS alignment)",
       "val": "Check"
      },
      {
       "k": "X",
       "tag": "",
       "text": "See note below"
      },
      {
       "k": "A",
       "tag": "",
       "item": "FLAP INHIBIT switch",
       "val": "Guard closed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "GEAR INHIBIT switch",
       "val": "Guard closed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "TERRAIN INHIBIT switch (as installed)",
       "val": "Guard closed"
      },
      {
       "k": "H",
       "tag": "T:3721,3722,3723,3724",
       "text": "UP-B3721, UP-B3722, UP-B3723, UP-B3724"
      },
      {
       "k": "V",
       "tag": "T:3721,3722,3723,3724",
       "text": "Verify the INOP light is extinguished."
      },
      {
       "k": "H",
       "tag": "T:3729",
       "text": "UP-B3729"
      },
      {
       "k": "V",
       "tag": "T:3729",
       "text": "Verify the GPWS and TERRAIN INOP lights are extinguished."
      },
      {
       "k": "H",
       "tag": "T:3733",
       "text": "UP-B3733"
      },
      {
       "k": "A",
       "tag": "T:3733",
       "item": "RUNWAY INHIBIT switch",
       "val": "Guard closed"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the GROUND PROXIMITY INOP light is extinguished."
      },
      {
       "k": "H",
       "tag": "T:3733",
       "text": "UP-B3733"
      },
      {
       "k": "V",
       "tag": "T:3733",
       "text": "Verify that the RUNWAY INOP light is extinguished"
      },
      {
       "k": "X",
       "tag": "T:3733",
       "text": "The RUNWAY INOP light can be illuminated until the GPS accuracy is adequate for the Runway Awareness and Advisory System requirements."
      },
      {
       "k": "Q",
       "tag": "",
       "text": "«See note below» в документе не указывает, какое именно NOTE имеется в виду. Вероятно, NOTE о GPWS test в конце процедуры (SP.15), но в документе это не сказано."
      },
      {
       "k": "Q",
       "tag": "",
       "text": "Строка «Verify that the GROUND PROXIMITY INOP light is extinguished.» стоит без заголовка борта между двумя блоками UP-B3733. Показано для всех."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Landing gear panel",
     "mock": {
      "img": "ip",
      "x": 0.6291,
      "y": 0.3985
     },
     "mockNG": {
      "img": "ngip",
      "x": 0.5886,
      "y": 0.5551
     },
     "page": {
      "ch": "44",
      "pdf": "112"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Landing gear panel",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "",
       "item": "LANDING GEAR lever",
       "val": "DN"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the green landing gear indicator lights are illuminated."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the red landing gear indicator lights are extinguished."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "ANTISKID switch",
     "mock": {
      "img": "ip",
      "x": 0.5869,
      "y": 0.389
     },
     "mockNG": null,
     "page": {
      "ch": "44",
      "pdf": "112"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "ANTISKID switch",
       "val": "Guard closed"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the ANTISKID INOP light is extinguished"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "AUTO BRAKE selector",
     "mock": {
      "img": "ip",
      "x": 0.5869,
      "y": 0.4981
     },
     "mockNG": null,
     "page": {
      "ch": "45",
      "pdf": "113"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "AUTO BRAKE selector",
       "val": "RTO"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the AUTO BRAKE DISARM light is extinguished"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "FUEL FLOW switch",
     "mock": {
      "img": "ip",
      "x": 0.4643,
      "y": 0.5503
     },
     "mockNG": null,
     "page": {
      "ch": "45",
      "pdf": "113"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "T:3721",
       "item": "(UP-B3721) FUEL FLOW switch (as installed)",
       "val": "Reset"
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) FUEL FLOW switch",
       "val": "RATE"
      },
      {
       "k": "X",
       "tag": "NG",
       "text": "Move switch to RESET, then RATE"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Engine indication lights",
     "mock": {
      "img": "ip",
      "x": 0.4965,
      "y": 0.2562
     },
     "mockNG": null,
     "page": {
      "ch": "45",
      "pdf": "113"
     },
     "tag": "CL",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(CL) REVERSER UNLOCKED lights",
       "val": "Verify extinguished"
      },
      {
       "k": "A",
       "tag": "",
       "item": "(CL) A/T LIM light (as installed)",
       "val": "Verify extinguished"
      },
      {
       "k": "A",
       "tag": "",
       "item": "(CL) START VALVE OPEN lights",
       "val": "Verify extinguished"
      },
      {
       "k": "A",
       "tag": "",
       "item": "(CL) LOW OIL PRESSURE lights",
       "val": "Verify illuminated"
      },
      {
       "k": "A",
       "tag": "",
       "item": "(CL) OIL FILTER BYPASS lights",
       "val": "Verify extinguished"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Engine instrument primary panel",
     "mock": {
      "img": "ip",
      "x": 0.4643,
      "y": 0.4269
     },
     "mockNG": null,
     "page": {
      "ch": "45",
      "pdf": "113"
     },
     "tag": "CL",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(CL) Engine instrument primary panel",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "",
       "item": "N1 manual set knob",
       "val": "Push"
      },
      {
       "k": "A",
       "tag": "T:3722,3723,3724,3729",
       "item": "UP-B3722, UP-B3723, UP-B3724, UP-B3729 FUEL USED RESET switch",
       "val": "Push"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Engine instruments",
     "mock": {
      "img": "ip",
      "x": 0.4643,
      "y": 0.4269
     },
     "mockNG": null,
     "page": {
      "ch": "45",
      "pdf": "113"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Engine instruments",
       "val": "Check"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the primary and secondary engine indications show existing conditions."
      },
      {
       "k": "V",
       "tag": "NG",
       "text": "(NG) Verify that no exceedance is shown."
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) Hydraulic quantity indications",
       "val": "Verify RF not shown"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "MFD Cancel/Recall switch",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "45",
      "pdf": "113"
     },
     "tag": "T:3741",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(UP-B3741) MFD Cancel/Recall switch",
       "val": "Push"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the autoland status advisory messages are not shown."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "CARGO FIRE panel",
     "mock": {
      "img": "aft",
      "x": 0.4438,
      "y": 0.4757
     },
     "mockNG": null,
     "page": {
      "ch": "45",
      "pdf": "113"
     },
     "tag": "NG+T:3724",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "CARGO FIRE panel(NG and UP-B3724)",
       "val": "Check"
      },
      {
       "k": "X",
       "tag": "",
       "text": "This check is needed once per flight day or following a flight crew change."
      },
      {
       "k": "A",
       "tag": "",
       "item": "DETECTOR SELECT switches",
       "val": "NORM"
      },
      {
       "k": "A",
       "tag": "",
       "item": "TEST switch",
       "val": "Push"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the fire warning bell sounds."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the master FIRE WARN lights are illuminated."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Master FIRE WARN light",
       "val": "Push"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the master FIRE WARN lights are extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the fire warning bell cancels."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the FWD and AFT lights stay illuminated."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the DETECTOR FAULT light stays extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the green EXTINGUISHER test lights stay illuminated."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the DISCH light stays illuminated."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "CARGO FIRE panel / CDSCP",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "45–46",
      "pdf": "113–114"
     },
     "tag": "T:3722,3723,3729",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "CARGO FIRE panel (UP-B3722, UP-B3723, UP-B3729)",
       "val": "Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "CARGO DETECTION SUPPRESSION PANEL",
       "val": "CHECKED"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify the MASTER CAUTION and FIRE WARNING lights are off, and the OVHT/DET LOOP annunciator is off on the Annunciator Panel."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify the CDSCP’s ARM switch is set to AUTO, and that all CDSCP lights and LED’s are out. [If BTL 1’s DSCH light is on, BTL 1 is empty. If the AUTO/MAN DSCH light is on, BTL 2 is empty.]."
      },
      {
       "k": "A",
       "tag": "",
       "item": "PANEL TEST SWITCH",
       "val": "PRESS"
      },
      {
       "k": "X",
       "tag": "",
       "text": "and hold the TEST switch for a minimum of 5 seconds, then release when test sequence is complete. Observe the following:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "The DSCH lights in the BTL 1 PUSH & AUTO/MAN switches are ON. All FAIL LED’s ON at first, then OFF as DET LED’s come ON."
      },
      {
       "k": "V",
       "tag": "",
       "text": "All DET LED’s are ON."
      },
      {
       "k": "V",
       "tag": "",
       "text": "DET LED “ON” means that loop is operational."
      },
      {
       "k": "V",
       "tag": "",
       "text": "DET LED “OFF” means that loop is inoperative."
      },
      {
       "k": "V",
       "tag": "",
       "text": "The FORWARD and AFT Squib LED’s for the Diverter Valve Illuminate."
      },
      {
       "k": "V",
       "tag": "",
       "text": "BTL 1 Squib LED Illuminates."
      },
      {
       "k": "V",
       "tag": "",
       "text": "BTL 2 Squib LED Illuminates."
      },
      {
       "k": "V",
       "tag": "",
       "text": "OVHT/DET Annunciator ON, MASTER CAUTION and FIRE WARNING lights ON."
      },
      {
       "k": "V",
       "tag": "",
       "text": "The FIRE LED on the CDSCP is ON and flashing indicating the timer is operating. AURAL WARNING BELL is ON."
      },
      {
       "k": "N",
       "tag": "",
       "text": "The aural warning MUST be silenced during the test by pressing the BELL CUTOUT/HORN RESET button on the P7 glare shield. If the bell does not silence contact maintenance."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Release the test switch and verify all lights and LED's are out."
      },
      {
       "k": "N",
       "tag": "",
       "text": "If a test is required in flight accomplish the above procedure."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Hollingsead Lower Cargo Fire Suppression",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "46",
      "pdf": "114"
     },
     "tag": "T:3721",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "UP-B3721 For preflight procedures of the Hollingsead Lower Cargo Fire Suppression system see manufacture supplements."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "EFIS control panel",
     "mock": {
      "img": "aft",
      "x": 0.7085,
      "y": 0.6459
     },
     "mockNG": null,
     "page": {
      "ch": "46",
      "pdf": "114"
     },
     "tag": "T:3722,3723,3724,3729",
     "lines": [
      {
       "k": "H",
       "tag": "",
       "text": "UP-B3722, UP-B3723, UP-B3724, UP-B3729"
      },
      {
       "k": "A",
       "tag": "",
       "item": "EFIS control panel",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Decision height selector",
       "val": "As needed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Mode selector",
       "val": "MAP"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Range selector",
       "val": "As needed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "TRAFFIC switch",
       "val": "As needed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "WEATHER RADAR",
       "val": "Off"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the weather radar indications are not shown on the MAP."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Map switches",
       "val": "As needed"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Radio tuning panel",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "46",
      "pdf": "114"
     },
     "tag": "NG",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(NG) Radio tuning panel",
       "val": "Set"
      },
      {
       "k": "W",
       "tag": "",
       "text": "Do not key the HF radio while the airplane is being fueled. Injury to personnel or fire can occur."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the OFF light is extinguished."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "VHF communications radios",
     "mock": {
      "img": "aft",
      "x": 0.6922,
      "y": 0.4757
     },
     "mockNG": null,
     "page": {
      "ch": "46",
      "pdf": "114"
     },
     "tag": "CL",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(CL) VHF communications radios",
       "val": "Set"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "VHF NAVIGATION radios",
     "mock": {
      "img": "aft",
      "x": 0.6922,
      "y": 0.5486
     },
     "mockNG": null,
     "page": {
      "ch": "46",
      "pdf": "114"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "VHF NAVIGATION radios frequency set for departure",
       "val": "Verify AUTO as install"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "EFIS control panel",
     "mock": {
      "img": "aft",
      "x": 0.7085,
      "y": 0.6459
     },
     "mockNG": null,
     "page": {
      "ch": "46–47",
      "pdf": "114–115"
     },
     "tag": "CL",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(CL) EFIS control panel",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Decision height selector",
       "val": "“-20” or as needed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Mode selector",
       "val": "MAP"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Range selector",
       "val": "As needed"
      },
      {
       "k": "A",
       "tag": "",
       "item": "TRAFFIC (TFC) switch (as installed)",
       "val": "TFC"
      },
      {
       "k": "A",
       "tag": "",
       "item": "WEATHER RADAR",
       "val": "OFF"
      },
      {
       "k": "N",
       "tag": "",
       "text": "When this switch is OFF, the enhanced features of the EGPWS are still operational, but the display of terrain data on the EHSI will be inhibited."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the weather radar indications are not shown on the MAP."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Map switches",
       "val": "As needed"
      },
      {
       "k": "Q",
       "tag": "",
       "text": "Для UP-B3722, UP-B3723, UP-B3724, UP-B3729 в документе два пункта «EFIS control panel …… Set»: блок с заголовком этих бортов и блок «(CL) EFIS control panel» с другими значениями (Decision height «-20», TRAFFIC «TFC»). Какой из них выполнять на этих бортах, документ не уточняет. Показаны оба."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Audio control panel",
     "mock": {
      "img": "aft",
      "x": 0.6922,
      "y": 0.7595
     },
     "mockNG": null,
     "page": {
      "ch": "47",
      "pdf": "115"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Audio control panel",
       "val": "Set"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "ADF radios",
     "mock": {
      "img": "aft",
      "x": 0.2117,
      "y": 0.8514
     },
     "mockNG": null,
     "page": {
      "ch": "47",
      "pdf": "115"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "ADF radios",
       "val": "Set"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "HF radios",
     "mock": {
      "img": "aft",
      "x": 0.4479,
      "y": 0.7486
     },
     "mockNG": null,
     "page": {
      "ch": "47",
      "pdf": "115"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "HF radios (as installed)",
       "val": "Set"
      },
      {
       "k": "W",
       "tag": "",
       "text": "Do not key HF radio while airplane is being fuelled. Injury to personnel or fire may result."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Set basic frequency (Stockholm radio) 11.345 kHz or assigned frequency and verify mode selector is in OFF position."
      },
      {
       "k": "Q",
       "tag": "",
       "text": "Частота «11.345 kHz» указана в документе именно так. Проверьте единицы измерения (kHz/MHz) по оригиналу."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "WEATHER RADAR panel",
     "mock": {
      "img": "ip",
      "x": 0.4965,
      "y": 0.6309
     },
     "mockNG": {
      "img": "ngped",
      "x": 0.4916,
      "y": 0.8599
     },
     "page": {
      "ch": "47",
      "pdf": "115"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "WEATHER RADAR panel",
       "val": "Set"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the weather radar indications are not shown."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Transponder panel",
     "mock": {
      "img": "aft",
      "x": 0.4479,
      "y": 0.6757
     },
     "mockNG": null,
     "page": {
      "ch": "47",
      "pdf": "115"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Transponder panel",
       "val": "Set"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Code Indicator",
       "val": "2000, or ID (if installed)"
      },
      {
       "k": "X",
       "tag": "",
       "text": "(The flight ID entry is to duplicate Item 7 of the ICAO Flight Plan for each flight, or the aircraft’s registration if no flight plan is available. A maximum of 8 alphanumeric characters are available for input, and the ID should not contain leading zeroes or hyphens. Normally, Flight ID will consist of the airline’s ICAO 3 letter identifier preceding the flight number, e.g. VSV703, or if unavailable the aircraft’s registration, e.g. UP-B3710)."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Above/ Below switch (as installed)",
       "val": "Above"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Transponder selector",
       "val": "No.1 or No.2 depending who is PF."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "STABILIZER TRIM override switch",
     "mock": {
      "img": "aft",
      "x": 0.6474,
      "y": 0.9324
     },
     "mockNG": null,
     "page": {
      "ch": "47",
      "pdf": "115"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "STABILIZER TRIM override switch",
       "val": "Guard closed"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Seat",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "47",
      "pdf": "115"
     },
     "tag": "",
     "lines": [
      {
       "k": "W",
       "tag": "",
       "text": "Do not put objects between the seat and the aisle stand. Injury can occur when the seat is adjusted."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Seat",
       "val": "Adjust"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Use the handhold above the forward window for assistance when pulling the seat forward. Do not use the glareshield as damage can occur."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Adjust the seat for optimum eye reference."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify a positive horizontal (fore and aft) seat lock."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Rudder pedals",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "47",
      "pdf": "115"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Rudder pedals",
       "val": "Adjust"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Adjust the rudder pedals to allow full rudder pedal and brake pedal movement."
      },
      {
       "k": "C",
       "tag": "",
       "text": "Turn the rudder pedal adjust crank no faster than approximately one turn per second to avoid damage. Do not apply force to the pedals during adjustment."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Seat belt and shoulder harness",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "48",
      "pdf": "116"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Seat belt and shoulder harness",
       "val": "Adjust"
      }
     ]
    },
    {
     "who": "B",
     "panel": "PREFLIGHT checklist",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "48",
      "pdf": "116"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Do the PREFLIGHT checklist on the captain's command."
      },
      {
       "k": "N",
       "tag": "",
       "text": "After light test completed or during Preflight Procedure flow perform GPWS test SP.15, Transponder Test SP.11.1 and weather radar test SP.11.1,."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Transponder Test",
     "mock": {
      "img": "aft",
      "x": 0.4479,
      "y": 0.6757
     },
     "mockNG": null,
     "page": {
      "ch": "48",
      "pdf": "116"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Transponder Test"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Transponder switch",
       "val": "TEST"
      },
      {
       "k": "H",
       "tag": "T:3722,3723,3724,3729",
       "text": "UP-B3722, UP-B3723, UP-B3724, UP-B3729"
      },
      {
       "k": "V",
       "tag": "T:3722,3723,3724,3729",
       "text": "Check that the XPNDR FAIL light illuminates."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Check that all code segments illuminate. Verify that no error codes exist."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify “TCAS SYSTEM TEST - OK” aural sounds."
      },
      {
       "k": "Q",
       "tag": "CL",
       "text": "После заголовка «UP-B3722, UP-B3723, UP-B3724, UP-B3729» неясно, где заканчивается его действие (только XPNDR FAIL light или и следующие строки). Остальные строки показаны для всех."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Weather Radar Test",
     "mock": {
      "img": "ip",
      "x": 0.4965,
      "y": 0.6309
     },
     "mockNG": {
      "img": "ngped",
      "x": 0.4916,
      "y": 0.8599
     },
     "page": {
      "ch": "48",
      "pdf": "116"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Weather Radar Test"
      },
      {
       "k": "N",
       "tag": "",
       "text": "Use chapter Limitation: 1 WEATHER RADAR"
      },
      {
       "k": "H",
       "tag": "T:3722,3723,3724",
       "text": "UP-B3722, UP-B3723, UP-B3724"
      },
      {
       "k": "A",
       "tag": "T:3722,3723,3724",
       "item": "EHSI mode selector",
       "val": "Expanded scale mode except PLAN"
      },
      {
       "k": "H",
       "tag": "T:3724",
       "text": "UP-B3724"
      },
      {
       "k": "A",
       "tag": "T:3724",
       "item": "STAB switch",
       "val": "ON"
      },
      {
       "k": "A",
       "tag": "T:3724",
       "item": "TEST",
       "val": "ON"
      },
      {
       "k": "H",
       "tag": "NG+T:3722,3723",
       "text": "UP-B3722, UP-B3723, NG"
      },
      {
       "k": "A",
       "tag": "NG+T:3722,3723",
       "item": "WX radar mode selector",
       "val": "TEST"
      },
      {
       "k": "A",
       "tag": "NG+T:3722,3723",
       "item": "WXR",
       "val": "ON"
      },
      {
       "k": "N",
       "tag": "",
       "text": "F/O (RHS) can switch on WXR of the left pilot if situation is required."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify no fault messages are present."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify test pattern consists of the following colours: Green, Amber, Red, Magenta."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Weather Radar Test (2)",
     "mock": {
      "img": "ip",
      "x": 0.4965,
      "y": 0.6309
     },
     "mockNG": {
      "img": "ngped",
      "x": 0.4916,
      "y": 0.8599
     },
     "page": {
      "ch": "48–49",
      "pdf": "116–117"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Weather Radar Test"
      },
      {
       "k": "C",
       "tag": "",
       "text": "Tests involving radiation of RF energy by the radar antenna must not be made while radar antenna is directed toward nearby large metal objects, during refueling operations or in the vicinity of trucks or containers holding flammable or explosive liquids."
      },
      {
       "k": "N",
       "tag": "NG",
       "text": "when F/O push WHR button on EFIS panel (NG) it can count as good judgement."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Mode selector",
       "val": "TEST"
      },
      {
       "k": "A",
       "tag": "",
       "item": "GAIN control",
       "val": "AUTO"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Range selector",
       "val": "10"
      },
      {
       "k": "A",
       "tag": "",
       "item": "BRT control",
       "val": "Desired brightness"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Test pattern",
       "val": "Check"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Check presence of test bands."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Check alphanumeric legends appear."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Check fault annunciations are absent."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Range selector",
       "val": "Select each range"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Check test pattern is similar for each range."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Mode selector",
       "val": "As desired"
      },
      {
       "k": "Q",
       "tag": "",
       "text": "В документе два подряд блока «Weather Radar Test» с разными шагами; к каким бортам относится второй блок, не указано. Показаны оба для всех."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Ground Proximity Warning System (GPWS) Test",
     "mock": {
      "img": "ip",
      "x": 0.6951,
      "y": 0.6926
     },
     "mockNG": null,
     "page": {
      "ch": "49",
      "pdf": "117"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Ground Proximity Warning System (GPWS) Test"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify IRS alignment is complete."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the guards are closed for all GROUND PROXIMITY INHIBIT switches."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Ground proximity SYS TEST switch",
       "val": "Push momentarily"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify the following:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "BELOW G/S, PULL UP and GPWS INOP lights illuminate"
      },
      {
       "k": "V",
       "tag": "",
       "text": "EADI (CL) PED (NG) WINDSHEAR message (as installed) shows"
      },
      {
       "k": "V",
       "tag": "",
       "text": "“GLIDESLOPE”, “WHOOP, WHOOP, PULL UP” and “WINDSHEAR” (as installed) aurals sound"
      },
      {
       "k": "N",
       "tag": "",
       "text": "If the test switch is held until the aurals begin, additional GPWS aural warnings are tested."
      },
      {
       "k": "Q",
       "tag": "",
       "text": "В документе «EADI (CL) PED (NG) WINDSHEAR message». «PED» — вероятно опечатка (PFD), но в документе написано «PED». Проверьте по оригиналу."
      }
     ]
    }
   ]
  }
 ],
 "checklists": {
  "pfo": {
   "phase": "pfo",
   "name": "PREFLIGHT",
   "CL": {
    "src": "Appendix 1 Normal Checklist B737-300/500 (Classic)",
    "pdf": "417",
    "page": "Page 1",
    "items": [
     {
      "item": "OXYGEN",
      "val": "TESTED, 100%",
      "who": "L R"
     },
     {
      "item": "INSTR. TRANSFER SWITCHES",
      "val": "NORMAL",
      "who": "R"
     },
     {
      "item": "WINDOW HEAT",
      "val": "ON",
      "who": "R"
     },
     {
      "item": "PRESSURIZATION MODE SEL",
      "val": "AUTO",
      "who": "R"
     },
     {
      "item": "FLT INSTR",
      "val": "HEADING__, ALT__",
      "who": "L R"
     },
     {
      "item": "PARKING BRAKE",
      "val": "SET",
      "who": "L"
     },
     {
      "item": "ENGINE START LEVERS",
      "val": "CUTOFF",
      "who": "L"
     },
     {
      "item": "PITOT COVERS",
      "val": "REMOWED ON BOARD",
      "who": "L"
     },
     {
      "item": "GEAR PINS",
      "val": "3 CHECKED",
      "who": "L"
     }
    ]
   },
   "NG": {
    "src": "Appendix 3 Normal Checklist B737-700/800 (NG)",
    "pdf": "422",
    "page": "Page 6",
    "items": [
     {
      "item": "OXYGEN",
      "val": "TESTED, 100%",
      "who": "L R"
     },
     {
      "item": "NAVIGATION TRANSFER & DISPLAY SWITCHES",
      "val": "NORMAL, AUTO",
      "who": "R"
     },
     {
      "item": "WINDOW HEAT",
      "val": "ON",
      "who": "R"
     },
     {
      "item": "PRES-TION MODE SELECTOR",
      "val": "AUTO",
      "who": "R"
     },
     {
      "item": "FLT INSTR",
      "val": "HEADING_, ALTIMETER_",
      "who": "L R"
     },
     {
      "item": "PARKING BRAKE",
      "val": "SET",
      "who": "L"
     },
     {
      "item": "FUEL SPAR VALVES",
      "val": "CHECKED",
      "who": "L"
     },
     {
      "item": "ENGINE START LEVERS",
      "val": "CUTOFF",
      "who": "L"
     },
     {
      "item": "PITOT COVERS",
      "val": "REMOWED ON BOARD",
      "who": "L"
     },
     {
      "item": "GEAR PINS",
      "val": "3 CHECKED",
      "who": "L"
     }
    ]
   }
  }
 },
 "clTails": [
  "3721",
  "3722",
  "3723",
  "3724",
  "3729"
 ],
 "ngTails": [
  "3725",
  "3730",
  "3731",
  "3732",
  "3733",
  "3734",
  "3735",
  "3736",
  "3741"
 ],
 "mockNames": {
  "ngovh": "NG: Forward / Aft overhead panel (P5)",
  "ngip": "NG: Glareshield (P7) и main panel",
  "ngped": "NG: Control stand и aft electronic panel (P8)",
  "ovh": "Overhead panel (forward + aft)",
  "ip": "Main instrument panel / MCP / Electronic panel",
  "aft": "Aft control stand (pedestal)"
 },
 "img": {
  "ovh": [
   1752,
   2250
  ],
  "ip": [
   2014,
   1054
  ],
  "aft": [
   1228,
   1850
  ],
  "ngovh": [
   1546,
   2576
  ],
  "ngip": [
   1546,
   2576
  ],
  "ngped": [
   1546,
   2576
  ]
 }
};
