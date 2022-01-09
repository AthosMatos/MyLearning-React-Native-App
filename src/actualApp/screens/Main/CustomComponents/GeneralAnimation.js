import { InAnimation as HB_ToogleAnimation } from "./Animated_HistoricButtom";
import { InAnimation as CC_ToogleAnimation } from "./Animated_ChooseCoinButtom"; 
import { InAnimation as PB_ToogleAnimation } from "./Animated_PhotoButtom"; 
import { InAnimation as CI_ToogleAnimation } from "./Animated_CenterImage"; 
import { InAnimation as IB_ToogleAnimation } from "./Animated_InfoButtom"; 

export function ToogleInAll()
{
    HB_ToogleAnimation()
    CC_ToogleAnimation()
    PB_ToogleAnimation()
    CI_ToogleAnimation()
    IB_ToogleAnimation()
}