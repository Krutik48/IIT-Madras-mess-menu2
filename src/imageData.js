import alooMatar from './assets/aloo-matar.jpg'
import alooPuri from './assets/aloo-puri.jpg'
import bananaSabji from './assets/banana-sabji.jpeg'
import bhindiDoPyaza from './assets/bhindi-do-pyaza.jpg'
import bottleGuard from './assets/bottle-guard.jpg'
import choleBhatura from './assets/chole-bhatura.jpg'
import cholePuri from './assets/chole-puri.jpg'
import dalCheela from './assets/dal-Cheela.jpg'
import gobiManchurian from './assets/gobi-manchurian.jpg'
import greenBean from './assets/green-bean-carrot.jpg'
import idli from './assets/idli.jpg'
import kachori from './assets/kachori.jpeg'
import kadai from './assets/kadai-paneer.jpg'
import karela from './assets/karela-sabzi.jpg'
import kolhapuri from './assets/kolhapuri.jpg'
import lassi from './assets/lassi.jpeg'
import macroni from './assets/macroni.jpeg'
import maggi from './assets/maggi.jpg'
import masalaPaneer from './assets/masalaPaneer.jpg'
import mixVeg from './assets/mix-veg.jpg'
import partha from './assets/mixed-paratha.jpg'
import mutter from './assets/mutter_paneer.jpg'
import palak from './assets/palak-paneer.jpg'
import paneerButter from './assets/paneer-butter.jpg'
import pavBhaji from './assets/pav-bhaji.jpeg'
import dosa from './assets/Plain-Dosa.jpg'
import poha from './assets/poha.jpg'
import pongalVada from './assets/pongalVada.jpg'
import pumpChana from './assets/pumpkin-chana.jpg'
import ravaKichadi from './assets/rava-Kichadi.jpg'
import uttapam from './assets/uttapam.jpg'
import southRice from './assets/south-rice.jpg'
import tomatoRice from './assets/tomatoRice.jpg'
import upma from './assets/upma.jpg'
import bournvita from './assets/bournvita-milk.jpg'

const data = {
    north_menu_odd: 
    {Sunday:{
        bf:[partha],
        lunch:[mutter],
        dinner:[choleBhatura],
      },
      Monday:{
        bf:[ravaKichadi],
        lunch:[greenBean],
        dinner:[gobiManchurian],
      },
      Tuesday:{
        bf:[poha],
        lunch:[karela],
        dinner:[bhindiDoPyaza],     
      },
      Wednesday:{
        bf:[uttapam],
        lunch:[kadai],
        dinner:[partha],  
      },
      Thursday:{
        bf:[macroni],
        lunch:[pumpChana],
        dinner:[mixVeg],     
      },
      Friday:{
        bf:[idli],
        lunch:[palak],
        dinner:[bananaSabji],
      },
      Saturday:{
        bf:[dosa],
        lunch:[bhindiDoPyaza],
        dinner:[bournvita],
      }
    },
    north_menu_even :
      {Sunday:{
        bf:[partha],
        lunch:[paneerButter],
        dinner:[bhindiDoPyaza],
      },
      Monday:{
        bf:[dalCheela],
        lunch:[bananaSabji],
        dinner:[mixVeg],
      },
      Tuesday:{
        bf:[poha],
        lunch:[lassi],
        dinner:[mutter],     
      },
      Wednesday:{
        bf:[maggi],
        lunch:[palak],
        dinner:[partha],  
      },
      Thursday:{
        bf:[pavBhaji],
        lunch:[bhindiDoPyaza],
        dinner:[kolhapuri],     
      },
      Friday:{
        bf:[kachori],
        lunch:[alooMatar],
        dinner:[bananaSabji],
      },
      Saturday:{
        bf:[cholePuri],
        lunch:[pumpChana],
        dinner:[bournvita],
      }
    },
    south_menu_odd:
      {Sunday:{
        bf:[dosa],
        lunch:[kadai],
        dinner:[bananaSabji],
      },
      Monday:{
        bf:[idli],
        lunch:[],
        dinner:[partha],
      },
      Tuesday:{
        bf:[ravaKichadi],
        lunch:[],
        dinner:[tomatoRice],     
      },
      Wednesday:{
        bf:[uttapam],
        lunch:[greenBean],
        dinner:[dosa],  
      },
      Thursday:{
        bf:[upma],
        lunch:[bhindiDoPyaza],
        dinner:[gobiManchurian],     
      },
      Friday:{
        bf:[pongalVada],
        lunch:[masalaPaneer],
        dinner:[uttapam],
      },
      Saturday:{
        bf:[alooPuri],
        lunch:[bottleGuard],
        dinner:[southRice],
      }
    },
    south_menu_even:
      {Sunday:{
        bf:[poha],
        lunch:[paneerButter],
        dinner:[choleBhatura],
      },
      Monday:{
        bf:[idli],
        lunch:[],
        dinner:[],
      },
      Tuesday:{
        bf:[dosa],
        lunch:[],
        dinner:[mutter],     
      },
      Wednesday:{
        bf:[maggi],
        lunch:[],
        dinner:[],  
      },
      Thursday:{
        bf:[idli],
        lunch:[],
        dinner:[],     
      },
      Friday:{
        bf:[alooPuri],
        lunch:[bhindiDoPyaza],
        dinner:[dosa],
      },
      Saturday:{
        bf:[],
        lunch:[],
        dinner:[tomatoRice],
      }
    },
};



export default data;