import {GET_BARBER, SET_BARBER_CHANGES, SET_BARBER_UPDATE} from '../Actions/types';

const init = [
    {id:'1',
        name: 'Lionlockx Hair',
        photo:require('../assets/LoinLockx/logo.jpg'),
       
        dislikes:0,
        score:0,
        photos: {
        NewCuts:[require('../assets/LoinLockx/foto1.jpg'),
        require('../assets/LoinLockx/foto2.jpg'),
        require('../assets/LoinLockx/foto4.jpg'),
        require('../assets/LoinLockx/foto5.jpg'),
        require('../assets/LoinLockx/foto6.jpg'),

    ],
        BestCuts:[require('../assets/LoinLockx/best1.jpg'),
        require('../assets/LoinLockx/best3.jpg'),
        require('../assets/LoinLockx/best4.jpg'),
        require('../assets/LoinLockx/best6.jpg'),
        require('../assets/LoinLockx/best7.jpg')],
        OldCuts:[ require('../assets/LoinLockx/other.jpg'),
        require('../assets/LoinLockx/other1.jpg'),
        require('../assets/LoinLockx/other2.jpg'),
        require('../assets/LoinLockx/other4.jpg'),
        require('../assets/LoinLockx/other5.jpg'),
        require('../assets/LoinLockx/other6.jpg')]

    
},
                email:'',
                instagram:'https://www.instagram.com/lionlox/',
                rating:4,
                facebook:'https://www.facebook.com/LIONLOCKX',
                signInTimes:0,
                firstTimeLoggedIn:'',
                lastTimeLoggedIn:'',
                likes:0,
                barbers:3,
                flex:1,
                IsFavorite: 0,
                appointment: Date,
                followers: 0,
                address: "Warmoesberg 26, 1000 Brussel",
                coordinates: [
                                4.356506,
                                50.849019
                            ]},
                {
                            id:'2',
                            name: 'De Wakko Kapper',
                            photo:require('../assets/DeWakkoKapper/logo.png'),
                            likes:0,
                            dislikes:0,
                            clickedd:false,
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
                                    require('../assets/DeWakkoKapper/foto10.jpg')
                                ],
                                    BestCuts:[require('../assets/DeWakkoKapper/m1.jpg'),
                                    require('../assets/DeWakkoKapper/m2.jpg'),
                                    require('../assets/DeWakkoKapper/m3.jpg'),
                                    require('../assets/DeWakkoKapper/m5.jpg'),
                                    require('../assets/DeWakkoKapper/m6.jpg'),
                                    require('../assets/DeWakkoKapper/m7.jpg'),
                                    require('../assets/DeWakkoKapper/m8.jpg'),
                                    require('../assets/DeWakkoKapper/m9.jpg'),
                                    require('../assets/DeWakkoKapper/m10.jpg'),
                                    require('../assets/DeWakkoKapper/m11.jpg')],
                                    OldCuts:[ require('../assets/DeWakkoKapper/v1.jpg'),
                                    require('../assets/DeWakkoKapper/v2.jpg'),
                                    require('../assets/DeWakkoKapper/v3.jpg'),
                                    require('../assets/DeWakkoKapper/v4.jpg'),
                                    require('../assets/DeWakkoKapper/v5.jpg'),
                                    require('../assets/DeWakkoKapper/v6.jpg'),
                                    require('../assets/DeWakkoKapper/v7.jpg'),
                                    require('../assets/DeWakkoKapper/v8.jpg'),
                                    require('../assets/DeWakkoKapper/v9.jpg'),
                                    require('../assets/DeWakkoKapper/v10.jpg'),
                                    require('../assets/DeWakkoKapper/v12.jpg'),
                                ]
                        
                                
                            },
                            email:'',
                            instagram:'https://www.instagram.com/explore/locations/1019076878/de-wakko-kapper?hl=nl',
                            rating:3,
                            facebook:'https://www.facebook.com/dewakkokapper/',
                            signInTimes:0,
                            firstTimeLoggedIn:'',
                            barbers:4,
                            followers: 9,
                            flex:2,
                            lastTimeLoggedIn:'',
                            IsFavorite: 0,
                            appointment: Date,
                            phone : "0250305970",
                            city:"Brussels",
                            address: "Dinantplein 1, 1000 Brussel",
                            coordinates: [
                                            4.357910,
                                            50.854431
                                        ]
                        },
            { id:'3',
            name: 'H&L Coiffure',
            photo:require('../assets/henl/logo.png'),
            clickedh:false,
            score:0,
            photos: {
                    NewCuts:[require('../assets/henl/foto1.jpg'),
                    require('../assets/henl/foto2.jpg'),
                    require('../assets/henl/foto3.jpg'),
                    require('../assets/henl/foto4.jpg'),
                    require('../assets/henl/foto5.jpg'),
                    require('../assets/henl/foto6.jpg'),
                ],
                    BestCuts:[require('../assets/henl/b1.jpg'),
                    require('../assets/henl/b2.jpg'),
                    require('../assets/henl/b3.jpg'),
                    require('../assets/henl/b4.jpg'),
                    require('../assets/henl/b5.jpg'),
                    require('../assets/henl/b6.jpg')],
                    OldCuts:[ require('../assets/henl/c1.jpg'),
                    require('../assets/henl/c2.jpg'),
                    require('../assets/henl/c3.jpg'),
                    require('../assets/henl/c4.jpg'),
                    require('../assets/henl/c5.jpg'),
                    require('../assets/henl/c6.jpg'),
                    require('../assets/henl/c7.jpg'),]

                
            },
            email:'',
            instagram:'https://www.instagram.com/explore/locations/1019076878/de-wakko-kapper?hl=nl',
            rating:2,
            facebook:'https://www.facebook.com/hlcoiffure/',
            signInTimes:0,
            firstTimeLoggedIn:'',
            followers: 4,
            lastTimeLoggedIn:'',
            likes:0,
            dislikes:0,
            barbers:2,
            flex:2,
            IsFavorite: 0,
            appointment: Date,
            phone : "025030597",
            city: "Brussel",

            address: "Nieuwstraat 123, 1000 Brussel",
            coordinates: [
                            4.346790,
                            50.847810
                        ]}
                
                    ]

export default function(state = init, action){

    switch(action.type){
        case GET_BARBER:
        return{
            ...state
        }
        case SET_BARBER_CHANGES:
        return Object.assign({}, state, {
            photo: state.profilePhoto,
            name: state.name,
            // clicked:state.a.clicked,
            
          })
            case SET_BARBER_UPDATE:
                {
                console.log('het is geupdate');
                const index = state.findIndex(t => t.id === action.payload);
                console.log(state);
                return [
                    ...state.slice(0, index), // everything before current post
                    {
                       ...state[index],
                       clicked: action.type === 'PUBLISH_POST' ? 1 : 0,
                    },
                    ...state.slice(index + 1), // everything after current post
                 ]
        }
        default:
        return state;

    }
}