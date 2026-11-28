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
       "val": "OFF, then NAV",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 462,
         "y": 585
        },
        "NG": {
         "img": "ngovh",
         "x": 663,
         "y": 290
        }
       }
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
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngovh",
         "x": 1015,
         "y": 457
        }
       }
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
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1135,
         "y": 415
        },
        "NG": {
         "img": "ngovh",
         "x": 960,
         "y": 225
        }
       }
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
       "val": "Push, one at a time",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1290,
         "y": 415
        },
        "NG": {
         "img": "ngovh",
         "x": 1034,
         "y": 227
        }
       }
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
       "val": "Push and hold, one at a time",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1210,
         "y": 518
        },
        "NG": {
         "img": "ngovh",
         "x": 996,
         "y": 264
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 918,
         "y": 410
        },
        "NG": {
         "img": "ngovh",
         "x": 866,
         "y": 219
        }
       }
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
       "val": "ON",
       "loc": {
        "NG": {
         "img": "ngovh",
         "x": 866,
         "y": 219
        }
       }
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) PMC switches",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 918,
         "y": 410
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1010,
         "y": 555
        },
        "NG": {
         "img": "ngovh",
         "x": 906,
         "y": 277
        }
       }
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
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1010,
         "y": 555
        },
        "NG": {
         "img": "ngovh",
         "x": 906,
         "y": 277
        }
       }
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
       "val": "Verify illuminated",
       "loc": {
        "NG": {
         "img": "ngovh",
         "x": 830,
         "y": 330
        }
       }
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
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 690,
         "y": 460
        },
        "NG": {
         "img": "ngovh",
         "x": 763,
         "y": 238
        }
       }
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
       "val": "Guard closed",
       "loc": {
        "NG": {
         "img": "ngovh",
         "x": 556,
         "y": 227
        }
       }
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
       "val": "Verify extinguished",
       "loc": {
        "NG": {
         "img": "ngovh",
         "x": 567,
         "y": 344
        }
       }
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
       "val": "Verify extinguished",
       "loc": {
        "NG": {
         "img": "ngovh",
         "x": 663,
         "y": 236
        }
       }
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
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 385,
         "y": 610
        },
        "NG": {
         "img": "ngped",
         "x": 683,
         "y": 2042
        }
       }
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
       "val": "ON",
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
      },
      {
       "k": "A",
       "tag": "",
       "item": "Standby power switch",
       "val": "BAT",
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
       "val": "Check",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 100,
         "y": 1022
        },
        "NG": {
         "img": "ngovh",
         "x": 520,
         "y": 520
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "FLIGHT CONTROL switches",
       "val": "Guards closed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 100,
         "y": 1022
        },
        "NG": {
         "img": "ngovh",
         "x": 520,
         "y": 520
        }
       }
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
       "val": "Guards closed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 100,
         "y": 1022
        },
        "NG": {
         "img": "ngovh",
         "x": 520,
         "y": 520
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "YAW DAMPER switch",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 100,
         "y": 1022
        },
        "NG": {
         "img": "ngovh",
         "x": 520,
         "y": 520
        }
       }
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
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 100,
         "y": 1022
        },
        "NG": {
         "img": "ngovh",
         "x": 520,
         "y": 520
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "ALTERNATE FLAPS position switch",
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 100,
         "y": 1022
        },
        "NG": {
         "img": "ngovh",
         "x": 520,
         "y": 520
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 160,
         "y": 1428
        }
       }
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
       "val": "NORMAL",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 160,
         "y": 1428
        }
       }
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
       "val": "NORMAL",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 160,
         "y": 1428
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "IRS transfer switch",
       "val": "NORMAL",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 160,
         "y": 1428
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "EFI transfer switch",
       "val": "NORMAL",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 160,
         "y": 1428
        }
       }
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
       "val": "NORMAL",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 160,
         "y": 1428
        }
       }
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
       "val": "Set",
       "loc": {
        "NG": {
         "img": "ngovh",
         "x": 535,
         "y": 672
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "VHF NAV transfer switch",
       "val": "NORMAL",
       "loc": {
        "NG": {
         "img": "ngovh",
         "x": 535,
         "y": 672
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "IRS transfer switch",
       "val": "NORMAL",
       "loc": {
        "NG": {
         "img": "ngovh",
         "x": 535,
         "y": 672
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "FMC transfer switch",
       "val": "NORMAL",
       "loc": {
        "NG": {
         "img": "ngovh",
         "x": 535,
         "y": 672
        }
       }
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
       "val": "Set",
       "loc": {
        "NG": {
         "img": "ngovh",
         "x": 535,
         "y": 750
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "SOURCE selector",
       "val": "AUTO",
       "loc": {
        "NG": {
         "img": "ngovh",
         "x": 535,
         "y": 750
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "CONTROL PANEL select switch",
       "val": "NORMAL",
       "loc": {
        "NG": {
         "img": "ngovh",
         "x": 535,
         "y": 750
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 165,
         "y": 1760
        },
        "NG": {
         "img": "ngovh",
         "x": 540,
         "y": 870
        }
       }
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
       "val": "Closed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 165,
         "y": 1760
        },
        "NG": {
         "img": "ngovh",
         "x": 540,
         "y": 870
        }
       }
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
       "val": "OFF (or as needed for APU operation)",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 165,
         "y": 1760
        },
        "NG": {
         "img": "ngovh",
         "x": 540,
         "y": 870
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 430,
         "y": 1170
        },
        "NG": {
         "img": "ngovh",
         "x": 660,
         "y": 640
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "BATTERY switch",
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 430,
         "y": 1170
        },
        "NG": {
         "img": "ngovh",
         "x": 660,
         "y": 640
        }
       }
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) GALLEY power switch",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 430,
         "y": 1170
        },
        "NG": {
         "img": "ngovh",
         "x": 660,
         "y": 640
        }
       }
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) CAB/UTIL power switch",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 430,
         "y": 1170
        },
        "NG": {
         "img": "ngovh",
         "x": 660,
         "y": 640
        }
       }
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) IFE/PASS SEAT power switch",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 430,
         "y": 1170
        },
        "NG": {
         "img": "ngovh",
         "x": 660,
         "y": 640
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "STANDBY POWER switch",
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 430,
         "y": 1170
        },
        "NG": {
         "img": "ngovh",
         "x": 660,
         "y": 640
        }
       }
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
       "val": "Guards closed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 430,
         "y": 1170
        },
        "NG": {
         "img": "ngovh",
         "x": 660,
         "y": 640
        }
       }
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
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 430,
         "y": 1170
        },
        "NG": {
         "img": "ngovh",
         "x": 660,
         "y": 640
        }
       }
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
       "val": "Verify extinguished",
       "loc": {
        "NG": {
         "img": "ngovh",
         "x": 766,
         "y": 645
        }
       }
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
       "val": "NORM",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 655,
         "y": 1372
        },
        "NG": {
         "img": "ngovh",
         "x": 765,
         "y": 692
        }
       }
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
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 697,
         "y": 1535
        },
        "NG": {
         "img": "ngovh",
         "x": 770,
         "y": 755
        }
       }
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
       "val": "NO SMOKING switch - ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 687,
         "y": 1645
        },
        "NG": {
         "img": "ngovh",
         "x": 771,
         "y": 785
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Passenger signs",
       "val": "FASTEN BELTS switch – ON (during refuelling OFF)",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 687,
         "y": 1645
        },
        "NG": {
         "img": "ngovh",
         "x": 771,
         "y": 785
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
      "ch": "38",
      "pdf": "106"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) Windshield WIPER selector",
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 690,
         "y": 1955
        },
        "NG": {
         "img": "ngovh",
         "x": 732,
         "y": 952
        }
       }
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) Windshield WIPER selectors",
       "val": "PARK",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 690,
         "y": 1955
        },
        "NG": {
         "img": "ngovh",
         "x": 732,
         "y": 952
        }
       }
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
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 900,
         "y": 942
        },
        "NG": {
         "img": "ngovh",
         "x": 865,
         "y": 492
        }
       }
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
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 880,
         "y": 1012
        },
        "NG": {
         "img": "ngovh",
         "x": 855,
         "y": 535
        }
       }
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) PROBE HEAT switches",
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 880,
         "y": 1012
        },
        "NG": {
         "img": "ngovh",
         "x": 855,
         "y": 535
        }
       }
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
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 850,
         "y": 1242
        },
        "NG": {
         "img": "ngovh",
         "x": 850,
         "y": 635
        }
       }
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
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 976,
         "y": 1252
        },
        "NG": {
         "img": "ngovh",
         "x": 892,
         "y": 635
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 912,
         "y": 1440
        },
        "NG": {
         "img": "ngovh",
         "x": 857,
         "y": 715
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "ENGINE HYDRAULIC PUMPS switches",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 912,
         "y": 1440
        },
        "NG": {
         "img": "ngovh",
         "x": 857,
         "y": 715
        }
       }
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
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 912,
         "y": 1440
        },
        "NG": {
         "img": "ngovh",
         "x": 857,
         "y": 715
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1206,
         "y": 1007
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 640
        }
       }
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
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1206,
         "y": 1007
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 640
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "AIR TEMPERATURE source selector",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1206,
         "y": 1007
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 640
        }
       }
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
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1206,
         "y": 1007
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 640
        }
       }
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
       "val": "AUTO",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1206,
         "y": 1007
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 640
        }
       }
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
       "val": "AUTO",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1206,
         "y": 1007
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 640
        }
       }
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) Air conditioning PACK switches",
       "val": "One switch AUTO or HIGH, one switch OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1206,
         "y": 1007
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 640
        }
       }
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) Air conditioning PACK switches",
       "val": "AUTO or HIGH",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1206,
         "y": 1007
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 640
        }
       }
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) ISOLATION VALVE switch",
       "val": "AUTO",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1206,
         "y": 1007
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 640
        }
       }
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) ISOLATION VALVE switch",
       "val": "OPEN",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1206,
         "y": 1007
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 640
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Engine BLEED air switches",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1206,
         "y": 1007
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 640
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "APU BLEED air switch",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1206,
         "y": 1007
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 640
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1210,
         "y": 1845
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 875
        }
       }
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
       "val": "Cruise altitude",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1210,
         "y": 1845
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 875
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "LANDING ALTITUDE indicator",
       "val": "Destination field elevation",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1210,
         "y": 1845
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 875
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "CABIN Rate selector (as installed)",
       "val": "Index",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1210,
         "y": 1845
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 875
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "CABIN ALTITUDE (as installed) indicator",
       "val": "200 feet below destination field elevation",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1210,
         "y": 1845
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 875
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "FLT/GRD switch (as installed)",
       "val": "GRD",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1210,
         "y": 1845
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 875
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Pressurization mode selector",
       "val": "AUTO",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1210,
         "y": 1845
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 875
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 250,
         "y": 2065
        },
        "NG": {
         "img": "ngovh",
         "x": 600,
         "y": 1002
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "LANDING light switches",
       "val": "RETRACT and OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 250,
         "y": 2065
        },
        "NG": {
         "img": "ngovh",
         "x": 600,
         "y": 1002
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "RUNWAY TURNOFF light switches",
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 250,
         "y": 2065
        },
        "NG": {
         "img": "ngovh",
         "x": 600,
         "y": 1002
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "TAXI light switch",
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 250,
         "y": 2065
        },
        "NG": {
         "img": "ngovh",
         "x": 600,
         "y": 1002
        }
       }
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
       "val": "IGN L or R",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 735,
         "y": 2065
        },
        "NG": {
         "img": "ngovh",
         "x": 797,
         "y": 1005
        }
       }
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
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 635,
         "y": 2080
        },
        "NG": {
         "img": "ngovh",
         "x": 780,
         "y": 985
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1120,
         "y": 2065
        },
        "NG": {
         "img": "ngovh",
         "x": 955,
         "y": 1002
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "LOGO light switch",
       "val": "As needed (as installed)",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1120,
         "y": 2065
        },
        "NG": {
         "img": "ngovh",
         "x": 955,
         "y": 1002
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "STROBE light switch (as installed)",
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1120,
         "y": 2065
        },
        "NG": {
         "img": "ngovh",
         "x": 955,
         "y": 1002
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "POSITION light switch (as installed)",
       "val": "ON or STEADY",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1120,
         "y": 2065
        },
        "NG": {
         "img": "ngovh",
         "x": 955,
         "y": 1002
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "ANTI-COLLISION light switch",
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1120,
         "y": 2065
        },
        "NG": {
         "img": "ngovh",
         "x": 955,
         "y": 1002
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "WING illumination switch",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1120,
         "y": 2065
        },
        "NG": {
         "img": "ngovh",
         "x": 955,
         "y": 1002
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "WHEEL WELL light switch",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1120,
         "y": 2065
        },
        "NG": {
         "img": "ngovh",
         "x": 955,
         "y": 1002
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 60
        },
        "NG": {
         "img": "ngip",
         "x": 780,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "COURSE(S)",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 60
        },
        "NG": {
         "img": "ngip",
         "x": 780,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "FLIGHT DIRECTOR switch(-es)",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 60
        },
        "NG": {
         "img": "ngip",
         "x": 780,
         "y": 1175
        }
       }
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
       "val": "CHECK",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 60
        },
        "NG": {
         "img": "ngip",
         "x": 780,
         "y": 1175
        }
       }
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
       "val": "Set",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 995,
         "y": 1175,
         "check": "Метка на EFIS control panel стороны F/O (процедуру выполняет F/O; сторону OM-B не указывает)."
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "MINIMUMS reference selector",
       "val": "RADIO or BARO",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 995,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "MINIMUMS selector",
       "val": "Set Engine Failure Flaps Retraction Altitude",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 995,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "FLIGHT PATH VECTOR switch",
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 995,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "METERS switch",
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 995,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "BAROMETRIC reference selector",
       "val": "IN or HPA",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 995,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "BAROMETRIC selector",
       "val": "Set local altimeter setting",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 995,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "VOR/ADF switches",
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 995,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Mode selector",
       "val": "MAP",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 995,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "CENTRE switch",
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 995,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Range selector",
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 995,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "TRAFFIC switch",
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 995,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "WEATHER RADAR",
       "val": "Off",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 995,
         "y": 1175
        }
       }
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
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 995,
         "y": 1175
        }
       }
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
       "val": "Test",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1972,
         "y": 385
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1907,
         "y": 490
        },
        "NG": {
         "img": "ngip",
         "x": 1372,
         "y": 1415
        }
       }
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) TIME/DATE pushbutton",
       "val": "UTC time",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1907,
         "y": 490
        },
        "NG": {
         "img": "ngip",
         "x": 1372,
         "y": 1415
        }
       }
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
       "val": "Set",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 1135,
         "y": 1330
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "MAIN PANEL DISPLAY UNITS selector",
       "val": "NORM",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 1135,
         "y": 1330
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "LOWER DISPLAY UNIT selector",
       "val": "NORM",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 1135,
         "y": 1330
        }
       }
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
       "val": "Verify extinguished",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 992,
         "y": 1351
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "CABIN ALTITUDE light (if installed and operative)",
       "val": "Verify extinguished",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 992,
         "y": 1351
        }
       }
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
       "val": "Check",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1460,
         "y": 380,
         "check": "Метка на приборах стороны F/O (сторону OM-B не указывает)."
        },
        "NG": {
         "img": "ngip",
         "x": 1222,
         "y": 1460,
         "check": "Метка на PFD стороны F/O (сторону OM-B не указывает)."
        }
       }
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
       "val": "Push",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1460,
         "y": 380
        },
        "NG": {
         "img": "ngip",
         "x": 1222,
         "y": 1460
        }
       }
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
       "val": "Hold to 1",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1457,
         "y": 255
        },
        "NG": {
         "img": "ngip",
         "x": 1060,
         "y": 1322
        }
       }
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
       "val": "Hold to 2",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1457,
         "y": 255
        },
        "NG": {
         "img": "ngip",
         "x": 1060,
         "y": 1322
        }
       }
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
       "val": "Above RFL",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1057,
         "y": 470,
         "check": "Метка стоит на индикаторах с надписью QTY на правой части приборной панели; что это именно HYDRAULIC QUANTITY, по макету не видно. ⚠ проверить"
        }
       }
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
       "val": "Check",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1400,
         "y": 730
        },
        "NG": {
         "img": "ngip",
         "x": 1080,
         "y": 1595
        }
       }
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
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1400,
         "y": 730
        },
        "NG": {
         "img": "ngip",
         "x": 1080,
         "y": 1595
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "GEAR INHIBIT switch",
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1400,
         "y": 730
        },
        "NG": {
         "img": "ngip",
         "x": 1080,
         "y": 1595
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "TERRAIN INHIBIT switch (as installed)",
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1400,
         "y": 730
        },
        "NG": {
         "img": "ngip",
         "x": 1080,
         "y": 1595
        }
       }
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
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1400,
         "y": 730
        },
        "NG": {
         "img": "ngip",
         "x": 1080,
         "y": 1595
        }
       }
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
       "val": "Set",
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
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1182,
         "y": 410
        },
        "NG": {
         "img": "ngip",
         "x": 805,
         "y": 1346,
         "check": "На NG-макете виден только сигнал ANTISKID INOP, самого выключателя ANTISKID нет. Метка у табло. ⚠ проверить"
        }
       }
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
       "val": "RTO",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1182,
         "y": 525
        },
        "NG": {
         "img": "ngip",
         "x": 805,
         "y": 1320
        }
       }
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
       "val": "Reset",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 935,
         "y": 580
        },
        "NG": {
         "img": "ngip",
         "x": 720,
         "y": 1337
        }
       }
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) FUEL FLOW switch",
       "val": "RATE",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 935,
         "y": 580
        },
        "NG": {
         "img": "ngip",
         "x": 720,
         "y": 1337
        }
       }
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
       "val": "Verify extinguished",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 270
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "(CL) A/T LIM light (as installed)",
       "val": "Verify extinguished",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 270
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "(CL) START VALVE OPEN lights",
       "val": "Verify extinguished",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 270
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "(CL) LOW OIL PRESSURE lights",
       "val": "Verify illuminated",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 270
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "(CL) OIL FILTER BYPASS lights",
       "val": "Verify extinguished",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 270
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 935,
         "y": 450
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "N1 manual set knob",
       "val": "Push",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 935,
         "y": 450
        }
       }
      },
      {
       "k": "A",
       "tag": "T:3722,3723,3724,3729",
       "item": "UP-B3722, UP-B3723, UP-B3724, UP-B3729 FUEL USED RESET switch",
       "val": "Push",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 935,
         "y": 450
        }
       }
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
       "val": "Check",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 935,
         "y": 450
        },
        "NG": {
         "img": "ngip",
         "x": 760,
         "y": 1440
        }
       }
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
       "val": "Verify RF not shown",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 935,
         "y": 450
        },
        "NG": {
         "img": "ngip",
         "x": 760,
         "y": 1440,
         "check": "Hydraulic quantity на NG показывается на нижнем дисплее (SYS); метка общая с Engine instruments. ⚠ проверить"
        }
       }
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
       "val": "Push",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 766,
         "y": 1351
        }
       }
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
       "val": "Check",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 545,
         "y": 880
        },
        "NG": {
         "img": "ngped",
         "x": 747,
         "y": 2155
        }
       }
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
       "val": "NORM",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 545,
         "y": 880
        },
        "NG": {
         "img": "ngped",
         "x": 747,
         "y": 2155
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "TEST switch",
       "val": "Push",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 545,
         "y": 880
        },
        "NG": {
         "img": "ngped",
         "x": 747,
         "y": 2155
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
       "k": "A",
       "tag": "",
       "item": "Master FIRE WARN light",
       "val": "Push",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 545,
         "y": 880
        },
        "NG": {
         "img": "ngped",
         "x": 747,
         "y": 2155
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Decision height selector",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Mode selector",
       "val": "MAP",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Range selector",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "TRAFFIC switch",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "WEATHER RADAR",
       "val": "Off",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195
        }
       }
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
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195
        }
       }
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
       "val": "Set",
       "loc": {
        "NG": {
         "img": "ngped",
         "x": 900,
         "y": 2155
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 850,
         "y": 880
        }
       }
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
       "val": "Verify AUTO as install",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 850,
         "y": 1015
        },
        "NG": {
         "img": "ngped",
         "x": 900,
         "y": 2212
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Decision height selector",
       "val": "“-20” or as needed",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Mode selector",
       "val": "MAP",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Range selector",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "TRAFFIC (TFC) switch (as installed)",
       "val": "TFC",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "WEATHER RADAR",
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195
        }
       }
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
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 850,
         "y": 1405
        },
        "NG": {
         "img": "ngped",
         "x": 895,
         "y": 2295
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 260,
         "y": 1575
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2375
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 550,
         "y": 1385
        },
        "NG": {
         "img": "ngped",
         "x": 632,
         "y": 2440
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 665
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2212
        }
       }
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
       "val": "Set",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 550,
         "y": 1250
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2310
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Code Indicator",
       "val": "2000, or ID (if installed)",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 550,
         "y": 1250
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2310
        }
       }
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
       "val": "Above",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 550,
         "y": 1250
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2310
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Transponder selector",
       "val": "No.1 or No.2 depending who is PF.",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 550,
         "y": 1250
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2310
        }
       }
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
       "val": "Guard closed",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 795,
         "y": 1725
        },
        "NG": {
         "img": "ngped",
         "x": 855,
         "y": 2510
        }
       }
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
       "val": "TEST",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 550,
         "y": 1250
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2310
        }
       }
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
       "val": "Expanded scale mode except PLAN",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195
        }
       }
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
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 665
        }
       }
      },
      {
       "k": "A",
       "tag": "T:3724",
       "item": "TEST",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 665
        }
       }
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
       "val": "TEST",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 665
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2212
        }
       }
      },
      {
       "k": "A",
       "tag": "NG+T:3722,3723",
       "item": "WXR",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 665
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2212
        }
       }
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
       "val": "TEST",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 665
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2212
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "GAIN control",
       "val": "AUTO",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 665
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2212
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Range selector",
       "val": "10",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 665
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2212
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "BRT control",
       "val": "Desired brightness",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 665
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2212
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Test pattern",
       "val": "Check",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 665
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2212
        }
       }
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
       "val": "Select each range",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 665
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2212
        }
       }
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
       "val": "As desired",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 665
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2212
        }
       }
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
       "val": "Push momentarily",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1400,
         "y": 730
        },
        "NG": {
         "img": "ngip",
         "x": 1080,
         "y": 1595
        }
       }
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
  },
  {
   "id": "pcap",
   "title": "Preflight Procedure – Captain",
   "section": "2.2.14",
   "pages": {
    "ch": "49–55",
    "pdf": "117–123"
   },
   "trigger": [
    "Captain Call “PREFLIGHT Procedure.”"
   ],
   "intro": [
    "The captain normally does this procedure. The first officer may do this procedure if needed.",
    "Captain will advise First Officer for light test and both pilots will observe the lights in a scan flow.",
    "After light test completed or during Scan Flow of Preflight Procedure, F/O will perform GPWS test. SP.15, Transponder Test SP.11.1 and weather radar test SP.11.1",
    "The light test is required before first leg of the flight duty. The fire warning lights shall not be checked during this test. Individual test switches or push to test features shall be used to check the lights which do not illuminate during the light test. Scan flow shall be used to verify that all other lights are flashing or illuminated. And also all system annunciator panel lights shall be verified to illuminate."
   ],
   "who": "Captain (First Officer if needed)",
   "callouts": [
    {
     "who": "C",
     "text": "PREFLIGHT Procedure."
    }
   ],
   "rows": [
    {
     "who": "C",
     "panel": "Lights",
     "mock": null,
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
       "text": "The instrument crosscheck shall be performed before each sector following IRS alignment."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Lights",
       "val": "TEST",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 795,
         "y": 225
        },
        "NG": {
         "img": "ngip",
         "x": 578,
         "y": 1318
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Master LIGHTS TEST and DIM switch",
       "val": "TEST",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 795,
         "y": 225
        },
        "NG": {
         "img": "ngip",
         "x": 578,
         "y": 1318
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "The fire warning lights are not checked during this test. Use individual test switches or push to test features to check lights which do not illuminate during the light test. Use scan flow to verify that all other lights are flashing or illuminated. Verify that all system annunciator panel lights are illuminated."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Master LIGHTS TEST and DIM switch",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 795,
         "y": 225
        },
        "NG": {
         "img": "ngip",
         "x": 578,
         "y": 1318
        }
       }
      }
     ]
    },
    {
     "who": "C",
     "panel": "EFIS control panel",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "49–50",
      "pdf": "117–118"
     },
     "tag": "NG",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(NG) EFIS control panel",
       "val": "Set",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "MINIMUMS reference selector",
       "val": "RADIO or BARO",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "MINIMUMS selector",
       "val": "Set Engine Failure Flaps Retraction Altitude",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "FLIGHT PATH VECTOR switch",
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "METERS switch",
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "BAROMETRIC reference selector",
       "val": "IN or HPA",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "BAROMETRIC selector",
       "val": "Set local altimeter setting",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "VOR/ADF switches",
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Mode selector",
       "val": "MAP",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "CENTRE switch",
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Range selector",
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "TRAFFIC switch",
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "WEATHER RADAR",
       "val": "Off",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
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
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      }
     ]
    },
    {
     "who": "C",
     "panel": "HSI Switch",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "50",
      "pdf": "118"
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
     "who": "C",
     "panel": "NAV MODE selector",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "50",
      "pdf": "118"
     },
     "tag": "CL",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(CL) NAV MODE selector",
       "val": "AUTO",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 640,
         "y": 75,
         "check": "Метка на селекторе NAV (FMC / ANS-L / ANS-R) на glareshield стороны Captain. ⚠ проверить"
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "Select FMC, ANS-L or ANS-R as needed for navigation system to be used for departure."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Mode control panel",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "50",
      "pdf": "118"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Mode control panel",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 60
        },
        "NG": {
         "img": "ngip",
         "x": 780,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "COURSE(S)",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 60
        },
        "NG": {
         "img": "ngip",
         "x": 780,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "FLIGHT DIRECTOR switch(-es)",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 60
        },
        "NG": {
         "img": "ngip",
         "x": 780,
         "y": 1175
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "Move the switch for the pilot flying to ON first."
      },
      {
       "k": "N",
       "tag": "",
       "text": "If F/O push move the switch F/D at Captain Side, it can count as good judgement."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Bank angle selector",
       "val": "25 or as needed",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 60
        },
        "NG": {
         "img": "ngip",
         "x": 780,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Autopilot DISENGAGE bar",
       "val": "UP",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 60
        },
        "NG": {
         "img": "ngip",
         "x": 780,
         "y": 1175
        }
       }
      }
     ]
    },
    {
     "who": "C",
     "panel": "Oxygen (crew mask)",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "50–52",
      "pdf": "118–120"
     },
     "tag": "",
     "lines": [
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
       "text": "Release the RESET/TEST switch and the EMERGENCY/Test selector. Verify that the yellow cross does not show in the flow indicator."
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
       "val": "TEST"
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
       "val": "TEST"
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
      }
     ]
    },
    {
     "who": "C",
     "panel": "Marker beacon",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "52",
      "pdf": "120"
     },
     "tag": "CL",
     "lines": [
      {
       "k": "A",
       "tag": "T:3721",
       "item": "(UP-B3721) Marker beacon lights",
       "val": "Test",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 75,
         "y": 380
        }
       }
      },
      {
       "k": "A",
       "tag": "T:3722,3723,3724,3729",
       "item": "(UP-B3722, UP-B3723, UP-B3724, UP-B3729) Marker beacon switch",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 75,
         "y": 380
        }
       }
      }
     ]
    },
    {
     "who": "C",
     "panel": "Clock",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "52",
      "pdf": "120"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Clock",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 85,
         "y": 500
        },
        "NG": {
         "img": "ngip",
         "x": 165,
         "y": 1420
        }
       }
      },
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) TIME/DATE pushbutton",
       "val": "UTC time",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 85,
         "y": 500
        },
        "NG": {
         "img": "ngip",
         "x": 165,
         "y": 1420
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify the date and time are correct."
      }
     ]
    },
    {
     "who": "C",
     "panel": "NOSE WHEEL STEERING switch",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "52",
      "pdf": "120"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "NOSE WHEEL STEERING switch",
       "val": "GUARD closed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 155,
         "y": 1475
        }
       }
      }
     ]
    },
    {
     "who": "C",
     "panel": "Display select panel",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "52",
      "pdf": "120"
     },
     "tag": "NG",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(NG) Display select panel",
       "val": "Set",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 360,
         "y": 1310
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "MAIN PANEL DISPLAY UNITS selector",
       "val": "NORM",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 360,
         "y": 1310
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "LOWER DISPLAY UNIT selector",
       "val": "NORM",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 360,
         "y": 1310
        }
       }
      }
     ]
    },
    {
     "who": "C",
     "panel": "TAKEOFF CONFIG / CABIN ALTITUDE lights",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "52",
      "pdf": "120"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "TAKEOFF CONFIG light (if installed and operative)",
       "val": "Verify extinguished",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 437,
         "y": 1355
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "CABIN ALTITUDE light (if installed and operative)",
       "val": "Verify extinguished",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 437,
         "y": 1355
        }
       }
      }
     ]
    },
    {
     "who": "C",
     "panel": "CDU",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "52",
      "pdf": "120"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Do the Initial Data and Navigation Data steps from the CDU Preflight Procedure and verify that the IRS alignment completed before checking the flight instruments."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Flight instruments",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "52–53",
      "pdf": "120–121"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Flight instruments",
       "val": "Check",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 330,
         "y": 330
        },
        "NG": {
         "img": "ngip",
         "x": 300,
         "y": 1420
        }
       }
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) Airspeed cursor control",
       "val": "Push.",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 330,
         "y": 330
        },
        "NG": {
         "img": "ngip",
         "x": 300,
         "y": 1420
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the flight instrument indications are correct."
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
       "tag": "NG+T:3722,3723,3724,3729",
       "text": "(NG and UP-B3722, UP-B3723, UP-B3724, UP-B3729) AFDS status is FD"
      },
      {
       "k": "V",
       "tag": "T:3721",
       "text": "(UP-B3721) A/P status is A/P OFF"
      },
      {
       "k": "X",
       "tag": "NG",
       "text": "(NG) Select the map mode"
      },
      {
       "k": "X",
       "tag": "CL",
       "text": "(CL) Set the altimeter."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Disengage light TEST switch",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "53",
      "pdf": "121"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Disengage light TEST switch",
       "val": "Hold to 1",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 608,
         "y": 250
        },
        "NG": {
         "img": "ngip",
         "x": 546,
         "y": 1312
        }
       }
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
       "val": "Hold to 2",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 608,
         "y": 250
        },
        "NG": {
         "img": "ngip",
         "x": 546,
         "y": 1312
        }
       }
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
       "text": "Verify that the FMC light is illuminated steady amber."
      }
     ]
    },
    {
     "who": "C",
     "panel": "STAB OUT OF TRIM light",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "53",
      "pdf": "121"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "STAB OUT OF TRIM light",
       "val": "Verify extinguished",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 818,
         "y": 440
        },
        "NG": {
         "img": "ngip",
         "x": 573,
         "y": 1345
        }
       }
      }
     ]
    },
    {
     "who": "C",
     "panel": "Display select switches (Classic tails)",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "53",
      "pdf": "121"
     },
     "tag": "T:3722,3723,3724,3729",
     "lines": [
      {
       "k": "H",
       "tag": "T:3722,3723",
       "text": "UP-B3722, UP-B3723"
      },
      {
       "k": "A",
       "tag": "T:3722,3723",
       "item": "Weather radar display select switch",
       "val": "Off"
      },
      {
       "k": "H",
       "tag": "T:3722,3723,3724",
       "text": "UP-B3722, UP-B3723, UP-B3724"
      },
      {
       "k": "A",
       "tag": "T:3722,3723,3724",
       "item": "Terrain display select switch",
       "val": "As needed"
      },
      {
       "k": "H",
       "tag": "T:3729",
       "text": "UP-B3729"
      },
      {
       "k": "A",
       "tag": "T:3729",
       "item": "Weather radar /Terrain display select switch",
       "val": "Off/As needed"
      },
      {
       "k": "H",
       "tag": "T:3722,3723",
       "text": "UP-B3722, UP-B3723"
      },
      {
       "k": "A",
       "tag": "T:3722,3723",
       "item": "Terrain override display select switch",
       "val": "Lights extinguished"
      }
     ]
    },
    {
     "who": "C",
     "panel": "Standby instruments",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "53",
      "pdf": "121"
     },
     "tag": "CL+T:3725",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(CL and UP-B3725) Standby instruments",
       "val": "Check",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 700,
         "y": 360
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Standby altimeter",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 700,
         "y": 360
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the flight instrument indications are correct."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that no flags are shown."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Standby horizon",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 700,
         "y": 360
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Gyro caging control",
       "val": "Pull, then release",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 700,
         "y": 360
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Approach mode selector",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 700,
         "y": 360
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the flight instrument indications are correct."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that no flags are shown."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Integrated standby flight display",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "53",
      "pdf": "121"
     },
     "tag": "X:3725",
     "lines": [
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG except UP-B3725) Integrated standby flight display",
       "val": "Set",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 668,
         "y": 1340
        }
       }
      },
      {
       "k": "V",
       "tag": "NG",
       "text": "Verify that the approach mode display is blank."
      },
      {
       "k": "X",
       "tag": "NG",
       "text": "Set the altimeter."
      },
      {
       "k": "V",
       "tag": "NG",
       "text": "Verify that the flight instrument indications are correct."
      },
      {
       "k": "V",
       "tag": "NG",
       "text": "Verify that no flags or messages are shown."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Standby RMI",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "53",
      "pdf": "121"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Standby RMI",
       "val": "Set"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Select either VOR or ADF."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify only expected flags are shown."
      },
      {
       "k": "Q",
       "tag": "",
       "text": "В документе пункт «Standby RMI» стоит сразу после блока «(NG except UP-B3725) Integrated standby flight display», без пометки CL/NG. Показан для обоих типов."
      }
     ]
    },
    {
     "who": "C",
     "panel": "STAB OUT OF TRIM light",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "54",
      "pdf": "122"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "STAB OUT OF TRIM light",
       "val": "Verify extinguished",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 818,
         "y": 440
        },
        "NG": {
         "img": "ngip",
         "x": 573,
         "y": 1345
        }
       }
      },
      {
       "k": "Q",
       "tag": "",
       "text": "«STAB OUT OF TRIM light …… Verify extinguished» в документе повторяется дважды: на стр. 53 и стр. 54. Перенесено как в документе."
      }
     ]
    },
    {
     "who": "C",
     "panel": "SPEEDBRAKE lever",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "54",
      "pdf": "122"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "SPEEDBRAKE lever",
       "val": "DOWN detent",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 330,
         "y": 130
        },
        "NG": {
         "img": "ngped",
         "x": 657,
         "y": 1782
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the SPEED BRAKE DO NOT ARM light is extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the SPEED BRAKE ARMED light is extinguished."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Thrust levers",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "54",
      "pdf": "122"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Reverse thrust levers",
       "val": "Down",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 545,
         "y": 370
        },
        "NG": {
         "img": "ngped",
         "x": 760,
         "y": 1910
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Forward thrust levers",
       "val": "Closed",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 545,
         "y": 370
        },
        "NG": {
         "img": "ngped",
         "x": 760,
         "y": 1910
        }
       }
      }
     ]
    },
    {
     "who": "C",
     "panel": "FLAP lever",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "54",
      "pdf": "122"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "FLAP lever",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 765,
         "y": 270
        },
        "NG": {
         "img": "ngped",
         "x": 857,
         "y": 1875
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "Set the flap lever to agree with the flap position."
      },
      {
       "k": "V",
       "tag": "T:3729,3730,3731,3732,3741",
       "text": "(UP-B3729, UP-B3730, UP-B3731, UP-B3732, UP-B3741) Verify that the FLAP LOAD RELIEF light is extinguished."
      }
     ]
    },
    {
     "who": "C",
     "panel": "STABILIZER TRIM cutout switches",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "54",
      "pdf": "122"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "STABILIZER TRIM cutout switches",
       "val": "NORMAL",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 1110,
         "y": 640
        },
        "NG": {
         "img": "ngped",
         "x": 1017,
         "y": 2016
        }
       }
      }
     ]
    },
    {
     "who": "C",
     "panel": "Engine Fuel Spar Valve Actuator check",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "54",
      "pdf": "122"
     },
     "tag": "NG",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "For NG only: Operational check of the Engine Fuel Spar Valve Actuator."
      },
      {
       "k": "A",
       "tag": "",
       "item": "1 ENGINE START LEVERS",
       "val": "IDLE",
       "loc": {
        "NG": {
         "img": "ngped",
         "x": 760,
         "y": 2056,
         "check": "Метка у рычагов ENGINE START под РУД на NG-макете. ⚠ проверить"
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify the 1 SPAR VALVE CLOSED light indication illuminates bright and then extinguishes."
      },
      {
       "k": "A",
       "tag": "",
       "item": "1 ENGINE START LEVERS",
       "val": "CUTOFF",
       "loc": {
        "NG": {
         "img": "ngped",
         "x": 760,
         "y": 2056
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify the 1 SPAR VALVE CLOSED light indication illuminates bright and then dim."
      },
      {
       "k": "X",
       "tag": "",
       "text": "If the test fails (light is not coincide with instructions), notify maintenance."
      },
      {
       "k": "A",
       "tag": "",
       "item": "2 ENGINE START LEVERS",
       "val": "IDLE",
       "loc": {
        "NG": {
         "img": "ngped",
         "x": 760,
         "y": 2056
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify the 2 SPAR VALVE CLOSED light indication illuminates bright and then extinguishes."
      },
      {
       "k": "A",
       "tag": "",
       "item": "2 ENGINE START LEVERS",
       "val": "CUTOFF",
       "loc": {
        "NG": {
         "img": "ngped",
         "x": 760,
         "y": 2056
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify the 2 SPAR VALVE CLOSED light indication illuminates bright and then dim."
      },
      {
       "k": "X",
       "tag": "",
       "text": "If the test fails (light is not coincide with instructions), notify maintenance."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Engine start levers",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "54",
      "pdf": "122"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Engine start levers",
       "val": "CUTOFF",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 545,
         "y": 520,
         "check": "На Classic-макете рычаги ENGINE START не подписаны; метка у рычагов под РУД. ⚠ проверить"
        },
        "NG": {
         "img": "ngped",
         "x": 760,
         "y": 2056
        }
       }
      }
     ]
    },
    {
     "who": "C",
     "panel": "Parking brake",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "54",
      "pdf": "122"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Parking brake",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 385,
         "y": 610
        },
        "NG": {
         "img": "ngped",
         "x": 683,
         "y": 2042
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the parking brake warning light is illuminated."
      },
      {
       "k": "N",
       "tag": "",
       "text": "Do not assume that the parking brake will prevent airplane movement. Accumulator pressure can be insufficient."
      }
     ]
    },
    {
     "who": "C",
     "panel": "VHF communications radios",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "54",
      "pdf": "122"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "VHF communications radios",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 230,
         "y": 880
        },
        "NG": {
         "img": "ngped",
         "x": 632,
         "y": 2142
        }
       }
      }
     ]
    },
    {
     "who": "C",
     "panel": "Radio tuning panel",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "54",
      "pdf": "122"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Radio tuning panel",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 230,
         "y": 880
        },
        "NG": {
         "img": "ngped",
         "x": 632,
         "y": 2142
        }
       }
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
     "who": "C",
     "panel": "VHF NAVIGATION radios",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "54",
      "pdf": "122"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "VHF NAVIGATION radios frequency set for departure",
       "val": "Verify AUTO or as needed",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 210,
         "y": 1015
        },
        "NG": {
         "img": "ngped",
         "x": 632,
         "y": 2202
        }
       }
      }
     ]
    },
    {
     "who": "C",
     "panel": "EFIS control panel",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "54–55",
      "pdf": "122–123"
     },
     "tag": "NG",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(NG) EFIS control panel",
       "val": "Set",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Decision height selector",
       "val": "“-20” or as needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Mode selector",
       "val": "MAP",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Range selector",
       "val": "As needed",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "TRAFFIC switch (as installed)",
       "val": "TFC",
       "loc": {
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      },
      {
       "k": "Q",
       "tag": "",
       "text": "В процедуре Captain «(NG) EFIS control panel …… Set» встречается дважды (стр. 49–50 и стр. 54–55) с разными значениями. Перенесено как в документе."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Audio control panel",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "55",
      "pdf": "123"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Audio control panel",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 165,
         "y": 1440
        },
        "NG": {
         "img": "ngped",
         "x": 630,
         "y": 2270
        }
       }
      }
     ]
    },
    {
     "who": "B",
     "panel": "Rudder and Aileron trim",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "55",
      "pdf": "123"
     },
     "tag": "",
     "lines": [
      {
       "k": "W",
       "tag": "",
       "text": "Both pilots awareness must be involved in the following check. Once started, never interrupt the check, failure to return trims to zero can result in airplane loss of control."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Rudder and Aileron trim",
       "val": "Check",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 510,
         "y": 1680
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2465
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Set system B electric HYDRAULIC PUMP switch",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 510,
         "y": 1680,
         "check": "Пункт «system B electric HYDRAULIC PUMP switch» на overhead; метка оставлена на панели триммеров, на overhead не продублирована."
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2465,
         "check": "Пункт «system B electric HYDRAULIC PUMP switch» на overhead; метка оставлена на панели триммеров, на overhead не продублирована."
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "Check each trim for freedom of movement then set rudder and aileron trim at zero."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Set system B electric HYDRAULIC PUMP switch",
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 510,
         "y": 1680
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2465
        }
       }
      },
      {
       "k": "Q",
       "tag": "",
       "text": "Пункт «Rudder and Aileron trim» показан как совместный, т.к. в WARNING сказано «Both pilots awareness must be involved»; исполнителя действия OM-B прямо не называет."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Seat",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "55",
      "pdf": "123"
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
     "who": "C",
     "panel": "Rudder pedals",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "55",
      "pdf": "123"
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
     "who": "C",
     "panel": "Seat belt and shoulder harness",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "55",
      "pdf": "123"
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
      "ch": "55",
      "pdf": "123"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "After F/O Call “PREFLIGHT PROCEDURE COMPLETED”"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Captain Call “PREFLIGHT CHECKLIST”"
      },
      {
       "k": "K",
       "tag": "",
       "text": "PREFLIGHT PROCEDURE COMPLETED"
      },
      {
       "k": "K",
       "tag": "",
       "text": "PREFLIGHT CHECKLIST"
      }
     ]
    }
   ]
  },
  {
   "id": "bstart",
   "title": "Before Start Procedure",
   "section": "2.2.21",
   "pages": {
    "ch": "62–65",
    "pdf": "130–133"
   },
   "trigger": [
    "Start the Before Start Procedure after all papers are on board",
    "Initiate BEFORE START PROCEDURE only after CDU Pre-flight Procedure – Performance Data steps have done."
   ],
   "intro": [
    "If the oil temperature is below -20 degrees Celsius, pilot must call maintenance personnel to heat up oil. Engine start with cold oil can lead to damage of starter mechanism.",
    "It is necessary to move ENGINE START SWICH to CONT mode for oil temperature check on the ground."
   ],
   "who": "Captain / F/O по колонкам документа (C, F/O, PF)",
   "callouts": [
    {
     "who": "C",
     "text": "BEFORE START PROCEDURE"
    }
   ],
   "rows": [
    {
     "who": "-",
     "panel": "Refuelling",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "62",
      "pdf": "130"
     },
     "tag": "",
     "lines": [
      {
       "k": "N",
       "tag": "",
       "text": "Refuelling must be completed before Actual ZFW and MAC are entered into FMC."
      }
     ]
    },
    {
     "who": "CFO",
     "panel": "Flight Without Cabin Crew",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "62",
      "pdf": "130"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Flight Without Cabin Crew"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Captain or on the request of Captain, F/O will complete a Safety Check and operate the doors. The Safety Check must be completed prior to push back or taxi."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Check that Engineering has completed the Maintenance Checklist."
      },
      {
       "k": "X",
       "tag": "",
       "text": "This is to ensure the Safety Check of cabin, lavatories, galleys prior to push back or taxi:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Check that required meals and beverages are on board. Dry ice will be required for chilling meals."
      },
      {
       "k": "V",
       "tag": "",
       "text": "All galley power and cabin systems have been switched off, except when required by the crew."
      },
      {
       "k": "V",
       "tag": "",
       "text": "All galley equipment is stowed, the trolleys are in storage place with brakes activated, containers are stowed, secured."
      },
      {
       "k": "V",
       "tag": "",
       "text": "All hand baggage is stowed in secure manner or closed in overhead lockers. All overhead bins are closed and all stowage compartments are latched."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Seat backs are upright."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Arm-rests are turned down."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Window blinds are opened."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Curtains of the cabin and galleys are secured open."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Lavatories are empty, closed and latched; the toilet lid is down."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Aisle between rows of seats and access to the emergency exits is free of obstructions."
      },
      {
       "k": "V",
       "tag": "",
       "text": "All doors must be closed/latched and armed before engine start or push-back."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Passengers (supernumeraries) are advised to be seated and fastened."
      },
      {
       "k": "A",
       "tag": "",
       "item": "AFT LEFT and RIGHT DOORS",
       "val": "CLOSE"
      },
      {
       "k": "A",
       "tag": "",
       "item": "RED FLAGS on windows of AFT L/R DOORS",
       "val": "Position ACROSS"
      },
      {
       "k": "A",
       "tag": "",
       "item": "ESCAPE SLIDES AFT L/R DOORS",
       "val": "ARM"
      },
      {
       "k": "A",
       "tag": "",
       "item": "FWD LEFT and RIGHT DOORS",
       "val": "CLOSE"
      },
      {
       "k": "A",
       "tag": "",
       "item": "RED FLAGS on windows of FWD L/R DOORS",
       "val": "Position ACROSS"
      },
      {
       "k": "A",
       "tag": "",
       "item": "ESCAPE SLIDES FWD L/R DOORS",
       "val": "ARM"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Captain or F/O will advise that doors are closed and armed."
      }
     ]
    },
    {
     "who": "B",
     "panel": "Takeoff Data calculation (EFB OPT)",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "63",
      "pdf": "131"
     },
     "tag": "",
     "lines": [
      {
       "k": "N",
       "tag": "",
       "text": "Two independent calculations are required when using EFB. This means that each pilot shall perform the whole calculation instead of a single calculation crosschecked by the other crew member, both pilot shall be crosscheck using compare calculation (OPT Performance Take-off page)."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Both Pilots will:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Follow EFB OPT Operational Procedure for Takeoff Data calculation."
      },
      {
       "k": "X",
       "tag": "",
       "text": "When make OPT calculation use next modes:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "THRUST RATING OPTIMUM (if applicable) choose when normal environment conditions or select TO RTG/WINDSHEAR RTG to mitigate weather influence"
      },
      {
       "k": "V",
       "tag": "",
       "text": "FLAP CONFIG choose OPTIMUM when normal environment conditions or FLAP CONFIG 1/5//10/15/25 when TORA is a factor or rough RW or Windshear is expected"
      },
      {
       "k": "N",
       "tag": "",
       "text": "For takeoffs, when conditions permit, consider using larger flap settings to provide shorter takeoff distance. Larger flap settings also provide greater tail clearance."
      },
      {
       "k": "N",
       "tag": "",
       "text": "Flaps 1 and 5 takeoffs have the least clearance. Consider using a larger flap setting for takeoffs and landing at light gross weights."
      },
      {
       "k": "V",
       "tag": "",
       "text": "IMCLB CONFIG choose NONE OR FIXED when normal environment conditions or OPTIMUM when during takeoff TOW In doubt, (there is high temperature, high aerodrome elevation, specific climb gradient during SID is required or combination of this factors)"
      },
      {
       "k": "N",
       "tag": "",
       "text": "If used IMCLB CONFIG OPTIMUM, note to flight log as remark “Takeoff is performed at ImCLB OPTIMUM and airport name”."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Remember that use of IMCLB CONFIG OPTIMUM mode leads to higher V1/Vr/V2 speeds and increase wheels workload!"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Use FMC PERF INIT page 1/2, ZFW entry from OPT W/B calculation or Loadsheet"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Ensure that N1 Thrust target, flap position, V1, VR, V2 on TAKEOFF REF page 1/2 correspond to EFB OPT calculations or applicable RW analysis"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Ensure when using reduced takeoff thrust (ATM) and Fixed Derate Thrust with ATM do not enter on N1 Limit page SEL Temperature more than 55 °C (NG), 50 °C (CL)."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify ZFW from the EFB or loadsheet, enter ZFW line on CDU Performance page and push EXEC key."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Select TAKEOFF REF 1/2 page: enter TO flaps into FLAPS line and MACTOW into CG line, crosscheck FMC and OPT calculation stabilizer takeoff trim setting ."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Enter Derate or/and SEL TEMP for takeoff and takeoff speeds in FMC which was calculated in OPT. Do not enter on N1 Limit page SEL Temperature more than 55 °C (NG), 50 °C (CL)."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Check CLB thrust on CLB page CDU and verify value should be lees than R-TO thrust. If more than R-TO choose CLB-1 or CLB-2."
      },
      {
       "k": "N",
       "tag": "",
       "text": "Takeoff Stabilizer Trim Setting depends on TOW, TO Flaps, CG % and TO Thrust. In the LOADSHEET TO STAB TRIM Setting calculation is based on TOW, TO Flaps (1&5), CG % and maximum certified TO Thrust. In the FMC TO STAB TRIM Setting calculation is based on TOW, TO Flaps, CG % and actual TO Thrust (Full Rated or Derated). If Full TO Thrust is used for Takeoff, then Loadsheet and FMC calculated TO STAB TRIM Settings should be the same. When the actual TO Thrust is reduced by Fixed Derate then the Loadsheet and FMC TO STAB TRIM Settings will be different. In this case OPT calculation data shall be used."
      }
     ]
    },
    {
     "who": "-",
     "panel": "Cabin Crew coordination",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "64",
      "pdf": "132"
     },
     "tag": "",
     "lines": [
      {
       "k": "V",
       "tag": "",
       "text": "Cabin Crew will receive permission from Captain prior to closing doors."
      },
      {
       "k": "V",
       "tag": "",
       "text": "If delay is expected coordinate with Cabin Crew and inform passengers."
      },
      {
       "k": "V",
       "tag": "",
       "text": "If time allows make general PA with greetings and information."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Advise Cabin Crew if short taxi time is expected to ensure sufficient time for pre takeoff announcement and safety demonstration."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Call",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "64",
      "pdf": "132"
     },
     "tag": "",
     "lines": [
      {
       "k": "K",
       "tag": "",
       "text": "BEFORE START PROCEDURE"
      }
     ]
    },
    {
     "who": "B",
     "panel": "CDU display",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "64",
      "pdf": "132"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "CDU display",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1207,
         "y": 780
        },
        "NG": {
         "img": "ngip",
         "x": 600,
         "y": 1660
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "Normally the PF selects the TAKEOFF REF page."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Normally the PM selects the LEGS page."
      }
     ]
    },
    {
     "who": "B",
     "panel": "N1 bugs",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "64",
      "pdf": "132"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "N1 bugs",
       "val": "Check",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 935,
         "y": 450
        },
        "NG": {
         "img": "ngip",
         "x": 760,
         "y": 1440
        }
       }
      }
     ]
    },
    {
     "who": "B",
     "panel": "IAS bugs",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "64",
      "pdf": "132"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "IAS bugs",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 188,
         "y": 377
        },
        "NG": {
         "img": "ngip",
         "x": 300,
         "y": 1420
        }
       }
      },
      {
       "k": "V",
       "tag": "CL",
       "text": "(CL) Verify that the reference bugs are at V1, VR, V2+15, and flaps up maneuvering speed"
      }
     ]
    },
    {
     "who": "C",
     "panel": "MCP",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "64",
      "pdf": "132"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "MCP",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 60
        },
        "NG": {
         "img": "ngip",
         "x": 780,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "IAS/MACH selector",
       "val": "Set V2",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 60
        },
        "NG": {
         "img": "ngip",
         "x": 780,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "RWY heading",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 60
        },
        "NG": {
         "img": "ngip",
         "x": 780,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Initial altitude",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 60
        },
        "NG": {
         "img": "ngip",
         "x": 780,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Set AUTOTHROTTLE ARM switch",
       "val": "ARM",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 60
        },
        "NG": {
         "img": "ngip",
         "x": 780,
         "y": 1175
        }
       }
      },
      {
       "k": "X",
       "tag": "NG",
       "text": "(NG) Arm LNAV/VNAV as needed"
      }
     ]
    },
    {
     "who": "PF",
     "panel": "Taxi and Takeoff briefings",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "64",
      "pdf": "132"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Taxi and Takeoff briefings",
       "val": "Complete"
      },
      {
       "k": "X",
       "tag": "",
       "text": "The pilot who will do the takeoff does the taxi and takeoff briefings, if not completed before."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Exterior doors",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "64",
      "pdf": "132"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Exterior doors",
       "val": "Verify closed"
      }
     ]
    },
    {
     "who": "B",
     "panel": "Flight deck windows",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "64",
      "pdf": "132"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Flight deck windows",
       "val": "Closed and locked"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Flight deck door",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "64",
      "pdf": "132"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Flight deck door",
       "val": "Closed and locked",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 830,
         "y": 1765
        },
        "NG": {
         "img": "ngped",
         "x": 930,
         "y": 2510
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the CAB DOOR UNLOCKED/LOCK FAIL light is extinguished."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Fuel panel",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "64",
      "pdf": "132"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Fuel panel",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 165,
         "y": 1760
        },
        "NG": {
         "img": "ngovh",
         "x": 540,
         "y": 870
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "If the center tank fuel quantity exceeds 1000 pounds/453 kilograms:"
      },
      {
       "k": "A",
       "tag": "",
       "item": "LEFT and RIGHT CENTER FUEL PUMPS switches",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 165,
         "y": 1760
        },
        "NG": {
         "img": "ngovh",
         "x": 540,
         "y": 870
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the LOW PRESSURE lights illuminate momentarily and then extinguish."
      },
      {
       "k": "V",
       "tag": "",
       "text": "If the LOW PRESSURE light stays illuminated turn off the CENTER FUEL PUMPS switch."
      },
      {
       "k": "A",
       "tag": "",
       "item": "AFT and FORWARD FUEL PUMPS switches",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 165,
         "y": 1760
        },
        "NG": {
         "img": "ngovh",
         "x": 540,
         "y": 870
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the LOW PRESSURE lights are extinguished."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Hydraulic panel",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "65",
      "pdf": "133"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Hydraulic panel",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 912,
         "y": 1440
        },
        "NG": {
         "img": "ngovh",
         "x": 857,
         "y": 715
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "If push back is needed and nose gear steering lock out pin is not insert:"
      },
      {
       "k": "A",
       "tag": "",
       "item": "System A HYDRAULIC PUMP switches",
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 912,
         "y": 1440
        },
        "NG": {
         "img": "ngovh",
         "x": 857,
         "y": 715
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the system A pump LOW PRESSURE lights are illuminated."
      },
      {
       "k": "A",
       "tag": "",
       "item": "System B electric HYDRAULIC PUMP switch",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 912,
         "y": 1440
        },
        "NG": {
         "img": "ngovh",
         "x": 857,
         "y": 715
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the system B electric pump LOW PRESSURE light is extinguished."
      },
      {
       "k": "W",
       "tag": "",
       "text": "Do not pressurize hydraulic system A. Unwanted tow bar movement can occur."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the brake pressure is 2,800 psi minimum."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the system B pressure is 2,800 psi minimum."
      },
      {
       "k": "X",
       "tag": "",
       "text": "If pushback is not needed or nose gear lock out pin is insert:"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Electric HYDRAULIC PUMP switches",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 912,
         "y": 1440
        },
        "NG": {
         "img": "ngovh",
         "x": 857,
         "y": 715
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the electric pump LOW PRESSURE lights are extinguished."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the brake pressure is 2,800 psi minimum."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the system A and B pressures are 2,800 psi minimum."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Trim",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "65",
      "pdf": "133"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Trim",
       "val": "Set",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 510,
         "y": 1680
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2465
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "Check each trim for freedom of movement."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Stabilizer trim",
       "val": "___UNITS",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 380,
         "y": 420
        },
        "NG": {
         "img": "ngped",
         "x": 685,
         "y": 1935,
         "check": "Метка на шкале STAB TRIM у рукоятки триммера. ⚠ проверить"
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "Set the trim for takeoff."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the trim is in the green band."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Aileron trim",
       "val": "0 units",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 370,
         "y": 1730
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2465
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Rudder trim",
       "val": "0 units",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 510,
         "y": 1680
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2465
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "ANTI COLLISION light switch",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "65",
      "pdf": "133"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "ANTI COLLISION light switch",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1120,
         "y": 2065
        },
        "NG": {
         "img": "ngovh",
         "x": 955,
         "y": 1002
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Call",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "65",
      "pdf": "133"
     },
     "tag": "",
     "lines": [
      {
       "k": "K",
       "tag": "",
       "text": "BEFORE START PROCEDURE COMPLETED"
      }
     ]
    },
    {
     "who": "C",
     "panel": "Call",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "65",
      "pdf": "133"
     },
     "tag": "",
     "lines": [
      {
       "k": "K",
       "tag": "",
       "text": "BEFORE START CHECKLIST"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "BEFORE START CHECKLIST",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "65",
      "pdf": "133"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Do the BEFORE START CHECKLIST."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Start, Push Back (Towing) clearance",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "65",
      "pdf": "133"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Flight crew shall only request engine start and/or pushback clearance after confirmation that Ground staff is ready for pushback"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Obtain Start, Push Back (Towing) clearance from ATC"
      }
     ]
    },
    {
     "who": "B",
     "panel": "Call ground",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "65",
      "pdf": "133"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Call ground for Push Back (Towing) and/or engines start"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Transponder",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "65",
      "pdf": "133"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Transponder",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 550,
         "y": 1250
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2310
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Transponder mode selector",
       "val": "ALT ON",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 550,
         "y": 1250
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2310
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "Transponder mode selector",
       "val": "XPNDR",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 550,
         "y": 1250
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2310
        }
       }
      },
      {
       "k": "N",
       "tag": "",
       "text": "At airports where ground tracking is not available, select STANDBY."
      },
      {
       "k": "N",
       "tag": "",
       "text": "At airports where ATC regulations require start of pushback immediately after receiving the clearance, Before Start Procedure and Before Start Checklist shall be accomplished prior to requesting ATC clearance for push and start."
      },
      {
       "k": "Q",
       "tag": "",
       "text": "Две строки «Transponder mode selector …… ALT ON» и «…… XPNDR» стоят подряд без условия выбора. Перенесено как в документе."
      }
     ]
    }
   ]
  },
  {
   "id": "push",
   "title": "Pushback or Towing Procedure",
   "section": "2.2.22",
   "pages": {
    "ch": "65–67",
    "pdf": "133–135"
   },
   "trigger": [
    "Before the first movement of the aircraft (pushback or towing), the flight crew shall verify that the cabin is secure. SCCM report the information “CABIN READY FOR MOVEMENT” via Interphone and after receiving confirmation from C or F/O “CABIN READY FOR MOVEMENT CONFIRM” first movement can be done."
   ],
   "intro": [
    "If jumpseat is occupied, both pilots must check and be sure that jumpseat occupant use seatbelts and all personal belongings are taken away before commencement of the aircraft movement.",
    "Flight crew shall only request engine start and/or pushback clearance after confirmation that Ground staff is ready for pushback",
    "The Engine Start procedure may be done during pushback or towing.",
    "Do not accomplish a crossbleed start during pushback."
   ],
   "who": "Captain / F/O по колонкам документа",
   "callouts": [
    {
     "who": "CFO",
     "text": "CABIN READY FOR MOVEMENT CONFIRM"
    }
   ],
   "rows": [
    {
     "who": "-",
     "panel": "Cautions",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "66",
      "pdf": "134"
     },
     "tag": "",
     "lines": [
      {
       "k": "C",
       "tag": "",
       "text": "Do not hold or turn the nose wheel steering wheel during pushback or towing. This can damage the nose gear or the tow bar."
      },
      {
       "k": "C",
       "tag": "",
       "text": "Do not use airplane brakes to stop the airplane during pushback or towing. This can damage the nose gear or the tow bar."
      },
      {
       "k": "C",
       "tag": "",
       "text": "When operating on slippery surface, engine start during push back is not recommended due to risk of undesirable aircraft/tow tractor drift. Delay engine start until the end of the push back, setting the Parking Brake and tow bar disconnection."
      }
     ]
    },
    {
     "who": "B",
     "panel": "Confirm with Ground staff",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "66",
      "pdf": "134"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "The following actions, if applicable, must be confirmed between Ground staff and Flight crew before pushback:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Chocks are removed"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Nose wheel steering is depressurized"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Setting of parking brake"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Pressurization of hydraulic systems is configured"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Lifting of the aircraft"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Flight crew shall confirm that Ground staff is ready for pushback and/or engine start before requesting the clearance"
      },
      {
       "k": "V",
       "tag": "",
       "text": "If pushback/towing has to be stopped, the following callout must be made directly to the Ground staff: “STOP PUSHBACK/TOWING”."
      },
      {
       "k": "V",
       "tag": "",
       "text": "During darkness or reduced visibility a torch light/illuminated bat must be used by the Ground staff to improve visibility of the all clear signal. Flight crew shall use the flight deck dome light."
      },
      {
       "k": "V",
       "tag": "",
       "text": "After disconnecting, Ground staff shall show steering lockout pin."
      },
      {
       "k": "K",
       "tag": "",
       "text": "STOP PUSHBACK/TOWING"
      }
     ]
    },
    {
     "who": "C",
     "panel": "Communications with ground handling",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "66–67",
      "pdf": "134–135"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Communications with ground handling (Captain — GROUND CREWMAN):"
      },
      {
       "k": "K",
       "tag": "",
       "text": "Captain: CONFIRM BYPASS PIN INSERT, MAY WE RELEASE PARKING BRAKE?"
      },
      {
       "k": "K",
       "tag": "",
       "text": "GROUND CREWMAN: RELEASE PARKING BRAKE"
      },
      {
       "k": "K",
       "tag": "",
       "text": "Captain: CLEARED TO PUSH, PARKING BRAKE RELEASED."
      },
      {
       "k": "K",
       "tag": "",
       "text": "GROUND CREWMAN: COMMENCING PUSHBACK."
      },
      {
       "k": "K",
       "tag": "",
       "text": "Captain: MAY WE START ENGINE NUMBER TWO?"
      },
      {
       "k": "K",
       "tag": "",
       "text": "GROUND CREWMAN: CLEAR TWO"
      },
      {
       "k": "K",
       "tag": "",
       "text": "Captain: MAY WE START ENGINE NUMBER ONE?"
      },
      {
       "k": "K",
       "tag": "",
       "text": "GROUND CREWMAN: CLEAR ONE"
      },
      {
       "k": "K",
       "tag": "",
       "text": "GROUND CREWMAN: PUSHBACK COMPLETE, SET PARKING BRAKE"
      },
      {
       "k": "K",
       "tag": "",
       "text": "Captain: PARKING BRAKE SET, [CLEARED TO] DISCONNECT TOWBAR AND BYPASS PIN, ADVISE WHEN CLEAR"
      },
      {
       "k": "K",
       "tag": "",
       "text": "GROUND CREWMAN: TOWBAR IS DISCONNECTED, BYPASS PIN IS REMOVED, HAND SIGNALS ON THE LEFT (RIGHT)"
      },
      {
       "k": "K",
       "tag": "",
       "text": "Captain: HAND SIGNALS ON THE LEFT (RIGHT) WITH THE PIN REMOVED"
      },
      {
       "k": "Q",
       "tag": "",
       "text": "Порядок строк таблицы «Communications with ground handling» восстановлен по двум колонкам (Captain / GROUND CREWMAN) при переходе таблицы со стр. 66 на 67. Проверьте очерёдность реплик по оригиналу."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Ground handling personnel",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "67",
      "pdf": "135"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Establish communications with ground handling personnel"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Block Time",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "67",
      "pdf": "135"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Block Time",
       "val": "Start"
      }
     ]
    },
    {
     "who": "C",
     "panel": "Parking brake",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "67",
      "pdf": "135"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Set or release the parking brake as directed by ground handling personnel."
      }
     ],
     "loc": {
      "CL": {
       "img": "aft",
       "x": 385,
       "y": 610
      },
      "NG": {
       "img": "ngped",
       "x": 683,
       "y": 2042
      }
     }
    },
    {
     "who": "B",
     "panel": "When pushback or towing is completed",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "67",
      "pdf": "135"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "When pushback or towing is completed:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the tow bar is disconnected."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Nose gear steering lockout pin",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "67",
      "pdf": "135"
     },
     "tag": "",
     "lines": [
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the nose gear steering lockout pin is removed."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "System A HYDRAULIC PUMPS",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "67",
      "pdf": "135"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "System A HYDRAULIC PUMPS switches",
       "val": "ON.",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 912,
         "y": 1440
        },
        "NG": {
         "img": "ngovh",
         "x": 857,
         "y": 715
        }
       }
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the system A pump LOW PRESSURE lights are extinguished"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the system A pressure is 2800 psi minimum."
      },
      {
       "k": "N",
       "tag": "",
       "text": "Start engine number two when clear of potential FOD and ground obstacles."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Taxi clearance must only be requested after the all clear signal is received"
      }
     ]
    }
   ]
  },
  {
   "id": "estart",
   "title": "Engine Start Procedure",
   "section": "2.2.23",
   "pages": {
    "ch": "67–69",
    "pdf": "135–137"
   },
   "trigger": [
    "Call Engine Start Procedure (C)"
   ],
   "intro": [],
   "who": "Captain / F/O по колонкам документа",
   "callouts": [
    {
     "who": "C",
     "text": "Engine Start Procedure"
    }
   ],
   "rows": [
    {
     "who": "-",
     "panel": "Notes",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "67",
      "pdf": "135"
     },
     "tag": "",
     "lines": [
      {
       "k": "N",
       "tag": "CL",
       "text": "(CL) Use Hot Weather operation Engine start procedure when outside temperature ≥ 28° C"
      },
      {
       "k": "N",
       "tag": "",
       "text": "At first start of the day, both engines are to be started on R IGN. (In order to check the AC standby bus.) Alternate L and R, for subsequent starts. Continue the flight using the ignition position used for engine start."
      },
      {
       "k": "N",
       "tag": "NG",
       "text": "(for NG only): For the first flight of the day, at airport elevation at or above 2000 feet MSL, if the temperature below 5° C, consider placing the Ignitor select switch to BOTH before starting the engines. This may increase the likelihood of a successful engine start on the first attempt."
      }
     ]
    },
    {
     "who": "B",
     "panel": "Confirm with Ground staff",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "67",
      "pdf": "135"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "The following actions, if applicable, must be confirmed between Ground staff and Flight crew before Engine Start:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Chocks are removed"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Setting of parking brake"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Pressurization of hydraulic systems is configured"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Flight crew shall confirm that Ground staff is ready for engine start before requesting the clearance"
      },
      {
       "k": "V",
       "tag": "",
       "text": "During darkness or reduced visibility a torch light/illuminated bat must be used by the Ground staff to improve visibility of the all clear signal. Flight crew shall use the flight deck dome light."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Ground handling",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "67",
      "pdf": "135"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Establish communications with ground handling personnel"
      },
      {
       "k": "N",
       "tag": "",
       "text": "example of a radio communication between cockpit and ground crewman chapter 2.3.4"
      }
     ]
    },
    {
     "who": "C",
     "panel": "Call",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "67",
      "pdf": "135"
     },
     "tag": "",
     "lines": [
      {
       "k": "K",
       "tag": "",
       "text": "Engine Start Procedure"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Secondary engine indications",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "67",
      "pdf": "135"
     },
     "tag": "NG",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "(NG) Select the secondary engine indications."
      }
     ],
     "loc": {
      "NG": {
       "img": "ngip",
       "x": 773,
       "y": 1662
      }
     }
    },
    {
     "who": "FO",
     "panel": "Air conditioning PACK switches",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "68",
      "pdf": "136"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Check Air conditioning PACK switches are",
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1100,
         "y": 1462
        },
        "NG": {
         "img": "ngovh",
         "x": 957,
         "y": 717
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Start pressure",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "68",
      "pdf": "136"
     },
     "tag": "CL",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "(CL) Check start pressure",
       "val": "___psi",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1210,
         "y": 1390,
         "check": "Start pressure показан на манометре DUCT PRESS (PSI) на overhead; в OM-B прибор не назван. ⚠ проверить"
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 675
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "The minimum start pressure at sea level is 30 psi decrease the minimum start pressure 0,5 psi for each 1,000 feet above sea level."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Start sequence",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "68",
      "pdf": "136"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Start sequence",
       "val": "Announce"
      },
      {
       "k": "K",
       "tag": "",
       "text": "START ENGINE NO __"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "ENGINE START switch",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "68",
      "pdf": "136"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "ENGINE START switch to",
       "val": "GRD, start clock",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 635,
         "y": 2080
        },
        "NG": {
         "img": "ngovh",
         "x": 780,
         "y": 985
        }
       }
      }
     ]
    },
    {
     "who": "B",
     "panel": "N2 RPM",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "68",
      "pdf": "136"
     },
     "tag": "",
     "lines": [
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the N2 RPM increases"
      }
     ]
    },
    {
     "who": "C",
     "panel": "Engine start lever",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "68",
      "pdf": "136"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "When N1 rotation is seen and N2 is at 25%, or (if 25% N2 is not possible), at maximum motoring and a minimum of 20% N2):"
      },
      {
       "k": "N",
       "tag": "",
       "text": "Maximum motoring occurs when N2 acceleration is less than 1% in approximately 5 seconds."
      },
      {
       "k": "A",
       "tag": "",
       "item": "Engine start lever",
       "val": "IDLE",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 545,
         "y": 520,
         "check": "На Classic-макете рычаги ENGINE START не подписаны. ⚠ проверить"
        },
        "NG": {
         "img": "ngped",
         "x": 760,
         "y": 2056,
         "check": "Метка у рычагов ENGINE START под РУД. ⚠ проверить"
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "Start timing for EGT indications"
      }
     ]
    },
    {
     "who": "B",
     "panel": "Fuel flow and EGT",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "68",
      "pdf": "136"
     },
     "tag": "",
     "lines": [
      {
       "k": "V",
       "tag": "",
       "text": "Monitor fuel flow and EGT indications."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "ENGINE START switch to OFF",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "68",
      "pdf": "136"
     },
     "tag": "",
     "lines": [
      {
       "k": "V",
       "tag": "CL",
       "text": "(CL) At 46% N2, verify that the ENGINE START switch moves to OFF. If not, move the ENGINE START switch to OFF manually"
      },
      {
       "k": "V",
       "tag": "NG",
       "text": "(NG) At 56% N2, verify that the ENGINE START switch moves to OFF. If not, move the ENGINE START switch to OFF manually."
      },
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the START VALVE OPEN light extinguishes when the ENGINE START switch moves to OFF."
      },
      {
       "k": "K",
       "tag": "",
       "text": "STARTER CUTOUT"
      }
     ],
     "loc": {
      "CL": {
       "img": "ovh",
       "x": 635,
       "y": 2080
      },
      "NG": {
       "img": "ngovh",
       "x": 780,
       "y": 985
      }
     }
    },
    {
     "who": "B",
     "panel": "Stable idle",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "68",
      "pdf": "136"
     },
     "tag": "",
     "lines": [
      {
       "k": "V",
       "tag": "",
       "text": "Monitor N1, N2, EGT, fuel flow and oil pressure for normal indications while the engine accelerates to a stable idle."
      },
      {
       "k": "X",
       "tag": "",
       "text": "After engine is stable at idle, start the other engine."
      }
     ]
    },
    {
     "who": "-",
     "panel": "Starter duty cycle",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "68",
      "pdf": "136"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Starter duty cycle:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "Do not exceed 2 minutes during each start attempt"
      },
      {
       "k": "V",
       "tag": "NG",
       "text": "(NG) A minimum of 10 seconds is needed between start attempts"
      },
      {
       "k": "V",
       "tag": "CL",
       "text": "(CL) A minimum of 20 seconds is needed between the first and second start attempts"
      },
      {
       "k": "V",
       "tag": "CL",
       "text": "(CL) A minimum of three minutes is needed between the second and subsequent start attempts."
      }
     ]
    },
    {
     "who": "-",
     "panel": "Normal engine start considerations",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "68–69",
      "pdf": "136–137"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Normal engine start considerations:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "do not move an engine start lever to idle early, a hot start can occur"
      },
      {
       "k": "V",
       "tag": "",
       "text": "keep a hand on the engine start lever while monitoring RPM, EGT and fuel flow until stable"
      },
      {
       "k": "V",
       "tag": "",
       "text": "if fuel is shutoff accidentally (by closing the engine start lever) do not reopen the engine start lever in an attempt to restart the engine"
      },
      {
       "k": "V",
       "tag": "",
       "text": "failure of the ENGINE START switch to stay in GRD until the starter cutout RPM can cause a hot start. Do not re-engage the ENGINE START switch until engine RPM is below 20% N2."
      },
      {
       "k": "V",
       "tag": "",
       "text": "During cold weather starts, oil pressure may temporary exceed the green band or may not show any increase until oil temperature rises. No indication of oil pressure by the time idle RPM is achieved requires an immediate engine shutdown. At low ambient temperatures, a temporary high oil pressure above the green band may be tolerated."
      },
      {
       "k": "V",
       "tag": "",
       "text": "When starting the engines in tailwind conditions, Boeing recommends making a normal start. Expect a longer cranking time to ensure N1 is rotating in the correct direction before moving the start lever. A higher than normal EGT should be expected, yet the same limits and procedures apply."
      }
     ]
    },
    {
     "who": "-",
     "panel": "ABORTED ENGINE START",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "69",
      "pdf": "137"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Do the ABORTED ENGINE START checklist for one or more of the following abort start conditions:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "the N1 or N2 does not increase or increases very slowly after the EGT increases"
      },
      {
       "k": "V",
       "tag": "",
       "text": "there is no oil pressure indication by the time that the engine is stable at idle"
      },
      {
       "k": "V",
       "tag": "",
       "text": "the EGT does not increase by 10 seconds (CL), 15 seconds (NG) after the engine start lever is moved to IDLE"
      },
      {
       "k": "V",
       "tag": "",
       "text": "the EGT quickly nears or exceeds the start limit (725ºC)"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Advise Ground staff to disconnect for a visual signal after both engines are stable at idle and push back is completed."
      }
     ]
    }
   ]
  },
  {
   "id": "btaxi",
   "title": "Before Taxi Procedure",
   "section": "2.2.24",
   "pages": {
    "ch": "69–72",
    "pdf": "137–140"
   },
   "trigger": [
    "Call “FLAPS___ BEFORE TAXI PROCEDURE” (C)"
   ],
   "intro": [
    "If needed, review and set up airplane systems according to operating/performance requirements (anti ice, bleed/pack valves etc.), making reference to the Supplementary Procedures section (SP) and answer the checklist according to the actual configuration."
   ],
   "who": "Captain / F/O по колонкам документа",
   "callouts": [
    {
     "who": "C",
     "text": "FLAPS___ BEFORE TAXI PROCEDURE"
    }
   ],
   "rows": [
    {
     "who": "-",
     "panel": "Note",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "69",
      "pdf": "137"
     },
     "tag": "",
     "lines": [
      {
       "k": "N",
       "tag": "",
       "text": "Following procedure assumes normal airplane configuration and no specific requirements necessary."
      }
     ]
    },
    {
     "who": "-",
     "panel": "TR and GEN indications",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "69",
      "pdf": "137"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Check TR-1, TR-2, TR-3 indications and leave DC meter selector on BAT (CL) AUXBAT (NG) position. TR volt range: 24-30 volts (info only:28-30 normal)"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Check GEN-1, GEN-2 indications and leave AC meter selector on GEN-2 position."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Normal indication for GEN AC power: Voltmeter 115+/-5 volts frequency meter – 400+/-10 CPS"
      },
      {
       "k": "Q",
       "tag": "",
       "text": "Исполнитель проверки TR и GEN в OM-B не указан (колонка роли пустая)."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Call",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "69",
      "pdf": "137"
     },
     "tag": "",
     "lines": [
      {
       "k": "K",
       "tag": "",
       "text": "FLAPS___ BEFORE TAXI PROCEDURE"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Flap lever",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "69",
      "pdf": "137"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Flap lever",
       "val": "Set takeoff flaps",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 765,
         "y": 270
        },
        "NG": {
         "img": "ngped",
         "x": 857,
         "y": 1875
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "Flap extension may be delayed due to snow/slush or de-/anti-icing consideration in accordance with Supplementary Procedure"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "GENERATOR 1 and 2 switches",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "69",
      "pdf": "137"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "GENERATOR 1 and 2 switches",
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
       "k": "K",
       "tag": "",
       "text": "GENERATORS ON BUS"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "PROBE / PITOT HEAT",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "69",
      "pdf": "137"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "NG",
       "item": "(NG) PROBE HEAT switches",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 880,
         "y": 1012
        },
        "NG": {
         "img": "ngovh",
         "x": 855,
         "y": 535
        }
       }
      },
      {
       "k": "A",
       "tag": "CL",
       "item": "(CL) PITOT HEAT switches",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 880,
         "y": 1012
        },
        "NG": {
         "img": "ngovh",
         "x": 855,
         "y": 535
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "WING ANTI-ICE switch",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "69–70",
      "pdf": "137–138"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "WING ANTI-ICE switch",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 850,
         "y": 1242
        },
        "NG": {
         "img": "ngovh",
         "x": 850,
         "y": 635
        }
       }
      },
      {
       "k": "W",
       "tag": "",
       "text": "Ground use of wing Anti-Ice is not intended to replace De-icing, Anti-Icing and Inspection procedures. The leading edge devices, wing, stabilizer, control surfaces, tab surfaces, winglet surfaces, control surface balance panel cavities and other critical airplane components MUST be free of frost, snow and ice. Close inspection just prior to takeoff may be necessary to meet this requirement."
      },
      {
       "k": "N",
       "tag": "",
       "text": "Thin hoarfrost is acceptable on the upper surface of the fuselage provided all vents and ports are clear. Thin hoarfrost is a uniform white deposit of fine crystalline texture, which usually occurs on exposed surfaces on a cold and cloudless night, and which is thin enough to distinguish surface features underneath, such as paint lines, markings or lettering. Takeoff with CSFF (cold- soaked fuel frost) on lower wing surfaces is allowable provided all of the following condition are met: Ambient air temperature is at or above +4°C, +39°F; There is no precipitation or visible moisture (rain, snow, drizzle, or fog with less than 1 mile visibility); Tank fuel temperature is at or above -16°C, or +3°F; All leading edge devices, all control surfaces, tab surfaces, winglet surfaces, and control surface balance panel cavities must be free of snow, ice and frost. If all of the above conditions are not met, takeoff with light coatings of frost, up to 1/8 inch (3 mm) in thickness, on lower wing surfaces due to cold fuel is allowable; however, all leading edge devices, all control surfaces, tab surfaces, winglet surfaces and control surface balance panel cavities must be free of snow, ice and frost. If the frost on the lower surface is greater than 1/8 inch (3 mm) in thickness, all snow, ice and frost on the wings must be removed using appropriate deicing/anti-icing procedures."
      },
      {
       "k": "N",
       "tag": "",
       "text": "Takeoff with CSFF on upper wing surfaces is allowed provided all of the following conditions are met: The CSFF on the wing tank upper surfaces is only within the lines defining the permissible CSFF area with no ice or frost on the leading edges or control surfaces; Ambient air temperature is at or above +4°C, +39°F; There is no precipitation or visible moisture (rain, snow, drizzle, or fog with less than 1 mile visibility); Tank fuel temperature is at or above -16°C, +3°F. If all of the above conditions are not met, all snow, ice and frost on the wings must be removed using appropriate deicing/anti-icing procedures."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "ENGINE ANTI-ICE switches",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "70",
      "pdf": "138"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "ENGINE ANTI-ICE switches",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 976,
         "y": 1252
        },
        "NG": {
         "img": "ngovh",
         "x": 892,
         "y": 635
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "If needed ENGINE ANTI-ICE switch on ENGINE START CONT switches first."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "HYDRAULIC PUMPS switches",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "70",
      "pdf": "138"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "HYDRAULIC PUMPS switches",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 912,
         "y": 1440
        },
        "NG": {
         "img": "ngovh",
         "x": 857,
         "y": 715
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "PACK switches",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "70",
      "pdf": "138"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "PACK switches",
       "val": "AUTO",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1100,
         "y": 1462
        },
        "NG": {
         "img": "ngovh",
         "x": 957,
         "y": 717
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "ISOLATION VALVE switch",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "70",
      "pdf": "138"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "ISOLATION VALVE switch",
       "val": "AUTO",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1210,
         "y": 1445
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 738
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "APU BLEED air switch",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "70–71",
      "pdf": "138–139"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "APU BLEED air switch",
       "val": "OFF",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1210,
         "y": 1530,
         "check": "APU BLEED на Classic-макете — метка в зоне bleed/pack панели. ⚠ проверить"
        },
        "NG": {
         "img": "ngovh",
         "x": 1000,
         "y": 790,
         "check": "APU BLEED на NG-макете — метка под ISOLATION VALVE в ряду bleed switches. ⚠ проверить"
        }
       }
      },
      {
       "k": "N",
       "tag": "",
       "text": "APU serve as backup electrical source for LVTO."
      },
      {
       "k": "N",
       "tag": "",
       "text": "Do not switch APU OFF in case of No Engine Bleed Takeoff."
      },
      {
       "k": "N",
       "tag": "",
       "text": "Do not switch APU OFF in case of LVTO (APU serve as backup electrical source)."
      },
      {
       "k": "N",
       "tag": "",
       "text": "If de-/anti-icing is needed, follow the Adverse Weather Supplementary Procedure. If APU is running, ingestion of de-icing fluid causes objectionable fumes and odors to enter the airplane. Ingestion of snow, slush, ice, or de-/anti-icing fluid can also cause damage to the APU. Operate the APU during de-icing only if necessary. After engine start shut down the APU unless APU operation is necessary. If No Engine Bleed Takeoff procedure is necessary for performance reason and APU is unavailable or if it was running during de-/anti-icing, then Unpressurized Takeoff must be performed."
      },
      {
       "k": "N",
       "tag": "",
       "text": "Crew shall continually monitor the ambient conditions after de-/anti-icing treatment. Holdover Time can be significantly reduced by a number of factors (temperature, wind, jet blast, humidity, heavy precipitations etc.), therefore, the indicated times should be used only in conjunction with a Pre-takeoff Contamination Inspection. This means that if the minimum holdover time expired before the take-off and precipitation occurred at any time after anti-icing procedure was started, a Pre-takeoff Contamination Inspection is mandatory. This inspection is typically conducted by a flight crew member observing the aircraft surfaces from inside the aircraft cabin."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "FLT/GRD switch",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "71",
      "pdf": "139"
     },
     "tag": "T:3722,3723,3724,3729",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "FLT/GRD switch (UP-B3722, UP-B3723, UP-B3724, UP-B3729)",
       "val": "FLT",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 1210,
         "y": 1845
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "APU switch",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "71",
      "pdf": "139"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "APU switch (after 1 min of cooling (CL)",
       "val": "As needed",
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
      }
     ]
    },
    {
     "who": "FO",
     "panel": "ENGINE START switches",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "71",
      "pdf": "139"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "ENGINE START switches",
       "val": "CONT",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 635,
         "y": 2080
        },
        "NG": {
         "img": "ngovh",
         "x": 780,
         "y": 985
        }
       }
      }
     ]
    },
    {
     "who": "C",
     "panel": "Engine start levers",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "71",
      "pdf": "139"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Engine start levers",
       "val": "IDLE detent",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 545,
         "y": 520
        },
        "NG": {
         "img": "ngped",
         "x": 760,
         "y": 2056
        }
       }
      }
     ]
    },
    {
     "who": "-",
     "panel": "LE FLAPS EXT",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "71",
      "pdf": "139"
     },
     "tag": "",
     "lines": [
      {
       "k": "V",
       "tag": "",
       "text": "When the flaps and slats are in commanded position verify that the LE FLAPS EXT green light is illuminated and call: “FLAPS ___, GREEN LIGHT”"
      },
      {
       "k": "K",
       "tag": "",
       "text": "FLAPS ___, GREEN LIGHT"
      },
      {
       "k": "Q",
       "tag": "",
       "text": "Кто выполняет проверку LE FLAPS EXT и делает callout «FLAPS ___, GREEN LIGHT», в этом месте OM-B не указано."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Ground personnel and equipment",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "71",
      "pdf": "139"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Ground personnel and equipment is clear",
       "val": "Verify"
      },
      {
       "k": "K",
       "tag": "",
       "text": "FLIGHT CONTROLS CHECK"
      },
      {
       "k": "Q",
       "tag": "",
       "text": "Исполнитель «Ground personnel and equipment is clear …… Verify» и callout «FLIGHT CONTROLS CHECK» в колонке роли не указан; показаны вместе со строкой Flight controls (C)."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Flight controls",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "71",
      "pdf": "139"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Flight controls",
       "val": "Check"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Push the MFD SYS switch to display the flight control surface position indications (as installed) on the lower display unit, if desired (NG if installed)"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Make slow and deliberate inputs one direction at a time ."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Move the control wheel and the control column to full travel in both directions and verify"
      },
      {
       "k": "V",
       "tag": "",
       "text": "freedom of movement."
      },
      {
       "k": "V",
       "tag": "",
       "text": "that the controls return to center"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Hold the nose wheel steering wheel during the rudder check to prevent nose wheel movement."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Move the rudder pedals to full travel in both directions and verify:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "freedom of movement."
      },
      {
       "k": "V",
       "tag": "",
       "text": "that the rudder pedals return to center"
      },
      {
       "k": "N",
       "tag": "",
       "text": "During checking Flight Control, FO’s feet should be on the pedals. Check correct radar pedal position. Follow the radar movement and call out any discrepancy."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Lower display unit",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "71",
      "pdf": "139"
     },
     "tag": "NG",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "(NG) Blank the lower display unit"
      }
     ],
     "loc": {
      "NG": {
       "img": "ngip",
       "x": 773,
       "y": 1662
      }
     }
    },
    {
     "who": "FO",
     "panel": "WEATHER RADAR",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "71",
      "pdf": "139"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "WEATHER RADAR panel",
       "val": "WX, TILT 5º up",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 665
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2212
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "WEATHER RADAR switch",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 665
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2212
        }
       }
      },
      {
       "k": "N",
       "tag": "",
       "text": "Set the weather radar display – it is recommended to set weather radar approx. 5 degrees nose up tilt or use “AUTO” mode as installed."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Verify that the weather radar indications are not shown on the MAP. It means that Weather radar has just already prepared for use but weather radar transmitters are not energized. Postpone the activation of Weather Radar Display switch on EFIS Control panel till Before Takeoff Procedure or when weather situation is required."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "TRANSPONDER",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72",
      "pdf": "140"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "TRANSPONDER",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 550,
         "y": 1250
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2310
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "At airports where ground tracking is not available, select STANDBY."
      },
      {
       "k": "X",
       "tag": "",
       "text": "At airports equipped to track airplanes on the ground, select an active transponder setting, but not a TCAS mode."
      }
     ]
    },
    {
     "who": "B",
     "panel": "RECALL",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72",
      "pdf": "140"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "RECALL",
       "val": "Check",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 631,
         "y": 108,
         "check": "RECALL — метка на system annunciator стороны Captain («Captain presses the RECALL»)."
        },
        "NG": {
         "img": "ngip",
         "x": 460,
         "y": 1175,
         "check": "RECALL — метка на system annunciator стороны Captain («Captain presses the RECALL»)."
        }
       }
      },
      {
       "k": "X",
       "tag": "",
       "text": "Captain presses the RECALL and both pilots verify that all system annunciator panel lights illuminate and then extinguish"
      }
     ]
    },
    {
     "who": "B",
     "panel": "SEAT BELTS AND SHOULDER HARNESSES",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72",
      "pdf": "140"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "SEAT BELTS AND SHOULDER HARNESSES",
       "val": "Check Fastened"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Flap extension may be delayed due to snow/slush or de-/anti-icing consideration in accordance with Supplementary Procedure."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Call",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72",
      "pdf": "140"
     },
     "tag": "",
     "lines": [
      {
       "k": "K",
       "tag": "",
       "text": "BEFORE TAXI PROCEDURE COMPLETED"
      }
     ]
    },
    {
     "who": "C",
     "panel": "Call",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72",
      "pdf": "140"
     },
     "tag": "",
     "lines": [
      {
       "k": "K",
       "tag": "",
       "text": "BEFORE TAXI CHECKLIST"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "BEFORE TAXI CHECKLIST",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72",
      "pdf": "140"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Do the BEFORE TAXI CHECKLIST"
      }
     ]
    },
    {
     "who": "B",
     "panel": "Ground equipment",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72",
      "pdf": "140"
     },
     "tag": "",
     "lines": [
      {
       "k": "V",
       "tag": "",
       "text": "Verify that the ground equipment is clear"
      },
      {
       "k": "N",
       "tag": "",
       "text": "Do the configuration for No Engine Bleed Takeoff prior to taxi if Anti-Ice is not required for taxi."
      },
      {
       "k": "N",
       "tag": "",
       "text": "Do the configuration for No Engine Bleed Takeoff prior to lining up before doing the BEFORE TAKEOFF checklist if Anti0ice is required for taxi."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Lights",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72",
      "pdf": "140"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "The F/O switches Off Dome light. Taxi light ON, Turn off lights (as required), APU as required."
      }
     ]
    }
   ]
  },
  {
   "id": "taxi",
   "title": "Taxi Procedure",
   "section": "2.2.25",
   "pages": {
    "ch": "72–74",
    "pdf": "140–142"
   },
   "trigger": [
    "Before the commencement taxi procedure, if pushback or towing is not necessary, the flight crew shall verify that the cabin is secure. SCCM report the information “CABIN READY FOR MOVEMENT” via Interphone and after receiving confirmation from C or F/O “CABIN READY FOR MOVEMENT CONFIRM” first movement can be done."
   ],
   "intro": [
    "If jumpseat is occupied, both pilots must check and be sure that jumpseat occupant use seatbelts and take away all personal belongings before commencement of the taxi procedure."
   ],
   "who": "Captain и F/O (колонки CAPT / FO документа)",
   "callouts": [],
   "rows": [
    {
     "who": "B",
     "panel": "Clear of obstructions",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72",
      "pdf": "140"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Receive all clear signals from the marshaller and ensure both sides of aircraft are clear of obstructions."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Call",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72",
      "pdf": "140"
     },
     "tag": "",
     "lines": [
      {
       "k": "K",
       "tag": "",
       "text": "LEFT SIDE CLEAR"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Call",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72",
      "pdf": "140"
     },
     "tag": "",
     "lines": [
      {
       "k": "K",
       "tag": "",
       "text": "RIGHT SIDE CLEAR"
      },
      {
       "k": "C",
       "tag": "",
       "text": "Do not move aircraft until both pilots check that their area is clear"
      }
     ]
    },
    {
     "who": "C",
     "panel": "Call",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72",
      "pdf": "140"
     },
     "tag": "",
     "lines": [
      {
       "k": "K",
       "tag": "",
       "text": "LIGHTS FOR TAXI, APU OFF"
      },
      {
       "k": "X",
       "tag": "",
       "text": "if not needed APU."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "TAXI / RUNWAY TURNOFF lights",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72",
      "pdf": "140"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "TAXI light switch",
       "val": "ON",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 430,
         "y": 2075
        },
        "NG": {
         "img": "ngovh",
         "x": 660,
         "y": 998
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "RUNWAY TURNOFF light switches",
       "val": "as needed",
       "loc": {
        "CL": {
         "img": "ovh",
         "x": 430,
         "y": 2075
        },
        "NG": {
         "img": "ngovh",
         "x": 660,
         "y": 998
        }
       }
      }
     ]
    },
    {
     "who": "C",
     "panel": "Parking brake",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72",
      "pdf": "140"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Release parking brake and commence taxi."
      }
     ],
     "loc": {
      "CL": {
       "img": "aft",
       "x": 385,
       "y": 610
      },
      "NG": {
       "img": "ngped",
       "x": 683,
       "y": 2042
      }
     }
    },
    {
     "who": "FO",
     "panel": "Off-Block Time",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72",
      "pdf": "140"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Off-Block Time",
       "val": "Start"
      },
      {
       "k": "N",
       "tag": "",
       "text": "Start the Block Time when airplane first moves from its parking place for the purpose of taking off."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Thrust levers",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "72–73",
      "pdf": "140–141"
     },
     "tag": "",
     "lines": [
      {
       "k": "N",
       "tag": "",
       "text": "Limit brake away thrust as much as possible. BE EASY ON THE THRUST LEVERS WHEN TAXIING."
      },
      {
       "k": "N",
       "tag": "",
       "text": "It is recommended to avoid N1 more than 40%. Initial movement should be straight ahead with nose wheel centered before starting a turn."
      },
      {
       "k": "N",
       "tag": "",
       "text": "Be careful, to achieve the same power setting (for example 40% N1) different thrust lever angles may be needed depending on aircraft type and engines regulation."
      },
      {
       "k": "X",
       "tag": "NG",
       "text": "(NG) Use N1 Command Sectors which display momentary difference between actual N1 and value commanded by thrust lever position."
      }
     ],
     "loc": {
      "CL": {
       "img": "aft",
       "x": 545,
       "y": 370
      },
      "NG": {
       "img": "ngped",
       "x": 760,
       "y": 1910
      }
     }
    },
    {
     "who": "C",
     "panel": "Brakes check",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "73",
      "pdf": "141"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "At the beginning of taxiing, in a straight section of the taxi route, the captain should check the brakes by smoothly pressing the pedals. During pushing the brake pedals - make sure of adequate deceleration."
      },
      {
       "k": "K",
       "tag": "",
       "text": "BRAKES CHECK"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Smoothly press the brake pedals and make sure of adequate deceleration."
      },
      {
       "k": "K",
       "tag": "",
       "text": "BRAKES CHECKED"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Call (F/O or RHS pilot)",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "73",
      "pdf": "141"
     },
     "tag": "",
     "lines": [
      {
       "k": "K",
       "tag": "",
       "text": "CHECKED"
      }
     ]
    },
    {
     "who": "-",
     "panel": "Taxi technique",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "73–74",
      "pdf": "141–142"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "It is the F/O's responsibility to complete the checks and procedure to get the aircraft ready for departure while taxiing. If an ATC clearance is obtained while taxiing, the F/O will make the Altitude and transponder changes and ensures the C is aware of the clearance and the changes mentioned above."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Do not be diverted from the primary task of safely taxiing the airplane. The flight crew should avoid all unnecessary activity and duties (including paperwork) that can be accomplished at another time."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Only essential taxiing and departure clearances will be logged during taxi by F/O."
      },
      {
       "k": "X",
       "tag": "",
       "text": "The pilot’s seat and rudder pedals should be adjusted so that it is possible to apply maximum braking with full rudder deflection."
      },
      {
       "k": "X",
       "tag": "",
       "text": "During taxiing, the pilot’s heels should be on the rudder pedals."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Allow time for airplane response to each thrust change."
      },
      {
       "k": "X",
       "tag": "",
       "text": "To break away from the ramp, release the brakes, smoothly increase thrust to the minimum required for the airplane to roll forward, and reduce thrust to idle again. Do not start a turn until sufficient forward speed has been attained to carry the airplane through the turn at idle thrust. Avoid following other airplanes too closely."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Allow the nose gear to overshoot turns to ensure the main gear straddles the taxiway centerline. The nose gear may be displaced from centerline to avoid airport lighting. This enhances passenger comfort. Be aware that the tail can scribe the greater arc during turns than wingtips."
      },
      {
       "k": "X",
       "tag": "",
       "text": "The normal straight-away taxi speed 20 knots & should not exceed approximately 30 knots."
      },
      {
       "k": "X",
       "tag": "",
       "text": "When approaching a turn, speed should be slowed to approximately 10 knots."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Some taxi speeds, usually between 10 and 20 knots, can cause an increase in airplane vibration, especially on rough taxiways. If this occurs, a slight increase or decrease in speed will reduce or eliminate the vibration and increase passenger comfort."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Maintain a positive pressure on the nose steering wheel in both directions to prevent the nose gear from returning to center abruptly. Straight ahead steering and large radius turns may be accomplished with rudder pedal steering only. If nose wheel \"scrubbing\" occurs while turning, reduce steering angle and/or taxi speed. Avoid stopping the airplane in a turn as excessive thrust will be required to start taxiing again. Differential thrust may be required for heavy airplanes during tight turns but should only be used as required to maintain the desired speed in the turn. Center the nose wheel and allow the airplane to roll straight ahead to relieve stress on the main and nose gear structure and oleo strut seals prior to stopping after completing a turn."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Avoid riding the brakes to control taxi speed as brake heat buildup could become excessive. If taxi speed is too high, reduce speed with a steady brake application and then release the brakes to allow them to cool. Continuous braking should be avoided. Allow for decreased braking effectiveness on slick surfaces."
      },
      {
       "k": "X",
       "tag": "",
       "text": "When taxiing on a slick surface at reduced speeds, use of differential engine thrust will assist in maintaining airplane movement through the turn. Differential braking may be more effective than nose wheel steering on very slick surfaces. Reduce speed prior to initiating a turn."
      }
     ]
    }
   ]
  },
  {
   "id": "bto",
   "title": "Before Takeoff Procedure",
   "section": "2.2.26",
   "pages": {
    "ch": "74–76",
    "pdf": "142–144"
   },
   "trigger": [
    "If the taxiways and runways are covered with snow, slush, or ice, consideration should be given to the use of anti-ice. Taxi with the flaps up until entering the active runway for takeoff, then select takeoff flaps and complete the BEFORE TAKEOFF checklist. Plan for a short delay on the runway to complete the before takeoff procedure and to ensure proper engine operation by cross-checking all engine instruments."
   ],
   "intro": [],
   "who": "Captain и F/O (колонки CAPT / F/O документа), PF",
   "callouts": [],
   "rows": [
    {
     "who": "-",
     "panel": "Engine warm-up",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "74",
      "pdf": "142"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Consider engine warm-up recommendations before selecting takeoff thrust."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Engine warm-up requirements:"
      },
      {
       "k": "V",
       "tag": "",
       "text": "run the engines for at least 3 minutes."
      },
      {
       "k": "V",
       "tag": "",
       "text": "verify an increase in engine oil temperature before takeoff."
      }
     ]
    },
    {
     "who": "B",
     "panel": "Complex intersections / HOLD POSITION",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "74",
      "pdf": "142"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "At complex intersections, the flight crew should verbally coordinate to be sure that the intersection is correctly identified and that the aircraft is transitioning through the intersection to the correct taxiway. When visually scanning the intersections area, flight crewmembers should verbally inform each other about any potential hazard on taxi route in free form in English or Russian language."
      },
      {
       "k": "X",
       "tag": "",
       "text": "If during taxing \"HOLD POSITION\" instruction received, after stopping, Captain switches off TAXI and RWY TURN OFF lights to give the other aircraft or ground vehicles a clear sign that the aircraft is holding. Switch on TAXI and RWY TURN OFF lights before resuming taxing."
      }
     ]
    },
    {
     "who": "B",
     "panel": "Updated take off data",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "74",
      "pdf": "142"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "If take off data / conditions have changed, or in case of RW / SID change, prepare updated take off data:"
      },
      {
       "k": "A",
       "tag": "",
       "item": "Takeoff performance data",
       "val": "Recalculate / Check"
      },
      {
       "k": "A",
       "tag": "",
       "item": "CDU",
       "val": "Load",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1207,
         "y": 780
        },
        "NG": {
         "img": "ngip",
         "x": 600,
         "y": 1660
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "MCP",
       "val": "Set / Check",
       "loc": {
        "CL": {
         "img": "ip",
         "x": 1000,
         "y": 60
        },
        "NG": {
         "img": "ngip",
         "x": 780,
         "y": 1175
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "FLAPS/TRIM",
       "val": "Set / Check",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 765,
         "y": 270
        },
        "NG": {
         "img": "ngped",
         "x": 857,
         "y": 1875
        }
       }
      },
      {
       "k": "A",
       "tag": "",
       "item": "SID, TRANSITION",
       "val": "Read / Check"
      },
      {
       "k": "W",
       "tag": "",
       "text": "If any changes in the performance calculations are made, PF and PM must crosscheck the calculated data before CDU load."
      }
     ]
    },
    {
     "who": "B",
     "panel": "Entering the runway",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "74",
      "pdf": "142"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Entering the runway, the pilots will confirm that the runway and approach are clear by calling:"
      },
      {
       "k": "K",
       "tag": "",
       "text": "RIGHT SIDE CLEAR (RUNWAY OCCUPIED or etc.)"
      },
      {
       "k": "K",
       "tag": "",
       "text": "LEFT SIDE CLEAR (AIRCRAFT ON FINAL or etc.)"
      },
      {
       "k": "N",
       "tag": "",
       "text": "When required to modify FMC due to revised clearance, use caution to maintain proper outside vigilance to ensure safe taxiing. The F/O shall make the required entries. The Captain then verifies proper entries."
      },
      {
       "k": "N",
       "tag": "",
       "text": "If no transponder code is assigned, set appropriate standard code (2000)."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "MCP altitude, heading, transponder code",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Set MCP altitude, heading and transponder code if ATC clearance is received or changes while taxiing."
      },
      {
       "k": "N",
       "tag": "",
       "text": "When required to modify FMC due to revised clearance, use caution to maintain proper outside vigilance to ensure safe taxiing. The F/O shall make the required entries. The Captain then verifies proper entries."
      },
      {
       "k": "N",
       "tag": "",
       "text": "If no transponder code is assigned, set appropriate standard code (2000)."
      },
      {
       "k": "Q",
       "tag": "",
       "text": "NOTE «When required to modify FMC…» и «If no transponder code is assigned…» в документе повторяются дважды (стр. 74 и 75). Перенесено как в документе."
      }
     ],
     "loc": {
      "CL": {
       "img": "ip",
       "x": 1000,
       "y": 60
      },
      "NG": {
       "img": "ngip",
       "x": 780,
       "y": 1175
      }
     }
    },
    {
     "who": "C",
     "panel": "Verify entries",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Verify proper entries."
      }
     ]
    },
    {
     "who": "PF",
     "panel": "Takeoff briefing",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "The pilot who will do the takeoff, completes or updates changes to the takeoff briefing as needed."
      }
     ]
    },
    {
     "who": "B",
     "panel": "Cabin secure",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Verify that the cabin is secure."
      },
      {
       "k": "X",
       "tag": "",
       "text": "(Senior Cabin Crew Member - SCCM – report the information “CABIN SECURE FOR TAKEOFF” via Interphone) and confirmation by C or F/O “CABIN SECURE CONFIRM”"
      },
      {
       "k": "K",
       "tag": "",
       "text": "CABIN SECURE CONFIRM"
      },
      {
       "k": "X",
       "tag": "",
       "text": "Do not enter the active runway until the cabin has been reported as secured by the cabin crew."
      }
     ]
    },
    {
     "who": "C",
     "panel": "WXR or TERR switch",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "WXR or TERR switch",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195,
         "check": "На Classic-макете кнопка WXR на EFIS control panel; отдельной TERR не видно. ⚠ проверить"
        },
        "NG": {
         "img": "ngip",
         "x": 530,
         "y": 1175
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "WXR or TERR switch",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "WXR or TERR switch",
       "val": "As needed",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 870,
         "y": 1195,
         "check": "На Classic-макете виден только один EFIS control panel; метка общая для Captain и F/O. ⚠ проверить"
        },
        "NG": {
         "img": "ngip",
         "x": 995,
         "y": 1175
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Centre tank fuel",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Check the centre tank fuel quantity. Both centre tank fuel pump switches should be OFF for takeoff if centre tank fuel is less than 453 kilograms."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Transponder",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "A",
       "tag": "",
       "item": "Transponder",
       "val": "TA/RA",
       "loc": {
        "CL": {
         "img": "aft",
         "x": 550,
         "y": 1250
        },
        "NG": {
         "img": "ngped",
         "x": 765,
         "y": 2310
        }
       }
      }
     ]
    },
    {
     "who": "FO",
     "panel": "Cabin crew",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Notify the cabin crew to prepare for takeoff:"
      },
      {
       "k": "K",
       "tag": "",
       "text": "CABIN CREW, TAKEOFF POSITION"
      },
      {
       "k": "N",
       "tag": "",
       "text": "This instruction should not be given until entering the runway for Take Off, since it means that from then on, until the “Release to work” signal, the Cabin Attendants shall not leave their seats for any reason. It implies that Takeoff is imminent and that the “Interphone Silence” period is in force."
      }
     ]
    },
    {
     "who": "PF",
     "panel": "Takeoff briefing / displays",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "The PF updates changes to the takeoff briefing as needed."
      },
      {
       "k": "X",
       "tag": "",
       "text": "Set the weather radar display as needed. Set the terrain display as needed."
      },
      {
       "k": "N",
       "tag": "",
       "text": "PF shall monitor Weather Radar and PM – Terrain Mode in adverse weather. At other times both pilots shall monitor Terrain up to 10000 feet or MSA, whichever is higher. Use of the Weather Radar may also be useful when departing from airports where bird activity is present."
      }
     ]
    },
    {
     "who": "B",
     "panel": "Line up clearance",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "When cleared to line up before entering the departure runway, verify that the runway and runway entry point are correct."
      },
      {
       "k": "N",
       "tag": "",
       "text": "If GPS not installed, or if installed but GPS updating not available, and departing from any position that is not co-incident with runway threshold, you must enter a runway TO SHIFT to ensure that airplane symbol on EFIS Map updates to the actual aircraft position when TOGA is pressed."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Call",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "K",
       "tag": "",
       "text": "BEFORE TAKEOFF CHECKLIST"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "BEFORE TAKEOFF CHECKLIST",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Do the BEFORE TAKEOFF CHECKLIST"
      }
     ]
    },
    {
     "who": "FO",
     "panel": "STROBE light",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "When entering the runway, set the STROBE light switch to ON."
      }
     ],
     "loc": {
      "CL": {
       "img": "ovh",
       "x": 1100,
       "y": 2065
      },
      "NG": {
       "img": "ngovh",
       "x": 900,
       "y": 1002
      }
     }
    },
    {
     "who": "FO",
     "panel": "Runway position",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Update the runway position as needed."
      }
     ]
    },
    {
     "who": "C",
     "panel": "Align",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "75",
      "pdf": "143"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Align the airplane with the runway."
      }
     ]
    },
    {
     "who": "FO",
     "panel": "LANDING lights (F/O or RHP)",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "76",
      "pdf": "144"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "When cleared for takeoff, set the INBOARD/FIXED LANDING light switches to ON, set the OUTBOARD/RETRACTABLE LANDING light switches as needed."
      }
     ],
     "loc": {
      "CL": {
       "img": "ovh",
       "x": 250,
       "y": 2065
      },
      "NG": {
       "img": "ngovh",
       "x": 600,
       "y": 1002
      }
     }
    },
    {
     "who": "C",
     "panel": "Hand over control",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "76",
      "pdf": "144"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "Hand over control of the airplane to PF and call:"
      },
      {
       "k": "K",
       "tag": "",
       "text": "YOU HAVE CONTROL"
      }
     ]
    },
    {
     "who": "PF",
     "panel": "Take controls",
     "mock": null,
     "mockNG": null,
     "page": {
      "ch": "76",
      "pdf": "144"
     },
     "tag": "",
     "lines": [
      {
       "k": "X",
       "tag": "",
       "text": "PF takes controls and call:"
      },
      {
       "k": "K",
       "tag": "",
       "text": "I HAVE CONTROL, READY FOR TAKEOFF"
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
  },
  "pcap": {
   "phase": "pcap",
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
  },
  "bstart": {
   "phase": "bstart",
   "name": "BEFORE START",
   "CL": {
    "src": "Appendix 1 Normal Checklist B737-300/500 (Classic)",
    "pdf": "417",
    "page": "Page 1",
    "items": [
     {
      "item": "DOORS",
      "val": "CLOSED",
      "who": "R"
     },
     {
      "item": "FLT DECK DOOR",
      "val": "CLOSED & LOCKED",
      "who": "R"
     },
     {
      "item": "FUEL",
      "val": "__KGS, PUMP(S) ON",
      "who": "L R"
     },
     {
      "item": "PASSENGER SIGNS",
      "val": "ON",
      "who": "R"
     },
     {
      "item": "WINDOWS",
      "val": "LOCKED",
      "who": "L R"
     },
     {
      "item": "MCP",
      "val": "V2__, HEADING__, ALTITUDE__",
      "who": "L"
     },
     {
      "item": "TAKEOFF SPEEDS",
      "val": "V1__, VR__, V2__",
      "who": "L R"
     },
     {
      "item": "CDU PREFLIGHT",
      "val": "COMPLETED",
      "who": "L R"
     },
     {
      "item": "RUDDER&AILERON TRIM",
      "val": "FREE&ZERO",
      "who": "L"
     },
     {
      "item": "TAXI AND T/O BRIEFING",
      "val": "COMPLETED",
      "who": "PF"
     },
     {
      "item": "ANTI COLLISION LIGHT",
      "val": "ON",
      "who": "R"
     }
    ]
   },
   "NG": {
    "src": "Appendix 3 Normal Checklist B737-700/800 (NG)",
    "pdf": "422",
    "page": "Page 6",
    "items": [
     {
      "item": "DOORS",
      "val": "CLOSED",
      "who": "R"
     },
     {
      "item": "FLT DECK DOOR",
      "val": "CLOSED & LOCKED",
      "who": "R"
     },
     {
      "item": "FUEL",
      "val": "__KGS, PUMP(S) ON",
      "who": "L R"
     },
     {
      "item": "PASSENGER SIGNS",
      "val": "ON",
      "who": "R"
     },
     {
      "item": "WINDOWS",
      "val": "LOCKED",
      "who": "L R"
     },
     {
      "item": "MCP",
      "val": "V2__, HEADING__, ALTITUDE__",
      "who": "L"
     },
     {
      "item": "TAKEOFF SPEEDS",
      "val": "V1__, VR__, V2__",
      "who": "L R"
     },
     {
      "item": "CDU PREFLIGHT",
      "val": "COMPLETED",
      "who": "L R"
     },
     {
      "item": "RUDDER&AILERON TRIM",
      "val": "FREE&ZERO",
      "who": "L"
     },
     {
      "item": "TAXI AND T/O BRIEFING",
      "val": "COMPLETED",
      "who": "PF"
     },
     {
      "item": "ANTI COLLISION LIGHT",
      "val": "ON",
      "who": "R"
     }
    ]
   }
  },
  "btaxi": {
   "phase": "btaxi",
   "name": "BEFORE TAXI",
   "CL": {
    "src": "Appendix 1 Normal Checklist B737-300/500 (Classic)",
    "pdf": "417",
    "page": "Page 1",
    "items": [
     {
      "item": "GENERATORS",
      "val": "ON",
      "who": "R"
     },
     {
      "item": "PITOT STATIC HEAT",
      "val": "ON",
      "who": "R"
     },
     {
      "item": "ANTI-ICE",
      "val": "ON/OFF",
      "who": "R"
     },
     {
      "item": "PACKS",
      "val": "AUTO",
      "who": "R"
     },
     {
      "item": "ISOLATION VALVE",
      "val": "AUTO",
      "who": "R"
     },
     {
      "item": "ENGINE START SWITCHES",
      "val": "CONT",
      "who": "R"
     },
     {
      "item": "RECALL",
      "val": "CHECKED",
      "who": "L R"
     },
     {
      "item": "AUTOBRAKE",
      "val": "RTO",
      "who": "R"
     },
     {
      "item": "ENGINE START LEVERS",
      "val": "IDLE DETEND",
      "who": "L"
     },
     {
      "item": "FLIGHT CONTROLS",
      "val": "CHECKED",
      "who": "L"
     },
     {
      "item": "GROUND PERSONNEL AND EQUIPMENT",
      "val": "CLEAR",
      "who": "L R"
     }
    ]
   },
   "NG": {
    "src": "Appendix 3 Normal Checklist B737-700/800 (NG)",
    "pdf": "422",
    "page": "Page 6",
    "items": [
     {
      "item": "GENERATORS",
      "val": "ON",
      "who": "R"
     },
     {
      "item": "PROBE HEAT",
      "val": "ON",
      "who": "R"
     },
     {
      "item": "ANTI-ICE",
      "val": "ON/OFF",
      "who": "R"
     },
     {
      "item": "PACKS",
      "val": "AUTO",
      "who": "R"
     },
     {
      "item": "ISOLATION VALVE",
      "val": "AUTO",
      "who": "R"
     },
     {
      "item": "ENGINE START SWITCHES",
      "val": "CONT",
      "who": "R"
     },
     {
      "item": "RECALL",
      "val": "CHECKED",
      "who": "L R"
     },
     {
      "item": "AUTOBRAKE",
      "val": "RTO",
      "who": "R"
     },
     {
      "item": "ENGINE START LEVERS",
      "val": "IDLE DETEND",
      "who": "L"
     },
     {
      "item": "FLIGHT CONTROLS",
      "val": "CHECKED",
      "who": "L"
     },
     {
      "item": "GROUND PERSONNEL AND EQUIPMENT",
      "val": "CLEAR",
      "who": "L R"
     }
    ]
   }
  },
  "bto": {
   "phase": "bto",
   "name": "BEFORE TAKEOFF",
   "CL": {
    "src": "Appendix 1 Normal Checklist B737-300/500 (Classic)",
    "pdf": "417",
    "page": "Page 1",
    "items": [
     {
      "item": "FLAPS",
      "val": "___,GREEN LIGHT",
      "who": "L"
     },
     {
      "item": "STABILIZER TRIM",
      "val": "___UNITS",
      "who": "L"
     },
     {
      "item": "CABIN",
      "val": "SECURED",
      "who": "L"
     },
     {
      "item": "TRANSPONDER",
      "val": "ON, SET, TA/RA",
      "who": "R"
     },
     {
      "item": "WEATHER RADAR/TERRAIN",
      "val": "ON",
      "who": "L R"
     }
    ]
   },
   "NG": {
    "src": "Appendix 3 Normal Checklist B737-700/800 (NG)",
    "pdf": "422",
    "page": "Page 6",
    "items": [
     {
      "item": "FLAPS",
      "val": "___,GREEN LIGHT",
      "who": "L"
     },
     {
      "item": "STABILIZER TRIM",
      "val": "___UNITS",
      "who": "L"
     },
     {
      "item": "CABIN",
      "val": "SECURED",
      "who": "L"
     },
     {
      "item": "TRANSPONDER",
      "val": "ON, SET, TA/RA",
      "who": "R"
     },
     {
      "item": "WEATHER RADAR/TERRAIN",
      "val": "ON",
      "who": "L R"
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
