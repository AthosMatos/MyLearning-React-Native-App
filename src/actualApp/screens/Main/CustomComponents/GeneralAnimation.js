import { InAnimation as HB_ToogleAnimation } from "./Animated_HistoricButton";
import { InAnimation as CC_ToogleAnimation } from "./Animated_ChooseCoinButton"; 
import { InAnimation as PB_ToogleAnimation } from "./Animated_PhotoButton"; 
import { InAnimation as CI_ToogleAnimation } from "./Animated_CenterImage"; 
import { InAnimation as IB_ToogleAnimation } from "./Animated_InfoButton"; 

export function ToogleInAll()
{
    HB_ToogleAnimation()
    CC_ToogleAnimation()
    PB_ToogleAnimation()
    CI_ToogleAnimation()
    IB_ToogleAnimation()
}
