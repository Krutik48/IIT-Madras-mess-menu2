import alooMatar from './assets/aloo-matar.jpg'
import alooPuri from './assets/aloo-puri.jpg'
import alooBaigan from './assets/aloo-baigan.jpg'
import alooParwar from './assets/aloo-parwar.jpg'
import alooDum from './assets/aloo-dum.jpg'
import alooBeans from './assets/aloo-beans.jpg'
import alooGobi from './assets/aloo-gobi.jpg'
import aloo65 from './assets/Aloo-65.jpg'
import bananaSabji from './assets/banana-sabji.jpeg'
import bhindiDoPyaza from './assets/bhindi-do-pyaza.jpg'
import bottleGuard from './assets/bottle-guard.jpg'
import brinjalFry from './assets/brinjal-fry.jpg'
import choleBhatura from './assets/chole-bhatura.jpg'
import cholePuri from './assets/chole-puri.jpg'
import dalCheela from './assets/dal-Cheela.jpg'
import dalia from './assets/dalia.jpg'
import gobiManchurian from './assets/gobi-manchurian.jpg'
import greenBean from './assets/green-bean-carrot.jpg'
import idli from './assets/idli.jpg'
import kachori from './assets/kachori.jpeg'
import kalaChaana from './assets/kala-chana.jpg'
import karela from './assets/karela-sabzi.jpg'
import kalDosa from './assets/kal-dosa.jpg'
// import kolhapuri from './assets/kolhapuri.jpg'
import kadhiPakoda from './assets/kadhi-Pakora.jpg'
import khichdi from './assets/khichdi.jpg'

import vegKofta from './assets/veg-kofta.jpg'
import vegKurma from './assets/veg-kurma.jpg'
import vadaKeerai from './assets/keerai-vadai.jpg'
// import lassi from './assets/lassi.jpeg'
import rajma from './assets/rajma.jpg'
// import macroni from './assets/macroni.jpeg'
import maggi from './assets/maggi.jpg'
// import mashroomPeasMasala from './assets/Mushroom-Peas-Masala.jpg'
import methiPuri from './assets/methi-puri.jpg'
import mixVeg from './assets/mix-veg.jpg'
import mutter from './assets/mutter_paneer.jpg'
import malaiKofta from './assets/malai-kofta.jpg'

import partha from './assets/mixed-paratha.jpg'

import paneerButter from './assets/paneer-butter.jpg'
import paneerBhurji from './assets/paneer-bhurji.jpg'
import paneerShahi from './assets/shahi-paneer.jpg'
import paneerKadai from './assets/Kadai-Paneer.jpg'
import paneerPalak from './assets/palak-paneer.jpg'
import paneerMasala from './assets/masalaPaneer.jpg'
import pavBhaji from './assets/pav-bhaji.jpeg'
import potetoChips from './assets/poteto-chips.jpg'

import dosa from './assets/Plain-Dosa.jpg'
import dosaRava from './assets/rava-dosa.jpeg'
import dosaMillet from './assets/millet-dosa.jpg'
import dosaGodi from './assets/godi-dosa.jpg'

import poha from './assets/poha.jpg'
// import pongalVada from './assets/pongalVada.jpg'
// import pumpChana from './assets/pumpkin-chana.jpg'
// import ravaKichadi from './assets/rava-Kichadi.jpg'
import uttapam from './assets/uttapam.jpg'
// import southRice from './assets/south-rice.jpg'
import semiyaUpma from './assets/semiya-upma.jpeg'
import soyaChunk from './assets/soya-chunk.jpeg'
import soyabeanCurry from './assets/soyabean-curry.jpg'
import sabudanaKhichdi from './assets/sabudana-khichdi.jpg'
// import tomatoRice from './assets/tomatoRice.jpg'
import upma from './assets/upma.jpg'
// import bournvita from './assets/bournvita-milk.jpg'
import tindyFry from './assets/tindy-fry.jpg'


