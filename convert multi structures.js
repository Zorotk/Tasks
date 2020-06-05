function citySort() {
    let data = [
        {
            country: 'Россия',
            city: 'Москва',
        },
        {
            country: 'Беларусь',
            city: 'Минск',
        },
        {
            country: 'Россия',
            city: 'Питер',
        },
        {
            country: 'Россия',
            city: 'Владивосток',
        },
        {
            country: 'Украина',
            city: 'Львов',
        },
        {
            country: 'Беларусь',
            city: 'Могилев',
        },
        {
            country: 'Украина',
            city: 'Киев',
        },
    ]
    let res={}
    for (let elem of data) {
       if (res[elem.country]===undefined) {res[elem.country]=[]}
        res[elem.country].push(elem.city)
}
  
return res
}
const res=citySort()
// console.log(res)



const date=()=>{
    let events = [
        {
            date:  '2019-12-29',
            event: 'name1'
        },
        {
            date:  '2019-12-31',
            event: 'name2'
        },
        {
            date:  '2019-12-29',
            event: 'name3'
        },
        {
            date:  '2019-12-30',
            event: 'name4'
        },
        {
            date:  '2019-12-29',
            event: 'name5'
        },
        {
            date:  '2019-12-31',
            event: 'name6'
        },
        {
            date:  '2019-12-29',
            event: 'name7'
        },
        {
            date:  '2019-12-30',
            event: 'name8'
        },
        {
            date:  '2019-12-30',
            event: 'name9'
        },
    ]
    let result={}
    for (let eventt of events){
        if (result[eventt.date]===undefined)result[eventt.date]=[]

        result[eventt.date].push(eventt.event)
    }
   // console.log(result)
}

date()

const dates=()=>{
    let events = {
        '2019-12-29': ['name1', 'name3', 'name5', 'name7'],
        '2019-12-30': ['name4', 'name8', 'name9'],
        '2019-12-31': ['name2', 'name6'],
    }
// let res={}
// for (let key in events){
//     if (res[key]===undefined){res[key]={}}
//     if (events[key]!==undefined){events[key]={}}
//     res[key]=events[key]
// }
//
//
//     console.log(res)
let res=[]
    for (let key in events){
        for (let elem of events[key]){res.push({data:key,enentt:elem})

    }
    // console.log(res)
}}
dates()

const datesframe=()=>{
    let affairs = {
        '2018-11-29': ['массив данных'],
        '2018-11-30': ['массив данных'],
        '2018-12-30': ['массив данных'],
        '2018-12-31': ['массив данных'],

        '2019-12-29': ['массив данных'],
        '2019-12-30': ['массив данных'],
        '2019-11-31': ['массив данных'],
        '2019-12-31': ['массив данных'],
    }
    let result = {};

    for (let key in affairs) {
        let date = key.split('-');

        let year  = date[0];
        let month = date[1];
        let day   = date[2];

        if (result[year] == undefined) {
            result[year] = {};
        }
        if (result[year][month] == undefined) {
            result[year][month] = {};
        }

        result[year][month][day] = affairs[key];
    }

    // console.log(result);
}
datesframe()

const data = () => {
    let events = [
        {
            date: '2019-12',
            event: 'name1'
        },
        {
            date: '2019-12',
            event: 'name2'
        },
        {
            date: '2019-11',
            event: 'name3'
        },
        {
            date: '2019-11',
            event: 'name4'
        },
        {
            date: '2020-10',
            event: 'name5'
        },

        {
            date: '2020-12',
            event: 'name9'
        },
    ]

    let res={}
for (let even of events){

    let time=even.date.split('-')
    let year=time[0]
    let month=time[1]

if (res[year]===undefined){res[year]={}}
if(res[year][month]===undefined){res[year][month]=[]}
res[year][month].push(even.event)

    // for (let value in even){console.log(value)}

}
    // console.log(res)
};
data()



const trener=()=>{
    let data = [
        {
            year:  2019,
            month: 11,
            day: 20,
            data: ['массив с данными']
        },
        {
            year:  2019,
            month: 11,
            day: 21,
            data: ['массив с данными']
        },
        {
            year:  2019,
            month: 12,
            day: 25,
            data: ['массив с данными']
        },
        {
            year:  2019,
            month: 12,
            day: 26,
            data: ['массив с данными']
        },
        {
            year:  2020,
            month: 10,
            day: 29,
            data: ['массив с данными']
        },
        {
            year:  2020,
            month: 10,
            day: 30,
            data: ['массив с данными']
        },
        {
            year:  2020,
            month: 11,
            day: 19,
            data: ['массив с данными']
        },
        {
            year:  2020,
            month: 11,
            day: 20,
            data: ['массив с данными']
        }
]

    let ress={}
    for (let elem of data){
       let[year,month,day]=[elem.year,elem.month,elem.day]
if (ress[year]===undefined){ress[year]={}}
if (ress[year][month]===undefined){ress[year][month]={}}
        if (ress[year][month][day]===undefined){ress[year][month][day]=[]}
        ress[year][month][day].push(elem.data)
        }
    console.log(ress)
    console.log(Math.sqrt(16))
    let arr = [4, 2, 5, 19, 13, 0, 10];
    let sum = 0;

    for (let i = 0; i <arr.length; i++) {
        sum += Math.pow(arr[i], 2);
    }

    console.log(Math.sqrt(sum))

    let num = Math.sqrt(379);
    console.log(Math.round(num));
    console.log(num.toFixed(1));
    console.log(num.toFixed(2));


}

trener()

