import React from 'react'
import nxt from '../Pic/nxt.png'
import pre from '../Pic/pre.png'

const CriticallyAcclaimedTitles = () => {
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
    {
      id: '7',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1208/1431208-v-895cd0d6b37f",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '6',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1208/1431208-v-895cd0d6b37f",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '6',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1208/1431208-v-895cd0d6b37f",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '6',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1208/1431208-v-895cd0d6b37f",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '6',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1208/1431208-v-895cd0d6b37f",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },
    {
      id: '6',
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1208/1431208-v-895cd0d6b37f",
      title: "Jagamemaya: Instant Karma",
      des: "A conman tricks a grieving widow into marriage to make instant cash. However, his life turns upside  ..."
    },


  ]

  function Next() {
    let box = document.querySelector("#Critically_Acclaimed")
    let width = box.clientWidth
    box.scrollLeft = box.scrollLeft + width;
  }
  function Pre() {
    let box = document.querySelector("#Critically_Acclaimed")
    let width = box.clientWidth
    box.scrollLeft = box.scrollLeft - width;
  }

  return (
    <div>
      <h1 className="title">Critically Acclaimed Titles</h1>
      <div className="movies-list">
        <button className="pre-btn" onClick={Pre}><img src={pre} alt="" /></button>
        <button className="nxt-btn" onClick={Next}><img src={nxt} alt="" /></button>
        <div className="card-container" id='Critically_Acclaimed'>
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

export default CriticallyAcclaimedTitles