const initState = {
    cities: [
        { id: 1, city: 'Karachi' },
        { id: 2, city: 'Lahore' },
        { id: 3, city: 'Pishawar' },
        { id: 4, city: 'Islamabad' },
        { id: 5, city: 'Quetta' },

    ],
    brands: [
        { id: 1, city: 'Samsung' },
        { id: 2, city: 'LG' },
        { id: 3, city: 'QMobile' },
        { id: 4, city: 'Motorola' },
        { id: 5, city: 'Nokia' },
        { id: 6, city: 'Huwei' },
        { id: 7, city: 'HTC' },
        { id: 8, city: 'Oppo' },
        { id: 9, city: 'Sony' },
        { id: 10, city: 'Vivo' },
        { id: 11, city: 'Apple' },
        { id: 12, city: 'infinix' },
    ],
    mobileNames:[
        {id:1,brandId:1,brandName:'Samsung',name:'Galaxy Note 20 Ultra'}
    ],
    
    mobiles:[
        {id:1,
        images:[{id:1,image:'',mobileId:1},{id:2,image:'',mobileId:1},{id:3,image:'',mobileId:1},{id:4,image:'',mobileId:1}],
        nameId:1,
        name:{id:1,brandId:1,brandName:'Samsung',name:'Galaxy Note 20 Ultra'},
        description:"5G 128GB",
        type:"Mystic Bronze (Verizon)",
        Model:'SM-6422215',
        rating:'4.7',
        price:19200,
        reviews:[{id:1,mobileId:1,review:'Good',stars:4.5},{id:2,mobileId:1,review:'Good',stars:5}],
        colors:[{id:1,mobileId:1,colorCode:'black'},{id:1,mobileId:1,color:'yellow'},{id:1,mobileId:1,color:'green'},{id:1,mobileId:1,color:'blue'}],
     }
    ],
    total: 0

}
const mobiloReducer = (state = initState, action) => {

    return state;

}
export default mobiloReducer;