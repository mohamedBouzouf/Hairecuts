import {GET_BARBER,SET_BARBER_CHANGES} from '../Actions/types';

const init = {
    "Lionlockx": {id:'1',
name: 'Lionlockx Hair Studios',
photo:require('../assets/LoinLockx/logo.jpg'),
likes:0,
dislikes:0,
score:0,
photos: {
        NewCuts:[require('../assets/LoinLockx/foto1.jpg'),
        require('../assets/LoinLockx/foto2.jpg'),
        require('../assets/LoinLockx/foto4.jpg')
    ],
        BestCuts:[require('../assets/LoinLockx/best1.jpg'),
        require('../assets/LoinLockx/best3.jpg'),
        require('../assets/LoinLockx/best4.jpg')],
        OldCuts:[ require('../assets/LoinLockx/other.jpg'),
        require('../assets/LoinLockx/other1.jpg')]

    
},
comments:[{
    id:'',
    title: '',
    text: '',
}],
email:'',
instagram:'https://www.instagram.com/lionlox/',
rating:4,
facebook:'https://www.facebook.com/LIONLOCKX',
signInTimes:0,
firstTimeLoggedIn:'',
lastTimeLoggedIn:'',
likes:0,
dislikes:0, 
IsFavorite: 0,
appointment: Date,
followers: 0,
address: "Dinantplein 1, 1000 Brussel",
coordinates: [
                  4.327910,
                  50.854421
              ]},
"DeWakkoKapper": {
                id:'2',
                name: 'De Wakko Kapper',
                photo:require('../assets/DeWakkoKapper/logo.png'),
                likes:0,
                dislikes:0,
                score:0,
                photos: {
                        NewCuts:[require('../assets/DeWakkoKapper/foto1.jpg'),
                        require('../assets/DeWakkoKapper/foto2.jpg'),
                        require('../assets/DeWakkoKapper/foto3.jpg'),
                        require('../assets/DeWakkoKapper/foto4.jpg'),
                        require('../assets/DeWakkoKapper/foto5.jpg'),
                        require('../assets/DeWakkoKapper/foto6.jpg'),
                        require('../assets/DeWakkoKapper/foto7.jpg'),
                        require('../assets/DeWakkoKapper/foto8.jpg'),
                        require('../assets/DeWakkoKapper/foto9.jpg'),
                        require('../assets/DeWakkoKapper/foto10.jpg')
                    ],
                        BestCuts:[require('../assets/DeWakkoKapper/m1.jpg'),
                        require('../assets/DeWakkoKapper/m2.jpg'),
                        require('../assets/DeWakkoKapper/m3.jpg'),
                        require('../assets/DeWakkoKapper/m4.jpg'),
                        require('../assets/DeWakkoKapper/m4.jpg'),
                        require('../assets/DeWakkoKapper/m4.jpg'),
                        require('../assets/DeWakkoKapper/m4.jpg'),],
                        OldCuts:[ require('../assets/LoinLockx/other.jpg'),
                        require('../assets/LoinLockx/other1.jpg')]
            
                    
                },
                comments:[{
                    id:'',
                    title: '',
                    text: '',
                }],
                email:'',
                instagram:'https://www.instagram.com/explore/locations/1019076878/de-wakko-kapper?hl=nl',
                rating:3,
                facebook:'https://www.facebook.com/dewakkokapper/',
                signInTimes:0,
                firstTimeLoggedIn:'',
                lastTimeLoggedIn:'',
                likes:0,
                dislikes:0, 
                IsFavorite: 0,
                appointment: Date,
                phone : "0250305970",
                followers: 0,
                address: "Dinantplein 1, 1000 Brussel",
                coordinates: [
                                  4.357910,
                                  50.854431
                              ]
              },
"henl":{ id:'3',
name: 'H&L Coiffure',
photo:require('../assets/LoinLockx/logo.jpg'),
likes:0,
dislikes:0,
score:0,
photos: {
        NewCuts:[require('../assets/LoinLockx/foto1.jpg'),
        require('../assets/LoinLockx/foto2.jpg'),
        require('../assets/LoinLockx/foto4.jpg')
    ],
        BestCuts:[require('../assets/LoinLockx/best1.jpg'),
        require('../assets/LoinLockx/best3.jpg'),
        require('../assets/LoinLockx/best4.jpg')],
        OldCuts:[ require('../assets/LoinLockx/other.jpg'),
        require('../assets/LoinLockx/other1.jpg')]

    
},
comments:[{
    id:'',
    title: '',
    text: '',
}],
email:'',
instagram:'https://www.instagram.com/explore/locations/1019076878/de-wakko-kapper?hl=nl',
rating:2,
facebook:'https://www.facebook.com/hlcoiffure/',
signInTimes:0,
firstTimeLoggedIn:'',
lastTimeLoggedIn:'',
likes:0,
dislikes:0, 
IsFavorite: 0,
appointment: Date,
phone : "02 503 05 97",
followers: 0,
address: "Nieuwstraat 123, 1000 Brussel",
coordinates: [
                  4.346790,
                  50.847810
              ]}
    
}

export default function(state = init, action){

    switch(action.type){
        case GET_BARBER:
        return{
            ...state
        }
        case SET_BARBER_CHANGES:
        return Object.assign({}, state, {
            photo: state.profilePhoto,
            name: state.name
          })
        default:
        return state;

    }
}