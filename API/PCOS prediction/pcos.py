# -*- coding: utf-8 -*-

from pydantic import BaseModel
# 2. Class which describes Bank Notes measurements
class PCOS(BaseModel):
    Age: int 
    Weight: float 
    Height: float 
    Cycle: int
    Cyclelength: float
    Fsh: float
    Lh: float
    Frl: float
    Tsh: float
    Amh: float
    Rbs: float
    Weightgain: int
    Hairgrowth: int
    Skindarkening: int
    Hairloss: int
    Pimples: int
    Fastfood: float
    Regexercise: int
    FollicleR: int
    FolliclL: int