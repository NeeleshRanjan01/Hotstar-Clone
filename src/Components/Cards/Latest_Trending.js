import React from 'react'
import nxt from '../Pic/nxt.png'
import pre from '../Pic/pre.png'

const LatestTrending = () => {
  let content = [
    {
      id: '1',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8254/1448254-v-423c38530432",
      title: "Mukundan Unni",
      des: "Fired from a law firm for unethical conduct, Adv Mukundan Unni leaves no stone unturned to achieve s ..."
    },
    {
      id: '2',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5421/1445421-v-06772ee1734c",
      title: "Taaza Khabar",
      des: "A public toilet caretaker's poverty-stricken life takes a drastic U-turn when he helps an old woman. ..."
    },
    {
      id: '3',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2085/1442085-v-58369d6a5507",
      title: "Aar Ya Paar",
      des: "When the modern world's greed destroys his idyllic tribal existence, a valiant archer becomes a dead ..."
    },
    {
      id: '4',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6479/1436479-v-3bd70e9e2b4d",
      title: "Jaya Jaya Jaya Jaya Hey",
      des: "Being brought up in a conservative family, Jaya feels even more trapped when she marries Rajesh, a m ..."
    },
    {
      id: '5',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4787/1434787-v-b89e30762633",
      title: "Govinda Naam Mera",
      des: "Wedged between a court case, a bad marriage and his girlfriend, Govinda Waghmare gets further entang ..."
    },
    {
      id: '6',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1208/1431208-v-895cd0d6b37f",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    //-----------------------------
    {
      id: '7',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9477/1429477-v-4c6f37f48b10",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '8',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5613/1425613-v-75e4bceee4f9",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '9',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/201/1430201-v-d944e68600f8",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '10',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3854/1423854-v-a109668f45a7",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '11',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4856/1414856-v-fa398217196a",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '12',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/103/1410103-v-86e3d98722e8",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '13',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5052/1405052-v-2063bab41935",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '14',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7869/1397869-v-f1300120c358",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '15',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9264/1319264-v-0bd71e83df13",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '16',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1965/1441965-v-6561f230c549",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '17',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8032/1438032-v-5a44525bb93c",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '18',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3127/1423127-v-9c837eecddf9",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '19',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5362/1395362-v-f8d73be7dd01",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '20',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4373/1424373-v-7dacea8213be",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '21',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5445/1415445-v-2d82ec077644",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '22',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7787/1447787-v-530c0171f760",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },


  ]
  

  function Next() {
    let box = document.querySelector("#Latest_Trending")
    let width = box.clientWidth
    box.scrollLeft = box.scrollLeft + width;
  }
  function Pre() {
    let box = document.querySelector("#Latest_Trending")
    let width = box.clientWidth
    box.scrollLeft = box.scrollLeft - width;
  }

  return (
    <div>
      <h1 className="title">Latest & Trending</h1>
      <div className="movies-list">
        <button className="pre-btn" onClick={Pre}><img src={pre} alt="" /></button>
        <button className="nxt-btn" onClick={Next}><img src={nxt} alt="" /></button>
        <div className="card-container" id='Latest_Trending'>
          {
            content.map((data) => {
              return (
                <div className="card">
                  <img src={data.img} className="card-img" alt="" />
                  <div className="card-body">
                    <h2 className="name">{data.title}</h2>
                    <h6 className="des">{data.des}</h6>
                    <button className="watchlist-btn">add to watchlist</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default LatestTrending