// non-veg
import chickenPepper from './assets/chicken-pepper.jpg'
import chickenButter from './assets/butter-chicken.jpeg'
import chickenPunjabi from './assets/punjabi-chicken-curry.jpg'
import chickenKadai from './assets/kadai-chicken-cury.jpeg'
import chickenTicka from './assets/chicken-tikka-masala.jpg'
import chickenAndhra from './assets/andhra-chicken-curry.jpeg'
import chickenAwadhi from './assets/awadhi-chicken-biryani.jpg'
import chickenHyderabadi from './assets/hyderabadi-chicken-biryani.jpg'

import eggBoiledMasala from './assets/boiled-egg-masala.jpg'
import eggBhurji from './assets/egg-bhurji.jpg'
import eggMughlai from './assets/egg-mughlai.jpg'

const data = {
  veg:{
    north_menu_odd: 
    {Sunday:{
        bf:[choleBhatura],
        lunch:[paneerButter],
        dinner:[bhindiDoPyaza],
      },
      Monday:{
        bf:[dalia],
        lunch:[cholePuri],
        dinner:[malaiKofta],
      },
      Tuesday:{
        bf:[upma],
        lunch:[bhindiDoPyaza],
        dinner:[gobiManchurian],     
      },
      Wednesday:{
        bf:[alooDum],
        lunch:[soyabeanCurry],
        dinner:[paneerKadai],  
      },
      Thursday:{
        bf:[pavBhaji],
        lunch:[karela],
        dinner:[soyaChunk],     
      },
      Friday:{
        bf:[partha],
        lunch:[mixVeg],
        dinner:[methiPuri],
      },
      Saturday:{
        bf:[sabudanaKhichdi],
        lunch:[vegKurma],
        dinner:[potetoChips],
      }
    },
    north_menu_even :
      {Sunday:{
        bf:[semiyaUpma],
        lunch:[paneerKadai],
        dinner:[rajma],
      },
      Monday:{
        bf:[kalDosa],
        lunch:[kadhiPakoda],
        dinner:[alooBaigan],
      },
      Tuesday:{
        bf:[maggi],
        lunch:[khichdi],
        dinner:[vegKofta],     
      },
      Wednesday:{
        bf:[idli],
        lunch:[alooParwar],
        dinner:[paneerShahi],  
      },
      Thursday:{
        bf:[dalCheela],
        lunch:[alooGobi],
        dinner:[kalaChaana],     
      },
      Friday:{
        bf:[uttapam],
        lunch:[paneerBhurji],
        dinner:[cholePuri],
      },
      Saturday:{
        bf:[poha],
        lunch:[alooBeans],
        dinner:[potetoChips],
      }
    },
    south_menu_odd:
      {Sunday:{
        bf:[dosaMillet],
        lunch:[paneerKadai],
        dinner:[partha],
      },
      Monday:{
        bf:[dosaRava],
        lunch:[bananaSabji],
        dinner:[],
      },
      Tuesday:{
        bf:[khichdi],
        lunch:[bhindiDoPyaza],
        dinner:[vegKurma],     
      },
      Wednesday:{
        bf:[idli],
        lunch:[aloo65],
        dinner:[paneerPalak],  
      },
      Thursday:{
        bf:[uttapam],
        lunch:[tindyFry],
        dinner:[],     
      },
      Friday:{
        bf:[dosa],
        lunch:[bottleGuard],
        dinner:[idli],
      },
      Saturday:{
        bf:[alooPuri],
        lunch:[vadaKeerai],
        dinner:[khichdi],
      }
    },
    south_menu_even:
      {Sunday:{
        bf:[dosaMillet],
        lunch:[paneerButter],
        dinner:[dosaGodi],
      },
      Monday:{
        bf:[semiyaUpma],
        lunch:[greenBean],
        dinner:[alooMatar],
      },
      Tuesday:{
        bf:[khichdi],
        lunch:[bhindiDoPyaza],
        dinner:[choleBhatura],     
      },
      Wednesday:{
        bf:[idli],
        lunch:[bottleGuard],
        dinner:[paneerMasala],  
      },
      Thursday:{
        bf:[upma],
        lunch:[brinjalFry],
        dinner:[],     
      },
      Friday:{
        bf:[maggi],
        lunch:[mutter],
        dinner:[kalDosa],
      },
      Saturday:{
        bf:[alooPuri],
        lunch:[vadaKeerai],
        dinner:[potetoChips],
      }
    },
  },
  non_veg:{
    north_menu_odd: 
    {Sunday:{
        bf:[choleBhatura],
        lunch:[chickenButter],
        dinner:[bhindiDoPyaza],
      },
      Monday:{
        bf:[dalia],
        lunch:[eggBhurji],
        dinner:[malaiKofta],
      },
      Tuesday:{
        bf:[kachori],
        lunch:[bhindiDoPyaza],
        dinner:[gobiManchurian],     
      },
      Wednesday:{
        bf:[alooDum],
        lunch:[soyabeanCurry],
        dinner:[chickenTicka],  
      },
      Thursday:{
        bf:[pavBhaji],
        lunch:[karela],
        dinner:[eggMughlai],     
      },
      Friday:{
        bf:[partha],
        lunch:[mixVeg],
        dinner:[methiPuri],
      },
      Saturday:{
        bf:[sabudanaKhichdi],
        lunch:[vegKurma],
        dinner:[potetoChips],
      }
    },
    north_menu_even :
      {Sunday:{
        bf:[semiyaUpma],
        lunch:[chickenAwadhi],
        dinner:[rajma],
      },
      Monday:{
        bf:[kalDosa],
        lunch:[kadhiPakoda],
        dinner:[eggBhurji],
      },
      Tuesday:{
        bf:[upma],
        lunch:[khichdi],
        dinner:[vegKofta],     
      },
      Wednesday:{
        bf:[idli],
        lunch:[alooParwar],
        dinner:[chickenPunjabi],  
      },
      Thursday:{
        bf:[dalCheela],
        lunch:[alooGobi],
        dinner:[eggMughlai],     
      },
      Friday:{
        bf:[uttapam],
        lunch:[paneerBhurji],
        dinner:[cholePuri],
      },
      Saturday:{
        bf:[partha],
        lunch:[alooBeans],
        dinner:[potetoChips],
      }
    },
    south_menu_odd:
      {Sunday:{
        bf:[dosaMillet],
        lunch:[chickenPepper],
        dinner:[partha],
      },
      Monday:{
        bf:[dosaRava],
        lunch:[bananaSabji],
        dinner:[eggBhurji],
      },
      Tuesday:{
        bf:[khichdi],
        lunch:[bhindiDoPyaza],
        dinner:[vegKurma],     
      },
      Wednesday:{
        bf:[idli],
        lunch:[aloo65],
        dinner:[chickenKadai],  
      },
      Thursday:{
        bf:[uttapam],
        lunch:[tindyFry],
        dinner:[eggMughlai],     
      },
      Friday:{
        bf:[dosa],
        lunch:[bottleGuard],
        dinner:[idli],
      },
      Saturday:{
        bf:[alooPuri],
        lunch:[vadaKeerai],
        dinner:[khichdi],
      }
    },
    south_menu_even:
      {Sunday:{
        bf:[dosaMillet],
        lunch:[chickenHyderabadi],
        dinner:[dosaGodi],
      },
      Monday:{
        bf:[semiyaUpma],
        lunch:[greenBean],
        dinner:[eggBhurji],
      },
      Tuesday:{
        bf:[khichdi],
        lunch:[bhindiDoPyaza],
        dinner:[choleBhatura],     
      },
      Wednesday:{
        bf:[idli],
        lunch:[bottleGuard],
        dinner:[chickenAndhra],  
      },
      Thursday:{
        bf:[upma],
        lunch:[brinjalFry],
        dinner:[eggBoiledMasala],     
      },
      Friday:{
        bf:[maggi],
        lunch:[mutter],
        dinner:[kalDosa],
      },
      Saturday:{
        bf:[alooPuri],
        lunch:[vadaKeerai],
        dinner:[potetoChips],
      }
    }
  }
};



export default data;